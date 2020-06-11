const textForm = document.querySelector('.text-form');
const radioForm = document.querySelector('.radio-form');
const checkboxForm = document.querySelector('.checkbox-form');
const colorForm = document.querySelector('.color-form');
const dateForm = document.querySelector('.date-form');
const fileForm = document.querySelector('.file-form');

const textInputList = textForm.querySelectorAll('input');
const radioInputList = radioForm.querySelectorAll('input');
const checkboxInputList = checkboxForm.querySelectorAll('input');
const button = document.querySelector('.btn');

function handleTextSubmit(e) {
    e.preventDefault();
    console.log(e, textInputList);
}

function handleRadioSubmit(e) {
    e.preventDefault();
    console.log(e, radioInputList);
}

function handleCheckboxSubmit(e) {
    e.preventDefault();
    console.log(e, checkboxInputList);
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
}

function handleClick(e) {
    console.log('click', e);
}

function init() {
    textForm.addEventListener('submit', handleTextSubmit);
    radioForm.addEventListener('submit', handleRadioSubmit);
    checkboxForm.addEventListener('submit', handleCheckboxSubmit);
    colorForm.addEventListener('submit', handleSubmit);
    dateForm.addEventListener('submit', handleSubmit);
    fileForm.addEventListener('submit', handleSubmit);
    
    button.addEventListener('click', handleClick);
}

init();