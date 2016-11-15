// ==UserScript==
// @name         Golem: visited link color
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Ralf Vogler
// @match        http://*.golem.de/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('a:visited h2, a:visited h3 { color: gray !important }');
console.log('colored visited links');
