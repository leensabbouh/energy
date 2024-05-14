(window.webpackJsonp = window.webpackJsonp || []).push([
    ["app"], {
        5: function(e, t) {},
        "5Dqr": function(e, t, n) {},
        "8+lM": function(e, t, n) {
            "use strict";
            var o = function() {
                var e = document.querySelectorAll(".js-collapse"),
                    t = function(e) {
                        var t = document.querySelector("#" + e.dataset.target);
                        e.classList.remove("-active"), t && (t.style.height = "0px", t.classList.remove("-active"))
                    };
                e.forEach((function(e) {
                    var n = e.querySelector("a");
                    if (null == n || n.addEventListener("click", (function(e) {
                            e.stopPropagation()
                        })), e.classList.contains("-active")) {
                        var o = document.querySelector("#" + e.dataset.target);
                        o && (o.style.height = o.scrollHeight + "px")
                    }
                    e.addEventListener("click", (function() {
                        var n = e.dataset.group;
                        if (e.classList.contains("-active")) t(e);
                        else {
                            if (n) document.querySelectorAll("[data-group=" + n + "]").forEach((function(e) {
                                t(e)
                            }));
                            ! function(e) {
                                var t = document.querySelector("#" + e.dataset.target);
                                e.classList.add("-active"), t && (t.style.height = t.scrollHeight + "px", t.classList.add("-active"))
                            }(e),
                            function(e) {
                                var t = document.body.getBoundingClientRect(),
                                    n = e.getBoundingClientRect().top - t.top;
                                if ((window.pageYOffset || document.documentElement.scrollTop) > n - 104) {
                                    setTimeout((function() {
                                        window.scrollTo({
                                            top: n - 128,
                                            behavior: "smooth"
                                        })
                                    }), 200)
                                }
                            }(e)
                        }
                    }))
                }))
            };
            window.addEventListener("load", (function() {
                o(), document.querySelectorAll(".js-countryDropdown").forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var t = e.dataset.group;
                        e.classList.contains("-active") ? e.classList.remove("-active") : (t && document.querySelectorAll("[data-group=" + t + "]").forEach((function(e) {
                            e.classList.remove("-active")
                        })), e.classList.add("-active"))
                    }))
                }))
            }))
        },
        FGON: function(e, t, n) {
            "use strict";
            ! function() {
                var e = document.querySelector(".c-pdf");
                if (e) {
                    var t = e.dataset.file,
                        n = e.dataset.title,
                        o = {
                            defaultViewMode: ""
                        };
                    document.addEventListener("adobe_dc_view_sdk.ready", (function() {
                        var e = "";
                        "localhost" === window.location.hostname ? e = "3813ffef54a8469185e7745099e5e48e" : "aldrichme.com" === window.location.hostname ? e = "4cfd6232434543218c5b2e1ffbd73200" : "aldrichme.com" === window.location.hostname && (e = "ae1cabd22daa4afb95870b953a6a792c"), new AdobeDC.View({
                            clientId: e,
                            divId: "adobe-dc-view"
                        }).previewFile({
                            content: {
                                location: {
                                    url: window.location.origin + t
                                }
                            },
                            metaData: {
                                fileName: n
                            }
                        }, o)
                    }))
                }
            }()
        },
        NALV: function(e, t, n) {
            "use strict";
            ! function() {
                var e, t, n, o, a, i, r = document.querySelector("#cookieTranslation");
                if (r) {
                    var l = r.querySelectorAll("#cookieTranslation span"),
                        c = r.dataset.locale || "en",
                        s = {};
                    c = c.length > 2 ? c.substr(0, 2) : c, l.forEach((function(e) {
                        s[e.id] = e.innerHTML
                    })), window.klaroConfig = {
                        version: 1,
                        elementID: "klaro",
                        styling: {
                            theme: ["light", "top", "wide"]
                        },
                        noAutoLoad: !1,
                        htmlTexts: !0,
                        embedded: !1,
                        groupByPurpose: !1,
                        storageMethod: "cookie",
                        cookieName: "klaro",
                        cookieExpiresAfterDays: 365,
                        default: !0,
                        mustConsent: !1,
                        acceptAll: !0,
                        hideDeclineAll: !1,
                        hideToggleAll: !0,
                        hideLearnMore: !1,
                        noticeAsModal: !0,
                        disablePoweredBy: !0,
                        translations: (e = {}, e[c] = {
                            save: s.secondSave || "",
                            ok: s.firstAccept || "",
                            acceptSelected: s.secondSave || "",
                            acceptAll: s.secondAccept || "",
                            decline: s.firstReject || "",
                            consentNotice: {
                                learnMore: s.firstManageCookies || "",
                                description: "<h2>" + (s.firstTitle || "") + "</h2>" + (s.firstText || "")
                            },
                            consentModal: {
                                title: s.secondTitle || "",
                                description: s.secondText || ""
                            }
                        }, e),
                        services: [{
                            name: "necessary_cookies",
                            default: !0,
                            required: !0,
                            translations: (t = {}, t[c] = {
                                title: s.secondNecessaryTitle || "",
                                description: s.secondNecessaryText || ""
                            }, t)
                        }, {
                            name: "google-tag-manager",
                            default: !1,
                            cookies: [/^_gcl(_.*)?/, /^_ga(_.*)?/, /^_gid?/, /^vuid?/, /^FPGCLAW?/, /^FPGCLGB?/, /^_gac(_.*)?/],
                            translations: (n = {}, n[c] = {
                                title: s.secondAnalyticalTitle || "",
                                description: s.secondAnalyticalText || ""
                            }, n)
                        }, {
                            name: "functional_cookies",
                            default: !1,
                            cookies: [/^lang?/, /^bcookie?/, /^lidc?/],
                            translations: (o = {}, o[c] = {
                                title: s.secondFunctionalTitle || "",
                                description: s.secondFunctionalText || ""
                            }, o)
                        }, {
                            name: "advertisement_cookies",
                            default: !1,
                            cookies: [/^bscookie?/],
                            translations: (a = {}, a[c] = {
                                title: s.secondAdvertisingTitle || "",
                                description: s.secondAdvertisingText || ""
                            }, a)
                        }, {
                            name: "social_media_cookies",
                            default: !1,
                            cookies: [/^bscookie?/],
                            translations: (i = {}, i[c] = {
                                title: s.secondSocialMediaTitle || "",
                                description: s.secondSocialMediaText || ""
                            }, i)
                        }]
                    }
                }
            }()
        },
        VAXT: function(e, t, n) {
            "use strict";
            window.addEventListener("load", (function() {
                ! function() {
                    var e = document.querySelector(".c-timelineSec");
                    if (e) {
                        var t = e.querySelector(".js-timelineMore"),
                            n = e.querySelectorAll(".c-timelineSec_row");
                        null == t || t.addEventListener("click", (function() {
                            t.classList.add("d-none"), n.forEach((function(e) {
                                e.classList.remove("d-none")
                            }))
                        }))
                    }
                }()
            }))
        },
        VcaA: function(e, t, n) {
            "use strict";
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-newsroomSec_col.-categories"),
                    t = document.querySelector(".c-navHorizontal.-categories");
                if (t) {
                    var n = t.querySelectorAll(".c-navHorizontal.-categories .c-navHorizontal_link"),
                        o = window.location.search,
                        a = new URLSearchParams(o).get("category");
                    n.forEach((function(n) {
                        var o = n.dataset.category;
                        if ("all" !== o) {
                            if (n.href = n.href + "?category=" + o, a === o) {
                                n.classList.add("-active");
                                var i = t.getBoundingClientRect().top + window.pageYOffset;
                                window.scrollTo({
                                    top: i,
                                    behavior: "smooth"
                                });
                                var r = n.getBoundingClientRect().left - 24;
                                null == e || e.scrollTo({
                                    left: r,
                                    behavior: "smooth"
                                })
                            }
                        } else null === a && n.classList.add("-active")
                    }))
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-pagination");
                e && e.querySelectorAll("a").forEach((function(e) {
                    var t = window.location.search,
                        n = new URLSearchParams(t),
                        o = e.dataset.page || "1";
                    n.set("page", o), "1" !== o && (e.href = e.href + "?" + n)
                }))
            }))
        },
        deVU: function(e, t, n) {
            "use strict";
            window.addEventListener("load", (function() {
                var e = document.querySelector("[data-lazy-blocks]");
                if (e) {
                    var t = e.querySelector("[data-more-blocks]"),
                        n = e.dataset.blocksCount;
                    if (t) {
                        t.addEventListener("click", (function() {
                            e.querySelectorAll("[data-entry].d-none").forEach((function(o, a) {
                                var i;
                                a < 6 && o.classList.remove("d-none"), i = Array.from(e.querySelectorAll("[data-entry]")), n && parseInt(n, 10) === i.filter((function(e) {
                                    return !e.classList.contains("d-none")
                                })).length && t.classList.add("d-none")
                            }))
                        }))
                    }
                }
            }))
        },
        jawr: function(e, t, n) {
            "use strict";
            var o, a, i, r;
            o = document.querySelector(".js-anlContactForm"), a = document.querySelectorAll(".js-anlPhone"), i = document.querySelectorAll(".js-anlEmail"), r = document.querySelector(".l-main"), window.dataLayer = window.dataLayer || [], o && (null == o ? void 0 : o.classList.contains("-success")) && (r && r.classList.contains("-contact") ? window.dataLayer.push({
                event: "contactSubmit",
                contact_country: o.dataset.country
            }) : window.dataLayer.push({
                event: "contactSubmit"
            })), a && a.forEach((function(e) {
                e.addEventListener("click", (function() {
                    console.log("ASdasd"), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "contactClickPhone",
                        office_name: e.dataset.office,
                        phone_no: e.dataset.number
                    })
                }))
            })), i && i.forEach((function(e) {
                e.addEventListener("click", (function() {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "contactClickEmail",
                        office_name: e.dataset.office,
                        email: e.dataset.email
                    })
                }))
            }))
        },
        ohnB: function(e, t, n) {
            "use strict";
            window.addEventListener("load", (function() {
                document.querySelectorAll(".c-article_richText > *").forEach((function(e) {
                    e.classList.add("js-lazy", "a-fadeInUp", "-elVisibility30")
                }))
            }))
        },
        uD7v: function(e, t, n) {
            "use strict";
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-tabs");
                if (e) {
                    var t = e.querySelectorAll(".c-switch"),
                        n = e.querySelectorAll(".c-tab");
                    t.forEach((function(e) {
                        var o = e.dataset.tab;
                        e.addEventListener("click", (function() {
                            n.forEach((function(e) {
                                e.dataset.tab === o ? e.classList.remove("d-none") : e.classList.add("d-none")
                            })), t.forEach((function(e) {
                                e.classList.toggle("-active")
                            }))
                        }))
                    }))
                }
            }))
        },
        wXKj: function(e, t, n) {
            "use strict";
            n.r(t);
            n("5Dqr");
            var o = n("dwco");
            n.n(o).a.polyfill();
            var a = function() {
                    return window.screen.width < 576 || window.innerWidth < 576
                },
                i = function() {
                    return window.screen.width < 769 || window.innerWidth < 769
                },
                r = function() {
                    return window.screen.width < 991 || window.innerWidth < 991
                };
            document.querySelector(".l-main.-homepage") && (! function() {
                var e = document.querySelector(".c-heroSec"),
                    t = null == e ? void 0 : e.querySelector("video"),
                    n = null == t ? void 0 : t.querySelector("source");
                if (t && n) {
                    var o = n.dataset.src,
                        i = n.dataset.mobileSrc;
                    i && a() ? (n.src = i, t.load()) : o && (n.src = o, t.load()), t.readyState >= t.HAVE_FUTURE_DATA ? t.classList.add("-animated") : t.addEventListener("canplay", (function() {
                        t.classList.add("-animated")
                    }), !1)
                }
            }(), window.addEventListener("load", (function() {
                var e = document.querySelector(".c-heroSec"),
                    t = null == e ? void 0 : e.querySelector(".c-hero");
                if (e && t) {
                    var n = document.querySelector(".l-header");
                    if (e.classList.contains("-noVideo")) e.classList.add("-ready"), null == n || n.classList.add("-animated"), e.querySelectorAll(".a-fadeInUp, .a-fadeIn").forEach((function(e) {
                        e.classList.add("js-lazy", "-animated")
                    }));
                    else setTimeout((function() {
                        e.classList.add("-ready")
                    }), 1e3), setTimeout((function() {
                        e.querySelectorAll(".a-fadeInUp, .a-fadeIn").forEach((function(e) {
                            e.classList.add("js-lazy", "-animated")
                        })), null == n || n.classList.add("-animated")
                    }), 1800)
                }
            })));
            n("ohnB");
            var l = function(e) {
                    if (!e.classList.contains("-loaded")) {
                        var t, n = +(e.innerHTML || ""),
                            o = 100;
                        n > 100 ? (t = n - 50, o = 15) : t = n > 10 ? n - 10 : n - Math.floor(n);
                        e.innerHTML = t.toString();
                        var a = setInterval((function() {
                            e.innerHTML = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), (t += 1) > n && clearInterval(a)
                        }), o)
                    }
                    e.classList.add("-loaded")
                },
                c = function() {
                    var e = document.querySelectorAll(".js-lazy"),
                        t = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = e.target,
                                    n = e.intersectionRatio;
                                t.classList.contains("-lazyIfVisible") && n < .1 && t.classList.forEach((function(e) {
                                    e.indexOf("-lazyDelay") > -1 && t.classList.remove(e)
                                }));
                                var o = n > .5,
                                    a = t.classList.contains("-elVisibility30") && n > .3,
                                    i = t.classList.contains("-elVisibility10") && n > .1;
                                (o || a || i) && (t.classList.add("-animated"), t.classList.contains("js-number") && l(t))
                            }))
                        }), {
                            rootMargin: "0px 0px 0px 0px",
                            threshold: [.3, .7, 1]
                        });
                    e.forEach((function(e) {
                        e && t.observe(e)
                    }))
                },
                s = document.querySelector(".l-main.-homepage .c-heroSec");
            s && !s.classList.contains("-noVideo") ? window.addEventListener("load", (function() {
                setTimeout(c, 1800)
            })) : window.addEventListener("load", c);
            n("jawr");
            "scrollRestoration" in history && (history.scrollRestoration = "manual");
            var d = function() {
                var e = document.querySelector(".l-header"),
                    t = document.querySelector(".l-page");
                if (e) {
                    var n, o = !e.classList.contains("-bgDark") && !e.classList.contains("-bgGreyMd");
                    n = 0, window.addEventListener("scroll", (function() {
                        var t = window.pageYOffset || document.documentElement.scrollTop;
                        t > n && t > 0 && !e.classList.contains("-submenuOpened") ? (e.classList.remove("-sticked"), e.classList.add("-hidden"), e.classList.contains("-animated") && e.classList.remove("a-slideDown")) : e.classList.contains("-blocked") || (e.classList.remove("-hidden"), 0 !== t ? e.classList.add("-sticked") : e.classList.remove("-sticked")), n = t <= 0 ? 0 : t
                    }));
                    var a = e.querySelectorAll(".-withSubmenu");
                    a.forEach((function(n) {
                        r() ? function(e) {
                            var t = e.querySelector(".c-navHorizontal_link");
                            null == t || t.addEventListener("click", (function(t) {
                                t.preventDefault(), a.forEach((function(e) {
                                    e.classList.remove("-opened")
                                })), e.classList.toggle("-opened")
                            })), e.querySelectorAll(".-anchor").forEach((function(e) {
                                e.addEventListener("click", (function(e) {
                                    e.preventDefault(), i()
                                }))
                            }));
                            var n = e.querySelector(".c-arrowLink.-back");
                            null == n || n.addEventListener("click", (function(t) {
                                t.preventDefault(), e.classList.remove("-opened")
                            }))
                        }(n) : function(n) {
                            var a, i = function() {
                                n.classList.add("-opened"), e.classList.contains("-submenuOpened") || (e.classList.add("-submenuOpened"), null == t || t.classList.add("-submenuOpened"), e.classList.remove("-hidden")), o && (e.classList.add("-bgDark"), e.classList.add("-returnToBgGrey"), e.classList.remove("-bgGrey"))
                            };
                            n.addEventListener("mouseenter", (function(e) {
                                e.relatedTarget ? i() : a = setTimeout((function() {
                                    i()
                                }), 200)
                            })), n.addEventListener("mouseleave", (function() {
                                clearTimeout(a), n.classList.remove("-opened"), e.classList.remove("-submenuOpened"), null == t || t.classList.remove("-submenuOpened"), e.classList.contains("-returnToBgGrey") && (e.classList.remove("-bgDark"), e.classList.remove("-returnToBgGrey"), e.classList.add("-bgGrey"))
                            }))
                        }(n)
                    }));
                    document.querySelectorAll(".c-submenu").forEach((function(e) {
                        e.classList.contains("-tabs") ? function(e) {
                            var t = e.querySelector(".c-navVertical.-sidebar");
                            if (t) {
                                var n = t.querySelectorAll(".c-navVertical_item"),
                                    o = e.querySelectorAll(".c-submenu_tab");
                                n.forEach((function(e) {
                                    e.addEventListener("mouseenter", (function() {
                                        var t = e.dataset.tab;
                                        t && o.forEach((function(e) {
                                            e.classList.remove("-active"), e.dataset.tab === t && e.classList.add("-active")
                                        }))
                                    }))
                                }))
                            }
                        }(e) : e.classList.contains("-countries") && function(e) {
                            var t = e.querySelectorAll(".c-submenu_country"),
                                n = e.querySelector(".c-submenu_cases");
                            if (n)
                                if (0 === t.length) n.style.gridColumn = "1";
                                else if (t.length <= 6) n.style.gridRow = "1 / 4";
                            else {
                                var o = Math.floor(t.length / 3) - 1,
                                    a = o + 3;
                                n.style.gridRow = o + " / " + a
                            }
                        }(e)
                    }));
                    var i = function() {
                            var t = document.querySelector("html"),
                                n = e.querySelector(".l-header_nav");
                            r() && (null == e || e.classList.toggle("-mobileActive"), null == t || t.classList.toggle("-blocked")), n && (n.scrollTop = 0), a.forEach((function(e) {
                                e.classList.remove("-opened")
                            }))
                        },
                        l = document.querySelector(".c-hamburger");
                    null == l || l.addEventListener("click", (function(e) {
                        e.preventDefault(), i()
                    })), e.querySelectorAll(".c-dropdown").forEach((function(t) {
                        t.addEventListener("mouseenter", (function() {
                            o && (e.classList.add("-bgDark"), e.classList.add("-returnToBgGrey"), e.classList.remove("-bgGrey"))
                        })), t.addEventListener("mouseleave", (function() {
                            e.classList.contains("-returnToBgGrey") && (e.classList.remove("-bgDark"), e.classList.remove("-returnToBgGrey"), e.classList.add("-bgGrey"))
                        }))
                    })), e.querySelectorAll(".js-scrollLink").forEach((function(e) {
                        e.addEventListener("click", (function() {
                            i()
                        }))
                    }))
                }
            };
            window.addEventListener("load", (function() {
                var e;
                d(), e = .01 * window.innerHeight, document.documentElement.style.setProperty("--vh", e + "px")
            }));
            window.addEventListener("load", (function() {
                return setTimeout((function() {
                    ! function() {
                        var e = document.querySelector(".c-sidebar");
                        if (e) {
                            var t = document.querySelectorAll("section.-bgGrey");
                            r() && (t = document.querySelectorAll("section.-bgGrey, .js-greyHeaderMd"));
                            var n = document.querySelector(".l-header"),
                                o = e.querySelector(".c-sidebar_logo"),
                                a = e.querySelectorAll(".c-sidebar_socials .c-icon"),
                                i = [],
                                l = 0;
                            t.forEach((function(e) {
                                e.classList.contains("-prevWithScrollMagic") && (l = +(e.dataset.length || 0) * window.innerHeight), i.push([e.offsetTop + l, e.offsetTop + l + e.clientHeight])
                            }));
                            var c = !1,
                                s = [!1, !1, !1],
                                d = function() {
                                    c = !1, s = [!1, !1, !1], i.forEach((function(e) {
                                        window.scrollY >= e[0] && window.scrollY < e[1] && (c = !0), a.forEach((function(t, n) {
                                            var o = 32 * (a.length - 1 - n) + 104;
                                            window.scrollY + window.innerHeight - o > e[0] && window.scrollY + window.innerHeight - o < e[1] && (s[n] = !0)
                                        }))
                                    })), c ? (null == o || o.classList.add("-dark"), null == n || n.classList.add("-bgGrey"), null == n || n.classList.remove("-bgDark"), (null == n ? void 0 : n.classList.contains("js-headerGreyMd")) && (null == n || n.classList.add("-bgGreyMd"))) : (null == o || o.classList.remove("-dark"), null == n || n.classList.remove("-bgGrey"), null == n || n.classList.add("-bgDark"), (null == n ? void 0 : n.classList.contains("js-headerGreyMd")) && (null == n || n.classList.remove("-bgGreyMd"))), a.forEach((function(e, t) {
                                        s[t] ? e.classList.add("-dark") : e.classList.remove("-dark")
                                    }))
                                };
                            (null == n ? void 0 : n.classList.contains("-bgGrey")) && i.unshift([0, n.clientHeight + 1]), r() && (null == n ? void 0 : n.classList.contains("-bgGreyMd")) && (n.classList.add("js-headerGreyMd"), i.unshift([0, n.clientHeight + 1])), d(), window.addEventListener("scroll", (function() {
                                return d()
                            }))
                        }
                    }()
                }), 0)
            }));
            window.addEventListener("load", (function() {
                var e = !1,
                    t = document.querySelector(".l-footer");
                if (t) {
                    var n = t.querySelectorAll(".l-footer_col.-navigation .t-text"),
                        o = function() {
                            e || r() && (n.forEach((function(e) {
                                e.addEventListener("click", (function() {
                                    var t;
                                    null === (t = e.parentElement) || void 0 === t || t.classList.toggle("-active")
                                }))
                            })), e = !0)
                        };
                    o(), window.addEventListener("resize", (function() {
                        o()
                    }))
                }
            }));
            n("NALV");
            var u = n("b5oN"),
                f = (n("Ut/D"), function(e, t) {
                    t.addEventListener("focus", (function() {
                        e.classList.add("-active")
                    })), t.addEventListener("blur", (function() {
                        e.classList.remove("-active")
                    }))
                }),
                v = function(e, t) {
                    e.classList.add("-touched"), t.value.length > 0 && !e.classList.contains("-filled") ? e.classList.add("-filled") : t.value.length <= 0 && e.classList.remove("-filled")
                },
                p = function(e, t) {
                    var n = e.querySelector("input"),
                        o = e.querySelector(".f-select_input"),
                        a = e.querySelectorAll(".c-optionList_item");
                    n && o && (a.forEach((function(a) {
                        if (a.dataset.value === t) {
                            var i = a.dataset.value || "",
                                r = a.dataset.label || i;
                            n.value = r || "", o.innerHTML = a.innerHTML, e.click(), n && v(e, n)
                        }
                    })), e.click(), n && v(e, n))
                };
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    var e, t;
                    e = document.querySelectorAll(".f-group.-input, .f-group.-textarea"), t = document.querySelectorAll(".f-select"), e.forEach((function(e) {
                            var t = e.querySelector("input, textarea");
                            t && f(e, t), t && v(e, t), null == t || t.addEventListener("keyup", (function() {
                                v(e, t), e.classList.remove("-error")
                            }))
                        })), t.forEach((function(e) {
                            var t = e.querySelector("input"),
                                n = e.querySelector(".f-select_input"),
                                o = e.querySelector(".c-optionList"),
                                a = e.querySelectorAll(".c-optionList_item");
                            t && o && n && (a.forEach((function(o) {
                                var a = o.dataset.value || "",
                                    i = o.dataset.label || a,
                                    r = o.dataset.select;
                                o.addEventListener("click", (function() {
                                    if (!e.dataset.clear) {
                                        if (t.value = i || "", n.innerHTML = o.innerHTML, r) {
                                            var l = e.querySelector("#" + r);
                                            if (!l) return;
                                            l.value = a
                                        }
                                        if (e.classList.contains("-flag")) {
                                            var c = e.querySelector(".f-select_flag"),
                                                s = "-" + (o.dataset.flag || "gb");
                                            if (!c) return;
                                            c.className = "f-select_flag c-flag", c.classList.add(s)
                                        }
                                    }
                                    e.click(), t && v(e, t)
                                }))
                            })), Object(u.a)(e, {
                                content: o,
                                allowHTML: !0,
                                placement: "bottom-start",
                                appendTo: document.body,
                                interactive: !0,
                                arrow: !1,
                                offset: [0, 0],
                                trigger: "click",
                                hideOnClick: !0,
                                onShow: function(n) {
                                    var o = n.popper,
                                        a = n.reference;
                                    o.style.width = a.getBoundingClientRect().width + "px", t && f(e, t)
                                },
                                onCreate: function() {
                                    o.classList.remove("d-none")
                                }
                            }))
                        })),
                        function() {
                            var e = document.querySelector(".js-formSec");
                            if (e && e.classList.contains("-submitted")) {
                                var t = e.getBoundingClientRect().top + window.pageYOffset;
                                window.scrollTo({
                                    top: t,
                                    behavior: "smooth"
                                })
                            }
                        }()
                }), 100)
            }));
            var y = function(e, t) {
                var n = document.querySelectorAll(".js-scrollLink"),
                    o = function(n) {
                        if (n.scrollIntoView({
                                behavior: "smooth"
                            }), e && e(n), t) {
                            var o = function() {
                                var e = window.scrollY >= Math.round(n.getBoundingClientRect().y - window.pageYOffset);
                                setTimeout((function() {
                                    e ? t(n) : o()
                                }), 10)
                            };
                            o()
                        }
                    };
                n.forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        t.preventDefault();
                        var n = e.dataset.id,
                            a = document.querySelector("#" + n);
                        a && o(a)
                    }))
                })), location.hash && (setTimeout((function() {
                    window.scrollTo(0, 0)
                }), 1), setTimeout((function() {
                    var e = location.hash,
                        t = document.querySelector("" + e);
                    t && o(t)
                }), 200))
            };
            window.addEventListener("load", (function() {
                return y()
            }));
            n("VcaA");
            window.addEventListener("load", (function() {
                var e = document.querySelector(".f-filters");
                if (e) {
                    var t = window.location.search,
                        n = new URLSearchParams(t),
                        o = n.get("country") || "all",
                        a = e.querySelector("#countrySelect"),
                        i = e.querySelector("#country_filter");
                    if (a && i) {
                        o && p(a, o);
                        var r = n.get("industry") || "all",
                            l = e.querySelector("#industrySelect"),
                            c = e.querySelector("#industry_filter");
                        if (l && c) {
                            r && p(l, r);
                            var s = n.get("showGreen"),
                                d = e.querySelector("#showGreenCheckbox"),
                                u = e.querySelector("#showGreen");
                            if (d && u) {
                                if ("off" === s ? (d.checked = !1, u.value = "off") : u.value = "on", o || r) {
                                    var f = document.querySelector(".js-caseList");
                                    if (f) {
                                        var v = f.getBoundingClientRect().top + window.pageYOffset - 48;
                                        window.scrollTo({
                                            top: v,
                                            behavior: "smooth"
                                        })
                                    }
                                }
                                e.addEventListener("submit", (function(t) {
                                    t.preventDefault();
                                    var n = new FormData(e),
                                        o = n.get("country"),
                                        a = n.get("industry");
                                    o && "all" !== o || (i.disabled = !0), a && "all" !== a || (c.disabled = !0), !1 === d.checked ? u.value = "off" : u.disabled = !0, d.disabled = !0, e.submit()
                                }))
                            }
                        }
                    }
                }
            }));
            n("FGON"), n("deVU"), n("uD7v");
            window.addEventListener("load", (function() {
                r() || function() {
                    document.querySelectorAll(".js-tabsVertical").forEach((function(e) {
                        var t = e.querySelectorAll(".js-tabNavItem"),
                            n = document.querySelectorAll(".js-tabSection");
                        t.forEach((function(e) {
                            e.addEventListener("click", (function() {
                                var t, o = e.querySelector("a"),
                                    a = null === (t = null == o ? void 0 : o.getAttribute("href")) || void 0 === t ? void 0 : t.replace("#", ""),
                                    i = !1;
                                n.forEach((function(e) {
                                    e.id === a && (i = !0), i ? e.id !== a && e.classList.remove("-upper") : e.classList.add("-upper")
                                }))
                            }))
                        }))
                    }));
                    ! function() {
                        var e = document.querySelectorAll(".js-tabSection");
                        if (e) {
                            var t = {},
                                n = new IntersectionObserver((function(e) {
                                    e.forEach((function(e) {
                                        t[e.target.id] = +e.intersectionRatio.toFixed(4);
                                        var n = document.querySelector(".js-tabNavItem.-active");
                                        null == n || n.classList.remove("-active");
                                        var a = document.querySelector(".js-tabNavItem[data-tab=" + o() + "]");
                                        null == a || a.classList.add("-active")
                                    }))
                                }), {
                                    rootMargin: "0px",
                                    threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                                });
                            e.forEach((function(e) {
                                n.observe(e)
                            }));
                            var o = function() {
                                var e, n = Object.keys(t),
                                    o = 0;
                                return n.map((function(n) {
                                    t[n] > o ? (o = t[n], e = n) : 0 == t[n] && (o = 0)
                                })), e
                            }
                        }
                    }()
                }()
            }));
            window.addEventListener("load", (function() {
                var e, t, n, o, a = document.querySelector(".f-propertyFilters");
                if (a) {
                    var i = window.location.search,
                        r = new URLSearchParams(i),
                        l = (null === (e = r.get("region")) || void 0 === e ? void 0 : e.replace("+", " ")) || "all",
                        c = a.querySelector("#regionSelect"),
                        s = a.querySelector("#region_filter");
                    if (c && s) {
                        l && p(c, l);
                        var d = (null === (t = r.get("type")) || void 0 === t ? void 0 : t.replace("+", " ")) || "all",
                            u = a.querySelector("#typeSelect"),
                            f = a.querySelector("#type_filter");
                        if (u && f) {
                            d && p(u, d);
                            var v = (null === (n = r.get("size")) || void 0 === n ? void 0 : n.replace("+", " ")) || "all",
                                y = a.querySelector("#sizeSelect"),
                                m = a.querySelector("#size_filter");
                            if (y && m) {
                                v && p(y, v);
                                var w = (null === (o = r.get("availability")) || void 0 === o ? void 0 : o.replace("+", " ")) || "all",
                                    g = a.querySelector("#availabilitySelect"),
                                    h = a.querySelector("#availability_filter");
                                if (g && h) {
                                    if (w && p(g, w), l || d || v || w) {
                                        var S = document.querySelector(".js-propertyList");
                                        if (S) {
                                            var L = S.getBoundingClientRect().top + window.pageYOffset - 48;
                                            window.scrollTo({
                                                top: L,
                                                behavior: "smooth"
                                            })
                                        }
                                    }
                                    a.addEventListener("submit", (function(e) {
                                        e.preventDefault();
                                        var t = new FormData(a),
                                            n = t.get("region"),
                                            o = t.get("type"),
                                            i = t.get("size"),
                                            r = t.get("availability");
                                        n && "all" !== n || (s.disabled = !0), o && "all" !== o || (f.disabled = !0), i && "all" !== i || (m.disabled = !0), r && "all" !== r && "BTS" !== o || (h.disabled = !0), a.submit()
                                    }))
                                }
                            }
                        }
                    }
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-search");
                if (e) {
                    var t = e.querySelector(".c-search_btn"),
                        n = e.querySelector(".c-search_close"),
                        o = document.querySelector(".l-main"),
                        a = function() {
                            e.classList.remove("-active"), e.classList.contains("-alt") && (null == o || o.classList.remove("-searchAltOpened"))
                        };
                    null == t || t.addEventListener("click", (function(t) {
                        t.preventDefault(), e.classList.contains("-active") ? a() : function() {
                            e.classList.add("-active");
                            var t = e.querySelector("input");
                            o && !o.classList.contains("-results") && t && (t.value = ""), null == t || t.focus(), e.classList.contains("-alt") && (null == o || o.classList.add("-searchAltOpened"))
                        }()
                    })), n && n.addEventListener("click", (function(e) {
                        e.preventDefault(), a()
                    })), window.addEventListener("scroll", (function() {
                        (e.classList.contains("-alt") || r()) && a()
                    })), window.addEventListener("resize", (function() {
                        !e.classList.contains("-alt") && r() && e.classList.add("-alt")
                    }));
                    var i = document.createEvent("Event");
                    i.initEvent("resize", !1, !0), window.dispatchEvent(i)
                }
            })), window.addEventListener("load", (function() {
                var e = document.querySelector(".c-resultsSec");
                if (e) {
                    var t = document.querySelector("input.gsc-input"),
                        n = new URL(window.location.href).searchParams.get("q") || "",
                        o = e.querySelector(".t-title span");
                    o && (o.innerHTML = n), t && (t.value = n)
                }
            }));
            var m = n("bTu8"),
                w = n("g0Ox"),
                g = n("Xchd"),
                h = n("42op"),
                S = n("h2/A"),
                L = n("tC+P"),
                b = n("0Xqd"),
                q = (n("u+OR"), function() {
                    return (q = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                });
            m.a.use([w.a, g.a, h.a, S.a, L.a, b.a]);
            var E = function(e) {
                var t = {
                        speed: 400,
                        slidesPerView: "auto",
                        slideActiveClass: "-active",
                        effect: "slide",
                        navigation: {
                            disabledClass: "-disabled"
                        },
                        on: {},
                        preventClicks: !1,
                        noSwipingSelector: "a"
                    },
                    n = e.options,
                    o = e.container,
                    a = null,
                    i = null,
                    r = null;
                Array.from(o.children).map((function(e) {
                    e.classList.contains("swiper-pagination") && (a = e), e.classList.contains("-prev") && (i = e), e.classList.contains("-next") && (r = e)
                }));
                var l = Object.assign({}, q({}, t.navigation), {
                        prevEl: i || void 0,
                        nextEl: r || void 0
                    }, null == n ? void 0 : n.navigation),
                    c = Object.assign({}, {
                        el: a || void 0,
                        clickable: !0,
                        type: "progressbar"
                    }, null == n ? void 0 : n.pagination),
                    s = (null == n ? void 0 : n.on) || {};
                if (null == n ? void 0 : n.mousewheel) {
                    var d = n.mousewheel,
                        u = q(q({}, d), {
                            releaseOnEdges: !0
                        });
                    t.on = {
                        slideChange: function(e) {
                            setTimeout((function() {
                                e.params.mousewheel = q(q({}, u), {
                                    releaseOnEdges: !1
                                })
                            }), 500)
                        },
                        reachEnd: function(e) {
                            setTimeout((function() {
                                e.params.mousewheel = q(q({}, u), {
                                    releaseOnEdges: !0
                                })
                            }), 750)
                        },
                        reachBeginning: function(e) {
                            setTimeout((function() {
                                e.params.mousewheel = q(q({}, u), {
                                    releaseOnEdges: !0
                                })
                            }), 750)
                        }
                    }, s = Object.assign({}, t.on, null == n ? void 0 : n.on)
                }
                var f = Object.assign(q({}, t), n, {
                    pagination: c,
                    navigation: l,
                    on: s
                });
                return new m.a(o, f)
            };
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-newsSec_swiper");
                if (e) {
                    var t = e.querySelector(".-progressbar"),
                        n = document.querySelector(".c-newsSec_nextSlide"),
                        o = null == n ? void 0 : n.querySelector(".-bulletsbar"),
                        a = document.querySelectorAll(".c-newsSec_nextSlideText");
                    E({
                        container: e,
                        options: {
                            loop: !0,
                            spaceBetween: 16,
                            effect: r() ? "slide" : "fade",
                            pagination: {
                                el: r() ? t : o,
                                type: r() ? "progressbar" : "bullets"
                            },
                            on: {
                                slideChange: function(e) {
                                    n && a[0] && a.forEach((function(t, n) {
                                        var o;
                                        null == t || t.classList.add("d-none"), e.activeIndex > a.length ? null === (o = a[0]) || void 0 === o || o.classList.remove("d-none") : n + 1 === e.activeIndex && (null == t || t.classList.remove("d-none"))
                                    }))
                                }
                            }
                        }
                    })
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-caseStudySliderSec_swiper");
                e && E({
                    container: e,
                    options: {
                        loop: !0,
                        spaceBetween: 0,
                        breakpoints: {
                            769: {
                                spaceBetween: 40
                            }
                        }
                    }
                })
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-videoSec_swiper");
                e && E({
                    container: e,
                    options: {
                        spaceBetween: 16,
                        autoHeight: !0,
                        breakpoints: {
                            768: {
                                spaceBetween: 30
                            }
                        }
                    }
                })
            }));
            var k = n("zSlN"),
                T = n.n(k),
                _ = n("z/o8");
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-sustainabilityBoxesSec"),
                    t = null == e ? void 0 : e.querySelector(".c-sustainabilityBoxesSec_container"),
                    n = null == e ? void 0 : e.querySelector(".c-sustainabilityBoxesSec_swiper");
                if (e && t && n) {
                    var o = n.querySelectorAll(".swiper-slide"),
                        a = e.querySelector(".a-leafAnim_content"),
                        i = e.querySelector(".a-leafAnim_leaf"),
                        l = t.getBoundingClientRect().right - 80,
                        c = n.getBoundingClientRect().left;
                    if (r()) E({
                        container: n,
                        options: {
                            spaceBetween: 16
                        }
                    });
                    else {
                        var s = new T.a.Controller,
                            d = document.querySelector(".l-header"),
                            u = document.querySelector(".js-scrollSection");
                        if (!u) return;
                        var f = !1;
                        new T.a.Scene({
                            duration: .75 * window.innerHeight,
                            triggerHook: 0,
                            triggerElement: ".js-scrollTrigger",
                            offset: -(window.innerHeight - u.clientHeight) / 2
                        }).setPin(u).on("enter", (function() {
                            null == d || d.classList.add("-blocked")
                        })).on("leave", (function() {
                            null == d || d.classList.remove("-blocked")
                        })).on("progress", (function(e) {
                            var t = e.progress;
                            t >= .3 && !f ? (_.a.to(a, {
                                duration: .4,
                                opacity: 0
                            }), _.a.to(i, {
                                duration: .2,
                                opacity: 0
                            }), o.forEach((function(e, t) {
                                var n = (o.length - 1) * (e.clientWidth + 24) + e.clientWidth - (l - c);
                                _.a.to(e, {
                                    duration: .5,
                                    x: -n,
                                    delay: .1 * t + .4
                                })
                            })), f = !0) : t < .3 && f && (_.a.to(a, {
                                duration: .4,
                                opacity: 1,
                                delay: .1 * o.length + .4
                            }), _.a.to(i, {
                                duration: .4,
                                opacity: 1,
                                delay: .1 * o.length + .6
                            }), o.forEach((function(e, t) {
                                _.a.to(e, {
                                    duration: .5,
                                    x: 0,
                                    delay: .1 * (o.length - t)
                                })
                            })), f = !1)
                        })).addTo(s)
                    }
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-socialMediaSec_swiper"),
                    t = null == e ? void 0 : e.querySelector(".swiper-wrapper");
                if (e && t) {
                    var n = null,
                        o = function() {
                            fetch("https://api.curator.io/v1/feeds?api_key=384e42db-7151-407e-a974-72c97e5188b8").then((function(e) {
                                return e.json()
                            })).then((function(o) {
                                n = o[0].id, fetch("https://api.curator.io/v1/feeds/" + n + "/posts?limit=20").then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return e.posts.map((function(e) {
                                        var n = e.image,
                                            o = e.image_large,
                                            a = e.network_name,
                                            i = e.text,
                                            r = e.url,
                                            l = e.video,
                                            c = o || n;
                                        (!c || l && "LinkedIn" === a) && (c = t.dataset.placeholder || "");
                                        return {
                                            image: c,
                                            network_name: a,
                                            text: i,
                                            url: r,
                                            video: l
                                        }
                                    })).forEach((function(e) {
                                        return function(e) {
                                            var n = e.image,
                                                o = e.text,
                                                a = e.url,
                                                i = e.network_name,
                                                r = t.dataset.btn,
                                                l = '<div class="swiper-slide"><div class="c-socialMediaBox"><figure class="c-image -multiplyBlue"><img loading="lazy" src="' + n + '" alt=""></figure><div class="c-socialMediaBox_hover -pt24 -pt32md -pb32 -pb0md"><span class="c-label -light d-none d-lg-block">' + i + '</span><span class="c-label -blue d-lg-none -mb16">' + i + '</span><div><p class="t-text -cGrey -wLight -lineClamp2">' + o.replace(/(<([^>]+)>)/gi, "") + '</p><a href="' + a + '" target="_blank" class="c-arrowLink -light -mt16 -mt8md">' + r + "</a></div></div></div></div>",
                                                c = (new DOMParser).parseFromString(l, "text/html");
                                            t.appendChild(c.body.childNodes[0])
                                        }(e)
                                    })), !0
                                })).then((function() {
                                    E({
                                        container: e,
                                        options: {
                                            spaceBetween: 16,
                                            autoHeight: !0,
                                            loop: !0,
                                            breakpoints: {
                                                768: {
                                                    autoHeight: !1,
                                                    spaceBetween: 24
                                                }
                                            }
                                        }
                                    })
                                }))
                            }))
                        },
                        a = !1,
                        i = new IntersectionObserver((function(t) {
                            t.forEach((function(t) {
                                t.isIntersecting && (!1 === a && (o(), i.unobserve(e)), a = !0)
                            }))
                        }), {
                            rootMargin: "1500px 0px 0px 0px",
                            threshold: [0, 1]
                        });
                    i.observe(e)
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-heroSec_swiper");
                if (e) {
                    var t = e.querySelector(".-progressbar"),
                        n = e.querySelector(".-bulletsbar");
                    E({
                        container: e,
                        options: {
                            effect: "fade",
                            autoHeight: !0,
                            pagination: {
                                el: r() ? t : n,
                                type: r() ? "progressbar" : "bullets"
                            }
                        }
                    })
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-gallerySec_swiper");
                if (e) {
                    var t = e.querySelector(".-progressbar"),
                        n = e.querySelector(".-bulletsbar");
                    E({
                        container: e,
                        options: {
                            loop: !0,
                            pagination: {
                                el: r() ? t : n,
                                type: r() ? "progressbar" : "bullets"
                            }
                        }
                    })
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-managersSec_swiper");
                e && E({
                    container: e,
                    options: {
                        spaceBetween: 16,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }
                })
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-whyInvestSec_swiper");
                e && E({
                    container: e,
                    options: {
                        spaceBetween: 16,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }
                })
            }));
            ! function() {
                var e = document.querySelector(".c-logotypesSec_swiper");
                if (e) var t = E({
                        container: e,
                        options: {
                            loop: !0,
                            spaceBetween: 60,
                            allowTouchMove: !1,
                            autoplay: {
                                delay: 1
                            },
                            speed: 5e3,
                            breakpoints: {
                                769: {
                                    spaceBetween: 96
                                }
                            }
                        }
                    }),
                    n = setInterval((function() {
                        var e = document.createEvent("Event");
                        e.initEvent("resize", !1, !0), window.dispatchEvent(e), t.animating && clearInterval(n)
                    }), 1e3)
            }();
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-whyUsSec_container"),
                    t = document.querySelector(".c-whyUsSec_swiper");
                if (t && e) {
                    var n = {
                            slidesPerView: 1,
                            effect: "fade",
                            spaceBetween: 0,
                            direction: "vertical"
                        },
                        o = {
                            spaceBetween: 16
                        };
                    if (n && o) {
                        var a = E({
                            container: t,
                            options: r() ? o : n
                        });
                        if (!r()) {
                            var i = new T.a.Controller,
                                l = document.querySelector(".l-header"),
                                c = document.querySelector(".js-scrollSection");
                            if (!c) return;
                            new T.a.Scene({
                                duration: 2 * window.innerHeight,
                                triggerHook: 0,
                                triggerElement: ".js-scrollTrigger",
                                offset: -(window.innerHeight - c.clientHeight) / 2
                            }).setPin(c).on("enter", (function() {
                                null == l || l.classList.add("-blocked")
                            })).on("leave", (function() {
                                null == l || l.classList.remove("-blocked")
                            })).on("progress", (function(e) {
                                var t = e.progress,
                                    n = [.3, .7, 1];
                                a.slides.forEach((function(e, o) {
                                    t > (n[o - 1] ? n[o - 1] : 0) && t <= n[o] && a.activeIndex !== o && a.slideTo(o)
                                }))
                            })).addTo(i)
                        }
                    }
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-capabilitiesSec"),
                    t = document.querySelector(".c-capabilitiesSec_swiper");
                if (t && e) {
                    var n = E({
                        container: t,
                        options: {
                            spaceBetween: 16,
                            breakpoints: {
                                769: {
                                    spaceBetween: 48
                                }
                            }
                        }
                    });
                    if (!r()) {
                        var o = new T.a.Controller,
                            a = document.querySelector(".l-header"),
                            i = document.querySelector(".js-scrollSection");
                        if (!i) return;
                        new T.a.Scene({
                            duration: window.innerHeight,
                            triggerHook: 0,
                            triggerElement: ".js-scrollTrigger",
                            offset: -(window.innerHeight - i.clientHeight) / 2
                        }).setPin(i).on("enter", (function() {
                            null == a || a.classList.add("-blocked")
                        })).on("leave", (function() {
                            null == a || a.classList.remove("-blocked")
                        })).on("progress", (function(e) {
                            var t = e.progress,
                                o = [.3, .7, 1];
                            n.slides.forEach((function(e, a) {
                                t > (o[a - 1] ? o[a - 1] : 0) && t <= o[a] && n.activeIndex !== a && n.slideTo(a)
                            }))
                        })).addTo(o)
                    }
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-showCaseSec_swiper");
                if (e) {
                    var t = e.querySelector(".-progressbar"),
                        n = e.querySelector(".-bulletsbar");
                    E({
                        container: e,
                        options: {
                            loop: !0,
                            slidesPerView: 1,
                            effect: "fade",
                            spaceBetween: 0,
                            autoHeight: !0,
                            pagination: {
                                el: r() ? t : n,
                                type: r() ? "progressbar" : "bullets"
                            }
                        }
                    })
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-panattoniDecor_swiper");
                e && E({
                    container: e,
                    options: {
                        loop: !0,
                        autoplay: {
                            delay: 1,
                            disableOnInteraction: !1
                        },
                        speed: 8e3,
                        allowTouchMove: !1,
                        spaceBetween: 12,
                        breakpoints: {
                            769: {
                                spaceBetween: 40
                            }
                        }
                    }
                })
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-socialResponsibilitySec_swiper");
                e && E({
                    container: e,
                    options: {
                        spaceBetween: 16,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }
                })
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-morePropertiesSec_swiper");
                e && E({
                    container: e,
                    options: {
                        loop: !0,
                        spaceBetween: 16,
                        noSwipingSelector: "",
                        breakpoints: {
                            769: {
                                spaceBetween: 24
                            }
                        }
                    }
                })
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-preBoxes");
                if (e) {
                    var t = e.querySelector(".swiper-pagination");
                    E({
                        container: e,
                        options: {
                            slidesPerView: "auto",
                            spaceBetween: 8,
                            slidesOffsetBefore: 24,
                            slidesOffsetAfter: 24,
                            pagination: {
                                el: t,
                                type: "progressbar"
                            }
                        }
                    })
                }
            }));
            var A = n("SjWa"),
                x = n("mY8o");
            window.addEventListener("load", (function() {
                var e = document.querySelector(".c-awardsSec");
                if (e) {
                    var t = e.querySelector(".c-awardsSec_splide"),
                        n = e.querySelector(".c-awardsSec_swiper"),
                        o = "partners" == e.dataset.type ? 100 : 50;
                    t && new A.a(t, {
                        type: "loop",
                        arrows: !1,
                        pagination: !1,
                        autoWidth: !0,
                        gap: o,
                        autoScroll: {
                            speed: 1
                        }
                    }).mount({
                        AutoScroll: x.a
                    }), n && E({
                        container: n,
                        options: {
                            loop: !0,
                            spaceBetween: 16,
                            speed: 400,
                            centeredSlides: !0,
                            breakpoints: {
                                767: {
                                    centeredSlides: !1
                                }
                            },
                            pagination: {
                                type: "bullets"
                            }
                        }
                    }), document.addEventListener("mouseover", (function(e) {
                        var t, n = e.target;
                        if (n.classList.contains("c-award_overlay")) {
                            var o = n.dataset.index;
                            null === (t = document.querySelector(".c-awardHover." + o)) || void 0 === t || t.classList.add("-active")
                        }
                        n.addEventListener("mouseleave", (function() {
                            var e = document.querySelector(".c-awardHover.-active");
                            null == e || e.classList.remove("-active")
                        }))
                    }))
                }
            }));
            var B = n("QnLe"),
                M = function(e, t, n, o, a) {
                    if (e) {
                        var r = new B.a({
                                apiKey: "AIzaSyBsClAzTShvwY5iGXrZGyU4uwRpK61VhJk",
                                version: "weekly"
                            }),
                            l = [{
                                elementType: "geometry",
                                stylers: [{
                                    color: "#272f3f"
                                }]
                            }, {
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#aaa9bd"
                                }]
                            }, {
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    color: "#272f3f"
                                }, {
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "administrative.country",
                                elementType: "geometry.stroke",
                                stylers: [{
                                    color: "#021122"
                                }, {
                                    weight: 1.5
                                }]
                            }, {
                                featureType: "administrative.land_parcel",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "administrative.land_parcel",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#64779e"
                                }]
                            }, {
                                featureType: "administrative.province",
                                elementType: "geometry.stroke",
                                stylers: [{
                                    color: "#535a67"
                                }]
                            }, {
                                featureType: "landscape",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#15245c"
                                }]
                            }, {
                                featureType: "landscape.man_made",
                                elementType: "geometry.stroke",
                                stylers: [{
                                    color: "#334e87"
                                }]
                            }, {
                                featureType: "landscape.natural",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#023e58"
                                }]
                            }, {
                                featureType: "landscape.natural",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#14245c"
                                }]
                            }, {
                                featureType: "poi",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#283d6a"
                                }]
                            }, {
                                featureType: "poi.park",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "road",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#304a7d"
                                }]
                            }, {
                                featureType: "road",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#98a5be"
                                }]
                            }, {
                                featureType: "road",
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    color: "#1d2c4d"
                                }]
                            }, {
                                featureType: "road.highway",
                                stylers: [{
                                    visibility: "simplified"
                                }]
                            }, {
                                featureType: "transit",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#98a5be"
                                }]
                            }, {
                                featureType: "transit",
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    color: "#1d2c4d"
                                }]
                            }, {
                                featureType: "transit.line",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#283d6a"
                                }]
                            }, {
                                featureType: "transit.station",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#3a4762"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#021122"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "labels",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }];
                        r.load().then((function() {
                            var r = new google.maps.Map(e, {
                                center: a || {
                                    lat: 51,
                                    lng: 15
                                },
                                zoom: o || 4,
                                styles: l,
                                mapTypeControl: !1,
                                streetViewControl: !1
                            });
                            null == t || t.forEach((function(e) {
                                var t = e.code,
                                    n = e.country,
                                    o = e.number,
                                    a = e.position,
                                    i = e.size,
                                    l = e.street,
                                    c = e.title,
                                    s = e.town,
                                    d = e.url,
                                    u = i && "normal" !== i ? "/build/website/images/icons/custom/location_small-grey.svg" : "/build/website/images/icons/custom/location-grey.svg",
                                    f = new google.maps.Marker({
                                        position: a,
                                        map: r,
                                        icon: u,
                                        clickable: !0
                                    }),
                                    v = "";
                                c && (v += "<strong>" + c + "</strong></br>"), l && o && (v += l + " " + o + "</br>"), t && (v += t + " "), s && (v += s + " "), n && (v += "" + n);
                                var p = new google.maps.InfoWindow({
                                    content: v
                                });
                                f.addListener("mouseover", (function() {
                                    p.open(r, f)
                                })), f.addListener("mouseout", (function() {
                                    p.close()
                                })), d && f.addListener("click", (function() {
                                    window.open(d, "_blank")
                                }))
                            }));
                            return null == n || n.forEach((function(e) {
                                var t = e.position,
                                    n = e.name,
                                    o = e.tooltipHtml,
                                    a = new google.maps.Marker({
                                        position: t,
                                        map: r,
                                        icon: "/build/website/images/icons/custom/location-grey.svg",
                                        clickable: !0,
                                        title: n
                                    });
                                o && setTimeout((function() {
                                    return function(e, t) {
                                        r.getDiv().querySelectorAll('div[role="button"]').forEach((function(n) {
                                            if (e.getTitle() === n.title) {
                                                var o = Object(u.a)(n, {
                                                    content: t,
                                                    allowHTML: !0,
                                                    appendTo: document.body,
                                                    interactive: !0,
                                                    arrow: !1,
                                                    offset: [0, 8],
                                                    hideOnClick: i(),
                                                    trigger: i() ? "click" : "mouseenter",
                                                    onShow: function() {
                                                        var e;
                                                        i() && (null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open"))
                                                    },
                                                    onHide: function() {
                                                        var e;
                                                        i() && (document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open"))
                                                    }
                                                });
                                                if (i()) {
                                                    o.popper.classList.add("-propertyTippy");
                                                    var a = o.popper.querySelector(".tippy-close");
                                                    null == a || a.addEventListener("click", (function() {
                                                        o.hide()
                                                    }))
                                                }
                                            }
                                        }))
                                    }(a, o)
                                }), 1e3), a.addListener("click", (function() {
                                    return null
                                }))
                            })), r
                        }))
                    }
                };
            window.addEventListener("load", (function() {
                var e = document.querySelector("#homepage-map");
                if (e) {
                    var t = e.querySelectorAll("span"),
                        n = [];
                    t.forEach((function(e) {
                        var t = e.dataset,
                            o = t.name,
                            a = t.title,
                            i = t.lat,
                            r = t.lng,
                            l = t.street,
                            c = t.number,
                            s = t.code,
                            d = t.town,
                            u = t.country,
                            f = t.url,
                            v = {
                                position: {
                                    lat: +(i || ""),
                                    lng: +(r || "")
                                },
                                size: t.icon || "small",
                                title: a,
                                name: o,
                                street: l,
                                number: c,
                                code: s,
                                town: d,
                                country: u,
                                url: f
                            };
                        n.push(v)
                    }));
                    var o = !1,
                        a = new IntersectionObserver((function(t) {
                            t.forEach((function(t) {
                                t.isIntersecting && (!1 === o && (M(e, n), a.unobserve(e)), o = !0)
                            }))
                        }), {
                            rootMargin: "200px 0px 0px 0px",
                            threshold: [0, 1]
                        });
                    a.observe(e)
                }
            }));
            n("VAXT");
            window.addEventListener("load", (function() {
                var e = document.querySelector("#contact-map"),
                    t = null == e ? void 0 : e.querySelector("span");
                if (e && t) {
                    var n = [],
                        o = t.dataset,
                        a = o.name,
                        i = o.title,
                        r = {
                            position: {
                                lat: +(o.lat || ""),
                                lng: +(o.lng || "")
                            },
                            size: "normal",
                            title: i,
                            name: a,
                            street: o.street,
                            number: o.number,
                            code: o.code,
                            town: o.town,
                            country: o.country
                        };
                    n.push(r), M(e, n, void 0, 14, n[0].position)
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector("#properties-map");
                if (e) {
                    var t = e.querySelectorAll(".c-propertyLocation"),
                        n = Number(e.dataset.zoom),
                        o = Number(e.dataset.lat),
                        a = Number(e.dataset.lng),
                        i = [];
                    t.forEach((function(e) {
                        var t = e.dataset,
                            n = t.name,
                            o = {
                                position: {
                                    lat: +(t.lat || ""),
                                    lng: +(t.lng || "")
                                },
                                name: n,
                                tooltipHtml: e.innerHTML
                            };
                        i.push(o)
                    })), M(e, void 0, i, n, {
                        lat: o,
                        lng: a
                    })
                }
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelector("#distances-map"),
                    t = null == e ? void 0 : e.querySelector("span");
                if (e && t) {
                    var n = [],
                        o = t.dataset,
                        a = o.name,
                        i = {
                            position: {
                                lat: +(o.lat || ""),
                                lng: +(o.lng || "")
                            },
                            name: a,
                            title: a
                        };
                    n.push(i), M(e, n, void 0, 14, n[0].position)
                }
            }));
            document.querySelector(".l-main.-property") && window.addEventListener("load", (function() {
                var e;
                (e = document.querySelector(".c-buildings")) && e.querySelectorAll(".c-icon").forEach((function(e) {
                        var t = '<div class="c-infoIconBox -tooltip"><span class="c-icon -info -s24"></span><div class="t-text -f14">' + (e.dataset.text || "") + "</div></div>";
                        Object(u.a)(e, {
                            content: t,
                            allowHTML: !0,
                            placement: "bottom-start",
                            arrow: !1,
                            trigger: "mouseenter",
                            offset: r() ? [0, 4] : [-52, 4]
                        })
                    })),
                    function() {
                        var e = document.querySelector(".c-buildings_swiper");
                        if (e && r()) {
                            var t = e.querySelector(".swiper-pagination");
                            E({
                                container: e,
                                options: {
                                    spaceBetween: 12,
                                    pagination: {
                                        el: t,
                                        type: "progressbar"
                                    }
                                }
                            })
                        }
                    }()
            }));
            document.querySelector(".l-main.-sustainability") && function() {
                var e = document.querySelector(".c-panoramaSec"),
                    t = null == e ? void 0 : e.querySelector("video"),
                    n = null == t ? void 0 : t.querySelector("source");
                if (t && n) {
                    var o = n.dataset.src,
                        i = n.dataset.mobileSrc;
                    i && a() ? (n.src = i, t.load(), t.play()) : o && (n.src = o, t.load(), t.play())
                }
            }();
            var H = n("obfP"),
                j = n("8OJ3");
            n("49ep"), n("BAwZ");
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-videoModal"),
                    t = document.querySelector("#modal_video");
                t && (e.forEach((function(e) {
                    var t = e.dataset.video,
                        n = e.dataset.type || "youtube";
                    t && e.addEventListener("click", (function() {
                        var t = e.dataset.video || "",
                            o = e.dataset.videobg,
                            a = Object(j.default)("my-player");
                        o && a.poster(window.location.origin + o), H.a.show("modal_video", {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open"), "youtube" === n ? (a.tech("youtube"), a.src({
                                    type: "video/youtube",
                                    src: t
                                })) : "vimeo" === n ? (a.tech("vimeo"), a.src({
                                    type: "video/vimeo",
                                    src: t
                                })) : "file" === n && (a.tech("HTML5"), a.controls(!0), a.src({
                                    type: "video/mp4",
                                    src: window.location.origin + t
                                })), a.play()
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open"), "youtube" !== n && a.reset(), a.pause()
                            }
                        })
                    }))
                })), t.querySelectorAll(".c-modal_close").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close("modal_video")
                    }))
                })))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-factModal"),
                    t = document.querySelector("#modal_fact");
                t && (e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var n = e.dataset.title || "",
                            o = e.dataset.text || "",
                            a = e.dataset.image || "",
                            i = e.dataset.numberprimary || "",
                            r = e.dataset.numberprimarydescription || "",
                            l = e.dataset.numbersecondary || "",
                            c = e.dataset.numbersecondarydescription || "",
                            s = t.querySelector("[data-title]"),
                            d = t.querySelector("[data-text]"),
                            u = t.querySelector("[data-numprim]"),
                            f = t.querySelector("[data-numprimdesc]"),
                            v = t.querySelector("[data-numsec]"),
                            p = t.querySelector("[data-numsecdesc]"),
                            y = t.querySelector("[data-image]");
                        H.a.show("modal_fact", {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                s && (s.innerHTML = n), d && (d.innerHTML = o), u && (u.innerHTML = i), f && (f.innerHTML = r), v && (v.innerHTML = l), p && (p.innerHTML = c), y && (y.src = a), null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open")
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open")
                            }
                        })
                    }))
                })), t.querySelectorAll(".c-modal_close").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close("modal_fact")
                    }))
                })))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-managersModal"),
                    t = "modal_managers",
                    n = document.querySelector("#" + t);
                n && (e.forEach((function(e) {
                    var o, a = e.dataset.slide || 0;
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), H.a.show(t, {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open");
                                var t = null == n ? void 0 : n.querySelector(".c-modal_swiper"),
                                    i = null == n ? void 0 : n.querySelector(".-prev"),
                                    r = null == n ? void 0 : n.querySelector(".-next");
                                t && (o = E({
                                    container: t,
                                    options: {
                                        spaceBetween: 12,
                                        autoHeight: !0,
                                        initialSlide: +a,
                                        navigation: {
                                            prevEl: i,
                                            nextEl: r
                                        },
                                        breakpoints: {
                                            769: {
                                                spaceBetween: 40
                                            }
                                        }
                                    }
                                }))
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open"), o.destroy()
                            }
                        })
                    }))
                })), n.querySelectorAll(".c-modal_close").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close(t)
                    }))
                })))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-socialResponsibilityModal"),
                    t = "modal_socialResponsibility",
                    n = document.querySelector("#" + t);
                n && (e.forEach((function(e) {
                    var o, a = e.dataset.slide || 0;
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), H.a.show(t, {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open");
                                var t = null == n ? void 0 : n.querySelector(".c-socialResponsibilityModal_swiper"),
                                    i = null == n ? void 0 : n.querySelector(".-bulletsbar");
                                t && (o = E({
                                    container: t,
                                    options: {
                                        spaceBetween: 0,
                                        autoHeight: !0,
                                        initialSlide: +a,
                                        slidesPerView: 1,
                                        pagination: {
                                            el: i,
                                            type: "bullets"
                                        }
                                    }
                                }))
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open"), o.destroy()
                            }
                        })
                    }))
                })), n.querySelectorAll(".c-modal_close").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close(t)
                    }))
                })))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-certificateModal"),
                    t = "modal_certificate",
                    n = document.querySelector("#" + t);
                e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var o = e.dataset.text || "",
                            a = e.dataset.image || "",
                            i = null == n ? void 0 : n.querySelector("[data-text]"),
                            r = null == n ? void 0 : n.querySelector("[data-image]");
                        H.a.show(t, {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                i && r && (i.innerHTML = o, r.src = a), null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open")
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open")
                            }
                        })
                    }))
                }));
                var o = null == n ? void 0 : n.querySelectorAll(".c-modal_close");
                null == o || o.forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close(t)
                    }))
                }))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-indicatorsModal"),
                    t = "modal_indicators",
                    n = document.querySelector("#" + t);
                n && (e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        H.a.show(t, {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open")
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open")
                            }
                        })
                    }))
                })), n.querySelectorAll(".c-modal_close").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close(t)
                    }))
                })))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-countriesModal"),
                    t = "modal_countries",
                    n = document.querySelector("#" + t);
                e.forEach((function(e) {
                    e.addEventListener("click", (function(o) {
                        o.preventDefault();
                        var a = e.dataset.text || "",
                            i = e.dataset.image || "",
                            r = null == n ? void 0 : n.querySelector("[data-text]"),
                            l = null == n ? void 0 : n.querySelector("[data-image]");
                        H.a.show(t, {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                r && l && (r.innerHTML = a, l.src = i), null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open")
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open")
                            }
                        })
                    }))
                }));
                var o = null == n ? void 0 : n.querySelectorAll(".c-modal_close");
                null == o || o.forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close(t)
                    }))
                }))
            }));
            window.addEventListener("load", (function() {
                var e = document.querySelectorAll(".js-imageModal"),
                    t = document.querySelector("#modal_image");
                e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var n = e.dataset.title || "",
                            o = e.dataset.image || "",
                            a = null == t ? void 0 : t.querySelector("[data-title]"),
                            i = null == t ? void 0 : t.querySelector("[data-image]");
                        H.a.show("modal_image", {
                            disableFocus: !0,
                            onShow: function() {
                                var e;
                                a && i && (a.innerHTML = n, i.src = o), null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.add("-modal-open")
                            },
                            onClose: function() {
                                var e;
                                document.body.style.paddingRight = "0", null === (e = document.querySelector("html, body")) || void 0 === e || e.classList.remove("-modal-open")
                            }
                        })
                    }))
                }));
                var n = null == t ? void 0 : t.querySelectorAll(".c-modal_close");
                null == n || n.forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), H.a.close("modal_image")
                    }))
                }))
            }));
            window.addEventListener("load", (function() {
                r() || document.querySelectorAll(".a-leafAnim").forEach((function(e) {
                    var t = null == e ? void 0 : e.querySelector(".a-leafAnim_leaf");
                    if (e && t) {
                        var n, o = e.getBoundingClientRect();
                        e.addEventListener("mousemove", (function(n) {
                            var a = n.clientX,
                                i = n.clientY;
                            o = e.getBoundingClientRect();
                            var r = a - t.clientWidth / 2,
                                l = i - t.clientHeight / 2,
                                c = o.bottom - t.clientHeight;
                            l >= o.top && l <= c ? t.style.setProperty("--y", l + "px") : (l >= o.top && t.style.setProperty("--y", c + "px"), l <= c && t.style.setProperty("--y", o.top + "px"));
                            var s = o.right - t.clientWidth;
                            r >= o.left && r <= s ? t.style.setProperty("--x", r + "px") : (r >= o.left && t.style.setProperty("--x", s + "px"), r <= s && t.style.setProperty("--x", o.left + "px"))
                        })), e.addEventListener("mouseenter", (function() {
                            clearTimeout(n), t.classList.add("-fixed"), t.classList.remove("-hidden")
                        })), e.addEventListener("mouseleave", (function() {
                            clearTimeout(n), t.classList.add("-hidden"), n = setTimeout((function() {
                                t.classList.remove("-fixed")
                            }), 200)
                        }))
                    }
                }))
            }));
            n("8+lM")
        }
    },
    [
        ["wXKj", "runtime", 0]
    ]
]);
