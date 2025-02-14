



document.addEventListener("DOMContentLoaded", function () {
    //파일찾기
    const uploadFiles = document.querySelectorAll(".fileBox .uploadBtn");
    uploadFiles.forEach(function(uploadFile,idx){
        uploadFile.addEventListener("change",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            let fileName;
            if(window.FileReader){
                fileName = this.files[0].name;
            } else {
                console.log("noFileReader");
                //var filename = $(this).val().split('/').pop().split('\\').pop();
                //var filename = this.val().split('/').pop().split('\\').pop();
            }
            fileBox.querySelector(".textBox").innerText = fileName;
            fileBox.classList.add("on");
        });
    });
    //파일찾기 취소
    const delFiles = document.querySelectorAll(".fileBox .fileDel");
    delFiles.forEach(function(delFile,idx){
        delFile.addEventListener("click",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            fileBox.querySelector(".uploadBtn").value = "";
            fileBox.querySelector(".textBox").innerText = "";
            fileBox.classList.remove("on");
        });
    });

    //팝업 내부 스크롤 시 타이틀 쉐도우 추가
    const scrollPops = document.querySelectorAll(".modPopup .popCont");
    scrollPops.forEach(function(scrollPop, idx){
        scrollPop.addEventListener("scroll",function(event){
            if(this.scrollTop >= 1){
                this.previousElementSibling.classList.add("shadow");
            }else{
                this.previousElementSibling.classList.remove("shadow");
            }

        });
    })

    //아코디언 20240627 추가
    const accordions = document.querySelectorAll(".modAccordion .accoArea");
    accordions.forEach(function(accodian,idx){
        accodian.querySelector(".accoTop").addEventListener("click", function(event){
            accodian.classList.toggle("on");
        });
    });
    
});

// ------------------------------- 탭메뉴 함수 ------------------------------- //
//모드 탭 함수
function tabMenuInit(){
    //모드탭의 수
    const modTabs = document.querySelectorAll(".modTab");
    modTabs.forEach(function(modTab,tabIdx,elements){
        const tabmenus = modTab.querySelectorAll(".item");
        const tabConts = modTab.querySelectorAll(".tabCont");

        //모드탭 내의 메뉴 수
        tabmenus.forEach(function(tabmenu,menuIdx,inElements){
            tabmenu.addEventListener("click", function(event){
                inElements.forEach(function(inElement){
                    inElement.classList.remove("on");
                    inElement.setAttribute("title", "탭메뉴");
                });
                this.classList.add("on");
                this.setAttribute("title", "선택 된 탭메뉴");
                tabConts.forEach(function(tabCont,contIdx){
                    tabCont.classList.remove("on");
                    if(menuIdx == contIdx){
                        tabCont.classList.add("on");
                    }
                })
            });
        });
    });
}

// ------------------------------- 팝업 함수 ------------------------------- //
//팝업 열기
function openPopup($popName){
    document.querySelector("#"+$popName).classList.add("on");
}
//팝업 닫기
function closePopup($popName){
    document.querySelector("#"+$popName).classList.remove("on");
}

//알럿
function openAlert($altName){
    document.querySelector("#"+$altName).classList.add("on");
}
function closeAlert($altName){
    document.querySelector("#"+$altName).classList.remove("on");
}


// ------------------------------- 모션 함수 ------------------------------- //

//fade in
function fadeIn(element, duration){
    let opacity = 0;
    element.style.display = "block";
    element.style.opacity = opacity;
    let action = setInterval(function(){
        opacity += 10/duration;
        element.style.opacity = opacity;
        if(opacity >= 1){
            clearInterval(action);
        }
    }, 10);
}

//fade out
function fadeOut(element, duration){
    let opacity = 1;
    element.style.opacity = opacity;
    let action = setInterval(function(){
        opacity -= 10/duration;
        element.style.opacity = opacity;
        if(opacity <= 0){
            clearInterval(action);
            element.style.display = "none";
        }
    }, 10);
}

//fade toggle
function fadeToggle(element, duration){
    element.style.display == "block" ? fadeOut(element, duration) : fadeIn(element, duration);
}

//slide function (slideUp)
function slideUp(element, duration) {
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideUpInterval = setInterval(function() {
        currentStep++;
        element.style.height = (height - stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideUpInterval);
            element.style.display = "none";
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

//slide function (slideDown)
function slideDown(element, duration) {
    element.style.display = "block";
    element.style.height = "0px"; // 이 부분을 수정하여 초기 높이를 0으로 설정합니다.
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideDownInterval = setInterval(function() {
        currentStep++;
        element.style.height = (stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideDownInterval);
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

// ------------------------------- 기타 함수 ------------------------------- //
//parents 엘리먼트 찾기
function parentsElementFind(my, findElement){
    let parentElement = my.parentNode;
    for(let i = 0;i<=20;++i){
        if(!parentElement.classList.contains(findElement)){
            parentElement = my.parentNode.parentNode;
        }else{
            return parentElement;
        }
    }
}

// ------------------------------- datePicker ------------------------------- //
//날짜
function datePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd'
        }
    });
}
//날짜 + 시간
function timePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd HH:mm A'
        },
        timePicker: true
    });
}
//datePicker("datepicker-input","wrapper");

//날짜 기간~기간
function datePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd'
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}
//날짜 기간+시간 ~ 기간+시간
function timePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd HH:mm',
        timePicker: true
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}

//datePickerTo("startpicker-input", "startpicker-container", "endpicker-input", "endpicker-container");


// Datepicker 한글 적용
/*
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    // yearSuffix: '년',
    showOtherMonths: true,
    changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
    changeYear: true // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
});
$(document).ready(function(){
    // Datepicker
    $( "#datepicker" ).datepicker();
    for (i = 0; i<21; i++) {
        $("#datepicker"+i).datepicker();
    }
})
*/

//테이블 열 행 고정

'use strict';
const StickyOnTable = {
    "getConfig":function(ta){
        let left = ta.getAttribute('data-fix-left');
        if(isNaN(left) || left == null){
            left = 0;
        }else{
            left = parseInt(left,10);
        }
        let top = ta.getAttribute('data-fix-top');
        if(isNaN(top) || top == null){
            top = 0;
        }else{
            top = parseInt(top,10);
        }
        let right = ta.getAttribute('data-fix-right');
        if(isNaN(right) || right == null){
            right = 0;
        }else{
            right = parseInt(right,10);
        }
        let bottom = ta.getAttribute('data-fix-bottom');
        if(isNaN(bottom) || bottom == null){
            bottom = 0;
        }else{
            bottom = parseInt(bottom,10);
        }
        return {
            top:top,
            left:left,
            right:right,
            bottom:bottom,
        }
    },
    "apply":function(ta){
        let table = ta.querySelector(':scope > table');
        if(!table){
            console.error("StickyOnTable.apply argument is invalid.");
            return;
        }
        let rowCellCounts = this.getRowCellCounts(table)
        this.setDataIdxforTable(table,rowCellCounts.rowCount,rowCellCounts.cellCount)
        this.reset(ta);
        let conf = Object.assign(this.getConfig(ta),rowCellCounts);
        conf.left = Math.min(conf.left,conf.cellCount)
        conf.top = Math.min(conf.top,conf.rowCount)
        this.applySticky(ta,conf);
    },
    "reset":function(ta){
        let table = ta.querySelector(':scope > table');
        if(!table){
            console.error("StickyOnTable.reset argument is invalid.");
            return;
        }
        table.querySelectorAll(':scope > * > tr > .fix-top ,:scope > * > tr > .fix-left,:scope > * > tr > .fix-bottom,:scope > * > tr > .fix-right').forEach((td, i) => {
            td.classList.remove('fix-top','fix-left','fix-bottom','fix-right')
            td.style.top = null;
            td.style.left = null;
            td.style.bottom = null;
            td.style.right = null;
        });
    },
    "getRowCellCounts":function(table){
        let rowCount = table.rows.length;
        let cellCount = 0;
        let tr,td;
        if(table.rows[0]){
            for(const td of table.rows[0].cells){
                cellCount+=td.colSpan;
            }
        }

        return {rowCount:rowCount,cellCount:cellCount}
    },
    "setDataIdxforTable":function(table,rowCount,cellCount){
        let arr = new Array(rowCount*cellCount);
        for(const tr of table.rows){
            let st = tr.rowIndex * cellCount;
            for(const td of tr.cells){
                if(st >= arr.length ){ break; }
                td.__fix_inited = true;
                while(arr[st]!==undefined ){ st++ }
                arr[st] = td;
                for(let i=2,m=td.colSpan;i<=m;i++){ arr[st+(i-1)] = td; }
                for(let i=2,m=td.rowSpan;i<=m;i++){ arr[st+cellCount*(i-1)] = td; }
            }
        };
        for(let i=0,m=arr.length;i<m;i++){
            const td = arr[i];
            if (!td || !td.__fix_inited) continue;  // 잘못된 인덱스를 건너뛰기

            delete td.__fix_inited;
            td.setAttribute('data-row-idx', Math.floor(i / cellCount));  // 행 인덱스
            td.setAttribute('data-cell-idx', i % cellCount );  // 열 인덱스
            console.log("i = " + i + " / cellCount = " + cellCount);
        }
    },
    "applySticky":function(div,conf) {
        let table = div.querySelector(':scope > table');
        let tableTable = table.getBoundingClientRect();

        let tops = new Array(conf.rowCount);
        for(let i2=0,m2=conf.top;i2<m2;i2++){
            for(const td of table.rows[i2].cells){
                //셀마다 getBoundingClientRect() 할 경우 느려지기에 캐싱처리한다.
                const idx = parseInt(td.getAttribute('data-row-idx'),10);
                let topTd = tops[idx];
                if(topTd===undefined){
                    topTd = td.getBoundingClientRect().top;
                    tops[idx] = topTd;
                }
                let top = topTd - tableTable.top;
                td.classList.add('fix-top');
                td.style.top = top+'px';
            }
        }
        let lefts = new Array(conf.cellCount);
        for(let i2=0,m2=conf.left;i2<m2;i2++){
            table.querySelectorAll(':scope td[data-cell-idx="'+i2+'"] , :scope th[data-cell-idx="'+i2+'"]').forEach((td, i) => {
                const idx = parseInt(td.getAttribute('data-cell-idx'),10);
                let leftTd = lefts[idx];
                    leftTd = td.getBoundingClientRect().left;
                    lefts[idx] = leftTd;
                let left = leftTd - tableTable.left;
                td.classList.add('fix-left');
                td.style.left = left+'px';
            });
        }

        // console.log(ta.);
        let bottoms = new Array(conf.rowCount);
        for(let i2=conf.rowCount-conf.bottom,m2=conf.rowCount;i2<m2;i2++){
            for(const td of table.rows[i2].cells){
                //셀마다 getBoundingClientRect() 할 경우 느려지기에 캐싱처리한다.
                const idx = parseInt(td.getAttribute('data-row-idx'),10);
                let bottomTd = bottoms[idx];
                if(bottomTd===undefined){
                    bottomTd = td.getBoundingClientRect().bottom;
                    bottoms[idx] = bottomTd;
                }
                let bottom = tableTable.bottom-bottomTd ;
                td.classList.add('fix-bottom');
                td.style.bottom = bottom+'px';
            };
        }

        let rights = new Array(conf.cellCount);
        for(let i2=conf.cellCount-conf.right,m2=conf.cellCount;i2<m2;i2++){
            table.querySelectorAll(':scope td[data-cell-idx="'+i2+'"] , :scope th[data-cell-idx="'+i2+'"]').forEach((td, i) => {
                const idx = parseInt(td.getAttribute('data-cell-idx'),10);
                let rightTd = rights[idx];
                if(rightTd===undefined){
                    rightTd = td.getBoundingClientRect().right;
                    rights[idx] = rightTd;
                }
                let right = tableTable.right - rightTd;
                td.classList.add('fix-right');
                td.style.right = right+'px';
            });
        }
    }


}
document.addEventListener("DOMContentLoaded", function () {
    StickyOnTable.apply(document.querySelector("body")) //일부로 에러냄
    document.querySelectorAll('.fix').forEach((item, i) => {
        StickyOnTable.apply(item);
    });
})