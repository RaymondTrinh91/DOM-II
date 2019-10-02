// Your code goes here
const heroImage = document.querySelector(".intro img");
heroImage.addEventListener('click', ()=>{
    heroImage.style.display = "none";
})

document.querySelectorAll("nav a").forEach(element => {
    element.addEventListener("mouseenter", ()=> {
        element.style.color = "red";
    });
    element.addEventListener("mouseleave", ()=>{
        element.style.color = "black";
    })
    element.addEventListener("click", (event)=>{
        console.log("stopped");
        event.preventDefault();
    })
})

document.querySelectorAll("p").forEach(element => {
    element.addEventListener("mouseover", ()=>{
    element.style.display = "none";
    })
    element.addEventListener("mouseout", ()=>{
        element.style.display = "inline";
    })
})

const pictures = document.querySelector(".img-content img");
pictures.addEventListener("dblclick", ()=>{
    pictures.style.display = "none";
})

const picture2 = document.querySelector(".inverse-content .img-content img");
picture2.addEventListener("drag", ()=>{
    picture2.style.display = 'none';
})
picture2.addEventListener("dragend", ()=>{
    picture2.style.display = "inline";
})

const picture3 = document.querySelector(".content-destination img");
picture3.addEventListener("dragstart", ()=>{
    picture3.style.transform = 'scale(0.5)';
})
picture3.addEventListener("mousemove", ()=>{
    picture3.style.transform = "scale(1.0)";
})

const contain = document.querySelector(".intro");
contain.addEventListener("click", ()=>{
    contain.style.backgroundColor = "purple";
})

const title = contain.querySelector("h2");
title.addEventListener("click", (event)=>{
    title.style.backgroundColor = "red";
    event.stopPropagation();
})

