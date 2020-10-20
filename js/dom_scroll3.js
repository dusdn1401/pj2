window.addEventListener('DOMContentLoaded', function () {

    //  1. 콘텐츠 상단 위치값
    var liEle = document.querySelectorAll('figure');
    window.addEventListener('scroll', fadeFun);
    var winH = window.innerHeight;

    function fadeFun() {
        liEle.forEach(function (el, idx) {
            if (el.offsetTop - winH < this.scrollY) {
                el.classList.add('active');
            }
        });
    }

    /*
    1.스크롤 이벤트 발생
    
      #조건문 작성)
        - 콘텐츠의 상단 위치값 (offsetTop) 빼기
          브라우저 높이(el.offsetTop - winH)
    
        - 스크롤값이 더 크다면 (콘텐츠는 하단에 위치)
    
      #조건이 true이면
        - 콘텐츠에 active 추가      (el.classList.add('active')
     */



});
