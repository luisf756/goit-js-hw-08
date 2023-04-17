import throttle from 'lodash.throttle';

// player.on('timeupdate', throttle(() => {
//     player.getCurrentTime().then((seconds) => {
//         localStorage.setItem("videoplayer-current-time", seconds)
//         // console.log(localStorage.getItem("videoplayer-current-time"))
//     }).catch((error) => {
//         console.log('Ha ocurrido un error!');
//     });
// }, 1000));

const form = document.querySelector(".feedback-form");
// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "feedback-form-state";
const childrens = form.children;
for (let element of childrens) {
    if (element.firstElementChild != null) {
        element.firstElementChild.classList.add(`feedback-form__${element.firstElementChild.getAttribute('name')}`);
    } else {
        element.classList.add(`feedback-form__${element.getAttribute('type')}`);
    };

};
const [emailSelector, messageSelector, btnSelector] = form.querySelectorAll('.feedback-form__email, .feedback-form__message, .feedback-form__submit');

console.log(childrens)
// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }