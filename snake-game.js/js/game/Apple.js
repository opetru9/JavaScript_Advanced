class Apple {
    constructor( x, y){
        this.x=x
        this.y=y
    }
    render() {
        return `
        <div class="appleClass" style="
            width: 62px;
            height: 62px;
            background-image: url(img/snake/snake-graphics.png);
            background-position: 0 -192px;
            position: absolute;
            top: ${this.y * 64}px; 
            left: ${this.x * 64}px;
            ">
        </div>`
    }
}