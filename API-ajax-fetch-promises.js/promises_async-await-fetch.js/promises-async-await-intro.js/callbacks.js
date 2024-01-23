
let adArray = ["CallBacks", "Promises", "Async/Await"]

// HM1*
const showAd = (adArray) => {
    let i = 0
    setInterval(()=>{
        console.clear()
        console.log(adArray[i])
        i++
        if (i > adArray.length -1){
            i=0}
        },2000)
}




// const showAd = () => {
//     console.clear()
//     console.log("CallBacks")
//     setTimeout(() => {
//         console.clear()
//         console.log("Promises")
//         setTimeout(() => {
//             console.clear()
//             console.log("Async/Await")
//             setTimeout(() => {
//                 console.clear()
//             }, 1000)
//         }, 1000)
//     }, 1000)
// };