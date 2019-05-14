const blocks = document.querySelectorAll(".block");

class Block {
    constructor(element) {
        this.element = element;
        this.x = 0;
        this.isPressed = false;

        this.startPressing = this.startPressing.bind(this);
        this.stopPressing = this.stopPressing.bind(this);
        this.leave = this.leave.bind(this);
        this.moveBlock = this.moveBlock.bind(this);

        this.element.addEventListener("mousedown", this.startPressing);
        this.element.addEventListener("mouseup", this.stopPressing);
        // This doesn't work when the element is moving, because it triggers only if the mouse is moved.
        this.element.addEventListener("mouseleave", this.leave);
        this.element.addEventListener("mouseover", this.mouseover);
    }

    mouseover(e) {
        console.log('mouseover');
    }

    startPressing(e) {
        this.isPressed = true;
        requestAnimationFrame(this.moveBlock);
    }

    stopPressing(e) {
        this.moveToTop();
        this.isPressed = false;
    }

    leave(e) {
        console.log('left');
        if (e.buttons === 1) this.stopPressing(e);
    }

    moveBlock() {
        this.x += 10;
        this.element.style.left = `${this.x}px`;
        if (this.isPressed) requestAnimationFrame(this.moveBlock);
    }

    moveToTop() {
        this.element.remove();
        document.querySelector(".blocks").prepend(this.element);
    }
}

blocks.forEach(block => {
    new Block(block);
});
