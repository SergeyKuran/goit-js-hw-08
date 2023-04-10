import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);
const inputRef = document.querySelector('.feedback-form input');
// console.log(inputRef);
const textareaRef = document.querySelector('.feedback-form textarea');
// console.log(textareaRef);
// Створимо змінну з назвою ключа у локальному сховищі
const STORAGE_FORM = 'feedback-form-state';
// Створимо функцію, яка зберігає дані у локальне сховище
function saveFormState(){
  const formData = {
    email: inputRef.value,
    message: textareaRef.value
  };
  localStorage.setItem(STORAGE_FORM, JSON.stringify(formData));
};
// Створимо функцію, яка оновлює значення value у локадбному сховищі, якщо є що оновлювати.
function updateFormState(){
    const formData = JSON.parse(localStorage.getItem(STORAGE_FORM)) || {};
    // console.log(STORAGE_FORM);
  inputRef.value = formData.email || '';
  textareaRef.value = formData.message || '';
};

updateFormState()
// Викликаємо слухача подій на формі з подією input, з ччастотою спрацювання не більше як 500 мілісекунд
formRef.addEventListener('input', throttle(saveFormState, 500));
// Викликаємо слухача подій на формі з подією submit
formRef.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    
  const formData = {
    email: inputRef.value,
    message: textareaRef.value
  };
    console.log('Form Data:', formData);
    
  localStorage.removeItem(STORAGE_FORM); //Видаляємо дані з локального сховища
  inputRef.value = '';//Очищуємо значення value у кожного
  textareaRef.value = '';
});