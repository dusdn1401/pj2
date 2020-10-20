window.addEventListener('DOMContentLoaded', function () {
    var conEle = document.querySelector('.con');
    var divEle = document.querySelectorAll('.con div');
    var indi = document.querySelector('.indi');
    var move = 0;
    
    //indi
    divEle.forEach(function(){
        var aTag = document.createElement('a');
        indi.appendChild(aTag);
    });
    var indiEle = document.querySelectorAll('.indi a');
    indiEle[0].classList.add('active');
    
     //css에서 scroll-behavior: smooth; 삭제시
    setTimeout(function(){
        window.scrollTo(0,0);
    },10);

    divEle.forEach(function(el, idx){
        el.addEventListener('mousewheel',function(e){
            if(e.wheelDelta < 0){
                //down  
                try{
                   move = el.nextElementSibling.offsetLeft;
                   indiEle[idx].classList.remove('active');
                    indiEle[idx].nextElementSibling.classList.add('active')
                }
                catch{alert('다음 콘텐츠가 없음')}
                
            }else{
                //up
                try{
                   move = el.previousElementSibling.offsetLeft;
                   indiEle[idx].classList.remove('active');
                   indiEle[idx].previousElementSibling.classList.add('active')
                }
                catch{alert('이전 콘텐츠가 없음')}
            }
            conEle.style.transform = "translateX(-"+move+"px)";
        });
    });
    
    
    
    
    
    

});