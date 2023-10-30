class Map {
    constructor(width=10 ,height=10){
        this.width = width
        this.height = height

        this.objects = []
    }

    render(root){
        let html = `<div id="map" style= "
        width: ${this.width*64}px;
        height: ${this.height*64}px;
        ">`
        
        for (let x = 0; x < this.width; x++){
            for (let y = 0; y < this.height; y++) {
                html += `<div></div>`} 
            }
        
        html += `</div>`
        root.innerHTML += html
    }
}

// HW2*
// for (let x = 0; x < this.width - 1; x++) {
//     html += `<div class="x" style="
//                     width: ${this.width * 63.75}px;
//                     height: 2px;
//                     position: absolute;
//                     top:${(64 * x) + 64}px"
//                     ></div>`
// }
// for (let y = 0; y < this.height - 1; y++) {
//     html += `<div class="y" style="
//                     height: ${this.height * 63.75}px;
//                     width: 2px;
//                     margin-left:62px"
//                     ></div>`
// }

