// ==UserScript==
// @name         字幕发布助手
// @namespace    https://github.com/Sunhelter/LearningFile/blob/master/UserScript/SubtvHelper.js
// @version      0.1
// @description  辅助脚本
// @require      https://cdn.staticfile.org/jquery/1.7.1/jquery.min.js
// @author       Sunhelter
// @license      MIT
// @date         2021-01-27
// @match        *://subhd.tv/upload
// @grant        none
// ==/UserScript==

(function(){
    var url=window.location.href;

     $(function() {
         $("input[name='type'][value='2']").prop("checked",true);
         $("input[name='lang'][value='1']").prop("checked",true);
         $("input[name='lang'][value='2']").prop("checked",true);
         $("input[name='lang'][value='3']").prop("checked",true);
         $("input[name='shuang'][value='1']").prop("checked",true);
         $("input[name='from'][value='1']").prop("checked",true);
         $("input[name='format'][value='1']").prop("checked",true);
         $("input[name='format'][value='2']").prop("checked",true);
     });
})();

