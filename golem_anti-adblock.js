// ==UserScript==
// @name         Golem: anti adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf
// @match        http://*.golem.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var target = document.getElementsByTagName('article')[0];
    // target.style = "";

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            console.log('article style changed!');
            observer.disconnect();
            target.style = "";
        });
    });

    observer.observe(target, { attributes : true, attributeFilter : ['style'] });
})();
