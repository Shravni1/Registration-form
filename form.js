// Function to validate the registration form
function validate() {
    // Retrieve values from input fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    
    // Check if username is empty
    if (username == null || username === "") {
        alert("Name can't be blank");
        return false;
    }
    // Check if password is too short
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    // Check if password is too long
    else if (password.length >= 20) {
        alert("Password must be less than 20 characters long.");
        return false;
    }
    // Check if passwords match
    else if (password !== cpassword) {
        alert("Error! Passwords must match.");
        return false;
    }
    // Check if email is in valid format
    else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid email format.");
        return false;
    }
    // If all validation checks pass, show success message
    else {
        alert("You were registered successfully. Thanks!");
        return true;
    }
}



