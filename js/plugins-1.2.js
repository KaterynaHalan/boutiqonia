function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

!function (e) {
    "use strict";

    function t(e) {
        if (void 0 === Function.prototype.name) {
            var t = /function\s([^(]{1,})\(/, i = t.exec(e.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
    }

    function i(e) {
        return !!/true/.test(e) || !/false/.test(e) && (isNaN(1 * e) ? e : parseFloat(e))
    }

    function n(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    var s = "6.2.4", a = {
        version: s, _plugins: {}, _uuids: [], rtl: function () {
            return "rtl" === e("html").attr("dir")
        }, plugin: function (e, i) {
            var s = i || t(e), a = n(s);
            this._plugins[a] = this[s] = e
        }, registerPlugin: function (e, i) {
            var s = i ? n(i) : t(e.constructor).toLowerCase();
            e.uuid = this.GetYoDigits(6, s), e.$element.attr("data-" + s) || e.$element.attr("data-" + s, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + s), this._uuids.push(e.uuid)
        }, unregisterPlugin: function (e) {
            var i = n(t(e.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
            for (var s in e) e[s] = null
        }, reInit: function (t) {
            var i = t instanceof e;
            try {
                if (i) t.each(function () {
                    e(this).data("zfPlugin")._init()
                }); else {
                    var s = typeof t, a = this;
                    ({
                        object: function (t) {
                            t.forEach(function (t) {
                                t = n(t), e("[data-" + t + "]").foundation("_init")
                            })
                        }, string: function () {
                            t = n(t), e("[data-" + t + "]").foundation("_init")
                        }, undefined: function () {
                            this.object(Object.keys(a._plugins))
                        }
                    })[s](t)
                }
            } catch (e) {
                console.error(e)
            } finally {
                return t
            }
        }, GetYoDigits: function (e, t) {
            return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
        }, reflow: function (t, n) {
            void 0 === n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
            var s = this;
            e.each(n, function (n, a) {
                var o = s._plugins[a];
                e(t).find("[data-" + a + "]").addBack("[data-" + a + "]").each(function () {
                    var t = e(this), n = {};
                    if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + a + " on an element that already has a Foundation plugin.");
                    t.attr("data-options") && t.attr("data-options").split(";").forEach(function (e, t) {
                        var s = e.split(":").map(function (e) {
                            return e.trim()
                        });
                        s[0] && (n[s[0]] = i(s[1]))
                    });
                    try {
                        t.data("zfPlugin", new o(e(this), n))
                    } catch (e) {
                        console.error(e)
                    } finally {
                        return
                    }
                })
            })
        }, getFnName: t, transitionend: function (e) {
            var t, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, n = document.createElement("div");
            for (var s in i) void 0 !== n.style[s] && (t = i[s]);
            return t || (t = setTimeout(function () {
                e.triggerHandler("transitionend", [e])
            }, 1), "transitionend")
        }
    };
    a.util = {
        throttle: function (e, t) {
            var i = null;
            return function () {
                var n = this, s = arguments;
                null === i && (i = setTimeout(function () {
                    e.apply(n, s), i = null
                }, t))
            }
        }
    };
    var o = function (i) {
        var n = typeof i, s = e("meta.foundation-mq"), o = e(".no-js");
        if (s.length || e('<meta class="foundation-mq">').appendTo(document.head), o.length && o.removeClass("no-js"), "undefined" === n) a.MediaQuery._init(), a.reflow(this); else {
            if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var r = Array.prototype.slice.call(arguments, 1), l = this.data("zfPlugin");
            if (void 0 === l || void 0 === l[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? t(l) : "this element") + ".");
            1 === this.length ? l[i].apply(l, r) : this.each(function (t, n) {
                l[i].apply(e(n).data("zfPlugin"), r)
            })
        }
        return this
    };
    window.Foundation = a, e.fn.foundation = o, function () {
        Date.now && window.Date.now || (window.Date.now = Date.now = function () {
            return (new Date).getTime()
        });
        for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
            var i = e[t];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function (e) {
                var t = Date.now(), i = Math.max(n + 16, t);
                return setTimeout(function () {
                    e(n = i)
                }, i - t)
            }, window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(), now: function () {
                return Date.now() - this.start
            }
        })
    }(), Function.prototype.bind || (Function.prototype.bind = function (e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), i = this, n = function () {
        }, s = function () {
            return i.apply(this instanceof n ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
    })
}







(jQuery), function (e) {
    function t(e) {
        var t = {};
        return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function (e, t) {
            var i = t.replace(/\+/g, " ").split("="), n = i[0], s = i[1];
            return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(s) : e[n] = [e[n], s] : e[n] = s, e
        }, {}) : t
    }

    var i = {
        queries: [], current: "", _init: function () {
            var i, n = this;
            i = t(e(".foundation-mq").css("font-family"));
            for (var s in i) i.hasOwnProperty(s) && n.queries.push({
                name: s,
                value: "only screen and (min-width: " + i[s] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        }, atLeast: function (e) {
            var t = this.get(e);
            return !!t && window.matchMedia(t).matches
        }, get: function (e) {
            for (var t in this.queries) if (this.queries.hasOwnProperty(t)) {
                var i = this.queries[t];
                if (e === i.name) return i.value
            }
            return null
        }, _getCurrentSize: function () {
            for (var e, t = 0; t < this.queries.length; t++) {
                var i = this.queries[t];
                window.matchMedia(i.value).matches && (e = i)
            }
            return "object" == typeof e ? e.name : e
        }, _watcher: function () {
            var t = this;
            e(window).on("resize.zf.mediaquery", function () {
                var i = t._getCurrentSize(), n = t.current;
                i !== n && (t.current = i, e(window).trigger("changed.zf.mediaquery", [i, n]))
            })
        }
    };
    Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function () {
        "use strict";
        var e = window.styleMedia || window.media;
        if (!e) {
            var t = document.createElement("style"), i = document.getElementsByTagName("script")[0], n = null;
            t.type = "text/css", t.id = "matchmediajs-test", i && i.parentNode && i.parentNode.insertBefore(t, i), n = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                matchMedium: function (e) {
                    var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return t.styleSheet ? t.styleSheet.cssText = i : t.textContent = i, "1px" === n.width
                }
            }
        }
        return function (t) {
            return {matches: e.matchMedium(t || "all"), media: t || "all"}
        }
    }()), Foundation.MediaQuery = i
}(jQuery), function (e) {
    function t(e, t, n, s) {
        var a, o, r, l, c = i(e);
        if (t) {
            var d = i(t);
            o = c.offset.top + c.height <= d.height + d.offset.top, a = c.offset.top >= d.offset.top, r = c.offset.left >= d.offset.left, l = c.offset.left + c.width <= d.width + d.offset.left
        } else o = c.offset.top + c.height <= c.windowDims.height + c.windowDims.offset.top, a = c.offset.top >= c.windowDims.offset.top, r = c.offset.left >= c.windowDims.offset.left, l = c.offset.left + c.width <= c.windowDims.width;
        var u = [o, a, r, l];
        return n ? r === l == 1 : s ? a === o == 1 : -1 === u.indexOf(!1)
    }

    function i(e, t) {
        if ((e = e.length ? e[0] : e) === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var i = e.getBoundingClientRect(), n = e.parentNode.getBoundingClientRect(),
            s = document.body.getBoundingClientRect(), a = window.pageYOffset, o = window.pageXOffset;
        return {
            width: i.width,
            height: i.height,
            offset: {top: i.top + a, left: i.left + o},
            parentDims: {width: n.width, height: n.height, offset: {top: n.top + a, left: n.left + o}},
            windowDims: {width: s.width, height: s.height, offset: {top: a, left: o}}
        }
    }

    function n(e, t, n, s, a, o) {
        var r = i(e), l = t ? i(t) : null;
        switch (n) {
            case"top":
                return {
                    left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left,
                    top: l.offset.top - (r.height + s)
                };
            case"left":
                return {left: l.offset.left - (r.width + a), top: l.offset.top};
            case"right":
                return {left: l.offset.left + l.width + a, top: l.offset.top};
            case"center top":
                return {left: l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top - (r.height + s)};
            case"center bottom":
                return {left: o ? a : l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top + l.height + s};
            case"center left":
                return {left: l.offset.left - (r.width + a), top: l.offset.top + l.height / 2 - r.height / 2};
            case"center right":
                return {left: l.offset.left + l.width + a + 1, top: l.offset.top + l.height / 2 - r.height / 2};
            case"center":
                return {
                    left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
                    top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2
                };
            case"reveal":
                return {left: (r.windowDims.width - r.width) / 2, top: r.windowDims.offset.top + s};
            case"reveal full":
                return {left: r.windowDims.offset.left, top: r.windowDims.offset.top};
            case"left bottom":
                return {left: l.offset.left, top: l.offset.top + l.height};
            case"right bottom":
                return {left: l.offset.left + l.width + a - r.width, top: l.offset.top + l.height};
            default:
                return {
                    left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left + a,
                    top: l.offset.top + l.height + s
                }
        }
    }

    Foundation.Box = {ImNotTouchingYou: t, GetDimensions: i, GetOffsets: n}
}(jQuery), function (e) {
    function t(e, t, i) {
        function n(r) {
            o || (o = window.performance.now()), a = r - o, i.apply(t), e > a ? s = window.requestAnimationFrame(n, t) : (window.cancelAnimationFrame(s), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]))
        }

        var s, a, o = null;
        s = window.requestAnimationFrame(n)
    }

    function i(t, i, a, o) {
        function r() {
            t || i.hide(), l(), o && o.apply(i)
        }

        function l() {
            i[0].style.transitionDuration = 0, i.removeClass(c + " " + d + " " + a)
        }

        if (i = e(i).eq(0), i.length) {
            var c = t ? n[0] : n[1], d = t ? s[0] : s[1];
            l(), i.addClass(a).css("transition", "none"), requestAnimationFrame(function () {
                i.addClass(c), t && i.show()
            }), requestAnimationFrame(function () {
                i[0].offsetWidth, i.css("transition", "").addClass(d)
            }), i.one(Foundation.transitionend(i), r)
        }
    }

    var n = ["mui-enter", "mui-leave"], s = ["mui-enter-active", "mui-leave-active"], a = {
        animateIn: function (e, t, n) {
            i(!0, e, t, n)
        }, animateOut: function (e, t, n) {
            i(!1, e, t, n)
        }
    };
    Foundation.Move = t, Foundation.Motion = a
}(jQuery), function (e) {
    function t() {
        a(), n(), s(), i()
    }

    function i(t) {
        var i = e("[data-yeti-box]"), n = ["dropdown", "tooltip", "reveal"];
        if (t && ("string" == typeof t ? n.push(t) : "object" == typeof t && "string" == typeof t[0] ? n.concat(t) : console.error("Plugin names must be strings")), i.length) {
            var s = n.map(function (e) {
                return "closeme.zf." + e
            }).join(" ");
            e(window).off(s).on(s, function (t, i) {
                var n = t.namespace.split(".")[0];
                e("[data-" + n + "]").not('[data-yeti-box="' + i + '"]').each(function () {
                    var t = e(this);
                    t.triggerHandler("close.zf.trigger", [t])
                })
            })
        }
    }

    function n(t) {
        var i = void 0, n = e("[data-resize]");
        n.length && e(window).off("resize.zf.trigger").on("resize.zf.trigger", function (s) {
            i && clearTimeout(i), i = setTimeout(function () {
                o || n.each(function () {
                    e(this).triggerHandler("resizeme.zf.trigger")
                }), n.attr("data-events", "resize")
            }, t || 10)
        })
    }

    function s(t) {
        var i = void 0, n = e("[data-scroll]");
        n.length && e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function (s) {
            i && clearTimeout(i), i = setTimeout(function () {
                o || n.each(function () {
                    e(this).triggerHandler("scrollme.zf.trigger")
                }), n.attr("data-events", "scroll")
            }, t || 10)
        })
    }

    function a() {
        if (!o) return !1;
        var t = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"), i = function (t) {
            var i = e(t[0].target);
            switch (i.attr("data-events")) {
                case"resize":
                    i.triggerHandler("resizeme.zf.trigger", [i]);
                    break;
                case"scroll":
                    i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]);
                    break;
                default:
                    return !1
            }
        };
        if (t.length) for (var n = 0; n <= t.length - 1; n++) {
            var s = new o(i);
            s.observe(t[n], {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: ["data-events"]
            })
        }
    }

    var o = function () {
        for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++) if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
        return !1
    }(), r = function (t, i) {
        t.data(i).split(" ").forEach(function (n) {
            e("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [t])
        })
    };
    e(document).on("click.zf.trigger", "[data-open]", function () {
        r(e(this), "open")
    }), e(document).on("click.zf.trigger", "[data-close]", function () {
        e(this).data("close") ? r(e(this), "close") : e(this).trigger("close.zf.trigger")
    }), e(document).on("click.zf.trigger", "[data-toggle]", function () {
        r(e(this), "toggle")
    }), e(document).on("close.zf.trigger", "[data-closable]", function (t) {
        t.stopPropagation();
        var i = e(this).data("closable");
        "" !== i ? Foundation.Motion.animateOut(e(this), i, function () {
            e(this).trigger("closed.zf")
        }) : e(this).fadeOut().trigger("closed.zf")
    }), e(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function () {
        var t = e(this).data("toggle-focus");
        e("#" + t).triggerHandler("toggle.zf.trigger", [e(this)])
    }), e(window).on("load", function () {
        t()
    }), Foundation.IHearYou = t
}(jQuery), function (e) {
    function t(e) {
        var t = {};
        for (var i in e) t[e[i]] = e[i];
        return t
    }

    var i = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, n = {}, s = {
        keys: t(i), parseKey: function (e) {
            var t = i[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
            return e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), t
        }, handleKey: function (t, i, s) {
            var a, o, r, l = n[i], c = this.parseKey(t);
            if (!l) return console.warn("Component not defined!");
            if (a = void 0 === l.ltr ? l : Foundation.rtl() ? e.extend({}, l.ltr, l.rtl) : e.extend({}, l.rtl, l.ltr), o = a[c], (r = s[o]) && "function" == typeof r) {
                var d = r.apply();
                (s.handled || "function" == typeof s.handled) && s.handled(d)
            } else (s.unhandled || "function" == typeof s.unhandled) && s.unhandled()
        }, findFocusable: function (t) {
            return t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                return e(this).is(":visible") && !(e(this).attr("tabindex") < 0)
            })
        }, register: function (e, t) {
            n[e] = t
        }
    };
    Foundation.Keyboard = s
}(jQuery), function (e) {
    var t = {
        Feather: function (t) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? "zf" : arguments[1];
            t.attr("role", "menubar");
            var n = t.find("li").attr({role: "menuitem"}), s = "is-" + i + "-submenu", a = s + "-item",
                o = "is-" + i + "-submenu-parent";
            t.find("a:first").attr("tabindex", 0), n.each(function () {
                var t = e(this), i = t.children("ul");
                i.length && (t.addClass(o).attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1,
                    "aria-label": t.children("a:first").text()
                }), i.addClass("submenu " + s).attr({
                    "data-submenu": "",
                    "aria-hidden": !0,
                    role: "menu"
                })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item " + a)
            })
        }, Burn: function (e, t) {
            var i = (e.find("li").removeAttr("tabindex"), "is-" + t + "-submenu"), n = i + "-item",
                s = "is-" + t + "-submenu-parent";
            e.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = t
}(jQuery), function (e) {
    function t(e, t, i) {
        var n, s, a = this, o = t.duration, r = Object.keys(e.data())[0] || "timer", l = -1;
        this.isPaused = !1, this.restart = function () {
            l = -1, clearTimeout(s), this.start()
        }, this.start = function () {
            this.isPaused = !1, clearTimeout(s), l = 0 >= l ? o : l, e.data("paused", !1), n = Date.now(), s = setTimeout(function () {
                t.infinite && a.restart(), i && "function" == typeof i && i()
            }, l), e.trigger("timerstart.zf." + r)
        }, this.pause = function () {
            this.isPaused = !0, clearTimeout(s), e.data("paused", !0);
            var t = Date.now();
            l -= t - n, e.trigger("timerpaused.zf." + r)
        }
    }

    function i(t, i) {
        function n() {
            0 === --s && i()
        }

        var s = t.length;
        0 === s && i(), t.each(function () {
            this.complete ? n() : void 0 !== this.naturalWidth && this.naturalWidth > 0 ? n() : e(this).one("load", function () {
                n()
            })
        })
    }

    Foundation.Timer = t, Foundation.onImagesLoaded = i
}(jQuery), function (e) {
    function t() {
        this.removeEventListener("touchmove", i), this.removeEventListener("touchend", t), c = !1
    }

    function i(i) {
        if (e.spotSwipe.preventDefault && i.preventDefault(), c) {
            var n, s = i.touches[0].pageX, o = (i.touches[0].pageY, a - s);
            l = (new Date).getTime() - r, Math.abs(o) >= e.spotSwipe.moveThreshold && l <= e.spotSwipe.timeThreshold && (n = o > 0 ? "left" : "right"), n && (i.preventDefault(), t.call(this), e(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }

    function n(e) {
        1 == e.touches.length && (a = e.touches[0].pageX, o = e.touches[0].pageY, c = !0, r = (new Date).getTime(), this.addEventListener("touchmove", i, !1), this.addEventListener("touchend", t, !1))
    }

    function s() {
        this.addEventListener && this.addEventListener("touchstart", n, !1)
    }

    e.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var a, o, r, l, c = !1;
    e.event.special.swipe = {setup: s}, e.each(["left", "up", "down", "right"], function () {
        e.event.special["swipe" + this] = {
            setup: function () {
                e(this).on("swipe", e.noop)
            }
        }
    })
}(jQuery), function (e) {
    e.fn.addTouch = function () {
        this.each(function (i, n) {
            e(n).bind("touchstart touchmove touchend touchcancel", function () {
                t(event)
            })
        });
        var t = function (e) {
            var t, i = e.changedTouches, n = i[0],
                s = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, a = s[e.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(a, {
                bubbles: !0,
                cancelable: !0,
                screenX: n.screenX,
                screenY: n.screenY,
                clientX: n.clientX,
                clientY: n.clientY
            }) : (t = document.createEvent("MouseEvent"), t.initMouseEvent(a, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(t)
        }
    }
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    function t(e, t) {
        return e / t
    }

    function i(e, t, i, n) {
        return Math.abs(e.position()[t] + e[n]() / 2 - i)
    }

    var n = function () {
        function n(t, i) {
            _classCallCheck(this, n), this.$element = t, this.options = e.extend({}, n.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }

        return _createClass(n, [{
            key: "_init", value: function () {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : e("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var t = !1, i = this;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = e().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : e("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), t = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function () {
                    i._setHandlePos(i.$handle2, i.options.initialEnd, !0)
                }), this._setInitAttr(1), this._events(this.$handle2)), t || this._setHandlePos(this.$handle, this.options.initialStart, !0)
            }
        }, {
            key: "_setHandlePos", value: function (e, i, n, s) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    i = parseFloat(i), i < this.options.start ? i = this.options.start : i > this.options.end && (i = this.options.end);
                    var a = this.options.doubleSided;
                    if (a) if (0 === this.handles.index(e)) {
                        var o = parseFloat(this.$handle2.attr("aria-valuenow"));
                        i = i >= o ? o - this.options.step : i
                    } else {
                        var r = parseFloat(this.$handle.attr("aria-valuenow"));
                        i = r >= i ? r + this.options.step : i
                    }
                    this.options.vertical && !n && (i = this.options.end - i);
                    var l = this, c = this.options.vertical, d = c ? "height" : "width", u = c ? "top" : "left",
                        h = e[0].getBoundingClientRect()[d], p = this.$element[0].getBoundingClientRect()[d],
                        f = t(i - this.options.start, this.options.end - this.options.start).toFixed(2),
                        m = (p - h) * f, g = (100 * t(m, p)).toFixed(this.options.decimal);
                    i = parseFloat(i.toFixed(this.options.decimal));
                    var v = {};
                    if (this._setValues(e, i), a) {
                        var y, w = 0 === this.handles.index(e), b = ~~(100 * t(h, p));
                        if (w) v[u] = g + "%", y = parseFloat(this.$handle2[0].style[u]) - g + b, s && "function" == typeof s && s(); else {
                            var $ = parseFloat(this.$handle[0].style[u]);
                            y = g - (isNaN($) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : $) + b
                        }
                        v["min-" + d] = y + "%"
                    }
                    this.$element.one("finished.zf.animate", function () {
                        l.$element.trigger("moved.zf.slider", [e])
                    });
                    var I = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                    Foundation.Move(I, e, function () {
                        e.css(u, g + "%"), l.options.doubleSided ? l.$fill.css(v) : l.$fill.css(d, 100 * f + "%")
                    }), clearTimeout(l.timeout), l.timeout = setTimeout(function () {
                        l.$element.trigger("changed.zf.slider", [e])
                    }, l.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr", value: function (e) {
                var t = this.inputs.eq(e).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(e).attr({
                    id: t,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.handles.eq(e).attr({
                    role: "slider",
                    "aria-controls": t,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": 0 === e ? this.options.initialStart : this.options.initialEnd,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues", value: function (e, t) {
                var i = this.options.doubleSided ? this.handles.index(e) : 0;
                this.inputs.eq(i).val(t), e.attr("aria-valuenow", t)
            }
        }, {
            key: "_handleEvent", value: function (n, s, a) {
                var o, r;
                if (a) o = this._adjustValue(null, a), r = !0; else {
                    n.preventDefault();
                    var l = this, c = this.options.vertical, d = c ? "height" : "width", u = c ? "top" : "left",
                        h = c ? n.pageY : n.pageX,
                        p = (this.$handle[0].getBoundingClientRect()[d], this.$element[0].getBoundingClientRect()[d]),
                        f = c ? e(window).scrollTop() : e(window).scrollLeft(), m = this.$element.offset()[u];
                    n.clientY === n.pageY && (h += f);
                    var g, v = h - m;
                    g = 0 > v ? 0 : v > p ? p : v;
                    var y = t(g, p);
                    if (o = (this.options.end - this.options.start) * y + this.options.start, Foundation.rtl() && !this.options.vertical && (o = this.options.end - o), o = l._adjustValue(null, o), r = !1, !s) {
                        var w = i(this.$handle, u, g, d);
                        s = i(this.$handle2, u, g, d) >= w ? this.$handle : this.$handle2
                    }
                }
                this._setHandlePos(s, o, r)
            }
        }, {
            key: "_adjustValue", value: function (e, t) {
                var i, n, s, a, o = this.options.step, r = parseFloat(o / 2);
                return i = e ? parseFloat(e.attr("aria-valuenow")) : t, n = i % o, s = i - n, a = s + o, 0 === n ? i : i = i >= s + r ? a : s
            }
        }, {
            key: "_events", value: function (t) {
                var i, n = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function (t) {
                        var i = n.inputs.index(e(this));
                        n._handleEvent(t, n.handles.eq(i), e(this).val())
                    }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function (t) {
                        return !n.$element.data("dragging") && void(e(t.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(t) : n._handleEvent(t, n.$handle)))
                    }), this.options.draggable) {
                    this.handles.addTouch();
                    var s = e("body");
                    t.off("mousedown.zf.slider").on("mousedown.zf.slider", function (a) {
                        t.addClass("is-dragging"), n.$fill.addClass("is-dragging"), n.$element.data("dragging", !0), i = e(a.currentTarget), s.on("mousemove.zf.slider", function (e) {
                            e.preventDefault(), n._handleEvent(e, i)
                        }).on("mouseup.zf.slider", function (e) {
                            n._handleEvent(e, i), t.removeClass("is-dragging"), n.$fill.removeClass("is-dragging"), n.$element.data("dragging", !1), s.off("mousemove.zf.slider mouseup.zf.slider")
                        })
                    }).on("selectstart.zf.slider touchmove.zf.slider", function (e) {
                        e.preventDefault()
                    })
                }
                t.off("keydown.zf.slider").on("keydown.zf.slider", function (t) {
                    var i, s = e(this), a = n.options.doubleSided ? n.handles.index(s) : 0,
                        o = parseFloat(n.inputs.eq(a).val());
                    Foundation.Keyboard.handleKey(t, "Slider", {
                        decrease: function () {
                            i = o - n.options.step
                        }, increase: function () {
                            i = o + n.options.step
                        }, decrease_fast: function () {
                            i = o - 10 * n.options.step
                        }, increase_fast: function () {
                            i = o + 10 * n.options.step
                        }, handled: function () {
                            t.preventDefault(), n._setHandlePos(s, i, !0)
                        }
                    })
                })
            }
        }, {
            key: "destroy", value: function () {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), Foundation.unregisterPlugin(this)
            }
        }]), n
    }();
    n.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500
    }, Foundation.plugin(n, "Slider")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a"), this._prepareMenu(), this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu", value: function () {
                var t = this;
                this.$submenuAnchors.each(function () {
                    var i = e(this), n = i.parent();
                    t.options.parentLink && i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), i.data("savedHref", i.attr("href")).removeAttr("href").attr("tabindex", 0), i.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    }), t._events(i)
                }), this.$submenus.each(function () {
                    var i = e(this);
                    i.find(".js-drilldown-back").length || i.prepend(t.options.backButton), t._back(i)
                }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = e(this.options.wrapper).addClass("is-drilldown"), this.$wrapper = this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))
            }
        }, {
            key: "_events", value: function (t) {
                var i = this;
                t.off("click.zf.drilldown").on("click.zf.drilldown", function (n) {
                    if (e(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (n.stopImmediatePropagation(), n.preventDefault()), i._show(t.parent("li")), i.options.closeOnClick) {
                        var s = e("body");
                        s.off(".zf.drilldown").on("click.zf.drilldown", function (t) {
                            t.target === i.$element[0] || e.contains(i.$element[0], t.target) || (t.preventDefault(), i._hideAll(), s.off(".zf.drilldown"))
                        })
                    }
                })
            }
        }, {
            key: "_keyboardEvents", value: function () {
                var t = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown", function (i) {
                    var n, s, a = e(this), o = a.parent("li").parent("ul").children("li").children("a");
                    o.each(function (t) {
                        return e(this).is(a) ? (n = o.eq(Math.max(0, t - 1)), void(s = o.eq(Math.min(t + 1, o.length - 1)))) : void 0
                    }), Foundation.Keyboard.handleKey(i, "Drilldown", {
                        next: function () {
                            return a.is(t.$submenuAnchors) ? (t._show(a.parent("li")), a.parent("li").one(Foundation.transitionend(a), function () {
                                a.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                            }), !0) : void 0
                        }, previous: function () {
                            return t._hide(a.parent("li").parent("ul")), a.parent("li").parent("ul").one(Foundation.transitionend(a), function () {
                                setTimeout(function () {
                                    a.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0
                        }, up: function () {
                            return n.focus(), !0
                        }, down: function () {
                            return s.focus(), !0
                        }, close: function () {
                            t._back()
                        }, open: function () {
                            return a.is(t.$menuItems) ? a.is(t.$submenuAnchors) ? (t._show(a.parent("li")), a.parent("li").one(Foundation.transitionend(a), function () {
                                a.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                            }), !0) : void 0 : (t._hide(a.parent("li").parent("ul")), a.parent("li").parent("ul").one(Foundation.transitionend(a), function () {
                                setTimeout(function () {
                                    a.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0)
                        }, handled: function (e) {
                            e && i.preventDefault(), i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll", value: function () {
                var e = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                e.one(Foundation.transitionend(e), function (t) {
                    e.removeClass("is-active is-closing")
                }), this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back", value: function (e) {
                var t = this;
                e.off("click.zf.drilldown"), e.children(".js-drilldown-back").on("click.zf.drilldown", function (i) {
                    i.stopImmediatePropagation(), t._hide(e);
                    var n = e.parent("li").parent("ul").parent("li");
                    n.length && t._show(n)
                })
            }
        }, {
            key: "_menuLinkEvents", value: function () {
                var e = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function (t) {
                    setTimeout(function () {
                        e._hideAll()
                    }, 0)
                })
            }
        }, {
            key: "_show", value: function (e) {
                e.attr("aria-expanded", !0), e.children("[data-submenu]").addClass("is-active").attr("aria-hidden", !1), this.$element.trigger("open.zf.drilldown", [e])
            }
        }, {
            key: "_hide", value: function (e) {
                e.parent("li").attr("aria-expanded", !1), e.attr("aria-hidden", !0).addClass("is-closing").one(Foundation.transitionend(e), function () {
                    e.removeClass("is-active is-closing"), e.blur()
                }), e.trigger("hide.zf.drilldown", [e])
            }
        }, {
            key: "_getMaxDims", value: function () {
                var e = 0, t = {};
                return this.$submenus.add(this.$element).each(function (t, i) {
                    var n = i.getBoundingClientRect().height;
                    n > e && (e = n)
                }), t["min-height"] = e + "px", t["max-width"] = this.$element[0].getBoundingClientRect().width + "px", t
            }
        }, {
            key: "destroy", value: function () {
                this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function () {
                    e(this).off(".zf.drilldown")
                }), this.$element.find("a").each(function () {
                    var t = e(this);
                    t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
                }), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1
    }, Foundation.plugin(t, "Drilldown")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "menu",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function () {
                    var t = this.id || Foundation.GetYoDigits(6, "acc-menu-link"), i = e(this),
                        n = i.children("[data-submenu]"), s = n[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                        a = n.hasClass("is-active");
                    i.attr({"aria-controls": s, "aria-expanded": a, role: "menuitem", id: t}), n.attr({
                        "aria-labelledby": t,
                        "aria-hidden": !a,
                        role: "menu",
                        id: s
                    })
                });
                var t = this.$element.find(".is-active");
                if (t.length) {
                    var i = this;
                    t.each(function () {
                        i.down(e(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                this.$element.find("li").each(function () {
                    var i = e(this).children("[data-submenu]");
                    i.length && e(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function (e) {
                        e.preventDefault(), t.toggle(i)
                    })
                }).on("keydown.zf.accordionmenu", function (i) {
                    var n, s, a = e(this), o = a.parent("ul").children("li"), r = a.children("[data-submenu]");
                    o.each(function (t) {
                        return e(this).is(a) ? (n = o.eq(Math.max(0, t - 1)).find("a").first(), s = o.eq(Math.min(t + 1, o.length - 1)).find("a").first(), e(this).children("[data-submenu]:visible").length && (s = a.find("li:first-child").find("a").first()), e(this).is(":first-child") ? n = a.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()), void(e(this).is(":last-child") && (s = a.parents("li").first().next("li").find("a").first()))) : void 0
                    }), Foundation.Keyboard.handleKey(i, "AccordionMenu", {
                        open: function () {
                            r.is(":hidden") && (t.down(r), r.find("li").first().find("a").first().focus())
                        }, close: function () {
                            r.length && !r.is(":hidden") ? t.up(r) : a.parent("[data-submenu]").length && (t.up(a.parent("[data-submenu]")), a.parents("li").first().find("a").first().focus())
                        }, up: function () {
                            return n.focus(), !0
                        }, down: function () {
                            return s.focus(), !0
                        }, toggle: function () {
                            a.children("[data-submenu]").length && t.toggle(a.children("[data-submenu]"))
                        }, closeAll: function () {
                            t.hideAll()
                        }, handled: function (e) {
                            e && i.preventDefault(), i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll", value: function () {
                this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
            }
        }, {
            key: "toggle", value: function (e) {
                e.is(":animated") || (e.is(":hidden") ? this.down(e) : this.up(e))
            }
        }, {
            key: "down", value: function (e) {
                var t = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))), e.addClass("is-active").attr({"aria-hidden": !1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded": !0}), e.slideDown(t.options.slideSpeed, function () {
                    t.$element.trigger("down.zf.accordionMenu", [e])
                })
            }
        }, {
            key: "up", value: function (e) {
                var t = this;
                e.slideUp(t.options.slideSpeed, function () {
                    t.$element.trigger("up.zf.accordionMenu", [e])
                }), e.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0).parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {slideSpeed: 250, multiOpen: !0}, Foundation.plugin(t, "AccordionMenu")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var e = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", e.addClass("opens-left")) : e.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical", value: function () {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events", value: function () {
                var t = this, i = "ontouchstart" in window || void 0 !== window.ontouchstart,
                    n = "is-dropdown-submenu-parent", s = function (s) {
                        var a = e(s.target).parentsUntil("ul", "." + n), o = a.hasClass(n),
                            r = "true" === a.attr("data-is-click"), l = a.children(".is-dropdown-submenu");
                        if (!o) return void(t.options.closeOnClickInside && t._hide(a));
                        if (r) {
                            if (!t.options.closeOnClick || !t.options.clickOpen && !i || t.options.forceFollow && i) return;
                            s.stopImmediatePropagation(), s.preventDefault(), t._hide(a)
                        } else s.preventDefault(), s.stopImmediatePropagation(), t._show(l), a.add(a.parentsUntil(t.$element, "." + n)).attr("data-is-click", !0)
                    };
                (this.options.clickOpen || i) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", s), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function (i) {
                    var s = e(this);
                    s.hasClass(n) && (clearTimeout(t.delay), t.delay = setTimeout(function () {
                        t._show(s.children(".is-dropdown-submenu"))
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.dropdownmenu", function (i) {
                    var s = e(this);
                    if (s.hasClass(n) && t.options.autoclose) {
                        if ("true" === s.attr("data-is-click") && t.options.clickOpen) return !1;
                        clearTimeout(t.delay), t.delay = setTimeout(function () {
                            t._hide(s)
                        }, t.options.closingTime)
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function (i) {
                    var n, s, a = e(i.target).parentsUntil("ul", '[role="menuitem"]'), o = t.$tabs.index(a) > -1,
                        r = o ? t.$tabs : a.siblings("li").add(a);
                    r.each(function (t) {
                        return e(this).is(a) ? (n = r.eq(t - 1), void(s = r.eq(t + 1))) : void 0
                    });
                    var l = function () {
                        a.is(":last-child") || (s.children("a:first").focus(), i.preventDefault())
                    }, c = function () {
                        n.children("a:first").focus(), i.preventDefault()
                    }, d = function () {
                        var e = a.children("ul.is-dropdown-submenu");
                        e.length && (t._show(e), a.find("li > a:first").focus(), i.preventDefault())
                    }, u = function () {
                        var e = a.parent("ul").parent("li");
                        e.children("a:first").focus(), t._hide(e), i.preventDefault()
                    }, h = {
                        open: d, close: function () {
                            t._hide(t.$element), t.$menuItems.find("a:first").focus(), i.preventDefault()
                        }, handled: function () {
                            i.stopImmediatePropagation()
                        }
                    };
                    o ? t._isVertical() ? Foundation.rtl() ? e.extend(h, {
                        down: l,
                        up: c,
                        next: u,
                        previous: d
                    }) : e.extend(h, {down: l, up: c, next: d, previous: u}) : Foundation.rtl() ? e.extend(h, {
                        next: c,
                        previous: l,
                        down: d,
                        up: u
                    }) : e.extend(h, {next: l, previous: c, down: d, up: u}) : Foundation.rtl() ? e.extend(h, {
                        next: u,
                        previous: d,
                        down: l,
                        up: c
                    }) : e.extend(h, {
                        next: d,
                        previous: u,
                        down: l,
                        up: c
                    }), Foundation.Keyboard.handleKey(i, "DropdownMenu", h)
                })
            }
        }, {
            key: "_addBodyHandler", value: function () {
                var t = e(document.body), i = this;
                t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function (e) {
                    i.$element.find(e.target).length || (i._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show", value: function (t) {
                var i = this.$tabs.index(this.$tabs.filter(function (i, n) {
                    return e(n).find(t).length > 0
                })), n = t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(n, i), t.css("visibility", "hidden").addClass("js-dropdown-active").attr({"aria-hidden": !1}).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({"aria-expanded": !0});
                var s = Foundation.Box.ImNotTouchingYou(t, null, !0);
                if (!s) {
                    var a = "left" === this.options.alignment ? "-right" : "-left",
                        o = t.parent(".is-dropdown-submenu-parent");
                    o.removeClass("opens" + a).addClass("opens-" + this.options.alignment), s = Foundation.Box.ImNotTouchingYou(t, null, !0), s || o.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                t.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [t])
            }
        }, {
            key: "_hide", value: function (e, t) {
                var i;
                if (i = e && e.length ? e : void 0 !== t ? this.$tabs.not(function (e, i) {
                        return e === t
                    }) : this.$element, i.hasClass("is-active") || i.find(".is-active").length > 0) {
                    if (i.find("li.is-active").add(i).attr({
                            "aria-expanded": !1,
                            "data-is-click": !1
                        }).removeClass("is-active"), i.find("ul.js-dropdown-active").attr({"aria-hidden": !0}).removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                        var n = "left" === this.options.alignment ? "right" : "left";
                        i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + n), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [i])
                }
            }
        }, {
            key: "destroy", value: function () {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), e(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(t, "DropdownMenu")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Magellan")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = e("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                    "data-resize": t,
                    "data-scroll": t,
                    id: t
                }), this.$active = e(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints", value: function () {
                var t = this, i = document.body, n = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)), this.docHeight = Math.round(Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), this.$targets.each(function () {
                    var i = e(this), n = Math.round(i.offset().top - t.options.threshold);
                    i.targetPoint = n, t.points.push(n)
                })
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                e("html, body"), t.options.animationDuration, t.options.animationEasing, e(window).one("load", function () {
                    t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
                }), this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function (e) {
                    e.preventDefault();
                    var i = this.getAttribute("href");
                    t.scrollToLoc(i)
                })
            }
        }, {
            key: "scrollToLoc", value: function (t) {
                if (!e(t).length) return !1;
                var i = Math.round(e(t).offset().top - this.options.threshold / 2 - this.options.barOffset);
                e("html, body").stop(!0).animate({scrollTop: i}, this.options.animationDuration, this.options.animationEasing)
            }
        }, {
            key: "reflow", value: function () {
                this.calcPoints(), this._updateActive()
            }
        }, {
            key: "_updateActive", value: function () {
                var e, t = parseInt(window.pageYOffset, 10);
                if (t + this.winHeight === this.docHeight) e = this.points.length - 1; else if (t < this.points[0]) e = 0; else {
                    var i = this.scrollPos < t, n = this, s = this.points.filter(function (e, s) {
                        return i ? e - n.options.barOffset <= t : e - n.options.barOffset - n.options.threshold <= t
                    });
                    e = s.length ? s.length - 1 : 0
                }
                if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
                    var a = this.$active[0].getAttribute("href");
                    window.history.pushState ? window.history.pushState(null, null, a) : window.location.hash = a
                }
                this.scrollPos = t, this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }, {
            key: "destroy", value: function () {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                    var e = this.$active[0].getAttribute("href");
                    window.location.hash.replace(e, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    }, Foundation.plugin(t, "Magellan")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = e(i), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                if ("string" == typeof this.rules) {
                    for (var t = {}, n = this.rules.split(" "), s = 0; s < n.length; s++) {
                        var a = n[s].split("-"), o = a.length > 1 ? a[0] : "small", r = a.length > 1 ? a[1] : a[0];
                        null !== i[r] && (t[o] = i[r])
                    }
                    this.rules = t
                }
                e.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                e(window).on("changed.zf.mediaquery", function () {
                    t._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries", value: function () {
                var t, n = this;
                e.each(this.rules, function (e) {
                    Foundation.MediaQuery.atLeast(e) && (t = e)
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (e.each(i, function (e, t) {
                    n.$element.removeClass(t.cssClass)
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {})))
            }
        }, {
            key: "destroy", value: function () {
                this.currentPlugin.destroy(), e(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {};
    var i = {
        dropdown: {cssClass: "dropdown", plugin: Foundation._plugins["dropdown-menu"] || null},
        drilldown: {cssClass: "drilldown", plugin: Foundation._plugins.drilldown || null},
        accordion: {cssClass: "accordion-menu", plugin: Foundation._plugins["accordion-menu"] || null}
    };
    Foundation.plugin(t, "ResponsiveMenu")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li, [data-accordion-item]"), this.$tabs.each(function (t, i) {
                    var n = e(i), s = n.children("[data-tab-content]"),
                        a = s[0].id || Foundation.GetYoDigits(6, "accordion"), o = i.id || a + "-label";
                    n.find("a:first").attr({
                        "aria-controls": a,
                        role: "tab",
                        id: o,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), s.attr({role: "tabpanel", "aria-labelledby": o, "aria-hidden": !0, id: a})
                });
                var t = this.$element.find(".is-active").children("[data-tab-content]");
                t.length && this.down(t, !0), this._events()
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                this.$tabs.each(function () {
                    var i = e(this), n = i.children("[data-tab-content]");
                    n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function (e) {
                        e.preventDefault(), t.toggle(n)
                    }).on("keydown.zf.accordion", function (e) {
                        Foundation.Keyboard.handleKey(e, "Accordion", {
                            toggle: function () {
                                t.toggle(n)
                            }, next: function () {
                                var e = i.next().find("a").focus();
                                t.options.multiExpand || e.trigger("click.zf.accordion")
                            }, previous: function () {
                                var e = i.prev().find("a").focus();
                                t.options.multiExpand || e.trigger("click.zf.accordion")
                            }, handled: function () {
                                e.preventDefault(), e.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle", value: function (e) {
                e.parent().hasClass("is-active") ? this.up(e) : this.down(e)
            }
        }, {
            key: "down", value: function (t, i) {
                var n = this;
                if (t.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !i) {
                    var s = this.$element.children(".is-active").children("[data-tab-content]");
                    s.length && this.up(s.not(t))
                }
                t.slideDown(this.options.slideSpeed, function () {
                    n.$element.trigger("down.zf.accordion", [t])
                }), e("#" + t.attr("aria-labelledby")).attr({"aria-expanded": !0, "aria-selected": !0})
            }
        }, {
            key: "up", value: function (t) {
                var i = t.parent().siblings(), n = this;
                (this.options.allowAllClosed || i.hasClass("is-active")) && t.parent().hasClass("is-active") && (t.slideUp(n.options.slideSpeed, function () {
                    n.$element.trigger("up.zf.accordion", [t])
                }), t.attr("aria-hidden", !0).parent().removeClass("is-active"), e("#" + t.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {slideSpeed: 250, multiExpand: !1, allowAllClosed: !1}, Foundation.plugin(t, "Accordion")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element.attr("id");
                this.$anchor = e(e('[data-toggle="' + t + '"]').length ? '[data-toggle="' + t + '"]' : '[data-open="' + t + '"]'), this.$anchor.attr({
                    "aria-controls": t,
                    "data-is-focus": !1,
                    "data-yeti-box": t,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": t,
                    "data-resize": t,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                }), this._events()
            }
        }, {
            key: "getPositionClass", value: function () {
                var e = this.$element[0].className.match(/(top|left|right|bottom)/g);
                e = e ? e[0] : "";
                var t = /float-(\S+)/.exec(this.$anchor[0].className);
                return t = t ? t[1] : "", t ? t + " " + e : e
            }
        }, {
            key: "_reposition", value: function (e) {
                this.usedPositions.push(e || "bottom"), !e && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === e && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(e) : "left" === e && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(e).addClass("right") : "right" === e && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(e).addClass("left") : !e && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === e && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(e).addClass("left") : "left" === e && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(e) : ("right" === e && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom"), this.$element.removeClass(e)), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition", value: function () {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1;
                var e = this.getPositionClass(), t = Foundation.Box.GetDimensions(this.$element);
                if ("height" == ("top" == (Foundation.Box.GetDimensions(this.$anchor), "left" === e ? "left" : "right" === e ? "left" : "top") ? "height" : "width") ? this.options.vOffset : this.options.hOffset, t.width >= t.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: t.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, e, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, !1, !0) && this.counter;) this._reposition(e), this._setPosition()
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function () {
                    e('body[data-whatinput="mouse"]').is("*") && (clearTimeout(t.timeout), t.timeout = setTimeout(function () {
                        t.open(), t.$anchor.data("hover", !0)
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", function () {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function () {
                        t.close(), t.$anchor.data("hover", !1)
                    }, t.options.hoverDelay)
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function () {
                    clearTimeout(t.timeout)
                }).on("mouseleave.zf.dropdown", function () {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function () {
                        t.close(), t.$anchor.data("hover", !1)
                    }, t.options.hoverDelay)
                })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function (i) {
                    var n = e(this), s = Foundation.Keyboard.findFocusable(t.$element);
                    Foundation.Keyboard.handleKey(i, "Dropdown", {
                        tab_forward: function () {
                            t.$element.find(":focus").is(s.eq(-1)) && (t.options.trapFocus ? (s.eq(0).focus(), i.preventDefault()) : t.close())
                        }, tab_backward: function () {
                            (t.$element.find(":focus").is(s.eq(0)) || t.$element.is(":focus")) && (t.options.trapFocus ? (s.eq(-1).focus(), i.preventDefault()) : t.close())
                        }, open: function () {
                            n.is(t.$anchor) && (t.open(), t.$element.attr("tabindex", -1).focus(), i.preventDefault())
                        }, close: function () {
                            t.close(), t.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler", value: function () {
                var t = e(document.body).not(this.$element), i = this;
                t.off("click.zf.dropdown").on("click.zf.dropdown", function (e) {
                    i.$anchor.is(e.target) || i.$anchor.find(e.target).length || i.$element.find(e.target).length || (i.close(), t.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open", value: function () {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({"aria-expanded": !0}), this._setPosition(), this.$element.addClass("is-open").attr({"aria-hidden": !1}), this.options.autoFocus) {
                    var e = Foundation.Keyboard.findFocusable(this.$element);
                    e.length && e.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close", value: function () {
                if (!this.$element.hasClass("is-open")) return !1;
                if (this.$element.removeClass("is-open").attr({"aria-hidden": !0}), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var e = this.getPositionClass();
                    e && this.$element.removeClass(e), this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element])
            }
        }, {
            key: "toggle", value: function () {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover")) return;
                    this.close()
                } else this.open()
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }, Foundation.plugin(t, "Dropdown")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this.$lastTrigger = e(), this.$triggers = e(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas"), Foundation.Keyboard.register("OffCanvas", {ESCAPE: "close"})
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.$triggers = e(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.options.closeOnClick) if (e(".js-off-canvas-exit").length) this.$exiter = e(".js-off-canvas-exit"); else {
                    var i = document.createElement("div");
                    i.setAttribute("class", "js-off-canvas-exit"), e("[data-off-canvas-content]").append(i), this.$exiter = e(i)
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime || (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(e("[data-off-canvas-wrapper]")[0]).transitionDuration))
            }
        }, {
            key: "_events", value: function () {
                this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), this.options.closeOnClick && this.$exiter.length && this.$exiter.on({"click.zf.offcanvas": this.close.bind(this)})
            }
        }, {
            key: "_setMQChecker", value: function () {
                var t = this;
                e(window).on("changed.zf.mediaquery", function () {
                    Foundation.MediaQuery.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1)
                }).one("load.zf.offcanvas", function () {
                    Foundation.MediaQuery.atLeast(t.options.revealOn) && t.reveal(!0)
                })
            }
        }, {
            key: "reveal", value: function (e) {
                var t = this.$element.find("[data-close]");
                e ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), t.length && t.hide()) : (this.isRevealed = !1, this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), t.length && t.show())
            }
        }, {
            key: "open", value: function (t, i) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var n = this;
                    e(document.body), this.options.forceTop && e("body").scrollTop(0);
                    var s = e("[data-off-canvas-wrapper]");
                    s.addClass("is-off-canvas-open is-open-" + n.options.position), n.$element.addClass("is-open"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.closeOnClick && this.$exiter.addClass("is-visible"), i && (this.$lastTrigger = i), this.options.autoFocus && s.one(Foundation.transitionend(s), function () {
                        n.$element.hasClass("is-open") && (n.$element.attr("tabindex", "-1"), n.$element.focus())
                    }), this.options.trapFocus && s.one(Foundation.transitionend(s), function () {
                        n.$element.hasClass("is-open") && (n.$element.attr("tabindex", "-1"), n.trapFocus())
                    })
                }
            }
        }, {
            key: "_trapFocus", value: function () {
                var e = Foundation.Keyboard.findFocusable(this.$element), t = e.eq(0), i = e.eq(-1);
                e.off(".zf.offcanvas").on("keydown.zf.offcanvas", function (e) {
                    var n = Foundation.Keyboard.parseKey(e);
                    "TAB" === n && e.target === i[0] && (e.preventDefault(), t.focus()), "SHIFT_TAB" === n && e.target === t[0] && (e.preventDefault(), i.focus())
                })
            }
        }, {
            key: "close", value: function (t) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    e("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + i.options.position), i.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.closeOnClick && this.$exiter.removeClass("is-visible"), this.$triggers.attr("aria-expanded", "false"), this.options.trapFocus && e("[data-off-canvas-content]").removeAttr("tabindex")
                }
            }
        }, {
            key: "toggle", value: function (e, t) {
                this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t)
            }
        }, {
            key: "_handleKeyboard", value: function (e) {
                var t = this;
                Foundation.Keyboard.handleKey(e, "OffCanvas", {
                    close: function () {
                        return t.close(), t.$lastTrigger.focus(), !0
                    }, handled: function () {
                        e.stopPropagation(), e.preventDefault()
                    }
                })
            }
        }, {
            key: "destroy", value: function () {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$exiter.off(".zf.offcanvas"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }, Foundation.plugin(t, "OffCanvas")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = e('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function () {
                        var i = e(this), n = i.find("a"), s = i.hasClass("is-active"), a = n[0].hash.slice(1),
                            o = n[0].id ? n[0].id : a + "-label", r = e("#" + a);
                        i.attr({role: "presentation"}), n.attr({
                            role: "tab",
                            "aria-controls": a,
                            "aria-selected": s,
                            id: o
                        }), r.attr({
                            role: "tabpanel",
                            "aria-hidden": !s,
                            "aria-labelledby": o
                        }), s && t.options.autoFocus && n.focus()
                    }), this.options.matchHeight) {
                    var i = this.$tabContent.find("img");
                    i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events", value: function () {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), e(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
            }
        }, {
            key: "_addClickHandler", value: function () {
                var t = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function (i) {
                    i.preventDefault(), i.stopPropagation(), e(this).hasClass("is-active") || t._handleTabChange(e(this))
                })
            }
        }, {
            key: "_addKeyHandler", value: function () {
                var t = this;
                t.$element.find("li:first-of-type"), t.$element.find("li:last-of-type"), this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function (i) {
                    if (9 !== i.which) {
                        var n, s, a = e(this), o = a.parent("ul").children("li");
                        o.each(function (i) {
                            return e(this).is(a) ? void(t.options.wrapOnKeys ? (n = 0 === i ? o.last() : o.eq(i - 1), s = i === o.length - 1 ? o.first() : o.eq(i + 1)) : (n = o.eq(Math.max(0, i - 1)), s = o.eq(Math.min(i + 1, o.length - 1)))) : void 0
                        }),
                            Foundation.Keyboard.handleKey(i, "Tabs", {
                                open: function () {
                                    a.find('[role="tab"]').focus(), t._handleTabChange(a)
                                }, previous: function () {
                                    n.find('[role="tab"]').focus(), t._handleTabChange(n)
                                }, next: function () {
                                    s.find('[role="tab"]').focus(), t._handleTabChange(s)
                                }, handled: function () {
                                    i.stopPropagation(), i.preventDefault()
                                }
                            })
                    }
                })
            }
        }, {
            key: "_handleTabChange", value: function (t) {
                var i = t.find('[role="tab"]'), n = i[0].hash, s = this.$tabContent.find(n),
                    a = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected": "false"});
                e("#" + a.attr("aria-controls")).removeClass("is-active").attr({"aria-hidden": "true"}), t.addClass("is-active"), i.attr({"aria-selected": "true"}), s.addClass("is-active").attr({"aria-hidden": "false"}), this.$element.trigger("change.zf.tabs", [t])
            }
        }, {
            key: "selectTab", value: function (e) {
                var t;
                t = "object" == typeof e ? e[0].id : e, t.indexOf("#") < 0 && (t = "#" + t);
                var i = this.$tabTitles.find('[href="' + t + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(i)
            }
        }, {
            key: "_setHeight", value: function () {
                var t = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function () {
                    var i = e(this), n = i.hasClass("is-active");
                    n || i.css({visibility: "hidden", display: "block"});
                    var s = this.getBoundingClientRect().height;
                    n || i.css({visibility: "", display: ""}), t = s > t ? s : t
                }).css("height", t + "px")
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && e(window).off("changed.zf.mediaquery", this._setHeightMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(t, "Tabs")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    function t() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function i() {
        return /Android/.test(window.navigator.userAgent)
    }

    function n() {
        return t() || i()
    }

    var s = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {mq: Foundation.MediaQuery.current}, this.isMobile = n(), this.$anchor = e(e('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(e("body")), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && e(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay", value: function (t) {
                return e("<div></div>").addClass("reveal-overlay").appendTo("body")
            }
        }, {
            key: "_updatePosition", value: function () {
                var t, i, n = this.$element.outerWidth(), s = e(window).width(), a = this.$element.outerHeight(),
                    o = e(window).height();
                t = "auto" === this.options.hOffset ? parseInt((s - n) / 2, 10) : parseInt(this.options.hOffset, 10), i = "auto" === this.options.vOffset ? a > o ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - a) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({top: i + "px"}), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({left: t + "px"}), this.$element.css({margin: "0px"}))
            }
        }, {
            key: "_events", value: function () {
                var t = this, i = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this), "close.zf.trigger": function (n, s) {
                        return n.target === i.$element[0] || e(n.target).parents("[data-closable]")[0] === s ? t.close.apply(t) : void 0
                    }, "toggle.zf.trigger": this.toggle.bind(this), "resizeme.zf.trigger": function () {
                        i._updatePosition()
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function (e) {
                    13 !== e.which && 32 !== e.which || (e.stopPropagation(), e.preventDefault(), i.open())
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function (t) {
                    t.target !== i.$element[0] && !e.contains(i.$element[0], t.target) && e.contains(document, t.target) && i.close()
                }), this.options.deepLink && e(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState", value: function (e) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open", value: function () {
                var t = this;
                if (this.options.deepLink) {
                    var i = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, i) : window.location.hash = i
                }
                if (this.isActive = !0, this.$element.css({visibility: "hidden"}).show().scrollTop(0), this.options.overlay && this.$overlay.css({visibility: "hidden"}).show(), this._updatePosition(), this.$element.hide().css({visibility: ""}), this.$overlay && (this.$overlay.css({visibility: ""}).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this.options.animationIn) {
                    var n;
                    !function () {
                        var e = function () {
                            n.$element.attr({"aria-hidden": !1, tabindex: -1}).focus()
                        };
                        n = t, t.options.overlay && Foundation.Motion.animateIn(t.$overlay, "fade-in"), Foundation.Motion.animateIn(t.$element, t.options.animationIn, function () {
                            t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), e()
                        })
                    }()
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), this.$element.trigger("open.zf.reveal"), this.isMobile ? (this.originalScrollPos = window.pageYOffset, e("html, body").addClass("is-reveal-open")) : e("body").addClass("is-reveal-open"), setTimeout(function () {
                    t._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers", value: function () {
                var t = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || e("body").on("click.zf.reveal", function (i) {
                    i.target !== t.$element[0] && !e.contains(t.$element[0], i.target) && e.contains(document, i.target) && t.close()
                }), this.options.closeOnEsc && e(window).on("keydown.zf.reveal", function (e) {
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        close: function () {
                            t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                        }
                    })
                }), this.$element.on("keydown.zf.reveal", function (i) {
                    var n = e(this);
                    Foundation.Keyboard.handleKey(i, "Reveal", {
                        tab_forward: function () {
                            return t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), t.$element.find(":focus").is(t.focusableElements.eq(-1)) ? (t.focusableElements.eq(0).focus(), !0) : 0 === t.focusableElements.length || void 0
                        }, tab_backward: function () {
                            return t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), t.$element.find(":focus").is(t.focusableElements.eq(0)) || t.$element.is(":focus") ? (t.focusableElements.eq(-1).focus(), !0) : 0 === t.focusableElements.length || void 0
                        }, open: function () {
                            t.$element.find(":focus").is(t.$element.find("[data-close]")) ? setTimeout(function () {
                                t.$anchor.focus()
                            }, 1) : n.is(t.focusableElements) && t.open()
                        }, close: function () {
                            t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                        }, handled: function (e) {
                            e && i.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "close", value: function () {
                function t() {
                    i.isMobile ? (e("html, body").removeClass("is-reveal-open"), i.originalScrollPos && (e("body").scrollTop(i.originalScrollPos), i.originalScrollPos = null)) : e("body").removeClass("is-reveal-open"), i.$element.attr("aria-hidden", !0), i.$element.trigger("closed.zf.reveal")
                }

                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var i = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", t) : t(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, t) : t(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && e(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && e("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, i.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
            }
        }, {
            key: "toggle", value: function () {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy", value: function () {
                this.options.overlay && (this.$element.appendTo(e("body")), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), e(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    s.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1
    }, Foundation.plugin(s, "Reveal")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? e(this.options.template) : this._buildTemplate(t), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": t,
                    "data-yeti-box": t,
                    "data-toggle": t,
                    "data-resize": t
                }).addClass(this.options.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, {
            key: "_getPositionClass", value: function (e) {
                if (!e) return "";
                var t = e[0].className.match(/\b(top|left|right)\b/g);
                return t = t ? t[0] : ""
            }
        }, {
            key: "_buildTemplate", value: function (t) {
                var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim();
                return e("<div></div>").addClass(i).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: t
                })
            }
        }, {
            key: "_reposition", value: function (e) {
                this.usedPositions.push(e || "bottom"), !e && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === e && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(e) : "left" === e && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(e).addClass("right") : "right" === e && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(e).addClass("left") : !e && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === e && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(e).addClass("left") : "left" === e && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(e) : ("right" === e && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom"), this.template.removeClass(e)), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition", value: function () {
                var e = this._getPositionClass(this.template), t = Foundation.Box.GetDimensions(this.template),
                    i = Foundation.Box.GetDimensions(this.$element);
                if ("height" == ("top" == ("left" === e ? "left" : "right" === e ? "left" : "top") ? "height" : "width") ? this.options.vOffset : this.options.hOffset, t.width >= t.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: i.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (e || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(e), this._setPosition()
            }
        }, {
            key: "show", value: function () {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                var e = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), e.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function () {
                }), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide", value: function () {
                var e = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function () {
                    e.isActive = !1, e.isClick = !1, e.classChanged && (e.template.removeClass(e._getPositionClass(e.template)).addClass(e.options.positionClass), e.usedPositions = [], e.counter = 4, e.classChanged = !1)
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events", value: function () {
                var e = this, t = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function (t) {
                    e.isActive || (e.timeout = setTimeout(function () {
                        e.show()
                    }, e.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function (i) {
                    clearTimeout(e.timeout), (!t || e.isClick && !e.options.clickOpen) && e.hide()
                }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function (t) {
                    t.stopImmediatePropagation(), e.isClick || (e.isClick = !0, !e.options.disableHover && e.$element.attr("tabindex") || e.isActive || e.show())
                }) : this.$element.on("mousedown.zf.tooltip", function (t) {
                    t.stopImmediatePropagation(), e.isClick = !0
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function (t) {
                    e.isActive ? e.hide() : e.show()
                }), this.$element.on({"close.zf.trigger": this.hide.bind(this)}), this.$element.on("focus.zf.tooltip", function (i) {
                    return t = !0, e.isClick ? (e.options.clickOpen || (t = !1), !1) : void e.show()
                }).on("focusout.zf.tooltip", function (i) {
                    t = !1, e.isClick = !1, e.hide()
                }).on("resizeme.zf.trigger", function () {
                    e.isActive && e._setPosition()
                })
            }
        }, {
            key: "toggle", value: function () {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy", value: function () {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    }, Foundation.plugin(t, "Tooltip")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                }, rtl: {ARROW_LEFT: "next", ARROW_RIGHT: "previous"}
            })
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                var e = this.$element.find("img");
                this.$slides.filter(".is-active").length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), e.length ? Foundation.onImagesLoaded(e, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets", value: function () {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
            }
        }, {
            key: "geoSync", value: function () {
                var e = this;
                this.timer = new Foundation.Timer(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function () {
                    e.changeSlide(!0)
                }), this.timer.start()
            }
        }, {
            key: "_prepareForOrbit", value: function () {
                var e = this;
                this._setWrapperHeight(function (t) {
                    e._setSlideHeight(t)
                })
            }
        }, {
            key: "_setWrapperHeight", value: function (t) {
                var i, n = 0, s = 0;
                this.$slides.each(function () {
                    i = this.getBoundingClientRect().height, e(this).attr("data-slide", s), s && e(this).css({
                        position: "relative",
                        display: "none"
                    }), n = i > n ? i : n, s++
                }), s === this.$slides.length && (this.$wrapper.css({height: n}), t(n))
            }
        }, {
            key: "_setSlideHeight", value: function (t) {
                this.$slides.each(function () {
                    e(this).css("max-height", t)
                })
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                if (this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function (e) {
                            e.preventDefault(), t.changeSlide(!0)
                        }).on("swiperight.zf.orbit", function (e) {
                            e.preventDefault(), t.changeSlide(!1)
                        }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function () {
                            t.$element.data("clickedOn", !t.$element.data("clickedOn")), t.timer[t.$element.data("clickedOn") ? "pause" : "start"]()
                        }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function () {
                            t.timer.pause()
                        }).on("mouseleave.zf.orbit", function () {
                            t.$element.data("clickedOn") || t.timer.start()
                        })), this.options.navButtons) {
                        this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function (i) {
                            i.preventDefault(), t.changeSlide(e(this).hasClass(t.options.nextClass))
                        })
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function () {
                        if (/is-active/g.test(this.className)) return !1;
                        var i = e(this).data("slide"), n = i > t.$slides.filter(".is-active").data("slide"),
                            s = t.$slides.eq(i);
                        t.changeSlide(n, s, i)
                    }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function (i) {
                        Foundation.Keyboard.handleKey(i, "Orbit", {
                            next: function () {
                                t.changeSlide(!0)
                            }, previous: function () {
                                t.changeSlide(!1)
                            }, handled: function () {
                                e(i.target).is(t.$bullets) && t.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "changeSlide", value: function (e, t, i) {
                var n = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(n[0].className)) return !1;
                var s, a = this.$slides.first(), o = this.$slides.last(), r = e ? "Right" : "Left",
                    l = e ? "Left" : "Right", c = this;
                s = t || (e ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : a : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : o : n.prev("." + this.options.slideClass)), s.length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]), this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), this.options.useMUI ? (Foundation.Motion.animateIn(s.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + r], function () {
                    s.css({position: "relative", display: "block"}).attr("aria-live", "polite")
                }), Foundation.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function () {
                    n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [s]))
            }
        }, {
            key: "_updateBullets", value: function (e) {
                var t = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),
                    i = t.find("span:last").detach();
                this.$bullets.eq(e).addClass("is-active").append(i)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    }, Foundation.plugin(t, "Orbit")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    function t(e) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * e
    }

    var i = function () {
        function i(t, n) {
            _classCallCheck(this, i), this.$element = t, this.options = e.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Sticky")
        }

        return _createClass(i, [{
            key: "_init", value: function () {
                var t = this.$element.parent("[data-sticky-container]"),
                    i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"), n = this;
                t.length || (this.wasWrapped = !0), this.$container = t.length ? t : e(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({"data-resize": i}), this.scrollCount = this.options.checkEvery, this.isStuck = !1, e(window).one("load.zf.sticky", function () {
                    n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = e("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function () {
                        n._calc(!1)
                    }), n._events(i.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints", value: function () {
                for (var t = "" == this.options.topAnchor ? 1 : this.options.topAnchor, i = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, n = [t, i], s = {}, a = 0, o = n.length; o > a && n[a]; a++) {
                    var r;
                    if ("number" == typeof n[a]) r = n[a]; else {
                        var l = n[a].split(":"), c = e("#" + l[0]);
                        r = c.offset().top, l[1] && "bottom" === l[1].toLowerCase() && (r += c[0].getBoundingClientRect().height)
                    }
                    s[a] = r
                }
                this.points = s
            }
        }, {
            key: "_events", value: function (t) {
                var i = this, n = this.scrollListener = "scroll.zf." + t;
                this.isOn || (this.canStick && (this.isOn = !0, e(window).off(n).on(n, function (e) {
                    0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery, i._setSizes(function () {
                        i._calc(!1, window.pageYOffset)
                    })) : (i.scrollCount--, i._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function (e, s) {
                    i._setSizes(function () {
                        i._calc(!1), i.canStick ? i.isOn || i._events(t) : i.isOn && i._pauseListeners(n)
                    })
                }))
            }
        }, {
            key: "_pauseListeners", value: function (t) {
                this.isOn = !1, e(window).off(t), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc", value: function (e, t) {
                return e && this._setSizes(), this.canStick ? (t || (t = window.pageYOffset), void(t >= this.topPoint ? t <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1)
            }
        }, {
            key: "_setSticky", value: function () {
                var e = this, t = this.options.stickTo, i = "top" === t ? "marginTop" : "marginBottom",
                    n = "top" === t ? "bottom" : "top", s = {};
                s[i] = this.options[i] + "em", s[t] = 0, s[n] = "auto", s.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + t).css(s).trigger("sticky.zf.stuckto:" + t), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
                    e._setSizes()
                })
            }
        }, {
            key: "_removeSticky", value: function (e) {
                var t = this.options.stickTo, i = "top" === t, n = {},
                    s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    a = i ? "marginTop" : "marginBottom", o = e ? "top" : "bottom";
                n[a] = 0, n.bottom = "auto", n.top = e ? 0 : s, n.left = "", this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + t).addClass("is-anchored is-at-" + o).css(n).trigger("sticky.zf.unstuckfrom:" + o)
            }
        }, {
            key: "_setSizes", value: function (e) {
                this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || e && "function" == typeof e && e();
                var t = this.$container[0].getBoundingClientRect().width,
                    i = window.getComputedStyle(this.$container[0]), n = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({"max-width": t - n + "px"});
                var s = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (s = 0), this.containerHeight = s, this.$container.css({height: s}), this.elemHeight = s, this.isStuck) this.$element.css({left: this.$container.offset().left + parseInt(i["padding-left"], 10)}); else if (this.$element.hasClass("is-at-bottom")) {
                    var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", a)
                }
                this._setBreakPoints(s, function () {
                    e && "function" == typeof e && e()
                })
            }
        }, {
            key: "_setBreakPoints", value: function (e, i) {
                if (!this.canStick) {
                    if (!i || "function" != typeof i) return !1;
                    i()
                }
                var n = t(this.options.marginTop), s = t(this.options.marginBottom),
                    a = this.points ? this.points[0] : this.$anchor.offset().top,
                    o = this.points ? this.points[1] : a + this.anchorHeight, r = window.innerHeight;
                "top" === this.options.stickTo ? (a -= n, o -= e + n) : "bottom" === this.options.stickTo && (a -= r - (e + s), o -= r - s), this.topPoint = a, this.bottomPoint = o, i && "function" == typeof i && i()
            }
        }, {
            key: "destroy", value: function () {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), e(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({height: ""}), Foundation.unregisterPlugin(this)
            }
        }]), i
    }();
    i.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }, Foundation.plugin(i, "Sticky")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events", value: function () {
                e(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow", value: function () {
                var e;
                for (var t in this.rules) if (this.rules.hasOwnProperty(t)) {
                    var i = this.rules[t];
                    window.matchMedia(i.query).matches && (e = i)
                }
                e && this.replace(e.path)
            }
        }, {
            key: "_addBreakpoints", value: function () {
                for (var e in Foundation.MediaQuery.queries) if (Foundation.MediaQuery.queries.hasOwnProperty(e)) {
                    var i = Foundation.MediaQuery.queries[e];
                    t.SPECIAL_QUERIES[i.name] = i.value
                }
            }
        }, {
            key: "_generateRules", value: function (e) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var s in i) if (i.hasOwnProperty(s)) {
                    var a = i[s].slice(1, -1).split(", "), o = a.slice(0, -1).join(""), r = a[a.length - 1];
                    t.SPECIAL_QUERIES[r] && (r = t.SPECIAL_QUERIES[r]), n.push({path: o, query: r})
                }
                this.rules = n
            }
        }, {
            key: "replace", value: function (t) {
                if (this.currentPath !== t) {
                    var i = this, n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function () {
                        i.currentPath = t
                    }).trigger(n) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({"background-image": "url(" + t + ")"}).trigger(n) : e.get(t, function (s) {
                        i.$element.html(s).trigger(n), e(s).foundation(), i.currentPath = t
                    })
                }
            }
        }, {
            key: "destroy", value: function () {
            }
        }]), t
    }();
    t.defaults = {rules: null}, t.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(t, "Interchange")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = e(i), this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element.data("responsive-toggle");
                t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = e("#" + t), this.$toggler = this.$element.find("[data-toggle]"), this._update()
            }
        }, {
            key: "_events", value: function () {
                this._updateMqHandler = this._update.bind(this), e(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update", value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu", value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), e(window).off("changed.zf.mediaquery", this._updateMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {hideFor: "medium"}, Foundation.plugin(t, "ResponsiveToggle")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, i.data(), n), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t;
                this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
                var i = this.$element[0].id;
                e('[data-open="' + i + '"], [data-close="' + i + '"], [data-toggle="' + i + '"]').attr("aria-controls", i), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
            }
        }, {
            key: "_events", value: function () {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle", value: function () {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass", value: function () {
                this.$element.toggleClass(this.className);
                var e = this.$element.hasClass(this.className);
                e ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(e)
            }
        }, {
            key: "_toggleAnimate", value: function () {
                var e = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function () {
                    e._updateARIA(!0), this.trigger("on.zf.toggler")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function () {
                    e._updateARIA(!1), this.trigger("off.zf.toggler")
                })
            }
        }, {
            key: "_updateARIA", value: function (e) {
                this.$element.attr("aria-expanded", !!e)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {animate: !1}, Foundation.plugin(t, "Toggler")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Abide")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                this.$inputs = this.$element.find("input, textarea, select"), this._events()
            }
        }, {
            key: "_events", value: function () {
                var t = this;
                this.$element.off(".abide").on("reset.zf.abide", function () {
                    t.resetForm()
                }).on("submit.zf.abide", function () {
                    return t.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function (i) {
                    t.validateInput(e(i.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function (i) {
                    t.validateInput(e(i.target))
                })
            }
        }, {
            key: "_reflow", value: function () {
                this._init()
            }
        }, {
            key: "requiredCheck", value: function (e) {
                if (!e.attr("required")) return !0;
                var t = !0;
                switch (e[0].type) {
                    case"checkbox":
                        t = e[0].checked;
                        break;
                    case"select":
                    case"select-one":
                    case"select-multiple":
                        var i = e.find("option:selected");
                        i.length && i.val() || (t = !1);
                        break;
                    default:
                        e.val() && e.val().length || (t = !1)
                }
                return t
            }
        }, {
            key: "findFormError", value: function (e) {
                var t = e.siblings(this.options.formErrorSelector);
                return t.length || (t = e.parent().find(this.options.formErrorSelector)), t
            }
        }, {
            key: "findLabel", value: function (e) {
                var t = e[0].id, i = this.$element.find('label[for="' + t + '"]');
                return i.length ? i : e.closest("label")
            }
        }, {
            key: "findRadioLabels", value: function (t) {
                var i = this, n = t.map(function (t, n) {
                    var s = n.id, a = i.$element.find('label[for="' + s + '"]');
                    return a.length || (a = e(n).closest("label")), a[0]
                });
                return e(n)
            }
        }, {
            key: "addErrorClasses", value: function (e) {
                var t = this.findLabel(e), i = this.findFormError(e);
                t.length && t.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), e.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses", value: function (e) {
                var t = this.$element.find(':radio[name="' + e + '"]'), i = this.findRadioLabels(t),
                    n = this.findFormError(t);
                i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses", value: function (e) {
                if ("radio" == e[0].type) return this.removeRadioErrorClasses(e.attr("name"));
                var t = this.findLabel(e), i = this.findFormError(e);
                t.length && t.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput", value: function (e) {
                var t = this.requiredCheck(e), i = !1, n = !0, s = e.attr("data-validator"), a = !0;
                if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]')) return !0;
                switch (e[0].type) {
                    case"radio":
                        i = this.validateRadio(e.attr("name"));
                        break;
                    case"checkbox":
                        i = t;
                        break;
                    case"select":
                    case"select-one":
                    case"select-multiple":
                        i = t;
                        break;
                    default:
                        i = this.validateText(e)
                }
                s && (n = this.matchValidation(e, s, e.attr("required"))), e.attr("data-equalto") && (a = this.options.validators.equalTo(e));
                var o = -1 === [t, i, n, a].indexOf(!1), r = (o ? "valid" : "invalid") + ".zf.abide";
                return this[o ? "removeErrorClasses" : "addErrorClasses"](e), e.trigger(r, [e]), o
            }
        }, {
            key: "validateForm", value: function () {
                var t = [], i = this;
                this.$inputs.each(function () {
                    t.push(i.validateInput(e(this)))
                });
                var n = -1 === t.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
            }
        }, {
            key: "validateText", value: function (e, t) {
                t = t || e.attr("pattern") || e.attr("type");
                var i = e.val(), n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(t) ? this.options.patterns[t].test(i) : t === e.attr("type") || new RegExp(t).test(i) : e.prop("required") || (n = !0), n
            }
        }, {
            key: "validateRadio", value: function (t) {
                var i = this.$element.find(':radio[name="' + t + '"]'), n = !1, s = !1;
                return i.each(function (t, i) {
                    e(i).attr("required") && (s = !0)
                }), s || (n = !0), n || i.each(function (t, i) {
                    e(i).prop("checked") && (n = !0)
                }), n
            }
        }, {
            key: "matchValidation", value: function (e, t, i) {
                var n = this;
                return i = !!i, -1 === t.split(" ").map(function (t) {
                    return n.options.validators[t](e, i, e.parent())
                }).indexOf(!1)
            }
        }, {
            key: "resetForm", value: function () {
                var t = this.$element, i = this.options;
                e("." + i.labelErrorClass, t).not("small").removeClass(i.labelErrorClass), e("." + i.inputErrorClass, t).not("small").removeClass(i.inputErrorClass), e(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass), t.find("[data-abide-error]").css("display", "none"), e(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), e(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), e(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), t.trigger("formreset.zf.abide", [t])
            }
        }, {
            key: "destroy", value: function () {
                var t = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function () {
                    t.removeErrorClasses(e(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function (t, i, n) {
                return e("#" + t.attr("data-equalto")).val() === t.val()
            }
        }
    }, Foundation.plugin(t, "Abide")
}(jQuery);
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
!function (e) {
    var t = function () {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Equalizer")
        }

        return _createClass(t, [{
            key: "_init", value: function () {
                var t = this.$element.attr("data-equalizer") || "",
                    i = this.$element.find('[data-equalizer-watch="' + t + '"]');
                this.$watched = i.length ? i : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var n, s = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(), e(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && !1 === n || void 0 === n) && (s.length ? Foundation.onImagesLoaded(s, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents", value: function () {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe", value: function (e) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized", value: function (e) {
                e.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events", value: function () {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.isOn = !0
            }
        }, {
            key: "_checkMQ", value: function () {
                var e = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), e
            }
        }, {
            key: "_killswitch", value: function () {
            }
        }, {
            key: "_reflow", value: function () {
                return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
            }
        }, {
            key: "_isStacked", value: function () {
                return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights", value: function (e) {
                for (var t = [], i = 0, n = this.$watched.length; n > i; i++) this.$watched[i].style.height = "auto", t.push(this.$watched[i].offsetHeight);
                e(t)
            }
        }, {
            key: "getHeightsByRow", value: function (t) {
                var i = this.$watched.length ? this.$watched.first().offset().top : 0, n = [], s = 0;
                n[s] = [];
                for (var a = 0, o = this.$watched.length; o > a; a++) {
                    this.$watched[a].style.height = "auto";
                    var r = e(this.$watched[a]).offset().top;
                    r != i && (s++, n[s] = [], i = r), n[s].push([this.$watched[a], this.$watched[a].offsetHeight])
                }
                for (var l = 0, c = n.length; c > l; l++) {
                    var d = e(n[l]).map(function () {
                        return this[1]
                    }).get(), u = Math.max.apply(null, d);
                    n[l].push(u)
                }
                t(n)
            }
        }, {
            key: "applyHeight", value: function (e) {
                var t = Math.max.apply(null, e);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow", value: function (t) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var i = 0, n = t.length; n > i; i++) {
                    var s = t[i].length, a = t[i][s - 1];
                    if (2 >= s) e(t[i][0][0]).css({height: "auto"}); else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var o = 0, r = s - 1; r > o; o++) e(t[i][o][0]).css({height: a});
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "destroy", value: function () {
                this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {equalizeOnStack: !1, equalizeByRow: !1, equalizeOn: ""}, Foundation.plugin(t, "Equalizer")
}(jQuery), function (e) {
    function t() {
        e[i].glbl || (r = {
            $wndw: e(window),
            $docu: e(document),
            $html: e("html"),
            $body: e("body")
        }, s = {}, a = {}, o = {}, e.each([s, a, o], function (e, t) {
            t.add = function (e) {
                e = e.split(" ");
                for (var i = 0, n = e.length; n > i; i++) t[e[i]] = t.mm(e[i])
            }
        }), s.mm = function (e) {
            return "mm-" + e
        }, s.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), s.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, a.mm = function (e) {
            return "mm-" + e
        }, a.add("parent sub"), o.mm = function (e) {
            return e + ".mm"
        }, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[i]._c = s, e[i]._d = a, e[i]._e = o, e[i].glbl = r)
    }

    var i = "mmenu", n = "5.6.3";
    if (!(e[i] && e[i].version > n)) {
        e[i] = function (e, t, i) {
            this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = i, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var n = this.$pnls.children();
            return this._initAddons(), this.init(n), "function" == typeof this.___debug && this.___debug(), this
        }, e[i].version = n, e[i].addons = {}, e[i].uniqueId = 0, e[i].defaults = {
            extensions: [],
            navbar: {add: !0, title: "Menu", titleLink: "panel"},
            onClick: {setSelected: !0},
            slidingSubmenus: !0
        }, e[i].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400
        }, e[i].prototype = {
            init: function (e) {
                e = e.not("." + s.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
            }, update: function () {
                this.trigger("update")
            }, setSelected: function (e) {
                this.$menu.find("." + s.listview).children().removeClass(s.selected), e.addClass(s.selected), this.trigger("setSelected", e)
            }, openPanel: function (t) {
                var n = t.parent(), a = this;
                if (n.hasClass(s.vertical)) {
                    var o = n.parents("." + s.subopened);
                    if (o.length) return void this.openPanel(o.first());
                    n.addClass(s.opened), this.trigger("openPanel", t), this.trigger("openingPanel", t), this.trigger("openedPanel", t)
                } else {
                    if (t.hasClass(s.current)) return;
                    var r = this.$pnls.children("." + s.panel), l = r.filter("." + s.current);
                    r.removeClass(s.highest).removeClass(s.current).not(t).not(l).not("." + s.vertical).addClass(s.hidden), e[i].support.csstransitions || l.addClass(s.hidden), t.hasClass(s.opened) ? t.nextAll("." + s.opened).addClass(s.highest).removeClass(s.opened).removeClass(s.subopened) : (t.addClass(s.highest), l.addClass(s.subopened)), t.removeClass(s.hidden).addClass(s.current), a.trigger("openPanel", t), setTimeout(function () {
                        t.removeClass(s.subopened).addClass(s.opened), a.trigger("openingPanel", t), a.__transitionend(t, function () {
                            a.trigger("openedPanel", t)
                        }, a.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            }, closePanel: function (e) {
                var t = e.parent();
                t.hasClass(s.vertical) && (t.removeClass(s.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
            }, closeAllPanels: function () {
                this.$menu.find("." + s.listview).children().removeClass(s.selected).filter("." + s.vertical).removeClass(s.opened);
                var e = this.$pnls.children("." + s.panel), t = e.first();
                this.$pnls.children("." + s.panel).not(t).removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden), this.openPanel(t)
            }, togglePanel: function (e) {
                var t = e.parent();
                t.hasClass(s.vertical) && this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e)
            }, getInstance: function () {
                return this
            }, bind: function (e, t) {
                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
            }, trigger: function () {
                var e = this, t = Array.prototype.slice.call(arguments), i = t.shift();
                if (this.cbck[i]) for (var n = 0, s = this.cbck[i].length; s > n; n++) this.cbck[i][n].apply(e, t)
            }, _initMenu: function () {
                this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                    e(this).attr("id", s.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$pnls = e('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(s.wrapper);
                var t = [s.menu];
                this.opts.slidingSubmenus || t.push(s.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
            }, _initPanels: function (t) {
                var i = this, n = this.__findAddBack(t, "ul, ol");
                this.__refactorClass(n, this.conf.classNames.inset, "inset").addClass(s.nolistview + " " + s.nopanel), n.not("." + s.nolistview).addClass(s.listview);
                var o = this.__findAddBack(t, "." + s.listview).children();
                this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var r = e(),
                    l = t.add(t.find("." + s.panel)).add(this.__findAddBack(t, "." + s.listview).children().children(this.conf.panelNodetype)).not("." + s.nopanel);
                this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(s.vertical), l.each(function () {
                    var t = e(this), n = t;
                    t.is("ul, ol") ? (t.wrap('<div class="' + s.panel + '" />'), n = t.parent()) : n.addClass(s.panel);
                    var a = t.attr("id");
                    t.removeAttr("id"), n.attr("id", a || i.__getUniqueId()), t.hasClass(s.vertical) && (t.removeClass(i.conf.classNames.vertical), n.add(n.parent()).addClass(s.vertical)), r = r.add(n)
                });
                var c = e("." + s.panel, this.$menu);
                r.each(function (t) {
                    var n, o, r = e(this), l = r.parent(), c = l.children("a, span").first();
                    if (l.is("." + s.panels) || (l.data(a.sub, r), r.data(a.parent, l)), l.children("." + s.next).length || l.parent().is("." + s.listview) && (n = r.attr("id"), o = e('<a class="' + s.next + '" href="#' + n + '" data-target="#' + n + '" />').insertBefore(c), c.is("span") && o.addClass(s.fullsubopen)), !r.children("." + s.navbar).length && !l.hasClass(s.vertical)) {
                        l.parent().is("." + s.listview) ? l = l.closest("." + s.panel) : (c = l.closest("." + s.panel).find('a[href="#' + r.attr("id") + '"]').first(), l = c.closest("." + s.panel));
                        var d = e('<div class="' + s.navbar + '" />');
                        if (l.length) {
                            switch (n = l.attr("id"), i.opts.navbar.titleLink) {
                                case"anchor":
                                    _url = c.attr("href");
                                    break;
                                case"panel":
                                case"parent":
                                    _url = "#" + n;
                                    break;
                                default:
                                    _url = !1
                            }
                            d.append('<a class="' + s.btn + " " + s.prev + '" href="#' + n + '" data-target="#' + n + '" />').append(e('<a class="' + s.title + '"' + (_url ? ' href="' + _url + '"' : "") + " />").text(c.text())).prependTo(r), i.opts.navbar.add && r.addClass(s.hasnavbar)
                        } else i.opts.navbar.title && (d.append('<a class="' + s.title + '">' + i.opts.navbar.title + "</a>").prependTo(r), i.opts.navbar.add && r.addClass(s.hasnavbar))
                    }
                });
                var d = this.__findAddBack(t, "." + s.listview).children("." + s.selected).removeClass(s.selected).last().addClass(s.selected);
                d.add(d.parentsUntil("." + s.menu, "li")).filter("." + s.vertical).addClass(s.opened).end().each(function () {
                    e(this).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened)
                }), d.children("." + s.panel).not("." + s.vertical).addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened);
                var u = c.filter("." + s.opened);
                return u.length || (u = r.first()), u.addClass(s.opened).last().addClass(s.current), r.not("." + s.vertical).not(u.last()).addClass(s.hidden).end().filter(function () {
                    return !e(this).parent().hasClass(s.panels)
                }).appendTo(this.$pnls), r
            }, _initAnchors: function () {
                var t = this;
                r.$body.on(o.click + "-oncanvas", "a[href]", function (n) {
                    var a = e(this), o = !1, r = t.$menu.find(a).length;
                    for (var l in e[i].addons) if (e[i].addons[l].clickAnchor.call(t, a, r)) {
                        o = !0;
                        break
                    }
                    var c = a.attr("href");
                    if (!o && r && c.length > 1 && "#" == c.slice(0, 1)) try {
                        var d = e(c, t.$menu);
                        d.is("." + s.panel) && (o = !0, t[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](d))
                    } catch (e) {
                    }
                    if (o && n.preventDefault(), !o && r && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                        t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(n.target).parent());
                        var u = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == c.slice(0, 1));
                        u && n.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, u) && t.close()
                    }
                })
            }, _initAddons: function () {
                var t;
                for (t in e[i].addons) e[i].addons[t].add.call(this), e[i].addons[t].add = function () {
                };
                for (t in e[i].addons) e[i].addons[t].setup.call(this)
            }, _getOriginalMenuId: function () {
                var e = this.$menu.attr("id");
                return e && e.length && this.conf.clone && (e = s.umm(e)), e
            }, __api: function () {
                var t = this, i = {};
                return e.each(this._api, function (e) {
                    var n = this;
                    i[n] = function () {
                        var e = t[n].apply(t, arguments);
                        return void 0 === e ? i : e
                    }
                }), i
            }, __valueOrFn: function (e, t, i) {
                return "function" == typeof e ? e.call(t[0]) : void 0 === e && void 0 !== i ? i : e
            }, __refactorClass: function (e, t, i) {
                return e.filter("." + t).removeClass(t).addClass(s[i])
            }, __findAddBack: function (e, t) {
                return e.find(t).add(e.filter(t))
            }, __filterListItems: function (e) {
                return e.not("." + s.divider).not("." + s.hidden)
            }, __transitionend: function (e, t, i) {
                var n = !1, s = function () {
                    n || t.call(e[0]), n = !0
                };
                e.one(o.transitionend, s), e.one(o.webkitTransitionEnd, s), setTimeout(s, 1.1 * i)
            }, __getUniqueId: function () {
                return s.mm(e[i].uniqueId++)
            }
        }, e.fn[i] = function (n, s) {
            return t(), n = e.extend(!0, {}, e[i].defaults, n), s = e.extend(!0, {}, e[i].configuration, s), this.each(function () {
                var t = e(this);
                if (!t.data(i)) {
                    var a = new e[i](t, n, s);
                    a.$menu.data(i, a.__api())
                }
            })
        }, e[i].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function () {
                if ("undefined" != typeof Modernizr && void 0 !== Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement, t = e.style, i = "transition";
                if ("string" == typeof t[i]) return !0;
                var n = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                i = i.charAt(0).toUpperCase() + i.substr(1);
                for (var s = 0; s < n.length; s++) if ("string" == typeof t[n[s] + i]) return !0;
                return !1
            }()
        };
        var s, a, o, r
    }
}(jQuery), function (e) {
    var t = "mmenu", i = "offCanvas";
    e[t].addons[i] = {
        setup: function () {
            if (this.opts[i]) {
                var s = this.opts[i], a = this.conf[i];
                o = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == s.position || "bottom" == s.position) && (s.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), o.$allMenus = (o.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var r = [n.offcanvas];
                "left" != s.position && r.push(n.mm(s.position)), "back" != s.zposition && r.push(n.mm(s.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(n.wrapper), this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + i](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
                var l = window.location.hash;
                if (l) {
                    var c = this._getOriginalMenuId();
                    c && c == l.slice(1) && this.open()
                }
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("offcanvas slideout blocking modal background opening blocker page"), s.add("style"), a.add("resize")
        }, clickAnchor: function (e, t) {
            if (!this.opts[i]) return !1;
            var n = this._getOriginalMenuId();
            return n && e.is('[href="#' + n + '"]') ? (this.open(), !0) : o.$page ? !(!(n = o.$page.first().attr("id")) || !e.is('[href="#' + n + '"]')) && (this.close(), !0) : void 0
        }
    }, e[t].defaults[i] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[t].configuration[i] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[t].prototype.open = function () {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function () {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[t].prototype._openSetup = function () {
        var t = this, r = this.opts[i];
        this.closeAllOthers(), o.$page.each(function () {
            e(this).data(s.style, e(this).attr("style") || "")
        }), o.$wndw.trigger(a.resize + "-" + i, [!0]);
        var l = [n.opened];
        r.blockUI && l.push(n.blocking), "modal" == r.blockUI && l.push(n.modal), r.moveBackground && l.push(n.background), "left" != r.position && l.push(n.mm(this.opts[i].position)), "back" != r.zposition && l.push(n.mm(this.opts[i].zposition)), this.opts.extensions && l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function () {
            t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(n.current + " " + n.opened)
    }, e[t].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(o.$page.first(), function () {
            e.trigger("opened")
        }, this.conf.transitionDuration), o.$html.addClass(n.opening), this.trigger("opening")
    }, e[t].prototype.close = function () {
        if (this.vars.opened) {
            var t = this;
            this.__transitionend(o.$page.first(), function () {
                t.$menu.removeClass(n.current).removeClass(n.opened), o.$html.removeClass(n.opened).removeClass(n.blocking).removeClass(n.modal).removeClass(n.background).removeClass(n.mm(t.opts[i].position)).removeClass(n.mm(t.opts[i].zposition)), t.opts.extensions && o.$html.removeClass(t.opts.extensions), o.$page.each(function () {
                    e(this).attr("style", e(this).data(s.style))
                }), t.vars.opened = !1, t.trigger("closed")
            }, this.conf.transitionDuration), o.$html.removeClass(n.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[t].prototype.closeAllOthers = function () {
        o.$allMenus.not(this.$menu).each(function () {
            var i = e(this).data(t);
            i && i.close && i.close()
        })
    }, e[t].prototype.setPage = function (t) {
        var s = this, a = this.conf[i];
        t && t.length || (t = o.$body.find(a.pageSelector), a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))), t.length > 1 && a.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[i].pageNodetype + " />").parent())), t.each(function () {
            e(this).attr("id", e(this).attr("id") || s.__getUniqueId())
        }), t.addClass(n.page + " " + n.slideout), o.$page = t, this.trigger("setPage", t)
    }, e[t].prototype["_initWindow_" + i] = function () {
        o.$wndw.off(a.keydown + "-" + i).on(a.keydown + "-" + i, function (e) {
            return o.$html.hasClass(n.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var e = 0;
        o.$wndw.off(a.resize + "-" + i).on(a.resize + "-" + i, function (t, i) {
            if (1 == o.$page.length && (i || o.$html.hasClass(n.opened))) {
                var s = o.$wndw.height();
                (i || s != e) && (e = s, o.$page.css("minHeight", s))
            }
        })
    }, e[t].prototype._initBlocker = function () {
        var t = this;
        this.opts[i].blockUI && (o.$blck || (o.$blck = e('<div id="' + n.blocker + '" class="' + n.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + i + " " + a.touchmove + "-" + i).on(a.touchstart + "-" + i + " " + a.touchmove + "-" + i, function (e) {
            e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + i)
        }).off(a.mousedown + "-" + i).on(a.mousedown + "-" + i, function (e) {
            e.preventDefault(), o.$html.hasClass(n.modal) || (t.closeAllOthers(), t.close())
        }))
    };
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "scrollBugFix";
    e[t].addons[i] = {
        setup: function () {
            var s = this, r = this.opts[i];
            if (this.conf[i], o = e[t].glbl, e[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = {fix: r}), "object" != typeof r && (r = {}), r = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], r), r.fix)) {
                var l = this.$menu.attr("id"), c = !1;
                this.bind("opening", function () {
                    this.$pnls.children("." + n.current).scrollTop(0)
                }), o.$docu.on(a.touchmove, function (e) {
                    s.vars.opened && e.preventDefault()
                }), o.$body.on(a.touchstart, "#" + l + "> ." + n.panels + "> ." + n.current, function (e) {
                    s.vars.opened && (c || (c = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), c = !1))
                }).on(a.touchmove, "#" + l + "> ." + n.panels + "> ." + n.current, function (t) {
                    s.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation()
                }), o.$wndw.on(a.orientationchange, function () {
                    s.$pnls.children("." + n.current).scrollTop(0).css({"-webkit-overflow-scrolling": "auto"}).css({"-webkit-overflow-scrolling": "touch"})
                })
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {fix: !0};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "autoHeight";
    e[t].addons[i] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var s = this.opts[i];
                if (this.conf[i], o = e[t].glbl, "boolean" == typeof s && s && (s = {height: "auto"}), "string" == typeof s && (s = {height: s}), "object" != typeof s && (s = {}), s = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], s), "auto" == s.height || "highest" == s.height) {
                    this.$menu.addClass(n.autoheight);
                    var a = function (t) {
                        if (this.vars.opened) {
                            var i = parseInt(this.$pnls.css("top"), 10) || 0,
                                a = parseInt(this.$pnls.css("bottom"), 10) || 0, o = 0;
                            this.$menu.addClass(n.measureheight), "auto" == s.height ? (t = t || this.$pnls.children("." + n.current), t.is("." + n.vertical) && (t = t.parents("." + n.panel).not("." + n.vertical).first()), o = t.outerHeight()) : "highest" == s.height && this.$pnls.children().each(function () {
                                var t = e(this);
                                t.is("." + n.vertical) && (t = t.parents("." + n.panel).not("." + n.vertical).first()), o = Math.max(o, t.outerHeight())
                            }), this.$menu.height(o + i + a).removeClass(n.measureheight)
                        }
                    };
                    this.bind("opening", a), "highest" == s.height && this.bind("init", a), "auto" == s.height && (this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
                }
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("autoheight measureheight"), a.add("resize")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {height: "default"};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "backButton";
    e[t].addons[i] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var s = this, a = this.opts[i];
                if (this.conf[i], o = e[t].glbl, "boolean" == typeof a && (a = {close: a}), "object" != typeof a && (a = {}), a = e.extend(!0, {}, e[t].defaults[i], a), a.close) {
                    var r = "#" + s.$menu.attr("id");
                    this.bind("opened", function (e) {
                        location.hash != r && history.pushState(null, document.title, r)
                    }), e(window).on("popstate", function (e) {
                        o.$html.hasClass(n.opened) ? (e.stopPropagation(), s.close()) : location.hash == r && (e.stopPropagation(), s.open())
                    })
                }
            }
        }, add: function () {
            return window.history && window.history.pushState ? (n = e[t]._c, s = e[t]._d, void(a = e[t]._e)) : void(e[t].addons[i].setup = function () {
            })
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {close: !1};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "columns";
    e[t].addons[i] = {
        setup: function () {
            var s = this.opts[i];
            if (this.conf[i], o = e[t].glbl, "boolean" == typeof s && (s = {add: s}), "number" == typeof s && (s = {
                    add: !0,
                    visible: s
                }), "object" != typeof s && (s = {}), "number" == typeof s.visible && (s.visible = {
                    min: s.visible,
                    max: s.visible
                }), s = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], s), s.add) {
                s.visible.min = Math.max(1, Math.min(6, s.visible.min)), s.visible.max = Math.max(s.visible.min, Math.min(6, s.visible.max)), this.$menu.addClass(n.columns);
                for (var a = this.opts.offCanvas ? this.$menu.add(o.$html) : this.$menu, r = [], l = 0; l <= s.visible.max; l++) r.push(n.columns + "-" + l);
                r = r.join(" ");
                var c = function (e) {
                    h.call(this, this.$pnls.children("." + n.current)), s.hideNavbars && e.removeClass(n.hasnavbar)
                }, d = function () {
                    var e = this.$pnls.children("." + n.panel).filter("." + n.opened).length;
                    e = Math.min(s.visible.max, Math.max(s.visible.min, e)), a.removeClass(r).addClass(n.columns + "-" + e)
                }, u = function () {
                    this.opts.offCanvas && o.$html.removeClass(r)
                }, h = function (t) {
                    this.$pnls.children("." + n.panel).removeClass(r).filter("." + n.subopened).removeClass(n.hidden).add(t).slice(-s.visible.max).each(function (t) {
                        e(this).addClass(n.columns + "-" + t)
                    })
                };
                this.bind("open", d), this.bind("close", u), this.bind("init", c), this.bind("openPanel", h), this.bind("openingPanel", d), this.bind("openedPanel", d),
                this.opts.offCanvas || d.call(this)
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("columns")
        }, clickAnchor: function (t, s) {
            if (!this.opts[i].add) return !1;
            if (s) {
                var a = t.attr("href");
                if (a.length > 1 && "#" == a.slice(0, 1)) try {
                    if (e(a, this.$menu).is("." + n.panel)) for (var o = parseInt(t.closest("." + n.panel).attr("class").split(n.columns + "-")[1].split(" ")[0], 10) + 1; !1 !== o;) {
                        var r = this.$pnls.children("." + n.columns + "-" + o);
                        if (!r.length) {
                            o = !1;
                            break
                        }
                        o++, r.removeClass(n.subopened).removeClass(n.opened).removeClass(n.current).removeClass(n.highest).addClass(n.hidden)
                    }
                } catch (e) {
                }
            }
        }
    }, e[t].defaults[i] = {add: !1, visible: {min: 1, max: 3}, hideNavbars: !1};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "counters";
    e[t].addons[i] = {
        setup: function () {
            var a = this, r = this.opts[i];
            this.conf[i], o = e[t].glbl, "boolean" == typeof r && (r = {
                add: r,
                update: r
            }), "object" != typeof r && (r = {}), r = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], r), this.bind("init", function (t) {
                this.__refactorClass(e("em", t), this.conf.classNames[i].counter, "counter")
            }), r.add && this.bind("init", function (t) {
                var i;
                switch (r.addTo) {
                    case"panels":
                        i = t;
                        break;
                    default:
                        i = t.filter(r.addTo)
                }
                i.each(function () {
                    var t = e(this).data(s.parent);
                    t && (t.children("em." + n.counter).length || t.prepend(e('<em class="' + n.counter + '" />')))
                })
            }), r.update && this.bind("update", function () {
                this.$pnls.children("." + n.panel).each(function () {
                    var t = e(this), i = t.data(s.parent);
                    if (i) {
                        var o = i.children("em." + n.counter);
                        o.length && (t = t.children("." + n.listview), t.length && o.html(a.__filterListItems(t.children()).length))
                    }
                })
            })
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("counter search noresultsmsg")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {
        add: !1,
        addTo: "panels",
        update: !1
    }, e[t].configuration.classNames[i] = {counter: "Counter"};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "dividers";
    e[t].addons[i] = {
        setup: function () {
            var s = this, r = this.opts[i];
            if (this.conf[i], o = e[t].glbl, "boolean" == typeof r && (r = {
                    add: r,
                    fixed: r
                }), "object" != typeof r && (r = {}), r = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], r), this.bind("init", function (t) {
                    this.__refactorClass(e("li", this.$menu), this.conf.classNames[i].collapsed, "collapsed")
                }), r.add && this.bind("init", function (t) {
                    var i;
                    switch (r.addTo) {
                        case"panels":
                            i = t;
                            break;
                        default:
                            i = t.filter(r.addTo)
                    }
                    e("." + n.divider, i).remove(), i.find("." + n.listview).not("." + n.vertical).each(function () {
                        var t = "";
                        s.__filterListItems(e(this).children()).each(function () {
                            var i = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            i != t && i.length && (t = i, e('<li class="' + n.divider + '">' + i + "</li>").insertBefore(this))
                        })
                    })
                }), r.collapse && this.bind("init", function (t) {
                    e("." + n.divider, t).each(function () {
                        var t = e(this);
                        t.nextUntil("." + n.divider, "." + n.collapsed).length && (t.children("." + n.subopen).length || (t.wrapInner("<span />"), t.prepend('<a href="#" class="' + n.subopen + " " + n.fullsubopen + '" />')))
                    })
                }), r.fixed) {
                var l = function (t) {
                    if (t = t || this.$pnls.children("." + n.current), t.find("." + n.divider).not("." + n.hidden).length) {
                        this.$menu.addClass(n.hasdividers);
                        var i = t.scrollTop() || 0, s = "";
                        t.is(":visible") && t.find("." + n.divider).not("." + n.hidden).each(function () {
                            e(this).position().top + i < i + 1 && (s = e(this).text())
                        }), this.$fixeddivider.text(s)
                    } else this.$menu.removeClass(n.hasdividers)
                };
                this.$fixeddivider = e('<ul class="' + n.listview + " " + n.fixeddivider + '"><li class="' + n.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("init", function (t) {
                    t.off(a.scroll + "-dividers " + a.touchmove + "-dividers").on(a.scroll + "-dividers " + a.touchmove + "-dividers", function (t) {
                        l.call(s, e(this))
                    })
                })
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
        }, clickAnchor: function (e, t) {
            if (this.opts[i].collapse && t) {
                var s = e.parent();
                if (s.is("." + n.divider)) {
                    var a = s.nextUntil("." + n.divider, "." + n.collapsed);
                    return s.toggleClass(n.opened), a[s.hasClass(n.opened) ? "addClass" : "removeClass"](n.uncollapsed), !0
                }
            }
            return !1
        }
    }, e[t].defaults[i] = {
        add: !1,
        addTo: "panels",
        fixed: !1,
        collapse: !1
    }, e[t].configuration.classNames[i] = {collapsed: "Collapsed"};
    var n, s, a, o
}(jQuery), function (e) {
    function t(e, t, i) {
        return t > e && (e = t), e > i && (e = i), e
    }

    var i = "mmenu", n = "dragOpen";
    e[i].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var a = this, o = this.opts[n], l = this.conf[n];
                if (r = e[i].glbl, "boolean" == typeof o && (o = {open: o}), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[i].defaults[n], o), o.open) {
                    var c, d, u, h, p, f = {}, m = 0, g = !1, v = !1, y = 0, w = 0;
                    switch (this.opts.offCanvas.position) {
                        case"left":
                        case"right":
                            f.events = "panleft panright", f.typeLower = "x", f.typeUpper = "X", v = "width";
                            break;
                        case"top":
                        case"bottom":
                            f.events = "panup pandown", f.typeLower = "y", f.typeUpper = "Y", v = "height"
                    }
                    switch (this.opts.offCanvas.position) {
                        case"right":
                        case"bottom":
                            f.negative = !0, h = function (e) {
                                e >= r.$wndw[v]() - o.maxStartPos && (m = 1)
                            };
                            break;
                        default:
                            f.negative = !1, h = function (e) {
                                e <= o.maxStartPos && (m = 1)
                            }
                    }
                    switch (this.opts.offCanvas.position) {
                        case"left":
                            f.open_dir = "right", f.close_dir = "left";
                            break;
                        case"right":
                            f.open_dir = "left", f.close_dir = "right";
                            break;
                        case"top":
                            f.open_dir = "down", f.close_dir = "up";
                            break;
                        case"bottom":
                            f.open_dir = "up", f.close_dir = "down"
                    }
                    switch (this.opts.offCanvas.zposition) {
                        case"front":
                            p = function () {
                                return this.$menu
                            };
                            break;
                        default:
                            p = function () {
                                return e("." + s.slideout)
                            }
                    }
                    var b = this.__valueOrFn(o.pageNode, this.$menu, r.$page);
                    "string" == typeof b && (b = e(b));
                    new Hammer(b[0], o.vendors.hammer).on("panstart", function (e) {
                        h(e.center[f.typeLower]), r.$slideOutNodes = p(), g = f.open_dir
                    }).on(f.events + " panend", function (e) {
                        m > 0 && e.preventDefault()
                    }).on(f.events, function (e) {
                        if (c = e["delta" + f.typeUpper], f.negative && (c = -c), c != y && (g = c >= y ? f.open_dir : f.close_dir), (y = c) > o.threshold && 1 == m) {
                            if (r.$html.hasClass(s.opened)) return;
                            m = 2, a._openSetup(), a.trigger("opening"), r.$html.addClass(s.dragging), w = t(r.$wndw[v]() * l[v].perc, l[v].min, l[v].max)
                        }
                        2 == m && (d = t(y, 10, w) - ("front" == a.opts.offCanvas.zposition ? w : 0), f.negative && (d = -d), u = "translate" + f.typeUpper + "(" + d + "px )", r.$slideOutNodes.css({
                            "-webkit-transform": "-webkit-" + u,
                            transform: u
                        }))
                    }).on("panend", function (e) {
                        2 == m && (r.$html.removeClass(s.dragging), r.$slideOutNodes.css("transform", ""), a[g == f.open_dir ? "_openFinish" : "close"]()), m = 0
                    })
                }
            }
        }, add: function () {
            return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[i].addons[n].setup = function () {
            }) : (s = e[i]._c, a = e[i]._d, o = e[i]._e, void s.add("dragging"))
        }, clickAnchor: function (e, t) {
        }
    }, e[i].defaults[n] = {
        open: !1,
        maxStartPos: 100,
        threshold: 50,
        vendors: {hammer: {}}
    }, e[i].configuration[n] = {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}};
    var s, a, o, r
}(jQuery), function (e) {
    var t = "mmenu", i = "dropdown";
    e[t].addons[i] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var r = this, l = this.opts[i], c = this.conf[i];
                if (o = e[t].glbl, "boolean" == typeof l && l && (l = {drop: l}), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {of: l.position}), l = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], l), l.drop) {
                    if ("string" != typeof l.position.of) {
                        var d = this.$menu.attr("id");
                        d && d.length && (this.conf.clone && (d = n.umm(d)), l.position.of = '[href="#' + d + '"]')
                    }
                    if ("string" == typeof l.position.of) {
                        var u = e(l.position.of);
                        if (u.length) {
                            this.$menu.addClass(n.dropdown), l.tip && this.$menu.addClass(n.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && u.on(a.mouseenter + "-dropdown", function () {
                                r.open()
                            }), "hover" == l.event[1] && this.$menu.on(a.mouseleave + "-dropdown", function () {
                                r.close()
                            }), this.bind("opening", function () {
                                this.$menu.data(s.style, this.$menu.attr("style") || ""), o.$html.addClass(n.dropdown)
                            }), this.bind("closed", function () {
                                this.$menu.attr("style", this.$menu.data(s.style)), o.$html.removeClass(n.dropdown)
                            });
                            var h = function (s, a) {
                                var r = a[0], d = a[1], h = "x" == s ? "scrollLeft" : "scrollTop",
                                    p = "x" == s ? "outerWidth" : "outerHeight", f = "x" == s ? "left" : "top",
                                    m = "x" == s ? "right" : "bottom", g = "x" == s ? "width" : "height",
                                    v = "x" == s ? "maxWidth" : "maxHeight", y = null, w = o.$wndw[h](),
                                    b = u.offset()[f] -= w, $ = b + u[p](), I = o.$wndw[g](),
                                    x = c.offset.button[s] + c.offset.viewport[s];
                                if (l.position[s]) switch (l.position[s]) {
                                    case"left":
                                    case"bottom":
                                        y = "after";
                                        break;
                                    case"right":
                                    case"top":
                                        y = "before"
                                }
                                null === y && (y = I / 2 > b + ($ - b) / 2 ? "after" : "before");
                                var C, _;
                                return "after" == y ? (C = "x" == s ? b : $, _ = I - (C + x), r[f] = C + c.offset.button[s], r[m] = "auto", d.push(n["x" == s ? "tipleft" : "tiptop"])) : (C = "x" == s ? $ : b, _ = C - x, r[m] = "calc( 100% - " + (C - c.offset.button[s]) + "px )", r[f] = "auto", d.push(n["x" == s ? "tipright" : "tipbottom"])), r[v] = Math.min(e[t].configuration[i][g].max, _), [r, d]
                            }, p = function (e) {
                                if (this.vars.opened) {
                                    this.$menu.attr("style", this.$menu.data(s.style));
                                    var t = [{}, []];
                                    t = h.call(this, "y", t), t = h.call(this, "x", t), this.$menu.css(t[0]), l.tip && this.$menu.removeClass(n.tipleft + " " + n.tipright + " " + n.tiptop + " " + n.tipbottom).addClass(t[1].join(" "))
                                }
                            };
                            this.bind("opening", p), o.$wndw.on(a.resize + "-dropdown", function (e) {
                                p.call(r)
                            }), this.opts.offCanvas.blockUI || o.$wndw.on(a.scroll + "-dropdown", function (e) {
                                p.call(r)
                            })
                        }
                    }
                }
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {
        drop: !1,
        event: "click",
        position: {},
        tip: !0
    }, e[t].configuration[i] = {
        offset: {button: {x: -10, y: 10}, viewport: {x: 20, y: 20}},
        height: {max: 880},
        width: {max: 440}
    };
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "fixedElements";
    e[t].addons[i] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var n = this.opts[i];
                this.conf[i], o = e[t].glbl, n = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], n);
                var s = function (e) {
                    var t = this.conf.classNames[i].fixed;
                    this.__refactorClass(e.find("." + t), t, "slideout").appendTo(o.$body)
                };
                s.call(this, o.$page), this.bind("setPage", s)
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("fixed")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration.classNames[i] = {fixed: "Fixed"};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "iconPanels";
    e[t].addons[i] = {
        setup: function () {
            var s = this, a = this.opts[i];
            if (this.conf[i], o = e[t].glbl, "boolean" == typeof a && (a = {add: a}), "number" == typeof a && (a = {
                    add: !0,
                    visible: a
                }), "object" != typeof a && (a = {}), a = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], a), a.visible++, a.add) {
                this.$menu.addClass(n.iconpanel);
                for (var r = [], l = 0; l <= a.visible; l++) r.push(n.iconpanel + "-" + l);
                r = r.join(" ");
                var c = function (t) {
                    t.hasClass(n.vertical) || s.$pnls.children("." + n.panel).removeClass(r).filter("." + n.subopened).removeClass(n.hidden).add(t).not("." + n.vertical).slice(-a.visible).each(function (t) {
                        e(this).addClass(n.iconpanel + "-" + t)
                    })
                };
                this.bind("openPanel", c), this.bind("init", function (t) {
                    c.call(s, s.$pnls.children("." + n.current)), a.hideNavbars && t.removeClass(n.hasnavbar), t.not("." + n.vertical).each(function () {
                        e(this).children("." + n.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + n.panel).attr("id") + '" class="' + n.subblocker + '" />')
                    })
                })
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("iconpanel subblocker")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {add: !1, visible: 3, hideNavbars: !1};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "navbars";
    e[t].addons[i] = {
        setup: function () {
            var s = this, a = this.opts[i], r = this.conf[i];
            if (o = e[t].glbl, void 0 !== a) {
                a instanceof Array || (a = [a]);
                var l = {};
                e.each(a, function (o) {
                    var c = a[o];
                    "boolean" == typeof c && c && (c = {}), "object" != typeof c && (c = {}), void 0 === c.content && (c.content = ["prev", "title"]), c.content instanceof Array || (c.content = [c.content]), c = e.extend(!0, {}, s.opts.navbar, c);
                    var d = c.position, u = c.height;
                    "number" != typeof u && (u = 1), u = Math.min(4, Math.max(1, u)), "bottom" != d && (d = "top"), l[d] || (l[d] = 0), l[d]++;
                    var h = e("<div />").addClass(n.navbar + " " + n.navbar + "-" + d + " " + n.navbar + "-" + d + "-" + l[d] + " " + n.navbar + "-size-" + u);
                    l[d] += u - 1;
                    for (var p = 0, f = 0, m = c.content.length; m > f; f++) {
                        var g = e[t].addons[i][c.content[f]] || !1;
                        g ? p += g.call(s, h, c, r) : (g = c.content[f], g instanceof e || (g = e(c.content[f])), h.append(g))
                    }
                    p += Math.ceil(h.children().not("." + n.btn).not("." + n.title + "-prev").length / u), p > 1 && h.addClass(n.navbar + "-content-" + p), h.children("." + n.btn).length && h.addClass(n.hasbtns), h.prependTo(s.$menu)
                });
                for (var c in l) s.$menu.addClass(n.hasnavbar + "-" + c + "-" + l[c])
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("close hasbtns")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration[i] = {breadcrumbSeparator: "/"}, e[t].configuration.classNames[i] = {};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu";
    e[t].addons.navbars.breadcrumbs = function (i, n, s) {
        var a = e[t]._c, o = e[t]._d;
        a.add("breadcrumbs separator");
        var r = e('<span class="' + a.breadcrumbs + '" />').appendTo(i);
        this.bind("init", function (t) {
            t.removeClass(a.hasnavbar).each(function () {
                for (var t = [], i = e(this), n = e('<span class="' + a.breadcrumbs + '"></span>'), r = e(this).children().first(), l = !0; r && r.length;) {
                    r.is("." + a.panel) || (r = r.closest("." + a.panel));
                    var c = r.children("." + a.navbar).children("." + a.title).text();
                    t.unshift(l ? "<span>" + c + "</span>" : '<a href="#' + r.attr("id") + '">' + c + "</a>"), l = !1, r = r.data(o.parent)
                }
                n.append(t.join('<span class="' + a.separator + '">' + s.breadcrumbSeparator + "</span>")).appendTo(i.children("." + a.navbar))
            })
        });
        var l = function () {
            r.html(this.$pnls.children("." + a.current).children("." + a.navbar).children("." + a.breadcrumbs).html())
        };
        return this.bind("openPanel", l), this.bind("init", l), 0
    }
}(jQuery), function (e) {
    var t = "mmenu";
    e[t].addons.navbars.close = function (i, n) {
        var s = e[t]._c, a = e[t].glbl, o = e('<a class="' + s.close + " " + s.btn + '" href="#" />').appendTo(i),
            r = function (e) {
                o.attr("href", "#" + e.attr("id"))
            };
        return r.call(this, a.$page), this.bind("setPage", r), -1
    }
}(jQuery), function (e) {
    var t = "mmenu", i = "navbars";
    e[t].addons[i].next = function (n, s) {
        var a, o, r = e[t]._c, l = e('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(n),
            c = function (e) {
                e = e || this.$pnls.children("." + r.current);
                var t = e.find("." + this.conf.classNames[i].panelNext);
                a = t.attr("href"), o = t.html(), l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
            };
        return this.bind("openPanel", c), this.bind("init", function () {
            c.call(this)
        }), -1
    }, e[t].configuration.classNames[i].panelNext = "Next"
}(jQuery), function (e) {
    var t = "mmenu", i = "navbars";
    e[t].addons[i].prev = function (n, s) {
        var a = e[t]._c, o = e('<a class="' + a.prev + " " + a.btn + '" href="#" />').appendTo(n);
        this.bind("init", function (e) {
            e.removeClass(a.hasnavbar).children("." + a.navbar).addClass(a.hidden)
        });
        var r, l, c = function (e) {
            if (e = e || this.$pnls.children("." + a.current), !e.hasClass(a.vertical)) {
                var t = e.find("." + this.conf.classNames[i].panelPrev);
                t.length || (t = e.children("." + a.navbar).children("." + a.prev)), r = t.attr("href"), l = t.html(), o[r ? "attr" : "removeAttr"]("href", r), o[r || l ? "removeClass" : "addClass"](a.hidden), o.html(l)
            }
        };
        return this.bind("openPanel", c), this.bind("init", function () {
            c.call(this)
        }), -1
    }, e[t].configuration.classNames[i].panelPrev = "Prev"
}(jQuery), function (e) {
    var t = "mmenu";
    e[t].addons.navbars.searchfield = function (i, n) {
        var s = e[t]._c, a = e('<div class="' + s.search + '" />').appendTo(i);
        return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = a, 0
    }
}(jQuery), function (e) {
    var t = "mmenu", i = "navbars";
    e[t].addons[i].title = function (n, s) {
        var a, o, r = e[t]._c, l = e('<a class="' + r.title + '" />').appendTo(n), c = function (e) {
            if (e = e || this.$pnls.children("." + r.current), !e.hasClass(r.vertical)) {
                var t = e.find("." + this.conf.classNames[i].panelTitle);
                t.length || (t = e.children("." + r.navbar).children("." + r.title)), a = t.attr("href"), o = t.html() || s.title, l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
            }
        };
        return this.bind("openPanel", c), this.bind("init", function (e) {
            c.call(this)
        }), 0
    }, e[t].configuration.classNames[i].panelTitle = "Title"
}(jQuery), function (e) {
    function t(e, t, i) {
        e.prop("aria-" + t, i)[i ? "attr" : "removeAttr"]("aria-" + t, "true")
    }

    function i(e) {
        return '<span class="' + a.sronly + '">' + e + "</span>"
    }

    var n = "mmenu", s = "screenReader";
    e[n].addons[s] = {
        setup: function () {
            var o = this.opts[s], r = this.conf[s];
            if (l = e[n].glbl, "boolean" == typeof o && (o = {
                    aria: o,
                    text: o
                }), "object" != typeof o && (o = {}), o = this.opts[s] = e.extend(!0, {}, e[n].defaults[s], o), o.aria) {
                if (this.opts.offCanvas) {
                    var c = function () {
                        t(this.$menu, "hidden", !1)
                    }, d = function () {
                        t(this.$menu, "hidden", !0)
                    };
                    this.bind("open", c), this.bind("close", d), d.call(this)
                }
                var u = function () {
                    t(this.$menu.find("." + a.hidden), "hidden", !0), t(this.$menu.find('[aria-hidden="true"]').not("." + a.hidden), "hidden", !1)
                }, h = function (e) {
                    t(this.$pnls.children("." + a.panel).not(e).not("." + a.hidden), "hidden", !0), t(e, "hidden", !1)
                };
                this.bind("update", u), this.bind("openPanel", u), this.bind("openPanel", h);
                var p = function (e) {
                    t(e.find("." + a.prev + ", ." + a.next), "haspopup", !0)
                };
                this.bind("init", p), p.call(this, this.$menu.children("." + a.navbar))
            }
            if (o.text) {
                var f = function (t) {
                    t.children("." + a.navbar).children("." + a.prev).html(i(r.text.closeSubmenu)).end().children("." + a.next).html(i(r.text.openSubmenu)).end().children("." + a.close).html(i(r.text.closeMenu)), t.is("." + a.panel) && t.find("." + a.listview).find("." + a.next).each(function () {
                        e(this).html(i(r.text[e(this).parent().is("." + a.vertical) ? "toggleSubmenu" : "openSubmenu"]))
                    })
                };
                this.bind("init", f), f.call(this, this.$menu)
            }
        }, add: function () {
            a = e[n]._c, o = e[n]._d, r = e[n]._e, a.add("sronly")
        }, clickAnchor: function (e, t) {
        }
    }, e[n].defaults[s] = {aria: !1, text: !1}, e[n].configuration[s] = {
        text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
        }
    };
    var a, o, r, l
}(jQuery), function (e) {
    function t(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }

    var i = "mmenu", n = "searchfield";
    e[i].addons[n] = {
        setup: function () {
            var l = this, c = this.opts[n], d = this.conf[n];
            r = e[i].glbl, "boolean" == typeof c && (c = {add: c}), "object" != typeof c && (c = {}), "boolean" == typeof c.resultsPanel && (c.resultsPanel = {add: c.resultsPanel}), c = this.opts[n] = e.extend(!0, {}, e[i].defaults[n], c), d = this.conf[n] = e.extend(!0, {}, e[i].configuration[n], d), this.bind("close", function () {
                this.$menu.find("." + s.search).find("input").blur()
            }), this.bind("init", function (i) {
                if (c.add) {
                    var r;
                    switch (c.addTo) {
                        case"panels":
                            r = i;
                            break;
                        default:
                            r = this.$menu.find(c.addTo)
                    }
                    if (r.each(function () {
                            var t = e(this);
                            if (!t.is("." + s.panel) || !t.is("." + s.vertical)) {
                                if (!t.children("." + s.search).length) {
                                    var i = l.__valueOrFn(d.clear, t), n = l.__valueOrFn(d.form, t),
                                        a = l.__valueOrFn(d.input, t), r = l.__valueOrFn(d.submit, t),
                                        u = e("<" + (n ? "form" : "div") + ' class="' + s.search + '" />'),
                                        h = e('<input placeholder="' + c.placeholder + '" type="text" autocomplete="off" />');
                                    u.append(h);
                                    var p;
                                    if (a) for (p in a) h.attr(p, a[p]);
                                    if (i && e('<a class="' + s.btn + " " + s.clear + '" href="#" />').appendTo(u).on(o.click + "-searchfield", function (e) {
                                            e.preventDefault(), h.val("").trigger(o.keyup + "-searchfield")
                                        }), n) {
                                        for (p in n) u.attr(p, n[p]);
                                        r && !i && e('<a class="' + s.btn + " " + s.next + '" href="#" />').appendTo(u).on(o.click + "-searchfield", function (e) {
                                            e.preventDefault(), u.submit()
                                        })
                                    }
                                    t.hasClass(s.search) ? t.replaceWith(u) : t.prepend(u).addClass(s.hassearch)
                                }
                                if (c.noResults) {
                                    if (t.closest("." + s.panel).length || (t = l.$pnls.children("." + s.panel).first()), !t.children("." + s.noresultsmsg).length) {
                                        var f = t.children("." + s.listview).first();
                                        e('<div class="' + s.noresultsmsg + " " + s.hidden + '" />').append(c.noResults)[f.length ? "insertAfter" : "prependTo"](f.length ? f : t)
                                    }
                                }
                            }
                        }), c.search) {
                        if (c.resultsPanel.add) {
                            c.showSubPanels = !1;
                            var u = this.$pnls.children("." + s.resultspanel);
                            u.length || (u = e('<div class="' + s.panel + " " + s.resultspanel + " " + s.hidden + '" />').appendTo(this.$pnls).append('<div class="' + s.navbar + " " + s.hidden + '"><a class="' + s.title + '">' + c.resultsPanel.title + "</a></div>").append('<ul class="' + s.listview + '" />').append(this.$pnls.find("." + s.noresultsmsg).first().clone()), this.init(u))
                        }
                        this.$menu.find("." + s.search).each(function () {
                            var i, r, d = e(this), h = d.closest("." + s.panel).length;
                            h ? (i = d.closest("." + s.panel), r = i) : (i = e("." + s.panel, l.$menu), r = l.$menu), c.resultsPanel.add && (i = i.not(u));
                            var p = d.children("input"), f = l.__findAddBack(i, "." + s.listview).children("li"),
                                m = f.filter("." + s.divider), g = l.__filterListItems(f), v = "a", y = "a, span",
                                w = "", b = function () {
                                    var t = p.val().toLowerCase();
                                    if (t != w) {
                                        if (w = t, c.resultsPanel.add && u.children("." + s.listview).empty(), i.scrollTop(0), g.add(m).addClass(s.hidden).find("." + s.fullsubopensearch).removeClass(s.fullsubopen + " " + s.fullsubopensearch), g.each(function () {
                                                var t = e(this), i = v;
                                                (c.showTextItems || c.showSubPanels && t.find("." + s.next)) && (i = y), (t.data(a.searchtext) || t.children(i).text()).toLowerCase().indexOf(w) > -1 && t.add(t.prevAll("." + s.divider).first()).removeClass(s.hidden)
                                            }), c.showSubPanels && i.each(function (t) {
                                                var i = e(this);
                                                l.__filterListItems(i.find("." + s.listview).children()).each(function () {
                                                    var t = e(this), i = t.data(a.sub);
                                                    t.removeClass(s.nosubresults), i && i.find("." + s.listview).children().removeClass(s.hidden)
                                                })
                                            }), c.resultsPanel.add) if ("" === w) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + s.subopened).last()); else {
                                            var n = e();
                                            i.each(function () {
                                                var t = l.__filterListItems(e(this).find("." + s.listview).children()).not("." + s.hidden).clone(!0);
                                                t.length && (c.resultsPanel.dividers && (n = n.add('<li class="' + s.divider + '">' + e(this).children("." + s.navbar).text() + "</li>")), n = n.add(t))
                                            }), n.find("." + s.next).remove(), u.children("." + s.listview).append(n), this.openPanel(u)
                                        } else e(i.get().reverse()).each(function (t) {
                                            var i = e(this), n = i.data(a.parent);
                                            n && (l.__filterListItems(i.find("." + s.listview).children()).length ? (n.hasClass(s.hidden) && n.children("." + s.next).not("." + s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch), n.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("." + s.divider).first().removeClass(s.hidden)) : h || (i.hasClass(s.opened) && setTimeout(function () {
                                                l.openPanel(n.closest("." + s.panel))
                                            }, (t + 1) * (1.5 * l.conf.openingInterval)), n.addClass(s.nosubresults)))
                                        });
                                        r.find("." + s.noresultsmsg)[g.not("." + s.hidden).length ? "addClass" : "removeClass"](s.hidden), this.update()
                                    }
                                };
                            p.off(o.keyup + "-" + n + " " + o.change + "-" + n).on(o.keyup + "-" + n, function (e) {
                                t(e.keyCode) || b.call(l)
                            }).on(o.change + "-" + n, function (e) {
                                b.call(l)
                            });
                            var $ = d.children("." + s.btn);
                            $.length && p.on(o.keyup + "-" + n, function (e) {
                                $[p.val().length ? "removeClass" : "addClass"](s.hidden)
                            }), p.trigger(o.keyup + "-" + n)
                        })
                    }
                }
            })
        }, add: function () {
            s = e[i]._c, a = e[i]._d, o = e[i]._e, s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), o.add("change keyup")
        }, clickAnchor: function (e, t) {
        }
    }, e[i].defaults[n] = {
        add: !1,
        addTo: "panels",
        placeholder: "Search",
        noResults: "No results found.",
        resultsPanel: {add: !1, dividers: !0, title: "Search results"},
        search: !0,
        showTextItems: !1,
        showSubPanels: !0
    }, e[i].configuration[n] = {clear: !1, form: !1, input: !1, submit: !1};
    var s, a, o, r
}(jQuery), function (e) {
    var t = "mmenu", i = "sectionIndexer";
    e[t].addons[i] = {
        setup: function () {
            var s = this, r = this.opts[i];
            this.conf[i], o = e[t].glbl, "boolean" == typeof r && (r = {add: r}), "object" != typeof r && (r = {}), r = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], r), this.bind("init", function (t) {
                if (r.add) {
                    var i;
                    switch (r.addTo) {
                        case"panels":
                            i = t;
                            break;
                        default:
                            i = e(r.addTo, this.$menu).filter("." + n.panel)
                    }
                    i.find("." + n.divider).closest("." + n.panel).addClass(n.hasindexer)
                }
                if (!this.$indexer && this.$pnls.children("." + n.hasindexer).length) {
                    this.$indexer = e('<div class="' + n.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover + "-sectionindexer " + n.touchstart + "-sectionindexer", function (t) {
                        var i = e(this).attr("href").slice(1), a = s.$pnls.children("." + n.current),
                            o = a.find("." + n.listview), r = !1, l = a.scrollTop();
                        a.scrollTop(0), o.children("." + n.divider).not("." + n.hidden).each(function () {
                            !1 === r && i == e(this).text().slice(0, 1).toLowerCase() && (r = e(this).position().top)
                        }), a.scrollTop(!1 !== r ? r : l)
                    });
                    var o = function (e) {
                        s.$menu[(e.hasClass(n.hasindexer) ? "add" : "remove") + "Class"](n.hasindexer)
                    };
                    this.bind("openPanel", o), o.call(this, this.$pnls.children("." + n.current))
                }
            })
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("indexer hasindexer"), a.add("mouseover touchstart")
        }, clickAnchor: function (e, t) {
            return !!e.parent().is("." + n.indexer) || void 0
        }
    }, e[t].defaults[i] = {add: !1, addTo: "panels"};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "setSelected";
    e[t].addons[i] = {
        setup: function () {
            var a = this.opts[i];
            if (this.conf[i], o = e[t].glbl, "boolean" == typeof a && (a = {
                    hover: a,
                    parent: a
                }), "object" != typeof a && (a = {}), a = this.opts[i] = e.extend(!0, {}, e[t].defaults[i], a), a.current || this.bind("init", function (e) {
                    e.find("." + n.listview).children("." + n.selected).removeClass(n.selected)
                }), a.hover && this.$menu.addClass(n.hoverselected), a.parent) {
                this.$menu.addClass(n.parentselected);
                var r = function (e) {
                    this.$pnls.find("." + n.listview).find("." + n.next).removeClass(n.selected);
                    for (var t = e.data(s.parent); t && t.length;) t = t.children("." + n.next).addClass(n.selected).closest("." + n.panel).data(s.parent)
                };
                this.bind("openedPanel", r), this.bind("init", function (e) {
                    r.call(this, this.$pnls.children("." + n.current))
                })
            }
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("hoverselected parentselected")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[i] = {current: !0, hover: !1, parent: !1};
    var n, s, a, o
}(jQuery), function (e) {
    var t = "mmenu", i = "toggles";
    e[t].addons[i] = {
        setup: function () {
            var s = this;
            this.opts[i], this.conf[i], o = e[t].glbl, this.bind("init", function (t) {
                this.__refactorClass(e("input", t), this.conf.classNames[i].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[i].check, "check"), e("input." + n.toggle + ", input." + n.check, t).each(function () {
                    var t = e(this), i = t.closest("li"), a = t.hasClass(n.toggle) ? "toggle" : "check",
                        o = t.attr("id") || s.__getUniqueId();
                    i.children('label[for="' + o + '"]').length || (t.attr("id", o), i.prepend(t), e('<label for="' + o + '" class="' + n[a] + '"></label>').insertBefore(i.children("a, span").last()))
                })
            })
        }, add: function () {
            n = e[t]._c, s = e[t]._d, a = e[t]._e, n.add("toggle check")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration.classNames[i] = {toggle: "Toggle", check: "Check"};
    var n, s, a, o
}(jQuery), /*! VelocityJS.org (1.3.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
    /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
    function (e) {
        "use strict";

        function t(e) {
            var t = e.length, n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        if (!e.jQuery) {
            var i = function (e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function (e) {
                return e && e === e.window
            }, i.type = function (e) {
                return e ? "object" == typeof e || "function" == typeof e ? s[o.call(e)] || "object" : typeof e : e + ""
            }, i.isArray = Array.isArray || function (e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e) ;
                return void 0 === t || a.call(e, t)
            }, i.each = function (e, i, n) {
                var s, a = 0, o = e.length, r = t(e);
                if (n) {
                    if (r) for (; a < o && !1 !== (s = i.apply(e[a], n)); a++) ; else for (a in e) if (!1 === (s = i.apply(e[a], n))) break
                } else if (r) for (; a < o && !1 !== (s = i.call(e[a], a, e[a])); a++) ; else for (a in e) if (!1 === (s = i.call(e[a], a, e[a]))) break;
                return e
            }, i.data = function (e, t, s) {
                if (void 0 === s) {
                    var a = e[i.expando], o = a && n[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var r = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[r] = n[r] || {}, n[r][t] = s, s
                }
            }, i.removeData = function (e, t) {
                var s = e[i.expando], a = s && n[s];
                a && (t ? i.each(t, function (e, t) {
                    delete a[t]
                }) : delete n[s])
            }, i.extend = function () {
                var e, t, n, s, a, o, r = arguments[0] || {}, l = 1, c = arguments.length, d = !1;
                for ("boolean" == typeof r && (d = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); l < c; l++) if (a = arguments[l]) for (s in a) e = r[s], n = a[s], r !== n && (d && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {}, r[s] = i.extend(d, o, n)) : void 0 !== n && (r[s] = n));
                return r
            }, i.queue = function (e, n, s) {
                function a(e, i) {
                    var n = i || [];
                    return e && (t(Object(e)) ? function (e, t) {
                        for (var i = +t.length, n = 0, s = e.length; n < i;) e[s++] = t[n++];
                        if (i !== i) for (; void 0 !== t[n];) e[s++] = t[n++];
                        e.length = s
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }

                if (e) {
                    n = (n || "fx") + "queue";
                    var o = i.data(e, n);
                    return s ? (!o || i.isArray(s) ? o = i.data(e, n, a(s)) : o.push(s), o) : o || []
                }
            }, i.dequeue = function (e, t) {
                i.each(e.nodeType ? [e] : e, function (e, n) {
                    t = t || "fx";
                    var s = i.queue(n, t), a = s.shift();
                    "inprogress" === a && (a = s.shift()), a && ("fx" === t && s.unshift("inprogress"), a.call(n, function () {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function (e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                }, offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                }, position: function () {
                    function e(e) {
                        for (var t = e.offsetParent || document; t && "html" !== t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }

                    var t = this[0], n = e(t), s = this.offset(),
                        a = /^(?:body|html)$/i.test(n.nodeName) ? {top: 0, left: 0} : i(n).offset();
                    return s.top -= parseFloat(t.style.marginTop) || 0, s.left -= parseFloat(t.style.marginLeft) || 0, n.style && (a.top += parseFloat(n.style.borderTopWidth) || 0, a.left += parseFloat(n.style.borderLeftWidth) || 0), {
                        top: s.top - a.top,
                        left: s.left - a.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var s = {}, a = s.hasOwnProperty, o = s.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) s["[object " + r[l] + "]"] = r[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {Utilities: i}
        }
    }(window), function (e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    "use strict";
    return function (e, t, i, n) {
        function s(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                var s = e[t];
                s && n.push(s)
            }
            return n
        }

        function a(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
        }

        function o(e) {
            var t = h.data(e, "velocity");
            return null === t ? n : t
        }

        function r(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, i, n, s) {
            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function r(e) {
                return 3 * e
            }

            function l(e, t, i) {
                return ((a(t, i) * e + o(t, i)) * e + r(t)) * e
            }

            function c(e, t, i) {
                return 3 * a(t, i) * e * e + 2 * o(t, i) * e + r(t)
            }

            function d(t, i) {
                for (var s = 0; s < m; ++s) {
                    var a = c(i, e, n);
                    if (0 === a) return i;
                    i -= (l(i, e, n) - t) / a
                }
                return i
            }

            function u() {
                for (var t = 0; t < w; ++t) C[t] = l(t * b, e, n)
            }

            function h(t, i, s) {
                var a, o, r = 0;
                do {
                    o = i + (s - i) / 2, a = l(o, e, n) - t, a > 0 ? s = o : i = o
                } while (Math.abs(a) > v && ++r < y);
                return o
            }

            function p(t) {
                for (var i = 0, s = 1, a = w - 1; s !== a && C[s] <= t; ++s) i += b;
                --s;
                var o = (t - C[s]) / (C[s + 1] - C[s]), r = i + o * b, l = c(r, e, n);
                return l >= g ? d(t, r) : 0 === l ? r : h(t, i, i + b)
            }

            function f() {
                _ = !0, e === i && n === s || u()
            }

            var m = 4, g = .001, v = 1e-7, y = 10, w = 11, b = 1 / (w - 1), I = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var x = 0; x < 4; ++x) if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
            var C = I ? new Float32Array(w) : new Array(w), _ = !1, T = function (t) {
                return _ || f(), e === i && n === s ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), i, s)
            };
            T.getControlPoints = function () {
                return [{x: e, y: i}, {x: n, y: s}]
            };
            var k = "generateBezier(" + [e, i, n, s] + ")";
            return T.toString = function () {
                return k
            }, T
        }

        function c(e, t) {
            var i = e;
            return m.isString(e) ? w.Easings[e] || (i = !1) : i = m.isArray(e) && 1 === e.length ? r.apply(null, e) : m.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === i && (i = w.Easings[w.defaults.easing] ? w.defaults.easing : y), i
        }

        function d(e) {
            if (e) {
                var t = (new Date).getTime(), i = w.State.calls.length;
                i > 1e4 && (w.State.calls = s(w.State.calls), i = w.State.calls.length);
                for (var a = 0; a < i; a++) if (w.State.calls[a]) {
                    var r = w.State.calls[a], l = r[0], c = r[2], p = r[3], f = !!p, g = null;
                    p || (p = w.State.calls[a][3] = t - 16);
                    for (var v = Math.min((t - p) / c.duration, 1), y = 0, b = l.length; y < b; y++) {
                        var x = l[y], _ = x.element;
                        if (o(_)) {
                            var T = !1;
                            if (c.display !== n && null !== c.display && "none" !== c.display) {
                                if ("flex" === c.display) {
                                    var k = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    h.each(k, function (e, t) {
                                        I.setPropertyValue(_, "display", t)
                                    })
                                }
                                I.setPropertyValue(_, "display", c.display)
                            }
                            c.visibility !== n && "hidden" !== c.visibility && I.setPropertyValue(_, "visibility", c.visibility);
                            for (var S in x) if ("element" !== S) {
                                var P, z = x[S], M = m.isString(z.easing) ? w.Easings[z.easing] : z.easing;
                                if (1 === v) P = z.endValue; else {
                                    var E = z.endValue - z.startValue;
                                    if (P = z.startValue + E * M(v, c, E), !f && P === z.currentValue) continue
                                }
                                if (z.currentValue = P, "tween" === S) g = P; else {
                                    var O;
                                    if (I.Hooks.registered[S]) {
                                        O = I.Hooks.getRoot(S);
                                        var A = o(_).rootPropertyValueCache[O];
                                        A && (z.rootPropertyValue = A)
                                    }
                                    var D = I.setPropertyValue(_, S, z.currentValue + (0 === parseFloat(P) ? "" : z.unitType), z.rootPropertyValue, z.scrollData);
                                    I.Hooks.registered[S] && (I.Normalizations.registered[O] ? o(_).rootPropertyValueCache[O] = I.Normalizations.registered[O]("extract", null, D[1]) : o(_).rootPropertyValueCache[O] = D[1]), "transform" === D[0] && (T = !0)
                                }
                            }
                            c.mobileHA && o(_).transformCache.translate3d === n && (o(_).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && I.flushTransformCache(_)
                        }
                    }
                    c.display !== n && "none" !== c.display && (w.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (w.State.calls[a][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], v, Math.max(0, p + c.duration - t), p, g), 1 === v && u(a)
                }
            }
            w.State.isTicking && C(d)
        }

        function u(e, t) {
            if (!w.State.calls[e]) return !1;
            for (var i = w.State.calls[e][0], s = w.State.calls[e][1], a = w.State.calls[e][2], r = w.State.calls[e][4], l = !1, c = 0, d = i.length; c < d; c++) {
                var u = i[c].element;
                t || a.loop || ("none" === a.display && I.setPropertyValue(u, "display", a.display), "hidden" === a.visibility && I.setPropertyValue(u, "visibility", a.visibility));
                var p = o(u);
                if (!0 !== a.loop && (h.queue(u)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(u)[1])) && p) {
                    p.isAnimating = !1, p.rootPropertyValueCache = {};
                    var f = !1;
                    h.each(I.Lists.transforms3D, function (e, t) {
                        var i = /^scale/.test(t) ? 1 : 0, s = p.transformCache[t];
                        p.transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (f = !0, delete p.transformCache[t])
                    }), a.mobileHA && (f = !0, delete p.transformCache.translate3d), f && I.flushTransformCache(u), I.Values.removeClass(u, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && c === d - 1) try {
                    a.complete.call(s, s)
                } catch (e) {
                    setTimeout(function () {
                        throw e
                    }, 1)
                }
                r && !0 !== a.loop && r(s), p && !0 === a.loop && !t && (h.each(p.tweensContainer, function (e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                        var i = t.startValue;
                        t.startValue = t.endValue, t.endValue = i
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), w(u, "reverse", {loop: !0, delay: a.delay})), !1 !== a.queue && h.dequeue(u, a.queue)
            }
            w.State.calls[e] = !1;
            for (var m = 0, g = w.State.calls.length; m < g; m++) if (!1 !== w.State.calls[m]) {
                l = !0;
                break
            }
            !1 === l && (w.State.isTicking = !1, delete w.State.calls, w.State.calls = [])
        }

        var h, p = function () {
            if (i.documentMode) return i.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = i.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
            }
            return n
        }(), f = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                var i, n = (new Date).getTime();
                return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
                    t(n + i)
                }, i)
            }
        }(), m = {
            isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isNodeList: function (e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function (e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0
            }
        }, g = !1;
        if (e.fn && e.fn.jquery ? (h = e, g = !0) : h = t.Velocity.Utilities, p <= 8 && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400, y = "swing", w = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: h,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: y,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (e) {
                h.data(e, "velocity", {
                    isSVG: m.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 3, patch: 0},
            debug: !1
        };
        t.pageYOffset !== n ? (w.State.scrollAnchor = t, w.State.scrollPropertyLeft = "pageXOffset", w.State.scrollPropertyTop = "pageYOffset") : (w.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, w.State.scrollPropertyLeft = "scrollLeft", w.State.scrollPropertyTop = "scrollTop");
        var b = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, i, n) {
                var s = {x: t.x + n.dx * i, v: t.v + n.dv * i, tension: t.tension, friction: t.friction};
                return {dx: s.v, dv: e(s)}
            }

            function i(i, n) {
                var s = {dx: i.v, dv: e(i)}, a = t(i, .5 * n, s), o = t(i, .5 * n, a), r = t(i, n, o),
                    l = 1 / 6 * (s.dx + 2 * (a.dx + o.dx) + r.dx), c = 1 / 6 * (s.dv + 2 * (a.dv + o.dv) + r.dv);
                return i.x = i.x + l * n, i.v = i.v + c * n, i
            }

            return function e(t, n, s) {
                var a, o, r, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], d = 0, u = 1e-4, h = .016;
                for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, s = s || null, l.tension = t, l.friction = n, a = null !== s, a ? (d = e(t, n), o = d / s * h) : o = h; r = i(r || l, o), c.push(1 + r.x), d += 16, Math.abs(r.x) > u && Math.abs(r.v) > u;) ;
                return a ? function (e) {
                    return c[e * (c.length - 1) | 0]
                } : d
            }
        }();
        w.Easings = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, spring: function (e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            w.Easings[t[0]] = l.apply(null, t[1])
        });
        var I = w.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var e = 0; e < I.Lists.colors.length; e++) {
                        var t = "color" === I.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        I.Hooks.templates[I.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var i, n, s;
                    if (p) for (i in I.Hooks.templates) {
                        n = I.Hooks.templates[i], s = n[0].split(" ");
                        var a = n[1].match(I.RegEx.valueSplit);
                        "Color" === s[0] && (s.push(s.shift()), a.push(a.shift()), I.Hooks.templates[i] = [s.join(" "), a.join(" ")])
                    }
                    for (i in I.Hooks.templates) {
                        n = I.Hooks.templates[i], s = n[0].split(" ");
                        for (var o in s) {
                            var r = i + s[o], l = o;
                            I.Hooks.registered[r] = [i, l]
                        }
                    }
                }, getRoot: function (e) {
                    var t = I.Hooks.registered[e];
                    return t ? t[0] : e
                }, cleanRootPropertyValue: function (e, t) {
                    return I.RegEx.valueUnwrap.test(t) && (t = t.match(I.RegEx.valueUnwrap)[1]), I.Values.isCSSNullValue(t) && (t = I.Hooks.templates[e][1]), t
                }, extractValue: function (e, t) {
                    var i = I.Hooks.registered[e];
                    if (i) {
                        var n = i[0], s = i[1];
                        return t = I.Hooks.cleanRootPropertyValue(n, t), t.toString().match(I.RegEx.valueSplit)[s]
                    }
                    return t
                }, injectValue: function (e, t, i) {
                    var n = I.Hooks.registered[e];
                    if (n) {
                        var s, a, o = n[0], r = n[1];
                        return i = I.Hooks.cleanRootPropertyValue(o, i), s = i.toString().match(I.RegEx.valueSplit), s[r] = t, a = s.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function (e, t, i) {
                        switch (e) {
                            case"name":
                                return "clip";
                            case"extract":
                                var n;
                                return I.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(I.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case"inject":
                                return "rect(" + i + ")"
                        }
                    }, blur: function (e, t, i) {
                        switch (e) {
                            case"name":
                                return w.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = s ? s[1] : 0
                                }
                                return n;
                            case"inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    }, opacity: function (e, t, i) {
                        if (p <= 8) switch (e) {
                            case"name":
                                return "filter";
                            case"extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case"inject":
                                return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (e) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return i;
                            case"inject":
                                return i
                        }
                    }
                }, register: function () {
                    p && !(p > 9) || w.State.isGingerbread || (I.Lists.transformsBase = I.Lists.transformsBase.concat(I.Lists.transforms3D));
                    for (var e = 0; e < I.Lists.transformsBase.length; e++) !function () {
                        var t = I.Lists.transformsBase[e];
                        I.Normalizations.registered[t] = function (e, i, s) {
                            switch (e) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return o(i) === n || o(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(i).transformCache[t].replace(/[()]/g, "");
                                case"inject":
                                    var a = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case"translate":
                                            a = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                            break;
                                        case"scal":
                                        case"scale":
                                            w.State.isAndroid && o(i).transformCache[t] === n && s < 1 && (s = 1), a = !/(\d)$/i.test(s);
                                            break;
                                        case"skew":
                                            a = !/(deg|\d)$/i.test(s);
                                            break;
                                        case"rotate":
                                            a = !/(deg|\d)$/i.test(s)
                                    }
                                    return a || (o(i).transformCache[t] = "(" + s + ")"), o(i).transformCache[t]
                            }
                        }
                    }();
                    for (var t = 0; t < I.Lists.colors.length; t++) !function () {
                        var e = I.Lists.colors[t];
                        I.Normalizations.registered[e] = function (t, i, s) {
                            switch (t) {
                                case"name":
                                    return e;
                                case"extract":
                                    var a;
                                    if (I.RegEx.wrappedValueAlreadyExtracted.test(s)) a = s; else {
                                        var o, r = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(s) ? o = r[s] !== n ? r[s] : r.black : I.RegEx.isHex.test(s) ? o = "rgb(" + I.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (o = r.black), a = (o || s).toString().match(I.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!p || p > 8) && 3 === a.split(" ").length && (a += " 1"), a;
                                case"inject":
                                    return p <= 8 ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                }, SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || w.State.isAndroid && !w.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                }, prefixCheck: function (e) {
                    if (w.State.prefixMatches[e]) return [w.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; i < n; i++) {
                        var s;
                        if (s = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                                return e.toUpperCase()
                            }), m.isString(w.State.prefixElement.style[s])) return w.State.prefixMatches[e] = s, [s, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function (e) {
                    var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(i, function (e, t, i, n) {
                        return t + t + i + i + n + n
                    }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (e) {
                    return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                }, getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                }, getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                }, addClass: function (e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                }, removeClass: function (e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (e, i, s, a) {
                function r(e, i) {
                    var s = 0;
                    if (p <= 8) s = h.css(e, i); else {
                        var l = !1;
                        /^(width|height)$/.test(i) && 0 === I.getPropertyValue(e, "display") && (l = !0, I.setPropertyValue(e, "display", I.Values.getDisplayType(e)));
                        var c = function () {
                            l && I.setPropertyValue(e, "display", "none")
                        };
                        if (!a) {
                            if ("height" === i && "border-box" !== I.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetHeight - (parseFloat(I.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(I.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(I.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(I.getPropertyValue(e, "paddingBottom")) || 0);
                                return c(), d
                            }
                            if ("width" === i && "border-box" !== I.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetWidth - (parseFloat(I.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(I.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(I.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(I.getPropertyValue(e, "paddingRight")) || 0);
                                return c(), u
                            }
                        }
                        var f;
                        f = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), s = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i], "" !== s && null !== s || (s = e.style[i]), c()
                    }
                    if ("auto" === s && /^(top|right|bottom|left)$/i.test(i)) {
                        var m = r(e, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (s = h(e).position()[i] + "px")
                    }
                    return s
                }

                var l;
                if (I.Hooks.registered[i]) {
                    var c = i, d = I.Hooks.getRoot(c);
                    s === n && (s = I.getPropertyValue(e, I.Names.prefixCheck(d)[0])), I.Normalizations.registered[d] && (s = I.Normalizations.registered[d]("extract", e, s)), l = I.Hooks.extractValue(c, s)
                } else if (I.Normalizations.registered[i]) {
                    var u, f;
                    u = I.Normalizations.registered[i]("name", e), "transform" !== u && (f = r(e, I.Names.prefixCheck(u)[0]), I.Values.isCSSNullValue(f) && I.Hooks.templates[i] && (f = I.Hooks.templates[i][1])), l = I.Normalizations.registered[i]("extract", e, f)
                }
                if (!/^[\d-]/.test(l)) {
                    var m = o(e);
                    if (m && m.isSVG && I.Names.SVGAttribute(i)) if (/^(height|width)$/i.test(i)) try {
                        l = e.getBBox()[i]
                    } catch (e) {
                        l = 0
                    } else l = e.getAttribute(i); else l = r(e, I.Names.prefixCheck(i)[0])
                }
                return I.Values.isCSSNullValue(l) && (l = 0), w.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function (e, i, n, s, a) {
                var r = i;
                if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n); else if (I.Normalizations.registered[i] && "transform" === I.Normalizations.registered[i]("name", e)) I.Normalizations.registered[i]("inject", e, n), r = "transform", n = o(e).transformCache[i]; else {
                    if (I.Hooks.registered[i]) {
                        var l = i, c = I.Hooks.getRoot(i);
                        s = s || I.getPropertyValue(e, c), n = I.Hooks.injectValue(l, n, s), i = c
                    }
                    if (I.Normalizations.registered[i] && (n = I.Normalizations.registered[i]("inject", e, n), i = I.Normalizations.registered[i]("name", e)), r = I.Names.prefixCheck(i)[0], p <= 8) try {
                        e.style[r] = n
                    } catch (e) {
                        w.debug && console.log("Browser does not support [" + n + "] for [" + r + "]")
                    } else {
                        var d = o(e);
                        d && d.isSVG && I.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[r] = n
                    }
                    w.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n)
                }
                return [r, n]
            },
            flushTransformCache: function (e) {
                var t = "", i = o(e);
                if ((p || w.State.isAndroid && !w.State.isChrome) && i && i.isSVG) {
                    var n = function (t) {
                        return parseFloat(I.getPropertyValue(e, t))
                    }, s = {
                        translate: [n("translateX"), n("translateY")],
                        skewX: [n("skewX")],
                        skewY: [n("skewY")],
                        scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                        rotate: [n("rotateZ"), 0, 0]
                    };
                    h.each(o(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), s[e] && (t += e + "(" + s[e].join(" ") + ") ", delete s[e])
                    })
                } else {
                    var a, r;
                    h.each(o(e).transformCache, function (i) {
                        return a = o(e).transformCache[i], "transformPerspective" === i ? (r = a, !0) : (9 === p && "rotateZ" === i && (i = "rotate"), void(t += i + a + " "))
                    }), r && (t = "perspective" + r + " " + t)
                }
                I.setPropertyValue(e, "transform", t)
            }
        };
        I.Hooks.register(), I.Normalizations.register(), w.hook = function (e, t, i) {
            var s;
            return e = a(e), h.each(e, function (e, a) {
                if (o(a) === n && w.init(a), i === n) s === n && (s = w.CSS.getPropertyValue(a, t)); else {
                    var r = w.CSS.setPropertyValue(a, t, i);
                    "transform" === r[0] && w.CSS.flushTransformCache(a), s = r
                }
            }), s
        };
        var x = function () {
            function e() {
                return l ? P.promise || null : p
            }

            function s(e, s) {
                function a(a) {
                    var p, f;
                    if (l.begin && 0 === T) try {
                        l.begin.call(g, g)
                    } catch (e) {
                        setTimeout(function () {
                            throw e
                        }, 1)
                    }
                    if ("scroll" === z) {
                        var v, x, C, k = /^x$/i.test(l.axis) ? "Left" : "Top", S = parseFloat(l.offset) || 0;
                        l.container ? m.isWrapped(l.container) || m.isNode(l.container) ? (l.container = l.container[0] || l.container, v = l.container["scroll" + k], C = v + h(e).position()[k.toLowerCase()] + S) : l.container = null : (v = w.State.scrollAnchor[w.State["scrollProperty" + k]], x = w.State.scrollAnchor[w.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], C = h(e).offset()[k.toLowerCase()] + S), u = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: v,
                                currentValue: v,
                                endValue: C,
                                unitType: "",
                                easing: l.easing,
                                scrollData: {container: l.container, direction: k, alternateValue: x}
                            }, element: e
                        }, w.debug && console.log("tweensContainer (scroll): ", u.scroll, e)
                    } else if ("reverse" === z) {
                        if (!(p = o(e))) return;
                        if (!p.tweensContainer) return void h.dequeue(e, l.queue);
                        "none" === p.opts.display && (p.opts.display = "auto"), "hidden" === p.opts.visibility && (p.opts.visibility = "visible"), p.opts.loop = !1, p.opts.begin = null, p.opts.complete = null, b.easing || delete l.easing, b.duration || delete l.duration, l = h.extend({}, p.opts, l), f = h.extend(!0, {}, p ? p.tweensContainer : null);
                        for (var M in f) if ("element" !== M) {
                            var E = f[M].startValue;
                            f[M].startValue = f[M].currentValue = f[M].endValue, f[M].endValue = E, m.isEmptyObject(b) || (f[M].easing = l.easing), w.debug && console.log("reverse tweensContainer (" + M + "): " + JSON.stringify(f[M]), e)
                        }
                        u = f
                    } else if ("start" === z) {
                        (p = o(e)) && p.tweensContainer && !0 === p.isAnimating && (f = p.tweensContainer);
                        var O = function (t, i) {
                            var a, o, r;
                            return m.isArray(t) ? (a = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || I.RegEx.isHex.test(t[1]) ? r = t[1] : (m.isString(t[1]) && !I.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (o = i ? t[1] : c(t[1], l.duration), t[2] !== n && (r = t[2]))) : a = t, i || (o = o || l.easing), m.isFunction(a) && (a = a.call(e, s, _)), m.isFunction(r) && (r = r.call(e, s, _)), [a || 0, o, r]
                        };
                        h.each(y, function (e, t) {
                            if (RegExp("^" + I.Lists.colors.join("$|^") + "$").test(I.Names.camelCase(e))) {
                                var i = O(t, !0), s = i[0], a = i[1], o = i[2];
                                if (I.RegEx.isHex.test(s)) {
                                    for (var r = ["Red", "Green", "Blue"], l = I.Values.hexToRgb(s), c = o ? I.Values.hexToRgb(o) : n, d = 0; d < r.length; d++) {
                                        var u = [l[d]];
                                        a && u.push(a), c !== n && u.push(c[d]), y[I.Names.camelCase(e) + r[d]] = u
                                    }
                                    delete y[e]
                                }
                            }
                        });
                        for (var A in y) {
                            var F = O(y[A]), R = F[0], N = F[1], H = F[2];
                            A = I.Names.camelCase(A);
                            var J = I.Hooks.getRoot(A), j = !1;
                            if (p && p.isSVG || "tween" === J || !1 !== I.Names.prefixCheck(J)[1] || I.Normalizations.registered[J] !== n) {
                                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(A) && !H && 0 !== R && (H = 0), l._cacheValues && f && f[A] ? (H === n && (H = f[A].endValue + f[A].unitType), j = p.rootPropertyValueCache[J]) : I.Hooks.registered[A] ? H === n ? (j = I.getPropertyValue(e, J), H = I.getPropertyValue(e, A, j)) : j = I.Hooks.templates[J][1] : H === n && (H = I.getPropertyValue(e, A));
                                var K, Y, B, W = !1, q = function (e, t) {
                                    var i, n;
                                    return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                        return i = e, ""
                                    }), i || (i = I.Values.getUnitType(e)), [n, i]
                                };
                                K = q(A, H), H = K[0], B = K[1], K = q(A, R), R = K[0].replace(/^([+-\/*])=/, function (e, t) {
                                    return W = t, ""
                                }), Y = K[1], H = parseFloat(H) || 0, R = parseFloat(R) || 0, "%" === Y && (/^(fontSize|lineHeight)$/.test(A) ? (R /= 100, Y = "em") : /^scale/.test(A) ? (R /= 100, Y = "") : /(Red|Green|Blue)$/i.test(A) && (R = R / 100 * 255, Y = ""));
                                var V = function () {
                                    var n = {
                                            myParent: e.parentNode || i.body,
                                            position: I.getPropertyValue(e, "position"),
                                            fontSize: I.getPropertyValue(e, "fontSize")
                                        }, s = n.position === D.lastPosition && n.myParent === D.lastParent,
                                        a = n.fontSize === D.lastFontSize;
                                    D.lastParent = n.myParent, D.lastPosition = n.position, D.lastFontSize = n.fontSize;
                                    var o = 100, r = {};
                                    if (a && s) r.emToPx = D.lastEmToPx, r.percentToPxWidth = D.lastPercentToPxWidth, r.percentToPxHeight = D.lastPercentToPxHeight; else {
                                        var l = p && p.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                        w.init(l), n.myParent.appendChild(l), h.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                            w.CSS.setPropertyValue(l, t, "hidden")
                                        }), w.CSS.setPropertyValue(l, "position", n.position), w.CSS.setPropertyValue(l, "fontSize", n.fontSize), w.CSS.setPropertyValue(l, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                            w.CSS.setPropertyValue(l, t, o + "%")
                                        }), w.CSS.setPropertyValue(l, "paddingLeft", o + "em"), r.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(I.getPropertyValue(l, "width", null, !0)) || 1) / o, r.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(I.getPropertyValue(l, "height", null, !0)) || 1) / o, r.emToPx = D.lastEmToPx = (parseFloat(I.getPropertyValue(l, "paddingLeft")) || 1) / o, n.myParent.removeChild(l)
                                    }
                                    return null === D.remToPx && (D.remToPx = parseFloat(I.getPropertyValue(i.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(t.innerWidth) / 100, D.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = D.remToPx, r.vwToPx = D.vwToPx, r.vhToPx = D.vhToPx, w.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), e), r
                                };
                                if (/[\/*]/.test(W)) Y = B; else if (B !== Y && 0 !== H) if (0 === R) Y = B; else {
                                    r = r || V();
                                    var X = /margin|padding|left|right|width|text|word|letter/i.test(A) || /X$/.test(A) || "x" === A ? "x" : "y";
                                    switch (B) {
                                        case"%":
                                            H *= "x" === X ? r.percentToPxWidth : r.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            H *= r[B + "ToPx"]
                                    }
                                    switch (Y) {
                                        case"%":
                                            H *= 1 / ("x" === X ? r.percentToPxWidth : r.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            H *= 1 / r[Y + "ToPx"]
                                    }
                                }
                                switch (W) {
                                    case"+":
                                        R = H + R;
                                        break;
                                    case"-":
                                        R = H - R;
                                        break;
                                    case"*":
                                        R *= H;
                                        break;
                                    case"/":
                                        R = H / R
                                }
                                u[A] = {
                                    rootPropertyValue: j,
                                    startValue: H,
                                    currentValue: H,
                                    endValue: R,
                                    unitType: Y,
                                    easing: N
                                }, w.debug && console.log("tweensContainer (" + A + "): " + JSON.stringify(u[A]), e)
                            } else w.debug && console.log("Skipping [" + J + "] due to a lack of browser support.")
                        }
                        u.element = e
                    }
                    u.element && (I.Values.addClass(e, "velocity-animating"), L.push(u), p = o(e), p && ("" === l.queue && (p.tweensContainer = u, p.opts = l), p.isAnimating = !0), T === _ - 1 ? (w.State.calls.push([L, g, l, null, P.resolver]), !1 === w.State.isTicking && (w.State.isTicking = !0, d())) : T++)
                }

                var r, l = h.extend({}, w.defaults, b), u = {};
                switch (o(e) === n && w.init(e), parseFloat(l.delay) && !1 !== l.queue && h.queue(e, l.queue, function (t) {
                    w.velocityQueueEntryFlag = !0, o(e).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(l.delay)),
                        next: t
                    }
                }), l.duration.toString().toLowerCase()) {
                    case"fast":
                        l.duration = 200;
                        break;
                    case"normal":
                        l.duration = v;
                        break;
                    case"slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                }
                !1 !== w.mock && (!0 === w.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(w.mock) || 1, l.delay *= parseFloat(w.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !m.isFunction(l.begin) && (l.begin = null), l.progress && !m.isFunction(l.progress) && (l.progress = null), l.complete && !m.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = w.CSS.Values.getDisplayType(e))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && w.State.isMobile && !w.State.isGingerbread, !1 === l.queue ? l.delay ? setTimeout(a, l.delay) : a() : h.queue(e, l.queue, function (e, t) {
                    return !0 === t ? (P.promise && P.resolver(g), !0) : (w.velocityQueueEntryFlag = !0, void a(e))
                }), "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(e)[0] || h.dequeue(e)
            }

            var r, l, p, f, g, y, b,
                C = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (l = !1, f = 0, g = this, p = this) : (l = !0, f = 1, g = C ? arguments[0].elements || arguments[0].e : arguments[0]), g = a(g)) {
                C ? (y = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (y = arguments[f], b = arguments[f + 1]);
                var _ = g.length, T = 0;
                if (!/^(stop|finish|finishAll)$/i.test(y) && !h.isPlainObject(b)) {
                    var k = f + 1;
                    b = {};
                    for (var S = k; S < arguments.length; S++) m.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? m.isString(arguments[S]) || m.isArray(arguments[S]) ? b.easing = arguments[S] : m.isFunction(arguments[S]) && (b.complete = arguments[S]) : b.duration = arguments[S]
                }
                var P = {promise: null, resolver: null, rejecter: null};
                l && w.Promise && (P.promise = new w.Promise(function (e, t) {
                    P.resolver = e, P.rejecter = t
                }));
                var z;
                switch (y) {
                    case"scroll":
                        z = "scroll";
                        break;
                    case"reverse":
                        z = "reverse";
                        break;
                    case"finish":
                    case"finishAll":
                    case"stop":
                        h.each(g, function (e, t) {
                            o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== y || !0 !== b && !m.isString(b) || (h.each(h.queue(t, m.isString(b) ? b : ""), function (e, t) {
                                m.isFunction(t) && t()
                            }), h.queue(t, m.isString(b) ? b : "", []))
                        });
                        var M = [];
                        return h.each(w.State.calls, function (e, t) {
                            t && h.each(t[1], function (i, s) {
                                var a = b === n ? "" : b;
                                return !0 !== a && t[2].queue !== a && (b !== n || !1 !== t[2].queue) || void h.each(g, function (i, n) {
                                    if (n === s) if ((!0 === b || m.isString(b)) && (h.each(h.queue(n, m.isString(b) ? b : ""), function (e, t) {
                                            m.isFunction(t) && t(null, !0)
                                        }), h.queue(n, m.isString(b) ? b : "", [])), "stop" === y) {
                                        var r = o(n);
                                        r && r.tweensContainer && !1 !== a && h.each(r.tweensContainer, function (e, t) {
                                            t.endValue = t.currentValue
                                        }), M.push(e)
                                    } else "finish" !== y && "finishAll" !== y || (t[2].duration = 1)
                                })
                            })
                        }), "stop" === y && (h.each(M, function (e, t) {
                            u(t, !0)
                        }), P.promise && P.resolver(g)), e();
                    default:
                        if (!h.isPlainObject(y) || m.isEmptyObject(y)) {
                            if (m.isString(y) && w.Redirects[y]) {
                                r = h.extend({}, b);
                                var E = r.duration, O = r.delay || 0;
                                return !0 === r.backwards && (g = h.extend(!0, [], g).reverse()), h.each(g, function (e, t) {
                                    parseFloat(r.stagger) ? r.delay = O + parseFloat(r.stagger) * e : m.isFunction(r.stagger) && (r.delay = O + r.stagger.call(t, e, _)), r.drag && (r.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : v), r.duration = Math.max(r.duration * (r.backwards ? 1 - e / _ : (e + 1) / _), .75 * r.duration, 200)), w.Redirects[y].call(t, t, r || {}, e, _, g, P.promise ? P : n)
                                }), e()
                            }
                            var A = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return P.promise ? P.rejecter(new Error(A)) : console.log(A), e()
                        }
                        z = "start"
                }
                var D = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, L = [];
                h.each(g, function (e, t) {
                    m.isNode(t) && s(t, e)
                }), r = h.extend({}, w.defaults, b), r.loop = parseInt(r.loop, 10);
                var F = 2 * r.loop - 1;
                if (r.loop) for (var R = 0; R < F; R++) {
                    var N = {delay: r.delay, progress: r.progress};
                    R === F - 1 && (N.display = r.display, N.visibility = r.visibility, N.complete = r.complete), x(g, "reverse", N)
                }
                return e()
            }
        };
        w = h.extend(x, w), w.animate = x;
        var C = t.requestAnimationFrame || f;
        return w.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
            i.hidden ? (C = function (e) {
                return setTimeout(function () {
                    e(!0)
                }, 16)
            }, d()) : C = t.requestAnimationFrame || f
        }), e.Velocity = w, e !== t && (e.fn.velocity = x, e.fn.velocity.defaults = w.defaults), h.each(["Down", "Up"], function (e, t) {
            w.Redirects["slide" + t] = function (e, i, s, a, o, r) {
                var l = h.extend({}, i), c = l.begin, d = l.complete,
                    u = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, p = {};
                l.display === n && (l.display = "Down" === t ? "inline" === w.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                    c && c.call(o, o);
                    for (var i in u) {
                        p[i] = e.style[i];
                        var n = w.CSS.getPropertyValue(e, i);
                        u[i] = "Down" === t ? [n, 0] : [0, n]
                    }
                    p.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var t in p) e.style[t] = p[t];
                    d && d.call(o, o), r && r.resolver(o)
                }, w(e, u, l)
            }
        }), h.each(["In", "Out"], function (e, t) {
            w.Redirects["fade" + t] = function (e, i, s, a, o, r) {
                var l = h.extend({}, i), c = l.complete, d = {opacity: "In" === t ? 1 : 0};
                l.complete = s !== a - 1 ? l.begin = null : function () {
                    c && c.call(o, o), r && r.resolver(o)
                }, l.display === n && (l.display = "In" === t ? "auto" : "none"), w(this, d, l)
            }
        }), w
    }(window.jQuery || window.Zepto || window, window, document)
}), /* VelocityJS.org UI Pack (5.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
    function (e) {
        "use strict";
        "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
    }(function () {
        "use strict";
        return function (e, t, i, n) {
            function s(e, t) {
                var i = [];
                return !(!e || !t) && ($.each([e, t], function (e, t) {
                    var n = [];
                    $.each(t, function (e, t) {
                        for (; t.toString().length < 5;) t = "0" + t;
                        n.push(t)
                    }), i.push(n.join(""))
                }), parseFloat(i[0]) > parseFloat(i[1]))
            }

            var a = e.Velocity;
            if (!a || !a.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
            var $ = a.Utilities;
            if (s({major: 1, minor: 1, patch: 0}, a.version)) {
                var o = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                throw alert(o), new Error(o)
            }
            a.RegisterEffect = a.RegisterUI = function (e, t) {
                function i(e, t, i, n) {
                    var s = 0, o;
                    $.each(e.nodeType ? [e] : e, function (e, t) {
                        n && (i += e * n), o = t.parentNode, propertiesToSum = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], "border-box" === a.CSS.getPropertyValue(t, "boxSizing").toString().toLowerCase() && (propertiesToSum = ["height"]), $.each(propertiesToSum, function (e, i) {
                            s += parseFloat(a.CSS.getPropertyValue(t, i))
                        })
                    }), a.animate(o, {height: ("In" === t ? "+" : "-") + "=" + s}, {
                        queue: !1,
                        easing: "ease-in-out",
                        duration: i * ("In" === t ? .6 : 1)
                    })
                }

                return a.Redirects[e] = function (n, s, o, r, l, c) {
                    var d = o === r - 1;
                    "function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(l, l) : t.defaultDuration = parseFloat(t.defaultDuration);
                    for (var u = 0; u < t.calls.length; u++) {
                        var h = t.calls[u], p = h[0], f = 1e3, m = h[1], g = h[2] || {}, v = {};
                        if (void 0 !== s.duration ? f = s.duration : void 0 !== t.defaultDuration && (f = t.defaultDuration), v.duration = f * (m || 1), v.queue = s.queue || "", v.easing = g.easing || "ease", v.delay = parseFloat(g.delay) || 0, v._cacheValues = g._cacheValues || !0, 0 === u) {
                            if (v.delay += parseFloat(s.delay) || 0, 0 === o && (v.begin = function () {
                                    s.begin && s.begin.call(l, l);
                                    var t = e.match(/(In|Out)$/);
                                    t && "In" === t[0] && void 0 !== p.opacity && $.each(l.nodeType ? [l] : l, function (e, t) {
                                        a.CSS.setPropertyValue(t, "opacity", 0)
                                    }), s.animateParentHeight && t && i(l, t[0], f + v.delay, s.stagger)
                                }), null !== s.display) if (void 0 !== s.display && "none" !== s.display) v.display = s.display; else if (/In$/.test(e)) {
                                var y = a.CSS.Values.getDisplayType(n);
                                v.display = "inline" === y ? "inline-block" : y
                            }
                            s.visibility && "hidden" !== s.visibility && (v.visibility = s.visibility)
                        }
                        if (u === t.calls.length - 1) {
                            var w = function () {
                                void 0 !== s.display && "none" !== s.display || !/Out$/.test(e) || $.each(l.nodeType ? [l] : l, function (e, t) {
                                    a.CSS.setPropertyValue(t, "display", "none")
                                }), s.complete && s.complete.call(l, l), c && c.resolver(l || n)
                            };
                            v.complete = function () {
                                if (t.reset) {
                                    for (var e in t.reset) {
                                        var i = t.reset[e];
                                        void 0 !== a.CSS.Hooks.registered[e] || "string" != typeof i && "number" != typeof i || (t.reset[e] = [t.reset[e], t.reset[e]])
                                    }
                                    var s = {duration: 0, queue: !1};
                                    d && (s.complete = w), a.animate(n, t.reset, s)
                                } else d && w()
                            }, "hidden" === s.visibility && (v.visibility = s.visibility)
                        }
                        a.animate(n, p, v)
                    }
                }, a
            }, a.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [[{translateY: -30}, .25], [{translateY: 0}, .125], [{translateY: -15}, .125], [{translateY: 0}, .25]]
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [[{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 0}, .125]]
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [[{opacity: [0, "easeInOutQuad", 1]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25], [{opacity: [0, "easeInOutQuad"]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25]]
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [[{scaleX: 1.1, scaleY: 1.1}, .5, {easing: "easeInExpo"}], [{scaleX: 1, scaleY: 1}, .5]]
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [[{rotateZ: 15}, .2], [{rotateZ: -10}, .2], [{rotateZ: 5}, .2], [{rotateZ: -5}, .2], [{rotateZ: 0}, .2]]
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [[{scaleX: .9, scaleY: .9, rotateZ: -3}, .1], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]]
                },
                "transition.fadeIn": {defaultDuration: 500, calls: [[{opacity: [1, 0]}]]},
                "transition.fadeOut": {defaultDuration: 500, calls: [[{opacity: [0, 1]}]]},
                "transition.flipXIn": {
                    defaultDuration: 700,
                    calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]],
                    reset: {transformPerspective: 0}
                },
                "transition.flipXOut": {
                    defaultDuration: 700,
                    calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]],
                    reset: {transformPerspective: 0, rotateY: 0}
                },
                "transition.flipYIn": {
                    defaultDuration: 800,
                    calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]],
                    reset: {transformPerspective: 0}
                },
                "transition.flipYOut": {
                    defaultDuration: 800,
                    calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]],
                    reset: {transformPerspective: 0, rotateX: 0}
                },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5], [{opacity: .8, rotateY: 10}, .25], [{opacity: 1, rotateY: 0}, .25]],
                    reset: {transformPerspective: 0}
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10}, .5], [{
                        opacity: 0,
                        rotateY: 90
                    }, .5]],
                    reset: {transformPerspective: 0, rotateY: 0}
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5], [{opacity: .8, rotateX: 10}, .25], [{opacity: 1, rotateX: 0}, .25]],
                    reset: {transformPerspective: 0}
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15}, .5], [{
                        opacity: 0,
                        rotateX: 90
                    }, .5]],
                    reset: {transformPerspective: 0, rotateX: 0}
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]],
                    reset: {transformOriginX: "50%", transformOriginY: "50%"}
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]],
                    reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {easing: "easeInOutSine"}]]
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {easing: "swing"}]],
                    reset: {scaleX: 1, scaleY: 1, rotateY: 0}
                },
                "transition.shrinkIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]]
                },
                "transition.shrinkOut": {
                    defaultDuration: 600,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]],
                    reset: {scaleX: 1, scaleY: 1}
                },
                "transition.expandIn": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]]
                },
                "transition.expandOut": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]],
                    reset: {scaleX: 1, scaleY: 1}
                },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [[{opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3]}, .4], [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2], [{scaleX: 1, scaleY: 1}, .5]]
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [[{scaleX: .95, scaleY: .95}, .35], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35], [{opacity: [0, 1], scaleX: .3, scaleY: .3}, .3]],
                    reset: {scaleX: 1, scaleY: 1}
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {easing: "easeOutCirc"}], [{translateY: 10}, .2], [{translateY: 0}, .2]]
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [[{translateY: 20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: -1e3}, .8]],
                    reset: {translateY: 0}
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {easing: "easeOutCirc"}], [{translateY: -10}, .2], [{translateY: 0}, .2]]
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [[{translateY: -20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: 1e3}, .8]],
                    reset: {translateY: 0}
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {easing: "easeOutCirc"}], [{translateX: -10}, .2], [{translateX: 0}, .2]]
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [[{translateX: 30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: -1250}, .8]],
                    reset: {translateX: 0}
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {easing: "easeOutCirc"}], [{translateX: 10}, .2], [{translateX: 0}, .2]]
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [[{translateX: -30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: 1250}, .8]],
                    reset: {translateX: 0}
                },
                "transition.slideUpIn": {
                    defaultDuration: 900,
                    calls: [[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]]
                },
                "transition.slideUpOut": {
                    defaultDuration: 900,
                    calls: [[{opacity: [0, 1], translateY: -20, translateZ: 0}]],
                    reset: {translateY: 0}
                },
                "transition.slideDownIn": {
                    defaultDuration: 900,
                    calls: [[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]]
                },
                "transition.slideDownOut": {
                    defaultDuration: 900,
                    calls: [[{opacity: [0, 1], translateY: 20, translateZ: 0}]],
                    reset: {translateY: 0}
                },
                "transition.slideLeftIn": {
                    defaultDuration: 1e3,
                    calls: [[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]]
                },
                "transition.slideLeftOut": {
                    defaultDuration: 1050,
                    calls: [[{opacity: [0, 1], translateX: -20, translateZ: 0}]],
                    reset: {translateX: 0}
                },
                "transition.slideRightIn": {
                    defaultDuration: 1e3,
                    calls: [[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]]
                },
                "transition.slideRightOut": {
                    defaultDuration: 1050,
                    calls: [[{opacity: [0, 1], translateX: 20, translateZ: 0}]],
                    reset: {translateX: 0}
                },
                "transition.slideUpBigIn": {
                    defaultDuration: 850,
                    calls: [[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]]
                },
                "transition.slideUpBigOut": {
                    defaultDuration: 800,
                    calls: [[{opacity: [0, 1], translateY: -75, translateZ: 0}]],
                    reset: {translateY: 0}
                },
                "transition.slideDownBigIn": {
                    defaultDuration: 850,
                    calls: [[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]]
                },
                "transition.slideDownBigOut": {
                    defaultDuration: 800,
                    calls: [[{opacity: [0, 1], translateY: 75, translateZ: 0}]],
                    reset: {translateY: 0}
                },
                "transition.slideLeftBigIn": {
                    defaultDuration: 800,
                    calls: [[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]]
                },
                "transition.slideLeftBigOut": {
                    defaultDuration: 750,
                    calls: [[{opacity: [0, 1], translateX: -75, translateZ: 0}]],
                    reset: {translateX: 0}
                },
                "transition.slideRightBigIn": {
                    defaultDuration: 800,
                    calls: [[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]]
                },
                "transition.slideRightBigOut": {
                    defaultDuration: 750,
                    calls: [[{opacity: [0, 1], translateX: 75, translateZ: 0}]],
                    reset: {translateX: 0}
                },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]],
                    reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
                }
            };
            for (var r in a.RegisterEffect.packagedEffects) a.RegisterEffect(r, a.RegisterEffect.packagedEffects[r]);
            a.RunSequence = function (e) {
                var t = $.extend(!0, [], e);
                t.length > 1 && ($.each(t.reverse(), function (e, i) {
                    var n = t[e + 1];
                    if (n) {
                        var s = i.o || i.options, o = n.o || n.options,
                            r = s && !1 === s.sequenceQueue ? "begin" : "complete", l = o && o[r], c = {};
                        c[r] = function () {
                            var e = n.e || n.elements, t = e.nodeType ? [e] : e;
                            l && l.call(t, t), a(i)
                        }, n.o ? n.o = $.extend({}, o, c) : n.options = $.extend({}, o, c)
                    }
                }), t.reverse()), a(t[0])
            }
        }(window.jQuery || window.Zepto || window, window, document)
    }), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : e.BackgroundCheck = t(e)
}(this, function () {
    "use strict";

    function e(e) {
        if (void 0 === e || void 0 === e.targets) throw"Missing attributes";
        A.debug = n(e.debug, !1), A.debugOverlay = n(e.debugOverlay, !1), A.targets = o(e.targets), A.images = o(e.images || "img", !0), A.changeParent = n(e.changeParent, !1), A.threshold = n(e.threshold, 50), A.minComplexity = n(e.minComplexity, 30), A.minOverlap = n(e.minOverlap, 50), A.windowEvents = n(e.windowEvents, !0), A.maxDuration = n(e.maxDuration, 500), A.mask = n(e.mask, {
            r: 0,
            g: 255,
            b: 0
        }), A.classes = n(e.classes, {
            dark: "background--dark",
            light: "background--light",
            complex: "background--complex"
        }), void 0 === S && (r(), S && (P.style.position = "fixed", P.style.top = "0px", P.style.left = "0px", P.style.width = "100%", P.style.height = "100%", window.addEventListener(O, C.bind(null, function () {
            d(), x()
        })), window.addEventListener("scroll", C.bind(null, x)), d(), x()))
    }

    function t() {
        S = null, P = null, z = null, A = {}, M && clearTimeout(M)
    }

    function i(e) {
        T("debug") && console.log(e)
    }

    function n(e, t) {
        return s(e, typeof t), void 0 === e ? t : e
    }

    function s(e, t) {
        if (void 0 !== e && typeof e !== t) throw"Incorrect attribute type"
    }

    function a(e) {
        for (var t, n, s = [], a = 0; a < e.length; a++) if (t = e[a], s.push(t), "IMG" !== t.tagName) {
            if (n = window.getComputedStyle(t).backgroundImage, n.split(/,url|, url/).length > 1) throw"Multiple backgrounds are not supported";
            if (!n || "none" === n) throw"Element is not an <img> but does not have a background-image";
            s[a] = {
                img: new Image,
                el: s[a]
            }, n = n.slice(4, -1), n = n.replace(/"/g, ""), s[a].img.src = n, i("CSS Image - " + n)
        }
        return s
    }

    function o(e, t) {
        var i = e;
        if ("string" == typeof e ? i = document.querySelectorAll(e) : e && 1 === e.nodeType && (i = [e]), !i || 0 === i.length || void 0 === i.length) throw"Elements not found";
        return t && (i = a(i)), i = Array.prototype.slice.call(i)
    }

    function r() {
        P = document.createElement("canvas"), P && P.getContext ? (z = P.getContext("2d"), S = !0) : S = !1, l()
    }

    function l() {
        T("debugOverlay") ? (P.style.opacity = .5, P.style.pointerEvents = "none", document.body.appendChild(P)) : P.parentNode && P.parentNode.removeChild(P)
    }

    function c(e) {
        var n = (new Date).getTime() - e;
        i("Duration: " + n + "ms"), n > T("maxDuration") && (console.log("BackgroundCheck - Killed"), g(), t())
    }

    function d() {
        E = {
            left: 0,
            top: 0,
            right: document.body.clientWidth,
            bottom: window.innerHeight
        }, P.width = document.body.clientWidth, P.height = window.innerHeight
    }

    function u(e, t, i) {
        var n, s;
        return -1 !== e.indexOf("px") ? n = parseFloat(e) : -1 !== e.indexOf("%") ? (n = parseFloat(e), s = n / 100, n = s * t, i && (n -= i * s)) : n = t, n
    }

    function h(e) {
        var t = window.getComputedStyle(e.el);
        e.el.style.backgroundRepeat = "no-repeat", e.el.style.backgroundOrigin = "padding-box";
        var i = t.backgroundSize.split(" "), n = i[0], s = void 0 === i[1] ? "auto" : i[1],
            a = e.el.clientWidth / e.el.clientHeight, o = e.img.naturalWidth / e.img.naturalHeight;
        "cover" === n ? a >= o ? (n = "100%", s = "auto") : (n = "auto", i[0] = "auto", s = "100%") : "contain" === n && (1 / o > 1 / a ? (n = "auto", i[0] = "auto", s = "100%") : (n = "100%", s = "auto")), n = "auto" === n ? e.img.naturalWidth : u(n, e.el.clientWidth), s = "auto" === s ? n / e.img.naturalWidth * e.img.naturalHeight : u(s, e.el.clientHeight), "auto" === i[0] && "auto" !== i[1] && (n = s / e.img.naturalHeight * e.img.naturalWidth);
        var r = t.backgroundPosition;
        "top" === r ? r = "50% 0%" : "left" === r ? r = "0% 50%" : "right" === r ? r = "100% 50%" : "bottom" === r ? r = "50% 100%" : "center" === r && (r = "50% 50%"), r = r.split(" ");
        var l, c;
        return 4 === r.length ? (l = r[1], c = r[3]) : (l = r[0], c = r[1]), c = c || "50%", l = u(l, e.el.clientWidth, n), c = u(c, e.el.clientHeight, s), 4 === r.length && ("right" === r[0] && (l = e.el.clientWidth - e.img.naturalWidth - l), "bottom" === r[2] && (c = e.el.clientHeight - e.img.naturalHeight - c)), l += e.el.getBoundingClientRect().left, c += e.el.getBoundingClientRect().top, {
            left: Math.floor(l),
            right: Math.floor(l + n),
            top: Math.floor(c),
            bottom: Math.floor(c + s),
            width: Math.floor(n),
            height: Math.floor(s)
        }
    }

    function p(e) {
        var t, i, n;
        if (e.nodeType) {
            var s = e.getBoundingClientRect();
            t = {
                left: s.left,
                right: s.right,
                top: s.top,
                bottom: s.bottom,
                width: s.width,
                height: s.height
            }, n = e.parentNode, i = e
        } else t = h(e), n = e.el, i = e.img;
        n = n.getBoundingClientRect(), t.imageTop = 0, t.imageLeft = 0, t.imageWidth = i.naturalWidth, t.imageHeight = i.naturalHeight;
        var a, o = t.imageHeight / t.height;
        return t.top < n.top && (a = n.top - t.top, t.imageTop = o * a, t.imageHeight -= o * a, t.top += a, t.height -= a), t.left < n.left && (a = n.left - t.left, t.imageLeft += o * a, t.imageWidth -= o * a, t.width -= a, t.left += a), t.bottom > n.bottom && (a = t.bottom - n.bottom, t.imageHeight -= o * a, t.height -= a), t.right > n.right && (a = t.right - n.right, t.imageWidth -= o * a, t.width -= a), t.imageTop = Math.floor(t.imageTop), t.imageLeft = Math.floor(t.imageLeft), t.imageHeight = Math.floor(t.imageHeight), t.imageWidth = Math.floor(t.imageWidth), t
    }

    function f(e) {
        var t = p(e);
        e = e.nodeType ? e : e.img, t.imageWidth > 0 && t.imageHeight > 0 && t.width > 0 && t.height > 0 ? z.drawImage(e, t.imageLeft, t.imageTop, t.imageWidth, t.imageHeight, t.left, t.top, t.width, t.height) : i("Skipping image - " + e.src + " - area too small")
    }

    function m(e, t, i) {
        var n = e.className;
        switch (i) {
            case"add":
                n += " " + t;
                break;
            case"remove":
                var s = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(s, "")
        }
        e.className = n.trim()
    }

    function g(e) {
        for (var t, i = e ? [e] : T("targets"), n = 0; n < i.length; n++) t = i[n], t = T("changeParent") ? t.parentNode : t, m(t, T("classes").light, "remove"), m(t, T("classes").dark, "remove"), m(t, T("classes").complex, "remove")
    }

    function v(e) {
        var t, n, s, a, o = e.getBoundingClientRect(), r = 0, l = 0, c = 0, d = 0, u = T("mask");
        if (o.width > 0 && o.height > 0) {
            g(e), e = T("changeParent") ? e.parentNode : e, n = z.getImageData(o.left, o.top, o.width, o.height).data;
            for (var h = 0; h < n.length; h += 4) n[h] === u.r && n[h + 1] === u.g && n[h + 2] === u.b ? d++ : (r++, t = .2126 * n[h] + .7152 * n[h + 1] + .0722 * n[h + 2], s = t - c, l += s * s, c += s / r);
            d <= n.length / 4 * (1 - T("minOverlap") / 100) && (a = Math.sqrt(l / r) / 255, c /= 255, i("Target: " + e.className + " lum: " + c + " var: " + a), m(e, c <= T("threshold") / 100 ? T("classes").dark : T("classes").light, "add"), a > T("minComplexity") / 100 && m(e, T("classes").complex, "add"))
        }
    }

    function y(e, t) {
        return e = (e.nodeType ? e : e.el).getBoundingClientRect(), t = t === E ? t : (t.nodeType ? t : t.el).getBoundingClientRect(), !(e.right < t.left || e.left > t.right || e.top > t.bottom || e.bottom < t.top)
    }

    function w(e) {
        for (var t, i = (new Date).getTime(), n = e && ("IMG" === e.tagName || e.img) ? "image" : "targets", s = !e, a = T("targets").length, o = 0; a > o; o++) t = T("targets")[o], y(t, E) && ("targets" !== n || e && e !== t ? "image" === n && y(t, e) && v(t) : (s = !0, v(t)));
        if ("targets" === n && !s) throw e + " is not a target";
        c(i)
    }

    function b(e) {
        var t = function (e) {
            var t = 0;
            return "static" !== window.getComputedStyle(e).position && (t = parseInt(window.getComputedStyle(e).zIndex, 10) || 0) >= 0 && t++, t
        }, i = e.parentNode;
        return 1e5 * (i ? t(i) : 0) + t(e)
    }

    function I(e) {
        var t = !1;
        return e.sort(function (e, i) {
            e = e.nodeType ? e : e.el, i = i.nodeType ? i : i.el;
            var n = e.compareDocumentPosition(i), s = 0;
            return e = b(e), i = b(i), e > i && (t = !0), e === i && 2 === n ? s = 1 : e === i && 4 === n && (s = -1), s || e - i
        }), i("Sorted: " + t), t && i(e), t
    }

    function x(e, t, n) {
        if (S) {
            var s = T("mask");
            i("--- BackgroundCheck ---"), i("onLoad event: " + (n && n.src)), !0 !== t && (z.clearRect(0, 0, P.width, P.height), z.fillStyle = "rgb(" + s.r + ", " + s.g + ", " + s.b + ")", z.fillRect(0, 0, P.width, P.height));
            for (var a, o, r = n ? [n] : T("images"), l = I(r), c = !1, d = 0; d < r.length; d++) a = r[d], y(a, E) && (o = a.nodeType ? a : a.img, 0 === o.naturalWidth ? (c = !0, i("Loading... " + a.src), o.removeEventListener("load", x), l ? o.addEventListener("load", x.bind(null, null, !1, null)) : o.addEventListener("load", x.bind(null, e, !0, a))) : (i("Drawing: " + a.src), f(a)));
            n || c ? n && w(n) : w(e)
        }
    }

    function C(e) {
        !0 === T("windowEvents") && (M && clearTimeout(M), M = setTimeout(e, 200))
    }

    function _(e, t) {
        if (void 0 === A[e]) throw"Unknown property - " + e;
        if (void 0 === t) throw"Missing value for " + e;
        if ("targets" === e || "images" === e) try {
            t = o("images" !== e || t ? t : "img", "images" === e)
        } catch (e) {
            throw t = [], e
        } else s(t, typeof A[e]);
        g(), A[e] = t, x(), "debugOverlay" === e && l()
    }

    function T(e) {
        if (void 0 === A[e]) throw"Unknown property - " + e;
        return A[e]
    }

    function k() {
        for (var e, t = T("images"), i = [], n = 0; n < t.length; n++) e = p(t[n]), i.push(e);
        return i
    }

    var S, P, z, M, E, O = void 0 !== window.orientation ? "orientationchange" : "resize", A = {};
    return {init: e, destroy: t, refresh: x, set: _, get: T, getImageData: k}
}), function (e, t, i, n) {
    function s(t, i) {
        this.element = t, this.options = e.extend({}, o, i), this._defaults = o, this._name = a, this.init()
    }

    var a = "stellar", o = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (e) {
                e.hide()
            },
            showElement: function (e) {
                e.show()
            }
        }, r = {
            scroll: {
                getLeft: function (e) {
                    return e.scrollLeft()
                }, setLeft: function (e, t) {
                    e.scrollLeft(t)
                }, getTop: function (e) {
                    return e.scrollTop()
                }, setTop: function (e, t) {
                    e.scrollTop(t)
                }
            }, position: {
                getLeft: function (e) {
                    return -1 * parseInt(e.css("left"), 10)
                }, getTop: function (e) {
                    return -1 * parseInt(e.css("top"), 10)
                }
            }, margin: {
                getLeft: function (e) {
                    return -1 * parseInt(e.css("margin-left"), 10)
                }, getTop: function (e) {
                    return -1 * parseInt(e.css("margin-top"), 10)
                }
            }, transform: {
                getLeft: function (e) {
                    var t = getComputedStyle(e[0])[d];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
                }, getTop: function (e) {
                    var t = getComputedStyle(e[0])[d];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        }, l = {
            position: {
                setLeft: function (e, t) {
                    e.css("left", t)
                }, setTop: function (e, t) {
                    e.css("top", t)
                }
            }, transform: {
                setPosition: function (e, t, i, n, s) {
                    e[0].style[d] = "translate3d(" + (t - i) + "px, " + (n - s) + "px, 0)"
                }
            }
        }, c = function () {
            var t, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = e("script")[0].style, s = "";
            for (t in n) if (i.test(t)) {
                s = t.match(i)[0];
                break
            }
            return "WebkitOpacity" in n && (s = "Webkit"), "KhtmlOpacity" in n && (s = "Khtml"), function (e) {
                return s + (s.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }
        }(), d = c("transform"), u = e("<div />", {style: "background:#fff"}).css("background-position-x") !== n,
        h = u ? function (e, t, i) {
            e.css({"background-position-x": t, "background-position-y": i})
        } : function (e, t, i) {
            e.css("background-position", t + " " + i)
        }, p = u ? function (e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function (e) {
            return e.css("background-position").split(" ")
        },
        f = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        };
    s.prototype = {
        init: function () {
            this.options.name = a + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === i.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var e = this, t = r[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        }, _defineSetters: function () {
            var t = this, i = r[t.options.scrollProperty], n = l[t.options.positionProperty], s = i.setLeft,
                a = i.setTop;
            this._setScrollLeft = "function" == typeof s ? function (e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = "function" == typeof a ? function (e) {
                a(t.$scrollElement, e)
            } : e.noop, this._setPosition = n.setPosition || function (e, i, s, a, o) {
                t.options.horizontalScrolling && n.setLeft(e, i, s), t.options.verticalScrolling && n.setTop(e, a, o)
            }
        }, _handleWindowLoadAndResize: function () {
            var i = this, n = e(t);
            i.options.responsive && n.bind("load." + this.name, function () {
                i.refresh()
            }), n.bind("resize." + this.name, function () {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        }, refresh: function (i) {
            var n = this, s = n._getScrollLeft(), a = n._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
                var e = n._getScrollLeft(), t = n._getScrollTop();
                n._setScrollLeft(e + 1), n._setScrollTop(t + 1), n._setScrollLeft(e), n._setScrollTop(t)
            }), this._setScrollLeft(s), this._setScrollTop(a)
        }, _detectViewport: function () {
            var e = this.$viewportElement.offset(), t = null !== e && e !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        }, _findParticles: function () {
            var t = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n) for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                var i, s, a, o, r, l, c, d, u, h = e(this), p = 0, f = 0, m = 0, g = 0;
                if (h.data("stellar-elementIsActive")) {
                    if (h.data("stellar-elementIsActive") !== this) return
                } else h.data("stellar-elementIsActive", this);
                t.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), a = h.position().left, o = h.position().top, r = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), l = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), d = h.offset().left - r, u = h.offset().top - l, h.parents().each(function () {
                    var t = e(this);
                    return !0 === t.data("stellar-offset-parent") ? (p = m, f = g, c = t, !1) : (m += t.position().left, void(g += t.position().top))
                }), i = h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : t.horizontalOffset, s = h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: h,
                    $offsetParent: c,
                    isFixed: "fixed" === h.css("position"),
                    horizontalOffset: i,
                    verticalOffset: s,
                    startingPositionLeft: a,
                    startingPositionTop: o,
                    startingOffsetLeft: d,
                    startingOffsetTop: u,
                    parentOffsetLeft: p,
                    parentOffsetTop: f,
                    stellarRatio: h.data("stellar-ratio") !== n ? h.data("stellar-ratio") : 1,
                    width: h.outerWidth(!0),
                    height: h.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var t, i = this, s = this._getScrollLeft(), a = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function () {
                var t, o, r, l, c, d, u, f = e(this), m = p(f), g = 0, v = 0, y = 0, w = 0;
                if (f.data("stellar-backgroundIsActive")) {
                    if (f.data("stellar-backgroundIsActive") !== this) return
                } else f.data("stellar-backgroundIsActive", this);
                f.data("stellar-backgroundStartingLeft") ? h(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", m[0]), f.data("stellar-backgroundStartingTop", m[1])), r = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - r - s, d = f.offset().top - l - a, f.parents().each(function () {
                    var t = e(this);
                    return !0 === t.data("stellar-offset-parent") ? (g = y, v = w, u = t, !1) : (y += t.position().left, void(w += t.position().top))
                }), t = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, o = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: f,
                    $offsetParent: u,
                    isFixed: "fixed" === f.css("background-attachment"),
                    horizontalOffset: t,
                    verticalOffset: o,
                    startingValueLeft: m[0],
                    startingValueTop: m[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(m[0], 10)) ? 0 : parseInt(m[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(m[1], 10)) ? 0 : parseInt(m[1], 10),
                    startingPositionLeft: f.position().left,
                    startingPositionTop: f.position().top,
                    startingOffsetLeft: c,
                    startingOffsetTop: d,
                    parentOffsetLeft: g,
                    parentOffsetTop: v,
                    stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                })
            }))
        }, _reset: function () {
            var e, t, i, n, s;
            for (s = this.particles.length - 1; s >= 0; s--) e = this.particles[s], t = e.$element.data("stellar-startingLeft"), i = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, i, i), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (s = this.backgrounds.length - 1; s >= 0; s--) n = this.backgrounds[s], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(n.$element, n.startingValueLeft, n.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var i = this, n = e(t);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function () {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function () {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var e, t, i, n, s, a, o, r, l, c, d = this._getScrollLeft(), u = this._getScrollTop(), p = !0, f = !0;
            if (this.currentScrollLeft !== d || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = d, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) e = this.particles[c], t = e.isFixed ? 1 : 0, this.options.horizontalScrolling ? (a = (d + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft, r = a - e.startingPositionLeft + e.startingOffsetLeft) : (a = e.startingPositionLeft, r = e.startingOffsetLeft), this.options.verticalScrolling ? (o = (u + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop, l = o - e.startingPositionTop + e.startingOffsetTop) : (o = e.startingPositionTop, l = e.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || r + e.width > (e.isFixed ? 0 : d) && r < (e.isFixed ? 0 : d) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + e.height > (e.isFixed ? 0 : u) && l < (e.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop),
                    f && p ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, a, e.startingPositionLeft, o, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
                for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], t = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (d + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (t - i.stellarRatio) + "px" : i.startingValueLeft, s = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (t - i.stellarRatio) + "px" : i.startingValueTop, h(i.$element, n, s)
            }
        }, _handleScrollEvent: function () {
            var e = this, t = !1, i = function () {
                e._repositionElements(), t = !1
            }, n = function () {
                t || (f(i), t = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, n), n()
        }, _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                f(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[a] = function (t) {
        var i = arguments;
        return t === n || "object" == typeof t ? this.each(function () {
            e.data(this, "plugin_" + a) || e.data(this, "plugin_" + a, new s(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function () {
            var n = e.data(this, "plugin_" + a);
            n instanceof s && "function" == typeof n[t] && n[t].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === t && e.data(this, "plugin_" + a, null)
        }) : void 0
    }, e[a] = function () {
        var i = e(t);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, e[a].scrollProperty = r, e[a].positionProperty = l, t.Stellar = s
}(jQuery, this, document), !function () {
    "use strict";

    function e(e) {
        e.fn.swiper = function (t) {
            var n;
            return e(this).each(function () {
                var e = new i(this, t);
                n || (n = e)
            }), n
        }
    }

    var t, i = function (e, n) {
        function a(e) {
            return Math.floor(e)
        }

        function o() {
            var e = x.params.autoplay, t = x.slides.eq(x.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function () {
                x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? n.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
            }, e)
        }

        function r(e, i) {
            var n = t(e.target);
            if (!n.is(i)) if ("string" == typeof i) n = n.parents(i); else if (i.nodeType) {
                var s;
                return n.parents().each(function (e, t) {
                    t === i && (s = i)
                }), s ? i : void 0
            }
            if (0 !== n.length) return n[0]
        }

        function l(e, t) {
            t = t || {};
            var i = window.MutationObserver || window.WebkitMutationObserver, n = new i(function (e) {
                e.forEach(function (e) {
                    x.onResize(!0), x.emit("onObserverUpdate", x, e)
                })
            });
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), x.observers.push(n)
        }

        function c(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var i = !1;
                    if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                    var n = {left: window.pageXOffset, top: window.pageYOffset}, s = window.innerWidth,
                        a = window.innerHeight, o = x.container.offset();
                    x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                    for (var r = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < r.length; l++) {
                        var c = r[l];
                        c[0] >= n.left && c[0] <= n.left + s && c[1] >= n.top && c[1] <= n.top + a && (i = !0)
                    }
                    if (!i) return
                }
                x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev())
            }
        }

        function d() {
            var e = "onwheel", t = e in document;
            if (!t) {
                var i = document.createElement("div");
                i.setAttribute(e, "return;"), t = "function" == typeof i[e]
            }
            return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
        }

        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0, i = x.rtl ? -1 : 1, n = h(e);
            if (x.params.mousewheelForceToAxis) if (x.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                t = n.pixelX * i
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                t = n.pixelY
            } else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
            if (0 !== t) {
                if (x.params.mousewheelInvert && (t = -t), x.params.freeMode) {
                    var s = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity, a = x.isBeginning,
                        o = x.isEnd;
                    if (s >= x.minTranslate() && (s = x.minTranslate()), s <= x.maxTranslate() && (s = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(s), x.updateProgress(), x.updateActiveIndex(), (!a && x.isBeginning || !o && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
                            x.slideReset()
                        }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === s || s === x.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60) if (t < 0) if (x.isEnd && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return !0
                    } else x.slideNext(), x.emit("onScroll", x, e); else if (x.isBeginning && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return !0
                    } else x.slidePrev(), x.emit("onScroll", x, e);
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function h(e) {
            var t = 10, i = 40, n = 800, s = 0, a = 0, o = 0, r = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (s = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (s = a, a = 0), o = s * t, r = a * t, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (1 === e.deltaMode ? (o *= i, r *= i) : (o *= n, r *= n)), o && !s && (s = o < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), {
                spinX: s,
                spinY: a,
                pixelX: o,
                pixelY: r
            }
        }

        function p(e, i) {
            e = t(e);
            var n, s, a, o = x.rtl ? -1 : 1;
            n = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), s || a ? (s = s || "0", a = a || "0") : x.isHorizontal() ? (s = n, a = "0") : (a = n, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i * o + "%" : s * i * o + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i + "%" : a * i + "px", e.transform("translate3d(" + s + ", " + a + ",0px)")
        }

        function f(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }

        if (!(this instanceof i)) return new i(e, n);
        var m = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
            flip: {slideShadows: !0, limitRotation: !0},
            cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
            fade: {crossFade: !1},
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, g = n && n.virtualTranslate;
        n = n || {};
        var v = {};
        for (var y in n) if ("object" != typeof n[y] || null === n[y] || n[y].nodeType || n[y] === window || n[y] === document || "undefined" != typeof Dom7 && n[y] instanceof Dom7 || "undefined" != typeof jQuery && n[y] instanceof jQuery) v[y] = n[y]; else {
            v[y] = {};
            for (var w in n[y]) v[y][w] = n[y][w]
        }
        for (var b in m) if (void 0 === n[b]) n[b] = m[b]; else if ("object" == typeof n[b]) for (var I in m[b]) void 0 === n[b][I] && (n[b][I] = m[b][I]);
        var x = this;
        if (x.params = n, x.originalParams = v, x.classNames = [], void 0 !== t && "undefined" != typeof Dom7 && (t = Dom7), (void 0 !== t || (t = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = t, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
                if (!x.params.breakpoints) return !1;
                var e, t = !1, i = [];
                for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && i.push(e);
                i.sort(function (e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var n = 0; n < i.length; n++) (e = i[n]) >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, x.setBreakpoint = function () {
                var e = x.getActiveBreakpoint();
                if (e && x.currentBreakpoint !== e) {
                    var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                        i = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                    for (var n in t) x.params[n] = t[n];
                    x.currentBreakpoint = e, i && x.destroyLoop && x.reLoop(!0)
                }
            }, x.params.breakpoints && x.setBreakpoint(), x.container = t(e), 0 !== x.container.length)) {
            if (x.container.length > 1) {
                var C = [];
                return x.container.each(function () {
                    C.push(new i(this, n))
                }), C
            }
            x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0, x.params.setWrapperSize = !1), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, x.params.setWrapperSize = !1, void 0 === g && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = t(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = t(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = t(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function () {
                return "horizontal" === x.params.direction
            }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function () {
                x.params.allowSwipeToNext = !1, !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
            }, x.lockSwipeToPrev = function () {
                x.params.allowSwipeToPrev = !1, !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
            }, x.lockSwipes = function () {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor()
            }, x.unlockSwipeToNext = function () {
                x.params.allowSwipeToNext = !0, !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
            }, x.unlockSwipeToPrev = function () {
                x.params.allowSwipeToPrev = !0, !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
            }, x.unlockSwipes = function () {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor()
            }, x.setGrabCursor = function (e) {
                x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab"
            }, x.unsetGrabCursor = function () {
                x.container[0].style.cursor = ""
            }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function (e, t, i, n, s, a) {
                function o() {
                    a && a()
                }

                var r;
                e.complete && s ? o() : t ? (r = new window.Image, r.onload = o, r.onerror = o, n && (r.sizes = n), i && (r.srcset = i), t && (r.src = t)) : o()
            }, x.preloadImages = function () {
                function e() {
                    void 0 !== x && null !== x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                }

                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++) x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
            }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function () {
                return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void o())
            }, x.stopAutoplay = function (e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
            }, x.pauseAutoplay = function (e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, o()) : x.wrapper.transitionEnd(function () {
                    x && (x.autoplayPaused = !1, x.autoplaying ? o() : x.stopAutoplay())
                }))
            }, x.minTranslate = function () {
                return -x.snapGrid[0]
            }, x.maxTranslate = function () {
                return -x.snapGrid[x.snapGrid.length - 1]
            }, x.updateAutoHeight = function () {
                var e = [], t = 0;
                if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1) for (s = 0; s < Math.ceil(x.params.slidesPerView); s++) {
                    var i = x.activeIndex + s;
                    if (i > x.slides.length) break;
                    e.push(x.slides.eq(i)[0])
                } else e.push(x.slides.eq(x.activeIndex)[0]);
                for (s = 0; s < e.length; s++) if (void 0 !== e[s]) {
                    var n = e[s].offsetHeight;
                    t = n > t ? n : t
                }
                t && x.wrapper.css("height", t + "px")
            }, x.updateContainerSize = function () {
                var e, t;
                e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height)
            }, x.updateSlidesSize = function () {
                x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween, i = -x.params.slidesOffsetBefore, n = 0, s = 0;
                if (void 0 !== x.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), x.virtualSize = -t, x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({marginRight: "", marginBottom: ""});
                    var o;
                    x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var r, l = x.params.slidesPerColumn, c = o / l,
                        d = c - (x.params.slidesPerColumn * c - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        r = 0;
                        var u = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var h, p, f;
                            "column" === x.params.slidesPerColumnFill ? (p = Math.floor(e / l), f = e - p * l, (p > d || p === d && f === l - 1) && ++f >= l && (f = 0, p++), h = p + f * o / l, u.css({
                                "-webkit-box-ordinal-group": h,
                                "-moz-box-ordinal-group": h,
                                "-ms-flex-order": h,
                                "-webkit-order": h,
                                order: h
                            })) : (f = Math.floor(e / c), p = e - f * c), u.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== f && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", f)
                        }
                        "none" !== u.css("display") && ("auto" === x.params.slidesPerView ? (r = x.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), x.params.roundLengths && (r = a(r))) : (r = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (r = a(r)), x.isHorizontal() ? x.slides[e].style.width = r + "px" : x.slides[e].style.height = r + "px"), x.slides[e].swiperSlideSize = r, x.slidesSizesGrid.push(r), x.params.centeredSlides ? (i = i + r / 2 + n / 2 + t, 0 === e && (i = i - x.size / 2 - t), Math.abs(i) < .001 && (i = 0), s % x.params.slidesPerGroup == 0 && x.snapGrid.push(i), x.slidesGrid.push(i)) : (s % x.params.slidesPerGroup == 0 && x.snapGrid.push(i), x.slidesGrid.push(i), i = i + r + t), x.virtualSize += r + t, n = r, s++)
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var m;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}) : x.wrapper.css({height: x.virtualSize + x.params.spaceBetween + "px"})), x.params.slidesPerColumn > 1 && (x.virtualSize = (r + x.params.spaceBetween) * o, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}) : x.wrapper.css({height: x.virtualSize + x.params.spaceBetween + "px"}), x.params.centeredSlides)) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                        x.snapGrid = m
                    }
                    if (!x.params.centeredSlides) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                        x.snapGrid = m, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({marginLeft: t + "px"}) : x.slides.css({marginRight: t + "px"}) : x.slides.css({marginBottom: t + "px"})), x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            }, x.updateSlidesOffset = function () {
                for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
            }, x.updateSlidesProgress = function (e) {
                if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);
                    for (var i = 0; i < x.slides.length; i++) {
                        var n = x.slides[i],
                            s = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var a = -(t - n.swiperSlideOffset), o = a + x.slidesSizesGrid[i];
                            (a >= 0 && a < x.size || o > 0 && o <= x.size || a <= 0 && o >= x.size) && x.slides.eq(i).addClass(x.params.slideVisibleClass)
                        }
                        n.progress = x.rtl ? -s : s
                    }
                }
            }, x.updateProgress = function (e) {
                void 0 === e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate(), i = x.isBeginning, n = x.isEnd;
                0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !i && x.emit("onReachBeginning", x), x.isEnd && !n && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress)
            }, x.updateActiveIndex = function () {
                var e, t, i, n = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++) void 0 !== x.slidesGrid[t + 1] ? n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] && (e = t + 1) : n >= x.slidesGrid[t] && (e = t);
                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), i = Math.floor(e / x.params.slidesPerGroup), i >= x.snapGrid.length && (i = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = i, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex())
            }, x.updateRealIndex = function () {
                x.realIndex = x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex
            }, x.updateClasses = function () {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                var e = x.slides.eq(x.activeIndex);
                e.addClass(x.params.slideActiveClass), n.loop && (e.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                var i = e.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === i.length && (i = x.slides.eq(0), i.addClass(x.params.slideNextClass));
                var s = e.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === s.length && (s = x.slides.eq(-1), s.addClass(x.params.slidePrevClass)), n.loop && (i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), s.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
                    var a,
                        o = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? (a = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), a > x.slides.length - 1 - 2 * x.loopedSlides && (a -= x.slides.length - 2 * x.loopedSlides), a > o - 1 && (a -= o), a < 0 && "bullets" !== x.params.paginationType && (a = o + a)) : a = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function () {
                            t(this).index() === a && t(this).addClass(x.params.bulletActiveClass)
                        }) : x.bullets.eq(a).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(a + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(o)), "progress" === x.params.paginationType) {
                        var r = (a + 1) / o, l = r, c = 1;
                        x.isHorizontal() || (c = r, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, a + 1, o)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            }, x.updatePagination = function () {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, i = 0; i < t; i++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, i, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            }, x.update = function (e) {
                function t() {
                    x.rtl, x.translate, n = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(n), x.updateActiveIndex(), x.updateClasses()
                }

                if (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e) {
                    var i, n;
                    x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (i = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()
                } else x.params.autoHeight && x.updateAutoHeight()
            }, x.onResize = function (e) {
                x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev, i = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                var n = !1;
                if (x.params.freeMode) {
                    var s = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(s), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight()
                } else x.updateClasses(), n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !n && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, x.params.allowSwipeToNext = i
            }, x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function (e) {
                var t = e ? "off" : "on", i = e ? "removeEventListener" : "addEventListener",
                    s = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                    a = x.support.touch ? s : document, o = !!x.params.nested;
                if (x.browser.ie) s[i](x.touchEvents.start, x.onTouchStart, !1), a[i](x.touchEvents.move, x.onTouchMove, o), a[i](x.touchEvents.end, x.onTouchEnd, !1); else {
                    if (x.support.touch) {
                        var r = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s[i](x.touchEvents.start, x.onTouchStart, r), s[i](x.touchEvents.move, x.onTouchMove, o), s[i](x.touchEvents.end, x.onTouchEnd, r)
                    }
                    (n.simulateTouch && !x.device.ios && !x.device.android || n.simulateTouch && !x.support.touch && x.device.ios) && (s[i]("mousedown", x.onTouchStart, !1), document[i]("mousemove", x.onTouchMove, o), document[i]("mouseup", x.onTouchEnd, !1))
                }
                window[i]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && s[i]("click", x.preventClicks, !0)
            }, x.attachEvents = function () {
                x.initEvents()
            }, x.detachEvents = function () {
                x.initEvents(!0)
            }, x.allowClick = !0, x.preventClicks = function (e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, x.onClickNext = function (e) {
                e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext()
            }, x.onClickPrev = function (e) {
                e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev()
            }, x.onClickIndex = function (e) {
                e.preventDefault();
                var i = t(this).index() * x.params.slidesPerGroup;
                x.params.loop && (i += x.loopedSlides), x.slideTo(i)
            }, x.updateClickedSlide = function (e) {
                var i = r(e, "." + x.params.slideClass), n = !1;
                if (i) for (var s = 0; s < x.slides.length; s++) x.slides[s] === i && (n = !0);
                if (!i || !n) return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                if (x.clickedSlide = i, x.clickedIndex = t(i).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var a, o = x.clickedIndex;
                    if (x.params.loop) {
                        if (x.animating) return;
                        a = t(x.clickedSlide).attr("data-swiper-slide-index"), x.params.centeredSlides ? o < x.loopedSlides - x.params.slidesPerView / 2 || o > x.slides.length - x.loopedSlides + x.params.slidesPerView / 2 ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o) : o > x.slides.length - x.params.slidesPerView ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o)
                    } else x.slideTo(o)
                }
            };
            var _, T, k, S, P, z, M, E, O, A, D = "input, select, textarea, button, video", L = Date.now(), F = [];
            x.animating = !1, x.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
            var R, N;
            x.onTouchStart = function (e) {
                if (e.originalEvent && (e = e.originalEvent), (R = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
                    if (x.params.noSwiping && r(e, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                    if (!x.params.swipeHandler || r(e, x.params.swipeHandler)) {
                        var i = x.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            n = x.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && i <= x.params.iOSEdgeSwipeThreshold)) {
                            if (_ = !0, T = !1, k = !0, P = void 0, N = void 0, x.touches.startX = i, x.touches.startY = n, S = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (E = !1), "touchstart" !== e.type) {
                                var s = !0;
                                t(e.target).is(D) && (s = !1), document.activeElement && t(document.activeElement).is(D) && document.activeElement.blur(), s && e.preventDefault()
                            }
                            x.emit("onTouchStart", x, e)
                        }
                    }
                }
            }, x.onTouchMove = function (e) {
                if (e.originalEvent && (e = e.originalEvent), !R || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return x.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(x.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (x.params.onlyExternal) return x.allowClick = !1, void(_ && (x.touches.startX = x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.startY = x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, S = Date.now()));
                    if (R && x.params.touchReleaseOnEdges && !x.params.loop) if (x.isHorizontal()) {
                        if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return
                    } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                    if (R && document.activeElement && e.target === document.activeElement && t(e.target).is(D)) return T = !0, void(x.allowClick = !1);
                    if (k && x.emit("onTouchMove", x, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === P) {
                            var i;
                            x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX !== x.touches.startX ? P = !1 : (i = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, P = x.isHorizontal() ? i > x.params.touchAngle : 90 - i > x.params.touchAngle)
                        }
                        if (P && x.emit("onTouchMoveOpposite", x, e), void 0 === N && x.browser.ieTouch && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (N = !0)), _) {
                            if (P) return void(_ = !1);
                            if (N || !x.browser.ieTouch) {
                                x.allowClick = !1, x.emit("onSliderMove", x, e), e.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && e.stopPropagation(), T || (n.loop && x.fixLoop(), M = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), A = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), T = !0;
                                var s = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                s *= x.params.touchRatio, x.rtl && (s = -s), x.swipeDirection = s > 0 ? "prev" : "next", z = s + M;
                                var a = !0;
                                if (s > 0 && z > x.minTranslate() ? (a = !1, x.params.resistance && (z = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + M + s, x.params.resistanceRatio))) : s < 0 && z < x.maxTranslate() && (a = !1, x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - M - s, x.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && z < M && (z = M), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && z > M && (z = M), x.params.threshold > 0) {
                                    if (!(Math.abs(s) > x.params.threshold || E)) return void(z = M);
                                    if (!E) return E = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, z = M, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                }
                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === F.length && F.push({
                                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                    time: S
                                }), F.push({
                                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), x.updateProgress(z), x.setWrapperTranslate(z))
                            }
                        }
                    }
                }
            }, x.onTouchEnd = function (e) {
                if (e.originalEvent && (e = e.originalEvent), k && x.emit("onTouchEnd", x, e), k = !1, _) {
                    x.params.grabCursor && T && _ && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                    var i = Date.now(), n = i - S;
                    if (x.allowClick && (x.updateClickedSlide(e), x.emit("onTap", x, e), n < 300 && i - L > 300 && (O && clearTimeout(O), O = setTimeout(function () {
                            x && (x.params.paginationHide && x.paginationContainer.length > 0 && !t(e.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, e))
                        }, 300)), n < 300 && i - L < 300 && (O && clearTimeout(O), x.emit("onDoubleTap", x, e))), L = Date.now(), setTimeout(function () {
                            x && (x.allowClick = !0)
                        }, 0), !_ || !T || !x.swipeDirection || 0 === x.touches.diff || z === M) return void(_ = T = !1);
                    _ = T = !1;
                    var s;
                    if (s = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -z, x.params.freeMode) {
                        if (s < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                        if (s > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                        if (x.params.freeModeMomentum) {
                            if (F.length > 1) {
                                var a = F.pop(), o = F.pop(), r = a.position - o.position, l = a.time - o.time;
                                x.velocity = r / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0)
                            } else x.velocity = 0;
                            x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, F.length = 0;
                            var c = 1e3 * x.params.freeModeMomentumRatio, d = x.velocity * c, u = x.translate + d;
                            x.rtl && (u = -u);
                            var h, p = !1, f = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                            if (u < x.maxTranslate()) x.params.freeModeMomentumBounce ? (u + x.maxTranslate() < -f && (u = x.maxTranslate() - f), h = x.maxTranslate(), p = !0, A = !0) : u = x.maxTranslate(); else if (u > x.minTranslate()) x.params.freeModeMomentumBounce ? (u - x.minTranslate() > f && (u = x.minTranslate() + f), h = x.minTranslate(), p = !0, A = !0) : u = x.minTranslate(); else if (x.params.freeModeSticky) {
                                var m, g = 0;
                                for (g = 0; g < x.snapGrid.length; g += 1) if (x.snapGrid[g] > -u) {
                                    m = g;
                                    break
                                }
                                u = Math.abs(x.snapGrid[m] - u) < Math.abs(x.snapGrid[m - 1] - u) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1], x.rtl || (u = -u)
                            }
                            if (0 !== x.velocity) c = x.rtl ? Math.abs((-u - x.translate) / x.velocity) : Math.abs((u - x.translate) / x.velocity); else if (x.params.freeModeSticky) return void x.slideReset();
                            x.params.freeModeMomentumBounce && p ? (x.updateProgress(h), x.setWrapperTransition(c), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                                x && A && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(h), x.wrapper.transitionEnd(function () {
                                    x && x.onTransitionEnd()
                                }))
                            })) : x.velocity ? (x.updateProgress(u), x.setWrapperTransition(c), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                x && x.onTransitionEnd()
                            }))) : x.updateProgress(u), x.updateActiveIndex()
                        }
                        return void((!x.params.freeModeMomentum || n >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                    }
                    var v, y = 0, w = x.slidesSizesGrid[0];
                    for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? s >= x.slidesGrid[v] && s < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : s >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                    var b = (s - x.slidesGrid[y]) / w;
                    if (n > x.params.longSwipesMs) {
                        if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                    } else {
                        if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(y)
                    }
                }
            }, x._slideTo = function (e, t) {
                return x.slideTo(e, t, !0, !0)
            }, x.slideTo = function (e, t, i, n) {
                void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var s = -x.snapGrid[x.snapIndex];
                if (x.params.autoplay && x.autoplaying && (n || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(s), x.params.normalizeSlideIndex) for (var a = 0; a < x.slidesGrid.length; a++) -Math.floor(100 * s) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                return !(!x.params.allowSwipeToNext && s < x.translate && s < x.minTranslate() || !x.params.allowSwipeToPrev && s > x.translate && s > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -s === x.translate || !x.rtl && s === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(s), 1) : (x.updateClasses(), x.onTransitionStart(i), 0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(s), x.setWrapperTransition(0), x.onTransitionEnd(i)) : (x.setWrapperTranslate(s), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                    x && x.onTransitionEnd(i)
                }))), 0)))
            }, x.onTransitionStart = function (e) {
                void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
            }, x.onTransitionEnd = function (e) {
                x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash()
            }, x.slideNext = function (e, t, i) {
                return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)
            }, x._slideNext = function (e) {
                return x.slideNext(!0, e, !0)
            }, x.slidePrev = function (e, t, i) {
                return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, t, e, i)) : x.slideTo(x.activeIndex - 1, t, e, i)
            }, x._slidePrev = function (e) {
                return x.slidePrev(!0, e, !0)
            }, x.slideReset = function (e, t, i) {
                return x.slideTo(x.activeIndex, t, e)
            }, x.disableTouchControl = function () {
                return x.params.onlyExternal = !0, !0
            }, x.enableTouchControl = function () {
                return x.params.onlyExternal = !1, !0
            }, x.setWrapperTransition = function (e, t) {
                x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e)
            }, x.setWrapperTranslate = function (e, t, i) {
                var n = 0, s = 0, o = 0;
                x.isHorizontal() ? n = x.rtl ? -e : e : s = e, x.params.roundLengths && (n = a(n), s = a(s)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + n + "px, " + s + "px, 0px)") : x.wrapper.transform("translate(" + n + "px, " + s + "px)")), x.translate = x.isHorizontal() ? n : s;
                var r, l = x.maxTranslate() - x.minTranslate();
                r = 0 === l ? 0 : (e - x.minTranslate()) / l, r !== x.progress && x.updateProgress(e), t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, i), x.emit("onSetTranslate", x, x.translate)
            }, x.getTranslate = function (e, t) {
                var i, n, s, a;
                return void 0 === t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (n = s.transform || s.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), a = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), x.rtl && n && (n = -n), n || 0)
            }, x.getWrapperTranslate = function (e) {
                return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e)
            }, x.observers = [], x.initObservers = function () {
                if (x.params.observeParents) for (var e = x.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(x.container[0], {childList: !1}), l(x.wrapper[0], {attributes: !1})
            }, x.disconnectObservers = function () {
                for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                x.observers = []
            }, x.createLoop = function () {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var e = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = e.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > e.length && (x.loopedSlides = e.length);
                var i, n = [], s = [];
                for (e.each(function (i, a) {
                    var o = t(this);
                    i < x.loopedSlides && s.push(a), i < e.length && i >= e.length - x.loopedSlides && n.push(a), o.attr("data-swiper-slide-index", i)
                }), i = 0; i < s.length; i++) x.wrapper.append(t(s[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (i = n.length - 1; i >= 0; i--) x.wrapper.prepend(t(n[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
            }, x.destroyLoop = function () {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index")
            }, x.reLoop = function (e) {
                var t = x.activeIndex - x.loopedSlides;
                x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1)
            }, x.fixLoop = function () {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
            }, x.appendSlide = function (e) {
                if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]); else x.wrapper.append(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0)
            }, x.prependSlide = function (e) {
                x.params.loop && x.destroyLoop();
                var t = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) e[i] && x.wrapper.prepend(e[i]);
                    t = x.activeIndex + e.length
                } else x.wrapper.prepend(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(t, 0, !1)
            }, x.removeSlide = function (e) {
                x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                var t, i = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) t = e[n], x.slides[t] && x.slides.eq(t).remove(), t < i && i--;
                    i = Math.max(i, 0)
                } else t = e, x.slides[t] && x.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(i + x.loopedSlides, 0, !1) : x.slideTo(i, 0, !1)
            }, x.removeAllSlides = function () {
                for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                x.removeSlide(e)
            }, x.effects = {
                fade: {
                    setTranslate: function () {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e), i = t[0].swiperSlideOffset, n = -i;
                            x.params.virtualTranslate || (n -= x.translate);
                            var s = 0;
                            x.isHorizontal() || (s = n, n = 0);
                            var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({opacity: a}).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                        }
                    }, setTransition: function (e) {
                        if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            x.slides.transitionEnd(function () {
                                if (!t && x) {
                                    t = !0, x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) x.wrapper.trigger(e[i])
                                }
                            })
                        }
                    }
                }, flip: {
                    setTranslate: function () {
                        for (var e = 0; e < x.slides.length; e++) {
                            var i = x.slides.eq(e), n = i[0].progress;
                            x.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                            var s = i[0].swiperSlideOffset, a = -180 * n, o = a, r = 0, l = -s, c = 0;
                            if (x.isHorizontal() ? x.rtl && (o = -o) : (c = l, l = 0, r = -o, o = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + x.slides.length, x.params.flip.slideShadows) {
                                var d = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                    u = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), i.append(d)), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(u)), d.length && (d[0].style.opacity = Math.max(-n, 0)), u.length && (u[0].style.opacity = Math.max(n, 0))
                            }
                            i.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + r + "deg) rotateY(" + o + "deg)")
                        }
                    }, setTransition: function (e) {
                        if (x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.virtualTranslate && 0 !== e) {
                            var i = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function () {
                                if (!i && x && t(this).hasClass(x.params.slideActiveClass)) {
                                    i = !0, x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) x.wrapper.trigger(e[n])
                                }
                            })
                        }
                    }
                }, cube: {
                    setTranslate: function () {
                        var e, i = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (e = x.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(e)), e.css({height: x.width + "px"})) : (e = x.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.container.append(e))));
                        for (var n = 0; n < x.slides.length; n++) {
                            var s = x.slides.eq(n), a = 90 * n, o = Math.floor(a / 360);
                            x.rtl && (a = -a, o = Math.floor(-a / 360));
                            var r = Math.max(Math.min(s[0].progress, 1), -1), l = 0, c = 0, d = 0;
                            n % 4 == 0 ? (l = 4 * -o * x.size, d = 0) : (n - 1) % 4 == 0 ? (l = 0, d = 4 * -o * x.size) : (n - 2) % 4 == 0 ? (l = x.size + 4 * o * x.size, d = x.size) : (n - 3) % 4 == 0 && (l = -x.size, d = 3 * x.size + 4 * x.size * o), x.rtl && (l = -l), x.isHorizontal() || (c = l, l = 0);
                            var u = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + d + "px)";
                            if (r <= 1 && r > -1 && (i = 90 * n + 90 * r, x.rtl && (i = 90 * -n - 90 * r)), s.transform(u), x.params.cube.slideShadows) {
                                var h = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                    p = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), s.append(h)), 0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                            }
                        }
                        if (x.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "transform-origin": "50% 50% -" + x.size / 2 + "px"
                            }), x.params.cube.shadow) if (x.isHorizontal()) e.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")"); else {
                            var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                g = x.params.cube.shadowScale, v = x.params.cube.shadowScale / m,
                                y = x.params.cube.shadowOffset;
                            e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                        }
                        var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : i) + "deg) rotateY(" + (x.isHorizontal() ? -i : 0) + "deg)")
                    }, setTransition: function (e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                    }
                }, coverflow: {
                    setTranslate: function () {
                        for (var e = x.translate, i = x.isHorizontal() ? -e + x.width / 2 : -e + x.height / 2, n = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, s = x.params.coverflow.depth, a = 0, o = x.slides.length; a < o; a++) {
                            var r = x.slides.eq(a), l = x.slidesSizesGrid[a], c = r[0].swiperSlideOffset,
                                d = (i - c - l / 2) / l * x.params.coverflow.modifier, u = x.isHorizontal() ? n * d : 0,
                                h = x.isHorizontal() ? 0 : n * d, p = -s * Math.abs(d),
                                f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * d,
                                m = x.isHorizontal() ? x.params.coverflow.stretch * d : 0;
                            Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0);
                            var g = "translate3d(" + m + "px," + f + "px," + p + "px)  rotateX(" + h + "deg) rotateY(" + u + "deg)";
                            if (r.transform(g), r[0].style.zIndex = 1 - Math.abs(Math.round(d)), x.params.coverflow.slideShadows) {
                                var v = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    y = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), r.append(v)), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(y)), v.length && (v[0].style.opacity = d > 0 ? d : 0), y.length && (y[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (x.browser.ie) {
                            x.wrapper[0].style.perspectiveOrigin = i + "px 50%"
                        }
                    }, setTransition: function (e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, x.lazy = {
                initialImageLoaded: !1, loadImageInSlide: function (e, i) {
                    if (void 0 !== e && (void 0 === i && (i = !0), 0 !== x.slides.length)) {
                        var n = x.slides.eq(e),
                            s = n.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                        !n.hasClass(x.params.lazyLoadingClass) || n.hasClass(x.params.lazyStatusLoadedClass) || n.hasClass(x.params.lazyStatusLoadingClass) || (s = s.add(n[0])), 0 !== s.length && s.each(function () {
                            var e = t(this);
                            e.addClass(x.params.lazyStatusLoadingClass);
                            var s = e.attr("data-background"), a = e.attr("data-src"), o = e.attr("data-srcset"),
                                r = e.attr("data-sizes");
                            x.loadImage(e[0], a || s, o, r, !1, function () {
                                if (s ? (e.css("background-image", 'url("' + s + '")'), e.removeAttr("data-background")) : (o && (e.attr("srcset", o), e.removeAttr("data-srcset")), r && (e.attr("sizes", r), e.removeAttr("data-sizes")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), n.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && i) {
                                    var t = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(x.params.slideDuplicateClass)) {
                                        var l = x.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                        x.lazy.loadImageInSlide(l.index(), !1)
                                    } else {
                                        var c = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        x.lazy.loadImageInSlide(c.index(), !1)
                                    }
                                }
                                x.emit("onLazyImageReady", x, n[0], e[0])
                            }), x.emit("onLazyImageLoad", x, n[0], e[0])
                        })
                    }
                }, load: function () {
                    var e, i = x.params.slidesPerView;
                    if ("auto" === i && (i = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
                        x.lazy.loadImageInSlide(t(this).index())
                    }); else if (i > 1) for (e = x.activeIndex; e < x.activeIndex + i; e++) x.slides[e] && x.lazy.loadImageInSlide(e); else x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext) if (i > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                        var n = x.params.lazyLoadingInPrevNextAmount, s = i,
                            a = Math.min(x.activeIndex + s + Math.max(n, s), x.slides.length),
                            o = Math.max(x.activeIndex - Math.max(s, n), 0);
                        for (e = x.activeIndex + i; e < a; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                        for (e = o; e < x.activeIndex; e++) x.slides[e] && x.lazy.loadImageInSlide(e)
                    } else {
                        var r = x.wrapper.children("." + x.params.slideNextClass);
                        r.length > 0 && x.lazy.loadImageInSlide(r.index());
                        var l = x.wrapper.children("." + x.params.slidePrevClass);
                        l.length > 0 && x.lazy.loadImageInSlide(l.index())
                    }
                }, onTransitionStart: function () {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                }, onTransitionEnd: function () {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                }
            }, x.scrollbar = {
                isTouched: !1, setDragPosition: function (e) {
                    var t = x.scrollbar,
                        i = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        n = i - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                        s = -x.minTranslate() * t.moveDivider, a = -x.maxTranslate() * t.moveDivider;
                    n < s ? n = s : n > a && (n = a), n = -n / t.moveDivider, x.updateProgress(n), x.setWrapperTranslate(n, !0)
                }, dragStart: function (e) {
                    var t = x.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x)
                }, dragMove: function (e) {
                    var t = x.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x))
                }, dragEnd: function (e) {
                    var t = x.scrollbar;
                    t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
                        t.track.css("opacity", 0), t.track.transition(400)
                    }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                }, draggableEvents: function () {
                    return !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop
                }(), enableDraggable: function () {
                    var e = x.scrollbar, i = x.support.touch ? e.track : document;
                    t(e.track).on(e.draggableEvents.start, e.dragStart), t(i).on(e.draggableEvents.move, e.dragMove), t(i).on(e.draggableEvents.end, e.dragEnd)
                }, disableDraggable: function () {
                    var e = x.scrollbar, i = x.support.touch ? e.track : document;
                    t(e.track).off(x.draggableEvents.start, e.dragStart), t(i).off(x.draggableEvents.move, e.dragMove), t(i).off(x.draggableEvents.end, e.dragEnd)
                }, set: function () {
                    if (x.params.scrollbar) {
                        var e = x.scrollbar;
                        e.track = t(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && e.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (e.track = x.container.find(x.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = x.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = x.size / x.virtualSize, e.moveDivider = e.divider * (e.trackSize / x.size), e.dragSize = e.trackSize * e.divider, x.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", x.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                }, setTranslate: function () {
                    if (x.params.scrollbar) {
                        var e, t = x.scrollbar, i = (x.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                            t.track[0].style.opacity = 0, t.track.transition(400)
                        }, 1e3))
                    }
                }, setTransition: function (e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                }
            }, x.controller = {
                LinearSpline: function (e, t) {
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var i, n;
                    this.x.length, this.interpolate = function (e) {
                        return e ? (n = s(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                    };
                    var s = function () {
                        var e, t, i;
                        return function (n, s) {
                            for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= s ? t = i : e = i;
                            return e
                        }
                    }()
                }, getInterpolateFunction: function (e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                }, setTranslate: function (e, t) {
                    function n(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), a = -x.controller.spline.interpolate(-e)), a && "container" !== x.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), a = (e - x.minTranslate()) * s + t.minTranslate()), x.params.controlInverse && (a = t.maxTranslate() - a), t.updateProgress(a), t.setWrapperTranslate(a, !1, x), t.updateActiveIndex()
                    }

                    var s, a, o = x.params.control;
                    if (x.isArray(o)) for (var r = 0; r < o.length; r++) o[r] !== t && o[r] instanceof i && n(o[r]); else o instanceof i && t !== o && n(o)
                }, setTransition: function (e, t) {
                    function n(t) {
                        t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                            a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }

                    var s, a = x.params.control;
                    if (x.isArray(a)) for (s = 0; s < a.length; s++) a[s] !== t && a[s] instanceof i && n(a[s]); else a instanceof i && t !== a && n(a)
                }
            }, x.hashnav = {
                onHashCange: function (e, t) {
                    var i = document.location.hash.replace("#", "");
                    i !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + i + '"]').index())
                }, attachEvents: function (e) {
                    var i = e ? "off" : "on";
                    t(window)[i]("hashchange", x.hashnav.onHashCange)
                }, setHash: function () {
                    if (x.hashnav.initialized && x.params.hashnav) if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || ""); else {
                        var e = x.slides.eq(x.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                        document.location.hash = t || ""
                    }
                }, init: function () {
                    if (x.params.hashnav && !x.params.history) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) {
                            for (var t = 0, i = 0, n = x.slides.length; i < n; i++) {
                                var s = x.slides.eq(i);
                                if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(x.params.slideDuplicateClass)) {
                                    var a = s.index();
                                    x.slideTo(a, 0, x.params.runCallbacksOnInit, !0)
                                }
                            }
                            x.params.hashnavWatchState && x.hashnav.attachEvents()
                        }
                    }
                }, destroy: function () {
                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                }
            }, x.history = {
                init: function () {
                    if (x.params.history) {
                        if (!window.history || !window.history.pushState) return x.params.history = !1, void(x.params.hashnav = !0);
                        x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                }, setHistoryPopState: function () {
                    x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                }, getPathValues: function () {
                    var e = window.location.pathname.slice(1).split("/"), t = e.length;
                    return {key: e[t - 2], value: e[t - 1]}
                }, setHistory: function (e, t) {
                    if (x.history.initialized && x.params.history) {
                        var i = x.slides.eq(t), n = this.slugify(i.attr("data-history"));
                        window.location.pathname.includes(e) || (n = e + "/" + n), x.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                    }
                }, slugify: function (e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                }, scrollToSlide: function (e, t, i) {
                    if (t) for (var n = 0, s = x.slides.length; n < s; n++) {
                        var a = x.slides.eq(n), o = this.slugify(a.attr("data-history"));
                        if (o === t && !a.hasClass(x.params.slideDuplicateClass)) {
                            var r = a.index();
                            x.slideTo(r, e, i)
                        }
                    } else x.slideTo(0, e, i)
                }
            }, x.disableKeyboardControl = function () {
                x.params.keyboardControl = !1, t(document).off("keydown", c)
            }, x.enableKeyboardControl = function () {
                x.params.keyboardControl = !0, t(document).on("keydown", c)
            }, x.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : d() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function () {
                if (!x.mousewheel.event) return !1;
                var e = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (e = t(x.params.mousewheelEventsTarged)), e.off(x.mousewheel.event, u), !0
            }, x.enableMousewheelControl = function () {
                if (!x.mousewheel.event) return !1;
                var e = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (e = t(x.params.mousewheelEventsTarged)), e.on(x.mousewheel.event, u), !0
            }, x.parallax = {
                setTranslate: function () {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        p(this, x.progress)
                    }), x.slides.each(function () {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            p(this, Math.min(Math.max(e[0].progress, -1), 1))
                        })
                    })
                }, setTransition: function (e) {
                    void 0 === e && (e = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        var i = t(this), n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), i.transition(n)
                    })
                }
            }, x.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: x.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0},
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                        s = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
                },
                onGestureStart: function (e) {
                    var i = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(e)
                    }
                    return i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = t(this), 0 === i.gesture.slide.length && (i.gesture.slide = x.slides.eq(x.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + x.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), void(i.isScaling = !0)) : void(i.gesture.image = void 0)
                },
                onGestureChange: function (e) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function (e) {
                    var t = x.zoom;
                    !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin), t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function (e, t) {
                    var i = e.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function (e) {
                    var t = x.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0));
                        var i = t.image.width * t.scale, n = t.image.height * t.scale;
                        if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function (e, t) {
                    var i = e.zoom;
                    if (i.gesture.image && 0 !== i.gesture.image.length) {
                        if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                        i.image.isTouched = !1, i.image.isMoved = !1;
                        var n = 300, s = 300, a = i.velocity.x * n, o = i.image.currentX + a, r = i.velocity.y * s,
                            l = i.image.currentY + r;
                        0 !== i.velocity.x && (n = Math.abs((o - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (s = Math.abs((l - i.image.currentY) / i.velocity.y));
                        var c = Math.max(n, s);
                        i.image.currentX = o, i.image.currentY = l;
                        var d = i.image.width * i.scale, u = i.image.height * i.scale;
                        i.image.minX = Math.min(i.gesture.slideWidth / 2 - d / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - u / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function (e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                },
                toggleZoom: function (e, i) {
                    var n = e.zoom;
                    if (n.gesture.slide || (n.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + e.params.zoomContainerClass)), n.gesture.image && 0 !== n.gesture.image.length) {
                        var s, a, o, r, l, c, d, u, h, p, f, m, g, v, y, w, b, I;
                        void 0 === n.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, a = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = n.image.touchesStart.x, a = n.image.touchesStart.y), n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1, n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, i ? (b = n.gesture.slide[0].offsetWidth, I = n.gesture.slide[0].offsetHeight, o = n.gesture.slide.offset().left, r = n.gesture.slide.offset().top, l = o + b / 2 - s, c = r + I / 2 - a, h = n.gesture.image[0].offsetWidth, p = n.gesture.image[0].offsetHeight, f = h * n.scale, m = p * n.scale, g = Math.min(b / 2 - f / 2, 0), v = Math.min(I / 2 - m / 2, 0), y = -g, w = -v, d = l * n.scale, u = c * n.scale, d < g && (d = g), d > y && (d = y), u < v && (u = v), u > w && (u = w)) : (d = 0, u = 0), n.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                    }
                },
                attachEvents: function (e) {
                    var i = e ? "off" : "on";
                    if (x.params.zoom) {
                        var n = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        x.support.gestures ? (x.slides[i]("gesturestart", x.zoom.onGestureStart, n), x.slides[i]("gesturechange", x.zoom.onGestureChange, n), x.slides[i]("gestureend", x.zoom.onGestureEnd, n)) : "touchstart" === x.touchEvents.start && (x.slides[i](x.touchEvents.start, x.zoom.onGestureStart, n), x.slides[i](x.touchEvents.move, x.zoom.onGestureChange, n), x.slides[i](x.touchEvents.end, x.zoom.onGestureEnd, n)), x[i]("touchStart", x.zoom.onTouchStart), x.slides.each(function (e, n) {
                            t(n).find("." + x.params.zoomContainerClass).length > 0 && t(n)[i](x.touchEvents.move, x.zoom.onTouchMove)
                        }), x[i]("touchEnd", x.zoom.onTouchEnd), x[i]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                    }
                },
                init: function () {
                    x.zoom.attachEvents()
                },
                destroy: function () {
                    x.zoom.attachEvents(!0)
                }
            }, x._plugins = [];
            for (var H in x.plugins) {
                var J = x.plugins[H](x, x.params[H]);
                J && x._plugins.push(J)
            }
            return x.callPlugins = function (e) {
                for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.emitterEventListeners = {}, x.emit = function (e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (x.emitterEventListeners[e]) for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.on = function (e, t) {
                return e = f(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(t), x
            }, x.off = function (e, t) {
                var i;
                if (e = f(e), void 0 === t) return x.emitterEventListeners[e] = [], x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (i = 0; i < x.emitterEventListeners[e].length; i++) x.emitterEventListeners[e][i] === t && x.emitterEventListeners[e].splice(i, 1);
                    return x
                }
            }, x.once = function (e, t) {
                e = f(e);
                var i = function () {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, i)
                };
                return x.on(e, i), x
            }, x.a11y = {
                makeFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function (e, t) {
                    return e.attr("role", t), e
                },
                addLabel: function (e, t) {
                    return e.attr("aria-label", t), e
                },
                disable: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (e) {
                    13 === e.keyCode && (t(e.target).is(x.params.nextButton) ? (x.onClickNext(e), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : t(e.target).is(x.params.prevButton) && (x.onClickPrev(e), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), t(e.target).is("." + x.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function () {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), t(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function () {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
                        var e = t(this);
                        x.a11y.makeFocusable(e), x.a11y.addRole(e, "button"), x.a11y.addLabel(e, x.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function () {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                }
            }, x.init = function () {
                x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x)
            }, x.cleanupStyles = function () {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && t(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && t(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            }, x.destroy = function (e, t) {
                x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null)
            }, x.init(), x
        }
    };
    i.prototype = {
        isSafari: function () {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function () {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function () {
            var e = navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                i = e.match(/(iPad).*OS\s([\d_]+)/), n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                s = !i && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {ios: i || s || n, android: t}
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(), flexbox: function () {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++) if (t[i] in e) return !0
            }(), observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(), passiveListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (e) {
                }
                return e
            }(), gestures: function () {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var n = ["jQuery", "Zepto", "Dom7"], s = 0; s < n.length; s++) window[n[s]] && e(window[n[s]]);
    var a;
    a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, a && ("transitionEnd" in a.fn || (a.fn.transitionEnd = function (e) {
        function t(a) {
            if (a.target === this) for (e.call(this, a), i = 0; i < n.length; i++) s.off(n[i], t)
        }

        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s = this;
        if (e) for (i = 0; i < n.length; i++) s.on(n[i], t);
        return this
    }), "transform" in a.fn || (a.fn.transform = function (e) {
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
        }
        return this
    }), "transition" in a.fn || (a.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
        }
        return this
    }), "outerWidth" in a.fn || (a.fn.outerWidth = function (e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = i
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return window.Swiper
}), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    return function (e, t, i, n) {
        var s = {
            features: null, bind: function (e, t, i, n) {
                var s = (n ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var a = 0; a < t.length; a++) t[a] && e[s](t[a], i, !1)
            }, isArray: function (e) {
                return e instanceof Array
            }, createEl: function (e, t) {
                var i = document.createElement(t || "div");
                return e && (i.className = e), i
            }, getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            }, unbind: function (e, t, i) {
                s.bind(e, t, i, !0)
            }, removeClass: function (e, t) {
                var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (e, t) {
                s.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            }, hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, getChildByClass: function (e, t) {
                for (var i = e.firstChild; i;) {
                    if (s.hasClass(i, t)) return i;
                    i = i.nextSibling
                }
            }, arraySearch: function (e, t, i) {
                for (var n = e.length; n--;) if (e[n][i] === t) return n;
                return -1
            }, extend: function (e, t, i) {
                for (var n in t) if (t.hasOwnProperty(n)) {
                    if (i && e.hasOwnProperty(n)) continue;
                    e[n] = t[n]
                }
            }, easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }, inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                }, cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            }, detectFeatures: function () {
                if (s.features) return s.features;
                var e = s.createEl(), t = e.style, i = "", n = {};
                if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                    var a = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        o && o.length > 0 && (o = parseInt(o[1], 10)) >= 1 && 8 > o && (n.isOldIOSPhone = !0)
                    }
                    var r = a.match(/Android\s([0-9\.]*)/), l = r ? r[1] : 0;
                    l = parseFloat(l), l >= 1 && (4.4 > l && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(a)
                }
                for (var c, d, u = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                    i = h[p];
                    for (var f = 0; 3 > f; f++) c = u[f], d = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && d in t && (n[c] = d);
                    i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var m = 0;
                    n.raf = function (e) {
                        var t = (new Date).getTime(), i = Math.max(0, 16 - (t - m)), n = window.setTimeout(function () {
                            e(t + i)
                        }, i);
                        return m = t + i, n
                    }, n.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, s.features = n, n
            }
        };
        s.detectFeatures(), s.features.oldIE && (s.bind = function (e, t, i, n) {
            t = t.split(" ");
            for (var s, a = (n ? "detach" : "attach") + "Event", o = function () {
                i.handleEvent.call(i)
            }, r = 0; r < t.length; r++) if (s = t[r]) if ("object" == typeof i && i.handleEvent) {
                if (n) {
                    if (!i["oldIE" + s]) return !1
                } else i["oldIE" + s] = o;
                e[a]("on" + s, i["oldIE" + s])
            } else e[a]("on" + s, i)
        });
        var a = this, o = 25, r = 3, l = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function (e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        s.extend(l, n);
        var c, d, u, h, p, f, m, g, v, y, w, b, I, x, C, _, T, k, S, P, z, M, E, O, A, D, L, F, R, N, H, J, j, K, Y, B,
            W, q, V, X, U, Q, G, $, Z, ee, te, ie, ne, se, ae, oe, re, le, ce, de, ue = function () {
                return {x: 0, y: 0}
            }, he = ue(), pe = ue(), fe = ue(), me = {}, ge = 0, ve = {}, ye = ue(), we = 0, be = !0, Ie = [], xe = {},
            Ce = !1, $e = function (e, t) {
                s.extend(a, t.publicMethods), Ie.push(e)
            }, _e = function (e) {
                var t = Zt();
                return e > t - 1 ? e - t : 0 > e ? t + e : e
            }, Te = {}, ke = function (e, t) {
                return Te[e] || (Te[e] = []), Te[e].push(t)
            }, Se = function (e) {
                var t = Te[e];
                if (t) {
                    var i = Array.prototype.slice.call(arguments);
                    i.shift();
                    for (var n = 0; n < t.length; n++) t[n].apply(a, i)
                }
            }, Pe = function () {
                return (new Date).getTime()
            }, ze = function (e) {
                le = e, a.bg.style.opacity = e * l.bgOpacity
            }, Me = function (e, t, i, n, s) {
                (!Ce || s && s !== a.currItem) && (n /= s ? s.fitRatio : a.currItem.fitRatio), e[M] = b + t + "px, " + i + "px" + I + " scale(" + n + ")"
            }, Ee = function (e) {
                ne && (e && (y > a.currItem.fitRatio ? Ce || (ui(a.currItem, !1, !0), Ce = !0) : Ce && (ui(a.currItem), Ce = !1)), Me(ne, fe.x, fe.y, y))
            }, Oe = function (e) {
                e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, Ae = function (e, t) {
                t[M] = b + e + "px, 0px" + I
            }, De = function (e, t) {
                if (!l.loop && t) {
                    var i = h + (ye.x * ge - e) / ye.x, n = Math.round(e - yt.x);
                    (0 > i && n > 0 || i >= Zt() - 1 && 0 > n) && (e = yt.x + n * l.mainScrollEndFriction)
                }
                yt.x = e, Ae(e, p)
            }, Le = function (e, t) {
                var i = wt[e] - ve[e];
                return pe[e] + he[e] + i - i * (t / w)
            }, Fe = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Re = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Ne = null, He = function () {
                Ne && (s.unbind(document, "mousemove", He), s.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Se("mouseUsed")), Ne = setTimeout(function () {
                    Ne = null
                }, 100)
            }, Je = function () {
                s.bind(document, "keydown", a), H.transform && s.bind(a.scrollWrap, "click", a), l.mouseUsed || s.bind(document, "mousemove", He), s.bind(window, "resize scroll", a), Se("bindEvents")
            }, je = function () {
                s.unbind(window, "resize", a), s.unbind(window, "scroll", v.scroll), s.unbind(document, "keydown", a), s.unbind(document, "mousemove", He), H.transform && s.unbind(a.scrollWrap, "click", a), q && s.unbind(window, m, a), Se("unbindEvents")
            }, Ke = function (e, t) {
                var i = ri(a.currItem, me, e);
                return t && (ie = i), i
            }, Ye = function (e) {
                return e || (e = a.currItem), e.initialZoomLevel
            }, Be = function (e) {
                return e || (e = a.currItem), e.w > 0 ? l.maxSpreadZoom : 1
            }, We = function (e, t, i, n) {
                return n === a.currItem.initialZoomLevel ? (i[e] = a.currItem.initialPosition[e], !0) : (i[e] = Le(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
            }, qe = function () {
                if (M) {
                    var t = H.perspective && !O;
                    return b = "translate" + (t ? "3d(" : "("), void(I = H.perspective ? ", 0px)" : ")")
                }
                M = "left", s.addClass(e, "pswp--ie"), Ae = function (e, t) {
                    t.left = e + "px"
                }, Oe = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio, i = e.container.style, n = t * e.w, s = t * e.h;
                    i.width = n + "px", i.height = s + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                }, Ee = function () {
                    if (ne) {
                        var e = ne, t = a.currItem, i = t.fitRatio > 1 ? 1 : t.fitRatio, n = i * t.w, s = i * t.h;
                        e.width = n + "px", e.height = s + "px", e.left = fe.x + "px", e.top = fe.y + "px"
                    }
                }
            }, Ve = function (e) {
                var t = "";
                l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
            }, Xe = function (e) {
                e && (U || X || se || B) && (e.preventDefault(), e.stopPropagation())
            }, Ue = function () {
                a.setScrollOffset(0, s.getScrollY())
            }, Qe = {}, Ge = 0, Ze = function (e) {
                Qe[e] && (Qe[e].raf && D(Qe[e].raf), Ge--, delete Qe[e])
            }, et = function (e) {
                Qe[e] && Ze(e), Qe[e] || (Ge++, Qe[e] = {})
            }, tt = function () {
                for (var e in Qe) Qe.hasOwnProperty(e) && Ze(e)
            }, it = function (e, t, i, n, s, a, o) {
                var r, l = Pe();
                et(e);
                var c = function () {
                    if (Qe[e]) {
                        if ((r = Pe() - l) >= n) return Ze(e), a(i), void(o && o());
                        a((i - t) * s(r / n) + t), Qe[e].raf = A(c)
                    }
                };
                c()
            }, nt = {
                shout: Se, listen: ke, viewportSize: me, options: l, isMainScrollAnimating: function () {
                    return se
                }, getZoomLevel: function () {
                    return y
                }, getCurrentIndex: function () {
                    return h
                }, isDragging: function () {
                    return q
                }, isZooming: function () {
                    return Z
                }, setScrollOffset: function (e, t) {
                    ve.x = e, N = ve.y = t, Se("updateScrollOffset", ve)
                }, applyZoomPan: function (e, t, i, n) {
                    fe.x = t, fe.y = i, y = e, Ee(n)
                }, init: function () {
                    if (!c && !d) {
                        var i;
                        a.framework = s, a.template = e, a.bg = s.getChildByClass(e, "pswp__bg"), L = e.className, c = !0, H = s.detectFeatures(), A = H.raf, D = H.caf, M = H.transform, R = H.oldIE, a.scrollWrap = s.getChildByClass(e, "pswp__scroll-wrap"), a.container = s.getChildByClass(a.scrollWrap, "pswp__container"), p = a.container.style, a.itemHolders = _ = [{
                            el: a.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: a.container.children[1], wrap: 0, index: -1}, {
                            el: a.container.children[2],
                            wrap: 0,
                            index: -1
                        }], _[0].el.style.display = _[2].el.style.display = "none", qe(), v = {
                            resize: a.updateSize,
                            scroll: Ue,
                            keydown: Ve,
                            click: Xe
                        };
                        var n = H.isOldIOSPhone || H.isOldAndroid || H.isMobileOpera;
                        for (H.animationName && H.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < Ie.length; i++) a["init" + Ie[i]]();
                        if (t) {
                            (a.ui = new t(a, s)).init()
                        }
                        Se("firstUpdate"), h = h || l.index || 0, (isNaN(h) || 0 > h || h >= Zt()) && (h = 0), a.currItem = Gt(h), (H.isOldIOSPhone || H.isOldAndroid) && (be = !1),
                            e.setAttribute("aria-hidden", "false"), l.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = s.getScrollY() + "px")), void 0 === N && (Se("initialLayout"), N = F = s.getScrollY());
                        var o = "pswp--open ";
                        for (l.mainClass && (o += l.mainClass + " "), l.showHideOpacity && (o += "pswp--animate_opacity "), o += O ? "pswp--touch" : "pswp--notouch", o += H.animationName ? " pswp--css_animation" : "", o += H.svg ? " pswp--svg" : "", s.addClass(e, o), a.updateSize(), f = -1, we = null, i = 0; 3 > i; i++) Ae((i + f) * ye.x, _[i].el.style);
                        R || s.bind(a.scrollWrap, g, a), ke("initialZoomInEnd", function () {
                            a.setContent(_[0], h - 1), a.setContent(_[2], h + 1), _[0].el.style.display = _[2].el.style.display = "block", l.focus && e.focus(), Je()
                        }), a.setContent(_[1], h), a.updateCurrItem(), Se("afterInit"), be || (x = setInterval(function () {
                            Ge || q || Z || y !== a.currItem.initialZoomLevel || a.updateSize()
                        }, 1e3)), s.addClass(e, "pswp--visible")
                    }
                }, close: function () {
                    c && (c = !1, d = !0, Se("close"), je(), ti(a.currItem, null, !0, a.destroy))
                }, destroy: function () {
                    Se("destroy"), Vt && clearTimeout(Vt), e.setAttribute("aria-hidden", "true"), e.className = L, x && clearInterval(x), s.unbind(a.scrollWrap, g, a), s.unbind(window, "scroll", a), $t(), tt(), Te = null
                }, panTo: function (e, t, i) {
                    i || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), fe.x = e, fe.y = t, Ee()
                }, handleEvent: function (e) {
                    e = e || window.event, v[e.type] && v[e.type](e)
                }, goTo: function (e) {
                    e = _e(e);
                    var t = e - h;
                    we = t, h = e, a.currItem = Gt(h), ge -= t, De(ye.x * ge), tt(), se = !1, a.updateCurrItem()
                }, next: function () {
                    a.goTo(h + 1)
                }, prev: function () {
                    a.goTo(h - 1)
                }, updateCurrZoomItem: function (e) {
                    if (e && Se("beforeChange", 0), _[1].el.children.length) {
                        var t = _[1].el.children[0];
                        ne = s.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else ne = null;
                    ie = a.currItem.bounds, w = y = a.currItem.initialZoomLevel, fe.x = ie.center.x, fe.y = ie.center.y, e && Se("afterChange")
                }, invalidateCurrItems: function () {
                    C = !0;
                    for (var e = 0; 3 > e; e++) _[e].item && (_[e].item.needsUpdate = !0)
                }, updateCurrItem: function (e) {
                    if (0 !== we) {
                        var t, i = Math.abs(we);
                        if (!(e && 2 > i)) {
                            a.currItem = Gt(h), Ce = !1, Se("beforeChange", we), i >= 3 && (f += we + (we > 0 ? -3 : 3), i = 3);
                            for (var n = 0; i > n; n++) we > 0 ? (t = _.shift(), _[2] = t, f++, Ae((f + 2) * ye.x, t.el.style), a.setContent(t, h - i + n + 1 + 1)) : (t = _.pop(), _.unshift(t), f--, Ae(f * ye.x, t.el.style), a.setContent(t, h + i - n - 1 - 1));
                            if (ne && 1 === Math.abs(we)) {
                                var s = Gt(T);
                                s.initialZoomLevel !== y && (ri(s, me), ui(s), Oe(s))
                            }
                            we = 0, a.updateCurrZoomItem(), T = h, Se("afterChange")
                        }
                    }
                }, updateSize: function (t) {
                    if (!be && l.modal) {
                        var i = s.getScrollY();
                        if (N !== i && (e.style.top = i + "px", N = i), !t && xe.x === window.innerWidth && xe.y === window.innerHeight) return;
                        xe.x = window.innerWidth, xe.y = window.innerHeight, e.style.height = xe.y + "px"
                    }
                    if (me.x = a.scrollWrap.clientWidth, me.y = a.scrollWrap.clientHeight, Ue(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, De(ye.x * ge), Se("beforeResize"), void 0 !== f) {
                        for (var n, o, r, c = 0; 3 > c; c++) n = _[c], Ae((c + f) * ye.x, n.el.style), r = h + c - 1, l.loop && Zt() > 2 && (r = _e(r)), o = Gt(r), o && (C || o.needsUpdate || !o.bounds) ? (a.cleanSlide(o), a.setContent(n, r), 1 === c && (a.currItem = o, a.updateCurrZoomItem(!0)), o.needsUpdate = !1) : -1 === n.index && r >= 0 && a.setContent(n, r), o && o.container && (ri(o, me), ui(o), Oe(o));
                        C = !1
                    }
                    w = y = a.currItem.initialZoomLevel, ie = a.currItem.bounds, ie && (fe.x = ie.center.x, fe.y = ie.center.y, Ee(!0)), Se("resize")
                }, zoomTo: function (e, t, i, n, a) {
                    t && (w = y, wt.x = Math.abs(t.x) - fe.x, wt.y = Math.abs(t.y) - fe.y, Fe(pe, fe));
                    var o = Ke(e, !1), r = {};
                    We("x", o, r, e), We("y", o, r, e);
                    var l = y, c = {x: fe.x, y: fe.y};
                    Re(r);
                    var d = function (t) {
                        1 === t ? (y = e, fe.x = r.x, fe.y = r.y) : (y = (e - l) * t + l, fe.x = (r.x - c.x) * t + c.x, fe.y = (r.y - c.y) * t + c.y), a && a(t), Ee(1 === t)
                    };
                    i ? it("customZoomTo", 0, 1, i, n || s.easing.sine.inOut, d) : d(1)
                }
            }, st = 30, at = 10, ot = {}, rt = {}, lt = {}, ct = {}, dt = {}, ut = [], ht = {}, pt = [], ft = {}, mt = 0,
            gt = ue(), vt = 0, yt = ue(), wt = ue(), bt = ue(), It = function (e, t) {
                return e.x === t.x && e.y === t.y
            }, xt = function (e, t) {
                return Math.abs(e.x - t.x) < o && Math.abs(e.y - t.y) < o
            }, Ct = function (e, t) {
                return ft.x = Math.abs(e.x - t.x), ft.y = Math.abs(e.y - t.y), Math.sqrt(ft.x * ft.x + ft.y * ft.y)
            }, $t = function () {
                Q && (D(Q), Q = null)
            }, _t = function () {
                q && (Q = A(_t), Jt())
            }, Tt = function () {
                return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel)
            }, kt = function (e, t) {
                return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : kt(e.parentNode, t)))
            }, St = {}, Pt = function (e, t) {
                return St.prevent = !kt(e.target, l.isClickableElement), Se("preventDragEvent", e, t, St), St.prevent
            }, zt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, Mt = function (e, t, i) {
                i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
            }, Et = function (e, t, i) {
                if (e - j > 50) {
                    var n = pt.length > 2 ? pt.shift() : {};
                    n.x = t, n.y = i, pt.push(n), j = e
                }
            }, Ot = function () {
                var e = fe.y - a.currItem.initialPosition.y;
                return 1 - Math.abs(e / (me.y / 2))
            }, At = {}, Dt = {}, Lt = [], Ft = function (e) {
                for (; Lt.length > 0;) Lt.pop();
                return E ? (de = 0, ut.forEach(function (e) {
                    0 === de ? Lt[0] = e : 1 === de && (Lt[1] = e), de++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Lt[0] = zt(e.touches[0], At), e.touches.length > 1 && (Lt[1] = zt(e.touches[1], Dt))) : (At.x = e.pageX, At.y = e.pageY, At.id = "", Lt[0] = At), Lt
            }, Rt = function (e, t) {
                var i, n, s, o, r = 0, c = fe[e] + t[e], d = t[e] > 0, u = yt.x + t.x, h = yt.x - ht.x;
                return i = c > ie.min[e] || c < ie.max[e] ? l.panEndFriction : 1, c = fe[e] + t[e] * i, !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (ne ? "h" !== ae || "x" !== e || X || (d ? (c > ie.min[e] && (i = l.panEndFriction, r = ie.min[e] - c, n = ie.min[e] - pe[e]), (0 >= n || 0 > h) && Zt() > 1 ? (o = u, 0 > h && u > ht.x && (o = ht.x)) : ie.min.x !== ie.max.x && (s = c)) : (c < ie.max[e] && (i = l.panEndFriction, r = c - ie.max[e], n = pe[e] - ie.max[e]), (0 >= n || h > 0) && Zt() > 1 ? (o = u, h > 0 && u < ht.x && (o = ht.x)) : ie.min.x !== ie.max.x && (s = c))) : o = u, "x" !== e) ? void(se || G || y > a.currItem.fitRatio && (fe[e] += t[e] * i)) : (void 0 !== o && (De(o, !0), G = o !== ht.x), ie.min.x !== ie.max.x && (void 0 !== s ? fe.x = s : G || (fe.x += t.x * i)), void 0 !== o)
            }, Nt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (Qt) return void e.preventDefault();
                    if (!W || "mousedown" !== e.type) {
                        if (Pt(e, !0) && e.preventDefault(), Se("pointerDown"), E) {
                            var t = s.arraySearch(ut, e.pointerId, "id");
                            0 > t && (t = ut.length), ut[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                        }
                        var i = Ft(e), n = i.length;
                        $ = null, tt(), q && 1 !== n || (q = oe = !0, s.bind(window, m, a), Y = ce = re = B = G = U = V = X = !1, ae = null, Se("firstTouchStart", i), Fe(pe, fe), he.x = he.y = 0, Fe(ct, i[0]), Fe(dt, ct), ht.x = ye.x * ge, pt = [{
                            x: ct.x,
                            y: ct.y
                        }], j = J = Pe(), Ke(y, !0), $t(), _t()), !Z && n > 1 && !se && !G && (w = y, X = !1, Z = V = !0, he.y = he.x = 0, Fe(pe, fe), Fe(ot, i[0]), Fe(rt, i[1]), Mt(ot, rt, bt), wt.x = Math.abs(bt.x) - fe.x, wt.y = Math.abs(bt.y) - fe.y, ee = te = Ct(ot, rt))
                    }
                }
            }, Ht = function (e) {
                if (e.preventDefault(), E) {
                    var t = s.arraySearch(ut, e.pointerId, "id");
                    if (t > -1) {
                        var i = ut[t];
                        i.x = e.pageX, i.y = e.pageY
                    }
                }
                if (q) {
                    var n = Ft(e);
                    if (ae || U || Z) $ = n; else if (yt.x !== ye.x * ge) ae = "h"; else {
                        var a = Math.abs(n[0].x - ct.x) - Math.abs(n[0].y - ct.y);
                        Math.abs(a) >= 10 && (ae = a > 0 ? "h" : "v", $ = n)
                    }
                }
            }, Jt = function () {
                if ($) {
                    var e = $.length;
                    if (0 !== e) if (Fe(ot, $[0]), lt.x = ot.x - ct.x, lt.y = ot.y - ct.y, Z && e > 1) {
                        if (ct.x = ot.x, ct.y = ot.y, !lt.x && !lt.y && It($[1], rt)) return;
                        Fe(rt, $[1]), X || (X = !0, Se("zoomGestureStarted"));
                        var t = Ct(ot, rt), i = Wt(t);
                        i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ce = !0);
                        var n = 1, s = Ye(), o = Be();
                        if (s > i) if (l.pinchToClose && !ce && w <= a.currItem.initialZoomLevel) {
                            var r = s - i, c = 1 - r / (s / 1.2);
                            ze(c), Se("onPinchClose", c), re = !0
                        } else n = (s - i) / s, n > 1 && (n = 1), i = s - n * (s / 3); else i > o && (n = (i - o) / (6 * s), n > 1 && (n = 1), i = o + n * s);
                        0 > n && (n = 0), ee = t, Mt(ot, rt, gt), he.x += gt.x - bt.x, he.y += gt.y - bt.y, Fe(bt, gt), fe.x = Le("x", i), fe.y = Le("y", i), Y = i > y, y = i, Ee()
                    } else {
                        if (!ae) return;
                        if (oe && (oe = !1, Math.abs(lt.x) >= 10 && (lt.x -= $[0].x - dt.x), Math.abs(lt.y) >= 10 && (lt.y -= $[0].y - dt.y)), ct.x = ot.x, ct.y = ot.y, 0 === lt.x && 0 === lt.y) return;
                        if ("v" === ae && l.closeOnVerticalDrag && !Tt()) {
                            he.y += lt.y, fe.y += lt.y;
                            var d = Ot();
                            return B = !0, Se("onVerticalDrag", d), ze(d), void Ee()
                        }
                        Et(Pe(), ot.x, ot.y), U = !0, ie = a.currItem.bounds;
                        var u = Rt("x", lt);
                        u || (Rt("y", lt), Re(fe), Ee())
                    }
                }
            }, jt = function (e) {
                if (H.isOldAndroid) {
                    if (W && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function () {
                        W = 0
                    }, 600))
                }
                Se("pointerUp"), Pt(e, !1) && e.preventDefault();
                var t;
                if (E) {
                    var i = s.arraySearch(ut, e.pointerId, "id");
                    if (i > -1) if (t = ut.splice(i, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                        var n = {4: "mouse", 2: "touch", 3: "pen"};
                        t.type = n[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                    }
                }
                var o, r = Ft(e), c = r.length;
                if ("mouseup" === e.type && (c = 0), 2 === c) return $ = null, !0;
                1 === c && Fe(dt, r[0]), 0 !== c || ae || se || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), Se("touchRelease", e, t));
                var d = -1;
                if (0 === c && (q = !1, s.unbind(window, m, a), $t(), Z ? d = 0 : -1 !== vt && (d = Pe() - vt)), vt = 1 === c ? Pe() : -1, o = -1 !== d && 150 > d ? "zoom" : "swipe", Z && 2 > c && (Z = !1, 1 === c && (o = "zoomPointerUp"), Se("zoomGestureEnded")), $ = null, U || X || se || B) if (tt(), K || (K = Kt()), K.calculateSwipeSpeed("x"), B) {
                    var u = Ot();
                    if (u < l.verticalDragRange) a.close(); else {
                        var h = fe.y, p = le;
                        it("verticalDrag", 0, 1, 300, s.easing.cubic.out, function (e) {
                            fe.y = (a.currItem.initialPosition.y - h) * e + h, ze((1 - p) * e + p), Ee()
                        }), Se("onVerticalDrag", 1)
                    }
                } else {
                    if ((G || se) && 0 === c) {
                        var f = Bt(o, K);
                        if (f) return;
                        o = "zoomPointerUp"
                    }
                    if (!se) return "swipe" !== o ? void qt() : void(!G && y > a.currItem.fitRatio && Yt(K))
                }
            }, Kt = function () {
                var e, t, i = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (n) {
                        pt.length > 1 ? (e = Pe() - j + 50, t = pt[pt.length - 2][n]) : (e = Pe() - J, t = dt[n]), i.lastFlickOffset[n] = ct[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        i.backAnimStarted[e] || (fe[e] > ie.min[e] ? i.backAnimDestination[e] = ie.min[e] : fe[e] < ie.max[e] && (i.backAnimDestination[e] = ie.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, it("bounceZoomPan" + e, fe[e], i.backAnimDestination[e], t || 300, s.easing.sine.out, function (t) {
                            fe[e] = t, Ee()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, fe[e] += i.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        return Qe.zoomPan && (Qe.zoomPan.raf = A(i.panAnimLoop), i.now = Pe(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ee(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), Ee(), void Ze("zoomPan")) : void 0
                    }
                };
                return i
            }, Yt = function (e) {
                return e.calculateSwipeSpeed("y"), ie = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Pe(), void e.panAnimLoop())
            }, Bt = function (e, t) {
                var i;
                se || (mt = h);
                var n;
                if ("swipe" === e) {
                    var o = ct.x - dt.x, r = t.lastFlickDist.x < 10;
                    o > 30 && (r || t.lastFlickOffset.x > 20) ? n = -1 : -30 > o && (r || t.lastFlickOffset.x < -20) && (n = 1)
                }
                var c;
                n && (h += n, 0 > h ? (h = l.loop ? Zt() - 1 : 0, c = !0) : h >= Zt() && (h = l.loop ? 0 : Zt() - 1, c = !0), (!c || l.loop) && (we += n, ge -= n, i = !0));
                var d, u = ye.x * ge, p = Math.abs(u - yt.x);
                return i || u > yt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, mt === h && (i = !1), se = !0, Se("mainScrollAnimStart"), it("mainScroll", yt.x, u, d, s.easing.cubic.out, De, function () {
                    tt(), se = !1, mt = -1, (i || mt !== h) && a.updateCurrItem(), Se("mainScrollAnimComplete")
                }), i && a.updateCurrItem(!0), i
            }, Wt = function (e) {
                return 1 / te * e * w
            }, qt = function () {
                var e = y, t = Ye(), i = Be();
                t > y ? e = t : y > i && (e = i);
                var n, o = 1, r = le;
                return re && !Y && !ce && t > y ? (a.close(), !0) : (re && (n = function (e) {
                    ze((1 - r) * e + r)
                }), a.zoomTo(e, 0, 200, s.easing.cubic.out, n), !0)
            };
        $e("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, i, n, s) {
                        k = e + t, S = e + i, P = e + n, z = s ? e + s : ""
                    };
                    E = H.pointerEvent, E && H.touch && (H.touch = !1), E ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : H.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e("mouse", "down", "move", "up"), m = S + " " + P + " " + z, g = k, E && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = O, v[k] = Nt, v[S] = Ht, v[P] = jt, z && (v[z] = v[P]), H.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[k], v.mousemove = v[S], v.mouseup = v[P]), O || (l.allowPanToNext = !1)
                }
            }
        });
        var Vt, Xt, Ut, Qt, Gt, Zt, ei, ti = function (t, i, n, o) {
            Vt && clearTimeout(Vt), Qt = !0, Ut = !0;
            var r;
            t.initialLayout ? (r = t.initialLayout, t.initialLayout = null) : r = l.getThumbBoundsFn && l.getThumbBoundsFn(h);
            var c = n ? l.hideAnimationDuration : l.showAnimationDuration, d = function () {
                Ze("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (ze(1), i && (i.style.display = "block"), s.addClass(e, "pswp--animated-in"), Se("initialZoom" + (n ? "OutEnd" : "InEnd"))), o && o(), Qt = !1
            };
            if (!c || !r || void 0 === r.x) return Se("initialZoom" + (n ? "Out" : "In")), y = t.initialZoomLevel, Fe(fe, t.initialPosition), Ee(), e.style.opacity = n ? 0 : 1, ze(1), void(c ? setTimeout(function () {
                d()
            }, c) : d());
            !function () {
                var i = u, o = !a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (y = r.w / t.w, fe.x = r.x, fe.y = r.y - F, a[o ? "template" : "bg"].style.opacity = .001, Ee()), et("initialZoom"), n && !i && s.removeClass(e, "pswp--animated-in"), o && (n ? s[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    s.addClass(e, "pswp--animate_opacity")
                }, 30)), Vt = setTimeout(function () {
                    if (Se("initialZoom" + (n ? "Out" : "In")), n) {
                        var a = r.w / t.w, l = {x: fe.x, y: fe.y}, u = y, h = le, p = function (t) {
                            1 === t ? (y = a, fe.x = r.x, fe.y = r.y - N) : (y = (a - u) * t + u, fe.x = (r.x - l.x) * t + l.x, fe.y = (r.y - N - l.y) * t + l.y), Ee(), o ? e.style.opacity = 1 - t : ze(h - t * h)
                        };
                        i ? it("initialZoom", 0, 1, c, s.easing.cubic.out, p, d) : (p(1), Vt = setTimeout(d, c + 20))
                    } else y = t.initialZoomLevel, Fe(fe, t.initialPosition), Ee(), ze(1), o ? e.style.opacity = 1 : ze(1), Vt = setTimeout(d, c + 20)
                }, n ? 25 : 90)
            }()
        }, ii = {}, ni = [], si = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Xt.length
            }
        }, ai = function () {
            return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, oi = function (e, t, i) {
            var n = e.bounds;
            n.center.x = Math.round((ii.x - t) / 2), n.center.y = Math.round((ii.y - i) / 2) + e.vGap.top, n.max.x = t > ii.x ? Math.round(ii.x - t) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + e.vGap.top : n.center.y, n.min.x = t > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? e.vGap.top : n.center.y
        }, ri = function (e, t, i) {
            if (e.src && !e.loadError) {
                var n = !i;
                if (n && (e.vGap || (e.vGap = {
                        top: 0,
                        bottom: 0
                    }), Se("parseVerticalMargin", e)), ii.x = t.x, ii.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                    var s = ii.x / e.w, a = ii.y / e.h;
                    e.fitRatio = a > s ? s : a;
                    var o = l.scaleMode;
                    "orig" === o ? i = 1 : "fit" === o && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = ai())
                }
                if (!i) return;
                return oi(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = ai(), e.initialPosition = e.bounds.center, e.bounds
        }, li = function (e, t, i, n, s, o) {
            t.loadError || n && (t.imageAppended = !0, ui(t, n, t === a.currItem && Ce), i.appendChild(n), o && setTimeout(function () {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, ci = function (e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = s.createEl("pswp__img", "img"), i = function () {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = i, t.onerror = function () {
                e.loadError = !0, i()
            }, t.src = e.src, t
        }, di = function (e, t) {
            return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
        }, ui = function (e, t, i) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var n = i ? e.w : Math.round(e.w * e.fitRatio), s = i ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = s + "px"), t.style.width = n + "px", t.style.height = s + "px"
            }
        }, hi = function () {
            if (ni.length) {
                for (var e, t = 0; t < ni.length; t++) e = ni[t], e.holder.index === e.index && li(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                ni = []
            }
        };
        $e("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = _e(e);
                    var t = Gt(e);
                    t && (!t.loaded && !t.loading || C) && (Se("gettingData", e, t), t.src && ci(t))
                }, initController: function () {
                    s.extend(l, si, !0), a.items = Xt = i, Gt = a.getItemAt, Zt = l.getNumItemsFn, ei = l.loop, Zt() < 3 && (l.loop = !1), ke("beforeChange", function (e) {
                        var t, i = l.preload, n = null === e || e >= 0, s = Math.min(i[0], Zt()),
                            o = Math.min(i[1], Zt());
                        for (t = 1; (n ? o : s) >= t; t++) a.lazyLoadItem(h + t);
                        for (t = 1; (n ? s : o) >= t; t++) a.lazyLoadItem(h - t)
                    }), ke("initialLayout", function () {
                        a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(h)
                    }), ke("mainScrollAnimComplete", hi), ke("initialZoomInEnd", hi), ke("destroy", function () {
                        for (var e, t = 0; t < Xt.length; t++) e = Xt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        ni = null
                    })
                }, getItemAt: function (e) {
                    return e >= 0 && void 0 !== Xt[e] && Xt[e]
                }, allowProgressiveImg: function () {
                    return l.forceProgressiveLoading || !O || l.mouseUsed || screen.width > 1200
                }, setContent: function (e, t) {
                    l.loop && (t = _e(t));
                    var i = a.getItemAt(e.index);
                    i && (i.container = null);
                    var n, o = a.getItemAt(t);
                    if (!o) return void(e.el.innerHTML = "");
                    Se("gettingData", t, o), e.index = t, e.item = o;
                    var r = o.container = s.createEl("pswp__zoom-wrap");
                    if (!o.src && o.html && (o.html.tagName ? r.appendChild(o.html) : r.innerHTML = o.html), di(o), ri(o, me), !o.src || o.loadError || o.loaded) o.src && !o.loadError && (n = s.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = o.src, ui(o, n), li(t, o, r, n, !0)); else {
                        if (o.loadComplete = function (i) {
                                if (c) {
                                    if (e && e.index === t) {
                                        if (di(i, !0)) return i.loadComplete = i.img = null, ri(i, me), Oe(i), void(e.index === h && a.updateCurrZoomItem());
                                        i.imageAppended ? !Qt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : H.transform && (se || Qt) ? ni.push({
                                            item: i,
                                            baseDiv: r,
                                            img: i.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : li(t, i, r, i.img, se || Qt, !0)
                                    }
                                    i.loadComplete = null, i.img = null, Se("imageLoadComplete", t, i)
                                }
                            }, s.features.transform) {
                            var d = "pswp__img pswp__img--placeholder";
                            d += o.msrc ? "" : " pswp__img--placeholder--blank";
                            var u = s.createEl(d, o.msrc ? "img" : "");
                            o.msrc && (u.src = o.msrc), ui(o, u), r.appendChild(u), o.placeholder = u
                        }
                        o.loading || ci(o), a.allowProgressiveImg() && (!Ut && H.transform ? ni.push({
                            item: o,
                            baseDiv: r,
                            img: o.img,
                            index: t,
                            holder: e
                        }) : li(t, o, r, o.img, !0, !0))
                    }
                    Ut || t !== h ? Oe(o) : (ne = r.style, ti(o, n || o.img)), e.el.innerHTML = "", e.el.appendChild(r)
                }, cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var pi, fi = {}, mi = function (e, t, i) {
            var n = document.createEvent("CustomEvent"),
                s = {origEvent: e, target: e.target, releasePoint: t, pointerType: i || "touch"};
            n.initCustomEvent("pswpTap", !0, !0, s), e.target.dispatchEvent(n)
        };
        $e("Tap", {
            publicMethods: {
                initTap: function () {
                    ke("firstTouchStart", a.onTapStart), ke("touchRelease", a.onTapRelease), ke("destroy", function () {
                        fi = {}, pi = null
                    })
                }, onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(pi), pi = null)
                }, onTapRelease: function (e, t) {
                    if (t && !U && !V && !Ge) {
                        var i = t;
                        if (pi && (clearTimeout(pi), pi = null, xt(i, fi))) return void Se("doubleTap", i);
                        if ("mouse" === t.type) return void mi(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || s.hasClass(e.target, "pswp__single-tap")) return void mi(e, t);
                        Fe(fi, i), pi = setTimeout(function () {
                            mi(e, t), pi = null
                        }, 300)
                    }
                }
            }
        });
        var gi;
        $e("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    R || (O ? ke("mouseUsed", function () {
                        a.setupDesktopZoom()
                    }) : a.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (t) {
                    gi = {};
                    var i = "wheel mousewheel DOMMouseScroll";
                    ke("bindEvents", function () {
                        s.bind(e, i, a.handleMouseWheel)
                    }), ke("unbindEvents", function () {
                        gi && s.unbind(e, i, a.handleMouseWheel)
                    }), a.mouseZoomedIn = !1;
                    var n, o = function () {
                        a.mouseZoomedIn && (s.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > y ? s.addClass(e, "pswp--zoom-allowed") : s.removeClass(e, "pswp--zoom-allowed"), r()
                    }, r = function () {
                        n && (s.removeClass(e, "pswp--dragging"), n = !1)
                    };
                    ke("resize", o), ke("afterChange", o), ke("pointerDown", function () {
                        a.mouseZoomedIn && (n = !0, s.addClass(e, "pswp--dragging"))
                    }), ke("pointerUp", r), t || o()
                }, handleMouseWheel: function (e) {
                    if (y <= a.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Ge || q ? e.preventDefault() : M && Math.abs(e.deltaY) > 2 && (u = !0, a.close())), !0;
                    if (e.stopPropagation(), gi.x = 0, "deltaX" in e) 1 === e.deltaMode ? (gi.x = 18 * e.deltaX, gi.y = 18 * e.deltaY) : (gi.x = e.deltaX, gi.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (gi.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? gi.y = -.16 * e.wheelDeltaY : gi.y = -.16 * e.wheelDelta; else {
                        if (!("detail" in e)) return;
                        gi.y = e.detail
                    }
                    Ke(y, !0);
                    var t = fe.x - gi.x, i = fe.y - gi.y;
                    (l.modal || t <= ie.min.x && t >= ie.max.x && i <= ie.min.y && i >= ie.max.y) && e.preventDefault(), a.panTo(t, i)
                }, toggleDesktopZoom: function (t) {
                    t = t || {x: me.x / 2 + ve.x, y: me.y / 2 + ve.y};
                    var i = l.getDoubleTapZoom(!0, a.currItem), n = y === i;
                    a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, t, 333), s[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var vi, yi, wi, bi, Ii, xi, Ci, $i, _i, Ti, ki, Si, Pi = {history: !0, galleryUID: 1}, zi = function () {
            return ki.hash.substring(1)
        }, Mi = function () {
            vi && clearTimeout(vi), wi && clearTimeout(wi)
        }, Ei = function () {
            var e = zi(), t = {};
            if (e.length < 5) return t;
            var i, n = e.split("&");
            for (i = 0; i < n.length; i++) if (n[i]) {
                var s = n[i].split("=");
                s.length < 2 || (t[s[0]] = s[1])
            }
            if (l.galleryPIDs) {
                var a = t.pid;
                for (t.pid = 0, i = 0; i < Xt.length; i++) if (Xt[i].pid === a) {
                    t.pid = i;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, Oi = function () {
            if (wi && clearTimeout(wi), Ge || q) return void(wi = setTimeout(Oi, 500));
            bi ? clearTimeout(yi) : bi = !0;
            var e = h + 1, t = Gt(h);
            t.hasOwnProperty("pid") && (e = t.pid);
            var i = Ci + "&gid=" + l.galleryUID + "&pid=" + e;
            $i || -1 === ki.hash.indexOf(i) && (Ti = !0);
            var n = ki.href.split("#")[0] + "#" + i;
            Si ? "#" + i !== window.location.hash && history[$i ? "replaceState" : "pushState"]("", document.title, n) : $i ? ki.replace(n) : ki.hash = i, $i = !0, yi = setTimeout(function () {
                bi = !1
            }, 60)
        };
        $e("History", {
            publicMethods: {
                initHistory: function () {
                    if (s.extend(l, Pi, !0), l.history) {
                        ki = window.location, Ti = !1, _i = !1, $i = !1, Ci = zi(), Si = "pushState" in history, Ci.indexOf("gid=") > -1 && (Ci = Ci.split("&gid=")[0], Ci = Ci.split("?gid=")[0]), ke("afterChange", a.updateURL), ke("unbindEvents", function () {
                            s.unbind(window, "hashchange", a.onHashChange)
                        });
                        var e = function () {
                            xi = !0, _i || (Ti ? history.back() : Ci ? ki.hash = Ci : Si ? history.pushState("", document.title, ki.pathname + ki.search) : ki.hash = ""), Mi()
                        };
                        ke("unbindEvents", function () {
                            u && e()
                        }), ke("destroy", function () {
                            xi || e()
                        }), ke("firstUpdate", function () {
                            h = Ei().pid
                        });
                        var t = Ci.indexOf("pid=");
                        t > -1 && (Ci = Ci.substring(0, t), "&" === Ci.slice(-1) && (Ci = Ci.slice(0, -1))), setTimeout(function () {
                            c && s.bind(window, "hashchange", a.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return zi() === Ci ? (_i = !0, void a.close()) : void(bi || (Ii = !0, a.goTo(Ei().pid), Ii = !1))
                }, updateURL: function () {
                    Mi(), Ii || ($i ? vi = setTimeout(Oi, 800) : Oi())
                }
            }
        }), s.extend(a, nt)
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    return function (e, t) {
        var i, n, s, a, o, r, l, c, d, u, h, p, f, m, g, v, y, w, b, I = this, x = !1, C = !0, _ = !0, T = {
            barsSize: {top: 44, bottom: "auto"},
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (e, t) {
                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return e.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, k = function (e) {
            if (v) return !0;
            e = e || window.event, g.timeToIdle && g.mouseUsed && !d && F();
            for (var i, n, s = e.target || e.srcElement, a = s.getAttribute("class") || "", o = 0; o < B.length; o++) i = B[o], i.onTap && a.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
            if (n) {
                e.stopPropagation && e.stopPropagation(), v = !0;
                var r = t.features.isOldAndroid ? 600 : 30;
                y = setTimeout(function () {
                    v = !1
                }, r)
            }
        }, S = function () {
            return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
        }, P = function (e, i, n) {
            t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
        }, z = function () {
            var e = 1 === g.getNumItemsFn();
            e !== m && (P(n, "ui--one-slide", e), m = e)
        }, M = function () {
            P(l, "share-modal--hidden", _)
        }, E = function () {
            return _ = !_, _ ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                _ && M()
            }, 300)) : (M(), setTimeout(function () {
                _ || t.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), _ || A(), !1
        }, O = function (t) {
            t = t || window.event;
            var i = t.target || t.srcElement;
            return e.shout("shareLinkClick", t, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), _ || E(), !1))
        }, A = function () {
            for (var e, t, i, n, s, a = "", o = 0; o < g.shareButtons.length; o++) e = g.shareButtons[o], i = g.getImageURLForShare(e), n = g.getPageURLForShare(e), s = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(s)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (a = g.parseShareButtonOut(e, a));
            l.children[0].innerHTML = a, l.children[0].onclick = O
        }, D = function (e) {
            for (var i = 0; i < g.closeElClasses.length; i++) if (t.hasClass(e, "pswp__" + g.closeElClasses[i])) return !0
        }, L = 0, F = function () {
            clearTimeout(b), L = 0, d && I.setIdle(!1)
        }, R = function (e) {
            e = e || window.event;
            var t = e.relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
                I.setIdle(!0)
            }, g.timeToIdleOutside))
        }, N = function () {
            g.fullscreenEl && !t.features.isOldAndroid && (i || (i = I.getFullscreenAPI()), i ? (t.bind(document, i.eventK, I.updateFullscreen), I.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        }, H = function () {
            g.preloaderEl && (J(!0), u("beforeChange", function () {
                clearTimeout(f), f = setTimeout(function () {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && J(!1) : J(!0)
                }, g.loadingIndicatorDelay)
            }), u("imageLoadComplete", function (t, i) {
                e.currItem === i && J(!0)
            }))
        }, J = function (e) {
            p !== e && (P(h, "preloader--active", !e), p = e)
        }, j = function (e) {
            var i = e.vGap;
            if (S()) {
                var o = g.barsSize;
                if (g.captionEl && "auto" === o.bottom) if (a || (a = t.createEl("pswp__caption pswp__caption--fake"), a.appendChild(t.createEl("pswp__caption__center")), n.insertBefore(a, s), t.addClass(n, "pswp__ui--fit")), g.addCaptionHTMLFn(e, a, !0)) {
                    var r = a.clientHeight;
                    i.bottom = parseInt(r, 10) || 44
                } else i.bottom = o.top; else i.bottom = "auto" === o.bottom ? 0 : o.bottom;
                i.top = o.top
            } else i.top = i.bottom = 0
        }, K = function () {
            g.timeToIdle && u("mouseUsed", function () {
                t.bind(document, "mousemove", F), t.bind(document, "mouseout", R), w = setInterval(function () {
                    2 === ++L && I.setIdle(!0)
                }, g.timeToIdle / 2)
            })
        }, Y = function () {
            u("onVerticalDrag", function (e) {
                C && .95 > e ? I.hideControls() : !C && e >= .95 && I.showControls()
            });
            var e;
            u("onPinchClose", function (t) {
                C && .9 > t ? (I.hideControls(), e = !0) : e && !C && t > .9 && I.showControls()
            }), u("zoomGestureEnded", function () {
                (e = !1) && !C && I.showControls()
            })
        }, B = [{
            name: "caption", option: "captionEl", onInit: function (e) {
                s = e
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (e) {
                l = e
            }, onTap: function () {
                E()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (e) {
                r = e
            }, onTap: function () {
                E()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
                o = e
            }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                i.isFullscreen() ? i.exit() : i.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (e) {
                h = e
            }
        }], W = function () {
            var e, i, s, a = function (n) {
                if (n) for (var a = n.length, o = 0; a > o; o++) {
                    e = n[o], i = e.className;
                    for (var r = 0; r < B.length; r++) s = B[r], i.indexOf("pswp__" + s.name) > -1 && (g[s.option] ? (t.removeClass(e, "pswp__element--disabled"), s.onInit && s.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                }
            };
            a(n.children);
            var o = t.getChildByClass(n, "pswp__top-bar");
            o && a(o.children)
        };
        I.init = function () {
            t.extend(e.options, T, !0), g = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), u = e.listen, Y(), u("beforeChange", I.update), u("doubleTap", function (t) {
                var i = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), u("preventDragEvent", function (e, t, i) {
                var n = e.target || e.srcElement;
                n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
            }), u("bindEvents", function () {
                t.bind(n, "pswpTap click", k), t.bind(e.scrollWrap, "pswpTap", I.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", I.onMouseOver)
            }), u("unbindEvents", function () {
                _ || E(), w && clearInterval(w), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", F), t.unbind(n, "pswpTap click", k), t.unbind(e.scrollWrap, "pswpTap", I.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", I.onMouseOver), i && (t.unbind(document, i.eventK, I.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
            }), u("destroy", function () {
                g.captionEl && (a && n.removeChild(a), t.removeClass(s, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), I.setIdle(!1)
            }), g.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), u("initialZoomIn", function () {
                g.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
            }), u("initialZoomOut", function () {
                t.addClass(n, "pswp__ui--hidden")
            }), u("parseVerticalMargin", j), W(), g.shareEl && r && l && (_ = !0), z(), K(), N(), H()
        }, I.setIdle = function (e) {
            d = e, P(n, "ui--idle", e)
        }, I.update = function () {
            C && e.currItem ? (I.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, s), P(s, "caption--empty", !e.currItem.title)), x = !0) : x = !1, _ || E(), z()
        }, I.updateFullscreen = function (n) {
            n && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, I.updateIndexIndicator = function () {
            g.counterEl && (o.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }, I.onGlobalTap = function (i) {
            i = i || window.event;
            var n = i.target || i.srcElement;
            if (!v) if (i.detail && "mouse" === i.detail.pointerType) {
                if (D(n)) return void e.close();
                t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
            } else if (g.tapToToggleControls && (C ? I.hideControls() : I.showControls()), g.tapToClose && (t.hasClass(n, "pswp__img") || D(n))) return void e.close()
        }, I.onMouseOver = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            P(n, "ui--over-close", D(t))
        }, I.hideControls = function () {
            t.addClass(n, "pswp__ui--hidden"), C = !1
        }, I.showControls = function () {
            C = !0, x || I.update(), t.removeClass(n, "pswp__ui--hidden")
        }, I.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, I.getFullscreenAPI = function () {
            var t, i = document.documentElement, n = "fullscreenchange";
            return i.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n
            } : i.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n
            } : i.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n
            } : i.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
                return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return g.closeOnScroll = c, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t()
}(this, function () {
    var e = {
            duration: 1e3,
            delay: 0,
            loop: !1,
            autoplay: !0,
            direction: "normal",
            easing: "easeOutElastic",
            elasticity: 400,
            round: !1,
            begin: void 0,
            update: void 0,
            complete: void 0
        },
        t = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
        i, n = {
            arr: function (e) {
                return Array.isArray(e)
            }, obj: function (e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object")
            }, svg: function (e) {
                return e instanceof SVGElement
            }, dom: function (e) {
                return e.nodeType || n.svg(e)
            }, num: function (e) {
                return !isNaN(parseInt(e))
            }, str: function (e) {
                return "string" == typeof e
            }, fnc: function (e) {
                return "function" == typeof e
            }, und: function (e) {
                return void 0 === e
            }, nul: function (e) {
                return "null" == typeof e
            }, hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            }, rgb: function (e) {
                return /^rgb/.test(e)
            }, hsl: function (e) {
                return /^hsl/.test(e)
            }, col: function (e) {
                return n.hex(e) || n.rgb(e) || n.hsl(e)
            }
        }, s = function () {
            var e = {}, t = {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }, Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                }, Elastic: function (e, t) {
                    if (0 === e || 1 === e) return e;
                    var i = 1 - Math.min(t, 998) / 1e3, n = e / 1 - 1;
                    return -Math.pow(2, 10 * n) * Math.sin(2 * (n - i / (2 * Math.PI) * Math.asin(1)) * Math.PI / i)
                }, Back: function (e) {
                    return e * e * (3 * e - 2)
                }, Bounce: function (e) {
                    for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;) ;
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            };
            return ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, i) {
                t[e] = function (e) {
                    return Math.pow(e, i + 2)
                }
            }), Object.keys(t).forEach(function (i) {
                var n = t[i];
                e["easeIn" + i] = n, e["easeOut" + i] = function (e, t) {
                    return 1 - n(1 - e, t)
                }, e["easeInOut" + i] = function (e, t) {
                    return .5 > e ? n(2 * e, t) / 2 : 1 - n(-2 * e + 2, t) / 2
                }, e["easeOutIn" + i] = function (e, t) {
                    return .5 > e ? (1 - n(1 - 2 * e, t)) / 2 : (n(2 * e - 1, t) + 1) / 2
                }
            }), e.linear = function (e) {
                return e
            }, e
        }(), a = function (e) {
            return n.str(e) ? e : e + ""
        }, o = function (e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }, r = function (e) {
            if (n.col(e)) return !1;
            try {
                return document.querySelectorAll(e)
            } catch (e) {
                return !1
            }
        }, l = function (e) {
            return e.reduce(function (e, t) {
                return e.concat(n.arr(t) ? l(t) : t)
            }, [])
        }, c = function (e) {
            return n.arr(e) ? e : (n.str(e) && (e = r(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
        }, d = function (e, t) {
            return e.some(function (e) {
                return e === t
            })
        }, u = function (e, t) {
            var i = {};
            return e.forEach(function (e) {
                var n = JSON.stringify(t.map(function (t) {
                    return e[t]
                }));
                i[n] = i[n] || [], i[n].push(e)
            }), Object.keys(i).map(function (e) {
                return i[e]
            })
        }, h = function (e) {
            return e.filter(function (e, t, i) {
                return i.indexOf(e) === t
            })
        }, p = function (e) {
            var t = {}, i;
            for (i in e) t[i] = e[i];
            return t
        }, f = function (e, t) {
            for (var i in t) e[i] = n.und(e[i]) ? t[i] : e[i];
            return e
        }, m = function (e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
                return t + t + i + i + n + n
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            e = parseInt(t[1], 16);
            var i = parseInt(t[2], 16), t = parseInt(t[3], 16);
            return "rgb(" + e + "," + i + "," + t + ")"
        }, g = function (e) {
            e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
            var t = parseInt(e[1]) / 360, i = parseInt(e[2]) / 100, n = parseInt(e[3]) / 100;
            if (e = function (e, t, i) {
                    return 0 > i && (i += 1), 1 < i && --i, i < 1 / 6 ? e + 6 * (t - e) * i : .5 > i ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
                }, 0 == i) i = n = t = n; else var s = .5 > n ? n * (1 + i) : n + i - n * i, a = 2 * n - s,
                i = e(a, s, t + 1 / 3), n = e(a, s, t), t = e(a, s, t - 1 / 3);
            return "rgb(" + 255 * i + "," + 255 * n + "," + 255 * t + ")"
        }, v = function (e) {
            return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(e)[2]
        }, y = function (e, t, i) {
            return v(t) ? t : -1 < e.indexOf("translate") ? v(i) ? t + v(i) : t + "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? t + "deg" : t
        }, w = function (e, t) {
            if (t in e.style) return getComputedStyle(e).getPropertyValue(o(t)) || "0"
        }, b = function (e, t) {
            var i = -1 < t.indexOf("scale") ? 1 : 0, n = e.style.transform;
            if (!n) return i;
            for (var s = /(\w+)\((.+?)\)/g, a = [], o = [], r = []; a = s.exec(n);) o.push(a[1]), r.push(a[2]);
            return n = r.filter(function (e, i) {
                return o[i] === t
            }), n.length ? n[0] : i
        }, I = function (e, i) {
            return n.dom(e) && d(t, i) ? "transform" : n.dom(e) && (e.getAttribute(i) || n.svg(e) && e[i]) ? "attribute" : n.dom(e) && "transform" !== i && w(e, i) ? "css" : n.nul(e[i]) || n.und(e[i]) ? void 0 : "object"
        }, x = function (e, t) {
            switch (I(e, t)) {
                case"transform":
                    return b(e, t);
                case"css":
                    return w(e, t);
                case"attribute":
                    return e.getAttribute(t)
            }
            return e[t] || 0
        }, C = function (e, t, i) {
            return n.col(t) ? t = n.rgb(t) ? t : n.hex(t) ? m(t) : n.hsl(t) ? g(t) : void 0 : v(t) ? t : (e = v(v(e.to) ? e.to : e.from), !e && i && (e = v(i)), e ? t + e : t)
        }, _ = function (e) {
            var t = /-?\d*\.?\d+/g;
            return {original: e, numbers: a(e).match(t) ? a(e).match(t).map(Number) : [0], strings: a(e).split(t)}
        }, T = function (e, t, i) {
            return t.reduce(function (t, n, s) {
                return n = n || i[s - 1], t + e[s - 1] + n
            })
        }, k = function (e) {
            return e = e ? l(n.arr(e) ? e.map(c) : c(e)) : [], e.map(function (e, t) {
                return {target: e, id: t}
            })
        }, S = function (e, t, i, n) {
            return "transform" === i ? (i = e + "(" + y(e, t.from, t.to) + ")", t = e + "(" + y(e, t.to) + ")") : (e = "css" === i ? w(n, e) : void 0, i = C(t, t.from, e), t = C(t, t.to, e)), {
                from: _(i),
                to: _(t)
            }
        }, P = function (e, t) {
            var i = [];
            return e.forEach(function (s, a) {
                var o = s.target;
                return t.forEach(function (t) {
                    var r = I(o, t.name);
                    if (r) {
                        var l;
                        l = t.name;
                        var d = t.value, d = c(n.fnc(d) ? d(o, a) : d);
                        l = {
                            from: 1 < d.length ? d[0] : x(o, l),
                            to: 1 < d.length ? d[1] : d[0]
                        }, d = p(t), d.animatables = s, d.type = r, d.from = S(t.name, l, d.type, o).from, d.to = S(t.name, l, d.type, o).to, d.round = n.col(l.from) || d.round ? 1 : 0, d.delay = (n.fnc(d.delay) ? d.delay(o, a, e.length) : d.delay) / Y.speed, d.duration = (n.fnc(d.duration) ? d.duration(o, a, e.length) : d.duration) / Y.speed, i.push(d)
                    }
                })
            }), i
        }, z = function (e, t) {
            var i = P(e, t);
            return u(i, ["name", "from", "to", "delay", "duration"]).map(function (e) {
                var t = p(e[0]);
                return t.animatables = e.map(function (e) {
                    return e.animatables
                }), t.totalDuration = t.delay + t.duration, t
            })
        }, M = function (e, t) {
            e.tweens.forEach(function (i) {
                var n = i.from, s = e.duration - (i.delay + i.duration);
                i.from = i.to, i.to = n, t && (i.delay = s)
            }), e.reversed = !e.reversed
        }, E = function (e) {
            if (e.length) return Math.max.apply(Math, e.map(function (e) {
                return e.totalDuration
            }))
        }, O = function (e) {
            if (e.length) return Math.min.apply(Math, e.map(function (e) {
                return e.delay
            }))
        }, A = function (e) {
            var t = [], i = [];
            return e.tweens.forEach(function (e) {
                "css" !== e.type && "transform" !== e.type || (t.push("css" === e.type ? o(e.name) : "transform"), e.animatables.forEach(function (e) {
                    i.push(e.target)
                }))
            }), {properties: h(t).join(", "), elements: h(i)}
        }, D = function (e) {
            var t = A(e);
            t.elements.forEach(function (e) {
                e.style.willChange = t.properties
            })
        }, L = function (e) {
            A(e).elements.forEach(function (e) {
                e.style.removeProperty("will-change")
            })
        }, F = function (e, t) {
            var i = e.path, n = e.value * t, s = function (s) {
                return s = s || 0, i.getPointAtLength(1 < t ? e.value + s : n + s)
            }, a = s(), o = s(-1), s = s(1);
            switch (e.name) {
                case"translateX":
                    return a.x;
                case"translateY":
                    return a.y;
                case"rotate":
                    return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
            }
        }, R = function (e, t) {
            var i = Math.min(Math.max(t - e.delay, 0), e.duration) / e.duration, n = e.to.numbers.map(function (t, n) {
                var a = e.from.numbers[n], o = s[e.easing](i, e.elasticity), a = e.path ? F(e, o) : a + o * (t - a);
                return a = e.round ? Math.round(a * e.round) / e.round : a
            });
            return T(n, e.to.strings, e.from.strings)
        }, N = function (e, t) {
            var n;
            e.currentTime = t, e.progress = t / e.duration * 100;
            for (var s = 0; s < e.tweens.length; s++) {
                var a = e.tweens[s];
                a.currentValue = R(a, t);
                for (var o = a.currentValue, r = 0; r < a.animatables.length; r++) {
                    var l = a.animatables[r], c = l.id, l = l.target, d = a.name;
                    switch (a.type) {
                        case"css":
                            l.style[d] = o;
                            break;
                        case"attribute":
                            l.setAttribute(d, o);
                            break;
                        case"object":
                            l[d] = o;
                            break;
                        case"transform":
                            n || (n = {}), n[c] || (n[c] = []), n[c].push(o)
                    }
                }
            }
            if (n) for (s in i || (i = (w(document.body, "transform") ? "" : "-webkit-") + "transform"), n) e.animatables[s].target.style[i] = n[s].join(" ")
        }, H = function (t) {
            var i = {};
            i.animatables = k(t.targets), i.settings = f(t, e);
            var s = i.settings, a = [], o;
            for (o in t) if (!e.hasOwnProperty(o) && "targets" !== o) {
                var r = n.obj(t[o]) ? p(t[o]) : {value: t[o]};
                r.name = o, a.push(f(r, s))
            }
            return i.properties = a, i.tweens = z(i.animatables, i.properties), i.duration = E(i.tweens) || t.duration, i.delay = O(i.tweens) || t.delay, i.currentTime = 0, i.progress = 0, i.ended = !1, i
        }, J = [], j = 0, K = function () {
            var e = function () {
                j = requestAnimationFrame(t)
            }, t = function (t) {
                if (J.length) {
                    for (var i = 0; i < J.length; i++) J[i].tick(t);
                    e()
                } else cancelAnimationFrame(j), j = 0
            };
            return e
        }(), Y = function (e) {
            var t = H(e), i = {};
            return t.tick = function (e) {
                t.ended = !1, i.start || (i.start = e), i.current = Math.min(Math.max(i.last + e - i.start, 0), t.duration), N(t, i.current);
                var s = t.settings;
                i.current >= t.delay && (s.begin && s.begin(t), s.begin = void 0, s.update && s.update(t)), i.current >= t.duration && (s.loop ? (i.start = e, "alternate" === s.direction && M(t, !0), n.num(s.loop) && s.loop--) : (t.ended = !0, t.pause(), s.complete && s.complete(t)), i.last = 0)
            }, t.seek = function (e) {
                N(t, e / 100 * t.duration)
            }, t.pause = function () {
                L(t);
                var e = J.indexOf(t);
                -1 < e && J.splice(e, 1)
            }, t.play = function (e) {
                t.pause(), e && (t = f(H(f(e, t.settings)), t)), i.start = 0, i.last = t.ended ? 0 : t.currentTime, e = t.settings, "reverse" === e.direction && M(t), "alternate" !== e.direction || e.loop || (e.loop = 1), D(t), J.push(t), j || K()
            }, t.restart = function () {
                t.reversed && M(t), t.pause(), t.seek(0), t.play()
            }, t.settings.autoplay && t.play(), t
        };
    return Y.version = "1.1.2", Y.speed = 1, Y.list = J, Y.remove = function (e) {
        e = l(n.arr(e) ? e.map(c) : c(e));
        for (var t = J.length - 1; 0 <= t; t--) for (var i = J[t], s = i.tweens, a = s.length - 1; 0 <= a; a--) for (var o = s[a].animatables, r = o.length - 1; 0 <= r; r--) d(e, o[r].target) && (o.splice(r, 1), o.length || s.splice(a, 1), s.length || i.pause())
    }, Y.easings = s, Y.getValue = x, Y.path = function (e) {
        return e = n.str(e) ? r(e)[0] : e, {path: e, value: e.getTotalLength()}
    }, Y.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, Y
}), function (e, t, i, n) {
    function s(t, i) {
        this.settings = null, this.options = e.extend({}, s.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, e.each(["onResize", "onThrottledResize"], e.proxy(function (t, i) {
            this._handlers[i] = e.proxy(this[i], this)
        }, this)), e.each(s.Plugins, e.proxy(function (e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(s.Workers, e.proxy(function (t, i) {
            this._pipe.push({filter: i.filter, run: e.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {Default: "default", Inner: "inner", Outer: "outer"}, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                s = {width: "auto", "margin-left": n ? t : "", "margin-right": n ? "" : t};
            !i && this.$stage.children().css(s), e.css = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, s = !this.settings.autoWidth, a = [];
            for (e.items = {
                merge: !1,
                width: t
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, a[n] = s ? t * i : this._items[n].width();
            this._widths = a
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = [], i = this._items, n = this.settings, s = Math.max(2 * n.items, 4),
                a = 2 * Math.ceil(i.length / 2), o = n.loop && i.length ? n.rewind ? s : Math.max(s, a) : 0, r = "",
                l = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), r += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l;
            this._clones = t, e(r).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, s = 0, a = []; ++i < t;) n = a[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, a.push(n + s * e);
            this._coordinates = a
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var e = this.settings.stagePadding, t = this._coordinates, i = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                "padding-left": e || "",
                "padding-right": e || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && e.items.merge) for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css); else i && (e.css.width = e.items.width, n.css(e.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var e, t, i, n, s = this.settings.rtl ? 1 : -1, a = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + a, r = o + this.width() * s, l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + a * s, (this.op(e, "<=", o) && this.op(e, ">", r) || this.op(t, "<", o) && this.op(t, ">", r)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], s.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, s;
            t = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), t.length && s <= 0 && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.setup = function () {
        var t = this.viewport(), i = this.options.responsive, n = -1, s = null;
        i ? (e.each(i, function (e) {
            e <= t && e > n && (n = Number(e))
        }), s = e.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (t) {
        var i = this.trigger("prepare", {content: t});
        return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {content: i.data}), i.data
    }, s.prototype.update = function () {
        for (var t = 0, i = this._pipe.length, n = e.proxy(function (e) {
            return this[e]
        }, this._invalidated), s = {}; t < i;) (this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(s), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function (e) {
        switch (e = e || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function () {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (t) {
        var n = null;
        3 !== t.which && (e.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function (t) {
            var n = this.difference(this._drag.pointer, this.pointer(t));
            e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function (e) {
        var t = null, i = null, n = null, s = this.difference(this._drag.pointer, this.pointer(e)),
            a = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, a.x = ((a.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, a.x = Math.max(Math.min(a.x, t + n), i + n)), this._drag.stage.current = a, this.animate(a.x))
    }, s.prototype.onDragEnd = function (t) {
        var n = this.difference(this._drag.pointer, this.pointer(t)), s = this._drag.stage.current,
            a = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? a : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = a, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (t, i) {
        var n = -1, s = 30, a = this.width(), o = this.coordinates();
        return this.settings.freeDrag || e.each(o, e.proxy(function (e, r) {
            return "left" === i && t > r - s && t < r + s ? n = e : "right" === i && t > r - a - s && t < r - a + s ? n = e + 1 : this.op(t, "<", r) && this.op(t, ">", o[e + 1] || r - a) && (n = "left" === i ? e + 1 : e), -1 === n
        }, this)), this.settings.loop || (this.op(t, ">", o[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", o[this.maximum()]) && (n = t = this.maximum())), n
    }, s.prototype.animate = function (t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({left: t + "px"}, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: t + "px"})
    }, s.prototype.is = function (e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, s.prototype.current = function (e) {
        if (e === n) return this._current;
        if (0 === this._items.length) return n;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {property: {name: "position", value: e}});
            t.data !== n && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function (t) {
        return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function (e, t) {
            return t
        })
    }, s.prototype.reset = function (e) {
        (e = this.normalize(e)) !== n && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (e, t) {
        var i = this._items.length, s = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || i < 1 ? e = n : (e < 0 || e >= i + s) && (e = ((e - s / 2) % i + i) % i + s / 2), e
    }, s.prototype.relative = function (e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, s.prototype.maximum = function (e) {
        var t, i, n, s = this.settings, a = this._coordinates.length;
        if (s.loop) a = this._clones.length / 2 + this._items.length - 1; else if (s.autoWidth || s.merge) {
            for (t = this._items.length, i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n);) ;
            a = t + 1
        } else a = s.center ? this._items.length - 1 : this._items.length - s.items;
        return e && (a -= this._clones.length / 2), Math.max(a, 0)
    }, s.prototype.minimum = function (e) {
        return e ? 0 : this._clones.length / 2
    }, s.prototype.items = function (e) {
        return e === n ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, s.prototype.mergers = function (e) {
        return e === n ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, s.prototype.clones = function (t) {
        var i = this._clones.length / 2, s = i + this._items.length, a = function (e) {
            return e % 2 == 0 ? s + e / 2 : i - (e + 1) / 2
        };
        return t === n ? e.map(this._clones, function (e, t) {
            return a(t)
        }) : e.map(this._clones, function (e, i) {
            return e === t ? a(i) : null
        })
    }, s.prototype.speed = function (e) {
        return e !== n && (this._speed = e), this._speed
    }, s.prototype.coordinates = function (t) {
        var i, s = 1, a = t - 1;
        return t === n ? e.map(this._coordinates, e.proxy(function (e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, a = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[a] || 0)) / 2 * s) : i = this._coordinates[a] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function (e, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function (e, t) {
        var i = this.current(), n = null, s = e - this.relative(i), a = (s > 0) - (s < 0), o = this._items.length,
            r = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * a * o), e = i + s, (n = ((e - r) % o + o) % o + r) !== e && n - s <= l && n - s > 0 && (i = n - s, e = n, this.reset(i))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(r, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.$element.is(":visible") && this.update()
    }, s.prototype.next = function (e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, s.prototype.prev = function (e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, s.prototype.onTransitionEnd = function (e) {
        if (e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(e.proxy(function (e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (t, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
            content: t,
            position: i
        }), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: i
        })
    }, s.prototype.remove = function (e) {
        (e = this.normalize(e, !0)) !== n && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, s.prototype.preloadAutoWidthImages = function (t) {
        t.each(e.proxy(function (t, i) {
            this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function (e) {
                i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (e, t, i) {
        var n = this.settings.rtl;
        switch (t) {
            case"<":
                return n ? e > i : e < i;
            case">":
                return n ? e < i : e > i;
            case">=":
                return n ? e <= i : e >= i;
            case"<=":
                return n ? e >= i : e <= i
        }
    }, s.prototype.on = function (e, t, i, n) {
        e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
    }, s.prototype.off = function (e, t, i, n) {
        e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
    }, s.prototype.trigger = function (t, i, n, a, o) {
        var r = {item: {count: this._items.length, index: this.current()}},
            l = e.camelCase(e.grep(["on", t, n], function (e) {
                return e
            }).join("-").toLowerCase()),
            c = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({relatedTarget: this}, r, i));
        return this._supress[t] || (e.each(this._plugins, function (e, t) {
            t.onTrigger && t.onTrigger(c)
        }), this.register({
            type: s.Type.Event,
            name: t
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, s.prototype.enter = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t] === n && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, s.prototype.leave = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t]--
        }, this))
    }, s.prototype.register = function (t) {
        if (t.type === s.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var i = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function (e) {
                    return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, e.event.special[t.name].owl = !0
            }
        } else t.type === s.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function (i, n) {
            return e.inArray(i, this._states.tags[t.name]) === n
        }, this)))
    }, s.prototype.suppress = function (t) {
        e.each(t, e.proxy(function (e, t) {
            this._supress[t] = !0
        }, this))
    }, s.prototype.release = function (t) {
        e.each(t, e.proxy(function (e, t) {
            delete this._supress[t]
        }, this))
    }, s.prototype.pointer = function (e) {
        var i = {x: null, y: null};
        return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
    }, s.prototype.isNumeric = function (e) {
        return !isNaN(parseFloat(e))
    }, s.prototype.difference = function (e, t) {
        return {x: e.x - t.x, y: e.y - t.y}
    }, e.fn.owlCarousel = function (t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = e(this), a = n.data("owl.carousel");
            a || (a = new s(this, "object" == typeof t && t), n.data("owl.carousel", a), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, i) {
                a.register({
                    type: s.Type.Event,
                    name: i
                }), a.$element.on(i + ".owl.carousel.core", e.proxy(function (e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([i]), a[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, a))
            })), "string" == typeof t && "_" !== t.charAt(0) && a[t].apply(a, i)
        })
    }, e.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    s.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, s.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function () {
        var e, i;
        t.clearInterval(this._interval);
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, a = i.center && -1 * s || 0, o = (t.property && t.property.value !== n ? t.property.value : this._core.current()) + a, r = this._core.clones().length, l = e.proxy(function (e, t) {
                    this.load(t)
                }, this); a++ < s;) this.load(r / 2 + this._core.relative(o)), r && e.each(this._core.clones(this._core.relative(o)), l), o++
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {lazyLoad: !1}, s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), s = n && n.find(".owl-lazy");
        !s || e.inArray(n.get(0), this._loaded) > -1 || (s.each(e.proxy(function (i, n) {
            var s, a = e(n), o = t.devicePixelRatio > 1 && a.attr("data-src-retina") || a.attr("data-src");
            this._core.trigger("load", {
                element: a,
                url: o
            }, "lazy"), a.is("img") ? a.one("load.owl.lazy", e.proxy(function () {
                a.css("opacity", 1), this._core.trigger("loaded", {element: a, url: o}, "lazy")
            }, this)).attr("src", o) : (s = new Image, s.onload = e.proxy(function () {
                a.css({"background-image": 'url("' + o + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: a,
                    url: o
                }, "lazy")
            }, this), s.src = o)
        }, this)), this._loaded.push(n.get(0)))
    }, s.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this._core = t, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this), "loaded.owl.lazy": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, s.prototype.update = function () {
        var t = this._core._current, i = t + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(t, i), s = [], a = 0;
        e.each(n, function (t, i) {
            s.push(e(i).height())
        }), a = Math.max.apply(null, s), this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this), "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var i = e(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function (e) {
            this.play(e)
        }, this))
    };
    s.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, s.prototype.fetch = function (e, t) {
        var i = function () {
                return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            s = e.attr("data-width") || this._core.settings.videoWidth,
            a = e.attr("data-height") || this._core.settings.videoHeight, o = e.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[o] = {
            type: i,
            id: n,
            width: s,
            height: a
        }, t.attr("data-video", o), this.thumbnail(e, this._videos[o])
    }, s.prototype.thumbnail = function (t, i) {
        var n, s, a, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            r = t.find("img"), l = "src", c = "", d = this._core.settings, u = function (e) {
                s = '<div class="owl-video-play-icon"></div>', n = d.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(n), t.after(s)
            };
        if (t.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), r.length) return u(r.attr(l)), r.remove(), !1;
        "youtube" === i.type ? (a = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(a)) : "vimeo" === i.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                a = e[0].thumbnail_large, u(a)
            }
        }) : "vzaar" === i.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                a = e.framegrab_url, u(a)
            }
        })
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function (t) {
        var i, n = e(t.target), s = n.closest("." + this._core.settings.itemClass),
            a = this._videos[s.attr("data-video")], o = a.width || "100%", r = a.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === a.type ? i = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + a.id + "?autoplay=1&rel=0&v=" + a.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === a.type ? i = '<iframe src="//player.vimeo.com/video/' + a.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === a.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + a.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function () {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function () {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this.core = t, this.core.options = e.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this), "translate.owl.carousel": e.proxy(function (e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {animateOut: !1, animateIn: !1}, s.prototype.swap = function () {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, i = e.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next), a = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(o)), a && s.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(a))
        }
    }, s.prototype.clear = function (t) {
        e(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var s = function (t) {
        this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": e.proxy(function (e, t, i) {
                e.namespace && this.play(t, i)
            }, this), "stop.owl.autoplay": e.proxy(function (e) {
                e.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype.play = function (e, t) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, s.prototype._getNextTimeout = function (n, s) {
        return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
        }, this), n || this._core.settings.autoplayTimeout)
    }, s.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, s.prototype.stop = function () {
        this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, s.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, s.prototype.destroy = function () {
        var e, t;
        this.stop();
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    "use strict";
    var s = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this), "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function () {
        var t, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function (e) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function (e) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function (t) {
            var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
    }, s.prototype.destroy = function () {
        var e, t, i, n;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function () {
        var e, t, i, n = this._core.clones().length / 2, s = n + this._core.items().length, a = this._core.maximum(!0),
            o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], e = n, t = 0, i = 0; e < s; e++) {
            if (t >= r || 0 === t) {
                if (this._pages.push({start: Math.min(a, e - n), end: e - n + r - 1}), Math.min(a, e - n) === a) break;
                t = 0, ++i
            }
            t += this._core.mergers(this._core.relative(e))
        }
    }, s.prototype.draw = function () {
        var t, i = this._core.settings, n = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()), a = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !a && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !a && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function (t) {
        var i = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, s.prototype.current = function () {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy(function (e, i) {
            return e.start <= t && e.end >= t
        }, this)).pop()
    }, s.prototype.getPosition = function (t) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += s.slideBy : i -= s.slideBy), i
    }, s.prototype.next = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, s.prototype.prev = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, s.prototype.to = function (t, i, n) {
        var s;
        !n && this._pages.length ? (s = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    "use strict";
    var s = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = t.content
                }
            }, this), "changed.owl.carousel": e.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        s = e.map(this._hashes, function (e, t) {
                            return e === n ? t : null
                        }).join();
                    if (!s || t.location.hash.slice(1) === s) return;
                    t.location.hash = s
                }
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function (e) {
            var i = t.location.hash.substring(1), s = this._core.$stage.children(),
                a = this._hashes[i] && s.index(this._hashes[i]);
            a !== n && a !== this._core.current() && this._core.to(this._core.relative(a), !1, !0)
        }, this))
    };
    s.Defaults = {URLhashListener: !1}, s.prototype.destroy = function () {
        var i, n;
        e(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    function s(t, i) {
        var s = !1, a = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + r.join(a + " ") + a).split(" "), function (e, t) {
            if (o[t] !== n) return s = !i || t, !1
        }), s
    }

    function a(e) {
        return s(e, !0)
    }

    var o = e("<support>").get(0).style, r = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, c = {
        csstransforms: function () {
            return !!s("transform")
        }, csstransforms3d: function () {
            return !!s("perspective")
        }, csstransitions: function () {
            return !!s("transition")
        }, cssanimations: function () {
            return !!s("animation")
        }
    };
    c.csstransitions() && (e.support.transition = new String(a("transition")), e.support.transition.end = l.transition.end[e.support.transition]), c.cssanimations() && (e.support.animation = new String(a("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c.csstransforms() && (e.support.transform = new String(a("transform")), e.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), function (e) {
    "use strict";

    function t(t, i) {
        this.$target = e(t), this.opts = e.extend({}, l, i, this.$target.data()), void 0 === this.isOpen && this._init()
    }

    var i, n, s, a, o, r, l = {
        loadingNotice: "Loading image",
        errorNotice: "The image could not be loaded",
        errorDuration: 2500,
        linkAttribute: "href",
        preventClicks: !0,
        beforeShow: e.noop,
        beforeHide: e.noop,
        onShow: e.noop,
        onHide: e.noop,
        onMove: e.noop
    };
    t.prototype._init = function () {
        this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = e('<div class="easyzoom-flyout" />'), this.$notice = e('<div class="easyzoom-notice" />'), this.$target.on({
            "mousemove.easyzoom touchmove.easyzoom": e.proxy(this._onMove, this),
            "mouseleave.easyzoom touchend.easyzoom": e.proxy(this._onLeave, this),
            "mouseenter.easyzoom touchstart.easyzoom": e.proxy(this._onEnter, this)
        }), this.opts.preventClicks && this.$target.on("click.easyzoom", function (e) {
            e.preventDefault()
        })
    }, t.prototype.show = function (e, t) {
        var o, r, l, c, d = this;
        if (!1 !== this.opts.beforeShow.call(this)) {
            if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), function () {
                (d.isMouseOver || !t) && d.show(e)
            });
            this.$target.append(this.$flyout), o = this.$target.width(), r = this.$target.height(), l = this.$flyout.width(), c = this.$flyout.height(), i = this.$zoom.width() - l, n = this.$zoom.height() - c, 0 > i && (i = 0), 0 > n && (n = 0), s = i / o, a = n / r, this.isOpen = !0, this.opts.onShow.call(this), e && this._move(e)
        }
    }, t.prototype._onEnter = function (e) {
        var t = e.originalEvent.touches;
        this.isMouseOver = !0, t && 1 != t.length || (e.preventDefault(), this.show(e, !0))
    }, t.prototype._onMove = function (e) {
        this.isOpen && (e.preventDefault(), this._move(e))
    }, t.prototype._onLeave = function () {
        this.isMouseOver = !1, this.isOpen && this.hide()
    }, t.prototype._onLoad = function (e) {
        e.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), e.data.call && e.data())
    }, t.prototype._onError = function () {
        var e = this;
        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function () {
            e.$notice.detach(), e.detachNotice = null
        }, this.opts.errorDuration)
    }, t.prototype._loadImage = function (t, i) {
        var n = new Image;
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = e(n).on("error", e.proxy(this._onError, this)).on("load", i, e.proxy(this._onLoad, this)), n.style.position = "absolute", n.src = t
    }, t.prototype._move = function (e) {
        if (0 === e.type.indexOf("touch")) {
            var t = e.touches || e.originalEvent.touches;
            o = t[0].pageX, r = t[0].pageY
        } else o = e.pageX || o, r = e.pageY || r;
        var l = this.$target.offset(), c = r - l.top, d = o - l.left, u = Math.ceil(c * a), h = Math.ceil(d * s);
        if (0 > h || 0 > u || h > i || u > n) this.hide(); else {
            var p = -1 * u, f = -1 * h;
            this.$zoom.css({top: p, left: f}), this.opts.onMove.call(this, p, f)
        }
    }, t.prototype.hide = function () {
        this.isOpen && !1 !== this.opts.beforeHide.call(this) && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
    }, t.prototype.swap = function (t, i, n) {
        this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
            src: t,
            srcset: e.isArray(n) ? n.join() : n
        }), this.$link.attr(this.opts.linkAttribute, i)
    }, t.prototype.teardown = function () {
        this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
    }, e.fn.easyZoom = function (i) {
        return this.each(function () {
            var n = e.data(this, "easyZoom");
            n ? void 0 === n.isOpen && n._init() : e.data(this, "easyZoom", new t(this, i))
        })
    }, "function" == typeof define && define.amd ? define(function () {
        return t
    }) : "undefined" != typeof module && module.exports && (module.exports = t)
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
        var t;
        return function () {
            if (!t || !t.requirejs) {
                t ? i = t : t = {};
                var e, i, n;
                !function (t) {
                    function s(e, t) {
                        return b.call(e, t)
                    }

                    function a(e, t) {
                        var i, n, s, a, o, r, l, c, d, u, h, p = t && t.split("/"), f = y.map, m = f && f["*"] || {};
                        if (e && "." === e.charAt(0)) if (t) {
                            for (e = e.split("/"), o = e.length - 1, y.nodeIdCompat && x.test(e[o]) && (e[o] = e[o].replace(x, "")), e = p.slice(0, p.length - 1).concat(e), d = 0; d < e.length; d += 1) if ("." === (h = e[d])) e.splice(d, 1), d -= 1; else if (".." === h) {
                                if (1 === d && (".." === e[2] || ".." === e[0])) break;
                                d > 0 && (e.splice(d - 1, 2), d -= 2)
                            }
                            e = e.join("/")
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((p || m) && f) {
                            for (i = e.split("/"), d = i.length; d > 0; d -= 1) {
                                if (n = i.slice(0, d).join("/"), p) for (u = p.length; u > 0; u -= 1) if ((s = f[p.slice(0, u).join("/")]) && (s = s[n])) {
                                    a = s, r = d;
                                    break
                                }
                                if (a) break;
                                !l && m && m[n] && (l = m[n], c = d)
                            }
                            !a && l && (a = l, r = c), a && (i.splice(0, r, a), e = i.join("/"))
                        }
                        return e
                    }

                    function o(e, i) {
                        return function () {
                            var n = I.call(arguments, 0);
                            return "string" != typeof n[0] && 1 === n.length && n.push(null), p.apply(t, n.concat([e, i]))
                        }
                    }

                    function r(e) {
                        return function (t) {
                            return a(t, e)
                        }
                    }

                    function l(e) {
                        return function (t) {
                            g[e] = t
                        }
                    }

                    function c(e) {
                        if (s(v, e)) {
                            var i = v[e];
                            delete v[e], w[e] = !0, h.apply(t, i)
                        }
                        if (!s(g, e) && !s(w, e)) throw new Error("No " + e);
                        return g[e]
                    }

                    function d(e) {
                        var t, i = e ? e.indexOf("!") : -1;
                        return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
                    }

                    function u(e) {
                        return function () {
                            return y && y.config && y.config[e] || {}
                        }
                    }

                    var h, p, f, m, g = {}, v = {}, y = {}, w = {}, b = Object.prototype.hasOwnProperty, I = [].slice,
                        x = /\.js$/;
                    f = function (e, t) {
                        var i, n = d(e), s = n[0];
                        return e = n[1], s && (s = a(s, t), i = c(s)), s ? e = i && i.normalize ? i.normalize(e, r(t)) : a(e, t) : (e = a(e, t), n = d(e), s = n[0], e = n[1], s && (i = c(s))), {
                            f: s ? s + "!" + e : e,
                            n: e,
                            pr: s,
                            p: i
                        }
                    }, m = {
                        require: function (e) {
                            return o(e)
                        }, exports: function (e) {
                            var t = g[e];
                            return void 0 !== t ? t : g[e] = {}
                        }, module: function (e) {
                            return {id: e, uri: "", exports: g[e], config: u(e)}
                        }
                    }, h = function (e, i, n, a) {
                        var r, d, u, h, p, y, b = [], I = typeof n;
                        if (a = a || e, "undefined" === I || "function" === I) {
                            for (i = !i.length && n.length ? ["require", "exports", "module"] : i, p = 0; p < i.length; p += 1) if (h = f(i[p], a), "require" === (d = h.f)) b[p] = m.require(e); else if ("exports" === d) b[p] = m.exports(e), y = !0; else if ("module" === d) r = b[p] = m.module(e); else if (s(g, d) || s(v, d) || s(w, d)) b[p] = c(d); else {
                                if (!h.p) throw new Error(e + " missing " + d);
                                h.p.load(h.n, o(a, !0), l(d), {}), b[p] = g[d]
                            }
                            u = n ? n.apply(g[e], b) : void 0, e && (r && r.exports !== t && r.exports !== g[e] ? g[e] = r.exports : u === t && y || (g[e] = u))
                        } else e && (g[e] = n)
                    }, e = i = p = function (e, i, n, s, a) {
                        if ("string" == typeof e) return m[e] ? m[e](i) : c(f(e, i).f);
                        if (!e.splice) {
                            if (y = e, y.deps && p(y.deps, y.callback), !i) return;
                            i.splice ? (e = i, i = n, n = null) : e = t
                        }
                        return i = i || function () {
                        }, "function" == typeof n && (n = s, s = a), s ? h(t, e, i, n) : setTimeout(function () {
                            h(t, e, i, n)
                        }, 4), p
                    }, p.config = function (e) {
                        return p(e)
                    }, e._defined = g, n = function (e, t, i) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (i = t, t = []), s(g, e) || s(v, e) || (v[e] = [e, t, i])
                    }, n.amd = {jQuery: !0}
                }(), t.requirejs = e, t.require = i, t.define = n
            }
        }(), t.define("almond", function () {
        }), t.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype, i = [];
                for (var n in t) {
                    "function" == typeof t[n] && "constructor" !== n && i.push(n)
                }
                return i
            }

            var i = {};
            i.Extend = function (e, t) {
                function i() {
                    this.constructor = e
                }

                var n = {}.hasOwnProperty;
                for (var s in t) n.call(t, s) && (e[s] = t[s]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            }, i.Decorate = function (e, i) {
                function n() {
                    var t = Array.prototype.unshift, n = i.prototype.constructor.length, s = e.prototype.constructor;
                    n > 0 && (t.call(arguments, e.prototype.constructor), s = i.prototype.constructor), s.apply(this, arguments)
                }

                function s() {
                    this.constructor = n
                }

                var a = t(i), o = t(e);
                i.displayName = e.displayName, n.prototype = new s;
                for (var r = 0; r < o.length; r++) {
                    var l = o[r];
                    n.prototype[l] = e.prototype[l]
                }
                for (var c = (function (e) {
                    var t = function () {
                    };
                    e in n.prototype && (t = n.prototype[e]);
                    var s = i.prototype[e];
                    return function () {
                        return Array.prototype.unshift.call(arguments, t), s.apply(this, arguments)
                    }
                }), d = 0; d < a.length; d++) {
                    var u = a[d];
                    n.prototype[u] = c(u)
                }
                return n
            };
            var n = function () {
                this.listeners = {}
            };
            return n.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, n.prototype.trigger = function (e) {
                var t = Array.prototype.slice, i = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, n.prototype.invoke = function (e, t) {
                for (var i = 0, n = e.length; n > i; i++) e[i].apply(this, t)
            }, i.Observable = n, i.generateChars = function (e) {
                for (var t = "", i = 0; e > i; i++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }, i.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, i._convertData = function (e) {
                for (var t in e) {
                    var i = t.split("-"), n = e;
                    if (1 !== i.length) {
                        for (var s = 0; s < i.length; s++) {
                            var a = i[s];
                            a = a.substring(0, 1).toLowerCase() + a.substring(1), a in n || (n[a] = {}), s == i.length - 1 && (n[a] = e[t]), n = n[a]
                        }
                        delete e[t]
                    }
                }
                return e
            }, i.hasScroll = function (t, i) {
                var n = e(i), s = i.style.overflowX, a = i.style.overflowY;
                return (s !== a || "hidden" !== a && "visible" !== a) && ("scroll" === s || "scroll" === a || (n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth))
            }, i.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e]
                })
            }, i.appendMany = function (t, i) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var n = e();
                    e.map(i, function (e) {
                        n = n.add(e)
                    }), i = n
                }
                t.append(i)
            }, i
        }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function i(e, t, n) {
                this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
            }, i.prototype.clear = function () {
                this.$results.empty()
            }, i.prototype.displayMessage = function (t) {
                var i = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    s = this.options.get("translations").get(t.message);
                n.append(i(s(t.args))), n[0].className += " select2-results__message", this.$results.append(n)
            }, i.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, i.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                e.results = this.sort(e.results);
                for (var i = 0; i < e.results.length; i++) {
                    var n = e.results[i], s = this.option(n);
                    t.push(s)
                }
                this.$results.append(t)
            },
                i.prototype.position = function (e, t) {
                    t.find(".select2-results").append(e)
                }, i.prototype.sort = function (e) {
                return this.options.get("sorter")(e)
            }, i.prototype.highlightFirstItem = function () {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, i.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (i) {
                    var n = e.map(i, function (e) {
                        return e.id.toString()
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var t = e(this), i = e.data(this, "data"), s = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && e.inArray(s, n) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    })
                })
            }, i.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = this.options.get("translations").get("searching"), i = {disabled: !0, loading: !0, text: t(e)},
                    n = this.option(i);
                n.className += " loading-results", this.$results.prepend(n)
            }, i.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, i.prototype.option = function (t) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var n = {role: "treeitem", "aria-selected": "false"};
                t.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == t.id && delete n["aria-selected"], null != t._resultId && (i.id = t._resultId), t.title && (i.title = t.title), t.children && (n.role = "group", n["aria-label"] = t.text, delete n["aria-selected"]);
                for (var s in n) {
                    var a = n[s];
                    i.setAttribute(s, a)
                }
                if (t.children) {
                    var o = e(i), r = document.createElement("strong");
                    r.className = "select2-results__group", e(r), this.template(t, r);
                    for (var l = [], c = 0; c < t.children.length; c++) {
                        var d = t.children[c], u = this.option(d);
                        l.push(u)
                    }
                    var h = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    h.append(l), o.append(r), o.append(h)
                } else this.template(t, i);
                return e.data(i, "data", t), i
            }, i.prototype.bind = function (t, i) {
                var n = this, s = t.id + "-results";
                this.$results.attr("id", s), t.on("results:all", function (e) {
                    n.clear(), n.append(e.data), t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                }), t.on("results:append", function (e) {
                    n.append(e.data), t.isOpen() && n.setClasses()
                }), t.on("query", function (e) {
                    n.hideMessages(), n.showLoading(e)
                }), t.on("select", function () {
                    t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                }), t.on("unselect", function () {
                    t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                }), t.on("open", function () {
                    n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                }), t.on("close", function () {
                    n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function () {
                    var e = n.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function () {
                    var e = n.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {data: t})
                    }
                }), t.on("results:previous", function () {
                    var e = n.getHighlightedResults(), t = n.$results.find("[aria-selected]"), i = t.index(e);
                    if (0 !== i) {
                        var s = i - 1;
                        0 === e.length && (s = 0);
                        var a = t.eq(s);
                        a.trigger("mouseenter");
                        var o = n.$results.offset().top, r = a.offset().top, l = n.$results.scrollTop() + (r - o);
                        0 === s ? n.$results.scrollTop(0) : 0 > r - o && n.$results.scrollTop(l)
                    }
                }), t.on("results:next", function () {
                    var e = n.getHighlightedResults(), t = n.$results.find("[aria-selected]"), i = t.index(e),
                        s = i + 1;
                    if (!(s >= t.length)) {
                        var a = t.eq(s);
                        a.trigger("mouseenter");
                        var o = n.$results.offset().top + n.$results.outerHeight(!1),
                            r = a.offset().top + a.outerHeight(!1), l = n.$results.scrollTop() + r - o;
                        0 === s ? n.$results.scrollTop(0) : r > o && n.$results.scrollTop(l)
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function (e) {
                    n.displayMessage(e)
                }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = n.$results.scrollTop(), i = n.$results.get(0).scrollHeight - t + e.deltaY,
                        s = e.deltaY > 0 && t - e.deltaY <= 0, a = e.deltaY < 0 && i <= n.$results.height();
                    s ? (n.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : a && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                    var i = e(this), s = i.data("data");
                    return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: t,
                        data: s
                    }) : n.trigger("close", {})) : void n.trigger("select", {originalEvent: t, data: s})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                    var i = e(this).data("data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                        data: i,
                        element: e(this)
                    })
                })
            }, i.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, i.prototype.destroy = function () {
                this.$results.remove()
            }, i.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]"), i = t.index(e), n = this.$results.offset().top,
                        s = e.offset().top, a = this.$results.scrollTop() + (s - n), o = s - n;
                    a -= 2 * e.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(a)
                }
            }, i.prototype.template = function (t, i) {
                var n = this.options.get("templateResult"), s = this.options.get("escapeMarkup"), a = n(t, i);
                null == a ? i.style.display = "none" : "string" == typeof a ? i.innerHTML = s(a) : e(i).append(a)
            }, i
        }), t.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, i) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
            }, n.prototype.bind = function (e, t) {
                var n = this, s = (e.id, e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {
                    n.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    n._handleBlur(e)
                }), this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    n.update(e.data)
                }), e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", s), n._attachCloseHandler(e)
                }), e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                }), e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex)
                }), e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1")
                })
            }, n.prototype._handleBlur = function (t) {
                var i = this;
                window.setTimeout(function () {
                    document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                }, 1)
            }, n.prototype._attachCloseHandler = function (t) {
                e(document.body).on("mousedown.select2." + t.id, function (t) {
                    var i = e(t.target), n = i.closest(".select2");
                    e(".select2.select2-container--open").each(function () {
                        var t = e(this);
                        this != n[0] && t.data("element").select2("close")
                    })
                })
            }, n.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id)
            }, n.prototype.position = function (e, t) {
                t.find(".selection").append(e)
            }, n.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, n.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, n
        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, i, n) {
            function s() {
                s.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(s, t), s.prototype.render = function () {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, s.prototype.bind = function (e, t) {
                var i = this;
                s.__super__.bind.apply(this, arguments);
                var n = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function (e) {
                    1 === e.which && i.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), e.on("focus", function (t) {
                    e.isOpen() || i.$selection.focus()
                }), e.on("selection:update", function (e) {
                    i.update(e.data)
                })
            }, s.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, s.prototype.display = function (e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t))
            }, s.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, s.prototype.update = function (e) {
                if (0 === e.length) return void this.clear();
                var t = e[0], i = this.$selection.find(".select2-selection__rendered"), n = this.display(t, i);
                i.empty().append(n), i.prop("title", t.title || t.text)
            }, s
        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, i) {
            function n(e, t) {
                n.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(n, t), n.prototype.render = function () {
                var e = n.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, n.prototype.bind = function (t, i) {
                var s = this;
                n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    s.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                    if (!s.options.get("disabled")) {
                        var i = e(this), n = i.parent(), a = n.data("data");
                        s.trigger("unselect", {originalEvent: t, data: a})
                    }
                })
            }, n.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, n.prototype.display = function (e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t))
            }, n.prototype.selectionContainer = function () {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, n.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var s = e[n], a = this.selectionContainer(), o = this.display(s, a);
                        a.append(o), a.prop("title", s.title || s.text), a.data("data", s), t.push(a)
                    }
                    var r = this.$selection.find(".select2-selection__rendered");
                    i.appendMany(r, t)
                }
            }, n
        }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i)
            }

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var i = this.selectionContainer();
                return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
            }, t.prototype.update = function (e, t) {
                var i = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || i) return e.call(this, t);
                this.clear();
                var n = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(n)
            }, t
        }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (e, t) {
            function i() {
            }

            return i.prototype.bind = function (e, t, i) {
                var n = this;
                e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    n._handleClear(e)
                }), t.on("keypress", function (e) {
                    n._handleKeyboardClear(e, t)
                })
            }, i.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        for (var n = i.data("data"), s = 0; s < n.length; s++) {
                            var a = {data: n[s]};
                            if (this.trigger("unselect", a), a.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, i.prototype._handleKeyboardClear = function (e, i, n) {
                n.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i)
            }, i.prototype.update = function (t, i) {
                if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var n = e('<span class="select2-selection__clear">&times;</span>');
                    n.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(n)
                }
            }, i
        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, i) {
            function n(e, t, i) {
                e.call(this, t, i)
            }

            return n.prototype.render = function (t) {
                var i = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = i, this.$search = i.find("input");
                var n = t.call(this);
                return this._transferTabIndex(), n
            }, n.prototype.bind = function (e, t, n) {
                var s = this;
                e.call(this, t, n), t.on("open", function () {
                    s.$search.trigger("focus")
                }), t.on("close", function () {
                    s.$search.val(""), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus")
                }), t.on("enable", function () {
                    s.$search.prop("disabled", !1), s._transferTabIndex()
                }), t.on("disable", function () {
                    s.$search.prop("disabled", !0)
                }), t.on("focus", function (e) {
                    s.$search.trigger("focus")
                }), t.on("results:focus", function (e) {
                    s.$search.attr("aria-activedescendant", e.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    s.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    s._handleBlur(e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    if (e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which === i.BACKSPACE && "" === s.$search.val()) {
                        var t = s.$searchContainer.prev(".select2-selection__choice");
                        if (t.length > 0) {
                            var n = t.data("data");
                            s.searchRemoveChoice(n), e.preventDefault()
                        }
                    }
                });
                var a = document.documentMode, o = a && 11 >= a;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                    return o ? void s.$selection.off("input.search input.searchcheck") : void s.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (o && "input" === e.type) return void s.$selection.off("input.search input.searchcheck");
                    var t = e.which;
                    t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && s.handleSearch(e)
                })
            }, n.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, n.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, n.prototype.update = function (e, t) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
            }, n.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, n.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
            }, n.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    e = .75 * (this.$search.val().length + 1) + "em"
                }
                this.$search.css("width", e)
            }, n
        }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {
            }

            return t.prototype.bind = function (t, i, n) {
                var s = this,
                    a = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    o = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, i, n), i.on("*", function (t, i) {
                    if (-1 !== e.inArray(t, a)) {
                        i = i || {};
                        var n = e.Event("select2:" + t, {params: i});
                        s.$element.trigger(n), -1 !== e.inArray(t, o) && (i.prevented = n.isDefaultPrevented())
                    }
                })
            }, t
        }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
            function i(e) {
                this.dict = e || {}
            }

            return i.prototype.all = function () {
                return this.dict
            }, i.prototype.get = function (e) {
                return this.dict[e]
            }, i.prototype.extend = function (t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }, i._cache = {}, i.loadPath = function (e) {
                if (!(e in i._cache)) {
                    var n = t(e);
                    i._cache[e] = n
                }
                return new i(i._cache[e])
            }, i
        }), t.define("select2/diacritics", [], function () {
            return {
                "?": "A",
                "A": "A",
                "A": "A",
                "A": "A",
                "A": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "A": "A",
                "A": "A",
                "A": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "A": "A",
                "A": "A",
                "?": "A",
                "A": "A",
                "?": "A",
                "A": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "A": "A",
                "?": "A",
                "?": "A",
                "?": "AA",
                "?": "AE",
                "?": "AE",
                "?": "AE",
                "?": "AO",
                "?": "AU",
                "?": "AV",
                "?": "AV",
                "?": "AY",
                "?": "B",
                "B": "B",
                "?": "B",
                "?": "B",
                "?": "B",
                "?": "B",
                "?": "B",
                "?": "B",
                "?": "C",
                "C": "C",
                "C": "C",
                "C": "C",
                "C": "C",
                "C": "C",
                "C": "C",
                "?": "C",
                "?": "C",
                "?": "C",
                "?": "C",
                "?": "D",
                "D": "D",
                "?": "D",
                "D": "D",
                "?": "D",
                "?": "D",
                "?": "D",
                "?": "D",
                "D": "D",
                "?": "D",
                "?": "D",
                "?": "D",
                "?": "D",
                "?": "DZ",
                "?": "DZ",
                "?": "Dz",
                "?": "Dz",
                "?": "E",
                "E": "E",
                "E": "E",
                "E": "E",
                "E": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "E": "E",
                "?": "E",
                "?": "E",
                "E": "E",
                "E": "E",
                "E": "E",
                "?": "E",
                "E": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "E": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "?": "F",
                "F": "F",
                "?": "F",
                "?": "F",
                "?": "F",
                "?": "G",
                "G": "G",
                "?": "G",
                "G": "G",
                "?": "G",
                "G": "G",
                "G": "G",
                "G": "G",
                "G": "G",
                "G": "G",
                "?": "G",
                "?": "G",
                "?": "G",
                "?": "G",
                "?": "H",
                "H": "H",
                "H": "H",
                "?": "H",
                "?": "H",
                "?": "H",
                "?": "H",
                "?": "H",
                "?": "H",
                "H": "H",
                "?": "H",
                "?": "H",
                "?": "H",
                "?": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "I": "I",
                "?": "I",
                "?": "I",
                "I": "I",
                "?": "I",
                "?": "I",
                "?": "I",
                "I": "I",
                "?": "I",
                "I": "I",
                "?": "J",
                "J": "J",
                "J": "J",
                "?": "J",
                "?": "K",
                "K": "K",
                "?": "K",
                "K": "K",
                "?": "K",
                "K": "K",
                "?": "K",
                "?": "K",
                "?": "K",
                "?": "K",
                "?": "K",
                "?": "K",
                "?": "K",
                "?": "L",
                "L": "L",
                "?": "L",
                "L": "L",
                "L": "L",
                "?": "L",
                "?": "L",
                "L": "L",
                "?": "L",
                "?": "L",
                "L": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "LJ",
                "?": "Lj",
                "?": "M",
                "M": "M",
                "?": "M",
                "?": "M",
                "?": "M",
                "?": "M",
                "?": "M",
                "?": "N",
                "N": "N",
                "?": "N",
                "N": "N",
                "N": "N",
                "?": "N",
                "N": "N",
                "?": "N",
                "N": "N",
                "?": "N",
                "?": "N",
                "?": "N",
                "?": "N",
                "?": "N",
                "?": "N",
                "?": "NJ",
                "?": "Nj",
                "?": "O",
                "O": "O",
                "O": "O",
                "O": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "O": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "O": "O",
                "?": "O",
                "?": "O",
                "?": "OI",
                "?": "OO",
                "?": "OU",
                "?": "P",
                "P": "P",
                "?": "P",
                "?": "P",
                "?": "P",
                "?": "P",
                "?": "P",
                "?": "P",
                "?": "P",
                "?": "Q",
                "Q": "Q",
                "?": "Q",
                "?": "Q",
                "?": "Q",
                "?": "R",
                "R": "R",
                "R": "R",
                "?": "R",
                "R": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "R": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "S",
                "S": "S",
                "?": "S",
                "S": "S",
                "?": "S",
                "S": "S",
                "?": "S",
                "S": "S",
                "?": "S",
                "?": "S",
                "?": "S",
                "?": "S",
                "S": "S",
                "?": "S",
                "?": "S",
                "?": "S",
                "?": "T",
                "T": "T",
                "?": "T",
                "T": "T",
                "?": "T",
                "?": "T",
                "T": "T",
                "?": "T",
                "?": "T",
                "T": "T",
                "?": "T",
                "T": "T",
                "?": "T",
                "?": "T",
                "?": "TZ",
                "?": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "?": "U",
                "U": "U",
                "?": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "?": "U",
                "U": "U",
                "U": "U",
                "U": "U",
                "?": "U",
                "?": "U",
                "U": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "U": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "V",
                "V": "V",
                "?": "V",
                "?": "V",
                "?": "V",
                "?": "V",
                "?": "V",
                "?": "VY",
                "?": "W",
                "W": "W",
                "?": "W",
                "?": "W",
                "W": "W",
                "?": "W",
                "?": "W",
                "?": "W",
                "?": "W",
                "?": "X",
                "X": "X",
                "?": "X",
                "?": "X",
                "?": "Y",
                "Y": "Y",
                "?": "Y",
                "Y": "Y",
                "Y": "Y",
                "?": "Y",
                "?": "Y",
                "?": "Y",
                "Y": "Y",
                "?": "Y",
                "?": "Y",
                "?": "Y",
                "?": "Y",
                "?": "Y",
                "?": "Z",
                "Z": "Z",
                "Z": "Z",
                "?": "Z",
                "Z": "Z",
                "Z": "Z",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "a",
                "a": "a",
                "?": "a",
                "a": "a",
                "a": "a",
                "a": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "a": "a",
                "a": "a",
                "a": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "a": "a",
                "a": "a",
                "?": "a",
                "a": "a",
                "?": "a",
                "a": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "a": "a",
                "?": "a",
                "?": "a",
                "?": "aa",
                "?": "ae",
                "?": "ae",
                "?": "ae",
                "?": "ao",
                "?": "au",
                "?": "av",
                "?": "av",
                "?": "ay",
                "?": "b",
                "b": "b",
                "?": "b",
                "?": "b",
                "?": "b",
                "b": "b",
                "?": "b",
                "?": "b",
                "?": "c",
                "c": "c",
                "c": "c",
                "c": "c",
                "c": "c",
                "c": "c",
                "c": "c",
                "?": "c",
                "?": "c",
                "?": "c",
                "?": "c",
                "?": "c",
                "?": "d",
                "d": "d",
                "?": "d",
                "d": "d",
                "?": "d",
                "?": "d",
                "?": "d",
                "?": "d",
                "d": "d",
                "?": "d",
                "?": "d",
                "?": "d",
                "?": "d",
                "?": "dz",
                "?": "dz",
                "?": "e",
                "e": "e",
                "e": "e",
                "e": "e",
                "e": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "e": "e",
                "?": "e",
                "?": "e",
                "e": "e",
                "e": "e",
                "e": "e",
                "?": "e",
                "e": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "e": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "?": "f",
                "f": "f",
                "?": "f",
                "?": "f",
                "?": "f",
                "?": "g",
                "g": "g",
                "?": "g",
                "g": "g",
                "?": "g",
                "g": "g",
                "g": "g",
                "g": "g",
                "g": "g",
                "g": "g",
                "?": "g",
                "?": "g",
                "?": "g",
                "?": "g",
                "?": "h",
                "h": "h",
                "h": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "h": "h",
                "?": "h",
                "?": "h",
                "?": "h",
                "?": "hv",
                "?": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "i": "i",
                "?": "i",
                "?": "i",
                "i": "i",
                "?": "i",
                "?": "i",
                "?": "i",
                "i": "i",
                "?": "i",
                "?": "i",
                "?": "i",
                "?": "j",
                "j": "j",
                "j": "j",
                "j": "j",
                "?": "j",
                "?": "k",
                "k": "k",
                "?": "k",
                "k": "k",
                "?": "k",
                "k": "k",
                "?": "k",
                "?": "k",
                "?": "k",
                "?": "k",
                "?": "k",
                "?": "k",
                "?": "k",
                "?": "l",
                "l": "l",
                "?": "l",
                "l": "l",
                "l": "l",
                "?": "l",
                "?": "l",
                "l": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "l": "l",
                "l": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "lj",
                "?": "m",
                "m": "m",
                "?": "m",
                "?": "m",
                "?": "m",
                "?": "m",
                "?": "m",
                "?": "n",
                "n": "n",
                "?": "n",
                "n": "n",
                "n": "n",
                "?": "n",
                "n": "n",
                "?": "n",
                "n": "n",
                "?": "n",
                "?": "n",
                "?": "n",
                "?": "n",
                "?": "n",
                "?": "n",
                "?": "n",
                "?": "nj",
                "?": "o",
                "o": "o",
                "o": "o",
                "o": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "o": "o",
                "o": "o",
                "o": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "oi",
                "?": "ou",
                "?": "oo",
                "?": "p",
                "p": "p",
                "?": "p",
                "?": "p",
                "?": "p",
                "?": "p",
                "?": "p",
                "?": "p",
                "?": "p",
                "?": "q",
                "q": "q",
                "?": "q",
                "?": "q",
                "?": "q",
                "?": "r",
                "r": "r",
                "r": "r",
                "?": "r",
                "r": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "r": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "s",
                "s": "s",
                "?": "s",
                "s": "s",
                "?": "s",
                "s": "s",
                "?": "s",
                "s": "s",
                "?": "s",
                "?": "s",
                "?": "s",
                "?": "s",
                "s": "s",
                "?": "s",
                "?": "s",
                "?": "s",
                "?": "s",
                "?": "t",
                "t": "t",
                "?": "t",
                "?": "t",
                "t": "t",
                "?": "t",
                "?": "t",
                "t": "t",
                "?": "t",
                "?": "t",
                "t": "t",
                "?": "t",
                "?": "t",
                "?": "t",
                "?": "t",
                "?": "tz",
                "?": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "?": "u",
                "u": "u",
                "?": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "?": "u",
                "u": "u",
                "u": "u",
                "u": "u",
                "?": "u",
                "?": "u",
                "u": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "u": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "v",
                "v": "v",
                "?": "v",
                "?": "v",
                "?": "v",
                "?": "v",
                "?": "v",
                "?": "vy",
                "?": "w",
                "w": "w",
                "?": "w",
                "?": "w",
                "w": "w",
                "?": "w",
                "?": "w",
                "?": "w",
                "?": "w",
                "?": "w",
                "?": "x",
                "x": "x",
                "?": "x",
                "?": "x",
                "?": "y",
                "y": "y",
                "?": "y",
                "y": "y",
                "y": "y",
                "?": "y",
                "?": "y",
                "?": "y",
                "y": "y",
                "?": "y",
                "?": "y",
                "?": "y",
                "?": "y",
                "?": "y",
                "?": "y",
                "?": "z",
                "z": "z",
                "z": "z",
                "?": "z",
                "z": "z",
                "z": "z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?",
                "?": "?"
            }
        }), t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, i) {
                t.__super__.constructor.call(this)
            }

            return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, t.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, t.prototype.bind = function (e, t) {
            }, t.prototype.destroy = function () {
            }, t.prototype.generateResultId = function (t, i) {
                var n = t.id + "-result-";
                return n += e.generateChars(4), n += null != i.id ? "-" + i.id.toString() : "-" + e.generateChars(4)
            }, t
        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, i) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, e), n.prototype.current = function (e) {
                var t = [], n = this;
                this.$element.find(":selected").each(function () {
                    var e = i(this), s = n.item(e);
                    t.push(s)
                }), e(t)
            }, n.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, i(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (n) {
                    var s = [];
                    e = [e], e.push.apply(e, n);
                    for (var a = 0; a < e.length; a++) {
                        var o = e[a].id;
                        -1 === i.inArray(o, s) && s.push(o)
                    }
                    t.$element.val(s), t.$element.trigger("change")
                }); else {
                    var n = e.id;
                    this.$element.val(n), this.$element.trigger("change")
                }
            }, n.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple")) return e.selected = !1, i(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (n) {
                    for (var s = [], a = 0; a < n.length; a++) {
                        var o = n[a].id;
                        o !== e.id && -1 === i.inArray(o, s) && s.push(o)
                    }
                    t.$element.val(s), t.$element.trigger("change")
                })
            }, n.prototype.bind = function (e, t) {
                var i = this;
                this.container = e, e.on("select", function (e) {
                    i.select(e.data)
                }), e.on("unselect", function (e) {
                    i.unselect(e.data)
                })
            }, n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    i.removeData(this, "data")
                })
            }, n.prototype.query = function (e, t) {
                var n = [], s = this;
                this.$element.children().each(function () {
                    var t = i(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var a = s.item(t), o = s.matches(e, a);
                        null !== o && n.push(o)
                    }
                }), t({results: n})
            }, n.prototype.addOptions = function (e) {
                t.appendMany(this.$element, e)
            }, n.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var n = i(t), s = this._normalizeItem(e);
                return s.element = t, i.data(t, "data", s), n
            }, n.prototype.item = function (e) {
                var t = {};
                if (null != (t = i.data(e[0], "data"))) return t;
                if (e.is("option")) t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    t = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var n = e.children("option"), s = [], a = 0; a < n.length; a++) {
                        var o = i(n[a]), r = this.item(o);
                        s.push(r)
                    }
                    t.children = s
                }
                return t = this._normalizeItem(t), t.element = e[0], i.data(e[0], "data", t), t
            }, n.prototype._normalizeItem = function (e) {
                i.isPlainObject(e) || (e = {id: e, text: e}), e = i.extend({}, {text: ""}, e);
                var t = {selected: !1, disabled: !1};
                return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), i.extend({}, t, e)
            }, n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t)
            }, n
        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, i) {
            function n(e, t) {
                var i = t.get("data") || [];
                n.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(i))
            }

            return t.Extend(n, e), n.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, i) {
                    return i.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e), this.addOptions(t)), n.__super__.select.call(this, e)
            }, n.prototype.convertToOptions = function (e) {
                function n(e) {
                    return function () {
                        return i(this).val() == e.id
                    }
                }

                for (var s = this, a = this.$element.find("option"), o = a.map(function () {
                    return s.item(i(this)).id
                }).get(), r = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (i.inArray(c.id, o) >= 0) {
                        var d = a.filter(n(c)), u = this.item(d), h = i.extend(!0, {}, c, u), p = this.option(h);
                        d.replaceWith(p)
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            t.appendMany(f, m)
                        }
                        r.push(f)
                    }
                }
                return r
            }, n
        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, i) {
            function n(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
            }

            return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return i.extend({}, e, {q: e.term})
                    }, transport: function (e, t, n) {
                        var s = i.ajax(e);
                        return s.then(t), s.fail(n), s
                    }
                };
                return i.extend({}, t, e, !0)
            }, n.prototype.processResults = function (e) {
                return e
            }, n.prototype.query = function (e, t) {
                function n() {
                    var n = a.transport(a, function (n) {
                        var a = s.processResults(n, e);
                        s.options.get("debug") && window.console && console.error && (a && a.results && i.isArray(a.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(a)
                    }, function () {
                        n.status && "0" === n.status || s.trigger("results:message", {message: "errorLoading"})
                    });
                    s._request = n
                }

                var s = this;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var a = i.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof a.url && (a.url = a.url.call(this.$element, e)), "function" == typeof a.data && (a.data = a.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
            }, n
        }), t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, i, n) {
                var s = n.get("tags"), a = n.get("createTag");
                void 0 !== a && (this.createTag = a);
                var o = n.get("insertTag");
                if (void 0 !== o && (this.insertTag = o), t.call(this, i, n), e.isArray(s)) for (var r = 0; r < s.length; r++) {
                    var l = s[r], c = this._normalizeItem(l), d = this.option(c);
                    this.$element.append(d)
                }
            }

            return t.prototype.query = function (e, t, i) {
                function n(e, a) {
                    for (var o = e.results, r = 0; r < o.length; r++) {
                        var l = o[r], c = null != l.children && !n({results: l.children}, !0);
                        if (l.text === t.term || c) return !a && (e.data = o, void i(e))
                    }
                    if (a) return !0;
                    var d = s.createTag(t);
                    if (null != d) {
                        var u = s.option(d);
                        u.attr("data-select2-tag", !0), s.addOptions([u]), s.insertTag(o, d)
                    }
                    e.results = o, i(e)
                }

                var s = this;
                return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, i) : void e.call(this, t, n)
            }, t.prototype.createTag = function (t, i) {
                var n = e.trim(i.term);
                return "" === n ? null : {id: n, text: n}
            }, t.prototype.insertTag = function (e, t, i) {
                t.unshift(i)
            }, t.prototype._removeOldTags = function (t) {
                (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function () {
                    this.selected || e(this).remove()
                })
            }, t
        }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, i) {
                var n = i.get("tokenizer");
                void 0 !== n && (this.tokenizer = n), e.call(this, t, i)
            }

            return t.prototype.bind = function (e, t, i) {
                e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
            }, t.prototype.query = function (t, i, n) {
                function s(t) {
                    var i = o._normalizeItem(t);
                    if (!o.$element.find("option").filter(function () {
                            return e(this).val() === i.id
                        }).length) {
                        var n = o.option(i);
                        n.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([n])
                    }
                    a(i)
                }

                function a(e) {
                    o.trigger("select", {data: e})
                }

                var o = this;
                i.term = i.term || "";
                var r = this.tokenizer(i, this.options, s);
                r.term !== i.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), i.term = r.term), t.call(this, i, n)
            }, t.prototype.tokenizer = function (t, i, n, s) {
                for (var a = n.get("tokenSeparators") || [], o = i.term, r = 0, l = this.createTag || function (e) {
                    return {id: e.term, text: e.term}
                }; r < o.length;) {
                    var c = o[r];
                    if (-1 !== e.inArray(c, a)) {
                        var d = o.substr(0, r), u = e.extend({}, i, {term: d}), h = l(u);
                        null != h ? (s(h), o = o.substr(r + 1) || "", r = 0) : r++
                    } else r++
                }
                return {term: o}
            }, t
        }), t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, i) {
                this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i)
            }

            return e.prototype.query = function (e, t, i) {
                return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort", args: {
                        minimum: this.minimumInputLength,
                        input: t.term, params: t
                    }
                }) : void e.call(this, t, i)
            }, e
        }), t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, i) {
                this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i)
            }

            return e.prototype.query = function (e, t, i) {
                return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : void e.call(this, t, i)
            }, e
        }), t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i)
            }

            return e.prototype.query = function (e, t, i) {
                var n = this;
                this.current(function (s) {
                    var a = null != s ? s.length : 0;
                    return n.maximumSelectionLength > 0 && a >= n.maximumSelectionLength ? void n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: n.maximumSelectionLength}
                    }) : void e.call(n, t, i)
                })
            }, e
        }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
            }, i.prototype.bind = function () {
            }, i.prototype.position = function (e, t) {
            }, i.prototype.destroy = function () {
                this.$dropdown.remove()
            }, i
        }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
            function i() {
            }

            return i.prototype.render = function (t) {
                var i = t.call(this),
                    n = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = n, this.$search = n.find("input"), i.prepend(n), i
            }, i.prototype.bind = function (t, i, n) {
                var s = this;
                t.call(this, i, n), this.$search.on("keydown", function (e) {
                    s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (t) {
                    e(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    s.handleSearch(e)
                }), i.on("open", function () {
                    s.$search.attr("tabindex", 0), s.$search.focus(), window.setTimeout(function () {
                        s.$search.focus()
                    }, 0)
                }), i.on("close", function () {
                    s.$search.attr("tabindex", -1), s.$search.val("")
                }), i.on("focus", function () {
                    i.isOpen() && s.$search.focus()
                }), i.on("results:all", function (e) {
                    if (null == e.query.term || "" === e.query.term) {
                        s.showSearch(e) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, i.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, i.prototype.showSearch = function (e, t) {
                return !0
            }, i
        }), t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, i, n) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, n)
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var i = t.slice(0), n = t.length - 1; n >= 0; n--) {
                    var s = t[n];
                    this.placeholder.id === s.id && i.splice(n, 1)
                }
                return i
            }, e
        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, i, n) {
                this.lastParams = {}, e.call(this, t, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return t.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, t.prototype.bind = function (t, i, n) {
                var s = this;
                t.call(this, i, n), i.on("query", function (e) {
                    s.lastParams = e, s.loading = !0
                }), i.on("query:append", function (e) {
                    s.lastParams = e, s.loading = !0
                }), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, s.$loadingMore[0]);
                    if (!s.loading && t) {
                        s.$results.offset().top + s.$results.outerHeight(!1) + 50 >= s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) && s.loadMore()
                    }
                })
            }, t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, {page: 1}, this.lastParams);
                t.page++, this.trigger("query:append", t)
            }, t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more
            }, t.prototype.createLoadingMore = function () {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    i = this.options.get("translations").get("loadingMore");
                return t.html(i(this.lastParams)), t
            }, t
        }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
            function i(t, i, n) {
                this.$dropdownParent = n.get("dropdownParent") || e(document.body), t.call(this, i, n)
            }

            return i.prototype.bind = function (e, t, i) {
                var n = this, s = !1;
                e.call(this, t, i), t.on("open", function () {
                    n._showDropdown(), n._attachPositioningHandler(t), s || (s = !0, t.on("results:all", function () {
                        n._positionDropdown(), n._resizeDropdown()
                    }), t.on("results:append", function () {
                        n._positionDropdown(), n._resizeDropdown()
                    }))
                }), t.on("close", function () {
                    n._hideDropdown(), n._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, i.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove()
            }, i.prototype.position = function (e, t, i) {
                t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = i
            }, i.prototype.render = function (t) {
                var i = e("<span></span>"), n = t.call(this);
                return i.append(n), this.$dropdownContainer = i, i
            }, i.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, i.prototype._attachPositioningHandler = function (i, n) {
                var s = this, a = "scroll.select2." + n.id, o = "resize.select2." + n.id,
                    r = "orientationchange.select2." + n.id, l = this.$container.parents().filter(t.hasScroll);
                l.each(function () {
                    e(this).data("select2-scroll-position", {x: e(this).scrollLeft(), y: e(this).scrollTop()})
                }), l.on(a, function (t) {
                    var i = e(this).data("select2-scroll-position");
                    e(this).scrollTop(i.y)
                }), e(window).on(a + " " + o + " " + r, function (e) {
                    s._positionDropdown(), s._resizeDropdown()
                })
            }, i.prototype._detachPositioningHandler = function (i, n) {
                var s = "scroll.select2." + n.id, a = "resize.select2." + n.id, o = "orientationchange.select2." + n.id;
                this.$container.parents().filter(t.hasScroll).off(s), e(window).off(s + " " + a + " " + o)
            }, i.prototype._positionDropdown = function () {
                var t = e(window), i = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"), s = null, a = this.$container.offset();
                a.bottom = a.top + this.$container.outerHeight(!1);
                var o = {height: this.$container.outerHeight(!1)};
                o.top = a.top, o.bottom = a.top + o.height;
                var r = {height: this.$dropdown.outerHeight(!1)},
                    l = {top: t.scrollTop(), bottom: t.scrollTop() + t.height()}, c = l.top < a.top - r.height,
                    d = l.bottom > a.bottom + r.height, u = {left: a.left, top: o.bottom}, h = this.$dropdownParent;
                "static" === h.css("position") && (h = h.offsetParent());
                var p = h.offset();
                u.top -= p.top, u.left -= p.left, i || n || (s = "below"), d || !c || i ? !c && d && i && (s = "below") : s = "above", ("above" == s || i && "below" !== s) && (u.top = o.top - p.top - r.height), null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)), this.$dropdownContainer.css(u)
            }, i.prototype._resizeDropdown = function () {
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
            }, i.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, i
        }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
                for (var i = 0, n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.children ? i += e(s.children) : i++
                }
                return i
            }

            function t(e, t, i, n) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, n)
            }

            return t.prototype.showSearch = function (t, i) {
                return !(e(i.data.results) < this.minimumResultsForSearch) && t.call(this, i)
            }, t
        }), t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("close", function (e) {
                    n._handleSelectOnClose(e)
                })
            }, e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                    var i = t.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type) return
                }
                var n = this.getHighlightedResults();
                if (!(n.length < 1)) {
                    var s = n.data("data");
                    null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {data: s})
                }
            }, e
        }), t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("select", function (e) {
                    n._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    n._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function (e, t) {
                var i = t.originalEvent;
                i && i.ctrlKey || this.trigger("close", {originalEvent: i, originalSelect2Event: t})
            }, e
        }), t.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (e) {
                    var t = e.input.length - e.maximum, i = "Please delete " + t + " character";
                    return 1 != t && (i += "s"), i
                }, inputTooShort: function (e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results�"
                }, maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching�"
                }
            }
        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, i, n, s, a, o, r, l, c, d, u, h, p, f, m, g, v, y, w, b, I, x, C, _, T, k, S, P) {
            function z() {
                this.reset()
            }

            return z.prototype.apply = function (u) {
                if (u = e.extend(!0, {}, this.defaults, u), null == u.dataAdapter) {
                    if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = h, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, w)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null != u.query) {
                        var P = t(u.amdBase + "compat/query");
                        u.dataAdapter = c.Decorate(u.dataAdapter, P)
                    }
                    if (null != u.initSelection) {
                        var z = t(u.amdBase + "compat/initSelection");
                        u.dataAdapter = c.Decorate(u.dataAdapter, z)
                    }
                }
                if (null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, x)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k))), null == u.dropdownAdapter) {
                    if (u.multiple) u.dropdownAdapter = b; else {
                        var M = c.Decorate(b, I);
                        u.dropdownAdapter = M
                    }
                    if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                        var E = t(u.amdBase + "compat/dropdownCss");
                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, E)
                    }
                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, _)
                }
                if (null == u.selectionAdapter) {
                    if (u.multiple ? u.selectionAdapter = s : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                        var O = t(u.amdBase + "compat/containerCss");
                        u.selectionAdapter = c.Decorate(u.selectionAdapter, O)
                    }
                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                }
                if ("string" == typeof u.language) if (u.language.indexOf("-") > 0) {
                    var A = u.language.split("-"), D = A[0];
                    u.language = [u.language, D]
                } else u.language = [u.language];
                if (e.isArray(u.language)) {
                    var L = new d;
                    u.language.push("en");
                    for (var F = u.language, R = 0; R < F.length; R++) {
                        var N = F[R], H = {};
                        try {
                            H = d.loadPath(N)
                        } catch (e) {
                            try {
                                N = this.defaults.amdLanguageBase + N, H = d.loadPath(N)
                            } catch (e) {
                                u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + N + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        L.extend(H)
                    }
                    u.translations = L
                } else {
                    var J = d.loadPath(this.defaults.amdLanguageBase + "en"), j = new d(u.language);
                    j.extend(J), u.translations = j
                }
                return u
            }, z.prototype.reset = function () {
                function t(e) {
                    function t(e) {
                        return u[e] || e
                    }

                    return e.replace(/[^\u0000-\u007E]/g, t)
                }

                function i(n, s) {
                    if ("" === e.trim(n.term)) return s;
                    if (s.children && s.children.length > 0) {
                        for (var a = e.extend(!0, {}, s), o = s.children.length - 1; o >= 0; o--) {
                            null == i(n, s.children[o]) && a.children.splice(o, 1)
                        }
                        return a.children.length > 0 ? a : i(n, a)
                    }
                    var r = t(s.text).toUpperCase(), l = t(n.term).toUpperCase();
                    return r.indexOf(l) > -1 ? s : null
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: P,
                    matcher: i,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                        return e
                    },
                    templateResult: function (e) {
                        return e.text
                    },
                    templateSelection: function (e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, z.prototype.set = function (t, i) {
                var n = e.camelCase(t), s = {};
                s[n] = i;
                var a = c._convertData(s);
                e.extend(this.defaults, a)
            }, new z
        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, i, n) {
            function s(t, s) {
                if (this.options = t, null != s && this.fromElement(s), this.options = i.apply(this.options), s && s.is("input")) {
                    var a = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = n.Decorate(this.options.dataAdapter, a)
                }
            }

            return s.prototype.fromElement = function (e) {
                var i = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var s = {};
                s = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var a = t.extend(!0, {}, s);
                a = n._convertData(a);
                for (var o in a) t.inArray(o, i) > -1 || (t.isPlainObject(this.options[o]) ? t.extend(this.options[o], a[o]) : this.options[o] = a[o]);
                return this
            }, s.prototype.get = function (e) {
                return this.options[e]
            }, s.prototype.set = function (e, t) {
                this.options[e] = t
            }, s
        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, i, n) {
            var s = function (e, i) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), s.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                e.data("old-tabindex", n), e.attr("tabindex", "-1");
                var a = this.options.get("dataAdapter");
                this.dataAdapter = new a(e, this.options);
                var o = this.render();
                this._placeContainer(o);
                var r = this.options.get("selectionAdapter");
                this.selection = new r(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                var c = this.options.get("resultsAdapter");
                this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var d = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    d.trigger("selection:update", {data: e})
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
            };
            return i.Extend(s, i.Observable), s.prototype._generateId = function (e) {
                var t = "";
                return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
            }, s.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, s.prototype._resolveWidth = function (e, t) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var n = this._resolveWidth(e, "style");
                    return null != n ? n : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var s = e.outerWidth(!1);
                    return 0 >= s ? "auto" : s + "px"
                }
                if ("style" == t) {
                    var a = e.attr("style");
                    if ("string" != typeof a) return null;
                    for (var o = a.split(";"), r = 0, l = o.length; l > r; r += 1) {
                        var c = o[r].replace(/\s/g, ""), d = c.match(i);
                        if (null !== d && d.length >= 1) return d[1]
                    }
                    return null
                }
                return t
            }, s.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, s.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e})
                    })
                }), this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e)
                }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != n ? (this._observer = new n(function (i) {
                    e.each(i, t._syncA), e.each(i, t._syncS)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }, s.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, i) {
                    e.trigger(t, i)
                })
            }, s.prototype._registerSelectionEvents = function () {
                var t = this, i = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    t.toggleDropdown()
                }), this.selection.on("focus", function (e) {
                    t.focus(e)
                }), this.selection.on("*", function (n, s) {
                    -1 === e.inArray(n, i) && t.trigger(n, s)
                })
            }, s.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, i) {
                    e.trigger(t, i)
                })
            }, s.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, i) {
                    e.trigger(t, i)
                })
            }, s.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {
                    e.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    e.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    e.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    e.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    e.$container.removeClass("select2-container--focus")
                }), this.on("query", function (t) {
                    e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (i) {
                        e.trigger("results:all", {data: i, query: t})
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (i) {
                        e.trigger("results:append", {data: i, query: t})
                    })
                }), this.on("keypress", function (t) {
                    var i = t.which;
                    e.isOpen() ? i === n.ESC || i === n.TAB || i === n.UP && t.altKey ? (e.close(), t.preventDefault()) : i === n.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : i === n.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : i === n.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : i === n.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (i === n.ENTER || i === n.SPACE || i === n.DOWN && t.altKey) && (e.open(), t.preventDefault())
                })
            }, s.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, s.prototype._syncSubtree = function (e, t) {
                var i = !1, n = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) if (t.addedNodes && t.addedNodes.length > 0) for (var s = 0; s < t.addedNodes.length; s++) {
                        var a = t.addedNodes[s];
                        a.selected && (i = !0)
                    } else t.removedNodes && t.removedNodes.length > 0 && (i = !0); else i = !0;
                    i && this.dataAdapter.current(function (e) {
                        n.trigger("selection:update", {data: e})
                    })
                }
            }, s.prototype.trigger = function (e, t) {
                var i = s.__super__.trigger,
                    n = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                if (void 0 === t && (t = {}), e in n) {
                    var a = n[e], o = {prevented: !1, name: e, args: t};
                    if (i.call(this, a, o), o.prevented) return void(t.prevented = !0)
                }
                i.call(this, e, t)
            }, s.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, s.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, s.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, s.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, s.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, s.prototype.focus = function (e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, s.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, s.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {
                    e = t
                }), e
            }, s.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                var i = t[0];
                e.isArray(i) && (i = e.map(i, function (e) {
                    return e.toString()
                })), this.$element.val(i).trigger("change")
            }, s.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, s.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
            }, s
        }), t.define("jquery-mousewheel", ["jquery"], function (e) {
            return e
        }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (e, t, i, n) {
            if (null == e.fn.select2) {
                var s = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if ("object" == typeof(t = t || {})) return this.each(function () {
                        var n = e.extend(!0, {}, t);
                        new i(e(this), n)
                    }), this;
                    if ("string" == typeof t) {
                        var n, a = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var i = e(this).data("select2");
                            null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = i[t].apply(i, a)
                        }), e.inArray(t, s) > -1 ? this : n
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = n), i
        }), {define: t.define, require: t.require}
    }(), i = t.require("jquery.select2");
    return e.fn.select2.amd = t, i
}), function (e) {
    e.fn.extend({
        socialShare: function (t) {
            function i() {
                if (window.getSelection) return window.getSelection();
                if (document.getSelection) return document.getSelection();
                var e = document.selection && document.selection.createRange();
                return !!e.text && e.text
            }

            function n(t, i, n) {
                e(t).each(function (t) {
                    e(this).delay(t * i).fadeTo(i, n)
                })
            }

            function s() {
                for (var i = {
                    blogger: {
                        text: "Blogger",
                        className: "blogger",
                        url: "http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}",
                        da: ""
                    },
                    delicious: {
                        text: "Delicious",
                        className: "delicious",
                        url: "http://del.icio.us/post?url={u}&amp;title={t}",
                        da: ""
                    },
                    digg: {
                        text: "Digg",
                        className: "aDigg",
                        url: "http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}",
                        da: ""
                    },
                    facebook: {
                        text: "Facebook",
                        className: "facebook",
                        url: "http://www.facebook.com/sharer.php?u={u}",
                        da: ""
                    },
                    friendfeed: {
                        text: "FriendFeed",
                        className: "friendFeed",
                        url: "http://friendfeed.com/share?url={u}&amp;title={t}",
                        da: ""
                    },
                    google: {
                        text: "Google+",
                        className: "googleplus",
                        url: "https://plus.google.com/share?url={u}",
                        da: ""
                    },
                    linkedin: {
                        text: "LinkedIn",
                        className: "linkedin",
                        url: "http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary=&amp;source=",
                        da: ""
                    },
                    myspace: {
                        text: "MySpace",
                        className: "myspace",
                        url: "http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}",
                        da: ""
                    },
                    pinterest: {
                        text: "Pinterest",
                        className: "pinterest",
                        url: "http://pinterest.com/pin/create/button/?url={u}&amp;media={m}&amp;description={t}",
                        da: ""
                    },
                    vk: {
                        text: "VKontakte",
                        className: "vk",
                        url: "http://vk.com/share.php?url={u}&amp;title={t}&amp;image={m}",
                        da: ""
                    },
                    reddit: {
                        text: "Reddit",
                        className: "reddit",
                        url: "http://reddit.com/submit?url={u}&amp;title={t}",
                        da: ""
                    },
                    stumbleupon: {
                        text: "StumbleUpon",
                        className: "stumbleUpon",
                        url: "http://www.stumbleupon.com/submit?url={u}&amp;title={t}",
                        da: ""
                    },
                    tumblr: {
                        text: "Tumblr",
                        className: "tumblr",
                        url: "http://www.tumblr.com/share/link?url={u}&name={t}&description={t}",
                        da: ""
                    },
                    twitter: {
                        text: "Twitter",
                        className: "twitter",
                        url: "http://twitter.com/home?status={t}%20{u}",
                        da: ""
                    },
                    windows: {
                        text: "Windows",
                        className: "windows",
                        url: "http://profile.live.com/badge?url={u}",
                        da: ""
                    },
                    yahoo: {
                        text: "Yahoo",
                        className: "yahoo",
                        url: "http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}",
                        da: ""
                    },
                    whatsapp: {
                        text: "WhatsApp",
                        className: "whatsapp",
                        url: "whatsapp://send?text={u}",
                        da: "data-action='share/whatsapp/share'"
                    }
                }, n = t.social.split(","), s = "", a = 0; a <= n.length - 1; a++) i[n[a]].url = i[n[a]].url.replace("{t}", encodeURIComponent(t.title)).replace("{u}", encodeURI(t.shareUrl)).replace("{d}", encodeURIComponent(t.description)).replace("{m}", encodeURI(t.mediaUrl)), s += '<li class="' + i[n[a]].className + '"><a href="' + i[n[a]].url + '" target="_blank" ' + i[n[a]].da + "></a><span>" + i[n[a]].text + "</span></li>";
                e("body").append(d + s + u)
            }

            function a(t) {
                t.blur && e("body").children().removeClass("blurred"), e(".arthrefSocialShare").find(".overlay").removeClass("active"), e(".arthrefSocialShare").find("ul").removeClass("active"), setTimeout(function () {
                    e(".arthrefSocialShare").find(".overlay").css("display", "none"), e(".arthrefSocialShare").remove()
                }, 300)
            }

            var o = {
                social: "",
                title: document.title,
                shareUrl: window.location.href,
                description: e('meta[name="description"]').attr("content"),
                mediaUrl: e(".social-sharing").attr("data-shareimg"),
                animation: "launchpad",
                chainAnimationSpeed: 100,
                whenSelect: !1,
                selectContainer: "body",
                blur: !1
            };
            if (e("#page-wrap").hasClass("mc-dark")) var r = "sdark"; else var r = "";
            var t = e.extend(!0, o, t), l = e(".box-share-master-container").attr("data-name"),
                c = e(".social-sharing").attr("data-name"),
                d = '<div class="arthref arthrefSocialShare ' + r + '"><div class="overlay ' + t.animation + '"><div class="icon-container"><div class="centered"><div class="share-title"><h4>' + l + "</h4><h1>" + c + '</h1></div><ul class="social-icons">',
                u = "</ul></div></div></div></div>";
            return this.each(function () {
                var o = t, r = e(this);
                o.whenSelect && e(o.selectContainer).mouseup(function (e) {
                    var n = i();
                    n && (n = new String(n).replace(/^\s+|\s+$/g, "")) && (t.title = n)
                }), r.click(function () {
                    s(), o.blur && (e(".arthrefSocialShare").find(".overlay").addClass("opaque"), e("body").children().not(".arthref, script").addClass("blurred")), e(".arthrefSocialShare").find(".overlay").css("display", "block"), setTimeout(function () {
                        e(".arthrefSocialShare").find(".overlay").addClass("active"), e(".arthrefSocialShare").find("ul").addClass("active"), "chain" == o.animation && n(e(".arthrefSocialShare").find("li"), o.chainAnimationSpeed, "1")
                    }, 0)
                }), e(document).on("click touchstart", ".arthrefSocialShare .overlay", function (e) {
                    a(o)
                }), e(document).on("keydown", function (e) {
                    27 == e.keyCode && a(o)
                }), e(document).on("click touchstart", ".arthrefSocialShare li", function (e) {
                    e.stopPropagation()
                })
            })
        }
    })
}(jQuery), function ($) {
    "use strict";
    $.fn.fitVids = function (e) {
        var t = {customSelector: null, ignore: null};
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("div");
            n.innerHTML = '<p>x</p><style id="fit-vids-style">' + ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}" + "</style>", i.appendChild(n.childNodes[1])
        }
        return e && $.extend(t, e), this.each(function () {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            t.customSelector && e.push(t.customSelector);
            var i = ".fitvidsignore";
            t.ignore && (i = i + ", " + t.ignore);
            var n = $(this).find(e.join(","));
            n = n.not("object object"), n = n.not(i), n.each(function () {
                var e = $(this);
                if (!(e.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var t = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10), s = t / n;
                    if (!e.attr("name")) {
                        var a = "fitvid" + $.fn.fitVids._count;
                        e.attr("name", a),
                            $.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, $.fn.fitVids._count = 0
}(window.jQuery || window.Zepto), eval(function (e, t, i, n, s, a) {
    if (s = function (e) {
            return (e < t ? "" : s(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
        }, !"".replace(/^/, String)) {
        for (; i--;) a[s(i)] = n[i] || s(i);
        n = [function (e) {
            return a[e]
        }], s = function () {
            return "\\w+"
        }, i = 1
    }
    for (; i--;) n[i] && (e = e.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
    return e
}('(J($){J 1g(i){K t={};23(K e 4N i)t[e]=i[e]+"1g";T t}J 5v(){K i=z.38();T i.N>i.M?"3a":"3W"}J 6z(i){T 5w.7V.2L(5w,i.3F(","))}J 6A(){23(K i="",t=6z("9Z,97,a0,7W,a1,a2");!/^([a-5x-Z])+/.5y(i);)i=19[t]().a3(36).5z(2,5);T i}J 6z(i){T 5w.7V.2L(5w,i.3F(","))}J 5A(i){1d.6B&&6B[6B.5A?"5A":"a4"](i)}J 6C(i,t){W(!2f.7X)T t(!1,1),2M 0;K e={M:i.M,N:i.N},s={M:4g,N:4g},n=1,o=1;e.M>s.M&&(n=s.M/e.M),e.N>s.N&&(o=s.N/e.N);K a=19.24(n,o);1>a&&(e.M*=a,e.N*=a);K h=25 6D,r=$("<4O>").2C(e)[0],d=r.6E("2d");d.a5=.8,d.a6(i,0,0,e.M,e.N),h.3X=J(){t(h,a)};5B{h.3u=r.6F("1x/7Y")}5C(u){t(!1,1)}}J 5D(i,t){23(K e 4N t)t[e]&&t[e].7Z&&t[e].7Z===a7?(i[e]=$.1i({},i[e])||{},5D(i[e],t[e])):i[e]=t[e];T i}J 3G(i,t){T 5D($.1i({},i),t)}J 4h(){I.1F.2L(I,k.2q(1R))}J 6G(){I.1F.2L(I,k.2q(1R))}J 6H(){I.1F.2L(I,k.2q(1R))}J 6I(){I.1F.2L(I,k.2q(1R))}J 6J(){I.1F.2L(I,k.2q(1R))}J 4i(){I.1F.2L(I,k.2q(1R))}J 6K(){I.1F.2L(I,k.2q(1R))}J 4P(i){K t={13:"1x"};T $.1m(H,J(e,s){K n=s.1j(i);n&&(t=n,t.13=e,t.1B=i)}),t}J 5E(i){K t=(i||"").a8(/\\?.*/g,"").6L(/\\.([^.]{3,4})$/);T t?t[1].6M():1t}K j=1d.6N||{};$.1i(j,{6O:"1.4.5"}),j.3Y={80:{1z:{1v:{1o:0,1e:0,1N:a9,5F:!0},1S:{1o:0,1e:6P,2V:6Q},1a:{1o:4g,3H:0,2g:6P,2V:6Q},1V:{81:4g,82:4g},1d:{1o:aa,1e:6P,1A:ab},U:{1o:6Q,1e:4g,2V:ac}},5G:{U:{1o:83,1e:83,2V:ad}},5H:{1p:!0,2w:!0,5I:!0},3b:!1,3Z:"1J-1G",2x:"2D",1Y:{2h:!0},1A:!1,40:!0,84:{2D:{2k:20,2I:20},x:{2k:0,2I:0},y:{2k:0,2I:0},3c:{2k:0,2I:0}},1a:!0,14:{M:{3a:.8,3W:.6}},U:"2i",1W:{5J:1,4Q:1,ae:1,af:1,3a:0,3b:0},2j:{5J:1,3d:1,ag:1,6R:1,ah:3,3b:0,ai:1,aj:0},5K:{1x:{},1W:{M:85},2j:{M:85,N:ak}}},86:{},2l:{},87:{}};K k=al.3e.am,2y={5L:J(i){T i&&1==i.88},1c:{an:J(){J i(i){23(K t=i;t&&t.89;)t=t.89;T t}T J(t){K e=i(t);T!(!e||!e.4R)}}()}};(J(){J i(i){K t;W(i.3v.8a?t=i.3v.8a/ao:i.3v.8b&&(t=-i.3v.8b/3),t){K e=$.ap("2l:5M");$(i.2N).aq(e,t),e.ar()&&i.2E(),e.as()&&i.2r()}}$(2z.4S).1C("5M at",i)})();K q=J(){K i=0,t=6A()+6A();T J(e){23(e=e||t,i++;$("#"+e+i)[0];)i++;T e+i}}(),3I={};(J(){K i={};$.1m(["au","av","aw","ax","ay"],J(t,e){i[e]=J(i){T 19.8c(i,t+2)}}),$.1i(i,{az:J(i){T 1-19.aA(i*19.aB/2)}}),$.1m(i,J(i,t){3I["aC"+i]=t,3I["aD"+i]=J(i){T 1-t(1-i)},3I["aE"+i]=J(i){T.5>i?t(2*i)/2:1-t(-2*i+2)/2}}),$.1m(3I,J(i,t){$.3I[i]||($.3I[i]=t)})})();K z={38:J(){K i={N:$(1d).N(),M:$(1d).M()};T 1h.4T&&(i.M=1d.6S,i.N=1d.4j),i}},3J={3K:J(i){K t=$.1i({2s:"3c"},1R[1]||{});t.2W||(t.2W=$.1i({},Y.26));K e=t.2W,s=$.1i({},i),n=1,o=5;t.3L&&(e.M-=2*t.3L,e.N-=2*t.3L);K a={N:!0,M:!0};2O(t.2s){1K"2D":a={};1K"M":1K"N":a={},a[t.2s]=!0}23(;o>0&&(a.M&&s.M>e.M||a.N&&s.N>e.N);){K h=1,r=1;a.M&&s.M>e.M&&(h=e.M/s.M),a.N&&s.N>e.N&&(r=e.N/s.N);K n=19.24(h,r);s={M:19.3f(i.M*n),N:19.3f(i.N*n)},o--}T s.M=19.1H(s.M,0),s.N=19.1H(s.N,0),s}},1h=J(i){J t(t){K e=aF(t+"([\\\\d.]+)").5N(i);T e?4U(e[1]):!0}T{1q:!(!1d.aG||-1!==i.3g("6T"))&&t("aH "),6T:i.3g("6T")>-1&&(!!1d.6U&&6U.6O&&4U(6U.6O())||7.55),4k:i.3g("8d/")>-1&&t("8d/"),8e:i.3g("8e")>-1&&-1===i.3g("aI")&&t("aJ:"),4T:!!i.6L(/aK.*aL.*aM/),6V:i.3g("6V")>-1&&t("6V/"),8f:i.3g("8g")>-1&&t("8g/"),3M:i.3g("3M")>-1&&t("3M "),5O:i.3g("5O")>-1&&t("5O/")}}(8h.aN),2f=J(){J i(i){T e(i,"8i")}J t(i,t){23(K e 4N i)W(2M 0!==s.3w[i[e]])T"8i"==t?i[e]:!0;T!1}J e(i,e){K s=i.aO(0).8j()+i.5z(1),o=(i+" "+n.aP(s+" ")+s).3F(" ");T t(o,e)}K s=2z.6W("11"),n="aQ aR O aS aT".3F(" ");T{4O:J(){K i=2z.6W("4O");T!(!i.6E||!i.6E("2d"))}(),14:J(){5B{T!!("aU"4N 1d||1d.8k&&2z aV 8k)}5C(i){T!1}}(),6X:!(!1d.6X||1h.1q&&9>1h.1q),16:{8l:e("8l"),aW:i}}}();2f.2X=2f.14&&(1h.4T||1h.3M||1h.5O||1h.8f||!/^(aX|aY|aZ)/.5y(8h.b0)),2f.7X=2f.4O&&J(){K i=2z.6W("4O");T i.6F&&0===i.6F("1x/6Y").3g("1j:1x/6Y")}();K A={41:{28:{6Z:"1.4.4",70:1d.28&&28.b1.b2}},8m:J(){J i(i){23(K e=i.6L(t),s=e&&e[1]&&e[1].3F(".")||[],n=0,o=0,a=s.1u;a>o;o++)n+=3x(s[o]*19.8c(10,6-2*o));T e&&e[3]?n-1:n}K t=/^(\\d+(\\.?\\d+){0,3})([A-8n-b3-]+[A-8n-b4-9]+)?/;T J(t){(!I.41[t].70||i(I.41[t].70)<i(I.41[t].6Z)&&!I.41[t].8o)&&(I.41[t].8o=!0,5A("6N b5 "+t+" >= "+I.41[t].6Z))}}()},3y={4l:J(i){T{4m:i?"4m":"5P",5Q:i?"5Q":"b6",5R:i?"5R":"b7"}}(2f.2X),1C:J(i){J t(t){J s(t){W(e.2r&&t.2r(),l){p=t.3v.5S?t.3v.5S[0]:t,d=(25 71).72(),h=p.3h,r=p.3i,o=h-m,a=r-v;K s=(25 71).72();g&&(e.b8&&19.4n(o)<e.73||e.b9&&19.4n(a)<e.73||l&&7W>s-l)||(w&&(w=!1,g=!1,m=p.3h,v=p.3i,o=h-m,a=r-v),"J"==$.13(e.1N)&&e.1N({2N:i,x:o,y:a}))}}J n(){W(u.4o(3y.4l.4m),l&&d){K t=!1;e.8p>d-l&&19.4n(c-h)>e.8q&&19.4n(f-r)<e.8r&&(t=!0,"J"==$.13(e.4p)&&e.4p({2N:i,8s:c>h?"1p":"2w",x:o,y:a})),"J"==$.13(e.4V)&&e.4V({2N:i,8t:t,x:o,y:a})}l=d=1t}K o,a,h,r,d,u=$(I),l=(25 71).72(),p=t.3v.5S?t.3v.5S[0]:t,c=p.3h,f=p.3i,m=p.3h,v=p.3i,w=!0,g=!0;e.2E&&t.ba(),"J"==$.13(e.42)&&e.42({2N:i}),u.1j("L-4m",s).1j("L-5R",n),u.1C(3y.4l.4m,s).bb(3y.4l.5R,n)}K e=$.1i({8q:15,8r:75,73:10,8u:!1,bc:!1,8p:bd,2E:!1,2r:!1,42:!1,1N:!1,4V:!1,4p:!1},1R[1]||{});$(i).1j("L-5Q",t),$(i).1C(3y.4l.5Q,t)},4o:J(i){K t={42:0,1N:0,4V:0};$.1m(t,J(e){t[e]=$(i).1j("L-14"+e),t[e]&&$(i).4o(3y.4l["14"+e],t[e]).bf("L-14"+e)})}},1y={1P:J(i,t,e){"J"==$.13(t)&&(e=t,t={}),t=$.1i({43:!1,13:!1,bg:bh,3j:!0},t||{});K s=1y.1I.1P(i),n=t.13||4P(i).13,o={13:n,4q:e};W(!s){K a;(a=1y.3N.1P(i))&&a.1f&&(s=a,1y.1I.29(i,a.1f,a.1j))}W(s)e&&e($.1i({},s.1f),s.1j);1Z 2O(t.43&&1y.1S.2m(i),n){1K"1x":K h=25 6D;h.3X=J(){h.3X=J(){},s={1f:{M:h.M,N:h.N}},o.1x=h,t.3j?6C(h,J(n,a){o.3j=n,o.4W=a,1y.1I.29(i,s.1f,o),t.43&&1y.1S.2m(i),e&&e(s.1f,o)}):(1y.1I.29(i,s.1f,o),t.43&&1y.1S.2m(i),e&&e(s.1f,o))},h.3u=i,t.43&&1y.1S.29(i,{1x:h,13:n});2Y;1K"1W":K r=4P(i).3z,d="4X"+(1d.2Z&&"4Y:"==1d.2Z.4Z?"s":"")+":",u=$.8v(d+"//1W.3k/4Q/8w.8x?1B="+d+"//1W.3k/"+r+"&4q=?",$.X(J(s){K n={1f:{M:s.M,N:s.N}};1y.1I.29(i,n.1f,o),t.43&&1y.1S.2m(i),e&&e(n.1f,o)},I));t.43&&1y.1S.29(i,{5T:u,13:n})}}};1y.74=J(){T I.1F.2L(I,k.2q(1R))},$.1i(1y.74.3e,{1F:J(){I.1I=[]},1P:J(i){23(K t=1t,e=0;I.1I.1u>e;e++)I.1I[e]&&I.1I[e].1B==i&&(t=I.1I[e]);T t},29:J(i,t,e){I.1T(i),I.1I.2n({1B:i,1f:t,1j:e})},1T:J(i){23(K t=0;I.1I.1u>t;t++)I.1I[t]&&I.1I[t].1B==i&&4r I.1I[t]},bi:J(i){K t=1P(i.1B);t?$.1i(t,i):I.1I.2n(i)}}),1y.1I=25 1y.74,1y.4h=J(){T I.1F.2L(I,k.2q(1R))},$.1i(1y.4h.3e,{1F:J(){I.1I=[]},29:J(i,t){I.2m(i),I.1I.2n({1B:i,1j:t})},1P:J(i){23(K t=1t,e=0;I.1I.1u>e;e++)I.1I[e]&&I.1I[e].1B==i&&(t=I.1I[e]);T t},2m:J(i){23(K t=I.1I,e=0;t.1u>e;e++)W(t[e]&&t[e].1B==i&&t[e].1j){K s=t[e].1j;2O(s.13){1K"1x":s.1x&&s.1x.3X&&(s.1x.3X=J(){});2Y;1K"1W":s.5T&&(s.5T.bj(),s.5T=1t)}4r t[e]}}}),1y.1S=25 1y.4h,1y.40=J(i,t,e){W("J"==$.13(t)&&(e=t,t={}),t=$.1i({3j:!0,76:!1},t||{}),!t.76||!1y.3N.1P(i)){K s;W((s=1y.3N.1P(i))&&s.1f)T"J"==$.13(e)&&e($.1i({},s.1f),s.1j),2M 0;K n={1B:i,1j:{13:"1x"}},o=25 6D;n.1j.1x=o,o.3X=J(){o.3X=J(){},n.1f={M:o.M,N:o.N},t.3j?6C(o,J(i,t){$.1i(n.1j,{3j:i,4W:t}),"J"==$.13(e)&&e(n.1f,n.1j)}):"J"==$.13(e)&&e(n.1f,n.1j)},1y.3N.1I.1U(n),o.3u=i}},1y.3N={1P:J(i){T 1y.3N.1I.1P(i)},8y:J(i){K t=I.1P(i);T t&&t.1f}},1y.3N.1I=J(){J i(i){23(K t=1t,s=0,n=e.1u;n>s;s++)e[s]&&e[s].1B&&e[s].1B==i&&(t=e[s]);T t}J t(i){e.2n(i)}K e=[];T{1P:i,1U:t}}();K B=J(){J i(i,s,n){i=i||{},n=n||{},i.44=i.44||(j.3Y[D.4s]?D.4s:"2l"),1h.1q&&7>1h.1q&&(i.44="87");K o=i.44?$.1i({},j.3Y[i.44]||j.3Y[D.4s]):{},a=3G(e,o);s&&a.5K[s]&&(a=3G(a.5K[s],a),4r a.5K);K h=3G(a,i);W(2f.2X?h.U="14":"14"==h.U&&(h.U="14"!=a.U?a.U:"14"!=e.U?e.U:"14"!=t.U?t.U:"2i"),h.2s||(h.2x?"5U"==$.13(h.2x)?h.2s="2D":$.13("4t"==h.2x)&&(h.2s="x"==h.2x?"N":"y"==h.2x?"M":"3c"==h.2x?"2D":"3c"):h.2s="3c"),h.2s?"5U"==$.13(h.2s)&&(h.2s="3c"):h.2s="2D","14"==h.U&&(h.2s="3c"),h.3d&&(h.3d="4t"==$.13(h.3d)?3G(a.3d||e.3d||t.3d,{13:h.3d}):3G(t.3d,h.3d)),!h.1z||2f.2X&&!h.5G?(h.1z={},$.1m(t.1z,J(i,t){$.1m(h.1z[i]=$.1i({},t),J(t){h.1z[i][t]=0})})):2f.2X&&h.5G&&(h.1z=3G(h.1z,h.5G)),1h.1q&&9>1h.1q&&5D(h.1z,{1v:{1o:0,1e:0},1a:{3H:0},1d:{1o:0,1e:0},U:{1o:0,1e:0}}),("14"==h.U||1h.1q&&7>1h.1q)&&(h.1a=!1),h.5H&&"1x"!=s&&$.1i(h.5H,{1p:!1,2w:!1}),!h.1r&&"5U"!=$.13(h.1r)){K r=!1;2O(s){1K"2j":K d="4X"+(1d.2Z&&"4Y:"==1d.2Z.4Z?"s":"")+":";r=d+"//5V.2j.3k/77/"+n.3z+"/0.8z";2Y;1K"1x":1K"1W":r=!0}h.1r=r}T h}K t=j.3Y.80,e=3G(t,j.3Y.86);T{78:i}}();$.1i(4h.3e,{1F:J(i){I.46=i,I.Q=$.1i({1a:F,2t:"L-1S"},1R[1]||{}),I.Q.1a&&(I.1a=I.Q.1a),I.2A(),I.3l()},2A:J(){W($(2z.4R).V(I.1c=$("<11>").R(I.Q.2t).1e().V(I.51=$("<11>").R(I.Q.2t+"-51").V($("<11>").R(I.Q.2t+"-2F")).V($("<11>").R(I.Q.2t+"-2P")))),1h.1q&&7>1h.1q){K i=I.1c[0].3w;i.1A="79",i.4u("1s","((!!1d.28 ? 28(1d).52() + (.5 * 28(1d).N()) : 0) + \'1g\')"),i.4u("1p","((!!1d.28 ? 28(1d).5W() + (.5 * 28(1d).M()): 0) + \'1g\')")}},4v:J(i){I.1c[0].2t=I.Q.2t+" "+I.Q.2t+"-"+i},3l:J(){I.1c.1C("21",$.X(J(){I.46.1e()},I))},42:J(i){I.7a();K t=Y.12&&Y.12[Y.1b-1];I.1c.1O(1,0).47(t?t.P.Q.1z.1S.1o:0,1,i)},1O:J(i,t){K e=Y.12&&Y.12[Y.1b-1];I.1c.1O(1,0).2V(t?0:e?e.P.Q.1z.1S.bk:0).53(e.P.Q.1z.1S.1e,i)},7a:J(){K i=0,t="2k"==I.1a.1w.3m;W(I.1a){I.1a.2J();K i=I.1a.1w.1a[t?"N":"M"]}I.51.16(1g({"1k-1s":I.46.P.Q.1a?t?i*-.5:0:0,"1k-1p":I.46.P.Q.1a?t?0:.5*i:0}))}}),$.1i(6G.3e,{1F:J(i){I.Q=$.1i({2t:"L-1Y"},1R[1]||{}),I.46=i,I.2A(),1h.1q&&9>1h.1q&&$(1d).1C("1Q",$.X(J(){I.1c&&I.1c.2Q(":1M")&&I.1H()},I)),I.7b()},2A:J(){W(I.1c=$("<11>").R(I.Q.2t).V(I.2F=$("<11>").R(I.Q.2t+"-2F")),$(2z.4R).48(I.1c),1h.1q&&7>1h.1q){I.1c.16({1A:"79"});K i=I.1c[0].3w;i.4u("1s","((!!1d.28 ? 28(1d).52() : 0) + \'1g\')"),i.4u("1p","((!!1d.28 ? 28(1d).5W() : 0) + \'1g\')")}I.1c.1e(),I.1c.1C("21",$.X(J(){K i=I.46.P;W(i){K t=i.Q;W(t.1Y&&!t.1Y.2h||"14"==t.U)T}I.46.1e()},I)),I.1c.1C("2l:5M",J(i){i.2r()})},4v:J(i){I.1c[0].2t=I.Q.2t+" "+I.Q.2t+"-"+i},bl:J(i){I.Q=i,I.7b()},7b:J(){I.1H()},1o:J(i){I.1H(),I.1c.1O(1,0);K t=Y.12&&Y.12[Y.1b-1];T I.4w(1,t?t.P.Q.1z.1d.1o:0,i),I},1e:J(i){K t=Y.12&&Y.12[Y.1b-1];T I.1c.1O(1,0).53(t?t.P.Q.1z.1d.1e||0:0,"8A",i),I},4w:J(i,t,e){I.1c.47(t||0,i,"8A",e)},8B:J(){K i={};T $.1m(["M","N"],J(t,e){K s=e.5z(0,1).8j()+e.5z(1),n=2z.4S;i[e]=(1h.1q?19.1H(n["51"+s],n["4x"+s]):1h.4k?2z.4R["4x"+s]:n["4x"+s])||0}),i},1H:J(){1h.4T&&1h.4k&&8C.18>1h.4k&&I.1c.16(1g(I.8B())),1h.1q&&9>1h.1q&&I.1c.16(1g({N:$(1d).N(),M:$(1d).M()}))}}),$.1i(6H.3e,{1F:J(){I.2G={},I.5X=0},29:J(i,t,e){W("4t"==$.13(i)&&I.2m(i),"J"==$.13(i)){23(e=t,t=i;I.2G["8D"+I.5X];)I.5X++;i="8D"+I.5X}I.2G[i]=1d.54($.X(J(){t&&t(),I.2G[i]=1t,4r I.2G[i]},I),e)},1P:J(i){T I.2G[i]},2m:J(i){i||($.1m(I.2G,$.X(J(i,t){1d.56(t),I.2G[i]=1t,4r I.2G[i]},I)),I.2G={}),I.2G[i]&&(1d.56(I.2G[i]),I.2G[i]=1t,4r I.2G[i])}}),$.1i(6I.3e,{1F:J(){I.7c={}},29:J(i,t){I.7c[i]=t},1P:J(i){T I.7c[i]||!1}});K D={4s:"2l",1F:J(){I.3O=[],I.3O.7d=$({}),I.3O.8E=$({}),I.2K=25 6I,I.3P=25 6H,I.2A(),I.3l(),I.4v(I.4s)},2A:J(){W(I.1Y=25 6G(I),$(2z.4R).48(I.1c=$("<11>").R("L-1d").V(I.3n=$("<11>").R("L-3n").1e().V(I.2a=$("<11>").R("L-2a").V(I.1N=$("<11>").R("L-2a-1N"))).V(I.1a=$("<11>").R("L-1a")).V(I.4y=$("<11>").R("L-14-49")).V(I.1V=$("<11>").R("L-14-17")))),I.1S=25 4h(I),1h.1q&&7>1h.1q){K i=I.1c[0].3w;i.1A="79",i.4u("1s","((!!1d.28 ? 28(1d).52() : 0) + \'1g\')"),i.4u("1p","((!!1d.28 ? 28(1d).5W() : 0) + \'1g\')")}W(1h.1q){9>1h.1q&&I.1c.R("L-bm");23(K t=6;9>=t;t++)t>1h.1q&&I.1c.R("L-bn"+t)}2f.14&&I.1c.R("L-14-22"),2f.2X&&I.1c.R("L-bo-14-22"),I.1c.1j("8F-8G",I.1c[0].2t),F.1F(I.1c),Y.1F(I.1c),G.1F(I.1c),E.1F(),I.1c.1e()},4v:J(i,t){t=t||{},i&&(t.44=i),I.1Y.4v(i);K e=I.1c.1j("8F-8G");T I.1c[0].2t=e+" L-1d-"+i,I},7e:J(i){j.3Y[i]&&(I.4s=i)},3l:J(){$(2z.4S).3A(".2l[57]","21",J(i,t){i.2E(),i.2r();K t=i.bp;Y.3Q({x:i.3h,y:i.3i}),5Y.1o(t)}),$(2z.4S).1C("21",J(i){Y.3Q({x:i.3h,y:i.3i})}),I.1c.3A(".L-U-2o, .L-2b-2o","21",$.X(J(i){i.2E()},I)),$(2z.4S).3A(".L-1Y, .L-U, .L-1n, .L-3n","21",$.X(J(i){K t=D.P;W(t){K e=t.Q;W(e.1Y&&!e.1Y.2h||"14"==e.U)T}i.2r(),i.2E(),D.1e()},I)),I.1c.1C("2l:5M",J(i){i.2r()})},2g:J(i,t){K e=$.1i({},1R[2]||{});I.4z(),I.2u=!0;K s=2>i.1u;W($.1m(i,J(i,t){T t.Q.1r?2M 0:(s=!0,!1)}),s&&$.1m(i,J(i,t){t.Q.1r=!1,t.Q.1a=!1}),2>i.1u){K n=i[0].Q.3Z;n&&"2h"!=n&&(i[0].Q.3Z="2h")}I.4A=i,F.2g(i),G.2g(i),Y.2g(i),E.22={5I:!0},t&&I.2R(t,$.X(J(){I.2u&&(I.2u=!1,e.4q&&e.4q())},I))},8H:J(){W(!I.2K.1P("58")){K i=$("5Z, 7f, bq"),t=[];i.1m(J(i,e){K s;$(e).2Q("7f, 5Z")&&(s=$(e).2B(\'7g[br="8I"]\')[0])&&s.8J&&"8K"==s.8J.6M()||$(e).2Q("[8I=\'8K\']")||t.2n({1c:e,31:$(e).16("31")})}),$.1m(t,J(i,t){$(t.1c).16({31:"8L"})}),I.2K.29("58",t)}},8M:J(){K i=I.2K.1P("58");i&&i.1u>0&&$.1m(i,J(i,t){$(t.1c).16({31:t.31})}),I.2K.29("58",1t)},bs:J(){K i=I.2K.1P("58");i&&$.1m(i,$.X(J(i,t){K e;(e=$(t.1c).59(".bt-1v")[0])&&e==I.1v[0]&&$(t.1c).16({31:t.31})},I))},1o:J(){K i=J(){};T J(t){K e=Y.12&&Y.12[Y.1b-1],s=I.3O.7d,n=e&&e.P.Q.1z.1d.1e||0;W(I.2K.1P("1M"))T"J"==$.13(t)&&t(),2M 0;I.2K.29("1M",!0),s.3R([]),I.8H(),e&&"J"==$.13(e.P.Q.8N)&&e.P.Q.8N.2q(j);K o=2;s.3R($.X(J(i){e.P.Q.1Y&&I.1Y.1o($.X(J(){1>--o&&i()},I)),I.3P.29("1o-1d",$.X(J(){I.8O(J(){1>--o&&i()})},I),n>1?19.24(.5*n,50):1)},I)),i(),s.3R($.X(J(i){E.4B(),i()},I)),s.3R($.X(J(i){F.8P(),i()},I)),"J"==$.13(t)&&s.3R($.X(J(i){t(),i()}),I)}}(),8O:J(i){Y.1Q(),I.1c.1o(),I.3n.1O(!0);K t=Y.12&&Y.12[Y.1b-1];T I.4w(1,t.P.Q.1z.1d.1o,$.X(J(){i&&i()},I)),I},1e:J(){K i=Y.12&&Y.12[Y.1b-1],t=I.3O.7d;t.3R([]),I.7h(),I.1S.1O(1t,!0);K e=1;t.3R($.X(J(t){K s=i.P.Q.1z.1d.1e||0;I.3n.1O(!0,!0).53(s,"60",$.X(J(){I.1c.1e(),Y.8Q(),1>--e&&(I.7i(),t())},I)),i.P.Q.1Y&&(e++,I.3P.29("1e-1Y",$.X(J(){I.1Y.1e($.X(J(){1>--e&&(I.7i(),t())},I))},I),s>1?19.24(.5*s,bu):1))},I))},7i:J(){I.2K.29("1M",!1),I.8M(),E.4a(),F.7j();K i=Y.12&&Y.12[Y.1b-1];i&&"J"==$.13(i.P.Q.8R)&&i.P.Q.8R.2q(j),I.3P.2m(),I.4z()},4z:J(){K i=$.1i({7k:!1,61:!1},1R[0]||{});"J"==$.13(i.61)&&i.61.2q(j),I.7h(),I.3P.2m(),I.1A=-1,I.4A=1t,F.2m(),Y.8S(),I.bv=!1,I.2u=!1,D.2K.29("5a",!1),I.5a&&($(I.5a).1O().1T(),I.5a=1t),I.7l&&($(I.7l).1O().1T(),I.7l=1t),"J"==$.13(i.7k)&&i.7k.2q(j)},4w:J(i,t,e){I.3n.1O(!0,!0).47(t||0,i||1,"7m",e)},7h:J(){I.3O.8E.3R([]),I.3n.1O(!0)},2R:J(i,t){i&&I.1A!=i&&(I.3P.2m("5a"),I.1b,I.1A=i,I.P=I.4A[i-1],I.4v(I.P.Q&&I.P.Q.44,I.P.Q),Y.2R(i,t),G.2R(i))}};"62"==$.13(1h.3M)&&3>1h.3M&&$.1m(D,J(i,t){"J"==$.13(t)&&(D[i]=J(){T I})});K E={22:!1,5b:{1p:37,2w:39,5I:27},4B:J(){I.7n()},4a:J(){I.22=!1},1F:J(){I.7n(),$(2z).bw($.X(I.8T,I)).bx($.X(I.8U,I)),E.4a()},7n:J(){K i=Y.12&&Y.12[Y.1b-1];I.22=i&&i.P.Q.5H},8T:J(i){W(I.22&&D.1c.2Q(":1M")){K t=I.7o(i.5b);W(t&&(!t||!I.22||I.22[t]))2O(i.2r(),i.2E(),t){1K"1p":Y.1J();2Y;1K"2w":Y.1G()}}},8U:J(i){W(I.22&&D.4A){K t=I.7o(i.5b);W(t&&(!t||!I.22||I.22[t]))2O(t){1K"5I":D.1e()}}},7o:J(i){23(K t 4N I.5b)W(I.5b[t]==i)T t;T 1t}},Y={1F:J(i){i&&(I.1c=i,I.1b=-1,I.2S=[],I.32=0,I.33=[],I.4C=[],I.3O=[],I.3O.2c=$({}),I.2a=I.1c.2B(".L-2a:3B"),I.1N=I.1c.2B(".L-2a-1N:3B"),I.8V=I.1c.2B(".L-8V:3B"),I.63(5v()),I.5c(),I.3l())},63:J(){K i={3a:"3W",3W:"3a"};T J(t){I.2a.R("L-2a-"+t).2H("L-2a-"+i[t])}}(),3l:J(){$(1d).1C("1Q",$.X(J(){D.2K.1P("1M")&&(I.1Q(),I.7p())},I)),$(1d).1C("8W",$.X(J(){I.63(5v()),D.2K.1P("1M")&&(I.1Q(),I.7p())},I)),I.2a.3A(".L-1l","21",$.X(J(i){i.2E(),I.3Q({x:i.3h,y:i.3i});K t=$(i.2N).59(".L-1l").1j("1l");I[t]()},I))},by:J(){3y.1C(I.2a,{42:$.X(J(){W(!(I.12&&1>=I.12.1u)){K i=4U(I.1N.16("1p"));I.1N.1j("L-8X-1p",i)}},I),1N:$.X(J(i){W(!(I.12&&1>=I.12.1u)){K t=i.x,e=.4*I.26.M;1==I.1b&&t>e||I.1b==I.12.1u&&-1*e>t||I.1N.16({1p:I.1N.1j("L-8X-1p")+t+"1g"})}},I),4p:$.X(J(i){I.12&&1>=I.12.1u||I["2w"==i.8s?"1J":"1G"]()},I),4V:$.X(J(i){I.12&&1>=I.12.1u||i.8t||(i.x&&19.4n(i.x)>.5*I.26.M?I[i.x>0?"1J":"1G"]():I.3o(I.1b),I.bz=1t)},I),8u:!0,2E:!0,2r:!0})},8S:J(){3y.4o(I.2a)},2g:J(i){I.12&&($.1m(I.12,J(i,t){t.1T()}),I.12=1t,I.7q=!1,I.33=[],I.4C=[]),I.32=0,I.1N.7r("3w"),I.12=[],5d=!1,64=!1,$.1m(i,$.X(J(i,t){5d=5d||"14"==t.Q.U,I.12.2n(25 6J(t,i+1)),!64&&t.17&&(64=!0)},I)),I[(5d?"1C":"4o")+"3y"](),I.2a[(5d?"1U":"1T")+"3S"]("L-2a-2T-14-U"),I.65=!64,I.5c()},8Y:J(i){1h.1q&&9>1h.1q?(I.3Q({x:i.3h,y:i.3i}),I.1A()):I.66=54($.X(J(){I.3Q({x:i.3h,y:i.3i}),I.1A()},I),30)},8Z:J(){I.66&&(56(I.66),I.66=1t)},90:J(){2f.2X||I.5e||I.1c.1C("5P",I.5e=$.X(I.8Y,I))},91:J(){!2f.2X&&I.5e&&(I.1c.4o("5P",I.5e),I.5e=1t,I.8Z())},7p:J(){I.3o(I.1b,1t,!0)},3o:J(i,t,e){I.7q||(e=!0,I.7q=!0),I.5c();K s=I.12[i-1];W("14"==s.P.Q.U){K n=.5*I.1L.M-.5*I.26.M;n-=(i-1)*I.26.M;K o=e?0:s.P.Q.1z.1v.1N,a=4U(I.1N.16("1p")),h=19.4n(a-n);W(I.26.M>h){K r=h/I.26.M;o=19.4D(o*r)}$.1m(I.12,J(i,t){1d.67&&t.3p&&t.5f?(t.3p.bA(),t.92=1t,t.4E(),t.7s()):t.7t&&t.5f&&(t.7t.4Q("bB"),t.92=1t,t.4E(),t.7u())}),I.1N.1O().68({1p:n+"1g"},{7v:e?0:s.P.Q.1z.1v.1N,3I:"60",93:J(){t&&t()}})}},2R:J(i,t){I.94(),I.1b=i;K e=I.12[i-1],s=e.P.Q.U,n=1;"14"==s?(n++,I.3o(i,J(){"J"==$.13(e.P.Q.69)&&1>--n&&e.P.Q.69.2q(j,i)})):I.1N.V(e.1n),I.2a.2B(".L-1n").2H("L-1n-4b"),e.1n.R("L-1n-4b"),F.2R(i),e.2g($.X(J(){!e||e&&!e.P||I.1o(i,J(){e&&e.P&&(t&&t(),"J"==$.13(e.P.Q.69)&&1>--n&&e.P.Q.69.2q(j,i))})},I)),I.95()},95:J(){W(I.12&&I.12.1u>1){K i=I.5g(),t=i.1J,e=i.1G,s={1J:t!=I.1b&&I.12[t-1],1G:e!=I.1b&&I.12[e-1]};1==I.1b&&(s.1J=1t),I.1b==I.12.1u&&(s.1G=1t);K n,o=(n=I.12[I.1b-1])&&n.P&&"14"==n.P.Q.U;W(o){23(K a=5,h=19.4D(I.1b/a)*a+1,r=0;a>r;r++){K d=h+r,u=I.12[d-1],l=u&&u.P;l&&-1>=$.6a(d,I.4C)&&(I.4C.2n(d),d!=I.1b&&u.2g(1t,!0))}K p=h-1,c=h+a;$.1m([p-1,p,c,c+1],$.X(J(i,t){K e=I.12[t-1],s=e&&e.P;s&&-1>=$.6a(t,I.4C)&&(I.4C.2n(t),t!=I.1b&&e.2g(1t,!0))},I))}1Z $.1m(s,$.X(J(i,t){K e=t&&t.P;e&&"1x"==e.13&&e.Q.40&&1y.40(e.1B,{76:!0})},I))}},5g:J(){W(!I.12)T{};K i=I.1b,t=I.12.1u,e=1>=i?t:i-1,s=i>=t?1:i+1;T{1J:e,1G:s}},96:J(){K i=Y.12&&Y.12[Y.1b-1];T i&&i.P.Q.3b&&I.12&&I.12.1u>1||1!=I.1b},1J:J(i){K t=I.96();W(i||t)D.2R(I.5g().1J);1Z{K e;!t&&(e=Y.12&&Y.12[Y.1b-1])&&"14"==e.P.Q.U&&I.3o(I.1b)}},98:J(){K i=Y.12&&Y.12[Y.1b-1];T i&&i.P.Q.3b&&I.12&&I.12.1u>1||I.12&&I.12.1u>1&&1!=I.5g().1G},1G:J(i){K t=I.98();W(i||t)D.2R(I.5g().1G);1Z{K e;!t&&(e=Y.12&&Y.12[Y.1b-1])&&"14"==e.P.Q.U&&I.3o(I.1b)}},99:J(i){I.9a(i)||I.2S.2n(i)},9b:J(i){I.2S=$.9c(I.2S,J(t){T t!=i})},9a:J(i){T $.6a(i,I.2S)>-1},3Q:J(i){i.y-=$(1d).52(),i.x-=$(1d).5W(),F.1M()&&"2I"==F.1w.3m&&(i.x-=F.1w.1a.M);K t={y:19.24(19.1H(i.y/I.1L.N,0),1),x:19.24(19.1H(i.x/I.1L.M,0),1)},e=20,s={x:"M",y:"N"},n={};$.1m("x y".3F(" "),$.X(J(i,o){n[o]=19.24(19.1H(e/I.1L[s[o]],0),1),t[o]*=1+2*n[o],t[o]-=n[o],t[o]=19.24(19.1H(t[o],0),1)},I)),I.9d(t)},9d:J(i){I.7w=i},1A:J(){1>I.33.1u||$.1m(I.33,J(i,t){t.1A()})},1Q:J(){1h.1q&&7>1h.1q||F.1Q(),I.5c(),I.2a.16(1g(I.1L)),$.1m(I.12,J(i,t){t.1Q()}),I.12[0]&&"14"==I.12[0].P.Q.U&&($.1m(I.12,J(i,t){t.1n.16({M:Y.6b+"1g"})}),I.1N.16({M:Y.6b*I.12.1u+"1g"}))},5c:J(){K i=z.38(),t=I.12&&I.12[0].P.Q.U;W(F.1M()){F.2J();K e="2k"==F.1w.3m,s=e?"N":"M",n=F.1w.1a[s],o={1p:e?0:n};i[s]-=n,I.2a.16(1g(o))}1Z I.2a.7r("3w");G.1M()&&(G.2J(),i.N-=G.1w.49.N+G.1w.17.N,I.65&&(i.N+=G.1w.17.N));K a=$.1i({},i);2O(I.32=0,t){1K"2i":$.1m(I.12,$.X(J(i,t){K e=t.2h;I.12.1u>1&&(t.7x&&(e=e.1U(t.7x)),t.4F&&(e=e.1U(t.4F)));K s=0;t.6c(J(){$.1m(e,J(i,t){s=19.1H(s,$(t).bC(!0))})}),I.32=19.1H(I.32,s)||0},I)),a.M-=2*(I.32||0);2Y;1K"14":K h=5v();I.12&&I.12[0].1n;K r=I.1N.2C("3w");I.1N.7r("3w");K d,u;I.2a.16(1g({N:a.N})),$.1m(I.12,$.X(J(t,e){K s=e.1n;W(s.1j("3a"))d=19.4D(i.M*s.1j("3a")),u=19.4D(i.M*s.1j("3W"));1Z{K n=e.P.Q.14.M;s.1j("3a",19.1H(n.3a,.5)).1j("3W",19.1H(n.3W,.5))}},I)),I.63(h),I.6b="3a"==h?d:u,$.1i(a,{M:I.6b||0}),I.1N.2C("3w",r)}I.1L=i,I.26=a,I.bD=1s},bE:J(){T{1J:I.1b-1>0,1G:I.1b+1<=I.12.1u}},1o:J(i,t){K e=[];$.1m(I.12,J(t,s){s.1b!=i&&e.2n(s)});K s=e.1u+1,n=I.12[I.1b-1];F[n.P.Q.1a?"1o":"1e"](),G["14"==n.P.Q.U?"1o":"1e"](),("14"!=n.P.Q.U||"1x"!=n.P.13)&&I.1Q();K o=n.P.Q.1z.1v.5F;$.1m(e,$.X(J(e,n){n.1e($.X(J(){o?t&&1>=s--&&t():2>=s--&&I.12[i-1].1o(t)},I))},I)),o&&I.12[i-1].1o(J(){t&&1>=s--&&t()})},8Q:J(){$.1m(I.2S,$.X(J(i,t){K e=I.12[t-1];e.4E(),e.1e()},I)),F.1e(),I.3Q({x:0,y:0})},bF:J(i){$.1m(I.12,$.X(J(t,e){e.1A!=i&&e.1e()},I))},9e:J(i){I.9f(i)||(I.33.2n(I.12[i-1]),1==I.33.1u&&I.90())},bG:J(){I.33=[]},7y:J(i){I.33=$.9c(I.33,J(t){T t.1b!=i}),1>I.33.1u&&I.91()},9f:J(i){K t=!1;T $.1m(I.33,J(e,s){T s.1b==i?(t=!0,!1):2M 0}),t},2W:J(){K i=I.1L;T D.bH&&(i.M-=bI),i},94:J(){$.1m(I.12,$.X(J(i,t){t.7z()},I))}};$.1i(6J.3e,{1F:J(i,t){I.P=i,I.1b=t,I.1L={},I.2A()},1T:J(){I.6d(),I.5h&&(Y.7y(I.1b),I.5h=!1),I.4E(),I.4z(),I.1n.1T(),I.1n=1t,I.U&&(I.U.1T(),I.U=1t),I.P=1t,I.1L={},I.7z()},2A:J(){K i=I.P.Q.U,t=D.4A.1u;W(Y.1N.V(I.1n=$("<11>").R("L-1n").V(I.2b=$("<11>").R("L-2b").R("L-2b-2T-U-"+i).R("L-2b-2T-13-"+I.P.13))),I.2b.V(I.4G=$("<11>").R("L-2b-2o").V(I.7A=$("<11>").R("L-2b-3q").V(I.6e=$("<11>").R("L-2b-9g-3L").V(I.3r=$("<11>").R("L-2b-1D"))))),"1x"==I.P.13&&"14"!=i&&(I.3C=$("<11>").R("L-7B-1x")),"14"==i)I.1n.R("L-1n-14").1o(),"1x"==I.P.13&&"2h"==I.P.Q.3Z&&(I.1n.R("L-1n-2U-2h"),I.3r.1C("21",J(i){i.2r(),i.2E(),D.1e()}));1Z{I.1n.1o();K e=I.P.Q.3Z;W("1x"==I.P.13&&("1G"==e&&(I.P.Q.3b||!I.P.Q.3b&&I.1b!=D.4A.1u)||"2h"==e)&&I.1n.R("L-1n-2U-"+e.6M()),"2i"==i?I.1n.48(I.U=$("<11>").R("L-U L-U-2i")):I.1n.V(I.U=$("<11>").R("L-U L-U-34")),I.4G.1C("21",$.X(J(i){i.2N==I.4G[0]&&I.P.Q.1Y&&I.P.Q.1Y.2h&&D.1e()},I)),"2i"==I.P.Q.U?I.U.V(I.2p=$("<11>").R("L-U-1D-2i")):(I.U.V(I.7C=$("<11>").R("L-U-2o").V(I.6f=$("<11>").R("L-U-3q").V(I.7D=$("<11>").R("L-U-9g-3L").V(I.9h=$("<11>").R("L-U-bJ").V(I.2p=$("<11>").R("L-U-1D")))))),I.3C&&I.2p.V(I.3C.6g())),t>1&&(I.2p.V(I.5i=$("<11>").R("L-1l L-1l-1G").V(I.4F=$("<11>").R("L-1l-1X").V($("<11>").R("L-1l-1X-2P"))).1j("1l","1G")),I.1b!=t||I.P.Q.3b||(I.5i.R("L-1l-5j"),I.4F.R("L-1l-1X-5j")),I.2p.V(I.4c=$("<11>").R("L-1l L-1l-1J").V(I.6h=$("<11>").R("L-1l-1X").V($("<11>").R("L-1l-1X-2P"))).1j("1l","1J")),1!=I.1b||I.P.Q.3b||(I.4c.R("L-1l-5j"),I.6h.R("L-1l-1X-5j"))),I.3C&&"34"==I.P.Q.U&&I.2p.2B(".L-1l").48(I.3C.6g()),I.1n.R("L-35-17"),(I.P.17||"34"==I.P.Q.U&&!I.P.17)&&(I["34"==I.P.Q.U?"2p":"1n"].V(I.1E=$("<11>").R("L-1E L-1E-"+I.P.Q.U).V(I.bK=$("<11>").R("L-1E-2F")).V(I.6i=$("<11>").R("L-1E-3q"))),I.1E.1C("21",J(i){i.2E()})),I.P.17&&(I.1n.2H("L-35-17").R("L-2T-17"),I.6i.V(I.17=$("<11>").R("L-17").6j(I.P.17))),t>1&&I.P.Q.1A){K s=I.1b+" / "+t;I.1n.R("L-2T-1A");K i=I.P.Q.U;I["34"==i?"6i":"2p"]["34"==i?"48":"V"](I.7x=$("<11>").R("L-1A").V($("<11>").R("L-1A-2F")).V($("<4d>").R("L-1A-7E").6j(s)))}I.2p.V(I.2h=$("<11>").R("L-2h").1C("21",J(){D.1e()}).V($("<4d>").R("L-2h-2F")).V($("<4d>").R("L-2h-2P"))),"1x"==I.P.13&&"2h"==I.P.Q.3Z&&I["2i"==I.P.Q.U?"3r":"6f"].1C("21",J(i){i.2r(),i.2E(),D.1e()}),I.1n.1e()}},7F:J(i){W(!I.P.17)T 0;"2i"==I.P.Q.U&&(i=19.24(i,Y.26.M));K t,e=I.1E.16("M");T I.1E.16({M:i+"1g"}),t=4U(I.1E.16("N")),I.1E.16({M:e}),t},6c:J(i,t){K e=[],s=D.1c.1U(D.3n).1U(I.1n).1U(I.U);t&&(s=s.1U(t)),$.1m(s,J(i,t){e.2n({1M:$(t).2Q(":1M"),1c:$(t).1o()})}),i(),$.1m(e,J(i,t){t.1M||t.1c.1e()})},4e:J(){I.2J();K i=I.1L.1H,t=I.P.Q.U,e=I.7G,s=I.9i,n=I.6k,o=3J.3K(i,{2s:e,U:t,3L:n}),a=$.1i({},o);W(n&&(a=3J.3K(a,{2W:o,U:t}),o.M+=2*n,o.N+=2*n),s.2k||s.2I){K h=$.1i({},Y.26);n&&(h.M-=2*n,h.N-=2*n),h={M:19.1H(h.M-2*s.2k,0),N:19.1H(h.N-2*s.2I,0)},a=3J.3K(a,{2s:e,2W:h,U:t})}K r={17:!0},d=!1;W("2i"==t){K s={N:o.N-a.N,M:o.M-a.M},u=$.1i({},a);I.17&&I.1n.4f("L-35-17");K l;W(I.17){l=I.17,I.1E.2H("L-35-17");K p=I.1n.4f("L-35-17");I.1n.2H("L-35-17");K c=I.1n.4f("L-2T-17");I.1n.R("L-2T-17")}D.1c.16({31:"1M"}),I.6c($.X(J(){23(K i=0,o=2;o>i;){r.N=I.7F(a.M);K h=.5*(Y.26.N-2*n-(s.2I?2*s.2I:0)-a.N);r.N>h&&(a=3J.3K(a,{2W:$.1i({},{M:a.M,N:19.1H(a.N-r.N,0)}),2s:e,U:t})),i++}r.N=I.7F(a.M);K d=z.38();(6l>=d.N&&6m>=d.M||6l>=d.M&&6m>=d.N||r.N>=.5*a.N||r.N>=.6*a.M)&&(r.17=!1,r.N=0,a=u)},I),l),D.1c.16({31:"1M"}),p&&I.1n.R("L-35-17"),c&&I.1n.R("L-2T-17");K f={N:o.N-a.N,M:o.M-a.M};o.N+=s.N-f.N,o.M+=s.M-f.M,a.N!=u.N&&(d=!0)}1Z r.N=0;K m={M:a.M+2*n,N:a.N+2*n};r.N&&(o.N+=r.N),"34"==t&&(r.N=0);K v={2o:{1f:o},3q:{1f:m},1D:{1f:a,2W:m,1k:{1s:.5*(o.N-m.N)-.5*r.N,1p:.5*(o.M-m.M)}},1v:{1f:a},1E:r};"2i"==t&&(v.1E.1s=v.1D.1k.1s,r.M=19.24(a.M,Y.26.M));K h=$.1i({},Y.26);T"2i"==t&&(v.2b={1f:{M:Y.26.M},1A:{1p:.5*(Y.1L.M-Y.26.M)}}),v.U={2o:{1f:{M:19.24(o.M,h.M),N:19.24(o.N,h.N)}},3q:{1f:m},1D:{1f:{M:19.24(v.1D.1f.M,h.M-2*n),N:19.24(v.1D.1f.N,h.N-2*n)},1k:{1s:v.1D.1k.1s+n,1p:v.1D.1k.1p+n}}},v},2J:J(){K i=$.1i({},I.1L.1H),t=3x(I.6e.16("3L-1s-M"));I.6k=t,t&&(i.M-=2*t,i.N-=2*t);K e=I.P.Q.2s;"bL"==e?e=i.M>i.N?"N":i.N>i.M?"M":"2D":e||(e="2D"),I.7G=e;K s={2D:"3c",M:"y",N:"x",3c:"2D"},n=I.P.Q.84[s[I.7G]];I.9i=n},7H:J(){I.5k&&(56(I.5k),I.5k=1t)},7z:J(){I.5k&&I.2u&&!I.3T&&(I.7H(),I.2u=!1)},2g:J(i,t){T I.3T||I.2u?(I.3T&&I.6n(i),2M 0):(t||1y.1I.1P(I.P.1B)||1y.3N.8y(I.P.1B)||D.1S.42(),I.2u=!0,I.5k=54($.X(J(){2O(I.7H(),I.P.13){1K"1x":K e=I.P.Q.U;1y.1P(I.P.1B,{3j:"14"!=e},$.X(J(s,n){W(I.P){I.1L.9j=s,I.1L.1H=s,I.3T=!0,I.2u=!1,I.2J();K o=I.4e();I.1L.2o=o.2o.1f,I.1L.1v=o.1v.1f,I.1v=$("<5V>").2C({3u:I.P.1B}).R("L-1v L-1v-1x"),I.3r.V(I.1v),"14"==e&&I.1v.1C("9k",J(i){i.2r()});K a;I.3r.V(a=$("<11>").R("L-1v-1x-1Y")),I.3C&&a.V(I.3C.6g());K h;W("2i"==I.P.Q.U&&((h=I.P.Q.3Z)&&"1G"==h||"1J-1G"==h)){K r=I.P.Q.3b;(I.1b!=Y.12.1u||r)&&I.3r.V($("<11>").R("L-2U-1l L-2U-1G").1j("1l","1G")),"1J-1G"!=h||1==I.1b&&!r||I.3r.V($("<11>").R("L-2U-1l L-2U-1J").1j("1l","1J")),I.3C&&I.3r.2B(".L-2U-1l").1m($.X(J(i,t){K e=$(t).1j("1l");$(t).48(I.3C.6g().1j("1l",e))},I)),I.1n.3A(".L-2U-1l","21",J(i){K t=$(i.2N).59(".L-2U-1l").1j("1l");Y[t]()}),I.1n.3A(".L-2U-1l","9l",$.X(J(i){K t=$(i.2N).59(".L-2U-1l").1j("1l"),e=t&&I["2y"+t+"6o"];e&&I["2y"+t+"6o"].R("L-1l-1X-4b")},I)).3A(".L-2U-1l","9m",$.X(J(i){K t=$(i.2N).1j("1l"),e=t&&I["2y"+t+"6o"];e&&I["2y"+t+"6o"].2H("L-1l-1X-4b")},I))}I.1n.2B(".L-7B-1x").1m($.X(J(i,t){K e=$("<5V>").R("L-7B-1x").2C({3u:I.P.1B}).16({bM:0}),s=$(t).1j("1l");W(1h.1q&&9>1h.1q){K o=3x(D.1c.16("z-7I"))||0;e.16({"z-7I":o}),$(t).bN().16({"z-7I":o}),/^(x|3c)$/.5y(I.P.Q.2x||"")&&e.1e()}n.3j&&!2f.2X&&e.1U(I.1v).1C("9k",$.X(J(i){W("14"==I.P.Q.U)T i.2r(),2M 0;K t=i.3v,e=t.bO||{};W(n.3j&&e.9n){K s=t.3h||0,o=t.3i||0,a=I.1v.51();s=19.3f(s-a.1p),o=19.3f(o-a.1s),1>n.4W&&(s*=n.4W,o*=n.4W),e.9n(n.3j,s,o)}1Z e.9o?e.9o(I.1v[0]):i.2r()},I)),s&&e.1j("1l",s),$(t).bP(e)},I)),I.6n(i,t)}},I));2Y;1K"2j":K s={M:I.P.Q.M,N:I.P.Q.N};I.P.Q.2j&&I.P.Q.2j.6R&&(I.P.3s.9p=s.M>bQ?"bR":"bS"),I.7J(s,i);2Y;1K"1W":K s={M:I.P.Q.M,N:I.P.Q.N};1y.1P(I.P.1B,$.X(J(t){W(I.P){K e=s.M,n=s.N,o=t.M,a=t.N,h=!1;(h=e&&!n||n&&!e)||e&&n?(h&&(e&&!n?s.N=e*a/o:s.M=n*o/a),s=3J.3K(t,{2W:s})):s=t,I.7J(s,i)}},I))}},I),10),2M 0)},7J:J(i,t){I.1L.9j=i,I.1L.1H=i,I.3T=!0,I.2u=!1,I.2J();K e=I.4e();I.1L.2o=e.2o.1f,I.1L.1v=e.1v.1f,I.3r.V(I.1v=$("<11>").R("L-1v L-1v-"+I.P.13)),"14"!=I.P.Q.U||"2j"!=I.P.13&&"1W"!=I.P.13||(I.1Q(),("2j"==I.P.13&&1d.67||"1W"==I.P.13&&2f.6X)&&I.1o()),I.6n(t)},6n:J(i){K t=I.P.Q.U;I.1Q(),"34"==t&&I.7D.1C("9l",$.X(I.5l,I)).1C("9m",$.X(I.6p,I)),I.U&&(2f.2X?I.2b.1C("21",$.X(J(){I.2p.2Q(":1M")||I.5l(),I.5m()},I)):I.U.3A(".L-U-3q","5P",$.X(J(){I.2p.2Q(":1M")||I.5l(),I.5m()},I)));K e;Y.12&&(e=Y.12[Y.1b-1])&&(e.P.1B==I.P.1B||"14"==e.P.Q.U)&&D.1S.1O(),i&&i()},1Q:J(){W(I.1v){K i=I.4e(),t=I.P.Q.U;I.1L.2o=i.2o.1f,I.1L.1v=i.1v.1f,I.4G.16(1g(i.2o.1f)),"34"==t&&I.7C.16(1g(i.U.2o.1f)),I.3r.1U(I.6e).16(1g(i.1D.1f));K e=0;2O("2i"==I.P.Q.U&&i.1E.17&&(e=i.1E.N),I.6e.16({"6q-5n":e+"1g"}),I.7A.16(1g({M:i.3q.1f.M,N:i.3q.1f.N+e})),i.2o.1f.M>("2i"==I.P.Q.U?i.2b.1f.M:z.38().M)?I.2b.R("L-9q-4p"):I.2b.2H("L-9q-4p"),t){1K"2i":I.17&&I.1E.16(1g({M:i.1E.M}));2Y;1K"34":I.2p.1U(I.7D).1U(I.9h).16(1g(i.U.1D.1f)),I.6f.16(1g(i.U.3q.1f));K s=0;W(I.17){K n=I.1n.4f("L-35-17"),o=I.1n.4f("L-2T-17");I.1n.2H("L-35-17"),I.1n.R("L-2T-17");K s=0;I.6c($.X(J(){s=I.1E.bT()},I),I.2p.1U(I.17));K a=z.38();(s>=.45*i.1D.1f.N||6l>=a.N&&6m>=a.M||6l>=a.M&&6m>=a.N)&&(i.1E.17=!1),n&&I.1n.R("L-35-17"),o||I.1n.2H("L-2T-17")}}W(I.17){K h=i.1E.17;I.17[h?"1o":"1e"](),I.1n[(h?"1T":"1U")+"3S"]("L-35-17"),I.1n[(h?"1U":"1T")+"3S"]("L-2T-17")}I.7A.1U(I.6f).16(1g(i.1D.1k));K r=Y.26,d=I.1L.2o;W(I.6r={y:d.N-r.N,x:d.M-r.M},I.5h=I.6r.x>0||I.6r.y>0,Y[(I.5h?"29":"1T")+"bU"](I.1b),1h.1q&&8>1h.1q&&"1x"==I.P.13&&I.1v.16(1g(i.1D.1f)),/^(1W|2j)$/.5y(I.P.13)){K u=i.1D.1f;I.3p?I.3p.bV(u.M,u.N):I.3D&&I.3D.2C(u)}}I.1A()},1A:J(){W(I.1v){K i=Y.7w,t=Y.26,e=I.1L.2o,s={1s:0,1p:0},n=I.6r;s.1s=n.y>0?0-i.y*n.y:.5*t.N-.5*e.N,s.1p=n.x>0?0-i.x*n.x:.5*t.M-.5*e.M,2f.2X&&(n.y>0&&(s.1s=0),n.x>0&&(s.1p=0),I.4G.16({1A:"bW"})),I.bX=s,I.4G.16({1s:s.1s+"1g",1p:s.1p+"1g"});K o=$.1i({},s);0>o.1s&&(o.1s=0),0>o.1p&&(o.1p=0);K a=I.P.Q.U;2O(a){1K"2i":K h=I.4e();W(I.2b.16(1g(h.2b.1f)).16(1g(h.2b.1A)),I.P.17){K r=s.1s+h.1D.1k.1s+h.1D.1f.N+I.6k;r>Y.26.N-h.1E.N&&(r=Y.26.N-h.1E.N);K d=Y.32+s.1p+h.1D.1k.1p+I.6k;Y.32>d&&(d=Y.32),d+h.1E.M>Y.32+h.2b.1f.M&&(d=Y.32),I.1E.16({1s:r+"1g",1p:d+"1g"})}2Y;1K"34":I.7C.16({1p:o.1p+"1g",1s:o.1s+"1g"})}}},bY:J(i){I.1f=i},7s:J(){K i=1h.1q&&8>1h.1q,t=I.4e(),e=t.1D.1f,s=$.1i({},I.P.Q.2j||{}),n="4X"+(1d.2Z&&"4Y:"==1d.2Z.4Z?"s":"")+":";W("14"==I.P.Q.U&&(s.5J=0),1d.67){K o;I.1v.V(I.5o=$("<11>").V(o=$("<11>")[0])),I.3p=25 67.bZ(o,{N:e.N,M:e.M,c0:I.P.3s.3z,c1:s,c2:i?{}:{c3:$.X(J(i){W(I.P.Q.2j.6R)5B{i.2N.c4(I.P.3s.9p)}5C(t){}I.1Q()},I),c5:$.X(J(i){i.1j>-1&&(I.5f=!0)},I)}})}1Z{K a=$.7g(s);I.1v.V(I.3D=$("<9r 9s 9t 9u>").2C({3u:n+"//c6.2j.3k/5Z/"+I.P.3s.3z+"?"+a,N:e.N,M:e.M,9v:0}))}},7u:J(){K i=I.4e(),t=i.1D.1f,e=$.1i({},I.P.Q.1W||{});"14"==I.P.Q.U&&(e.5J=0);K s="4X"+(1d.2Z&&"4Y:"==1d.2Z.4Z?"s":"")+":",n=q()+"1W";e.c7=n,e.4Q=1;K o=$.7g(e);I.1v.V(I.3D=$("<9r 9s 9t 9u>").2C({3u:s+"//3p.1W.3k/c8/"+I.P.3s.3z+"?"+o,3z:n,N:t.N,M:t.M,9v:0})),1d.c9&&$f(I.3D[0]).9w("9x",$.X(J(i){I.7t=$f(i).9w("ca",$.X(J(){I.5f=!0},I))},I))},9y:J(){2O(I.P.13){1K"2j":I.7s();2Y;1K"1W":I.7u()}},1o:J(i){W("14"==I.P.Q.U){W(I.9z)T i&&i(),2M 0;I.9z=!0}I.9y(),Y.99(I.1b),I.1n.1O(1,0),I.U&&(I.U.1O(1,0),I.5l(1t,!0)),I.5h&&Y.9e(I.1b),I.4w(1,19.1H(I.P.Q.1z.1v.1o,1h.1q&&9>1h.1q?0:10),$.X(J(){i&&i()},I))},9A:J(){I.P&&I.1v&&"14"!=I.P.Q.U&&I.4E()},4E:J(){W(I.5f=!1,I.3D&&(I.3D.1T(),I.3D=1t),I.3p){5B{I.3p.cb()}5C(i){}I.3p=1t}I.5o&&(I.5o.1T(),I.5o=1t),("2j"==I.P.13||"1W"==I.P.13)&&(I.1v&&I.1v.6j(""),I.5o=1t,I.3p=1t,I.3D=1t)},4z:J(i){Y.7y(I.1b),Y.9b(I.1b),I.9A(i)},1e:J(i){W("14"==I.P.Q.U)T i&&i(),2M 0;K t=19.1H(I.P.Q.1z.1v.1e||0,1h.1q&&9>1h.1q?0:10),e=I.P.Q.1z.1v.5F?"cc":"7m";I.1n.1O(1,0).53(t,e,$.X(J(){I.4z(),i&&i()},I))},4w:J(i,t,e){K s=I.P.Q.1z.1v.5F?"cd":"60";I.1n.1O(1,0).47(t||0,i,s,e)},5l:J(i,t){I.U&&(t?(I.2p.1o(),I.5m(),"J"==$.13(i)&&i()):I.2p.1O(1,0).47(t?0:I.P.Q.1z.U.1o,1,"60",$.X(J(){I.5m(),"J"==$.13(i)&&i()},I)))},6p:J(i,t){I.U&&"2i"!=I.P.Q.U&&(t?(I.2p.1e(),"J"==$.13(i)&&i()):I.2p.1O(1,0).53(t?0:I.P.Q.1z.U.1e,"7m",J(){"J"==$.13(i)&&i()}))},6d:J(){I.5p&&(56(I.5p),I.5p=1t)},5m:J(){I.6d(),I.5p=54($.X(J(){I.6p()},I),I.P.Q.1z.U.2V)},ce:J(){I.6d(),I.5p=54($.X(J(){I.6p()},I),I.P.Q.1z.U.2V)}}),$.1i(4i.3e,{1F:J(a){K b=1R[1]||{},d={};W("4t"==$.13(a))a={1B:a};1Z W(a&&1==a.88){K c=$(a);a={1c:c[0],1B:c.2C("57"),17:c.1j("2l-17"),4H:c.1j("2l-4H"),5q:c.1j("2l-5q"),13:c.1j("2l-13"),Q:c.1j("2l-Q")&&7K("({"+c.1j("2l-Q")+"})")||{}}}W(a&&(a.5q||(a.5q=5E(a.1B)),!a.13)){K d=4P(a.1B);a.3s=d,a.13=d.13}T a.3s||(a.3s=4P(a.1B)),a.Q=a&&a.Q?$.1i(!0,$.1i({},b),$.1i({},a.Q)):$.1i({},b),a.Q=B.78(a.Q,a.13,a.3s),$.1i(I,a),I}});K F={1F:J(i){I.1c=i,I.2v=[],I.1w={3m:"2k",1r:{N:0,M:0},2e:{N:0,M:0},1a:{N:0,M:0}},I.1a=I.1c.2B(".L-1a:3B"),I.2A(),I.7j(),I.1e(),I.3l()},2A:J(){I.1a.V(I.1D=$("<11>").R("L-1a-1D").V(I.7L=$("<11>").R("L-1a-cf").V(I.4c=$("<11>").R("L-1a-1l L-1a-1l-1J").V(I.6h=$("<11>").R("L-1a-1l-1X").V($("<11>").R("L-1a-1l-1X-2F")).V($("<11>").R("L-1a-1l-1X-2P")))).V(I.7M=$("<11>").R("L-1a-5r").V(I.4I=$("<11>").R("L-1a-3H"))).V(I.5i=$("<11>").R("L-1a-1l L-1a-1l-1G").V(I.4F=$("<11>").R("L-1a-1l-1X").V($("<11>").R("L-1a-1l-1X-2F")).V($("<11>").R("L-1a-1l-1X-2P")))))),I.3U=$("<11>").R("L-1a L-1a-2k").V($("<11>").R("L-1a-1l L-1a-1l-1J")).V($("<11>").R("L-1r")).V($("<11>").R("L-1a-1l L-1a-1l-1G"))},3l:J(){I.7L.3A(".L-1r","21",$.X(J(i){i.2E();K t=$(i.2N).59(".L-1r")[0],e=t&&$(t).1j("L-1A");e&&(I.7N(e),D.2R(e))},I)),I.7L.1C("21",J(i){i.2E()}),I.4c.1C("21",$.X(I.9B,I)),I.5i.1C("21",$.X(I.9C,I))},2g:J(i){W(I.2m(),I.2v=[],!(2>i.1u)){K t=!1;W($.1m(i,$.X(J(i,e){T"14"==e.Q.U?(t=!0,!1):2M 0},I)),!t){K e="2k";$.1m(i,$.X(J(i,t){"2I"==t.Q.1a&&(e="2I")},I)),I.1w.3m=e,I.9D(e),$.1m(i,$.X(J(i,t){I.2v.2n(25 6K(I.4I,t,i+1))},I)),1h.1q&&7>1h.1q||I.1Q()}}},2m:J(){$.1m(I.2v,J(i,t){t.1T()}),I.2v=[],I.1b=-1,I.3t=-1},9D:J(i){I.1a.2H("L-1a-2k L-1a-2I").R("L-1a-"+i)},9E:J(i){$.1m(i,$.X(J(i,t){I.9F(t)},I))},9F:J(i){K t=i["1k-1p"],e=i["1k-2w"];i["1k-1p"]=0,i["1k-2w"]=0,i["1k-1s"]=t,i["1k-5n"]=e},9G:J(i){K t=i.M;i.M=i.N,i.N=t},9H:J(i){$.1m(i,$.X(J(i,t){I.9G(t)},I))},2J:J(){K i=D.1c,t=D.3n,e=I.1w,s=e.3m,n=z.38(),o=i.2Q(":1M");o||i.1o();K a=t.2Q(":1M");a||t.1o(),I.1a.61(I.3U);K h=I.3U.2B(".L-1a-1l-1J:3B"),r=I.3U.2B(".L-1a-1l-1G:3B"),d=I.3U.2B(".L-1r:3B"),u=I.3U.4j(),l=3x(I.3U.16("6q-1s"))||0;$.1i(e.1a,{N:u,6q:l});K p=u-2*l,c=3x(d.16("1k-1p"));$.1i(e.1r,{N:p,M:p}),$.1i(e.2e,{M:p+2*c,N:u}),e.2c={1J:{1f:{M:h.6S(),N:u},1k:{"1k-1s":0,"1k-5n":0,"1k-1p":3x(h.16("1k-1p"))||0,"1k-2w":3x(h.16("1k-2w"))||0}},1G:{1f:{M:r.6S(),N:u},1k:{"1k-1s":0,"1k-5n":0,"1k-1p":3x(r.16("1k-1p"))||0,"1k-2w":3x(r.16("1k-2w"))||0}}};K f=n["2k"==s?"M":"N"],m=e.2e.M,v=I.2v.1u;e.1a.M=f,e.2c.22=v*m/f>1;K w=f,g=e.2c,b=g.1J,2y=g.1G,x=b.1k["1k-1p"]+b.1f.M+b.1k["1k-2w"]+2y.1k["1k-1p"]+2y.1f.M+2y.1k["1k-2w"];e.2c.22&&(w-=x),w=19.4D(w/m)*m;K y=v*m;w>y&&(w=y);K C=w+(e.2c.22?x:0);e.3V=w/m,I.5s="6s",1>=e.3V&&(w=f,C=f,e.2c.22=!1,I.5s="7a"),e.7O=19.5t(v*m/w),e.1D={M:C+1,N:u},e.5r={M:w,N:u},e.3H={M:v*m+1,N:u},"2I"==s&&(I.9H([e.1a,e.1D,e.5r,e.3H,e.2e,e.1r,e.2c.1J.1f,e.2c.1G.1f]),I.9E([e.2c.1J.1k,e.2c.1G.1k])),I.3U.cg(),a||t.1e(),o||i.1e()},4a:J(){I.4J=!0},4B:J(){I.4J=!1},22:J(){T!I.4J},1o:J(){2>I.2v.1u||(I.4B(),I.1a.1o(),I.2S=!0)},1e:J(){I.4a(),I.1a.1e(),I.2S=!1},1M:J(){T!!I.2S},1Q:J(){I.2J();K i=I.1w,t="2k"==I.1w.3m,e=i.1a;I.1a.16({M:e.M+"1g",N:e.N+"1g","24-N":"2D","1H-N":"2D","24-M":"2D","1H-M":"2D",6q:0}),$.1m(I.2v,J(i,t){t.1Q()}),I.4c[i.2c.22?"1o":"1e"]().16(1g(i.2c.1J.1f)).16(1g(i.2c.1J.1k)),I.5i[i.2c.22?"1o":"1e"]().16(1g(i.2c.1G.1f)).16(1g(i.2c.1G.1k)),1h.1q&&9>1h.1q&&(D.3P.2m("9I-9J-1a"),D.3P.29("9I-9J-1a",$.X(J(){I.2J(),I.7M.16(1g(i.5r)),I.4I.16(1g(i.3H))},I),ch)),I.7M.16(1g(i.5r)),I.4I.16(1g(i.3H));K s=$.1i({},1g(i.1D));s["1k-"+(t?"1p":"1s")]=19.3f(-.5*i.1D[t?"M":"N"])+"1g",s["1k-"+(t?"1s":"1p")]=0,I.1D.16(s),I.4c.16(1g(i.2c.1J)),I.4c.16(1g(i.2c.1G)),I.1b&&I.3o(I.1b,!0)},7P:J(i){W(!(1>i||i>I.1w.7O||i==I.3t)){K t=I.1w.3V*(i-1)+1;I.3o(t)}},9B:J(){I.7P(I.3t-1)},9C:J(){I.7P(I.3t+1)},ci:J(){K i=z.38();T i},2R:J(i){W(!(1h.1q&&7>1h.1q)){K t=0>I.1b;1>i&&(i=1);K e=I.2v.1u;i>e&&(i=e),I.1b=i,I.7N(i),("6s"!=I.5s||I.3t!=19.5t(i/I.1w.3V))&&I.3o(i,t)}},3o:J(i,t){I.2J();K e,s="2k"==I.1w.3m,n=z.38()[s?"M":"N"],o=.5*n,a=I.1w.2e[s?"M":"N"];W("6s"==I.5s){K h=19.5t(i/I.1w.3V);I.3t=h,e=-1*a*(I.3t-1)*I.1w.3V;K r="L-1a-1l-1X-5j";I.6h[(2>h?"1U":"1T")+"3S"](r),I.4F[(h>=I.1w.7O?"1U":"1T")+"3S"](r)}1Z e=o+-1*(a*(i-1)+.5*a);K d=Y.12&&Y.12[Y.1b-1],u={},l={};u[s?"1s":"1p"]=0,l[s?"1p":"1s"]=e+"1g",I.4I.1O(1,0).16(u).68(l,t?0:d?d.P.Q.1z.1a.3H:0,$.X(J(){I.7Q()},I))},7j:J(){I.7R=!0},8P:J(){I.7R=!1,I.2v.1u>0&&I.7Q()},7Q:J(){K i=!1;I.7R&&(i=!0);K t,e;W(I.1b&&I.1w.2e.M&&!(1>I.2v.1u)){W("6s"==I.5s){W(1>I.3t)T;t=(I.3t-1)*I.1w.3V+1,e=19.24(t-1+I.1w.3V,I.2v.1u)}1Z{K s="2k"==I.1w.3m,n=19.5t(I.1w.1a[s?"M":"N"]/I.1w.2e[s?"M":"N"]);t=19.1H(19.4D(19.1H(I.1b-.5*n,0)),1),e=19.5t(19.24(I.1b+.5*n)),e>I.2v.1u&&(e=I.2v.1u)}23(K o=t;e>=o;o++)I.2v[o-1][i?"2A":"2g"]()}},7N:J(i){I.4I.2B(".L-1r-4b").2H("L-1r-4b");K t=i&&I.2v[i-1];t&&t.9K()},cj:J(){I.1b&&I.2R(I.1b)}};$.1i(6K.3e,{1F:J(i,t,e){I.1c=i,I.P=t,I.ck={},I.1b=e,I.9L()},9L:J(){I.1r=$("<11>").R("L-1r").1j("L-1A",I.1b)},2A:J(){W(!I.2e){K i=I.P.Q;I.1c.V(I.2e=$("<11>").R("L-1r-1n").V(I.1r.V(I.6t=$("<11>").R("L-1r-1D")))),"1x"==I.P.13&&I.1r.R("L-2g-1r").1j("1r",{P:I.P,3u:i.1r||I.P.1B});K t=i.1r&&i.1r.2P;t&&I.1r.V($("<11>").R("L-1r-2P L-1r-2P-"+t));K e;I.1r.V(e=$("<11>").R("L-1r-1Y").V($("<11>").R("L-1r-1Y-2F")).V(I.1S=$("<11>").R("L-1r-1S").V($("<11>").R("L-1r-1S-2F")).V($("<11>").R("L-1r-1S-2P"))).V($("<11>").R("L-1r-1Y-3L"))),I.1r.V($("<11>").R("L-1r-cl")),I.1Q()}},1T:J(){I.2e&&(I.2e.1T(),I.2e=1t,I.cm=1t),I.2u=!1,I.9M=!0},2g:J(){W(!I.3T&&!I.2u&&F.1M()&&!I.9M){I.6t||I.2A(),I.2u=!0;K i=I.P.Q.1r,t=i&&"5U"==$.13(i)?I.P.1B:i||I.P.1B;W(I.4K=t,t)W("1W"==I.P.13)W(t==i)1y.40(I.4K,{13:"1x"},$.X(I.6u,I));1Z{K e="4X"+(1d.2Z&&"4Y:"==1d.2Z.4Z?"s":"")+":";$.8v(e+"//1W.3k/4Q/8w.8x?1B="+e+"//1W.3k/"+I.P.3s.3z+"&4q=?",$.X(J(i){i&&i.9N?(I.4K=i.9N,1y.40(I.4K,{13:"1x"},$.X(I.6u,I))):(I.3T=!0,I.2u=!1,I.1S.1O(1,0).2V(I.P.Q.1z.1a.2V).47(I.P.Q.1z.1a.2g,0))},I))}1Z 1y.40(I.4K,{13:"1x"},$.X(I.6u,I))}},6u:J(i){I.2e&&I.2u&&(I.3T=!0,I.2u=!1,I.1L=i,I.1x=$("<5V>").2C({3u:I.4K}),I.6t.48(I.1x),I.1Q(),I.1S.1O(1,0).2V(I.P.Q.1z.1a.2V).47(I.P.Q.1z.1a.2g,0))},1Q:J(){W(I.2e){I.2e.16(1g(F.1w.2e));K i="2k"==F.1w.3m;W(I.2e.16(1g({1s:i?0:F.1w.2e.N*(I.1b-1),1p:i?F.1w.2e.M*(I.1b-1):0})),I.6t){K t=F.1w.1r;W(I.1r.16(1g({M:t.M,N:t.N,"1k-1s":19.3f(-.5*t.N),"1k-1p":19.3f(-.5*t.M),"1k-5n":0,"1k-2w":0})),I.1x){K e,s={M:t.M,N:t.N},n=19.1H(s.M,s.N),o=$.1i({},I.1L);W(o.M>s.M&&o.N>s.N){e=3J.3K(o,{2W:s});K a=1,h=1;e.M<s.M&&(a=s.M/e.M),e.N<s.N&&(h=s.N/e.N);K r=19.1H(a,h);r>1&&(e.M*=r,e.N*=r),$.1m("M N".3F(" "),J(i,t){e[t]=19.3f(e[t])})}1Z e=3J.3K(o.M<s.M||o.N<s.N?{M:n,N:n}:s,{2W:I.1L});K d=19.3f(.5*s.M-.5*e.M),u=19.3f(.5*s.N-.5*e.N);I.1x.16(1g($.1i({},e,{1s:u,1p:d})))}}}},9K:J(){I.1r.R("L-1r-4b")}});K G={1F:J(i){I.1c=i,I.6v=[],I.6w=!1,I.1w={49:{},17:{}},I.4y=I.1c.2B(".L-14-49:3B"),I.1V=I.1c.2B(".L-14-17:3B"),I.2A(),I.1e(),I.3l()},2A:J(){I.4y.V(I.cn=$("<11>").R("L-14-49-1D").V($("<11>").R("L-14-49-2F")).V(I.2h=$("<11>").R("L-14-1X L-14-2h").V($("<4d>").R("L-14-1X-2F")).V($("<4d>").R("L-14-1X-2P")))).1e(),I.1V.V(I.9O=$("<11>").R("L-14-17-1D").V(I.co=$("<11>").R("L-14-17-2F")).V(I.1E=$("<11>").R("L-14-17-1E").V(I.6i=$("<11>").R("L-14-17-1E-3q").V(I.9O=$("<11>").R("L-14-17-7E-1D").V(I.17=$("<11>").R("L-14-17-7E"))))).V(I.4L=$("<11>").R("L-14-1X L-14-17-4L").V($("<4d>").R("L-14-1X-2F")).V($("<4d>").R("L-14-1X-2P")))).1e()},3l:J(){I.2h.1C("21",J(){D.1e()}),$(1d).1C("1Q 8W",$.X(J(){D.2K.1P("1M")&&I.1Q()},I)),I.4L.1C("21",$.X(J(){I[I.6w?"6x":"9P"]()},I)),I.1V.1C("4m",$.X(J(i){I.6y||i.2r()},I))},1o:J(){I.4B(),I.4y.1o(),I.1V[I.65?"1e":"1o"](),I.2S=!0},1e:J(){I.4a(),I.4y.1e(),I.1V.1e(),I.2S=!1},1M:J(){T!!I.2S},2J:J(){K i=D.1c,t=D.3n,e=I.1w;I.1V.16({31:"8L"});K s=I.4L;$.1m(s,$.X(J(i,t){K e=$(t);e.1j("9Q-1k-1s",e.16("1k-1s")),e.16({"1k-1s":0})},I));K n=i.2Q(":1M");n||i.1o();K o=t.2Q(":1M");o||t.1o();K a=I.9R();a&&I.3E(!1);K h=I.4y.4j(),r=I.1V.4j();a&&I.3E(!0),e.49.N=h,e.17.N=r,a||I.3E(!0);K d=I.1V.4j(),u=d>r;e.2x=u,a&&I.3E(!0),u&&(I.3E(!0),d=I.1V.4j()),e.17.7S=d,I.3E(a),$.1m(s,$.X(J(i,t){K e=$(t);e.16({"1k-1s":e.1j("9Q-1k-1s")})},I)),I.1V.16({31:"1M"}),o||t.1e(),n||i.1e()},cp:J(){T I.1V.4f("L-14-17-9S")},7T:J(i){I.1V[(i?"1U":"1T")+"3S"]("L-14-17-9S")},9R:J(){T I.1V.4f("L-14-17-2x")},3E:J(i){I.1V[(i?"1U":"1T")+"3S"]("L-14-17-2x")},4a:J(){I.4J=!0},4B:J(){I.4J=!1},22:J(){T!I.4J},2g:J(i){I.2m();K t=!1;$.1m(i,$.X(J(i,e){I.6v.2n(e),!t&&e.17&&(t=!0)},I)),I.1V[(t?"1T":"1U")+"3S"]("L-14-17-cq"),I.65=!t},2m:J(){I.6v=[],I.P=1t,I.1b=-1,I.3t=-1},2R:J(i){W(i!=I.1b){K t=I.6v[i-1];W("14"==t.Q.U){I.P=t;K e=t.17||"";I.17.6j(e),I.1Q(),I.6x(!0)}}},1Q:J(){I.6x(!0),I.2J()},9P:J(i){I.3E(!0),I.7T(!0),I.6w=!0,I.4L.R("L-14-17-9T");K t=z.38(),e=-1*19.24(t.N,I.1w.17.7S||0);I.1w.17.7S>t.N?(I.1E.16({N:t.N+"1g"}).R("L-14-17-2x-4x"),I.6y=!0):(I.1E.16({N:"9U"}).2H("L-14-17-2x-4x"),I.6y=!1),I.1V.1O(1,0).68({"1k-1s":e+"1g"},{7v:i?0:I.P.Q.1z.1V.81})},6x:J(i){I.6w=!1,I.4L.2H("L-14-17-9T"),I.1E.52(0),I.1E.16({N:"9U"}).2H("L-14-17-2x-4x"),I.6y=!1,I.1V.1O(1,0).68({"1k-1s":-1*(I.1w.17.N||0)+"1g"},{7v:i?0:I.P.Q.1z.1V.82,93:$.X(J(){I.3E(!1),I.7T(I.1w.2x)},I)})}},5Y={1o:J(b){K c=1R[1]||{},1A=1R[2];1R[1]&&"62"==$.13(1R[1])&&(1A=1R[1],c=B.78({}));K d=[],9V;2O(9V=$.13(b)){1K"4t":1K"7f":K f=25 4i(b,c),5u="1j-2l-4H-Q";W(f.4H){W(2y.5L(b)){K g=$(\'.2l[1j-2l-4H="\'+$(b).1j("2l-4H")+\'"]\'),h={};g.cr("["+5u+"]").1m(J(i,a){$.1i(h,7K("({"+($(a).2C(5u)||"")+"})"))}),g.1m(J(i,t){1A||t!=b||(1A=i+1),d.2n(25 4i(t,$.1i({},h,c)))})}}1Z{K h={};2y.5L(b)&&$(b).2Q("["+5u+"]")&&($.1i(h,7K("({"+($(b).2C(5u)||"")+"})")),f=25 4i(b,$.1i({},h,c))),d.2n(f)}2Y;1K"9W":$.1m(b,J(i,t){K e=25 4i(t,c);d.2n(e)})}(!1A||1>1A)&&(1A=1),1A>d.1u&&(1A=d.1u),Y.7w||Y.3Q({x:0,y:0}),D.2g(d,1A,{4q:J(){D.1o(J(){})}})}};$.1i(j,{1F:J(){A.8m("28"),D.1F()},1o:J(){5Y.1o.2L(5Y,k.2q(1R))},1e:J(){D.1e()},7e:J(i){D.7e(i)}}),("62"==$.13(1h.3M)&&3>1h.3M||1h.4T&&"62"==$.13(1h.4k)&&8C.18>1h.4k)&&(j.1o=J(){J i(t){K e,s=$.13(t);W("4t"==s)e=t;1Z W("9W"==s&&t[0])e=i(t[0]);1Z W(2y.5L(t)&&$(t).2C("57"))K e=$(t).2C("57");1Z e=t.1B?t.1B:!1;T e}T J(t){K e=i(t);e&&(1d.2Z.57=e)}}());K H={1x:{9X:"cs ct 6Y 8z 7Y",4M:J(i){T $.6a(5E(i),I.9X.3F(" "))>-1},1j:J(i){T I.4M()?{5q:5E(i)}:!1}},2j:{4M:J(i){K t=/(2j\\.3k|9Y\\.be)\\/cu\\?(?=.*77?=([a-5x-7U-9-2y]+))(?:\\S+)?$/.5N(i);T t&&t[2]?t[2]:(t=/(2j\\.3k|9Y\\.be)\\/(77?\\/|u\\/|5Z\\/)?([a-5x-7U-9-2y]+)(?:\\S+)?$/i.5N(i),t&&t[3]?t[3]:!1)},1j:J(i){K t=I.4M(i);T t?{3z:t}:!1}},1W:{4M:J(i){K t=/(1W\\.3k)\\/([a-5x-7U-9-2y]+)(?:\\S+)?$/i.5N(i);T t&&t[2]?t[2]:!1},1j:J(i){K t=I.4M(i);T t?{3z:t}:!1}}};$(2z).9x(J(){j.1F()}),1d.6N=j})(28);', 62, 775, "||||||||||||||||||||||||||||||||||||||||||||this|function|var|fr|width|height||view|options|addClass||return|ui|append|if|proxy|Frames|||div|_frames|type|touch||css|caption||Math|thumbnails|_position|element|window|hide|dimensions|px|Browser|extend|data|margin|side|each|frame|show|left|IE|thumbnail|top|null|length|content|_vars|image|Dimensions|effects|position|url|bind|wrapper|info|initialize|next|max|cache|previous|case|_dimensions|visible|move|stop|get|resize|arguments|loading|remove|add|touchCaption|vimeo|button|overlay|else||click|enabled|for|min|new|_boxDimensions||jQuery|set|frames|box|sides||thumbnail_frame|Support|load|close|outside|youtube|horizontal|fresco|clear|push|spacer|ui_wrapper|call|preventDefault|fit|className|_loading|_thumbnails|right|overflow|_|document|build|find|attr|none|stopPropagation|background|_timeouts|removeClass|vertical|updateVars|states|apply|void|target|switch|icon|is|setPosition|_visible|has|onclick|delay|bounds|mobileTouch|break|location||visibility|_sideWidth|_tracking|inside|no|||viewport||portrait|loop|both|controls|prototype|round|indexOf|pageX|pageY|dragImage|com|startObserving|orientation|bubble|moveTo|player|padder|box_wrapper|_data|_page|src|originalEvent|style|parseInt|Touch|id|delegate|first|download_image|player_iframe|setOverflowClass|split|deepExtendClone|slide|easing|Fit|within|border|Android|preloaded|queues|timeouts|setXY|queue|Class|_loaded|measure|ipp|landscape|onload|skins|onClick|preload|scripts|start|track|skin||Window|fadeTo|prepend|menu|disable|active|_previous|span|getLayout|hasClass|200|Loading|View|innerHeight|WebKit|_events|touchmove|abs|unbind|swipe|callback|delete|defaultSkin|string|setExpression|setSkin|setOpacity|scroll|touchMenu|_reset|views|enable|_preloaded|floor|_removeVideo|_next_button|box_spacer|group|_slide|_disabled|_url|more|detect|in|canvas|getURIData|api|body|documentElement|MobileSafari|parseFloat|end|dragScale|http|https|protocol||offset|scrollTop|fadeOut|setTimeout||clearTimeout|href|overlapping|closest|_m|keyCode|updateDimensions|isTouch|_handleTracking|_playing|getSurroundingIndexes|_track|_next|disabled|_loadTimer|showUI|startUITimer|bottom|player_div|_ui_timer|extension|thumbs|_mode|ceil|_dgo|getOrientation|String|zA|test|substr|warn|try|catch|deepExtend|detectExtension|sync|touchEffects|keyboard|esc|autoplay|initialTypeOptions|isElement|mousewheel|exec|IEMobile|mousemove|touchstart|touchend|touches|xhr|boolean|img|scrollLeft|_count|_Fresco|embed|easeInSine|before|number|setOrientation|oneCaption|_noCaptions|_tracking_timer|YT|animate|afterPosition|inArray|_touchWidth|_whileVisible|clearUITimer|box_outer_border|ui_padder|clone|_previous_button|info_padder|html|_border|320|568|afterLoad|_button|hideUI|padding|overlap|page|thumbnail_wrapper|_afterLoad|_views|_expanded|collapse|_scrolling|sfcc|rs|console|createDragImage|Image|getContext|toDataURL|Overlay|Timeouts|States|Frame|Thumbnail|match|toLowerCase|Fresco|version|300|250|hd|innerWidth|Opera|opera|Chrome|createElement|postMessage|jpeg|required|available|Date|getTime|scrollSupressionThreshold|Cache||once|vi|create|absolute|center|draw|_states|showhide|setDefaultSkin|object|param|stopQueues|_hide|block|after|_s|easeOutSine|fetchOptions|getKeyByKeyCode|updateMove|_touched|removeAttr|insertYoutubeVideo|froogaloop|insertVimeoVideo|duration|_xyp|_pos|removeTracking|clearLoad|box_padder|download|ui_spacer|ui_outer_border|text|_getInfoHeight|_fit|clearLoadTimer|index|_movieLoaded|eval|_slider|_thumbs|setActive|pages|moveToPage|loadCurrentPage|_blocked|overflowHeight|setPaddedClass|Z0|fromCharCode|100|canvasToDataUrlPNG|png|constructor|base|slideOut|slideIn|175|spacing|640|reset|IE6|nodeType|parentNode|wheelDelta|detail|pow|AppleWebKit|Gecko|ChromeMobile|CrMo|navigator|prefix|toUpperCase|DocumentTouch|pointerEvents|check|Za|notified|durationThreshold|horizontalDistanceThreshold|verticalDistanceThreshold|direction|swiped|supressX|getJSON|oembed|json|getDimensions|jpg|easeInOutSine|getScrollDimensions|533|timeout_|update|class|skinless|hideOverlapping|wmode|value|transparent|hidden|restoreOverlapping|onShow|_show|unblock|hideAll|afterHide|unbindTouch|onkeydown|onkeyup|uis|orientationchange|original|handleTracking|clearTrackingTimer|startTracking|stopTracking|playing|complete|clearLoads|preloadSurroundingImages|mayPrevious||mayNext|setVisible|isVisible|setHidden|grep|setXYP|setTracking|isTracking|outer|ui_toggle|_spacing|_max|dragstart|mouseenter|mouseleave|setDragImage|addElement|quality|prevent|iframe|webkitAllowFullScreen|mozallowfullscreen|allowFullScreen|frameborder|addEvent|ready|_preShow|_shown|_postHide|previousPage|nextPage|setOrientationClass|flipMargins|flipMargin|flipDimensions|flipMultiple|ie|resizing|activate|preBuild|_removed|thumbnail_url|caption_wrapper|expand|restore|hasOverflowClass|padded|less|auto|object_type|array|extensions|youtu|114|110|111|109|toString|log|globalAlpha|drawImage|Object|replace|400|440|180|3e3|5e3|title|byline|enablejsapi|iv_load_policy|modestbranding|rel|360|Array|slice|isAttached|120|Event|trigger|isPropagationStopped|isDefaultPrevented|DOMMouseScroll|Quad|Cubic|Quart|Quint|Expo|Sine|cos|PI|easeIn|easeOut|easeInOut|RegExp|attachEvent|MSIE|KHTML|rv|Apple|Mobile|Safari|userAgent|charAt|join|Webkit|Moz|ms|Khtml|ontouchstart|instanceof|prefixed|Win|Mac|Linux|platform|fn|jquery|z_|z0|requires|mousedown|mouseup|suppresX|suppresY|stopImmediatePropagation|one|supressY|1e3||removeData|lifetime|3e5|inject|abort|dela|setOptions|oldIE|ltIE|mobile|currentTarget|select|name|restoreOverlappingWithinContent|fs|150|_pinchZoomed|keydown|keyup|bindTouch|_startMoveTime|stopVideo|unload|outerWidth|_top|pn|hideAllBut|clearTracking|_scrollbarWidth|scrollbarWidth|toggle|info_background|smart|opacity|parents|dataTransfer|replaceWith|720|hd1080|hd720|outerHeight|Tracking|setSize|relative|_style|setDimensions|Player|videoId|playerVars|events|onReady|setPlaybackQuality|onStateChange|www|player_id|video|Froogaloop|play|destroy|easeInQuad|easeOutQuart|hideUIDelayed|slider|detach|500|adjustToViewport|refresh|_dimension|state|thumbnail_image|menu_wrapper|drag|hasPaddedClass|nocaptions|filter|bmp|gif|watch".split("|"), 0, {})),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t, window, document)
        }) : "object" == typeof exports ? module.exports = e(require("jquery"), window, document) : e(jQuery, window, document)
    }(function (e, t, i) {
        "use strict";
        var n, s, a, o, r, l, c, d, u, h, p, f, m, g, v, y, w, b, I, x, C, _, T, k, S, P, z, M, E, O, A;
        T = {
            paneClass: "nano-pane",
            sliderClass: "nano-slider",
            contentClass: "nano-content",
            enabledClass: "has-scrollbar",
            flashedClass: "flashed",
            activeClass: "active",
            iOSNativeScrolling: !1,
            preventPageScrolling: !1,
            disableResize: !1,
            alwaysVisible: !1,
            flashDelay: 1500,
            sliderMinHeight: 20,
            sliderMaxHeight: null,
            documentContext: null,
            windowContext: null
        }, b = "scrollbar", w = "scroll", u = "mousedown", h = "mouseenter", p = "mousemove", m = "mousewheel", f = "mouseup", y = "resize", r = "drag", l = "enter", x = "up", v = "panedown", a = "DOMMouseScroll", o = "down", C = "wheel", c = "keydown", d = "keyup", I = "touchmove", n = "Microsoft Internet Explorer" === t.navigator.appName && /msie 7./i.test(t.navigator.appVersion) && t.ActiveXObject, s = null, z = t.requestAnimationFrame, _ = t.cancelAnimationFrame, E = i.createElement("div").style, A = function () {
            var e, t, i, n, s, a;
            for (n = ["t", "webkitT", "MozT", "msT", "OT"], e = s = 0, a = n.length; a > s; e = ++s) if (i = n[e], (t = n[e] + "ransform") in E) return n[e].substr(0, n[e].length - 1);
            return !1
        }(), O = function (e) {
            return !1 !== A && ("" === A ? e : A + e.charAt(0).toUpperCase() + e.substr(1))
        }, M = O("transform"), S = !1 !== M, k = function () {
            var e, t, n;
            return e = i.createElement("div"), t = e.style, t.position = "absolute", t.width = "100px", t.height = "100px", t.overflow = w, t.top = "-9999px", i.body.appendChild(e), n = e.offsetWidth - e.clientWidth, i.body.removeChild(e), n
        }, P = function () {
            var e, i, n;
            return i = t.navigator.userAgent, !!(e = /(?=.+Mac OS X)(?=.+Firefox)/.test(i)) && (n = /Firefox\/\d{2}\./.exec(i), n && (n = n[0].replace(/\D+/g, "")), e && +n > 23)
        }, g = function () {
            function c(n, a) {
                this.el = n, this.options = a, s || (s = k()), this.$el = e(this.el), this.doc = e(this.options.documentContext || i), this.win = e(this.options.windowContext || t), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
            }

            return c.prototype.preventScrolling = function (e, t) {
                if (this.isActive) if (e.type === a) (t === o && e.originalEvent.detail > 0 || t === x && e.originalEvent.detail < 0) && e.preventDefault(); else if (e.type === m) {
                    if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
                    (t === o && e.originalEvent.wheelDelta < 0 || t === x && e.originalEvent.wheelDelta > 0) && e.preventDefault()
                }
            }, c.prototype.nativeScrolling = function () {
                this.$content.css({WebkitOverflowScrolling: "touch"}), this.iOSNativeScrolling = !0, this.isActive = !0
            }, c.prototype.updateScrollValues = function () {
                var e, t;
                e = this.content, this.maxScrollTop = e.scrollHeight - e.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = e.scrollTop, t = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== t && this.$el.trigger("update", {
                    position: this.contentScrollTop,
                    maximum: this.maxScrollTop,
                    direction: t
                }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
            }, c.prototype.setOnScrollStyles = function () {
                var e;
                S ? (e = {}, e[M] = "translate(0, " + this.sliderTop + "px)") : e = {top: this.sliderTop}, z ? (_ && this.scrollRAF && _(this.scrollRAF), this.scrollRAF = z(function (t) {
                    return function () {
                        return t.scrollRAF = null, t.slider.css(e)
                    }
                }(this))) : this.slider.css(e)
            }, c.prototype.createEvents = function () {
                this.events = {
                    down: function (e) {
                        return function (t) {
                            return e.isBeingDragged = !0, e.offsetY = t.pageY - e.slider.offset().top, e.slider.is(t.target) || (e.offsetY = 0), e.pane.addClass(e.options.activeClass), e.doc.bind(p, e.events[r]).bind(f, e.events[x]), e.body.bind(h, e.events[l]), !1
                        }
                    }(this), drag: function (e) {
                        return function (t) {
                            return e.sliderY = t.pageY - e.$el.offset().top - e.paneTop - (e.offsetY || .5 * e.sliderHeight), e.scroll(), e.contentScrollTop >= e.maxScrollTop && e.prevScrollTop !== e.maxScrollTop ? e.$el.trigger("scrollend") : 0 === e.contentScrollTop && 0 !== e.prevScrollTop && e.$el.trigger("scrolltop"), !1
                        }
                    }(this), up: function (e) {
                        return function (t) {
                            return e.isBeingDragged = !1, e.pane.removeClass(e.options.activeClass), e.doc.unbind(p, e.events[r]).unbind(f, e.events[x]), e.body.unbind(h, e.events[l]), !1
                        }
                    }(this), resize: function (e) {
                        return function (t) {
                            e.reset()
                        }
                    }(this), panedown: function (e) {
                        return function (t) {
                            return e.sliderY = (t.offsetY || t.originalEvent.layerY) - .5 * e.sliderHeight, e.scroll(), e.events.down(t), !1
                        }
                    }(this), scroll: function (e) {
                        return function (t) {
                            e.updateScrollValues(), e.isBeingDragged || (e.iOSNativeScrolling || (e.sliderY = e.sliderTop, e.setOnScrollStyles()), null != t && (e.contentScrollTop >= e.maxScrollTop ? (e.options.preventPageScrolling && e.preventScrolling(t, o), e.prevScrollTop !== e.maxScrollTop && e.$el.trigger("scrollend")) : 0 === e.contentScrollTop && (e.options.preventPageScrolling && e.preventScrolling(t, x), 0 !== e.prevScrollTop && e.$el.trigger("scrolltop"))))
                        }
                    }(this), wheel: function (e) {
                        return function (t) {
                            var i;
                            if (null != t) return i = t.delta || t.wheelDelta || t.originalEvent && t.originalEvent.wheelDelta || -t.detail || t.originalEvent && -t.originalEvent.detail, i && (e.sliderY += -i / 3), e.scroll(), !1
                        }
                    }(this), enter: function (e) {
                        return function (t) {
                            var i;
                            if (e.isBeingDragged) return 1 !== (t.buttons || t.which) ? (i = e.events)[x].apply(i, arguments) : void 0
                        }
                    }(this)
                }
            }, c.prototype.addEvents = function () {
                var e;
                this.removeEvents(), e = this.events, this.options.disableResize || this.win.bind(y, e[y]), this.iOSNativeScrolling || (this.slider.bind(u, e[o]), this.pane.bind(u, e[v]).bind(m + " " + a, e[C])), this.$content.bind(w + " " + m + " " + a + " " + I, e[w])
            }, c.prototype.removeEvents = function () {
                var e;
                e = this.events, this.win.unbind(y, e[y]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind(w + " " + m + " " + a + " " + I, e[w])
            }, c.prototype.generate = function () {
                var e, i, n, a, o, r, l;
                return a = this.options, r = a.paneClass, l = a.sliderClass, e = a.contentClass, (o = this.$el.children("." + r)).length || o.children("." + l).length || this.$el.append('<div class="' + r + '"><div class="' + l + '" /></div>'), this.pane = this.$el.children("." + r), this.slider = this.pane.find("." + l), 0 === s && P() ? (n = t.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), i = {
                    right: -14,
                    paddingRight: +n + 14
                }) : s && (i = {right: -s}, this.$el.addClass(a.enabledClass)), null != i && this.$content.css(i), this
            }, c.prototype.restore = function () {
                this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
            }, c.prototype.reset = function () {
                var e, t, i, a, o, r, l, c, d, u, h, p;
                return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), e = this.content, a = e.style, o = a.overflowY, n && this.$content.css({height: this.$content.height()}), t = e.scrollHeight + s, u = parseInt(this.$el.css("max-height"), 10), u > 0 && (this.$el.height(""), this.$el.height(e.scrollHeight > u ? u : e.scrollHeight)), l = this.pane.outerHeight(!1), d = parseInt(this.pane.css("top"), 10), r = parseInt(this.pane.css("bottom"), 10), c = l + d + r, p = Math.round(c / t * l), p < this.options.sliderMinHeight ? p = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && p > this.options.sliderMaxHeight && (p = this.options.sliderMaxHeight), o === w && a.overflowX !== w && (p += s), this.maxSliderTop = c - p, this.contentHeight = t, this.paneHeight = l, this.paneOuterHeight = c, this.sliderHeight = p, this.paneTop = d, this.slider.height(p), this.events.scroll(), this.pane.show(), this.isActive = !0, e.scrollHeight === e.clientHeight || this.pane.outerHeight(!0) >= e.scrollHeight && o !== w ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === e.scrollHeight && o === w ? this.slider.hide() : this.slider.show(), this.pane.css({
                    opacity: this.options.alwaysVisible ? 1 : "",
                    visibility: this.options.alwaysVisible ? "visible" : ""
                }), i = this.$content.css("position"), ("static" === i || "relative" === i) && (h = parseInt(this.$content.css("right"), 10)) && this.$content.css({
                    right: "",
                    marginRight: h
                }), this)
            }, c.prototype.scroll = function () {
                return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0
            }, c.prototype.scrollBottom = function (e) {
                return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - e).trigger(m), this.stop().restore(), this) : void 0
            }, c.prototype.scrollTop = function (e) {
                return this.isActive ? (this.$content.scrollTop(+e).trigger(m), this.stop().restore(), this) : void 0
            }, c.prototype.scrollTo = function (e) {
                return this.isActive ? (this.scrollTop(this.$el.find(e).get(0).offsetTop), this) : void 0
            }, c.prototype.stop = function () {
                return _ && this.scrollRAF && (_(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
            }, c.prototype.destroy = function () {
                return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), n && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass(this.options.enabledClass) && (this.$el.removeClass(this.options.enabledClass), this.$content.css({right: ""})), this
            }, c.prototype.flash = function () {
                return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass(this.options.flashedClass), setTimeout(function (e) {
                    return function () {
                        e.pane.removeClass(e.options.flashedClass)
                    }
                }(this), this.options.flashDelay), this) : void 0
            }, c
        }(), e.fn.nanoScroller = function (t) {
            return this.each(function () {
                var i, n;
                if ((n = this.nanoscroller) || (i = e.extend({}, T, t), this.nanoscroller = n = new g(this, i)), t && "object" == typeof t) {
                    if (e.extend(n.options, t), null != t.scrollBottom) return n.scrollBottom(t.scrollBottom);
                    if (null != t.scrollTop) return n.scrollTop(t.scrollTop);
                    if (t.scrollTo) return n.scrollTo(t.scrollTo);
                    if ("bottom" === t.scroll) return n.scrollBottom(0);
                    if ("top" === t.scroll) return n.scrollTop(0);
                    if (t.scroll && t.scroll instanceof e) return n.scrollTo(t.scroll);
                    if (t.stop) return n.stop();
                    if (t.destroy) return n.destroy();
                    if (t.flash) return n.flash()
                }
                return n.reset()
            })
        }, e.fn.nanoScroller.Constructor = g
    });