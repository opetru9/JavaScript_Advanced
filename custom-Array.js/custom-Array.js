
class NumberContainer {
// HW1:
    constructor(val_0, val_1, val_2){
        if(val_0){
            this.val_0 = Number(val_0)
        }
        
        if(val_1){
            this.val_1 = Number(val_1)
        }
        
        if(val_2){
            this.val_2 = Number(val_2)
        }
        this.max_Length = 3
    }

    get length(){
        for (let i = 0; i < this.max_Length; i++){
            if (this[`val_${i}`] == undefined){
                return i
            }
        }
        return 3
        // if (this.val_0 == undefined)
        //     return 0
        //  else if (this.val_1 == undefined)
        //     return 1
        //  else if (this.val_2 == undefined) 
        //     return 2
        //  else 
        //     return 3
    }
// HW2:
    push( number ){
        let parsedNumber = parseFloat(number)
        if (!isNaN(parsedNumber)){

            if (this.length == this.max_Length){
                return console.error('Container FULL !!')
            }
            
            this[`val_${this.length}`] = parsedNumber

        }else
         console.error("Sorry , the argument you use is NaN")
    }
    
    forEach (cb){
        for (let i=0; i< this.length; i++){
            cb(this[`val_${i}`])
        }
        // if (this.length > 0)
        //     cb(this.val_0)
        // if (this.length > 1)
        //     cb(this.val_1)
        // if (this.length > 2)
        //     cb(this.val_2)
    }
// HW3:
    forEachReverse(cb){
        for (let i = this.length; i >= 0; i--) {
            cb(this[`val_${i}`])
        }
        // if (this.length > 0)
        //     cb(this.val_2)

        // if (this.length > 1)
        //     cb(this.val_1)

        // if (this.length > 2)
        //     cb(this.val_0)
    }
// HW4:
    reduce (cb){
        let acc = 0
        for (let i = 0; i < this.length; i++){
            if (this.length > i)
            acc = cb(this[`val_${i}`], acc)
        }
        // if (this.length > 0)
        //     acc = cb(this.val_0 , acc)
    
        // if (this.length > 1)
        //     acc = cb(this.val_1 , acc)
    
        // if (this.length > 2)
        //     acc = cb(this.val_2 , acc)

        //     return acc
    }
    // .reduce( (n, acc) => n + acc) *for example
}

let myArray = new NumberContainer(2,'2.5')

myArray.push(3)

console.log(myArray)

// myArray.forEach((e) =>{
//     console.log(e)
// })

// myArray.forEachReverse((e) =>{
//     console.log(e)
// })

myArray.reduce((e, a) =>{
    let n = e + a
    console.log(n)
    return n
})


