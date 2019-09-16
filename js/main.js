var navButton=document.querySelector('.navbar__btn');
var navMenu=document.querySelector('.menu');
navButton.addEventListener("click",function(){
    navMenu.classList.toggle('menu_active');
});

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        navMenu.classList.remove('menu_active');
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress*2/V, w + t) : Math.min(w + progress*2/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

var sliderElement=document.querySelectorAll('.slider-container__content');
var arrowNext=document.querySelector('#arrow_next');
var arrowPrev=document.querySelector('#arrow_prev');
var switchers=document.querySelectorAll('.slider-container-img');
var currentIndex=0;
arrowNext.addEventListener("click", moveNext);
arrowPrev.addEventListener("click", movePrev);


function moveNext(){

    for(var i=0;i<sliderElement.length;i++){      
        if(sliderElement[i].classList.contains('slider-container__content_active')){
           
            currentIndex=i;
     
        }  
    }
    console.log(currentIndex);
    if(currentIndex>1){
       
        switchers[2].checked=false;
        sliderElement[2].classList.remove('slider-container__content_active');
        switchers[0].checked=true;
        sliderElement[0].classList.add('slider-container__content_active');
    }
    else{
        
        switchers[currentIndex].checked=false;
        sliderElement[currentIndex].classList.remove('slider-container__content_active');
        switchers[currentIndex+1].checked=true;
        sliderElement[currentIndex+1].classList.add('slider-container__content_active');
    }
}

function movePrev(){
    for(var i=0;i<sliderElement.length;i++){      
        if(sliderElement[i].classList.contains('slider-container__content_active')){
            currentIndex=i;   
        }  
    }
    if(currentIndex<1){
        switchers[0].checked=false;
        sliderElement[0].classList.remove('slider-container__content_active');
        switchers[2].checked=true;
        sliderElement[2].classList.add('slider-container__content_active');
    }
    else{
        switchers[currentIndex].checked=false;
        sliderElement[currentIndex].classList.remove('slider-container__content_active');
        switchers[currentIndex-1].checked=true;
        sliderElement[currentIndex-1].classList.add('slider-container__content_active');
    }
}
