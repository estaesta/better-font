// ==UserScript==
// @name         Vidio Better Font
// @namespace    https://github.com/estaesta
// @version      0.2
// @description  Better font for vidio
// @author       ddPaud(estaesta)
// @match        https://www.vidio.com/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vidio.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    .video-js .vjs-text-track-display div div div {
        font-family: inherit !important;
        text-shadow: 1px 1px 1px #000,
            -1px 1px 1px #000,
            1px -1px 1px #000,
            -1px -1px 1px #000,
            0px 1px 1px #000,
            0px -1px 1px #000,
            -1px 0px 1px #000,
            1px 0px 1px #000,
            2px 2px 1px #000,
            -2px 2px 1px #000,
            2px -2px 1px #000,
            -2px -2px 1px #000,
            0px 2px 1px #000,
            0px -2px 1px #000,
            -2px 0px 1px #000,
            2px 0px 1px #000,
            1px 2px 1px #000,
            -1px 2px 1px #000,
            1px -2px 1px #000,
            -1px -2px 1px #000,
            2px 1px 1px #000,
            -2px 1px 1px #000,
            2px -1px 1px #000,
            -2px -1px 1px #000 !important;
    }
` );
