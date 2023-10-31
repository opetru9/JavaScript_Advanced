class Rat {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    render() {
        return `
        <div style="
            width: 62px;
            height: 62px;
            background-image: url(img/objects/rat.png);
            background-size: cover;
            position: absolute;
            top: ${this.y * 64}px; 
            left: ${this.x * 64}px;
            ">
        </div>`
    }
}