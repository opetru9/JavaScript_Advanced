const rootElement = document.getElementById('local-root');

//   ---set---
const setData = (element , key , value) =>{
    element.dataset[key] = value
}
// setData(rootElement , "test" , 123)


//   ---get---

const getData = (element, key) => {
    let value = element.dataset[key] 
    console.log(value)
}
// getData(rootElement, "test")

// HM1:
//   ---remove---
function removeData(element, key) {
    delete element.dataset[key];
}
// removeData(rootElement, "test")