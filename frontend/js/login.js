document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const msg = document.getElementById("message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!data.role) {
      msg.innerText = data.message;
      return;
    }

    localStorage.setItem("userRole", data.role);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userName", data.name);

    if (data.role === "ADMIN") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
});
