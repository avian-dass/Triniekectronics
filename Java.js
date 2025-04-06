document.getElementById("signup-form").addEventListener("submit", function(event) {
    var email = document.getElementById(email).value;
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});