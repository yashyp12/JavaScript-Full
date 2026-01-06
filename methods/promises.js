let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert("i was clicked")
    document.querySelector(".box").innerHTML="enjyo"
})

let count = 0
let counter = document.body.firstElementChild[0].textContent  

let p1 = new Promise();