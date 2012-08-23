[![build status](https://secure.travis-ci.org/azer/environ.png)](http://travis-ci.org/azer/environ)
Cross platform environment detection library for JavaScript. Tested platforms; Node, Firefox 4, Chrome 12, IE8

Install
=======
* npm install environ
* curl https://github.com/azer/environ/raw/master/lib/environ.js

Usage
=====
On Browsers:

    <script src="environ.js"></script>

    > environ()
    { chrome: true, dom: true, gecko: true, navigator: true, safari: true, v8: true, webkit: true }
    > environ.node()
    false
    > environ.dom()
    true
    > environ.v8()
    true
    > environ.webkit()
    true

On a CommonJS compliant platform:

    > var environ = require('environ');

    > environ()
    { linux: true, modules: true, node: true, v8: true }
    > environ.packages()
    true
    > environ.node()
    true
    > environ.dom()
    false
    > environ.v8()
    true
    > environ.webkit()
    false

Available Methods
=================
* dom
* chrome
* firefox
* gecko
* jsc
* ie
* ie6
* ie7
* ie8
* ie9
* ie10
* kindle
* linux
* modules
* navigator
* node
* mobile
* opera
* safari
* webkit
* v8

Testing
=======
* node test/node.js
* w3 test/browser.html
