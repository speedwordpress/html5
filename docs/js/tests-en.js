/*!
 * PageSpeed Optimization
 * Copyright (c) 2016 Optimalisatie.nl / PageSpeed.pro
 */
! function () {
    function a(a) {
        v.set(a)
    }

    function b(a) {
        if (100 != a.get(Vb) && t(la(a, Ib)) % 1e4 >= 100 * ma(a, Vb)) throw "abort"
    }

    function c(a) {
        if (T(la(a, Lb))) throw "abort"
    }

    function d() {
        var a = R.location.protocol;
        if ("http:" != a && "https:" != a) throw "abort"
    }

    function e(b) {
        try {
            Q.navigator.sendBeacon ? a(42) : Q.XMLHttpRequest && "withCredentials" in new Q.XMLHttpRequest && a(40)
        } catch (a) {}
        b.set(qb, x(b), !0), b.set(Fa, ma(b, Fa) + 1);
        var c = [];
        ja.map(function (a, d) {
            if (d.F) {
                var e = b.get(a);
                void 0 != e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), c.push(d.F + "=" + G("" + e)))
            }
        }), c.push("z=" + ha()), b.set(Ca, c.join("&"), !0)
    }

    function f(a) {
        var b = la(a, Yb) || Z() + "/collect",
            c = la(a, Ea);
        if (!c && a.get(Da) && (c = "beacon"), c) {
            var d = la(a, Ca),
                e = a.get(Ba),
                e = e || F;
            "image" == c ? aa(b, d, e) : "xhr" == c && ba(b, d, e) || "beacon" == c && ca(b, d, e) || _(b, d, e)
        } else _(b, la(a, Ca), a.get(Ba));
        b = a.get(Lb), b = ea(b), c = b.hitcount, b.hitcount = c ? c + 1 : 1, b = a.get(Lb), delete ea(b).pending_experiments, a.set(Ba, F, !0)
    }

    function g(a) {
        (Q.gaData = Q.gaData || {}).expId && a.set(hb, (Q.gaData = Q.gaData || {}).expId), (Q.gaData = Q.gaData || {}).expVar && a.set(ib, (Q.gaData = Q.gaData || {}).expVar);
        var b, c = a.get(Lb);
        if (c = ea(c).pending_experiments) {
            var d = [];
            for (b in c) c.hasOwnProperty(b) && c[b] && d.push(encodeURIComponent(b) + "." + encodeURIComponent(c[b]));
            b = d.join("!")
        } else b = void 0;
        b && a.set(jb, b, !0)
    }

    function h() {
        if (Q.navigator && "preview" == Q.navigator.loadPurpose) throw "abort"
    }

    function i(a) {
        var b = Q.gaDevIds;
        A(b) && 0 != b.length && a.set("&did", b.join(","), !0)
    }

    function j(a) {
        if (!a.get(Lb)) throw "abort"
    }

    function k(b) {
        var c = ma(b, nb);
        500 <= c && a(15);
        var d = la(b, Aa);
        if ("transaction" != d && "item" != d) {
            var d = ma(b, pb),
                e = (new Date).getTime(),
                f = ma(b, ob);
            if (0 == f && b.set(ob, e), f = Math.round(2 * (e - f) / 1e3), 0 < f && (d = Math.min(d + f, 20), b.set(ob, e)), 0 >= d) throw "abort";
            b.set(pb, --d)
        }
        b.set(nb, ++c)
    }

    function l(b, c, d, e) {
        c[b] = function () {
            try {
                return e && a(e), d.apply(this, arguments)
            } catch (a) {
                throw da("exc", b, a && a.name), a
            }
        }
    }

    function m() {
        var a, b, c;
        if ((c = (c = Q.navigator) ? c.plugins : null) && c.length)
            for (var d = 0; d < c.length && !b; d++) {
                var e = c[d]; - 1 < e.name.indexOf("Shockwave Flash") && (b = e.description)
            }
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
        } catch (a) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
        } catch (a) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
        } catch (a) {}
        return b && (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]), b || void 0
    }

    function n(a, b, c) {
        "none" == b && (b = "");
        var d = [],
            e = U(a);
        a = "__utma" == a ? 6 : 2;
        for (var f = 0; f < e.length; f++) {
            var g = ("" + e[f]).split(".");
            g.length >= a && d.push({
                hash: g[0],
                R: e[f],
                O: g
            })
        }
        return 0 == d.length ? void 0 : 1 == d.length ? d[0] : o(b, d) || o(c, d) || o(null, d) || d[0]
    }

    function o(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = t(a), d = t(C(a, ".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++)
            if (b[e].hash == c || b[e].hash == d) return b[e]
    }

    function p(a) {
        a = a.get(Ib);
        var b = q(a, 0);
        return "_ga=1." + G(b + "." + a)
    }

    function q(a, b) {
        for (var c = new Date, d = Q.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d) c.push(e[d].description);
        return t(c.join("."))
    }

    function r(a, b) {
        if (b == R.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }

    function s(a) {
        return 0 <= a.indexOf(".") || 0 <= a.indexOf(":")
    }

    function t(a) {
        var b, c, d = 1;
        if (a)
            for (d = 0, c = a.length - 1; 0 <= c; c--) b = a.charCodeAt(c), d = (d << 6 & 268435455) + b + (b << 14), b = 266338304 & d, d = 0 != b ? d ^ b >> 21 : d;
        return d
    }
    var u = function (a) {
        this.w = a || []
    };
    u.prototype.set = function (a) {
        this.w[a] = !0
    }, u.prototype.encode = function () {
        for (var a = [], b = 0; b < this.w.length; b++) this.w[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
        for (b = 0; b < a.length; b++) a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
        return a.join("") + "~"
    };
    var v = new u,
        w = function (a, b) {
            var c = new u(y(a));
            c.set(b), a.set(rb, c.w)
        },
        x = function (a) {
            a = y(a), a = new u(a);
            for (var b = v.w.slice(), c = 0; c < a.w.length; c++) b[c] = b[c] || a.w[c];
            return new u(b).encode()
        },
        y = function (a) {
            return a = a.get(rb), A(a) || (a = []), a
        },
        z = function (a) {
            return "function" == typeof a
        },
        A = function (a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        B = function (a) {
            return void 0 != a && -1 < (a.constructor + "").indexOf("String")
        },
        C = function (a, b) {
            return 0 == a.indexOf(b)
        },
        D = function (a) {
            return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        },
        E = function (a) {
            var b = R.createElement("img");
            return b.width = 1, b.height = 1, b.src = a, b
        },
        F = function () {},
        G = function (b) {
            return encodeURIComponent instanceof Function ? encodeURIComponent(b) : (a(28), b)
        },
        H = function (b, c, d, e) {
            try {
                b.addEventListener ? b.addEventListener(c, d, !!e) : b.attachEvent && b.attachEvent("on" + c, d)
            } catch (b) {
                a(27)
            }
        },
        I = /^[\w\-:\/.?=&%!]+$/,
        J = function (a, b, c) {
            a && (c ? (c = "", b && I.test(b) && (c = ' id="' + b + '"'), I.test(a) && R.write("<script" + c + ' src="' + a + '"></script>')) : (c = R.createElement("script"), c.type = "text/javascript", c.async = !0, c.src = a, b && (c.id = b), a = R.getElementsByTagName("script")[0], a.parentNode.insertBefore(c, a)))
        },
        K = function () {
            return "https:" == R.location.protocol
        },
        L = function (a, b) {
            var c = a.match("(?:&|#|\\?)" + G(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)");
            return c && 2 == c.length ? c[1] : ""
        },
        M = function () {
            var a = "" + R.location.hostname;
            return 0 == a.indexOf("www.") ? a.substring(4) : a
        },
        N = function (a) {
            var b = R.referrer;
            if (/^https?:\/\//i.test(b)) {
                if (a) return b;
                a = "//" + R.location.hostname;
                var c = b.indexOf(a);
                if ((5 == c || 6 == c) && (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a)) return;
                return b
            }
        },
        O = function (a, b) {
            if (1 == b.length && null != b[0] && "object" == typeof b[0]) return b[0];
            for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++) {
                if ("object" == typeof b[e]) {
                    for (var f in b[e]) b[e].hasOwnProperty(f) && (c[f] = b[e][f]);
                    break
                }
                e < a.length && (c[a[e]] = b[e])
            }
            return c
        },
        P = function () {
            this.keys = [], this.values = {}, this.m = {}
        };
    P.prototype.set = function (a, b, c) {
        this.keys.push(a), c ? this.m[":" + a] = b : this.values[":" + a] = b
    }, P.prototype.get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
    }, P.prototype.map = function (a) {
        for (var b = 0; b < this.keys.length; b++) {
            var c = this.keys[b],
                d = this.get(c);
            d && a(c, d)
        }
    };
    var Q = window,
        R = document,
        S = window,
        T = function (a) {
            var b = S._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === S["ga-disable-" + a]) return !0;
            try {
                var c = S.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (a) {}
            return !1
        },
        U = function (a) {
            var b = [],
                c = R.cookie.split(";");
            a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(a);
                e && b.push(e[1])
            }
            return b
        },
        V = function (b, c, d, e, f, g) {
            if (f = !T(f) && !(Y.test(R.location.hostname) || "/" == d && X.test(e)), !f) return !1;
            if (c && 1200 < c.length && (c = c.substring(0, 1200), a(24)), d = b + "=" + c + "; path=" + d + "; ", g && (d += "expires=" + new Date((new Date).getTime() + g).toGMTString() + "; "), e && "none" != e && (d += "domain=" + e + ";"), e = R.cookie, R.cookie = d, !(e = e != R.cookie)) a: {
                for (b = U(b), e = 0; e < b.length; e++)
                    if (c == b[e]) {
                        e = !0;
                        break a
                    }
                e = !1
            }
            return e
        },
        W = function (a) {
            return G(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
        },
        X = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Y = /(^|\.)doubleclick\.net$/i,
        Z = function () {
            return (wa || K() ? "https:" : "http:") + "//www.google-analytics.com"
        },
        $ = function (a) {
            this.name = "len", this.message = a + "-8192"
        },
        _ = function (a, b, c) {
            if (c = c || F, 2036 >= b.length) aa(a, b, c);
            else {
                if (!(8192 >= b.length)) throw da("len", b.length), new $(b.length);
                ca(a, b, c) || ba(a, b, c) || aa(a, b, c)
            }
        },
        aa = function (a, b, c) {
            var d = E(a + "?" + b);
            d.onload = d.onerror = function () {
                d.onload = null, d.onerror = null, c()
            }
        },
        ba = function (a, b, c) {
            var d = Q.XMLHttpRequest;
            if (!d) return !1;
            var e = new d;
            return "withCredentials" in e && (e.open("POST", a, !0), e.withCredentials = !0, e.setRequestHeader("Content-Type", "text/plain"), e.onreadystatechange = function () {
                4 == e.readyState && (c(), e = null)
            }, e.send(b), !0)
        },
        ca = function (a, b, c) {
            return !!Q.navigator.sendBeacon && (!!Q.navigator.sendBeacon(a, b) && (c(), !0))
        },
        da = function (a, b, c) {
            1 <= 100 * Math.random() || T("?") || (a = ["t=error", "_e=" + a, "_v=j46", "sr=1"], b && a.push("_f=" + b), c && a.push("_m=" + G(c.substring(0, 100))), a.push("aip=1"), a.push("z=" + ga()), aa(Z() + "/collect", a.join("&"), F))
        },
        ea = function (a) {
            var b = Q.gaData = Q.gaData || {};
            return b[a] = b[a] || {}
        },
        fa = function () {
            this.M = []
        };
    fa.prototype.add = function (a) {
        this.M.push(a)
    }, fa.prototype.D = function (a) {
        try {
            for (var b = 0; b < this.M.length; b++) {
                var c = a.get(this.M[b]);
                c && z(c) && c.call(Q, a)
            }
        } catch (a) {}
        b = a.get(Ba), b != F && z(b) && (a.set(Ba, F, !0), setTimeout(b, 10))
    };
    var ga = function () {
            return Math.round(2147483647 * Math.random())
        },
        ha = function () {
            try {
                var a = new Uint32Array(1);
                return Q.crypto.getRandomValues(a), 2147483647 & a[0]
            } catch (a) {
                return ga()
            }
        },
        ia = function () {
            this.data = new P
        },
        ja = new P,
        ka = [];
    ia.prototype.get = function (a) {
        var b = pa(a),
            c = this.data.get(a);
        return b && void 0 == c && (c = z(b.defaultValue) ? b.defaultValue() : b.defaultValue), b && b.Z ? b.Z(this, a, c) : c
    };
    var la = function (a, b) {
            var c = a.get(b);
            return void 0 == c ? "" : "" + c
        },
        ma = function (a, b) {
            var c = a.get(b);
            return void 0 == c || "" === c ? 0 : 1 * c
        };
    ia.prototype.set = function (a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a) a.hasOwnProperty(d) && na(this, d, a[d], c);
            else na(this, a, b, c)
    };
    var na = function (a, b, c, d) {
            if (void 0 != c) switch (b) {
                case Lb:
                    Jc.test(c)
            }
            var e = pa(b);
            e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
        },
        oa = function (a, b, c, d, e) {
            this.name = a, this.F = b, this.Z = d, this.o = e, this.defaultValue = c
        },
        pa = function (a) {
            var b = ja.get(a);
            if (!b)
                for (var c = 0; c < ka.length; c++) {
                    var d = ka[c],
                        e = d[0].exec(a);
                    if (e) {
                        b = d[1](e), ja.set(b.name, b);
                        break
                    }
                }
            return b
        },
        qa = function (a) {
            var b;
            return ja.map(function (c, d) {
                d.F == a && (b = d)
            }), b && b.name
        },
        ra = function (a, b, c, d, e) {
            return a = new oa(a, b, c, d, e), ja.set(a.name, a), a.name
        },
        sa = function (a, b) {
            ka.push([new RegExp("^" + a + "$"), b])
        },
        ta = function (a, b, c) {
            return ra(a, b, c, void 0, ua)
        },
        ua = function () {},
        va = B(window.GoogleAnalyticsObject) && D(window.GoogleAnalyticsObject) || "ga",
        wa = !1,
        xa = ta("apiVersion", "v"),
        ya = ta("clientVersion", "_v");
    ra("anonymizeIp", "aip");
    var za = ra("adSenseId", "a"),
        Aa = ra("hitType", "t"),
        Ba = ra("hitCallback"),
        Ca = ra("hitPayload");
    ra("nonInteraction", "ni"), ra("currencyCode", "cu"), ra("dataSource", "ds");
    var Da = ra("useBeacon", void 0, !1),
        Ea = ra("transport");
    ra("sessionControl", "sc", ""), ra("sessionGroup", "sg"), ra("queueTime", "qt");
    var Fa = ra("_s", "_s");
    ra("screenName", "cd");
    var Ga = ra("location", "dl", ""),
        Ha = ra("referrer", "dr"),
        Ia = ra("page", "dp", "");
    ra("hostname", "dh");
    var Ja = ra("language", "ul"),
        Ka = ra("encoding", "de");
    ra("title", "dt", function () {
        return R.title || void 0
    }), sa("contentGroup([0-9]+)", function (a) {
        return new oa(a[0], "cg" + a[1])
    });
    var La = ra("screenColors", "sd"),
        Ma = ra("screenResolution", "sr"),
        Na = ra("viewportSize", "vp"),
        Oa = ra("javaEnabled", "je"),
        Pa = ra("flashVersion", "fl");
    ra("campaignId", "ci"), ra("campaignName", "cn"), ra("campaignSource", "cs"), ra("campaignMedium", "cm"), ra("campaignKeyword", "ck"), ra("campaignContent", "cc");
    var Qa = ra("eventCategory", "ec"),
        Ra = ra("eventAction", "ea"),
        Sa = ra("eventLabel", "el"),
        Ta = ra("eventValue", "ev"),
        Ua = ra("socialNetwork", "sn"),
        Va = ra("socialAction", "sa"),
        Wa = ra("socialTarget", "st"),
        Xa = ra("l1", "plt"),
        Ya = ra("l2", "pdt"),
        Za = ra("l3", "dns"),
        $a = ra("l4", "rrt"),
        _a = ra("l5", "srt"),
        ab = ra("l6", "tcp"),
        bb = ra("l7", "dit"),
        cb = ra("l8", "clt"),
        db = ra("timingCategory", "utc"),
        eb = ra("timingVar", "utv"),
        fb = ra("timingLabel", "utl"),
        gb = ra("timingValue", "utt");
    ra("appName", "an"), ra("appVersion", "av", ""), ra("appId", "aid", ""), ra("appInstallerId", "aiid", ""), ra("exDescription", "exd"), ra("exFatal", "exf");
    var hb = ra("expId", "xid"),
        ib = ra("expVar", "xvar"),
        jb = ra("exp", "exp"),
        kb = ra("_utma", "_utma"),
        lb = ra("_utmz", "_utmz"),
        mb = ra("_utmht", "_utmht"),
        nb = ra("_hc", void 0, 0),
        ob = ra("_ti", void 0, 0),
        pb = ra("_to", void 0, 20);
    sa("dimension([0-9]+)", function (a) {
        return new oa(a[0], "cd" + a[1])
    }), sa("metric([0-9]+)", function (a) {
        return new oa(a[0], "cm" + a[1])
    }), ra("linkerParam", void 0, void 0, p, ua);
    var qb = ra("usage", "_u"),
        rb = ra("_um");
    ra("forceSSL", void 0, void 0, function () {
        return wa
    }, function (b, c, d) {
        a(34), wa = !!d
    });
    var sb = ra("_j1", "jid");
    sa("\\&(.*)", function (a) {
        var b = new oa(a[0], a[1]),
            c = qa(a[0].substring(1));
        return c && (b.Z = function (a) {
            return a.get(c)
        }, b.o = function (a, b, d, e) {
            a.set(c, d, e)
        }, b.F = void 0), b
    });
    var tb = ta("_oot"),
        ub = ra("previewTask"),
        vb = ra("checkProtocolTask"),
        wb = ra("validationTask"),
        xb = ra("checkStorageTask"),
        yb = ra("historyImportTask"),
        zb = ra("samplerTask"),
        Ab = ra("_rlt"),
        Bb = ra("buildHitTask"),
        Cb = ra("sendHitTask"),
        Db = ra("ceTask"),
        Eb = ra("devIdTask"),
        Fb = ra("timingTask"),
        Gb = ra("displayFeaturesTask"),
        Hb = ta("name"),
        Ib = ta("clientId", "cid"),
        Jb = ta("clientIdTime"),
        Kb = ra("userId", "uid"),
        Lb = ta("trackingId", "tid"),
        Mb = ta("cookieName", void 0, "_ga"),
        Nb = ta("cookieDomain"),
        Ob = ta("cookiePath", void 0, "/"),
        Pb = ta("cookieExpires", void 0, 63072e3),
        Qb = ta("legacyCookieDomain"),
        Rb = ta("legacyHistoryImport", void 0, !0),
        Sb = ta("storage", void 0, "cookie"),
        Tb = ta("allowLinker", void 0, !1),
        Ub = ta("allowAnchor", void 0, !0),
        Vb = ta("sampleRate", "sf", 100),
        Wb = ta("siteSpeedSampleRate", void 0, 1),
        Xb = ta("alwaysSendReferrer", void 0, !1),
        Yb = ra("transportUrl"),
        Zb = ra("_r", "_r"),
        $b = function (a) {
            this.V = a, this.fa = void 0, this.$ = !1, this.oa = void 0, this.ea = 1
        },
        _b = function (a, b) {
            var c;
            if (a.fa && a.$) return 0;
            if (a.$ = !0, b) {
                if (a.oa && ma(b, a.oa)) return ma(b, a.oa);
                if (0 == b.get(Wb)) return 0
            }
            return 0 == a.V ? 0 : (void 0 === c && (c = ha()), 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0)
        },
        ac = function (a) {
            var b = Math.min(ma(a, Wb), 100);
            return !(t(la(a, Ib)) % 100 >= b)
        },
        bc = function (a) {
            var b = {};
            if (cc(b) || dc(b)) {
                var c = b[Xa];
                void 0 == c || 1 / 0 == c || isNaN(c) || (0 < c ? (ec(b, Za), ec(b, ab), ec(b, _a), ec(b, Ya), ec(b, $a), ec(b, bb), ec(b, cb), a(b)) : H(Q, "load", function () {
                    bc(a)
                }, !1))
            }
        },
        cc = function (a) {
            var b = Q.performance || Q.webkitPerformance,
                b = b && b.timing;
            if (!b) return !1;
            var c = b.navigationStart;
            return 0 != c && (a[Xa] = b.loadEventStart - c, a[Za] = b.domainLookupEnd - b.domainLookupStart, a[ab] = b.connectEnd - b.connectStart, a[_a] = b.responseStart - b.requestStart, a[Ya] = b.responseEnd - b.responseStart, a[$a] = b.fetchStart - c, a[bb] = b.domInteractive - c, a[cb] = b.domContentLoadedEventStart - c, !0)
        },
        dc = function (a) {
            if (Q.top != Q) return !1;
            var b = Q.external,
                c = b && b.onloadT;
            return b && !b.isValidLoadTime && (c = void 0), 2147483648 < c && (c = void 0), 0 < c && b.setPageReadyTime(), void 0 != c && (a[Xa] = c, !0)
        },
        ec = function (a, b) {
            var c = a[b];
            (isNaN(c) || 1 / 0 == c || 0 > c) && (a[b] = void 0)
        },
        fc = function (a) {
            return function (b) {
                if ("pageview" == b.get(Aa) && !a.I) {
                    a.I = !0;
                    var c = ac(b);
                    b = 0 < L(b.get(Ga), "gclid").length, (c || b) && bc(function (b) {
                        a.send(c ? "timing" : "adtiming", b)
                    })
                }
            }
        },
        gc = !1,
        hc = function (b) {
            if ("cookie" == la(b, Sb)) {
                var c = la(b, Mb),
                    d = kc(b),
                    e = nc(la(b, Ob)),
                    f = mc(la(b, Nb)),
                    g = 1e3 * ma(b, Pb),
                    h = la(b, Lb);
                if ("auto" != f) V(c, d, e, f, h, g) && (gc = !0);
                else {
                    a(32);
                    var i;
                    if (d = [], f = M().split("."), 4 != f.length || (i = f[f.length - 1], parseInt(i, 10) != i)) {
                        for (i = f.length - 2; 0 <= i; i--) d.push(f.slice(i).join("."));
                        d.push("none"), i = d
                    } else i = ["none"];
                    for (var j = 0; j < i.length; j++)
                        if (f = i[j], b.data.set(Nb, f), d = kc(b), V(c, d, e, f, h, g)) return void(gc = !0);
                    b.data.set(Nb, "auto")
                }
            }
        },
        ic = function (a) {
            if ("cookie" == la(a, Sb) && !gc && (hc(a), !gc)) throw "abort"
        },
        jc = function (b) {
            if (b.get(Rb)) {
                var c = la(b, Nb),
                    d = la(b, Qb) || M(),
                    e = n("__utma", d, c);
                e && (a(19), b.set(mb, (new Date).getTime(), !0), b.set(kb, e.R), (c = n("__utmz", d, c)) && e.hash == c.hash && b.set(lb, c.R))
            }
        },
        kc = function (a) {
            var b = W(la(a, Ib)),
                c = mc(la(a, Nb)).split(".").length;
            return a = oc(la(a, Ob)), 1 < a && (c += "-" + a), ["GA1", c, b].join(".")
        },
        lc = function (a, b, c) {
            for (var d, e = [], f = [], g = 0; g < a.length; g++) {
                var h = a[g];
                h.H[c] == b ? e.push(h) : void 0 == d || h.H[c] < d ? (f = [h], d = h.H[c]) : h.H[c] == d && f.push(h)
            }
            return 0 < e.length ? e : f
        },
        mc = function (a) {
            return 0 == a.indexOf(".") ? a.substr(1) : a
        },
        nc = function (a) {
            return a ? (1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1)), 0 != a.indexOf("/") && (a = "/" + a), a) : "/"
        },
        oc = function (a) {
            return a = nc(a), "/" == a ? 1 : a.split("/").length
        },
        pc = new RegExp(/^https?:\/\/([^\/:]+)/),
        qc = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
        rc = function (b) {
            a(48), this.target = b, this.T = !1
        };
    rc.prototype.ca = function (a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) return void(a.href && (a.href = sc(this, a.href, b)));
            if ("form" == a.tagName.toLowerCase()) return tc(this, a)
        }
        if ("string" == typeof a) return sc(this, a, b)
    };
    var sc = function (a, b, c) {
            var d = qc.exec(b);
            d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : "")), a = a.target.get("linkerParam");
            var e = b.indexOf("?"),
                d = b.indexOf("#");
            return c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d)), b = b.replace(/&+_ga=/, "&_ga=")
        },
        tc = function (a, b) {
            if (b && b.action) {
                var c = a.target.get("linkerParam").split("=")[1];
                if ("get" == b.method.toLowerCase()) {
                    for (var d = b.childNodes || [], e = 0; e < d.length; e++)
                        if ("_ga" == d[e].name) return void d[e].setAttribute("value", c);
                    d = R.createElement("input"), d.setAttribute("type", "hidden"), d.setAttribute("name", "_ga"), d.setAttribute("value", c), b.appendChild(d)
                } else "post" == b.method.toLowerCase() && (b.action = sc(a, b.action))
            }
        };
    rc.prototype.S = function (b, c, d) {
        function e(d) {
            try {
                d = d || Q.event;
                var e;
                a: {
                    var g = d.target || d.srcElement;
                    for (d = 100; g && 0 < d;) {
                        if (g.href && g.nodeName.match(/^a(?:rea)?$/i)) {
                            e = g;
                            break a
                        }
                        g = g.parentNode, d--
                    }
                    e = {}
                }("http:" == e.protocol || "https:" == e.protocol) && r(b, e.hostname || "") && e.href && (e.href = sc(f, e.href, c))
            } catch (b) {
                a(26)
            }
        }
        var f = this;
        this.T || (this.T = !0, H(R, "mousedown", e, !1), H(R, "keyup", e, !1)), d && H(R, "submit", function (a) {
            if (a = a || Q.event, (a = a.target || a.srcElement) && a.action) {
                var c = a.action.match(pc);
                c && r(b, c[1]) && tc(f, a)
            }
        })
    };
    var uc, vc = /^(GTM|OPT)-[A-Z0-9]+$/,
        wc = /;_gaexp=[^;]*/g,
        xc = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
        yc = function (a) {
            function b(a, b) {
                b && (c += "&" + a + "=" + G(b))
            }
            var c = "https://www.google-analytics.com/gtm/js?id=" + G(a.id);
            return "dataLayer" != a.B && b("l", a.B), b("t", a.target), b("cid", a.ja), b("cidt", a.ka), b("gac", a.la), b("aip", a.ia), a.na && b("m", "sync"), b("cycle", a.G), c
        },
        zc = function (b, c, d) {
            this.U = sb, this.aa = c, (c = d) || (c = (c = la(b, Hb)) && "t0" != c ? Ec.test(c) ? "_gat_" + W(la(b, Lb)) : "_gat_" + W(c) : "_gat"), this.Y = c, _b(new $b(100), b) && (a(30), this.pa = !0)
        },
        Ac = function (a, b) {
            var c = b.get(Bb);
            b.set(Bb, function (b) {
                Bc(a, b);
                var d = c(b);
                return Cc(a, b), d
            });
            var d = b.get(Cb);
            b.set(Cb, function (b) {
                var c = d(b);
                return Dc(a, b), c
            })
        },
        Bc = function (a, b) {
            b.get(a.U) || ("1" == U(a.Y)[0] ? b.set(a.U, "", !0) : b.set(a.U, "" + ga(), !0))
        },
        Cc = function (a, b) {
            if (b.get(a.U)) {
                var c = 6e5;
                a.pa && (c /= 10), V(a.Y, "1", b.get(Ob), b.get(Nb), b.get(Lb), c)
            }
        },
        Dc = function (a, b) {
            if (b.get(a.U)) {
                var c = new P,
                    d = function (a) {
                        pa(a).F && c.set(pa(a).F, b.get(a))
                    };
                d(xa), d(ya), d(Lb), d(Ib), d(Kb), d(a.U), c.set(pa(qb).F, x(b));
                var e = a.aa;
                c.map(function (a, b) {
                    e += G(a) + "=", e += G("" + b) + "&"
                }), e += "z=" + ga(), E(e), b.set(a.U, "", !0)
            }
        },
        Ec = /^gtm\d+$/,
        Fc = function (a, b) {
            var c = a.b;
            if (!c.get("dcLoaded")) {
                w(c, 29), b = b || {};
                var d;
                b[Mb] && (d = W(b[Mb])), d = new zc(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d), Ac(d, c), c.set("dcLoaded", !0)
            }
        },
        Gc = function (a) {
            if (!a.get("dcLoaded") && "cookie" == a.get(Sb)) {
                w(a, 51);
                var b = new zc(a);
                Bc(b, a), Cc(b, a), a.get(b.U) && (a.set(Zb, 1, !0), a.set(Yb, Z() + "/r/collect", !0))
            }
        },
        Hc = function () {
            var a = Q.gaGlobal = Q.gaGlobal || {};
            return a.hid = a.hid || ga()
        },
        Ic = function (a, b, c) {
            if (!uc) {
                var d;
                d = R.location.hash;
                var e = Q.name,
                    f = /^#?gaso=([^&]*)/;
                (e = (d = (d = d && d.match(f) || e && e.match(f)) ? d[1] : U("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (V("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], J("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + ga(), "_gasojs")), uc = !0
            }
        },
        Jc = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
        Kc = function (a) {
            function l(a, b) {
                n.b.data.set(a, b)
            }

            function m(a, b) {
                l(a, b), n.filters.add(a)
            }
            var n = this;
            this.b = new ia, this.filters = new fa, l(Hb, a[Hb]), l(Lb, D(a[Lb])), l(Mb, a[Mb]), l(Nb, a[Nb] || M()), l(Ob, a[Ob]), l(Pb, a[Pb]), l(Qb, a[Qb]), l(Rb, a[Rb]), l(Tb, a[Tb]), l(Ub, a[Ub]), l(Vb, a[Vb]), l(Wb, a[Wb]), l(Xb, a[Xb]), l(Sb, a[Sb]), l(Kb, a[Kb]), l(Jb, a[Jb]), l(xa, 1), l(ya, "j46"), m(tb, c), m(ub, h), m(vb, d), m(wb, j), m(xb, ic), m(yb, jc), m(zb, b), m(Ab, k), m(Db, g), m(Eb, i), m(Gb, Gc), m(Bb, e), m(Cb, f), m(Fb, fc(this)), Lc(this.b, a[Ib]), Mc(this.b), this.b.set(za, Hc()), Ic(this.b.get(Lb), this.b.get(Nb), this.b.get(Ob))
        },
        Lc = function (b, c) {
            if ("cookie" == la(b, Sb)) {
                gc = !1;
                var d;
                a: {
                    var e = U(la(b, Mb));
                    if (e && !(1 > e.length)) {
                        d = [];
                        for (var f = 0; f < e.length; f++) {
                            var g;
                            g = e[f].split(".");
                            var h = g.shift();
                            ("GA1" == h || "1" == h) && 1 < g.length ? (h = g.shift().split("-"), 1 == h.length && (h[1] = "1"), h[0] *= 1, h[1] *= 1, g = {
                                H: h,
                                s: g.join(".")
                            }) : g = void 0, g && d.push(g)
                        }
                        if (1 == d.length) {
                            a(13), d = d[0].s;
                            break a
                        }
                        if (0 != d.length) {
                            if (a(14), e = mc(la(b, Nb)).split(".").length, d = lc(d, e, 0), 1 == d.length) {
                                d = d[0].s;
                                break a
                            }
                            e = oc(la(b, Ob)), d = lc(d, e, 1), d = d[0] && d[0].s;
                            break a
                        }
                        a(12)
                    }
                    d = void 0
                }
                d || (d = la(b, Nb), e = la(b, Qb) || M(), d = n("__utma", e, d), void 0 != d ? (a(10), d = d.O[1] + "." + d.O[2]) : d = void 0), d && (b.data.set(Ib, d), gc = !0)
            }
            if (d = b.get(Ub), (f = L(R.location[d ? "href" : "search"], "_ga")) && (b.get(Tb) ? (d = f.indexOf("."), -1 == d ? a(22) : (e = f.substring(d + 1), "1" != f.substring(0, d) ? a(22) : (d = e.indexOf("."), -1 == d ? a(22) : (f = e.substring(0, d), d = e.substring(d + 1), f != q(d, 0) && f != q(d, -1) && f != q(d, -2) ? a(23) : (a(11), b.data.set(Ib, d)))))) : a(21)), c && (a(9), b.data.set(Ib, G(c))), !b.get(Ib))
                if (d = (d = Q.gaGlobal && Q.gaGlobal.vid) && -1 != d.search(/^(?:utma\.)?\d+\.\d+$/) ? d : void 0) a(17), b.data.set(Ib, d);
                else {
                    for (a(8), d = Q.navigator.userAgent + (R.cookie ? R.cookie : "") + (R.referrer ? R.referrer : ""), e = d.length, f = Q.history.length; 0 < f;) d += f-- ^ e++;
                    b.data.set(Ib, [ga() ^ 2147483647 & t(d), Math.round((new Date).getTime() / 1e3)].join("."))
                }
            hc(b)
        },
        Mc = function (b) {
            var c = Q.navigator,
                d = Q.screen,
                e = R.location;
            if (b.set(Ha, N(b.get(Xb))), e) {
                var f = e.pathname || "";
                "/" != f.charAt(0) && (a(31), f = "/" + f), b.set(Ga, e.protocol + "//" + e.hostname + f + e.search)
            }
            d && b.set(Ma, d.width + "x" + d.height), d && b.set(La, d.colorDepth + "-bit");
            var d = R.documentElement,
                g = (f = R.body) && f.clientWidth && f.clientHeight,
                h = [];
            if (d && d.clientWidth && d.clientHeight && ("CSS1Compat" === R.compatMode || !g) ? h = [d.clientWidth, d.clientHeight] : g && (h = [f.clientWidth, f.clientHeight]), d = 0 >= h[0] || 0 >= h[1] ? "" : h.join("x"), b.set(Na, d), b.set(Pa, m()), b.set(Ka, R.characterSet || R.charset), b.set(Oa, c && "function" == typeof c.javaEnabled && c.javaEnabled() || !1), b.set(Ja, (c && (c.language || c.browserLanguage) || "").toLowerCase()), e && b.get(Ub) && (c = R.location.hash)) {
                for (c = c.split(/[?&#]+/), e = [], d = 0; d < c.length; ++d)(C(c[d], "utm_id") || C(c[d], "utm_campaign") || C(c[d], "utm_source") || C(c[d], "utm_medium") || C(c[d], "utm_term") || C(c[d], "utm_content") || C(c[d], "gclid") || C(c[d], "dclid") || C(c[d], "gclsrc")) && e.push(c[d]);
                0 < e.length && (c = "#" + e.join("&"), b.set(Ga, b.get(Ga) + c))
            }
        };
    Kc.prototype.get = function (a) {
        return this.b.get(a)
    }, Kc.prototype.set = function (a, b) {
        this.b.set(a, b)
    };
    var Nc = {
        pageview: [Ia],
        event: [Qa, Ra, Sa, Ta],
        social: [Ua, Va, Wa],
        timing: [db, eb, gb, fb]
    };
    Kc.prototype.send = function (a) {
        if (!(1 > arguments.length)) {
            var b, c;
            "string" == typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Aa], c = arguments), b && (c = O(Nc[b] || [], c), c[Aa] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), this.b.data.m = {})
        }
    }, Kc.prototype.ma = function (a, b) {
        var c = this;
        Wc(a, c, b) || (Yc(a, function () {
            Wc(a, c, b)
        }), Xc(String(c.get(Hb)), a, void 0, b, !0))
    };
    var Oc, Pc, Qc, Rc, Sc = function (a) {
            return "prerender" != R.visibilityState && (a(), !0)
        },
        Tc = function (b) {
            if (!Sc(b)) {
                a(16);
                var c = !1,
                    d = function () {
                        if (!c && Sc(b)) {
                            c = !0;
                            var a = d,
                                e = R;
                            e.removeEventListener ? e.removeEventListener("visibilitychange", a, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", a)
                        }
                    };
                H(R, "visibilitychange", d)
            }
        },
        Uc = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
        Vc = function (a) {
            if (z(a[0])) this.u = a[0];
            else {
                var b = Uc.exec(a[0]);
                if (null != b && 4 == b.length && (this.c = b[1] || "t0", this.K = b[2] || "", this.C = b[3], this.a = [].slice.call(a, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (B(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), b = a[1], a = a[2], !this.C) throw "abort";
                if (this.i && (!B(b) || "" == b)) throw "abort";
                if (this.g && (!B(b) || "" == b || !z(a))) throw "abort";
                if (s(this.c) || s(this.K)) throw "abort";
                if (this.g && "t0" != this.c) throw "abort"
            }
        };
    Oc = new P, Qc = new P, Rc = new P, Pc = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var Wc = function (a, b, c) {
            b == bd || b.get(Hb);
            var d = Oc.get(a);
            return !!z(d) && (b.plugins_ = b.plugins_ || new P, !!b.plugins_.get(a) || (b.plugins_.set(a, new d(b, c || {})), !0))
        },
        Xc = function (b, c, d, e, f) {
            if (!z(Oc.get(c)) && !Qc.get(c)) {
                if (Pc.hasOwnProperty(c) && a(Pc[c]), vc.test(c)) {
                    if (a(52), b = bd.j(b), !b) return !0;
                    d = e || {}, e = {
                        id: c,
                        B: d.dataLayer || "dataLayer",
                        ia: !!b.get("anonymizeIp"),
                        na: f,
                        G: !1
                    }, b.get("&gtm") == c && (e.G = !0);
                    var g = String(b.get("name"));
                    "t0" != g && (e.target = g), T(String(b.get("trackingId"))) || (e.ja = String(b.get(Ib)), e.ka = Number(b.get(Jb)), b = d.palindrome ? xc : wc, b = (b = R.cookie.replace(/^|(; +)/g, ";").match(b)) ? b.sort().join("").substring(1) : void 0, e.la = b), b = e.B, d = (new Date).getTime(), Q[b] = Q[b] || [], d = {
                        "gtm.start": d
                    }, f || (d.event = "gtm.js"), Q[b].push(d), d = yc(e)
                }!d && Pc.hasOwnProperty(c) ? (a(39), d = c + ".js") : a(43), d && (d && 0 <= d.indexOf("/") || (d = (wa || K() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + d), e = _c(d), b = e.protocol, d = R.location.protocol, ("https:" == b || b == d || ("http:" != b ? 0 : "http:" == d)) && $c(e) && (J(e.url, void 0, f), Qc.set(c, !0)))
            }
        },
        Yc = function (a, b) {
            var c = Rc.get(a) || [];
            c.push(b), Rc.set(a, c)
        },
        Zc = function (a, b) {
            Oc.set(a, b);
            for (var c = Rc.get(a) || [], d = 0; d < c.length; d++) c[d]();
            Rc.set(a, [])
        },
        $c = function (a) {
            var b = _c(R.location.href);
            return !!C(a.url, "https://www.google-analytics.com/gtm/js?id=") || !(a.query || 0 <= a.url.indexOf("?") || 0 <= a.path.indexOf("://")) && (a.host == b.host && a.port == b.port || (b = "http:" == a.protocol ? 80 : 443, !("www.google-analytics.com" != a.host || (a.port || b) != b || !C(a.path, "/plugins/"))))
        },
        _c = function (a) {
            function b(a) {
                var b = (a.hostname || "").split(":")[0].toLowerCase(),
                    c = (a.protocol || "").toLowerCase(),
                    c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
                return a = a.pathname || "", C(a, "/") || (a = "/" + a), [b, "" + c, a]
            }
            var c = R.createElement("a");
            c.href = R.location.href;
            var d = (c.protocol || "").toLowerCase(),
                e = b(c),
                f = c.search || "",
                g = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
            return C(a, "//") ? a = d + a : C(a, "/") ? a = g + a : !a || C(a, "?") ? a = g + e[2] + (a || f) : 0 > a.split("/")[0].indexOf(":") && (a = g + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a), c.href = a, d = b(c), {
                protocol: (c.protocol || "").toLowerCase(),
                host: d[0],
                port: d[1],
                path: d[2],
                query: c.search || "",
                url: a || ""
            }
        },
        ad = {
            ga: function () {
                ad.f = []
            }
        };
    ad.ga(), ad.D = function (a) {
        var b = ad.J.apply(ad, arguments),
            b = ad.f.concat(b);
        for (ad.f = []; 0 < b.length && !ad.v(b[0]) && (b.shift(), !(0 < ad.f.length)););
        ad.f = ad.f.concat(b)
    }, ad.J = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) try {
            var d = new Vc(arguments[c]);
            d.g ? Zc(d.a[0], d.a[1]) : (d.i && (d.ha = Xc(d.c, d.a[0], d.X, d.W)), b.push(d))
        } catch (a) {}
        return b
    }, ad.v = function (a) {
        try {
            if (a.u) a.u.call(Q, bd.j("t0"));
            else {
                var b = a.c == va ? bd : bd.j(a.c);
                if (a.A) "t0" == a.c && bd.create.apply(bd, a.a);
                else if (a.ba) bd.remove(a.c);
                else if (b)
                    if (a.i) {
                        if (a.ha && (a.ha = Xc(a.c, a.a[0], a.X, a.W)), !Wc(a.a[0], b, a.W)) return !0
                    } else if (a.K) {
                    var c = a.C,
                        d = a.a,
                        e = b.plugins_.get(a.K);
                    e[c].apply(e, d)
                } else b[a.C].apply(b, a.a)
            }
        } catch (a) {}
    };
    var bd = function (b) {
        a(1), ad.D.apply(ad, [arguments])
    };
    bd.h = {}, bd.P = [], bd.L = 0, bd.answer = 42;
    var cd = [Lb, Nb, Hb];
    bd.create = function (a) {
        var b = O(cd, [].slice.call(arguments));
        b[Hb] || (b[Hb] = "t0");
        var c = "" + b[Hb];
        return bd.h[c] ? bd.h[c] : (b = new Kc(b), bd.h[c] = b, bd.P.push(b), b)
    }, bd.remove = function (a) {
        for (var b = 0; b < bd.P.length; b++)
            if (bd.P[b].get(Hb) == a) {
                bd.P.splice(b, 1), bd.h[a] = null;
                break
            }
    }, bd.j = function (a) {
        return bd.h[a]
    }, bd.getAll = function () {
        return bd.P.slice(0)
    }, bd.N = function () {
        "ga" != va && a(49);
        var b = Q[va];
        if (!b || 42 != b.answer) {
            bd.L = b && b.l, bd.loaded = !0;
            var c = Q[va] = bd;
            if (l("create", c, c.create), l("remove", c, c.remove), l("getByName", c, c.j, 5), l("getAll", c, c.getAll, 6), c = Kc.prototype, l("get", c, c.get, 7), l("set", c, c.set, 4), l("send", c, c.send), l("requireSync", c, c.ma), c = ia.prototype, l("get", c, c.get), l("set", c, c.set), !K() && !wa) {
                a: {
                    for (var c = R.getElementsByTagName("script"), d = 0; d < c.length && 100 > d; d++) {
                        var e = c[d].src;
                        if (e && 0 == e.indexOf("https://www.google-analytics.com/analytics")) {
                            a(33), c = !0;
                            break a
                        }
                    }
                    c = !1
                }
                c && (wa = !0)
            }
            K() || wa || !_b(new $b(1e4)) || (a(36), wa = !0), (Q.gaplugins = Q.gaplugins || {}).Linker = rc, c = rc.prototype, Zc("linker", rc), l("decorate", c, c.ca, 20), l("autoLink", c, c.S, 25), Zc("displayfeatures", Fc), Zc("adfeatures", Fc), b = b && b.q, A(b) ? ad.D.apply(bd, b) : a(50)
        }
    }, bd.da = function () {
        for (var a = bd.getAll(), b = 0; b < a.length; b++) a[b].get(Hb)
    };
    var dd = bd.N,
        ed = Q[va];
    ed && ed.r ? dd() : Tc(dd), Tc(function () {
        ad.D(["provide", "render", F])
    })
}(window), ga("create", "UA-55375083-3", "auto"), ga("send", "pageview"), setTimeout(function () {
        for (var a, b, c = "undefined" != typeof document.addEventListener, d = document.getElementsByTagName("a"), e = 0; e < d.length; e++) a = new RegExp("^mailto:", "i"), b = d[e].getAttribute("href"), b && a.test(b) && (c ? d[e].addEventListener("click", function () {
            ga("send", "event", "Email link", "click", "Contact by email")
        }) : d[e].onclick = function () {
            ga("send", "event", "Email link", "click", "Contact by email")
        })
    }), setTimeout(function () {
        var a = function () {
                var a = document.getElementById("sitemap");
                "none" === a.style.display ? a.style.display = "block" : a.style.display = "none", window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
            },
            b = "undefined" != typeof document.addEventListener,
            c = document.getElementById("sitemaplnk");
        c && (b ? c.addEventListener("click", function (b) {
            b.preventDefault(), a()
        }) : c.onclick = function () {
            return a(), !1
        })
    }), ! function (a, b) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        "use strict";

        function c(a, b) {
            b = b || ba;
            var c = b.createElement("script");
            c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
        }

        function d(a) {
            var b = !!a && "length" in a && a.length,
                c = oa.type(a);
            return "function" !== c && !oa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function e(a, b, c) {
            return oa.isFunction(b) ? oa.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            }) : b.nodeType ? oa.grep(a, function (a) {
                return a === b !== c
            }) : "string" != typeof b ? oa.grep(a, function (a) {
                return ga.call(b, a) > -1 !== c
            }) : ya.test(b) ? oa.filter(b, a, c) : (b = oa.filter(b, a), oa.grep(a, function (a) {
                return ga.call(b, a) > -1 !== c && 1 === a.nodeType
            }))
        }

        function f(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function g(a) {
            var b = {};
            return oa.each(a.match(Ea) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function h(a) {
            return a
        }

        function i(a) {
            throw a
        }

        function j(a, b, c) {
            var d;
            try {
                a && oa.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && oa.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
            } catch (a) {
                c.call(void 0, a)
            }
        }

        function k() {
            ba.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), oa.ready()
        }

        function l() {
            this.expando = oa.expando + l.uid++
        }

        function m(a) {
            return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : La.test(a) ? JSON.parse(a) : a)
        }

        function n(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Ma, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = m(c)
                    } catch (a) {}
                    Ka.set(a, b, c)
                } else c = void 0;
            return c
        }

        function o(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function () {
                    return d.cur()
                } : function () {
                    return oa.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (oa.cssNumber[b] ? "" : "px"),
                k = (oa.cssNumber[b] || "px" !== j && +i) && Oa.exec(oa.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, oa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function p(a) {
            var b, c = a.ownerDocument,
                d = a.nodeName,
                e = Sa[d];
            return e ? e : (b = c.body.appendChild(c.createElement(d)), e = oa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Sa[d] = e, e)
        }

        function q(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ja.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Qa(d) && (e[f] = p(d))) : "none" !== c && (e[f] = "none", Ja.set(d, "display", c)));
            for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
            return a
        }

        function r(a, b) {
            var c;
            return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && oa.nodeName(a, b) ? oa.merge([a], c) : c
        }

        function s(a, b) {
            for (var c = 0, d = a.length; c < d; c++) Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"))
        }

        function t(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
                if (f = a[n], f || 0 === f)
                    if ("object" === oa.type(f)) oa.merge(m, f.nodeType ? [f] : f);
                    else if (Xa.test(f)) {
                for (g = g || l.appendChild(b.createElement("div")), h = (Ua.exec(f) || ["", ""])[1].toLowerCase(), i = Wa[h] || Wa._default, g.innerHTML = i[1] + oa.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
                oa.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
            } else m.push(b.createTextNode(f));
            for (l.textContent = "", n = 0; f = m[n++];)
                if (d && oa.inArray(f, d) > -1) e && e.push(f);
                else if (j = oa.contains(f.ownerDocument, f),
                g = r(l.appendChild(f), "script"), j && s(g), c)
                for (k = 0; f = g[k++];) Va.test(f.type || "") && c.push(f);
            return l
        }

        function u() {
            return !0
        }

        function v() {
            return !1
        }

        function w() {
            try {
                return ba.activeElement
            } catch (a) {}
        }

        function x(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) x(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = v;
            else if (!e) return a;
            return 1 === f && (g = e, e = function (a) {
                return oa().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = oa.guid++)), a.each(function () {
                oa.event.add(this, b, e, d, c)
            })
        }

        function y(a, b) {
            return oa.nodeName(a, "table") && oa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
        }

        function z(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function A(a) {
            var b = db.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function B(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (Ja.hasData(a) && (f = Ja.access(a), g = Ja.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; c < d; c++) oa.event.add(b, e, j[e][c])
                }
                Ka.hasData(a) && (h = Ka.access(a), i = oa.extend({}, h), Ka.set(b, i))
            }
        }

        function C(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Ta.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }

        function D(a, b, d, e) {
            b = ea.apply([], b);
            var f, g, h, i, j, k, l = 0,
                m = a.length,
                n = m - 1,
                o = b[0],
                p = oa.isFunction(o);
            if (p || m > 1 && "string" == typeof o && !ma.checkClone && cb.test(o)) return a.each(function (c) {
                var f = a.eq(c);
                p && (b[0] = o.call(this, c, f.html())), D(f, b, d, e)
            });
            if (m && (f = t(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
                for (h = oa.map(r(f, "script"), z), i = h.length; l < m; l++) j = f, l !== n && (j = oa.clone(j, !0, !0), i && oa.merge(h, r(j, "script"))), d.call(a[l], j, l);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, oa.map(h, A), l = 0; l < i; l++) j = h[l], Va.test(j.type || "") && !Ja.access(j, "globalEval") && oa.contains(k, j) && (j.src ? oa._evalUrl && oa._evalUrl(j.src) : c(j.textContent.replace(eb, ""), k))
            }
            return a
        }

        function E(a, b, c) {
            for (var d, e = b ? oa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || oa.cleanData(r(d)), d.parentNode && (c && oa.contains(d.ownerDocument, d) && s(r(d, "script")), d.parentNode.removeChild(d));
            return a
        }

        function F(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || hb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || oa.contains(a.ownerDocument, a) || (g = oa.style(a, b)), !ma.pixelMarginRight() && gb.test(g) && fb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function G(a, b) {
            return {
                get: function () {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function H(a) {
            if (a in mb) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = lb.length; c--;)
                if (a = lb[c] + b, a in mb) return a
        }

        function I(a, b, c) {
            var d = Oa.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function J(a, b, c, d, e) {
            var f, g = 0;
            for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += oa.css(a, c + Pa[f], !0, e)), d ? ("content" === c && (g -= oa.css(a, "padding" + Pa[f], !0, e)), "margin" !== c && (g -= oa.css(a, "border" + Pa[f] + "Width", !0, e))) : (g += oa.css(a, "padding" + Pa[f], !0, e), "padding" !== c && (g += oa.css(a, "border" + Pa[f] + "Width", !0, e)));
            return g
        }

        function K(a, b, c) {
            var d, e = !0,
                f = hb(a),
                g = "border-box" === oa.css(a, "boxSizing", !1, f);
            if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
                if (d = F(a, b, f), (d < 0 || null == d) && (d = a.style[b]), gb.test(d)) return d;
                e = g && (ma.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
            }
            return d + J(a, b, c || (g ? "border" : "content"), e, f) + "px"
        }

        function L(a, b, c, d, e) {
            return new L.prototype.init(a, b, c, d, e)
        }

        function M() {
            ob && (a.requestAnimationFrame(M), oa.fx.tick())
        }

        function N() {
            return a.setTimeout(function () {
                nb = void 0
            }), nb = oa.now()
        }

        function O(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Pa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function P(a, b, c) {
            for (var d, e = (S.tweeners[b] || []).concat(S.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function Q(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                m = this,
                n = {},
                o = a.style,
                p = a.nodeType && Qa(a),
                r = Ja.get(a, "fxshow");
            c.queue || (g = oa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
                g.unqueued || h()
            }), g.unqueued++, m.always(function () {
                m.always(function () {
                    g.unqueued--, oa.queue(a, "fx").length || g.empty.fire()
                })
            }));
            for (d in b)
                if (e = b[d], pb.test(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        p = !0
                    }
                    n[d] = r && r[d] || oa.style(a, d)
                }
            if (i = !oa.isEmptyObject(b), i || !oa.isEmptyObject(n)) {
                l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ja.get(a, "display")), k = oa.css(a, "display"), "none" === k && (j ? k = j : (q([a], !0), j = a.style.display || j, k = oa.css(a, "display"), q([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === oa.css(a, "float") && (i || (m.done(function () {
                    o.display = j
                }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                    o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                })), i = !1;
                for (d in n) i || (r ? "hidden" in r && (p = r.hidden) : r = Ja.access(a, "fxshow", {
                    display: j
                }), f && (r.hidden = !p), p && q([a], !0), m.done(function () {
                    p || q([a]), Ja.remove(a, "fxshow");
                    for (d in n) oa.style(a, d, n[d])
                })), i = P(p ? r[d] : 0, d, m), d in r || (r[d] = i.start, p && (i.end = i.start, i.start = 0))
            }
        }

        function R(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = oa.camelCase(c), e = b[d], f = a[c], oa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = oa.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function S(a, b, c) {
            var d, e, f = 0,
                g = S.prefilters.length,
                h = oa.Deferred().always(function () {
                    delete i.elem
                }),
                i = function () {
                    if (e) return !1;
                    for (var b = nb || N(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: oa.extend({}, b),
                    opts: oa.extend(!0, {
                        specialEasing: {},
                        easing: oa.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || N(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = oa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function (b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; c < d; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (R(k, j.opts.specialEasing); f < g; f++)
                if (d = S.prefilters[f].call(j, a, k, j.opts)) return oa.isFunction(d.stop) && (oa._queueHooks(j.elem, j.opts.queue).stop = oa.proxy(d.stop, d)), d;
            return oa.map(k, P, j), oa.isFunction(j.opts.start) && j.opts.start.call(a, j), oa.fx.timer(oa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function T(a) {
            var b = a.match(Ea) || [];
            return b.join(" ")
        }

        function U(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }

        function V(a, b, c, d) {
            var e;
            if (oa.isArray(b)) oa.each(b, function (b, e) {
                c || Ab.test(a) ? d(a, e) : V(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== oa.type(b)) d(a, b);
            else
                for (e in b) V(a + "[" + e + "]", b[e], c, d)
        }

        function W(a) {
            return function (b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(Ea) || [];
                if (oa.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function X(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, oa.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Mb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function Y(a, b) {
            var c, d, e = oa.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && oa.extend(!0, a, d), a
        }

        function Z(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            if (f) return f !== i[0] && i.unshift(f), c[f]
        }

        function $(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a.throws) b = g(b);
                    else try {
                        b = g(b)
                    } catch (a) {
                        return {
                            state: "parsererror",
                            error: g ? a : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function _(a) {
            return oa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var aa = [],
            ba = a.document,
            ca = Object.getPrototypeOf,
            da = aa.slice,
            ea = aa.concat,
            fa = aa.push,
            ga = aa.indexOf,
            ha = {},
            ia = ha.toString,
            ja = ha.hasOwnProperty,
            ka = ja.toString,
            la = ka.call(Object),
            ma = {},
            na = "3.1.1",
            oa = function (a, b) {
                return new oa.fn.init(a, b)
            },
            pa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            qa = /^-ms-/,
            ra = /-([a-z])/g,
            sa = function (a, b) {
                return b.toUpperCase()
            };
        oa.fn = oa.prototype = {
            jquery: na,
            constructor: oa,
            length: 0,
            toArray: function () {
                return da.call(this)
            },
            get: function (a) {
                return null == a ? da.call(this) : a < 0 ? this[a + this.length] : this[a]
            },
            pushStack: function (a) {
                var b = oa.merge(this.constructor(), a);
                return b.prevObject = this, b
            },
            each: function (a) {
                return oa.each(this, a)
            },
            map: function (a) {
                return this.pushStack(oa.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function () {
                return this.pushStack(da.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: fa,
            sort: aa.sort,
            splice: aa.splice
        }, oa.extend = oa.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || oa.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (oa.isPlainObject(d) || (e = oa.isArray(d))) ? (e ? (e = !1, f = c && oa.isArray(c) ? c : []) : f = c && oa.isPlainObject(c) ? c : {}, g[b] = oa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, oa.extend({
            expando: "jQuery" + (na + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a)
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === oa.type(a)
            },
            isArray: Array.isArray,
            isWindow: function (a) {
                return null != a && a === a.window
            },
            isNumeric: function (a) {
                var b = oa.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            },
            isPlainObject: function (a) {
                var b, c;
                return !(!a || "[object Object]" !== ia.call(a) || (b = ca(a)) && (c = ja.call(b, "constructor") && b.constructor, "function" != typeof c || ka.call(c) !== la))
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[ia.call(a)] || "object" : typeof a
            },
            globalEval: function (a) {
                c(a)
            },
            camelCase: function (a) {
                return a.replace(qa, "ms-").replace(ra, sa)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function (a, b) {
                var c, e = 0;
                if (d(a))
                    for (c = a.length; e < c && b.call(a[e], e, a[e]) !== !1; e++);
                else
                    for (e in a)
                        if (b.call(a[e], e, a[e]) === !1) break;
                return a
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(pa, "")
            },
            makeArray: function (a, b) {
                var c = b || [];
                return null != a && (d(Object(a)) ? oa.merge(c, "string" == typeof a ? [a] : a) : fa.call(c, a)), c
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : ga.call(b, a, c)
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function (a, b, c) {
                var e, f, g = 0,
                    h = [];
                if (d(a))
                    for (e = a.length; g < e; g++) f = b(a[g], g, c), null != f && h.push(f);
                else
                    for (g in a) f = b(a[g], g, c), null != f && h.push(f);
                return ea.apply([], h)
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                if ("string" == typeof b && (c = a[b], b = a, a = c), oa.isFunction(a)) return d = da.call(arguments, 2), e = function () {
                    return a.apply(b || this, d.concat(da.call(arguments)))
                }, e.guid = a.guid = a.guid || oa.guid++, e
            },
            now: Date.now,
            support: ma
        }), "function" == typeof Symbol && (oa.fn[Symbol.iterator] = aa[Symbol.iterator]), oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            ha["[object " + b + "]"] = b.toLowerCase()
        });
        var ta = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9;
                if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                    if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                        } else {
                            if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                        }
                    if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== o) m = b, k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                        }
                        if (k) try {
                            return $.apply(c, m.querySelectorAll(k)), c
                        } catch (a) {} finally {
                            h === O && b.removeAttribute("id")
                        }
                    }
                }
                return C(a.replace(ha, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[O] = !0, a
            }

            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return function (b) {
                    return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
                }
            }

            function k(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function m() {}

            function n(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++;
                return b.first ? function (b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || g) return a(b, c, e);
                    return !1
                } : function (b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                                } return !1
                }
            }

            function p(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                return d
            }

            function r(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function s(a, b, c, e, f, g) {
                return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function (d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || q(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? p : r(p, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function t(a) {
                for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                        return a === b
                    }, g, !0), j = o(function (a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function (a, c, d) {
                        var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; h < e; h++)
                    if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                            for (d = ++h; d < e && !x.relative[a[d].type]; d++);
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }

            function u(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function (d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || f && x.find.TAG("*", j),
                            u = Q += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                    if (m(k, g || H, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (Q = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, q, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q)
                            }
                            $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (Q = u, D = s), p
                    };
                return e ? d(g) : g
            }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = function (a, b) {
                    return a === b && (F = !0), 0
                },
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                ua = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                wa = function (a, b) {
                    return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                },
                xa = function () {
                    G()
                },
                ya = o(function (a) {
                    return a.disabled === !0 && ("form" in a || "label" in a)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
            } catch (a) {
                $ = {
                    apply: X.length ? function (a, b) {
                        Z.apply(a, _.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            w = b.support = {}, z = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, G = b.setDocument = function (a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), w.getElementsByTagName = e(function (a) {
                    return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
                }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function (a) {
                    return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
                }), w.getById ? (x.filter.ID = function (a) {
                    var b = a.replace(ta, ua);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }, x.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (x.filter.ID = function (a) {
                    var b = a.replace(ta, ua);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, x.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, x.find.CLASS = w.getElementsByClassName && function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && J) return b.getElementsByClassName(a)
                }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function (a) {
                    I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                }), e(function (a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function (a) {
                    w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
                }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = b ? function (a, b) {
                    if (a === b) return F = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return F = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f) return g(a, b);
                    for (c = a; c = c.parentNode;) h.unshift(c);
                    for (c = b; c = c.parentNode;) i.unshift(c);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                    var d = M.call(a, c);
                    if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {}
                return b(c, H, null, [a]).length > 0
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== H && G(a), N(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = x.attrHandle[b.toLowerCase()],
                    d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.escape = function (a) {
                return (a + "").replace(va, wa)
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return E = null, a
            }, y = b.getText = function (a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += y(b);
                return c
            }, x = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ta, ua).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [Q, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function (a, c) {
                        var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [],
                            c = [],
                            e = B(a.replace(ha, "$1"));
                        return e[O] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function (a) {
                        return a = a.replace(ta, ua),
                            function (b) {
                                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function (a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === I
                    },
                    focus: function (a) {
                        return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: j(!1),
                    disabled: j(!0),
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !x.pseudos.empty(a)
                    },
                    header: function (a) {
                        return pa.test(a.nodeName)
                    },
                    input: function (a) {
                        return oa.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: k(function () {
                        return [0]
                    }),
                    last: k(function (a, b) {
                        return [b - 1]
                    }),
                    eq: k(function (a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: k(function (a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function (a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (v in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[v] = h(v);
            for (v in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function (a, c) {
                var d, e, f, g, h, i, j, k = T[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = x.preFilter; h;) {
                    d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ha, " ")
                    }), h = h.slice(d.length));
                    for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
            }, B = b.compile = function (a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)), f.selector = a
                }
                return f
            }, C = b.select = function (a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && A(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                        if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
            }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), w.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function (a, b, c) {
                var d;
                if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
            }), b
        }(a);
        oa.find = ta, oa.expr = ta.selectors, oa.expr[":"] = oa.expr.pseudos, oa.uniqueSort = oa.unique = ta.uniqueSort, oa.text = ta.getText, oa.isXMLDoc = ta.isXML, oa.contains = ta.contains, oa.escapeSelector = ta.escape;
        var ua = function (a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && oa(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            va = function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            wa = oa.expr.match.needsContext,
            xa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            ya = /^.[^:#\[\.,]*$/;
        oa.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? oa.find.matchesSelector(d, a) ? [d] : [] : oa.find.matches(a, oa.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, oa.fn.extend({
            find: function (a) {
                var b, c, d = this.length,
                    e = this;
                if ("string" != typeof a) return this.pushStack(oa(a).filter(function () {
                    for (b = 0; b < d; b++)
                        if (oa.contains(e[b], this)) return !0
                }));
                for (c = this.pushStack([]), b = 0; b < d; b++) oa.find(a, e[b], c);
                return d > 1 ? oa.uniqueSort(c) : c
            },
            filter: function (a) {
                return this.pushStack(e(this, a || [], !1))
            },
            not: function (a) {
                return this.pushStack(e(this, a || [], !0))
            },
            is: function (a) {
                return !!e(this, "string" == typeof a && wa.test(a) ? oa(a) : a || [], !1).length
            }
        });
        var za, Aa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Ba = oa.fn.init = function (a, b, c) {
                var d, e;
                if (!a) return this;
                if (c = c || za, "string" == typeof a) {
                    if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Aa.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (d[1]) {
                        if (b = b instanceof oa ? b[0] : b, oa.merge(this, oa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ba, !0)), xa.test(d[1]) && oa.isPlainObject(b))
                            for (d in b) oa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = ba.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
                }
                return a.nodeType ? (this[0] = a, this.length = 1, this) : oa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(oa) : oa.makeArray(a, this)
            };
        Ba.prototype = oa.fn, za = oa(ba);
        var Ca = /^(?:parents|prev(?:Until|All))/,
            Da = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oa.fn.extend({
            has: function (a) {
                var b = oa(a, this),
                    c = b.length;
                return this.filter(function () {
                    for (var a = 0; a < c; a++)
                        if (oa.contains(this, b[a])) return !0
                })
            },
            closest: function (a, b) {
                var c, d = 0,
                    e = this.length,
                    f = [],
                    g = "string" != typeof a && oa(a);
                if (!wa.test(a))
                    for (; d < e; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && oa.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                return this.pushStack(f.length > 1 ? oa.uniqueSort(f) : f)
            },
            index: function (a) {
                return a ? "string" == typeof a ? ga.call(oa(a), this[0]) : ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (a, b) {
                return this.pushStack(oa.uniqueSort(oa.merge(this.get(), oa(a, b))))
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), oa.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function (a) {
                return ua(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return ua(a, "parentNode", c)
            },
            next: function (a) {
                return f(a, "nextSibling")
            },
            prev: function (a) {
                return f(a, "previousSibling")
            },
            nextAll: function (a) {
                return ua(a, "nextSibling")
            },
            prevAll: function (a) {
                return ua(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return ua(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return ua(a, "previousSibling", c)
            },
            siblings: function (a) {
                return va((a.parentNode || {}).firstChild, a)
            },
            children: function (a) {
                return va(a.firstChild)
            },
            contents: function (a) {
                return a.contentDocument || oa.merge([], a.childNodes)
            }
        }, function (a, b) {
            oa.fn[a] = function (c, d) {
                var e = oa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = oa.filter(d, e)), this.length > 1 && (Da[a] || oa.uniqueSort(e), Ca.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var Ea = /[^\x20\t\r\n\f]+/g;
        oa.Callbacks = function (a) {
            a = "string" == typeof a ? g(a) : oa.extend({}, a);
            var b, c, d, e, f = [],
                h = [],
                i = -1,
                j = function () {
                    for (e = a.once, d = b = !0; h.length; i = -1)
                        for (c = h.shift(); ++i < f.length;) f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                k = {
                    add: function () {
                        return f && (c && !b && (i = f.length - 1, h.push(c)), function b(c) {
                            oa.each(c, function (c, d) {
                                oa.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== oa.type(d) && b(d)
                            })
                        }(arguments), c && !b && j()), this
                    },
                    remove: function () {
                        return oa.each(arguments, function (a, b) {
                            for (var c;
                                (c = oa.inArray(b, f, c)) > -1;) f.splice(c, 1), c <= i && i--
                        }), this
                    },
                    has: function (a) {
                        return a ? oa.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function () {
                        return f && (f = []), this
                    },
                    disable: function () {
                        return e = h = [], f = c = "", this
                    },
                    disabled: function () {
                        return !f
                    },
                    lock: function () {
                        return e = h = [], c || b || (f = c = ""), this
                    },
                    locked: function () {
                        return !!e
                    },
                    fireWith: function (a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                    },
                    fire: function () {
                        return k.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!d
                    }
                };
            return k
        }, oa.extend({
            Deferred: function (b) {
                var c = [["notify", "progress", oa.Callbacks("memory"), oa.Callbacks("memory"), 2], ["resolve", "done", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 1, "rejected"]],
                    d = "pending",
                    e = {
                        state: function () {
                            return d
                        },
                        always: function () {
                            return f.done(arguments).fail(arguments), this
                        },
                        catch: function (a) {
                            return e.then(null, a)
                        },
                        pipe: function () {
                            var a = arguments;
                            return oa.Deferred(function (b) {
                                oa.each(c, function (c, d) {
                                    var e = oa.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function () {
                                        var a = e && e.apply(this, arguments);
                                        a && oa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function (b, d, e) {
                            function f(b, c, d, e) {
                                return function () {
                                    var j = this,
                                        k = arguments,
                                        l = function () {
                                            var a, l;
                                            if (!(b < g)) {
                                                if (a = d.apply(j, k), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                                l = a && ("object" == typeof a || "function" == typeof a) && a.then, oa.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                                            }
                                        },
                                        m = e ? l : function () {
                                            try {
                                                l()
                                            } catch (a) {
                                                oa.Deferred.exceptionHook && oa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k))
                                            }
                                        };
                                    b ? m() : (oa.Deferred.getStackHook && (m.stackTrace = oa.Deferred.getStackHook()), a.setTimeout(m))
                                }
                            }
                            var g = 0;
                            return oa.Deferred(function (a) {
                                c[0][3].add(f(0, a, oa.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, oa.isFunction(b) ? b : h)), c[2][3].add(f(0, a, oa.isFunction(d) ? d : i))
                            }).promise()
                        },
                        promise: function (a) {
                            return null != a ? oa.extend(a, e) : e
                        }
                    },
                    f = {};
                return oa.each(c, function (a, b) {
                    var g = b[2],
                        h = b[5];
                    e[b[1]] = g.add, h && g.add(function () {
                        d = h
                    }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                        return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                    }, f[b[0] + "With"] = g.fireWith
                }), e.promise(f), b && b.call(f, f), f
            },
            when: function (a) {
                var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = da.call(arguments),
                    f = oa.Deferred(),
                    g = function (a) {
                        return function (c) {
                            d[a] = this, e[a] = arguments.length > 1 ? da.call(arguments) : c, --b || f.resolveWith(d, e)
                        }
                    };
                if (b <= 1 && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || oa.isFunction(e[c] && e[c].then))) return f.then();
                for (; c--;) j(e[c], g(c), f.reject);
                return f.promise()
            }
        });
        var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        oa.Deferred.exceptionHook = function (b, c) {
            a.console && a.console.warn && b && Fa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
        }, oa.readyException = function (b) {
            a.setTimeout(function () {
                throw b
            })
        };
        var Ga = oa.Deferred();
        oa.fn.ready = function (a) {
            return Ga.then(a).catch(function (a) {
                oa.readyException(a)
            }), this
        }, oa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? oa.readyWait++ : oa.ready(!0)
            },
            ready: function (a) {
                (a === !0 ? --oa.readyWait : oa.isReady) || (oa.isReady = !0, a !== !0 && --oa.readyWait > 0 || Ga.resolveWith(ba, [oa]))
            }
        }), oa.ready.then = Ga.then, "complete" === ba.readyState || "loading" !== ba.readyState && !ba.documentElement.doScroll ? a.setTimeout(oa.ready) : (ba.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
        var Ha = function (a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === oa.type(c)) {
                    e = !0;
                    for (h in c) Ha(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, oa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(oa(a), c)
                    })), b))
                    for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ia = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
        l.uid = 1, l.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            },
            set: function (a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[oa.camelCase(b)] = c;
                else
                    for (d in b) e[oa.camelCase(d)] = b[d];
                return e
            },
            get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][oa.camelCase(b)]
            },
            access: function (a, b, c) {
                return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function (a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        oa.isArray(b) ? b = b.map(oa.camelCase) : (b = oa.camelCase(b), b = b in d ? [b] : b.match(Ea) || []), c = b.length;
                        for (; c--;) delete d[b[c]]
                    }(void 0 === b || oa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !oa.isEmptyObject(b)
            }
        };
        var Ja = new l,
            Ka = new l,
            La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ma = /[A-Z]/g;
        oa.extend({
            hasData: function (a) {
                return Ka.hasData(a) || Ja.hasData(a)
            },
            data: function (a, b, c) {
                return Ka.access(a, b, c)
            },
            removeData: function (a, b) {
                Ka.remove(a, b)
            },
            _data: function (a, b, c) {
                return Ja.access(a, b, c)
            },
            _removeData: function (a, b) {
                Ja.remove(a, b)
            }
        }), oa.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = Ka.get(f), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = oa.camelCase(d.slice(5)), n(f, d, e[d])));
                        Ja.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    Ka.set(this, a)
                }) : Ha(this, function (b) {
                    var c;
                    if (f && void 0 === b) {
                        if (c = Ka.get(f, a), void 0 !== c) return c;
                        if (c = n(f, a), void 0 !== c) return c
                    } else this.each(function () {
                        Ka.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function (a) {
                return this.each(function () {
                    Ka.remove(this, a)
                })
            }
        }), oa.extend({
            queue: function (a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = Ja.get(a, b), c && (!d || oa.isArray(c) ? d = Ja.access(a, b, oa.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = oa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = oa._queueHooks(a, b),
                    g = function () {
                        oa.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return Ja.get(a, c) || Ja.access(a, c, {
                    empty: oa.Callbacks("once memory").add(function () {
                        Ja.remove(a, [b + "queue", c])
                    })
                })
            }
        }), oa.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? oa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = oa.queue(this, a, b);
                    oa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && oa.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    oa.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = oa.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Ja.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"),
            Pa = ["Top", "Right", "Bottom", "Left"],
            Qa = function (a, b) {
                return a = b || a, "none" === a.style.display || "" === a.style.display && oa.contains(a.ownerDocument, a) && "none" === oa.css(a, "display")
            },
            Ra = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Sa = {};
        oa.fn.extend({
            show: function () {
                return q(this, !0)
            },
            hide: function () {
                return q(this)
            },
            toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Qa(this) ? oa(this).show() : oa(this).hide()
                })
            }
        });
        var Ta = /^(?:checkbox|radio)$/i,
            Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Va = /^$|\/(?:java|ecma)script/i,
            Wa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Wa.optgroup = Wa.option, Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead, Wa.th = Wa.td;
        var Xa = /<|&#?\w+;/;
        ! function () {
            var a = ba.createDocumentFragment(),
                b = a.appendChild(ba.createElement("div")),
                c = ba.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ma.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ma.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var Ya = ba.documentElement,
            Za = /^key/,
            $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _a = /^([^.]*)(?:\.(.+)|)/;
        oa.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ja.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), e && oa.find.matchesSelector(Ya, e), c.guid || (c.guid = oa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                            return "undefined" != typeof oa && oa.event.triggered !== b.type ? oa.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(Ea) || [""], j = b.length; j--;) h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = oa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = oa.event.special[n] || {}, k = oa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && oa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), oa.event.global[n] = !0)
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ja.hasData(a) && Ja.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(Ea) || [""], j = b.length; j--;)
                        if (h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = oa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || oa.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) oa.event.remove(a, n + b[j], c, d, !0);
                    oa.isEmptyObject(i) && Ja.remove(a, "handle events")
                }
            },
            dispatch: function (a) {
                var b, c, d, e, f, g, h = oa.event.fix(a),
                    i = new Array(arguments.length),
                    j = (Ja.get(this, "events") || {})[h.type] || [],
                    k = oa.event.special[h.type] || {};
                for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
                if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
                    for (g = oa.event.handlers.call(this, h, j), b = 0;
                        (e = g[b++]) && !h.isPropagationStopped();)
                        for (h.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, d = ((oa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, h), h.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g, h = [],
                    i = b.delegateCount,
                    j = a.target;
                if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                    for (; j !== this; j = j.parentNode || this)
                        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? oa(e, this).index(j) > -1 : oa.find(e, this, null, [j]).length), g[e] && f.push(d);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return j = this, i < b.length && h.push({
                    elem: j,
                    handlers: b.slice(i)
                }), h
            },
            addProp: function (a, b) {
                Object.defineProperty(oa.Event.prototype, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: oa.isFunction(b) ? function () {
                        if (this.originalEvent) return b(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[a]
                    },
                    set: function (b) {
                        Object.defineProperty(this, a, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                })
            },
            fix: function (a) {
                return a[oa.expando] ? a : new oa.Event(a)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== w() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === w() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && oa.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (a) {
                        return oa.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, oa.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, oa.Event = function (a, b) {
            return this instanceof oa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? u : v, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && oa.extend(this, b), this.timeStamp = a && a.timeStamp || oa.now(), void(this[oa.expando] = !0)) : new oa.Event(a, b)
        }, oa.Event.prototype = {
            constructor: oa.Event,
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = u, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = u, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = u, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oa.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (a) {
                var b = a.button;
                return null == a.which && Za.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && $a.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, oa.event.addProp), oa.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            oa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || oa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), oa.fn.extend({
            on: function (a, b, c, d) {
                return x(this, a, b, c, d)
            },
            one: function (a, b, c, d) {
                return x(this, a, b, c, d, 1)
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, oa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = v), this.each(function () {
                    oa.event.remove(this, a, c, b)
                })
            }
        });
        var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            bb = /<script|<style|<link/i,
            cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            db = /^true\/(.*)/,
            eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oa.extend({
            htmlPrefilter: function (a) {
                return a.replace(ab, "<$1></$2>")
            },
            clone: function (a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = oa.contains(a.ownerDocument, a);
                if (!(ma.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || oa.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++) C(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++) B(f[d], g[d]);
                    else B(a, h);
                return g = r(h, "script"), g.length > 0 && s(g, !i && r(a, "script")), h
            },
            cleanData: function (a) {
                for (var b, c, d, e = oa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (Ia(c)) {
                        if (b = c[Ja.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? oa.event.remove(c, d) : oa.removeEvent(c, d, b.handle);
                            c[Ja.expando] = void 0
                        }
                        c[Ka.expando] && (c[Ka.expando] = void 0)
                    }
            }
        }), oa.fn.extend({
            detach: function (a) {
                return E(this, a, !0)
            },
            remove: function (a) {
                return E(this, a)
            },
            text: function (a) {
                return Ha(this, function (a) {
                    return void 0 === a ? oa.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function () {
                return D(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = y(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function () {
                return D(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = y(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function () {
                return D(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function () {
                return D(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (oa.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function (a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function () {
                    return oa.clone(this, a, b)
                })
            },
            html: function (a) {
                return Ha(this, function (a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !bb.test(a) && !Wa[(Ua.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = oa.htmlPrefilter(a);
                        try {
                            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (oa.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function () {
                var a = [];
                return D(this, arguments, function (b) {
                    var c = this.parentNode;
                    oa.inArray(this, a) < 0 && (oa.cleanData(r(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), oa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            oa.fn[a] = function (a) {
                for (var c, d = [], e = oa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), oa(e[g])[b](c), fa.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var fb = /^margin/,
            gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
            hb = function (b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            };
        ! function () {
            function b() {
                if (h) {
                    h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ya.appendChild(g);
                    var b = a.getComputedStyle(h);
                    c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Ya.removeChild(g), h = null
                }
            }
            var c, d, e, f, g = ba.createElement("div"),
                h = ba.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ma.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), oa.extend(ma, {
                pixelPosition: function () {
                    return b(), c
                },
                boxSizingReliable: function () {
                    return b(), d
                },
                pixelMarginRight: function () {
                    return b(), e
                },
                reliableMarginLeft: function () {
                    return b(), f
                }
            }))
        }();
        var ib = /^(none|table(?!-c[ea]).+)/,
            jb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            lb = ["Webkit", "Moz", "ms"],
            mb = ba.createElement("div").style;
        oa.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = F(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = oa.camelCase(b),
                        i = a.style;
                    return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Oa.exec(c)) && e[1] && (c = o(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (oa.cssNumber[h] ? "" : "px")), ma.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = oa.camelCase(b);
                return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = F(a, b, d)), "normal" === e && b in kb && (e = kb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }), oa.each(["height", "width"], function (a, b) {
            oa.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c) return !ib.test(oa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? K(a, b, d) : Ra(a, jb, function () {
                        return K(a, b, d)
                    })
                },
                set: function (a, c, d) {
                    var e, f = d && hb(a),
                        g = d && J(a, b, d, "border-box" === oa.css(a, "boxSizing", !1, f), f);
                    return g && (e = Oa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = oa.css(a, b)), I(a, c, g)
                }
            }
        }), oa.cssHooks.marginLeft = G(ma.reliableMarginLeft, function (a, b) {
            if (b) return (parseFloat(F(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
                marginLeft: 0
            }, function () {
                return a.getBoundingClientRect().left
            })) + "px"
        }), oa.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (a, b) {
            oa.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, fb.test(a) || (oa.cssHooks[a + b].set = I)
        }), oa.fn.extend({
            css: function (a, b) {
                return Ha(this, function (a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (oa.isArray(b)) {
                        for (d = hb(a), e = b.length; g < e; g++) f[b[g]] = oa.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? oa.style(a, b, c) : oa.css(a, b)
                }, a, b, arguments.length > 1)
            }
        }), oa.Tween = L, L.prototype = {
            constructor: L,
            init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || oa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (oa.cssNumber[c] ? "" : "px")
            },
            cur: function () {
                var a = L.propHooks[this.prop];
                return a && a.get ? a.get(this) : L.propHooks._default.get(this)
            },
            run: function (a) {
                var b, c = L.propHooks[this.prop];
                return this.options.duration ? this.pos = b = oa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = oa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function (a) {
                    oa.fx.step[a.prop] ? oa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[oa.cssProps[a.prop]] && !oa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : oa.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, oa.easing = {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, oa.fx = L.prototype.init, oa.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = /queueHooks$/;
        oa.Animation = oa.extend(S, {
                tweeners: {
                    "*": [function (a, b) {
                        var c = this.createTween(a, b);
                        return o(c.elem, a, Oa.exec(b), c), c
                    }]
                },
                tweener: function (a, b) {
                    oa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ea);
                    for (var c, d = 0, e = a.length; d < e; d++) c = a[d], S.tweeners[c] = S.tweeners[c] || [], S.tweeners[c].unshift(b)
                },
                prefilters: [Q],
                prefilter: function (a, b) {
                    b ? S.prefilters.unshift(a) : S.prefilters.push(a)
                }
            }), oa.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? oa.extend({}, a) : {
                    complete: c || !c && b || oa.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !oa.isFunction(b) && b
                };
                return oa.fx.off || ba.hidden ? d.duration = 0 : "number" != typeof d.duration && (d.duration in oa.fx.speeds ? d.duration = oa.fx.speeds[d.duration] : d.duration = oa.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    oa.isFunction(d.old) && d.old.call(this), d.queue && oa.dequeue(this, d.queue)
                }, d
            }, oa.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Qa).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function (a, b, c, d) {
                    var e = oa.isEmptyObject(a),
                        f = oa.speed(b, c, d),
                        g = function () {
                            var b = S(this, oa.extend({}, a), f);
                            (e || Ja.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = oa.timers,
                            g = Ja.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && qb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || oa.dequeue(this, a)
                    })
                },
                finish: function (a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = Ja.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = oa.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, oa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), oa.each(["toggle", "show", "hide"], function (a, b) {
                var c = oa.fn[b];
                oa.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(O(b, !0), a, d, e)
                }
            }), oa.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (a, b) {
                oa.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), oa.timers = [], oa.fx.tick = function () {
                var a, b = 0,
                    c = oa.timers;
                for (nb = oa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || oa.fx.stop(), nb = void 0
            }, oa.fx.timer = function (a) {
                oa.timers.push(a), a() ? oa.fx.start() : oa.timers.pop()
            }, oa.fx.interval = 13, oa.fx.start = function () {
                ob || (ob = a.requestAnimationFrame ? a.requestAnimationFrame(M) : a.setInterval(oa.fx.tick, oa.fx.interval))
            }, oa.fx.stop = function () {
                a.cancelAnimationFrame ? a.cancelAnimationFrame(ob) : a.clearInterval(ob), ob = null
            }, oa.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oa.fn.delay = function (b, c) {
                return b = oa.fx ? oa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
            },
            function () {
                var a = ba.createElement("input"),
                    b = ba.createElement("select"),
                    c = b.appendChild(ba.createElement("option"));
                a.type = "checkbox", ma.checkOn = "" !== a.value, ma.optSelected = c.selected, a = ba.createElement("input"), a.value = "t", a.type = "radio", ma.radioValue = "t" === a.value
            }();
        var rb, sb = oa.expr.attrHandle;
        oa.fn.extend({
            attr: function (a, b) {
                return Ha(this, oa.attr, a, b, arguments.length > 1)
            },
            removeAttr: function (a) {
                return this.each(function () {
                    oa.removeAttr(this, a)
                })
            }
        }), oa.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? oa.prop(a, b, c) : (1 === f && oa.isXMLDoc(a) || (e = oa.attrHooks[b.toLowerCase()] || (oa.expr.match.bool.test(b) ? rb : void 0)), void 0 !== c ? null === c ? void oa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = oa.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!ma.radioValue && "radio" === b && oa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function (a, b) {
                var c, d = 0,
                    e = b && b.match(Ea);
                if (e && 1 === a.nodeType)
                    for (; c = e[d++];) a.removeAttribute(c)
            }
        }), rb = {
            set: function (a, b, c) {
                return b === !1 ? oa.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, oa.each(oa.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = sb[b] || oa.find.attr;
            sb[b] = function (a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = sb[g], sb[g] = e, e = null != c(a, b, d) ? g : null, sb[g] = f), e
            }
        });
        var tb = /^(?:input|select|textarea|button)$/i,
            ub = /^(?:a|area)$/i;
        oa.fn.extend({
            prop: function (a, b) {
                return Ha(this, oa.prop, a, b, arguments.length > 1)
            },
            removeProp: function (a) {
                return this.each(function () {
                    delete this[oa.propFix[a] || a]
                })
            }
        }), oa.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && oa.isXMLDoc(a) || (b = oa.propFix[b] || b, e = oa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = oa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : tb.test(a.nodeName) || ub.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ma.optSelected || (oa.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), oa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            oa.propFix[this.toLowerCase()] = this
        }), oa.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function (b) {
                    oa(this).addClass(a.call(this, b, U(this)))
                });
                if ("string" == typeof a && a)
                    for (b = a.match(Ea) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            removeClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function (b) {
                    oa(this).removeClass(a.call(this, b, U(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(Ea) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];)
                                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : oa.isFunction(a) ? this.each(function (c) {
                    oa(this).toggleClass(a.call(this, c, U(this), b), b)
                }) : this.each(function () {
                    var b, d, e, f;
                    if ("string" === c)
                        for (d = 0, e = oa(this), f = a.match(Ea) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else void 0 !== a && "boolean" !== c || (b = U(this), b && Ja.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ja.get(this, "__className__") || ""))
                })
            },
            hasClass: function (a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];)
                    if (1 === c.nodeType && (" " + T(U(c)) + " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var vb = /\r/g;
        oa.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = oa.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, oa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : oa.isArray(e) && (e = oa.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = oa.valHooks[this.type] || oa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = oa.valHooks[e.type] || oa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)) : void 0
            }
        }), oa.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = oa.find.attr(a, "value");
                        return null != b ? b : T(oa.text(a))
                    }
                },
                select: {
                    get: function (a) {
                        var b, c, d, e = a.options,
                            f = a.selectedIndex,
                            g = "select-one" === a.type,
                            h = g ? null : [],
                            i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !oa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = oa(c).val(), g) return b;
                                h.push(b)
                            }
                        return h
                    },
                    set: function (a, b) {
                        for (var c, d, e = a.options, f = oa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = oa.inArray(oa.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), oa.each(["radio", "checkbox"], function () {
            oa.valHooks[this] = {
                set: function (a, b) {
                    if (oa.isArray(b)) return a.checked = oa.inArray(oa(a).val(), b) > -1
                }
            }, ma.checkOn || (oa.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var wb = /^(?:focusinfocus|focusoutblur)$/;
        oa.extend(oa.event, {
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || ba],
                    n = ja.call(b, "type") ? b.type : b,
                    o = ja.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || ba, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + oa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[oa.expando] ? b : new oa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : oa.makeArray(c, [b]), l = oa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !oa.isWindow(d)) {
                        for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || ba) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ia(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ia(d) || j && oa.isFunction(d[n]) && !oa.isWindow(d) && (h = d[j], h && (d[j] = null), oa.event.triggered = n, d[n](), oa.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            simulate: function (a, b, c) {
                var d = oa.extend(new oa.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                oa.event.trigger(d, null, b)
            }
        }), oa.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    oa.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                if (c) return oa.event.trigger(a, b, c, !0)
            }
        }), oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
            oa.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), oa.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), ma.focusin = "onfocusin" in a, ma.focusin || oa.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                oa.event.simulate(b, a.target, oa.event.fix(a))
            };
            oa.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        e = Ja.access(d, b);
                    e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        e = Ja.access(d, b) - 1;
                    e ? Ja.access(d, b, e) : (d.removeEventListener(a, c, !0), Ja.remove(d, b))
                }
            }
        });
        var xb = a.location,
            yb = oa.now(),
            zb = /\?/;
        oa.parseXML = function (b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = (new a.DOMParser).parseFromString(b, "text/xml")
            } catch (a) {
                c = void 0
            }
            return c && !c.getElementsByTagName("parsererror").length || oa.error("Invalid XML: " + b), c
        };
        var Ab = /\[\]$/,
            Bb = /\r?\n/g,
            Cb = /^(?:submit|button|image|reset|file)$/i,
            Db = /^(?:input|select|textarea|keygen)/i;
        oa.param = function (a, b) {
            var c, d = [],
                e = function (a, b) {
                    var c = oa.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
            if (oa.isArray(a) || a.jquery && !oa.isPlainObject(a)) oa.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (c in a) V(c, a[c], b, e);
            return d.join("&")
        }, oa.fn.extend({
            serialize: function () {
                return oa.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = oa.prop(this, "elements");
                    return a ? oa.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !oa(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ta.test(a))
                }).map(function (a, b) {
                    var c = oa(this).val();
                    return null == c ? null : oa.isArray(c) ? oa.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(Bb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Bb, "\r\n")
                    }
                }).get()
            }
        });
        var Eb = /%20/g,
            Fb = /#.*$/,
            Gb = /([?&])_=[^&]*/,
            Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Jb = /^(?:GET|HEAD)$/,
            Kb = /^\/\//,
            Lb = {},
            Mb = {},
            Nb = "*/".concat("*"),
            Ob = ba.createElement("a");
        Ob.href = xb.href, oa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xb.href,
                type: "GET",
                isLocal: Ib.test(xb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Nb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": oa.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (a, b) {
                return b ? Y(Y(a, oa.ajaxSettings), b) : Y(oa.ajaxSettings, a)
            },
            ajaxPrefilter: W(Lb),
            ajaxTransport: W(Mb),
            ajax: function (b, c) {
                function d(b, c, d, h) {
                    var j, m, n, u, v, w = c;
                    k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = Z(o, x, d)), u = $(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (oa.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (oa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --oa.active || oa.event.trigger("ajaxStop")))
                }
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m, n, o = oa.ajaxSetup({}, c),
                    p = o.context || o,
                    q = o.context && (p.nodeType || p.jquery) ? oa(p) : oa.event,
                    r = oa.Deferred(),
                    s = oa.Callbacks("once memory"),
                    t = o.statusCode || {},
                    u = {},
                    v = {},
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (k) {
                                if (!h)
                                    for (h = {}; b = Hb.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function () {
                            return k ? g : null
                        },
                        setRequestHeader: function (a, b) {
                            return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                        },
                        overrideMimeType: function (a) {
                            return null == k && (o.mimeType = a), this
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (k) x.always(a[x.status]);
                                else
                                    for (b in a) t[b] = [t[b], a[b]];
                            return this
                        },
                        abort: function (a) {
                            var b = a || w;
                            return e && e.abort(b), d(0, b), this
                        }
                    };
                if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [""], null == o.crossDomain) {
                    j = ba.createElement("a");
                    try {
                        j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host
                    } catch (a) {
                        o.crossDomain = !0
                    }
                }
                if (o.data && o.processData && "string" != typeof o.data && (o.data = oa.param(o.data, o.traditional)), X(Lb, o, c, x), k) return x;
                l = oa.event && o.global, l && 0 === oa.active++ && oa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, "$1"), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (oa.lastModified[f] && x.setRequestHeader("If-Modified-Since", oa.lastModified[f]), oa.etag[f] && x.setRequestHeader("If-None-Match", oa.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]);
                for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
                if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort();
                if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = X(Mb, o, c, x)) {
                    if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                    o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                        x.abort("timeout")
                    }, o.timeout));
                    try {
                        k = !1, e.send(u, d)
                    } catch (a) {
                        if (k) throw a;
                        d(-1, a)
                    }
                } else d(-1, "No Transport");
                return x
            },
            getJSON: function (a, b, c) {
                return oa.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return oa.get(a, void 0, b, "script")
            }
        }), oa.each(["get", "post"], function (a, b) {
            oa[b] = function (a, c, d, e) {
                return oa.isFunction(c) && (e = e || d, d = c, c = void 0), oa.ajax(oa.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, oa.isPlainObject(a) && a))
            }
        }), oa._evalUrl = function (a) {
            return oa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, oa.fn.extend({
            wrapAll: function (a) {
                var b;
                return this[0] && (oa.isFunction(a) && (a = a.call(this[0])), b = oa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this
            },
            wrapInner: function (a) {
                return oa.isFunction(a) ? this.each(function (b) {
                    oa(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = oa(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = oa.isFunction(a);
                return this.each(function (c) {
                    oa(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function (a) {
                return this.parent(a).not("body").each(function () {
                    oa(this).replaceWith(this.childNodes)
                }), this
            }
        }), oa.expr.pseudos.hidden = function (a) {
            return !oa.expr.pseudos.visible(a)
        }, oa.expr.pseudos.visible = function (a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }, oa.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest
            } catch (a) {}
        };
        var Pb = {
                0: 200,
                1223: 204
            },
            Qb = oa.ajaxSettings.xhr();
        ma.cors = !!Qb && "withCredentials" in Qb, ma.ajax = Qb = !!Qb, oa.ajaxTransport(function (b) {
            var c, d;
            if (ma.cors || Qb && !b.crossDomain) return {
                send: function (e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e) h.setRequestHeader(g, e[g]);
                    c = function (a) {
                        return function () {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                        4 === h.readyState && a.setTimeout(function () {
                            c && d()
                        })
                    }, c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (a) {
                        if (c) throw a
                    }
                },
                abort: function () {
                    c && c()
                }
            }
        }), oa.ajaxPrefilter(function (a) {
            a.crossDomain && (a.contents.script = !1)
        }), oa.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (a) {
                    return oa.globalEval(a), a
                }
            }
        }), oa.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), oa.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        b = oa("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function (a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), ba.head.appendChild(b[0])
                    },
                    abort: function () {
                        c && c()
                    }
                }
            }
        });
        var Rb = [],
            Sb = /(=)\?(?=&|$)|\?\?/;
        oa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var a = Rb.pop() || oa.expando + "_" + yb++;
                return this[a] = !0, a
            }
        }), oa.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = oa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || oa.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                void 0 === f ? oa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && oa.isFunction(f) && f(g[0]), g = f = void 0
            }), "script"
        }), ma.createHTMLDocument = function () {
            var a = ba.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
        }(), oa.parseHTML = function (a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && (c = b, b = !1);
            var d, e, f;
            return b || (ma.createHTMLDocument ? (b = ba.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ba.location.href, b.head.appendChild(d)) : b = ba), e = xa.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = t([a], b, f), f && f.length && oa(f).remove(), oa.merge([], e.childNodes))
        }, oa.fn.load = function (a, b, c) {
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = T(a.slice(h)), a = a.slice(0, h)), oa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && oa.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function (a) {
                f = arguments, g.html(d ? oa("<div>").append(oa.parseHTML(a)).find(d) : a)
            }).always(c && function (a, b) {
                g.each(function () {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, oa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            oa.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), oa.expr.pseudos.animated = function (a) {
            return oa.grep(oa.timers, function (b) {
                return a === b.elem
            }).length
        }, oa.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = oa.css(a, "position"),
                    l = oa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = oa.css(a, "top"), i = oa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), oa.isFunction(b) && (b = b.call(a, c, oa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, oa.fn.extend({
            offset: function (a) {
                if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                    oa.offset.setOffset(this, a, b)
                });
                var b, c, d, e, f = this[0];
                return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = _(e), b = e.documentElement, {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                }) : d) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === oa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), oa.nodeName(a[0], "html") || (d = a.offset()), d = {
                        top: d.top + oa.css(a[0], "borderTopWidth", !0),
                        left: d.left + oa.css(a[0], "borderLeftWidth", !0)
                    }), {
                        top: b.top - d.top - oa.css(c, "marginTop", !0),
                        left: b.left - d.left - oa.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent; a && "static" === oa.css(a, "position");) a = a.offsetParent;
                    return a || Ya
                })
            }
        }), oa.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, b) {
            var c = "pageYOffset" === b;
            oa.fn[a] = function (d) {
                return Ha(this, function (a, d, e) {
                    var f = _(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), oa.each(["top", "left"], function (a, b) {
            oa.cssHooks[b] = G(ma.pixelPosition, function (a, c) {
                if (c) return c = F(a, b), gb.test(c) ? oa(a).position()[b] + "px" : c
            })
        }), oa.each({
            Height: "height",
            Width: "width"
        }, function (a, b) {
            oa.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function (c, d) {
                oa.fn[d] = function (e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (e === !0 || f === !0 ? "margin" : "border");
                    return Ha(this, function (b, c, e) {
                        var f;
                        return oa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? oa.css(b, c, h) : oa.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }), oa.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), oa.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
            return oa
        });
        var Tb = a.jQuery,
            Ub = a.$;
        return oa.noConflict = function (b) {
            return a.$ === oa && (a.$ = Ub), b && a.jQuery === oa && (a.jQuery = Tb), oa
        }, b || (a.jQuery = a.$ = oa), oa
    }), ! function (a, b) {
        "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b()
    }(this, function () {
        var a = function (a, b) {
            this.items = a, this.settings = b || {
                diacritics: !0
            }
        };
        a.prototype.tokenize = function (a) {
            if (a = e(String(a || "").toLowerCase()), !a || !a.length) return [];
            var b, c, d, g, i = [],
                j = a.split(/ +/);
            for (b = 0, c = j.length; b < c; b++) {
                if (d = f(j[b]), this.settings.diacritics)
                    for (g in h) h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
                i.push({
                    string: j[b],
                    regex: new RegExp(d, "i")
                })
            }
            return i
        }, a.prototype.iterator = function (a, b) {
            var c;
            c = g(a) ? Array.prototype.forEach || function (a) {
                for (var b = 0, c = this.length; b < c; b++) a(this[b], b, this)
            } : function (a) {
                for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this)
            }, c.apply(a, [b])
        }, a.prototype.getScoreFunction = function (a, b) {
            var c, e, f, g, h;
            c = this, a = c.prepareSearch(a, b), f = a.tokens, e = a.options.fields, g = f.length, h = a.options.nesting;
            var i = function (a, b) {
                    var c, d;
                    return a ? (a = String(a || ""), d = a.search(b.regex), d === -1 ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
                },
                j = function () {
                    var a = e.length;
                    return a ? 1 === a ? function (a, b) {
                        return i(d(b, e[0], h), a)
                    } : function (b, c) {
                        for (var f = 0, g = 0; f < a; f++) g += i(d(c, e[f], h), b);
                        return g / a
                    } : function () {
                        return 0
                    }
                }();
            return g ? 1 === g ? function (a) {
                return j(f[0], a)
            } : "and" === a.options.conjunction ? function (a) {
                for (var b, c = 0, d = 0; c < g; c++) {
                    if (b = j(f[c], a), b <= 0) return 0;
                    d += b
                }
                return d / g
            } : function (a) {
                for (var b = 0, c = 0; b < g; b++) c += j(f[b], a);
                return c / g
            } : function () {
                return 0
            }
        }, a.prototype.getSortFunction = function (a, c) {
            var e, f, g, h, i, j, k, l, m, n, o;
            if (g = this, a = g.prepareSearch(a, c), o = !a.query && c.sort_empty || c.sort, m = function (a, b) {
                    return "$score" === a ? b.score : d(g.items[b.id], a, c.nesting)
                }, i = [], o)
                for (e = 0, f = o.length; e < f; e++)(a.query || "$score" !== o[e].field) && i.push(o[e]);
            if (a.query) {
                for (n = !0, e = 0, f = i.length; e < f; e++)
                    if ("$score" === i[e].field) {
                        n = !1;
                        break
                    }
                n && i.unshift({
                    field: "$score",
                    direction: "desc"
                })
            } else
                for (e = 0, f = i.length; e < f; e++)
                    if ("$score" === i[e].field) {
                        i.splice(e, 1);
                        break
                    } for (l = [], e = 0, f = i.length; e < f; e++) l.push("desc" === i[e].direction ? -1 : 1);
            return j = i.length, j ? 1 === j ? (h = i[0].field, k = l[0], function (a, c) {
                return k * b(m(h, a), m(h, c))
            }) : function (a, c) {
                var d, e, f;
                for (d = 0; d < j; d++)
                    if (f = i[d].field, e = l[d] * b(m(f, a), m(f, c))) return e;
                return 0
            } : null
        }, a.prototype.prepareSearch = function (a, b) {
            if ("object" == typeof a) return a;
            b = c({}, b);
            var d = b.fields,
                e = b.sort,
                f = b.sort_empty;
            return d && !g(d) && (b.fields = [d]), e && !g(e) && (b.sort = [e]), f && !g(f) && (b.sort_empty = [f]), {
                options: b,
                query: String(a || "").toLowerCase(),
                tokens: this.tokenize(a),
                total: 0,
                items: []
            }
        }, a.prototype.search = function (a, b) {
            var c, d, e, f, g = this;
            return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function (a, e) {
                c = f(a), (b.filter === !1 || c > 0) && d.items.push({
                    score: c,
                    id: e
                })
            }) : g.iterator(g.items, function (a, b) {
                d.items.push({
                    score: 1,
                    id: b
                })
            }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
        };
        var b = function (a, b) {
                return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = i(String(a || "")), b = i(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
            },
            c = function (a, b) {
                var c, d, e, f;
                for (c = 1, d = arguments.length; c < d; c++)
                    if (f = arguments[c])
                        for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                return a
            },
            d = function (a, b, c) {
                if (a && b) {
                    if (!c) return a[b];
                    for (var d = b.split("."); d.length && (a = a[d.shift()]););
                    return a
                }
            },
            e = function (a) {
                return (a + "").replace(/^\s+|\s+$|/g, "")
            },
            f = function (a) {
                return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            },
            g = Array.isArray || "undefined" != typeof $ && $.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            h = {
                a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
                b: "[b␢βΒB฿𐌁ᛒ]",
                c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
                d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
                e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
                f: "[fƑƒḞḟ]",
                g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
                h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
                i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
                j: "[jȷĴĵɈɉʝɟʲ]",
                k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
                l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
                n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
                o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
                p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
                q: "[qꝖꝗʠɊɋꝘꝙq̃]",
                r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
                s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
                t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
                u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
                v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
                w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
                x: "[xẌẍẊẋχ]",
                y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
                z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
            },
            i = function () {
                var a, b, c, d, e = "",
                    f = {};
                for (c in h)
                    if (h.hasOwnProperty(c))
                        for (d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length; a < b; a++) f[d.charAt(a)] = c;
                var g = new RegExp("[" + e + "]", "g");
                return function (a) {
                    return a.replace(g, function (a) {
                        return f[a]
                    }).toLowerCase()
                }
            }();
        return a
    }),
    function (a, b) {
        "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b()
    }(this, function () {
        var a = {};
        a.mixin = function (a) {
            a.plugins = {}, a.prototype.initializePlugins = function (a) {
                var c, d, e, f = this,
                    g = [];
                if (f.plugins = {
                        names: [],
                        settings: {},
                        requested: {},
                        loaded: {}
                    }, b.isArray(a))
                    for (c = 0, d = a.length; c < d; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
                else if (a)
                    for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
                for (; g.length;) f.require(g.shift())
            }, a.prototype.loadPlugin = function (b) {
                var c = this,
                    d = c.plugins,
                    e = a.plugins[b];
                if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
                d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
            }, a.prototype.require = function (a) {
                var b = this,
                    c = b.plugins;
                if (!b.plugins.loaded.hasOwnProperty(a)) {
                    if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
                    b.loadPlugin(a)
                }
                return c.loaded[a]
            }, a.define = function (b, c) {
                a.plugins[b] = {
                    name: b,
                    fn: c
                }
            }
        };
        var b = {
            isArray: Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
        };
        return a
    }),
    function (a, b) {
        "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin)
    }(this, function (a, b, c) {
        "use strict";
        var d = function (a, b) {
            if ("string" != typeof b || b.length) {
                var c = "string" == typeof b ? new RegExp(b, "i") : b,
                    d = function (a) {
                        var b = 0;
                        if (3 === a.nodeType) {
                            var e = a.data.search(c);
                            if (e >= 0 && a.data.length > 0) {
                                var f = a.data.match(c),
                                    g = document.createElement("span");
                                g.className = "highlight";
                                var h = a.splitText(e),
                                    i = (h.splitText(f[0].length), h.cloneNode(!0));
                                g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
                            }
                        } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))
                            for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
                        return b
                    };
                return a.each(function () {
                    d(this)
                })
            }
        };
        jQuery.fn.removeHighlight = function () {
            return this.find("span.highlight").each(function () {
                this.parentNode.firstChild.nodeName;
                var a = this.parentNode;
                a.replaceChild(this.firstChild, this), a.normalize()
            }).end()
        };
        var e = function () {};
        e.prototype = {
            on: function (a, b) {
                this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
            },
            off: function (a, b) {
                var c = arguments.length;
                return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != 0 && this._events[a].splice(this._events[a].indexOf(b), 1)))
            },
            trigger: function (a) {
                if (this._events = this._events || {}, a in this._events != 0)
                    for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }, e.mixin = function (a) {
            for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]]
        };
        var f = /Mac/.test(navigator.userAgent),
            g = 65,
            h = 13,
            i = 27,
            j = 37,
            k = 38,
            l = 80,
            m = 39,
            n = 40,
            o = 78,
            p = 8,
            q = 46,
            r = 16,
            s = f ? 91 : 17,
            t = f ? 18 : 17,
            u = 9,
            v = 1,
            w = 2,
            x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
            y = function (a) {
                return "undefined" != typeof a
            },
            z = function (a) {
                return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
            },
            A = function (a) {
                return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            B = {};
        B.before = function (a, b, c) {
            var d = a[b];
            a[b] = function () {
                return c.apply(a, arguments), d.apply(a, arguments)
            }
        }, B.after = function (a, b, c) {
            var d = a[b];
            a[b] = function () {
                var b = d.apply(a, arguments);
                return c.apply(a, arguments), b
            }
        };
        var C = function (a) {
                var b = !1;
                return function () {
                    b || (b = !0, a.apply(this, arguments))
                }
            },
            D = function (a, b) {
                var c;
                return function () {
                    var d = this,
                        e = arguments;
                    window.clearTimeout(c), c = window.setTimeout(function () {
                        a.apply(d, e)
                    }, b)
                }
            },
            E = function (a, b, c) {
                var d, e = a.trigger,
                    f = {};
                a.trigger = function () {
                    var c = arguments[0];
                    return b.indexOf(c) === -1 ? e.apply(a, arguments) : void(f[c] = arguments)
                }, c.apply(a, []), a.trigger = e;
                for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d])
            },
            F = function (a, b, c, d) {
                a.on(b, c, function (b) {
                    for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
                    return b.currentTarget = c, d.apply(this, [b])
                })
            },
            G = function (a) {
                var b = {};
                if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
                else if (document.selection) {
                    a.focus();
                    var c = document.selection.createRange(),
                        d = document.selection.createRange().text.length;
                    c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d
                }
                return b
            },
            H = function (a, b, c) {
                var d, e, f = {};
                if (c)
                    for (d = 0, e = c.length; d < e; d++) f[c[d]] = a.css(c[d]);
                else f = a.css();
                b.css(f)
            },
            I = function (b, c) {
                if (!b) return 0;
                var d = a("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(b).appendTo("body");
                H(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                var e = d.width();
                return d.remove(), e
            },
            J = function (a) {
                var b = null,
                    c = function (c, d) {
                        var e, f, g, h, i, j, k, l;
                        c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p ? (l = G(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = I(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
                    };
                a.on("keydown keyup update blur", c), c()
            },
            K = function (a) {
                var b = document.createElement("div");
                return b.appendChild(a.cloneNode(!0)), b.innerHTML
            },
            L = function (a, b) {
                b || (b = {});
                var c = "Selectize";
                console.error(c + ": " + a), b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd())
            },
            M = function (c, d) {
                var e, f, g, h, i = this;
                h = c[0], h.selectize = i;
                var j = window.getComputedStyle && window.getComputedStyle(h, null);
                if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
                        order: 0,
                        settings: d,
                        $input: c,
                        tabIndex: c.attr("tabindex") || "",
                        tagType: "select" === h.tagName.toLowerCase() ? v : w,
                        rtl: /rtl/i.test(g),
                        eventNS: ".selectize" + ++M.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: c.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: null === d.loadThrottle ? i.onSearchChange : D(i.onSearchChange, d.loadThrottle)
                    }), i.sifter = new b(this.options, {
                        diacritics: d.diacritics
                    }), i.settings.options) {
                    for (e = 0, f = i.settings.options.length; e < f; e++) i.registerOption(i.settings.options[e]);
                    delete i.settings.options
                }
                if (i.settings.optgroups) {
                    for (e = 0, f = i.settings.optgroups.length; e < f; e++) i.registerOptionGroup(i.settings.optgroups[e]);
                    delete i.settings.optgroups
                }
                i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
            };
        return e.mixin(M), "undefined" != typeof c ? c.mixin(M) : L("Dependency MicroPlugin is missing", {
            explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
        }), a.extend(M.prototype, {
            setup: function () {
                var b, c, d, e, g, h, i, j, k, l, m = this,
                    n = m.settings,
                    o = m.eventNS,
                    p = a(window),
                    q = a(document),
                    u = m.$input;
                if (i = m.settings.mode, j = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i),
                    c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", u.is(":disabled") ? "-1" : m.tabIndex), h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), (l = u.attr("id")) && (d.attr("id", l + "-selectized"), a("label[for='" + l + "']").attr("for", l + "-selectized")), m.settings.copyClassesToDropdown && e.addClass(j), b.css({
                        width: u[0].style.width
                    }), m.plugins.names.length && (k = "plugin-" + m.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), m.settings.placeholder && d.attr("placeholder", n.placeholder), !m.settings.splitOn && m.settings.delimiter) {
                    var w = m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
                }
                u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")), u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")), m.$wrapper = b, m.$control = c, m.$control_input = d, m.$dropdown = e, m.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function () {
                    return m.onOptionHover.apply(m, arguments)
                }), e.on("mousedown click", "[data-selectable]", function () {
                    return m.onOptionSelect.apply(m, arguments)
                }), F(c, "mousedown", "*:not(input)", function () {
                    return m.onItemSelect.apply(m, arguments)
                }), J(d), c.on({
                    mousedown: function () {
                        return m.onMouseDown.apply(m, arguments)
                    },
                    click: function () {
                        return m.onClick.apply(m, arguments)
                    }
                }), d.on({
                    mousedown: function (a) {
                        a.stopPropagation()
                    },
                    keydown: function () {
                        return m.onKeyDown.apply(m, arguments)
                    },
                    keyup: function () {
                        return m.onKeyUp.apply(m, arguments)
                    },
                    keypress: function () {
                        return m.onKeyPress.apply(m, arguments)
                    },
                    resize: function () {
                        m.positionDropdown.apply(m, [])
                    },
                    blur: function () {
                        return m.onBlur.apply(m, arguments)
                    },
                    focus: function () {
                        return m.ignoreBlur = !1, m.onFocus.apply(m, arguments)
                    },
                    paste: function () {
                        return m.onPaste.apply(m, arguments)
                    }
                }), q.on("keydown" + o, function (a) {
                    m.isCmdDown = a[f ? "metaKey" : "ctrlKey"], m.isCtrlDown = a[f ? "altKey" : "ctrlKey"], m.isShiftDown = a.shiftKey
                }), q.on("keyup" + o, function (a) {
                    a.keyCode === t && (m.isCtrlDown = !1), a.keyCode === r && (m.isShiftDown = !1), a.keyCode === s && (m.isCmdDown = !1)
                }), q.on("mousedown" + o, function (a) {
                    if (m.isFocused) {
                        if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) return !1;
                        m.$control.has(a.target).length || a.target === m.$control[0] || m.blur(a.target)
                    }
                }), p.on(["scroll" + o, "resize" + o].join(" "), function () {
                    m.isOpen && m.positionDropdown.apply(m, arguments)
                }), p.on("mousemove" + o, function () {
                    m.ignoreHover = !1
                }), this.revertSettings = {
                    $children: u.children().detach(),
                    tabindex: u.attr("tabindex")
                }, u.attr("tabindex", -1).hide().after(m.$wrapper), a.isArray(n.items) && (m.setValue(n.items), delete n.items), x && u.on("invalid" + o, function (a) {
                    a.preventDefault(), m.isInvalid = !0, m.refreshState()
                }), m.updateOriginalInput(), m.refreshItems(), m.refreshState(), m.updatePlaceholder(), m.isSetup = !0, u.is(":disabled") && m.disable(), m.on("change", this.onChange), u.data("selectize", m), u.addClass("selectized"), m.trigger("initialize"), n.preload === !0 && m.onSearchChange("")
            },
            setupTemplates: function () {
                var b = this,
                    c = b.settings.labelField,
                    d = b.settings.optgroupLabelField,
                    e = {
                        optgroup: function (a) {
                            return '<div class="optgroup">' + a.html + "</div>"
                        },
                        optgroup_header: function (a, b) {
                            return '<div class="optgroup-header">' + b(a[d]) + "</div>"
                        },
                        option: function (a, b) {
                            return '<div class="option">' + b(a[c]) + "</div>"
                        },
                        item: function (a, b) {
                            return '<div class="item">' + b(a[c]) + "</div>"
                        },
                        option_create: function (a, b) {
                            return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
                        }
                    };
                b.settings.render = a.extend({}, e, b.settings.render)
            },
            setupCallbacks: function () {
                var a, b, c = {
                    initialize: "onInitialize",
                    change: "onChange",
                    item_add: "onItemAdd",
                    item_remove: "onItemRemove",
                    clear: "onClear",
                    option_add: "onOptionAdd",
                    option_remove: "onOptionRemove",
                    option_clear: "onOptionClear",
                    optgroup_add: "onOptionGroupAdd",
                    optgroup_remove: "onOptionGroupRemove",
                    optgroup_clear: "onOptionGroupClear",
                    dropdown_open: "onDropdownOpen",
                    dropdown_close: "onDropdownClose",
                    type: "onType",
                    load: "onLoad",
                    focus: "onFocus",
                    blur: "onBlur"
                };
                for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
            },
            onClick: function (a) {
                var b = this;
                b.isFocused || (b.focus(), a.preventDefault())
            },
            onMouseDown: function (b) {
                var c = this,
                    d = b.isDefaultPrevented();
                if (a(b.target), c.isFocused) {
                    if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
                } else d || window.setTimeout(function () {
                    c.focus()
                }, 0)
            },
            onChange: function () {
                this.$input.trigger("change")
            },
            onPaste: function (b) {
                var c = this;
                return c.isFull() || c.isInputHidden || c.isLocked ? void b.preventDefault() : void(c.settings.splitOn && setTimeout(function () {
                    var b = c.$control_input.val();
                    if (b.match(c.settings.splitOn))
                        for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++) c.createItem(d[e])
                }, 0))
            },
            onKeyPress: function (a) {
                if (this.isLocked) return a && a.preventDefault();
                var b = String.fromCharCode(a.keyCode || a.which);
                return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
            },
            onKeyDown: function (a) {
                var b = (a.target === this.$control_input[0], this);
                if (b.isLocked) return void(a.keyCode !== u && a.preventDefault());
                switch (a.keyCode) {
                    case g:
                        if (b.isCmdDown) return void b.selectAll();
                        break;
                    case i:
                        return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
                    case o:
                        if (!a.ctrlKey || a.altKey) break;
                    case n:
                        if (!b.isOpen && b.hasOptions) b.open();
                        else if (b.$activeOption) {
                            b.ignoreHover = !0;
                            var c = b.getAdjacentOption(b.$activeOption, 1);
                            c.length && b.setActiveOption(c, !0, !0)
                        }
                        return void a.preventDefault();
                    case l:
                        if (!a.ctrlKey || a.altKey) break;
                    case k:
                        if (b.$activeOption) {
                            b.ignoreHover = !0;
                            var d = b.getAdjacentOption(b.$activeOption, -1);
                            d.length && b.setActiveOption(d, !0, !0)
                        }
                        return void a.preventDefault();
                    case h:
                        return void(b.isOpen && b.$activeOption && (b.onOptionSelect({
                            currentTarget: b.$activeOption
                        }), a.preventDefault()));
                    case j:
                        return void b.advanceSelection(-1, a);
                    case m:
                        return void b.advanceSelection(1, a);
                    case u:
                        return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
                            currentTarget: b.$activeOption
                        }), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
                    case p:
                    case q:
                        return void b.deleteSelection(a)
                }
                return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
            },
            onKeyUp: function (a) {
                var b = this;
                if (b.isLocked) return a && a.preventDefault();
                var c = b.$control_input.val() || "";
                b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
            },
            onSearchChange: function (a) {
                var b = this,
                    c = b.settings.load;
                c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function (d) {
                    c.apply(b, [a, d])
                })))
            },
            onFocus: function (a) {
                var b = this,
                    c = b.isFocused;
                return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
            },
            onBlur: function (a, b) {
                var c = this;
                if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
                    if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);
                    var d = function () {
                        c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), b && b.focus(), c.ignoreFocus = !1, c.trigger("blur")
                    };
                    c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
                }
            },
            onOptionHover: function (a) {
                this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
            },
            onOptionSelect: function (b) {
                var c, d, e = this;
                b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function () {
                    e.settings.closeAfterSelect && e.close()
                }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
            },
            onItemSelect: function (a) {
                var b = this;
                b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
            },
            load: function (a) {
                var b = this,
                    c = b.$wrapper.addClass(b.settings.loadingClass);
                b.loading++, a.apply(b, [function (a) {
                    b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
                }])
            },
            setTextboxValue: function (a) {
                var b = this.$control_input,
                    c = b.val() !== a;
                c && (b.val(a).triggerHandler("update"), this.lastValue = a)
            },
            getValue: function () {
                return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
            },
            setValue: function (a, b) {
                var c = b ? [] : ["change"];
                E(this, c, function () {
                    this.clear(b), this.addItems(a, b)
                })
            },
            setActiveItem: function (b, c) {
                var d, e, f, g, h, i, j, k, l = this;
                if ("single" !== l.settings.mode) {
                    if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
                    if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                        for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++) i = l.$control[0].childNodes[e], l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
                        c.preventDefault()
                    } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
                    l.hideInput(), this.isFocused || l.focus()
                }
            },
            setActiveOption: function (b, c, d) {
                var e, f, g, h, i, j = this;
                j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
                    scrollTop: i
                }, d ? j.settings.scrollDuration : 0) : g < c && j.$dropdown_content.stop().animate({
                    scrollTop: h
                }, d ? j.settings.scrollDuration : 0)))
            },
            selectAll: function () {
                var a = this;
                "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
            },
            hideInput: function () {
                var a = this;
                a.setTextboxValue(""), a.$control_input.css({
                    opacity: 0,
                    position: "absolute",
                    left: a.rtl ? 1e4 : -1e4
                }), a.isInputHidden = !0
            },
            showInput: function () {
                this.$control_input.css({
                    opacity: 1,
                    position: "relative",
                    left: 0
                }), this.isInputHidden = !1
            },
            focus: function () {
                var a = this;
                a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function () {
                    a.ignoreFocus = !1, a.onFocus()
                }, 0))
            },
            blur: function (a) {
                this.$control_input[0].blur(), this.onBlur(null, a)
            },
            getScoreFunction: function (a) {
                return this.sifter.getScoreFunction(a, this.getSearchOptions())
            },
            getSearchOptions: function () {
                var a = this.settings,
                    b = a.sortField;
                return "string" == typeof b && (b = [{
                    field: b
                }]), {
                    fields: a.searchField,
                    conjunction: a.searchConjunction,
                    sort: b
                }
            },
            search: function (b) {
                var c, d, e, f = this,
                    g = f.settings,
                    h = this.getSearchOptions();
                if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
                if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
                        score: e
                    })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
                    for (c = d.items.length - 1; c >= 0; c--) f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
                return d
            },
            refreshOptions: function (b) {
                var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                "undefined" == typeof b && (b = !0);
                var t = this,
                    u = a.trim(t.$control_input.val()),
                    v = t.search(u),
                    w = t.$dropdown_content,
                    x = t.$activeOption && z(t.$activeOption.attr("data-value"));
                for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++)
                    for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; e < f; e++) l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = document.createDocumentFragment(), i.push(l)), h[l].appendChild(k);
                for (this.settings.lockOptgroupOrder && i.sort(function (a, b) {
                        var c = t.optgroups[a].$order || 0,
                            d = t.optgroups[b].$order || 0;
                        return c - d
                    }), n = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].childNodes.length ? (o = document.createDocumentFragment(), o.appendChild(t.render("optgroup_header", t.optgroups[l])), o.appendChild(h[l]), n.appendChild(t.render("optgroup", a.extend({}, t.optgroups[l], {
                    html: K(o),
                    dom: o
                })))) : n.appendChild(h[l]);
                if (w.html(n), t.settings.highlight && v.query.length && v.tokens.length)
                    for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++) d(w, v.tokens[c].regex);
                if (!t.settings.hideSelected)
                    for (c = 0, g = t.items.length; c < g; c++) t.getOption(t.items[c]).addClass("selected");
                p = t.canCreate(u), p && (w.prepend(t.render("option_create", {
                    input: u
                })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
            },
            addOption: function (b) {
                var c, d, e, f = this;
                if (a.isArray(b))
                    for (c = 0, d = b.length; c < d; c++) f.addOption(b[c]);
                else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
            },
            registerOption: function (a) {
                var b = z(a[this.settings.valueField]);
                return "undefined" != typeof b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b)
            },
            registerOptionGroup: function (a) {
                var b = z(a[this.settings.optgroupValueField]);
                return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b)
            },
            addOptionGroup: function (a, b) {
                b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
            },
            removeOptionGroup: function (a) {
                this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
            },
            clearOptionGroups: function () {
                this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
            },
            updateOption: function (b, c) {
                var d, e, f, g, h, i, j, k = this;
                if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
                    if ("string" != typeof f) throw new Error("Value must be set in option data");
                    j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
                }
            },
            removeOption: function (a, b) {
                var c = this;
                a = z(a);
                var d = c.renderCache.item,
                    e = c.renderCache.option;
                d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
            },
            clearOptions: function () {
                var a = this;
                a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
            },
            getOption: function (a) {
                return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
            },
            getAdjacentOption: function (b, c) {
                var d = this.$dropdown.find("[data-selectable]"),
                    e = d.index(b) + c;
                return e >= 0 && e < d.length ? d.eq(e) : a()
            },
            getElementWithValue: function (b, c) {
                if (b = z(b), "undefined" != typeof b && null !== b)
                    for (var d = 0, e = c.length; d < e; d++)
                        if (c[d].getAttribute("data-value") === b) return a(c[d]);
                return a()
            },
            getItem: function (a) {
                return this.getElementWithValue(a, this.$control.children())
            },
            addItems: function (b, c) {
                for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++) this.isPending = e < f - 1, this.addItem(d[e], c)
            },
            addItem: function (b, c) {
                var d = c ? [] : ["change"];
                E(this, d, function () {
                    var d, e, f, g, h, i = this,
                        j = i.settings.mode;
                    return b = z(b), i.items.indexOf(b) !== -1 ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({
                        silent: c
                    })))))
                })
            },
            removeItem: function (b, c) {
                var d, e, f, g = this;
                d = b instanceof a ? b : g.getItem(b), b = z(d.attr("data-value")), e = g.items.indexOf(b), e !== -1 && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({
                    silent: c
                }), g.positionDropdown(), g.trigger("item_remove", b, d))
            },
            createItem: function (b, c) {
                var d = this,
                    e = d.caretPos;
                b = b || a.trim(d.$control_input.val() || "");
                var f = arguments[arguments.length - 1];
                if ("function" != typeof f && (f = function () {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;
                d.lock();
                var g = "function" == typeof d.settings.create ? this.settings.create : function (a) {
                        var b = {};
                        return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
                    },
                    h = C(function (a) {
                        if (d.unlock(), !a || "object" != typeof a) return f();
                        var b = z(a[d.settings.valueField]);
                        return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
                    }),
                    i = g.apply(this, [b, h]);
                return "undefined" != typeof i && h(i), !0
            },
            refreshItems: function () {
                this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
            },
            refreshState: function () {
                this.refreshValidityState(), this.refreshClasses()
            },
            refreshValidityState: function () {
                if (!this.isRequired) return !1;
                var a = !this.items.length;
                this.isInvalid = a, this.$control_input.prop("required", a), this.$input.prop("required", !a)
            },
            refreshClasses: function () {
                var b = this,
                    c = b.isFull(),
                    d = b.isLocked;
                b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
            },
            isFull: function () {
                return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
            },
            updateOriginalInput: function (a) {
                var b, c, d, e, f = this;
                if (a = a || {}, f.tagType === v) {
                    for (d = [], b = 0, c = f.items.length; b < c; b++) e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
                    d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""))
                } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
                f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
            },
            updatePlaceholder: function () {
                if (this.settings.placeholder) {
                    var a = this.$control_input;
                    this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {
                        force: !0
                    })
                }
            },
            open: function () {
                var a = this;
                a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({
                    visibility: "hidden",
                    display: "block"
                }), a.positionDropdown(), a.$dropdown.css({
                    visibility: "visible"
                }), a.trigger("dropdown_open", a.$dropdown))
            },
            close: function () {
                var a = this,
                    b = a.isOpen;
                "single" === a.settings.mode && a.items.length && (a.hideInput(), a.$control_input.blur()), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
            },
            positionDropdown: function () {
                var a = this.$control,
                    b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
                b.top += a.outerHeight(!0), this.$dropdown.css({
                    width: a.outerWidth(),
                    top: b.top,
                    left: b.left
                })
            },
            clear: function (a) {
                var b = this;
                b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({
                    silent: a
                }), b.refreshState(), b.showInput(), b.trigger("clear"))
            },
            insertAtCaret: function (b) {
                var c = Math.min(this.caretPos, this.items.length);
                0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
            },
            deleteSelection: function (b) {
                var c, d, e, f, g, h, i, j, k, l = this;
                if (e = b && b.keyCode === p ? -1 : 1, f = G(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
                    for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
                    b && (b.preventDefault(), b.stopPropagation())
                } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
                if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;
                for ("undefined" != typeof h && l.setCaret(h); g.length;) l.removeItem(g.pop());
                return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
            },
            advanceSelection: function (a, b) {
                var c, d, e, f, g, h, i = this;
                0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = G(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
            },
            advanceCaret: function (a, b) {
                var c, d, e = this;
                0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
            },
            setCaret: function (b) {
                var c = this;
                if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
                    var d, e, f, g;
                    for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++) g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g)
                }
                c.caretPos = b
            },
            lock: function () {
                this.close(), this.isLocked = !0, this.refreshState()
            },
            unlock: function () {
                this.isLocked = !1, this.refreshState()
            },
            disable: function () {
                var a = this;
                a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
            },
            enable: function () {
                var a = this;
                a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
            },
            destroy: function () {
                var b = this,
                    c = b.eventNS,
                    d = b.revertSettings;
                b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
                    tabindex: d.tabindex
                }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
            },
            render: function (b, c) {
                var d, e, f = "",
                    g = !1,
                    h = this;
                return "option" !== b && "item" !== b || (d = z(c[h.settings.valueField]), g = !!d), g && (y(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d)) ? h.renderCache[b][d] : (f = a(h.settings.render[b].apply(this, [c, A])), "option" === b || "option_create" === b ? f.attr("data-selectable", "") : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e)), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0])
            },
            clearCache: function (a) {
                var b = this;
                "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
            },
            canCreate: function (a) {
                var b = this;
                if (!b.settings.create) return !1;
                var c = b.settings.createFilter;
                return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
            }
        }), M.count = 0, M.defaults = {
            options: [],
            optgroups: [],
            plugins: [],
            delimiter: ",",
            splitOn: null,
            persist: !0,
            diacritics: !0,
            create: !1,
            createOnBlur: !1,
            createFilter: null,
            highlight: !0,
            openOnFocus: !0,
            maxOptions: 1e3,
            maxItems: null,
            hideSelected: null,
            addPrecedence: !1,
            selectOnTab: !1,
            preload: !1,
            allowEmptyOption: !1,
            closeAfterSelect: !1,
            scrollDuration: 60,
            loadThrottle: 300,
            loadingClass: "loading",
            dataAttr: "data-data",
            optgroupField: "optgroup",
            valueField: "value",
            labelField: "text",
            optgroupLabelField: "label",
            optgroupValueField: "value",
            lockOptgroupOrder: !1,
            sortField: "$order",
            searchField: ["text"],
            searchConjunction: "and",
            mode: null,
            wrapperClass: "selectize-control",
            inputClass: "selectize-input",
            dropdownClass: "selectize-dropdown",
            dropdownContentClass: "selectize-dropdown-content",
            dropdownParent: null,
            copyClassesToDropdown: !0,
            render: {}
        }, a.fn.selectize = function (b) {
            var c = a.fn.selectize.defaults,
                d = a.extend({}, c, b),
                e = d.dataAttr,
                f = d.labelField,
                g = d.valueField,
                h = d.optgroupField,
                i = d.optgroupLabelField,
                j = d.optgroupValueField,
                k = function (b, c) {
                    var h, i, j, k, l = b.attr(e);
                    if (l)
                        for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++) c.items.push(c.options[h][g]);
                    else {
                        var m = a.trim(b.val() || "");
                        if (!d.allowEmptyOption && !m.length) return;
                        for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++) k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
                        c.items = j
                    }
                },
                l = function (b, c) {
                    var k, l, m, n, o = c.options,
                        p = {},
                        q = function (a) {
                            var b = e && a.attr(e);
                            return "string" == typeof b && b.length ? JSON.parse(b) : null
                        },
                        r = function (b, e) {
                            b = a(b);
                            var i = z(b.val());
                            if (i || d.allowEmptyOption)
                                if (p.hasOwnProperty(i)) {
                                    if (e) {
                                        var j = p[i][h];
                                        j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
                                    }
                                } else {
                                    var k = q(b) || {};
                                    k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
                                }
                        },
                        s = function (b) {
                            var d, e, f, g, h;
                            for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++) r(h[d], f)
                        };
                    for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; k < l; k++) m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
                };
            return this.each(function () {
                if (!this.selectize) {
                    var e, f = a(this),
                        g = this.tagName.toLowerCase(),
                        h = f.attr("placeholder") || f.attr("data-placeholder");
                    h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
                    var i = {
                        placeholder: h,
                        options: [],
                        optgroups: [],
                        items: []
                    };
                    "select" === g ? l(f, i) : k(f, i), e = new M(f, a.extend(!0, {}, c, i, b))
                }
            })
        }, a.fn.selectize.defaults = M.defaults, a.fn.selectize.support = {
            validity: x
        }, M.define("drag_drop", function (b) {
            if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
            if ("multi" === this.settings.mode) {
                var c = this;
                c.lock = function () {
                    var a = c.lock;
                    return function () {
                        var b = c.$control.data("sortable");
                        return b && b.disable(), a.apply(c, arguments)
                    }
                }(), c.unlock = function () {
                    var a = c.unlock;
                    return function () {
                        var b = c.$control.data("sortable");
                        return b && b.enable(), a.apply(c, arguments)
                    }
                }(), c.setup = function () {
                    var b = c.setup;
                    return function () {
                        b.apply(this, arguments);
                        var d = c.$control.sortable({
                            items: "[data-value]",
                            forcePlaceholderSize: !0,
                            disabled: c.isLocked,
                            start: function (a, b) {
                                b.placeholder.css("width", b.helper.css("width")), d.css({
                                    overflow: "visible"
                                })
                            },
                            stop: function () {
                                d.css({
                                    overflow: "hidden"
                                });
                                var b = c.$activeItems ? c.$activeItems.slice() : null,
                                    e = [];
                                d.children("[data-value]").each(function () {
                                    e.push(a(this).attr("data-value"))
                                }), c.setValue(e), c.setActiveItem(b)
                            }
                        })
                    }
                }()
            }
        }), M.define("dropdown_header", function (b) {
            var c = this;
            b = a.extend({
                title: "Untitled",
                headerClass: "selectize-dropdown-header",
                titleRowClass: "selectize-dropdown-header-title",
                labelClass: "selectize-dropdown-header-label",
                closeClass: "selectize-dropdown-header-close",
                html: function (a) {
                    return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
                }
            }, b), c.setup = function () {
                var d = c.setup;
                return function () {
                    d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
                }
            }()
        }), M.define("optgroup_columns", function (b) {
            var c = this;
            b = a.extend({
                equalizeWidth: !0,
                equalizeHeight: !0
            }, b), this.getAdjacentOption = function (b, c) {
                var d = b.closest("[data-group]").find("[data-selectable]"),
                    e = d.index(b) + c;
                return e >= 0 && e < d.length ? d.eq(e) : a()
            }, this.onKeyDown = function () {
                var a = c.onKeyDown;
                return function (b) {
                    var d, e, f, g;
                    return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
                }
            }();
            var d = function () {
                    var a, b = d.width,
                        c = document;
                    return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
                },
                e = function () {
                    var e, f, g, h, i, j, k;
                    if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                        if (b.equalizeHeight) {
                            for (g = 0, e = 0; e < f; e++) g = Math.max(g, k.eq(e).height());
                            k.css({
                                height: g
                            })
                        }
                        b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({
                            width: h
                        }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
                            width: i
                        })))
                    }
                };
            (b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), B.after(this, "refreshOptions", e))
        }), M.define("remove_button", function (b) {
            b = a.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, b);
            var c = function (b, c) {
                    c.className = "remove-single";
                    var d = b,
                        e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
                        f = function (a, b) {
                            return a + b
                        };
                    b.setup = function () {
                        var g = d.setup;
                        return function () {
                            if (c.append) {
                                var h = a(d.$input.context).attr("id"),
                                    i = (a("#" + h), d.settings.render.item);
                                d.settings.render.item = function (a) {
                                    return f(i.apply(b, arguments), e)
                                }
                            }
                            g.apply(b, arguments), b.$control.on("click", "." + c.className, function (a) {
                                a.preventDefault(), d.isLocked || d.clear()
                            })
                        }
                    }()
                },
                d = function (b, c) {
                    var d = b,
                        e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
                        f = function (a, b) {
                            var c = a.search(/(<\/[^>]+>\s*)$/);
                            return a.substring(0, c) + b + a.substring(c)
                        };
                    b.setup = function () {
                        var g = d.setup;
                        return function () {
                            if (c.append) {
                                var h = d.settings.render.item;
                                d.settings.render.item = function (a) {
                                    return f(h.apply(b, arguments), e)
                                }
                            }
                            g.apply(b, arguments), b.$control.on("click", "." + c.className, function (b) {
                                if (b.preventDefault(), !d.isLocked) {
                                    var c = a(b.currentTarget).parent();
                                    d.setActiveItem(c), d.deleteSelection() && d.setCaret(d.items.length)
                                }
                            })
                        }
                    }()
                };
            return "single" === this.settings.mode ? void c(this, b) : void d(this, b)
        }), M.define("restore_on_backspace", function (a) {
            var b = this;
            a.text = a.text || function (a) {
                return a[this.settings.labelField]
            }, this.onKeyDown = function () {
                var c = b.onKeyDown;
                return function (b) {
                    var d, e;
                    return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
                }
            }()
        }), M
    }), setTimeout(function () {
        var a = document.getElementById("websitecheck");
        if (a && location.hash) {
            var b = location.hash.substr(1);
            if (b) {
                var c = b.substr(b.indexOf("url=")).split("&")[0].split("=")[1];
                if (c) {
                    var d = document.createElement("a");
                    d.href = unescape(c), a.value = d.href
                }
            }
        }
    }), window.testtools = [{
        id: "google_pagespeed_business",
        type: "performance",
        name: "Google PageSpeed Score for businesses",
        desc: "Google PageSpeed test with info for company owners.",
        google: !0,
        essential: !0,
        testurl: "https://testmysite.thinkwithgoogle.com/?url={{escaped_url}}"
    }, {
        id: "google_pagespeed",
        type: "performance",
        name: "Google PageSpeed Score (professional)",
        desc: "The Google PageSpeed score displays the technical quality.",
        google: !0,
        essential: !0,
        testurl: "https://developers.google.com/speed/pagespeed/insights/?url={{escaped_url}}"
    }, {
        id: "google_mobileseo",
        type: "seo",
        name: "Google Mobile SEO",
        desc: "Test for mobile indexation problems in Google.",
        google: !0,
        essential: !0,
        testurl: "https://search.google.com/search-console/mobile-friendly?url={{escaped_url}}"
    }, {
        id: "google_malware",
        type: "security",
        name: "Google Malware",
        desc: "Test for Google Malware listing (viruses, hosting-hacks etc.).",
        google: !0,
        essential: !0,
        testurl: "https://www.google.com/safebrowsing/diagnostic?site={{escaped_hostname}}&output=embed"
    }, {
        id: "webpagetest",
        type: "performance",
        name: "WebPageTest.org",
        desc: "Test for performance problems.",
        testurl: "https://www.webpagetest.org/?url={{escaped_url}}"
    }, {
        id: "neustardns",
        type: "performance",
        name: "Neustar DNS performance test",
        desc: "Test of DNS hosting speed and reliability.",
        essential: !0,
        testurl: "https://www.ultratools.com/tools/dnsHostingSpeedResult?hostName={{escaped_hostname}}"
    }, {
        id: "pingdom",
        type: "performance",
        name: "Pingdom Tools",
        desc: "Test for performance problems.",
        testurl: "https://tools.pingdom.com/fpt/?url={{escaped_url}}"
    }, {
        id: "gtmetrix",
        type: "performance",
        name: "GTMetrix",
        desc: "Test for performance problems.",
        testurl: "https://gtmetrix.com/?url={{escaped_url}}"
    }, {
        id: "redbot",
        type: "performance",
        name: "REDbot",
        desc: "Security and performance test based on server headers.",
        testurl: "https://redbot.org/?uri={{escaped_url}}"
    }, {
        id: "securiperf",
        type: "performance",
        name: "Securi International Load Time Tester",
        desc: "International speed test from multiple locations in the world (overview).",
        testurl: "https://performance.sucuri.net/domain/{{escaped_hostname}}"
    }, {
        id: "keycdn",
        type: "performance",
        name: "KeyCDN International Speed Test",
        desc: "Speed test with the option to select a location in the world.",
        testurl: "https://tools.keycdn.com/speed?url={{escaped_url}}"
    }, {
        id: "uptrends",
        type: "performance",
        name: "Uptrends International Speed Test",
        desc: "Speed test with the option to select a location in the world.",
        testurl: "https://www.uptrends.com/tools/website-speed-test?url={{escaped_url}}"
    }, {
        id: "dotcomtools",
        type: "performance",
        name: "Dotcom Tools International Speed Test",
        desc: "Speed test with real browsers from multiple locations in the world.",
        testurl: "https://www.dotcom-tools.com/website-speed-test.aspx?url={{escaped_url}}"
    }, {
        id: "showslow",
        type: "performance",
        name: "ShowSlow.com",
        desc: "Collection of tests and monitor.",
        testurl: "http://www.showslow.com/my.php?url={{escaped_url}}"
    }, {
        id: "pagescoring",
        type: "performance",
        name: "PageScoring Speed Test",
        desc: "Simple website speed test.",
        testurl: "http://www.pagescoring.com/website-speed-test/?url={{escaped_url}}"
    }, {
        id: "yellowlab",
        type: "performance",
        name: "YellowLab.tools Simple Test",
        desc: "Simple website performance test.",
        testurl: "http://yellowlab.tools/?url={{escaped_url}}"
    }, {
        id: "ssllabs",
        type: "security",
        name: "SSL Labs",
        desc: "Test for SSL performance and security problems.",
        essential: !0,
        testurl: "https://www.ssllabs.com/ssltest/analyze.html?d={{escaped_url}}"
    }, {
        id: "intodns",
        type: "security",
        name: "Into DNS",
        desc: "Test for DNS problems.",
        essential: !0,
        testurl: "http://www.intodns.com/{{escaped_hostname}}"
    }, {
        id: "securi",
        type: "security",
        name: "Securi Malware and Security Scanner",
        desc: "Comprehensive security and malware scan with blacklist check.",
        testurl: "https://sitecheck.sucuri.net/results/{{escaped_hostname}}",
        analytics: "hash",
        window: !0
    }, {
        id: "securityheaders",
        type: "security",
        name: "SecurityHeaders.io: Server Header Security Analysis",
        desc: "Test for website security based on HTTP headers.<br /><strong>Tip:</strong> HTTP headers are visible for Google.",
        essential: !0,
        testurl: "https://securityheaders.io/?q={{escaped_url}}&followRedirects=on&hide=on"
    }, {
        id: "htmlvalidator",
        type: "security",
        name: "HTML Validator",
        desc: "Test for HTML quality.",
        testurl: "https://validator.w3.org/nu/?doc={{escaped_url}}"
    }, {
        id: "cspvalidator",
        type: "security",
        name: "Content Security Policy (CSP) Validator",
        desc: "Test for Content Security Policy (CSP).",
        testurl: "https://cspvalidator.org/#url={{escaped_url}}"
    }, {
        id: "norton",
        type: "security",
        name: "Norton Safe Web Report",
        desc: "Website reputation check from Symantec (Norton).",
        testurl: "https://safeweb.norton.com/report/show?url={{escaped_url}}"
    }, {
        id: "htbridge",
        type: "security",
        name: "High-Tech Bridge Web Server Security Test",
        desc: "Free web server (hosting) security analysis.",
        testurl: "https://www.htbridge.com/websec/?domainname={{escaped_hostname}}"
    }, {
        id: "mxtoolboxmx",
        type: "security",
        name: "MX Toolbox: mailserver DNS test",
        desc: "Test of the email server (click on <strong>SMTP Test</strong> after completion).",
        testurl: "http://mxtoolbox.com/SuperTool.aspx?action=mx%3a{{escaped_hostname}}&run=toolpage"
    }, {
        id: "mxtoolboxblacklist",
        type: "security",
        name: "MX Toolbox: blacklist check",
        desc: "Verify if the server is blacklisted on email blacklists.",
        testurl: "http://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a{{escaped_hostname}}&run=toolpage"
    }, {
        id: "webinspector",
        type: "security",
        name: "Web Inspector Malware & Security Scan",
        desc: "Test for security vulnerabilities, malware, viruses and blacklist.",
        testurl: "https://app.webinspector.com/public/tasks?url={{escaped_hostname}}",
        method: "post"
    }, {
        id: "moz_crawltest",
        type: "seo",
        name: "Moz Pro: Crawl Test",
        desc: "Test for technical SEO problems.",
        paid: !0,
        testurl: "https://moz.com/researchtools/ose/links?site={{escaped_url}}"
    }, {
        id: "hubspot",
        type: "seo",
        name: "Hubspot: Website Grader",
        desc: "Free general SEO analysis.",
        testurl: "https://website.grader.com/results/{{escaped_hostname}}"
    }, {
        id: "alexa",
        type: "seo",
        name: "Alexa Traffic Rank",
        desc: "World ranking of websites.",
        testurl: "https://www.alexa.com/siteinfo/{{escaped_hostname}}"
    }, {
        id: "dareboost",
        type: "seo",
        name: "DareBoost SEO Quality & Performance",
        desc: "Complete test for performance, security and SEO.",
        paid: !0,
        testurl: "https://www.dareboost.com/en/home?url={{escaped_url}}"
    }, {
        id: "nibbler",
        type: "seo",
        name: "Nibbler SEO report",
        desc: "Comprehensive report for website improvement.",
        testurl: "https://nibbler.silktide.com/en_US/report/submit?url={{escaped_url}}",
        method: "post"
    }, {
        id: "seo_report_card",
        type: "seo",
        name: "UpCity SEO Report Card",
        desc: "Free SEO competition analysis.",
        testurl: "https://app.upcity.com/free-tools/seo-report-card?url={{escaped_url}}"
    }, {
        id: "woorank",
        type: "seo",
        name: "WooRank",
        desc: "Deep SEO analysis.",
        paid: !0,
        testurl: "https://www.woorank.com/nl/www/{{escaped_hostname}}"
    }, {
        id: "removeem",
        type: "seo",
        name: "Remove'em Backlink Removal",
        desc: "Tool for removing damaging links.",
        paid: !0,
        testurl: "http://www.removeem.com/ratios.php?domain={{escaped_hostname}}"
    }, {
        id: "pagelocity",
        type: "seo",
        name: "Pagelocity Performance & SEO Analysis",
        desc: "Test for performance issues related to SEO.",
        testurl: "http://pagelocity.com/analyzer?url={{escaped_url}}"
    }],
    function (a) {
        window.WebsiteCheck = {
            menu: !1,
            init: function () {
                0 !== jQuery("#testtools").length && (this.menu = jQuery("#testtools").selectize({
                    options: window.testtools,
                    optgroups: [{
                        id: "performance",
                        name: "Performance"
                    }, {
                        id: "seo",
                        name: "SEO"
                    }, {
                        id: "security",
                        name: "Security"
                    }],
                    render: {
                        option: function (a, b) {
                            var c = "";
                            return a.google && ("" === c && (c += "&nbsp;"), c += '&nbsp;<span class="icon-google-plus" style="color:blue;" title="Google Test"></span>'), a.essential && ("" === c && (c += "&nbsp;"), c += '&nbsp;<span class="icon-warning" style="color:red;" title="Essential Test"></span>'), a.paid && ("" === c && (c += "&nbsp;"), c += '&nbsp;<span class="icon-credit-card" style="color:green;" title="Paid Test"></span>'), '<div><span class="title"><span class="name">' + b(a.name) + c + '</span></span><div class="description">' + a.desc + "</div></div>"
                        }
                    },
                    labelField: "name",
                    valueField: "id",
                    optgroupField: "type",
                    optgroupLabelField: "name",
                    optgroupValueField: "id",
                    optgroupOrder: ["performance", "seo", "security"],
                    searchField: ["name"],
                    plugins: ["optgroup_columns"]
                }), a("form#test").on("submit", window.WebsiteCheck.start))
            },
            get_tool: function (a) {
                var b = !1;
                return jQuery.each(window.testtools, function (c, d) {
                    d.id === a && (b = d)
                }), b
            },
            start: function (b) {
                var c = a("form#test"),
                    d = jQuery.trim(jQuery("#websitecheck").val());
                if (!/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)) return alert(a("#websitecheck").attr("data-err-invalid")), jQuery("#websitecheck").focus(), b.preventDefault(), !1;
                var e = window.WebsiteCheck.menu[0].selectize,
                    f = e.getValue(),
                    g = window.WebsiteCheck.get_tool(f);
                if (!g) return alert(a("#testtools").attr("placeholder")), b.preventDefault(), !1;
                ga("send", "event", "PageSpeed test", "start", g.name + ": " + d);
                var h = escape(d),
                    i = document.createElement("a");
                i.setAttribute("href", d);
                var j = escape(i.hostname.replace(/^www\./, "")),
                    k = g.testurl.replace("{{escaped_url}}", h).replace("{{escaped_hostname}}", j),
                    l = document.createElement("a");
                l.setAttribute("href", k);
                for (var m = l.protocol + "//" + l.hostname + ("/" !== l.pathname.charAt(0) ? "/" : "") + l.pathname, n = {}, o = l.search.substr(1).split("&"), p = 0; p < o.length; p++) {
                    var q = o[p].split("=");
                    n[decodeURIComponent(q[0])] = decodeURIComponent(q[1] || "")
                }
                if ("undefined" != typeof g.analytics ? g.analytics === !1 || "hash" === g.analytics && (m = m + "#utm_source=PageSpeed.pro&utm_medium=website-test&utm_term=" + escape(g.type + "+test") + "&utm_campaign=" + escape("PageSpeed.pro: " + g.type + " test")) : (n.utm_source = "PageSpeed.pro", n.utm_medium = "website-test", n.utm_term = g.type + "+test", n.utm_campaign = "PageSpeed.pro: " + g.type + " test"), "undefined" != typeof g.window && g.window === !0) return window.open(m, "test"), b.preventDefault(), !1;
                jQuery("#testfields").html("");
                for (var r in n) n.hasOwnProperty(r) && jQuery("#testfields").append(jQuery('<input type="hidden" />').attr("name", r).attr("value", n[r]));
                jQuery("#websitecheck").attr("name", ""), jQuery(c).attr("action", m), "undefined" != typeof g.method && "post" === g.method.toLowerCase() ? jQuery(c).attr("method", "post") : jQuery(c).attr("method", "get"), setTimeout(function () {
                    jQuery("#websitecheck").attr("name", "url")
                }, 100)
            }
        }, jQuery(function (a) {
            window.WebsiteCheck.init()
        })
    }(jQuery);
