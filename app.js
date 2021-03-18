let right = document.querySelector(".right");
let left = document.querySelector(".left");


right.addEventListener('mouseover',function(){
    
    right.classList.add('grow')
    left.classList.add("shrink-left")
})
right.addEventListener('mouseout',function(){
    
    right.classList.remove("grow")
    left.classList.remove("shrink-left")
})







