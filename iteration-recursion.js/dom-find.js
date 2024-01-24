const rootElement = document.getElementById('local-root');

const find = (element, what) => {
    let foundElement;
    
    let content = element.childNodes[0].textContent.trim();
    console.log(`visiting: ` + content);

    if (what === content) {
        return element;
    } 

    Array.from(element.children).forEach(child => {

        let found = find(child, what);
            if (found) {
                foundElement = found;
            }
        }
    );
    return foundElement;
};

let foundFunction = find(rootElement, '1.1')
console.log(`Found it in element`, foundFunction)