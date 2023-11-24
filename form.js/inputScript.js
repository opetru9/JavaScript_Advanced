const input = document.getElementById('inputEmail')
const form = document.getElementsByTagName('form')
const button = form.lastElementChild
const max_visible = 28
let start = 0
let ph_message = "Enter your email here in order to subscribe"


// input.onkeyup = whileTyping

// function whileTyping() {
//     if (input.value.length > 3) {
//         button.disabled = false
//     }
// }
setInterval(() => {
    let end = start + max_visible;
    let messageLength = ph_message.length;

    if (end > messageLength) {
        setTimeout(() => {
            start = 0;
            end = max_visible;
        }, 2000);
    }

    input.placeholder = ph_message.substring(start, end);
    start++;
}, 300);

function subscribe() {
    alert()
}