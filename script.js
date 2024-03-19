let elem = document.querySelectorAll(".elem");
elem.forEach(function(eve){
    eve.addEventListener("mouseenter", function(){
        eve.childNodes[3].style.opacity = 1;
    })
    eve.addEventListener("mouseleave", function(){
        eve.childNodes[3].style.opacity = 0;
    })
    eve.addEventListener("mousemove", function(dets){
        eve.childNodes[3].style.left = dets.x + "px";
        // eve.childNodes[3].style.top = dets.y + "px";
    })
})
