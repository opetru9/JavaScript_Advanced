class Carousel {
    constructor(rootSelector, slides) {
        this.rootSelector = rootSelector
        this.slides = slides
    }
    render(slideIndex){
        this.slides[slideIndex].render(this.rootSelector)
        colorjs.prominent(this.slides[slideIndex].url,
             { amount: 3 }
             ).then(color => {
            document.querySelector('.carousel').style.backgroundColor = `
            rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})`;
            document.querySelector('.slide').style.borderColor = `
            rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`;
        })
        colorjs.average(this.slides[slideIndex].url,
             { amount: 1 }
             ).then(color => {
            document.querySelector('.slide').style.borderColor = `
            rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            document.querySelectorAll('.btn .fa-regular').forEach(element => {
                element.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            })
        })
    }
    next (){
        this.slides.push(this.slides.shift())
        this.render(0)
    }
    prev() {
        this.slides.unshift(this.slides.pop());
        this.render(0);
    }
}

const carousel = new Carousel ('.carousel',[
        new Slide('img/i1.jpg'),
        new Slide('img/i2.jpg'),
        new Slide('img/i3.jpg')
    ])

carousel.render(0)


// buttons---
const nextBtn = document.querySelector('.btn-next')
nextBtn.onclick = () => carousel.next()
const prevBtn = document.querySelector('.btn-prev')
prevBtn.onclick = () => carousel.prev()
// ---

