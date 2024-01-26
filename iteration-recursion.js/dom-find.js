const rootElement = document.getElementById('local-root');

const find = (element, what) => {
    
    
    let content = element.childNodes[0].textContent.trim();
    console.log(`visiting: ` + content);

    if (what === content) {
        return element;
    } 

    let found;

    Array.from(element.children).forEach(child => {

        // let found = find(child, what);
        //     if (found) {
        //         foundElement = found;
        //     }
        // }

        // or----:

        found = find(child, what) ?? found
        //* "??"- coalescing operator, give me the first not null data

    });
    return found;
};

let foundFunction = find(rootElement, '1.1')
console.log(`Found it in element`, foundFunction)