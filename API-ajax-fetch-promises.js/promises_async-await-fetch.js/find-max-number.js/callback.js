
const getNumbers = (cb , size = 10) => {
    let numbersArray = []
    setTimeout(()=>{
        // HW2:
        // setInterval(()=>{
        while(numbersArray.length < size){
                numbersArray.push( Math.ceil(-5 + Math.random() *10) )
                cb(numbersArray)
            }
            // },500)
    },2000)
    return numbersArray 
}
const maxNumber = (cb , numbersArray) =>{
    // let maxNumber = numbersArray[0]
    // let i = 0;
    // while (  i < numbersArray.length ){
    //     i++
    //     if (numbersArray[i]> maxNumber){
    //         maxNumber = numbersArray[i]
    //     }
    // }

    // HM-1:
    setTimeout(()=>{
        let maxNumber = Math.max(...numbersArray)
        if (numbersArray.length === 0 ){
            return undefined
        }
        cb(maxNumber)
    },2000)
}
const renderNumber = (number) =>{
    console.log(">>>>", number)
}

// vvvvvvvvvvvvvvvvvvvvvvvvv

getNumbers((numbersArray) => {
    maxNumber(renderNumber, numbersArray)
})