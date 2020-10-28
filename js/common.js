window.addEventListener('load', function () {
    //menu 
    const topMenu = document.querySelector('.top .top_menu');
    const navMenu = document.querySelector('.nav .nav_menu');
    const gnb = document.querySelector('.gnb');
    const clo = document.querySelector('.close');

    topMenu.addEventListener('click', function () {
        topMenu.classList.toggle('active');
        gnb.classList.toggle('active');
    });
    navMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        gnb.classList.toggle('active');
    });
    clo.addEventListener('click', function () {
        gnb.classList.remove('active');
    })


    /*===========================================*/
    //foot_top
    var asideEl = document.querySelector('.top_btn a');
    var asideTop = asideEl.offsetTop;


    asideEl.addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 0
        });
    })


    window.addEventListener('scroll', function () {
        if (this.scrollY > window.innerHeight) {
            asideEl.classList.add('active');
        } else {
            asideEl.classList.remove('active');
        }
    })
    /*=========================================*/
    var win = window.innerHeight
    var winTop = win.offsetTop;
    
    console.log(winTop);

    if (this.scrollY < win+500) {
        console.log(winTop + 500);
        $('#top').css("opacity", "1");
        $('#nav').css("opacity", "0");

    } else {
        $('#top').css("opacity", "0");
        $('#nav').css("opacity", "1");

    }


})
