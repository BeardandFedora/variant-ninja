/*!*************************************************************** 
 ***********COPYRIGHT (c) 2014 Medium Rare www.mrare.co **********
 **** unauthorised copying or use elsewhere is not permitted *****
 *****************************************************************/

function Variant() {
    function a() {
        $(".viu").html($("#veu").html()), Fb = $("#veu"), Gb = $(".viu"), Hb = "undefined" !== $("body").attr("mrv_namespace") ? $("body").attr("mrv_namespace") : "mrv_variant.default", Ib = $("body").attr("mrv_contentTarget") ? $("#veu " + $("body").attr("mrv_contentTarget")) : Fb, Jb = $("body").attr("mrv_contentTarget") ? $(".viu " + $("body").attr("mrv_contentTarget")) : Gb, Kb = $("body").attr("mrv_navTarget") ? $("#veu " + $("body").attr("mrv_navTarget")) : Ib, Lb = $("body").attr("mrv_navTarget") ? $(".viu " + $("body").attr("mrv_navTarget")) : Jb, Mb = $("body").attr("mrv_footerTarget") ? $("#veu " + $("body").attr("mrv_footerTarget")) : Ib, Nb = $("body").attr("mrv_footerTarget") ? $(".viu " + $("body").attr("mrv_footerTarget")) : Jb
    }

    function b() {
        var a;
        $(".vhv").css("height", $(window).height()), a = $(".vlv").height() - $(".vlv .vlq").height() - $(".vlv .vls").height() - $(".vlv .vlw").height() - 2 * $(".vlv .vho").height() - $(".vac").height() - 64, $(".vem").css("max-height", a);
        var b = $(window).height() - $(".vem").outerHeight(!1) - $(".vlv .vls").height() - $(".vlz").height() - 9;
        $(".vgm").css("height", b);
        var c = $(window).height() - $(".vlo .vls").height() - $(".vlo .vlq").height() - $(".vgc").height() - 32;
        $(".vfw").css("max-height", c), bb()
    }

    function c(a) {
        var c, d, e = $("#" + a).find("section, header, footer").clone(),
            f = g($(e));
        Mb.selector != Ib.selector ? $(e).addClass(a + "-" + f).appendTo(Ib) : (c = $(Ib).find("footer"), c.length ? $(e).addClass(a + "-" + f).insertBefore(c) : $(e).addClass(a + "-" + f).appendTo(Ib)), $(".vem").append('<div class="vaa data-vfs="' + a + '" vbq="' + a + "-" + f + '"><div class="vab"><span class="vir" contenteditable="true">' + $("#" + a).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + a + "-" + f + '"></i></div>'), db(), $("#veu .youtube-bg-iframe").each(function(a) {
            var b = (new Date).getTime();
            $(this).attr("id", "yt-" + b + "-" + a).attr("src", $(this).attr("youtube-src")).removeAttr("youtube-src")
        }), V(), h(), b(), d = $(".vem"), layoutMapHeight = d[0].scrollHeight, d.animate({
            scrollTop: layoutMapHeight
        }, 480)
    }

    function d(a, b) {
        if($("#veu nav, .viu nav").remove(), "vir" == b) {
            var c = $("#" + a).clone();
            $(c).find("script.options").remove(), Kb.prepend(c.html()), Kb.find("nav").addClass("vir").attr("nav-id", a), g(Kb.find("nav")), nb(a)
        }
        "vhz" == b && (c = Bb($("#vbn [via=" + a + "]").get(0), !0), Kb.prepend(c), nb($("#vbn [via=" + a + "]").attr("nav-id"))), V(), h()
    }

    function e(a, b) {
        if($("#veu footer").remove(), "vir" == b) {
            var c = $("#" + a).html();
            Mb.append(c), Mb.find("footer").addClass("vir"), g(Mb.find("footer"))
        }
        "vhz" == b && (c = Bb($("#vbl [vhy=" + a + "]").get(0), !0), Mb.append(c)), V(), h()
    }

    function f() {
        var a = $(Jb.selector),
            b = $(Ib.selector),
            c = a.find("footer"),
            d = b.find("footer");
        $(".vem .vaa").each(function() {
            var e = $(this).attr("vbq"),
                f = b.find("." + e),
                g = f.clone(),
                h = b.find("[vik=" + e + "]"),
                i = h.clone();
            h.remove(), d.length ? i.insertBefore(d) : i.appendTo(b), f.remove(), d.length ? g.insertBefore(d) : g.appendTo(b), f = a.find("." + e), g = f.clone(), h = a.find("[vik=" + e + "]"), i = h.clone(), h.remove(), c.length ? i.insertBefore(c) : i.appendTo(a), f.remove(), c.length ? g.insertBefore(c) : g.appendTo(a)
        }), V(), h()
    }

    function g(a) {
        var b = (new Date).getTime(),
            c = "vjs-" + b;
        return $(a).is("section, nav, header, footer, .divider-background") && ($(a).attr("vic", c), $(a).addClass(c)), $(a).find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, textarea, blockquote, figcaption").each(function(a) {
            var b = c + "-" + a;
            $(this).attr("vic", b), $(this).addClass(b), $(this).is("nav, nav li, .slides > li, ul, div, i, img, section, header, figure, video, iframe, input, textarea, .vjx") || ($(this).addClass("vir"), $(this).attr("contenteditable", "true")), $(this).is("a, strong, em") || $(this).parent().removeAttr("contenteditable")
        }), b
    }

    function h() {
        $(".viu").html($("#veu").html()), $(".viu").find("[no-src]").each(function() {
            $(this).attr("src", $(this).attr("no-src")).removeClass("no-src")
        }), setTimeout(function() {
            reInit(".viu"), lb(), cb(), $(".embedded-video-holder").each(function() {
                $(this).addClass("vju")
            })
        }, 100)
    }

    function i(a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }

    function j() {
        $(".global-vfr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function k() {
        $(".vfc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vga").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function l() {
        var a, b = (new Date).getTime(),
            c = "via-" + b,
            d = $(".vgb").val();
        $(".vfj").closest(".vho").find(".vly").text(d), $(".vgb").val(""), $("#veu nav").removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), $(".viu nav").removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), $("#vbn").append($("#veu nav").clone()), a = $("#vbn").html(), $.localStorage(Hb + ".vbo", a), m($("." + c))
    }

    function m(a) {
        $(".vfj").append('<li class="vfi" nav-id="' + $(a).attr("via") + '" vit="vhz">' + $(a).attr("vio") + '<span class="vby oi" data-glyph="x"></span></li>')
    }

    function n() {
        $("#vbn").append($.localStorage(Hb + ".vbo")), $("#vbn nav").each(function() {
            m($(this))
        })
    }

    function o() {
        var a = $(".viu nav"),
            b = a.attr("via");
        $("#veu ." + b).html(a.html()).attr("class", a.attr("class")), $("#vbn ." + b).html(a.html()).attr("class", a.attr("class")), $("#vbn .vjb").removeClass("vjb"), $.localStorage(Hb + ".vbo", $("#vbn").html())
    }

    function p() {
        var a = $(".viu footer"),
            b = a.attr("vhy");
        $("#veu ." + b).html(a.html()), $("#vbl ." + b).html(a.html()), $("#vbl .vjb").removeClass("vjb"), $.localStorage(Hb + ".vbm", $("#vbl").html())
    }

    function q() {
        $(".vfb").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vfy").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function r() {
        var a, b = (new Date).getTime(),
            c = "vhy-" + b,
            d = $(".vfz").val();
        $(".vdm").closest(".vho").find(".vly").text(d), $(".vfz").val(""), $("#veu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), $(".viu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), $("#vbl").append($("#veu footer").clone()), a = $("#vbl").html(), $.localStorage(Hb + ".vbm", a), s($("." + c))
    }

    function s(a) {
        $(".vdm").append('<li class="vdl" vid="' + $(a).attr("vhy") + '" vdn="' + $(a).attr("vhy") + '" vit="vhz">' + $(a).attr("vie") + '<span class="vbx oi" data-glyph="x"></span></li>')
    }

    function t() {
        $("#vbl").append($.localStorage(Hb + ".vbm")), $("#vbl footer").each(function() {
            s($(this))
        })
    }

    function u() {
        $(".vjq").removeClass("vgq"), $(".vad").toggleClass("vgq")
    }

    function v(a) {
        $(".vcw").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vgp").addClass("vih");
                var c = $("." + a);
                c.hasClass("ven") ? $(".vcq").text("for Lightbox Image") : U(), $(".vcu").val($("." + a).attr("href").replace("../img/", "img/")), $(".vcv").val(a), $(".vcz").removeAttr("selected"), $(".edit-link-target-" + $("." + a).attr("target") + "-mrv").attr("selected", "selected"), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function w(a) {
        $(".vcl").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vdx").html($("#vdp").html()), $(".vcp").attr("src", $("." + a).attr("src")), $(".vcm .veb").text($("." + a).get(0).naturalWidth + "x" + $("." + a).get(0).naturalHeight + " pixels"), $(".vco").val($("." + a).attr("src").replace("../img/", "img/")), $(".vck").val(a), $(".vcf").val($("." + a).attr("alt")), $(".vdx .vdy").each(function(a) {
                    var a = $(this).find("img").get(0),
                        b = $(this).find(".vec");
                    b.text(a.naturalWidth + "x" + a.naturalHeight)
                }), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    M(), $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function x(a) {
        $(".vcd").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            minHeight: 620,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $("#vgo").val(a), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function y(a) {
        $(".vde").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vdd").val(a), $(".vda").val($("." + a + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/")), $(".vdg").val($("." + a + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/")), $(".vdb").val($("." + a + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/")), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function z() {
        $(".vge").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vgf").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function A(a, c) {
        a = "undefined" != typeof a ? a : "", c = "undefined" != typeof c ? c : "", $(".vag").text(a), $(".vae").html(c), $(".vaf").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function B(a, b, c) {
        var d, e, f, g, h = b || a.data("vip");
        d = $(a).find(h.selector + "[" + h.attribute + "]").length ? $(a).find(h.selector + "[" + h.attribute + "]") : $(a), f = "undefined" != typeof h.modalInputIcon ? h.modalInputIcon : "pencil", g = "undefined" != typeof h.refresh ? "true" : "false", e = d.attr(h.attribute), $(".vbk").text(h.modalTitle), $(".vbh").text(h.modalIntro), $(".vbf").text(h.modalInputLabel), $(".vkh").attr("data-glyph", f), $(".vbg").val(e), $(".vbe").val($(d).attr("vic")).attr("vnn", g), $(".vbc").val(h.attribute), $(".vbk").text(h.modalTitle), "undefined" != typeof c && c === !0 ? C() : $(a).is("section, header") ? $(".vgk").text(h.buttonText).attr("data-glyph", f).removeClass("vih") : $(".vdh").text(h.buttonText).attr("data-glyph", f).removeClass("vih")
    }

    function C() {
        $(".vbi").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), b()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), b()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function D() {
        {
            var a = $("." + $(".vbe").val()),
                b = $(".vbg").val(),
                c = $(".vbc").val();
            $(a).closest("[data-vip]").data("vip")
        } - 1 !== b.indexOf("<") && (!$(b).is("iframe") || "src" !== c && "no-src" !== c || (b = $(b).attr("src"), "//" === b.substring(0, 2) && (b = "https:" + b), -1 !== b.indexOf("youtube.com") && (b += "?showinfo=0&rel=0&modestbranding=1", a.hasClass("youtube-bg-iframe") && (b += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3")), -1 !== b.indexOf("vimeo.com") && (b += "?badge=0&title=0&byline=0"))), $(a).is("iframe") && "no-src" == c ? ($(a).attr(c, b), $(".viu ." + $(".vbe").val()).attr("src", b)) : $(a).attr(c, b), V(), "true" === $(".vbe").attr("vnn") && h(), $(".vbe").removeAttr("refresh")
    }

    function E(a) {
        var b, c, d, e;
        $("#veu ." + a).attr("vht") && (a = "parent" == $("#veu ." + a).attr("vht") ? $("#veu ." + a).parent().attr("vic") : $("#veu ." + a).closest($("#veu ." + a).attr("vht")).attr("vic")), b = $(".viu ." + a).clone(), c = $("#veu ." + a).clone(), d = (new Date).getTime(), e = "vjs-" + d, b.attr("vic", e), c.attr("vic", e), b.alterClass("vjs-*", ""), c.alterClass("vjs-*", ""), b.addClass(e), c.addClass(e), b.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, blockquote, figcaption").each(function(a) {
            var b = "vjs-" + d + "-" + a;
            $(this).attr("vic", b), $(this).alterClass("vjs-*", ""), $(this).addClass(b)
        }), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, blockquote, figcaption").each(function(a) {
            var b = "vjs-" + d + "-" + a;
            $(this).attr("vic", b), $(this).alterClass("vjs-*", ""), $(this).addClass(b)
        }), b.insertAfter($(".viu ." + a)), c.insertAfter($("#veu ." + a)), c.insertAfter($("#vbn ." + a)), V(), $(".viu." + a).parents().find(".grid-layout") && h(), $(".vhw").hide()
    }

    function F(a, b) {
        $("#veu ." + a).attr("vht") && (a = "parent" == $("#veu ." + a).attr("vht") ? $("#veu ." + a).parent().attr("vic") : $("#veu ." + a).closest($("#veu ." + a).attr("vht")).attr("vic")), also = $("#veu ." + a).attr("vjw") ? $("#veu ." + a).closest("nav, section, header, footer").find($("#veu ." + a).attr("vjw")).attr("vic") : a, b = "undefined" != typeof b ? b : !1, b === !0 && ($(".viu ." + a).remove(), $("#veu ." + a).remove()), $(".vdv").length ? ($(".viu ." + a + ", .viu ." + also).addClass("vjb").removeClass("vjm"), $("#veu ." + a + ", #veu ." + also).addClass("vjb").removeClass("vjm")) : ($(".viu ." + a + ", .viu ." + also).addClass("vib").removeClass("vjm"), $("#veu ." + a + ", #veu ." + also).addClass("vib").removeClass("vjm")), $(".viu ." + a).parents().find(".grid-layout") && h(), V(), $(".vhw").hide()
    }

    function G(a) {
        if($(a).siblings().length) return void $(a).remove();
        if($(a).parent().length) {
            var b = $(a).parent();
            return $(a).remove(), G(b)
        }
    }

    function H() {
        var a = $("." + $(".vcv").val()),
            b = $(".vcu").val(),
            c = $(".vcy").val();
        a.hasClass("ven") && (a.find("img[alt]").length && a.attr("data-title", a.find("img").attr("alt")), "img/" == b.substring(0, 4) && (b = b.replace("img/", "../img/"))), a.removeClass("inner-link").attr("href", b).attr("target", c), -1 != b.indexOf("#") && a.addClass("inner-link"), V()
    }

    function I() {
        var a = $(".vco").val(),
            b = $("." + $(".vck").val());
        "img/" == a.substring(0, 4) && (a = a.replace("img/", "../img/")), b.attr("src", a), b.attr("alt", $(".vcf").val()), b.closest("a.ven").length && b.closest("a.ven").attr("data-title", b.attr("alt")).attr("href", a), b.hasClass("background-image") && h(), V()
    }

    function J() {
        var a = $(".vda").val(),
            b = $(".vdg").val(),
            c = $(".vdb").val(),
            d = $("." + $(".vdd").val());
        a.length && "video/" == a.substring(0, 6) && (a = a.replace("video/", "../video/")), b.length && "video/" == b.substring(0, 6) && (b = b.replace("video/", "../video/")), c.length && "video/" == c.substring(0, 6) && (c = c.replace("video/", "../video/")), d.find('source[type="video/mp4"]').attr("src", a), d.find('source[type="video/webm"]').attr("src", b), d.find('source[type="video/ogg"]').attr("src", c), h(), V()
    }

    function K(a) {
        var b, c, d, e = a.target.files;
        for(d = $(".vdx .vmh").first(), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), b = 0; c = e[b]; b++) $('#vdp [vis="' + c.name + '"]').length || ($('#vdp [vis="' + c.name + '"]').remove(), $(d).append('<div class="vdy"><img class="vcj" src="../img/' + c.name + '" vis="' + c.name + '" onerror="variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>')), d = $(d).is(".vdx .vmh:last") ? $(".vdx .vmh:first") : $(d).next(".vdx .vmh");
        M()
    }

    function L() {
        var a = $("<div />").addClass("vmh"),
            b = $("<div />").addClass("vmh"),
            c = $("<div />").addClass("vmh"),
            d = "";
        if($.localStorage(Hb + ".gallery.images")) $("#vdp").html($.localStorage(Hb + ".gallery.images")), $("#vdp div").each(function() {
            $(this).find("img").length || $(this).remove(), $(this).hasClass("no-image") && $(this).remove()
        });
        else {
            var e = $(".vdz").attr("vbv").split(",");
            e.forEach(function(e, f) {
                d = '<div class="vdy"><img class="vcj" delay-src="../img/' + e + '" vis="' + e + '" onerror="variant.defaultImageError(this)"/><span class="vec"></span></div>', f % 3 === 0 ? c.append(d) : f % 2 === 0 ? b.append(d) : a.append(d), $("#vdp").append(a).append(b).append(c)
            })
        }
    }

    function M() {
        $.localStorage(Hb + ".gallery.images", $(".vdx").html()), $("#vdp").html($(".vdx").html())
    }

    function N(a) {
        var b = $(a).find("img");
        b.attr("src", ""), b.attr("src", "../img/" + b.attr("vis")), b.css("display", "inline"), $(a).removeClass("no-image"), $(a).find(".vjn, .vec").html("")
    }

    function O() {
        var a = "",
            b = $(".vce").attr("vai").split(",");
        b.forEach(function(b) {
            a += '<div class="vam"><i class="icon ' + b + '" icon-class="' + b + '"></i></div>'
        }), $(".vce").html(a)
    }

    function P() {
        var a = $(".vgm"),
            b = "",
            c = $(".vgi"),
            d = "";
        $("#vgg .vim").each(function() {
            var a, c = $(this),
                e = c.attr("vbp").split(","),
                f = "";
            e.forEach(function(a) {
                -1 == d.indexOf(a) && (d += '<div class="vgh" vbp="' + a + '">' + a + "</div>")
            }), a = c.attr("icons"), "undefined" != typeof a && a !== !1 && (a = c.attr("icons").split(","), a.forEach(function(a) {
                f += '<img class="vgj" src="builder/img/' + a + '.png" />'
            })), b += '<div title="Add to page" class="vgl" vbp="' + $(this).attr("vbp") + '" vgv="' + $(this).attr("id") + '"><img delay-src="builder/img/sections/' + $(this).attr("id") + '.jpg"/>' + f + '<span class="vjl">' + $(this).attr("vbr") + "</span></div>"
        }), a.html(b), c.append(d)
    }

    function Q(a) {
        var b = $("." + a);
        if($(b).is("p , div, span, figure, article, img"))
            if($(b).is('[class*="medium-"]') || $(b).parent().is('div [class*="medium-"]')) {
                if($(b).parent().is('div [class*="medium-"]') && (b = $(b).parent()), !$(b).hasClass("medium-12")) {
                    if(b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-12");
                    if(b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-11");
                    if(b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-10");
                    if(b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-9");
                    if(b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-8");
                    if(b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-7");
                    if(b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-6");
                    if(b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-5");
                    if(b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-4");
                    if(b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-3");
                    if(b.hasClass("medium-1")) return void b.removeClass("medium-1").addClass("medium-2")
                }
            } else if($(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if($(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-xs-12")) {
                if(b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-12");
                if(b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-11");
                if(b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-10");
                if(b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-9");
                if(b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-8");
                if(b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-7");
                if(b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-6");
                if(b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-5");
                if(b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-4");
                if(b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-3");
                if(b.hasClass("col-xs-1")) return void b.removeClass("col-xs-1").addClass("col-xs-2")
            }
        } else if($(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if($(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-sm-12")) {
                if(b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-12");
                if(b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-11");
                if(b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-10");
                if(b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-9");
                if(b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-8");
                if(b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-7");
                if(b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-6");
                if(b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-5");
                if(b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-4");
                if(b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-3");
                if(b.hasClass("col-sm-1")) return void b.removeClass("col-sm-1").addClass("col-sm-2")
            }
        } else if(($(b).is('[class*="col-md-"]') || $(b).parent().is('div [class*="col-md-"]')) && ($(b).parent().is('div [class*="col-md-"]') && (b = $(b).parent()), !$(b).hasClass("col-md-12"))) {
            if(b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-12");
            if(b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-11");
            if(b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-10");
            if(b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-9");
            if(b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-8");
            if(b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-7");
            if(b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-6");
            if(b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-5");
            if(b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-4");
            if(b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-3");
            if(b.hasClass("col-md-1")) return void b.removeClass("col-md-1").addClass("col-md-2")
        }
        V()
    }

    function R(a) {
        var b = $("." + a);
        if($(b).is("p , div, span, figure, article, img"))
            if($(b).is('[class*="medium-"]') || $(b).parent().is('div [class*="medium-"]')) {
                if($(b).parent().is('div [class*="medium-"]') && (b = $(b).parent()), !$(b).hasClass("medium-1")) {
                    if(b.hasClass("medium-12")) return void b.removeClass("medium-12").addClass("medium-11");
                    if(b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-10");
                    if(b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-9");
                    if(b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-8");
                    if(b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-7");
                    if(b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-6");
                    if(b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-5");
                    if(b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-4");
                    if(b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-3");
                    if(b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-2");
                    if(b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-1")
                }
            } else if($(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if($(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-xs-1")) {
                if(b.hasClass("col-xs-12")) return void b.removeClass("col-xs-12").addClass("col-xs-11");
                if(b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-10");
                if(b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-9");
                if(b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-8");
                if(b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-7");
                if(b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-6");
                if(b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-5");
                if(b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-4");
                if(b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-3");
                if(b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-2");
                if(b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-1")
            }
        } else if($(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if($(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-sm-1")) {
                if(b.hasClass("col-sm-12")) return void b.removeClass("col-sm-12").addClass("col-sm-11");
                if(b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-10");
                if(b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-9");
                if(b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-8");
                if(b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-7");
                if(b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-6");
                if(b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-5");
                if(b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-4");
                if(b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-3");
                if(b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-2");
                if(b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-1")
            }
        } else if(($(b).is('[class*="col-md-"]') || $(b).parent().is('div [class*="col-md-"]')) && ($(b).parent().is('div [class*="col-md-"]') && (b = $(b).parent()), !$(b).hasClass("col-md-1"))) {
            if(b.hasClass("col-md-12")) return void b.removeClass("col-md-12").addClass("col-md-11");
            if(b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-10");
            if(b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-9");
            if(b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-8");
            if(b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-7");
            if(b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-6");
            if(b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-5");
            if(b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-4");
            if(b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-3");
            if(b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-2");
            if(b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-1")
        }
        V()
    }

    function S(a) {
        var b, c, d;
        $("[vik=" + $(a).parent().parent().attr("vbq") + "]").length ? (c = $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id"), d = $('.viu[href="#' + $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id") + '"]'), d.attr("href", "#" + T($(a).text())), o(), $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id", T($(a).text())).attr("vij", $(a).text())) : (b = $("." + $(a).parent().parent().attr("vbq")), b.before('<a id="' + T($(a).text()) + '" class="in-page-link" vij="' + $(a).text() + '" vik="' + $(a).parent().parent().attr("vbq") + '"></a>'))
    }

    function T(a) {
        return a.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-")
    }

    function U() {
        $(".vgp").addClass("vih");
        var a = $(Ib).find(".in-page-link");
        a.length && (output = '<option value="">Select an in-page navigation link</option>', a.each(function() {
            var a = $(this);
            output += '<option value="#' + a.attr("id") + '">' + a.attr("vij") + "</option>"
        }), $(".veh").html(output), $(".vgp").removeClass("vih"))
    }

    function V() {
        var a = $.localStorage(Hb + ".vhh");
        $(".vhe").addClass("vih"), o(), p(), $.localStorage(Hb + ".vhh") ? ($.localStorage(Hb + ".state.veu." + a, $("#veu").html()), $.localStorage(Hb + ".state.vem." + a, $(".vem").html()), $.localStorage(Hb + ".vhj." + a, $(".vei").text()), $.localStorage(Hb + ".vhf." + a, $(".vay").attr("vhx")), $.localStorage(Hb + "vmp." + a, $(".vms").attr("vmr")), $.localStorage(Hb + ".vkp." + a, "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " ")) : ($.localStorage(Hb + ".state.veu", $("#veu").html()), $.localStorage(Hb + ".state.vem", $(".vem").html()), $.localStorage(Hb + ".vhj", $(".vei").text()), $.localStorage(Hb + ".vhf", $(".vay").attr("vhx")), $.localStorage(Hb + "vmp", $(".vms").attr("vmr")), $.localStorage(Hb + ".vkp", "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " "))
    }

    function W() {
        var a = (new Date).getTime();
        newStateName = $(".vgf").val(), stateID = "viy-" + a, $("#vhl").append('<li class="viy" viy="' + stateID + '" vjh="' + newStateName + '" page-title="' + $(".vei").text() + '"></li>'), X(newStateName, stateID), $('#vhl [viy="' + $.localStorage(Hb + ".vhh") + '"]').attr("page-title", $(".vei").text()), $.localStorage(Hb + ".vhk", $("#vhl").html()), $.localStorage(Hb + ".state.veu." + stateID, $("#veu").html()), $.localStorage(Hb + ".state.vem." + stateID, $(".vem").html()), $.localStorage(Hb + ".vhj." + stateID, $(".vei").text()), $.localStorage(Hb + ".vhf." + stateID, $(".vay").attr("vhx")), $.localStorage(Hb + "vmp." + stateID, $(".vms").attr("vmr")), $.localStorage(Hb + ".vkp." + stateID, $("#vkk").attr("class")), $.localStorage(Hb + ".vhh", stateID), $.localStorage(Hb + ".vhg", newStateName), $(".vcr").text(newStateName).removeClass("vih")
    }

    function X(a, b) {
        $(".vfw").prepend('<div title="Open ' + a + '" class="ves" vjh="' + a + '" state-id="' + b + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + a + '</span><span title="Delete ' + a + '" data-toggle="tooltip" data-placement="top"  class="vbz oi" data-glyph="x"></span></div>'), Pb && $(".vdj").remove()
    }

    function Y(b, c) {
        $(".vhe").addClass("vih");
        var d, b = "undefined" != typeof b ? b : "",
            c = "undefined" != typeof c ? c : "",
            e = $.localStorage(Hb + ".vhj");
        b || (b = $.localStorage(Hb + ".vhh"), c = $.localStorage(Hb + ".vhg")), stateHTML = ".state.veu." + b, d = ".state.vem." + b, colourScheme = ".vhf." + b, fontOption = "vmp." + b, bodyClasses = ".vkp." + b, $('#vhl [viy="' + b + '"]').attr("page-title") ? e = $('#vhl [viy="' + b + '"]').attr("page-title") : ($(".vei").text("Edit title tag"), document.title = "Variant HTML Builder by Medium Rare"), $.localStorage(Hb + ".vhh", b), $.localStorage(Hb + ".vhg", c), b || (stateHTML = ".state.veu", d = ".state.vem", colourScheme = ".vhf", fontOption = "vmp", bodyClasses = ".vkp", e = $.localStorage(Hb + ".vhj")), $.localStorage(Hb + stateHTML) && (c = c ? c : "Unnamed page", $(".vcr").text(c).removeClass("vih"), $(".vei").text(e), document.title = e, $("#veu").html($.localStorage(Hb + stateHTML)), $(".vem").html($.localStorage(Hb + d)), vb($.localStorage(Hb + bodyClasses)), ib($.localStorage(Hb + colourScheme), !1), jb($.localStorage(Hb + fontOption), !1), db(), a(), nb(), h()), $(".vem").find(".vaa").length ? $(".vem").removeClass("empty-vem") : $(".vem").addClass("empty-vem")
    }

    function Z(a) {
        var b, c, d, e, f, g, h = new JSZip,
            i = [],
            j = new Date;
        return $("#vhl .viy").length ? ("all" == a ? ($("#vhl .viy").each(function() {
            i.push($(this).attr("viy"))
        }), b = "variant-exported-" + T(j.toDateString())) : i.push(a), i.forEach(function(a) {
            c = $.localStorage(Hb + ".state.veu." + a), d = $.localStorage(Hb + ".state.vem." + a), colourScheme = $.localStorage(Hb + ".vhf." + a), fontOption = $.localStorage(Hb + "vmp." + a), bodyClasses = $.localStorage(Hb + ".vkp." + a), pageName = $('#vhl [viy="' + a + '"]').attr("vjh"), pageTitle = $('#vhl [viy="' + a + '"]').attr("page-title"), pageTitle = "undefined" != typeof pageTitle ? pageTitle : "", e = {
                stateID: a,
                templateName: Hb,
                pageName: pageName,
                pageTitle: pageTitle,
                colourScheme: colourScheme,
                fontOption: fontOption,
                bodyClasses: bodyClasses,
                layoutMap: d,
                masterHtml: c
            }, f = JSON.stringify(e), h.file(T(pageName) + "-" + j.getTime() + ".page", f)
        }), h.file(Hb + ".navs", $("#vbn").html()), h.file(Hb + ".footers", $("#vbl").html()), "all" != a && (b = T(pageName)), g = h.generate({
            type: "blob",
            compression: "deflate"
        }), void saveAs(g, b + ".variant")) : void A("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.")
    }

    function _(a, b) {
        for(var c, d = "undefined" != typeof a.target ? a.target.files : a, e = "", b = 1 == b ? !0 : !1, f = 0; c = d[f]; f++) {
            var g = new FileReader;
            g.onload = function(a) {
                return function(c) {
                    try {
                        var d = new JSZip(c.target.result),
                            f = '<span class="vjl">Imported the following:</span>';
                        excludedHead = '<span class="vjl">Excluded these:</span>', fileNames = "<ul>", excluded = "<ul>", $.each(d.files, function(a, b) {
                            var c, d;
                            b.name == Hb + ".navs" ? (c = b.asText().trim(), c = $('<div id="variant-temp-navs-mrv" />').html(c), $(c).find("nav").each(function() {
                                $('#vbn [via="' + $(this).attr("via") + '"]').length ? excluded += "<li>Nav - " + $(this).attr("vio") + " (already exists)</li>" : (m($(this)), $("#vbn").append($(this)), $.localStorage(Hb + ".vbo", $("#vbn").html()), fileNames += "<li>Nav - " + $(this).attr("vio") + "</li>")
                            })) : b.name == Hb + ".footers" ? (footers = b.asText().trim(), footers = $('<div id="vjj" />').html(footers), $(footers).find("footer").each(function() {
                                $('#vbl [vhy="' + $(this).attr("vhy") + '"]').length ? excluded += "<li>Footer - " + $(this).attr("vie") + " (already exists)</li>" : (s($(this)), $("#vbl").append($(this)), $.localStorage(Hb + ".custom-footers", $("#vbl").html()), fileNames += "<li>Footer - " + $(this).attr("vie") + "</li>")
                            })) : (d = JSON.parse(b.asText()), d.templateName == Hb ? $('#vhl [viy="' + d.stateID + '"]').length ? excluded += "<li>Page - " + d.pageName + " (already exists)</li>" : (fileNames += "<li>Page - " + d.pageName + "</li>", stateID = d.stateID, $("#vhl").append('<li class="viy" viy="' + d.stateID + '" vjh="' + d.pageName + '" page-title="' + d.pageTitle + '"></li>'), X(d.pageName, d.stateID), $.localStorage(Hb + ".state.veu." + stateID, d.masterHtml), $.localStorage(Hb + ".state.vem." + stateID, d.layoutMap), $.localStorage(Hb + ".vhf." + stateID, d.colourScheme), $.localStorage(Hb + "vmp." + stateID, d.fontOption), $.localStorage(Hb + ".vkp." + stateID, d.bodyClasses)) : excluded += "<li>Page - " + d.pageName + " (not designed for this template)</li>", e = {
                                id: d.stateID,
                                name: d.pageName
                            })
                        }), $.localStorage(Hb + ".vhk", $("#vhl").html()), fileNames += "</ul>", excluded += "</ul>", "<ul></ul>" != fileNames && (fileNames = f + fileNames), "<ul></ul>" != excluded && (excluded = excludedHead + excluded), b ? ($(".vhe").remove(), Y(e.id, e.name)) : A("Import", fileNames + "<br />" + excluded), setTimeout(function() {
                            $(".vfw").find(".ves").length ? $(".vfw").removeClass("empty-vfw") : $(".vfw").addClass("empty-vfw")
                        }, 100)
                    } catch(c) {
                        A("Page Import Error", "Error reading " + a.name + " : <br /><br />" + c.message)
                    }
                }
            }(c), g.readAsArrayBuffer(c)
        }
    }

    function ab() {
        $("#vhl").html($.localStorage(Hb + ".vhk")), $("#vhl li").each(function() {
            X($(this).attr("vjh"), $(this).attr("viy"))
        })
    }

    function bb() {
        $("#simplemodal-container").draggable({
            handle: ".vfa"
        })
    }

    function cb() {
        $(".viu section, .viu header, .viu footer").each(function() {
            var a = "." + $(this).attr("vic");
            $(this).find("div.row, .vjd").sortable({
                items: "> div",
                cancel: "[contenteditable], nav, input, textarea",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !1,
                cursor: "move",
                connectWith: a + " div.row, " + a + " .vjd",
                helper: "clone",
                appendTo: ".viu",
                placeholder: "vje",
                tolerance: "pointer",
                revert: "300",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), V()
                },
                start: function(a, b) {
                    b.helper.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), b.helper.removeClass("vdw").css("border", "none !important")
                }
            }), $(this).find("ul.tabs").sortable({
                items: "> li",
                cancel: "[contenteditable], nav, input, textarea",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !1,
                cursor: "move",
                helper: "clone",
                appendTo: ".viu",
                tolerance: "pointer",
                revert: "300",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), V()
                },
                start: function(a, b) {
                    b.placeholder.css("float", "none"), b.helper.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), b.helper.removeClass("vdw").css("border", "none !important")
                }
            })
        }), $(".viu nav").each(function() {
            "." + $(this).attr("vic");
            $(this).find(".vjd").sortable({
                items: "> li",
                cancel: "[contenteditable], .subnav li",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !1,
                cursor: "move",
                helper: "clone",
                appendTo: ".viu",
                placeholder: "vje",
                tolerance: "pointer",
                revert: "300",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), V()
                },
                start: function(a, b) {
                    b.helper.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), b.helper.removeClass("vdw").css("border", "none !important")
                }
            })
        })
    }

    function db() {
        $(".vem").sortable({
            items: "> .vaa",
            revert: !1,
            cursor: "move",
            opacity: .7,
            delay: 150,
            cancel: "[contenteditable]",
            update: function() {
                f()
            }
        })
    }

    function eb() {
        var a;
        try {
            a = JSON.parse($(".vaz").html()), $(".vho").eq(2).removeClass("vih"), gb("Original", a.original.colours, "theme"), $(".vay").attr("viq", a.original.originalFileName + ".css").attr("vhx", a.original.originalFileName + ".css"), $(a.schemes).each(function() {
                gb(this.name, this.colours, "theme-" + this.name), kb("theme-" + this.name.toLowerCase() + ".css")
            }), $(".viw").remove(), $(".vnb").removeClass("empty-vmd")
        } catch(b) {
            return
        }
    }

    function fb() {
        var a;
        try {
            a = JSON.parse($(".vmq").html()), $(".vmy").removeClass("vih"), $(".vmz").text(a.title), hb(a.originalSet), $(a.optionalSets).each(function() {
                hb(this)
            }), $(".vnb").removeClass("empty-vmd")
        } catch(b) {
            return
        }
    }

    function gb(a, b, c) {
        var d, e = "",
            f = a + ": ",
            g = 100 / b.length;
        $(b).each(function(a, b) {
            e += '<div class="vax" style="width: ' + g + "%; background-color: " + b + '"></div>', f += " " + b
        }), d = '<li title="' + f + '" class="vhu" viz="' + c.toLowerCase() + '.css">', $(".vay").append(d + e + "</li>")
    }

    function hb(a) {
        var b = $("<li>").addClass("vmv").attr("vmw", a.setName);
        a.css.length > 0 ? b.attr("vmo", a.css) : b.attr("vmo", "vir"), $(a.fonts).each(function() {
            b.append($("<img>").attr("src", "builder/img/fonts/" + T(this.fontName) + ".png"))
        }), $(".vms").append(b)
    }

    function ib(a, b) {
        try {
            colourSchemes = JSON.parse($(".vaz").html());
            var c = a,
                d = $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href"),
                e = $(".vay").attr("vhx");
            c = d.replace(e, c), $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href", c), $(".vay").attr("vhx", a), 1 == b && V()
        } catch(f) {}
    }

    function jb(a, b) {
        try {
            var c = (JSON.parse($(".vmq").html()), $("[vmw=" + a + "]").attr("vmo"));
            $("head link.vmx").remove(), $("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../builder/theme/css/font-' + T(a) + '.css" rel="stylesheet" type="text/css">'), $(".vms").attr("vmr", a), 1 == b && V()
        } catch(d) {}
    }

    function kb(a) {
        $("head").append('<link class="viw" href="builder/theme/css/' + a + '" rel="alternate stylesheet" type="text/css" media="all">')
    }

    function lb() {
        $(".vjy").unbind("click").click(function() {
            return !1
        })
    }

    function mb() {
        try {
            {
                var a = JSON.parse($("#vkk").html());
                $("<div>").addClass("vkq").append('<div class="vlq"><span>Variant Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb")
            }
            $.isArray(a.options) ? $(a.options).each(function() {
                ub(this, ".vkx", "body, #vkk", !0)
            }) : ub(a.options, ".vkx", "body, #vkk", !0)
        } catch(b) {
            return
        }
    }

    function nb(a) {
        arguments.length || (a = $("#veu nav").attr("nav-id")), $(".vmm").closest(".vkq").remove();
        try {
            {
                var b = JSON.parse($("#" + a + " script.options").html());
                $("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb")
            }
            $.isArray(b.options) ? $(b.options).each(function() {
                ub(this, ".vmm", Lb.selector + " nav, " + Kb.selector + " nav", !0)
            }) : ub(b.options, ".vmm", Lb.selector + " nav, " + Kb.selector + " nav", !0)
        } catch(c) {
            return
        }
    }

    function ob() {
        try {
            return JSON.parse($("#variant-element-classes-mrv").html())
        } catch(a) {
            return JSON.parse('{"options":false}')
        }
    }

    function pb(a, b) {
        var c, d = $("." + a),
            e = "",
            b = b;
        Cb.options.forEach(function(a) {
            c = a.disposableSelector || a.selector, "undefined" != typeof a.closest && (d = $("." + $(d).closest(a.closest).attr("vic"))), "undefined" != typeof a.menu && (e = "." + a.menu), $(d).is(c) && (ub(a, ".vnc" + e, d.selector, !0), "undefined" != typeof b && 1 == b && $(".vnc" + e).removeClass("vih"))
        })
    }

    function qb() {
        try {
            return JSON.parse($("#vnd").html())
        } catch(a) {
            return JSON.parse('{"options":false}')
        }
    }

    function rb(a) {
        var b = $("." + a);
        $("ul.vnc li").remove(), $(Db.options).each(function() {
            b.is(this.selector) && B(b, this)
        })
    }

    function sb(a) {
        var b, c, d = 0,
            e = $(".viu ." + a),
            f = e.attr("vic");
        position = e.position(), offset = e.offset(), navHeight = $(".viu .nav-container").outerHeight(!0), page = $(".viu"), sectionWidth = e.width(), windowWidth = $(window).width(), $.find('.viu .vne[controlsFor="' + f + '"]').length || ($(".vne").remove(), b = $('<div class="vne" />'), b.attr("controlsFor", f), b.append('<ul><li class="vni"><span class="vnm oi" data-glyph="cog"></span><ul class="vnc utility"></ul></li></ul>').removeClass("vih"), b.css("top", Math.round(position.top + 10 + navHeight)).css("left", Math.round(sectionWidth + (windowWidth - sectionWidth) / 2) - 287), b.addClass("vnj").appendTo(page), Cb.options.forEach(function(a) {
            e.is(a.selector) && d++
        }), Db.options.forEach(function(a) {
            1 === e.find(a.selector).length && "true" == a.sectionControl && (c = tb(a, !1, e.find(a.selector).first().attr("vic")), b.find("ul").first().append(c), d++)
        }), d > 0 && pb(a))
    }

    function tb(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = $("<li />"), d.addClass("vno"), d.append('<span class="oi" data-glyph="' + e + '"></span><span class="vnp">' + a.buttonText + "</span>"), d.data("vnq", a), d.attr("vnr", c), b === !1 ? d : void $(b).append(d)
    }

    function ub(a, b, c, d) {
        var e, f = "undefined" != typeof d ? d : !1,
            c = "undefined" != typeof c ? c : !1,
            g = "on" == a.initial ? "on" : "off",
            h = $("<li>"),
            i = $("<div>"),
            j = "";
        e = "undefined" != typeof a.refresh && "true" == a.refresh ? "refresh" : "", h.addClass("vmk"), a.title && h.append("<span>" + a.title + "</span>"), "choice" == a.type && ("on" == g && 1 == f && $(c).addClass(a["class"]), i.addClass("vky").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<div class="vks choice-button-on ' + e + " " + ("on" == g && f === !0 ? "vkr" : "") + ($(c).hasClass(a["class"]) && f !== !0 ? "vkr" : "") + '">' + a.onText + "</div>"), i.append('<div class="vks choice-button-off ' + e + " " + ("off" == g && f === !0 ? "vkr" : "") + ($(c).hasClass(a["class"]) || f === !0 ? "" : "vkr") + '">' + a.offText + "</div>"), h.append(i)), "toggle" == a.type && ("on" == g && 1 == f && $(classtarget).addClass(a["class"]), j = "on" == g && f === !0 ? " vku" : "", j = "auto" === a.initial && $(c).hasClass(a["class"]) ? " vku" : j, i.addClass("vkz").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<span class="oi" data-glyph="' + a.icon + '"></span><span>' + a.text + "</span>"), i.append('<div class="vkt' + j + " " + e + '"><div class="vmi"></div></div>'), h.append(i)), "multi" == a.type && (i.addClass("vmj").attr("classtarget", c), $.each(a.classes, function(b, c) {
            i.append('<div class="vkv ' + e + " " + (a.initial == b + 1 && f === !0 ? "vkw" : "") + '" optionalclass="' + ("" !== c["class"] ? c["class"] : " ") + '">' + c.text + "</div>")
        }), h.append(i)), "undefined" != typeof a.submenu && ($(b).find('li.vnk[submenu-name="' + a.submenu + '"]').length || $(b).append('<li class="vnk" submenu-name="' + a.submenu + '"><span class="vnl">' + a.submenu + "</span><ul></ul></li>"), b = $(b).find('li.vnk[submenu-name="' + a.submenu + '"] ul')), $(b).append(h)
    }

    function vb(a) {
        var a = "undefined" != typeof a ? a : "";
        $("#vkk").removeAttr("class").addClass(a), $("body").addClass(a), $(".vkx .vky").each(function() {
            $(this).find(".vks").removeClass("vkr"), -1 !== a.indexOf($(this).attr("optionalclass")) ? $(this).find(".choice-button-on").addClass("vkr") : ($(this).find(".choice-button-off").addClass("vkr"), $("body").removeClass($(this).attr("optionalclass")))
        }), $(".vkx .vkz").each(function() {
            $(this).find(".vkt").removeClass("vku"), -1 !== a.indexOf($(this).attr("optionalclass")) ? $(this).find(".vkt").addClass("vku") : $("body").removeClass($(this).attr("optionalclass"))
        }), $(".vkx .vkv").removeClass("vkw"), $('.vkx .vkv[optionalclass=" "]').addClass("vkw"), $(".vkx .vkv").each(function() {
            -1 !== a.indexOf($(this).attr("optionalclass")) && " " !== $(this).attr("optionalclass") ? ($(this).addClass("vkw"), $('.vkx .vkv[optionalclass=" "]').removeClass("vkw")) : $("body").removeClass($(this).attr("optionalclass"))
        })
    }

    function wb(a, b) {
        var c = a.replace(/(\r\n|\n|\r)/gm, ","),
            d = c.split(","),
            e = !1,
            f = a;
        return b = " " == b ? "" : b, -1 === a.indexOf("[optional-body-classes]") ? a : (d.forEach(function(c) {
            -1 !== c.indexOf("[optional-body-classes]") && ("" != b ? -1 !== c.indexOf('class="') ? (f = String(a).replace("[optional-body-classes]", b), e = !0) : (f = String(a).replace("[optional-body-classes]", 'class="' + b + '"'), e = !0) : (f = String(a).replace(" [optional-body-classes]", ""), f = String(f).replace("[optional-body-classes]", ""), e = !0))
        }), e ? f : void 0)
    }

    function xb(a, b) {
        var c, d = a,
            e = "";
        return "undefined" != typeof b && b.length > 0 && "vir" !== $('.vmv[vmw="' + b + '"]').attr("vmo") && (e = $('.vmv[vmw="' + b + '"]').attr("vmo"), c = '&#13;&#10;        &lt;link href="' + e + '" rel="stylesheet" type="text/css"&gt;&#13;&#10;', c += '        &lt;link href="css/font-' + T(b) + '.css" rel="stylesheet" type="text/css"&gt;&#13;&#10;    &lt;/head&gt;\n', d = d.replace(/\t\&lt;\/head\&gt;/g, c), d = d.replace(/[\s]*\&lt;\/head\&gt;/g, c)), d
    }

    function yb() {
        $.localStorage(Hb + ".vhh") ? ($(".vet span").html("Load " + $.localStorage(Hb + ".vhg")), $(".vhe").removeClass("vih")) : $.localStorage(Hb + ".state.veu") ? ($(".vet span").removeClass("vih"), $(".vhe").removeClass("vih")) : $(".vhd").removeClass("vih"), Pb && $(".vah, .vdi, .vgy").remove()
    }

    function zb() {
        var a = Ab("campaign");
        if(null !== a) {
            var b = new XMLHttpRequest;
            b.open("GET", "../campaigns/" + a + ".variant", !0), b.responseType = "blob", b.onload = function() {
                var a = [b.response];
                _(a, !0)
            }, b.onerror = function() {
                A("Could not load specified campaign page.")
            }, b.send()
        }
    }

    function Ab(a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
    }

    function Bb(a, b) {
        if(!a || !a.tagName) return "";
        var c, d, e = document.createElement("div");
        return e.appendChild(a.cloneNode(!1)), c = e.innerHTML, b && (d = c.indexOf(">") + 1, c = c.substring(0, d) + a.innerHTML + c.substring(d)), e = null, c
    }
    var Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob = "",
        Pb = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
    a(), $(document).bind("mouseup", function(a) {
        $(a.target).closest(".vnc, .vnj").length || 1 === a.which && ($(".vhw").hide(), $(".vni").removeClass("vhr"))
    }), $(document).ready(function() {
        function a(a, b, c, d) {
            var e, f, g, h, j, k = a,
                l = "";
            return Cb.options && Cb.options.forEach(function(a) {
                "undefined" != typeof a.disposableSelector && (l = l + " " + a.disposableSelector.replace(".", ""))
            }), k.find("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, a:empty, p:empty, span:empty, li:empty, em:empty, strong:empty, blockquote:empty, figcaption:empty").not(".in-page-link").addClass("vib"), k.find(".vib, .vjb").each(function() {
                G($(this))
            }), k.find("div.row:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption))").remove(), k.find(".vjd:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption))").remove(), $(k).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, input, textarea, blockquote, figcaption").removeClass("vjm vjb").removeClass("vhz").removeClass("vir").alterClass("vjs-*", "").alterClass("variant-*", "").removeClass("vjd").removeClass("viv").removeClass("vlk").removeClass("ven").removeClass("vjy").removeAttr("vic").removeClass("vjx").removeAttr("vij").removeAttr("vik").removeAttr("contenteditable").removeAttr("data-vip").removeAttr("vli").removeAttr("vht").removeAttr("vjw").removeAttr("vii").removeAttr("style").removeAttr("nav-id").removeClass("ui-sortable").removeClass(l).removeClass("vns"), $(k).find("nav").alterClass("via-*", "").removeAttr("via").removeAttr("vio").removeAttr("style"), $(k).find("footer").alterClass("vhy-*", "").removeAttr("vhy").removeAttr("vie"), $(k).find('*[class=""]').removeAttr("class"), e = $("#vji").html(), e = String(e).replace("[title]", b), $("[vhx]").length && (e = String(e).replace($("[viq]").attr("viq"), $("[vhx]").attr("vhx"))), j = wb(e, d), e = j ? j : e, e = xb(e, c), f = $(k).html().replace(/\n/g, "\n		").replace(/\n\n/g, "\n").replace(/\n\t\t><section/g, ">\n			<section").replace(/\n\t\t<header/g, "\n			<header").replace(/\t\t\t<\/header></g, "			</header>\n			<").replace(/\t\t\t<\/section></g, "			</section>\n			<").replace(/<\/a><section/g, "</a>\n			\n			<section").replace(/<\/a><header/g, "</a>\n			\n			<header").replace(/<\/section>\n\t\t\t<a/g, "</section>\n			\n			<a").replace(/<\/header>\n\t\t\t<a/g, "</header>\n			\n			<a").replace(/\t\t\t<\/section>\n\t\t\t<\/div>/g, "			</section>\n		</div>").replace(/\t\t\t<\/header>\n\t\t\t<\/div>/g, "			</header>\n		</div>").replace(/\t\t\t<\/header>\n\t\t\t<section/g, "			</header>\n			\n			<section").replace(/\t\t\t<\/section>\n\t\t\t<header/g, "			</section>\n			\n			<header").replace(/\t\t\t<\/section>\n\t\t\t<section/g, "			</section>\n			\n			<section").replace(/\t\t\t<\/header>\n\t\t\t<header/g, "			</header>\n			\n			<header"), f = i(f), g = $("#vif").html(), h = String(e + f + g), h = String(h).replace(/\.\.\/img\//g, "img/").replace(/\.\.\/video\//g, "video/").replace(/delay-src/g, "src").replace(/no-src/g, "src")
        }
        $(window).resize(b), b(), P(), L(), O(), ab(), n(), t(), eb(), fb(), mb(), Cb = ob(), Db = qb(), -1 != navigator.userAgent.indexOf("NT 6.") && $("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>"), Eb = new Date, $(".vkg").text(Eb.getFullYear()), $(".vla").flexslider({
            controlNav: !1,
            directionNav: !1,
            slideshowSpeed: 4e3,
            start: function() {
                $(".vla").addClass("vhr")
            }
        }), $(".vgw").click(function() {
            $(".vkm").toggleClass("vme"), $(".vgw").toggleClass("vmg")
        }), $(".viu").click(function() {
            $(".vjq").removeClass("vgq")
        }), $(".vjq .vex").click(function() {
            $(this).closest(".vjq").removeClass("vgq")
        }), $(".vjc").mouseenter(function() {
            $(".vkm").removeClass("vjz")
        }), $(".vlf li").click(function() {
            $(".vlf li").removeClass("vhr"), $(this).addClass("vhr");
            var a = $(this).index() + 1;
            $(".vlp").removeClass("vhr"), $(".vlp:nth-child(" + a + ")").addClass("vhr")
        }), $(".vet").click(function() {
            $(".vet").addClass("vih"), Y()
        }), $(".vhd").click(function() {
            $.localStorage(Hb + ".vhh", ""), $.localStorage(Hb + ".vhg", ""), $(".vhe").addClass("vih"), $(".vac").trigger("click"), $(".vkm").addClass("vjz")
        }), $(".vac").click(function() {
            u(), $(".vgm").click(), $(".vlv").toggleClass("vmf"), $(".vlv").find(".vho").removeClass("vhr"), b()
        }), $(".vma").click(function() {
            $(".vgi").toggleClass("vhr"), $(this).toggleClass("vhr")
        }), $(".vgh").click(function() {
            $(".vgi").removeClass("vhr"), $(".vma").removeClass("vhr")
        }), $(".vlm").click(function() {
            j()
        }), $(".vev").each(function() {
            var a = ($(this).data("vjt"), $(this).attr("id"));
            $(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + $(this).attr("data-vjt") + "</li>")
        }), $("#vdk .vim").each(function() {
            var a = $(this).attr("vbr"),
                b = $(this).attr("id");
            $(".vdm").append('<li class="vdl" vid="' + b + '" vit="vir">' + a + "</li>")
        }), $(".vei").on("blur keyup paste input", function() {
            document.title = $(this).text(), $.localStorage(Hb + ".vhh") ? ($('#vhl [viy="' + $.localStorage(Hb + ".vhh") + '"]').attr("page-title", $(this).text()), $.localStorage(Hb + ".vhk", $("#vhl").html())) : $.localStorage(Hb + ".vhj", $(this).text()), V()
        }), $(".vei.vlx").on("click focus blur keyup paste input", function() {
            $.localStorage(Hb + ".vhh", ""), $.localStorage(Hb + ".vhg", ""), $(".vhe").addClass("vih"), $(this).removeClass("vlx")
        }), $(".vgk").click(C), $(".vdh").click(C), $(".vga").on("click", function() {
            l(), $.modal.close()
        }), $(".vgb").keyup(function(a) {
            13 === a.keyCode && "" != $(".vgb").val() && (l(), $.modal.close())
        }), $(".vfy").on("click", function() {
            "" != $(".vfz").val() && (r(), $.modal.close())
        }), $(".vfz").keyup(function(a) {
            13 === a.keyCode && "" != $(".vfz").val() && (r(), $.modal.close())
        }), $(".vgf").keyup(function(a) {
            13 === a.keyCode && "" != $(".vgf").val() && (W(), $.modal.close())
        }), $(".vgd").on("click", function() {
            "" != $(".vgf").val() && (W(), $.modal.close())
        }), $(".vfw").find(".ves").length && $(".vfw").removeClass("empty-vfw"), $(".vcx").on("click", function() {
            H(), $.modal.close()
        }), $(".vcu").keyup(function(a) {
            13 === a.keyCode && "" != $(".vcu").val() && (H(), $.modal.close())
        }), $(".veh").change(function() {
            $(".vcu").val($(this).val())
        }), $(".vcn").on("click", function() {
            I(), $.modal.close()
        }), $(".vbj").on("click", function() {
            D(), $.modal.close()
        }), $(".vbg").keyup(function(a) {
            13 === a.keyCode && (D(), $.modal.close())
        }), $(".vdf").on("click", function() {
            J(), $.modal.close()
        }), $(".vco, .vcf").keyup(function(a) {
            13 === a.keyCode && (I(), $.modal.close())
        }), $(".vco").get(0).addEventListener("drop", function(a) {
            a.stopPropagation(), a.preventDefault();
            var b = a.dataTransfer.getData("URL");
            $(".vco").val(b), $(".vcp").attr("src", b)
        }, !1), $(".vcp").get(0).addEventListener("drop", function(a) {
            a.stopPropagation(), a.preventDefault();
            var b = a.dataTransfer.getData("URL");
            $(".vco").val(b), $(".vcp").attr("src", b)
        }, !1), $(".vco").get(0).addEventListener("dragover", function(a) {
            a.preventDefault(), a.stopPropagation()
        }, !1), $(".vda, .vdg, .vdb").keyup(function(a) {
            13 === a.keyCode && (J(), $.modal.close())
        }), $(".vho span").click(function() {
            $(this).closest(".vho").toggleClass("vhr"), setTimeout(function() {
                b()
            }, 301)
        }), $(".vgc").click(function() {
            z(), $(".vfw").removeClass("empty-vfw")
        }), $(".ved").click(function() {
            $(".vef").focus().trigger("click")
        }), $(".vef").change(function(a) {
            _(a)
        }), $(".vdi").click(function() {
            Z("all")
        }), $(".vfo").click(function() {
            $(".vmm").closest(".vkq").remove(), $("#veu nav").remove(), $(this).closest(".vho").removeClass("vhr");
            var a = $(this).text();
            $(this).closest(".vho").find(".vly").text(a), V(), h()
        }), $(".vfl").click(function() {
            $("#veu footer").remove(), $(this).closest(".vho").removeClass("vhr");
            var a = $(this).text();
            $(this).closest(".vho").find(".vly").text(a), V(), h()
        }), $(document).on("click", ".vgr", function() {
            $(".vib").toggleClass("vib vjb"), $(this).toggleClass("vhr vdv vgr")
        }), $(document).on("click", ".vdv", function() {
            $(".vjb").toggleClass("vib vjb"), $(this).toggleClass("vgr vdv vhr")
        }), $(".vhp").click(function() {
            $(".vdz,.vcl").toggleClass("vhr")
        }), $(".vcp").click(function() {
            $(".vhp").trigger("click")
        }), $(".vch").change(function(a) {
            K(a)
        }), $(".vee").click(function() {
            $(".vch").focus().trigger("click")
        });
        try {
            $.isFunction(a)
        } catch(f) {
            $(".vml").removeClass("vih"), $(".vdq, .vah, .vgy").click(function() {
                A("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="#" target="_blank">purchase the full version</a>.')
            })
        }
        $(".vek").remove(), $(".vdq").click(function() {
            var c = $("#veu").clone(),
                d = document.title,
                e = $(".vms").attr("vmr"),
                f = "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : "";
            output = a(c, d, e, f), $(".vfu").html(""), $(".vfu").append(output), $(".vdr").modal({
                autoResize: !0,
                overlayClose: !0,
                opacity: 0,
                overlayCss: {
                    "background-color": "#3e3e3e"
                },
                closeClass: "vex",
                onShow: function() {
                    switch(window.location.protocol) {
                        case "http:":
                        case "https:":
                        case "file:":
                            $(".vgn").click(function() {
                                $(".vfu").select()
                            }), $(".vgn").show(), $(".code-copy-simple").show(), $(".vfu").select()
                    }
                    setTimeout(function() {
                        $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                    }, 100), b()
                },
                onClose: function() {
                    setTimeout(function() {
                        $.modal.close(), b()
                    }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
                }
            }), "" != $.localStorage(Hb + ".vbu") && $.localStorage(Hb + ".vbu", $("#image-edit-chooser").attr("vbv"))
        }), $(".vgy").click(function() {
            var a, b = "",
                c = "";
            b = $.localStorage(Hb + ".vhg"), b = "undefined" != typeof $.localStorage(Hb + ".vhg") ? $.localStorage(Hb + ".vhg") : "page", c = $(".vfu").val(), a = new Blob([c], {
                type: "text/plain;charset=utf-8"
            }), saveAs(a, T(b) + ".html")
        }), $(".vah").click(function() {
            var b, c, d = new JSZip,
                e = [],
                f = new Date;
            return $("#vhl .viy").length ? ($("#vhl .viy").each(function() {
                e.push($(this).attr("viy"))
            }), b = "labster-variant-" + T(f.toDateString()), e.forEach(function(b) {
                var c, e, g, h, i, j, k;
                f = new Date, j = $('#vhl [viy="' + b + '"]').attr("vjh"), k = $('#vhl [viy="' + b + '"]').attr("page-title"), g = "undefined" != typeof $.localStorage(Hb + "vmp." + b) ? $.localStorage(Hb + "vmp." + b) : "", h = "undefined" != typeof $.localStorage(Hb + ".vkp." + b) ? $.localStorage(Hb + ".vkp." + b) : "", c = $.localStorage(Hb + ".state.veu." + b), e = $('<div id="vjk" />').html(c), i = $('<textarea id="variant-temp-textarea-mrv" />').append(a(e, k, g, h)), j = 1 == $('#vhl [vjh="' + j + '"]').length ? T(j) + ".html" : T(j) + "-" + f.getTime() + ".html", d.file(j, i.val())
            }), c = d.generate({
                type: "blob",
                compression: "deflate"
            }), void saveAs(c, "labster-html-" + T(f.toDateString()) + ".zip")) : void A("Export HTML", "There was nothing to export.<br /><br />Save at least one page before exporting.")
        }), $(".vap").click(function() {
            $('.vfj [vit="vhz"]').remove(), $("#vbn").html(""), $.localStorage(Hb + ".vbo", ""), $(".vap").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                $(".vap").html("Clear Navs").removeClass("vak").addClass("val")
            }, 1500)
        }), $(".vao").click(function() {
            $('.vdm [vit="vhz"]').remove(), $.localStorage(Hb + ".vbm", ""), $(".vao").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                $(".vao").html("Clear Footers").removeClass("vak").addClass("val")
            }, 1500)
        }), $(".vaq").click(function() {
            var a;
            $("#vhl li").each(function() {
                var a, b = $(this).attr("viy");
                a = $.localStorage.io(Hb + ".state.veu." + b), a.remove(), a = $.localStorage.io(Hb + ".state.vem." + b), a.remove(), $(this).remove()
            }), $(".vfw div").remove(), $(".vfw").addClass("empty-vfw"), a = $.localStorage.io(Hb + ".state.veu"), a.remove(), a = $.localStorage.io(Hb + ".state.vem"), a.remove(), a = $.localStorage.io(Hb + ".vhj"), a.remove(), a = $.localStorage.io(Hb + ".vhh"), a.remove(), a = $.localStorage.io(Hb + ".vhg"), a.remove(), a = $.localStorage.io(Hb + ".vhk"), a.remove(), $(".vaq").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                $(".vaq").html("Clear Pages").removeClass("vak").addClass("val")
            }, 1500)
        }), $(".van").click(function() {
            $(".vfw div").remove(), $("#vhl li").remove(), window.localStorage.clear(), $(".van").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                $(".van").html("Rebooting the builder").removeClass("vak").addClass("val"), window.location.reload()
            }, 1500)
        }), $("img").on("dragstart", function(a) {
            a.preventDefault()
        }), $(document).on("submit", ".viu form", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), $(document).on("click", ".vgh", function() {
            if($(".vgh").removeClass("vhr"), $(this).addClass("vhr"), "*" == $(this).attr("vbp")) return $(".vgl").removeClass("vih"), void $(".vma span").text("All");
            $(".vgl").addClass("vih"), $('.vgl[vbp*="' + $(this).attr("vbp") + '"]').removeClass("vih");
            var a = $(this).text();
            $(".vma span").text(a), b()
        }), $(document).on("click", ".vby", function() {
            var a = $(this).parent().attr("nav-id");
            $(this).parent().remove(), $("." + a).remove(), o()
        }), $(document).on("click", ".vbx", function() {
            var a = $(this).parent().attr("vid");
            $(this).parent().remove(), $("." + a).remove(), p()
        }), $(document).on("click", ".ves", function() {
            Y($(this).attr("state-id"), $(this).attr("vjh"))
        }), $(document).on("click", ".vdj", function() {
            return Z($(this).parent().attr("state-id")), !1
        }), $(document).on("click", ".vfi", function() {
            d($(this).attr("nav-id"), $(this).attr("vit")), $(this).closest(".vho").removeClass("vhr");
            var a = $(this).text();
            $(this).closest(".vho").find(".vly").text(a)
        }), $(document).on("click", ".vdl", function() {
            e($(this).attr("vid"), $(this).attr("vit")), $(this).closest(".vho").removeClass("vhr"), $(".vhe").addClass("vih");
            var a = $(this).text();
            $(this).closest(".vho").find(".vly").text(a)
        }), $(document).on("click", ".vca", function() {
            var a = $(this).attr("vbq");
            $("#veu ." + a).remove(), $("[vik=" + a + "]").remove(), $(this).parent().remove(), h(), $(".vem").find(".vaa").length ? $(".vem").removeClass("empty-vem") : $(".vem").addClass("empty-vem"), b()
        }), $(document).on("click", ".vfg", function() {
            var a = $("." + $(".viu nav").attr("vic"));
            $(".vev").each(function() {
                var b = $(this).data("vff");
                b.forEach(function(b) {
                    a.removeClass(b.className)
                })
            }), a.addClass($(this).attr("nav-class")), V(), h()
        }), $(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function(a) {
            if("paste" == a.type) {
                a.preventDefault();
                var b = (a.originalEvent || a).clipboardData.getData("text/plain").replace(/\n/g, "<br>");
                document.execCommand("insertHtml", !1, b)
            }
            $(this).children().length ? "" === $(this).html() && $(this).html("&nbsp;") : "" === $(this).text() && $(this).text(" "), $("#veu ." + $(this).attr("vic")).html($(this).html()), V()
        }), $(document).on("keydown", ".viu [contenteditable]", function(a) {
            return 13 === a.keyCode ? handleReturnKey(a) ? !0 : !1 : void 0
        }), $(document).on("blur keyup paste input", ".vir", function() {
            $(this).removeClass("vir").addClass("vhz")
        }), $(document).on("keyup paste input", "nav.vir", function() {
            k($(this))
        }), $(document).on("keyup paste input", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : (S($(this)), !0)
        }), $(document).on("keydown", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : void 0
        }), $(document).on("keyup paste input", "nav.vhz", function() {
            o()
        }), $(document).on("keyup paste input", ".vgb", function() {
            "" != $(this).val() ? $(".vga").removeClass("vih") : $(".vga").addClass("vih")
        }), $(document).on("keyup paste input", "footer.vir", function() {
            q($(this))
        }), $(document).on("keyup paste input", "footer.vhz", function() {
            p()
        }), $(document).on("keyup paste input", ".vfz", function() {
            "" != $(this).val() ? $(".vfy").show() : $(".vfy").hide()
        }), $(document).on("keyup paste input", ".vgf", function() {
            "" != $(this).val() ? $(".vgd").removeClass("vih") : $(".vgd").addClass("vih")
        }), $(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption", function() {
            $(this).addClass("vdw")
        }), $(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption", function() {
            $(this).removeClass("vdw")
        }), $(".viu").on("mouseenter", "section, header, footer", function() {
            sb($(this).attr("vic"))
        }), $(document).on("mouseenter", '[vic] [class*="medium-"]', function() {
            Ob = $(this).attr("vic")
        }), $(document).on("mouseenter", '[vic] [class*="col-md-"]', function() {
            Ob = $(this).attr("vic")
        }), $(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function() {
            Ob = $(this).attr("vic")
        }), $(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function() {
            Ob = $(this).attr("vic")
        }), $(document).on("keyup", document, function(a) {
            Ob.length && (219 === a.keyCode && R(Ob), 221 === a.keyCode && Q(Ob))
        }), $(document).on("click", "a.vjx", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), $(document).on("click", ".vni", function() {
            $(this).toggleClass("vhr")
        }), $(document).on("contextmenu", ".vni", function(a) {
            a.stopPropagation(), $(this).trigger("click")
        }), $(document).on("contextmenu", "[vic]", function(a) {
            if(a.shiftKey) return !0;
            $(".vaw").removeClass("vih"), $(".vcg").text("Edit Image"), $(".vct").text("Edit Link"), $(".vfq").addClass("vih"); {
                var c, d, e, f, g, i, j, k, l, m = $("#veu ." + $(this).attr("vic"));
                $(m).closest("section")
            }
            return htmlTags = {
                SECTION: "Section",
                LI: "List Item",
                H1: "Heading",
                H2: "Heading",
                H3: "Heading",
                H4: "Heading",
                H5: "Heading",
                H6: "Heading",
                P: "Paragraph",
                SPAN: "Span",
                UL: "Unordered List",
                DIV: "Div",
                IMG: "Image",
                STRONG: "Strong Text",
                EM: "Emphasised Text",
                I: "Icon",
                A: "Link",
                INPUT: "Input",
                BLOCKQUOTE: "Quote",
                FIGCAPTION: "Caption"
            }, $(".vau").text(htmlTags[m.get(0).tagName]).removeClass("vih"), $(m).data("vip") ? B(m, !1) : $(m).closest("[data-vip]").length && B($(m).closest("[data-vip]"), !1), rb($(this).attr("vic")), m.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, blockquote, figcaption") && ($(".var").unbind("click").bind("click", function() {
                E(m.attr("vic"))
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            })), m.is("a") && ($(".vct").removeClass("vih"), $(".vct").unbind("click").bind("click", function() {
                v(m.attr("vic"))
            }), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic"))
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            })), m.is("div.background-image-holder > div.overlay, div.background-image-holder") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.closest(".background-image-holder").find(".background-image").attr("vic"))
            }), m.is("[vht]") || ($(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih"))), m.closest("a").length && ($(".vct").removeClass("vih"), m.closest("a").hasClass("ven") && ($(".vau").text("Lightbox > " + $(".vau").text()), $(".vct").text("Edit Lightbox Link"), $(".vcg").text("Edit Thumbnail Image")), g = m.closest("a").attr("vic"), $(".vct").unbind("click").bind("click", function() {
                v(g)
            })), m.closest("section, header").find(".video-wrapper").children("video").length && (m.is(".overlay") && ($(".vau").text("Video Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = m.closest("section, header").find(".video-wrapper").children("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
                y($(video).attr("vic"))
            }), m.closest("section, header").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"))
            })), m.closest(".divider-background").find(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.closest(".divider-background").find(".background-image").attr("vic"))
            }))), m.closest("section").find(".background-image").length && (c = $(m).closest("section").find(".background-image"), c.hasClass("background-image") && ($(".vcg").removeClass("vih"), c = $(c).attr("vic"), $(".vcg").unbind("click").bind("click", function() {
                w(c)
            }))), m.closest("header, footer").find(".background-image").length && (c = $(m).closest("header, footer").find(".background-image"), c.hasClass("background-image") && ($(".vcg").removeClass("vih"), c = $(c).attr("vic"), $(".vcg").unbind("click").bind("click", function() {
                w(c)
            }))), m.parents(".image-holder").find(".background-image").length && (c = $(m).closest(".image-holder").find(".background-image"), c.hasClass("background-image") && ($(".vcg").removeClass("vih"), imageAttr = $(c).attr("vic"), $(".vcg").unbind("click").bind("click", function() {
                w(imageAttr)
            }))), m.is("div.background-image-holder") && (m.is("[vht]") || ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.find(".background-image").attr("vic"))
            }), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            }))), m.closest(".slides li").find(".background-image").length && (c = m.closest(".slides li").find(".background-image"), c.length && $(".vcg").removeClass("vih").unbind("click").bind("click", function() {
                w(c.attr("vic"))
            }).text("Edit Slide Image")), m.closest(".slides li").length && ($(".vas").removeClass("vih"), $(".vcb").removeClass("vih"), $(".vas").unbind("click").bind("click", function() {
                E(m.closest(".slides li").attr("vic")), h()
            }), $(".vcb").unbind("click").bind("click", function() {
                F(m.closest(".slides li").attr("vic"), !0), h()
            })), m.is(".slides li") && ($(".vau").text("Slide"), $(".vas").removeClass("vih"), $(".vcb").removeClass("vih"), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic")), h()
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"), !0), h()
            })), m.is(".slides li .overlay") ? ($(".var").addClass("vih"), $(".vbw").addClass("vih"), $(".vau").text("Slide")) : m.is(".slides li div:not(.overlay)") && $(".vau").text("Slide > Div"), m.is(".slides li .background-image-holder > div") && ($(".vau").text("Slide"), c = m.parent().find(".background-image").get(0), $(c).hasClass("background-image") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            })), $(".var").unbind("click").bind("click", function() {
                E(m.parent().parent().attr("vic")), h()
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.parent().parent().attr("vic"), !0), h()
            })), m.is(".slides li") && ($(".vau").text("Slide"), c = m.find(".background-image").get(0), $(c).hasClass("background-image") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            })), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic")), h()
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"), !0), h()
            })), m.closest(".slides li").find(".video-wrapper").children("video").length && (m.is(".overlay") && ($(".vau").text("Video Slide Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = m.closest(".slides li").find(".video-wrapper").children("video"), $(".vcg").text("Edit Poster Image"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
                y($(video).attr("vic"))
            })), m.closest("video").length && ($(".vau").text("Video"), $(".var").addClass("vih"), $(".vbw").addClass("vih"), video = m.closest("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
                y($(video).attr("vic"))
            })), m.closest(".slides li").find(".video-wrapper").children("video").length && m.closest(".slides li").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"))
            })), m.is("p , div, span, figure, article, img") && (m.closest('[class*="medium-"]').length && (closestElement = m.closest('[class*="medium-"]'), closestElement.hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
                Q(closestElement.attr("vic"))
            })), closestElement.hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
                R(closestElement.attr("vic"))
            }))), m.parent().is('div [class*="medium-"]') && (m.parent().hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
                R(m.attr("vic"))
            })), m.parent().hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
                Q(m.attr("vic"))
            }))), m.closest('[class*="col-md-"]').length && (closestElement = m.closest('[class*="col-md-"]'), closestElement.hasClass("col-md-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
                Q(closestElement.attr("vic"))
            })), closestElement.hasClass("col-md-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
                R(closestElement.attr("vic"))
            }))), m.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (closestElement = m.closest('[class*="col-sm-"]:not([class*="col-md-"])'), closestElement.hasClass("col-sm-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
                Q(closestElement.attr("vic"))
            })), closestElement.hasClass("col-sm-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
                R(closestElement.attr("vic"))
            }))), m.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (closestElement = m.closest('[class*="col-xs-"]:not([class*="col-md-"])'), closestElement.hasClass("col-xs-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
                Q(closestElement.attr("vic"))
            })), closestElement.hasClass("col-xs-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
                R(closestElement.attr("vic"))
            })))), m.closest("header").find(".background-image").length && (c = m.closest("header").find(".background-image"), c.length && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(c.attr("vic"))
            }))), m.is(".divider-background") && ($(".vau").text("Image Divider"), c = m.find(".background-image").get(0), $(c).hasClass("background-image") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            })), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic"))
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            })), m.parent().is(".divider-background") && ($(".vau").text("Image Divider"), m.is(".overlay") && ($(".var").addClass("vih"), $(".vbw").addClass("vih")), c = m.parent().find(".background-image").get(0), $(c).hasClass("background-image") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            }))), m.is(".cover-wrapper, .hover-state") && (c = m.closest("figure").find("img").get(0), d = m.closest("a").first(), $(c).is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            })), m.closest("figure").length && (i = m.closest("figure").attr("vic"), i.length && ($(".var").unbind("click").bind("click", function() {
                E(i)
            }), $(".vbw").unbind("click").bind("click", function() {
                F(i)
            })))), (m.parents("nav").length || m.is("nav")) && (m.is("nav") ? (f = m.attr("nav-id"), $(".vau").text("Nav"), $(".vaw").addClass("vih")) : (f = m.closest("nav").attr("nav-id"), $(".vau").text("Nav > " + $(".vau").text())), $(".vfe").removeClass("vih"), $(".vfg[nav-id=" + f + "]").each(function() {
                $(".viu nav").hasClass($(this).attr("nav-class")) || $(this).removeClass("vih")
            }), $(".vhw .vaw").not(".vih").length || $(".vfe .vfm").removeClass("vih")), m.closest(".hover-background").length && (c = m.closest("section").find(".hover-background .background-image").get(0), $(c).is("img") && ($(".vcg").text("Edit Background Image").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w($(c).attr("vic"))
            })), $(m).closest(".hover-background").find(".foreground-image-holder .background-image").each(function(a) {
                var b = a + 1,
                    c = $(this);
                newButton = $(".vcg").clone(), newButton.removeClass("vcg").addClass("vkd edit-foreground-" + b), newButton.text("Edit Layer " + b + " Image"), $(this).attr("src"), newButton.unbind("click").bind("click", function() {
                    w(c.attr("vic"))
                }), newButton.insertBefore($(".vcg"))
            })), m.is("i") && ($(".vau").text("Icon"), $(".vcc").removeClass("vih"), $(".vcc").unbind("click").bind("click", function() {
                x(m.attr("vic"))
            }), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic"))
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            })), m.is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(m.attr("vic"))
            }), $(".var").unbind("click").bind("click", function() {
                E(m.attr("vic"))
            }), $(".vbw").unbind("click").bind("click", function() {
                F(m.attr("vic"))
            })), m.is("section") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), m.is("header") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), m.closest(".veo").length && (e = $(m).closest(".veo"), c = $(m).closest(".veo").find("img"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
                w(c.attr("vic"))
            }), $(".var").removeClass("vih").unbind("click").bind("click", function() {
                E(e.attr("vic"))
            }), $(".vbw").removeClass("vih").unbind("click").bind("click", function() {
                F(e.attr("vic"))
            })), m.hasClass("vns") && $(".var").unbind("click").addClass("vih"), pb($(this).attr("vic"), !0), j = $("body > .vhw"), j.find(".vaw:not(.vih)").length ? (k = $(window).width(), l = $(window).height(), a.pageX + j.outerWidth() > k ? j.css("left", k - j.outerWidth()) : j.css("left", a.pageX), a.pageY + j.outerHeight() > l ? j.css("top", l - j.outerHeight()) : j.css("top", a.pageY), b(), j.show()) : j.hide(), !1
        }), $(document).on("click", ".vkd", function() {
            $(".vkd").remove()
        }), $(document).on("click", ".vjb", function() {
            $(this).removeClass("vjb vib").addClass("vjm"), $("#veu ." + $(this).attr("vic")).removeClass("vjb vib").addClass("vjm"), $(this).attr("vjw") && (also = $(this).closest("nav, header, section, footer").find($(this).attr("vjw")).attr("vic"), $(".viu ." + also).removeClass("vjb vib").addClass("vjm"), $("#veu ." + also).removeClass("vjb vib").addClass("vjm")), o(), p(), V()
        }), $(document).on("click", ".vcj", function() {
            var a = $(this).get(0);
            $(".vco").val($(this).attr("src").replace("../img/", "img/")), $(".vcp").attr("src", $(this).attr("src")), $(".veb").text(a.naturalWidth + "x" + a.naturalHeight + " pixels"), $(".vdz,.vcl").toggleClass("vhr")
        }), $(document).on("click", ".vgl", function() {
            var a = $(this);
            a.hasClass("catch-double-click") ? $(".vad").toggleClass("vhr") : (a.addClass("catch-double-click"), setTimeout(function() {
                a.removeClass("catch-double-click")
            }, 300), c($(this).attr("vgv"))), setTimeout(function() {
                $(".vem").removeClass("empty-vem")
            }, 100), b()
        }), $(document).on("click", ".no-image", function() {
            N(this)
        }), $(document).on("click", ".vav", function() {
            $(".vhw").hide()
        }), $(document).on("click", ".vam i", function() {
            var a = $("body").attr("vjv").split(","),
                b = $("." + $("#vgo").val());
            b.hasClass("icon-large") && b.alterClass("icon-large", "keep-large-icon"), a.forEach(function(a) {
                b.alterClass(a + "*", "")
            }), b.addClass($(this).attr("icon-class")), b.hasClass("keep-large-icon") && b.removeClass("keep-large-icon").addClass("icon-large"), V()
        }), $(document).on("click", ".vbz", function() {
            var a, b = $(this).parent().attr("state-id");
            return b == $.localStorage(Hb + ".vhh") && ($(".vet").addClass("vih"), $.localStorage(Hb + ".vhh", ""), $.localStorage(Hb + ".vhg", "")), $("#vhl [viy=" + b + "]").remove(), $.localStorage(Hb + ".vhk", $("#vhl").html()), setTimeout(function() {
                $(".vfw").find(".ves").length ? $(".vfw").removeClass("empty-vfw") : $(".vfw").addClass("empty-vfw")
            }, 50), a = $.localStorage.io(Hb + ".state.veu." + b), a.remove(), a = $.localStorage.io(Hb + ".state.vem." + b), a.remove(), $(this).parent().remove(), !1
        }), $(document).on("click", ".vhu", function() {
            ib($(this).attr("viz"), !0)
        }), $(document).on("click", ".vmv", function() {
            jb($(this).attr("vmw"), !0)
        }), $(document).on("click", ".vks", function() {
            if(!$(this).hasClass("vkr")) {
                var a = $(this).parent().attr("optionalclass"),
                    b = $(this).parent().attr("classtarget");
                $(this).parent().find(".vks").toggleClass("vkr"), $(this).hasClass("choice-button-on") ? $(b).addClass(a) : $(b).removeClass(a)
            }
            $(b).each(function() {
                "" == $(this).attr("class") && $(this).removeAttr("class")
            }), $(this).hasClass("refresh") && h(), V()
        }), $(document).on("click", ".vkt", function(a) {
            var b = $(this).parent().attr("optionalClass"),
                c = $(this).parent().attr("classtarget");
            a.stopPropagation(), $(this).hasClass("vku") ? $(c).removeClass(b) : $(c).addClass(b), $(this).toggleClass("vku"), $(c).each(function() {
                "" == $(this).attr("class") && $(this).removeAttr("class")
            }), $(this).hasClass("refresh") && h(), V()
        }), $(document).on("click", ".vkv", function() {
            if(!$(this).hasClass("vkr")) {
                var a = $(this).attr("optionalclass"),
                    b = $(this).parent().attr("classtarget");
                removeClass = $(this).parent().find(".vkv.vkw").attr("optionalclass"), $(this).parent().find(".vkv").removeClass("vkw"), $(this).addClass("vkw"), $(b).removeClass(removeClass).addClass(a)
            }
            $(b).each(function() {
                "" == $(this).attr("class") && $(this).removeAttr("class")
            }), V(), $(this).hasClass("refresh") && h()
        }), $(document).on("click", ".vno", function() {
            B("." + $(this).attr("vnr"), $(this).data("vnq"), !0)
        })
    }), $(window).load(function() {
        var a = window.navigator.userAgent,
            c = a.indexOf("MSIE "),
            d = 0;
        (c > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && ($("#if-ie").removeClass("vih"), d = 1), 0 == d && setTimeout(function() {
                $(".vhc").addClass("vba"), $(".vhv").removeClass("vba"), setTimeout(function() {
                    $(".vhc").remove(), yb(), b()
                }, 300)
            }, 100), $("[delay-src]").each(function() {
                $(this).attr("src", $(this).attr("delay-src")).removeAttr("delay-src")
            }), zb()
    }), this.chooserImageError = function(a) {
        $(a).parent().addClass("no-image"), $(a).parent().find(".vjn").html("Copy <strong>" + $(a).attr("vis") + "</strong> to your img folder then click here to refresh."), $(a).css("display", "none")
    }, this.defaultImageError = function(a) {
        $(a).parent().remove(), $(a).remove()
    }, $.fn.focusEnd = function() {
        $(this).focus();
        var a = $("<span />").appendTo($(this)),
            b = a.get(0),
            c = null,
            d = null;
        return document.selection ? (c = document.body.createTextRange(), c.moveToElementText(b), c.select()) : window.getSelection && (c = document.createRange(), c.selectNode(b), d = window.getSelection(), d.removeAllRanges(), d.addRange(c)), a.remove(), this
    }
}

function findStrings() {
    for(var a = "", b = 0, c = String(Variant), d = 0, e = c.length; e > d; d++) "'" == c[d] ? (a += c[d], 0 == b ? b = 1 : (a += ",", b = 0)) : 1 == b && (a += c[d]);
    var f = a.split(",");
    allStringsSorted = f.sort()
}

function getQueryString() {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
}

function handleReturnKey(a) {
    if(window.getSelection) {
        a.stopPropagation();
        var b = window.getSelection(),
            c = b.getRangeAt(0),
            d = document.createElement("br");
        return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
    }
    return !0
}
variant = new Variant;
var removeDuplicatesInPlace = function(a) {
    var b, c, d, e;
    for(b = a.length - 1; b >= 0; b--)
        for(d = a[b], e = !1, c = b - 1; !e && c >= 0; c--) d === a[c] && (b !== c && a.splice(b, 1), e = !0);
    return a
};