// Register form validation and submission

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Basic validation
  if (!name || !email || !password) {
    message.innerText = "All fields are required";
    return;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.innerText = "Please enter a valid email address";
    return;
  }

  // Password length validation
  if (password.length < 5) {
    message.innerText = "Password must be at least 5 characters";
    return;
  }

  fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => res.text())
    .then(data => {
      message.innerText = data;
    })
    .catch(() => {
      message.innerText = "Server error. Try again later.";
    });
});
