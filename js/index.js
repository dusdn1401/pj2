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





        asideEl.addEventListener('click', function () {
            console.log('a')
            window.scrollTo({
                left: 0,
                top: 0
                /*behavior: 'smooth'*/
            });

        });
    });


    /*   prev.addEventListener('click', function () {
        if (idx != 0) idx--;
        console.log(idx)

    })
    next.addEventListener('click', function () {
        if (idx != divEle.length - 1) idx++;
    })

*/

    $(function () {
        $(".prev").on("click", function () {
            $(".pW .tbox").slideUp(idx--); // id가 "divBox"인 요소를 0.5초에 걸쳐 올라가면서 사라지게 함.
        });
        $(".next").on("click", function () {
            $(".pW .tbox").slideDown(idx++); // id가 "divBox"인 요소를 0.3초에 걸쳐 내려오면서 나타나게 함.
        });
    });


});
