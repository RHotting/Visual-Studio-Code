/*!
 * 
 * (C) Copyright IBM Corp. 2017 - 2020. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 * 
 * watson-web-channel 1.5.3
 * Contributors: Ethan Winters, Raymond Chu, Karen Harris, Ashley Lord, Amy Zhong, Ryan Simpson, Anthony Wong, Wilson Wong, David G Terry, Simon Burns, Damon Lundin, John Engstrom, Neil Mallinar
 * Built: Apr 14 2020 12:41 pm +00:00
 * 
 * 
 */
window.loadWatsonAssistantChat = function(t) { var n = {};

    function r(e) { if (n[e]) return n[e].exports; var o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = t, r.c = n, r.d = function(t, n, e) { r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, n) { if (1 & n && (t = r(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var e = Object.create(null); if (r.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
            for (var o in t) r.d(e, o, function(n) { return t[n] }.bind(null, o)); return e }, r.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(n, "a", n), n }, r.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, r.p = "", r(r.s = 133) }([function(t, n, r) { var e = r(1),
        o = r(42),
        i = r(67),
        c = r(101),
        u = e.Symbol,
        a = o("wks");
    t.exports = function(t) { return a[t] || (a[t] = c && u[t] || (c ? u : i)("Symbol." + t)) } }, function(t, n, r) {
    (function(n) { var r = function(t) { return t && t.Math == Math && t };
        t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")() }).call(this, r(84)) }, function(t, n, r) {
    (function(n) { var r = function(t) { return t && t.Math == Math && t };
        t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")() }).call(this, r(84)) }, function(t, n, r) { var e = r(16),
        o = r(9),
        i = r(65),
        c = r(19).f;
    t.exports = function(t) { var n = e.Symbol || (e.Symbol = {});
        o(n, t) || c(n, t, { value: i.f(t) }) } }, function(t, n) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, n, r) { "use strict"; var e = r(1),
        o = r(69).f,
        i = r(104),
        c = r(16),
        u = r(49),
        a = r(10),
        s = r(9),
        f = function(t) { var n = function(n, r, e) { if (this instanceof t) { switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n);
                        case 2:
                            return new t(n, r) } return new t(n, r, e) } return t.apply(this, arguments) }; return n.prototype = t.prototype, n };
    t.exports = function(t, n) { var r, p, l, v, h, d, y, g, m = t.target,
            x = t.global,
            b = t.stat,
            w = t.proto,
            O = x ? e : b ? e[m] : (e[m] || {}).prototype,
            j = x ? c : c[m] || (c[m] = {}),
            S = j.prototype; for (l in n) r = !i(x ? l : m + (b ? "." : "#") + l, t.forced) && O && s(O, l), h = j[l], r && (d = t.noTargetGet ? (g = o(O, l)) && g.value : O[l]), v = r && d ? d : n[l], r && typeof h == typeof v || (y = t.bind && r ? u(v, e) : t.wrap && r ? f(v) : w && "function" == typeof v ? u(Function.call, v) : v, (t.sham || v && v.sham || h && h.sham) && a(y, "sham", !0), j[l] = y, w && (s(c, p = m + "Prototype") || a(c, p, {}), c[p][l] = v, t.real && S && !S[l] && a(S, l, v))) } }, function(t, n, r) { var e = r(2),
        o = r(37),
        i = r(87),
        c = r(136),
        u = e.Symbol,
        a = o("wks");
    t.exports = function(t) { return a[t] || (a[t] = c && u[t] || (c ? u : i)("Symbol." + t)) } }, function(t, n) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, n, r) { var e = r(14);
    t.exports = function(t) { if (!e(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, n) { var r = {}.hasOwnProperty;
    t.exports = function(t, n) { return r.call(t, n) } }, function(t, n, r) { var e = r(11),
        o = r(19),
        i = r(31);
    t.exports = e ? function(t, n, r) { return o.f(t, n, i(1, r)) } : function(t, n, r) { return t[n] = r, t } }, function(t, n, r) { var e = r(4);
    t.exports = !e((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(7);
    t.exports = function(t) { if (!e(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, n) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, n) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, n) { var r = {}.hasOwnProperty;
    t.exports = function(t, n) { return r.call(t, n) } }, function(t, n) { t.exports = {} }, function(t, n, r) { var e = r(18),
        o = r(28),
        i = r(55);
    t.exports = e ? function(t, n, r) { return o.f(t, n, i(1, r)) } : function(t, n, r) { return t[n] = r, t } }, function(t, n, r) { var e = r(13);
    t.exports = !e((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(11),
        o = r(100),
        i = r(12),
        c = r(43),
        u = Object.defineProperty;
    n.f = e ? u : function(t, n, r) { if (i(t), n = c(n, !0), i(r), o) try { return u(t, n, r) } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[n] = r.value), t } }, function(t, n, r) { var e = r(70),
        o = r(44);
    t.exports = function(t) { return e(o(t)) } }, function(t, n) { var r = {}.toString;
    t.exports = function(t) { return r.call(t).slice(8, -1) } }, function(t, n) { var r = {}.toString;
    t.exports = function(t) { return r.call(t).slice(8, -1) } }, function(t, n) { t.exports = !0 }, function(t, n) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, n, r) { var e = r(44);
    t.exports = function(t) { return Object(e(t)) } }, function(t, n, r) { var e = r(19).f,
        o = r(10),
        i = r(9),
        c = r(167),
        u = r(0)("toStringTag"),
        a = c !== {}.toString;
    t.exports = function(t, n, r, s) { if (t) { var f = r ? t : t.prototype;
            i(f, u) || e(f, u, { configurable: !0, value: n }), s && a && o(f, "toString", c) } } }, function(t, n) { t.exports = {} }, function(t, n, r) { var e = r(18),
        o = r(85),
        i = r(8),
        c = r(86),
        u = Object.defineProperty;
    n.f = e ? u : function(t, n, r) { if (i(t), n = c(n, !0), i(r), o) try { return u(t, n, r) } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[n] = r.value), t } }, function(t, n, r) { var e = r(140),
        o = r(2),
        i = function(t) { return "function" == typeof t ? t : void 0 };
    t.exports = function(t, n) { return arguments.length < 2 ? i(e[t]) || i(o[t]) : e[t] && e[t][n] || o[t] && o[t][n] } }, function(t, n) { t.exports = {} }, function(t, n) { t.exports = function(t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function(t, n, r) { var e = r(68),
        o = Math.min;
    t.exports = function(t) { return t > 0 ? o(e(t), 9007199254740991) : 0 } }, function(t, n, r) { var e = r(16),
        o = r(1),
        i = function(t) { return "function" == typeof t ? t : void 0 };
    t.exports = function(t, n) { return arguments.length < 2 ? i(e[t]) || i(o[t]) : e[t] && e[t][n] || o[t] && o[t][n] } }, function(t, n, r) { var e = r(10);
    t.exports = function(t, n, r, o) { o && o.enumerable ? t[n] = r : e(t, n, r) } }, function(t, n, r) { var e = r(16);
    t.exports = function(t) { return e[t + "Prototype"] } }, function(t, n, r) { var e = r(52),
        o = r(82);
    t.exports = function(t) { return e(o(t)) } }, function(t, n, r) { var e = r(38),
        o = r(135);
    (t.exports = function(t, n) { return o[t] || (o[t] = void 0 !== n ? n : {}) })("versions", []).push({ version: "3.3.6", mode: e ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, n) { t.exports = !1 }, function(t, n, r) { var e = r(2),
        o = r(61).f,
        i = r(17),
        c = r(40),
        u = r(53),
        a = r(143),
        s = r(96);
    t.exports = function(t, n) { var r, f, p, l, v, h = t.target,
            d = t.global,
            y = t.stat; if (r = d ? e : y ? e[h] || u(h, {}) : (e[h] || {}).prototype)
            for (f in n) { if (l = n[f], p = t.noTargetGet ? (v = o(r, f)) && v.value : r[f], !s(d ? f : h + (y ? "." : "#") + f, t.forced) && void 0 !== p) { if (typeof l == typeof p) continue;
                    a(l, p) }(t.sham || p && p.sham) && i(l, "sham", !0), c(r, f, l, t) } } }, function(t, n, r) { var e = r(2),
        o = r(37),
        i = r(17),
        c = r(15),
        u = r(53),
        a = r(93),
        s = r(60),
        f = s.get,
        p = s.enforce,
        l = String(a).split("toString");
    o("inspectSource", (function(t) { return a.call(t) })), (t.exports = function(t, n, r, o) { var a = !!o && !!o.unsafe,
            s = !!o && !!o.enumerable,
            f = !!o && !!o.noTargetGet; "function" == typeof r && ("string" != typeof n || c(r, "name") || i(r, "name", n), p(r).source = l.join("string" == typeof n ? n : "")), t !== e ? (a ? !f && t[n] && (s = !0) : delete t[n], s ? t[n] = r : i(t, n, r)) : s ? t[n] = r : u(n, r) })(Function.prototype, "toString", (function() { return "function" == typeof this && f(this).source || a.call(this) })) }, function(t, n) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, n, r) { var e = r(23),
        o = r(158);
    (t.exports = function(t, n) { return o[t] || (o[t] = void 0 !== n ? n : {}) })("versions", []).push({ version: "3.3.6", mode: e ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, n, r) { var e = r(7);
    t.exports = function(t, n) { if (!e(t)) return t; var r, o; if (n && "function" == typeof(r = t.toString) && !e(o = r.call(t))) return o; if ("function" == typeof(r = t.valueOf) && !e(o = r.call(t))) return o; if (!n && "function" == typeof(r = t.toString) && !e(o = r.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, n) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, n, r) { var e, o, i, c = r(161),
        u = r(1),
        a = r(7),
        s = r(10),
        f = r(9),
        p = r(46),
        l = r(47),
        v = u.WeakMap; if (c) { var h = new v,
            d = h.get,
            y = h.has,
            g = h.set;
        e = function(t, n) { return g.call(h, t, n), n }, o = function(t) { return d.call(h, t) || {} }, i = function(t) { return y.call(h, t) } } else { var m = p("state");
        l[m] = !0, e = function(t, n) { return s(t, m, n), n }, o = function(t) { return f(t, m) ? t[m] : {} }, i = function(t) { return f(t, m) } }
    t.exports = { set: e, get: o, has: i, enforce: function(t) { return i(t) ? o(t) : e(t, {}) }, getterFor: function(t) { return function(n) { var r; if (!a(n) || (r = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } } }, function(t, n, r) { var e = r(42),
        o = r(67),
        i = e("keys");
    t.exports = function(t) { return i[t] || (i[t] = o(t)) } }, function(t, n) { t.exports = {} }, function(t, n, r) { "use strict"; var e = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !e.call({ 1: 2 }, 1);
    n.f = i ? function(t) { var n = o(this, t); return !!n && n.enumerable } : e }, function(t, n, r) { var e = r(24);
    t.exports = function(t, n, r) { if (e(t), void 0 === n) return t; switch (r) {
            case 0:
                return function() { return t.call(n) };
            case 1:
                return function(r) { return t.call(n, r) };
            case 2:
                return function(r, e) { return t.call(n, r, e) };
            case 3:
                return function(r, e, o) { return t.call(n, r, e, o) } } return function() { return t.apply(n, arguments) } } }, function(t, n, r) { var e = r(108),
        o = r(71);
    t.exports = Object.keys || function(t) { return e(t, o) } }, function(t, n, r) { t.exports = r(249) }, function(t, n, r) { var e = r(13),
        o = r(22),
        i = "".split;
    t.exports = e((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == o(t) ? i.call(t, "") : Object(t) } : Object }, function(t, n, r) { var e = r(2),
        o = r(17);
    t.exports = function(t, n) { try { o(e, t, n) } catch (r) { e[t] = n } return n } }, function(t, n, r) { var e = r(2),
        o = r(14),
        i = e.document,
        c = o(i) && o(i.createElement);
    t.exports = function(t) { return c ? i.createElement(t) : {} } }, function(t, n) { t.exports = function(t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function(t, n, r) { var e = r(91),
        o = Math.min;
    t.exports = function(t) { return t > 0 ? o(e(t), 9007199254740991) : 0 } }, function(t, n) { t.exports = {} }, function(t, n) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, n, r) { var e = r(37),
        o = r(87),
        i = e("keys");
    t.exports = function(t) { return i[t] || (i[t] = o(t)) } }, function(t, n, r) { var e, o, i, c = r(141),
        u = r(2),
        a = r(14),
        s = r(17),
        f = r(15),
        p = r(59),
        l = r(57),
        v = u.WeakMap; if (c) { var h = new v,
            d = h.get,
            y = h.has,
            g = h.set;
        e = function(t, n) { return g.call(h, t, n), n }, o = function(t) { return d.call(h, t) || {} }, i = function(t) { return y.call(h, t) } } else { var m = p("state");
        l[m] = !0, e = function(t, n) { return s(t, m, n), n }, o = function(t) { return f(t, m) ? t[m] : {} }, i = function(t) { return f(t, m) } }
    t.exports = { set: e, get: o, has: i, enforce: function(t) { return i(t) ? o(t) : e(t, {}) }, getterFor: function(t) { return function(n) { var r; if (!a(n) || (r = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } } }, function(t, n, r) { var e = r(18),
        o = r(94),
        i = r(55),
        c = r(36),
        u = r(86),
        a = r(15),
        s = r(85),
        f = Object.getOwnPropertyDescriptor;
    n.f = e ? f : function(t, n) { if (t = c(t), n = u(n, !0), s) try { return f(t, n) } catch (t) {}
        if (a(t, n)) return i(!o.f.call(t, n), t[n]) } }, function(t, n, r) { var e = r(82);
    t.exports = function(t) { return Object(e(t)) } }, function(t, n, r) { var e = r(28).f,
        o = r(15),
        i = r(6)("toStringTag");
    t.exports = function(t, n, r) { t && !o(t = r ? t : t.prototype, i) && e(t, i, { configurable: !0, value: n }) } }, function(t, n, r) { var e = r(41);
    t.exports = function(t, n, r) { if (e(t), void 0 === n) return t; switch (r) {
            case 0:
                return function() { return t.call(n) };
            case 1:
                return function(r) { return t.call(n, r) };
            case 2:
                return function(r, e) { return t.call(n, r, e) };
            case 3:
                return function(r, e, o) { return t.call(n, r, e, o) } } return function() { return t.apply(n, arguments) } } }, function(t, n, r) { n.f = r(0) }, function(t, n, r) { var e = r(1),
        o = r(7),
        i = e.document,
        c = o(i) && o(i.createElement);
    t.exports = function(t) { return c ? i.createElement(t) : {} } }, function(t, n) { var r = 0,
        e = Math.random();
    t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + e).toString(36) } }, function(t, n) { var r = Math.ceil,
        e = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t) } }, function(t, n, r) { var e = r(11),
        o = r(48),
        i = r(31),
        c = r(20),
        u = r(43),
        a = r(9),
        s = r(100),
        f = Object.getOwnPropertyDescriptor;
    n.f = e ? f : function(t, n) { if (t = c(t), n = u(n, !0), s) try { return f(t, n) } catch (t) {}
        if (a(t, n)) return i(!o.f.call(t, n), t[n]) } }, function(t, n, r) { var e = r(4),
        o = r(21),
        i = "".split;
    t.exports = e((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == o(t) ? i.call(t, "") : Object(t) } : Object }, function(t, n) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, n, r) { var e = r(21),
        o = r(0)("toStringTag"),
        i = "Arguments" == e(function() { return arguments }());
    t.exports = function(t) { var n, r, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, n) { try { return t[n] } catch (t) {} }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function(t, n, r) { r(170); var e = r(171),
        o = r(1),
        i = r(10),
        c = r(27),
        u = r(0)("toStringTag"); for (var a in e) { var s = o[a],
            f = s && s.prototype;
        f && !f[u] && i(f, u, a), c[a] = c.Array } }, function(t, n, r) { var e = r(21);
    t.exports = Array.isArray || function(t) { return "Array" == e(t) } }, function(t, n, r) { var e, o, i = r(1),
        c = r(76),
        u = i.process,
        a = u && u.versions,
        s = a && a.v8;
    s ? o = (e = s.split("."))[0] + e[1] : c && (!(e = c.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = c.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o }, function(t, n, r) { var e = r(33);
    t.exports = e("navigator", "userAgent") || "" }, function(t, n, r) { var e = r(49),
        o = r(70),
        i = r(25),
        c = r(32),
        u = r(112),
        a = [].push,
        s = function(t) { var n = 1 == t,
                r = 2 == t,
                s = 3 == t,
                f = 4 == t,
                p = 6 == t,
                l = 5 == t || p; return function(v, h, d, y) { for (var g, m, x = i(v), b = o(x), w = e(h, d, 3), O = c(b.length), j = 0, S = y || u, _ = n ? S(v, O) : r ? S(v, 0) : void 0; O > j; j++)
                    if ((l || j in b) && (m = w(g = b[j], j, x), t))
                        if (n) _[j] = m;
                        else if (m) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return j;
                    case 2:
                        a.call(_, g) } else if (f) return !1;
                return p ? -1 : s || f ? f : _ } };
    t.exports = { forEach: s(0), map: s(1), filter: s(2), some: s(3), every: s(4), find: s(5), findIndex: s(6) } }, function(t, n, r) { "use strict"; var e = r(24),
        o = function(t) { var n, r;
            this.promise = new t((function(t, e) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = t, r = e })), this.resolve = e(n), this.reject = e(r) };
    t.exports.f = function(t) { return new o(t) } }, function(t, n, r) { var e = r(29);
    t.exports = e("navigator", "userAgent") || "" }, function(t, n, r) { "use strict"; var e = r(4);
    t.exports = function(t, n) { var r = [][t]; return !r || !e((function() { r.call(null, n || function() { throw 1 }, 1) })) } }, function(t, n, r) { t.exports = r(194) }, function(t, n) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, n, r) { var e = r(6),
        o = r(88),
        i = r(17),
        c = e("unscopables"),
        u = Array.prototype;
    null == u[c] && i(u, c, o(null)), t.exports = function(t) { u[c][t] = !0 } }, function(t, n) { var r;
    r = function() { return this }(); try { r = r || new Function("return this")() } catch (t) { "object" == typeof window && (r = window) }
    t.exports = r }, function(t, n, r) { var e = r(18),
        o = r(13),
        i = r(54);
    t.exports = !e && !o((function() { return 7 != Object.defineProperty(i("div"), "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(14);
    t.exports = function(t, n) { if (!e(t)) return t; var r, o; if (n && "function" == typeof(r = t.toString) && !e(o = r.call(t))) return o; if ("function" == typeof(r = t.valueOf) && !e(o = r.call(t))) return o; if (!n && "function" == typeof(r = t.toString) && !e(o = r.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, n) { var r = 0,
        e = Math.random();
    t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + e).toString(36) } }, function(t, n, r) { var e = r(8),
        o = r(137),
        i = r(58),
        c = r(57),
        u = r(92),
        a = r(54),
        s = r(59)("IE_PROTO"),
        f = function() {},
        p = function() { var t, n = a("iframe"),
                r = i.length; for (n.style.display = "none", u.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), p = t.F; r--;) delete p.prototype[i[r]]; return p() };
    t.exports = Object.create || function(t, n) { var r; return null !== t ? (f.prototype = e(t), r = new f, f.prototype = null, r[s] = t) : r = p(), void 0 === n ? r : o(r, n) }, c[s] = !0 }, function(t, n, r) { var e = r(90),
        o = r(58);
    t.exports = Object.keys || function(t) { return e(t, o) } }, function(t, n, r) { var e = r(15),
        o = r(36),
        i = r(138).indexOf,
        c = r(57);
    t.exports = function(t, n) { var r, u = o(t),
            a = 0,
            s = []; for (r in u) !e(c, r) && e(u, r) && s.push(r); for (; n.length > a;) e(u, r = n[a++]) && (~i(s, r) || s.push(r)); return s } }, function(t, n) { var r = Math.ceil,
        e = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t) } }, function(t, n, r) { var e = r(29);
    t.exports = e("document", "documentElement") }, function(t, n, r) { var e = r(37);
    t.exports = e("native-function-to-string", Function.toString) }, function(t, n, r) { "use strict"; var e = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !e.call({ 1: 2 }, 1);
    n.f = i ? function(t) { var n = o(this, t); return !!n && n.enumerable } : e }, function(t, n) { n.f = Object.getOwnPropertySymbols }, function(t, n, r) { var e = r(13),
        o = /#|\.prototype\./,
        i = function(t, n) { var r = u[c(t)]; return r == s || r != a && ("function" == typeof n ? e(n) : !!n) },
        c = i.normalize = function(t) { return String(t).replace(o, ".").toLowerCase() },
        u = i.data = {},
        a = i.NATIVE = "N",
        s = i.POLYFILL = "P";
    t.exports = i }, function(t, n, r) { "use strict"; var e, o, i, c = r(98),
        u = r(17),
        a = r(15),
        s = r(6),
        f = r(38),
        p = s("iterator"),
        l = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (e = o) : l = !0), null == e && (e = {}), f || a(e, p) || u(e, p, (function() { return this })), t.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: l } }, function(t, n, r) { var e = r(15),
        o = r(62),
        i = r(59),
        c = r(147),
        u = i("IE_PROTO"),
        a = Object.prototype;
    t.exports = c ? Object.getPrototypeOf : function(t) { return t = o(t), e(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, n, r) { r(3)("iterator") }, function(t, n, r) { var e = r(11),
        o = r(4),
        i = r(66);
    t.exports = !e && !o((function() { return 7 != Object.defineProperty(i("div"), "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(4);
    t.exports = !!Object.getOwnPropertySymbols && !e((function() { return !String(Symbol()) })) }, function(t, n, r) { "use strict"; var e = r(160).charAt,
        o = r(45),
        i = r(103),
        c = o.set,
        u = o.getterFor("String Iterator");
    i(String, "String", (function(t) { c(this, { type: "String Iterator", string: String(t), index: 0 }) }), (function() { var t, n = u(this),
            r = n.string,
            o = n.index; return o >= r.length ? { value: void 0, done: !0 } : (t = e(r, o), n.index += t.length, { value: t, done: !1 }) })) }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(163),
        i = r(106),
        c = r(168),
        u = r(26),
        a = r(10),
        s = r(34),
        f = r(0),
        p = r(23),
        l = r(27),
        v = r(105),
        h = v.IteratorPrototype,
        d = v.BUGGY_SAFARI_ITERATORS,
        y = f("iterator"),
        g = function() { return this };
    t.exports = function(t, n, r, f, v, m, x) { o(r, n, f); var b, w, O, j = function(t) { if (t === v && T) return T; if (!d && t in E) return E[t]; switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() { return new r(this, t) } } return function() { return new r(this) } },
            S = n + " Iterator",
            _ = !1,
            E = t.prototype,
            P = E[y] || E["@@iterator"] || v && E[v],
            T = !d && P || j(v),
            A = "Array" == n && E.entries || P; if (A && (b = i(A.call(new t)), h !== Object.prototype && b.next && (p || i(b) === h || (c ? c(b, h) : "function" != typeof b[y] && a(b, y, g)), u(b, S, !0, !0), p && (l[S] = g))), "values" == v && P && "values" !== P.name && (_ = !0, T = function() { return P.call(this) }), p && !x || E[y] === T || a(E, y, T), l[n] = T, v)
            if (w = { values: j("values"), keys: m ? T : j("keys"), entries: j("entries") }, x)
                for (O in w) !d && !_ && O in E || s(E, O, w[O]);
            else e({ target: n, proto: !0, forced: d || _ }, w);
        return w } }, function(t, n, r) { var e = r(4),
        o = /#|\.prototype\./,
        i = function(t, n) { var r = u[c(t)]; return r == s || r != a && ("function" == typeof n ? e(n) : !!n) },
        c = i.normalize = function(t) { return String(t).replace(o, ".").toLowerCase() },
        u = i.data = {},
        a = i.NATIVE = "N",
        s = i.POLYFILL = "P";
    t.exports = i }, function(t, n, r) { "use strict"; var e, o, i, c = r(106),
        u = r(10),
        a = r(9),
        s = r(0),
        f = r(23),
        p = s("iterator"),
        l = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (e = o) : l = !0), null == e && (e = {}), f || a(e, p) || u(e, p, (function() { return this })), t.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: l } }, function(t, n, r) { var e = r(9),
        o = r(25),
        i = r(46),
        c = r(164),
        u = i("IE_PROTO"),
        a = Object.prototype;
    t.exports = c ? Object.getPrototypeOf : function(t) { return t = o(t), e(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, n, r) { var e = r(12),
        o = r(165),
        i = r(71),
        c = r(47),
        u = r(110),
        a = r(66),
        s = r(46)("IE_PROTO"),
        f = function() {},
        p = function() { var t, n = a("iframe"),
                r = i.length; for (n.style.display = "none", u.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), p = t.F; r--;) delete p.prototype[i[r]]; return p() };
    t.exports = Object.create || function(t, n) { var r; return null !== t ? (f.prototype = e(t), r = new f, f.prototype = null, r[s] = t) : r = p(), void 0 === n ? r : o(r, n) }, c[s] = !0 }, function(t, n, r) { var e = r(9),
        o = r(20),
        i = r(109).indexOf,
        c = r(47);
    t.exports = function(t, n) { var r, u = o(t),
            a = 0,
            s = []; for (r in u) !e(c, r) && e(u, r) && s.push(r); for (; n.length > a;) e(u, r = n[a++]) && (~i(s, r) || s.push(r)); return s } }, function(t, n, r) { var e = r(20),
        o = r(32),
        i = r(166),
        c = function(t) { return function(n, r, c) { var u, a = e(n),
                    s = o(a.length),
                    f = i(c, s); if (t && r != r) { for (; s > f;)
                        if ((u = a[f++]) != u) return !0 } else
                    for (; s > f; f++)
                        if ((t || f in a) && a[f] === r) return t || f || 0; return !t && -1 } };
    t.exports = { includes: c(!0), indexOf: c(!1) } }, function(t, n, r) { var e = r(33);
    t.exports = e("document", "documentElement") }, function(t, n) { t.exports = function() {} }, function(t, n, r) { var e = r(7),
        o = r(74),
        i = r(0)("species");
    t.exports = function(t, n) { var r; return o(t) && ("function" != typeof(r = t.constructor) || r !== Array && !o(r.prototype) ? e(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === n ? 0 : n) } }, function(t, n) {}, function(t, n, r) { var e = r(108),
        o = r(71).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) { return e(t, o) } }, function(t, n) { n.f = Object.getOwnPropertySymbols }, function(t, n, r) { var e = r(1);
    t.exports = e.Promise }, function(t, n, r) { var e = r(12),
        o = r(200),
        i = r(32),
        c = r(49),
        u = r(201),
        a = r(202),
        s = function(t, n) { this.stopped = t, this.result = n };
    (t.exports = function(t, n, r, f, p) { var l, v, h, d, y, g, m, x = c(n, r, f ? 2 : 1); if (p) l = t;
        else { if ("function" != typeof(v = u(t))) throw TypeError("Target is not iterable"); if (o(v)) { for (h = 0, d = i(t.length); d > h; h++)
                    if ((y = f ? x(e(m = t[h])[0], m[1]) : x(t[h])) && y instanceof s) return y;
                return new s(!1) }
            l = v.call(t) } for (g = l.next; !(m = g.call(l)).done;)
            if ("object" == typeof(y = a(l, x, m.value, f)) && y && y instanceof s) return y;
        return new s(!1) }).stop = function(t) { return new s(!0, t) } }, function(t, n, r) { var e = r(12),
        o = r(24),
        i = r(0)("species");
    t.exports = function(t, n) { var r, c = e(t).constructor; return void 0 === c || null == (r = e(c)[i]) ? n : o(r) } }, function(t, n, r) { var e, o, i, c = r(1),
        u = r(4),
        a = r(21),
        s = r(49),
        f = r(110),
        p = r(66),
        l = r(76),
        v = c.location,
        h = c.setImmediate,
        d = c.clearImmediate,
        y = c.process,
        g = c.MessageChannel,
        m = c.Dispatch,
        x = 0,
        b = {},
        w = function(t) { if (b.hasOwnProperty(t)) { var n = b[t];
                delete b[t], n() } },
        O = function(t) { return function() { w(t) } },
        j = function(t) { w(t.data) },
        S = function(t) { c.postMessage(t + "", v.protocol + "//" + v.host) };
    h && d || (h = function(t) { for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]); return b[++x] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n) }, e(x), x }, d = function(t) { delete b[t] }, "process" == a(y) ? e = function(t) { y.nextTick(O(t)) } : m && m.now ? e = function(t) { m.now(O(t)) } : g && !/(iphone|ipod|ipad).*applewebkit/i.test(l) ? (i = (o = new g).port2, o.port1.onmessage = j, e = s(i.postMessage, i, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || u(S) ? e = "onreadystatechange" in p("script") ? function(t) { f.appendChild(p("script")).onreadystatechange = function() { f.removeChild(this), w(t) } } : function(t) { setTimeout(O(t), 0) } : (e = S, c.addEventListener("message", j, !1))), t.exports = { set: h, clear: d } }, function(t, n, r) { var e = r(12),
        o = r(7),
        i = r(78);
    t.exports = function(t, n) { if (e(t), o(n) && n.constructor === t) return n; var r = i.f(t); return (0, r.resolve)(n), r.promise } }, function(t, n) { t.exports = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function(t, n, r) { var e, o, i, c = r(2),
        u = r(13),
        a = r(22),
        s = r(64),
        f = r(92),
        p = r(54),
        l = r(79),
        v = c.location,
        h = c.setImmediate,
        d = c.clearImmediate,
        y = c.process,
        g = c.MessageChannel,
        m = c.Dispatch,
        x = 0,
        b = {},
        w = function(t) { if (b.hasOwnProperty(t)) { var n = b[t];
                delete b[t], n() } },
        O = function(t) { return function() { w(t) } },
        j = function(t) { w(t.data) },
        S = function(t) { c.postMessage(t + "", v.protocol + "//" + v.host) };
    h && d || (h = function(t) { for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]); return b[++x] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n) }, e(x), x }, d = function(t) { delete b[t] }, "process" == a(y) ? e = function(t) { y.nextTick(O(t)) } : m && m.now ? e = function(t) { m.now(O(t)) } : g && !/(iphone|ipod|ipad).*applewebkit/i.test(l) ? (i = (o = new g).port2, o.port1.onmessage = j, e = s(i.postMessage, i, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || u(S) ? e = "onreadystatechange" in p("script") ? function(t) { f.appendChild(p("script")).onreadystatechange = function() { f.removeChild(this), w(t) } } : function(t) { setTimeout(O(t), 0) } : (e = S, c.addEventListener("message", j, !1))), t.exports = { set: h, clear: d } }, function(t, n, r) { "use strict"; var e = r(41),
        o = function(t) { var n, r;
            this.promise = new t((function(t, e) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = t, r = e })), this.resolve = e(n), this.reject = e(r) };
    t.exports.f = function(t) { return new o(t) } }, function(t, n, r) { t.exports = r(156) }, function(t, n, r) { t.exports = r(172) }, function(t, n, r) { t.exports = r(225) }, function(t, n, r) { t.exports = r(232) }, function(t, n, r) { t.exports = r(236) }, function(t, n) { t.exports = function(t, n) { for (var r = t.split("."), e = n.split("."), o = 0; o < 3; o++) { var i = Number(r[o]),
                c = Number(e[o]); if (i > c) return 1; if (c > i) return -1; if (!isNaN(i) && isNaN(c)) return 1; if (isNaN(i) && !isNaN(c)) return -1 } return 0 } }, function(t, n, r) { t.exports = r(240) }, function(t, n, r) { t.exports = r(244) }, function(t, n, r) { t.exports = r(253) }, function(t, n, r) { r(134), r(150), r(152), t.exports = r(257) }, function(t, n, r) { "use strict"; var e = r(36),
        o = r(83),
        i = r(30),
        c = r(60),
        u = r(142),
        a = c.set,
        s = c.getterFor("Array Iterator");
    t.exports = u(Array, "Array", (function(t, n) { a(this, { type: "Array Iterator", target: e(t), index: 0, kind: n }) }), (function() { var t = s(this),
            n = t.target,
            r = t.kind,
            e = t.index++; return !n || e >= n.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: e, done: !1 } : "values" == r ? { value: n[e], done: !1 } : { value: [e, n[e]], done: !1 } }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(t, n, r) { var e = r(2),
        o = r(53),
        i = e["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i }, function(t, n, r) { var e = r(13);
    t.exports = !!Object.getOwnPropertySymbols && !e((function() { return !String(Symbol()) })) }, function(t, n, r) { var e = r(18),
        o = r(28),
        i = r(8),
        c = r(89);
    t.exports = e ? Object.defineProperties : function(t, n) { i(t); for (var r, e = c(n), u = e.length, a = 0; u > a;) o.f(t, r = e[a++], n[r]); return t } }, function(t, n, r) { var e = r(36),
        o = r(56),
        i = r(139),
        c = function(t) { return function(n, r, c) { var u, a = e(n),
                    s = o(a.length),
                    f = i(c, s); if (t && r != r) { for (; s > f;)
                        if ((u = a[f++]) != u) return !0 } else
                    for (; s > f; f++)
                        if ((t || f in a) && a[f] === r) return t || f || 0; return !t && -1 } };
    t.exports = { includes: c(!0), indexOf: c(!1) } }, function(t, n, r) { var e = r(91),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, n) { var r = e(t); return r < 0 ? o(r + n, 0) : i(r, n) } }, function(t, n, r) { t.exports = r(2) }, function(t, n, r) { var e = r(2),
        o = r(93),
        i = e.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o.call(i)) }, function(t, n, r) { "use strict"; var e = r(39),
        o = r(146),
        i = r(98),
        c = r(148),
        u = r(63),
        a = r(17),
        s = r(40),
        f = r(6),
        p = r(38),
        l = r(30),
        v = r(97),
        h = v.IteratorPrototype,
        d = v.BUGGY_SAFARI_ITERATORS,
        y = f("iterator"),
        g = function() { return this };
    t.exports = function(t, n, r, f, v, m, x) { o(r, n, f); var b, w, O, j = function(t) { if (t === v && T) return T; if (!d && t in E) return E[t]; switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() { return new r(this, t) } } return function() { return new r(this) } },
            S = n + " Iterator",
            _ = !1,
            E = t.prototype,
            P = E[y] || E["@@iterator"] || v && E[v],
            T = !d && P || j(v),
            A = "Array" == n && E.entries || P; if (A && (b = i(A.call(new t)), h !== Object.prototype && b.next && (p || i(b) === h || (c ? c(b, h) : "function" != typeof b[y] && a(b, y, g)), u(b, S, !0, !0), p && (l[S] = g))), "values" == v && P && "values" !== P.name && (_ = !0, T = function() { return P.call(this) }), p && !x || E[y] === T || a(E, y, T), l[n] = T, v)
            if (w = { values: j("values"), keys: m ? T : j("keys"), entries: j("entries") }, x)
                for (O in w) !d && !_ && O in E || s(E, O, w[O]);
            else e({ target: n, proto: !0, forced: d || _ }, w);
        return w } }, function(t, n, r) { var e = r(15),
        o = r(144),
        i = r(61),
        c = r(28);
    t.exports = function(t, n) { for (var r = o(n), u = c.f, a = i.f, s = 0; s < r.length; s++) { var f = r[s];
            e(t, f) || u(t, f, a(n, f)) } } }, function(t, n, r) { var e = r(29),
        o = r(145),
        i = r(95),
        c = r(8);
    t.exports = e("Reflect", "ownKeys") || function(t) { var n = o.f(c(t)),
            r = i.f; return r ? n.concat(r(t)) : n } }, function(t, n, r) { var e = r(90),
        o = r(58).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) { return e(t, o) } }, function(t, n, r) { "use strict"; var e = r(97).IteratorPrototype,
        o = r(88),
        i = r(55),
        c = r(63),
        u = r(30),
        a = function() { return this };
    t.exports = function(t, n, r) { var s = n + " Iterator"; return t.prototype = o(e, { next: i(1, r) }), c(t, s, !1, !0), u[s] = a, t } }, function(t, n, r) { var e = r(13);
    t.exports = !e((function() {
        function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })) }, function(t, n, r) { var e = r(8),
        o = r(149);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, n = !1,
            r = {}; try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array } catch (t) {} return function(r, i) { return e(r), o(i), n ? t.call(r, i) : r.__proto__ = i, r } }() : void 0) }, function(t, n, r) { var e = r(14);
    t.exports = function(t) { if (!e(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, n, r) { var e = r(39),
        o = r(151);
    e({ target: "Object", stat: !0, forced: Object.assign !== o }, { assign: o }) }, function(t, n, r) { "use strict"; var e = r(18),
        o = r(13),
        i = r(89),
        c = r(95),
        u = r(94),
        a = r(62),
        s = r(52),
        f = Object.assign;
    t.exports = !f || o((function() { var t = {},
            n = {},
            r = Symbol(); return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) { n[t] = t })), 7 != f({}, t)[r] || "abcdefghijklmnopqrst" != i(f({}, n)).join("") })) ? function(t, n) { for (var r = a(t), o = arguments.length, f = 1, p = c.f, l = u.f; o > f;)
            for (var v, h = s(arguments[f++]), d = p ? i(h).concat(p(h)) : i(h), y = d.length, g = 0; y > g;) v = d[g++], e && !l.call(h, v) || (r[v] = h[v]); return r } : f }, function(t, n, r) { "use strict"; var e = r(39),
        o = r(153).find,
        i = r(83),
        c = !0; "find" in [] && Array(1).find((function() { c = !1 })), e({ target: "Array", proto: !0, forced: c }, { find: function(t) { return o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i("find") }, function(t, n, r) { var e = r(64),
        o = r(52),
        i = r(62),
        c = r(56),
        u = r(154),
        a = [].push,
        s = function(t) { var n = 1 == t,
                r = 2 == t,
                s = 3 == t,
                f = 4 == t,
                p = 6 == t,
                l = 5 == t || p; return function(v, h, d, y) { for (var g, m, x = i(v), b = o(x), w = e(h, d, 3), O = c(b.length), j = 0, S = y || u, _ = n ? S(v, O) : r ? S(v, 0) : void 0; O > j; j++)
                    if ((l || j in b) && (m = w(g = b[j], j, x), t))
                        if (n) _[j] = m;
                        else if (m) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return j;
                    case 2:
                        a.call(_, g) } else if (f) return !1;
                return p ? -1 : s || f ? f : _ } };
    t.exports = { forEach: s(0), map: s(1), filter: s(2), some: s(3), every: s(4), find: s(5), findIndex: s(6) } }, function(t, n, r) { var e = r(14),
        o = r(155),
        i = r(6)("species");
    t.exports = function(t, n) { var r; return o(t) && ("function" != typeof(r = t.constructor) || r !== Array && !o(r.prototype) ? e(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === n ? 0 : n) } }, function(t, n, r) { var e = r(22);
    t.exports = Array.isArray || function(t) { return "Array" == e(t) } }, function(t, n, r) { t.exports = r(157) }, function(t, n, r) { r(99), r(102), r(73); var e = r(65);
    t.exports = e.f("iterator") }, function(t, n, r) { var e = r(1),
        o = r(159),
        i = e["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i }, function(t, n, r) { var e = r(1),
        o = r(10);
    t.exports = function(t, n) { try { o(e, t, n) } catch (r) { e[t] = n } return n } }, function(t, n, r) { var e = r(68),
        o = r(44),
        i = function(t) { return function(n, r) { var i, c, u = String(o(n)),
                    a = e(r),
                    s = u.length; return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536 } };
    t.exports = { codeAt: i(!1), charAt: i(!0) } }, function(t, n, r) { var e = r(1),
        o = r(162),
        i = e.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o.call(i)) }, function(t, n, r) { var e = r(42);
    t.exports = e("native-function-to-string", Function.toString) }, function(t, n, r) { "use strict"; var e = r(105).IteratorPrototype,
        o = r(107),
        i = r(31),
        c = r(26),
        u = r(27),
        a = function() { return this };
    t.exports = function(t, n, r) { var s = n + " Iterator"; return t.prototype = o(e, { next: i(1, r) }), c(t, s, !1, !0), u[s] = a, t } }, function(t, n, r) { var e = r(4);
    t.exports = !e((function() {
        function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })) }, function(t, n, r) { var e = r(11),
        o = r(19),
        i = r(12),
        c = r(50);
    t.exports = e ? Object.defineProperties : function(t, n) { i(t); for (var r, e = c(n), u = e.length, a = 0; u > a;) o.f(t, r = e[a++], n[r]); return t } }, function(t, n, r) { var e = r(68),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, n) { var r = e(t); return r < 0 ? o(r + n, 0) : i(r, n) } }, function(t, n, r) { "use strict"; var e = r(72),
        o = {};
    o[r(0)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() { return "[object " + e(this) + "]" } : o.toString }, function(t, n, r) { var e = r(12),
        o = r(169);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, n = !1,
            r = {}; try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array } catch (t) {} return function(r, i) { return e(r), o(i), n ? t.call(r, i) : r.__proto__ = i, r } }() : void 0) }, function(t, n, r) { var e = r(7);
    t.exports = function(t) { if (!e(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, n, r) { "use strict"; var e = r(20),
        o = r(111),
        i = r(27),
        c = r(45),
        u = r(103),
        a = c.set,
        s = c.getterFor("Array Iterator");
    t.exports = u(Array, "Array", (function(t, n) { a(this, { type: "Array Iterator", target: e(t), index: 0, kind: n }) }), (function() { var t = s(this),
            n = t.target,
            r = t.kind,
            e = t.index++; return !n || e >= n.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: e, done: !1 } : "values" == r ? { value: n[e], done: !1 } : { value: [e, n[e]], done: !1 } }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(t, n) { t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, function(t, n, r) { t.exports = r(173) }, function(t, n, r) { r(174), r(113), r(177), r(179), r(180), r(181), r(182), r(99), r(183), r(184), r(185), r(186), r(187), r(188), r(189), r(190), r(191), r(192), r(193); var e = r(16);
    t.exports = e.Symbol }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(4),
        i = r(74),
        c = r(7),
        u = r(25),
        a = r(32),
        s = r(175),
        f = r(112),
        p = r(176),
        l = r(0),
        v = r(75),
        h = l("isConcatSpreadable"),
        d = v >= 51 || !o((function() { var t = []; return t[h] = !1, t.concat()[0] !== t })),
        y = p("concat"),
        g = function(t) { if (!c(t)) return !1; var n = t[h]; return void 0 !== n ? !!n : i(t) };
    e({ target: "Array", proto: !0, forced: !d || !y }, { concat: function(t) { var n, r, e, o, i, c = u(this),
                p = f(c, 0),
                l = 0; for (n = -1, e = arguments.length; n < e; n++)
                if (i = -1 === n ? c : arguments[n], g(i)) { if (l + (o = a(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded"); for (r = 0; r < o; r++, l++) r in i && s(p, l, i[r]) } else { if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    s(p, l++, i) }
            return p.length = l, p } }) }, function(t, n, r) { "use strict"; var e = r(43),
        o = r(19),
        i = r(31);
    t.exports = function(t, n, r) { var c = e(n);
        c in t ? o.f(t, c, i(0, r)) : t[c] = r } }, function(t, n, r) { var e = r(4),
        o = r(0),
        i = r(75),
        c = o("species");
    t.exports = function(t) { return i >= 51 || !e((function() { var n = []; return (n.constructor = {})[c] = function() { return { foo: 1 } }, 1 !== n[t](Boolean).foo })) } }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(1),
        i = r(23),
        c = r(11),
        u = r(101),
        a = r(4),
        s = r(9),
        f = r(74),
        p = r(7),
        l = r(12),
        v = r(25),
        h = r(20),
        d = r(43),
        y = r(31),
        g = r(107),
        m = r(50),
        x = r(114),
        b = r(178),
        w = r(115),
        O = r(69),
        j = r(19),
        S = r(48),
        _ = r(10),
        E = r(34),
        P = r(42),
        T = r(46),
        A = r(47),
        k = r(67),
        L = r(0),
        I = r(65),
        M = r(3),
        C = r(26),
        N = r(45),
        R = r(77).forEach,
        D = T("hidden"),
        F = L("toPrimitive"),
        W = N.set,
        G = N.getterFor("Symbol"),
        U = Object.prototype,
        B = o.Symbol,
        q = o.JSON,
        H = q && q.stringify,
        V = O.f,
        z = j.f,
        Y = b.f,
        J = S.f,
        K = P("symbols"),
        $ = P("op-symbols"),
        Q = P("string-to-symbol-registry"),
        X = P("symbol-to-string-registry"),
        Z = P("wks"),
        tt = o.QObject,
        nt = !tt || !tt.prototype || !tt.prototype.findChild,
        rt = c && a((function() { return 7 != g(z({}, "a", { get: function() { return z(this, "a", { value: 7 }).a } })).a })) ? function(t, n, r) { var e = V(U, n);
            e && delete U[n], z(t, n, r), e && t !== U && z(U, n, e) } : z,
        et = function(t, n) { var r = K[t] = g(B.prototype); return W(r, { type: "Symbol", tag: t, description: n }), c || (r.description = n), r },
        ot = u && "symbol" == typeof B.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return Object(t) instanceof B },
        it = function(t, n, r) { t === U && it($, n, r), l(t); var e = d(n, !0); return l(r), s(K, e) ? (r.enumerable ? (s(t, D) && t[D][e] && (t[D][e] = !1), r = g(r, { enumerable: y(0, !1) })) : (s(t, D) || z(t, D, y(1, {})), t[D][e] = !0), rt(t, e, r)) : z(t, e, r) },
        ct = function(t, n) { l(t); var r = h(n),
                e = m(r).concat(ft(r)); return R(e, (function(n) { c && !ut.call(r, n) || it(t, n, r[n]) })), t },
        ut = function(t) { var n = d(t, !0),
                r = J.call(this, n); return !(this === U && s(K, n) && !s($, n)) && (!(r || !s(this, n) || !s(K, n) || s(this, D) && this[D][n]) || r) },
        at = function(t, n) { var r = h(t),
                e = d(n, !0); if (r !== U || !s(K, e) || s($, e)) { var o = V(r, e); return !o || !s(K, e) || s(r, D) && r[D][e] || (o.enumerable = !0), o } },
        st = function(t) { var n = Y(h(t)),
                r = []; return R(n, (function(t) { s(K, t) || s(A, t) || r.push(t) })), r },
        ft = function(t) { var n = t === U,
                r = Y(n ? $ : h(t)),
                e = []; return R(r, (function(t) {!s(K, t) || n && !s(U, t) || e.push(K[t]) })), e };
    u || (E((B = function() { if (this instanceof B) throw TypeError("Symbol is not a constructor"); var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            n = k(t),
            r = function(t) { this === U && r.call($, t), s(this, D) && s(this[D], n) && (this[D][n] = !1), rt(this, n, y(1, t)) }; return c && nt && rt(U, n, { configurable: !0, set: r }), et(n, t) }).prototype, "toString", (function() { return G(this).tag })), S.f = ut, j.f = it, O.f = at, x.f = b.f = st, w.f = ft, c && (z(B.prototype, "description", { configurable: !0, get: function() { return G(this).description } }), i || E(U, "propertyIsEnumerable", ut, { unsafe: !0 })), I.f = function(t) { return et(L(t), t) }), e({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: B }), R(m(Z), (function(t) { M(t) })), e({ target: "Symbol", stat: !0, forced: !u }, { for: function(t) { var n = String(t); if (s(Q, n)) return Q[n]; var r = B(n); return Q[n] = r, X[r] = n, r }, keyFor: function(t) { if (!ot(t)) throw TypeError(t + " is not a symbol"); if (s(X, t)) return X[t] }, useSetter: function() { nt = !0 }, useSimple: function() { nt = !1 } }), e({ target: "Object", stat: !0, forced: !u, sham: !c }, { create: function(t, n) { return void 0 === n ? g(t) : ct(g(t), n) }, defineProperty: it, defineProperties: ct, getOwnPropertyDescriptor: at }), e({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: st, getOwnPropertySymbols: ft }), e({ target: "Object", stat: !0, forced: a((function() { w.f(1) })) }, { getOwnPropertySymbols: function(t) { return w.f(v(t)) } }), q && e({ target: "JSON", stat: !0, forced: !u || a((function() { var t = B(); return "[null]" != H([t]) || "{}" != H({ a: t }) || "{}" != H(Object(t)) })) }, { stringify: function(t) { for (var n, r, e = [t], o = 1; arguments.length > o;) e.push(arguments[o++]); if (r = n = e[1], (p(n) || void 0 !== t) && !ot(t)) return f(n) || (n = function(t, n) { if ("function" == typeof r && (n = r.call(this, t, n)), !ot(n)) return n }), e[1] = n, H.apply(q, e) } }), B.prototype[F] || _(B.prototype, F, B.prototype.valueOf), C(B, "Symbol"), A[D] = !0 }, function(t, n, r) { var e = r(20),
        o = r(114).f,
        i = {}.toString,
        c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return c && "[object Window]" == i.call(t) ? function(t) { try { return o(t) } catch (t) { return c.slice() } }(t) : o(e(t)) } }, function(t, n, r) { r(3)("asyncIterator") }, function(t, n) {}, function(t, n, r) { r(3)("hasInstance") }, function(t, n, r) { r(3)("isConcatSpreadable") }, function(t, n, r) { r(3)("match") }, function(t, n, r) { r(3)("matchAll") }, function(t, n, r) { r(3)("replace") }, function(t, n, r) { r(3)("search") }, function(t, n, r) { r(3)("species") }, function(t, n, r) { r(3)("split") }, function(t, n, r) { r(3)("toPrimitive") }, function(t, n, r) { r(3)("toStringTag") }, function(t, n, r) { r(3)("unscopables") }, function(t, n, r) { r(26)(Math, "Math", !0) }, function(t, n, r) { var e = r(1);
    r(26)(e.JSON, "JSON", !0) }, function(t, n, r) { t.exports = r(195) }, function(t, n, r) { r(113), r(102), r(73), r(196), r(206), r(207); var e = r(16);
    t.exports = e.Promise }, function(t, n, r) { "use strict"; var e, o, i, c, u = r(5),
        a = r(23),
        s = r(1),
        f = r(33),
        p = r(116),
        l = r(34),
        v = r(197),
        h = r(26),
        d = r(198),
        y = r(7),
        g = r(24),
        m = r(199),
        x = r(21),
        b = r(117),
        w = r(203),
        O = r(118),
        j = r(119).set,
        S = r(204),
        _ = r(120),
        E = r(205),
        P = r(78),
        T = r(121),
        A = r(45),
        k = r(104),
        L = r(0),
        I = r(75),
        M = L("species"),
        C = "Promise",
        N = A.get,
        R = A.set,
        D = A.getterFor(C),
        F = p,
        W = s.TypeError,
        G = s.document,
        U = s.process,
        B = f("fetch"),
        q = P.f,
        H = q,
        V = "process" == x(U),
        z = !!(G && G.createEvent && s.dispatchEvent),
        Y = k(C, (function() { if (66 === I) return !0; if (!V && "function" != typeof PromiseRejectionEvent) return !0; if (a && !F.prototype.finally) return !0; if (I >= 51 && /native code/.test(F)) return !1; var t = F.resolve(1),
                n = function(t) { t((function() {}), (function() {})) }; return (t.constructor = {})[M] = n, !(t.then((function() {})) instanceof n) })),
        J = Y || !w((function(t) { F.all(t).catch((function() {})) })),
        K = function(t) { var n; return !(!y(t) || "function" != typeof(n = t.then)) && n },
        $ = function(t, n, r) { if (!n.notified) { n.notified = !0; var e = n.reactions;
                S((function() { for (var o = n.value, i = 1 == n.state, c = 0; e.length > c;) { var u, a, s, f = e[c++],
                            p = i ? f.ok : f.fail,
                            l = f.resolve,
                            v = f.reject,
                            h = f.domain; try { p ? (i || (2 === n.rejection && tt(t, n), n.rejection = 1), !0 === p ? u = o : (h && h.enter(), u = p(o), h && (h.exit(), s = !0)), u === f.promise ? v(W("Promise-chain cycle")) : (a = K(u)) ? a.call(u, l, v) : l(u)) : v(o) } catch (t) { h && !s && h.exit(), v(t) } }
                    n.reactions = [], n.notified = !1, r && !n.rejection && X(t, n) })) } },
        Q = function(t, n, r) { var e, o;
            z ? ((e = G.createEvent("Event")).promise = n, e.reason = r, e.initEvent(t, !1, !0), s.dispatchEvent(e)) : e = { promise: n, reason: r }, (o = s["on" + t]) ? o(e) : "unhandledrejection" === t && E("Unhandled promise rejection", r) },
        X = function(t, n) { j.call(s, (function() { var r, e = n.value; if (Z(n) && (r = T((function() { V ? U.emit("unhandledRejection", e, t) : Q("unhandledrejection", t, e) })), n.rejection = V || Z(n) ? 2 : 1, r.error)) throw r.value })) },
        Z = function(t) { return 1 !== t.rejection && !t.parent },
        tt = function(t, n) { j.call(s, (function() { V ? U.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value) })) },
        nt = function(t, n, r, e) { return function(o) { t(n, r, o, e) } },
        rt = function(t, n, r, e) { n.done || (n.done = !0, e && (n = e), n.value = r, n.state = 2, $(t, n, !0)) },
        et = function(t, n, r, e) { if (!n.done) { n.done = !0, e && (n = e); try { if (t === r) throw W("Promise can't be resolved itself"); var o = K(r);
                    o ? S((function() { var e = { done: !1 }; try { o.call(r, nt(et, t, e, n), nt(rt, t, e, n)) } catch (r) { rt(t, e, r, n) } })) : (n.value = r, n.state = 1, $(t, n, !1)) } catch (r) { rt(t, { done: !1 }, r, n) } } };
    Y && (F = function(t) { m(this, F, C), g(t), e.call(this); var n = N(this); try { t(nt(et, this, n), nt(rt, this, n)) } catch (t) { rt(this, n, t) } }, (e = function(t) { R(this, { type: C, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = v(F.prototype, { then: function(t, n) { var r = D(this),
                e = q(O(this, F)); return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = V ? U.domain : void 0, r.parent = !0, r.reactions.push(e), 0 != r.state && $(this, r, !1), e.promise }, catch: function(t) { return this.then(void 0, t) } }), o = function() { var t = new e,
            n = N(t);
        this.promise = t, this.resolve = nt(et, t, n), this.reject = nt(rt, t, n) }, P.f = q = function(t) { return t === F || t === i ? new o(t) : H(t) }, a || "function" != typeof p || (c = p.prototype.then, l(p.prototype, "then", (function(t, n) { var r = this; return new F((function(t, n) { c.call(r, t, n) })).then(t, n) }), { unsafe: !0 }), "function" == typeof B && u({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(t) { return _(F, B.apply(s, arguments)) } }))), u({ global: !0, wrap: !0, forced: Y }, { Promise: F }), h(F, C, !1, !0), d(C), i = f(C), u({ target: C, stat: !0, forced: Y }, { reject: function(t) { var n = q(this); return n.reject.call(void 0, t), n.promise } }), u({ target: C, stat: !0, forced: a || Y }, { resolve: function(t) { return _(a && this === i ? F : this, t) } }), u({ target: C, stat: !0, forced: J }, { all: function(t) { var n = this,
                r = q(n),
                e = r.resolve,
                o = r.reject,
                i = T((function() { var r = g(n.resolve),
                        i = [],
                        c = 0,
                        u = 1;
                    b(t, (function(t) { var a = c++,
                            s = !1;
                        i.push(void 0), u++, r.call(n, t).then((function(t) { s || (s = !0, i[a] = t, --u || e(i)) }), o) })), --u || e(i) })); return i.error && o(i.value), r.promise }, race: function(t) { var n = this,
                r = q(n),
                e = r.reject,
                o = T((function() { var o = g(n.resolve);
                    b(t, (function(t) { o.call(n, t).then(r.resolve, e) })) })); return o.error && e(o.value), r.promise } }) }, function(t, n, r) { var e = r(34);
    t.exports = function(t, n, r) { for (var o in n) r && r.unsafe && t[o] ? t[o] = n[o] : e(t, o, n[o], r); return t } }, function(t, n, r) { "use strict"; var e = r(33),
        o = r(19),
        i = r(0),
        c = r(11),
        u = i("species");
    t.exports = function(t) { var n = e(t),
            r = o.f;
        c && n && !n[u] && r(n, u, { configurable: !0, get: function() { return this } }) } }, function(t, n) { t.exports = function(t, n, r) { if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t } }, function(t, n, r) { var e = r(0),
        o = r(27),
        i = e("iterator"),
        c = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (o.Array === t || c[i] === t) } }, function(t, n, r) { var e = r(72),
        o = r(27),
        i = r(0)("iterator");
    t.exports = function(t) { if (null != t) return t[i] || t["@@iterator"] || o[e(t)] } }, function(t, n, r) { var e = r(12);
    t.exports = function(t, n, r, o) { try { return o ? n(e(r)[0], r[1]) : n(r) } catch (n) { var i = t.return; throw void 0 !== i && e(i.call(t)), n } } }, function(t, n, r) { var e = r(0)("iterator"),
        o = !1; try { var i = 0,
            c = { next: function() { return { done: !!i++ } }, return: function() { o = !0 } };
        c[e] = function() { return this }, Array.from(c, (function() { throw 2 })) } catch (t) {}
    t.exports = function(t, n) { if (!n && !o) return !1; var r = !1; try { var i = {};
            i[e] = function() { return { next: function() { return { done: r = !0 } } } }, t(i) } catch (t) {} return r } }, function(t, n, r) { var e, o, i, c, u, a, s, f, p = r(1),
        l = r(69).f,
        v = r(21),
        h = r(119).set,
        d = r(76),
        y = p.MutationObserver || p.WebKitMutationObserver,
        g = p.process,
        m = p.Promise,
        x = "process" == v(g),
        b = l(p, "queueMicrotask"),
        w = b && b.value;
    w || (e = function() { var t, n; for (x && (t = g.domain) && t.exit(); o;) { n = o.fn, o = o.next; try { n() } catch (t) { throw o ? c() : i = void 0, t } }
        i = void 0, t && t.enter() }, x ? c = function() { g.nextTick(e) } : y && !/(iphone|ipod|ipad).*applewebkit/i.test(d) ? (u = !0, a = document.createTextNode(""), new y(e).observe(a, { characterData: !0 }), c = function() { a.data = u = !u }) : m && m.resolve ? (s = m.resolve(void 0), f = s.then, c = function() { f.call(s, e) }) : c = function() { h.call(p, e) }), t.exports = w || function(t) { var n = { fn: t, next: void 0 };
        i && (i.next = n), o || (o = n, c()), i = n } }, function(t, n, r) { var e = r(1);
    t.exports = function(t, n) { var r = e.console;
        r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, n)) } }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(24),
        i = r(78),
        c = r(121),
        u = r(117);
    e({ target: "Promise", stat: !0 }, { allSettled: function(t) { var n = this,
                r = i.f(n),
                e = r.resolve,
                a = r.reject,
                s = c((function() { var r = o(n.resolve),
                        i = [],
                        c = 0,
                        a = 1;
                    u(t, (function(t) { var o = c++,
                            u = !1;
                        i.push(void 0), a++, r.call(n, t).then((function(t) { u || (u = !0, i[o] = { status: "fulfilled", value: t }, --a || e(i)) }), (function(t) { u || (u = !0, i[o] = { status: "rejected", reason: t }, --a || e(i)) })) })), --a || e(i) })); return s.error && a(s.value), r.promise } }) }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(23),
        i = r(116),
        c = r(33),
        u = r(118),
        a = r(120),
        s = r(34);
    e({ target: "Promise", proto: !0, real: !0 }, { finally: function(t) { var n = u(this, c("Promise")),
                r = "function" == typeof t; return this.then(r ? function(r) { return a(n, t()).then((function() { return r })) } : t, r ? function(r) { return a(n, t()).then((function() { throw r })) } : t) } }), o || "function" != typeof i || i.prototype.finally || s(i.prototype, "finally", c("Promise").prototype.finally) }, function(t, n, r) { "use strict"; var e, o, i, c, u = r(39),
        a = r(38),
        s = r(2),
        f = r(29),
        p = r(209),
        l = r(40),
        v = r(210),
        h = r(63),
        d = r(211),
        y = r(14),
        g = r(41),
        m = r(212),
        x = r(22),
        b = r(213),
        w = r(218),
        O = r(219),
        j = r(122).set,
        S = r(220),
        _ = r(221),
        E = r(222),
        P = r(123),
        T = r(223),
        A = r(60),
        k = r(96),
        L = r(6),
        I = r(224),
        M = L("species"),
        C = "Promise",
        N = A.get,
        R = A.set,
        D = A.getterFor(C),
        F = p,
        W = s.TypeError,
        G = s.document,
        U = s.process,
        B = f("fetch"),
        q = P.f,
        H = q,
        V = "process" == x(U),
        z = !!(G && G.createEvent && s.dispatchEvent),
        Y = k(C, (function() { if (66 === I) return !0; if (!V && "function" != typeof PromiseRejectionEvent) return !0; if (a && !F.prototype.finally) return !0; if (I >= 51 && /native code/.test(F)) return !1; var t = F.resolve(1),
                n = function(t) { t((function() {}), (function() {})) }; return (t.constructor = {})[M] = n, !(t.then((function() {})) instanceof n) })),
        J = Y || !w((function(t) { F.all(t).catch((function() {})) })),
        K = function(t) { var n; return !(!y(t) || "function" != typeof(n = t.then)) && n },
        $ = function(t, n, r) { if (!n.notified) { n.notified = !0; var e = n.reactions;
                S((function() { for (var o = n.value, i = 1 == n.state, c = 0; e.length > c;) { var u, a, s, f = e[c++],
                            p = i ? f.ok : f.fail,
                            l = f.resolve,
                            v = f.reject,
                            h = f.domain; try { p ? (i || (2 === n.rejection && tt(t, n), n.rejection = 1), !0 === p ? u = o : (h && h.enter(), u = p(o), h && (h.exit(), s = !0)), u === f.promise ? v(W("Promise-chain cycle")) : (a = K(u)) ? a.call(u, l, v) : l(u)) : v(o) } catch (t) { h && !s && h.exit(), v(t) } }
                    n.reactions = [], n.notified = !1, r && !n.rejection && X(t, n) })) } },
        Q = function(t, n, r) { var e, o;
            z ? ((e = G.createEvent("Event")).promise = n, e.reason = r, e.initEvent(t, !1, !0), s.dispatchEvent(e)) : e = { promise: n, reason: r }, (o = s["on" + t]) ? o(e) : "unhandledrejection" === t && E("Unhandled promise rejection", r) },
        X = function(t, n) { j.call(s, (function() { var r, e = n.value; if (Z(n) && (r = T((function() { V ? U.emit("unhandledRejection", e, t) : Q("unhandledrejection", t, e) })), n.rejection = V || Z(n) ? 2 : 1, r.error)) throw r.value })) },
        Z = function(t) { return 1 !== t.rejection && !t.parent },
        tt = function(t, n) { j.call(s, (function() { V ? U.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value) })) },
        nt = function(t, n, r, e) { return function(o) { t(n, r, o, e) } },
        rt = function(t, n, r, e) { n.done || (n.done = !0, e && (n = e), n.value = r, n.state = 2, $(t, n, !0)) },
        et = function(t, n, r, e) { if (!n.done) { n.done = !0, e && (n = e); try { if (t === r) throw W("Promise can't be resolved itself"); var o = K(r);
                    o ? S((function() { var e = { done: !1 }; try { o.call(r, nt(et, t, e, n), nt(rt, t, e, n)) } catch (r) { rt(t, e, r, n) } })) : (n.value = r, n.state = 1, $(t, n, !1)) } catch (r) { rt(t, { done: !1 }, r, n) } } };
    Y && (F = function(t) { m(this, F, C), g(t), e.call(this); var n = N(this); try { t(nt(et, this, n), nt(rt, this, n)) } catch (t) { rt(this, n, t) } }, (e = function(t) { R(this, { type: C, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = v(F.prototype, { then: function(t, n) { var r = D(this),
                e = q(O(this, F)); return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = V ? U.domain : void 0, r.parent = !0, r.reactions.push(e), 0 != r.state && $(this, r, !1), e.promise }, catch: function(t) { return this.then(void 0, t) } }), o = function() { var t = new e,
            n = N(t);
        this.promise = t, this.resolve = nt(et, t, n), this.reject = nt(rt, t, n) }, P.f = q = function(t) { return t === F || t === i ? new o(t) : H(t) }, a || "function" != typeof p || (c = p.prototype.then, l(p.prototype, "then", (function(t, n) { var r = this; return new F((function(t, n) { c.call(r, t, n) })).then(t, n) }), { unsafe: !0 }), "function" == typeof B && u({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(t) { return _(F, B.apply(s, arguments)) } }))), u({ global: !0, wrap: !0, forced: Y }, { Promise: F }), h(F, C, !1, !0), d(C), i = f(C), u({ target: C, stat: !0, forced: Y }, { reject: function(t) { var n = q(this); return n.reject.call(void 0, t), n.promise } }), u({ target: C, stat: !0, forced: a || Y }, { resolve: function(t) { return _(a && this === i ? F : this, t) } }), u({ target: C, stat: !0, forced: J }, { all: function(t) { var n = this,
                r = q(n),
                e = r.resolve,
                o = r.reject,
                i = T((function() { var r = g(n.resolve),
                        i = [],
                        c = 0,
                        u = 1;
                    b(t, (function(t) { var a = c++,
                            s = !1;
                        i.push(void 0), u++, r.call(n, t).then((function(t) { s || (s = !0, i[a] = t, --u || e(i)) }), o) })), --u || e(i) })); return i.error && o(i.value), r.promise }, race: function(t) { var n = this,
                r = q(n),
                e = r.reject,
                o = T((function() { var o = g(n.resolve);
                    b(t, (function(t) { o.call(n, t).then(r.resolve, e) })) })); return o.error && e(o.value), r.promise } }) }, function(t, n, r) { var e = r(2);
    t.exports = e.Promise }, function(t, n, r) { var e = r(40);
    t.exports = function(t, n, r) { for (var o in n) e(t, o, n[o], r); return t } }, function(t, n, r) { "use strict"; var e = r(29),
        o = r(28),
        i = r(6),
        c = r(18),
        u = i("species");
    t.exports = function(t) { var n = e(t),
            r = o.f;
        c && n && !n[u] && r(n, u, { configurable: !0, get: function() { return this } }) } }, function(t, n) { t.exports = function(t, n, r) { if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t } }, function(t, n, r) { var e = r(8),
        o = r(214),
        i = r(56),
        c = r(64),
        u = r(215),
        a = r(217),
        s = function(t, n) { this.stopped = t, this.result = n };
    (t.exports = function(t, n, r, f, p) { var l, v, h, d, y, g, m, x = c(n, r, f ? 2 : 1); if (p) l = t;
        else { if ("function" != typeof(v = u(t))) throw TypeError("Target is not iterable"); if (o(v)) { for (h = 0, d = i(t.length); d > h; h++)
                    if ((y = f ? x(e(m = t[h])[0], m[1]) : x(t[h])) && y instanceof s) return y;
                return new s(!1) }
            l = v.call(t) } for (g = l.next; !(m = g.call(l)).done;)
            if ("object" == typeof(y = a(l, x, m.value, f)) && y && y instanceof s) return y;
        return new s(!1) }).stop = function(t) { return new s(!0, t) } }, function(t, n, r) { var e = r(6),
        o = r(30),
        i = e("iterator"),
        c = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (o.Array === t || c[i] === t) } }, function(t, n, r) { var e = r(216),
        o = r(30),
        i = r(6)("iterator");
    t.exports = function(t) { if (null != t) return t[i] || t["@@iterator"] || o[e(t)] } }, function(t, n, r) { var e = r(22),
        o = r(6)("toStringTag"),
        i = "Arguments" == e(function() { return arguments }());
    t.exports = function(t) { var n, r, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, n) { try { return t[n] } catch (t) {} }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function(t, n, r) { var e = r(8);
    t.exports = function(t, n, r, o) { try { return o ? n(e(r)[0], r[1]) : n(r) } catch (n) { var i = t.return; throw void 0 !== i && e(i.call(t)), n } } }, function(t, n, r) { var e = r(6)("iterator"),
        o = !1; try { var i = 0,
            c = { next: function() { return { done: !!i++ } }, return: function() { o = !0 } };
        c[e] = function() { return this }, Array.from(c, (function() { throw 2 })) } catch (t) {}
    t.exports = function(t, n) { if (!n && !o) return !1; var r = !1; try { var i = {};
            i[e] = function() { return { next: function() { return { done: r = !0 } } } }, t(i) } catch (t) {} return r } }, function(t, n, r) { var e = r(8),
        o = r(41),
        i = r(6)("species");
    t.exports = function(t, n) { var r, c = e(t).constructor; return void 0 === c || null == (r = e(c)[i]) ? n : o(r) } }, function(t, n, r) { var e, o, i, c, u, a, s, f, p = r(2),
        l = r(61).f,
        v = r(22),
        h = r(122).set,
        d = r(79),
        y = p.MutationObserver || p.WebKitMutationObserver,
        g = p.process,
        m = p.Promise,
        x = "process" == v(g),
        b = l(p, "queueMicrotask"),
        w = b && b.value;
    w || (e = function() { var t, n; for (x && (t = g.domain) && t.exit(); o;) { n = o.fn, o = o.next; try { n() } catch (t) { throw o ? c() : i = void 0, t } }
        i = void 0, t && t.enter() }, x ? c = function() { g.nextTick(e) } : y && !/(iphone|ipod|ipad).*applewebkit/i.test(d) ? (u = !0, a = document.createTextNode(""), new y(e).observe(a, { characterData: !0 }), c = function() { a.data = u = !u }) : m && m.resolve ? (s = m.resolve(void 0), f = s.then, c = function() { f.call(s, e) }) : c = function() { h.call(p, e) }), t.exports = w || function(t) { var n = { fn: t, next: void 0 };
        i && (i.next = n), o || (o = n, c()), i = n } }, function(t, n, r) { var e = r(8),
        o = r(14),
        i = r(123);
    t.exports = function(t, n) { if (e(t), o(n) && n.constructor === t) return n; var r = i.f(t); return (0, r.resolve)(n), r.promise } }, function(t, n, r) { var e = r(2);
    t.exports = function(t, n) { var r = e.console;
        r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, n)) } }, function(t, n) { t.exports = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function(t, n, r) { var e, o, i = r(2),
        c = r(79),
        u = i.process,
        a = u && u.versions,
        s = a && a.v8;
    s ? o = (e = s.split("."))[0] + e[1] : c && (!(e = c.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = c.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o }, function(t, n, r) { t.exports = r(226) }, function(t, n, r) { var e = r(227),
        o = String.prototype;
    t.exports = function(t) { var n = t.startsWith; return "string" == typeof t || t === o || t instanceof String && n === o.startsWith ? e : n } }, function(t, n, r) { r(228); var e = r(35);
    t.exports = e("String").startsWith }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(32),
        i = r(229),
        c = r(44),
        u = r(231),
        a = "".startsWith,
        s = Math.min;
    e({ target: "String", proto: !0, forced: !u("startsWith") }, { startsWith: function(t) { var n = String(c(this));
            i(t); var r = o(s(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                e = String(t); return a ? a.call(n, e, r) : n.slice(r, r + e.length) === e } }) }, function(t, n, r) { var e = r(230);
    t.exports = function(t) { if (e(t)) throw TypeError("The method doesn't accept regular expressions"); return t } }, function(t, n, r) { var e = r(7),
        o = r(21),
        i = r(0)("match");
    t.exports = function(t) { var n; return e(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t)) } }, function(t, n, r) { var e = r(0)("match");
    t.exports = function(t) { var n = /./; try { "/./" [t](n) } catch (r) { try { return n[e] = !1, "/./" [t](n) } catch (t) {} } return !1 } }, function(t, n, r) { t.exports = r(233) }, function(t, n, r) { var e = r(234),
        o = Array.prototype;
    t.exports = function(t) { var n = t.find; return t === o || t instanceof Array && n === o.find ? e : n } }, function(t, n, r) { r(235); var e = r(35);
    t.exports = e("Array").find }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(77).find,
        i = r(111),
        c = !0; "find" in [] && Array(1).find((function() { c = !1 })), e({ target: "Array", proto: !0, forced: c }, { find: function(t) { return o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i("find") }, function(t, n, r) { t.exports = r(237) }, function(t, n, r) { var e = r(238),
        o = Array.prototype;
    t.exports = function(t) { var n = t.sort; return t === o || t instanceof Array && n === o.sort ? e : n } }, function(t, n, r) { r(239); var e = r(35);
    t.exports = e("Array").sort }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(24),
        i = r(25),
        c = r(4),
        u = r(80),
        a = [].sort,
        s = [1, 2, 3],
        f = c((function() { s.sort(void 0) })),
        p = c((function() { s.sort(null) })),
        l = u("sort");
    e({ target: "Array", proto: !0, forced: f || !p || l }, { sort: function(t) { return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t)) } }) }, function(t, n, r) { t.exports = r(241) }, function(t, n, r) { r(242); var e = r(16);
    t.exports = e.Object.entries }, function(t, n, r) { var e = r(5),
        o = r(243).entries;
    e({ target: "Object", stat: !0 }, { entries: function(t) { return o(t) } }) }, function(t, n, r) { var e = r(11),
        o = r(50),
        i = r(20),
        c = r(48).f,
        u = function(t) { return function(n) { for (var r, u = i(n), a = o(u), s = a.length, f = 0, p = []; s > f;) r = a[f++], e && !c.call(u, r) || p.push(t ? [r, u[r]] : u[r]); return p } };
    t.exports = { entries: u(!0), values: u(!1) } }, function(t, n, r) { r(73); var e = r(245),
        o = r(72),
        i = Array.prototype,
        c = { DOMTokenList: !0, NodeList: !0 };
    t.exports = function(t) { var n = t.forEach; return t === i || t instanceof Array && n === i.forEach || c.hasOwnProperty(o(t)) ? e : n } }, function(t, n, r) { t.exports = r(246) }, function(t, n, r) { r(247); var e = r(35);
    t.exports = e("Array").forEach }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(248);
    e({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o }) }, function(t, n, r) { "use strict"; var e = r(77).forEach,
        o = r(80);
    t.exports = o("forEach") ? function(t) { return e(this, t, arguments.length > 1 ? arguments[1] : void 0) } : [].forEach }, function(t, n, r) { t.exports = r(250) }, function(t, n, r) { var e = r(251),
        o = Array.prototype;
    t.exports = function(t) { var n = t.indexOf; return t === o || t instanceof Array && n === o.indexOf ? e : n } }, function(t, n, r) { r(252); var e = r(35);
    t.exports = e("Array").indexOf }, function(t, n, r) { "use strict"; var e = r(5),
        o = r(109).indexOf,
        i = r(80),
        c = [].indexOf,
        u = !!c && 1 / [1].indexOf(1, -0) < 0,
        a = i("indexOf");
    e({ target: "Array", proto: !0, forced: u || a }, { indexOf: function(t) { return u ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, n, r) { t.exports = r(254) }, function(t, n, r) { r(255); var e = r(16);
    t.exports = e.Object.assign }, function(t, n, r) { var e = r(5),
        o = r(256);
    e({ target: "Object", stat: !0, forced: Object.assign !== o }, { assign: o }) }, function(t, n, r) { "use strict"; var e = r(11),
        o = r(4),
        i = r(50),
        c = r(115),
        u = r(48),
        a = r(25),
        s = r(70),
        f = Object.assign;
    t.exports = !f || o((function() { var t = {},
            n = {},
            r = Symbol(); return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) { n[t] = t })), 7 != f({}, t)[r] || "abcdefghijklmnopqrst" != i(f({}, n)).join("") })) ? function(t, n) { for (var r = a(t), o = arguments.length, f = 1, p = c.f, l = u.f; o > f;)
            for (var v, h = s(arguments[f++]), d = p ? i(h).concat(p(h)) : i(h), y = d.length, g = 0; y > g;) v = d[g++], e && !l.call(h, v) || (r[v] = h[v]); return r } : f }, function(t, n, r) { "use strict";
    r.r(n); var e = r(124),
        o = r.n(e),
        i = r(125),
        c = r.n(i),
        u = r(81),
        a = r.n(u),
        s = function(t, n) { return n = n || {}, new Promise((function(r, e) { var o = new XMLHttpRequest,
                    i = [],
                    c = [],
                    u = {},
                    a = function() { return { ok: 2 == (o.status / 100 | 0), statusText: o.statusText, status: o.status, url: o.responseURL, text: function() { return Promise.resolve(o.responseText) }, json: function() { return Promise.resolve(JSON.parse(o.responseText)) }, blob: function() { return Promise.resolve(new Blob([o.response])) }, clone: a, headers: { keys: function() { return i }, entries: function() { return c }, get: function(t) { return u[t.toLowerCase()] }, has: function(t) { return t.toLowerCase() in u } } } }; for (var s in o.open(n.method || "get", t, !0), o.onload = function() { o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, n, r) { i.push(n = n.toLowerCase()), c.push([n, r]), u[n] = u[n] ? u[n] + "," + r : r })), r(a()) }, o.onerror = e, o.withCredentials = "include" == n.credentials, n.headers) o.setRequestHeader(s, n.headers[s]);
                o.send(n.body || null) })) },
        f = (r(130), r(131), r(51)),
        p = r.n(f),
        l = (r(132), { dev: "assistant-chat-d.watsonplatform.net", staging: "assistant-chat-s.watsonplatform.net", "us-south": "assistant-chat-us-south.watsonplatform.net", "us-east": "assistant-chat-us-east.watsonplatform.net", "jp-tok": "assistant-chat-jp-tok.watsonplatform.net", "au-syd": "assistant-chat-au-syd.watsonplatform.net", "eu-gb": "assistant-chat-eu-gb.watsonplatform.net", "eu-de": "assistant-chat-eu-de.watsonplatform.net", "kr-seo": "assistant-chat-kr-seo.watsonplatform.net" }),
        v = { dev: "web-chat.assistant.dev.watson.cloud.ibm.com", staging: "web-chat.global.assistant.test.watson.appdomain.cloud", "us-south": "web-chat.global.assistant.watson.appdomain.cloud", "us-east": "web-chat.global.assistant.watson.appdomain.cloud", "jp-tok": "web-chat.global.assistant.watson.appdomain.cloud", "au-syd": "web-chat.global.assistant.watson.appdomain.cloud", "eu-gb": "web-chat.global.assistant.watson.appdomain.cloud", "eu-de": "web-chat.global.assistant.watson.appdomain.cloud", "kr-seo": "web-chat.global.assistant.watson.appdomain.cloud" }; var h;! function(t) { t.PROCESS_NOT_STARTED = "not_started", t.PROCESS_ONGOING = "ongoing", t.PROCESS_COMPLETED = "completed", t.PROCESS_CANCELLED = "cancelled" }(h || (h = {})); var d, y, g = "[Watson Assistant Chat]";! function(t) { t.WELCOME_NODE_BEFORE_ELEMENT = "welcomeNodeBeforeElement", t.HEADER_BOTTOM_ELEMENT = "headerBottomElement" }(d || (d = {})),
    function(t) { t.BOT = "bot", t.AGENT = "agent", t.THREAD = "thread" }(y || (y = {})); var m = function() { for (var t = 0, n = 0, r = arguments.length; n < r; n++) t += arguments[n].length; var e = Array(t),
            o = 0; for (n = 0; n < r; n++)
            for (var i = arguments[n], c = 0, u = i.length; c < u; c++, o++) e[o] = i[c]; return e };

    function x(t) { for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        console.error.apply(console, m([g + " " + t], n)) } var b = { openChatByDefault: !1, showLauncher: !0, carbonTheme: "g10", __ibm__: { isTrackingEnabled: !0, isPreviewLink: !1, isProcessEnabled: !1 } };

    function w(t) { return "https://" + l[t.region] + "/" + (t.subscriptionID || "public") } var O = r(126),
        j = r.n(O),
        S = r(127),
        _ = r.n(S),
        E = r(128),
        P = r.n(E),
        T = r(129),
        A = r.n(T),
        k = "latest";

    function L(t, n) { if (P()(n).call(n, (function(t, n) { return -A()(t, n) })), t === k) return n[0]; var r = t + ".",
            e = _()(n).call(n, (function(n) { return n === t || j()(n).call(n, r) })); return "1" !== t || e ? e : L("0", n) }
    r.d(n, "default", (function() { return D })); var I = function(t, n, r, e) { return new(r || (r = a.a))((function(o, i) {
                function c(t) { try { a(e.next(t)) } catch (t) { i(t) } }

                function u(t) { try { a(e.throw(t)) } catch (t) { i(t) } }

                function a(t) { var n;
                    t.done ? o(t.value) : (n = t.value, n instanceof r ? n : new r((function(t) { t(n) }))).then(c, u) }
                a((e = e.apply(t, n || [])).next()) })) },
        M = function(t, n) { var r, e, i, u, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return u = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof c.a && (u[o.a] = function() { return this }), u;

            function s(o) { return function(c) { return function(o) { if (r) throw new TypeError("Generator is already executing."); for (; a;) try { if (r = 1, e && (i = 2 & o[0] ? e.return : o[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, o[1])).done) return i; switch (e = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o; break;
                                case 4:
                                    return a.label++, { value: o[1], done: !1 };
                                case 5:
                                    a.label++, e = o[1], o = [0]; continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop(); continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) { a = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break } if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                                    i[2] && a.ops.pop(), a.trys.pop(); continue }
                            o = n.call(t, a) } catch (t) { o = [6, t], e = 0 } finally { r = i = 0 }
                        if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, c]) } } };
    window.Promise || r(208); var C = { headers: { "Content-Type": "application/json", accept: "application/json" } };

    function N(t, n) { var r, e, o, i, c; return I(this, void 0, void 0, (function() { var u, a, f, p, l, h; return M(this, (function(d) { switch (d.label) {
                    case 0:
                        return u = (null === (r = t.__ibm__) || void 0 === r ? void 0 : r.versionsURL) ? t.__ibm__.versionsURL : "https://" + v[t.region] + "/versions.json", [4, s(u)];
                    case 1:
                        return [4, d.sent().json()];
                    case 2:
                        return a = d.sent(), f = a.versions, p = (null === (o = null === (e = t) || void 0 === e ? void 0 : e.__ibm__) || void 0 === o ? void 0 : o.versionToUse) || n.version_to_use, (l = L(p, f)) || (h = (null === (c = null === (i = t) || void 0 === i ? void 0 : i.__ibm__) || void 0 === c ? void 0 : c.versionToUse) ? "public" : "remote", l = L(k, f), x('Version "' + p + '" of the chat widget was requested by the ' + h + " configuration but there is no matching version. The available versions are " + f + ". We are using the latest version " + l + " instead. Please check your configuration.")), [2, l] } })) })) }

    function R(t) { var n; return I(this, void 0, void 0, (function() { var r, e, o; return M(this, (function(i) { switch (i.label) {
                    case 0:
                        return (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.isPreviewLink) ? [2, { version_to_use: k, botName: "Watson Assistant" }] : (r = function(t) { var n, r; if (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.customConfigURL) return t.__ibm__.customConfigURL; if (null === (r = t.__ibm__) || void 0 === r ? void 0 : r.configURL) return "" + t.__ibm__.configURL.replace(/\/?$/, "/") + t.integrationID; var e = w(t),
                                o = e + "/chat/config/" + t.integrationID; return -1 === p()(e).call(e, "cloud.ibm.com") && (o = o.replace("/chat/config/", "/config/")), o }(t), [4, s(r, C)]);
                    case 1:
                        if (404 === (e = i.sent()).status) throw new Error(g + ' The configuration for integrationID "' + t.integrationID + '" was not found. The chat widget will not be displayed.'); return [4, e.json()];
                    case 2:
                        return (o = i.sent()).version_to_use || (o.version_to_use = k), o.botName = o.botName || "Watson Assistant", [2, o] } })) })) }

    function D(t) { var n; return I(this, void 0, void 0, (function() { var r, e, o, i; return M(this, (function(c) { switch (c.label) {
                    case 0:
                        return "https:" !== document.location.protocol && console.warn(g + ' Your page is not running with "https"; your data will not be sent  securely.'),
                            function(t) { var n, r = t.integrationID,
                                    e = t.region,
                                    o = t.__ibm__,
                                    i = void 0 === o ? b.__ibm__ : o; if (!i.customMessageURL && !i.postURL) { if ("string" != typeof(n = r) || null === n.match(/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i)) throw new Error(g + ' The value of integrationID "' + r + '" is not a valid ID.'); if (!e && !i.isPreviewLink) throw new Error(g + " You failed to provide a region in your config object."); if (!l[e] && !i.isPreviewLink) throw new Error(g + ' The region "' + e + '" you provided in your config object is not a valid region.') } }(t), r = t.element, delete t.element, [4, R(t)];
                    case 1:
                        return e = c.sent(), [4, N(t, e)];
                    case 2:
                        return o = c.sent(), "https://web-chat.global.assistant.watson.appdomain.cloud", i = (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.cdnEndpoint) || "https://web-chat.global.assistant.watson.appdomain.cloud", [2, new a.a((function(n, c) { var u = document.createElement("script");
                            u.src = i + "/" + o + "/WatsonAssistantChat.js", u.type = "text/javascript", u.async = !0, u.onload = function() { new window.WatsonAssistantChat(t, e, r).start().then(n, c) }, document.getElementsByTagName("head")[0].appendChild(u) }))] } })) })) } }]).default;