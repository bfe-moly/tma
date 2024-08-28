"use strict";
var e = Object.defineProperty,
    t = Object.defineProperties,
    n = Object.getOwnPropertyDescriptors,
    o = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable,
    a = (t, n, o) =>
        n in t
            ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
            : (t[n] = o),
    s = (e, t) => {
        for (var n in t || (t = {})) r.call(t, n) && a(e, n, t[n]);
        if (o) for (var n of o(t)) i.call(t, n) && a(e, n, t[n]);
        return e;
    },
    l = (e, t, n) =>
        new Promise((o, r) => {
            var i = (e) => {
                try {
                    s(n.next(e));
                } catch (t) {
                    r(t);
                }
            },
                a = (e) => {
                    try {
                        s(n.throw(e));
                    } catch (t) {
                        r(t);
                    }
                },
                s = (e) => (e.done ? o(e.value) : Promise.resolve(e.value).then(i, a));
            s((n = n.apply(e, t)).next());
        });
!(function () {
    const e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"),
        (e.href = "https://s1.bycsi.com/common-static/cht-static/user-svc/js/by_appsflyer_23c876d.css"),
        document.head.append(e);
    const o = [
        "lang",
        "affiliate_id",
        "group_id",
        "group_type",
        "ref",
        "utm_url",
        "utm_date",
        "medium",
        "source",
        "campaign",
        "content",
        "referrer",
        "srcexid",
        "scrplatform",
        "url",
    ],
        r = () => {
            const e = `BYBIT_REG_REF_${(() => {
                const { host: e } = window.location;
                let t = "prod";
                return (
                    e.includes("testnet")
                        ? (t = "testnet")
                        : e.includes("-test")
                            ? (t = "test")
                            : e.includes("-dev")
                                ? (t = "dev")
                                : e.includes("local") && (t = "local"),
                    t
                );
            })()}`,
                t = document.cookie.split("; ");
            let n = {};
            return (
                t.forEach((t) => {
                    if (0 === t.indexOf(e + "=")) {
                        const [o, r] = t.split(e + "=");
                        n = JSON.parse(r);
                    }
                }),
                n
            );
        },
        i =
            /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        a = /android|ipad|playbook|silk/i;
    function c(e) {
        e || (e = {});
        let t = e.ua;
        if (
            (t || "undefined" == typeof navigator || (t = navigator.userAgent),
                t &&
                t.headers &&
                "string" == typeof t.headers["user-agent"] &&
                (t = t.headers["user-agent"]),
                "string" != typeof t)
        )
            return !1;
        let n = i.test(t) || (!!e.tablet && a.test(t));
        return (
            !n &&
            e.tablet &&
            e.featureDetect &&
            navigator &&
            navigator.maxTouchPoints > 1 &&
            -1 !== t.indexOf("Macintosh") &&
            -1 !== t.indexOf("Safari") &&
            (n = !0),
            n
        );
    }
    const d = (e, t) => {
        let n = { af_force_deeplink: !0, is_retargeting: !0 };
        if ((e && 0 === e.indexOf("by") && (n.af_dp = e), t)) {
            let t = r(),
                i = "";
            const { source: a, medium: s } = t;
            let { lang: l } = t;
            "zh-CN" === l && (l = "zh-MY"),
                a && (n.af_campaign = a),
                s && (n.af_adgroup = s),
                l && (n.af_creative = l),
                Object.keys(t).forEach((e) => {
                    o.includes(e) &&
                        (i +=
                            "url" === e
                                ? `&${e}=${encodeURIComponent(t[e])}`
                                : `&${e}=${t[e]}`);
                }),
                e &&
                "string" == typeof e &&
                (e.indexOf("?") > 0 ? (e += i) : (e += "?" + i.substring(1)),
                    (n.af_dp = encodeURIComponent(e)));
        } else e && (n.af_dp = encodeURIComponent(e));
        return n.af_dp || delete n.af_dp, n;
    },
        p = (e, t) =>
            l(this, null, function* () {
                let n = d(e, t);
                const o = Object.keys(n).map((e) => ({
                    paramKey: e,
                    defaultValue: n[e],
                }));
                o.push({ paramKey: ["deep_link_value"], defaultValue: n.af_dp || e });
                var r = window.AF_SMART_SCRIPT.generateOneLinkURL({
                    oneLinkURL: "https://bybit.onelink.me/EhY6",
                    afParameters: {
                        mediaSource: { keys: ["utm_source"], defaultValue: "ss_default" },
                        afCustom: o,
                    },
                });
                let i = "No output from script";
                return r && (i = r.clickURL), i;
            }),
        u = () => {
            const e = window.location.pathname;
            let t;
            const n = (() => {
                let e = window.location.search;
                if (0 === e.length) return {};
                e = e.substring(1);
                const t = e.split("&"),
                    n = {};
                return (
                    t.forEach((e) => {
                        const [t, o] = e.split("=");
                        n[t] = o;
                    }),
                    n
                );
            })();
            return (
                e.includes("/VIPProgram/intro") ||
                    e.includes("/VIPProgram") ||
                    e.includes("/my-fee-rate")
                    ? (t =
                        "bybitapp://open/route?targetUrl=" +
                        encodeURIComponent("by-mini://vip/home?jumpToForm=0"))
                    : e.includes("/leaderboard")
                        ? (t =
                            "bybitapp://open/route?targetUrl=" +
                            encodeURIComponent("by-mini://leaderboard/home"))
                        : e.includes("/userprofile") &&
                        (t =
                            "bybitapp://open/route?targetUrl=" +
                            encodeURIComponent(`by-mini://leaderboard/home?hashId=${n.id}`)),
                t
            );
        },
        m = (() => {
            const e = window.location.hostname;
            return e.includes("bybit-tr.com")
                ? "TUR"
                : /^[^.]+\.[^.]+\.[^.]+\.hk$/.test(e) ||
                    /^[^.]+\.[^.]+\.[^.]+\.[^.]+\.hk$/.test(e) ||
                    (null == e ? void 0 : e.includes("byhkbit.com"))
                    ? "HKG"
                    : /^[^.]+\.[^.]+\.ae$/.test(e) || /^[^.]+\.[^.]+\.[^.]+\.ae$/.test(e)
                        ? "ARE"
                        : /^[^.]+\.[^.]+\.nl$/.test(e) || /^[^.]+\.[^.]+\.[^.]+\.nl$/.test(e)
                            ? "NLD"
                            : "BYBIT";
        })();
    window.byAppsFlyers = {
        showSmartBanner: (e, o = !0) =>
            l(this, null, function* () {
                if (
                    !["HKG", "TUR"].includes(m) &&
                    (!window || !navigator.userAgent.match(/bybit_app/i)) &&
                    c
                ) {
                    if (window.AF) {
                        let a = u();
                        a && (e = a);
                        let l = d(e, o);
                        window.AF("banners", "showBanner", {
                            additionalParams:
                                ((r = s({}, l)),
                                    (i = { deep_link_value: l.af_dp || e }),
                                    t(r, n(i))),
                        });
                        const c = setInterval(() => {
                            document.querySelector(".responsive-wrapper") &&
                                ((document.querySelector(
                                    ".responsive-wrapper"
                                ).style.zIndex = 1e4),
                                    clearInterval(c));
                        }, 1e3);
                        return !0;
                    }
                    var r, i, a, l, p, f, b, y, w;
                    window.byAppsFlyersLoad
                        ? window.byAppsFlyers.showSmartBanner(e, o)
                        : ((window.byAppsFlyersLoad = !0),
                            (a = window),
                            (l = document),
                            (p = "script"),
                            (f = "banners"),
                            (b = {
                                banners: { key: "2c8670ca-c712-4f3c-956d-55356d1796cb" },
                            }),
                            (a.AppsFlyerSdkObject = "AF"),
                            (a.AF =
                                a.AF ||
                                function () {
                                    (a.AF.q = a.AF.q || []).push(
                                        [Date.now()].concat(Array.prototype.slice.call(arguments))
                                    );
                                }),
                            (a.AF.id = a.AF.id || b),
                            (a.AF.plugins = {}),
                            (y = l.createElement(p)),
                            (w = l.getElementsByTagName(p)[0]),
                            (y.async = 1),
                            (y.src =
                                "https://websdk.appsflyer.com?" +
                                (f.length > 0
                                    ? "st=" + f.split(",").sort().join(",") + "&"
                                    : "") +
                                (b.length > 0 ? "af_id=" + b : "")),
                            w.parentNode.insertBefore(y, w)),
                        setTimeout(() => {
                            window.byAppsFlyers.showSmartBanner(e, o);
                        }, 500);
                }
            }),
        getOneLink: (e = "", t = !0) =>
            l(this, null, function* () {
                if (!["HKG", "TUR"].includes(m))
                    return window.AF_SMART_SCRIPT
                        ? yield p(e, t)
                        : new Promise((n) => {
                            const o = document.createElement("script");
                            (o.src =
                                "https://s1.bycsi.com/common-static/cht-static/user-svc/js/appsflyer_onelink.js"),
                                document.body.appendChild(o),
                                (window.appsFlyerLoaded = !0),
                                o.addEventListener("load", () =>
                                    l(this, null, function* () {
                                        const o = yield window.byAppsFlyers.getOneLink(e, t);
                                        n(o);
                                    })
                                );
                        });
            }),
        triggerOneLink: (e = "", t = !0) => {
            if (!["HKG", "TUR"].includes(m))
                return new Promise((n) => {
                    window.byAppsFlyers.getOneLink(e, t).then((e) => {
                        const t = document.createElement("a");
                        (t.style.display = "none"),
                            t.setAttribute("href", e),
                            document.body.appendChild(t),
                            t.click(),
                            document.body.removeChild(t),
                            n(e);
                    });
                });
        },
    };
})();
