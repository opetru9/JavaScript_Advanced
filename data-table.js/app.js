// CRUD - Create Render Update Delete

// -------render data :------------
const newElement = (type, classList = [], children = []) =>{
    let element = document.createElement(type);

    classList.forEach(className => element.classList.add(className));
    
    children.forEach(child => element.appendChild(child));

    return element ;
}

const newTextNode = (text, parent = document) => parent.createTextNode(text);

// ----------CRUD -------------
// -table
const showAsTable = (data, selector)=>{
    let root = document.querySelector(selector);
    root.innerHTML = ''
     
    root.appendChild(
        newElement('table',['data-table'],
            data.map(user => newElement('tr', [],
                Object.values(user).map(value => newElement('td',[],[newTextNode(value)]))
            ))
        )
    )
}

// -button
// -??????????
// let buttonElement = document.querySelector('.add_user_btn')
//     buttonElement.addEventListener("click" , addUser)
// -??????????

function addUser(data=data, selector = '.data-table'){
    let root = document.querySelector(selector);
    root.appendChild(
        newElement('tr',[],
            Object.keys( data[0] ).map( (key,index) =>{ 
                
                let input = newElement('input',[`table-input-${index}`])  
                input.setAttribute('placeholder',key)
                input.setAttribute('required', 'required')
                if (key == 'birthDate' ){
                    input.setAttribute('type', 'date')
                }
                let children = [input]

                if (index === Object.keys(data[0]).length - 1){
                    let btn = newElement('button',['save_btn'])
                    btn.innerText = 'Save'
                    children.push(btn)
                    
                    btn.addEventListener('click', saveNewData)
                    console.log(input.value)
                }
                
                return newElement('td',[],children)
            })
        )
    )
    
    function saveNewData(){
        inputName = document.querySelector('.table-input-0')
        inputNameValue = inputName.value
        if (inputNameValue.length == 0){
            alert("Please insert the new user's name")
        }

        inputBirthDate = document.querySelector('.table-input-1')
        inputBirthDateValue = inputBirthDate.value
        if (inputBirthDateValue.length == 0) {
            alert("Please insert the new user's Birth Date")
        }

        inputBlocked = document.querySelector('.table-input-2')
        inputBlockedValue = inputBlocked.value
        if (inputBlockedValue.length == 0) {
            alert("Please insert the new user's block Status")
        }
        
        if (inputNameValue.length !== 0 &&
            inputBirthDateValue.length !== 0 &&
            inputBlockedValue.length !== 0){
                let newUser = {
                    name: inputNameValue,
                    birthDate: inputBirthDateValue,
                    blocked: inputBlockedValue
                }
                data.push(newUser)
                console.log(data)
        
                showAsTable(data, 'section')
        }
    }
}

function error(){
    alert('insert the new User data!')
}
showAsTable(data,'section')