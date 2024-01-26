const rootElement = document.getElementById('local-root');

const visit = (element) =>{
    
    let content = element.childNodes[0].textContent.trim()
    console.log(`visiting: ` + content)

    // HW2:
    // let contentArray = []
    // for(let i=0 ; i<element.children.length; i++){
    //     contentArray.push(element.children[i])
    // }
    // contentArray.forEach( e => {
    //     visit (e)
    // })

    // --or--:

    Array.from(element.children).forEach(child => {
            visit(child);
        });
}
visit(rootElement)



// HW1:
// element.childNodes[0].textContent.trim()
// 1.this row says: give me the content (including elements, text,
//     or even other nodes without white-spaces,
//      (thanks to 'trim()')) of the first child nodes of 'element'. 
//  