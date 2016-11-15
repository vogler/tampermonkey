// ==UserScript==
// @name         Facebook: dim seen posts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        https://*.facebook.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/lodash/4.17.0/lodash.min.js
// ==/UserScript==

(function() {
    'use strict';

    let v = 0.5;

    let ls = localStorage.seen ? JSON.parse(localStorage.seen) : [];
    function load(){
        let xs = document.querySelectorAll('[data-timestamp]');
        let id = x => x.dataset.dedupekey;
        let ids = _.map(xs, id);
        console.log(ids);

        let ns = ls.slice(); // copy, for new elements
        xs.forEach(function(x){
            if(x.style.opacity != v){
                if(ls.includes(id(x))){
                    x.style.opacity = v;
                }else if(x.offsetTop < document.body.scrollTop){
                    console.log("seen:", id(x));
                    ns.push(id(x));
                }
            }
        });
        localStorage.seen = JSON.stringify(ns);
    }

    let h = document.body.scrollHeight;
    document.addEventListener("scroll", function(){
        if(document.body.scrollHeight > h){
            h = document.body.scrollHeight;
            load();
        }
    }, {passive: true});
})();
