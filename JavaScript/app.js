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

let allPages = {page_1:["hdhghddh Line=1","hdhghddh Line=2","hdhghddh Line=3","hdhghddh Line=4","hdhghddh Line=5","hdhghddh Line=6","hdhghddh Line=7","hdhghddh Line=8","hdhghddh Line=9","hdhghddh Line=10"],page_2:["hdhghddh 2"],page_3:["hdhghddh 3"],page_4:["hdhghddh 4"],page_5:["hdhghddh g5"],page_6:["hdhghddh 6"]}







