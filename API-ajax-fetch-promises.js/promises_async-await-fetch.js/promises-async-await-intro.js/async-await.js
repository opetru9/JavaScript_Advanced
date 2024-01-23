
// the same example with async-await:

function showCallBacks() {
    return new Promise((resolve, reject) => {
        console.log("CallBacks");
        setTimeout(() => {
            console.clear();
            resolve();
        }, 1000);
    });
}

function showPromises() {
    return new Promise((resolve, reject) => {
        console.log("Promises");
        setTimeout(() => {
            console.clear();
            resolve();
        }, 1000);
    });
}

let pShowAdAsync = async () => {

    let firstAd = await showCallBacks()
    let secondAd = await showPromises()
    console.log("Async/Await")

}
