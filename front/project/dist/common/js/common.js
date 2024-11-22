document.addEventListener("DOMContentLoaded", function () {
    //메인 비주얼 슬라이드
    if(mainSlide){
        var mainSlide = new Swiper(".mainVisual", {
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    
        var pagingSwiper = new Swiper(".mainVisual", {
            pagination: {
                el: ".swiper-pagination2",
                type: "progressbar",
            },
        });

        mainSlide.controller.control = pagingSwiper;
    }

    //복지지원 슬라이드
    var supportSlide = new Swiper(".supportSlide > .slideInner", {        
        slidesPerView : 4,
        spaceBetween : 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //일정 슬라이드
    var calendarSlide = new Swiper(".calSlide", {        
        slidesPerView : 1,
        spaceBetween : 0,
        pagination: {
            el: ".cal-pagination",
            type: "bullets",
        },
    });

    //사업 슬라이드
    var bsSlide = new Swiper(".businessSlide .slideInner", {        
        slidesPerView : 5,
        spaceBetween : 40,
        navigation: {
            nextEl: ".swiper-button-next02",
            prevEl: ".swiper-button-prev02"
        }
    });

    //탭메뉴
    var list1 = document.querySelectorAll(".calDiv1 ul li");
    var list2 = document.querySelectorAll(".calDiv2 ul li");
    if(list1){
        if (list1.length > 0) {
            var listLength1 = list1.length;
            console.log(listLength1);
            list1.forEach(function(item1) {
                item1.style.width = "calc(100% / " + listLength1 + ")";
            });
        }
    }
    if(list2) {
        if (list2.length > 0){
            var listLength2 = list2.length;
            console.log(listLength2);
            list2.forEach(function(item2) {
                item2.style.width = "calc(100% / " + listLength2 + ")";
            });
        }
    }

    //accordion
    var acc = document.querySelectorAll(".cptAccordion ul li button");
    
    acc.forEach(function(accor) {
        accor.addEventListener("click", function() {            
            var parent = this.parentElement;
            var accAnswer = parent.querySelector(".answerBox");
            if (this.classList.contains("on")) {
                parent.classList.remove("on");
                this.classList.remove("on");
                accAnswer.classList.remove("on");
            } else {
                parent.classList.add("on");
                this.classList.add("on");
                accAnswer.classList.add("on");
            }
        });
    });
});