CREATE TABLE `dts_courses` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_code` VARCHAR(10) NOT NULL UNIQUE,
  `course_name` VARCHAR(255) NOT NULL,
  `total_semesters` TINYINT NOT NULL DEFAULT 9
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




CREATE TABLE `dts_course_timings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_id` INT NOT NULL,
  `timing` VARCHAR(20) NOT NULL,
  UNIQUE KEY `course_time_unique` (`course_id`, `timing`),
  FOREIGN KEY (`course_id`) REFERENCES `dts_courses`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `dts_admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'super_admin') NOT NULL DEFAULT 'admin',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `dts_applications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `admission_no` VARCHAR(20) NOT NULL UNIQUE,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `address` TEXT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `contact` VARCHAR(15) NOT NULL,
  `aadhar_number` VARCHAR(12) NOT NULL,
  `priest_name` VARCHAR(100) NOT NULL,
  `church_address` TEXT NOT NULL,
  `priest_contact` VARCHAR(15) NOT NULL,
  `dob` DATE NOT NULL,
  `gender` ENUM('M', 'F') NOT NULL,
  `higher_education` VARCHAR(255) NOT NULL,
  `course_timing_id` INT NOT NULL,
  `personal_photo_path` VARCHAR(255) NOT NULL,
  `certificate_path` VARCHAR(255) NOT NULL,
  `status` ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
  `application_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`course_timing_id`) REFERENCES `dts_course_timings`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




CREATE TABLE `dts_students` (
  `student_id` INT AUTO_INCREMENT PRIMARY KEY,
  `application_id` INT NOT NULL UNIQUE,
  `student_roll_no` VARCHAR(20) NOT NULL UNIQUE,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `contact` VARCHAR(15) NOT NULL,
  `course_timing_id` INT NOT NULL,
  `semester` TINYINT NOT NULL DEFAULT 1,
  `registration_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`application_id`) REFERENCES `dts_applications`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (`course_timing_id`) REFERENCES `dts_course_timings`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




-- Insert course data
INSERT INTO `dts_courses` (`course_code`, `course_name`, `total_semesters`) VALUES
('CTH', 'Certificate in Theology', 6),
('BTH', 'Bachelor of Theology', 8),
('MDIV', 'Master of Divinity', 4),
('DCC', 'Diploma in Christian Counseling', 2),
('BCC', 'Bachelor in Christian Counseling', 6),
('MACP', 'MA in Counselling & Psychology', 4);

-- Insert course timings
INSERT INTO `dts_course_timings` (`course_id`, `timing`) VALUES
(1, '10am'), (1, '8pm'),   -- CTH
(2, '10am'), (2, '8pm'),   -- BTH
(3, '9pm'),                -- MDIV
(4, '10am'), (4, '8pm'),   -- DCC
(5, '10am'), (5, '8pm'),   -- BCC
(6, '9pm');                -- MACP

-- Insert admin user (password: admin123 - hashed)
INSERT INTO `dts_admin_users` (`username`, `email`, `password_hash`, `role`) VALUES
('admin', 'admin@dtsthiruvalla.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');


