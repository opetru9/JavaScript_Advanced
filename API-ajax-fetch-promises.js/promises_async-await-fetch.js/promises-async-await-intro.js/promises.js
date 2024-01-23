
const showAd = () => {
    console.clear()
    console.log("CallBacks")
    setTimeout(() => {
        console.clear()
        console.log("Promises")
        setTimeout(() => {
            console.clear()
            console.log("Async/Await")
            setTimeout(() => {
                console.clear()
            }, 1000)
        }, 1000)
    }, 1000)
};
//        v
//        v
//        v
// the same example with promises:
let pShowAd = new Promise((resolve, reject)=>{
    console.clear()
    console.log("CallBacks")
    setTimeout(() => {
        console.clear()
        resolve()
    }, 1000)
}).then(()=>{
    console.log("Promises")
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            console.clear()
            resolve()
        }, 1000)
    })
}).then(()=>{
    console.log("Async/Await")
})
