document.addEventListener("DOMContentLoaded", function () {
    //메인 비주얼 슬라이드
    
    var mainSlide = new Swiper(".mainVisual", {
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
    
    if(pagingBar !== null && pagingBar !== undefined){
        mainSlide.controller.control = pagingBar;
    }

    //복지지원 슬라이드
    var supportSlide = new Swiper(".supportSlideInner", {        
        slidesPerView : 4,
        spaceBetween : 24,
        pagination: {
            el: ".swiper-pagination01",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        
    });

    var pagingBar02 = new Swiper(".supportSlideInner", {
        pagination: {
            el: ".swiper-pagination02",
            type: "progressbar",
        },
    });
    
    if(pagingBar02 !== null && pagingBar02 !== undefined){
        supportSlide.controller.control = pagingBar02;
    }

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
        slidesPerView : 3,
        spaceBetween : 40,
        navigation: {
            nextEl: ".swiper-button-next02",
            prevEl: ".swiper-button-prev02"
        },
        breakPoints: {
            1023: {
                slidesPerView : 5,
            }
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