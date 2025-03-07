const fullForm = document.getElementById('contact-form');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formComments = document.getElementById('comments');
const formErrors = document.getElementById('form-errors');

const errorMsg = document.getElementById('error');
const infoMsg = document.getElementById('info');

let formErrorsArr = [];

formName.addEventListener('input', (event) => {
    errorMsg.style.transition = '5s ease-in-out';
    errorMsg.style.opacity = 1;
    if (formName.validity.patternMismatch) {
        formName.setCustomValidity("Please use valid characters for the name field!");

        formName.style.border = '2px solid red';

        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Invalid characters present, please remove them.';
        if (!formErrorsArr.some(error => error.field === "name")) {
            formErrorsArr.push({ field: "name", error: "Invalid characters present." });
        }
        
        setTimeout(() => {
            errorMsg.style.opacity = 0;
        }, 100);
        
        console.log('name error');
      } else {
        formName.setCustomValidity("");

        formName.style.border = 'none';

        errorMsg.style.display = 'none';
        errorMsg.style.opacity = 1;
        errorMsg.textContent = '';
        console.log('no error');
      }
});

formEmail.addEventListener('input', (event) => {
    errorMsg.style.transition = '5s ease-in-out';
    errorMsg.style.opacity = 1;
    if (formEmail.validity.patternMismatch) {
        formEmail.setCustomValidity("I am expecting an actual email address!");
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Email is invalid, please enter a valid email.';

        if (!formErrorsArr.some(error => error.field === "email")) {
            formErrorsArr.push({ field: "email", error: "Invalid email format." });
        }

        setTimeout(() => {
            errorMsg.style.opacity = 0;
        }, 100);

        console.log('email error');
    } else {
        formEmail.setCustomValidity("");
        errorMsg.style.display = 'none';
        errorMsg.style.opacity = 1;
        errorMsg.textContent = '';
        console.log('no error');
    }
});

formComments.addEventListener('input', (event) => {
    const characterCount = formComments.value.length;
    const characterCounter = document.getElementById('character-count');

    characterCounter.textContent = `${characterCount}/300`;

    if (characterCount > 150) {
        let newGVal = 255 * (1 - (parseFloat(characterCount) - 150) / 150);
        characterCounter.style.color = `rgb(255,${newGVal},0)`;
    } else {
        characterCounter.style.color = 'black';
    }
});

fullForm.addEventListener('submit', (event) => {

    if (!formName.value.trim()) {
        formErrorsArr.push({ field: "name", error: "Name is required." });
    }

    // Validate Email (Required & Pattern)
    if (!formEmail.value.trim()) {
        formErrorsArr.push({ field: "email", error: "Email is required." });
    }

    if (formErrorsArr.length > 0) {
        formErrors.value = JSON.stringify(formErrorsArr);
    }
});