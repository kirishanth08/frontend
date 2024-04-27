function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Username Validation
    if (username.length < 4) {
        usernameError.textContent = "Username should contain at least 4 characters.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password Validation
    if (password.length === 0) {
        passwordError.textContent = "Password cannot be empty.";
        isValid = false;
    } else if (password.length < 6 || password.length > 12) {
        passwordError.textContent = "Password should be between 6 and 12 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}
