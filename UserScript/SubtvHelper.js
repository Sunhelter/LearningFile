// ==UserScript==
// @name         字幕发布助手
// @namespace    https://github.com/Sunhelter/LearningFile/blob/master/UserScript/SubtvHelper.js
// @version      0.7
// @description  偷懒是第一生产力
// @match        *://subhd.tv/upload
// @author       Sunhelter
// @date         2021-02-04
// @charset		 UTF-8
// @license      MIT
// ==/UserScript==

(function(){
    var url = window.location.href;

     $(function() {
         $("input[name='type'][value='2']").prop("checked",true);
         $("input[name='lang'][value='1']").prop("checked",true);
         $("input[name='lang'][value='2']").prop("checked",true);
         $("input[name='lang'][value='3']").prop("checked",true);
         $("input[name='shuang'][value='1']").prop("checked",true);
         $("input[name='from'][value='1']").prop("checked",true);
         $("input[name='format'][value='1']").prop("checked",true);
         $("input[name='format'][value='2']").prop("checked",true);
         $("#text").val('翻译/时间轴招募中，请访问YYSubs.com');

         var btn = document.createElement("button");
         btn.type = "button";
         btn.setAttribute('class', 'btn btn-primary btn-sm');
         btn.setAttribute('onclick', 'watch()');
         var btntxt = document.createTextNode("生成标题");
         btn.appendChild(btntxt);
         document.getElementById("subb").parentNode.appendChild(btn);

         var s = document.createElement("script");
         s.type = "text/javascript";
         s.class = "btn btn-primary btn-sm";
         s.textContent = "\
         function watch(){\
             var chi = $(\"#douban_xuan\").val();\
             if(chi.length > 0){\
                 if(chi.search(/\\s/) > 0){\
                   chi = chi.substring(0,chi.search(/\\s/));\
                 }\
                 else {\
                   chi = chi.substring(0,chi.search(/\\uFF08/));\
                 }\
             }\
             else {\
                 alert('请关联剧集');\
                 return false;\
             }\
\
             var eng = $(\"#edition\").val();\
             if(eng.length > 0){\
                 var title = eng.substring(0,eng.search(/s\\d{1,2}e\\d{1,2}/i)).replace(/\\./g,' ');\
                 var se = eng.match(/s\\d{1,2}e\\d{1,2}/i);\
                 var season = se[0].replace(/e\\d{1,2}/i,'').replace(/s/i,'');\
                 var epsoide = se[0].replace(/s\\d{1,2}/i,'').replace(/e/i,'');\
                 eng = '第' + SectionToChinese(season) + '季第' + SectionToChinese(epsoide) + '集 (' + firstUpperCase(title) + 'S' + season + 'E' + epsoide + ')';\
\
                 $(\"#season\").val(parseInt(season));\
                 $(\"#ep\").val(parseInt(epsoide));\
             }\
             else {\
                 alert('请填写字幕版本');\
                 return false;\
             }\
\
             $(\"#title\").attr(\"value\",fullTitle(chi, eng));\
         }\
\
         function fullTitle(chi, eng){\
             return chi + ' '+ eng + '【人人影视】';\
         }\
\
         function firstUpperCase(str) {\
             return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());\
         }\
\
         function SectionToChinese(section){\
             var chnNumChar = [\"零\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\",\"七\",\"八\",\"九\"];\
             var chnUnitChar = [\"\",\"十\",\"百\",\"千\",\"万\",\"亿\",\"万亿\",\"亿亿\"];\
             var strIns = '', chnStr = '';\
             var unitPos = 0;\
             var zero = true;\
             while(section > 0){\
                 var v = section % 10;\
                 if(v === 0){\
                     if(!zero){\
                         zero = true;\
                         chnStr = chnNumChar[v] + chnStr;\
                     }\
                 }else{\
                     zero = false;\
                     strIns = chnNumChar[v];\
                     strIns += chnUnitChar[unitPos];\
                     chnStr = strIns + chnStr;\
                 }\
                 unitPos++;\
                 section = Math.floor(section / 10);\
             }\
             if(section < 20){\
                 chnStr = chnStr.replace('一十','十');\
             }\
             return chnStr;\
         }\
         ";
         document.head.appendChild(s);
     });
})();

