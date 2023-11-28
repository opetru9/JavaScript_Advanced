const fadeOut = [
    { opacity: 1 },
    { opacity: 0 }
]
const duration = 2000
const delay    = 2000

class Slide{
    constructor(url){
        this.url = url
    }
    
    render (rootSelector){
        let parentDiv = document.querySelector(rootSelector)
        this.slideElement = document.createElement('div')
        this.slideElement.className = 'slide'
            
            for(let y=0; y < 9; y++){
                for (let x = 0; x < 13; x++){
                    let sq = document.createElement('div')
                    sq.className = 'sq'
                    sq.style.backgroundImage = `url(${this.url})`
                    sq.style.top = `${y * 50}px`
                    sq.style.left = `${x * 50}px`
                    sq.style.backgroundPosition = ` -${x * 50}px -${y * 50}px`
    
                    this.slideElement.appendChild(sq)
                }
            }
    
        parentDiv.appendChild(this.slideElement)
        this.addEffect()
    }
    addEffect(){
        for (let i = 0; i < this.slideElement.children.length ; i++){
            const fadeOutAnimation = {
                duration: duration,
                delay: Math.random() * delay,
                easing: 'linear',
                fill:'forwards',
            }
            this.slideElement.children[i].animate(fadeOut, fadeOutAnimation)
        }

    }
}


