const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove",(e)=>{
    mouses.forEach((mouse)=>{
        mouse.style.top = e.y + "px";
        mouse.style.left = e.x + "px";
    })
})

// window.addEventListener("mousemove",(e)=>{
//     curseur.style.top = e.y + "px" ;
//     curseur.style.left = e.x + "px" ;

//     mouse1.style.top = e.y + "px" ;
//     mouse1.style.left = e.x + "px" ;

//     mouse2.style.top = e.y + "px" ;
//     mouse2.style.left = e.x + "px" ;
// })