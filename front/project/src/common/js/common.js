document.addEventListener("DOMContentLoaded", function () {
    //메인 비주얼 슬라이드
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

    // 카은트 업
    var cnt01= 1747;

    $({ val : 0 }).animate({ val : cnt01 }, {
        duration: 1500,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col01 .count span").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col01 .count span").text(num);
        }
    });

    var cnt02= 145;

    $({ val : 0 }).animate({ val : cnt02 }, {
        duration: 1800,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col02 .count span").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col02 .count span").text(num);
        }
    });

    var cnt03= 625;

    $({ val : 0 }).animate({ val : cnt03 }, {
        duration: 2000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col03 .count span").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col03 .count span").text(num);
        }
    });

    var cnt04= 1515;

    $({ val : 0 }).animate({ val : cnt04 }, {
        duration: 2200,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col04 .count span").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".col04 .count span").text(num);
        }
    });

    //3자리마다 , 찍기
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //사업 슬라이드
    var bsSlide = new Swiper(".businessSlide .slideInner", {        
        slidesPerView : 5,
        spaceBetween : 40,
        navigation: {
            nextEl: ".swiper-button-next02",
            prevEl: ".swiper-button-prev02"
        }
    });
});