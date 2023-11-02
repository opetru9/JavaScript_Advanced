class Head {
    constructor(x , y ,dir="up") {
        this.x = x
        this.y = y
        this.dir = dir
        
    }

    render(){
        
        let bgPositionX = 0;
        let bgPositionY = 0;
        if (this.dir === "up") {
            bgPositionX = -192;
            bgPositionY = 0;
        } else if (this.dir === "right") {
            bgPositionX = -256;
            bgPositionY = 0;
        } else if (this.dir === "down") {
            bgPositionX = -256;
            bgPositionY = 192;
        } else if (this.dir === "left") {
            bgPositionX = -192;
            bgPositionY = 192;
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
    