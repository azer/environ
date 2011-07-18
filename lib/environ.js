/*
 * environ.js
 * wtf public license
 */
var environ = (function(exports, undefined){

  function dom(){
    return typeof document != 'undefined' && document.documentElement != undefined; 
  }

  function jsc(){
    try { 
      throw new Error;
    } catch(exc){
      return typeof exc.sourceId == 'number';
    }
  }

  function linux(){
    return /linux/i.test(node() && process.platform || navigator.userAgent);
  }

  function navigator(){
    return typeof window != 'undefined' && window.navigator != undefined;
  }

  function newRegexTest(pattern,str){
    return function(){
      return pattern.test(str || ( navigator() && window.navigator.userAgent ));
    }
  }

  function node(){
    return !navigator() && typeof process == 'object' && process.EventEmitter != undefined;
  }

  function v8(){
    return node() || ( exports.webkit() && !jsc() );
  }

  return (exports = {
    'dom':dom,
    'chrome':newRegexTest(/chrome/i),
    'firefox':newRegexTest(/firefox/i),
    'gecko':newRegexTest(/gecko/i),
    'jsc':jsc,
    'kindle':newRegexTest(/Kindle/),
    'ie':newRegexTest(/msie/i),
    'linux':linux,
    'navigator':navigator,
    'node':node,
    'mobile':newRegexTest(/mobile/i),
    'opera':newRegexTest(/opera/i),
    'safari':newRegexTest(/safari/i),
    'webkit':newRegexTest(/webkit/i),
    'v8':v8
  });

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = environ;
}
