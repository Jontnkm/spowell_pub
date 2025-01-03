document.addEventListener("DOMContentLoaded", function () {
    //메인 비주얼 슬라이드
    
    var mainSlide = new Swiper(".mainVisual", {
        rewind: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination1",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }

    });
    var pagingBar = new Swiper(".mainVisual", {
        pagination: {
            el: ".swiper-pagination2",
            type: "progressbar",
        },
    });

    const mvStop = document.querySelector(".swiper-button-playStop")
    mvStop.addEventListener('click', function(){
        if(this.classList.contains('play')){
            // console.log('재생중');
            this.classList.remove('play')
            this.classList.add('stop')
            mainSlide.autoplay.stop();
        }else if(this.classList.contains('stop')){
            // console.log('멈추었음');
            this.classList.remove('stop')
            this.classList.add('play')
            mainSlide.autoplay.start();
        }
    })
    
    if(pagingBar !== null && pagingBar !== undefined){
        mainSlide.controller.control = pagingBar;
    }

    //복지지원 슬라이드
    var supportSlide = new Swiper(".supportSlideInner", {        
        rewind: true,
        slidesPerView : 1,
        spaceBetween : 24,
        pagination: {
            el: ".swiper-pagination01",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            1023: {
                slidesPerView : 2,
            },
            1300: {
                slidesPerView : 4,
            }
        }
        
    });

    //일정 슬라이드
    var calendarSlide = new Swiper(".calSlide", {        
        slidesPerView : 1,
        spaceBetween : 0,
        pagination: {
            el: ".cal-pagination",
            type: "fraction",
        },
    });

    //주요복지사업 모바일 슬라이드
    var businessSlide = new Swiper(".bsSlide", {        
        slidesPerView : 3,
        spaceBetween : 14,
        slidesPerGroup : 3,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev"
        },

        pagination: {
            el: ".swiper-paging"
        }
    });
    
    //소식 슬라이드
    var newsSlide = new Swiper(".newsSlide", {      
        rewind: true,  
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next03",
            prevEl: ".swiper-button-prev03"
        },
        pagination: {
            el: ".swiper-pagination03",
            type: "fraction",
        },
    });
    const newsSTop = document.querySelector(".swiper-button-playStop02")
    newsSTop.addEventListener('click', function(){
        if(this.classList.contains('play')){
            // console.log('재생중');
            this.classList.remove('play')
            this.classList.add('stop')
            newsSlide.autoplay.stop();
        }else if(this.classList.contains('stop')){
            // console.log('멈추었음');
            this.classList.remove('stop')
            this.classList.add('play')
            newsSlide.autoplay.start();
        }
    })

    //푸터 협력사 슬라이드
    var affSlide = new Swiper(".affSlide", {
        slidesPerView : 3,
        spaceBetween : 14,
        slidesPerGroup : 3,
        rewind: true,
        navigation: {
            nextEl: ".swiper-button-next01",
            prevEl: ".swiper-button-prev01",
        },
    });

    //푸터 패밀리사이트 슬라이드
    var familySlide = new Swiper(".familySlide", {
        rewind: true,   
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
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

    const $counters = $(".counter");
    const exposurePercentage = 100;
    const duration = 1000;
    const addCommas = true;

    function updateCounter($el, start, end) {
        let startTime;
        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const current = Math.round(start + progress * (end - start));
            const formattedNumber = addCommas ? current.toLocaleString() : current;
            $el.text(formattedNumber);
            
            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                $el.text(addCommas ? end.toLocaleString() : end);
            }
        }
        requestAnimationFrame(animateCounter);
    }

    $(window).on('scroll', function() {
        $counters.each(function() {
            const $el = $(this);
            if (!$el.data('scrolled')) {
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight;
                const contentHeight = rect.bottom - rect.top;
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    const start = parseInt($el.data("start"));
                    const end = parseInt($el.data("end"));
                    updateCounter($el, start, end);
                    $el.data('scrolled', true);
                }
            }
        });
    }).scroll();
});

$(document).ready(function(){
     //달력 오버 기능 2025.01.02
     $(".evtAb").mouseenter(function(){
        var sbl = $(this).next('.hideBox');
        var hb = $(".hideBox");
        hb.hide();
        sbl.show();
    })

    $(".dataBox").mouseleave(function(){
        var hb = $(".hideBox");
        hb.hide();
    })

    $(".tabBtn ul li a").click(function(){
        var e = $(".tabBtn ul li a");
        var idx = $(this).parent("li").index();
        var box = $(".mainCont03 .rightArea .tabCont > div");

        $(e).removeClass("on");
        $(this).addClass("on");
        $(box).hide();
        $(box).eq(idx).show();
    })
})