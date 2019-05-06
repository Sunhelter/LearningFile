// ==UserScript==
// @name         切换文档语言至简体中文
// @namespace    https://github.com/Sunhelter/LearningFile/blob/master/UserScript/Chang.en-us.to.zh-CN.js
// @version      0.4
// @description  支持MSDN/MDN
// @author       Sunhelter
// @license      MIT
// @date         2019-05-06
// @match        *://docs.microsoft.com/*
// @match        *://developer.mozilla.org/*
// @grant        none
// ==/UserScript==

(function () {
    var url = window.location.href;
    var cnurl = window.location.href;

    if (url.indexOf("/en-us") > -1) {
        cnurl = url.replace('/en-us', '/zh-CN');
    }
    else if (url.indexOf("/en-US") > -1) {
        cnurl = url.replace('/en-US', '/zh-CN');
    }
    else if (url.indexOf("/zh-tw") > -1) {
        cnurl = url.replace('/zh-tw', '/zh-CN');
    }
    else if (url.indexOf("/zh-TW") > -1) {
        cnurl = url.replace('/zh-TW', '/zh-CN');
    }

    if (cnurl != url) {
        window.location.href = cnurl;
    }
})();