Cross platform environment detection library for JavaScript. Tested platforms; Node, Firefox 4, Chrome 12, IE8

Install
=======
* npm install environ
* curl https://github.com/azer/environ/raw/master/lib/environ.js

Usage
=====
On Browsers:

    <script src="environ.js"></script>

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
* kindle
* linux
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
