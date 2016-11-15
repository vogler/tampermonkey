// ==UserScript==
// @name         Moodle auto login (1)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        https://www.moodle.tum.de/login/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("icon-arrow-right")[0].click();
})();
