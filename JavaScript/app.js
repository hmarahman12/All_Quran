"use strict";

//drop down menu ber
const menu_ber = document.querySelector(".menu i");
menu_ber.addEventListener('click', function(){
    menu_ber.classList.toggle("fa-times-circle");
    
    document.querySelector(".menu ul").classList.toggle("active");
    document.querySelector("li:nth-child(2)").addEventListener('click',function(){
        document.querySelector(".dorp_down ul").classList.toggle("clickblock");
        
    })
});
//drop down menu ber

//pages checkBox
document.querySelectorAll("input#button").forEach((singuleButton) =>{
    singuleButton.addEventListener('click', function(){
        document.querySelectorAll("input#wordmining").forEach((singalwordmining)=>{
            if(singalwordmining.checked){
                document.querySelectorAll("span.ban").forEach((e)=>{
                    e.classList.toggle("activee");
                });
            
                document.querySelectorAll("hr").forEach((e)=>{
                    e.classList.toggle("activee");
                });
               }
            
        })
    })
});

//array



if (window.innerWidth < 900) {
    console.log("Mobile view");
    document.querySelector(".flipbook").classList.toggle("addClass")
} else {
    console.log("Desktop view");
    document.querySelector(".mbaile-menu").innerHTML = '';
}











