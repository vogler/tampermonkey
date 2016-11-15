// ==UserScript==
// @name         Facebook: hide top bar when scrolling down
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        https://*.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let a = document.body.scrollTop;
    let s = document.getElementById("pagelet_bluebar").style;
    s.position = "absolute";
    document.getElementById("globalContainer").style.marginTop = "43px";
    document.addEventListener("scroll", function(){
        let b = document.body.scrollTop;
        if(b<a){
            // console.log("scroll up");
            s.display = "";
        }else{
            // console.log("scroll down");
            if(b>50) s.display = "none";
        }
        a = document.body.scrollTop;
    }, {passive: true});
})();
