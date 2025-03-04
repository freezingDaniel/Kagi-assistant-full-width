// ==UserScript==
// @name         Resize Kagi Assistant to use full width
// @description  Resize Kagi Assistant to use full width
// @author       freezingDaniel
// @namespace    http://tampermonkey.net/
// @version      2025-03-04
// @supportURL   https://github.com/freezingDaniel/Kagi-assistant-full-width/issues
// @match        https://kagi.com/assistant*
// @icon         https://kagi.com/favicon-assistant-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

//GM_addStyle('.main-center-box > :first-child { width: calc(100% - 169px) !important }');
GM_addStyle('.main-center-box > :first-child { max-width: 100%; !important }');
