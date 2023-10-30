class Snake {
    constructor(){
        this.head = new Head()
        this.body = new Body()
        this.tail = new Tail()
    }
    render(){
        this.head.render(container)
        this.body.render(container)
        this.tail.render(container)
    }
}