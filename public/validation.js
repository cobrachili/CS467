// Date: 7/11/25
// Adapted From:
// https://www.youtube.com/watch?v=bVl5_UdcAy0
// Incorporated errors and logic to check the form validation and usage of incorrect as a css class for errors //

// Date: 7/12/25
// Adapted From:
// https://www.w3schools.com/jsref/met_win_alert.asp
// Incorporated alert() method that displays a message to the user of the errors that they input  //

// Date: 7/12/25
// Adapted From:
// https://www.w3schools.com/jsref/jsref_regexp_test.asp
// Learned about the test() method and how it can matches a string for error  //

// Date: 7/12/25
// Adapted From:
// https://how.dev/answers/how-to-add-remove-toggle-class-of-a-dom-element-in-javascript
// Learned about using .remove and .add and incorporated them for the classes of the elements //

// Date: 7/12/25
// Adapted From:
// https://www.geeksforgeeks.org/html/html-dom-parentelement-property/
// Learned about using parentelement and incorporated it to classes and checks //


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
 
// Signup Form validation 
function getSignupFormErrors(firstname, lastname, email, password, repeatPassword) {
    let errors = []

    // Remove visual errors if user successfully fixes their mistakes
    firstname_input.parentElement.classList.remove('incorrect');
    lastname_input.parentElement.classList.remove('incorrect');
    email_input.parentElement.classList.remove('incorrect');
    password_input.parentElement.classList.remove('incorrect');
    repeat_password_input.parentElement.classList.remove('incorrect');


     // first name checks
    if (firstname === '' || firstname == null) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    // last name checks
    if (lastname === '' || lastname == null) {
        errors.push('Last name is required');
        lastname_input.parentElement.classList.add('incorrect');
    }
     // email checks
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    // password checks
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    } else {
        if (password.length < 8 || password.length > 20) {
            errors.push("Password must have at least 8 characters and less than 20 characters ");
            password_input.parentElement.classList.add('incorrect');
        }

        // Find a match for the string in symbols
        var symbols = /[~`!@#$%^&*()_\-+=]/;
        if (!symbols.test(password)) {
            errors.push("Password must contain at least one special symbol:(~`!@#$%^&*()_\-+=)");
            password_input.parentElement.classList.add('incorrect');
        }
         // Find a match for the string in lower case letters
        var lowerCaseLetters = /[a-z]/;
        if (!lowerCaseLetters.test(password)) {
            errors.push("Password must contain at least one lower case letter");
            password_input.parentElement.classList.add('incorrect');
        }
         // Find a match for the string in upper case letters
        var upperCaseLetters = /[A-Z]/;
        if (!upperCaseLetters.test(password)) {
            errors.push("Password must contain at least one upper case letter");
            password_input.parentElement.classList.add('incorrect');
        }
        // Find a match for the string in numbers
          var number = /[0-9]/;
        if (!number.test(password)) {
            errors.push("Password must contain at least one number");
            password_input.parentElement.classList.add('incorrect');
        }

        if (password !== repeatPassword) {
            errors.push('Password does not match repeated Password');
            password_input.parentElement.classList.add('incorrect');
            repeat_password_input.parentElement.classList.add('incorrect');
        }
    }

    return errors;
}

// Login Form validation 
function getLoginFormErrors(email,password) {
    let errors = []

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
}
    return errors;
}