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
    // if(buttonsMoMenu !== null && buttonsMoMenu !== undefined){
    //     buttonsMoMenu.forEach(function(button) {
    //         button.addEventListener("click", function() {
    //             var parent = this.parentElement;
    //             var drpdwBox = parent.querySelector(".depthDrop");

    //             if (this.classList.contains("active")) {
    //                 parent.classList.remove("active");
    //                 this.setAttribute("title", "열기");
    //                 this.classList.remove("active");
    //                 drpdwBox.style.display = "none";
    //             } else {
    //                 parent.classList.add("active");
    //                 this.classList.add("active");
    //                 this.setAttribute("title", "접기");
    //                 drpdwBox.style.display = "block";
    //             }
    //         });
    //     });
    // }

    if (buttonsMoMenu) {
        buttonsMoMenu.forEach(button => {
            button.addEventListener("click", function () {
                const parent = this.parentElement;
                const drpdwBox = parent.querySelector(".depthDrop");
                const isActive = this.classList.contains("active");

                // 모든 드롭다운 메뉴 초기화 (열려 있는 상태를 닫음)
                document.querySelectorAll(".depthDrop").forEach(dropdown => {
                    const parentElement = dropdown.parentNode;
                    parentElement.classList.remove("active");
                    dropdown.setAttribute("title", "열기");
                    dropdown.classList.remove("active");
                    dropdown.previousElementSibling?.classList.remove("active");
                    dropdown.style.display = "none";
                });

                // 현재 버튼이 활성화 상태라면 닫기만 처리
                if (isActive) {
                    parent.classList.remove("active");
                    this.setAttribute("title", "열기");
                    this.classList.remove("active");
                    drpdwBox.style.display = "none";
                    return; // 이미 열려 있는 상태에서 닫았으므로 종료
                }

                // 클릭된 버튼의 드롭다운 처리 (열기)
                parent.classList.add("active");
                this.classList.add("active");
                this.setAttribute("title", "접기");
                drpdwBox.style.display = "block";
            });
        });
    }

    //아코디언 메뉴
    var acc = document.querySelectorAll(".cptAccordion ul li .accBtnCov");
    var chk = document.querySelectorAll(".cptAccordion ul li .accBtnCov input[type='checkbox']");

    if(acc){
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
    }
    
    if(chk){
        chk.forEach(function(item){
            item.addEventListener("click", function() {            
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
        })
    }
    
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

    if(list1){
        list1.forEach(function(item1) {
            if(listLength1 == 1){
                item1.style.width = "100%";
                item1.style.borderBottom = "2px solid var(--prm1)";
                item1.style.borderRadius = "10px";
            }else{
                item1.style.width = "calc(100% / " + listLength1 + ")";
            }
        });   
    }

    if(list2){
        list2.forEach(function(item2) {
            item2.style.width = "calc(100% / " + listLength2 + ")";
        });
    }

    var links = document.querySelectorAll(".footerBot .rightArea > ul > li > a");
    
    if(links){
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
    }
    
    // function adjustTable() {
    //     var wWid = window.innerWidth;
    //     var combines = document.querySelectorAll(".cptTable tr");

    //     if (wWid < 1023) {
    //         combines.forEach(function(combine) {
    //             var th = combine.querySelectorAll("th");
    //             var td = combine.querySelectorAll("td");
    //             td.forEach(function(td){    
    //                 var h = td.offsetHeight;
    //                 th.forEach(function(target){
    //                     target.style.height = h + "px";
    //                     if(combine.classList.contains('combine')){
    //                         target.style.lineHeight = h + "px";
    //                     }
    //                 })
    //             })
    //         });
    //     } else {
    //         combines.forEach(function(combine) {
    //             var th = combine.querySelectorAll("th");
    //             th.forEach(function(target){
    //                 if (target) {
    //                     target.style.height = "auto";
    //                     target.style.lineHeight = "22px";
    //                 }
    //             })
    //         });
    //     }
    // }

    // adjustTable();

    // window.addEventListener("resize", function() {
    //     var wWid2 = window.innerWidth;
    //     var combines = document.querySelectorAll(".cptTable tr");

    //     if (wWid2 < 767) {
    //         combines.forEach(function(combine) {
    //             var th = combine.querySelectorAll("th");
    //             var td = combine.querySelectorAll("td");
    //             td.forEach(function(td){    
    //                 var h = td.offsetHeight;
    //                 th.forEach(function(target){
    //                     target.style.height = h + "px";
    //                     if(combine.classList.contains('combine')){
    //                         target.style.lineHeight = h + "px";
    //                     }
    //                 })
    //             })
    //         });
    //     } else {
    //         combines.forEach(function(combine) {
    //             var th = combine.querySelectorAll("th");
    //             th.forEach(function(target){
    //                 if (target) {
    //                     target.style.height = "auto";
    //                     target.style.lineHeight = "22px";
    //                 }
    //             })
    //         });
    //     }
    // });

    const uploadFiles = document.querySelectorAll(".fileArea .fileIpt");
    if(uploadFiles){
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
    }
    
    const delFiles = document.querySelectorAll(".fileArea .delBtn");
    if(delFiles) {
        delFiles.forEach(function(delFile,idx){
            delFile.addEventListener("click",function(event){
                const fileArea = this.parentElement.parentElement;
                fileArea.querySelector(".fileIpt").value = "";
                fileArea.querySelector(".download").innerText = "";
                fileArea.classList.remove("on");
            });
        });
    }

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
    let tabBtns = document.querySelectorAll('.tabArea > .inner > ul > li > a');
    if(tabBtns){
        tabBtns.forEach((tabBtn)=>{
            tabBtn.addEventListener('click',function(e){
                e.preventDefault();
    
                let tabArea = e.target.closest('.tabArea');
                let targetBtn = e.target.parentElement;
                let tabBtns = tabArea.children[0].querySelectorAll('.inner > ul > li > a');
                let tabConts = tabArea.children[1].children;
    
                // 클릭된 버튼의 인덱스 가져오기
                let index = Array.from(tabBtns).indexOf(e.target);
    
                // 탭버튼 활성화
                tabBtns.forEach(item => item.parentElement.classList.remove('active'));
                targetBtn.classList.add('active');
    
                // 탭 콘텐츠 활성화 처리
                Array.from(tabConts).forEach((cont) => cont.classList.remove('active')); // 변환 후 forEach
                if (tabConts[index]) {
                    tabConts[index].classList.add('active');
                }
            });
        })
    }
    
    // 복지캘린더 모바일 달력 숨김처리 & 목록 강제포커싱
    const typeCalendar = document.querySelector('.typeCalendar');
    function handleCalendarResize() {
        const width = window.innerWidth; // 현재 창의 너비

        if (typeCalendar) {
            const tabBtns = typeCalendar.querySelectorAll('.inner > ul > li > a');
            const tabConts = typeCalendar.querySelectorAll('.tabCont > .contBox');

            if (width <= 1160) {
                typeCalendar.classList.add('typeMo'); // width가 1160 이하일 때 클래스 추가

                // 첫 번째 탭 비활성화
                tabBtns[0].parentElement.classList.remove('active');
                tabConts[0].classList.remove('active');

                // 두 번째 탭 활성화
                tabBtns[1].parentElement.classList.add('active');
                tabConts[1].classList.add('active');
            } else {
                typeCalendar.classList.remove('typeMo'); // width가 1160 초과일 때 클래스 제거

                // 기존 탭 상태 초기화 (활성화 상태 복구)
                tabBtns.forEach((tabBtn, index) => {
                    const isActive = tabBtn.parentElement.classList.contains('active');
                    tabConts[index].classList.toggle('active', isActive);
                });
            }
        }
    }
    // 초기 실행
    handleCalendarResize();
    if(window) {
        window.addEventListener('resize', handleCalendarResize);
    }

    // 메인 & 복지캘린더
    const calItem = document.querySelectorAll(".evtAb");
    const db = document.querySelectorAll(".dataBox");
    if(calItem) {
        calItem.forEach(function(item){
            item.addEventListener("mouseover", function(event){
                // console.log(this);
                var sbl = this.nextElementSibling;
                var hb = document.querySelectorAll(".hideBox");
                if(event.target === item) {
                    hb.forEach(function(hBox){
                        hBox.style.display = "none";
                    })
                    if(sbl){
                        sbl.style.display = "block";
                    }
                }
            })
    
            item.addEventListener("focus", function(event){
                var sbl = this.nextElementSibling;
                var hb = document.querySelectorAll(".hideBox");
                if(event.target === item) {
                    
                    hb.forEach(function(hBox){
                        hBox.style.display = "none";
                    })
                    if(sbl){
                        sbl.style.display = "block";
                    }
                }
            })
        })
    }
    if(db) {
        db.forEach(function(line){
            line.addEventListener("mouseleave", function(event){
                // console.log(this);
                var hb = document.querySelectorAll(".hideBox");
                if(event.target === line) {
                    hb.forEach(function(hBox){
                        hBox.style.display = "none";
                    })
                }
            })
        })
    }
    
    const calTab = document.querySelectorAll(".tabBtn ul li a");
    if(calTab) {
        calTab.forEach(function(ct){
            ct.addEventListener("click", function(){
                var e = document.querySelectorAll(".tabBtn ul li a");
                var idx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
                var box = document.querySelectorAll(".mainCont03 .rightArea .tabCont > div");
    
                e.forEach(function(item){
                    item.classList.remove("on");
                })
    
                this.classList.add("on");
    
                box.forEach(function(item){
                    item.style.display = "none";
                })
    
                box[idx].style.display = "block";
    
                // 클릭후 발동
                handleCalendarHeight();
            })
        })
    }   

    // 메인 & 복지캘린더 가로스크롤 너비 계산
    handleCalendarHeight();
    function handleCalendarHeight(){
        let calendarDom = document.querySelector('.calendarInner.pcType');
        if (calendarDom) {
            let _targetParent = calendarDom.querySelectorAll('.tabCont > div');
            _targetParent.forEach((tabDom)=>{
                let _target = tabDom.querySelectorAll('ul')[2];
                let _fakeBox = tabDom.querySelector('.fakeBox');

                // _target의 height를 계산
                let targetHeight = _target.scrollHeight;
                // console.log('Target Height:', targetHeight);
    
                // 조건에 따라 클래스 추가
                if (targetHeight > 454) {
                    _fakeBox.classList.add('addScroll');
                    // console.log('addScroll 추가');
                    // console.log(_target);
                    // console.log(_fakeBox);
                } else {
                    _fakeBox.classList.remove('addScroll');
                    // console.log('addScroll 삭제');
                    // console.log(_target);
                    // console.log(_fakeBox);
                }
            })
        }
    }
    
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

    if(qOpn){
        qOpn.addEventListener('click',function(){
            this.classList.add("hide");
            this.nextElementSibling.classList.add("on");
        });
    }
    
    if(qCls) {
        qCls.addEventListener('click',function(){
            document.querySelector(".quickOpen").classList.remove("hide");
            document.querySelector(".cptQuick").classList.remove("on");
        });
    }

    //mobile menu open, inner control and close function
    const mOpn = document.querySelector(".menu-wrap");
    const body = document.body;
    const mMenu = document.querySelector(".moMenuBox");
    const mInner = document.querySelectorAll(".moMenuBox .menuList .left ul li a");
    const mCls = document.querySelector(".closeBtn");

    if(mOpn) {
        mOpn.addEventListener("click",function(){
            body.style.overflow = "hidden";
            mMenu.style.display = "block";
        })
    }

    if(mInner) {
        mInner.forEach(function(menuItem){
            menuItem.addEventListener("click", function(){
                event.preventDefault();
    
                var menu = document.querySelectorAll(".moMenuBox .menuList .left ul li a");
                var idx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
                var loc = document.querySelectorAll(".moMenuBox .menuList .right .inner > div")
    
                loc.forEach(function(item) {
                    item.classList.remove("on");
                });
                loc[idx].classList.add("on");
                
                menu.forEach(function(item) {
                    item.classList.remove("on");
                });
                this.classList.add("on");
            })
        });
    }
    
    if(mCls){
        mCls.addEventListener("click", function(){
            body.style.overflow = "visible";
            mMenu.style.display = "none";
        })
    }

    //top button function
    
    if(window) {
        window.addEventListener("scroll", function() {
            var dh = document.documentElement.scrollHeight;
            var point = dh / 4;
            var point02 = dh / 8;
            var scr = window.scrollY;
            var topButton = document.querySelector(".topBtn");
            var quick = document.querySelector(".cptQuick");
        
            if (scr >= point) {
                topButton.classList.add("on");
            } else {
                topButton.classList.remove("on");
            }
    
            if(scr >= point02){
                quick.classList.add("scr");
            }else{
                quick.classList.remove("scr");
            }
        });
    }
    
    const tBtn = document.querySelector(".topBtn");
    if(tBtn) {
        tBtn.addEventListener("click", function(event){
            event.preventDefault(); // 기본 동작 방지
            
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    }
    

    //헤더메뉴 접근성 처리
    //*마지막 2-depth 메뉴 포커스 이탈시 박스 숨김 처리
    const dep02 = document.querySelector(".allLast");

    if(dep02){
        dep02.addEventListener("focusout", function(){
            hideAllDepth02();
            removeAllOnClasses();
        })
    }


    //2025.01.09 신청안내 전용 3depth 모바일메뉴 스크립트
    var locTit = document.querySelector(".locationTit");
    var target = document.querySelector(".ddCont > li > .selected");

    if (target && locTit) {
        var tText = target.textContent;
        locTit.textContent = tText;
    }

    //2025.01.10 tui datepicker focusing event
    var tui = document.querySelectorAll(".tui-datepicker-input > input[type='text']");
    var other01 = document.querySelectorAll(".btn");
    var other02 = document.querySelectorAll(".frmRdo label");
    var datepickers = document.querySelectorAll(".tui-datepicker");
    if(tui) {
        tui.forEach(function(input) {
            input.addEventListener("focus", function() {
                var datepickers = document.querySelectorAll(".tui-datepicker");
                datepickers.forEach(function(dp) {
                    dp.classList.add("tui-hidden");
                });
    
                var wrap = this.nextElementSibling;
                if (wrap) {
                    var cal = wrap.querySelector(".tui-datepicker");
                    if (cal) {
                        cal.classList.remove("tui-hidden");
                    }
                }
            });
        });
    }
    
    if(other01) {
        other01.forEach(function(btns) {
            btns.addEventListener("focus", function(){
                datepickers.forEach(function(dp2) {
                    dp2.classList.add("tui-hidden");
                });
            })
        })
    }
    
    if(other02) {
        other02.forEach(function(btns) {
            btns.addEventListener("focus", function(){
                datepickers.forEach(function(dp3) {
                    dp3.classList.add("tui-hidden");
                });
            })
        })
    }
});

//popup control
function popOpen(popId, event){ // 2025.01.03 - event 매개변수 추가
    let thispop = document.querySelector("#" + popId);
    let body = document.body;

    body.style.overflow = "hidden";
    thispop.classList.add("popOpen");
    thispop.setAttribute('tabindex',"0");
    thispop.target = event.target; // 2025.01.03 - 추가 
    thispop.focus();
}

function popClose(popId){
    // var trig = document.querySelector('.trigger'); :: 2025.01.03 - 삭제
    let thispop = document.querySelector("#" + popId);
    let body = document.body;

    body.style.overflow = "";
    thispop.classList.remove("popOpen");
    thispop.setAttribute('tabindex',"");
    // trig.focus(); :: 2025.01.03 - 삭제
    thispop.target.focus(); // 2025.01.03 - 추가 
}

