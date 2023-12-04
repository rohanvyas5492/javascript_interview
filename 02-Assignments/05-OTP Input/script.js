const inputsContainer = document.getElementById('inputs');
const inputFields = document.querySelectorAll('.input');

// Function to get the next input field
const getNextInput = (input)=>{
    return input.nextElementSibling;
}

// Function to get the previous input field
const getPrevInput = (input)=>{
    return input.previousElementSibling;
}

// Function to focus on the next input field
const focusNextInput = (input)=>{
    if(input){
        input.focus();
    }
}

// Function to focus on the previous input field
const focusPrevInput = (input)=>{
    if(input){
        input.focus();
    }
}

// Event listener for input fields
inputsContainer.addEventListener('input',(e)=>{
    
    const input = e.target;
    if(isNaN(input.value)){
        input.value = '';
        return;
    }
    const maxLength = parseInt(input.getAttribute('maxlength'));
    const nextInput = getNextInput(input);
      
    if(input.value.length === maxLength){
        focusNextInput(nextInput);
    }
});

// Event listener for arrow keys
inputsContainer.addEventListener('keyup', function (e) {
      const input = e.target;
      const nextInput = getNextInput(input);
      const prevInput = getPrevInput(input);
      console.log(e);

      if (e.key === 'ArrowRight') {
        focusNextInput(nextInput);
      } else if (e.key === 'ArrowLeft') {
        focusPrevInput(prevInput);
      }else if ( e.key === 'Delete') {
        input.value = '';
        if(prevInput){
            focusPrevInput(prevInput)
        }
      }else if(e.key === 'Backspace'){
        if (input.value.length === 0) {
          focusPrevInput(prevInput);
        }
      }
    });