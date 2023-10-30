class Apple {
    constructor(x=0,y=0){
        this.x=x
        this.y=y
    }
    render(root) {
        root.innerHTML += `
        <div class="appleClass" style="
            width: 62px;
            height: 62px;
            background-image: url(img/snake/snake-graphics.png);
            background-position: 0 -192px;
            position: absolute;
            top: ${this.y * 64+5}px; 
            left: ${this.x * 64+5}px;
            ">
        </div>`
    }
}