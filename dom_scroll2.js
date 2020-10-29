window.addEventListener('DOMContentLoaded', function () {

    var navEl = document.querySelectorAll('nav a');
    var secEl = document.querySelectorAll('section');
    var secArr = [];

    secEl.forEach(function (sl, idx) {
        secArr.push(sl.offsetTop);
    });

    navEl.forEach(function (sl, idx) {
        sl.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo(0, secArr[idx]);
        });
    });

    var winH = window.innerHeight / 2;
    window.addEventListener('scroll', function () {
        secArr.forEach(function (el, idx) {
            if (window.scrollY >= secArr[idx] - winH) {
                navEl.forEach(function (a) {
                    a.classList.remove('active');
                });
                navEl[idx].classList.add('active');
            }
        });
        //scroll end
    });


    /*
    var nav = document.querySelector('nav);
    nav.style.opacity ="1";
    top.style.opacity ="0";

    
    1. header a를 클릭이벤트 실행
        - window scroll를 이동시킴(섹션의 offsetTop만큼(콘텐츠가 상단으로부터 떨어진 거리))
        
        - 모든 a태그에 active를 remove함
        - 클릭한 a태그에 active 추가

    2. window 스크롤 이벤트 실행
        - 섹션의 offsetTop 보다 스크롤값이 더 커지면
            - 모든 a태그에 active를 remove함
            - 클릭한 a태그에 active 추가 */



    /* 사이드 메뉴 & 마우스 휠 이벤트 */
    /* var secEl = document.getElementsByName('section');
     var tabBtn = document.querySelectorAll('.side_menu ul li');
     var header = document.querySelector('header');
     var footer = document.querySelector('footer');
     var secArr = [];

     secEl.forEach(function (sl, idx) {
         secArr.push(sl.offsetTop);
     });

     setTimeout(function () {
         window.scrollTo(0, 0);
     }, 10);

     var i = 0;

     secEl.forEach(function (el, idx) {
         tabBtn[0].classList.add('active');
         el.addEventListener('mousewheel', function (e) {
             if (e.wheelDelta < 0) {
                 header.classList.add('scrollDown');
                 try {
                     tabBtn[idx].classList.remove('active');
                     tabBtn[idx].nextElementSibling.classList.add('active');
                 } catch {}
                 i = idx + 1;
             } else {

                 try {
                     tabBtn[idx].classList.remove('active');
                     tabBtn[idx].previousElementSibling.classList.add('active');
                 } catch {
                     tabBtn[0].classList.add('active');
                 }
                 i = idx - 1;

                 if (i == 0) {
                     header.classList.remove('scrollDown');
                 }
             }

             var footerH = footer.offsetHeight;
             if (secEl.length - 1 >= i) {
                 window.scroll(0, secArr[i]);
             } else {
                 window.scroll(0, secArr[secEl.length - 1] + footerH);
             }

         })
     })

     tabBtn.forEach(function (sl, idx) {
         sl.addEventListener('click', function (e) {
             e.preventDefault();
             window.scroll(0, secArr[idx]);
             tabBtn.forEach(function (el) {
                 el.classList.remove('active');
             });
             sl.classList.add('active');
             if (idx != 0) {
                 header.classList.add('scrollDown');
             } else {
                 header.classList.remove('scrollDown');
             }
         });
     });*/
});
