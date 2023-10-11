const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');
let errorShown = false;

function validatePassword() {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        if (!errorShown) {
            errorShown = true;
            const msg = document.createElement('div');
            msg.className = 'errorMessage';
            msg.textContent = "*Passwords don't match.";
            msg.style.color = 'red';
            confirmPassword.insertAdjacentElement('afterend', msg);
        }
    }
    else {
        confirmPassword.setCustomValidity("");
        document.querySelector('.errorMessage').remove();
        errorShown = false;
    }
}

confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', validatePassword);