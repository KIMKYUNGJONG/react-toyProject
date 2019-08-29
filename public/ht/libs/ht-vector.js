this.ht = this.ht || {}, this.ht.vector = function() {
    "use strict";
    var ne = "top",
        le = "bottom",
        he = "right",
        se = "left",
        ue = "center",
        h = "multiple",
        s = "single",
        x = "radio",
        k = "checkbox",
        A = "x",
        M = "y",
        K = "HT2018-11",
        ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        u = (function() {
            function s(e) {
                this.value = e
            }

            function e(a) {
                var r, n;

                function l(e, t) {
                    try {
                        var o = a[e](t),
                            i = o.value;
                        i instanceof s ? Promise.resolve(i.value).then(function(e) {
                            l("next", e)
                        }, function(e) {
                            l("throw", e)
                        }) : h(o.done ? "return" : "normal", o.value)
                    } catch (e) {
                        h("throw", e)
                    }
                }

                function h(e, t) {
                    switch (e) {
                        case "return":
                            r.resolve({
                                value: t,
                                done: !0
                            });
                            break;
                        case "throw":
                            r.reject(t);
                            break;
                        default:
                            r.resolve({
                                value: t,
                                done: !1
                            })
                    }(r = r.next) ? l(r.key, r.arg): n = null
                }
                this._invoke = function(i, a) {
                    return new Promise(function(e, t) {
                        var o = {
                            key: i,
                            arg: a,
                            resolve: e,
                            reject: t,
                            next: null
                        };
                        n ? n = n.next = o : (r = n = o, l(i, a))
                    })
                }, "function" != typeof a.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
                return this
            }), e.prototype.next = function(e) {
                return this._invoke("next", e)
            }, e.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, e.prototype.return = function(e) {
                return this._invoke("return", e)
            }
        }(), function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }),
        n = function() {
            function i(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, o) {
                return t && i(e.prototype, t), o && i(e, o), e
            }
        }(),
        o = function e(t, o, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, o);
            if (void 0 === a) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, o, i)
            }
            if ("value" in a) return a.value;
            var n = a.get;
            return void 0 !== n ? n.call(i) : void 0
        },
        c = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        d = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        we = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var o = [],
                    i = !0,
                    a = !1,
                    r = void 0;
                try {
                    for (var n, l = e[Symbol.iterator](); !(i = (n = l.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        !i && l.return && l.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return o
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Ie = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
                return o
            }
            return Array.from(e)
        },
        e = ht.Default,
        Z = e.drawText,
        $ = e.drawStretchImage,
        q = e.getImage,
        J = [2, 8],
        t = ht.Default,
        re = t.drawText,
        ce = t.drawStretchImage,
        de = t.getImage,
        ke = {
            placeholderColor: "#737373",
            fontSize: 12,
            fontFamily: "arial,  sans-serif",
            emptyColor: "rgba(0,0,0,0)",
            hoverDarker: 5,
            activeDarker: 11
        },
        ee = ht.Default.drawText,
        C = {
            HOVER: "ht.hover",
            ACTIVE: "ht.active",
            PRESSED: "ht.pressed",
            DISABLED: "ht.disabled",
            FOCUS: "ht.focus",
            FONT_SIZE: "ht.fontSize",
            FONT_FAMILY: "ht.fontFamily",
            FONT: "ht.font",
            VALUE: "ht.value",
            PLACEHOLDER: "ht.placeholder",
            TEXT_COLOR: "ht.textColor",
            PADDING: "ht.padding",
            EDITING: "ht.editing",
            TEXT_ALIGN: "ht.textAlign",
            LINE_HEIGHT: "ht.lineHeight",
            WORD_BREAK: "ht.wordBreak",
            CHECKED: "ht.checked",
            LABEL: "ht.label",
            ICON: "ht.icon",
            FORM_ITEM_NAME: "ht.name",
            FORM_ITEM_GROUP: "ht.group",
            ON_CLICK: "ht.onClick",
            ON_CHANGE: "ht.onChange",
            ON_KEYDOWN: "ht.onKeyDown",
            ON_KEYUP: "ht.onKeyUp",
            ON_SELECT_ROW: "ht.onSelectRow",
            ON_HOVER_CELL: "ht.onHoverCell",
            DROP_DOWN: "ht.dropDown",
            FORMAT: "ht.format",
            SHOW_TIME: "ht.showTime",
            DATE_TYPE: "ht.dateType",
            DATA_SOURCE: "ht.dataSource",
            DROP_ICON_WIDTH: "ht.dropIconWidth",
            DROP_ICON_HEIGHT: "ht.dropIconHeight",
            DROP_ROW_HEIGHT: "ht.dropRowHeight",
            DROP_WIDTH: "ht.dropWidth",
            DROP_BACKGROUND: "ht.dropBackground",
            DROP_HOVER_BACKGROUND: "ht.dropHoverBackground",
            DROP_LABEL_FONT: "ht.dropLabelFont",
            DROP_LABEL_COLOR: "ht.dropLabelColor",
            DROP_ACTIVE_LABEL_COLOR: "ht.dropActiveLabelColor",
            DROP_ACTIVE_BACKGOUND: "ht.dropActiveBackground",
            DROP_MAX_HEIGHT: "ht.dropMaxHeight",
            INPUT_TYPE: "ht.inputType",
            MAX_LENGTH: "ht.maxLength",
            ENTER_END_INPUTABLE: "ht.enterEndInputable",
            HOVER_INDEX: "ht.hoverIndex",
            DATASOURCE: "ht.dataSource",
            ROW_HEIGHT: "ht.rowHeight",
            HEAD_HEIGHT: "ht.headHeight",
            TRANSLATE_X: "ht.translateX",
            TRANSLATE_Y: "ht.translateY",
            SHOW_HEAD: "ht.showHead",
            SELECTED_INDEX: "ht.selectedIndex",
            SCROLL_BAR_VISIBLE: "ht.scrollBarVisible",
            AUTO_HIDE_SCROLL_BAR: "ht.autoHideScrollBar",
            COLUMNS: "ht.columns",
            MULTIPLE: "ht.multiple",
            MAX: "ht.max",
            MIN: "ht.min",
            STEP: "ht.step",
            SHOW_TOOLTIP: "ht.showToolTip",
            TOOLTIP_FORMAT: "ht.toolTipFormat",
            VALUE_BAR_DRAGGABLE: "ht.valueBarDraggable",
            MAX_SELECTION: "ht.maxSelection",
            HIDE_SELECTED: "ht.hideSelected"
        },
        l = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/,
        g = /^[rR][gG][Bb][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?))\)$/,
        f = /^[rR][gG][Bb][Aa][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){3}(0\.\d{1,22}|1|0)?[\)]{1}$/,
        v = function() {
            function a(e, t, o, i) {
                u(this, a), this.r = null, this.g = null, this.b = null, this.a = null, e && this.setColor(e, t, o, i)
            }
            return n(a, [{
                key: "setColor",
                value: function(e, t, o, i) {
                    if (e && !t)
                        if (e = e.replace(/\s+/g, ""), l.test(e)) 4 === e.length ? (this.r = parseInt(e[1] + e[1], 16), this.g = parseInt(e[2] + e[3], 16), this.b = parseInt(e[3] + e[3], 16)) : 7 === e.length && (this.r = parseInt(e.substring(1, 3), 16), this.g = parseInt(e.substring(3, 5), 16), this.b = parseInt(e.substring(5, 7), 16));
                        else if (g.test(e)) {
                        var a = (e = e.replace(/[rRgGbB\(\)\s]*/g, "")).split(",");
                        this.r = parseInt(a[0]), this.g = parseInt(a[1]), this.b = parseInt(a[2])
                    } else if (f.test(e)) {
                        var r = (e = e.replace(/[rRgGbBaA\(\)\s]*/g, "")).split(",");
                        this.r = parseInt(r[0]), this.g = parseInt(r[1]), this.b = parseInt(r[2]), this.a = parseFloat(r[3])
                    }
                }
            }, {
                key: "toString",
                value: function() {
                    return 1 !== this.a && null !== this.a ? this.getRGBA() : this.getWebColor()
                }
            }, {
                key: "getRGB",
                value: function() {
                    var e = this.r,
                        t = this.g,
                        o = this.b;
                    return null !== e && null !== t && null !== o ? "rgb(" + e + ", " + t + ", " + o + ")" : null
                }
            }, {
                key: "getRGBA",
                value: function() {
                    var e = this.r,
                        t = this.g,
                        o = this.b,
                        i = this.a;
                    return null !== e && null !== t && null !== o ? "rgba(" + e + ", " + t + ", " + o + ", " + (null === i ? 1 : i.toFixed(2)) + ")" : null
                }
            }, {
                key: "getWebColor",
                value: function() {
                    var e = this.r,
                        t = this.g,
                        o = this.b;
                    return null !== e && null !== t && null !== o ? "#" + this._getWebValue(e) + this._getWebValue(t) + this._getWebValue(o) : null
                }
            }, {
                key: "_getWebValue",
                value: function(e) {
                    var t = e.toString(16);
                    return 1 === t.length && (t = "0" + t), t
                }
            }]), a
        }(),
        i = ht.Default,
        G = i.drawText,
        U = i.drawStretchImage,
        Y = i.getImage,
        j = "#ffffff",
        z = "#cccccc",
        X = new v,
        a = ht.Default,
        ge = a.drawText,
        fe = a.drawStretchImage,
        pe = a.getImage,
        Q = function(e, t) {
            return e <= 1 ? t * e : e
        },
        te = void 0,
        oe = void 0,
        ie = void 0,
        ae = void 0,
        ye = void 0,
        be = void 0,
        xe = function(e, t) {
            return t ? (e - be) / te * oe + ie : ae - (e - be) / te * oe
        },
        me = ht.Default.drawText,
        Ce = function(e, t) {
            return e < 1 ? t * e : e
        },
        V = Math.max,
        I = Math.min,
        r = ht.Default,
        _ = r.containsPoint,
        S = r.drawRoundRect;

    function _e(e, t, o, i) {
        var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
            r = arguments[5],
            n = t.x,
            l = t.y,
            h = t.width,
            s = t.height,
            u = o.width,
            c = o.height,
            d = i.x,
            g = i.y,
            f = void 0,
            v = void 0,
            p = null,
            y = null,
            b = void 0,
            x = void 0,
            m = a.color,
            w = void 0 === m ? "red" : m,
            k = a.barWidth,
            C = void 0 === k ? 8 : k,
            V = a.gap,
            I = void 0 === V ? 2 : V,
            _ = a.visible;
        if (e.save(), s < c) {
            var D = s * (x = s / c);
            y = [n + h - C - I, l + -g * x, C, Math.max(D, 4)], v = s - c, _ && (e.beginPath(), S.apply(void 0, [e].concat(Ie(y), [Math.min(C, D) / 2])), e.fillStyle = w, e.fill())
        }
        if (h < u - 2) {
            var T = h * (b = h / u);
            p = [n + -d * b, l + s - C - I, Math.max(T, 4), C], f = h - u, _ && (e.beginPath(), S.apply(void 0, [e].concat(Ie(p), [Math.min(C, T) / 2])), e.fillStyle = w, e.fill())
        }
        r.scrollInfo = {
            scrollBarX: p,
            scrollBarY: y,
            scaleX: b,
            scaleY: x,
            minX: f,
            minY: v
        }, e.restore()
    }

    function R(e, t, o, i, a, r, n) {
        var l = Zo(e, "translateY"),
            h = Zo(e, "translateX"),
            s = Fo(o, t, e),
            u = No(o, t, e),
            c = u.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize,
            d = u.scrollInfo;
        if (d) {
            var g = d.minX,
                f = d.minY,
                v = d.scrollBarX,
                p = d.scrollBarY,
                y = d.scaleX,
                b = d.scaleY,
                x = void 0,
                m = {
                    x: i.x + s.rect.x,
                    y: i.y + s.rect.y
                };
            if (v) {
                var w = (c - (v = Ho(v)).height) / 2;
                v.y -= w, v.height = c
            }
            if (p) {
                var k = (c - (p = Ho(p)).width) / 2;
                p.x -= k, p.width = c
            }
            if (v && h && _(v, m)) x = {
                downPoint: i,
                startX: t.a(h) || 0,
                scaleX: y,
                minX: g,
                axis: A
            };
            else if (p && l && _(p, m)) x = {
                downPoint: i,
                startY: t.a(l) || 0,
                scaleY: b,
                minY: f,
                axis: M
            };
            else {
                var C = u.headHeight,
                    V = {
                        x: 0,
                        y: C,
                        width: a,
                        height: r - C
                    };
                !n && u.pannable && _(V, i) && (v || p) && (x = {
                    downPoint: i,
                    scaleX: y,
                    minX: g,
                    scaleY: b,
                    minY: f,
                    isPan: !0
                }, v && h && (x.startX = t.a(h) || 0, x.scaleX = y, x.minX = g), p && l && (x.startY = t.a(l) || 0, x.scaleY = b, x.minY = f))
            }
            return x
        }
    }

    function p(e, t, o, i, a, r) {
        var n = No(o, t, this),
            l = R(this, t, o, i, a, r);
        n._scrollDragInfo = l, n.scrollBarVisible = !!l
    }

    function y(e, g, t, f, o, i) {
        var v = No(t, g, this),
            p = v._scrollDragInfo,
            y = Zo(this, "translateY"),
            b = Zo(this, "translateX");
        v._dragTimer || (v._dragTimer = setTimeout(function() {
            if (p) {
                var e = p.axis,
                    t = p.minX,
                    o = p.minY,
                    i = p.downPoint,
                    a = p.startX,
                    r = p.startY,
                    n = p.scaleX,
                    l = p.scaleY,
                    h = p.isPan;
                if (e === A) {
                    var s = a + (i.x - f.x) / n;
                    s = I(0, s), s = V(t, s), b && g.a(b, s)
                } else if (e === M) {
                    var u = r + (i.y - f.y) / l;
                    u = I(0, u), u = V(o, u), y && g.a(y, u)
                } else if (h) {
                    if (void 0 !== a) {
                        var c = a + (f.x - i.x);
                        c = I(0, c), c = V(t, c), b && g.a(b, c)
                    }
                    if (void 0 !== r) {
                        var d = r + (f.y - i.y);
                        d = I(0, d), d = V(o, d), y && g.a(y, d)
                    }
                }
            }
            delete v._dragTimer
        }, 10))
    }

    function b(e, t, o, i, a, r) {
        var n = No(o, t, this);
        if (n._scrollDragInfo) {
            var l = n.scrollInfo,
                h = l.scrollBarX,
                s = l.scrollBarY,
                u = n.autoHideScrollBar;
            (h || s) && u && (n.scrollBarVisible = !0, D(t, n)), delete n._scrollDragInfo
        }
    }

    function m(e, t, o, i, a, r) {
        var n = No(o, t, this),
            l = n.scrollInfo,
            h = n.scrollSpeed || 1,
            s = Zo(this, "translateY"),
            u = Zo(this, "translateX");
        if (l) {
            var c = l.scrollBarX,
                d = l.scrollBarY,
                g = l.minX,
                f = l.minY,
                v = (e.wheelDeltaX || 0) / 40 * 5 * h,
                p = (e.wheelDeltaY || 0) / 40 * 5 * h,
                y = !1;
            if (d && s && p) {
                var b = (t.a(s) || 0) + p;
                b = I(0, b), b = V(f, b), t.a(s, b), y = !0
            }
            if (c && u && v) {
                var x = (t.a(u) || 0) + v;
                x = I(0, x), x = V(g, x), t.a(u, x), y = !0
            }
            if (!y && c && !d && u && p) {
                var m = (t.a(u) || 0) + p;
                m = I(0, m), m = V(g, m), t.a(u, m)
            }
            var w = n.autoHideScrollBar;
            (c || d) && w && (n.scrollBarVisible = !0, D(t, n))
        }
    }

    function D(e, t) {
        e._hideBarTimer && (clearTimeout(e._hideBarTimer), e._hideBarTimer = null), e._hideBarTimer = setTimeout(function() {
            t._scrollDragInfo || (t.scrollBarVisible = !1, e.iv())
        }, 1e3)
    }
    var w = ht.Default,
        De = w.drawText,
        Te = w.drawStretchImage,
        Se = w.getImage,
        Re = w.drawBorder,
        Le = w.intersectsRect,
        Pe = /\n/g;
    var F = ht.Default.drawText,
        T = ht.Default,
        W = T.drawRoundRect,
        N = T.drawImage,
        L = ht.Default,
        Ve = L.drawRoundRect,
        Be = L.drawImage,
        P = ht.Default,
        Ee = P.drawRoundRect,
        Ae = P.drawText,
        Me = P.createGradient,
        B = function() {
            function t(e) {
                u(this, t), this.children = [], this.data = e
            }
            return n(t, [{
                key: "addChildren",
                value: function(e) {
                    this.children.push(e)
                }
            }, {
                key: "getLeafCheckedChildren",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return 0 === e.children.length && e.checked
                    })
                }
            }, {
                key: "expandAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        0 < e.children.length && (e.expanded = !0)
                    }), this.data.iv()
                }
            }, {
                key: "collapseAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        0 < e.children.length && (e.expanded = !1)
                    }), this.data.iv()
                }
            }, {
                key: "checkAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        e.checked = !0, e._isShowUnCheckAllIcon = !1
                    }), this.data.iv()
                }
            }, {
                key: "unCheckAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        e.checked = !1, e._isShowUnCheckAllIcon = !1
                    }), this.data.iv()
                }
            }, {
                key: "disableAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        e.disabled = !0
                    }), this.data.iv()
                }
            }, {
                key: "enableAll",
                value: function() {
                    this.traverseByBreadthFirst(function(e) {
                        e.disabled = !1
                    }), this.data.iv()
                }
            }, {
                key: "getSelected",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return e.selected
                    })
                }
            }, {
                key: "getUnselected",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return !e.selected
                    })
                }
            }, {
                key: "getExpanded",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return e.expanded
                    })
                }
            }, {
                key: "getCollapsed",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return !e.expanded
                    })
                }
            }, {
                key: "getChecked",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return e.checked
                    })
                }
            }, {
                key: "getUnChecked",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return !e.checked
                    })
                }
            }, {
                key: "getEnabled",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return !e.disabled
                    })
                }
            }, {
                key: "getDisabled",
                value: function() {
                    return this.filterByBreadthFirst(function(e) {
                        return e.disabled
                    })
                }
            }, {
                key: "filterByDepthFirst",
                value: function(e) {
                    for (var t = [], o = this.children, i = [], a = o.length - 1; 0 <= a; a--) i.push(o[a]);
                    for (; 0 != i.length;) {
                        var r = i.pop();
                        e(r) && t.push(r);
                        for (var n = r.children, l = n.length - 1; 0 <= l; l--) i.push(n[l])
                    }
                    return t
                }
            }, {
                key: "traverseByDepthFirst",
                value: function(e) {
                    for (var t = this.children, o = [], i = t.length - 1; 0 <= i; i--) o.push(t[i]);
                    for (; 0 != o.length;) {
                        var a = o.pop();
                        e(a);
                        for (var r = a.children, n = r.length - 1; 0 <= n; n--) o.push(r[n])
                    }
                }
            }, {
                key: "filterByBreadthFirst",
                value: function(e) {
                    for (var t = [].concat(this.children), o = []; 0 < t.length;) {
                        var i = t.shift(),
                            a = i.children;
                        t = t.concat(a), e(i) && o.push(i)
                    }
                    return o
                }
            }, {
                key: "traverseByBreadthFirst",
                value: function(e) {
                    for (var t = [].concat(this.children); 0 < t.length;) {
                        var o = t.shift(),
                            i = o.children;
                        t = t.concat(i), "function" == typeof e && e(o)
                    }
                }
            }]), t
        }(),
        E = function() {
            function i(e) {
                u(this, i), Object.assign(this, Object.assign({
                    text: "treeItem",
                    icon: null,
                    children: [],
                    tags: [],
                    expanded: !1,
                    selected: !1,
                    disabled: !1,
                    checked: !1,
                    isLeaf: !1,
                    _isHovering: !1,
                    _isLoading: !1,
                    _isShowUnCheckAllIcon: !1,
                    _treeItemRect: {},
                    _elementRect: {},
                    _textInfo: {}
                }, e)), this.children = []
            }
            return n(i, [{
                key: "getSiblings",
                value: function() {
                    var e = this.parent.children,
                        t = e.indexOf(this);
                    return e.slice(0, t).concat(e.slice(t + 1, e.length))
                }
            }, {
                key: "getPreSibling",
                value: function() {
                    var e = this.parent.children,
                        t = e.indexOf(this) - 1;
                    return t < 0 ? null : e[t]
                }
            }, {
                key: "getPreVisibleSibling",
                value: function(e) {
                    for (var t = this.getPreSibling(); t && !e(t);) t = t.getPreSibling();
                    return t && e(t) ? t : null
                }
            }, {
                key: "getNextSibling",
                value: function() {
                    var e = this.parent.children,
                        t = e.indexOf(this) + 1;
                    return t === e.length ? null : e[t]
                }
            }, {
                key: "setParent",
                value: function(e) {
                    this.parent = e, this.parent.addChildren(this)
                }
            }, {
                key: "addChildren",
                value: function(e) {
                    if (e instanceof i) this.children.push(e);
                    else if (e instanceof Array)
                        for (var t = 0, o = e.length; t < o; t++) Oe(e[t], this)
                }
            }, {
                key: "isVisible",
                value: function() {
                    for (var e = this.parent; e instanceof i;) {
                        if (!e.expanded) return !1;
                        e = e.parent
                    }
                    return !0
                }
            }, {
                key: "checkAfter",
                value: function() {
                    var e = this.checked,
                        t = this.children;
                    this._isShowUnCheckAllIcon = !1;
                    for (var o = 0, i = t.length; o < i; o++) {
                        var a = t[o];
                        a.checked = e, a.checkAfter()
                    }
                }
            }, {
                key: "checkBefore",
                value: function() {
                    var e = this.parent,
                        t = 0,
                        o = 0;
                    if (e && !(e instanceof B)) {
                        for (var i = e.children, a = i.length, r = 0; r < a; r++) {
                            var n = i[r];
                            n.checked && t++, n._isShowUnCheckAllIcon && o++
                        }
                        0 !== t ? e.checked = t === r ? !(e._isShowUnCheckAllIcon = !1) : !(e._isShowUnCheckAllIcon = !0) : (e.checked = !1, e._isShowUnCheckAllIcon = 0 !== o), e.parent && e.checkBefore()
                    }
                }
            }]), i
        }(),
        Oe = function e(t) {
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                i = t.children,
                a = new E(t);
            if (o && a.setParent(o), a.deep = O(a), i && 0 < i.length)
                if (t.expanded)
                    for (var r = 0, n = i.length; r < n; r++) e(i[r], a);
                else a.jsonChildren = t.children;
            return a
        },
        O = function(e) {
            for (var t = 0, o = e.parent; o instanceof E;) o = o.parent, t++;
            return t
        },
        Yt = function(e) {
            var t = e.showCheckbox,
                o = e.showIcon,
                i = e.expandIconSize,
                a = e.iconSize,
                r = e.checkIconSize,
                n = e.space,
                l = i + n;
            return o && (l += a + n), t && (l += r + n), l
        },
        jt = function(e) {
            var t = e.x,
                o = e.y,
                i = e.width,
                a = e.height,
                r = i / 2,
                n = a / 2;
            return {
                middleMiddle: {
                    x: t + r,
                    y: o + n
                },
                topMiddle: {
                    x: t + r,
                    y: o
                },
                bottomMiddle: {
                    x: t + r,
                    y: o + a
                },
                leftMiddle: {
                    x: t,
                    y: o + n
                },
                rightMiddle: {
                    x: t + i,
                    y: o + n
                }
            }
        },
        H = ht.Default,
        zt = H.drawStretchImage,
        Xt = H.getImage,
        Kt = H.intersectsRect,
        Zt = H.drawRoundRect,
        He = ht.Default,
        We = He.drawText,
        Fe = He.drawStretchImage,
        Ne = He.getImage,
        Ge = {},
        Ue = function(e, t, o, i) {
            for (var a = [], r = 0, n = ko(o, "图"), l = n.height / 3, h = 1, s = e.length; h <= s; h++) t < (l += n.height + i) && (r = h - 1 === r ? (a.push(e.substring(r, h)), h) : (a.push(e.substring(r, h - 1)), h - 1), l = n.height / 3);
            return r !== h - 1 && a.push(e.substring(r, h)), a
        },
        Ye = ht.Default,
        je = Ye.drawText,
        ze = Ye.drawRoundRect,
        Xe = void 0,
        Ke = void 0,
        Ze = function(e, t, o, i, a, r) {
            return t ? r : Xe === e ? i || o : e === Ke && a || o
        },
        $e = function(e, t) {
            return 0 === e && 1 === t ? 3 : 0 === e ? 0 : e === t - 1 ? 2 : 1
        },
        qe = function() {
            function e() {
                u(this, e)
            }
            return n(e, [{
                key: "onClick",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onDoubleClick",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onDown",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onUp",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onEnter",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onHover",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onScroll",
                value: function(e, t, o, i, a, r) {}
            }]), e
        }(),
        Je = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.defaultCursor = o.getView().style.cursor, n.disabled ? Xo(o, "not-allowed") : Xo(o, "text")
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, n.defaultCursor || "default")
                }
            }, {
                key: "onDown",
                value: function(e, a, r, t, o, i) {
                    var n = No(r, a, this);
                    if (!n.disabled && !n.editing) {
                        var l = n.font,
                            h = n.value,
                            s = n.textAlign,
                            u = n.maxLength,
                            c = n.textColor,
                            d = n.wordBreak,
                            g = n.selectTextOnFocus,
                            f = n.padding,
                            v = n.onKeyDown,
                            p = n.onKeyUp,
                            y = n.onChange,
                            b = n.lineHeight,
                            x = Io("textarea"),
                            m = x.style,
                            w = Zo(this, "value"),
                            k = Co(f),
                            C = we(k, 4),
                            V = C[0],
                            I = C[1],
                            _ = C[2],
                            D = C[3];
                        m.color = c, m.font = l, m.paddingTop = V + "px", m.paddingRight = I + "px", m.paddingBottom = _ + "px", m.paddingLeft = 2 + D + "px", m.textAlign = s, m.resize = "none", m.overflow = "hidden", m.lineHeight = b + "px", m.wordBreak = d ? "break-all" : "keep-word", x.value = h || "", u && x.setAttribute("maxlength", u), r.appendHTML(x);
                        var T = Fo(r, a, this);
                        T && _o(r, x, T), n.editing = !0, n.editingValue = h, a.iv();
                        var S = function(e) {
                                _o(r, x, T)
                            },
                            R = function e(t) {
                                var o = x.getBoundingClientRect(),
                                    i = ht.Default.getClientPoint(t);
                                ht.Default.containsPoint(o, i) || (t.preventDefault(), Uo(a, r, x, n, w), r.ump(S), r.getView().removeEventListener("mousedown", e), r.getView().removeEventListener("touchstart", e))
                            };
                        setTimeout(function() {
                            g && x.addEventListener("focus", function(e) {
                                x.select()
                            }), x.focus(), r.mp(S);
                            var t = null;
                            x.addEventListener("keydown", function(e) {
                                t && clearTimeout(t), t = setTimeout(function() {
                                    n.editingValue = x.value, a.a(w, x.value)
                                }, 10), 9 === e.keyCode && (Uo(a, r, x, n, w), r.getView().removeEventListener("mousedown", R), r.getView().removeEventListener("touchstart", R)), v && v(e, a, r)
                            }), (p || y) && x.addEventListener("keyup", function(e) {
                                p && p(e, a, r), y && y(x.value, a, r)
                            }), r.getView().addEventListener("mousedown", R), r.getView().addEventListener("touchstart", R)
                        }, 1)
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {}
            }]), t
        }(),
        Qe = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.defaultCursor = o.getView().style.cursor, n.disabled ? Xo(o, "not-allowed") : Xo(o, "text")
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, n.defaultCursor || "default")
                }
            }, {
                key: "onDown",
                value: function(e, a, r, t, o, i) {
                    var n = No(r, a, this);
                    if (!n.disabled && !n.editing) {
                        var l = n.font,
                            h = n.value,
                            s = n.textAlign,
                            u = n.maxLength,
                            c = n.textColor,
                            d = n.inputType,
                            g = n.enterEndInputable,
                            f = n.padding,
                            v = n.onKeyDown,
                            p = n.onKeyUp,
                            y = n.onChange,
                            b = n.selectTextOnFocus,
                            x = a.getAnchorRect(),
                            m = Io(),
                            w = c || ke.textColor,
                            k = m.style,
                            C = Zo(this, "value"),
                            V = Co(f),
                            I = we(V, 4),
                            _ = I[0],
                            D = I[1],
                            T = I[2],
                            S = I[3];
                        d && (m.type = d), k.color = w, k.font = l, k.paddingTop = _ + "px", k.paddingRight = D + "px", k.paddingBottom = T + "px", k.paddingLeft = 2 + S + "px", k.lineHeight = x.height + "px", k.textAlign = s, m.value = h || "", m.spellcheck = !1, u && m.setAttribute("maxlength", u), r.appendHTML(m);
                        var R = Fo(r, a, this);
                        R && _o(r, m, R), n.editing = !0, n.editingValue = h, a.iv();
                        var L = function(e) {
                                _o(r, m, R)
                            },
                            P = function e(t) {
                                var o = m.getBoundingClientRect(),
                                    i = ht.Default.getClientPoint(t);
                                ht.Default.containsPoint(o, i) || (t.preventDefault(), Uo(a, r, m, n, C), r.ump(L), r.getView().removeEventListener("mousedown", e), r.getView().removeEventListener("touchstart", e))
                            };
                        setTimeout(function() {
                            b && m.addEventListener("focus", function(e) {
                                m.select()
                            }), m.focus(), r.mp(L);
                            var t = null;
                            m.addEventListener("keydown", function(e) {
                                t && clearTimeout(t), t = setTimeout(function() {
                                    n.editingValue = m.value, a.a(C, m.value)
                                }, 10), (9 === e.keyCode || g && ht.Default.isEnter(e)) && (Uo(a, r, m, n, C), r.getView().removeEventListener("mousedown", P), r.getView().removeEventListener("touchstart", P)), v && v(e, a, r)
                            }), (p || y) && m.addEventListener("keyup", function(e) {
                                p && p(e, a, r), y && y(m.value, a, r)
                            }), r.getView().addEventListener("mousedown", P), r.getView().addEventListener("touchstart", P)
                        }, 1)
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {}
            }]), t
        }(),
        et = ht.Default.containsPoint,
        tt = function(e, t, o, i, a, r, n) {
            if (i && (i.editing = !1, delete i.dom), a) {
                var l = parseFloat(o.value);
                jo(n) || (l = Math.min(l, n)), jo(r) || (l = Math.max(l, r)), e.a(a, l)
            }
            e.iv(), t.getView().removeChild(o)
        },
        ot = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.defaultCursor = o.getView().style.cursor, n.disabled ? Xo(o, "not-allowed") : Xo(o, "text")
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    Xo(o, "default")
                }
            }, {
                key: "onDown",
                value: function(e, a, r, t, o, i) {
                    var n = No(r, a, this),
                        l = Fo(r, a, this),
                        h = n.buttonRects,
                        s = n.onKeyDown,
                        u = n.onKeyUp,
                        c = n.onChange,
                        d = n.min,
                        g = n.max,
                        f = {
                            x: t.x + l.rect.x,
                            y: t.y + l.rect.y
                        },
                        v = h && (et(h[0], f) || et(h[1], f));
                    if (!n.disabled)
                        if (n.editing || v) {
                            if (v) {
                                var p = n.step,
                                    y = Zo(this, "value");
                                if (!y) return;
                                var b = n.dom && n.dom.value || a.a(y) || d || 0,
                                    x = void 0;
                                et(h[0], f) ? (x = $o(parseFloat(b), p), jo(g) || (x = Math.min(x, g))) : (x = qo(parseFloat(b), p), jo(d) || (x = Math.max(x, d))), n.editing ? (n.editingValue = n.dom.value = x, a.iv()) : a.a(y, x), c && b !== x && c(x, a, r)
                            }
                        } else {
                            var m = n.font,
                                w = n.value,
                                k = n.textAlign,
                                C = n.maxLength,
                                V = n.textColor,
                                I = n.enterEndInputable,
                                _ = n.padding,
                                D = n.selectTextOnFocus,
                                T = a.getAnchorRect(),
                                S = Io(),
                                R = V || ke.textColor,
                                L = S.style,
                                P = Zo(this, "value"),
                                B = Co(_),
                                E = we(B, 4),
                                A = E[0],
                                M = E[1],
                                O = E[2],
                                H = E[3];
                            L.color = R, L.font = m, L.paddingTop = A + "px", L.paddingRight = M + "px", L.paddingBottom = O + "px", L.paddingLeft = 2 + H + "px", L.lineHeight = T.height + "px", L.textAlign = k, S.value = w || "", S.spellcheck = !1, C && S.setAttribute("maxlength", C), r.appendHTML(S);
                            var W = Fo(r, a, this);
                            W && _o(r, S, W), n.editing = !0, n.editingValue = w, n.dom = S, a.iv();
                            var F = function(e) {
                                    _o(r, S, W)
                                },
                                N = function e(t) {
                                    var o = S.getBoundingClientRect(),
                                        i = ht.Default.getClientPoint(t);
                                    ht.Default.containsPoint(o, i) || (t.preventDefault(), tt(a, r, S, n, P, d, g), r.ump(F), r.getView().removeEventListener("mousedown", e), r.getView().removeEventListener("touchstart", e))
                                };
                            setTimeout(function() {
                                D && S.addEventListener("focus", function(e) {
                                    S.select()
                                }), S.focus(), r.mp(F);
                                var t = null;
                                S.addEventListener("keydown", function(e) {
                                    t && clearTimeout(t), t = setTimeout(function() {
                                        if (n.editingValue = S.value, P) {
                                            var e = parseFloat(S.value);
                                            jo(g) || (e = Math.min(e, g)), jo(d) || (e = Math.max(e, d)), a.a(P, e)
                                        }
                                    }, 10), (9 === e.keyCode || I && ht.Default.isEnter(e)) && (tt(a, r, S, n, P, d, g), r.getView().removeEventListener("mousedown", N), r.getView().removeEventListener("touchstart", N)), s && s(e, a, r)
                                }), S.addEventListener("keyup", function(e) {
                                    u && u(e, a, r), c && c(parseFloat(S.value), a, r)
                                }), S.addEventListener("input", function(e) {
                                    e.target.value = e.target.value.replace(/[^\d\.{1}]/g, "")
                                }), r.getView().addEventListener("mousedown", N), r.getView().addEventListener("touchstart", N)
                            }, 1)
                        }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = Fo(o, t, this),
                        h = n.buttonRects,
                        s = {
                            x: i.x + l.rect.x,
                            y: i.y + l.rect.y
                        },
                        u = "text";
                    n.disabled ? u = "not-allowed" : h && (ht.Default.containsPoint(h[0], s) || ht.Default.containsPoint(h[1], s)) && (u = "pointer"), Xo(o, u), n.dom && (n.dom.style.cursor = u)
                }
            }]), t
        }(),
        it = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.disabled || (n.pressed = !0, t.iv())
                }
            }, {
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.defaultCursor = o.getView().style.cursor, n.disabled ? Xo(o, "not-allowed") : Xo(o, "pointer"), n.disabled || (n.hover = !0, t.iv())
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, n.defaultCursor || "default"), delete n.defaultCursor, n.hover = !1, t.iv()
                }
            }]), t
        }(),
        at = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.onClick;
                    n.disabled || (n.pressed = !1, t.iv(), l && 0 < i.x && i.x < a && 0 < i.y && i.y < r && l(e, t, o))
                }
            }]), t
        }(),
        rt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.disabled,
                        h = n.pressed,
                        s = Zo(this, "checked"),
                        u = Zo(this, "group");
                    if (!l) {
                        t.a(h, !1), t.iv();
                        var c = n.value,
                            d = n.onChange,
                            g = n.group;
                        if (!t.a(s) && 0 < i.x && i.x < a && 0 < i.y && i.y < r) {
                            var f = t.a(s);
                            o && o.dm() && !f && g && o.dm().each(function(e) {
                                g === e.a(u) && e.a(s, !1)
                            }), t.a(s, !0), d && d(void 0 === c || c, t, o)
                        }
                    }
                }
            }]), t
        }(),
        nt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.disabled,
                        h = n.pressed,
                        s = Zo(this, "checked"),
                        u = Zo(this, "group"),
                        c = Zo(this, "value");
                    if (!l) {
                        t.a(h, !1), t.iv();
                        n.value;
                        var d = n.group,
                            g = n.onChange;
                        if (0 < i.x && i.x < a && 0 < i.y && i.y < r) {
                            var f = t.a(s);
                            if (t.a(s, !f), g)
                                if (d) {
                                    var v = [];
                                    o.dm().each(function(e) {
                                        d === e.a(u) && e.a(s) && v.push(e.a(c))
                                    }), g(v, t, o)
                                } else g(!f, t, o)
                        }
                    }
                }
            }]), t
        }(),
        lt = function() {
            function a(t, e, o, i) {
                u(this, a), this.data = t, this.graph = e, this.vectorInfo = o, this.valueType = i, this._documentClickHandler = this.documentClickHandler.bind(this), ht.Default.addMethod(t, {
                    isInstant: function() {
                        return this.s("instant")
                    },
                    setInstant: function(e) {
                        t.s("instant", e)
                    }
                })
            }
            return n(a, [{
                key: "init",
                value: function() {
                    var e = this;
                    this._initing = !0;
                    var t = this.data,
                        o = this.graph,
                        i = o.getZoom(),
                        a = (o.tx(), o.ty(), this.value),
                        r = new this.dropDownClazz,
                        n = r._dropDownView = r.initDropDownView(t, this.getDatas(), a);
                    r.getDropDownView = function() {
                        return n
                    }, n.on("d:click", function(e) {
                        e.stopPropagation()
                    }), n.on("d:mousedown", function(e) {
                        e.stopPropagation()
                    }), n.on("d:mousewheel", function(e) {
                        e.stopPropagation()
                    }), this._dropDown = r, this._dropDownView = n, this.onInit(r, n);
                    t.getWidth(), t.getHeight();
                    var l = Qo(this.vectorInfo.comp, this.data, this.graph);
                    this.prepareLayoutDropDown(r, n, {
                        left: l.x,
                        top: l.y,
                        width: l.widht,
                        height: l.height
                    }), document.body.appendChild(n.getView()), r.addValueChangeListener(this.handleDropDownValueChange, this), r.addDropDownListener(this.handleDropDownChange, this), setTimeout(function() {
                        e.registerCloseEvent(e._documentClickHandler)
                    }, 100), r.afterOpen(a), n.iv(!0), this._initing = !1
                }
            }, {
                key: "onInit",
                value: function(e, t) {}
            }, {
                key: "getDatas",
                value: function() {
                    return null
                }
            }, {
                key: "prepareLayoutDropDown",
                value: function(e, t, o) {
                    var i = e.getWidth(),
                        a = e.getHeight(),
                        r = ht.Default.getWindowInfo(),
                        n = o.left + r.left,
                        l = o.top + o.height + r.top;
                    n + i > r.left + r.width && (n = r.left + r.width - i), l + a > r.top + r.height && (l -= o.height + a) < r.top && (l = r.top), t.setX(Math.max(0, n)), t.setY(l), t.setWidth(i), t.setHeight(a)
                }
            }, {
                key: "registerCloseEvent",
                value: function(e) {
                    ht.Default.isTouchable ? document.addEventListener("touchstart", e) : document.addEventListener("mousedown", e)
                }
            }, {
                key: "unregisterCloseEvent",
                value: function(e) {
                    ht.Default.isTouchable ? document.removeEventListener("touchstart", e) : document.removeEventListener("mousedown", e)
                }
            }, {
                key: "_clearDropDown",
                value: function() {
                    this._dropDown = this._dropDownView = null, this.vectorInfo.editing = !1, this.data.iv()
                }
            }, {
                key: "documentClickHandler",
                value: function(e) {
                    var t = this.data,
                        o = this.graph;
                    if (ht.Default.isLeftButton(e)) {
                        var i = this._dropDown,
                            a = this._dropDownView;
                        if (a) {
                            var r = t.getWidth(),
                                n = t.getHeight(),
                                l = o.tx(),
                                h = o.ty(),
                                s = o.getZoom(),
                                u = {
                                    x: t.getX() * s + l - r * t.getAnchor().x,
                                    y: t.getY() * s + h - n * t.getAnchor().y,
                                    width: r,
                                    height: n
                                },
                                c = a.containsEvent ? a.containsEvent(e) : i.isClickOnDropDownView(e);
                            ht.Default.containsPoint(u, ht.Default.getClientPoint(e)) || c || this.close()
                        }
                    }
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    !e._initing && e._dropDown && (e._dropDown.cancel(), this.vectorInfo.editing = !1, delete e._dropDown, delete e._dropDownView, this.data.iv())
                }
            }, {
                key: "handleDropDownValueChange",
                value: function(e) {
                    this.value = e.value
                }
            }, {
                key: "open",
                value: function() {
                    this.isOpened() || (this.init(), this.vectorInfo.editing = !0, this.data.iv())
                }
            }, {
                key: "isOpened",
                value: function() {
                    return !!this._dropDown
                }
            }, {
                key: "handleDropDownChange",
                value: function(e) {
                    this.data;
                    var t = this,
                        o = t._dropDown,
                        i = t._dropDownView;
                    if (o) {
                        if (o.beforeClose(), "stop" === e.kind) {
                            var a = o.getDropDownValue();
                            void 0 !== a && (this.value = a)
                        }
                        t._clearDropDown(), ht.Default.removeHTML(i.getView()), o.removeValueChangeListener(t.handleDropDownValueChange, t), this.unregisterCloseEvent(this._documentClickHandler), o.afterClose()
                    }
                }
            }, {
                key: "value",
                get: function() {
                    var e = this.data,
                        t = this.valueType.split("@"),
                        o = we(t, 2),
                        i = o[0],
                        a = o[1];
                    if ("a" === i) return e.a(a);
                    if ("s" === i) return e.s(a);
                    if ("p" === i) {
                        var r = ht.Default.getter(a);
                        if (e[r]) return e[r]()
                    }
                    return null
                },
                set: function(e) {
                    var t = this.data,
                        o = this.valueType,
                        i = this.graph,
                        a = o.split("@"),
                        r = we(a, 2),
                        n = r[0],
                        l = r[1],
                        h = this.vectorInfo.onChange,
                        s = this.value;
                    if ("a" === n) t.a(l, e);
                    else if ("s" === n) t.s(l, e);
                    else if ("p" === n) {
                        var u = ht.Default.setter(l);
                        t[u] && t[u](e)
                    }
                    h && h(s, e, t, i)
                }
            }]), a
        }(),
        st = function(e) {
            function r(e, t, o, i) {
                u(this, r);
                var a = d(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t, o, i));
                return a.dropDownClazz = ht.ui.ColorDropDown, a
            }
            return c(r, lt), r
        }(),
        ut = function(e, t, o, i) {
            var a = o.dropDown;
            a || (a = new st(e, t, o, "a@" + i), o.dropDown = a), a.open()
        },
        ct = function(e) {
            function r(e, t, o, i) {
                u(this, r);
                var a = d(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t, o, i));
                return a.dropDownClazz = ht.ui.DateTimeDropDown, a
            }
            return c(r, lt), n(r, [{
                key: "onInit",
                value: function(e, t) {
                    var o = this.data.a(C.DATE_TYPE);
                    e.setPropertyValue("dateTimePane.type", o, !0)
                }
            }]), r
        }(),
        dt = function(e, t, o, i) {
            var a = o.dropDown;
            a || (e.getFormat = function() {
                return e.a(C.FORMAT)
            }, a = new ct(e, t, o, i), o.dropDown = a), a.open()
        },
        gt = function(e) {
            function r(e, t, o, i) {
                u(this, r);
                var a = d(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t, o, i));
                return e.getDropDownConfig = function() {
                    return e.a("dropDownConfig") || {}
                }, a.dropDownClazz = ht.ui.DateRangeDropDown, a
            }
            return c(r, lt), n(r, [{
                key: "onInit",
                value: function(e, t) {
                    var o = this.data.a(C.DATE_TYPE);
                    e.setPropertyValue("dateTimePane.type", o, !0)
                }
            }]), r
        }(),
        ft = (function(e) {
            function a(e, t, o) {
                u(this, a);
                var i = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t, o));
                return i.dropDownClazz = ht.ui.ListDropDown, i
            }
            c(a, lt), n(a, [{
                key: "getDatas",
                value: function() {
                    return [{
                        id: void 0,
                        label: ""
                    }, {
                        id: "0",
                        label: "Female"
                    }, {
                        id: "1",
                        label: "Male"
                    }]
                }
            }])
        }(), function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        n.pressed = !1, t.iv();
                        var l = Zo(this, "value", t, o);
                        0 < i.x && i.x < a && 0 < i.y && i.y < r && ut(t, o, n, l)
                    }
                }
            }]), t
        }()),
        vt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l = Zo(this, "value");
                        0 < i.x && i.x < a && 0 < i.y && i.y < r && dt(t, o, n, "a@" + l)
                    }
                }
            }]), t
        }(),
        pt = function(e) {
            function t(e) {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return c(t, e), n(t, [{
                key: "handle_mousedown",
                value: function(e) {
                    this.handle_touchstart(e)
                }
            }, {
                key: "handle_touchstart",
                value: function(e) {
                    if (e.stopPropagation(), !this.gv.isOnScrollBar(e)) {
                        var t = this.gv,
                            o = t.getDataAt(e);
                        o && t.sm().ss(o)
                    }
                }
            }, {
                key: "handle_mousemove",
                value: function(e) {
                    var t = this.gv,
                        o = t._hoverData,
                        i = t.getDataAt(e);
                    i !== o && (t._hoverData = i && t.sm().contains(i) ? null : i, t.redraw())
                }
            }, {
                key: "handle_mouseleave",
                value: function(e) {
                    var t = this.gv;
                    t._hoverData && (t._hoverData = null, t.redraw())
                }
            }, {
                key: "handle_mouseup",
                value: function(e) {
                    this.handle_touchend(e)
                }
            }, {
                key: "handle_touchend",
                value: function(e) {}
            }]), t
        }(ht.graph.Interactor),
        yt = {
            hoverDarker: 5,
            activeDarker: 11,
            baseColor: "#3399ff",
            baseColor2: "#737373",
            hoverBackground: "#eeeeee",
            emptyColor: "#ffffff",
            fontSize: 12,
            fontFamily: "arial, sans-serif",
            font: "12px arial sans-serif",
            disabledColor: "#ebebeb",
            disabledBackground: "#fafafa",
            inputTextColor: "#111111",
            placeholderColor: "#737373"
        },
        bt = function(e) {
            function i(e) {
                u(this, i);
                var t = d(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                t.setInteractors([new ht.graph.ScrollBarInteractor(t), new pt(t), new ht.graph.DefaultInteractor(t), new ht.graph.TouchInteractor(t, {
                    editable: !1
                })]), t.addBottomPainter(t.drawBottomPainter.bind(t)), t.setAutoHideScrollBar(!1), t._nodes = [];
                var o = t.getView().style;
                return o.transition = "all 0.2s", o.transitionOrigin = "0 0", t
            }
            return c(i, e), n(i, [{
                key: "adjustTranslateX",
                value: function() {
                    return 0
                }
            }, {
                key: "isMovable",
                value: function() {
                    return !1
                }
            }, {
                key: "adjustZoom",
                value: function() {
                    return 1
                }
            }, {
                key: "adjustTranslateY",
                value: function(e) {
                    var t = this,
                        o = this.dm().toDatas(function(e) {
                            return t.isVisible(e)
                        }),
                        i = this.getHeight() - o.size() * this._rowHeight;
                    return 0 <= e || 0 <= i ? 0 : i < e ? e : i
                }
            }, {
                key: "handleScroll",
                value: function(e) {
                    var t = wo ? -e.detail : e.wheelDelta / 40;
                    (wo || e.wheelDelta !== e.wheelDeltaX) && this.translate(0, t)
                }
            }, {
                key: "onPropertyChanged",
                value: function(e) {
                    o(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "onPropertyChanged", this).call(this, e);
                    var t = e.property;
                    "dataModel" !== t && "fileSize" !== t || this.doLayoutLater()
                }
            }, {
                key: "doLayoutLater",
                value: function() {
                    this._doLayoutLater || (this._doLayoutLater = !0, ht.Default.callLater(this.doLayout, this))
                }
            }, {
                key: "onValidated",
                value: function() {
                    this._lastWidth !== this.getWidth() && this.doLayoutLater()
                }
            }, {
                key: "isVisible",
                value: function(e) {
                    return !0
                }
            }, {
                key: "doLayout",
                value: function() {
                    var t = this;
                    this._doLayoutLater = !1;
                    this._lastWidth = this.getWidth();
                    var o = this._iconHeight,
                        i = this._iconWidth,
                        a = this._rowHeight,
                        r = this._nodes = [];
                    this.dm().getDatas().each(function(e) {
                        t.isVisible(e) && r.push(e)
                    }), this._lastHeight = this.getHeight();
                    var n = 8 + .5 * i,
                        l = .5 * a;
                    r.forEach(function(e, t) {
                        e.setSize(i, o), e.p(n, l), l += a
                    })
                }
            }, {
                key: "drawBottomPainter",
                value: function(o) {
                    var i = this,
                        a = this._rowHeight,
                        r = this.getWidth(),
                        n = this._hoverData,
                        l = this._dropBorderColor,
                        h = this._dropBorderWidth;
                    if (this.dm().toDatas(this.isVisible, this).each(function(e) {
                            if (o.beginPath(), o.rect(0, e.p().y - a / 2, r, a), i.isSelected(e) ? (o.fillStyle = i.getActiveColor() || yt.baseColor, o.fill()) : e === n && (o.fillStyle = i.getHoverBackground() || yt.hoverBackground, o.fill()), l && h) {
                                var t = e.p().y + a / 2 - .5 * h;
                                o.beginPath(), o.moveTo(0, t), o.lineTo(r, t), o.strokeStyle = l, o.lineWidth = h, o.stroke()
                            }
                        }), l && h) {
                        var e = this.getViewRect(),
                            t = e.x,
                            s = e.y,
                            u = e.width,
                            c = e.height;
                        o.strokeStyle = l, o.lineWidth = h, o.strokeRect(t + .5 * h, s + .5 * h, u - h, c - h)
                    }
                }
            }, {
                key: "getDataAt",
                value: function(e) {
                    var t = Math.floor(this.lp(e).y / this._rowHeight);
                    return this._nodes[t]
                }
            }, {
                key: "handleSelectionChange",
                value: function(e) {
                    o(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSelectionChange", this).call(this, e), this.redraw()
                }
            }, {
                key: "getSelectWidth",
                value: function() {
                    return 0
                }
            }, {
                key: "isOnScrollBar",
                value: function(e) {
                    var t = this.getViewRect(),
                        o = this.getScrollRect(),
                        i = this.getScrollBarSize(),
                        a = this.lp(e);
                    return ht.Default.isTouchable && (i *= 1.5), o.height > t.height && a.x - t.x > t.width - i
                }
            }]), i
        }(ht.graph.GraphView);
    Po(bt, {
        ms_ac: ["rowHeight", "iconWidth", "iconHeight", "activeColor", "hoverBackground", "dropBorderWidth", "dropBorderColor"],
        _rowHeight: 26,
        _iconWidth: 20,
        _iconHeight: 20
    });
    var xt = function(e) {
        function l(e, t, o, i, a) {
            u(this, l);
            var r = d(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
            r.setSelectionMode(a ? h : s), r._master = e, r._masterGraph = t, r._vectorInfo = o, r._valueName = i, r._transition = !1, r._documentClickHandler = r.documentClickHandler.bind(r), r._previousValue = null, r.dm().setAutoAdjustIndex(!1), r.setInteractors([new ht.graph.ScrollBarInteractor(r), new ht.graph.MoveInteractor(r), new ht.graph.DefaultInteractor(r), new ht.graph.TouchInteractor(r)]);
            var n = r.getView().style;
            return n.height = 0, n.boxShadow = "rgba(0, 0, 0, 0.3) 0px 8px 22px", Do(n, "transition", "all 0.3s esse-in"), r.mi(function(e) {
                e.event && (e.event.preventDefault(), e.event.stopPropagation()), "clickData" === e.kind && r.handleSelectData(e.data)
            }), r.sm().ms(function(e) {
                r.dm().each(function(e) {
                    e instanceof ht.Text && e.s("text.color", r.getLabelColor(e))
                })
            }), r.mp(function(e) {
                "background" === e.property && (n.background = e.newValue)
            }), r.getView().addEventListener("mousemove", function(e) {
                var t = r._hoverData,
                    o = r.getDataAt(e);
                o !== t && (r._hoverData = o && r.sm().contains(o) ? null : o, r.redraw())
            }), r._initStyleByMaster(), r
        }
        return c(l, bt), n(l, [{
            key: "_initStyleByMaster",
            value: function() {
                var e = this._vectorInfo;
                this.setIconHeight(e.dropIconWidth), this.setIconWidth(e.dropIconHeight), this.setRowHeight(e.dropRowHeight), this.setDropWidth(e.dropWidth), this.setBackground(e.dropBackground), this.setHoverBackground(e.dropHoverBackground), this.setActiveColor(e.dropActiveBackground), this.setDropLabelColor(e.dropLabelColor), this.setDropActiveLabelColor(e.dropActiveLabelColor), this.setDropLabelFont(e.dropLabelFont), this.setMaxHeight(e.dropMaxHeight), this.setDropBorderColor(e.dropBorderColor), this.setDropBorderWidth(e.dropBorderWidth)
            }
        }, {
            key: "handleSelectData",
            value: function(e) {
                var t = this._master,
                    o = this._vectorInfo,
                    i = o.onChange,
                    a = this.sm().getSelectionMode(),
                    r = o.dataSource;
                if (r && 0 !== r.length && e) {
                    if (a === s) this.sm().ss(e);
                    else {
                        if (this.sm().co(e)) return;
                        this.sm().as(e)
                    }
                    var n = e.a("value");
                    if (a === s) t.a(this._valueName, n), t.a(C.LABEL, this.__getLabel()), t.a(C.ICON, e.a("icon"));
                    else {
                        var l = this._previousValue,
                            h = o.maxSelection;
                        if (n = [n], l && l.indexOf(n[0]) < 0) n = l.concat(n);
                        else if (l) return;
                        0 < h && n.length > h && n.shift(), t.a(this._valueName, n)
                    }
                    i && i(this._previousValue, n, t, this._masterGraph), this.close()
                }
            }
        }, {
            key: "setSelectionMode",
            value: function(e) {
                h !== e && s !== e || this.sm().setSelectionMode(e)
            }
        }, {
            key: "getNodeValue",
            value: function(e) {
                return e.a("value") || e.s("label") || e.s("text")
            }
        }, {
            key: "getNodeLabel",
            value: function(e) {
                return e.s("label") || e.s("text") || e.a("value")
            }
        }, {
            key: "setData",
            value: function(e) {
                var o = this,
                    i = this.dm();
                i.clear(), e && e.length && (e.forEach(function(e) {
                    var t;
                    e.icon ? ((t = new ht.Node).setImage(e.icon), t.s({
                        pixelPerfect: !1,
                        "image.stretch": "uniform",
                        label: (e.label || e.value) + "",
                        "label.position": 20,
                        "label.offset.x": 4,
                        "label.font": o.getDropLabelFont()
                    })) : (t = new ht.Text).s({
                        text: (e.label || e.value) + "",
                        pixelPerfect: !1,
                        "text.color": o.getLabelColor(t),
                        "text.font": o.getDropLabelFont()
                    }), t.a(e), i.add(t)
                }), this.setDropHeight(Math.min(this.getMaxHeight(), e.length * this.getRowHeight())))
            }
        }, {
            key: "getValue",
            value: function() {
                var t = this,
                    e = this.sm(),
                    o = e.getSelection(),
                    i = e.getSelectionMode();
                if (s === i) return 0 === o.size() ? null : this.getNodeValue(o.get(0));
                if (h !== i) return null;
                var a = [];
                return o.each(function(e) {
                    a.push(t.getNodeValue(e))
                }), a
            }
        }, {
            key: "__getLabel",
            value: function() {
                var t = this,
                    e = this.sm(),
                    o = e.getSelection(),
                    i = e.getSelectionMode();
                if (s === i) return 0 === o.size() ? null : this.getNodeLabel(o.get(0));
                if (h !== i) return null;
                var a = [];
                return o.each(function(e) {
                    a.push(t.getNodeLabel(e))
                }), a
            }
        }, {
            key: "toggle",
            value: function() {
                this._transition || (this._opened ? this.close() : this.open())
            }
        }, {
            key: "__scrollToIndex",
            value: function(e) {
                this.dm().getDatas(), this.sm();
                var t = this.getMaxHeight(),
                    o = this.getRowHeight();
                t < e * o ? this.ty(t - (e + 1) * o) : this.ty(0)
            }
        }, {
            key: "open",
            value: function() {
                var o = this,
                    e = this._master,
                    t = (this._masterGraph, this.getView().style),
                    i = this.getDropWidth(),
                    a = this.getDropHeight(),
                    r = e.a(this._valueName);
                this.sm().cs(), ri(r) ? ai(r) ? r.length && r.forEach(function(t) {
                    o.dm().each(function(e) {
                        e.a("value") === t && o.sm().as(e)
                    })
                }) : this.dm().each(function(e, t) {
                    e.a("value") === r && (o.sm().ss(e), o.__scrollToIndex(t))
                }) : this.ty(0), this._previousValue = r, this._vectorInfo.editing = !0, this._master.iv(), this.layoutByMaster(), this.setWidth(i), this.setHeight(a), Do(t, "transform", "scaleY(0)"), document.body.appendChild(this.getView()), this._transition = !0, this.registerCloseEvent(this._documentClickHandler), this.doLayout(), ht.Default.callLater(function() {
                    Do(t, "transform", "scaleY(1)"), setTimeout(function() {
                        o.redraw(), o.setOpened(!0), o._transition = !1
                    }, 300)
                })
            }
        }, {
            key: "layoutByMaster",
            value: function() {
                this._master, this._masterGraph;
                var e = Qo(this._vectorInfo.comp, this._master, this._masterGraph),
                    t = ht.Default.getWindowInfo(),
                    o = this.getView().style,
                    i = this.getDropWidth(),
                    a = this.getDropHeight(),
                    r = Math.max(0, e.x),
                    n = e.y + e.height,
                    l = "50% 0";
                n + a > t.height && n - e.height > a && (n = n - a - e.height, l = "50% 100%"), r + i > t.width && (r = t.width - i), o.left = r + "px", o.top = n + "px", Do(o, "transformOrigin", l)
            }
        }, {
            key: "onOpen",
            value: function() {}
        }, {
            key: "close",
            value: function() {
                var e = this;
                if (!this._transition) {
                    var t = this.getView(),
                        o = t.style;
                    this._vectorInfo.editing = !1, this._master.iv(), this._transition = !0, this.unRegisterCloseEvent(this._documentClickHandler), Do(o, "transform", "scaleY(0)"), setTimeout(function() {
                        document.body.removeChild(t), e._transition = !1, e.setOpened(!1)
                    }, 301)
                }
            }
        }, {
            key: "registerCloseEvent",
            value: function(e) {
                ht.Default.isTouchable ? document.addEventListener("touchstart", e) : document.addEventListener("mousedown", e)
            }
        }, {
            key: "unRegisterCloseEvent",
            value: function(e) {
                ht.Default.isTouchable ? document.removeEventListener("touchstart", e) : document.removeEventListener("mousedown", e)
            }
        }, {
            key: "documentClickHandler",
            value: function(e) {
                var t = this._master,
                    o = this._masterGraph,
                    i = Qo(this._vectorInfo.comp, t, o);
                ht.Default.containsPoint(i, ht.Default.getClientPoint(e)) || this.close()
            }
        }, {
            key: "getLabelColor",
            value: function(e) {
                return this.sm().co(e) ? this.getDropActiveLabelColor() : this.getDropLabelColor()
            }
        }, {
            key: "getScrollRect",
            value: function() {
                return o(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "getScrollRect", this).call(this)
            }
        }, {
            key: "isVisible",
            value: function(e) {
                return !this._vectorInfo.hideSelected || !this.sm().co(e)
            }
        }]), l
    }();

    function mt(e, t, o, i, a) {
        var r = o.dropDown;
        r || ((r = new xt(e, t, o, i, a)).getView().className = "ht-vector-dropdown", o.dropDown = r), r._transition || (r.isOpened() || r.setData(o.dataSource), r.toggle())
    }
    Po(xt, {
        ms_ac: ["background", "dropWidth", "dropHeight", "maxHeight", "opened", "dropLabelFont", "dropLabelColor", "dropActiveLabelColor"],
        _background: yt.emptyColor,
        _dropWidth: 200,
        _dropHeight: 100,
        _maxHeight: 400,
        _opened: !1,
        _dropLabelColor: yt.inputTextColor
    });
    var wt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        n.pressed = !1, t.iv();
                        var l = Zo(this, "value", t, o);
                        0 < i.x && i.x < a && 0 < i.y && i.y < r && mt(t, o, n, l)
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    var n = t.__dropDown;
                    n && n._opened && n.layoutByMaster()
                }
            }]), t
        }(),
        kt = function(e, t, o, i, a) {
            var r = No(o, t, i),
                n = r.rowHeights,
                l = r.colWidths,
                h = r.headHeight,
                s = r.rowLineWidth,
                u = r.translateY,
                c = r.translateX,
                d = null,
                g = null;
            if (0 < (u = Math.floor(a.y - u - h)) && n && n.length) {
                for (var f = d = 0; d < n.length && !(u < (f += n[d] + s)); d++);
                d === n.length && (d = null)
            }
            if (0 < (c = Math.floor(a.x - c)) && l && l.length) {
                for (var v = g = 0; g < l.length && !(c < (v += l[g])); g++);
                g === l.length && (g = null)
            }
            return {
                row: d,
                col: g
            }
        },
        Ct = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    if (!R(this, t, o, i, a, r, !0)) {
                        var n = No(o, t, this),
                            l = n.hoverIndex,
                            h = n.multiple,
                            s = n.onClickCell,
                            u = Zo(this, "selectedIndex");
                        if (!jo(l)) {
                            var c = n.dataSource || [],
                                d = n.onSelectRow,
                                g = n.selectedIndex;
                            if (c && c[l]) {
                                if (h)
                                    if (g = "number" == typeof g ? [g] : null == g ? [] : g.slice(0), ht.Default.isCtrlDown()) {
                                        var f = g.indexOf(l);
                                        0 <= f ? g.splice(f, 1) : g.push(l)
                                    } else if (ht.Default.isShiftDown() && 0 < g.length) {
                                    var v = g[g.length - 1];
                                    if (v < l)
                                        for (var p = v + 1; p <= l; p++) g.indexOf(p) < 0 && g.push(p);
                                    else if (l < v)
                                        for (var y = v - 1; l <= y; y--) g.indexOf(y) < 0 && g.push(y)
                                } else g = [l];
                                else g = [l];
                                u && t.a(u, g), d && d(c[l], t, o)
                            }
                        }
                        if (s) {
                            var b = n.colWidths,
                                x = n.rowHeights,
                                m = n.columns,
                                w = n.dataSource,
                                k = n.rawColIndexs,
                                C = n.rawIndexs,
                                V = kt(0, t, o, this, i),
                                I = C[V.row],
                                _ = k[V.col];
                            if (null != _ && null != I && V.row <= x.length && V.col <= b.length && m && w && m[_].key) {
                                var D = m[_],
                                    T = w[I],
                                    S = T[D.key];
                                D.format && (S = D.format(S, T, I, _)), s(e, S, T, D, I, _, t, o)
                            }
                        }
                    }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.rowHeights,
                        h = n.colWidths,
                        s = n.hoverIndex,
                        u = n.columns,
                        c = n.rawDatas,
                        d = n.rawIndexs,
                        g = (n.rawCols, n.rawColIndexs),
                        f = n.onHoverCell,
                        v = kt(0, t, o, this, i),
                        p = n.scrollInfo,
                        y = n.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize,
                        b = v.row,
                        x = v.col;
                    if (!n._scrollDragInfo && d && c) {
                        if (n.autoHideScrollBar && (p.scrollBarX && i.y > r - y || p.scrollBarY && i.x > a - y)) return n.scrollBarVisible = !0, t.iv(), void D(t, n);
                        if (f)
                            if (null != x && null !== b && b <= l.length && x <= h.length && u && c && u[x].key) {
                                var m = u[x],
                                    w = c[b],
                                    k = d[b],
                                    C = g[x],
                                    V = w[m.key];
                                m.format && (V = m.format(V, w, k, C)), f(e, V, w, m, k, C, t, o)
                            } else f();
                        s !== d[b] && (n.hoverIndex = d[b], t.iv())
                    }
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.hoverIndex = null, t.iv();
                    var l = n.onHoverCell;
                    l && l()
                }
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {
                    p.apply(this, arguments)
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    y.apply(this, arguments)
                }
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {
                    b.apply(this, arguments)
                }
            }, {
                key: "onScroll",
                value: function(e, t, o, i, a, r) {
                    m.apply(this, arguments)
                }
            }]), t
        }(),
        Vt = function(e, t, o, i, a) {
            var r = t.max,
                n = t.min,
                l = t.step,
                h = r - n,
                s = t.value,
                u = (o.x - i.x) / i.width * h + n,
                c = t.onChange,
                d = Zo(t.comp, "value");
            if (u = Math.min(r, u), u = Math.max(n, u), l) {
                var g = u % l;
                u = u - g + (Math.abs(g) > l / 2) * (g < 0 ? -l : l)
            }
            e.a(d, u), c && c(s, u, e, a)
        },
        It = ht.Default.containsPoint,
        _t = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l = Jo(n.barRect, 2),
                            h = ii(o, t, this, i);
                        It(l, h) && Vt(t, n, h, l, o)
                    }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = Jo(n.sliderRect, 2),
                        h = n.showToolTip,
                        s = n.toolTipFormat,
                        u = Zo(this, "value"),
                        c = ii(o, t, this, i);
                    if (It(l, c) && h) {
                        var d = t.a(u);
                        d = jo(d) ? "0" : d + "", Go.show(s ? s(d) : d, e)
                    } else this.dragging || Go.hide()
                }
            }, {
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    No(o, t, this).disabled ? Xo(o, "not-allowed") : Xo(o, "pointer")
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, "default"), n.dragging || Go.hide()
                }
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l = Jo(n.sliderRect, 2),
                            h = ii(o, t, this, i);
                        It(l, h) && (n.dragging = !0)
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (n.dragging) {
                        var l = ii(o, t, this, i),
                            h = n.barRect;
                        Vt(t, n, l, h, o);
                        var s = n.showToolTip,
                            u = n.toolTipFormat,
                            c = n.value;
                        s && Go.show(u ? u(c) : c, e)
                    }
                }
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {
                    delete No(o, t, this).dragging, Go.hide()
                }
            }]), t
        }(),
        Dt = function(e, t, o, i, a, r) {
            var n = t.max,
                l = t.min,
                h = t.step,
                s = n - l,
                u = (o.x - i.x) / i.width * s + l,
                c = t.value,
                d = c[0],
                g = c[1],
                f = Zo(t.comp, "value"),
                v = t.onChange;
            if (u = Math.min(n, u), u = Math.max(l, u), h) {
                var p = u % h;
                u = u - p + (Math.abs(p) > h / 2) * (p < 0 ? -h : h)
            }
            var y = null;
            if (t.dragging) {
                var b = t.dragging;
                y = b <= u ? [b, u] : [u, b]
            } else {
                var x = Math.abs(d - u);
                y = Math.abs(g - u) <= x ? [d, u] : [u, g]
            }
            return r || e.a(f, y), v && v(c, y, e, a), u
        },
        Tt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l = Jo(n.barRect, 2),
                            h = Jo(n.valueBarRect, 2),
                            s = n.valueBarDraggable,
                            u = ii(o, t, this, i);
                        s && ht.Default.containsPoint(h, u) || ht.Default.containsPoint(l, u) && Dt(t, n, u, l, o)
                    }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = Jo(n.sliderRect, 2),
                        h = Jo(n.sliderRect2, 2),
                        s = n.showToolTip,
                        u = n.toolTipFormat,
                        c = n.value,
                        d = ii(o, t, this, i);
                    ht.Default.containsPoint(l, d) && s ? Go.show(u ? u(c[0]) : c[0], e) : ht.Default.containsPoint(h, d) && s ? Go.show(u ? u(c[1]) : c[1], e) : this.dragging || Go.hide()
                }
            }, {
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    No(o, t, this).disabled ? Xo(o, "not-allowed") : Xo(o, "pointer")
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, "default"), n.dragging || Go.hide()
                }
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l = Jo(n.barRect, 2),
                            h = Jo(n.sliderRect, 2),
                            s = Jo(n.sliderRect2, 2),
                            u = Jo(n.valueBarRect, 2),
                            c = n.value,
                            d = n.valueBarDraggable,
                            g = ii(o, t, this, i);
                        ht.Default.containsPoint(h, g) ? n.dragging = c[1] : ht.Default.containsPoint(s, g) ? n.dragging = c[0] : d && ht.Default.containsPoint(u, g) && (n.draggingValueBar = Dt(t, n, g, l, o, !0))
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.showToolTip,
                        h = n.toolTipFormat,
                        s = n.barRect,
                        u = ii(o, t, this, i);
                    if (void 0 !== n.dragging) {
                        var c = Dt(t, n, u, s, o);
                        l && Go.show(h ? h(c) : c, e)
                    } else if (void 0 !== n.draggingValueBar) {
                        var d = n.draggingValueBar,
                            g = Dt(t, n, u, s, o, !0),
                            f = g - d,
                            v = n.value,
                            p = n.min,
                            y = n.max,
                            b = [v[0] + f, v[1] + f],
                            x = Zo(this, "value");
                        if (b[0] < p ? b = [p, p + (v[1] - v[0])] : b[1] > y && (b = [y - (v[1] - v[0]), y]), n.draggingValueBar = g, t.a(x, b), l) {
                            var m = b.join(",");
                            h && (m = b.map(function(e) {
                                return h(e)
                            }).join(",")), Go.show(m, e)
                        }
                    }
                }
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    delete n.dragging, delete n.draggingValueBar, Go.hide()
                }
            }]), t
        }(),
        St = function(e, t) {
            if (t && 0 < t.length)
                for (var o = 0; o < t.length; o++) {
                    var i = we(t[o].rect, 4),
                        a = i[0],
                        r = i[1],
                        n = i[2],
                        l = i[3];
                    if (ht.Default.containsPoint({
                            x: a,
                            y: r,
                            width: n,
                            height: l
                        }, e)) return t[o].value
                }
        },
        Rt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = Zo(this, "value");
                    if (!n.disabled && l) {
                        var h = void 0;
                        if ((h = n.dropDown) && h.isOpened()) h.close();
                        else {
                            var s = n.value,
                                u = s ? s.slice(0) : null,
                                c = n.valueItemInfo,
                                d = St(i, c);
                            if (d && s && 0 <= s.indexOf(d)) {
                                var g = s.indexOf(d);
                                s.splice(g, 1);
                                var f = s.slice(0);
                                t.a(l, f), n.onChange && n.onChange(u, f, t, o), Xo(o, "default"), this._hitValue = s
                            }
                        }
                    }
                }
            }, {
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled)
                        if (this._hitValue) delete this._hitValue;
                        else {
                            var l = Zo(this, "value");
                            0 < i.x && i.x < a && 0 < i.y && i.y < r && mt(t, o, n, l, !0)
                        }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (n.disabled) Xo(o, "not-allowed");
                    else {
                        var l = n.valueItemInfo;
                        St(i, l) ? (this._oldCursor = o.getView().style.cursor, Xo(o, "pointer")) : Xo(o, "default")
                    }
                }
            }, {
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n.disabled ? Xo(o, "not-allowed") : Xo(o, "pointer"), n.disabled
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    Xo(o, "default")
                }
            }]), t
        }(),
        Lt = ht.Default.containsPoint,
        Pt = function(e, t, o, i) {
            if (e) {
                var a = e.x,
                    r = e.y,
                    n = e.width,
                    l = e.height,
                    h = e.boundWidth,
                    s = e.boundHeight;
                if (l < s) {
                    var u = l / s;
                    if (Lt({
                            x: a + n - 8,
                            y: r - o * u,
                            width: 8,
                            height: l * u
                        }, i)) return !0
                }
                if (n < h - 2) {
                    var c = n / h;
                    if (Lt({
                            x: a - t * c,
                            y: r + l - 8,
                            width: n * c,
                            height: 8
                        }, i)) return !0
                }
                return !1
            }
            return !1
        },
        Bt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onUp",
                value: function(e, h, t, o, i, a) {
                    var s = this,
                        u = ii(t, h, this, o),
                        r = No(t, h, this),
                        n = r.scrollBarInfo,
                        l = r.translateX,
                        c = r.translateY,
                        d = r.isScrollBarDragging,
                        g = r.rectInfo,
                        f = r.preSelectTreeItem,
                        v = r.handleTagClick,
                        p = r.handleCheck,
                        y = r.accordion,
                        b = r.handleExpand,
                        x = r.loadData,
                        m = r.handleSelect,
                        w = r.multiSelect,
                        k = r.handleBackClick;
                    if (d) r.isScrollBarDragging = !1;
                    else if (!Pt(n, l, c, u) && g) {
                        for (var C = g.expandIconRects, V = g.checkIconRects, I = g.treeBackRects, _ = g.tagRects, D = 0, T = _.length; D < T; D++) {
                            var S = _[D],
                                R = S.treeItem,
                                L = S.info,
                                P = S.tagRect;
                            if (Lt(P, u) && !R.disabled) return v.call(this, R, L), void h.iv()
                        }
                        for (var B = 0, E = V.length; B < E; B++) {
                            var A = V[B],
                                M = (R = A.treeItem, A.checkIconRect);
                            if (Lt(M, u) && !R.disabled) return R.checked = !R.checked, p.call(this, R.checked, R), R._isShowUnCheckAllIcon = !1, R.checkBefore(), R.checkAfter(), void h.iv()
                        }
                        for (var O = function(e, t) {
                                var o = C[e],
                                    i = o.treeItem,
                                    a = o.expandIconRect;
                                if (Lt(a, u)) {
                                    if (i._isLoading) return {
                                        v: void 0
                                    };
                                    if (!i.disabled) {
                                        if (y) i.getSiblings().forEach(function(e) {
                                            e.expanded = !1
                                        });
                                        i.expanded = !i.expanded;
                                        var r = i.jsonChildren;
                                        if (r) {
                                            for (var n = 0, l = r.length; n < l; n++) Oe(r[n], i);
                                            delete i.jsonChildren, b.call(s, i.expanded, i)
                                        } else {
                                            if (i.expanded && 0 === i.children.length) new Promise(function(e) {
                                                i._isLoading = !0, x.call(s, i, e)
                                            }).then(function(e) {
                                                b.call(s, i.expanded, i), i._isLoading = !1, i.addChildren(e), i.checkAfter(), h.iv()
                                            });
                                            else b.call(s, i.expanded, i)
                                        }
                                        return h.iv(), {
                                            v: void 0
                                        }
                                    }
                                }
                            }, H = 0, W = C.length; H < W; H++) {
                            var F = O(H);
                            if ("object" === (void 0 === F ? "undefined" : ve(F))) return F.v
                        }
                        for (var N = 0, G = I.length; N < G; N++) {
                            var U = I[N],
                                Y = U.treeItem,
                                j = U.backRect;
                            if (Lt(j, u)) return void(Y.disabled || (Y.selected = !Y.selected, m.call(this, Y.selected, Y), w || (r.preSelectTreeItem = Y, f && f !== Y && (f.selected = !1), f !== Y || Y.selected || delete r.preSelectTreeItem), h.iv()))
                        }
                        k && k()
                    }
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = ii(o, t, this, i),
                        l = No(o, t, this),
                        h = l.scrollBarInfo,
                        s = l.translateX,
                        u = l.translateY,
                        c = l.isScrollBarDragging,
                        d = l.rectInfo,
                        g = l.preHoverTreeItem;
                    if (!c)
                        if (Pt(h, s, u, n)) g && (g.disabled && Xo(o, "default"), g._isHovering = !1, t.iv());
                        else if (d) {
                        for (var f = d.treeBackRects, v = 0, p = f.length; v < p; v++) {
                            var y = f[v],
                                b = y.treeItem,
                                x = y.backRect;
                            if (Lt(x, n)) {
                                g !== b && (g && (g._isHovering = !1), l.preHoverTreeItem = b), b.disabled ? (Xo(o, "not-allowed"), g !== b && t.iv()) : b._isHovering || (Xo(o, "default"), b._isHovering = !0, t.iv());
                                break
                            }
                        }
                        v === p && g && (Xo(o, "default"), g._isHovering = !1, delete l.preHoverTreeItem, t.iv())
                    }
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.preHoverTreeItem;
                    l && (Xo(o, "default"), l._isHovering = !1, delete n.preHoverTreeItem, t.iv())
                }
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    n && (n.isScrollBarDragging = !0), p.apply(this, arguments)
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    y.apply(this, arguments)
                }
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {
                    b.apply(this, arguments)
                }
            }, {
                key: "onScroll",
                value: function(e, t, o, i, a, r) {
                    m.apply(this, arguments)
                }
            }]), t
        }(),
        Et = 10,
        At = 10;
    ht.Default.setCompType("htVectorChartTip", {
        width: 50,
        height: 50,
        func: function(s, e, t, o, i) {
            var r = t.getValue("labelFont"),
                n = t.getColor("labelColor"),
                u = t.getValue("itemFont"),
                c = t.getColor("itemColor"),
                d = t.getValue("itemIconSize"),
                a = t.getValue("info");
            if (a) {
                ht.Default.isArray(a) || (a = [a]);
                var g = e.x,
                    l = e.y,
                    f = (e.width, e.height, 0),
                    v = 0,
                    p = l;
                a.forEach(function(e, t) {
                    var o = e.label,
                        i = e.datas,
                        h = e.colors;
                    0 < t && (p += 8, f += 8);
                    var a = ko(r, o);
                    f += a.height, v = a.width, ht.Default.drawText(s, o, r, n, g, p, a.width, a.height, "left"), p += a.height + 2, i.forEach(function(e, t) {
                        var o = we(e, 2),
                            i = o[0],
                            a = o[1],
                            r = null != i ? i + "：" + a : a,
                            n = ko(u, r);
                        f += n.height + 2, v = Math.max(v, n.width + d + 3);
                        var l = d / 2;
                        s.fillStyle = h[t], s.beginPath(), s.moveTo(l, p + l), s.arc(l, p + l, l, 0, 2 * Math.PI), s.fill(), ht.Default.drawText(s, r, u, c, g + 3 + d, p, n.width, n.height, "left"), p += n.height + 2
                    })
                }), At = f, Et = v
            }
        },
        properties: {
            labelFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            labelColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            itemColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemIconSize: {
                valueType: "PositiveNumber",
                defaultValue: 12
            },
            info: {
                valueType: "Object",
                defaultValue: {}
            }
        }
    }), ht.Default.setImage("htVectorChartTip", {
        width: 50,
        height: 50,
        fitSize: !0,
        pixelPerfect: !1,
        interactive: !0,
        boundExtend: 2,
        comps: [{
            type: "htVectorChartTip",
            displayName: "htVectorChartTip",
            rect: [0, 0, 50, 50],
            info: {
                func: "attr@info",
                value: {}
            }
        }]
    });
    var Mt = function(e) {
            function o() {
                u(this, o);
                var e = d(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                e.getView().style.position = "relative";
                var t = e._tipNode = new ht.Node;
                return t.setImage("htVectorChartTip"), e.dm().add(t), e.setWidth(Et), e.setHeight(At), e
            }
            return c(o, e), n(o, [{
                key: "setInfo",
                value: function(e) {
                    this._tipNode.a("info", e), this.getWidth() === Et && this.getHeight() === At || (this._tipNode.setWidth(Et), this._tipNode.setHeight(At), this.setWidth(Et), this.setHeight(At), this.fitContent(!1, 0))
                }
            }]), o
        }(ht.graph.GraphView),
        Ot = ht.Default,
        Ht = Ot.containsPoint,
        Wt = Ot.unionPoint,
        Ft = new Mt,
        Nt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onDown",
                value: function(e, t, o, i, a, r) {}
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = Fo(o, t, this),
                        l = No(o, t, this),
                        h = l.ui,
                        s = l.option;
                    if (s && s.tooltip.show && !l._dragging) {
                        var u = h.interactiveInfo,
                            c = h.bounds.bodyRect,
                            d = {
                                x: i.x + n.rect.x,
                                y: i.y + n.rect.y
                            };
                        if (Ht(c, d) && u.length) {
                            for (var g = h.valueAxis === A ? d.y : d.x, f = 0, v = 1 / 0, p = 0; p < u.length; p++) {
                                var y = Math.abs(u[p].position - g);
                                y < v && (v = y, f = p)
                            }
                            var b = u[f];
                            if (b.axis.length) {
                                var x = s.color.slice(0),
                                    m = b.axis.map(function(e) {
                                        return {
                                            label: e.label,
                                            datas: e.datas,
                                            colors: x.splice(0, e.datas.length)
                                        }
                                    });
                                Ft.setInfo(m), Go.show(Ft.getView(), e)
                            }
                            l.hoverIndex !== f && (l.hoverIndex = f, t.iv())
                        } else delete l.hoverIndex, t.iv(), Go.hide()
                    }
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    void 0 !== n.hoverIndex && (delete n.hoverIndex, t.iv(), Go.hide())
                }
            }, {
                key: "onBeginDrag",
                value: function(e, t, o, i, a, r) {
                    var n = Fo(o, t, this),
                        l = No(o, t, this),
                        h = l.option,
                        s = l.ui;
                    if (l && h.rectSelectable) {
                        void 0 !== l.hoverIndex && (delete l.hoverIndex, t.iv(), Go.hide());
                        var u = s.bounds.bodyRect,
                            c = {
                                x: i.x + n.rect.x,
                                y: i.y + n.rect.y
                            };
                        Ht(u, c) && (l._dragging = !0, l.rectPoint1 = c)
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t, o, i, a, r) {
                    var n, l, h, s, u, c, d, g, f = Fo(o, t, this),
                        v = No(o, t, this);
                    if (v && v._dragging) {
                        var p = v.ui.bounds.bodyRect,
                            y = {
                                x: i.x + f.rect.x,
                                y: i.y + f.rect.y
                            };
                        v.rectPoint2 = (l = y, h = (n = p).x, s = n.y, u = n.width, c = n.height, d = l.x, g = l.y, d = Math.max(d, h - 1), d = Math.min(d, h + u + 1), g = Math.max(g, s - 1), g = Math.min(g, s + c + 1), {
                            x: d,
                            y: g
                        }), t.iv()
                    }
                }
            }, {
                key: "onEndDrag",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (n && n._dragging) {
                        var l = n.ui,
                            h = n.option,
                            s = l.rectPoint1,
                            u = l.rectPoint2,
                            c = l.valueAxis,
                            d = h.xAxis,
                            g = h.yAxis,
                            f = Wt(s, u);
                        delete n._dragging, delete n.rectPoint1, delete n.rectPoint2, t.iv();
                        var v = {
                            x: [],
                            y: []
                        };
                        d.forEach(function(e) {
                            var t = e.type,
                                o = [];
                            (v.x.push(o), "category" === t) && l.interactiveInfo.forEach(function(e, t) {
                                e.position > f.x & e.position < f.x + f.width && o.push(t)
                            })
                        }), g.forEach(function(e) {
                            var t = [];
                            if (v.y.push(t), M === c) {
                                var o = we(e.valueRange, 2),
                                    i = o[0],
                                    a = o[1] - i,
                                    r = l.bounds.bodyRect;
                                t.push((r.height - f.height - f.y + r.y) / r.height * a + i), t.push((r.height - f.y + r.y) / r.height * a + i)
                            }
                        }), console.log(n, v)
                    }
                }
            }]), t
        }();
    var Gt = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, it), n(t, [{
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    if (!n.disabled) {
                        var l, h, s, u, c, d = Zo(this, "value");
                        0 < i.x && i.x < a && 0 < i.y && i.y < r && (l = t, h = o, u = "a@" + d, (c = (s = n).dropDown) || (l.getFormat = function() {
                            return l.a(C.FORMAT)
                        }, c = new gt(l, h, s, u), s.dropDown = c), c.open())
                    }
                }
            }]), t
        }(),
        Ut = function(e, t) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o],
                    a = i.rect,
                    r = i.index;
                if (ht.Default.containsPoint(a, t)) return r
            }
        },
        $t = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return c(t, qe), n(t, [{
                key: "onEnter",
                value: function(e, t, o, i, a, r) {
                    var n = "pointer";
                    No(o, t, this).disabled && (n = "not-allowed"), Xo(o, n)
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    Xo(o, "default"), n.hoverIndex = null, t.iv()
                }
            }, {
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.buttonRects,
                        h = (n.values, n.disabled),
                        s = ii(o, t, this, i),
                        u = null;
                    h || (l && (u = Ut(l, s)), u !== n.hoverIndex && (n.hoverIndex = u, t.iv()))
                }
            }, {
                key: "onDown",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this),
                        l = n.buttonRects,
                        h = n.values,
                        s = n.disabled,
                        u = n.onChange,
                        c = ii(o, t, this, i),
                        d = Zo(this, "value"),
                        g = null;
                    if (!s && d) {
                        l && (g = Ut(l, c));
                        var f = jo(g) ? null : h[g],
                            v = t.a(d);
                        f !== v && (t.a(d, f), u && u(v, f, t, o))
                    }
                }
            }]), t
        }(),
        qt = ht.Default.setImage;
    qt("ht.vector.date", {
        width: 16,
        height: 16,
        comps: [{
            type: "roundRect",
            borderColor: "#ffffff",
            cornerRadius: 1,
            rect: [1.5, 6.54942, 12.94, 8]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "#ffffff",
            borderCap: "round",
            closePath: !0,
            points: [1.5, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 14.54942, 14.44, 14.54942, 14.44, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523],
            segments: [1, 2, 3, 2, 3, 2, 3, 2, 3, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [4.46, 1, 4.46, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [11.5, 1, 11.5, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 9.50677, 7.00013, 9.50677, 9.00013, 9.50677, 12.50756, 9.50677],
            segments: [1, 2, 1, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52, 12.52535, 12.50756, 12.52535]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 6.54942, 7.00013, 6.54942, 9.00013, 6.54942, 12.50756, 6.54942],
            segments: [1, 2, 1, 2]
        }]
    }), qt("ht.vector.dropDownIcon", {
        width: 18,
        height: 10,
        comps: [{
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            points: [1, 1, 9, 9, 17, 1]
        }]
    }), qt("ht.vector.treeOpenIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "#979797",
            closePath: !0,
            points: [0, 0, 10, 5, 0, 10]
        }]
    }), qt("ht.vector.treeCloseIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "#979797",
            closePath: !0,
            points: [0, 0, 10, 0, 5, 10]
        }]
    }), qt("ht.vector.treeDefIcon", {
        width: 22,
        height: 16,
        comps: [{
            type: "shape",
            background: "rgb(52,158,250)",
            pixelPerfect: !0,
            points: [19.46829, 3.58619, 19.46829, 1.10347, 7.80392, 1.10347, 6.77294, 0, 0, 0, 0, 16, 19.46157, 16, 22, 3.58619, 19.46829, 3.58619, 6.04692, 1.12664, 7.07791, 2.23011, 18.26449, 2.23011, 18.26449, 3.59706, 2.82065, 3.59706, 1.12837, 10.10776, 1.12837, 1.12664, 6.04692, 1.12664, 18.43055, 14.74166, 1.12837, 14.74166, 1.12837, 14.63244, 3.68405, 4.67291, 20.5368, 4.67291, 18.43055, 14.74166],
            segments: [1, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 5]
        }]
    }), qt("ht.vector.treeLoadIcon", {
        width: 32,
        height: 32,
        comps: [{
            type: "shape",
            background: "rgb(52,158,250)",
            pixelPerfect: !0,
            points: [16.5125, 32, 7.69062, 32, .5125, 24.82187, .5125, 16, .5125, 7.17813, 7.6875, 0, 16.5125, 0, 20.60625, 0, 24.5, 1.54375, 27.48125, 4.35, 27.84688, 4.69375, 27.8625, 5.26563, 27.51875, 5.63125, 27.175, 5.99375, 26.60313, 6.0125, 26.2375, 5.66875, 23.59375, 3.18125, 20.14063, 1.8125, 16.5125, 1.8125, 8.6875, 1.8125, 2.325, 8.17812, 2.325, 16, 2.325, 23.82187, 8.69062, 30.1875, 16.5125, 30.1875, 22.40937, 30.1875, 27.60312, 26.6375, 29.74063, 21.14063, 29.92188, 20.675, 30.44688, 20.44063, 30.9125, 20.625, 31.37813, 20.80625, 31.60938, 21.33125, 31.42813, 21.79688, 29.01563, 27.99687, 23.1625, 32, 16.5125, 32],
            segments: [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5]
        }]
    }), qt("ht.vector.treeCheckIcon", {
        dataBindings: [],
        width: 160,
        height: 160,
        attachStyle: "close",
        comps: [{
            type: "shape",
            background: "#349cfa",
            pixelPerfect: !0,
            points: [139.3, .47663, 20.5, .47663, 9.52832, .47663, .5, 9.50496, .5, 20.47663, .5, 139.57663, .5, 150.54831, 9.52832, 159.57663, 20.5, 159.57663, 139.5, 159.57663, 150.47168, 159.57663, 159.5, 150.54831, 159.5, 139.57663, 159.5, 20.37663, 159.47367, 15.05689, 157.32589, 9.96152, 153.53619, 6.22809, 149.74648, 2.49467, 144.61954, .42337, 139.3, .47663, 133.1, 47.37663, 61.3, 119.57663, 60.37719, 120.51835, 59.11835, 121.05785, 57.8, 121.07663, 56.41253, 121.11208, 55.0711, 120.56825, 54.1, 119.57663, 26.4, 88.27663, 24.93292, 87.00925, 24.32978, 84.99815, 24.85726, 83.13258, 25.38474, 81.26701, 26.95166, 79.86949, 28.86517, 79.55795, 30.77868, 79.24642, 32.70799, 80.07473, 33.8, 81.67663, 57.9, 108.57663, 126.1, 40.37663, 127.27177, 38.81427, 129.2561, 38.07551, 131.1643, 38.49122, 133.07249, 38.90692, 134.56971, 40.40414, 134.98541, 42.31234, 135.40112, 44.22053, 134.66236, 46.20486, 133.1, 47.37663],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 4, 5]
        }]
    }), qt("ht.vector.treeUnCheckIcon", {
        width: 160,
        height: 160,
        comps: [{
            type: "shape",
            background: "#e0e0e0",
            pixelPerfect: !0,
            points: [130, 5, 30, 5, 16.25, 5, 5, 16.25, 5, 30, 5, 130, 5, 143.75, 16.25, 155, 30, 155, 130, 155, 143.75, 155, 155, 143.75, 155, 130, 155, 30, 155, 16.25, 143.75, 5, 130, 5, 142.5, 130, 142.5, 136.875, 136.875, 142.5, 130, 142.5, 30, 142.5, 23.125, 142.5, 17.5, 136.875, 17.5, 130, 17.5, 30, 17.5, 23.125, 23.125, 17.5, 30, 17.5, 130, 17.5, 136.875, 17.5, 142.5, 23.125, 142.5, 30, 142.5, 130],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 5, 1, 4, 2, 4, 2, 4, 2, 4, 2, 5]
        }]
    }), qt("ht.vector.treeUnCheckAllIcon", {
        width: 160,
        height: 160,
        comps: [{
            type: "shape",
            background: "#349cfa",
            pixelPerfect: !0,
            points: [158.11523, 31.17188, 158.11523, 128.82813, 158.11523, 136.89453, 155.24414, 143.80859, 149.52148, 149.53125, 143.79883, 155.25391, 136.9043, 158.125, 128.81836, 158.125, 31.18164, 158.125, 23.11523, 158.125, 16.20117, 155.25391, 10.47852, 149.53125, 4.75586, 143.80859, 1.88477, 136.91406, 1.88477, 128.82813, 1.88477, 31.17188, 1.88477, 23.10547, 4.75586, 16.19141, 10.47852, 10.46875, 16.20117, 4.74609, 23.0957, 1.875, 31.18164, 1.875, 128.83789, 1.875, 136.9043, 1.875, 143.81836, 4.74609, 149.54102, 10.46875, 155.24414, 16.19141, 158.11523, 23.10547, 158.11523, 31.17188, 132.06055, 86.52344, 132.06055, 73.49609, 132.06055, 71.73828, 131.41602, 70.19531, 130.12695, 68.92578, 128.83789, 67.63672, 127.29492, 66.99219, 125.55664, 66.99219, 34.42383, 66.99219, 32.66602, 66.99219, 31.12305, 67.63672, 29.85352, 68.92578, 28.56445, 70.21484, 27.91992, 71.75781, 27.91992, 73.49609, 27.91992, 86.52344, 27.91992, 88.28125, 28.56445, 89.82422, 29.85352, 91.09375, 31.14258, 92.38281, 32.64648, 93.02734, 34.42383, 93.02734, 125.55664, 93.02734, 127.31445, 93.02734, 128.85742, 92.38281, 130.12695, 91.09375, 131.41602, 89.78516, 132.06055, 88.26172, 132.06055, 86.52344],
            segments: [1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5]
        }]
    });
    var Jt, Qt, eo, to = function() {
            function e() {
                u(this, e), (this._container = document.createElement("div")).className = "ht-vector-tooltip"
            }
            return n(e, [{
                key: "show",
                value: function(e, t) {
                    "number" == typeof e && (e += ""), "string" == typeof e ? this._container.innerHTML = e : this._container.appendChild(e), document.body.appendChild(this._container), this.update(t)
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this._container.getBoundingClientRect(),
                        o = ht.Default.getWindowInfo(),
                        i = (this._container.style, (e.clientX || e.pageX) + 8),
                        a = (e.clientY || e.pageY) + 8;
                    i = Math.max(0, i), a = Math.max(0, a), i + t.width > o.width && (i = o.width - t.width), a + t.height > o.height && (a = o.height - t.height), this._container.style.left = i + "px", this._container.style.top = a + "px"
                }
            }, {
                key: "hide",
                value: function() {
                    this._container.parentNode === document.body && document.body.removeChild(this._container)
                }
            }]), e
        }(),
        oo = {
            show: !0,
            type: "value",
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)"
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !0,
                color: "#cccccc",
                width: 1
            }
        },
        io = {
            show: !0,
            type: "category",
            data: [],
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)"
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !0,
                color: "#cccccc",
                width: 1
            }
        },
        ao = ht.Default,
        ro = ao.isArray,
        no = ao.clone,
        lo = function(i, a) {
            return (i = ro(i) ? i.slice(0) : [i]).forEach(function(e, t) {
                var o = no(a);
                zo(o, e), i[t] = o
            }), i
        },
        ho = function(b, x) {
            var m = [],
                w = 0;
            b.yAxis.forEach(function(e, t) {
                var o = e.valueRange = function(e, t, o, i) {
                    var a = e.max,
                        r = e.min,
                        n = void 0,
                        l = (e.axisLabel.interval, []);
                    o.forEach(function(e) {
                        ((i === M ? e.yAxisIndex : e.xAxisIndex) || 0) === t && (l = l.concat(e.data))
                    });
                    var h = Math.max.apply(this, l);
                    if (10 < h) {
                        for (var s = 1, u = h / s; 100 <= parseInt(u);) u = h / (s *= 10);
                        for (u = Math.ceil(u) * s; u % 6 != 0 || u / 6 % s != 0;) u += s;
                        h = u, jo(a) && (a = u), n = h / 6
                    } else 4 < (n = h / 6).toString() && (n = parseFloat(n.toFixed(2)));
                    jo(r) && 0 <= Math.min.apply(this, l) && (r = 0);
                    return [r, a, n]
                }(e, t, b.series, x.valueAxis);
                e.show || m.push(2);
                var i = we(o, 3),
                    a = i[0],
                    r = i[1],
                    n = a.toString().length > r.toString().length ? a.toString() : r.toString(),
                    l = e.axisTick.show ? e.axisTick.length : 0,
                    h = e.axisLabel.rotate;
                if (h) {
                    h = Math.max(-45, h), h = Math.min(45, h);
                    var s = ko(e.axisLabel.font, n),
                        u = new ht.Math.Vector2(0, 0),
                        c = new ht.Math.Vector2(s.width, 0),
                        d = new ht.Math.Vector2(s.width, s.height),
                        g = new ht.Math.Vector2(0, s.height),
                        f = new ht.Math.Vector2(s.width / 2, s.height / 2),
                        v = Math.PI * (h / 180);
                    u.rotateAround(f, v), c.rotateAround(f, v), d.rotateAround(f, v), g.rotateAround(f, v);
                    var p = ht.Default.unionPoint([u, c, d, g]);
                    w = Math.max(w, p.height / 2), m.push(p.width + 4 + l)
                } else {
                    var y = ko(e.axisLabel.font, n);
                    w = Math.max(w, y.height / 2), m.push(y.width + 4 + l)
                }
            }), x.contentRect.y += w + 2, x.contentRect.height -= w - 2, x.yAxisWidths = m
        },
        so = ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"],
        uo = ht.Default,
        co = uo.clone,
        go = uo.unionPoint,
        fo = function(e, t) {
            for (var o = ht.Math.Vector2, i = Math.cos, a = Math.sin, r = e.arcStartAngle, n = e.arcEndAngle, l = e.roseRadius, h = e.innerRadius, s = h + l, u = n - r, c = {
                    x: s * i(r),
                    y: s * a(r)
                }, d = {
                    x: s * i(n),
                    y: s * a(n)
                }, g = {
                    x: h * i(r),
                    y: h * a(r)
                }, f = {
                    x: h * i(n),
                    y: h * a(n)
                }, v = t, p = v + Math.PI / 2, y = p + Math.PI / 2, b = y + Math.PI / 2, x = [{
                    x: s * i(v),
                    y: s * a(v)
                }, {
                    x: s * i(p),
                    y: s * a(p)
                }, {
                    x: s * i(y),
                    y: s * a(y)
                }, {
                    x: s * i(b),
                    y: s * a(b)
                }], m = [c, d, g, f], w = 0; w < 4; w++) {
                var k = x[w],
                    C = new o(c),
                    V = new o(k),
                    I = C.clone().normalize().dot(V.normalize()),
                    _ = Math.acos(I);
                0 < C.x * V.y - V.x * C.y ? _ < u && m.push(k) : 2 * Math.PI - _ < u && m.push(k)
            }
            for (var D = -1 / 0, T = 1 / 0, S = 0, R = m.length; S < R; S++) {
                var L = m[S].y;
                D = Math.max(D, L), T = Math.min(T, L)
            }
            return {
                minY: T,
                maxY: D
            }
        },
        vo = function(e, t) {
            var o = t.isEmphasis,
                i = t.type,
                a = t.outFormatter,
                r = e.name,
                n = e.value,
                l = e.percent,
                h = e.seriesName,
                s = e.labelEmphasis,
                u = e.labelNormal,
                c = e.labelLineNormal,
                d = e.labelLineEmphasis,
                g = void 0,
                f = void 0;
            "label" === i ? f = o ? (g = s.font, s.formatter) : (g = u.font, u.formatter) : "labelLine" === i && (f = o ? (g = d.font, d.formatter) : (g = c.font, c.formatter)), a && (f = a);
            var v = r;
            f && (v = (f = f.replace(/\n/g, "<br>")).replace(/\{(\w)\}/g, function(e, t) {
                return "a" === t ? h : "b" === t ? r : "c" === t ? n : "d" === t ? (100 * l).toFixed(1) + "%" : e
            }));
            var p = v.split("<br>"),
                y = void 0,
                b = void 0;
            return g && (b = (y = ko(g, "e").height + 1) * p.length / 2), {
                labelTextArray: p,
                textHeight: y,
                beginHeight: b
            }
        },
        po = function() {
            function o(e, t) {
                u(this, o), this.initGLabel(e), this.initGLabelLine(t)
            }
            return n(o, [{
                key: "initGLabel",
                value: function(e) {
                    this.gLabelNormal = Object.assign({
                        show: !0,
                        position: "center",
                        formatter: "",
                        color: void 0,
                        font: "8px serif"
                    }, e.normal || {}), this.gLabelEmphasis = Object.assign({
                        show: !1,
                        position: "center",
                        formatter: "",
                        color: void 0,
                        font: "9px serif"
                    }, e.emphasis || {})
                }
            }, {
                key: "initGLabelLine",
                value: function(e) {
                    this.gLabelLineNormal = Object.assign({
                        show: !0,
                        length: 15,
                        length2: 10,
                        formatter: "",
                        width: 1,
                        type: "dashed",
                        font: "8px serif",
                        lineColor: void 0,
                        textColor: void 0
                    }, e.normal || {}), this.gLabelLineEmphasis = Object.assign({
                        show: !1,
                        length: 15,
                        length2: 10,
                        formatter: "",
                        width: 2,
                        type: "dashed",
                        font: "9px serif",
                        lineColor: void 0,
                        textColor: void 0
                    }, e.emphasis || {})
                }
            }]), o
        }(),
        yo = function() {
            function o(e, t) {
                u(this, o), Object.assign(this, e), this.initDefaultValue(t)
            }
            return n(o, [{
                key: "initDefaultValue",
                value: function(e) {
                    var t = this.data,
                        o = t.name,
                        i = void 0 === o ? "系列名" : o,
                        a = t.value,
                        r = void 0 === a ? 0 : a,
                        n = t.itemStyle,
                        l = void 0 === n ? {} : n,
                        h = t.labelLine,
                        s = void 0 === h ? {} : h,
                        u = t.label,
                        c = void 0 === u ? {} : u,
                        d = e.gLabelNormal,
                        g = e.gLabelEmphasis,
                        f = e.gLabelLineNormal,
                        v = e.gLabelLineEmphasis,
                        p = so[this.index % so.length];
                    this.name = i, this.value = r, this.itemStyle = Object.assign({
                        color: p,
                        borderColor: "#000"
                    }, l), this.labelNormal = Object.assign({}, d, c.normal || {}), this.labelEmphasis = Object.assign({}, g, c.emphasis || {}), this.labelLineNormal = Object.assign({}, f, s.normal || {}), this.labelLineEmphasis = Object.assign({}, v, s.emphasis || {}), void 0 === this.labelNormal.color && (this.labelNormal.color = "black"), void 0 === this.labelEmphasis.color && (this.labelEmphasis.color = "black"), void 0 === this.labelLineNormal.lineColor && (this.labelLineNormal.lineColor = p), void 0 === this.labelLineNormal.textColor && (this.labelLineNormal.textColor = p), void 0 === this.labelLineEmphasis.lineColor && (this.labelLineEmphasis.lineColor = p), void 0 === this.labelLineEmphasis.textColor && (this.labelLineEmphasis.textColor = p), this.pieColor = p
                }
            }, {
                key: "getLabelPoints",
                value: function() {
                    var e = this.centerX,
                        t = this.centerY,
                        o = this.roseType,
                        i = this.roseRadius,
                        a = this.innerRadius,
                        r = this.outerRadius,
                        n = this.lineAngle,
                        l = e + (o ? i : r) * Math.cos(n),
                        h = t + (o ? i : r) * Math.sin(n);
                    return {
                        textX: (l + (e + a * Math.cos(n))) / 2,
                        textY: (h + (t + a * Math.sin(n))) / 2
                    }
                }
            }, {
                key: "getLabelInfo",
                value: function(e) {
                    return vo(this, {
                        isEmphasis: e,
                        type: "label"
                    })
                }
            }, {
                key: "getLabelLinePoints",
                value: function(e) {
                    var t = this.labelLineNormal,
                        o = this.labelLineEmphasis,
                        i = this.centerX,
                        a = this.centerY,
                        r = this.roseType,
                        n = this.roseRadius,
                        l = this.innerRadius,
                        h = this.outerRadius,
                        s = this.lineAngle,
                        u = this.hoverOffset,
                        c = t.length,
                        d = o.length,
                        g = e ? l + n + u : l + n,
                        f = e ? h + u : h,
                        v = i + (r ? g : f) * Math.cos(s),
                        p = a + (r ? g : f) * Math.sin(s),
                        y = void 0,
                        b = void 0;
                    if (e) {
                        var x = h + u + d;
                        y = i + x * Math.cos(s), b = a + x * Math.sin(s)
                    } else {
                        var m = h + c;
                        y = i + m * Math.cos(s), b = a + m * Math.sin(s)
                    }
                    return {
                        x0: v,
                        y0: p,
                        x1: y,
                        y1: b
                    }
                }
            }, {
                key: "getLabelLineLabelInfo",
                value: function(e) {
                    return vo(this, {
                        isEmphasis: e,
                        type: "labelLine"
                    })
                }
            }]), o
        }(),
        bo = new Mt,
        xo = function(e, t, o, i, a) {
            var r = No(o, t, a);
            if (r) {
                var n = r.arcPoints,
                    l = r.arcAngles,
                    h = r.center,
                    s = r.radius,
                    u = r.foucusArcNum,
                    c = r.hoverOffset,
                    d = r.tooltip,
                    g = void 0 === d ? {} : d,
                    f = r.pieItems,
                    v = ii(o, t, a, i);
                if (n) {
                    var p = ht.Math.Vector2,
                        y = 2 * Math.PI,
                        b = new p(h),
                        x = s.outerRadius,
                        m = s.innerRadius,
                        w = ht.Default.getDistance(v, h);
                    if (m < w && w < (void 0 !== u ? x + c : x))
                        for (var k = 0, C = l.length; k < C; k++) {
                            var V = f[k],
                                I = V.roseType,
                                _ = V.roseRadius;
                            if (I && (k === u ? m + _ + c : m + _) < w) k === u && (delete r.foucusArcNum, t.iv());
                            else {
                                var D = new p(n[k]).sub(b),
                                    T = new p(v).sub(b),
                                    S = D.clone().normalize().dot(T.normalize()),
                                    R = Math.acos(S);
                                if (0 < D.x * T.y - T.x * D.y) {
                                    if (R < l[k]) {
                                        u != k && (r.foucusArcNum = k, t.iv());
                                        break
                                    }
                                    u === k && (delete r.foucusArcNum, t.iv())
                                } else {
                                    if (y - R < l[k]) {
                                        u != k && (r.foucusArcNum = k, t.iv());
                                        break
                                    }
                                    u === k && (delete r.foucusArcNum, t.iv())
                                }
                            }
                        } else void 0 !== u && (delete r.foucusArcNum, t.iv())
                }
                if (g.show) {
                    var L = r.foucusArcNum;
                    if (void 0 !== L) {
                        var P = f[L],
                            B = P.value,
                            E = P.percent,
                            A = P.name,
                            M = P.seriesName,
                            O = g.formatter,
                            H = [],
                            W = [],
                            F = so.length;
                        if (O) vo(P, {
                            outFormatter: O
                        }).labelTextArray.forEach(function(e, t) {
                            H.push([null, e]), W.push(so[t % F])
                        });
                        else H = [
                            ["名称", A],
                            ["百分比", (100 * E).toFixed(1) + "%"],
                            ["数值", B]
                        ], W = ["red", "green", "pink"];
                        bo.setInfo({
                            label: M,
                            datas: H,
                            colors: W
                        }), Go.show(bo.getView(), e)
                    } else Go.hide()
                }
            }
        },
        mo = function(e) {
            function t() {
                return u(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return c(t, qe), n(t, [{
                key: "onMove",
                value: function(e, t, o, i, a, r) {
                    xo(e, t, o, i, this)
                }
            }, {
                key: "onUp",
                value: function(e, t, o, i, a, r) {
                    xo(e, t, o, i, this)
                }
            }, {
                key: "onLeave",
                value: function(e, t, o, i, a, r) {
                    var n = No(o, t, this);
                    void 0 !== n.foucusArcNum && (delete n.foucusArcNum, t.iv(), Go.hide())
                }
            }]), t
        }(),
        wo = /firefox/.test(window.navigator.userAgent.toLowerCase()),
        ko = (Jt = {}, Qt = document ? ht.Default.createCanvas().getContext("2d") : null, function(e, t) {
            Qt.font = e || ht.Default.labelFont;
            var o = Jt[Qt.font];
            return o || (o = 2 * Qt.measureText("e").width, Jt[Qt.font] = o), {
                width: Qt.measureText(t).width + 2,
                height: o
            }
        }),
        Co = function(e, t) {
            if (!e) return Vo([], t);
            var o, i = (o = e, o ? ("string" != typeof o && (o += ""), o.replace(/^\s+|\s+$/g, "")) : "").split(/\s+/g),
                a = [];
            return i.forEach(function(e) {
                isNaN(e) || a.push(parseInt(e))
            }), Vo(a)
        },
        Vo = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            return e && 0 !== e.length ? 3 === e.length ? [e[0], e[1], e[2], e[1]] : 2 === e.length ? [e[0], e[1], e[0], e[1]] : 1 === e.length ? [e[0], e[0], e[0], e[0]] : [e[0], e[1], e[2], e[3]] : [t, t, t, t]
        },
        Io = function(e) {
            e && "textarea" === e || (e = "input");
            var t = document.createElement(e),
                o = t.style;
            return o.display = "block", o.boxSizing = "border-box", o.position = "absolute", o.outline = "none", o.zIndex = 1e4, o.borderWidth = 0, o.backgroundColor = "rgba(0, 0, 0, 0)", t
        },
        _o = function(e, t, o) {
            var i = t.style,
                a = o.rect,
                r = new ht.Math.Matrix2d,
                n = e.getZoom();
            ht.Default.layout(t, a), r.appendTranslate(e.tx(), e.ty()), r.appendScale(n, n), r.append(o.matrix), Do(i, "transform", "matrix(" + r.a.toFixed(5) + ", " + r.b.toFixed(5) + ", " + r.c.toFixed(5) + ",\n    " + r.d.toFixed(5) + ", " + r.tx.toFixed(5) + ", " + r.ty.toFixed(5) + ")"), Do(i, "transformOrigin", (-a.x).toFixed(5) + "px " + (-a.y).toFixed(5) + "px")
        },
        Do = ((eo = document.createElement("input")).setAttribute("style", "width: 0;height: 0;"), function(e, t, o) {
            var i = t[0].toUpperCase + t.substring(1, t.length);
            e["webkit" + i] = o, e["moz" + i] = o, e["ms" + i] = o, e["o" + i] = o, e[t] = o
        }),
        To = function(e, t, o) {
            for (var i = [], a = 0, r = 1, n = e.length; r <= n; r++) {
                var l = e.substring(a, r);
                ko(o, l).width > t && (a = r - 1 === a ? (i.push(e.substring(a, r)), r) : (i.push(e.substring(a, r - 1)), r - 1))
            }
            return a !== r - 1 && i.push(e.substring(a, r)), i
        },
        So = function(e, t, o, i) {
            for (var a = [], r = e.split("\n"), n = 0, l = r.length; n < l; n++) {
                var h = r[n];
                if ("" === h && (h = " "), i) Array.prototype.push.apply(a, To(h, o, t));
                else {
                    for (var s, u, c = "", d = void 0, g = void 0, f = void 0, v = "", p = 0; p < h.length; p++) {
                        h.charAt(p).match(/[a-z|A-Z]/g) ? c += "1" : c += "2"
                    }
                    c = (c = c.replace(/21/g, "2_1")).replace(/12/g, "1_2");
                    for (var y = 0; y < c.length; y++) {
                        c.charAt(y).match(/\_/g) && (h = Ro(h, y + 1, "|"))
                    }
                    s = h.split("|"), u = c.split("_");
                    for (var b = 0, x = s.length; b < x; b++) d = v + s[b], g = ko(t, d), "1" === u[b][0] ? g.width > o ? v ? (a.push(v), v = "", b--) : (f = To(s[b], o, t), Array.prototype.push.apply(a, f.slice(0, f.length - 1)), v = f[f.length - 1]) : v = g.width === o ? (a.push(d), "") : d : v = g.width > o ? (f = To(d, o, t), Array.prototype.push.apply(a, f.slice(0, f.length - 1)), f[f.length - 1]) : d;
                    v && a.push(v)
                }
            }
            return a
        },
        Ro = function(e, t, o) {
            return e = e.substring(0, t - 1) + o + e.substring(t - 1, e.length)
        },
        Lo = function(e, t, o, i, a, r) {
            return e ? (t && (t = new v(t)), e.pressed ? i || (a && t && 0 !== t.a ? ht.Default.darker(t, ke.activeDarker) : r ? null : ke.emptyColor) : e.hover ? o || (a && t && 0 !== t.a ? ht.Default.darker(t, ke.hoverDarker) : r ? null : ke.emptyColor) : r ? null : t ? t.getRGBA() : ke.emptyColor) : t
        };

    function Po(e, t) {
        var o = e.prototype,
            i = ht.Default.getMSMap();
        for (var a in t) i[a] && i.hasOwnProperty(a) ? i[a](o, t) : o[a] = t[a]
    }

    function Bo(e) {
        var t = e.a(C.VALUE);
        return void 0 === t ? "" : t
    }
    var Eo, Ao, Mo = (Eo = null, Ao = function(e, t, o) {
            "binaryString" === o ? e.readAsBinaryString(t) : "ArrayBuffer" === o ? e.readAsArrayBuffer(t) : "dataUrl" === o ? e.readAsDataURL(t) : e.readAsText(t)
        }, function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                l = e.multiple,
                h = e.readType,
                s = e.filter,
                t = e.accept;
            Eo || ((Eo = document.createElement("input")).setAttribute("type", "file"), Eo.setAttribute("id", "hiddenFile"), Eo.style.width = 0, Eo.style.height = 0, Eo.addEventListener("change", function(e) {
                document.body.removeChild(Eo), Eo = null;
                for (var t = e.target.files, o = {
                        files: []
                    }, i = 0; i < t.length; i++) s ? s(t[i]) && o.files.push(t[i]) : o.files.push(t[i]);
                if (h && 0 !== o.files.length)
                    if (l) {
                        var a = 0;
                        o.files.forEach(function(t) {
                            var e = new FileReader;
                            e.onload = function(e) {
                                t.readResult = e.target.result, ++a === o.files.length && n(o)
                            }, Ao(e, t, h)
                        })
                    } else {
                        var r = new FileReader;
                        r.onload = function(e) {
                            t[0].readResult = e.target.result, n(o)
                        }, Ao(r, t[0], h)
                    }
                else n(o)
            }), document.body.appendChild(Eo)), Eo.multiple = !!l, Eo.accept = t || "", Eo.click()
        }),
        Oo = function(e, t) {
            for (var o = [], i = 0, a = 0, r = void 0, n = 0, l = e.length; n < l; n++)
                if (r = e[n].width || .1, isNaN(r)) {
                    var h = r.split("+"),
                        s = parseFloat(h[0]),
                        u = [];
                    1 < s ? a += s : i += s, u.push(s), 1 < (s = parseFloat(h[1])) ? (a += s, u.unshift(s)) : (i += s, u.push(s)), o.push(u)
                } else 1 <= (r = parseFloat(r)) ? a += r = Math.max(12, r) : i += r, o.push(r);
            for (n = 0, l = o.length; n < l; n++)(r = o[n]) < 1 ? o[n] = Math.max(0, r / i * (t - a)) : r instanceof Array && (o[n] = r[0] + Math.max(0, r[1] / i * (t - a)));
            return o
        },
        Ho = function(e) {
            var t = we(e, 4);
            return {
                x: t[0],
                y: t[1],
                width: t[2],
                height: t[3]
            }
        },
        Wo = function(e, t) {
            return e && t ? e.getDataUI ? e.getDataUI(t) : e.getData3dUI ? e.getData3dUI(t) : void 0 : null
        },
        Fo = function(e, t, o) {
            var i = function(e, t, o) {
                if (!e || !e.interactiveInfo) return null;
                if (o) {
                    var i = void 0;
                    return "billboard" === t.s("shape3d") && (i = t.s("shape3d.image")), i && e.interactiveInfo[i] ? e.interactiveInfo[i].bodyInfo.compInfos : null
                }
                return e.interactiveInfo.bodyInfo ? e.interactiveInfo.bodyInfo.compInfos : null
            }(Wo(e, t), t, e instanceof ht.graph3d.Graph3dView);
            if (i)
                for (var a = 0, r = i.length; a < r; a++) {
                    var n = i[a];
                    if (n.comp === o) return n
                }
            return null
        },
        No = function(e, t, o) {
            var i = Wo(e, t);
            if (i) {
                if (i.vectorInfos) {
                    for (var a = i.vectorInfos, r = 0; r < a.length; r++)
                        if (a[r].comp === o) return a[r]
                } else i.vectorInfos = [];
                var n = {
                    comp: o
                };
                return i.vectorInfos.push(n), n
            }
        },
        Go = new to,
        Uo = function(e, t, o, i, a) {
            i && (i.editing = !1, delete i.dom), a && e.a(a, o.value), e.iv(), t.getView().removeChild(o)
        },
        Yo = function(e) {
            return null == e || "" === e
        },
        jo = function(e) {
            return null == e
        },
        zo = function e(t, o, i) {
            for (var a in o) {
                var r = o[a];
                "object" !== (void 0 === r ? "undefined" : ve(r)) || ht.Default.isArray(r) || i ? t[a] = o[a] : e(t[a], o[a])
            }
        },
        Xo = function(e, t) {
            e.getView().style.cursor = t
        },
        Ko = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            return e[t %= e.length]
        },
        Zo = function(e, t, o, i) {
            var a = e[t];
            if (a && a.func && "string" == typeof a.func) {
                var r = a.func.split("@"),
                    n = we(r, 2);
                n[0];
                return n[1]
            }
            return null
        },
        $o = function(e, t) {
            var o, i, a, r;
            try {
                o = e.toString().split(".")[1].length
            } catch (e) {
                o = 0
            }
            try {
                i = t.toString().split(".")[1].length
            } catch (e) {
                i = 0
            }
            if (r = Math.abs(o - i), a = Math.pow(10, Math.max(o, i)), 0 < r) {
                var n = Math.pow(10, r);
                t = i < o ? (e = Number(e.toString().replace(".", "")), Number(t.toString().replace(".", "")) * n) : (e = Number(e.toString().replace(".", "")) * n, Number(t.toString().replace(".", "")))
            } else e = Number(e.toString().replace(".", "")), t = Number(t.toString().replace(".", ""));
            return (e + t) / a
        },
        qo = function(e, t) {
            var o, i, a;
            try {
                o = e.toString().split(".")[1].length
            } catch (e) {
                o = 0
            }
            try {
                i = t.toString().split(".")[1].length
            } catch (e) {
                i = 0
            }
            return ((e * (a = Math.pow(10, Math.max(o, i))) - t * a) / a).toFixed(i <= o ? o : i)
        },
        Jo = function(e, t) {
            return {
                x: e.x - t,
                y: e.y - t,
                width: e.width + 2 * t,
                height: e.height + 2 * t
            }
        },
        Qo = function(e, t, o) {
            var i, a, r, n, l, h, s, u = Fo(o, t, e).rect,
                c = t.getAnchor(),
                d = t.getWidth(),
                g = t.getHeight(),
                f = t.toGlobal({
                    x: u.x - c.x * d,
                    y: u.y - c.y * g
                }),
                v = t.toGlobal({
                    x: u.x + u.width - c.x * d,
                    y: u.y + u.height - c.y * g
                }),
                p = ht.Default.unionPoint(f, v);
            return i = p, r = (a = o).getView().getBoundingClientRect(), n = a.getZoom(), l = a.tx(), h = a.ty(), (s = {}).height = i.height * n, s.width = i.width * n, s.x = r.left + l + i.x * n, s.y = r.top + h + i.y * n, s
        },
        ei = function(e, t, o) {
            if (!e || !e.func) return e;
            var i, a = e.func,
                r = e.value;
            return i = ht.Default.isFunction(a) ? o && o.vectorDataBindingDisabled && !e.isSafeFunc ? r : a(t, o) : t instanceof ht.Data ? /^attr@/.test(a) ? t.a(a.slice(5)) : /^style@/.test(a) ? t.s(a.slice(6)) : /^field@/.test(a) ? t[a.slice(6)] : t[a] ? t[a](o) : r : r, void 0 !== r && null == i ? r : i
        },
        ti = function(e, t) {
            var o = t.borderWidth,
                i = t.borderColor,
                a = t.dash,
                r = t.dashPattern,
                n = t.background,
                l = t.bgGradient,
                h = t.bgGradientColor,
                s = t.contentRect;
            if (a && e.setLineDash(r), n) {
                var u;
                if (l && h) n = (u = ht.Default).createGradient.apply(u, [e, l, n, h].concat(Ie(s)));
                e.fillStyle = n, e.fill()
            }
            o && i && (e.strokeStyle = i, e.lineWidth = o, e.stroke())
        },
        oi = function(e, t, o, i) {
            var a = t.x,
                r = t.y,
                n = t.width,
                l = t.height;
            e.fillStyle = o, e.beginPath(), ht.Default.drawRoundRect(e, a, r, n, l, i), e.closePath(), e.fill()
        },
        ii = function(e, t, o, i) {
            var a = Fo(e, t, o);
            return {
                x: i.x + a.rect.x,
                y: i.y + a.rect.y
            }
        },
        ai = function(e) {
            return ht.Default.isArray(e)
        },
        ri = function(e) {
            return !jo(e)
        },
        ni = {
            comp: {
                button: function(e, t, o, i, a) {
                    var r = o.getValue("text"),
                        n = o.getValue("disabled"),
                        l = o.getValue("font"),
                        h = o.getValue("icon"),
                        s = o.getValue("iconPosition"),
                        u = o.getValue("iconWidth"),
                        c = o.getValue("iconHeight"),
                        d = o.getValue("iconGap"),
                        g = o.getColor("iconColor"),
                        f = o.getColor("hoverIconColor"),
                        v = o.getColor("activeIconColor"),
                        p = o.getColor("textColor"),
                        y = o.getColor("hoverTextColor"),
                        b = o.getColor("activeTextColor"),
                        x = o.getColor("disabledTextColor"),
                        m = o.getValue("borderWidth"),
                        w = o.getColor("borderColor"),
                        k = o.getColor("hoverBorderColor"),
                        C = o.getColor("activeBorderColor"),
                        V = o.getColor("disabledBorderColor"),
                        I = o.getColor("background"),
                        _ = o.getColor("hoverBackground"),
                        D = o.getColor("activeBackground"),
                        T = o.getColor("disabledBackground"),
                        S = o.getValue("borderRadius"),
                        R = o.getValue("handleClick"),
                        L = No(a, i, o),
                        P = Vo(J),
                        B = (we(P, 4), Co(S)),
                        E = we(B, 4),
                        A = E[0],
                        M = E[1],
                        O = E[2],
                        H = E[3],
                        W = t.x,
                        F = t.y,
                        N = t.width,
                        G = t.height;
                    if (n ? (I = T, w = V, p = x, m || (m = 1)) : (I = Lo(L, I, _, D, !0), w = Lo(L, w, k, C, !0), g = Lo(L, g, f, v, !1, !0), p = Lo(L, p, y, b, !0)), e.fillStyle = I, e.beginPath(), ht.Default.drawRoundRect(e, W, F, N, G, A, M, H, O), e.closePath(), e.fill(), m && w && (e.strokeStyle = w, e.lineWidth = m, e.stroke()), !h && r) Z(e, r, l, p, W, F, N, G, "center", "middle");
                    else if (h && !r) $(e, q(h), "uniform", W + .5 * (N - u), F + .5 * (G - c), u, c, i, a, g);
                    else if (h && r) {
                        var U = ko(l, r),
                            Y = void 0,
                            j = void 0;
                        if (ne === s || le === s) {
                            var z = F + .5 * (G - c - U.height - d);
                            Y = {
                                x: W,
                                height: U.height,
                                width: N
                            }, j = {
                                x: W + .5 * (N - u),
                                width: u,
                                height: c
                            }, ne === s ? (Y.y = z + c + d, j.y = z) : le === s && (Y.y = z, j.y = z + U.height + d)
                        } else {
                            var X = W + .5 * (N - u - U.width - d);
                            Y = {
                                width: U.width,
                                y: F,
                                height: G
                            }, (j = {
                                y: .5 * (G - c),
                                width: u,
                                height: c
                            }).x = he === s ? (Y.x = X) + U.width + d : (Y.x = X + u + d, X)
                        }
                        Z(e, r, l, p, Y.x, Y.y, Y.width, Y.height, "center", "middle"), $(e, q(h), "uniform", j.x, j.y, j.width, j.height, i, a, g)
                    }
                    L && (L.disabled = n, L.onClick = R)
                },
                input: function(e, t, o, i, a) {
                    var r = o.getValue("value"),
                        n = o.getValue("placeholder"),
                        l = o.getColor("placeholderColor"),
                        h = o.getValue("disabled"),
                        s = o.getValue("borderWidth"),
                        u = o.getColor("borderColor"),
                        c = o.getColor("focusBorderColor") || u,
                        d = o.getValue("borderRadius"),
                        g = o.getValue("padding"),
                        f = o.getColor("background"),
                        v = o.getColor("focusBackground") || f,
                        p = o.getValue("icon"),
                        y = o.getValue("iconWidth"),
                        b = o.getValue("iconHeight"),
                        x = o.getValue("iconAlign"),
                        m = o.getValue("font"),
                        w = o.getValue("textAlign"),
                        k = o.getColor("textColor"),
                        C = o.getValue("maxLength"),
                        V = o.getValue("inputType"),
                        I = o.getValue("enterEndInputable"),
                        _ = o.getValue("onKeyDown"),
                        D = o.getValue("onKeyUp"),
                        T = o.getValue("onChange"),
                        S = o.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                        R = No(a, i, o),
                        L = R && R.editing,
                        P = R && R.editingValue,
                        B = Co(g),
                        E = we(B, 4),
                        A = E[0],
                        M = E[1],
                        O = E[2],
                        H = E[3],
                        W = Co(d),
                        F = we(W, 4),
                        N = F[0],
                        G = F[1],
                        U = F[2],
                        Y = F[3],
                        j = t.x,
                        z = t.y,
                        X = t.width,
                        K = t.height,
                        Z = void 0;
                    if (i && L ? (Z = v, u = c) : Z = f, e.beginPath(), ht.Default.drawRoundRect(e, j, z, X, K, N, G, Y, U), e.closePath(), Z && (e.fillStyle = Z, e.fill()), (s && u || L && s && c) && (e.strokeStyle = L ? c : u, e.lineWidth = s, e.stroke()), !P || !L) {
                        var $ = !r && n,
                            q = r || n || "",
                            J = r ? k : l,
                            Q = Math.max(0, X - H - M),
                            ee = Math.max(0, K - A - O),
                            te = j + H,
                            oe = z + A;
                        L && (q = n || "", J = l), q && (e.save(), e.beginPath(), e.rect(te, oe, Q, ee), e.clip(), !$ && i && "password" === V && (q = function() {
                            for (var e = "", t = 0; t < q.length; t++) e += "•";
                            return e
                        }()), re(e, q, m, J, te, z + 1, Q, K, w, "middle"), e.restore())
                    }
                    if (p) {
                        var ie = void 0;
                        ie = "left" === x ? j : "center" === x ? j + .5 * (X - y) : j + X - y, ce(e, de(p), "uniform", ie, .5 * (K - b), y, b, i, a)
                    }
                    if (h) {
                        var ae = s / 2;
                        e.beginPath(), ht.Default.drawRoundRect(e, j - ae, z - ae, X + s, K + s, N, G, Y, U), e.fillStyle = S, e.closePath(), e.fill()
                    }
                    R && (R.disabled = h, R.font = m, R.value = r, R.placeholder = n, R.textAlign = w, R.maxLength = C, R.textColor = k, R.inputType = V, R.enterEndInputable = I, R.onKeyUp = D, R.onKeyDown = _, R.onChange = T, R.padding = g, R.selectTextOnFocus = o.getValue("selectTextOnFocus"))
                },
                inputNumber: function(e, t, o, i, a) {
                    var r = o.getValue("value"),
                        n = o.getValue("placeholder"),
                        l = o.getColor("placeholderColor"),
                        h = o.getColor("min"),
                        s = o.getColor("max"),
                        u = o.getColor("step"),
                        c = o.getValue("disabled"),
                        d = o.getValue("borderWidth"),
                        g = o.getColor("borderColor"),
                        f = o.getColor("focusBorderColor") || g,
                        v = o.getValue("borderRadius"),
                        p = o.getValue("padding"),
                        y = o.getColor("background"),
                        b = o.getColor("focusBackground") || y,
                        x = o.getValue("icon"),
                        m = o.getValue("iconWidth"),
                        w = o.getValue("iconHeight"),
                        k = o.getValue("iconAlign"),
                        C = o.getValue("font"),
                        V = o.getValue("textAlign"),
                        I = o.getColor("textColor"),
                        _ = o.getValue("maxLength"),
                        D = o.getValue("enterEndInputable"),
                        T = o.getValue("buttonVisible"),
                        S = o.getValue("onKeyDown"),
                        R = o.getValue("onKeyUp"),
                        L = o.getValue("onChange"),
                        P = o.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                        B = No(a, i, o),
                        E = B && B.editing,
                        A = B && B.editingValue,
                        M = Co(p),
                        O = we(M, 4),
                        H = O[0],
                        W = O[1],
                        F = O[2],
                        N = O[3],
                        G = Co(v),
                        U = we(G, 4),
                        Y = U[0],
                        j = U[1],
                        z = U[2],
                        X = U[3],
                        K = t.x,
                        Z = t.y,
                        $ = t.width,
                        q = t.height,
                        J = void 0;
                    if (i && E ? (J = b, g = f) : J = y, e.beginPath(), ht.Default.drawRoundRect(e, K, Z, $, q, Y, j, X, z), e.closePath(), J && (e.fillStyle = J, e.fill()), (d && g || E && d && f) && (e.strokeStyle = E ? f : g, e.lineWidth = d, e.stroke()), !A && 0 !== A || !E) {
                        var Q = r || n || "",
                            ee = r ? I : l,
                            te = Math.max(0, $ - N - W),
                            oe = Math.max(0, q - H - F),
                            ie = K + N,
                            ae = Z + H;
                        E && (Q = n || "", ee = l), Q && (e.save(), e.beginPath(), e.rect(ie, ae, te, oe), e.clip(), We(e, Q, C, ee, ie, Z + 1, te, q, V, "middle"), e.restore())
                    }
                    if (T) {
                        var re = K + $ - 20,
                            ne = Z + d / 2,
                            le = q - d,
                            he = 5 < le / 2 ? 2.5 : le / 2 * .4;
                        e.strokeStyle = g, e.beginPath(), e.moveTo(re, ne), e.lineTo(re, ne + le), e.moveTo(re, ne + le / 2), e.lineTo(re + 20, ne + le / 2), e.stroke(), e.beginPath(), e.moveTo(re + 6, ne + le / 4 + he), e.lineTo(re + 10, ne + le / 4 - he), e.lineTo(re + 14, ne + le / 4 + he), e.stroke(), e.beginPath(), e.moveTo(re + 6, ne + le / 4 * 3 - he), e.lineTo(re + 10, ne + le / 4 * 3 + he), e.lineTo(re + 14, ne + le / 4 * 3 - he), e.stroke(), B && (B.buttonRects = [{
                            x: re,
                            y: ne,
                            width: 20,
                            height: q / 2
                        }, {
                            x: re,
                            y: ne + q / 2,
                            width: 20,
                            height: q / 2
                        }])
                    }
                    if (x) {
                        var se = void 0;
                        se = "left" === k ? K : "center" === k ? K + .5 * ($ - m) : K + $ - m, Fe(e, Ne(x), "uniform", se, .5 * (q - w), m, w, i, a)
                    }
                    if (c) {
                        var ue = d / 2;
                        e.beginPath(), ht.Default.drawRoundRect(e, K - ue, Z - ue, $ + d, q + d, Y, j, X, z), e.fillStyle = P, e.closePath(), e.fill()
                    }
                    B && (B.disabled = c, B.font = C, B.value = r, B.placeholder = n, B.textAlign = V, B.maxLength = _, B.textColor = I, B.enterEndInputable = D, B.onKeyUp = R, B.onKeyDown = S, B.onChange = L, B.padding = p, B.step = u, B.min = h, B.max = s, B.selectTextOnFocus = o.getValue("selectTextOnFocus"))
                },
                textarea: function(t, e, o, i, a) {
                    var r = o.getValue("value"),
                        n = o.getValue("placeholder"),
                        l = o.getColor("placeholderColor"),
                        h = o.getValue("disabled"),
                        s = o.getValue("borderWidth"),
                        u = o.getColor("borderColor"),
                        c = o.getColor("focusBorderColor"),
                        d = o.getValue("borderRadius"),
                        g = o.getValue("padding"),
                        f = o.getColor("background"),
                        v = o.getColor("focusBackground") || f,
                        p = o.getValue("textAlign"),
                        y = o.getColor("textColor"),
                        b = o.getValue("lineHeight"),
                        x = o.getValue("font"),
                        m = o.getValue("wordBreak"),
                        w = o.getValue("maxLength"),
                        k = o.getValue("enterEndInputable"),
                        C = o.getValue("onKeyUp"),
                        V = o.getValue("onKeyDown"),
                        I = o.getValue("onChange"),
                        _ = o.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                        D = No(a, i, o),
                        T = D && D.editing,
                        S = D && D.editingValue,
                        R = Co(g),
                        L = we(R, 4),
                        P = L[0],
                        B = L[1],
                        E = L[2],
                        A = L[3],
                        M = Co(d),
                        O = we(M, 4),
                        H = O[0],
                        W = O[1],
                        F = O[2],
                        N = O[3],
                        G = e.x,
                        U = e.y,
                        Y = e.width,
                        j = e.height,
                        z = void 0;
                    if (i && T ? (z = v, u = c) : z = f, t.beginPath(), ht.Default.drawRoundRect(t, G, U, Y, j, H, W, N, F), t.closePath(), z && (t.fillStyle = z, t.fill()), (s && u || T && s && c) && (t.strokeStyle = T ? c : u, t.lineWidth = s, t.stroke()), !S || !T) {
                        var X = r || n || "",
                            K = r ? y : l,
                            Z = Math.max(0, Y - A - B),
                            $ = Math.max(0, j - P - E);
                        if (T && (X = n || "", K = l), X) {
                            t.save(), t.beginPath(), t.rect(G + A, U + P, Z, $), t.clip();
                            var q = So(X, x, Z, m),
                                J = U + P;
                            q.forEach(function(e) {
                                U + j < J || (ee(t, e, x, K, G + A, J, Z, b, p, "middle"), J += b)
                            }), t.restore()
                        }
                    }
                    if (h) {
                        var Q = s / 2;
                        t.beginPath(), ht.Default.drawRoundRect(t, G - Q, U - Q, Y + s, j + s, H, W, N, F), t.fillStyle = _, t.closePath(), t.fill()
                    }
                    D && (D.disabled = h, D.font = x, D.value = r, D.placeholder = n, D.textAlign = p, D.maxLength = w, D.textColor = y, D.enterEndInputable = k, D.padding = g, D.wordBreak = m, D.onKeyUp = C, D.onKeyDown = V, D.onChange = I, D.lineHeight = b, D.selectTextOnFocus = o.getValue("selectTextOnFocus"))
                },
                radio: function(e, t, o, i, a) {
                    var r = o.getValue("disabled"),
                        n = o.getValue("checked"),
                        l = o.getColor("normalColor"),
                        h = o.getColor("background"),
                        s = o.getColor("activeColor"),
                        u = o.getColor("disabledColor"),
                        c = o.getColor("disabledBackground"),
                        d = No(a, i, o),
                        g = n ? s : l,
                        f = t.x,
                        v = t.y,
                        p = t.width,
                        y = t.height,
                        b = Math.min(p, y);
                    i && (r ? (g = u, h = c) : i.a(C.PRESSED) ? n ? g = ht.Default.darker(g, ke.activeDarker) : h = ht.Default.darker(h, ke.activeDarker) : i.a(C.HOVER) && (n ? g = ht.Default.darker(g, ke.hoverDarker) : h = ht.Default.darker(h, ke.hoverDarker))), h && (e.beginPath(), e.fillStyle = h, e.arc(f + .5 * p, v + .5 * y, .5 * b, 0, 2 * Math.PI), e.fill()), e.beginPath(), e.strokeStyle = g, e.lineWidth = 1.5, e.arc(f + .5 * p, v + .5 * y, .5 * b, 0, 2 * Math.PI), e.stroke(), n && (e.beginPath(), e.fillStyle = g, e.arc(f + .5 * p, v + .5 * y, .25 * b, 0, 2 * Math.PI), e.fill()), i && !i.a(C.INPUT_TYPE) && i.a(C.INPUT_TYPE, x), d && (d.disabled = r, d.onChange = o.getValue("onChange"), d.group = o.getValue("group"), d.value = o.getValue("value"))
                },
                checkbox: function(e, t, o, i, a) {
                    var r = o.getValue("checked"),
                        n = o.getValue("disabled"),
                        l = o.getColor("borderColor"),
                        h = o.getColor("activeBorderColor"),
                        s = o.getColor("disabledBorderColor"),
                        u = o.getColor("background"),
                        c = o.getColor("activeBackground"),
                        d = o.getColor("disabledBackground"),
                        g = o.getValue("borderRadius"),
                        f = o.getColor("iconColor"),
                        v = o.getColor("disabledIconColor"),
                        p = No(a, i, o),
                        y = t.x,
                        b = t.y,
                        x = t.width,
                        m = t.height,
                        w = Math.min(x, m);
                    u = r ? c : u, u = n ? (l = s, f = v, d) : Lo(i, u, null, null, !0), r && !n && (l = h), m < x ? y += .5 * (x - m) : x < m && (b += .5 * (m - x)), e.beginPath(), ht.Default.drawRoundRect(e, y, b, w, w, g), e.closePath(), u && (e.fillStyle = u, e.fill()), e.strokeStyle = l, e.lineWidth = 1, e.stroke(), r && (e.beginPath(), e.moveTo(y + .125 * w, b + .5 * w), e.lineTo(y + w * (3 / 8), b + .75 * w), e.lineTo(y + .8125 * w, b + .25 * w), e.lineWidth = Math.max(1, w / 16), e.lineCap = "round", e.strokeStyle = f, e.stroke()), i && !i.a(C.INPUT_TYPE) && i.a(C.INPUT_TYPE, k), p && (p.disabled = n, p.checked = r, p.onChange = o.getValue("onChange"), p.group = o.getValue("group"), p.value = o.getValue("value"))
                },
                colorPicker: function(e, t, o, i, a) {
                    var r = o.getValue("disabled"),
                        n = o.getValue("borderWidth"),
                        l = o.getValue("borderColor"),
                        h = o.getValue("disabledBorderColor"),
                        s = o.getValue("focusBorderColor"),
                        u = o.getValue("borderRadius"),
                        c = o.getValue("textColor"),
                        d = o.getValue("value"),
                        g = o.getValue("font"),
                        f = o.getValue("fullMode"),
                        v = o.getValue("showDropDownIcon"),
                        p = o.getValue("dropDownIcon"),
                        y = o.getValue("dropDownIconColor"),
                        b = o.getValue("dropDownIconWidth"),
                        x = o.getValue("dropDownIconHeight"),
                        m = o.getValue("onChange"),
                        w = No(a, i, o),
                        k = Co(u),
                        C = we(k, 4),
                        V = C[0],
                        I = C[1],
                        _ = C[2],
                        D = C[3],
                        T = t.x,
                        S = t.y,
                        R = t.width,
                        L = t.height,
                        P = T + R + 5,
                        B = S + L + 5,
                        E = !1,
                        A = void 0;
                    if (r ? l = c = h : w && w.editing && s && (l = s), e.save(), f) {
                        e.beginPath(), ht.Default.drawRoundRect(e, T, S, R, L, V, I, D, _), e.closePath(), e.clip();
                        for (var M = S, O = 0; M < B; M += 5, O++) {
                            E = O % 2 != 0;
                            for (var H = T; H < P; H += 5) e.fillStyle = E ? z : j, e.fillRect(H, M, 5, 5), E = !E
                        }
                    } else {
                        P = (A = {
                            x: T + 4,
                            y: S + 4,
                            width: 1.66 * (L - 8),
                            height: L - 8
                        }).x + A.width, B = A.y + A.height, e.beginPath(), e.rect(A.x, A.y, A.width, A.height), e.closePath(), e.clip();
                        for (var W = A.y, F = 0; W < B; W += 5, F++) {
                            E = F % 2 != 0;
                            for (var N = A.x; N < P; N += 5) e.fillStyle = E ? z : j, e.fillRect(N, W, 5, 5), E = !E
                        }
                    }
                    e.restore(), e.beginPath(), ht.Default.drawRoundRect(e, T, S, R, L, V, I, D, _), e.closePath(), d && f ? (e.fillStyle = d, e.fill()) : d && !f && (e.fillStyle = d, e.fillRect(A.x, A.y, A.width, A.height), X.setColor(d), G(e, X, g, c, A.x + A.width + 4, S, R - A.width - 8, L, "left", "middle")), n && (e.lineWidth = n, e.strokeStyle = l, e.stroke()), v && U(e, Y(p || "ht.vector.dropDownIcon"), "uniform", T + R - 8 - b, S + .5 * (L - x), b, x, i, a, y), w && (w.disabled = r, w.onChange = m)
                },
                comboBox: function(e, t, o, i, a) {
                    var r = o.getValue("value"),
                        n = o.getValue("placeholder"),
                        l = o.getValue("dataSource"),
                        h = o.getValue("disabled"),
                        s = o.getValue("borderWidth"),
                        u = o.getValue("borderColor"),
                        c = o.getValue("disabledBorderColor"),
                        d = o.getValue("focusBorderColor"),
                        g = o.getValue("borderRadius"),
                        f = o.getValue("padding"),
                        v = o.getValue("background"),
                        p = o.getValue("disabledBackground"),
                        y = o.getValue("focusBackground") || v,
                        b = o.getValue("icon"),
                        x = o.getValue("iconWidth"),
                        m = o.getValue("iconHeight"),
                        w = o.getValue("iconAlign"),
                        k = o.getValue("font"),
                        C = o.getValue("textAlign"),
                        V = o.getValue("textColor"),
                        I = o.getValue("disabledTextColor"),
                        _ = o.getValue("dropDownIcon"),
                        D = o.getValue("dropDownIconColor"),
                        T = o.getValue("dropDownIconWidth"),
                        S = o.getValue("dropDownIconHeight"),
                        R = o.getValue("drawUnMatchValue"),
                        L = No(a, i, o),
                        P = L && L.editing,
                        B = Co(f),
                        E = we(B, 4),
                        A = E[0],
                        M = E[1],
                        O = E[2],
                        H = E[3],
                        W = Co(g),
                        F = we(W, 4),
                        N = F[0],
                        G = F[1],
                        U = F[2],
                        Y = F[3],
                        j = t.x,
                        z = t.y,
                        X = t.width,
                        K = t.height,
                        Z = void 0;
                    i ? h ? (Z = p, u = c, V = I, s || (s = 1)) : P ? (Z = y, u = d) : Z = v : Z = v, e.beginPath(), ht.Default.drawRoundRect(e, j, z, X, K, N, G, Y, U), e.closePath(), Z && (e.fillStyle = Z, e.fill()), (s && u || P && s && d) && (e.strokeStyle = P ? d : u, e.lineWidth = s, e.stroke());
                    var $ = "";
                    if (R) $ = r;
                    else if (!jo(r) && l)
                        for (var q = 0, J = l.length; q < J; q++)
                            if (l[q].value === r) {
                                $ = l[q].label, b = l[q].icon;
                                break
                            }
                    $ || (b = null, jo(r) || ($ = r + ""));
                    var Q = $ || n || "",
                        ee = Math.max(0, X - H - M),
                        te = Math.max(0, K - A - O),
                        oe = j + H,
                        ie = z + A;
                    if (jo(r) && !h && (V = ke.placeholderColor), e.save(), e.beginPath(), e.rect(oe, ie, ee, te), e.clip(), ge(e, Q, k, V, b ? oe + x : oe, ie, ee, te, C, "middle"), e.restore(), b) {
                        var ae = void 0;
                        ae = "left" === w ? oe : "center" === w ? j + .5 * (X - x) : j + X - x - M, fe(e, pe(b), "uniform", ae, .5 * (K - m), x, m, i, a)
                    }
                    fe(e, pe(_ || "ht.vector.dropDownIcon"), "uniform", j + X - 8 - T, z + .5 * (K - S), T, S, i, a, D), L && (L.disabled = h, L.dataSource = l, L.dropIconWidth = o.getValue("dropIconWidth"), L.dropIconHeight = o.getValue("dropIconHeight"), L.dropRowHeight = o.getValue("dropRowHeight"), L.dropWidth = o.getValue("dropWidth"), L.dropBackground = o.getValue("dropBackground"), L.dropLabelFont = o.getValue("dropLabelFont"), L.dropLabelColor = o.getValue("dropLabelColor"), L.dropActiveLabelColor = o.getValue("dropActiveLabelColor"), L.dropActiveBackground = o.getValue("dropActiveBackground"), L.dropHoverBackground = o.getValue("dropHoverBackground"), L.dropMaxHeight = o.getValue("dropMaxHeight"), L.onChange = o.getValue("onChange"), L.dropBorderColor = o.getValue("dropBorderColor"), L.dropBorderWidth = o.getValue("dropBorderWidth"))
                },
                gauge: function(e, t, o, i, a) {
                    var r = o.getValue("pointerRadius"),
                        n = o.getColor("pointerColor"),
                        l = o.getValue("value"),
                        h = o.getValue("max"),
                        s = o.getValue("showTick"),
                        u = o.getValue("tickEvery"),
                        c = o.getColor("tickColor"),
                        d = o.getValue("tickWidth"),
                        g = (o.getValue("tickRadius"), o.getValue("bigTickEvery")),
                        f = o.getColor("bigTickColor"),
                        v = o.getValue("bigTickWidth"),
                        p = (o.getValue("bigTickRadius"), o.getValue("showLabel")),
                        y = o.getValue("labelEvery"),
                        b = o.getColor("labelColor"),
                        x = o.getValue("labelFont"),
                        m = o.getValue("labelRadius"),
                        w = o.getValue("showShadow"),
                        k = o.getValue("shadowBlur"),
                        C = o.getColor("shadowColor"),
                        V = o.getValue("shadowOffsetX"),
                        I = o.getValue("shadowOffsetY");
                    ye = o.getValue("clockwise"), be = o.getValue("min"), ie = o.getValue("startAngle"), ae = o.getValue("endAngle"), te = Math.abs(h - be), oe = Math.abs(ae - ie);
                    var _ = t.x,
                        D = t.y,
                        T = t.width,
                        S = t.height,
                        R = Math.min(T, S) / 2,
                        L = xe(l, ye);
                    if (e.save(), w && (e.shadowColor = C, e.shadowBlur = k, e.shadowOffsetX = V, e.shadowOffsetY = I), e.translate(_ + .5 * T, D + .5 * S), s) {
                        if (g) {
                            e.beginPath(), e.strokeStyle = f, e.lineWidth = v;
                            for (var P = be; P <= h; P += g) {
                                var B = xe(P, ye),
                                    E = R * Math.cos(B),
                                    A = R * Math.sin(B);
                                e.moveTo(.84 * E, .84 * A), e.lineTo(E, A)
                            }
                            e.stroke()
                        }
                        if (u) {
                            e.beginPath(), e.strokeStyle = c, e.lineWidth = d;
                            for (var M = be; M <= h; M += u) {
                                var O = xe(M, ye),
                                    H = R * Math.cos(O),
                                    W = R * Math.sin(O);
                                e.moveTo(.9 * H, .9 * W), e.lineTo(H, W)
                            }
                            e.stroke()
                        }
                    }
                    if (p && y) {
                        m = Q(m, R), e.font = x, e.fillStyle = b, e.textAlign = "center", e.textBaseline = "middle";
                        for (var F = be; F <= h; F += y) {
                            var N = xe(F, ye),
                                G = m * Math.cos(N),
                                U = m * Math.sin(N);
                            e.fillText(F, G, U)
                        }
                    }
                    var Y = .05 * (r = Q(r, R));
                    e.rotate(L), e.beginPath(), e.moveTo(-1.5 * Y, 0), e.lineTo(0, -Y), e.lineTo(r, 0), e.lineTo(0, Y), e.closePath(), e.fillStyle = n, e.fill(), e.restore()
                },
                table: function(v, p, i, y, b) {
                    var a, s = i.getValue("columns"),
                        e = i.getValue("dataSource"),
                        t = i.getColor("thBackground"),
                        o = i.getColor("tdBackground"),
                        r = i.getValue("thHeight"),
                        u = i.getValue("tdHeight"),
                        x = i.getValue("textLineHeight"),
                        n = i.getColor("thColor"),
                        m = i.getColor("tdColor"),
                        l = i.getValue("thFont"),
                        w = i.getValue("tdFont"),
                        k = i.getValue("borderWidth"),
                        h = i.getColor("borderColor"),
                        c = i.getColor("columnLineColor"),
                        C = i.getValue("columnLineWidth"),
                        d = i.getValue("columnLinePattern"),
                        g = i.getColor("rowLineColor"),
                        V = i.getValue("rowLineWidth"),
                        f = i.getValue("rowLinePattern"),
                        I = i.getValue("showHeadRowLine"),
                        _ = i.getValue("cellPadding"),
                        D = i.getValue("showHead"),
                        T = i.getColor("hoverBackground"),
                        S = i.getColor("hoverColor"),
                        R = i.getColor("selectBackground"),
                        L = i.getColor("selectColor"),
                        P = i.getValue("translateY") || 0,
                        B = i.getValue("translateX") || 0,
                        E = i.getValue("scrollable"),
                        A = i.getValue("autoHideScrollBar"),
                        M = i.getColor("scrollBarColor"),
                        O = i.getValue("scrollBarWidth"),
                        H = i.getValue("scrollBarWidthAbsolute"),
                        W = i.getValue("drawRow"),
                        F = i.getValue("multiple"),
                        N = i.getValue("onSelectRow"),
                        G = i.getValue("onHoverCell"),
                        U = i.getValue("onClickCell"),
                        Y = i.getValue("selectedIndex") || [],
                        j = i.getValue("visibleFunc"),
                        z = i.getValue("columnVisibleFunc"),
                        X = No(b, y, i),
                        K = p.x,
                        Z = p.y,
                        $ = p.width,
                        q = p.height,
                        J = $ - 2 * k,
                        Q = q - 2 * k,
                        ee = void 0,
                        te = [],
                        oe = [],
                        ie = [],
                        ae = [];
                    if (D && (ee = [K + k, Z + k, J, r]), a = [K + k, Z + r * D + k, $, Q - r * D], jo(Y) || ht.Default.isArray(Y) || (Y = [Y]), t && D && (v.fillStyle = t, v.fillRect.apply(v, Ie(ee))), o && (v.fillStyle = o, v.fillRect.apply(v, Ie(a))), s && 0 < s.length) {
                        if (s.forEach(function(e, t) {
                                (z && z(e, t, y, b) || !z) && (ie.push(e), ae.push(t))
                            }), !ie.length) return;
                        var re = ie.length,
                            ne = Oo(ie, J - C * (re - 1)),
                            le = e.length,
                            he = [],
                            se = K + k + B;
                        if (D)
                            for (var ue = 0; ue < re; ue++) {
                                var ce = ie[ue],
                                    de = ne[ue] - 2 * _,
                                    ge = ce.headColor || ce.color || n;
                                "function" == typeof ge && (ge = ge(ce)), se += _, v.save(), v.beginPath(), v.rect(se, Z + k, de, r), v.clip(), De(v, ce.displayName || ce.key, l, ge, se, Z + k, de, r, ce.align || "left", "middle"), v.restore(), se += de + C + _
                            }
                        v.save(), v.beginPath(), v.rect(K + k, Z + k + (D ? r : 0), J, Q - r * D), v.clip();
                        var fe = Z;
                        if (e && 0 < le && (e.forEach(function(e, t) {
                                (j && j(e, t, y, b) || !j) && (te.push(e), oe.push(t))
                            }), te.forEach(function(e, t) {
                                var r, n, l, o, i, h;
                                he.push((r = e, n = oe[t], l = x, o = u, i = s, h = Math.max(l, o), i.forEach(function(e, t) {
                                    var o = e.format,
                                        i = r[e.key];
                                    if (o && (i = o(i, r, n, t)), "string" == typeof i) {
                                        var a = i.match(Pe);
                                        a && a.length && (h = Math.max(h, l * (a.length + 1)))
                                    }
                                }), h))
                            }), !F && 1 < Y.length && (Y = Y.slice(0, 1)), te.forEach(function(h, s) {
                                var u = oe[s],
                                    c = he[s],
                                    d = fe + V * (u + I * D * 1) + r * D + k + P,
                                    e = {
                                        x: K,
                                        y: d,
                                        width: $,
                                        height: c
                                    };
                                if (fe += c, se = K + k + B, Le(Ho(a), e)) {
                                    W && W.call(i, v, h, u, e, oe.indexOf(u), y, b);
                                    var g = X && X.hoverIndex === u,
                                        f = Y && -1 !== Y.indexOf(u);
                                    f && R ? (v.fillStyle = R, v.fillRect(K, d, $, c)) : !f && g && T && (v.fillStyle = T, v.fillRect(K, d, $, c));
                                    for (var t = function(e) {
                                            var a = ie[e],
                                                t = ae[e],
                                                o = a.drawCell,
                                                r = ne[e] - 2 * _,
                                                n = a.bodyColor || a.color || m;
                                            if (f && L && (n = L), !f && g && S && (n = S), "function" == typeof n && (n = n(h[a.key], h)), !Le({
                                                    x: se += _,
                                                    y: d,
                                                    width: r,
                                                    height: c
                                                }, p)) return se += r + C + _, "continue";
                                            var l = h[a.key];
                                            a.format && (l = a.format(l, h, u, t)), v.save(), v.beginPath(), v.rect(se, d, r, c), v.clip();
                                            var i = function() {
                                                var e = a.isIcon;
                                                if (a.isIndex && (e = !1, l = s + 1), e) 0 < r && Te(v, Se(l), "centerUniform", se, d + 1, r, c - 2, y, b);
                                                else {
                                                    if (Yo(l)) return;
                                                    var t = "string" == typeof l ? l.match(Pe) : null;
                                                    if (t && t.length) {
                                                        var o = l.split(Pe),
                                                            i = d;
                                                        "middle" === a.vAlign ? i = d + (c - o.length * x) / 2 : "bottom" === a.vAlign && (i = d + (c - o.length * x)), o.forEach(function(e) {
                                                            De(v, e, w, n, se, i, r, x, a.align || "left", a.vAlign || "middle"), i += x
                                                        })
                                                    } else De(v, l, w, n, se, d, r, c, a.align || "left", a.vAlign || "middle")
                                                }
                                            };
                                            o ? o(v, l, {
                                                x: se,
                                                y: d,
                                                width: r,
                                                height: c
                                            }, {
                                                column: a,
                                                colIndex: t,
                                                row: h,
                                                rowIndex: u,
                                                font: w,
                                                color: n,
                                                defaultDraw: i,
                                                data: y
                                            }) : i(), se += r + C + _, v.restore()
                                        }, o = 0; o < re; o++) t(o)
                                }
                            })), X && (X.rowHeights = he, X.colWidths = ne, X.headHeight = D ? r : 0, X.rowLineWidth = V, X.columnLineWidth = C, X.translateX = B, X.translateY = P, X.autoHideScrollBar = A, X.multiple = F, X.selectedIndex = Y, X.dataSource = e, X.columns = s, X.onSelectRow = N, X.onHoverCell = G, X.onClickCell = U, X.rawDatas = te, X.rawIndexs = oe, X.rawCols = ie, X.rawColIndexs = ae, X.pannable = i.getValue("pannable"), X.scrollBarInteractiveSize = i.getValue("scrollBarInteractiveSize"), X.scrollSpeed = i.getValue("scrollSpeed")), V) {
                            var ve = Z + k + r * D + P;
                            v.beginPath(), I && D && (ve += V / 2, v.moveTo(K, ve), v.lineTo(K + $, ve), ve += V / 2);
                            for (var pe = 0; pe < le && !(Z + q < (ve += he[pe] + V / 2)); pe++) ve < Z || (v.moveTo(K, ve), v.lineTo(K + $, ve)), ve += V / 2;
                            v.strokeStyle = g, v.lineWidth = V, f && 1 < f.length && v.setLineDash(f), v.stroke()
                        }
                        if (v.restore(), C) {
                            var ye = K + k + B;
                            v.beginPath();
                            for (var be = 0; be < re - 1; be++) ye += ne[be] + C / 2, v.moveTo(ye, Z), v.lineTo(ye, Z + q), ye += C / 2;
                            v.strokeStyle = c, v.lineWidth = C, d && 1 < d.length && v.setLineDash(d), v.stroke()
                        }
                        if (y && X && E) {
                            var xe = C ? C * (re - 1) : 0,
                                me = V ? (le - 1) * V : 0;
                            ne.forEach(function(e) {
                                xe += e
                            }), he.forEach(function(e) {
                                me += e
                            });
                            var we = {
                                    x: K + k,
                                    y: Z + k + (D ? r : 0),
                                    width: J,
                                    height: Q - (D ? r : 0)
                                },
                                ke = {
                                    width: xe,
                                    height: me
                                },
                                Ce = {
                                    x: B,
                                    y: P
                                },
                                Ve = b.getZoom ? b.getZoom() : 1;
                            _e(v, we, ke, Ce, {
                                visible: !A || X.scrollBarVisible,
                                color: M,
                                barWidth: H ? O / Ve : O,
                                gap: 2 / Ve
                            }, X)
                        }
                    }
                    k && Re(v, h, K, Z, $, q, k)
                },
                pie: function(V, e, t, o, i) {
                    var a = t.getValue("dataSource"),
                        r = t.getValue("radius"),
                        n = t.getValue("center"),
                        I = Math.PI / 180 * t.getValue("startAngle"),
                        l = t.getValue("label"),
                        h = t.getValue("labelLine"),
                        s = t.getValue("tooltip"),
                        _ = t.getValue("roseType"),
                        u = t.getValue("seriesName"),
                        D = t.getValue("hoverOffset"),
                        c = t.getValue("avoidLabelOverlap"),
                        d = e.x,
                        g = e.y,
                        f = e.width,
                        v = e.height,
                        p = Math.min(f, v),
                        y = 0,
                        b = 0,
                        x = -I,
                        m = we(r, 2),
                        w = m[0],
                        T = void 0 === w ? 0 : w,
                        k = m[1],
                        S = void 0 === k ? .25 : k,
                        C = we(n, 2),
                        R = C[0],
                        L = void 0 === R ? .5 : R,
                        P = C[1],
                        B = void 0 === P ? .5 : P;
                    0 <= T && T <= 1 && (T *= p), 0 <= S && S <= 1 && (S *= p), L = 0 <= L && L <= 1 ? L * f + d : L + d, B = 0 <= B && B <= 1 ? B * v + g : B + g;
                    var E = a.map(function() {
                            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).value || 0
                        }),
                        A = E.reduce(function(e, t) {
                            return e + t
                        }, 0),
                        M = E.map(function(e) {
                            return e / A
                        }),
                        O = Math.max.apply(Math, Ie(E)),
                        H = S - T,
                        W = E.map(function(e) {
                            return e / O * H
                        }),
                        F = No(i, o, t),
                        N = [],
                        G = void 0,
                        U = [],
                        Y = [],
                        j = [],
                        z = [],
                        X = void 0;
                    if (F) {
                        0 < a.length && (G = new po(l, h), a.forEach(function(e, t) {
                            if (e) {
                                var o = M[t],
                                    i = W[t],
                                    a = o * Math.PI * 2,
                                    r = x + a / 2;
                                y += a, N.push(new yo({
                                    percent: o,
                                    roseRadius: i,
                                    lineAngle: r,
                                    arcAngle: a,
                                    arcEndAngle: y,
                                    arcStartAngle: b,
                                    seriesName: u,
                                    index: t,
                                    data: e,
                                    centerX: L,
                                    centerY: B,
                                    outerRadius: S,
                                    innerRadius: T,
                                    roseType: _,
                                    hoverOffset: D
                                }, G)), x += a, b = y
                            }
                        }), x = -I, y = b = I), X = F.foucusArcNum;
                        for (var K = 0, Z = N.length; K < Z; K++) {
                            var $ = N[K].arcAngle;
                            U.push({
                                x: L + S * Math.cos(x),
                                y: B + S * Math.sin(x)
                            }), Y.push($), x += $, K === Z - 1 && (x = -I)
                        }! function(e, t, o) {
                            for (var i = 0, a = e.length; i < a; i++) {
                                var r = e[i],
                                    n = o === i,
                                    l = r.getLabelLinePoints(n),
                                    h = l.x0,
                                    s = l.y0,
                                    u = l.x1,
                                    c = l.y1,
                                    d = r.getLabelLineLabelInfo(n),
                                    g = d.labelTextArray,
                                    f = d.textHeight,
                                    v = d.beginHeight;
                                t.push({
                                    x0: h,
                                    y0: s,
                                    x1: u,
                                    y1: c,
                                    labelTextArray: g,
                                    labelLineIsShow: n ? r.labelLineEmphasis.show : r.labelLineNormal.show,
                                    lineLength2: n ? r.labelLineEmphasis.length2 : r.labelLineNormal.length2,
                                    oneTextHeight: f,
                                    allTextHeight: 2 * v
                                })
                            }
                        }(N, j, X), c && function(e, c, t, d, g) {
                            for (var o = [], i = [], a = 0; a < e.length; a++) e[a].x0 < c ? o.push(e[a]) : i.push(e[a]);

                            function r(e, t) {
                                e.sort(function(e, t) {
                                    return e.y0 - t.y0
                                });
                                for (var o = (e = e.filter(function(e) {
                                        if (e.labelLineIsShow) return e
                                    }))[0].allTextHeight / 2, i = e[e.length - 1].allTextHeight / 2, a = g - o - i, r = e.length, n = 0, l = 0, h = e.length; l < h; l++)
                                    if (a < (n += e[l].allTextHeight)) {
                                        r = l;
                                        break
                                    }
                                var s = a / (r - 1);
                                s === 1 / 0 && (s = 0);
                                for (var u = 0; u < r; u++) e[u].avoidIsShow = !0, e[u].x1 = c + t * (d + 10), e[u].y1 = o + u * s
                            }
                            0 < o.length && r(o, -1), 0 < i.length && r(i, 1)
                        }(j, L, 0, S, v);
                        for (var q = 0, J = N.length; q < J; q++) {
                            var Q = N[q],
                                ee = (ue = X === q) ? Q.labelLineEmphasis : Q.labelLineNormal,
                                te = ee.show,
                                oe = ee.width,
                                ie = ee.type,
                                ae = ee.font,
                                re = ee.lineColor,
                                ne = ee.textColor;
                            if (!1 !== te) {
                                var le = function() {
                                    var e = j[q],
                                        t = e.x0,
                                        o = e.y0,
                                        i = e.x1,
                                        a = e.y1,
                                        r = e.oneTextHeight,
                                        n = e.allTextHeight,
                                        l = e.labelTextArray,
                                        h = e.lineLength2,
                                        s = e.avoidIsShow;
                                    if (c && !s) return {
                                        v: void 0
                                    };
                                    V.save(), V.lineWidth = oe, V.font = ae, V.strokeStyle = re, V.fillStyle = ne, V.setLineDash("dashed" === ie ? [2, 2] : []);
                                    var u = i <= t ? -1 : 1;
                                    V.textAlign = i <= t ? "right" : "left", V.textBaseline = "top", V.beginPath(), V.moveTo(t, o), c && V.lineTo(L + u * (S + 5), o), V.lineTo(i, a), i += u * h, V.lineTo(i, a), l.forEach(function(e, t) {
                                        V.fillText(e, i + 3 * u, a - n / 2 + r * t)
                                    }), V.stroke(), V.restore()
                                }();
                                if ("object" === (void 0 === le ? "undefined" : ve(le))) return le.v
                            }
                        }
                        V.save(), V.translate(L, B), V.rotate(-I), fe("fill"), fe("stroke"), V.restore(),
                            function(e, t) {
                                for (var o = 0, i = e.length; o < i; o++) {
                                    var a = e[o].getLabelPoints(),
                                        r = a.textX,
                                        n = a.textY;
                                    t.push({
                                        textX: r,
                                        textY: n
                                    })
                                }
                            }(N, z), V.save(), V.textAlign = "center", V.textBaseline = "top";
                        for (var he = 0, se = N.length; he < se; he++) {
                            Q = N[he];
                            var ue, ce = (ue = X === he) ? Q.labelEmphasis : Q.labelNormal,
                                de = (te = ce.show, ce.position),
                                ge = ce.color;
                            ae = ce.font, !1 !== te && function() {
                                V.save(), V.font = ae, V.fillStyle = ge;
                                var e = z[he],
                                    o = "center" === de ? L : e.textX,
                                    i = "center" === de ? B : e.textY,
                                    t = Q.getLabelInfo(ue),
                                    a = t.labelTextArray,
                                    r = t.textHeight,
                                    n = t.beginHeight;
                                a.forEach(function(e, t) {
                                    V.fillText(e, o, i - n + r * t)
                                }), V.restore()
                            }()
                        }
                        V.restore(), F && (F.arcPoints = U, F.arcAngles = Y, F.center = {
                            x: L,
                            y: B
                        }, F.radius = {
                            outerRadius: S,
                            innerRadius: T
                        }, F.hoverOffset = D, F.tooltip = s, F.pieItems = N)
                    }

                    function fe(e) {
                        for (var t = 0, o = N.length; t < o; t++) {
                            var i = N[t],
                                a = i.arcEndAngle,
                                r = i.arcStartAngle,
                                n = i.roseRadius,
                                l = i.itemStyle,
                                h = l.color,
                                s = l.borderWidth,
                                u = l.borderColor,
                                c = l.borderType,
                                d = void 0;
                            if ("stroke" === e && 0 < s || "fill" === e) {
                                if (V.save(), V.beginPath(), V.moveTo(T * Math.cos(r), T * Math.sin(r)), X === t ? (d = _ ? n + D + T : S + D, V.arc(0, 0, d, r, a, !1), V.arc(0, 0, T, a, r, !0), "fill" === e && (V.globalAlpha = .9, V.shadowBlur = 10, V.shadowColor = "rgba(0, 0, 0, 0.5)")) : (d = _ ? n + T : S, V.arc(0, 0, d, r, a, !1), V.arc(0, 0, T, a, r, !0)), V.closePath(), "fill" === e) {
                                    if ("string" == typeof h) V.fillStyle = h;
                                    else if ("object" === (void 0 === h ? "undefined" : ve(h))) {
                                        var g = h.type,
                                            f = h.colorStops,
                                            v = null;
                                        if ("radial" === g) v = V.createRadialGradient(0, 0, T, 0, 0, d);
                                        else if ("linear" === g) {
                                            var p = fo(i, I),
                                                y = p.minY,
                                                b = p.maxY;
                                            v = V.createLinearGradient(0, y, 0, b)
                                        }
                                        if (v && f instanceof Array) {
                                            for (var x = 0, m = f.length; x < m; x++) {
                                                var w = f[x],
                                                    k = w.offset,
                                                    C = w.color;
                                                void 0 !== k && void 0 !== C && v.addColorStop(k, C)
                                            }
                                            V.fillStyle = v
                                        }
                                    }
                                    V.fill()
                                } else "stroke" === e && (V.strokeStyle = u, V.lineWidth = s, V.setLineDash("dashed" === c ? [2, 2] : []), V.stroke());
                                V.globalAlpha = 1, V.restore()
                            }
                        }
                    }
                },
                ruler: function(u, e, t, o, i) {
                    t.getValue("value");
                    var c = t.getValue("max"),
                        d = t.getValue("min"),
                        a = t.getValue("labelEvery"),
                        r = t.getValue("labelFont"),
                        n = t.getColor("labelColor"),
                        l = t.getValue("labelAlign"),
                        h = t.getValue("labelDistance"),
                        s = t.getValue("labelOffsetX"),
                        g = t.getValue("labelOffsetY"),
                        f = t.getValue("direction"),
                        v = t.getValue("paddingBefore"),
                        p = t.getValue("paddingAfter"),
                        y = t.getColor("background"),
                        b = t.getValue("smallTickEvery"),
                        x = t.getColor("smallTickColor"),
                        m = t.getValue("smallTickWidth"),
                        w = t.getValue("smallTickLongness"),
                        k = t.getValue("mediumTickEvery"),
                        C = t.getColor("mediumTickColor"),
                        V = t.getValue("mediumTickWidth"),
                        I = t.getValue("mediumTickLongness"),
                        _ = t.getValue("largeTickEvery"),
                        D = t.getColor("largeTickColor"),
                        T = t.getValue("largeTickWidth"),
                        S = t.getValue("largeTickLongness"),
                        R = t.getValue("reverse"),
                        L = e.x,
                        P = e.y,
                        B = e.width,
                        E = e.height;
                    y && (u.fillStyle = y, u.fillRect(L, P, B, E));
                    var A = c - d,
                        M = E;
                    f !== se && f !== he || (M = B);
                    var O = [{
                        every: b,
                        color: x,
                        longness: w,
                        width: m
                    }, {
                        every: k,
                        color: C,
                        longness: I,
                        width: V
                    }, {
                        every: _,
                        color: D,
                        longness: S,
                        width: T
                    }];
                    if (R) {
                        if (O.forEach(function(e) {
                                if (e.every) {
                                    var t = Ce(e.longness, M);
                                    if (u.beginPath(), u.strokeStyle = e.color, u.lineWidth = e.width, f === ne || f === le) {
                                        var o = L + B - v,
                                            i = (B - v - p) * (e.every / A),
                                            a = f === ne ? P : P + E;
                                        f === le && (t = 0 - t);
                                        for (var r = d; r <= c; r += e.every) u.moveTo(o, a), u.lineTo(o, a + t), o -= i
                                    } else {
                                        var n = P + E - v,
                                            l = (E - v - p) * (e.every / A),
                                            h = f === se ? L : L + B;
                                        f === he && (t = 0 - t);
                                        for (var s = d; s <= c; s += e.every) u.moveTo(h, n), u.lineTo(h + t, n), n -= l
                                    }
                                    u.stroke()
                                }
                            }), a) {
                            var H = Ce(h, M);
                            if (u.fillStyle = n, u.font = r, f === ne || f === le) {
                                var W = L + B - v + s,
                                    F = a / A * (B - v - p),
                                    N = (f === ne ? P : P + E) + g;
                                f === le ? H = 0 - H - ko(r, "1").height : u.textBaseline = "hanging";
                                for (var G = d; G <= c; G += a) {
                                    var U = ko(r, G);
                                    l === ue ? me(u, G, r, n, W - .5 * U.width, N + H, U.width, U.height, l, "middle") : l === he ? u.fillText(G, W - ko(r, G).width + 2, N + H) : l === se && u.fillText(G, W, N + H), W -= F
                                }
                            } else {
                                var Y = P + E - v + g,
                                    j = a / A * (E - v - p),
                                    z = (f === se ? L : L + B) + s;
                                u.textBaseline = "middle", f === he && (H = 0 - H);
                                for (var X = d; X <= c; X += a) {
                                    var K = X + "";
                                    f === he ? u.fillText(K, z + H - ko(r, K).width + 2, Y) : u.fillText(K, z + H, Y), Y -= j
                                }
                            }
                        }
                    } else if (O.forEach(function(e) {
                            if (e.every) {
                                var t = Ce(e.longness, M);
                                if (u.beginPath(), u.strokeStyle = e.color, u.lineWidth = e.width, f === ne || f === le) {
                                    var o = L + v,
                                        i = (B - v - p) * (e.every / A),
                                        a = f === ne ? P : P + E;
                                    f === le && (t = 0 - t);
                                    for (var r = d; r <= c; r += e.every) u.moveTo(o, a), u.lineTo(o, a + t), o += i
                                } else {
                                    var n = P + v,
                                        l = (E - v - p) * (e.every / A),
                                        h = f === se ? L : L + B;
                                    f === he && (t = 0 - t);
                                    for (var s = d; s <= c; s += e.every) u.moveTo(h, n), u.lineTo(h + t, n), n += l
                                }
                                u.stroke()
                            }
                        }), a) {
                        var Z = Ce(h, M);
                        if (u.fillStyle = n, u.font = r, f === ne || f === le) {
                            var $ = L + v + s,
                                q = a / A * (B - v - p),
                                J = (f === ne ? P : P + E) + g;
                            f === le ? Z = 0 - Z - ko(r, "1").height : u.textBaseline = "hanging";
                            for (var Q = d; Q <= c; Q += a) {
                                var ee = ko(r, Q);
                                l === ue ? me(u, Q, r, n, $ - .5 * ee.width, J + Z, ee.width, ee.height, l, "middle") : l === he ? u.fillText(Q, $ - ko(r, Q).width + 2, J + Z) : l === se && u.fillText(Q, $, J + Z), $ += q
                            }
                        } else {
                            var te = P + v + g,
                                oe = a / A * (E - v - p),
                                ie = (f === se ? L : L + B) + s;
                            u.textBaseline = "middle", f === he && (Z = 0 - Z);
                            for (var ae = d; ae <= c; ae += a) {
                                var re = ae + "";
                                f === he ? u.fillText(re, ie + Z - ko(r, re).width + 2, te) : u.fillText(re, ie + Z, te), te += oe
                            }
                        }
                    }
                },
                multilineText: function(o, e, t, i, a) {
                    var r = t.getValue("content"),
                        n = t.getValue("font"),
                        l = t.getValue("textAlign"),
                        h = t.getValue("color"),
                        s = t.getValue("lineHeight"),
                        u = t.getColor("background"),
                        c = t.getValue("padding"),
                        d = t.getColor("borderColor"),
                        g = t.getValue("borderWidth"),
                        f = t.getValue("borderRadius"),
                        v = t.getValue("dash"),
                        p = t.getValue("dashPattern"),
                        y = e.x,
                        b = e.y,
                        x = e.width,
                        m = e.height,
                        w = Co(c),
                        k = we(w, 4),
                        C = k[0],
                        V = k[1],
                        I = k[2],
                        _ = k[3],
                        D = Co(f),
                        T = we(D, 4),
                        S = T[0],
                        R = T[1],
                        L = T[2],
                        P = T[3];
                    o.beginPath(), ht.Default.drawRoundRect(o, y, b, x, m, S, R, P, L), o.closePath(), ti(o, {
                        borderWidth: g,
                        borderColor: d,
                        dash: v,
                        dashPattern: p,
                        background: u
                    });
                    var B = _,
                        E = C,
                        A = 0,
                        M = x - _ - V,
                        O = r.split(/\n/),
                        H = O.length * s + C + I,
                        W = _ + C;
                    O.forEach(function(e) {
                        var t = ko(n, e);
                        A = Math.max(A, t.width), F(o, e, n, h, B, E, M, s, l, "middle"), E += s
                    }), W += A, i && i.constructor === ht.Node && (i.getWidth() === W && i.getHeight() === H || (i.setSize(W, H), i.setSize3d(W, 100, H)))
                },
                slider: function(e, t, o, i, a) {
                    var r = o.getValue("min"),
                        n = o.getValue("max"),
                        l = o.getValue("value"),
                        h = o.getValue("step"),
                        s = o.getValue("sliderImage"),
                        u = o.getValue("sliderBorderWidth"),
                        c = o.getValue("sliderBorderRadius"),
                        d = o.getColor("sliderBorderColor"),
                        g = o.getColor("sliderBackground"),
                        f = o.getValue("sliderWidth"),
                        v = o.getValue("sliderHeight"),
                        p = o.getValue("sliderOffsetX"),
                        y = o.getValue("sliderOffsetY"),
                        b = o.getColor("barBackground"),
                        x = o.getColor("barValueBackground"),
                        m = o.getValue("barGradient"),
                        w = o.getColor("barGradientColor"),
                        k = o.getValue("barWidth"),
                        C = o.getValue("barBorderRadius"),
                        V = o.getValue("padding"),
                        I = o.getValue("disabled"),
                        _ = o.getColor("disabledLayerColor"),
                        D = o.getColor("showToolTip"),
                        T = o.getColor("toolTipFormat"),
                        S = No(a, i, o);
                    l = Math.min(n, Math.max(r, l));
                    var R = t.x,
                        L = t.y,
                        P = t.width,
                        B = t.height,
                        E = Math.abs(n - r),
                        A = {
                            x: R + V,
                            y: L + (B - k) / 2,
                            width: P - 2 * V,
                            height: k
                        };
                    C < 1 && (C *= k), oi(e, A, b, C);
                    var M = ht.Default.clone(A);
                    M.width *= (l - r) / E, m && (x = ht.Default.createGradient(e, m, x, w, A.x, A.y, A.width, A.height)), oi(e, M, x, C);
                    var O = M.x + M.width - f / 2 + p,
                        H = M.y + (k - v) / 2 + y;
                    s ? N(e, ht.Default.getImage(s), O, H, f, v) : (c < 1 && (c *= Math.min(f, v)), e.beginPath(), W(e, O, H, f, v, c), e.closePath(), e.fillStyle = g, e.fill(), u && (e.lineWidth = u, e.strokeStyle = d, e.stroke())), I && (e.fillStyle = _, e.fillRect(R, L, P, B)), S && (S.disabled = I, S.value = l, S.max = n, S.min = r, S.step = h, S.showToolTip = D, S.toolTipFormat = T, S.barRect = A, S.onChange = o.getValue("onChange"), S.sliderRect = {
                        x: O,
                        y: H,
                        width: f,
                        height: v
                    })
                },
                rangeSlider: function(e, t, o, i, a) {
                    var r = o.getValue("min"),
                        n = o.getValue("max"),
                        l = o.getValue("value"),
                        h = o.getValue("step"),
                        s = o.getValue("sliderImage"),
                        u = o.getValue("sliderBorderWidth"),
                        c = o.getValue("sliderBorderRadius"),
                        d = o.getColor("sliderBorderColor"),
                        g = o.getColor("sliderBackground"),
                        f = o.getValue("sliderWidth"),
                        v = o.getValue("sliderHeight"),
                        p = o.getValue("sliderOffsetX"),
                        y = o.getValue("sliderOffsetY"),
                        b = o.getColor("barBackground"),
                        x = o.getColor("barValueBackground"),
                        m = o.getValue("barGradient"),
                        w = o.getColor("barGradientColor"),
                        k = o.getValue("barWidth"),
                        C = o.getValue("barBorderRadius"),
                        V = o.getValue("padding"),
                        I = o.getValue("disabled"),
                        _ = o.getColor("disabledLayerColor"),
                        D = o.getColor("showToolTip"),
                        T = o.getColor("toolTipFormat"),
                        S = No(a, i, o),
                        R = t.x,
                        L = t.y,
                        P = t.width,
                        B = t.height,
                        E = we(l, 2),
                        A = E[0],
                        M = E[1];
                    A = Math.max(r, A), M = Math.min(n, M);
                    var O = Math.abs(n - r),
                        H = {
                            x: R + V,
                            y: L + (B - k) / 2,
                            width: P - 2 * V,
                            height: k
                        };
                    C < 1 && (C *= k), oi(e, H, b, C);
                    var W = ht.Default.clone(H);
                    W.width *= (M - A) / O, W.x += (A - r) / O * H.width, m && (x = ht.Default.createGradient(e, m, x, w, H.x, H.y, H.width, H.height)), oi(e, W, x, C);
                    var F = W.x - f / 2 + p,
                        N = W.x + W.width - f / 2 + p,
                        G = W.y + (k - v) / 2 + y;
                    s ? (Be(e, ht.Default.getImage(s), F, G, f, v), Be(e, ht.Default.getImage(s), N, G, f, v)) : (c < 1 && (c *= Math.min(f, v)), e.beginPath(), Ve(e, F, G, f, v, c), e.closePath(), e.fillStyle = g, e.fill(), u && (e.lineWidth = u, e.strokeStyle = d, e.stroke()), e.beginPath(), Ve(e, N, G, f, v, c), e.closePath(), e.fillStyle = g, e.fill(), u && (e.lineWidth = u, e.strokeStyle = d, e.stroke())), I && (e.fillStyle = _, e.fillRect(R, L, P, B)), S && (S.disabled = I, S.value = l, S.max = n, S.min = r, S.step = h, S.valueBarDraggable = o.getValue("valueBarDraggable"), S.onChange = o.getValue("onChange"), S.showToolTip = D, S.toolTipFormat = T, S.barRect = H, S.valueBarRect = W, S.sliderRect = {
                        x: F,
                        y: G,
                        width: f,
                        height: v
                    }, S.sliderRect2 = {
                        x: N,
                        y: G,
                        width: f,
                        height: v
                    })
                },
                multipleComboBox: function(r, e, t, o, i) {
                    var a = t.getValue("value"),
                        n = t.getValue("dataSource"),
                        l = t.getValue("placeholder"),
                        h = t.getValue("disabled"),
                        s = t.getValue("borderWidth"),
                        u = t.getColor("borderColor"),
                        c = t.getColor("focusBorderColor"),
                        d = t.getValue("borderRadius"),
                        g = t.getColor("background"),
                        f = t.getColor("focusBackground") || g,
                        v = t.getColor("disabledLayerColor"),
                        p = t.getValue("itemFont"),
                        y = t.getColor("itemTextColor"),
                        b = t.getColor("itemBorderWidth"),
                        x = t.getColor("itemBorderColor"),
                        m = t.getColor("itemBorderRadius"),
                        w = t.getColor("itemBackground"),
                        k = t.getColor("itemGradient"),
                        C = t.getColor("itemGradientColor"),
                        V = t.getValue("itemPadding"),
                        I = t.getValue("itemHGap"),
                        _ = t.getValue("itemVGap"),
                        D = t.getValue("closeIconOnLeft"),
                        T = t.getValue("closeIconSize"),
                        S = t.getColor("closeIconColor"),
                        R = t.getValue("padding"),
                        L = No(i, o, t),
                        P = L && L.editing,
                        B = e.x,
                        E = e.y,
                        A = e.width,
                        M = e.height,
                        O = Co(R),
                        H = we(O, 4),
                        W = H[0],
                        F = H[1],
                        N = H[2],
                        G = H[3],
                        U = Co(d),
                        Y = we(U, 4),
                        j = Y[0],
                        z = Y[1],
                        X = Y[2],
                        K = Y[3],
                        Z = void 0;
                    o && P ? (Z = f, u = c) : Z = g, r.beginPath(), ht.Default.drawRoundRect(r, B, E, A, M, j, z, K, X), r.closePath(), Z && (r.fillStyle = Z, r.fill()), (s && u || P && s && c) && (r.strokeStyle = P ? c : u, r.lineWidth = s, r.stroke());
                    var $ = [];
                    a && n && a.forEach(function(e) {
                        for (var t = 0; t < n.length; t++)
                            if (e === n[t].value) {
                                $.push(n[t]);
                                break
                            }
                    });
                    var q = [],
                        J = Co(V),
                        Q = we(J, 4),
                        ee = Q[0],
                        te = Q[1],
                        oe = Q[2],
                        ie = Q[3],
                        ae = [B + G - b / 2, E + W - b / 2, A - G - F + b, M - W - N + b + 1];
                    r.save(), r.beginPath(), r.rect.apply(r, ae), r.clip();
                    var re = 1,
                        ne = void 0;
                    if (0 < $.length) {
                        var le = [B + G + b / 2, E + W + b / 2, A - G - F - b, M - W - N - b],
                            he = le[0],
                            se = le[1],
                            ue = 0,
                            ce = Co(m),
                            de = we(ce, 4),
                            ge = de[0],
                            fe = de[1],
                            ve = de[2],
                            pe = de[3],
                            ye = w;
                        $.forEach(function(e) {
                            var t = e.label || e.value,
                                o = ko(p, t);
                            ne || (ne = o.height), ue && he + o.width + I + b + 7 > le[0] + le[2] && (he = le[ue = 0], se += ne + _ + b + ee + oe, re++);
                            var i = [he, se, o.width + ie + te + T + 2, o.height + ee + oe];
                            b && (r.beginPath(), r.strokeStyle = x, Ee.apply(void 0, [r].concat(i, [ge, fe, pe, ve])), r.closePath(), w && (k && C && (ye = Me.apply(void 0, [r, k, w, C].concat(i))), r.fillStyle = ye, r.fill()), r.stroke());
                            var a = [i[0] + ie + o.width + 2, i[1] + ee, T, i[3] - oe - ee];
                            D && (a[0] = i[0] + ie, i[0] += T + 2), i[2] = i[2] - T - 2, q.push({
                                value: e.value,
                                rect: a
                            }), r.beginPath(), r.strokeStyle = S, r.lineCap = "round", r.moveTo(a[0], a[1] + (a[3] - T) / 2), r.lineTo(a[0] + a[2], a[1] + (a[3] - T) / 2 + T), r.moveTo(a[0] + a[2], a[1] + (a[3] - T) / 2), r.lineTo(a[0], a[1] + (a[3] - T) / 2 + T), r.stroke(), Ae.apply(void 0, [r, t, p, y].concat(i, ["center", "middle"])), he += o.width + I + b + ie + te + T + 2, ue++
                        })
                    } else if (l) {
                        var be = ko(p, l),
                            xe = [B + G, E + W, A - G - F, be.height + ee + oe];
                        Ae.apply(void 0, [r, l, p, ke.placeholderColor].concat(xe, ["left", "middle"])), ne = be.height
                    }
                    if (r.restore(), h) {
                        var me = [B - s / 2, E - s / 2, A + s, M + s];
                        r.save(), r.beginPath(), Ee.apply(void 0, [r].concat(me, [j, z, K, X])), r.clip(), r.fillStyle = v, r.fill(), r.restore()
                    }
                    o && (o.__suggestHeight = W + N + (ee + oe + ne) * re + _ * (re - 1)), L && (L.value = a, L.valueItemInfo = q, L.disabled = h, L.dataSource = n, L.dropIconWidth = t.getValue("dropIconWidth"), L.dropIconHeight = t.getValue("dropIconHeight"), L.dropRowHeight = t.getValue("dropRowHeight"), L.dropWidth = t.getValue("dropWidth"), L.dropBackground = t.getValue("dropBackground"), L.dropLabelFont = t.getValue("dropLabelFont"), L.dropLabelColor = t.getValue("dropLabelColor"), L.dropActiveLabelColor = t.getValue("dropActiveLabelColor"), L.dropActiveBackground = t.getValue("dropActiveBackground"), L.dropHoverBackground = t.getValue("dropHoverBackground"), L.dropMaxHeight = t.getValue("dropMaxHeight"), L.onChange = t.getValue("onChange"), L.hideSelected = t.getValue("hideSelected"), L.maxSelection = t.getValue("maxSelection"))
                },
                richTextPane: function(h, e, t, s, u) {
                    var o = t.getValue("content"),
                        i = t.getColor("background"),
                        a = t.getValue("bgGradient"),
                        r = t.getColor("bgGradientColor"),
                        n = t.getValue("showArrow"),
                        c = t.getValue("arrowOrientation"),
                        l = t.getValue("arrowPosition"),
                        d = t.getValue("padding"),
                        g = t.getValue("vGap"),
                        f = t.getValue("hGap"),
                        v = t.getValue("font"),
                        p = t.getValue("color"),
                        y = t.getColor("borderColor"),
                        b = t.getValue("borderWidth") || 0,
                        x = t.getValue("dash"),
                        m = t.getValue("dashPattern"),
                        w = t.getValue("vAlign"),
                        k = Co(d),
                        C = we(k, 4),
                        V = C[0],
                        I = (C[1], C[2], C[3]),
                        _ = e.x + b / 2,
                        D = e.y + b / 2,
                        T = e.width - b,
                        S = e.height - b,
                        R = [_, D, T, S];
                    if (h.save(), n)
                        if (h.beginPath(), le === c) {
                            var L = T - 10;
                            h.moveTo(_, D), h.lineTo(_ + T, D), h.lineTo(_ + T, D + S - 10), h.lineTo(_ + L * l + 10, D + S - 10), h.lineTo(_ + L * l + 5, D + S), h.lineTo(_ + L * l, D + S - 10), h.lineTo(_, D + S - 10), h.closePath(), R = [_, D, T, S - 10]
                        } else if (se === c) {
                        var P = S - 10;
                        h.moveTo(_ + 10, D), h.lineTo(_ + T, D), h.lineTo(_ + T, D + S), h.lineTo(_ + 10, D + S), h.lineTo(_ + 10, D + P * l + 10), h.lineTo(_, D + P * l + 5), h.lineTo(_ + 10, D + P * l), h.closePath(), R = [_ + 10, D, T - 10, S]
                    } else if (he === c) {
                        var B = S - 10;
                        h.moveTo(_, D), h.lineTo(_ + T - 10, D), h.lineTo(_ + T - 10, D + B * l), h.lineTo(_ + T, D + B * l + 5), h.lineTo(_ + T - 10, D + B * l + 10), h.lineTo(_ + T - 10, D + S), h.lineTo(_, D + S), h.closePath(), R = [_, D, T - 10, S]
                    } else {
                        var E = T - 10;
                        h.moveTo(_ + E * l, D + 10), h.lineTo(_ + E * l + 5, D), h.lineTo(_ + E * l + 10, D + 10), h.lineTo(_ + T, D + 10), h.lineTo(_ + T, D + S), h.lineTo(_, D + S), h.lineTo(_, D + 10), h.closePath(), R = [_, D + 10, T, S - 10]
                    } else h.beginPath(), h.rect(_, D, T, S);
                    if (ti(h, {
                            borderWidth: b,
                            borderColor: y,
                            background: i,
                            bgGradient: a,
                            bgGradientColor: r,
                            contentRect: R,
                            dash: x,
                            dashPattern: m
                        }), i) {
                        var A;
                        a && (i = (A = ht.Default).createGradient.apply(A, [h, a, i, r].concat(Ie(R)))), h.fillStyle = i, h.fill()
                    }
                    if (y && b && (h.lineWidth = b, h.strokeStyle = y, h.stroke()), h.textAlign = "left", o) {
                        o.length;
                        var M = D + V + (c === ne ? 10 : 0);
                        o.forEach(function(e, t) {
                            var r = _ + I + (c === se ? 10 : 0),
                                n = 0,
                                l = (o.length, []);
                            e.forEach(function(e, t) {
                                var o = ei(e.text, s, u),
                                    i = ko(e.font || v, o);
                                n = Math.max(n, i.height), l[t] = i.width
                            }), e.forEach(function(e, t) {
                                var o = ei(e.text, s, u),
                                    i = ei(e.font, s, u) || v,
                                    a = ei(e.vAlign, s, u) || w;
                                h.fillStyle = ei(e.color, s, u) || p, h.font = i, "top" === (h.textBaseline = a) ? h.fillText(o, r, M) : "middle" === a ? h.fillText(o, r, M + n / 2) : h.fillText(o, r, M + n), r += l[t] + f
                            }), M += g + n
                        })
                    }
                    h.restore()
                },
                textBox: function(o, e, t, i, a) {
                    var r = t.getValue("content"),
                        n = t.getValue("autoScale"),
                        l = t.getValue("font"),
                        h = t.getValue("wordBreak"),
                        s = t.getValue("vAlign"),
                        u = t.getColor("color"),
                        c = t.getValue("lineHeight"),
                        d = t.getValue("textAlign"),
                        g = t.getValue("padding"),
                        f = t.getColor("background"),
                        v = t.getValue("fillContent"),
                        p = t.getColor("borderColor"),
                        y = t.getValue("borderWidth"),
                        b = t.getValue("borderRadius"),
                        x = t.getValue("dash"),
                        m = t.getValue("dashPattern"),
                        w = t.getValue("bgGradient"),
                        k = t.getColor("bgGradientColor"),
                        C = Co(g),
                        V = we(C, 4),
                        I = V[0],
                        _ = V[1],
                        D = V[2],
                        T = V[3],
                        S = Co(b),
                        R = we(S, 4),
                        L = R[0],
                        P = R[1],
                        B = R[2],
                        E = R[3];
                    if (o.beginPath(), ht.Default.drawRoundRect(o, e.x, e.y, e.width, e.height, L, P, E, B), o.closePath(), ti(o, {
                            borderWidth: y,
                            borderColor: p,
                            dash: x,
                            dashPattern: m,
                            background: f,
                            bgGradient: w,
                            bgGradientColor: k,
                            contentRect: [e.x, e.y, e.width, e.height]
                        }), r && i) {
                        o.save();
                        var A = e.x,
                            M = e.y,
                            O = A + T,
                            H = M + I,
                            W = parseInt(e.width) - T - _,
                            F = parseInt(e.height) - I - D,
                            N = So(r, l, W, h);
                        if (n && N.length * c > F) {
                            var G = W + "-" + F + l + c,
                                U = Ge[G];
                            U || (U = Ge[G] = {});
                            var Y = 0,
                                j = 0,
                                z = void 0,
                                X = void 0,
                                K = void 0,
                                Z = void 0,
                                $ = void 0,
                                q = void 0;
                            if (s = "top", U && U[r]) X = 1 / (z = U[r]), Z = z * c, q = parseInt(W * X), o.scale(z, z), N = So(r, l, q, h);
                            else {
                                for (; Y < 4;) {
                                    if (X = 1 / (z = Math.sqrt(F / ((N.length + j) * c))), Z = z * c, q = parseInt(W * X), $ && o.scale($, $), o.scale(z, z), (K = So(r, l, q, h)).length * Z > F) j += Math.ceil((K.length * Z - F) / Z + .5), $ = X;
                                    else {
                                        if (!(K.length * Z < F && Math.abs(F - K.length * Z) > 2 * Z)) {
                                            N = K;
                                            break
                                        }
                                        j -= Math.floor((F - K.length * Z) / Z), $ = X
                                    }
                                    4 == ++Y && (N = K)
                                }
                                U[r] = z
                            }
                            O = (A + T) * X, H = (M + I) * X, N.forEach(function(e, t) {
                                ht.Default.drawText(o, e, l, u, O, H, q, Z, d, s), H += c
                            })
                        } else if (v && (N.length + 1) * c < F) {
                            var J = W + "-" + F + l + c,
                                Q = Ge[J];
                            Q || (Q = Ge[J] = {});
                            var ee = 0,
                                te = void 0,
                                oe = void 0,
                                ie = void 0,
                                ae = void 0,
                                re = void 0,
                                ne = void 0;
                            if (s = "top", Q && Q[r]) oe = 1 / (te = Q[r]), ae = te * c, ne = parseInt(W * oe), o.scale(te, te), N = So(r, l, ne, h);
                            else {
                                for (var le = Math.sqrt(F / (N.length * c)); ee < 4;) {
                                    if (oe = 1 / (te = le), ae = te * c, ne = parseInt(W * oe), re && o.scale(re, re), o.scale(te, te), !((ie = So(r, l, ne, h)).length * ae > F || ie.length * ae < F && F - ie.length * ae > .8 * ae)) {
                                        N = ie;
                                        break
                                    }
                                    re = oe, le *= Math.sqrt(F / (ie.length * ae)), 4 == ++ee && (N = ie)
                                }
                                Q[r] = te
                            }
                            O = (A + T) * oe, H = (M + I) * oe, N.forEach(function(e, t) {
                                ht.Default.drawText(o, e, l, u, O, H, ne, ae, d, s), H += c
                            })
                        } else "middle" === s ? H += (F - N.length * c) / 2 : "bottom" === s && (H += F - N.length * c), N.forEach(function(e, t) {
                            ht.Default.drawText(o, e, l, u, O, H, W, c, d, s), H += c
                        });
                        o.restore()
                    }
                },
                textEllipsis: function(e, t, o, i, a) {
                    var r, n = o.getValue("content"),
                        l = o.getValue("font"),
                        h = o.getValue("vAlign"),
                        s = o.getColor("color"),
                        u = o.getValue("padding"),
                        c = o.getColor("background"),
                        d = o.getColor("borderColor"),
                        g = o.getValue("borderWidth"),
                        f = o.getValue("borderRadius"),
                        v = o.getValue("dash"),
                        p = o.getValue("dashPattern"),
                        y = o.getValue("bgGradient"),
                        b = o.getColor("bgGradientColor"),
                        x = Co(u),
                        m = we(x, 4),
                        w = m[0],
                        k = m[1],
                        C = m[2],
                        V = m[3],
                        I = Co(f),
                        _ = we(I, 4),
                        D = _[0],
                        T = _[1],
                        S = _[2],
                        R = _[3];
                    e.beginPath(), ht.Default.drawRoundRect(e, t.x, t.y, t.width, t.height, D, T, R, S), e.closePath(), ti(e, {
                        borderWidth: g,
                        borderColor: d,
                        dash: v,
                        dashPattern: p,
                        background: c,
                        bgGradient: y,
                        bgGradientColor: b,
                        contentRect: [t.x, t.y, t.width, t.height]
                    });
                    for (var L = [t.x + V, t.y + w, t.width - V - k, t.height - w - C], P = L[2], B = "", E = 0; E < n.length; E++) {
                        B += n[E];
                        var A = ko(l, B + "...").width;
                        if (A <= P && E == n.length - 1) {
                            n = B;
                            break
                        }
                        if (P < A) {
                            n = (B = B.slice(0, B.length - 1)) + "...";
                            break
                        }
                    }(r = ht.Default).drawText.apply(r, [e, n, l, s].concat(L, ["left", h]))
                },
                verticalTextBox: function(i, e, t, o, a) {
                    var r = t.getValue("content"),
                        n = t.getValue("font"),
                        l = t.getColor("color"),
                        h = t.getValue("padding"),
                        s = t.getValue("startOnRight"),
                        u = t.getColor("background"),
                        c = t.getColor("borderColor"),
                        d = t.getValue("borderWidth"),
                        g = t.getValue("borderRadius"),
                        f = t.getValue("dash"),
                        v = t.getValue("dashPattern"),
                        p = t.getValue("bgGradient"),
                        y = t.getColor("bgGradientColor"),
                        b = t.getValue("wordBreak"),
                        x = t.getValue("vGap"),
                        m = t.getValue("hGap"),
                        w = Co(h),
                        k = we(w, 4),
                        C = k[0],
                        V = k[1],
                        I = k[2],
                        _ = k[3],
                        D = Co(g),
                        T = we(D, 4),
                        S = T[0],
                        R = T[1],
                        L = T[2],
                        P = T[3];
                    if (i.beginPath(), ht.Default.drawRoundRect(i, e.x, e.y, e.width, e.height, S, R, P, L), i.closePath(), ti(i, {
                            borderWidth: d,
                            borderColor: c,
                            dash: f,
                            dashPattern: v,
                            background: u,
                            bgGradient: p,
                            bgGradientColor: y,
                            contentRect: [e.x, e.y, e.width, e.height]
                        }), r) {
                        var B, E, A, M, O, H = {
                                x: e.x + _,
                                y: e.y + C,
                                width: e.width - _ - V,
                                height: e.height - C - I
                            },
                            W = H.x,
                            F = H.y,
                            N = H.width,
                            G = (B = n, E = H.height, A = x, M = b, O = [], r.split("\n").forEach(function(e) {
                                if ("" === e && (e = K), M) Array.prototype.push.apply(O, Ue(e, E, B, A));
                                else {
                                    for (var t, o, i, a = "", r = void 0, n = void 0, l = "", h = 0; h < e.length; h++) e.charAt(h).match(/[a-z|A-Z]/g) ? a += "1" : a += "2";
                                    a = (a = a.replace(/21/g, "2_1")).replace(/12/g, "1_2");
                                    for (var s = 0; s < a.length; s++) a.charAt(s).match(/\_/g) && (e = Ro(e, s + 1, "|"));
                                    t = e.split("|"), o = a.split("_");
                                    for (var u = (i = ko(B, "图")).height / 3, c = 0, d = t.length; c < d; c++) r = l + t[c], u += i.height * t[c].length + A, "1" === o[c][0] ? E < u ? (l ? (O.push(l), l = "", c--) : (n = Ue(t[c], E, B, A), Array.prototype.push.apply(O, n.slice(0, n.length - 1)), l = n[n.length - 1]), u = i.height / 3) : u === E ? (O.push(r), l = "", u = i.height / 3) : l = r : E < u ? (n = Ue(r, E, B, A), Array.prototype.push.apply(O, n.slice(0, n.length - 1)), l = n[n.length - 1], u = i.height / 3) : l = r;
                                    l && O.push(l)
                                }
                            }), O),
                            U = ko(n, "图"),
                            Y = U.width,
                            j = U.height,
                            z = void 0,
                            X = void 0;
                        i.save(), i.fillStyle = l, i.textBaseline = "top", i.font = n, s ? (z = W + N - Y, X = F, G.forEach(function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var o = e[t];
                                i.fillText(o, z, X), X += x + j
                            }
                            X = F, z = z - Y - m
                        })) : (z = W, X = F, G.forEach(function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var o = e[t];
                                i.fillText(o, z, X), X += x + j
                            }
                            X = F, z += Y + m
                        })), i.restore()
                    }
                },
                tree: function(tt, ot, it, at, rt) {
                    var e = it.getValue("dataSource"),
                        nt = it.getValue("treeItemHeight"),
                        lt = it.getValue("indent"),
                        ht = it.getValue("tagsHeight"),
                        st = it.getValue("tagsSpace"),
                        ut = it.getValue("tagsRectRadius"),
                        ct = it.getValue("translateX"),
                        dt = it.getValue("translateY"),
                        gt = it.getValue("treeFont"),
                        ft = it.getValue("tagsFont"),
                        t = it.getValue("treeFontColor"),
                        vt = it.getValue("onhoverColor"),
                        pt = it.getValue("selectedColor"),
                        o = it.getValue("backColor"),
                        yt = it.getValue("borderColor"),
                        i = it.getValue("lineColor"),
                        a = it.getValue("scrollBarColor"),
                        bt = it.getValue("showLine"),
                        xt = it.getValue("showCheckbox"),
                        mt = it.getValue("showBorder"),
                        wt = it.getValue("showIcon"),
                        kt = it.getValue("showTags"),
                        r = it.getValue("showScrollBar"),
                        Ct = it.getValue("expandIconSize"),
                        Vt = it.getValue("iconSize"),
                        It = it.getValue("checkIconSize"),
                        _t = it.getValue("space"),
                        Dt = it.getValue("visibleFunc"),
                        Tt = Xt(it.getValue("openIcon") || "ht.vector.treeOpenIcon"),
                        St = Xt(it.getValue("closeIcon") || "ht.vector.treeCloseIcon"),
                        Rt = Xt(it.getValue("loadingIcon") || "ht.vector.treeLoadIcon"),
                        Lt = Xt(it.getValue("defaultIcon") || "ht.vector.treeDefIcon"),
                        Pt = Xt(it.getValue("checkIcon") || "ht.vector.treeCheckIcon"),
                        Bt = Xt(it.getValue("unCheckIcon") || "ht.vector.treeUnCheckIcon"),
                        Et = Xt(it.getValue("unCheckAllIcon") || "ht.vector.treeUnCheckAllIcon"),
                        At = ot.x,
                        Mt = ot.y,
                        Ot = ot.width,
                        n = ot.height,
                        Ht = 0,
                        Wt = 0,
                        Ft = Yt({
                            showCheckbox: xt,
                            showIcon: wt,
                            expandIconSize: Ct,
                            iconSize: Vt,
                            checkIconSize: It,
                            space: _t
                        }),
                        l = No(rt, at, it),
                        h = null;
                    if (l) {
                        var s = e.length;
                        if (l.rootTree && l.dataLength === s) h = l.rootTree;
                        else if (0 < s) {
                            h = new B(at);
                            for (var u = 0; u < s; u++) {
                                var c = e[u];
                                c && Oe(c, h)
                            }
                            l.rootTree = h, l.dataLength = s
                        }
                    }
                    if (h) {
                        tt.save(), tt.fillStyle = o, tt.beginPath(), tt.fillRect(At, Mt, Ot, n), tt.fill(), tt.restore(), tt.save(), tt.font = gt, tt.fillStyle = t, tt.strokeStyle = i, tt.setLineDash([1, 1]), tt.lineWidth = .5, tt.lineJoin = "miter", tt.textBaseline = "middle", tt.textAlign = "start", tt.beginPath(), tt.rect(At, Mt, Ot, n), tt.clip();
                        for (var Nt = null, Gt = {
                                expandIconRects: [],
                                treeBackRects: [],
                                checkIconRects: [],
                                tagRects: []
                            }, d = h.children, g = 0, f = d.length; g < f; g++) Ut(d[g]);
                        tt.restore();
                        var v = Ht + 8,
                            p = Wt;
                        if (Ot < Ht - 2 && (p = Wt + 8), l && (l.translateX = ct, l.translateY = dt, l.rectInfo = Gt, l.scrollBarInfo = {
                                x: At,
                                y: Mt,
                                width: Ot,
                                height: n,
                                boundWidth: v,
                                boundHeight: p
                            }, l.handleTagClick = it.getValue("handleTagClick"), l.handleCheck = it.getValue("handleCheck"), l.accordion = it.getValue("accordion"), l.handleExpand = it.getValue("handleExpand"), l.loadData = it.getValue("loadData"), l.handleSelect = it.getValue("handleSelect"), l.multiSelect = it.getValue("multiSelect"), l.handleBackClick = it.getValue("handleBackClick")), r) {
                            var y = {
                                    x: At,
                                    y: Mt,
                                    width: Ot,
                                    height: n
                                },
                                b = {
                                    width: v,
                                    height: p
                                },
                                x = {
                                    x: ct,
                                    y: dt
                                };
                            p < n && 0 !== dt && (b.height = n - dt), _e(tt, y, b, x, {
                                visible: !0,
                                color: a,
                                gap: 0,
                                barWidth: 8
                            }, l || {})
                        }
                    }

                    function Ut(e) {
                        if (Dt(e)) {
                            var t = e.text,
                                o = e.parent,
                                i = e._textInfo,
                                a = void 0 === i ? {} : i,
                                r = a.textWidth,
                                n = a.textHeight,
                                l = o._treeItemRect;
                            if (!r) {
                                var h = ko(gt, t);
                                r = h.width, n = h.height, e._textInfo = {
                                    textWidth: r,
                                    textHeight: n
                                }
                            }
                            e._treeItemRect = {
                                x: l ? l.x + lt : At + ct + lt,
                                y: Nt ? Nt._treeItemRect.y + nt : Mt + dt,
                                width: r + Ft,
                                height: nt
                            };
                            var s, u, c, d, g, f, v, p, y, b, x, m, w, k, C, V, I, _, D, T, S, R, L = e.text,
                                P = e.children,
                                B = e.expanded,
                                E = e.selected,
                                A = e.checked,
                                M = e.disabled,
                                O = e.isLeaf,
                                H = e.icon,
                                W = e.tags,
                                F = e._isShowUnCheckAllIcon,
                                N = e._isLoading,
                                G = e._isHovering,
                                U = e._treeItemRect,
                                Y = (s = U, u = ot, d = (c = {
                                    showCheckbox: xt,
                                    showIcon: wt,
                                    expandIconSize: Ct,
                                    iconSize: Vt,
                                    checkIconSize: It,
                                    space: _t
                                }).showCheckbox, g = c.showIcon, f = c.expandIconSize, v = c.iconSize, p = c.checkIconSize, y = c.space, b = Yt(c), x = s.x, m = s.y, w = s.width, k = s.height, V = {
                                    x: (C = {
                                        x: x,
                                        y: m + (k - f) / 2,
                                        width: f,
                                        height: f
                                    }).x + f + y,
                                    y: m + (k - p) / 2,
                                    width: p,
                                    height: p
                                }, I = {
                                    x: null,
                                    y: m + (k - v) / 2,
                                    width: v,
                                    height: v
                                }, _ = {
                                    x: null,
                                    y: m,
                                    width: w - b,
                                    height: k
                                }, D = {
                                    x: u.x,
                                    y: m,
                                    width: u.width,
                                    height: k
                                }, I.x = d ? V.x + p + y : C.x + f + y, _.x = g ? I.x + v + y : I.x, {
                                    expandIconRect: C,
                                    checkIconRect: V,
                                    iconRect: I,
                                    textRect: _,
                                    backRect: D
                                }),
                                j = Y.expandIconRect,
                                z = Y.checkIconRect,
                                X = Y.iconRect,
                                K = Y.textRect,
                                Z = Y.backRect;
                            if (e._elementRect = Y, Nt = e, Wt += nt, Ht = Math.max(Ht, K.x - ct + r), Kt(ot, Z) && E) {
                                var $ = Z.x,
                                    q = Z.y,
                                    J = Z.width,
                                    Q = Z.height;
                                tt.save(), tt.fillStyle = pt, tt.fillRect($, q, J, Q), tt.restore()
                            }
                            if (Kt(ot, U)) {
                                if (G) {
                                    var ee = Z.x,
                                        te = Z.y,
                                        oe = Z.width,
                                        ie = Z.height;
                                    tt.save(), tt.fillStyle = vt, tt.fillRect(ee, te, oe, ie), tt.restore()
                                }
                                if (E) {
                                    var ae = Z.x,
                                        re = Z.y,
                                        ne = Z.width,
                                        le = Z.height;
                                    tt.save(), tt.fillStyle = pt, tt.fillRect(ae, re, ne, le), tt.restore()
                                }
                                if (!O) {
                                    var he = j.x,
                                        se = j.y,
                                        ue = j.width,
                                        ce = j.height;
                                    zt(tt, N ? Rt : B ? St : Tt, "fill", he, se, ue, ce, at, rt), Gt.expandIconRects.push({
                                        treeItem: e,
                                        expandIconRect: j
                                    })
                                }
                                if (xt) {
                                    var de = z.x,
                                        ge = z.y,
                                        fe = z.width,
                                        ve = z.height;
                                    zt(tt, A ? Pt : F ? Et : Bt, "fill", de, ge, fe, ve, at, rt), Gt.checkIconRects.push({
                                        treeItem: e,
                                        checkIconRect: z
                                    }), A && 0 === P.length && (e.checkBefore(), e.checkAfter())
                                }
                                if (wt) {
                                    var pe = X.x,
                                        ye = X.y,
                                        be = X.width,
                                        xe = X.height,
                                        me = H ? Xt(H) : Lt;
                                    zt(tt, me, "fill", pe, ye, be, xe, at, rt)
                                }
                                if (mt) {
                                    var we = Z.x,
                                        ke = Z.y,
                                        Ce = Z.width,
                                        Ve = Z.height;
                                    tt.save(), tt.strokeStyle = yt, tt.setLineDash([]), tt.beginPath(), tt.strokeRect(we + .25, ke + .25, Ce - .5, Ve), tt.stroke(), tt.restore()
                                }
                                if (kt && 0 < W.length) {
                                    var Ie = Ot,
                                        _e = Z.y + (Z.height - ht) / 2;
                                    tt.save(), tt.font = ft, tt.textAlign = "center", tt.fillStyle = "#777777", tt.strokeStyle = "white", tt.lineWidth = 1, tt.setLineDash([]);
                                    for (var De = 0, Te = W.length; De < Te; De++) {
                                        var Se = W[De],
                                            Re = Se.text,
                                            Le = Se.textColor,
                                            Pe = Se.backColor,
                                            Be = ko(ft, Re).width;
                                        Ie -= (Be += 2 * ut) + st, Pe && (tt.fillStyle = Pe), tt.beginPath(), Zt(tt, Ie, _e, Be, ht, ut), tt.closePath(), tt.fill(), Le && (tt.strokeStyle = Le), tt.strokeText(Re, Ie + Be / 2, _e + ht / 2), tt.stroke(), Gt.tagRects.push({
                                            treeItem: e,
                                            info: Se,
                                            tagRect: {
                                                x: Ie,
                                                y: _e,
                                                width: Be,
                                                height: ht
                                            }
                                        })
                                    }
                                    tt.restore()
                                }
                                if (bt) {
                                    var Ee = (S = (T = it).getValue("showCheckbox"), R = T.getValue("showIcon"), S ? "checkIconRect" : R ? "iconRect" : "textRect"),
                                        Ae = jt(Y[Ee]).leftMiddle,
                                        Me = jt(j),
                                        Oe = Me.rightMiddle,
                                        He = Me.topMiddle,
                                        We = Me.middleMiddle;
                                    tt.beginPath(), O ? tt.moveTo(We.x, We.y) : tt.moveTo(Oe.x, Oe.y), tt.lineTo(Ae.x, Ae.y);
                                    var Fe = e.getPreVisibleSibling(Dt);
                                    if (Fe) {
                                        var Ne = Fe._elementRect,
                                            Ge = Fe.isLeaf,
                                            Ue = Ne.expandIconRect,
                                            Ye = jt(Ue),
                                            je = Ye.bottomMiddle,
                                            ze = Ye.middleMiddle;
                                        Ge ? tt.moveTo(ze.x, ze.y) : tt.moveTo(je.x, je.y), O ? tt.lineTo(We.x, We.y) : tt.lineTo(He.x, He.y)
                                    } else {
                                        var Xe = e.parent._elementRect;
                                        if (Xe) {
                                            var Ke = jt(Xe[Ee]).bottomMiddle;
                                            tt.moveTo(We.x, Ke.y), O ? tt.lineTo(We.x, We.y) : tt.lineTo(He.x, He.y)
                                        }
                                    }
                                    tt.stroke()
                                }
                                if (tt.fillText(L, K.x, K.y + nt / 2), M) {
                                    var Ze = Z.x,
                                        $e = Z.y,
                                        qe = Z.width,
                                        Je = Z.height;
                                    tt.save(), tt.fillStyle = "rgba(192, 192, 192, 0.5)", tt.fillRect(Ze, $e, qe, Je), tt.restore()
                                }
                                Gt.treeBackRects.push({
                                    treeItem: e,
                                    backRect: Z
                                })
                            }
                            if (B)
                                for (var Qe = 0, et = P.length; Qe < et; Qe++) Ut(P[Qe])
                        }
                    }
                },
                chart: function(i, e, t, o, a) {
                    var r = t.getValue("series"),
                        n = t.getValue("xAxis"),
                        l = t.getValue("yAxis"),
                        h = t.getValue("color"),
                        s = t.getColor("background"),
                        u = t.getValue("rectSelectable"),
                        c = t.getValue("rectSelectBorderColor"),
                        d = t.getValue("rectSelectBackground"),
                        g = {
                            show: t.getValue("tooltip.show"),
                            lineWidth: t.getValue("tooltip.line.width"),
                            lineColor: t.getValue("tooltip.line.color")
                        };
                    if (r && r.length) {
                        var f, v, p, y, b, x, m, D, T, w = {
                                color: h && h.length ? h : so,
                                xAxis: lo(n, io),
                                yAxis: lo(l, oo),
                                series: r,
                                tooltip: g,
                                rectSelectable: u,
                                rectSelectBorderColor: c,
                                rectSelectBackground: d
                            },
                            k = {
                                seriesDatas: r.map(function(e) {
                                    return e.data
                                }),
                                rect: e,
                                contentRect: co(e),
                                valueAxis: M,
                                interactiveInfo: []
                            };
                        if (f = k, v = [], w.xAxis.forEach(function(e, t) {
                                e.show || v.push(2);
                                var o = e.axisLabel.rotate,
                                    i = e.axisTick.show ? e.axisTick.length : 0;
                                if (o) {
                                    var a = e.data,
                                        r = K;
                                    o = Math.max(-45, o), o = Math.min(45, o), a && a.forEach(function(e) {
                                        e.toString().length > r.length && (r = e)
                                    });
                                    var n = ko(e.axisLabel.font, r),
                                        l = new ht.Math.Vector2(0, 0),
                                        h = new ht.Math.Vector2(n.width, 0),
                                        s = new ht.Math.Vector2(n.width, n.height),
                                        u = new ht.Math.Vector2(0, n.height),
                                        c = new ht.Math.Vector2(n.width / 2, n.height / 2),
                                        d = Math.PI * (o / 180);
                                    l.rotateAround(c, d), h.rotateAround(c, d), s.rotateAround(c, d), u.rotateAround(c, d);
                                    var g = ht.Default.unionPoint([l, h, s, u]);
                                    v.push(g.height + 4 + i)
                                } else {
                                    var f = ko(e.axisLabel.font, K);
                                    v.push(f.height + 4 + i)
                                }
                            }), f.xAxisHeights = v, ho(w, k), function(e, t) {
                                var o = t.xAxisHeights,
                                    i = t.yAxisWidths,
                                    a = t.contentRect,
                                    r = 0;
                                t.valueAxis === M && e.xAxis.forEach(function(e) {
                                    if (e.axisLabel.show && e.data) {
                                        var t = ko(e.axisLabel.font, e.data[0]);
                                        i[0] = Math.max(t.width / 2, i[0]), t = ko(e.axisLabel.font, e.data[e.data.length - 1]), r = Math.max(t.width / 2, r)
                                    }
                                }), a.width -= r;
                                var n, l = a.x,
                                    h = a.y,
                                    s = a.width,
                                    u = a.height,
                                    c = [],
                                    d = [],
                                    g = l,
                                    f = h,
                                    v = s,
                                    p = u,
                                    y = 0;
                                i.forEach(function(e) {
                                    v -= e
                                }), o.forEach(function(e) {
                                    p -= e, y += e
                                }), v = Math.max(0, v), p = Math.max(0, p), g = l, f = h + (1 < o.length ? y - o[0] : 0), i.forEach(function(e, t) {
                                    t ? c.push({
                                        x: g,
                                        y: f,
                                        width: e,
                                        height: p
                                    }) : (c.push({
                                        x: g,
                                        y: f,
                                        width: e,
                                        height: p
                                    }), g += e + v)
                                }), g = l + (0 < i.length ? i[0] : 0), f = h, o.forEach(function(e, t) {
                                    t ? (d.push({
                                        x: g,
                                        y: f,
                                        width: v,
                                        height: e
                                    }), f += e) : d.push({
                                        x: g,
                                        y: f + u - e,
                                        width: v,
                                        height: e
                                    })
                                }), n = {
                                    x: l + i[0] || 0,
                                    y: h + (1 < o.length ? y - o[0] : 0),
                                    width: v,
                                    height: p
                                }, t.bounds = {
                                    xAxisRects: d,
                                    yAxisRects: c,
                                    bodyRect: n
                                }
                            }(w, k), o) {
                            var C = No(a, o, t);
                            if (C) {
                                var V = C;
                                k.hoverIndex = V.hoverIndex, k._dragging = V._dragging, k.rectPoint1 = V.rectPoint1, k.rectPoint2 = V.rectPoint2, V._dragging && V.rectPoint1 && V.rectPoint2 && (k.selectRect = go(V.rectPoint1, V.rectPoint2))
                            }
                        }
                        if (s && (i.fillStyle = s, i.fillRect(e.x, e.y, e.width, e.height)), function(i, e) {
                                var a = 0,
                                    r = e.valueAxis,
                                    t = e.bounds,
                                    n = void 0,
                                    o = void 0;
                                o = r === M ? (n = i.xAxis, t.xAxisRects[0]) : (n = i.yAxis, t.yAxisRects[0]), n.forEach(function(e, t) {
                                    var o = 0;
                                    "time" !== n.type && e.data ? o = e.data.length : i.series.forEach(function(e) {
                                        ((r === M ? e.xAxisIndex : e.yAxisIndex) || 0) === t && (o = Math.max(o, series.data ? series.data.length : 0))
                                    }), a = Math.max(a, o)
                                });
                                var l = o,
                                    h = l.x,
                                    s = l.y,
                                    u = l.width,
                                    c = l.height,
                                    d = [],
                                    g = void 0,
                                    f = void 0;
                                if (r === A) {
                                    if (1 === a) return d.push(s + c / 2), d;
                                    g = 1 < a ? c / (a - 1) : 0, f = s
                                } else {
                                    if (1 === a) return d.push(h + u / 2), d;
                                    g = 1 < a ? u / (a - 1) : 0, f = h
                                }
                                for (var v = 0; v < a; v++) d.push(f), f += g;
                                return d
                            }(w, k).forEach(function(e) {
                                k.interactiveInfo.push({
                                    position: e,
                                    axis: []
                                })
                            }), p = i, y = w, x = (b = k).interactiveInfo.map(function(e) {
                                return e.position
                            }), m = 1, y.xAxis.forEach(function(e, o) {
                                var t = b.bounds.xAxisRects[o],
                                    i = t.x,
                                    a = t.y,
                                    r = t.width,
                                    n = t.height,
                                    l = e.data;
                                if (e.axisLine.show && (p.strokeStyle = e.axisLine.color, p.lineWidth = e.axisLine.width, p.beginPath(), o ? (p.moveTo(i, a + n), p.lineTo(i + r, a + n)) : (p.moveTo(i, a), p.lineTo(i + r, a)), p.stroke()), e.axisLabel.show || e.axisTick.show) {
                                    var h = e.axisLabel.font,
                                        s = e.axisLabel.color,
                                        u = e.axisLabel.align,
                                        c = e.axisTick.length,
                                        d = o ? a : a + 2 + (e.axisTick.show ? e.axisTick.length : 0),
                                        g = 0,
                                        f = [];
                                    l.forEach(function(e) {
                                        var t = ko(h, e);
                                        f.push(t), g += t.width
                                    }), g > t.width && !o && (m = Math.ceil(g / t.width)), e.axisTick.show && c && (p.strokeStyle = e.axisTick.color, p.beginPath(), x.forEach(function(e, t) {
                                        t % m == 0 && (o ? (p.moveTo(e, a + n), p.lineTo(e, a + n - c)) : (p.moveTo(e, a), p.lineTo(e, a + c)))
                                    }), p.stroke()), e.axisLabel.show && l.forEach(function(e, t) {
                                        if (t % m == 0) {
                                            var o = f[t];
                                            ht.Default.drawText(p, e.toString(), h, s, x[t] - o.width / 2, d, o.width, o.height, u)
                                        }
                                    })
                                }
                            }), D = i, T = k, w.yAxis.forEach(function(e, o) {
                                var t = T.bounds.yAxisRects[o],
                                    i = t.x,
                                    a = t.y,
                                    r = t.width,
                                    n = t.height;
                                if (e.axisLine.show && (D.strokeStyle = e.axisLine.color, D.lineWidth = e.axisLine.width, D.beginPath(), o ? (D.moveTo(i, a), D.lineTo(i, a + n)) : (D.moveTo(i + r, a), D.lineTo(i + r, a + n)), D.stroke()), e.axisLabel.show) {
                                    for (var l = e.valueRange, h = we(l, 3), s = h[0], u = h[1], c = h[2], d = u - s, g = [], f = 0; f <= u && s <= f;) g.push(f), f += c;
                                    if (u !== g[g.length - 1] && g.push(u), s < 0) {
                                        for (f = 0 - c; s <= f;) g.unshift(f), f += c;
                                        s !== g[0] && g.unshift(s)
                                    }
                                    var v = void 0;
                                    e.axisTick.show && (v = e.axisTick.length) && (D.strokeStyle = e.axisTick.color, D.beginPath(), g.forEach(function(e) {
                                        var t = a + n * (1 - (e - s) / d);
                                        o ? (D.moveTo(i, t), D.lineTo(i + v, t)) : (D.moveTo(i + r, t), D.lineTo(i + r - v, t))
                                    }), D.stroke());
                                    var p = r - 2 - (e.axisTick.show ? v : 0),
                                        y = e.axisLabel.font,
                                        b = e.axisLabel.color,
                                        x = "auto" === e.axisLabel.align ? o ? se : he : e.axisLabel.align,
                                        m = ko(y, K),
                                        w = i + (o ? v : 0);
                                    if (g.forEach(function(e) {
                                            var t = a + n * (1 - (e - s) / d) - m.height / 2;
                                            ht.Default.drawText(D, e.toString(), y, b, w, t, p, m.height, x)
                                        }), e.splitLine.show) {
                                        var k = T.bounds.bodyRect,
                                            C = k.x,
                                            V = k.y,
                                            I = k.width,
                                            _ = k.height;
                                        D.strokeStyle = e.splitLine.color, D.beginPath(), g.forEach(function(e, t) {
                                            if (0 !== t) {
                                                var o = V + _ * (1 - (e - s) / d);
                                                D.moveTo(C, o), D.lineTo(C + I, o)
                                            }
                                        }), D.stroke()
                                    }
                                }
                            }), r && r.length && (r.forEach(function(e, t) {
                                var o = (k.valueAxis === M ? e.yAxisIndex : e.xAxisIndex) || 0;
                                ! function(i, e, t, o, a) {
                                    var r = e.data,
                                        n = e.itemStyle || {},
                                        l = t.ui.bounds,
                                        h = (l.xAxisRects, l.yAxisRects, l.bodyRect),
                                        s = (h.x, h.y),
                                        u = (h.width, h.height),
                                        c = (t.index, t.ui),
                                        d = t.xAxis,
                                        g = (t.yAxis, t.valueRange),
                                        f = (c.axisData, c.hoverIndex),
                                        v = e.name || null,
                                        p = g[0],
                                        y = g[1] - p,
                                        b = c.interactiveInfo,
                                        x = b.map(function(e) {
                                            return e.position
                                        }),
                                        m = (c.valueAxis === A ? e.yAxisIndex : e.xAxisIndex) || 0;
                                    if (r && r.length) {
                                        var w = [],
                                            k = e.color || t.color;
                                        i.lineWidth = 1, r.forEach(function(e, t) {
                                            if (b[t]) {
                                                var o = b[t].axis,
                                                    i = (1 - e / y) * u + s,
                                                    a = void 0;
                                                w.push({
                                                    x: x[t],
                                                    y: i
                                                }), o[m] ? a = o[m] : (a = {
                                                    label: d.data[t],
                                                    datas: []
                                                }, b[t].axis[m] = a), a.datas.push([v, e])
                                            }
                                        }), i.strokeStyle = k, ht.Default.drawPoints(i, w), i.stroke();
                                        var C = n.size || 1,
                                            V = C.emphasisSize || 3;
                                        i.beginPath(), r.forEach(function(e, t) {
                                            var o = (1 - e / y) * u + s;
                                            i.moveTo(x[t], o), i.arc(x[t], o, f === t ? V : C, 0, 2 * Math.PI)
                                        }), i.stroke(), i.fillStyle = n.background || "#fff", i.fill()
                                    }
                                }(i, e, {
                                    valueRange: w.yAxis[o].valueRange,
                                    yAxis: w.yAxis[e.yAxisIndex || 0],
                                    xAxis: w.xAxis[e.xAxisIndex || 0],
                                    color: Ko(w.color, t),
                                    index: t,
                                    ui: k
                                })
                            }), void 0 !== k.hoverIndex)) {
                            var I = k.interactiveInfo[k.hoverIndex].position,
                                _ = k.bounds.bodyRect;
                            i.strokeStyle = w.tooltip.lineColor, i.lineWidth = w.tooltip.lineWidth, i.beginPath(), i.moveTo(I, _.y), i.lineTo(I, _.y + _.height), i.stroke()
                        }
                        if (k.selectRect) {
                            var S = k.selectRect,
                                R = S.x,
                                L = S.y,
                                P = S.width,
                                B = S.height;
                            i.fillStyle = d, i.fillRect(R, L, P, B), i.strokeStyle = c, i.strokeRect(R, L, P, B)
                        }
                        if (o) {
                            var E = No(a, o, t);
                            E.ui = k, E.option = w
                        }
                    }
                },
                radioButton: function(e, t, o, i, a) {
                    var r = o.getValue("value"),
                        n = o.getValue("values") || [],
                        l = o.getValue("labels") || [],
                        h = o.getValue("borderWidth"),
                        s = o.getValue("borderRadius"),
                        u = o.getValue("font"),
                        c = o.getColor("labelColor"),
                        d = o.getColor("borderColor"),
                        g = o.getColor("background"),
                        f = o.getColor("hoverLabelColor"),
                        v = o.getColor("hoverBorderColor"),
                        p = o.getColor("hoverBackground"),
                        y = o.getColor("activeLabelColor"),
                        b = o.getColor("activeBorderColor"),
                        x = o.getColor("activeBackground"),
                        m = o.getColor("disabledLabelColor"),
                        w = o.getColor("disabledBorderColor"),
                        k = o.getColor("disabledBackground"),
                        C = o.getValue("vertical"),
                        V = o.getValue("onChange"),
                        I = o.getValue("disabled"),
                        _ = No(a, i, o),
                        D = t.x,
                        T = t.y,
                        S = t.width,
                        R = t.height,
                        L = Math.min(n.length, l.length);
                    if (L) {
                        if (Xe = Ke = null, ri(r)) {
                            var P = n.indexOf(r);
                            Ke = 0 <= P ? P : null
                        }
                        _ && ri(_.hoverIndex) && (Xe = _.hoverIndex);
                        for (var B = [], E = 0; E < L; E++) E !== Xe && E !== Ke && B.push(E);
                        ri(Xe) && Xe === Ke ? B.push(Xe) : (ri(Ke) && B.push(Ke), ri(Xe) && B.push(Xe));
                        var A, M, O, H, W, F, N, G, U, Y, j, z, X, K, Z, $, q, J, Q, ee, te, oe, ie, ae, re, ne, le, he, se = [];
                        if (C)
                            for (var ue = R / L, ce = 0; ce < B.length; ce++) {
                                var de = B[ce],
                                    ge = l[de],
                                    fe = {
                                        x: D,
                                        y: T + de * ue,
                                        width: S,
                                        height: ue
                                    };
                                se.push({
                                    rect: fe,
                                    index: de
                                });
                                var ve = Ze(de, I, c, f, y, m),
                                    pe = Ze(de, I, d, v, b, w),
                                    ye = Ze(de, I, g, p, x, k);
                                Z = e, $ = fe, q = $e(de, L), J = s, Q = ge, ee = u, te = ve, oe = h, ie = pe, ae = ye, re = $.x, ne = $.y, le = $.width, he = $.height, Z.save(), Z.beginPath(), 0 === q ? ze(Z, re, ne, le, he, J, J, 0, 0) : 1 === q ? ze(Z, re, ne, le, he, 0) : 2 === q ? ze(Z, re, ne, le, he, 0, 0, J, J) : ze(Z, re, ne, le, he, J), Z.closePath(), ae && (Z.fillStyle = ae, Z.fill()), ie && oe && (Z.strokeStyle = ie, Z.stroke()), Z.clip(), je(Z, Q, ee, te, re, ne, le, he, "center", "middle"), Z.restore()
                            } else
                                for (var be = S / L, xe = 0; xe < B.length; xe++) {
                                    var me = B[xe],
                                        we = l[me],
                                        ke = {
                                            x: D + be * me,
                                            y: T,
                                            width: be,
                                            height: R
                                        };
                                    se.push({
                                        rect: ke,
                                        index: me
                                    });
                                    var Ce = Ze(me, I, c, f, y, m),
                                        Ve = Ze(me, I, d, v, b, w),
                                        Ie = Ze(me, I, g, p, x, k);
                                    A = e, M = ke, O = $e(me, L), H = s, W = we, F = u, N = Ce, G = h, U = Ve, Y = Ie, j = M.x, z = M.y, X = M.width, K = M.height, A.save(), A.beginPath(), 0 === O ? ze(A, j, z, X, K, H, 0, H, 0) : 1 === O ? ze(A, j, z, X, K, 0) : 2 === O ? ze(A, j, z, X, K, 0, H, 0, H) : ze(A, j, z, X, K, H), A.closePath(), Y && (A.fillStyle = Y, A.fill()), U && G && (A.strokeStyle = U, A.stroke()), A.clip(), je(A, W, F, N, j, z, X, K, "center", "middle"), A.restore()
                                }
                        _ && (_.disabled = I, _.onChange = V, _.buttonRects = se, _.values = n)
                    }
                }
            },
            pieInteractor: new mo,
            buttonInteractor: new at,
            inputInteractor: new Qe,
            textAreaInteractor: new Je,
            radioInteractor: new rt,
            checkboxInteractor: new nt,
            colorPickerInteractor: new ft,
            dateTimePickerInteractor: new vt,
            comboBoxInteractor: new wt,
            tableInteractor: new Ct,
            sliderInteractor: new _t,
            rangeSliderInteractor: new Tt,
            multipleComboBoxInteractor: new Rt,
            treeInteractor: new Bt,
            chartInteractor: new Nt,
            inputNumberInteractor: new ot,
            dateRangePickerInteractor: new Gt,
            radioButtonInteractor: new $t,
            Color: v,
            ListView: bt,
            ListDropDown: xt,
            getVectorInfo: No,
            caluMultilineSize: function(e, t) {
                var o = e.a("ht.content"),
                    i = e.a(C.FONT),
                    a = e.a(C.LINE_HEIGHT),
                    r = e.a(C.PADDING),
                    n = Co(r),
                    l = we(n, 4),
                    h = l[0],
                    s = l[1],
                    u = l[2],
                    c = l[3],
                    d = o.split(/\n/),
                    g = 0;
                return d.forEach(function(e) {
                    var t = ko(i, e);
                    g = Math.max(g, t.width)
                }), {
                    width: g + c + s,
                    height: d.length * a + h + u
                }
            },
            caluRichTextPaneSize: function(n, l) {
                var e = n.a("ht.content"),
                    t = n.a("ht.borderWidth") || 1,
                    o = n.a("ht.padding"),
                    i = n.a("ht.showArrow"),
                    a = n.a("ht.arrowOrientation"),
                    r = n.a("ht.vGap"),
                    h = n.a("ht.hGap"),
                    s = n.a("ht.font"),
                    u = Co(o),
                    c = we(u, 4),
                    d = c[0],
                    g = c[1],
                    f = c[2],
                    v = c[3] + g + t,
                    p = d + f + t;
                i && (a === se || a === he ? v += 10 : p += 10);
                var y = 0,
                    b = 0;
                return e && (e.forEach(function(e, t) {
                    var a = 0,
                        r = (e.length - 1) * h;
                    e.forEach(function(e, t) {
                        var o = ei(e.text, n, l),
                            i = ko(e.font || s, o);
                        a = Math.max(a, i.height), r += i.width
                    }), y = Math.max(y, r), b += a
                }), b += (e.length - 1) * r), {
                    width: v += y,
                    height: p += b
                }
            }
        },
        li = "0.0.6";
    return function(e, t) {
        void 0 === t && (t = {});
        var o = t.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("style");
            a.type = "text/css", "top" === o && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
        }
    }(".ht-vector-tooltip{\n    box-sizing: border-box;\n    padding: 5px 12px;\n    margin: 0;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgb(247, 247, 247);\n    border-radius: 5px;\n    /* -webkit-transition: all 0.5s;\n    transition: all 0.5s; */\n}\n", {}), ni.openColorDropDown = ut, ni.openDateTimeDropDown = dt, ni.getFormData = function(e, t) {
        var n = {},
            l = t ? t.getChildren() : e.dm().getDatas();
        return l.each(function(e) {
            var t = e.a(C.FORM_ITEM_NAME),
                o = e.a(C.FORM_ITEM_GROUP);
            if (t) n[t] = Bo(e);
            else if (o && !n[C.FORM_ITEM_GROUP])
                if (e.a(C.INPUT_TYPE) === x)
                    for (var i = 0; i < l.length; i++) {
                        var a = l.get(i);
                        if (o === a.a(C.FORM_ITEM_GROUP) && a.a(C.CHECKED)) {
                            n[o] = Bo(a);
                            break
                        }
                    } else if (e.a(C.INPUT_TYPE) === k) {
                        var r = [];
                        l.each(function(e) {
                            o === e.a(C.FORM_ITEM_GROUP) && e.a(C.CHECKED) && r.push(Bo(e))
                        }), n[o] = r
                    }
        }), n
    }, ni.selectFile = Mo, ni.getVersion = function() {
        return li
    }, ni
}();