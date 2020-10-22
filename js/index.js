$(function () {


    var conEle = document.querySelector('.pW');
    var divEle = document.querySelectorAll('.pW .tbox');
    var conPos = [];
    var idx = 0;

    divEle.forEach(function (el) {
        conPos.push(el.offsetTop);
    });

    //css에서 scroll-behavior: smooth; 삭제시
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 10);

    var a = 0;
    var foot = document.querySelector('footer');
    var footH = foot.offsetHeight;
    var arrow = document.querySelector('.arrow')
    var bln = false;
    var asideEl = document.querySelector('.pW footer .top_btn');
    var winTop = window.innerHeight;
    console.log(winTop)
    var prev = document.querySelector('.arrow .prev');
    var next = document.querySelector('.arrow .next');


    window.addEventListener('mousewheel', function (e) {

        if (bln) return;

        if (e.wheelDelta < 0) {
            //down
            if (idx < divEle.length - 1) {
                idx++;
                console.log('a')
            } else {
                a = 1
            }
        } else {
            //up
            if (idx > 0 && !a) {
                idx--;
            }
            if (a) {
                a = 0;
            }

        }


        if (idx == divEle.length - 1 && a) {
            conEle.style.transform = "translateY(-" + (conPos[idx] + footH) + "px)";
            arrow.style.display = 'none';

        } else {
            conEle.style.transform = "translateY(-" + conPos[idx] + "px)";
            arrow.style.display = 'block';
        }


        bln = true;
        setTimeout(function () {
            bln = false;
        }, 500);





    });

    $(".prev").on("click", function () {
        console.log(idx)
        if (idx > 0) {
            idx--;
            conEle.style.transform = "translateY(-" + conPos[idx] + "px)";
        }
    });


    $(".next").on("click", function () {
        console.log(idx)
        if (idx < 3) {
            idx++;
            conEle.style.transform = "translateY(-" + conPos[idx] + "px)";
        }
    });

    $('.pW .indexF .top_btn a').click(function () {
        var htmloffset = $('window').offset();
        console.log(htmloffset);
        $('html, body').animate({
            scrollTop: htmloffset.top
        }, 400);
    });




});
