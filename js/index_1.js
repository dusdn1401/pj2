
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

    var bln = false; window.addEventListener('mousewheel', function (e) {
        if (bln) return;

        if (e.wheelDelta < 0) {
            //down
            if (idx < divEle.length - 1) { idx++; }
        } else {
            //up
            if (idx > 0) { idx--; }
        }

        conEle.style.transform = "translateY(-" + conPos[idx] + "px)";

        bln = true;
        setTimeout(function () { bln = false; }, 1000);
    });





});
