// ==UserScript==
// @name         Resize Kagi Assistant to use full width
// @description  Implements changes requested by https://kagifeedback.org/d/4304-assistants-code-output-is-often-hard-to-follow-due-to-the-limited-width-of-the-assistants-output
// @author       freezingDaniel
// @namespace    http://tampermonkey.net/
// @version      2025-12-28
// @supportURL   https://github.com/freezingDaniel/Kagi-assistant-full-width/issues
// @match        https://kagi.com/assistant*
// @icon         https://kagi.com/favicon-assistant-32x32.png
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Get user's preferred max-width, default to 100%
    const maxWidth = GM_getValue('maxWidth', '100%');

    // Apply styles
    GM_addStyle(`.main-center-box > #chat_box { max-width: ${maxWidth} !important }`);
    GM_addStyle(`.main-center-box > #prompt-box { max-width: ${maxWidth} !important }`);

    // Add menu command to change settings
    GM_registerMenuCommand('Set Max Width', () => {
        const newWidth = prompt('Enter max width (e.g., 100%, 1200px, 80vw):', maxWidth);
        if (newWidth !== null && newWidth.trim() !== '') {
            GM_setValue('maxWidth', newWidth.trim());
            alert('Max width saved! Refresh the page to apply changes.');
        }
    });
})();
