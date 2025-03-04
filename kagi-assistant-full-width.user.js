// ==UserScript==
// @name         Resize Kagi Assistant to use full width
// @namespace    http://tampermonkey.net/
// @version      2025-02-28
// @description  Resize Kagi Assistant to use full width
// @author       freezingDaniel
// @match        https://kagi.com/assistant*
// @icon         https://kagi.com/favicon-assistant-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

//GM_addStyle('.main-center-box > :first-child { width: calc(100% - 169px) !important }');
GM_addStyle('.main-center-box > :first-child { max-width: 100%; !important }');

//GM_addStyle('.main-center-box>* { margin-inline: auto; max-width: calc(100% - 169px); padding-inline: 16px;width: 100%; }');


//(function() {
//    'use strict';
//
//    // Deprecated - Old Assistant
//    //document.documentElement.style.setProperty('--center_content_width', "100%");
//
//    const elements = document.querySelectorAll('.main-center-box > :first-child');
//        elements.forEach(element => {
//            element.style.width = 'calc(100% - 169px)';
//        });
//})();
