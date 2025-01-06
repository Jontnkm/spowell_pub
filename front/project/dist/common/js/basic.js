document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector('.menu-wrap');

    if(menu !== null && menu !== undefined){
        menu.addEventListener('click',function(){
            if(menu.classList.contains('open')){
                menu.classList.remove('open');
            }else{
                menu.classList.add('open');
            }
        });
    }

    const depth01Titles = document.querySelectorAll(".depth01Title");
    const menuLinks = document.querySelectorAll(".headerBot .menu li a");
    const depth02Divs = document.querySelectorAll("div.depth02");
    const menu02 = document.querySelector(".headerBot .menu");
    const lastMenuLink = document.querySelector(".headerBot .menu li:last-of-type a");

    if(depth01Titles !== null && depth01Titles !== undefined){
        depth01Titles.forEach(function(title) {
            title.addEventListener("focusin", function() {
                hideAllDepth02();
                removeAllOnClasses();
                const nextDiv = this.nextElementSibling;
                if (nextDiv) nextDiv.style.display = "block";
                this.classList.add("on");
            });
        });
    }

    if (lastMenuLink) {
        lastMenuLink.addEventListener("focusout", function() {
            hideAllDepth02();
            removeAllOnClasses();
        });
    }

    if(depth01Titles !== null && depth01Titles !== undefined){
        depth01Titles.forEach(function(title) {
            title.addEventListener("mouseenter", function() {
                hideAllDepth02();
                removeAllOnClasses();
                const nextDiv = this.nextElementSibling;
                if (nextDiv) nextDiv.style.display = "block";
                this.classList.add("on");
            });
        });
    }

    if (menu02) {
        menu02.addEventListener("mouseleave", function() {
            hideAllDepth02();
            removeAllOnClasses();
        });
    }

    function hideAllDepth02() {
        depth02Divs.forEach(function(div) {
            div.style.display = "none";
        });
    }

    function removeAllOnClasses() {
        menuLinks.forEach(function(link) {
            link.classList.remove("on");
        });
    }

    var pgTitElement = document.querySelector(".cptLnb .menuBox .depth2Menu.active > h3");
    var dep01Element = document.querySelector(".cptLnb .titleArea h2");

    var pgTit = pgTitElement ? pgTitElement.textContent : "";
    var dep01 = dep01Element ? dep01Element.textContent : "";

    // console.log(pgTit, dep01);

    var titleParagraph = document.querySelector(".cptSubTop .titleArea > p");
    if (titleParagraph) {
        titleParagraph.textContent = pgTit;
    }

    var dept01Element = document.querySelector(".depthTxt > .dept01");
    if (dept01Element) {
        dept01Element.textContent = dep01;
    }

    var dept02Element = document.querySelector(".depthTxt > .dept02");
    if (dept02Element) {
        dept02Element.textContent = pgTit;
    }

    var pgTitElementMo = document.querySelector(".cptLnb .menuBox .depth2Menu.active > h3 > a");
    var pgTitMo = pgTitElementMo ? pgTitElementMo.textContent : "";
    var targetElement = document.querySelector(".moInner .depth02 button");
    if (targetElement) {
        targetElement.textContent = pgTitMo;
    }

    var buttonsMoMenu = document.querySelectorAll(".subMenuBox button");
    if(buttonsMoMenu !== null && buttonsMoMenu !== undefined){
        buttonsMoMenu.forEach(function(button) {
            button.addEventListener("click", function() {
                var parent = this.parentElement;
                var drpdwBox = parent.querySelector(".depthDrop");

                if (this.classList.contains("active")) {
                    parent.classList.remove("active");
                    this.setAttribute("title", "열기");
                    this.classList.remove("active");
                    drpdwBox.style.display = "none";
                } else {
                    parent.classList.add("active");
                    this.classList.add("active");
                    this.setAttribute("title", "접기");
                    drpdwBox.style.display = "block";
                }
            });
        });
    }

    //아코디언 메뉴
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

    var buttons = document.querySelectorAll(".dropDown > button");
    if(buttons){
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {            
                var parent = this.parentElement;
                var drpdwBox = parent.querySelector(".dropDownBox");
                if (parent.classList.contains("disabled")){
                    alert("비활성화된 항목입니다.");
                } else {
                    if (this.classList.contains("active")) {
                        parent.classList.remove("active");
                        this.setAttribute("title","열기");
                        this.classList.remove("active");
                        drpdwBox.style.display = "none";
                    } else {
                        parent.classList.add("active");
                        this.classList.add("active");
                        this.setAttribute("title","접기");
                        drpdwBox.style.display = "block";
                    }
                }
            });
        });
    }

    var list1 = document.querySelectorAll(".calDiv1 ul li");
    var listLength1 = list1.length;
    var list2 = document.querySelectorAll(".calDiv2 ul li");
    var listLength2 = list2.length;
    
    // console.log(listLength1);
    // console.log(listLength2);

    list1.forEach(function(item1) {
        item1.style.width = "calc(100% / " + listLength1 + ")";
    });

    list2.forEach(function(item2) {
        item2.style.width = "calc(100% / " + listLength2 + ")";
    });

    var links = document.querySelectorAll(".footerBot .rightArea > ul > li > a");
    
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var isOn = link.classList.contains("on");

            document.querySelectorAll("div.dropTopBox").forEach(function(box) {
                box.style.display = "none";
            });

            links.forEach(function(item) {
                item.classList.remove("on");
                item.setAttribute("title", "열기");
            });

            if (!isOn) {
                var dropBox = link.nextElementSibling;
                if (dropBox) {
                    dropBox.style.display = "block";
                }
                link.classList.add("on");
                link.setAttribute("title", "접기");
            }
        });
    });
    

    function adjustTable() {
        var wWid = window.innerWidth;
        var combines = document.querySelectorAll(".cptTable .combine");

        if (wWid < 1023) {
            combines.forEach(function(combine) {
                var td = combine.querySelector("td");
                var th = combine.querySelector("th");
                if (td && th) {
                    var h = td.offsetHeight;
                    th.style.height = h + "px";
                    th.style.lineHeight = h + "px";
                }
            });
        } else {
            combines.forEach(function(combine) {
                var th = combine.querySelector("th");
                if (th) {
                    th.style.height = "auto";
                    th.style.lineHeight = "22px";
                }
            });
        }
    }

    adjustTable();

    window.addEventListener("resize", function() {
        var wWid2 = window.innerWidth;
        var combines = document.querySelectorAll(".cptTable .combine");

        if (wWid2 < 767) {
            combines.forEach(function(combine) {
                var td = combine.querySelector("td");
                var th = combine.querySelector("th");
                if (td && th) {
                    var h = td.offsetHeight;
                    th.style.height = h + "px";
                    th.style.lineHeight = h + "px";
                }
            });
        } else {
            combines.forEach(function(combine) {
                var th = combine.querySelector("th");
                if (th) {
                    th.style.height = "auto";
                    th.style.lineHeight = "22px";
                }
            });
        }
    });

    const uploadFiles = document.querySelectorAll(".fileArea .fileIpt");
    uploadFiles.forEach(function(uploadFile,idx){
        uploadFile.addEventListener("change",function(event){
            const fileArea = this.parentElement.parentElement;
            let fileName;
            if(window.FileReader){
                fileName = this.files[0].name;
            } else {
                console.log("noFileReader");
            }
            fileArea.querySelector(".download").innerText = fileName;
            fileArea.classList.add("on");
        });
    });
        
    const delFiles = document.querySelectorAll(".fileArea .delBtn");
    delFiles.forEach(function(delFile,idx){
        delFile.addEventListener("click",function(event){
            const fileArea = this.parentElement.parentElement;
            fileArea.querySelector(".fileIpt").value = "";
            fileArea.querySelector(".download").innerText = "";
            fileArea.classList.remove("on");
        });
    });
        

    if(datepicker !== null && datepicker !== undefined){
        var datepicker = new tui.DatePicker('#wrapper1', {
            date: new Date(),
            input: {
                element: '#datepicker-input1',
                format: 'yyyy-MM-dd'
            }
        });
        var datepicker = new tui.DatePicker('#wrapper2', {
            date: new Date(),
            input: {
                element: '#datepicker-input2',
                format: 'yyyy-MM-dd'
            }
        });
    }

    /* 
    **약관동의 - 항목버튼 클릭시 내용으로 스크롤 이동 
    **project\src\html\terms\policy.html
    */
    let termsScroll = document.querySelectorAll('.termTargetScroll');
    if (termsScroll) {
        termsScroll.forEach(function(item, i){
            let termsScrollBtns = item.querySelectorAll('.listTit');
            let termsScrollCont = item.querySelectorAll('.termPart');
            termsScrollBtns.forEach((btnItem, index) => {
                btnItem.addEventListener('click', () => handleButtonClick(btnItem, index));
            });
            // 버튼 클릭 시 스크롤 및 포커스 이동
            function handleButtonClick(btnItem, index) {
                const _target = termsScrollCont[index];
    
                // 콘텐츠에 포커스 설정
                if (_target) {
                    _target.setAttribute('tabindex', '0');
                    _target.focus({ preventScroll: true });
                    _target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    item.scrollTo({
                        top: _target.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.log('no Target');
                    return false; 
                }
    
                // 블러 시 tabindex 제거
                _target.addEventListener('blur', () => _target.removeAttribute('tabindex'));
    
                // 탭/역탭 키 이벤트 처리
                _target.addEventListener('keydown', (e) => handleKeyNavigation(e, btnItem, index));
            }
            // 키보드 내비게이션 처리
            function handleKeyNavigation(e, btnItem, index) {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    if (e.shiftKey) {
                        // 역탭: 이전 버튼으로 이동
                        btnItem.focus();
                    } else {
                        // 탭: 다음 버튼 또는 외부 요소로 이동
                        const nextButton = termsScrollBtns[index + 1];
                        if (nextButton) {
                            nextButton.focus();
                        } else {
                            moveToNextFocusable(termsScrollCont[index]);
                        }
                    }
                }
            }
            // 다음 포커스 가능한 요소로 이동
            function moveToNextFocusable(currentElement) {
                const focusableSelectors = [
                    'a[href]',
                    'button:not([disabled])',
                    'textarea:not([disabled])',
                    'input[type="text"]:not([disabled])',
                    'select:not([disabled])',
                    '[tabindex]:not([tabindex="-1"])',
                ];
    
                const focusableElements = Array.from(
                    document.querySelectorAll(focusableSelectors.join(','))
                );
    
                // 현재 요소 이후의 포커스 가능한 요소 탐색
                const currentIndex = focusableElements.indexOf(currentElement);
                if (currentIndex !== -1 && currentIndex < focusableElements.length - 1) {
                    focusableElements[currentIndex + 1].focus();
                }
            }
        })
    }

    /* 공통 : 탭 - 최상위클래스 .tabArea 사용, 그 하위마크업은 가이드와 동일 */
    let tabs = document.querySelectorAll('.tabArea');
    tabs.forEach(function(tab){
        let tabBtns = tab.querySelectorAll('.inner > ul > li > a');
        let tabConts = tab.querySelectorAll('.tabCont > .contBox');

        tabBtns.forEach(function(btn,index){
            btn.addEventListener('click',function(e){
                e.preventDefault();
                // 탭 버튼 활성화
                tabBtns.forEach(item => item.parentElement.classList.remove('active'));
                btn.parentElement.classList.add('active');

                // 탭 콘텐츠 활성화
                tabConts.forEach(cont => cont.classList.remove('active'));
                tabConts[index].classList.add('active');
            })
        })
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

    //quick menu function
    const qOpn = document.querySelector(".quickOpen");
    const qCls = document.querySelector(".clsQuick > a");

    qOpn.addEventListener('click',function(){
        this.classList.add("hide");
        this.nextElementSibling.classList.add("on");
    });

    qCls.addEventListener('click',function(){
        document.querySelector(".quickOpen").classList.remove("hide");
        document.querySelector(".cptQuick").classList.remove("on");
    });

    //mobile menu open, inner control and close function
    const mOpn = document.querySelector(".menu-wrap");
    const body = document.body;
    const mMenu = document.querySelector(".moMenuBox");
    const mInner = document.querySelectorAll(".moMenuBox .menuList .left ul li a");
    const mCls = document.querySelector(".closeBtn");

    mOpn.addEventListener("click",function(){
        body.style.overflow = "hidden";
        mMenu.style.display = "block";
    })

    mInner.forEach(function(menuItem){
        menuItem.addEventListener("click", function(){
            event.preventDefault();

            var menu = document.querySelectorAll(".moMenuBox .menuList .left ul li a");
            var idx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
            var loc = document.querySelectorAll(".moMenuBox .menuList .right .inner > div")

            depth02.forEach(function(item) {
                item.classList.remove("on");
            });
            loc[idx].classList.add("on");
            
            menu.forEach(function(item) {
                item.classList.remove("on");
            });
            this.classList.add("on");
        })
    });

    mCls.addEventListener("click", function(){
        body.style.overflow = "visible";
        mMenu.style.display = "none";
    })

    //top button function
    
    window.addEventListener("scroll", function() {
        var dh = document.documentElement.scrollHeight;
        var point = dh / 4;
        var scr = window.scrollY;
        var topButton = document.querySelector(".topBtn");
    
        if (scr >= point) {
            topButton.classList.add("on");
        } else {
            topButton.classList.remove("on");
        }
    });
    
    const tBtn = document.querySelector(".topBtn");
    tBtn.addEventListener("click", function(event){
        event.preventDefault(); // 기본 동작 방지
        
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

});

//popup control
function popOpen(popId, event){ // 2025.01.03 - event 매개변수 추가
    let thispop = document.querySelector("#" + popId);

    thispop.classList.add("popOpen");
    thispop.setAttribute('tabindex',"0");
    thispop.target = event.target; // 2025.01.03 - 추가 
    thispop.focus();
}

function popClose(popId){
    // var trig = document.querySelector('.trigger'); :: 2025.01.03 - 삭제
    let thispop = document.querySelector("#" + popId);

    thispop.classList.remove("popOpen");
    thispop.setAttribute('tabindex',"");
    // trig.focus(); :: 2025.01.03 - 삭제
    thispop.target.focus(); // 2025.01.03 - 추가 
}

