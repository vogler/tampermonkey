// ==UserScript==
// @name         Moodle auto login (2)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        https://tumidp.lrz.de/idp/Authn/UserPassword
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.getElementsByClassName("loginBtn")[0].click();
    }, 500);
})();
