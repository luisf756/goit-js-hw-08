import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

const emailiNPUT = document.querySelector('label [name="email"]');
const messageInput = document.querySelector('label [name="message"]');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
    const email = emailiNPUT.value;
    const message = messageInput.value;

    const formData = {
        email,
        message,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    // console.log(localStorage)
};


updateOutput();
form.addEventListener("submit", saveInfo);

function saveInfo(evt) {
  evt.preventDefault();
  updateOutput();
  form.reset();
}

function updateOutput() {
    // console.log('me actualizsjjo')
    const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    if (savedMessage) {
        if (savedMessage.email == '' || savedMessage.message == '') {
            alert("Enter the requested data!");
            form.reset();
            return false;
        }
        emailiNPUT.value = savedMessage.email;
        messageInput.value = savedMessage.message;
    };

}