document.querySelector(".logo-heading").addEventListener("mouseover", e => {
    e.target.style.color =
        `rgb(${Math.round(Math.random() * 255)}, ` +
        `${Math.round(Math.random() * 255)}, ` +
        `${Math.round(Math.random() * 255)})`;
});

document.querySelector(".logo-heading").addEventListener("click", e => {
    
});

document.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        // ill do this with GSAP
    }
});

document.addEventListener("wheel", e => {
    const p = document.createElement("p");
    p.textContent = "lol";
    document.body.appendChild(p);
});

var dragged;

document.addEventListener("dragstart", e => {
    dragged = e.target;
    e.target.style.opacity = 0.5;
});

document.addEventListener("dragend", e => {
    e.target.style.opacity = "";
});

document.addEventListener("dragover", e => {
    e.preventDefault();
});

document.addEventListener("dragenter", e => {
    e.target.style.background = "purple";
});

document.addEventListener("dragleave", e => {
    e.target.style.background = "";
});

document.addEventListener("drop", e => {
    e.preventDefault();
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
});
