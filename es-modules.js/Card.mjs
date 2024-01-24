// User Interface (UI) Card component

class Card {
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }

    render(rootElement) {
        // HW
        let wrapperDiv = document.createElement('div')
            wrapperDiv.style.color = `${this.color}`
            wrapperDiv.classList.add('card')
        rootElement.appendChild(wrapperDiv)

        let titleElement = document.createElement('h3')
            titleElement.innerText = `${this.title}`
        wrapperDiv.appendChild(titleElement)

        let bodyElement = document.createElement('p')
            bodyElement.innerText = `${this.body}`
        wrapperDiv.appendChild(bodyElement)

    }
}

export {Card}