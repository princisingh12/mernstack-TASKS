// REGISTER
function registerUser() {
  let username = document.getElementById("regUsername").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;
  let phone = document.getElementById("regPhone").value;

  if (!username || !email || !password || !phone) {
    alert("All fields are required");
    return;
  }

  let user = {
    username: username,
    email: email,
    password: password,
    phone: phone
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful");
  window.location.href = "login.html";
}


// LOGIN
function loginUser() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Please register first");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "home.html";
  } else {
    alert("Invalid Username or Password");
  }
}


// HOME AUTH CHECK (BONUS)
function checkAuth() {
  let user = localStorage.getItem("loggedInUser");

  if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
  } else {
    document.getElementById("welcome").innerText = "Welcome, " + user;
  }
}


// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully");
  window.location.href = "login.html";
}