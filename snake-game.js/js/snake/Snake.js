class Snake {
        constructor(x = 5, y = 5, dir="up"){
            this.dir  = dir
        
            this.children = []
            this.children.push( new Head(x, y, dir))
            

            if (this.dir === "up") {
                this.children.push(new Body(x, y + 1, dir))
                this.children.push(new Tail(x, y + 2, dir))
            }
            else if (this.dir === "right") {
                this.children.push(new Body(x - 1, y, dir))
                this.children.push(new Tail(x - 2, y, dir))
            }
            else if (this.dir === "down") {
                this.children.push(new Body(x, y - 1, dir))
                this.children.push(new Tail(x, y - 2, dir))
            }
            else if (this.dir === "left") {
                this.children.push(new Body(x + 1, y, dir))
                this.children.push(new Tail(x + 2, y, dir))
            }
        }

    move(){
        this.children.reverse()
        this.children.forEach((s,i) =>{
            if (i == this.children.length -1 ){ /*why "-1" ???? */ 
                if(s.dir == "up"){ s.y-- }
                if(s.dir == "right"){ s.x++ }
                if(s.dir == "down"){ s.y++ }
                if(s.dir == "left"){ s.x-- }
            }else {
                if (this.children[i].y > this.children[i+1].y ){
                    s.dir = "up"
                }
                if (this.children[i].x < this.children[i+1].x ){
                    s.dir = "right"
                }
                if (this.children[i].y < this.children[i+1].y ){
                    s.dir = "down"
                }
                if (this.children[i].x > this.children[i+1].x ){
                    s.dir = "left"
                }

                s.x = this.children[i+1].x
                s.y = this.children[i+1].y
            }
        } )    
        this.children.reverse()
        boundaries()
    }    

    render(){
        let html = ""
            for(let n=0; n<this.children.length; n++){
                html += this.children[n].render()
            }
        return html
    }
}

function pushTheChildren(){
    
}

function boundaries(){
    if (snake.children[0].x > (map.width - 1)) {
        snake.children[0].x = 0
    }
    else if (snake.children[0].y > (map.height - 1)) {
        snake.children[0].y = 0
    }
    else if (snake.children[0].x < 0) {
        snake.children[0].x = (map.width - 1)
    }
    else if (snake.children[0].y < 0) {
        snake.children[0].y = (map.height - 1)
    }
}