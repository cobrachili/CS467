// https://www.w3schools.com/jsref/met_win_alert.asp
//https://www.w3schools.com/jsref/jsref_regexp_test.asp
// https://how.dev/answers/how-to-add-remove-toggle-class-of-a-dom-element-in-javascript
// https://www.geeksforgeeks.org/html/html-dom-parentelement-property/

const form = document.getElementById("form");
const firstname_input = document.getElementById('firstname-input');
const lastname_input = document.getElementById('lastname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = [];

    if (firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, lastname_input.value, email_input.value,password_input.value, repeat_password_input.value
        );
    } else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

     if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        form.submit(); 
    }
});
 
function getSignupFormErrors(firstname, lastname, email, password, repeatPassword) {
    let errors = []

    // Remove classes
    firstname_input.parentElement.classList.remove('Incorrect');
    lastname_input.parentElement.classList.remove('Incorrect');
    email_input.parentElement.classList.remove('Incorrect');
    password_input.parentElement.classList.remove('Incorrect');
    repeat_password_input.parentElement.classList.remove('Incorrect');


     // first name checks
    if (firstname === '' || firstname == null) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('Incorrect');
    }
    // last name checks
    if (lastname === '' || lastname == null) {
        errors.push('Last name is required');
        lastname_input.parentElement.classList.add('Incorrect');
    }
     // email checks
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('Incorrect');
    }

    // password checks
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('Incorrect');
    } else {
        if (password.length < 8 || password.length > 20) {
            errors.push("Password must have at least 8 characters and less than 20 characters ");
            password_input.parentElement.classList.add('Incorrect');
        }

        // Find a match for the string in symbols
        var symbols = /[~`!@#$%^&*()_\-+=]/;
        if (!symbols.test(password)) {
            errors.push("Password must contain at least one special symbol:(~`!@#$%^&*()_\-+=)");
            password_input.parentElement.classList.add('Incorrect');
        }
         // Find a match for the string in lower case letters
        var lowerCaseLetters = /[a-z]/;
        if (!lowerCaseLetters.test(password)) {
            errors.push("Password must contain at least one lower case letter");
            password_input.parentElement.classList.add('Incorrect');
        }
         // Find a match for the string in upper case letters
        var upperCaseLetters = /[A-Z]/;
        if (!upperCaseLetters.test(password)) {
            errors.push("Password must contain at least one upper case letter");
            password_input.parentElement.classList.add('Incorrect');
        }
        // Find a match for the string in numbers
          var number = /[0-9]/;
        if (!number.test(password)) {
            errors.push("Password must contain at least one number");
            password_input.parentElement.classList.add('Incorrect');
        }

        if (password !== repeatPassword) {
            errors.push('Password does not match repeated Password');
            password_input.parentElement.classList.add('Incorrect');
            repeat_password_input.parentElement.classList.add('Incorrect');
        }
    }

    return errors;
}

function getLoginFormErrors(email,password) {
    let errors = []

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('Incorrect');
    }

    // password checks
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('Incorrect');
}
    return errors;
}