const name = localStorage.getItem("userName");
const email = localStorage.getItem("userEmail");
const role = localStorage.getItem("userRole");

// Protect user dashboard
if (!name || role !== "USER") {
  window.location.href = "login.html";
}

// Avatar
document.getElementById("avatarLetter").innerText =
  name.charAt(0).toUpperCase();

// Welcome text
document.getElementById("welcomeText").innerText =
  `Welcome, ${name}`;

document.getElementById("userNameText").innerText =
  `Logged in as: ${name}`;

// UPDATE NAME (Frontend demo)
function updateName() {
  const newName = document.getElementById("editName").value.trim();

  if (!newName) {
    document.getElementById("profileMsg").innerText =
      "Name cannot be empty";
    return;
  }

  localStorage.setItem("userName", newName);
  location.reload();
}

// CHANGE PASSWORD (Frontend demo)
function changePassword() {
  const newPass = document.getElementById("newPassword").value;

  if (newPass.length < 3) {
    document.getElementById("passwordMsg").innerText =
      "Password too short";
    return;
  }

  // Demo only (no backend)
  document.getElementById("passwordMsg").innerText =
    "Password changed successfully (demo)";
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
