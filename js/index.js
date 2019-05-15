document.querySelector(".logo-heading").addEventListener("mouseover", e => {
    e.target.style.color =
        `rgb(${Math.round(Math.random() * 255)}, ` +
        `${Math.round(Math.random() * 255)}, ` +
        `${Math.round(Math.random() * 255)})`;
});

let tl = new TimelineLite();

document.querySelector(".logo-heading").addEventListener("click", e => {
    tl.to(e.target, 1, { rotation: 360 }).to(e.target, 1, { rotation: 0 });
});

let rotation = 0;

document.addEventListener("keydown", e => {
    if (e.keyCode === 37) {
        rotation -= 360;
    } else if (e.keyCode === 39) {
        rotation += 360;
    }

    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => TweenLite.to(img, 1, { rotation }));
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
