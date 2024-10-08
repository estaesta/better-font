// ==UserScript==
// @name        hianime better font
// @namespace   https://github.com/estaesta
// @include     https://hianime.to/watch/*
// @include     https://megacloud.tv/*
// @version     1.0
// @author      estaesta(ddpaud)
// @description Better font for hianime
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle ( `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,700;1,62.5..100,700&display=swap');
#megacloud-player
  > div.jw-wrapper.jw-reset
  > div.jw-captions.jw-reset.jw-captions-enabled
  > div
  > div
  > div {
  font-family: "Noto Sans", sans-serif !important;
  font-optical-sizing: auto !important;
  font-weight: 600 !important;
  font-size: 95%;
  background: transparent !important;
  text-shadow: 2px 3px 2px #000,
            -2px 3px 2px #000,
            2px -3px 2px #000,
            -2px -3px 2px #000,
            0px 3px 2px #000,
            0px -3px 2px #000,
            -2px 0px 2px #000,
            2px 0px 2px #000,
            3px 3px 2px #000,
            -3px 3px 2px #000,
            3px -3px 2px #000,
            -3px -3px 2px #000,
            0px 3px 2px #000,
            0px -3px 2px #000,
            -3px 0px 2px #000,
            3px 0px 2px #000,
            2px 3px 2px #000,
            -2px 3px 2px #000,
            2px -3px 2px #000,
            -2px -3px 2px #000,
            3px 2px 2px #000,
            -3px 2px 2px #000,
            3px -2px 2px #000,
            -3px -2px 2px #000,
            1px 2px 2px #000,
            0px 2px 2px #000,
            -1px 2px 2px #000,
            1px -2px 2px #000,
            -1px -2px 2px #000,
            1px 1px 2px #000,
            -1px 1px 2px #000,
            1px -1px 2px #000,
            -1px -1px 2px #000 !important;
}

` );
