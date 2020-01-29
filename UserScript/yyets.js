window.YYETS = window.YYETS || {};
YYETS.CONST = {
    WWW_URL: "http://" + window.location.host + "/",
    RES_URL: "http://js.rrsub.net/",
    IMG_URL: "http://tu.rrsub.com:8014/ftp/",
    UPRES_URL: "http://upres" + window.location.host.replace("www", "") + ":8222/",
    USER: {
        uid: 0,
        nickname: ""
    }
};
var _flashget_id_ = 13291;
var _thunder_id_ = 37361;
var global_width = 980;
Function.prototype.method = function(a, b) {
    this.prototype[a] = b;
    return this
};

function eq(c, d) {
    if (d == c) {
        return true
    }
    if (typeof c == "undefined" || c == null || typeof c != "object") {
        return false
    }
    var a = 0;
    var e = 0;
    for (var b in c) {
        a++
    }
    for (var b in d) {
        e++
    }
    if (a != e) {
        return false
    }
    if (c.constructor == d.constructor) {
        for (var b in d) {
            if (typeof d[b] == "object") {
                if (!d[b].equals(c[b])) {
                    return false
                }
            } else {
                if (typeof(d[b]) == "function") {
                    if (!d[b].toString().equals(c[b].toString())) {
                        return false
                    }
                } else {
                    if (d[b] != c[b]) {
                        return false
                    }
                }
            }
        }
        return true
    }
    return false
}
Array.prototype.forEach || (Array.prototype.forEach = function(d, b) {
    if (!typeof d === "function") {
        throw Error(d + " is not a function")
    }
    var a = this.length;
    for (var c = 0; c < a; ++c) {
        var e = this[c];
        if (e !== undefined || c in this) {
            d.call(b, e, c, this)
        }
    }
});
Array.prototype.some || (Array.prototype.some = function(d, b) {
    if (!typeof d === "function") {
        throw Error(d + " is not a function")
    }
    var a = this.length;
    for (var c = 0; c < a; ++c) {
        var e = this[c];
        if (c in this && d.call(b, e, c, this)) {
            return true
        }
    }
    return false
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(c) {
    if (this === void 0 || this === null) {
        throw new TypeError()
    }
    var d = Object(this);
    var a = d.length >>> 0;
    if (a === 0) {
        return -1
    }
    var e = 0;
    if (arguments.length > 0) {
        e = Number(arguments[1]);
        if (e !== e) {
            e = 0
        } else {
            if (e !== 0 && e !== Infinity && e !== -Infinity) {
                e = (e > 0 || -1) * Math.floor(Math.abs(e))
            }
        }
    }
    if (e >= a) {
        return -1
    }
    var b = e >= 0 ? e : Math.max(a - Math.abs(e), 0);
    for (; b < a; b++) {
        if (typeof d[b] == "object") {
            if (b in d && eq(d[b], c)) {
                return b
            }
        } else {
            if (b in d && d[b] === c) {
                return b
            }
        }
    }
    return -1
});
Array.prototype.filter || (Array.prototype.filter = function(b) {
    var a = this.length >>> 0;
    if (typeof b != "function") {
        throw new TypeError()
    }
    var e = [];
    var d = arguments[1];
    for (var c = 0; c < a; c++) {
        if (c in this) {
            var f = this[c];
            if (b.call(d, f, c, this)) {
                e.push(f)
            }
        }
    }
    return e
});

function extend(d, b) {
    var c = function() {};
    c.prototype = b.prototype;
    var a = d.prototype;
    d.prototype = new c();
    d.prototype.constructor = d;
    for (method in a) {
        d.prototype[method] = a[method]
    }
}
YYETS.Util = {
    substring: function(b, a) {
        var a = a || 46;
        return b.length < a ? b : b.substring(0, a) + "..."
    },
    eq: function(c, d) {
        if (d == c) {
            return true
        }
        if (typeof c == "undefined" || c == null || typeof c != "object") {
            return false
        }
        var a = 0;
        var e = 0;
        for (var b in c) {
            a++
        }
        for (var b in d) {
            e++
        }
        if (a != e) {
            return false
        }
        if (c.constructor == d.constructor) {
            for (var b in d) {
                if (typeof d[b] == "object") {
                    if (!d[b].equals(c[b])) {
                        return false
                    }
                } else {
                    if (typeof(d[b]) == "function") {
                        if (!d[b].toString().equals(c[b].toString())) {
                            return false
                        }
                    } else {
                        if (d[b] != c[b]) {
                            return false
                        }
                    }
                }
            }
            return true
        }
        return false
    },
    formatNumber: function(a) {
        return (/^\d$/.test(a)) ? "0" + a : a
    },
    formatUnit: function(b) {
        if (/[^0-9\.]/.test(b)) {
            return 0
        }
        var a = 1024;
        b = parseInt(b);
        if (isNaN(b)) {
            return 0
        }
        if (b < a) {
            return b.toFixed() + "B"
        } else {
            if (b > a && b < a * a) {
                return (b / a).toFixed(2) + "KB"
            } else {
                if (b > a * a && b < a * a * a) {
                    return (b / (a * a)).toFixed(2) + "MB"
                } else {
                    if (b > a * a * a && b < a * a * a * a) {
                        return (b / (a * a * a)).toFixed(2) + "GB"
                    } else {
                        return "over range"
                    }
                }
            }
        }
    },
    formatDate: function(j, q) {
        var e = q || Math.round(new Date().getTime() / 1000);
        var o = new Date(e * 1000);
        var l = o.getMonth() + 1;
        var t = o.getDate();
        var h = Math.round(o.getTime() / 1000);
        var g = new Date(j * 1000);
        var a = g.getMonth() + 1;
        var p = g.getDate();
        var m = Math.round(g.getTime() / 1000);
        var c = g.getHours() < 10 ? 0 + "" + g.getHours() : g.getHours();
        var f = g.getMinutes() < 10 ? 0 + "" + g.getMinutes() : g.getMinutes();
        var b = l - a - 1;
        b = b > 0 ? b : 0;
        var d = h - m;
        var s = 0;
        if (l == a) {
            s = t - p
        } else {
            s = 30 - a + b * 30 + l
        }
        if (d < 1) {
            return "鍒氬垰"
        } else {
            if (d > 0 && d < 60) {
                return d + "绉掑墠"
            } else {
                if (d < 3600) {
                    return Math.round(d / 60) + "鍒嗛挓鍓�"
                } else {
                    if (d >= 3600 && s == 0) {
                        return Math.floor(d / 3600) + "灏忔椂鍓�"
                    } else {
                        if (s == 0) {
                            return "" + c + ":" + f
                        } else {
                            var r = g.getMonth() + 1;
                            if (r < 10) {
                                r = "0" + r
                            }
                            var n = g.getDate();
                            if (n < 10) {
                                n = "0" + n
                            }
                            return g.getFullYear() + "-" + r + "-" + n + " " + c + ":" + f
                        }
                    }
                }
            }
        }
    },
    outputUrl: function(c) {
        var b = $(c).attr("val");
        var e = "";
        var a = [],
            f = [];
        $(".resod_list").find("input:checked").each(function() {
            $(this).siblings().each(function(g, h) {
                if ($(h).html() == "椹�" && $(h).attr("href")) {
                    a.push($(h).attr("href"))
                }
                if ($(h).html() == "纾�" && $(h).attr("href")) {
                    f.push($(h).attr("href"))
                }
            })
        });
        if (b == "ed") {
            e = a.join("\n")
        } else {
            if (b == "ma") {
                e = f.join("\n")
            }
        }
        ZeroClipboard.setMoviePath(YYETS.CONST.RES_URL + "ZeroClipboard10.swf");
        var d = new ZeroClipboard.Client();
        d.setHandCursor(true);
        d.setText(e);
        d.addEventListener("complete", function(g) {
            YYETS.ShowMsg("涓嬭浇閾炬帴宸茬粡澶嶅埗鍒板壀鍒囨澘锛屾墦寮€涓嬭浇宸ュ叿绮樿创閾炬帴鍦板潃鍗冲彲鎵归噺涓嬭浇!");
            d.destroy()
        });
        d.glue($(c).attr("id"))
    },
    counter: function(b, a) {
        $.getJSON(YYETS.CONST.WWW_URL + "public/view?channel=" + b + "&id=" + a)
    },
    enable_cookie: function() {
        return navigator.cookieEnabled ? true : false
    },
    getCookie: function(b) {
        var a = document.cookie.match(new RegExp("(^| )" + b + "=([^;]*)(;|$)"));
        if (a != null) {
            return decodeURIComponent(a[2])
        }
        return null
    },
    setCookie: function(b, c, d) {
        var e = new Date();
        var a = "";
        if (d > 0) {
            d = d > 0 ? d : (30 * 24 * 60 * 60 * 1000);
            e.setTime(e.getTime() + d);
            a = ";expires=" + e.toGMTString() + ";path=/"
        }
        document.cookie = b + "=" + escape(c) + a
    },
    delCookie: function(a) {
        var c = new Date();
        c.setTime(c.getTime() - 1);
        var b = YYETS.Util.getCookie(a);
        if (b != null) {
            document.cookie = a + "=" + b + ";expires=" + c.toGMTString()
        }
    },
    noLogin: function() {
        var a = '<p class="f13"><strong>鎮ㄩ渶瑕佺櫥褰曟墠鍙互鍙備笌璇勫垎鍜屾姇绁�</strong><br><br><strong><a class="f4 f13" href="' + YYETS.CONST.WWW_URL + 'user/login">[绔嬪嵆鐧诲綍]</a></strong><br><br><a class="bnts_r6" href="' + YYETS.CONST.WWW_URL + 'user/reg">娉ㄥ唽</a>&nbsp;&nbsp;&nbsp;&nbsp;</p>';
        YYETS.Dialog(a, {
            width: 400,
            title: "璇风櫥褰�"
        })
    },
    toJSON: function(a) {
        var d = typeof a;
        if (a === null) {
            return
        }
        if ("object" == d) {
            if (Array == a.constructor) {
                d = "array"
            } else {
                if (RegExp == a.constructor) {
                    d = "regexp"
                } else {
                    d = "object"
                }
            }
        }
        switch (d) {
            case "undefined":
            case "unknown":
                return;
                break;
            case "function":
                return;
                break;
            case "boolean":
            case "regexp":
                return a.toString();
                break;
            case "number":
                return isFinite(a) ? a.toString() : "null";
                break;
            case "string":
                return '"' + a.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function() {
                    var g = arguments[0];
                    return (g == "\n") ? "\\n" : (g == "\r") ? "\\r" : (g == "\t") ? "\\t" : ""
                }) + '"';
                break;
            case "object":
                if (a === null) {
                    return "null"
                }
                var c = [];
                for (var f in a) {
                    var e = YYETS.Util.toJSON(a[f]);
                    if (e !== undefined) {
                        c.push(YYETS.Util.toJSON(f) + ":" + e)
                    }
                }
                return "{" + c.join(",") + "}";
                break;
            case "array":
                var c = [];
                for (var b = 0; b < a.length; b++) {
                    var e = YYETS.Util.toJSON(a[b]);
                    if (e !== undefined) {
                        c.push(e)
                    }
                }
                return "[" + c.join(",") + "]";
                break
        }
    },
    clearWay: function(a) {
        var b = ["璇疯緭鍏D2K锛�//寮€澶寸殑鍦板潃", "璇疯緭鍏agnet:寮€澶寸殑鍦板潃", "璇疯创涓奞VOD:// 寮€澶寸殑鍦板潃", "璇疯緭鍏TTP:// 寮€澶村拰swf缁撳熬鐨勭殑flash鍦板潃", "璇疯緭鍏TTP:// 寮€澶村拰swf缁撳熬鐨勭殑flash鍦板潃", "璇疯緭鍏TTP:// 寮€澶村拰swf缁撳熬鐨勭殑flash鍦板潃"];
        for (k in b) {
            if (b[k] == a) {
                return ""
            }
        }
        return a
    },
    scrollTop: function(c) {
        var b = $(document).scrollTop();
        var a = c instanceof jQuery ? c.offset().top : 0;
        if (b > a) {
            if (a > 0) {
                var d = b - a > 100 ? a - 100 : 0
            } else {
                var d = 0
            }
            var e = setInterval(function() {
                if ($(document).scrollTop() > d) {
                    $(document).scrollTop(Math.ceil($(document).scrollTop() - a * 0.4))
                } else {
                    clearInterval(e)
                }
            }, 1)
        }
    },
    formatSeason: function(b, a) {
        b = parseInt(b);
        switch (b) {
            case 0:
                b = "鍓嶄紶";
                break;
            case 101:
                b = "鍗曞墽";
                break;
            case 102:
                b = "MINI鍓�";
                break;
            case 103:
                b = "鍛ㄨ竟璧勬簮";
                break;
            default:
                b = YYETS.Util.formatNumber(b);
                b = a == "cn" ? "绗�" + b + "瀛�" : "S" + b
        }
        return b
    },
    getParam: function(c, b) {
        uri = b || window.location.search.slice(1);
        params = uri.split("&");
        regx = new RegExp(c + "=", "gi");
        for (i = 0; i < params.length; i++) {
            pos = params[i].search(regx);
            if (pos == 0) {
                var a = params[i].replace(regx, "");
                return YYETS.Empty(a) ? "" : a
            }
        }
        return ""
    },
    unique: function(f) {
        var d = {},
            c = [];
        for (var e = 0, b = f.length; e < b; ++e) {
            if (d.hasOwnProperty(f[e])) {
                continue
            }
            c.push(f[e]);
            d[f[e]] = 1
        }
        return c
    }
};
(function(a) {
    var b = function() {
        this.tabs = [];
        this.panels = [];
        this.selectedTab = 0;
        this.selectedCss = "";
        this.container = {};
        this.prefix = "";
        this.panels_container = {}
    };
    b.prototype = {
        setOption: function(c) {
            for (k in c) {
                this[k] = c[k]
            }
            return this
        },
        init: function(c) {
            this.setOption(c);
            this.clearup();
            var d = this;
            this.panels_container.find("A").each(function(e, f) {
                d.panels.push(f);
                d.tabs.push($(f).attr("href"))
            });
            this.panels_container.bind("click", function(g) {
                if (g.target.tagName.toLowerCase() == "b") {
                    g.target = g.target.parentNode
                }
                if (g.target.tagName == "A") {
                    var f = parseInt($(g.target).attr("href").replace("#" + d.prefix + "-", ""));
                    d.selected(f);
                    if (typeof c.callback == "function") {
                        c.callback(f, g.target)
                    }
                }
                return false
            });
            if (d.panels.length > 0) {
                this.reset().selected($(d.panels[0]).attr("href").replace("#" + d.prefix + "-", ""))
            }
        },
        selected: function(c) {
            var d = this;
            if (c == this.selectedTab) {
                return
            }
            this.panels.forEach(function(e) {
                if ($(e).attr("href").replace("#" + d.prefix + "-", "") == c) {
                    $(e).parent().addClass(d.selectedCss);
                    $(e).addClass(d.selectedCss);
                    d.selectedTab = c
                } else {
                    $(e).parent().removeClass(d.selectedCss);
                    $(e).removeClass(d.selectedCss)
                }
            });
            this.tabs.forEach(function(e) {
                if ($(e).attr("id")) {
                    if ($(e).attr("id").replace(d.prefix + "-", "") == c) {
                        $(e).show()
                    } else {
                        $(e).hide()
                    }
                }
            })
        },
        edit: function(d) {
            var c = this;
            this.panels.forEach(function(e) {
                if ($(e).attr("val") == d) {
                    c.selected($(e).attr("href").replace("#" + c.prefix + "-", ""))
                }
            })
        },
        reset: function() {
            var c = this;
            this.selectedTab = null;
            this.panels.forEach(function(d) {
                $(d).removeClass(c.selectedCss)
            });
            this.tabs.forEach(function(d) {
                $(d).hide()
            });
            return this
        },
        clearup: function() {
            this.selectedTab = null;
            this.panels = [];
            this.tabs = [];
            return this
        }
    };
    a.Tabs = function() {
        return new b()
    }
})(YYETS);
(function(b) {
    var a = function(m, q) {
        var g = {
            title: "鏍囬",
            showTitle: true,
            closeText: "[鍏抽棴]",
            classPrefix: "resource_dialog",
            draggable: true,
            modal: true,
            center: true,
            fixed: false,
            time: 0,
            width: 300,
            id: false
        };
        var q = $.extend(g, q);
        q.id = q.id ? q.id : "dialog-" + a.__count;
        var j = q.id + "-overlay";
        var d = null;
        var h = false;
        var o = $.browser.msie;
        var f = $.browser.msie && ("6.0" == $.browser.version);
        var c = {};
        var l = '<div id="' + q.id + '" class="' + q.classPrefix + '">';
        l += !q.showTitle ? "" : '<div class="bar"><span class="title">' + q.title + '</span><a class="close">' + q.closeText + "</a></div>";
        l += '<div class="content"></div>';
        if (q.buttons) {
            l += '<div class="buttons">';
            $.each(q.buttons, function(s, r) {
                l += '<input type="button" name="dialog_' + s + '" value="' + r + '" class="btn" id="' + s + '" />'
            });
            l += "</div>"
        }
        l += "</div>";
        var n = $(l);
        var e = function() {
            if (q.center) {
                var s = ($(window).width() - n.width()) / 2;
                var r = ($(window).height() - n.height()) / 2;
                if (!f && q.fixed) {
                    n.css({
                        top: r,
                        left: s
                    })
                } else {
                    n.css({
                        top: r + $(document).scrollTop(),
                        left: s + $(document).scrollLeft()
                    })
                }
            }
        };
        var p = function() {
            $("body").append(n);
            if (q.modal) {
                $("body").append('<div id="' + j + '" class="' + q.classPrefix + '-overlay"></div>');
                $("#" + j).css({
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: $(document).height(),
                    "z-index": ++a.__zindex,
                    position: "absolute"
                }).hide()
            }
            n.css({
                "z-index": ++a.__zindex,
                position: q.fixed ? "fixed" : "absolute",
                width: q.width + "px"
            });
            if (f && q.fixed) {
                n.css("position", "absolute");
                e();
                var v = parseInt(n.css("top")) - $(document).scrollTop();
                var u = parseInt(n.css("left")) - $(document).scrollLeft();
                $(window).scroll(function() {
                    n.css({
                        top: $(document).scrollTop() + v,
                        left: $(document).scrollLeft() + u
                    })
                })
            }
            var r = {
                x: 0,
                y: 0
            };

            function s(w) {
                var A = window.event || w;
                var z = parseInt(n.css("top")) + (A.clientY - r.y);
                var y = parseInt(n.css("left")) + (A.clientX - r.x);
                n.css({
                    top: z,
                    left: y
                });
                r.x = A.clientX;
                r.y = A.clientY
            }
            n.find(".bar").mousedown(function(w) {
                if (!q.draggable) {
                    return
                }
                var y = window.event || w;
                r.x = y.clientX;
                r.y = y.clientY;
                $(document).bind("mousemove", s)
            });
            $(document).mouseup(function(w) {
                $(document).unbind("mousemove", s)
            });
            var t = this;
            n.find(".close").bind("click", function() {
                t.close(false)
            });
            n.find("#ok").bind("click", function() {
                t.close(true)
            });
            n.find("#cancel").bind("click", function() {
                t.close(false)
            });
            n.bind("mousedown", function() {
                n.css("z-index", ++a.__zindex)
            });
            if (0 != q.time) {
                d = setTimeout(function() {
                    t.close(false)
                }, q.time)
            }
        };
        this.setContent = function(s) {
            var r = n.find(".content");
            if ("object" == typeof(s)) {
                switch (s.type.toLowerCase()) {
                    case "id":
                        r.html($("#" + s.value).html());
                        break;
                    case "img":
                        r.html("鍔犺浇涓�...");
                        $('<img alt="" />').load(function() {
                            r.empty().append($(this));
                            n.width($(this).width() + 10);
                            e()
                        }).attr("src", s.value);
                        break;
                    case "url":
                        r.html("鍔犺浇涓�...");
                        if (s.delay) {
                            setTimeout(function() {
                                $.ajax({
                                    url: s.url,
                                    data: s.param,
                                    success: function(t) {
                                        r.html(t);
                                        e()
                                    },
                                    error: function(u, v, t) {
                                        r.html("鍑洪敊鍟�")
                                    }
                                })
                            }, s.delay)
                        } else {
                            $.ajax({
                                url: s.url,
                                data: s.param,
                                success: function(t) {
                                    r.html(t);
                                    e()
                                },
                                error: function(u, v, t) {
                                    r.html("鍑洪敊鍟�")
                                }
                            })
                        }
                        break;
                    case "iframe":
                        r.append($('<iframe src="' + s.value + '" />'));
                        break;
                    case "text":
                    default:
                        r.html(s.value);
                        break
                }
            } else {
                r.html(s)
            }
        };
        this.show = function() {
            if (undefined != q.beforeShow && !q.beforeShow()) {
                return
            }
            var r = function(u) {
                if (!o) {
                    return $("#" + u).css("opacity")
                }
                var t = document.getElementById(u);
                return (undefined != t && undefined != t.filters && undefined != t.filters.alpha && undefined != t.filters.alpha.opacity) ? t.filters.alpha.opacity / 100 : 1
            };
            if (q.modal) {
                $("#" + j).fadeTo("fast", r(j))
            }
            n.fadeTo("fast", r(q.id), function() {
                if (undefined != q.afterShow) {
                    q.afterShow()
                }
                h = true
            });
            var s = this;
            if (0 != q.time) {
                d = setTimeout(function() {
                    s.close(false)
                }, q.time)
            }
            e()
        };
        this.hide = function() {
            if (!h) {
                return
            }
            if (undefined != q.beforeHide && !q.beforeHide()) {
                return
            }
            n.fadeOut("fast", function() {
                if (undefined != q.afterHide) {
                    q.afterHide()
                }
            });
            if (q.modal) {
                $("#" + j).fadeOut("fast")
            }
            h = false
        };
        this.close = function(s) {
            var r = this;
            if (undefined != q.beforeClose && !q.beforeClose()) {
                return
            }
            n.fadeOut("fast", function() {
                r.getFormVal();
                $(this).remove();
                h = false;
                if (undefined != q.afterClose) {
                    q.afterClose(s, c)
                }
            });
            if (q.modal) {
                $("#" + j).fadeOut("fast", function() {
                    $(this).remove()
                })
            }
            clearTimeout(d)
        };
        this.getFormVal = function() {
            $.each($("#" + q.id).find(":input").serializeArray(), function(r, s) {
                if (c[s.name] === undefined) {
                    c[s.name] = s.value
                } else {
                    if (typeof c[s.name] == Array || typeof c[s.name] == "object") {
                        c[s.name].push(s.value)
                    } else {
                        c[s.name] = [c[s.name], s.value]
                    }
                }
            })
        };
        p.call(this);
        this.setContent(m);
        this.show();
        a.__count++;
        a.__zindex++
    };
    a.__zindex = 999;
    a.__count = 1;
    b.Dialog = function(d, c) {
        return new a(d, c)
    }
})(YYETS);
YYETS.DataListFactory = (function() {
    return {
        create: function(datalistType, container, ajax) {
            var dataList = eval("new YYETS." + datalistType + "DataList()");
            dataList.container = (container instanceof jQuery) ? container : $(container);
            dataList.ajax = ajax || {};
            return dataList
        }
    }
})();
YYETS.DataList = function(a, b) {
    this.container = (a instanceof jQuery) ? a : $(a);
    this.list = [];
    this.ajax = b
};
YYETS.DataList.prototype = {
    add: function(b, a) {
        var a = a || {
            save: false
        };
        this.list.push(b);
        if (a.save) {
            b.save(this.ajax)
        }
        return this
    },
    update: function() {
        var a = this;
        this.list.forEach(function(c, b) {
            c.update(a.ajax)
        });
        return this
    },
    del: function(a, b) {
        if (typeof this.list[a] != "undefined") {
            if (this.ajax.del_url) {
                this.list[a].del(this.ajax)
            }
            if (b) {
                b(this.list[a])
            }
            this.list.splice(a, 1)
        }
        return this
    },
    batchDel: function(b) {
        var a = [];
        for (i in b) {
            if (typeof this.list[b[i]] != "undefined") {
                a.push(this.list[b[i]].id)
            }
        }
        $.post(this.ajax.del_url, {
            rid: this.ajax.rid,
            itemid: a.toString()
        }, function(c) {}, "json");
        return this
    },
    print: function() {
        this.container.html("");
        var a = this;
        if (this.getLength() > 0) {
            this.list.forEach(function(c, b) {
                c.print(a.container, {
                    insert: true,
                    index: b
                })
            })
        } else {
            this.noData()
        }
        return this
    },
    exchange: function(c) {
        for (key in c) {
            if (!c[key]) {
                c.splice(key, 1)
            }
        }
        if (c.length != this.list.length) {
            return
        }
        var a = c.length;
        var b = [];
        for (i = 0; i < a; i++) {
            b[i] = this.list[parseInt(c[i].replace("item", ""))];
            b[i].itemid = i
        }
        this.list = [];
        this.list = b;
        this.print()
    },
    getLength: function() {
        return this.list.length
    },
    sort: function() {
        var a = [];
        this.list.forEach(function(c, b) {
            a[b] = {
                itemid: c.id,
                sequence: c.itemid
            }
        });
        $.post(this.ajax.sort_url, {
            rid: rid,
            ids: a
        }, function(b) {
            if (b) {
                if (b.success == 1) {
                    YYETS.Dialog("淇濆瓨鎺掑簭鎴愬姛锛�", {
                        time: 1000,
                        showTitle: false,
                        width: 150
                    })
                }
            }
        }, "json")
    },
    getJSON: function(c) {
        if (c) {
            var b = "[";
            var a = [];
            this.list.forEach(function(e, d) {
                a[d] = YYETS.Util.toJSON(e[c])
            });
            b += a.join(",");
            b += "]";
            return b
        } else {
            return YYETS.Util.toJSON(this.list)
        }
    },
    flush: function(a) {
        if (typeof a !== "function") {
            return
        }
        this.list.forEach(function(c, b) {
            a(c, b)
        });
        return this
    },
    some: function(a) {
        return this.list.some(a)
    },
    find: function(b) {
        var a = -1;
        this.list.forEach(function(d, c) {
            if (b(d)) {
                a = c
            }
        });
        return a
    },
    noData: function(a) {
        var a = a || "鏆傛棤鐩稿叧鏁版嵁锛�";
        this.container.html(a)
    },
    clear: function() {
        this.list = [];
        this.container.html("");
        return this
    }
};
var ListItem = function(a) {
    this.itemid = a;
    this.modified = false;
    this.html
};
ListItem.prototype = {
    save: function(ajax, callback) {
        var str = eval("(" + this.getJSON() + ")");
        var that = this;
        var data = {
            rid: ajax.rid,
            item: str
        };
        $.post(ajax.save_url, data, function(d) {
            if (d.success == 1) {
                that.id = d.itemid;
                if (callback) {
                    callback(d)
                }
            }
        }, "json")
    },
    update: function(ajax) {
        if (this.modified) {
            var str = eval("(" + this.getJSON() + ")");
            var that = this;
            var data = {
                rid: ajax.rid,
                item: str
            };
            $.post(ajax.update_url, data, function(d) {
                if (d.success == 1) {
                    that.id = d.itemid
                }
            }, "json");
            this.modified = false
        }
    },
    del: function(a) {
        $.post(a.del_url, {
            rid: a.rid,
            itemid: this.id
        }, function(b) {}, "json");
        return this
    },
    getJSON: function(a) {
        return (typeof a == "undefined") ? YYETS.Util.toJSON(this) : YYETS.Util.toJSON(this[a])
    }
};
YYETS.TVDataList = function(a, b) {
    YYETS.DataList.call(this, a, b);
    this.seasonSet = [];
    this.selectedList = [];
    this.m_html = $("#modify_container").html()
};
YYETS.TVDataList.prototype = {
    fetch: function(c) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        var d = [];
        $("#format").children().each(function(e, f) {
            d[$(f).attr("value")] = $(f).text()
        });
        var a = [];
        $("#way").children().each(function(e, f) {
            a[e] = {
                id: $(f).find("#url").attr("wayid"),
                name: $(f).find("#url").attr("name")
            }
        });
        $.get(this.ajax.fetch_url, c, function(j) {
            if (j) {
                var e = j.length;
                for (var g = 0; g < e; g++) {
                    var f = [];
                    a.forEach(function(o, m) {
                        var l = "";
                        if (j[g].way != null) {
                            for (var n = 0; n < j[g].way.length; n++) {
                                if (j[g].way[n].way == o.id) {
                                    l = j[g].way[n].address;
                                    break
                                }
                            }
                        }
                        f[m] = {
                            id: o.id,
                            name: o.name,
                            address: l
                        }
                    });
                    var h = {
                        id: j[g].id,
                        name: j[g].name,
                        format: {
                            id: j[g].format,
                            text: d[j[g].format]
                        },
                        size: j[g].size,
                        season: j[g].season,
                        episode: j[g].episode,
                        way: f,
                        user: j[g].nickname
                    };
                    b.add(new TVItem(g, h))
                }
                b.print()
            }
        }, "json")
    },
    print: function() {
        this.container.unbind("click");
        this.container.html("");
        this.setSeasonSet();
        $("#reset").trigger("click");
        var g = this;
        for (var d = 0; d < this.seasonSet.length; d++) {
            var b = "";
            var c = [];
            var f = YYETS.Util.formatSeason(this.seasonSet[d].season, "cn");
            var a = "";
            this.seasonSet[d].format.forEach(function(j, h) {
                c[j.id] = h % 2 == 0 ? "f9" : "f101";
                a += '<a href="javascript:;" season="' + g.seasonSet[d].season + '" val="' + j.id + '">[' + j.text + "]</a>"
            });
            b += '<div class="order_orsc_tit"><font class="f0 f_r"><a href="javascript:;" id="batch_del">[鍒犻櫎閫変腑]</a></font>' + (channel == "tv" || channel.value == "tv" ? '<span class="blue_bg_1">' + f + "</span>" : "") + '<strong class="f13">鎵归噺閫夋嫨锛�</strong> ' + a + ' <font class="f101">宸查€夋嫨<span id="sel' + g.seasonSet[d].season + '">0</span>涓枃浠�</font></div>';
            this.container.append(b);
            var e = 0;
            this.list.forEach(function(j, h) {
                if (j.season == g.seasonSet[d].season) {
                    j.print(g.container, {
                        insert: false,
                        index: h,
                        num: ++e,
                        cls: c
                    })
                }
            })
        }
        this.container.bind("click", function(m) {
            if ($(m.target).attr("id") == "update") {
                var h = parseInt($(m.target).parent().parent().parent().parent().parent().attr("id").replace("item", ""));
                var l = g.list[h];
                $("#modify_container").remove();
                YYETS.Dialog(g.m_html, {
                    buttons: {
                        ok: "淇敼",
                        cancel: "鍙栨秷"
                    },
                    width: 700,
                    afterClose: function(p, t) {
                        if (p) {
                            var u = [];
                            $("#format").children().each(function(v, w) {
                                u[$(w).attr("value")] = $(w).text()
                            });
                            var o = [];
                            $("#way").children().each(function(v, w) {
                                o[v] = {
                                    id: $(w).find("#url").attr("wayid"),
                                    name: $(w).find("#url").attr("name")
                                }
                            });
                            var q = [];
                            var r = 0;
                            o.forEach(function(B, z) {
                                var v = "";
                                for (var w in t) {
                                    var C = t[w];
                                    if (w != "name" && w != "season" && w != "format" && w != "episode" && YYETS.Util.clearWay(C) != "") {
                                        if (w == B.id) {
                                            v = C;
                                            break
                                        }
                                    }
                                }
                                if (B.id == 1) {
                                    var A = v.split("|");
                                    var y = decodeURI(A[2]);
                                    r = A[3]
                                }
                                q[z] = {
                                    id: B.id,
                                    name: B.name,
                                    address: v
                                }
                            });
                            var s = {
                                name: t.name,
                                format: {
                                    id: t.format,
                                    text: u[t.format]
                                },
                                size: r,
                                season: t.season,
                                episode: t.episode,
                                way: q,
                                user: YYETS.CONST.USER.nickname
                            };
                            g.list[h].modify(s).update(g.ajax);
                            g.print()
                        }
                    }
                });
                $("input[id='m_url']").focus(function(o) {
                    if (o.target.value.match(/^璇�/i) != null && o.target.value == o.target.defaultValue) {
                        o.target.value = ""
                    }
                }).blur(function(o) {
                    if (o.target.value == "") {
                        o.target.value = o.target.defaultValue
                    }
                });
                $("#m_name").val(l.name);
                $("#m_format").val(l.format.id);
                $("#m_season").val(l.season);
                $("#m_episode").val(l.episode);
                l.way.forEach(function(p, o) {
                    if (p.address != "") {
                        $("#m_way").find("#m_url").eq(o).val(p.address)
                    }
                })
            }
            if ($(m.target).attr("id") == "del") {
                var h = parseInt($(m.target).parent().parent().parent().parent().parent().attr("id").replace("item", ""));
                YYETS.Dialog("鎮ㄧ‘璁ゅ垹闄よ璧勬簮鏂囦欢鍚楋紵", {
                    buttons: {
                        ok: "纭",
                        cancel: "鍙栨秷"
                    },
                    afterClose: function(o) {
                        if (o) {
                            g.del(h).print()
                        }
                    }
                })
            }
            if ($(m.target).attr("val")) {
                var n = parseInt($(m.target).attr("val"));
                var j = $(m.target).attr("season");
                if ($(this).find("input[format='" + n + "_" + j + "']").eq(0).attr("checked")) {
                    $(this).find("input[format='" + n + "_" + j + "']").attr("checked", false)
                } else {
                    $(this).find("input[format='" + n + "_" + j + "']").attr("checked", true)
                }
                $("#sel" + j).html($(this).find("input:checked").length)
            }
            if ($(m.target).attr("id") == "batch_del") {
                YYETS.Dialog("鎮ㄧ‘璁ゅ垹闄よ繖浜涜祫婧愭枃浠跺悧锛�", {
                    buttons: {
                        ok: "纭",
                        cancel: "鍙栨秷"
                    },
                    afterClose: function(o) {
                        if (o) {
                            var p = [];
                            g.container.find("input:checked").each(function(r, s) {
                                var q = $(s).val();
                                p.push(q)
                            });
                            g.batchDel(p).print()
                        }
                    }
                })
            }
        });
        this.container.sortable({
            items: "ul:not(.order_orsc_tit)",
            handle: ".line",
            stop: function(j, l) {
                var h = g.container.sortable("toArray");
                g.exchange(h)
            }
        })
    },
    selectble_print: function() {
        this.container.html("");
        var f = this;
        this.setSeasonSet();
        for (var c = 0; c < this.seasonSet.length; c++) {
            var a = "";
            var b = [];
            this.seasonSet[c].format.forEach(function(h, g) {
                b[h.id] = g % 2 == 0 ? "f9" : "f101"
            });
            var e = YYETS.Util.formatSeason(this.seasonSet[c].season, "cn");
            a += '<div class="order_orsc_tit"><span class="blue_bg_1">' + e + "</span></div>";
            this.container.append(a);
            var d = 0;
            this.list.forEach(function(h, g) {
                if (h.season == f.seasonSet[c].season) {
                    h.selectble_print(f.container, {
                        index: g,
                        cls: b
                    })
                }
            })
        }
        this.container.bind("click", function(g) {
            if ($(g.target).attr("id") == "select_item") {
                var h = parseInt($(g.target).val().replace("item", ""));
                var j = $(g.target).parent().next();
                if ($(g.target).attr("checked") == "checked") {
                    f.selectedList.push({
                        itemid: h,
                        sel_item: $(g.target),
                        sel_num: j
                    })
                } else {
                    f.selectedList.forEach(function(m, l) {
                        if (h == m.itemid) {
                            m.sel_num.html("");
                            f.selectedList.splice(l, 1)
                        }
                    })
                }
                f.printSelNum()
            }
        });
        this.container.sortable({
            items: "ul:not(.order_orsc_tit)",
            handle: ".line",
            stop: function(h, j) {
                var g = f.container.sortable("toArray");
                f.exchange(g)
            }
        })
    },
    printSelNum: function() {
        this.selectedList.forEach(function(b, a) {
            if (b.sel_item.attr("checked") != "checked") {
                b.sel_item.attr("checked", "checked")
            }
            b.sel_num.html(a + 1)
        })
    },
    setSeasonSet: function() {
        var a = this;
        this.list.forEach(function(g, e) {
            if (a.seasonSet.length == 0) {
                a.seasonSet.push({
                    season: g.season,
                    format: []
                });
                a.seasonSet[0].format.push(g.format)
            } else {
                var c = 0;
                for (var f = 0; f < a.seasonSet.length; f++) {
                    if (a.seasonSet[f].season == g.season) {
                        var d = 0;
                        for (var b = 0; b < a.seasonSet[f].format.length; b++) {
                            if (eq(a.seasonSet[f].format[b], g.format)) {
                                d = 1;
                                break
                            }
                        }
                        if (!d) {
                            a.seasonSet[f].format.push(g.format)
                        }
                        c = 1;
                        break
                    }
                }
                if (!c) {
                    a.seasonSet.push({
                        season: g.season,
                        format: []
                    });
                    a.seasonSet[f].format.push(g.format)
                }
            }
        })
    },
    update_way: function(b) {
        var a = this;
        this.selectedList.forEach(function(d, c) {
            a.list.forEach(function(f, e) {
                if (f.itemid == d.itemid) {
                    f.update_way(b[c]).update(a.ajax)
                }
            })
        });
        this.selectble_print();
        this.printSelNum()
    }
};
extend(YYETS.TVDataList, YYETS.DataList);
var TVItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.season = a.season;
        this.episode = a.episode;
        this.name = a.name;
        this.format = a.format;
        this.size = a.size;
        this.way = a.way;
        this.user = a.user
    }
};
TVItem.prototype = {
    print: function(b, e) {
        this.itemid = e.index || 0;
        var d = e.num || 1;
        b = (b instanceof jQuery) ? b : $(b);
        var c = "";
        var a = this.way.length;
        for (i = 0; i < a; i++) {
            c += (this.way[i].address != "") ? "<a href='" + this.way[i].address + "'class='f3'>[" + this.way[i].name + "]</a>" : "[" + this.way[i].name + "]"
        }
        var g = YYETS.Util.formatSeason(this.season, "en");
        var f = '<li class="order_item"><span class="line"></span><div class="inf"><div class="h">' + (channel == "tv" || channel.value == "tv" ? '<font class="f3">[' + g + "E" + YYETS.Util.formatNumber(this.episode) + "]</font>" : "") + '<font class="' + e.cls[this.format.id] + '">[' + this.format.text + "]</font>" + this.name + '</div><p><span class="f_r"><font class="f3">' + this.user + '</font> <a href="javascript:void(0)" class="f3" id="update">[淇敼]</a><a href="javascript:void(0)" class="f3" id="del">[鍒犻櫎]</a></span>' + c + "</p></div></li>";
        f = '<ul class="order_orsc clearfix" id=item' + this.itemid + '><li class="order_num"><input type="checkbox" format="' + this.format.id + "_" + this.season + '" value="' + this.itemid + '" id="select_item" /><strong class="f1">' + d + "</strong></li>" + f + "</ul>";
        if (e.insert) {
            b.prepend(f)
        } else {
            b.append(f)
        }
        return this
    },
    selectble_print: function(b, d) {
        this.itemid = d.index;
        b = (b instanceof jQuery) ? b : $(b);
        var c = "";
        var a = this.way.length;
        for (i = 0; i < a; i++) {
            c += (this.way[i].address != "") ? "<a href='" + this.way[i].address + "'class='f3'>[" + this.way[i].name + "]</a>" : "[" + this.way[i].name + "]"
        }
        var f = YYETS.Util.formatSeason(this.season, "en");
        var e = '<li class="order_item"><span class="line"></span><div class="inf"><div class="h"><font class="f3">[' + f + "E" + YYETS.Util.formatNumber(this.episode) + ']</font><font class="' + d.cls[this.format.id] + '">[' + this.format.text + "]</font>" + this.name + '</div><p><span class="f_r"><font class="f3">' + this.user + '</font> <a href="javascript:void(0)" class="f3" id="update">[淇敼]</a><a href="javascript:void(0)" class="f3" id="del">[鍒犻櫎]</a></span>' + c + "</p></div></li>";
        e = '<ul class="order_orsc clearfix" id=item' + this.itemid + '><li class="order_num"><span><input type="checkbox" value="' + this.itemid + '" id="select_item" /></span><strong class="f1" id="select_num"></strong></li>' + e + "</ul>";
        if (d.insert) {
            b.prepend(e)
        } else {
            b.append(e)
        }
        return this
    },
    update_way: function(a) {
        var b = this;
        this.way.forEach(function(d, c) {
            if (a.id == d.id) {
                b.way[c] = a
            }
        });
        this.modified = true;
        return this
    },
    modify: function(a) {
        this.name = a.name;
        this.format = a.format;
        this.season = a.season;
        this.episode = a.episode;
        this.way = a.way;
        this.user = a.user;
        this.modified = true;
        return this
    }
};
extend(TVItem, ListItem);
YYETS.MovieDataList = function(a, b) {
    YYETS.DataList.call(this, a, b);
    this.selectedList = [];
    this.m_html = $("#modify_container").html()
};
YYETS.MovieDataList.prototype = {
    fetch: function(c) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        var d = [];
        $("#format").children().each(function(e, f) {
            d[$(f).attr("value")] = $(f).text()
        });
        var a = [];
        $("#way").children().each(function(e, f) {
            a[e] = {
                id: $(f).find("#url").attr("wayid"),
                name: $(f).find("#url").attr("name")
            }
        });
        $.get(this.ajax.fetch_url, c, function(j) {
            if (j) {
                var e = j.length;
                for (var g = 0; g < e; g++) {
                    var f = [];
                    a.forEach(function(o, m) {
                        var l = "";
                        if (j[g].way != null) {
                            for (var n = 0; n < j[g].way.length; n++) {
                                if (j[g].way[n].way == o.id) {
                                    l = j[g].way[n].address;
                                    break
                                }
                            }
                        }
                        f[m] = {
                            id: o.id,
                            name: o.name,
                            address: l
                        }
                    });
                    var h = {
                        id: j[g].id,
                        name: j[g].name,
                        format: {
                            id: j[g].format,
                            text: d[j[g].format]
                        },
                        size: j[g].size || 0,
                        season: j[g].season,
                        episode: j[g].episode,
                        way: f,
                        user: j[g].nickname
                    };
                    b.add(new MovieItem(g, h))
                }
                b.print()
            }
        }, "json")
    },
    print: function() {
        this.container.unbind("click");
        this.container.html("");
        var a = this;
        this.list.forEach(function(c, b) {
            c.print(a.container, {
                insert: false,
                index: b
            })
        });
        this.container.bind("click", function(d) {
            if ($(d.target).attr("id") == "update") {
                var b = parseInt($(d.target).parent().parent().parent().parent().parent().attr("id").replace("item", ""));
                var c = a.list[b];
                $("#modify_container").remove();
                YYETS.Dialog(a.m_html, {
                    buttons: {
                        ok: "淇敼",
                        cancel: "鍙栨秷"
                    },
                    width: 700,
                    afterClose: function(g, m) {
                        if (g) {
                            var n = [];
                            $("#format").children().each(function(f, o) {
                                n[$(o).attr("value")] = $(o).text()
                            });
                            var e = [];
                            $("#way").children().each(function(f, o) {
                                e[f] = {
                                    id: $(o).find("#url").attr("wayid"),
                                    name: $(o).find("#url").attr("name")
                                }
                            });
                            var h = [];
                            var j = 0;
                            e.forEach(function(s, q) {
                                var f = "";
                                for (var o in m) {
                                    var t = m[o];
                                    if (o != "name" && o != "season" && o != "format" && o != "episode" && YYETS.Util.clearWay(t) != "") {
                                        if (o == s.id) {
                                            f = t;
                                            break
                                        }
                                    }
                                }
                                if (s.id == 1) {
                                    var r = f.split("|");
                                    var p = decodeURI(r[2]);
                                    j = r[3]
                                }
                                h[q] = {
                                    id: s.id,
                                    name: s.name,
                                    address: f
                                }
                            });
                            var l = {
                                name: m.name,
                                format: {
                                    id: m.format,
                                    text: n[m.format]
                                },
                                size: j,
                                way: h,
                                user: YYETS.CONST.USER.nickname
                            };
                            a.list[b].modify(l).update(a.ajax);
                            a.print()
                        }
                    }
                });
                $("input[id='m_url']").focus(function(f) {
                    if (f.target.value.match(/^璇�/i) != null && f.target.value == f.target.defaultValue) {
                        f.target.value = ""
                    }
                }).blur(function(f) {
                    if (f.target.value == "") {
                        f.target.value = f.target.defaultValue
                    }
                });
                $("#m_name").val(c.name);
                $("#m_format").val(c.format.id);
                c.way.forEach(function(f, e) {
                    if (f.address != "") {
                        $("#m_way").find("#m_url").eq(e).val(f.address)
                    }
                })
            }
            if ($(d.target).attr("id") == "del") {
                var b = parseInt($(d.target).parent().parent().parent().parent().parent().attr("id").replace("item", ""));
                YYETS.Dialog("鎮ㄧ‘璁ゅ垹闄よ璧勬簮鏂囦欢鍚楋紵", {
                    buttons: {
                        ok: "纭",
                        cancel: "鍙栨秷"
                    },
                    afterClose: function(e) {
                        if (e) {
                            a.del(b).print()
                        }
                    }
                })
            }
        });
        this.container.sortable({
            handle: ".line",
            stop: function(c, d) {
                var b = a.container.sortable("toArray");
                a.exchange(b)
            }
        })
    }
};
extend(YYETS.MovieDataList, YYETS.DataList);
var MovieItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.name = a.name;
        this.format = a.format;
        this.size = a.size;
        this.way = a.way;
        this.user = a.user
    }
};
MovieItem.prototype = {
    print: function(b, d) {
        $("#reset").trigger("click");
        this.itemid = d.index || 0;
        b = (b instanceof jQuery) ? b : $(b);
        var c = "";
        var a = this.way.length;
        for (i = 0; i < a; i++) {
            c += (this.way[i].address != "") ? "<a href='" + this.way[i].address + "'class='f3'>[" + this.way[i].name + "]</a>" : "[" + this.way[i].name + "]"
        }
        var e = '<li class="order_item"><span class="line"></span><div class="inf"><div class="h"><font class="f9">[' + this.format.text + "]</font>" + this.name + '</div><p><span class="f_r"><font class="f3">' + this.user + '</font> <a href="javascript:void(0)" class="f3" id="update">[淇敼]</a><a href="javascript:void(0)" class="f3" id="del">[鍒犻櫎]</a></span>' + c + "</p></div></li>";
        e = '<ul class="order_orsc clearfix" id=item' + this.itemid + '><li class="order_num"><strong class="f1">' + (parseInt(this.itemid) + 1) + "</strong></li>" + e + "</ul>";
        if (d.insert) {
            b.prepend(e)
        } else {
            b.append(e)
        }
        return this
    },
    modify: function(a) {
        this.name = a.name;
        this.format = a.format;
        this.way = a.way;
        this.size = a.size;
        this.user = a.user;
        this.modified = true;
        return this
    }
};
extend(MovieItem, ListItem);
YYETS.SeasonScheduleDataList = function(a, b) {
    YYETS.DataList.call(this, a, b);
    this.m_html = $("#season_modify_container").html()
};
YYETS.SeasonScheduleDataList.prototype = {
    fetch: function(b) {
        var a = this;
        a.clear();
        $.get(this.ajax.fetch_url, b, function(g) {
            if (g) {
                var c = g.length;
                for (var e = 0; e < c; e++) {
                    var f = {
                        id: g[e].id,
                        season: g[e].season,
                        premiere: g[e].premiere,
                        status: g[e].status,
                        sequence: g[e].sequence
                    };
                    a.add(new SeasonScheduleItem(e, f))
                }
                a.print()
            }
        }, "json")
    },
    print: function() {
        this.container.unbind("click");
        this.container.html("");
        var a = this;
        this.list.forEach(function(c, b) {
            c.print(a.container, {
                insert: false,
                index: b
            })
        });
        this.container.bind("click", function(d) {
            if ($(d.target).attr("id") == "update") {
                var b = parseInt($(d.target).parent().attr("id").replace("item", ""));
                var c = a.list[b];
                $("#season_modify_container").remove();
                YYETS.Dialog(a.m_html, {
                    buttons: {
                        ok: "淇敼",
                        cancel: "鍙栨秷"
                    },
                    width: 700,
                    afterClose: function(e, h) {
                        if (e) {
                            var g = {
                                season: h.season,
                                premiere: h.m_premiere,
                                status: h.status,
                                sequence: h.sequence
                            };
                            a.list[b].modify(g);
                            a.print()
                        }
                    }
                });
                $("#m_season").val(c.season);
                $("#m_premiere").val(c.premiere);
                $("#m_status").val(c.status)
            }
            if ($(d.target).attr("id") == "del") {
                var b = parseInt($(d.target).parent().attr("id").replace("item", ""));
                a.del(b).flush($("#season_val")).print()
            }
        });
        this.flush($("#season_val"))
    },
    flush: function(a) {
        a.val(this.getJSON());
        return this
    }
};
extend(YYETS.SeasonScheduleDataList, YYETS.DataList);
var SeasonScheduleItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id || 0;
        this.season = a.season;
        this.premiere = a.premiere;
        this.status = a.status;
        this.sequence = a.sequence
    }
};
SeasonScheduleItem.prototype = {
    print: function(a, b) {
        this.itemid = b.index || 0;
        a = (a instanceof jQuery) ? a : $(a);
        var d = YYETS.Util.formatSeason(this.season, "cn");
        var c = "<li id=item" + this.itemid + '><span class="line"></span><font class="w_s_1">' + d + ' </font><font class="w_s_2">棣栨挱锛�' + this.premiere + '</font><font class="w_s_3">鐘舵€侊細' + status_name[this.status] + '</font><a href="javascript:void(0)" class="close" id="del">close</a><a href="javascript:void(0)" class="bnts_y2" id="update"><b>+</b>淇敼</a></li>';
        if (b.insert) {
            a.prepend(c)
        } else {
            a.append(c)
        }
        return this
    },
    modify: function(a) {
        this.season = a.season;
        this.premiere = a.premiere;
        this.status = a.status;
        this.modified = true;
        return this
    }
};
extend(SeasonScheduleItem, ListItem);
YYETS.ScheduleDataList = function(a, b) {
    YYETS.DataList.call(this, a, b);
    this.m_html = $("#modify_container").html()
};
YYETS.ScheduleDataList.prototype = {
    fetch: function() {
        var a = this;
        this.clear();
        $.get(this.ajax.fetch_url, {
            rid: a.ajax.rid
        }, function(f) {
            if (f) {
                var b = f.length;
                for (var c = 0; c < b; c++) {
                    var e = {
                        id: f[c].id,
                        season: f[c].season,
                        episode: f[c].episode,
                        time: f[c].play_time,
                        status: f[c].status
                    };
                    a.add(new ScheduleItem(c, e))
                }
                a.print()
            }
        }, "json")
    },
    print: function() {
        this.container.unbind("click");
        this.container.html("");
        var b = this;
        var a = 0;
        this.list.forEach(function(d, j) {
            var l = "";
            var g = 0;
            if (d.time) {
                var c = new Array("鍛ㄦ棩", "鍛ㄤ竴", "鍛ㄤ簩", "鍛ㄤ笁", "鍛ㄥ洓", "鍛ㄤ簲", "鍛ㄥ叚");
                var h = new Date();
                var e = Math.round(h.getTime() / 1000);
                var m = h.getFullYear() + "-" + YYETS.Util.formatNumber(h.getMonth() + 1) + "-" + h.getDate();
                var o = d.time.substr(0, 4);
                var n = d.time.substr(5, 5);
                var f = n.replace("-", "/") + "/" + o;
                var g = Date.parse(f) / 1000;
                if (a > 0 && g - e > 0 && a - e < 0) {
                    l += '<li class="no_style"><strong class="bnts_y3" href="javascript:void(0);"><em>褰撳墠鏃堕棿 ' + m + " " + c[h.getDay()] + "</em></strong></li>"
                }
                a = g
            }
            d.print(b.container, {
                insert: false,
                index: j,
                ctime: l
            })
        });
        this.container.bind("click", function(e) {
            if ($(e.target).attr("id") == "update") {
                var c = parseInt($(e.target).parent().attr("id").replace("item", ""));
                var d = b.list[c];
                $("#modify_container").remove();
                YYETS.Dialog(b.m_html, {
                    buttons: {
                        ok: "淇敼",
                        cancel: "鍙栨秷"
                    },
                    width: 700,
                    afterClose: function(g, j) {
                        if (g) {
                            var h = {
                                season: j.season,
                                episode: j.episode,
                                time: j.time,
                                status: j.status,
                                user: $("#operator").val()
                            };
                            b.list[c].modify(h).update(b.ajax);
                            b.print()
                        }
                    }
                });
                $("#m_season").val(d.season);
                $("#m_episode").val(d.episode);
                $("#m_time").val(d.time);
                $("#m_status").val(d.status)
            }
            if ($(e.target).attr("id") == "del") {
                var c = parseInt($(e.target).parent().attr("id").replace("item", ""));
                YYETS.Dialog("鎮ㄧ‘璁ゅ垹闄ゅ悧锛�", {
                    buttons: {
                        ok: "纭",
                        cancel: "鍙栨秷"
                    },
                    afterClose: function(f) {
                        if (f) {
                            b.del(c).print()
                        }
                    }
                })
            }
        });
        this.container.sortable({
            handle: ".line",
            stop: function(d, e) {
                var c = b.container.sortable("toArray");
                b.exchange(c)
            }
        })
    }
};
extend(YYETS.ScheduleDataList, YYETS.DataList);
var ScheduleItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id || 0;
        this.season = a.season;
        this.episode = a.episode;
        this.time = a.time;
        this.status = a.status;
        this.user = a.user
    }
};
ScheduleItem.prototype = {
    print: function(a, b) {
        this.itemid = b.index || 0;
        a = (a instanceof jQuery) ? a : $(a);
        var d = YYETS.Util.formatSeason(this.season, "cn");
        var c = b.ctime + "<li id=item" + this.itemid + '><span class="line"></span><font class="w_s_1">' + d + ' 绗�<b class="f1">' + this.episode + '</b>闆�</font><font class="w_s_2">鎾嚭鏃堕棿锛�' + this.time + '</font><font class="w_s_3">鐘舵€侊細' + status_name[this.status] + '</font><a href="javascript:void(0)" class="close" id="del">close</a><a href="javascript:void(0)" class="bnts_y2" id="update"><b>+</b>淇敼</a></li>';
        if (b.insert) {
            a.prepend(c)
        } else {
            a.append(c)
        }
        return this
    },
    modify: function(a) {
        this.season = a.season;
        this.episode = a.episode;
        this.time = a.time;
        this.status = a.status;
        this.modified = true;
        return this
    }
};
extend(ScheduleItem, ListItem);
var AnalysisItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.season = a.season;
        this.episode = a.episode;
        this.name = a.name;
        this.size = a.size;
        this.format = a.format;
        this.way = a.way;
        this.user = a.user
    }
};
AnalysisItem.prototype = {
    print: function(a) {
        $("#reset").trigger("click");
        a = (a instanceof jQuery) ? a : $(a);
        var c = YYETS.Util.formatSeason(this.season, "en");
        var b = '<li class="order_item"><span class="line"></span><div class="inf"><div class="h"><font class="f3">[' + c + "E" + YYETS.Util.formatNumber(this.episode) + ']</font><font class="f9">[' + this.format.text + "]</font>" + this.name + "</div></div></li>";
        b = '<ul class="order_orsc clearfix" id=item' + this.itemid + ">" + b + "</ul>";
        a.append(b);
        return this
    }
};
extend(AnalysisItem, ListItem);
var SelectionItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.name = a.name
    }
};
SelectionItem.prototype = {
    print: function(a, b) {
        this.itemid = b.index || 0;
        a = (a instanceof jQuery) ? a : $(a);
        var c = '<a href="javascript:void(0);" itemid=\'' + this.itemid + "' id='" + this.id + "'><span>" + this.name + "</span></a>";
        a.append(c)
    },
    del: function() {}
};
extend(SelectionItem, ListItem);
YYETS.Selection = function() {
    this.selectedList = [];
    this.selectedClass = "selected";
    this.currentElement = {};
    this.valueElement = {};
    this.container = {}
};
YYETS.Selection.prototype = {
    init: function(a) {
        for (k in a) {
            this[k] = a[k]
        }
        return this
    },
    selectFromClick: function(a) {
        var b = this;
        this.container.click(function(c) {
            b.setCurrentElement(c.target);
            if (b.isSelected()) {
                b.unselect()
            } else {
                b.select()
            }
            b.flush()
        })
    },
    deleteByItemid: function(a, d) {
        var b = this;
        var c = this.container.find("a[itemid='" + d + "']");
        this.setCurrentElement(c);
        this.currentElement.removeClass(this.selectedClass);
        this.selectedList.del(a).print();
        this.flush();
        return this
    },
    isSelected: function() {
        var a = this;
        return this.selectedList.some(function(c, b) {
            return a.currentElement.attr("itemid") === c.id
        })
    },
    setCurrentElement: function(a) {
        var a = (a instanceof jQuery) ? a : $(a);
        this.currentElement = a;
        return this
    },
    select: function() {
        this.currentElement.addClass(this.selectedClass);
        var a = this.selectedList.getLength();
        this.selectedList.add(new SelectionItem(a, {
            id: this.currentElement.attr("itemid"),
            name: this.currentElement.text()
        })).print();
        return this
    },
    unselect: function() {
        var b = this;
        this.currentElement.removeClass(this.selectedClass);
        var a = 0;
        a = this.selectedList.find(function(d, c) {
            return b.currentElement.attr("itemid") == d.id
        });
        this.selectedList.del(a).print();
        return this
    },
    editflush: function(a) {
        if (a != "") {
            var c = this;
            var b = a.split(",");
            this.container.children().each(function(d, e) {
                for (k in b) {
                    if (b[k] == $(e).attr("itemid")) {
                        c.setCurrentElement(e).select()
                    }
                }
            });
            this.flush()
        }
    },
    flush: function() {
        this.valueElement.val(this.selectedList.getJSON("id"));
        if (this.valueElement.next("td")) {
            this.valueElement.next("td").html("")
        }
        return this
    }
};
YYETS.SingleSelection = function() {
    this.selectedClass = "selected";
    this.selectedElement;
    this.valueElement = {};
    this.selectedValue = {};
    this.selectedListContainer = {};
    this.validateElement
};
YYETS.SingleSelection.prototype = {
    init: function(a) {
        for (k in a) {
            this[k] = a[k]
        }
        return this
    },
    setSelectedClass: function(a) {
        this.selectedClass = a;
        return this
    },
    selectFromClick: function(a) {
        if (this.isSelected(a)) {
            this.unselect()
        }
        this.setSelectedElement(a).select();
        return this
    },
    deleteByItemid: function(a) {
        if (a === this.selectedElement.attr("itemid")) {
            this.unselect()
        }
        return this
    },
    isSelected: function(a) {
        if (this.selectedElement !== "undefined") {
            return false
        }
        var a = (a instanceof jQuery) ? a : $(a);
        if (a.attr("itemid") === this.selectedElement.attr("itemid")) {
            return true
        }
        return false
    },
    setSelectedElement: function(a) {
        var a = (a instanceof jQuery) ? a : $(a);
        this.selectedElement = a;
        return this
    },
    setValueElement: function(a) {
        var a = (a instanceof jQuery) ? a : $(a);
        this.valueElement = a;
        return this
    },
    setSelectedListContainer: function(a) {
        var a = (a instanceof jQuery) ? a : $(a);
        this.selectedListContainer = a;
        return this
    },
    select: function() {
        this.selectedElement.siblings().removeClass(this.selectedClass);
        this.selectedElement.addClass(this.selectedClass);
        this.selectedValue = this.selectedElement.attr("itemid");
        return this
    },
    unselect: function() {
        this.selectedElement.removeClass(this.selectedClass);
        this.selectedElement = {};
        this.selectedValue = {};
        return this
    },
    flushValue: function() {
        this.valueElement.val(YYETS.Util.toJSON(this.selectedValue).replace(/"/g, ""));
        if (this.valueElement.next("td")) {
            this.valueElement.next("td").html("")
        }
        return this
    },
    printSelectedList: function() {
        this.selectedListContainer.html("");
        if (this.selectedElement instanceof jQuery) {
            var a = "<div itemid='" + this.selectedElement.attr("itemid") + "'>" + this.selectedElement.text() + "<span class='del'>X</span></div>";
            this.selectedListContainer.append(a)
        }
        return this
    }
};
(function(b) {
    var a = function(c) {
        this.pagination = {};
        this.datalist = {};
        this.container = {};
        this.dialogHtml = '<div class="popSearch"><input type="text" id="keyword" /><input type="button" id="search" value="鎼滅储" /></div><div id="result"><span style="color:#aaaaaa">璇疯緭鍏ュ叧閿瓧鎼滅储鎮ㄦ墍闇€瑕佺殑璧勬簮</span></div><div id="page_container"></div>';
        this.setOption(c).init()
    };
    a.prototype = {
        setOption: function(c) {
            for (k in c) {
                this[k] = c[k]
            }
            return this
        },
        init: function() {
            this.container.html('<input type="button" class="bnts_r5" value="鎼滅储娣诲姞瀵瑰簲鐨勫奖鐗�" id="add" />');
            $("#selectedItem").val("");
            var c = this;
            this.container.find("#add").click(function() {
                c.relateDialog()
            })
        },
        setResource: function(e) {
            var d = this;
            this.container.html("");
            $("#selectedItem").val(e.id);
            var c = '<div class="boxPADD"><div class="f_l f_l_img"><img src="' + e.pic + '" width="110" height="145" alt="" /></div><div class="f_r_info"><ul class="n_relateRES"><li><span>涓� 鏂� 鍚嶏細</span><strong>' + e.cnname + "锛�" + e.channel + "锛�</strong></li><li><span>鑻� 鏂� 鍚嶏細</span>" + e.enname + "</li><li><span>骞�  浠ｏ細</span>" + e.year + "</li><li><span>鍦板尯璇█锛�</span>" + e.area + "/" + e.lang + "</li><li><span>绫�  鍨嬶細</span>" + e.categorys + "</li><li><span>瀵�  婕旓細</span>" + e.directors + "</li><li><span>涓�  婕旓細</span>" + e.actors + '</li></ul><div class="t_r"><a href="javascript:void(0)" class="bnts_r2" id="modify">淇敼</a> <a href="javascript:void(0)" class="bnts_r2" id="del">鍒犻櫎</a></div></div></div><span class="l_t"></span><span class="l_b"></span><span class="r_t"></span><span class="r_b"></span>';
            this.container.append(c);
            this.container.find("#modify").click(function() {
                d.relateDialog()
            });
            this.container.find("#del").click(function() {
                d.init()
            })
        },
        relateDialog: function() {
            var f = this;
            YYETS.Dialog(this.dialogHtml, {
                buttons: {
                    ok: "娣诲姞",
                    cancel: "鍏抽棴"
                },
                width: 700,
                afterClose: function(g, h) {
                    if (g) {
                        f.datalist.relate(f)
                    }
                    f.datalist.clear()
                }
            });
            var d = $(".resource_dialog").find("#search");
            var c = $(".resource_dialog").find("#keyword");
            var e = $(".resource_dialog").find("#result");
            this.datalist = YYETS.DataListFactory.create("RelatedResource", e, {
                fetch_url: YYETS.CONST.WWW_URL + "release/resource/getlist"
            });
            this.pagination = YYETS.Pagination({
                pagesize: 4,
                offset: 5,
                className: {
                    page: "pages2",
                    current: "cur"
                },
                datalist: f.datalist,
                container: $(".resource_dialog").find("#page_container")
            });
            d.unbind("click");
            d.bind("click", function() {
                if (c.val() != "") {
                    f.pagination.setParam({
                        keyword: c.val()
                    }).page()
                }
            })
        }
    };
    b.RelatedResource = function(c) {
        return new a(c)
    }
})(YYETS);
YYETS.RelatedResourceDataList = function(a, b) {
    YYETS.DataList.call(this, a, b)
};
YYETS.RelatedResourceDataList.prototype = {
    print: function(b) {
        var a = this;
        this.container.append('<div class="popSearchResult">鎼滅储鍒�<b class="f11" id="counts">' + b + "</b>涓粨鏋滐紝璇烽€夋嫨绗﹀悎浣犺姹傜殑缁撴灉</div>");
        this.list.forEach(function(d, c, e) {
            d.print(a.container, e)
        })
    },
    relate: function(b) {
        var a = this;
        this.list.forEach(function(d, c) {
            if (d.selected) {
                d.relate(b)
            }
        })
    },
    fetch: function(c, a) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        $.get(this.ajax.fetch_url, c, function(e) {
            b.clear();
            if (e && e.res) {
                e.res.forEach(function(f, d) {
                    var g = {
                        id: f.id,
                        cnname: f.cnname || "",
                        enname: f.enname || "",
                        area: f.area || "",
                        channel: f.channel || "",
                        pic: f.poster || "",
                        year: f.publish_year || "",
                        lang: f.lang || "",
                        category: f.category || "",
                        directors: f.directors || "",
                        actors: f.actors || "",
                        writers: f.writers || ""
                    };
                    b.add(new RelatedResourceItem(d, g))
                });
                b.print(e.counts);
                a.setOption({
                    total: e.counts
                }).print()
            }
        }, "json")
    }
};
extend(YYETS.RelatedResourceDataList, YYETS.DataList);
var RelatedResourceItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.channel = a.channel;
        this.cnname = a.cnname;
        this.enname = a.enname;
        this.year = a.year;
        this.area = a.area;
        this.lang = a.lang;
        this.category = a.category;
        this.pic = a.pic;
        this.directors = a.directors;
        this.actors = a.actors;
        this.writers = a.writers
    }
};
RelatedResourceItem.prototype = {
    print: function(a, d) {
        var c = this;
        a = (a instanceof jQuery) ? a : $(a);
        var b = '<div class="resultBox resultBox2"><div class="resultList" id="item' + this.itemid + '"><div class="f_l_img"><img src="' + YYETS.CONST.IMG_URL + this.pic + '" width="88" height="116"  /></div><div class="f_r_info"><ul><li><strong>涓枃鍚嶏細</strong>' + this.cnname + "锛�" + this.channel + "锛�</li><li><strong>鑻辨枃鍚嶏細</strong>" + this.enname + "</li><li><strong>骞�&nbsp;&nbsp;浠ｏ細</strong>" + this.year + "</li><li><strong>鍦板尯/璇█23锛�</strong>" + this.area + "/" + this.lang + "</li><li><strong>绫�&nbsp;&nbsp;鍨嬶細</strong>" + this.category + "</li><li><strong>瀵�&nbsp;&nbsp;婕旓細</strong>" + this.directors + "</li><li><strong>涓�&nbsp;&nbsp;婕旓細</strong>" + this.actors + "</li><li><strong>缂�&nbsp;&nbsp;鍓э細</strong>" + this.writers + '</li></ul></div></div></div><div class="blank clearfix"></div>';
        a.append(b);
        $("#item" + this.itemid).click(function() {
            d.forEach(function(f, e) {
                f.unselect()
            });
            c.select()
        });
        return this
    },
    select: function() {
        $("#item" + this.itemid).addClass("cur");
        this.selected = true;
        this.flush()
    },
    unselect: function() {
        $("#item" + this.itemid).removeClass("cur");
        this.selected = false
    },
    relate: function(b) {
        b.container.html("");
        var a = '<div class="boxPADD movieAdded clearfix"><div class="f_l f_l_img"><img src="' + YYETS.CONST.IMG_URL + this.pic + '" width="110" height="145" alt="" /></div><div class="f_r_info"><ul class="n_relateRES"><li><span>涓� 鏂� 鍚嶏細</span><strong>' + this.cnname + "锛�" + this.channel + "锛�</strong></li><li><span>鑻� 鏂� 鍚嶏細</span>" + this.enname + "</li><li><span>骞�  浠ｏ細</span>" + this.year + "</li><li><span>鍦板尯/璇█锛�</span>" + this.area + "/" + this.lang + "</li><li><span>绫�  鍨嬶細</span>" + this.category + "</li><li><span>瀵�  婕旓細</span>" + this.directors + "</li><li><span>涓�  婕旓細</span>" + this.actors + "</li><li><strong>缂�&nbsp;&nbsp;鍓э細</strong>" + this.writers + '</li></ul><div class="t_r"><a href="javascript:void(0)" class="bnts_r2" id="modify">淇敼</a> <a href="javascript:void(0)" class="bnts_r2" id="del">鍒犻櫎</a></div></div></div><span class="l_t"></span><span class="l_b"></span><span class="r_t"></span><span class="r_b"></span>';
        b.container.append(a);
        b.container.find("#modify").click(function() {
            b.relateDialog()
        });
        b.container.find("#del").click(function() {
            b.init()
        })
    },
    flush: function() {
        $("#selectedItem").val(this.id);
        return this
    }
};
extend(RelatedResourceItem, ListItem);
(function(b) {
    var a = function(c) {
        this.total = 0;
        this.currentPage = 1;
        this.pagesize = 20;
        this.offset = 10;
        this.datalist = {};
        this.className = {};
        this.container = {};
        this.param = {};
        this.setOption(c)
    };
    a.prototype = {
        setOption: function(c) {
            for (k in c) {
                this[k] = c[k]
            }
            return this
        },
        setParam: function(c) {
            this.param = {};
            for (k in c) {
                if (typeof c[k] != "undefined") {
                    this.param[k] = c[k]
                }
            }
            return this
        },
        print: function() {
            this.container.html("");
            if (this.currentPage < 1) {
                return
            }
            var c = Math.ceil(this.total / this.pagesize);
            var f = this.currentPage == 1 ? 1 : this.currentPage - 1;
            var e = this.currentPage == c ? c : this.currentPage + 1;
            var l = this.currentPage - 3 > 0 ? this.currentPage - 3 : 1;
            var d = this.currentPage + (this.offset - 3) < c ? this.currentPage + (this.offset - 3) : c;
            var h = '<div id="pagination" class="' + this.className.page + '">';
            h += this.currentPage > 1 ? '<a href="javascript:void(0)" id="' + f + '">涓婁竴椤�<span></span></a>' : "";
            if (l > 1) {
                h += '<a href="javascript:void(0)" id="1">1<span></span></a><span>...</span>'
            }
            for (var g = l; g <= d; g++) {
                h += '<a href="javascript:void(0)" id="' + g + '" ' + ((g == this.currentPage) ? 'class="' + this.className.current + '"' : "") + ">" + g + "<span></span></a>"
            }
            if (d < c) {
                h += '<span>...</span><a href="javascript:void(0)" id="' + c + '">' + c + "<span></span></a>"
            }
            h += this.currentPage < c ? '<a href="javascript:void(0)" id="' + e + '">涓嬩竴椤�<span></span></a>' : "";
            h += "</div>";
            this.container.append(h);
            var j = this;
            this.container.find("#pagination").click(function(m) {
                if ($(m.target).attr("id") != "pagination") {
                    j.currentPage = parseInt($(m.target).attr("id"));
                    j.page()
                }
            })
        },
        page: function() {
            this.param.page = this.currentPage;
            this.param.pagesize = this.pagesize;
            this.datalist.fetch(this.param, this);
            return this
        }
    };
    b.Pagination = function(c) {
        return new a(c)
    }
})(YYETS);
YYETS.ResourceDataList = function(a, b) {
    YYETS.DataList.call(this, a, b)
};
YYETS.ResourceDataList.prototype = {
    fetch: function(c, a) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        $.get(this.ajax.fetch_url, c, function(e) {
            b.clear();
            if (e.res) {
                e.res.forEach(function(f, d) {
                    var g = {
                        id: f.id,
                        cnname: f.cnname || "",
                        channel: f.channel,
                        remark: f.remark || "",
                        formats: f.formats || "",
                        cates: f.cates || "",
                        rank: f.rank || "鏃�",
                        counts: f.counts || 0,
                        updatetime: f.updatetime,
                        score: f.score,
                        items: f.items || undefined,
                        dateline: f.ddd,
                        views: f.views,
                        favorites: f.favorites || 0,
                        poster: f.poster,
                        play_status: f.play_status
                    };
                    b.add(new ResourceItem(d, g))
                });
                b.print();
                a.setOption({
                    total: e.counts
                }).print()
            } else {
                b.noData("娌℃湁鎵惧埌鎮ㄦ墍闇€瑕佺殑璧勬簮锛岃閲嶆柊鎼滅储锛�")
            }
        }, "json")
    }
};
extend(YYETS.ResourceDataList, YYETS.DataList);
var ResourceItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.cnname = a.cnname;
        this.channel = a.channel;
        this.remark = a.remark;
        this.formats = a.formats;
        this.cates = a.cates;
        this.rank = a.rank;
        this.counts = a.counts;
        this.updatetime = a.updatetime;
        this.score = a.score;
        this.items = a.items;
        this.dateline = a.dateline;
        this.views = a.views;
        this.favorites = a.favorites;
        this.poster = a.poster;
        this.play_status = a.play_status
    }
};
ResourceItem.prototype = {
    print: function(b, c) {
        var e = this;
        this.itemid = c.index || 0;
        b = (b instanceof jQuery) ? b : $(b);
        var f = "",
            a = "";
        if (this.channel == "鐢佃鍓�") {
            f = "f101"
        }
        if (this.channel == "鐢靛奖") {
            f = "f3"
        }
        if (!YYETS.Empty(this.play_status)) {
            a = "[" + this.play_status + "]"
        }
        var d = '<li class="clearfix"><div class="f_l_img"><a href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '" class="imglink" target="_blank"><img src="' + YYETS.CONST.IMG_URL + this.poster + '" /></a><br>TOP:<font class="' + f + '">' + this.rank + '</font></div><div class="f_r_info"><dl><dt><a href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '" target="_blank">銆�' + this.channel + '銆�<strong class="f14">銆�' + this.cnname + "銆�" + a + '</strong></a></dt><dd class="list_a"><span class="span1">銆愯鏄庛€� ' + this.remark + "</span><span>銆愮被鍨嬨€� " + this.cates + '</span><span class="span1">銆愪汉姘斻€� ' + this.views + "娆℃祻瑙� | " + this.favorites + "娆℃敹钘� | " + this.score + "鍒�</span><span>銆愭洿鏂般€� " + YYETS.Util.formatDate(this.updatetime) + "| " + this.dateline + "| " + this.formats + "</span></dd>";
        if (typeof this.items == "object" && this.items.length > 0) {
            d += '<dd class="list_b">';
            this.items.forEach(function(h, g) {
                d += '<p><a href="' + YYETS.CONST.WWW_URL + "resource/" + e.id + '" target="_blank">銆�' + h.format + "銆�" + YYETS.Util.substring(h.name) + "(" + (YYETS.Util.formatUnit(h.size) || 0) + ")</a></p>"
            });
            d += "</dd>"
        }
        d += "</dl></div></li>";
        b.append(d)
    }
};
YYETS.SubtitleDataList = function(a, b) {
    YYETS.DataList.call(this, a, b)
};
YYETS.SubtitleDataList.prototype = {
    fetch: function(c, a) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        $.get(this.ajax.fetch_url, c, function(e) {
            b.clear();
            if (e.res) {
                e.res.forEach(function(f, d) {
                    var g = {
                        id: f.id,
                        cnname: f.cnname || "",
                        enname: f.enname,
                        lang: f.lang,
                        format: f.format,
                        segment: f.segment,
                        source: f.source,
                        type: f.type,
                        remark: f.remark,
                        downloads: f.downloads,
                        operator: f.operator,
                        dateline: f.dateline,
                        translation: f.translation,
                        check: f.check,
                        timeline: f.timeline,
                        production: f.production,
                        general: f.general
                    };
                    b.add(new SubtitleItem(d, g))
                });
                b.print();
                a.setOption({
                    total: e.counts
                }).print()
            }
        }, "json")
    }
};
extend(YYETS.SubtitleDataList, YYETS.DataList);
var SubtitleItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.cnname = a.cnname || "";
        this.enname = a.enname || "";
        this.lang = a.lang || "";
        this.format = a.format || "";
        this.segment = a.segment || "";
        this.source = a.source || "";
        this.type = a.type || "";
        this.remark = a.remark || "";
        this.downloads = a.downloads || 0;
        this.operator = a.operator || "";
        this.dateline = a.dateline || 0;
        this.translation = a.translation || "";
        this.check = a.check || "";
        this.timeline = a.timeline || "";
        this.production = a.production || "";
        this.general = a.general || ""
    }
};
SubtitleItem.prototype = {
    print: function(a, b) {
        this.itemid = b.index || 0;
        a = (a instanceof jQuery) ? a : $(a);
        var c = '<li class="clearfix">';
        c += "<dl>";
        c += ' <dt><font class="f14"><strong><a class="f7" href="' + YYETS.CONST.WWW_URL + "subtitle/" + this.id + '" target="_blank">銆�' + this.type + "銆�" + this.cnname + "(" + this.enname + ")</a></strong></font></dt>";
        c += '<dd class="list_a">';
        c += ' <span class="span1">銆愯绉嶃€�' + this.lang + "</span> ";
        c += " <span>銆愮増鏈€�" + this.segment + "</span> ";
        c += '  <span class="span1">銆愭牸寮忋€� ' + this.format + "</span>";
        if (this.source == "浜轰汉褰辫瀛楀箷缁勫師鍒涚炕璇�") {
            c += '  <span>銆愭潵婧愩€� <b class="f1 f13">' + this.source + "</b></span> "
        } else {
            c += "  <span>銆愭潵婧愩€� <b>" + this.source + "</b></span> "
        }
        c += '  <span class="span1">銆愮粺璁°€�' + this.downloads + "娆′笅杞� </span>";
        c += "   <span>銆愬彂甯冦€�" + YYETS.Util.formatDate(this.dateline) + " 鐢�" + this.operator + "鏇存柊</span>";
        c += "  </dd>";
        c += '  <dd><div class="list_b_mid">';
        if (this.source == "浜轰汉褰辫瀛楀箷缁勫師鍒涚炕璇�") {
            c += '  <div class="box">';
            c += "   <p><strong>鍒朵綔浜哄憳鍚嶅崟</strong></p>";
            if (this.general) {
                c += "   <div>鎬荤洃锛�" + this.general + "</div>"
            }
            if (this.check) {
                c += "  <div>鏍″锛�" + this.check + "</div>"
            }
            if (this.translation) {
                c += "  <div>缈昏瘧锛�" + this.translation + "</div>"
            }
            if (this.timeline) {
                c += "  <div>鏃堕棿杞达細" + this.timeline + "</div>"
            }
            if (this.production) {
                c += "  <div>鍚庢湡锛�" + this.production + "</div>"
            }
            c += " </div>";
            c += "  <br>"
        }
        c += '  <div class="box">';
        c += "   <p><strong>澶囨敞</strong></p>";
        c += "  <div>" + this.remark + "</div>";
        c += "  </div></div>";
        c += "   </dd>";
        c += "  </dl> ";
        c += "</li>";
        a.append(c)
    }
};
extend(SubtitleItem, ListItem);
YYETS.MovieResourceDataList = function(a, b) {
    YYETS.DataList.call(this, a, b)
};
YYETS.MovieResourceDataList.prototype = {
    fetch: function(c, a) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        $.get(this.ajax.fetch_url, c, function(e) {
            b.clear();
            if (e.res) {
                e.res.forEach(function(f, d) {
                    var g = {
                        id: f.id,
                        cnname: f.cnname || "",
                        enname: f.enname || "",
                        area: f.area || "",
                        rank: f.rank || "鏃�",
                        premiere: f.premiere || "",
                        actors: f.actors || "",
                        directors: f.directors || "",
                        favorite: f.favorite || "",
                        formats: f.formats || "",
                        cates: f.cates || "",
                        counts: f.counts || 0,
                        updatetime: f.updatetime || "",
                        content: f.content || "",
                        score: f.score > 0 ? f.score : "N/A",
                        dateline: f.ddd || "",
                        watched: f.watched || 0,
                        views: f.views || 0,
                        poster: f.poster || ""
                    };
                    b.add(new MovieResourceItem(d, g))
                });
                b.print();
                a.setOption({
                    total: e.counts
                }).print()
            }
        }, "json")
    }
};
extend(YYETS.MovieResourceDataList, YYETS.DataList);
var MovieResourceItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.cnname = a.cnname;
        this.enname = a.enname;
        this.area = a.area;
        this.rank = a.rank, this.premiere = a.premiere;
        this.actors = a.actors;
        this.directors = a.directors;
        this.favorite = a.favorite;
        this.formats = a.formats;
        this.cates = a.cates;
        this.counts = a.counts;
        this.updatetime = a.updatetime;
        this.score = a.score;
        this.content = a.content;
        this.watched = a.watched;
        this.dateline = a.dateline;
        this.views = a.views;
        this.poster = a.poster
    }
};
MovieResourceItem.prototype = {
    print: function(b, c) {
        this.itemid = c.index || 0;
        b = (b instanceof jQuery) ? b : $(b);
        var d = '<li class="clearfix">';
        d += '<div class="f_l_img">';
        d += '<a class="imglink" href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '"><img src="' + YYETS.CONST.IMG_URL + this.poster + '"></a><br>';
        d += "<strong>鎺掑悕锛�" + this.rank + "</strong>";
        d += "</div>";
        d += '<div class="f_r_info">';
        d += "<dl>";
        var a = new Date(this.premiere.substring(0, 10)).getTime() > new Date().getTime();
        d += ' <dt class="f14"><strong><a href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '" target="_blank">' + this.cnname + "(" + this.enname + ")</a></strong>";
        if (a) {
            d += '<font class="f5 f14">鏈笂鏄�</font></dt>'
        } else {
            d += '<font class="f5 f14">宸蹭笂鏄�</font></dt>'
        }
        d += '<dd class="list_a">';
        d += "<div><span>瀵�  婕旓細</span> " + this.directors + "</div>";
        d += "<div><span>涓�  婕旓細</span>  " + this.actors + "</div>";
        d += "<div><span>绫�  鍨嬶細</span>  " + this.cates + "</div>";
        d += "<div><span>涓�  鏄狅細</span>  " + this.premiere + " " + this.area;
        if (a) {
            d += '(璺濋鎾繕鏈�<b class="f1">' + (Math.abs(this.sd(this.premiere.substring(0, 10))) + 1) + "</b>澶�)"
        }
        d += "</div>";
        d += "<div><span>璧�  婧愶細</span>  " + this.formats + "</div>";
        d += "</dd>";
        d += '<dd class="list_b">';
        d += this.content.substring(0, 100);
        d += "</dd>";
        d += "</dl>";
        d += "</div>";
        d += '<div class="f_r_info2">';
        d += '<font class="' + (this.score > 5 ? "fb" : "fa") + '">' + this.score + "</font><br><br>";
        d += ' <font class="fc">' + this.watched + "浜烘兂鐪�</font><br>";
        d += ' <font class="fc">' + this.favorite + "浜烘敹钘�</font>";
        d += "</div>";
        d += "</li>";
        b.append(d)
    },
    sd: function(a) {
        x = a.split("-");
        if (x[1] == 1) {
            x[0] --;
            x[1] = 13
        }
        x[1] --;
        return parseInt(((new Date()).valueOf() - (new Date(x[0], x[1], x[2])).valueOf()) / (24 * 3600 * 1000))
    }
};
YYETS.TvResourceDataList = function(a, b) {
    YYETS.DataList.call(this, a, b)
};
YYETS.TvResourceDataList.prototype = {
    fetch: function(c, a) {
        var b = this;
        b.clear();
        YYETS.Util.scrollTop(b.container);
        b.container.html("<p style='text-align:center'><img src='" + YYETS.CONST.RES_URL + "/images/loading.gif' /></p>");
        $.get(this.ajax.fetch_url, c, function(e) {
            b.clear();
            if (e.res) {
                e.res.forEach(function(f, d) {
                    var g = {
                        id: f.id,
                        cnname: f.cnname || "",
                        enname: f.enname,
                        tvstation: f.tvstation || "",
                        area: f.area,
                        rank: f.rank || "鏃�",
                        desc: f.content || "",
                        premiere: f.premiere || "",
                        actors: f.actors || "",
                        favorite: f.favorite || "",
                        formats: f.formats || "",
                        cates: f.cates || "",
                        counts: f.counts || 0,
                        updatetime: f.updatetime || "",
                        score: f.score > 0 ? f.score : "N/A",
                        watched: f.watched,
                        dateline: f.ddd || "",
                        views: f.views || 0,
                        poster: f.poster || ""
                    };
                    b.add(new TvResourceItem(d, g))
                });
                b.print();
                a.setOption({
                    total: e.counts
                }).print()
            }
        }, "json")
    }
};
extend(YYETS.TvResourceDataList, YYETS.DataList);
var TvResourceItem = function(b, a) {
    ListItem.call(this, b);
    this.itemid = b;
    if (typeof a == "object") {
        this.id = a.id;
        this.cnname = a.cnname;
        this.enname = a.enname;
        this.tvstation = a.tvstation;
        this.area = a.area;
        this.rank = a.rank;
        this.desc = a.desc;
        this.premiere = a.premiere;
        this.actors = a.actors;
        this.favorite = a.favorite;
        this.formats = a.formats;
        this.cates = a.cates;
        this.counts = a.counts;
        this.updatetime = a.updatetime;
        this.score = a.score;
        this.dateline = a.dateline;
        this.watched = a.watched;
        this.poster = a.poster
    }
};
TvResourceItem.prototype = {
    print: function(b, c) {
        this.itemid = c.index || 0;
        b = (b instanceof jQuery) ? b : $(b);
        var d = '<li class="clearfix">';
        d += '<div class="f_l_img">';
        d += '<a class="imglink" href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '" target="_blank"><img src="' + YYETS.CONST.IMG_URL + this.poster + '"></a><br>';
        d += " <strong>鎺掑悕锛�" + this.rank + "</strong>";
        d += " </div>";
        d += ' <div class="f_r_info">';
        d += "<dl>";
        var a = new Date(this.premiere.substring(0, 10)).getTime() > new Date().getTime();
        d += ' <dt class="f14"><strong><a href="' + YYETS.CONST.WWW_URL + "resource/" + this.id + '" target="_blank">' + this.cnname + "(" + this.enname + ")</a></strong>";
        if (a) {
            d += '<font class="f5 f14">鏈挱鍑�</font></dt>'
        } else {
            d += '<font class="f5 f14">宸叉挱鍑�</font></dt>'
        }
        d += '  <dd class="list_a">';
        d += "<div><span>鐢佃鍙帮細</span> " + this.tvstation + "</div>";
        d += " <div><span>涓�  婕旓細</span> " + this.actors + "</div>";
        d += " <div><span>绫�  鍨嬶細</span> " + this.cates + "</div>";
        d += " <div><span>鎾�  鍑猴細</span> " + this.premiere + " " + this.area + "</div>";
        d += "<div><span>璧�  婧愶細</span> " + this.formats + "</div>";
        d += " </dd>";
        d += '<dd class="list_b">' + this.desc + "</dd>";
        d += "</dl> ";
        d += "</div>";
        d += ' <div class="f_r_info2">';
        d += '<font class="' + (this.score > 5 ? "fb" : "fa") + '">' + this.score + "</font><br><br>";
        d += ' <font class="fc">' + this.watched + "浜烘兂鐪�</font><br>";
        d += ' <font class="fc">' + this.favorite + "浜烘敹钘�</font>";
        d += " </div>";
        d += "</li>";
        b.append(d)
    }
};
YYETS.Empty = function(b, a) {
    if (b == null || b == "" || b == 0 || b == "undefined") {
        return true
    } else {
        if (typeof a == "object") {
            for (i = 0; i < a.length; i++) {
                if (b == a[i]) {
                    return true
                }
            }
            return false
        } else {
            return false
        }
    }
};
YYETS.ShowMsg = function(f, h, d) {
    $("#show_message").remove();
    if (!f) {
        return false
    }
    d = d > 0 ? d : 1500;
    var a = $('<div id="show_message" style="border: 2px solid #736519;z-index:9999;padding:10px 20px;background-color:#fff;font-size:14px;font-weight:bold;"><span>' + f + "</span></div>");
    var e = a.outerWidth();
    var g = a.outerHeight();
    var c = $(window).width();
    var b = $(window).height();
    $("body").append(a);
    e += a.find("span").outerWidth();
    g += a.find("span").outerHeight();
    if ($.browser.msie == true && $.browser.version == "6.0") {
        a.css({
            position: "absolute",
            left: (c - e) / 2,
            top: (b - g) / 2 + $(document).scrollTop()
        })
    } else {
        a.css({
            position: "fixed",
            left: (c - e) / 2,
            top: (b - g) / 2
        })
    }
    setTimeout(function() {
        a.fadeOut("slow", function() {
            $(this).remove()
        })
    }, d);
    if (typeof h == "function") {
        setTimeout(h, d)
    }
};
YYETS.Loading = function(c) {
    c = c || "show";
    if (c == "show") {
        var f = $(document).width();
        var d = $(document).height();
        var j = $(window).width();
        var b = $(window).height();
        var h = $(document).scrollTop();
        var g = 32;
        var a = 32;
        var e = '<div id="loading_back" style="width:' + f + "px;height:" + d + 'px;overflow:hidden;background-color:#000;filter:alpha(opacity=50);filter:alpha(opacity=50);opacity:0.5;position:absolute;top:0;left:0;z-index:1000"><div id="loading_pic" style="position:relative;z-index:1001;left:' + (j - g) / 2 + "px;top:" + ((b - a) / 2 + h) + 'px;"><img src="' + YYETS.CONST.RES_URL + 'images/loading.gif"></div></div>';
        $("body").append(e)
    } else {
        if (c == "hide") {
            $("#loading_back").remove()
        }
    }
};
YYETS.JQUERY = YYETS.JQUERY || {};
var yyets_jquery_delay_obj;
YYETS.JQUERY.Delay = function(a) {
    cfg = {
        obj: {},
        over: function() {},
        out: function() {},
        delay_time: 200,
        timer: 0
    };
    cfg = $.extend(cfg, a);
    cfg.obj.data(cfg);
    cfg.obj.bind("mouseenter", function() {
        yyets_jquery_delay_obj = this;
        _cfg = $.data(this);
        _cfg.timer = setTimeout("_cfg.over.apply(yyets_jquery_delay_obj)", _cfg.delay_time);
        $(this).data(_cfg)
    }).bind("mouseleave", function() {
        _cfg = $.data(this);
        clearTimeout(_cfg.timer);
        _cfg.timer = 0;
        $(this).data(_cfg);
        _cfg.out.apply(_cfg.obj)
    })
};
var yyets_tabs = [];
YYETS.JQUERY.SwitchTab = function(a) {
    i = yyets_tabs.length;
    yyets_tabs[i] = {
        cfg: {
            obj: "",
            target: "",
            className: "",
            method: "mouseover",
            effect: "",
            fadeOutTime: 500,
            callback: function() {},
            autoPlay: 0,
            autoTime: 3000
        },
        showNum: 0,
        length: 0,
        timeId: 0
    };
    yyets_tabs[i].cfg = $.extend(yyets_tabs[i].cfg, a);
    yyets_tabs[i].cfg.target.hide().first().show();
    yyets_tabs[i].length = yyets_tabs[i].cfg.obj.size();
    eventRun = function() {
        _this = $(this);
        _i = _this.parent().attr("i");
        _k = _this.attr("k");
        if (_k == yyets_tabs[_i].showNum) {
            return
        }
        yyets_tabs[_i].cfg.obj.removeClass(yyets_tabs[_i].cfg.className);
        _this.addClass(yyets_tabs[_i].cfg.className);
        if (yyets_tabs[_i].cfg.effect == "fadeOut") {
            yyets_tabs[_i].cfg.target.eq(yyets_tabs[_i].showNum).fadeOut(yyets_tabs[_i].cfg.fadeOutTime, function() {
                yyets_tabs[_i].cfg.target.eq(_k).show();
                eventComplete(_i, _k)
            })
        } else {
            yyets_tabs[_i].cfg.target.hide();
            yyets_tabs[_i].cfg.target.eq(_k).show();
            eventComplete(_i, _k)
        }
    };
    eventComplete = function(c, b) {
        yyets_tabs[c].showNum = b;
        if (typeof yyets_tabs[c].cfg.callback == "function") {
            yyets_tabs[c].cfg.callback.apply(_this)
        }
    };
    autoPlay = function(b) {
        yyets_tabs[b].timeId = setInterval(function() {
            num = parseInt(yyets_tabs[b].showNum);
            num = ++num >= yyets_tabs[b].cfg.obj.size() ? 0 : num;
            eventRun.apply(yyets_tabs[b].cfg.obj.eq(num))
        }, yyets_tabs[b].cfg.autoTime)
    };
    autoStop = function(b) {
        clearTimeout(yyets_tabs[b].timeId)
    };
    _this_ = yyets_tabs[i];
    _this_.cfg.obj.removeClass(_this_.cfg.className).each(function(c, b) {
        $(this).attr("k", c)
    }).bind(_this_.cfg.method, eventRun).parent().attr("i", i);
    _this_.cfg.target.parent().attr("i", i);
    _this_.cfg.obj.eq(0).addClass(_this_.cfg.className);
    if (_this_.cfg.autoPlay == 1) {
        _this_.cfg.obj.mouseover(function() {
            autoStop($(this).parent().attr("i"))
        }).mouseout(function() {
            autoPlay($(this).parent().attr("i"))
        });
        _this_.cfg.target.mouseover(function() {
            autoStop($(this).parent().attr("i"))
        }).mouseout(function() {
            autoPlay($(this).parent().attr("i"))
        });
        autoPlay(i)
    }
    return this
};
YYETS.JQUERY.Scroll = function(a) {
    yyets_scroll = {
        obj: {},
        time: 500
    };
    yyets_scroll = $.extend(yyets_scroll, a);
    _obj = yyets_scroll.obj;
    if (_obj.outerHeight() <= _obj.parent().outerHeight()) {
        return
    }
    _obj.wrap("<div></div>");
    _parent = _obj.parent();
    _parent.data("time", yyets_scroll.time);
    yyets_scroll.parent = _parent;
    scroll_create = function() {
        yyets_scroll.parent.css("marginTop", 0).children().eq(1).remove();
        $copy = yyets_scroll.parent.children().first().clone();
        $copy.prependTo(yyets_scroll.parent);
        yyets_scroll.parent.css("marginTop", "-" + $copy.outerHeight() + "px");
        yyets_scroll.order = 1
    };
    scroll_autoStart = function(b) {
        timer = setInterval(function() {
            _obj = b.children().eq(0);
            _size = _obj.children().size();
            _order = yyets_scroll.order;
            b.animate({
                marginTop: "+=" + _obj.children().eq(_size - _order).outerHeight() + "px"
            }, b.data("time"), function() {
                _order = yyets_scroll.order;
                if (_order == yyets_scroll.parent.children().eq(0).children().size()) {
                    scroll_create(yyets_scroll.parent)
                } else {
                    yyets_scroll.order = _order + 1
                }
            })
        }, 3000);
        yyets_scroll.parent.data("timer", timer)
    };
    scroll_autoStop = function(b) {
        clearTimeout(b.data("timer"))
    };
    _parent.bind("mouseover", function() {
        scroll_autoStop(yyets_scroll.parent)
    }).bind("mouseout", function() {
        scroll_autoStart(yyets_scroll.parent)
    });
    scroll_create(yyets_scroll.parent);
    scroll_autoStart(yyets_scroll.parent)
};
YYETS.JQUERY.Slide = function(a) {
    slide = {
        obj: {},
        target: {},
        className: {}
    };
    slide = $.extend(slide, a);
    _obj = slide.obj;
    _target = slide.target;
    _size = _obj.size();
    _width = _target.outerWidth();
    _target.mouseover(function() {
        slide_autoStop(slide.obj)
    }).mouseout(function() {
        slide_autoStart(slide.obj)
    }).parent().css("width", _width * (_size + 1));
    _obj.data("order", 1).each(function(c, b) {
        $(this).attr("num", c + 1)
    }).click(function() {
        slide.obj.removeClass(slide.className);
        $(this).addClass(slide.className);
        _order = slide.obj.data("order");
        _num = $(this).attr("num");
        if (_order == 0) {
            _move = "0px"
        } else {
            if (_order == _num) {
                return
            } else {
                if (_order > _num) {
                    _move = "+=" + (_order - _num) * _width + "px"
                } else {
                    _move = "-=" + (_num - _order) * _width + "px"
                }
            }
        }
        slide.target.parent().animate({
            marginLeft: _move
        }, 500);
        slide.obj.data("order", _num)
    }).mouseover(function() {
        slide.target.trigger("mouseover")
    }).mouseout(function() {
        slide.target.trigger("mouseout")
    });
    slide_autoStart = function(b) {
        slide_autoStop(b);
        b.timer = setInterval(function() {
            _size = b.size();
            _order = b.data("order");
            if (_order == _size) {
                _order = 0;
                slide.obj.data("order", 0)
            }
            b.eq(_order).trigger("click")
        }, 3000)
    };
    slide_autoStop = function(b) {
        clearTimeout(b.timer)
    };
    slide_autoStart(_obj)
};
YYETS.JQUERY.LazyLoad = function(d, c) {
    var a = false;
    var b = function() {
        if (a) {
            return false
        }
        var e = d.offset().top;
        if ($(window).height() + $(window).scrollTop() > e) {
            if (typeof c == "function") {
                c.call(this)
            }
            a = true
        }
    };
    $(window).scroll(b);
    $(window).resize(b);
    b()
};
YYETS.JQUERY.Corner = function(b) {
    corner_resize = function() {
        _width = a.obj.outerWidth();
        _height = a.obj.outerHeight();
        _all_width = $(window).width();
        _all_height = $(window).height();
        _scroll_top = $(document).scrollTop();
        a.obj.css({
            left: _all_width - _width,
            top: _all_height - _height + _scroll_top
        })
    };
    var a = {
        obj: {},
        close: {}
    };
    a = $.extend(a, b);
    var e = a.obj;
    var c = a.close;
    var d = e.find(".cornerAD");
    var f = Math.random();
    if (f > 0.5) {
        d.eq(1).show()
    } else {
        d.eq(0).show()
    }
    if ($.browser.msie == true && $.browser.version == "6.0") {
        e.css({
            position: "absolute",
            "z-index": "9999",
            bottom: "0",
            right: "0"
        });
        $(window).resize(function() {
            $(this).trigger("scroll")
        }).scroll(function() {
            corner_resize()
        })
    } else {
        e.css({
            position: "fixed",
            "z-index": "9999",
            bottom: "0",
            right: "0"
        })
    }
    e.show();
    if (typeof c == "object") {
        c.click(function() {
            a.obj.hide()
        })
    }
};
YYETS.JQUERY.FloatAD = function(j, a, m) {
    var b = $("#floatAD_l");
    var l = $("#floatAD_r");
    var d;
    var c = a;
    if (!c) {
        c = b.outerWidth()
    }
    var h = m;
    if (!h) {
        h = b.outerHeight()
    }
    var e = 1010;
    var f = function() {
        var n = $(window).width();
        var o = $(window).height();
        var p = (n - e - c * 2) / 2;
        if (p < 0) {
            p = 0
        } else {
            if (p >= 10) {
                p -= 10
            }
        }
        var q = (o - h) / 2;
        if (q < 0) {
            q = 0
        }
        if (d) {
            q += $(window).scrollTop()
        }
        b.css({
            left: p,
            top: q
        });
        l.css({
            right: p,
            top: q
        })
    };
    if ($.browser.msie == true && $.browser.version == "6.0") {
        d = true;
        var g = {
            position: "absolute",
            "z-index": "999"
        };
        b.css(g);
        l.css(g);
        $(window).scroll(function() {
            f()
        })
    } else {
        var g = {
            position: "fixed",
            "z-index": "999"
        };
        b.css(g);
        l.css(g)
    }
    f();
    b.show();
    l.show();
    $(window).resize(function() {
        f()
    })
};
YYETS.ShowAD = function() {
    var b = window.location.href.match(/yyets\.com(.*)/);
    var e = b == null ? "" : b[1].replace(/\/{2,}/m, "/");
    var c = ["/php/release", "/php/bbs", "/php/work"];
    for (var a = 0; a < c.length; a++) {
        var d = new RegExp(c[a], "i");
        if (e.search(d) != -1) {
            return false
        }
    }
    return true
};
YYETS.JQUERY.Dialog = function(b) {
    var f = b.obj;
    var a = b.obj.outerWidth();
    var c = b.obj.outerHeight();
    var d = $(window).outerWidth();
    var h = $(window).outerHeight();
    var e = (d - a) / 2;
    e = e > 0 ? e : 0;
    var g = (h - c) / 2;
    g = g > 0 ? g : 0;
    if ($.browser.msie == true && $.browser.version == "6.0") {
        b.obj.css({
            position: "absolute",
            "z-index": "100",
            bottom: "0",
            right: "0"
        });
        dialog_resize = function() {
            a = f.outerWidth();
            c = f.outerHeight();
            _all_width = $(window).width();
            _all_height = $(window).height();
            _scroll_top = $(document).scrollTop();
            e = (_all_width - a) / 2;
            e = e > 0 ? e : 0;
            g = (_all_height - c) / 2 + _scroll_top;
            g = g > 0 ? g : 0;
            f.css({
                left: e,
                top: g
            })
        };
        dialog_resize();
        if (typeof b.move != "object") {
            $(window).resize(function() {
                $(this).trigger("scroll")
            }).scroll(function() {
                dialog_resize()
            })
        }
    } else {
        b.obj.css({
            position: "fixed",
            zIndex: 100,
            left: e,
            top: g
        })
    }
    dialog_drag = false;
    b.obj.show();
    if (typeof b.move == "object") {
        b.move.bind("mousedown", function() {
            var j = j || window.event;
            dialog_drag = true;
            _offset = f.offset();
            _x = (j.x || j.clientX) - _offset.left;
            _y = (j.y || j.clientY) - _offset.top
        }).bind("mousemove", function(j) {
            if (!dialog_drag) {
                return
            }
            var j = j || window.event;
            e = (j.x || j.clientX) - _x;
            g = (j.y || j.clientY) - _y;
            if (!($.browser.msie && $.browser.version == "6.0")) {
                g = g - parseInt($(document).scrollTop())
            }
            f.css({
                left: e,
                top: g
            })
        }).bind("mouseup", function() {
            dialog_drag = false
        }).bind("mouseout", function() {
            dialog_drag = false
        })
    }
    b.close.click(function() {
        f.hide()
    })
};
YYETS.JQUERY.Report = function(a) {
    report_url = YYETS.CONST.WWW_URL + "report/report";
    if ($(".report_tips[show=off]").size() == 0) {
        _html = '<div class="report_tips" show="off" style="display:none;position:absolute;z-index:999;"><ul class="jb_tips"><li><label for="jb_t_1"><input type="checkbox" value="涓嶆枃鏄庢棤绱犺川瑷€璁�"><span>涓嶆枃鏄庢棤绱犺川瑷€璁�</span></label></li><li><label for="jb_t_2"><input type="checkbox" value="娑夊強鏀挎不涓庢椿鍔�"><span>娑夊強鏀挎不涓庢椿鍔�</span></label></li><li><label for="jb_t_3"><input type="checkbox" value="娑夊珜骞垮憡"><span>娑夊珜骞垮憡</span></label></li><li><label for="jb_t_4"><input type="checkbox" value="涓庢湰璧勬簮鍐呭鏃犲叧"><span>涓庢湰璧勬簮鍐呭鏃犲叧</span></label></li><li><label for="jb_t_5"><input type="checkbox" value="鐪嬩笉椤虹溂"><span>鐪嬩笉椤虹溂</span></label></li><li>琛ュ厖璇存槑:<br /><textarea style="width:170px;height:70px;"></textarea></li><li class="jb_bnts"><input type="submit" class="bnts_r7" value="鎻愪氦"><input type="reset" class="bnts_r7" value="鍙栨秷"></li></ul></div>';
        $("body").append(_html)
    }
    a.obj.each(function() {
        _itemid = typeof a.itemid == "function" ? a.itemid.call(this) : parseInt(a.itemid);
        $(this).attr({
            "report-itemid": _itemid,
            "report-channel": a.channel
        })
    }).unbind("click").click(function() {
        $(".report_tips[show=on]").remove();
        _itemid = $(this).attr("report-itemid");
        _channel = $(this).attr("report-channel");
        if ($(this).attr("report-tips") == "show") {
            $(this).removeAttr("report-tips");
            return
        }
        $(this).attr("report-tips", "show");
        _position = $(this).position();
        _left = _position.left;
        _top = _position.top;
        _obj_height = $(this).outerHeight();
        _obj = $(".report_tips").clone();
        _obj.attr({
            channel: _channel,
            itemid: _itemid,
            show: "on"
        }).css({
            left: _left,
            top: (_obj_height + _top)
        }).show().find("label span").click(function() {
            $(this).prev().trigger("click")
        }).end().insertAfter($(this)).find("input[type=submit]").unbind("click").click(function() {
            var b = [];
            $(".report_tips[show=on] input:checked").each(function() {
                b.push($(this).val())
            });
            var c = $.trim(_obj.find("textarea").val());
            if (c != "") {
                b.push(c)
            }
            if (b.length == 0) {
                YYETS.ShowMsg("璇疯嚦灏戦€夋嫨涓€涓妇鎶ョ殑鐞嗙敱");
                return
            }
            b = b.join(",");
            $.getJSON(report_url, {
                channel: $(".report_tips[show=on]").attr("channel"),
                itemid: $(".report_tips[show=on]").attr("itemid"),
                opt: b
            }, function(d) {
                YYETS.ShowMsg(d.status == 1 ? "璋㈣阿浣犵殑涓炬姤!" : d.info);
                $(".report_tips[show=on]").remove();
                $("[report-tips=show]").removeAttr("report-tips")
            })
        }).next().click(function() {
            $(".report_tips[show=on]").remove();
            $("[report-tips=show]").removeAttr("report-tips")
        })
    })
};
YYETS.JQUERY.Forbid = function(a) {
    var c = "璇峰～鍐欑瑷€鐞嗙敱";
    var b = 0;
    if ($("#forbidTips").size() == 0) {
        $("body").append('<div id="forbidTips" style="display:none;position:absolute;z-index:9999;"><ul class="jb_tips"><li><label for="jb_t_1"><input type="radio" name="forbid" value="1"><span>绂佹鍙戣█7澶�</span></label></li><li><label for="jb_t_2"><input type="radio" name="forbid" value="2"><span>姘镐箙绂佹</span></label></li><li><label for="jb_t_5"><input type="radio" name="forbid" value="3"><span>绂佹骞跺垹闄ゆ墍鏈夊笘瀛�</span></label></li><li>鐞嗙敱:<br /><textarea style="width:170px;height:70px;"></textarea></li><li class="jb_bnts"><input type="submit" class="bnts_r7" value="鎻愪氦"><input type="reset" class="bnts_r7" value="鍙栨秷"></li></ul></div>')
    }
    var d = function() {
        $("#forbidTips").hide().find("input[type=radio]").attr("checked", false).end().find("label span").click(function() {
            $(this).prev().trigger("click")
        }).end().find("textarea").val(c).css("color", "#B3BCC2").click(function() {
            $(this).css("color", "#000").val("")
        })
    };
    a.obj.click(function() {
        b = $(this).attr("forbid-uid");
        d();
        var e = $(this).position();
        $("#forbidTips").insertAfter(this).css({
            top: parseInt(e.top) + parseInt($(this).outerHeight()) + 5,
            left: e.left
        }).show()
    });
    $("#forbidTips").find("input[type=submit]").unbind("click").click(function() {
        var e = $("#forbidTips input[type=radio]:checked").val();
        var f = $.trim($("#forbidTips textarea").val());
        if (!e || !f.length || f == c) {
            YYETS.ShowMsg("璇烽€夋嫨绂佽█閫夐」浠ュ強濉啓鐞嗙敱");
            return
        }
        YYETS.Loading("show");
        $.getJSON(YYETS.CONST.WWW_URL + "forbid/forbid", {
            forbid_uid: b,
            opt: e,
            reason: f
        }, function(g) {
            if (g.status == 1) {
                YYETS.ShowMsg("鎿嶄綔瀹屾垚");
                d()
            } else {
                YYETS.ShowMsg(g.info)
            }
            YYETS.Loading("hide")
        })
    }).next().click(d)
};
YYETS.JQUERY.SIDEBACK = function() {
    if (YYETS.Empty(global_side_url)) {
        return
    }
    var c = $(".topBox").outerHeight() + $(".topBox").position().top + 1;
    var d = ($(document).width() - 980) / 2;
    var a = $(document).height() - c - $(".footer").outerHeight();
    var b = '<a id="left_back" href="' + global_side_url + '" target="_blank" style="cursor:default;display:block;width:' + d + "px;height:" + a + "px;position:absolute;top:" + c + 'px;left:0;z-index:10;"></a>              <a id="right_back" href="' + global_side_url + '" target="_blank" style="cursor:default;display:block;width:' + d + "px;height:" + a + "px;position:absolute;top:" + c + 'px;right:0;z-index:10;"></a>';
    $("body").append(b)
};
YYETS.JQUERY.SEARCHTIPS = function(c) {
    var a = "";
    var g = 0;
    var e;
    var b = $("ul#top_search_list");
    if (c < 100 || typeof c != "number") {
        c = 100
    }
    var f = $("form[name=search] input[type=text][name=keyword]");
    f.keydown(function(j) {
        clearTimeout(g);
        if (j.keyCode == 13) {
            var h = b.find("li[rel=1]");
            if (h.size() > 0) {
                h.trigger("click");
                return false
            }
        }
    }).keyup(function(l) {
        if (l.keyCode == 38 || l.keyCode == 40) {
            if (b.css("display") == "none") {
                return
            }
            var h = b.find("li[rel=1]");
            if (h.size() > 0) {
                var j = l.keyCode == 40 ? h.next() : h.prev();
                if (!j.size()) {
                    var j = l.keyCode == 40 ? b.find("li:first") : b.find("li:last")
                }
            } else {
                var j = l.keyCode == 40 ? b.find("li:first") : b.find("li:last")
            }
            j.trigger("mouseover")
        } else {
            if ($(this).val() == a || $(this).val() == "") {
                return true
            }
            b.hide();
            a = $(this).val();
            e = $("input#search_type").val();
            g = setTimeout(d, c)
        }
    });
    var d = function() {
        $.getJSON(YYETS.CONST.WWW_URL + "search/api?keyword=" + encodeURIComponent(a) + "&type=" + e, function(l) {
            var n = l.data;
            var j = "",
                m;
            for (var h = 0; h < n.length; h++) {
                switch (n[h].type) {
                    case "subtitle":
                        m = "<strong>瀛楀箷:</strong>";
                        break;
                    case "article":
                        m = "<strong>璧勮:</strong>";
                        break;
                    case "resource":
                        m = "";
                        break
                }
                j += '<li link="/' + (n[h].type == "article" ? "news" : n[h].type) + "/" + n[h].itemid + '">' + (n[h].type == "resource" ? '<div class="pic"><img src="' + n[h].poster + '"></div>' : "") + "<p>" + m + n[h].prefix + n[h].title + n[h].suffix + "</p></li>"
            }
            if (j != "") {
                b.html(j).show().find("li").mouseover(function() {
                    $(this).css("background-color", "#ddd").attr("rel", 1).siblings().css("background-color", "#fff").attr("rel", 0)
                }).click(function() {
                    window.location.href = $(this).attr("link")
                });
                $("body").one("click", function() {
                    b.hide()
                });
                $("div.searchBox").click(function(o) {
                    o.stopPropagation()
                })
            }
        })
    }
};
YYETS.JQUERY.SCROLLTOP = function() {
    var e = 15,
        b = 70,
        c = 40;
    var d = ($(document).width() - global_width) / 2 - e - 15;
    if ((c + b) > $(document).height()) {
        c = 0
    }
    var a = $('<div id="scrolltop" style="width:' + e + "px;height:" + b + "px;position:fixed;right:" + d + "px;bottom:" + c + 'px;padding:10px 5px;text-align:center;border:1px solid #B4B4B4;background-color:#F4F4F4;cursor:pointer;z-index:999;">鍥炲埌椤堕儴</div>');
    a.click(function() {
        $(document).scrollTop(0)
    });
    $("body").append(a);
    if ($(document).scrollTop() > 0 || $(window).width() <= global_width) {
        $("div#scrolltop").hide()
    }
    $(window).resize(function() {
        d = ($(document).width() - global_width) / 2 - e - 15;
        if (d < 0) {
            d = 0
        }
        if ((c + b) > $(document).height()) {
            c = 0
        }
        $("div#scrolltop").css({
            right: d,
            bottom: c
        });
        if ($(window).width() <= global_width) {
            $("div#scrolltop").hide()
        } else {
            $("div#scrolltop").show()
        }
    }).scroll(function() {
        if ($(document).scrollTop() == 0 || $(window).width() <= global_width) {
            $("div#scrolltop").hide()
        } else {
            $("div#scrolltop").show()
        }
    })
};
YYETS.JQUERY.RANDOMSHOW = function(a) {
    a.hide().eq(Math.ceil((a.size()) * Math.random()) - 1).show()
};
YYETS.JQUERY.CAROUSEL = function(d, c) {
    var a = d.hide().size();
    if (a <= 1) {
        return
    }
    var b = function(e) {
        if (e > a) {
            e = 0
        }
        d.hide().eq(e).show();
        setTimeout("carousel_show(" + (e++) + ")", c)
    };
    setTimeout("carousel_show(0)", 1)
};
YYETS.JQUERY.SCORETIPS = function(g, f, d) {
    d = d >= 1000 ? d : 1000;
    f = (f > 0 ? "+" : "-") + f;
    var a = $('<div class="logRewordTips"><span class="c">' + g + '</span><span class="m"><strong>绉垎</strong><font class="w">' + f + "</font></span></div>").appendTo("body");
    var e = a.outerWidth();
    var h = a.outerHeight();
    var c = $(window).width();
    var b = $(window).height();
    if ($.browser.msie == true && $.browser.version == "6.0") {
        a.css({
            position: "absolute",
            left: (c - e) / 2,
            top: (b - h) / 2 + $(document).scrollTop()
        })
    } else {
        a.css({
            position: "fixed",
            left: (c - e) / 2,
            top: (b - h) / 2
        })
    }
    setTimeout(function() {
        a.fadeOut("normal", function() {
            $(this).remove()
        })
    }, d)
};
jQuery.cookie = function(b, j, n) {
    if (typeof j != "undefined") {
        n = n || {};
        if (j === null) {
            j = "";
            n.expires = -1
        }
        var e = "";
        if (n.expires && (typeof n.expires == "number" || n.expires.toUTCString)) {
            var f;
            if (typeof n.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (n.expires * 60 * 60 * 1000))
            } else {
                f = n.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var m = n.path ? "; path=" + (n.path) : "";
        var g = n.domain ? "; domain=" + (n.domain) : "";
        var a = n.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, m, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var l = document.cookie.split(";");
            for (var h = 0; h < l.length; h++) {
                var c = jQuery.trim(l[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
YYETS.AdUtils = {
    is_index_page: function() {
        return window.location.pathname == "/"
    },
    is_inside_man: function() {
        var b = 0;
        var a = $.cookie("GINFO");
        if (!a) {
            return false
        }
        a = a.split("&");
        for (i in a) {
            if (typeof a[i] == "string" && a[i].indexOf("main_group_id=") >= 0) {
                b = Number(a[i].split("=")[1])
            }
        }
        return Boolean(b)
    },
    init_search_site: function() {
        var d = window.top.document.referrer;
        if (!d) {
            return false
        }
        var b = ["(www|m).baidu.com/", "www.google.[a-z.]+/", "www.sogou.com/web?", "[a-z.]+.bing.com/search?", "r.search.yahoo.[a-z.]+/", "[a-z.]+.soso.com/q?", "www.so.com/s?"];
        for (var c = 0; c < b.length; c++) {
            var e = new RegExp("^http(s)?://" + b[c], "i");
            var a = d.search(e);
            if (a >= 0) {
                YYETS.Util.setCookie("from_search", 1);
                return true
            }
        }
        return false
    },
    is_search_site: function() {
        return YYETS.Util.getCookie("from_search") == 1 ? true : false
    },
    floatad: function(d) {
        var a = window.screen.availWidth;
        var b = true;
        if (YYETS.Util.enable_cookie() && a < d) {
            b = false
        }
        if (b) {
            return true
        }
        var c = '<div style="width:160px;font-size:12px;height:23px;line-height:23px;text-align:center;margin-bottom:10px;"><a class="close_float_ad">鍏抽棴骞垮憡 X</a></div>';
        $("#floatAD_r,#floatAD_l").prepend(c);
        $("a.close_float_ad").click(function() {
            $(this).parent().parent().remove()
        });
        return false
    },
    pop: function(c, d, g) {
        var a = (new Date()).valueOf();
        var j = "-";
        if (!$.cookie(d)) {
            var b = null
        } else {
            var f = $.cookie(d).split(j);
            if (f.length != 2) {
                b = null
            } else {
                var b = Number(f[0]);
                var e = Number(f[1]);
                if ((a - e) < (g * 3600 * 1000)) {
                    return true
                }
            }
        }
        var h = 0;
        if ((!b && b != 0) || b >= (c.length - 1)) {
            h = 0
        } else {
            h = b + 1
        }
        document.write(c[h]);
        $.cookie(d, h + j + a, {
            expires: 12,
            path: "/"
        })
    },
    rich: function(b, d) {
        var a = $.cookie(d);
        if (!a && (a != 0 || a != "0")) {
            var c = null
        } else {
            var c = Number($.cookie(d))
        }
        var e = 0;
        if ((!c && c != 0) || c >= (b.length - 1)) {
            e = 0
        } else {
            e = c + 1
        }
        document.write(b[e]);
        $.cookie(d, e, {
            expires: 12,
            path: "/"
        })
    }
};
$.fn.ctrl_enter = function(a) {
    $(this).keypress(function(b) {
        if (b.ctrlKey && (b.which == 13 || b.which == 10)) {
            if (typeof a == "function") {
                a.call(this)
            } else {
                $(this).parents("form").submit()
            }
        }
    });
    return this
};

var C = new Object();

C = {
  show:false,
  post_url:YYETS.CONST.UPRES_URL+'/upload.php',
  iframe_name:'iframechannel_'+Math.floor(Math.random()*10000)+'_'+window.location.host,
  isIE:($.browser.msie==true?true:false),
  _version:$.browser.version
}

C.initWindow = function(){
  if(C.$window){
    C.showWindow();
  }else{
    C.$window = $('<div class="pop-upload-box"><div class="pop-upload-title"><a href="javascript:;" class="close">X</a><form enctype="multipart/form-data" action="'+C.post_url+'" target="'+C.iframe_name+'" method="post"><input type="file" class="file" name="uploadfile" /><input class="submit" type="button" value="\u4E0A\u4F20" /><span style="display:none;">\u4E0A\u4F20\u4E2D..</span></form></div><div style="color:red;">\u6587\u4EF6\u7C7B\u578B:jpg,png,gif,jpeg,zip,rar,7z,srt,ass,ssa,txt</div><ul></ul><div class="pop-error-message"></div></div>');
    C.$form = C.$window.find('form');
    C.$msg = C.$window.find('.pop-error-message');
    C.$file_list = C.$window.find('ul');
    C.$window.find('a.close').click(function(){
      C.showWindow();
    }).end().find('input:button').click(function(){
      C.$msg.val('');
      if(C.$form.find('input:file').val()=='') return;
      C.postData();
      C.$form.submit();
      C.$window.find('input:button').hide().next().show();
    }).end().find('input:file').attr('size',5);
    if(C.isIE&&C._version=='6.0') C.$window.css({position:'absolute'});
    $('body').append(C.$window);
    C.showWindow();
  }
  $(window).resize(C.changeWindowPosition);
}

C.postData = function(){
  C.$msg.text('');
  var _iframe = document.createElement("iframe");
  if(C.isIE){
    document.body.appendChild(_iframe);
    _iframe.outerHTML = '<iframe name="'+C.iframe_name+'" src="about:blank" style="display:none;"><\/iframe>';
  }else{
    _iframe.name = C.iframe_name;
    _iframe.src = 'about:blank';
    _iframe.style.display = 'none';
    document.body.appendChild(_iframe);
  }
  C.iframe = _iframe;
}

C.getData = function(RESULT){
  var iframe = C.iframe;
  eval("RESULT="+decodeURIComponent(RESULT));
  if(RESULT.status==1){
    var insert = typeof C.insert=='function'?' <a href="javascript:;" class="insert" style="color:blue;">\u63D2\u5165\u961F\u5217</a>':'';
    var _$html = $('<li><span><a href="'+YYETS.CONST.IMG_URL+RESULT.data.file+'" target="_blank">'+RESULT.data.filename+'</a></span>'+insert+' <a href="javascript:;" class="f4 delete">\u5220\u9664</a></li>');
    _$html.find('a.delete').click(function(){
      $(this).parent().remove();
    }).end().find('a.insert').data('filedata',RESULT.data).click(function(){
      if(typeof C.insert=='function'){C.insert($(this).data('filedata'));}
    });
    C.$file_list.append(_$html);
    if(typeof C.success=='function') C.success(RESULT.data);
  }else{
    C.$msg.text(RESULT.info);
  }
  C.$form.find('input:file').val('');
  $(C.iframe).remove();
  C.$window.find('input:button').show().next().hide();
}

C.showWindow = function(){
  if(C.show==false){
    C.$window.show();
    C.show = true;
    C.changeWindowPosition();
  }else{
    C.$window.hide();
    C.show = false;
  }
}

C.changeWindowPosition = function(){
  var _top = ($(window).height()-C.$window.outerHeight())/2;
  var _left = ($(window).width()-C.$window.outerWidth())/2;
  C.$window.css({top:_top,left:_left});
}