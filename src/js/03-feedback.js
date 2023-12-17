const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const EMAIL_STORAGE_KEY = 'EMAIL: ';
const MESSAGE_STORAGE_KEY = 'MESSAGE: ';

textarea.innerText = localStorage.getItem(MESSAGE_STORAGE_KEY) ?? '';

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onMessageInput);

function onMessageInput(e) {
  const input = e.target;

  localStorage.setItem(MESSAGE_STORAGE_KEY, input.value);
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Submit');
  form.reset();
}
