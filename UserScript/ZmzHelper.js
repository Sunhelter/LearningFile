// ==UserScript==
// @id             www.yyets.com-19abd7a5-61c5-4299-bac0-b57716feab4b@scriptish
// @name           主站发布助手
// @version        2.5.0
// @updateURL      https://raw.githubusercontent.com/Sunhelter/LearningFile/master/UserScript/ZmzHelper.js
// @namespace
// @author         鱼骨头
// @description
// @require        http://js.jstucdn.com/js/jquery-1.7.1.min.js
// @require        http://js.jstucdn.com/js/jquery.validate.min.js
// @require        http://yugutou.coderprepares.com/yyets.js
// @include        http://www.zimuzu.*/release/resource?rid=*
// @include        http://www.zimuzu.*/release/subtitle*
// @include        http://www.zmz*.com/release/resource?rid=*
// @include        http://www.zmz*.com/release/subtitle*
// @include        http://www.rrys*.com/release/resource?rid=*
// @include        http://www.rrys*.com/release/subtitle*
// @run-at         document-end
// ==/UserScript==

var url = window.location.href;

if(url.match(/^http:\/\/.+\/release\/resource\?rid=/i)){ // 批量添加新文件智能分析
	$('#clear_box').after('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn1" id="ustv_auto">自动</a>');
	$('#batch_add2').after('&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="ustv_check_episode" placeholder="集数" class="inputRE t_c" />&nbsp;<input type="text" id="ustv_check_format" placeholder="版本" value="MP4 HR-HDTV" class="inputRE t_c" />&nbsp;<a class="btn1" id="ustv_check">勾选</a>');
	$('#tabs2 .blank').first().before('&nbsp;&nbsp;&nbsp;偏移&nbsp;<input id="offset" class="inputRE t_c" type="text" value="" size="2">');
	$('#ustv_check').click(function(){
		var reg = /\d+-\d+/;
		var val = $('#ustv_check_episode').val();
		var result = val.match(reg);
		while(true){
			if(result==null) break;
			var tmp = new Array();
			var arr = new Array();
			tmp = explode(result,'-');
			var start = parseInt(tmp[0]);
			var end = parseInt(tmp[1]);
			var i = 0;
			var j = start;
			while(true){
				arr[i] = j;
				if(j>=end) break;
				i++;
				j++;
			}
			var r = arr.join(' ');
			val = val.replace(result,r);
			result = val.match(reg);
		}
		var episodes = explode(val,' ');
		var formats = explode($('#ustv_check_format').val(),' ');
		for(var i=0;i<formats.length;i++){
			formats[i] = 'ul.order_orsc:visible[format="'+formats[i]+'"]';
		}
		var selector = formats.join(',');
		$(selector).each(function(){
			var idx = $(this).find('font.f3:first').text();
			for(var i=0;i<episodes.length;i++){
				var episode = parseInt(episodes[i]);
				if(idx.indexOf('E'+YYETS.Util.formatNumber(episode)+']')>0){
					$(this).find('input:checkbox').attr('checked','checked');
				}
			}
		});
		var links = $.trim($('textarea#batch_box2').val()).split('\n');
		if(links.length==1){
			var link = links[0];
			var size = $('ul.order_orsc:visible input:checkbox:checked').size();
			if(size<=1) return false;
			for(var i=0;i<size;i++){
				links[i] = link;
			}
			$('textarea#batch_box2').val(links.join('\n'));
		}
	});
	$('#tabs2 a#ustv_auto').click(function(){ //美剧成品自动分析
		YYETS.ShowMsg('只支持美剧成品自动分析，请注意检查结果是否正确');
		var start = parseInt($('input#start_episode').val(),10);
		var end = parseInt($('input#end_episode').val(),10);
		var links = $.trim($('textarea#batch_box').val()).split('\n');
		var html='',season_episode='';
		var _format=$('#tabs2 select#format1').val(),_season=parseInt($('#tabs2 select#season1').val(),10),_episode=parseInt($('#start_episode').val(),10);
		for(var i=0;i<links.length;i++){
			if(links[i]=='') continue;
			var file = decodeURIComponent(links[i].split('|')[2]);
			var e = file.replace(/,/g,'，');
			var Reg1 = /[\. ]?S(\d+)[\. ]?E(\d+)[\. ]?.*\.([^\.]+)$/i; // 匹配S01E01命名
			var Reg2 = /[\. ](\d+)x(\d+)[\. ]?.*\.([^\.]+)$/; // 匹配1x01命名
			var Reg3 = /[\. ]Part[\. ]?(\d+)[\. ]?.*\.([^\.]+)$/i; // 匹配Part1命名
			var Reg4 = /[\. ]Ep?(\d+)[\. ]?.*\.([^\.]+)$/i; // 匹配E[p]01命名
			var Reg5 = /[\. ]Pt?(\d+)[\. ]?.*\.([^\.]+)$/i; // 匹配P[t]1命名
			var Reg6 = /^(\d+)e(\d+)[\. ]?.*\.([^\.]+)$/; // 匹配1x01命名
			var Reg7 = /^.+?\.([^\.]+)$/i; // 匹配后缀名
			var result = e.match(Reg1);
			if(result==null) result = e.match(Reg2);
			if(result==null) result = e.match(Reg3);
			if(result==null) result = e.match(Reg4);
			if(result==null) result = e.match(Reg5);
			if(result==null) result = e.match(Reg6);
			if(result==null) result = e.match(Reg7);
			if(result!=null){
				var format=_format,season=_season,episode=_episode;
				var arr = explode(result,',');
				// 季数和集数
				if(arr.length==4){
					episode = parseInt(arr[2],10);
					season = parseInt(arr[1],10);
				}else if(arr.length==3){
					episode = parseInt(arr[1],10);
				}
				var offset = $('#offset').val();
				if(offset != '') episode = episode + parseInt(offset);
				// 格式
				var ext = arr[arr.length-1].toUpperCase();
				if(ext=='RMVB'){
					format = 'RMVB';
				}else if(ext=='MP4'){
					if(file.indexOf('.HR-')>0 || file.indexOf('-HR.')>0 || file.indexOf('1024X576')>0 || file.indexOf('1024x576')>0 || file.indexOf('576p')>0 || file.indexOf('576P')>0 || (file.indexOf('人人影视')>0 && file.indexOf('.TVrip')<=0 && links.length == 1)){
						format = 'HR-HDTV';
					} else if(file.indexOf('rip.')>0 || file.indexOf('Rip.')>0) {
						format = 'MP4';
					} else if ((file.indexOf('.hdtv.')>0 || file.indexOf('.HDTV.')>0 || file.indexOf('_hdtv_')>0 || file.indexOf(' HDTV ')>0) && format == 'RMVB') {
						format = 'HDTV';
					}
				}else if(ext=='MKV'){
					if(file.indexOf('.HR-')>0 || file.indexOf('-HR.')>0 || ((file.indexOf('rip.')>0 || file.indexOf('Rip.')>0) && format == 'RMVB' )) {
						format = 'HR-HDTV';
					} else if ((file.indexOf('WEB-DL')>0 || file.indexOf('web-dl')>0) && format == 'RMVB') {
						format = 'WEB-DL';
					} else if ((file.indexOf('BluRay')>0 || file.indexOf('bluray')>0) && format == 'RMVB') {
						format = 'BD-720P';
					} else if ((file.indexOf('.720p.')>0 || file.indexOf('.720P.')>0 || file.indexOf('.720p_')>0 || file.indexOf(' 720P ')>0) && format == 'RMVB') {
						format = '720P';
					}
				}
			}
			season_episode = '['+YYETS.Util.formatSeason(season)+'E'+YYETS.Util.formatNumber(episode)+']';
			html += '<ul class="order_orsc clearfix" link="'+links[i]+'" format="'+format+'" season="'+season+'" episode="'+episode+'"><li class="order_item"><span class="line"></span><div class="inf"><div class="h"><font class="f3">'+season_episode+'</font><font class="f9">['+format+']</font>'+file+'</div></div><p><span class="f_r"><a class="f3 preview_delete">[删除]</a></span></p></li></ul>';
		}
		$('#analysis_result').prepend(html);
		$('#batch_label').html('');
		$('#tabs2 #batch_box,input#start_episode,input#end_episode').val('');
	});
}

if(url.match(/^http:\/\/.+\/release\/subtitle/i)){ // 字幕发布模板工具
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.textContent = "\
	function select_tmpl(obj){\
		var optval = $(obj).children('option:selected').val();\
		if(optval==1){\
			$('#category a[rel=\"欧美剧字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#lang a[rel=\"英文\"]').trigger('click');\
			$('#lang a[rel=\"中英\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==2){\
			$('#category a[rel=\"欧美剧字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==3){\
			$('#category a[rel=\"纪录片字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#lang a[rel=\"英文\"]').trigger('click');\
			$('#lang a[rel=\"中英\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==4){\
			$('#category a[rel=\"纪录片字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==5){\
			$('#category a[rel=\"其他字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#lang a[rel=\"英文\"]').trigger('click');\
			$('#lang a[rel=\"中英\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==6){\
			$('#category a[rel=\"其他字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"简体\"]').trigger('click');\
			$('#lang a[rel=\"繁体\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"SRT\"]').trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
		if(optval==7){\
			$('#category a[rel=\"欧美剧字幕\"]').trigger('click');\
			$('#lang_container').children().trigger('click');\
			$('#lang a[rel=\"中英\"]').trigger('click');\
			$('#format_container').children().trigger('click');\
			$('#format a[rel=\"ASS\"]').trigger('click');\
			$('input[name=\"segment_num\"]').val('1');\
			$('input[name=\"source\"][value=\"zimuzu\"]').trigger('click');\
			return false;\
		}\
	}\
	$().ready(function(){\
		$('#uploadfile').after('<input type=\"button\" class=\"btn1\" value=\"选择上传文件\" id=\"uploadfile2\">');\
		$('#uploadfile').remove();\
		$('#uploadfile2').click(function(){\
		  C.initWindow();\
		  $('input[type=\"file\"]').change(function(){\
			var file = $(this).val().replace(\"C:\\\\fakepath\\\\\",\"\");\
			var zip = /^(.+)\.zip$/i;\
			var rar = /^(.+)\.rar$/i;\
			var result = file.match(zip);\
			if(result==null) result = file.match(rar);\
			if(result!=null){\
				$('input[name=\"segment\"]').val(file.slice(0,-4));\
			}\
		  });\
		  C.success=C.insert=function(data){\
			$('#file').html(data.filename+'&nbsp;&nbsp;<a class=\"file_del\" style=\"cursor:pointer;color:red;\">删除</a><input type=\"hidden\" name=\"file\" value=\"'+encodeURIComponent(GLOBAL.Util.toJSON(data))+'\">').find('.file_del').click(function(){\
			  $('#file').html('');\
			});\
		  }\
		});\
	});\
	";
	document.head.appendChild(s);

	// var l = document.createElement("link");
	// l.type = "text/css";
	// l.rel = "stylesheet";
	// l.href = "http://upres.zimuzu.tv:8222/upload.css";
	// document.head.appendChild(l);

	var s1 = document.createElement("script");
	s1.type = "text/javascript";
	// s1.src = "http://yugutou.sinaapp.com/yyets.js";
	s1.src = "http://yugutou.coderprepares.com/global.js";
	document.head.appendChild(s1);

	$('.pub-head h2').append('&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px;">选择模板：</span><select onchange="select_tmpl(this)"><option value="0" selected="selected">--请选择--</option><option value="1">美剧双语</option><option value="2">美剧单语</option><option value="3">纪录片双语</option><option value="4">纪录片单语</option><option value="5">其他双语</option><option value="6">其他单语</option><option value="7">美剧打包</option></select>');
	if($('input[name="source"]').size()==0){
		$('input:submit').after('<input type="hidden" name="source" value="yyets" />');
	}
}

function explode(inputstring, separators, includeEmpties){
	inputstring = new String(inputstring);
	separators = new String(separators);

	if(separators == "undefined") {
		separators = " :;";
	}

	fixedExplode = new Array(1);
	currentElement = "";
	count = 0;

	for(x=0; x < inputstring.length; x++) {
		str = inputstring.charAt(x);
		if(separators.indexOf(str) != -1) {
			if ( ( (includeEmpties <= 0) || (includeEmpties == false)) && (currentElement == "")) {
			}else {
				fixedExplode[count] = currentElement;
				count++;
				currentElement = "";
			}
		}
		else {
			currentElement += str;
		}
	}

	if (( ! (includeEmpties <= 0) && (includeEmpties != false)) || (currentElement != "")) {
		fixedExplode[count] = currentElement;
	}
	return fixedExplode;
}

