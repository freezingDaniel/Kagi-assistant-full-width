// ==UserScript==
// @name         Resize Kagi Assistant to use full width
// @description  Resize Kagi Assistant to use full width
// @author       freezingDaniel
// @namespace    http://tampermonkey.net/
// @version      2025-12-28
// @supportURL   https://github.com/freezingDaniel/Kagi-assistant-full-width/issues
// @match        https://kagi.com/assistant*
// @icon         https://kagi.com/favicon-assistant-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.main-center-box > #chat_box { max-width: 100% !important }');
GM_addStyle('.main-center-box > #prompt-box { max-width: 100% !important }');
