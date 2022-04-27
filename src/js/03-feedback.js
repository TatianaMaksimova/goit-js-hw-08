import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  submit: document.querySelector('.feedback-form button'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onSaveFormDataValue, 500));
updatePageForm();

function onSaveFormDataValue(e) {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);

  const savedMsg = localStorage.setItem(STORAGE_KEY, formDataJSON);
}
function updatePageForm(e) {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const dataObject = JSON.parse(savedData);

  if (savedData) {
    refs.message.value = dataObject.message;
    refs.email.value = dataObject.email;
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
