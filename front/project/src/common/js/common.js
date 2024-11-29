document.addEventListener("DOMContentLoaded", function () {
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

    //드롭다운
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

    //탭메뉴
    var list1 = document.querySelectorAll(".calDiv1 ul li");
    var listLength1 = list1.length;
    var list2 = document.querySelectorAll(".calDiv2 ul li");
    var listLength2 = list2.length;
    
    console.log(listLength1);
    console.log(listLength2);

    list1.forEach(function(item1) {
        item1.style.width = "calc(100% / " + listLength1 + ")";
    });

    list2.forEach(function(item2) {
        item2.style.width = "calc(100% / " + listLength2 + ")";
    });
    
});

// Popup Open
function popOpen(popId){
    let thispop = document.querySelector("#" + popId);

    thispop.classList.add("popOpen");
}

// Popup Close
function popClose(popId){
    let thispop = document.querySelector("#" + popId);

    thispop.classList.remove("popOpen");
}

// 표 높이 조절
$(document).ready(function(){
    var wWid = $(window).width();    
    if(wWid < 1023){
        $(".cptTable .combine").each(function(){
            const h = $(this).find("td").outerHeight();
            $(this).find("th").css("height", `${h}px` );
            $(this).find("th").css("line-height", `${h}px` );
        })
    }

    $(window).resize(function(){
        var wWid2 = $(window).width(); 
        if (wWid2 < 767){
            $(".cptTable .combine").each(function(){
                const h = $(this).find("td").outerHeight();
                $(this).find("th").css("height", `${h}px` );
                $(this).find("th").css("line-height", `${h}px` );
            })
        }
    })
})

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

//datepicker
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