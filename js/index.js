window.onload = function () {
    $("#intro").delay(500).fadeOut(1000, "swing", function () {
        $(this).remove();
    });

    //spring
    $("#f-page").css("opacity", "1");
}

$(document).ready(function () {
            //window
            var video = document.getElementById("myVideo");
            var vid = document.getElementById("MainVideo");
            var cbz = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            var dht = $(window).height();
            var dwh = $(window).width();
            var num = location.href.substr(location.href.lastIndexOf('_') + 1);
            var val = num.slice(0, 2);
            val = val - 1;

            //gnb
            $(".top_menu a,.nav_menu a").click(function () {
                $("#header").addClass("open");
                $("#header #gnb").css({
                    "height": "100%",
                    '-webkit-transition': 'all 0.5s ' + cbz,
                    '-ms-transition': 'all 0.5s ' + cbz,
                    'transition': 'all 0.5s ' + cbz
                });
                $("#gnb .gnb_lst").css({
                    "opacity": "1",
                    '-webkit-transition': 'all 0.5s ' + cbz,
                    '-ms-transition': 'all 0.5s ' + cbz,
                    'transition': 'all 0.5s ' + cbz
                });
                $("#gnb .bg,#gnb .sns").css({
                    "opacity": "1",
                    '-webkit-transition': 'all 0.5s 0.5s ' + cbz,
                    '-ms-transition': 'all 0.5s 0.5s ' + cbz,
                    'transition': 'all 0.5s 0.5s ' + cbz
                });

                //index
                if ($("body").is("#index") == true) {
                    $(".section").find("img").each(function (e) {
                        if ($(this).parent(".section").is(".on") == true) {
                            $(this)[0].pause();
                        }
                    });
                } else if ($("body").is(".previews") == true) {
                    vid.pause();
                }
                return false;

                return false;
            });

            $("#header .close a").click(function () {
                $("#header").removeClass("open");
                $("#header #gnb").css({
                    "height": "0%",
                    '-webkit-transition': 'all 0.4s 0.4s ' + cbz,
                    '-ms-transition': 'all 0.4s 0.4s ' + cbz,
                    'transition': 'all 0.4s 0.4s ' + cbz
                });
                $("#gnb .gnb_lst").css({
                    "opacity": "0",
                    '-webkit-transition': 'all 0.4s 0.3s ' + cbz,
                    '-ms-transition': 'all 0.4s 0.3s ' + cbz,
                    'transition': 'all 0.4s 0.3s ' + cbz
                });
                $("#gnb .bg,#gnb .sns").css({
                    "opacity": "0",
                    '-webkit-transition': 'all 0.4s ' + cbz,
                    '-ms-transition': 'all 0.4s ' + cbz,
                    'transition': 'all 0.4s ' + cbz
                });

                //index
                if ($("body").is("#index") == true) {
                    $(".section").find("video").each(function (e) {
                        if ($(this).parent(".section").is(".on") == true) {
                            $(this)[0].play();
                        }
                    });
                } else if ($("body").is(".previews") == true) {
                    vid.play();
                }
                return false;

                return false;
            });

            //index
            if ($("body").is("#index") == true) {
                fullpage();

                revideo($("#MainVideo1"));
                revideo($("#MainVideo2"));
                revideo($("#MainVideo3"));
                revideo($("#MainVideo4"));
                $(window).resize(function () {
                    revideo($("#MainVideo1"));
                    revideo($("#MainVideo2"));
                    revideo($("#MainVideo3"));
                    revideo($("#MainVideo4"));
                });


                //video
            } else if ($("body").is("#video") == true) {
                fullpage();

                var w_thumb = $(window).width() / 10 * 6.69;
                w_thumb = Math.floor(w_thumb / 10) * 10;
                var h_thumb = w_thumb * 0.5625;

                $(".vimeo").css({
                    "width": w_thumb,
                    "height": h_thumb,
                    "margin-top": -h_thumb / 2,
                    "margin-left": -w_thumb / 2,
                });

                $(window).resize(function () {
                    var w_thumb = $(window).width() / 10 * 6.69;
                    w_thumb = Math.floor(w_thumb / 10) * 10;
                    var h_thumb = w_thumb * 0.5625;

                    $(".vimeo").css({
                        "width": w_thumb,
                        "height": h_thumb,
                        "margin-top": -h_thumb / 2,
                        "margin-left": -w_thumb / 2,
                    });
                });


                //exterior
            } else if ($("body").is("#exterior") == true) {
                fullpage();
                revideo($("#MainVideo"));
                $(window).resize(function () {
                    revideo($("#MainVideo"));
                });
                vid.pause();
                $("#exterior h3").delay(1500).fadeIn(500, function () {
                    $("#exterior h3,.bg").delay(1200).fadeOut(700, "linear");
                    $("#exterior .box").delay(1200).fadeIn(500, function () {
                        vid.play();
                    });
                });

                //previews
            } else if ($("body").is(".previews") == true) {
                //visual
                revideo($("#MainVideo"));
                $("#visual").css("height", dht);
                $(".previews .lsts li").css({
                    "height": parseInt(dht / 2)
                });

                if (dht < 600) $(".contents").css({
                    "top": "590px"
                });
                else $(".contents").css({
                    "top": parseInt(dht - 15)
                });
                scrolling(dht);

                //room 
                $("#rpv .btn").append('<img src="http://gonylab5.speedgabia.com/havet/final/images/room/detail_btn.png" alt="" width="197" height="48" />');

                $("#rpv .lsts li").each(function (e) {
                    var i = e + 1;
                    $(this).find("a").attr("href", "room_0" + i + ".html");
                    $(this).find("a .txt span").text("HAVET'S ACCOMMODATION");
                    $(this).find("a .txt strong").text(room_e_ttl[e]);
                    var lst_wdh = parseInt($(this).find("a").width() + 50);
                    $(this).find("a").css({
                        "width": lst_wdh,
                        "margin-left": lst_wdh / -2
                    });
                });

                $("#rpv .lsts li > a").hover(function () {
                    $(this).parent().find("a .txt span").css({
                        "margin-top": "0",
                        '-webkit-transition': 'all 0.3s ease-in',
                        '-ms-transition': 'all 0.3s ease-in',
                        'transition': 'all 0.3s ease-in'
                    });
                    $(this).find(".txt span,.txt strong").css({
                        "color": "#fff",
                        '-webkit-transition': 'all 0.3s ease-in',
                        '-ms-transition': 'all 0.3s ease-in',
                        'transition': 'all 0.3s ease-in'
                    });
                    $(this).parent().find("a .btn img").css({
                        "top": "0",
                        "opacity": "1",
                        '-webkit-transition': 'all 0.3s ease-in',
                        '-ms-transition': 'all 0.3s ease-in',
                        'transition': 'all 0.3s ease-in'
                    });
                    $(this).parent().find(".img_01 .wbg").css({
                        "left": "-100%",
                        "opacity": "0",
                        '-webkit-transition': 'all 0.6s ' + cbz,
                        '-ms-transition': 'all 0.6s ' + cbz,
                        'transition': 'all 0.6s ' + cbz
                    });
                    $(this).parent().find(".img_02 .wbg").css({
                        "left": "100%",
                        "opacity": "0",
                        '-webkit-transition': 'all 0.6s ' + cbz,
                        '-ms-transition': 'all 0.6s ' + cbz,
                        'transition': 'all 0.6s ' + cbz
                    });
                }, function () {
                    $(".lsts li a .txt span").css({
                        "margin-top": "30px",
                        '-webkit-transition': 'all 0.2s ease-in',
                        '-ms-transition': 'all 0.2s ease-in',
                        'transition': 'all 0.2s ease-in'
                    });
                    $(".txt span,.txt strong").css({
                        "color": "#364847",
                        '-webkit-transition': 'all 0.3s ease-in',
                        '-ms-transition': 'all 0.3s ease-in',
                        'transition': 'all 0.3s ease-in'
                    });
                    $(".lsts li a .btn img").css({
                        "top": "-48px",
                        "opacity": "0",
                        '-webkit-transition': 'all 0.2s ease-in',
                        '-ms-transition': 'all 0.2s ease-in',
                        'transition': 'all 0.2s ease-in'
                    });
                    $(".lsts li .img_01 .wbg").css({
                        "left": "0%",
                        "opacity": "0.5",
                        '-webkit-transition': 'all 0.5s ' + cbz,
                        '-ms-transition': 'all 0.5s ' + cbz,
                        'transition': 'all 0.5s ' + cbz
                    });
                    $(".lsts li .img_02 .wbg").css({
                        "left": "0%",
                        "opacity": "0.5",
                        '-webkit-transition': 'all 0.5s ' + cbz,
                        '-ms-transition': 'all 0.5s ' + cbz,
                        'transition': 'all 0.5s ' + cbz
                    });
                });
            });
