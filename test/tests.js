if(typeof require!='undefined'){
  environ = require('../lib/environ'),
  assert = require('assert');
}

var node = typeof process != 'undefined' && process.EventEmitter != undefined,
    modules = node || (typeof module !== 'undefined' && module.exports),
    nav = typeof window != 'undefined' && window.navigator != undefined,
    linux = node ? process.platform == 'linux' : /linux/i.test(navigator.userAgent),
    osx = node ? process.platform == 'darwin' : /mac os x/i.test(navigator.userAgent);

function test_browsers(){
  assert.equal(environ.firefox(), nav && /firefox/i.test(navigator.userAgent));
  assert.equal(environ.safari(), nav && /safari/i.test(navigator.userAgent));
  assert.equal(environ.opera(), nav && /opera/i.test(navigator.userAgent));
  assert.equal(environ.mobile(), nav && /mobile/i.test(navigator.userAgent));
  assert.equal(environ.ie(), nav && /msie/i.test(navigator.userAgent));
}

function test_dom(){
  assert.equal(environ.dom(), nav && window.document && window.document.documentElement != undefined);
  assert.equal(environ.navigator(), nav);
}

function test_engines(){
  var jsc = false;
  try { err++ } catch(exc){ jsc = exc.sourceId != undefined; }
  assert.equal(environ.jsc(), jsc); 
  assert.equal(environ.v8(), node || ( environ.webkit() && !jsc ) );
  assert.equal(environ.gecko(), nav && /gecko/i.test(navigator.userAgent));
  assert.equal(environ.webkit(), nav && /webkit/i.test(navigator.userAgent));
}

function test_platform(){ 
  assert.equal(environ.node(), node);
  assert.equal(environ.modules(), modules);
  assert.equal(environ.linux(), linux);
  assert.equal(environ.osx(), osx);
}

var tests = {
  'test_browsers':test_browsers,
  'test_dom':test_dom,
  'test_engines':test_engines,
  'test_platform':test_platform
}

typeof module != 'undefined' && ( module.exports = tests );
