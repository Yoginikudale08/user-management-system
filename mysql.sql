CREATE DATABASE IF NOT EXISTS user_management;
USE user_management;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(20),
  status VARCHAR(20)
);
SELECT * FROM users;
UPDATE users 
SET role = 'ADMIN' 
WHERE email = 'yogini@gmail.com';

DESCRIBE users;


SELECT id, name, email, role, status FROM users;
UPDATE users SET role = 'ADMIN' WHERE email = 'yogini@gmail.com';
UPDATE users SET role = 'USER' WHERE email = 'shiv@gmail.com';


USE user_management;
-- Set Yogini as Admin
UPDATE users SET role = 'ADMIN' WHERE email = 'yogini@gmail.com';
-- Set Shiv as User (In your screenshot, he was set to ADMIN, change it to USER for testing)
UPDATE users SET role = 'USER' WHERE email = 'shiv@gmail.com';

SELECT email, role FROM users;

UPDATE users SET role = 'USER' WHERE role = 'user';
UPDATE users SET role = 'ADMIN' WHERE role = 'admin';
UPDATE users SET role = TRIM(role);
ALTER TABLE users
ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

SELECT email, role, status FROM users;

