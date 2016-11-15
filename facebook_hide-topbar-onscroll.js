// ==UserScript==
// @name         Facebook: hide top bar when scrolling down
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        https://*.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('#pagelet_bluebar { position: absolute };');
    GM_addStyle('#globalContainer { margin-top: 43px };');
    let a = document.body.scrollTop;
    let s = document.getElementById("pagelet_bluebar");
    document.addEventListener("scroll", function(){
        let b = document.body.scrollTop;
        if(b<a){
            // console.log("scroll up");
            s.style.display = "";
        }else{
            // console.log("scroll down");
            if(b>50) s.style.display = "none";
        }
        a = document.body.scrollTop;
    }, {passive: true});
})();
