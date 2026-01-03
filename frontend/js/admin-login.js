document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.role !== "ADMIN") {
    error.innerText = "Not an admin account";
    return;
  }

  localStorage.setItem("userRole", data.role);
  localStorage.setItem("userName", data.name);
  localStorage.setItem("userEmail", data.email);

  window.location.href = "admin.html";
});
