let map = new Map(9,9)
let snake = new Snake(2,4,"down")
let apple = new Apple(3,4)
let apple2 = new Apple(7,6)
let rat1 = new Rat(8,2)
let rat2 = new Rat(1,3)
let rock1 = new Rock(8,3)
let rock2 = new Rock(1,6)

map.children.push(snake)
map.children.push(apple)
map.children.push(apple2)
map.children.push(rat1)
map.children.push(rat2)
map.children.push(rock1)
map.children.push(rock2)

map.render(container)

const userAction = (e)=> {
    switch (e.code){
        case "ArrowUp": turn("up");break;
        case "ArrowRight": 
            turn("right")
            turnTheBodyOnTheRight()
        ; break;
        case "ArrowDown": turn("down");break;
        case "ArrowLeft":turn("left");break;
    }
}
function turn(direction) {

    if (direction === "up") {
        snake.children[0].dir = "up";
    } else if (direction === "right") {
        snake.children[0].dir = "right";
    } else if (direction === "down") {
        snake.children[0].dir = "down";
    } else if (direction === "left") {
        snake.children[0].dir = "left";
    }
}

setInterval(  ()=>{
    snake.move()
    map.render(container)
},1000)

// function turnTheBodyOnTheRight() {
//     snake.children[1].render() = 
//     return `
//     <div style="
//             width: 64px;
//             height: 64px;
//             background-image: url(img/snake/snake-graphics.png);
//             background-position:0px 0px;
//             "></div>
//     `
// }