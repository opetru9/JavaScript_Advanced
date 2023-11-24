const options = ["Political","Economics","IT news","Sport","Science"]
const btn = document.querySelector('#btn-subscribe')

const init = ()=> {
    const inputName = document.getElementById('inputName')
    inputName.setAttribute('pattern', "^[A-Z][a-z]+ [A-Z][a-z]+$")
    const inputEmail = document.getElementById('inputEmail')
    inputEmail.setAttribute('pattern', "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")

    btn.setAttribute('disabled',true)

    renderOptions(options)

    let agreeCheckbox = document.querySelector('[name = "terms"]')
    agreeCheckbox.onchange = agreeCheckboxHandler

}

const renderOptions= (options) => {
    let optionsDiv = document.getElementById('options')

    options.forEach(option => {
        const idCheck = `${option.toLocaleLowerCase().replace(' ','_')}`
        let input = document.createElement('input')
        input.setAttribute('type','checkbox')
        input.setAttribute('class', 'btn-check')
        input.setAttribute('id', idCheck)
        input.setAttribute('name', idCheck)

        let label = document.createElement('label')
        label.setAttribute('class', 'btn btn-outline-primary btn-sm me-2')
        label.setAttribute('for', idCheck)
        
        let text = document.createTextNode(option)

        let br = document.createElement('br')
        optionsDiv.appendChild(input)
        optionsDiv.appendChild(label)
        optionsDiv.appendChild(text)
        optionsDiv.appendChild(br)
    })
}

const agreeCheckboxHandler = () =>{
    let agreeCheckbox = document.querySelector('[name = "terms"]')
    if(agreeCheckbox.checked){
        btn.removeAttribute('disabled')
        renderAgreementText("You've agreed to the terms and conditions")
        renderSuccessBtn()
    }else{
        btn.setAttribute('disabled', true)
        renderAgreementText("You must agree with the terms and conditions")
        renderSecondaryBtn()
    }
}

const renderAgreementText=(text)=>{
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    
    agreeLabel.removeChild(agreeLabel.lastChild)
    agreeLabel.appendChild(textNode)
}

function renderSuccessBtn(){
    btn.removeAttribute('class')
    btn.setAttribute('class','btn btn-success')
}
function renderSecondaryBtn(){
    btn.removeAttribute('class')
    btn.setAttribute('class','btn btn-secondary')
}

window.onload = init

btn.onclick = subscribe
function subscribe() {
    alert()
}