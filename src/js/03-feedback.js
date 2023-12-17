// const form = document.querySelector('.feedback-form');
// const textarea = document.querySelector('.feedback-form textarea');
// const input = document.querySelector('.feedback-form input');

// const EMAIL_STORAGE_KEY = 'EMAIL: ';
// const MESSAGE_STORAGE_KEY = 'MESSAGE: ';

// textarea.value = localStorage.getItem(MESSAGE_STORAGE_KEY) ?? '';
// input.value= localStorage.getItem(EMAIL_STORAGE_KEY) ?? '';

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', onInput);

// function onInput(e) {

//   if (e.target === textarea) {
//     localStorage.setItem(MESSAGE_STORAGE_KEY, e.target.value);
//   }

//   if (e.target === input) {
//     localStorage.setItem(EMAIL_STORAGE_KEY, e.target.value);
//   }

// }

// function onFormSubmit(e) {
//   // e.preventDefault();

//   console.log('Submit');
//   localStorage.removeItem(MESSAGE_STORAGE_KEY);
//   localStorage.removeItem(EMAIL_STORAGE_KEY);
//   form.reset();
// }

const form = document.querySelector('.feedback-form');

const formData = JSON.parse(localStorage.getItem("data")) ?? {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onInput);

function onInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('data', JSON.stringify(formData));
}

function onFormSubmit(e) {
  localStorage.removeItem("data");
  form.reset();
}

console.log(form.elements.message.name);
