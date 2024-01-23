function pGetNumbers(size = 10) { 
    return new Promise((resolve, reject) =>{
        let numbersArray = []
        setTimeout(() => {
            while (numbersArray.length < size) {
                numbersArray.push(Math.ceil(-5 + Math.random() * 10))
                resolve(numbersArray)
            }
        }, 2000)
        })
}

function pMaxNumber(numbersArray) {
    return new Promise ((resolve , reject)=> {
        setTimeout(() => {
            let maxNumber = Math.max(...numbersArray)
            if (numbersArray.length === 0) {
                return undefined
            }
            resolve(maxNumber)
        }, 2000)
    })
}

function pRenderNumber(maxNumber){
    return new Promise ((resolve ,reject)=>{
        let result = ''
        setTimeout(() => {
            result = `Number:${maxNumber}`
            resolve(result)
        }, Math.random() * 1000)
    })
}

// vvvvvvvvvvvvvvvvvvvvvvvvv

pGetNumbers()

    .then( numbersArray => pMaxNumber(numbersArray)) 

        .then( maxNumber    => pRenderNumber(maxNumber))

            .then( result       => console.log(result))        



