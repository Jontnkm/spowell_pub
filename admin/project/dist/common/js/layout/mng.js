
document.addEventListener("DOMContentLoaded", function () {
    //좌메뉴 보임/숨김
    const snvSlide = document.querySelector(".sideSlide .btnSlide");
    snvSlide.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelector(".layoutContainer").classList.toggle("on");
    });


    //전체메뉴 클릭
    const allMenu = document.querySelector(".cptHeader .allMenu");
    const allMenuGroup = document.querySelector(".cptHeader .allMenuArea");
    allMenu.addEventListener("click",function(event){
        event.preventDefault();
        event.target.classList.toggle("on");
        fadeToggle(allMenuGroup,200);
    });
    
    //좌메뉴
    const menuOn = document.querySelector(".cptSnav .menuItem.on .subMenu");
    menuOn ? menuOn.style.display="block" : null;
    const snvMenus = document.querySelectorAll(".cptSnav .menuItem > a");
    snvMenus.forEach(function(snvMenu,idx2){
        snvMenu.addEventListener("click",function(event){
            const dep3Group = this.nextElementSibling;

            //클릭 메뉴 활성화
            document.querySelectorAll('.cptSnav .menuItem').forEach(function(element,idx3){
                if(idx2 == idx3){
                    element.classList.add("on");
                    if(element.querySelector("ul.subMenu")){slideDown(element.querySelector("ul.subMenu"),300)}
                }else{
                    element.classList.remove("on");
                    if(element.querySelector("ul.subMenu")){slideUp(element.querySelector("ul.subMenu"),300)}
                }
            });
        });
    });

});




