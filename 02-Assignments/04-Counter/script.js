const number = document.getElementById('number');
const inputField = document.getElementById('increment');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const resetBtn = document.getElementById('reset');
let counter = 0;

addBtn.addEventListener('click',()=>{
    const incrementValue = parseInt(inputField.value);
    counter += incrementValue;
    number.textContent = counter; 
});

subtractBtn.addEventListener('click',()=>{
    const decrementValue = parseInt(inputField.value);
    counter -= decrementValue;
    number.textContent = counter; 
});

resetBtn.addEventListener('click',()=>{
    number.textContent = 0;
    inputField.value = 0;
})