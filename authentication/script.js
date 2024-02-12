function login() {
    // Reset error messages
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("login-error").textContent = "";

    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password
    if (!username) {
        document.getElementById("username-error").textContent =
            "Username cannot be empty.";
        return false;
    }

    if (!password) {
        document.getElementById("password-error").textContent =
            "Password cannot be empty.";
        return false;
    }

    // Add your actual login logic here
    // For simplicity, let's assume any non-empty credentials are valid
    if (username === "user1" && password === "password1") {
        // Redirect to the dashboard page after successful login
        window.location.href = "dashboard.html";
    } else {
        // Display a generic login error message (replace with actual logic)
        document.getElementById("login-error").textContent =
            "Invalid username or password.";
    }

    // Prevent form submission for the example
    return false;
}
