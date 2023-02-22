function validateSignup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (username === "" ||password === "" || confirmPassword === "") {
      alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      location.replace("home.html");
    }
  }