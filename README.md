# User Management System

This project is a role-based User Management System developed as part of an academic project. The system allows users to register and log in, while administrators have additional privileges to manage users. The application is built using Node.js and Express for the backend, MySQL for database management, and HTML, CSS, and JavaScript for the frontend.

The main objective of this project is to understand authentication, role-based access control, and basic CRUD operations in a web application.

---

## Project Overview

The User Management System supports two types of users: Admin and User.

An Admin can manage the complete system, including viewing all registered users, adding new users, updating user details, deleting users, changing user roles, and enabling or disabling user accounts.

A User can log in to the system, view their profile details, update basic information such as name, change their password, and log out securely.

---

## Features of the System

### Admin Features

The admin has full control over the system. After logging in, the admin can view a list of all users registered in the system. The admin can add new users, edit existing user details, delete users, change the role of any user between Admin and User, and enable or disable user accounts.

### User Features

A registered user can log in to the system and access their personal dashboard. From the dashboard, the user can view their profile information, update their name, change their password, and log out. The user dashboard also displays a profile avatar generated using the first letter of the user’s name and supports light and dark theme toggling.

---

## Technologies Used

This project uses the following technologies:

Frontend development is done using HTML, CSS, and JavaScript.
Backend development is handled using Node.js and Express.js.
The database is managed using MySQL.
Development tools include Visual Studio Code, Git, and GitHub.

---

## Project Directory Structure

The project is organized into frontend and backend folders to maintain a clean and modular structure.

The backend folder contains the server configuration, database connection, controllers, and routes.
The frontend folder contains HTML pages, CSS files, and JavaScript files.
The database folder contains the SQL file used to create the database schema.

---

## Setup Instructions

Follow the steps below carefully to set up and run the project on your local system.

---

### Software Requirements

Before running the project, ensure that the following software is installed on your system:

Node.js (version 16 or higher)
MySQL Server
Git
Visual Studio Code

---

### Downloading the Project

First, clone the project repository from GitHub using the following command:

```
git clone https://github.com/your-username/user-management-system.git
```

After cloning, navigate into the project directory:

```
cd user-management-system
```

---

### Database Setup

Open MySQL Workbench or any MySQL client. Create a new database for the project using the following command:

```sql
CREATE DATABASE user_management;
```

Select the database:

```sql
USE user_management;
```

Open the SQL file provided in the database folder and execute it to create the users table and required fields.

---

### Configuring Database Connection

Navigate to the backend configuration file located at:

```
backend/config/db.js
```

Update the database credentials such as host, username, password, and database name according to your MySQL setup.

---

### Installing Backend Dependencies

Open the terminal and navigate to the backend folder:

```
cd backend
```

Install all required Node.js dependencies by running:

```
npm install
```

This will install all packages mentioned in the package.json file.

---

### Starting the Backend Server

After installing dependencies, start the backend server using the following command:

```
node server.js
```

If the server starts successfully, a message indicating that the server is running and the database is connected will be displayed in the terminal.

---

### Running the Frontend

Navigate to the frontend folder and open the login.html file in a web browser.
Alternatively, you can use the Live Server extension in Visual Studio Code for better development experience.

---

## Sample Login Credentials

For testing purposes, the following sample credentials can be used:

Admin Account
Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: admin123

User Account
Email: [user@gmail.com](mailto:user@gmail.com)
Password: user123

These credentials can be modified directly from the database.

---

## Screenshots and Demo

Screenshots of the application, including the login page, admin dashboard, user dashboard, and user management table, are provided in the screenshots folder. These screenshots demonstrate the working of the application.

---

## Future Scope

This project can be further enhanced by implementing JWT authentication, forgot password functionality, profile image upload, and deployment on cloud platforms such as AWS or Render.

---

## Conclusion

This User Management System project demonstrates the implementation of authentication, role-based access control, and database-driven web applications using modern web technologies. It provides a strong foundation for understanding backend development and full-stack application design.

---

## Author

Yogini Sunil Kudale
MSc Computer Science

---

## License

This project is developed for academic and learning purposes only.
