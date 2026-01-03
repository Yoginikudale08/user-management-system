// Protect admin page
if (localStorage.getItem("userRole") !== "ADMIN") {
  window.location.href = "admin-login.html";
}

function loadUsers() {
  fetch("http://localhost:5000/api/admin/users")
    .then(res => res.json())
    .then(users => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5">No users found</td></tr>`;
        return;
      }

      users.forEach(u => {
        tbody.innerHTML += `
          <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td class="${u.status === 'ACTIVE' ? 'status-active' : 'status-inactive'}">
              ${u.status}
            </td>
            <td class="actions">
              <button class="btn role" onclick="changeRole(${u.id}, '${u.role}')">
                🔁 Role
              </button>
              <button class="btn status" onclick="toggleStatus(${u.id}, '${u.status}')">
                ${u.status === "ACTIVE" ? "Disable" : "Enable"}
              </button>
              <button class="btn delete" onclick="deleteUser(${u.id})">
                Delete
              </button>
            </td>
          </tr>
        `;
      });
    })
    .catch(() => alert("Failed to load users"));
}

// Change Role
function changeRole(id, currentRole) {
  const newRole = currentRole === "ADMIN" ? "USER" : "ADMIN";

  fetch("http://localhost:5000/api/admin/role", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, role: newRole })
  }).then(() => loadUsers());
}

// Enable / Disable
function toggleStatus(id, currentStatus) {
  const newStatus = currentStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE";

  fetch("http://localhost:5000/api/admin/status", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status: newStatus })
  }).then(() => loadUsers());
}

// Delete User
function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  fetch(`http://localhost:5000/api/admin/delete/${id}`, {
    method: "DELETE"
  }).then(() => loadUsers());
}

// Logout
function logout() {
  localStorage.clear();
  window.location.href = "admin-login.html";
}

// Load on page start
loadUsers();
