var popup=document.querySelector(".feedback"),btnShow=document.querySelector(".popup-btn"),btnClose=document.querySelector(".popup-close-btn"),mapShow=document.querySelector(".map-popup-show"),mapClose=document.querySelector(".map-btn-close"),map=document.querySelector(".map-content");btnShow.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("popups-show")}),btnClose.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("popups-show")}),mapShow.addEventListener("click",function(a){a.preventDefault(),map.classList.add("popups-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),map.classList.remove("popups-show")});
