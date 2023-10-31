class Snake {
        constructor(x = 5, y = 5, dir="up"){
            this.x    = x
            this.y    = y
            this.dir  = dir
        
            // dirCondition()
            if (this.dir === "up") {
                this.head = new Head(x, y, dir)
                this.body = new Body(x, y + 1, dir)
                this.tail = new Tail(x, y + 2, dir)
            }
            else if (this.dir === "right") {
                this.head = new Head(x, y, dir)
                this.body = new Body(x - 1, y, dir)
                this.tail = new Tail(x - 2, y, dir)
            }
            else if (this.dir === "down") {
                this.head = new Head(x, y, dir)
                this.body = new Body(x, y - 1, dir)
                this.tail = new Tail(x, y - 2, dir)
            }
            else if (this.dir === "left") {
                this.head = new Head(x, y, dir)
                this.body = new Body(x + 1, y, dir)
                this.tail = new Tail(x + 2, y, dir)
            }
        }
    render(){
        return (  this.head.render()+
                  this.body.render()+
                  this.tail.render()  )
    }
}
// function dirCondition(){
//     if (dir = "up") {
//         this.head = new Head(x, y, dir)
//         this.body = new Body(x, y + 1, dir)
//         this.tail = new Tail(x, y + 2, dir)
//         }
//         else if (dir = "right") {
//             this.head = new Head(x, y, dir)
//             this.body = new Body(x - 1, y, dir)
//             this.tail = new Tail(x - 2, y, dir)
//         }
//         else if (dir = "down") {
//             this.head = new Head(x, y, dir)
//             this.body = new Body(x, y - 1, dir)
//             this.tail = new Tail(x, y - 2, dir)
//         }
//         else if (dir = "left") {
//             this.head = new Head(x, y, dir)
//             this.body = new Body(x + 1, y, dir)
//             this.tail = new Tail(x + 2, y, dir)
//         }
//     }