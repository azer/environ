var environ = (function(undefined){

  function dom(){
    return typeof document != 'undefined' && document.documentElement != undefined; 
  }

  function detect(){
    var result = {};
    
    for(var key in environ){
      if(environ[key]()){
        result[key] = true;
      }
    }

    return result;
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

  function modules(){
    return typeof module !== 'undefined' && typeof module.exports !== 'undefined';
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
    return node() || ( detect.webkit() && !jsc() );
  }

  detect.dom = dom;
  detect.chrome = newRegexTest(/chrome/i);
  detect.firefox = newRegexTest(/firefox/i);
  detect.gecko = newRegexTest(/gecko/i);
  detect.jsc = jsc;
  detect.kindle = newRegexTest(/kindle/i);
  detect.ie = newRegexTest(/msie/i);
  detect.ie6 = newRegexTest(/msie 6/i);
  detect.ie7 = newRegexTest(/msie 7/i);
  detect.ie8 = newRegexTest(/msie 8/i);
  detect.ie9 = newRegexTest(/msie 9/i);
  detect.ie10 = newRegexTest(/msie 10/i);
  detect.linux = linux;
  detect.modules = modules;
  detect.navigator = navigator;
  detect.node = node;
  detect.mobile = newRegexTest(/mobile/i);
  detect.opera = newRegexTest(/opera/i);
  detect.safari = newRegexTest(/safari/i);
  detect.webkit = newRegexTest(/webkit/i);
  detect.v8 = v8;

  return detect;

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = environ;
}
