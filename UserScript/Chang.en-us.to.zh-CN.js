// ==UserScript==
// @name         切换英文页面至简体中文
// @namespace    https://github.com/Sunhelter/LearningFile/blob/master/UserScript/Chang.en-us.to.zh-CN.js
// @version      0.2
// @description  将en-us英文页面切换至zh-CN简体中文
// @author       Sunhelter
// @license      MIT
// @date         2019-05-06
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function () {
    if (window.location.href.indexOf("/en-us") > -1) {
        var url = window.location.href.replace('en-us', 'zh-CN');
        window.location.href = url;
    }
})();