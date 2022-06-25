// ==UserScript==
// @name         Bstation Better Font
// @namespace    https://github.com/estaesta
// @include      http://*.bilibili.tv/*
// @include      https://*.bilibili.tv/*
// @include      http://*.biliintl.com/*
// @include      https://*.biliintl.com/*
// @version      0.4
// @description  Better font for bstation
// @author       ddPaud(estaesta)
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    .subtitle-item-text {
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
        font-size:95%;
        background: transparent !important;
    }
    .player-mobile .subtitle-position.subtitle-position-bc {
        bottom: 55px !important;
    }
` );
