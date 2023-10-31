class Body{
    constructor(x , y ,dir) {
        this.x = x
        this.y = y
        this.dir = dir
    }
    render() {
        let bgPositionX = 0;
        let bgPositionY = 0;
        if (this.dir === "up" || this.dir === "down") {
            bgPositionX = -128;
            bgPositionY = 192;
        } else if (this.dir === "right" || this.dir === "left") {
            bgPositionX = -64;
            bgPositionY = 0;
        }
        return `
        <div style="
            width: 64px;
            height: 64px;
            background-image: url(img/snake/snake-graphics.png);
            background-position: ${bgPositionX}px ${bgPositionY}px;
            position: absolute;
            top: ${this.y * 64}px; 
            left: ${this.x * 64}px;
            "></div>
        `
    }
}