// ==UserScript==
// @name         Bstation Better Font
// @namespace    https://github.com/estaesta
// @include      http://*.bilibili.tv/*
// @include      https://*.bilibili.tv/*
// @include      http://*.biliintl.com/*
// @include      https://*.biliintl.com/*
// @version      0.3
// @description  Better font for bstation
// @author       ddPaud(estaesta)
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
    .subtitle-item-text {
        font-family: 'Roboto', sans-serif !important;
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
    font-size: 120%;
    background: transparent !important;
    }
    .player-mobile .subtitle-position.subtitle-position-bc {
        bottom: 50px !important;
    }
` );
