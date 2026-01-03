Perfect! I’ve cleaned up your README and removed all conflict markers. Here’s a **ready-to-use, complete README** for your User Management System project:

```markdown
# User Management System

This project is a **role-based User Management System** developed as part of an academic project. The system allows users to register and log in, while administrators have additional privileges to manage users. The application is built using **Node.js and Express** for the backend, **MySQL** for database management, and **HTML, CSS, and JavaScript** for the frontend.

The main objective of this project is to understand **authentication, role-based access control**, and basic **CRUD operations** in a web application.

---

## Project Overview

The User Management System supports two types of users: **Admin** and **User**.

- **Admin** can manage the complete system, including viewing all registered users, adding new users, updating user details, deleting users, changing user roles, and enabling or disabling user accounts.
- **User** can log in to the system, view their profile details, update basic information such as name, change their password, and log out securely.

---

## Features of the System

### Admin Features
- View a list of all registered users.
- Add new users.
- Edit existing user details.
- Delete users.
- Change the role of any user between Admin and User.
- Enable or disable user accounts.

### User Features
- Log in to the system and access personal dashboard.
- View profile information.
- Update name.
- Change password.
- Log out securely.
- Profile avatar generated using the first letter of the user’s name.
- Light and dark theme toggling.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Development Tools:** Visual Studio Code, Git, GitHub

---

## Project Directory Structure

```

user-management-system/
│
├─ backend/
│   ├─ config/       # Database configuration
│   ├─ controllers/  # Logic for routes
│   ├─ routes/       # API endpoints
│   └─ server.js     # Backend server
│
├─ frontend/
│   ├─ css/          # Stylesheets
│   ├─ js/           # JavaScript files
│   └─ *.html        # HTML pages
│
└─ database/
└─ schema.sql    # SQL file to create database and tables

````

---

## Setup Instructions

### Software Requirements
- Node.js (version 16 or higher)
- MySQL Server
- Git
- Visual Studio Code

---

### Downloading the Project

Clone the repository:

```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
````

---

### Database Setup

1. Open MySQL Workbench or any MySQL client.
2. Create a new database:

```sql
CREATE DATABASE user_management;
USE user_management;
```

3. Open the SQL file in the `database` folder and execute it to create the `users` table and required fields.

---

### Configuring Database Connection

Update the database credentials in:

```
backend/config/db.js
```

Set your **host, username, password, and database name** according to your MySQL setup.

---

### Installing Backend Dependencies

```bash
cd backend
npm install
```

---

### Starting the Backend Server

```bash
node server.js
```

You should see a message indicating that the server is running and the database is connected.

---

### Running the Frontend

Open the `frontend/login.html` file in a web browser.
For a better experience, use the **Live Server** extension in VS Code.

---

### Sample Login Credentials

* **Admin Account**

  * Email: [admin@gmail.com](mailto:admin@gmail.com)
  * Password: admin123
* **User Account**

  * Email: [user@gmail.com](mailto:user@gmail.com)
  * Password: user123

These can be modified directly in the database.

---

## Screenshots and Demo

Screenshots of the application, including the login page, admin dashboard, user dashboard, and user management table, are provided in the `screenshots` folder. These demonstrate the working of the application.

---

## Future Scope

* Implement **JWT authentication** for enhanced security.
* Add **forgot password** functionality.
* Allow **profile image uploads**.
* Deploy the application on **cloud platforms** like AWS or Render.

---

## Conclusion

This project demonstrates the implementation of **authentication**, **role-based access control**, and **database-driven web applications** using modern web technologies. It provides a strong foundation for understanding **backend development** and **full-stack application design**.

---

## Author

**Yogini Sunil Kudale**
MSc Computer Science

---

## License

This project is developed for **academic and learning purposes only**.


