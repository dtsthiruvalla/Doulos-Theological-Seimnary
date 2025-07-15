-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 15, 2025 at 08:09 AM
-- Server version: 10.6.21-MariaDB-cll-lve
-- PHP Version: 8.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doulos`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `usergroup` int(11) NOT NULL,
  `code` text NOT NULL,
  `lastlogin` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `usergroup`, `code`, `lastlogin`, `status`) VALUES
(1, 'Administrator', 'admin@dts.com', '4cfabdd9532866f91c3c72a9c46696ec', 2, 'A192A', '2023-01-24 16:03:44', 1);

-- --------------------------------------------------------

--
-- Table structure for table `admin_modules`
--

CREATE TABLE `admin_modules` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `admin_modules`
--

INSERT INTO `admin_modules` (`id`, `name`) VALUES
(1, 'Homepage Banners'),
(2, 'Services'),
(3, 'About us'),
(4, 'Partners'),
(5, 'Trading'),
(6, 'Tools'),
(7, 'Academy'),
(11, 'Contact us Messages'),
(13, 'Users -> Users'),
(14, 'Users -> User Groups'),
(15, 'CMS Pages'),
(16, 'Settings'),
(23, 'Downloads'),
(24, 'Dashboard'),
(25, 'Trading Platforms'),
(26, 'News');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `admission_no` varchar(250) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_time` varchar(250) NOT NULL,
  `education_id` int(11) NOT NULL,
  `gender` varchar(250) NOT NULL,
  `course_before` tinyint(1) NOT NULL,
  `admission_before` tinyint(1) NOT NULL,
  `prev_course` varchar(250) NOT NULL,
  `admission_year` varchar(250) NOT NULL,
  `aadhar` varchar(250) NOT NULL,
  `country_id` int(11) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `dob` date NOT NULL,
  `contact_no` varchar(250) NOT NULL,
  `alternate_contact_no` varchar(250) NOT NULL,
  `address` text NOT NULL,
  `permanent_address` text NOT NULL,
  `parent_name` varchar(250) NOT NULL,
  `parent_contact` varchar(250) NOT NULL,
  `mother_church` text NOT NULL,
  `current_church` text NOT NULL,
  `pastor_name` varchar(250) NOT NULL,
  `pastor_contact` varchar(250) NOT NULL,
  `church_address` text NOT NULL,
  `fee_contribution` int(11) NOT NULL,
  `user_photo` varchar(250) NOT NULL,
  `sslc_file` varchar(250) NOT NULL,
  `view_status` tinyint(1) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `admission_no`, `fullname`, `course_id`, `course_time`, `education_id`, `gender`, `course_before`, `admission_before`, `prev_course`, `admission_year`, `aadhar`, `country_id`, `mail`, `dob`, `contact_no`, `alternate_contact_no`, `address`, `permanent_address`, `parent_name`, `parent_contact`, `mother_church`, `current_church`, `pastor_name`, `pastor_contact`, `church_address`, `fee_contribution`, `user_photo`, `sslc_file`, `view_status`, `sort_order`, `status`, `date_added`, `date_modified`) VALUES
(13, 'DBSBTH250113', 'Aswathy NP', 17, '4', 5, 'female', 0, 0, '', '', '523352219168', 99, 'aswathyarisseril77@gmail.com', '1987-07-07', '7306081931', '9496711627', 'Puthuparambil House, \r\nMelukavu PO, \r\nKottayam District \r\nKerala-686652', 'Puthuparambil House,  Melukavu PO, \r\nKottayam District, \r\nKerala', 'Mr. Albert Lindsay (Husband)', '9496711627', 'Bethel Assemblies of God,  Bangalore', 'Born Again People&#039;s Church', 'Pastor MV Daniel', '8606808314', 'Born Again People&#039;s Church, \r\nEllumpuram PO, \r\nMutton, \r\nThodupuzha', 0, '6864e10e73ec2_1000010622.jpg', '6864e10e73ec5_3. SSLC MAIN CERTIFICATE-compressed_copy.pdf', 0, 0, 0, '2025-07-02 10:34:38', '2025-07-02 00:34:38'),
(14, 'DBSBTH250114', 'Ruby Abraham', 17, '4', 4, 'female', 0, 0, '', '', '794482130014', 99, 'radulcinea3@gmail.com', '1987-05-12', '447721954892', '', '7 Tedbury Acres, Cheddon Fitzpaine, Taunton, United Kingdom\r\nTA2 8SR', 'Koodarathil House, \r\nKairady PO\r\nNemmara, Palakkad', 'Mr Abraham PA', '9400679079', 'Tabhor IPC Church, Karimpara, Nemmara, Palakkad', 'UCF IPC Taunton, UK', 'Pr. Thomas Varghese', '447771492727', '', 0, '6866230b00276_IMG_7016.jpeg', '6866230b00286_IMG_7037.jpeg', 0, 0, 0, '2025-07-03 09:28:26', '2025-07-02 23:28:27');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `name_en` varchar(128) NOT NULL,
  `name_ar` varchar(250) NOT NULL,
  `iso_code_2` varchar(2) DEFAULT NULL,
  `iso_code_3` varchar(3) DEFAULT NULL,
  `phonecode` int(5) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `name_en`, `name_ar`, `iso_code_2`, `iso_code_3`, `phonecode`, `status`, `date_added`, `date_modified`) VALUES
(1, 'Afghanistan', 'Afghanistan', 'AF', 'AFG', 93, 1, '0000-00-00 00:00:00', '2018-05-19 12:08:18'),
(2, 'Albania', 'Albania', 'AL', 'ALB', 355, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Algeria', 'Algeria', 'DZ', 'DZA', 213, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'American Samoa', 'American Samoa', 'AS', 'ASM', 1684, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Andorra', 'Andorra', 'AD', 'AND', 376, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Angola', 'Angola', 'AO', 'AGO', 244, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Anguilla', 'Anguilla', 'AI', 'AIA', 1264, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Antarctica', 'Antarctica', 'AQ', 'ATA', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Antigua and Barbuda', 'Antigua and Barbuda', 'AG', 'ATG', 1268, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Argentina', 'Argentina', 'AR', 'ARG', 54, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Armenia', 'Armenia', 'AM', 'ARM', 374, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Aruba', 'Aruba', 'AW', 'ABW', 297, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Australia', 'Australia', 'AU', 'AUS', 61, 1, '0000-00-00 00:00:00', '2018-05-19 12:12:11'),
(14, 'Austria', 'Austria', 'AT', 'AUT', 43, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Azerbaijan', 'Azerbaijan', 'AZ', 'AZE', 994, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Bahamas', 'Bahamas', 'BS', 'BHS', 1242, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Bahrain', 'Bahrain', 'BH', 'BHR', 973, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Bangladesh', 'Bangladesh', 'BD', 'BGD', 880, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Barbados', 'Barbados', 'BB', 'BRB', 1246, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Belarus', 'Belarus', 'BY', 'BLR', 375, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Belgium', 'Belgium', 'BE', 'BEL', 32, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Belize', 'Belize', 'BZ', 'BLZ', 501, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Benin', 'Benin', 'BJ', 'BEN', 229, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Bermuda', 'Bermuda', 'BM', 'BMU', 1441, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Bhutan', 'Bhutan', 'BT', 'BTN', 975, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Bolivia', 'Bolivia', 'BO', 'BOL', 591, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Bosnia and Herzegovina', 'Bosnia and Herzegovina', 'BA', 'BIH', 387, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Botswana', 'Botswana', 'BW', 'BWA', 267, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Bouvet Island', 'Bouvet Island', 'BV', 'BVT', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Brazil', 'Brazil', 'BR', 'BRA', 55, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'British Indian Ocean Territory', 'British Indian Ocean Territory', 'IO', 'IOT', 246, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Brunei Darussalam', 'Brunei Darussalam', 'BN', 'BRN', 673, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Bulgaria', 'Bulgaria', 'BG', 'BGR', 359, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Burkina Faso', 'Burkina Faso', 'BF', 'BFA', 226, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Burundi', 'Burundi', 'BI', 'BDI', 257, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Cambodia', 'Cambodia', 'KH', 'KHM', 855, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Cameroon', 'Cameroon', 'CM', 'CMR', 237, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Canada', 'Canada', 'CA', 'CAN', 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Cape Verde', 'Cape Verde', 'CV', 'CPV', 238, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Cayman Islands', 'Cayman Islands', 'KY', 'CYM', 1345, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Central African Republic', 'Central African Republic', 'CF', 'CAF', 236, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Chad', 'Chad', 'TD', 'TCD', 235, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'Chile', 'Chile', 'CL', 'CHL', 56, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 'China', 'China', 'CN', 'CHN', 86, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 'Christmas Island', 'Christmas Island', 'CX', 'CXR', 61, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 'Cocos (Keeling) Islands', 'Cocos (Keeling) Islands', 'CC', 'CCK', 672, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 'Colombia', 'Colombia', 'CO', 'COL', 57, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 'Comoros', 'Comoros', 'KM', 'COM', 269, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'Congo', 'Congo', 'CG', 'COG', 242, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'Cook Islands', 'Cook Islands', 'CK', 'COK', 682, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 'Costa Rica', 'Costa Rica', 'CR', 'CRI', 506, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 'Cote D\'Ivoire', 'Cote D\'Ivoire', 'CI', 'CIV', 225, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 'Croatia', 'Croatia', 'HR', 'HRV', 385, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 'Cuba', 'Cuba', 'CU', 'CUB', 53, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 'Cyprus', 'Cyprus', 'CY', 'CYP', 357, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 'Czech Republic', 'Czech Republic', 'CZ', 'CZE', 420, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 'Denmark', 'Denmark', 'DK', 'DNK', 45, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 'Djibouti', 'Djibouti', 'DJ', 'DJI', 253, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 'Dominica', 'Dominica', 'DM', 'DMA', 1767, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 'Dominican Republic', 'Dominican Republic', 'DO', 'DOM', 1809, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 'East Timor', 'East Timor', 'TL', 'TLS', 670, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 'Ecuador', 'Ecuador', 'EC', 'ECU', 593, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 'Egypt', 'Egypt', 'EG', 'EGY', 20, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 'El Salvador', 'El Salvador', 'SV', 'SLV', 503, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 'Equatorial Guinea', 'Equatorial Guinea', 'GQ', 'GNQ', 240, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 'Eritrea', 'Eritrea', 'ER', 'ERI', 291, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 'Estonia', 'Estonia', 'EE', 'EST', 372, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 'Ethiopia', 'Ethiopia', 'ET', 'ETH', 251, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 'Falkland Islands (Malvinas)', 'Falkland Islands (Malvinas)', 'FK', 'FLK', 500, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 'Faroe Islands', 'Faroe Islands', 'FO', 'FRO', 298, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 'Fiji', 'Fiji', 'FJ', 'FJI', 679, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 'Finland', 'Finland', 'FI', 'FIN', 358, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 'France, Metropolitan', 'France, Metropolitan', 'FR', 'FRA', 33, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 'French Guiana', 'French Guiana', 'GF', 'GUF', 594, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 'French Polynesia', 'French Polynesia', 'PF', 'PYF', 689, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'French Southern Territories', 'French Southern Territories', 'TF', 'ATF', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'Gabon', 'Gabon', 'GA', 'GAB', 241, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'Gambia', 'Gambia', 'GM', 'GMB', 220, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 'Georgia', 'Georgia', 'GE', 'GEO', 995, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'Germany', 'Germany', 'DE', 'DEU', 49, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 'Ghana', 'Ghana', 'GH', 'GHA', 233, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 'Gibraltar', 'Gibraltar', 'GI', 'GIB', 350, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'Greece', 'Greece', 'GR', 'GRC', 30, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 'Greenland', 'Greenland', 'GL', 'GRL', 299, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 'Grenada', 'Grenada', 'GD', 'GRD', 1473, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 'Guadeloupe', 'Guadeloupe', 'GP', 'GLP', 590, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 'Guam', 'Guam', 'GU', 'GUM', 1671, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 'Guatemala', 'Guatemala', 'GT', 'GTM', 502, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 'Guinea', 'Guinea', 'GN', 'GIN', 224, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 'Guinea-Bissau', 'Guinea-Bissau', 'GW', 'GNB', 245, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 'Guyana', 'Guyana', 'GY', 'GUY', 592, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 'Haiti', 'Haiti', 'HT', 'HTI', 509, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 'Heard and Mc Donald Islands', 'Heard and Mc Donald Islands', 'HM', 'HMD', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 'Honduras', 'Honduras', 'HN', 'HND', 504, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 'Hong Kong', 'Hong Kong', 'HK', 'HKG', 852, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 'Hungary', 'Hungary', 'HU', 'HUN', 36, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 'Iceland', 'Iceland', 'IS', 'ISL', 354, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 'India', 'India', 'IN', 'IND', 91, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 'Indonesia', 'Indonesia', 'ID', 'IDN', 62, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 'Iran (Islamic Republic of)', 'Iran (Islamic Republic of)', 'IR', 'IRN', 98, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 'Iraq', 'Iraq', 'IQ', 'IRQ', 964, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 'Ireland', 'Ireland', 'IE', 'IRL', 353, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 'Israel', 'Israel', 'IL', 'ISR', 972, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 'Italy', 'Italy', 'IT', 'ITA', 39, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 'Jamaica', 'Jamaica', 'JM', 'JAM', 1876, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 'Japan', 'Japan', 'JP', 'JPN', 81, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 'Jordan', 'Jordan', 'JO', 'JOR', 962, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 'Kazakhstan', 'Kazakhstan', 'KZ', 'KAZ', 7, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 'Kenya', 'Kenya', 'KE', 'KEN', 254, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 'Kiribati', 'Kiribati', 'KI', 'KIR', 686, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 'North Korea', 'North Korea', 'KP', 'PRK', 850, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 'South Korea', 'South Korea', 'KR', 'KOR', 82, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 'Kuwait', 'Kuwait', 'KW', 'KWT', 965, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, 'Kyrgyzstan', 'Kyrgyzstan', 'KG', 'KGZ', 996, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 'Lao People\'s Democratic Republic', 'Lao People\'s Democratic Republic', 'LA', 'LAO', 856, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, 'Latvia', 'Latvia', 'LV', 'LVA', 371, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, 'Lebanon', 'Lebanon', 'LB', 'LBN', 961, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, 'Lesotho', 'Lesotho', 'LS', 'LSO', 266, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, 'Liberia', 'Liberia', 'LR', 'LBR', 231, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, 'Libyan Arab Jamahiriya', 'Libyan Arab Jamahiriya', 'LY', 'LBY', 218, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, 'Liechtenstein', 'Liechtenstein', 'LI', 'LIE', 423, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 'Lithuania', 'Lithuania', 'LT', 'LTU', 370, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, 'Luxembourg', 'Luxembourg', 'LU', 'LUX', 352, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, 'Macau', 'Macau', 'MO', 'MAC', 853, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, 'FYROM', 'FYROM', 'MK', 'MKD', 389, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, 'Madagascar', 'Madagascar', 'MG', 'MDG', 261, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, 'Malawi', 'Malawi', 'MW', 'MWI', 265, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, 'Malaysia', 'Malaysia', 'MY', 'MYS', 60, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, 'Maldives', 'Maldives', 'MV', 'MDV', 960, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, 'Mali', 'Mali', 'ML', 'MLI', 223, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, 'Malta', 'Malta', 'MT', 'MLT', 356, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, 'Marshall Islands', 'Marshall Islands', 'MH', 'MHL', 692, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, 'Martinique', 'Martinique', 'MQ', 'MTQ', 596, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 'Mauritania', 'Mauritania', 'MR', 'MRT', 222, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 'Mauritius', 'Mauritius', 'MU', 'MUS', 230, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 'Mayotte', 'Mayotte', 'YT', 'MYT', 269, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 'Mexico', 'Mexico', 'MX', 'MEX', 52, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 'Micronesia, Federated States of', 'Micronesia, Federated States of', 'FM', 'FSM', 691, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 'Moldova, Republic of', 'Moldova, Republic of', 'MD', 'MDA', 373, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 'Monaco', 'Monaco', 'MC', 'MCO', 377, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 'Mongolia', 'Mongolia', 'MN', 'MNG', 976, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 'Montserrat', 'Montserrat', 'MS', 'MSR', 1664, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 'Morocco', 'Morocco', 'MA', 'MAR', 212, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(145, 'Mozambique', 'Mozambique', 'MZ', 'MOZ', 258, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(146, 'Myanmar', 'Myanmar', 'MM', 'MMR', 95, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(147, 'Namibia', 'Namibia', 'NA', 'NAM', 264, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(148, 'Nauru', 'Nauru', 'NR', 'NRU', 674, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(149, 'Nepal', 'Nepal', 'NP', 'NPL', 977, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, 'Netherlands', 'Netherlands', 'NL', 'NLD', 31, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, 'Netherlands Antilles', 'Netherlands Antilles', 'AN', 'ANT', 599, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, 'New Caledonia', 'New Caledonia', 'NC', 'NCL', 687, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(153, 'New Zealand', 'New Zealand', 'NZ', 'NZL', 64, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(154, 'Nicaragua', 'Nicaragua', 'NI', 'NIC', 505, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(155, 'Niger', 'Niger', 'NE', 'NER', 227, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(156, 'Nigeria', 'Nigeria', 'NG', 'NGA', 234, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(157, 'Niue', 'Niue', 'NU', 'NIU', 683, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(158, 'Norfolk Island', 'Norfolk Island', 'NF', 'NFK', 672, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(159, 'Northern Mariana Islands', 'Northern Mariana Islands', 'MP', 'MNP', 1670, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(160, 'Norway', 'Norway', 'NO', 'NOR', 47, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(161, 'Oman', 'Oman', 'OM', 'OMN', 968, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(162, 'Pakistan', 'Pakistan', 'PK', 'PAK', 92, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(163, 'Palau', 'Palau', 'PW', 'PLW', 680, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(164, 'Panama', 'Panama', 'PA', 'PAN', 507, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(165, 'Papua New Guinea', 'Papua New Guinea', 'PG', 'PNG', 675, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(166, 'Paraguay', 'Paraguay', 'PY', 'PRY', 595, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(167, 'Peru', 'Peru', 'PE', 'PER', 51, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(168, 'Philippines', 'Philippines', 'PH', 'PHL', 63, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(169, 'Pitcairn', 'Pitcairn', 'PN', 'PCN', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(170, 'Poland', 'Poland', 'PL', 'POL', 48, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(171, 'Portugal', 'Portugal', 'PT', 'PRT', 351, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(172, 'Puerto Rico', 'Puerto Rico', 'PR', 'PRI', 1787, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(173, 'Qatar', 'Qatar', 'QA', 'QAT', 974, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(174, 'Reunion', 'Reunion', 'RE', 'REU', 262, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(175, 'Romania', 'Romania', 'RO', 'ROM', 40, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(176, 'Russian Federation', 'Russian Federation', 'RU', 'RUS', 70, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(177, 'Rwanda', 'Rwanda', 'RW', 'RWA', 250, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(178, 'Saint Kitts and Nevis', 'Saint Kitts and Nevis', 'KN', 'KNA', 1869, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(179, 'Saint Lucia', 'Saint Lucia', 'LC', 'LCA', 1758, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(180, 'Saint Vincent and the Grenadines', 'Saint Vincent and the Grenadines', 'VC', 'VCT', 1784, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(181, 'Samoa', 'Samoa', 'WS', 'WSM', 684, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(182, 'San Marino', 'San Marino', 'SM', 'SMR', 378, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(183, 'Sao Tome and Principe', 'Sao Tome and Principe', 'ST', 'STP', 239, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(184, 'Saudi Arabia', 'Saudi Arabia', 'SA', 'SAU', 966, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(185, 'Senegal', 'Senegal', 'SN', 'SEN', 221, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(186, 'Seychelles', 'Seychelles', 'SC', 'SYC', 248, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(187, 'Sierra Leone', 'Sierra Leone', 'SL', 'SLE', 232, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(188, 'Singapore', 'Singapore', 'SG', 'SGP', 65, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(189, 'Slovak Republic', 'Slovak Republic', 'SK', 'SVK', 421, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(190, 'Slovenia', 'Slovenia', 'SI', 'SVN', 386, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(191, 'Solomon Islands', 'Solomon Islands', 'SB', 'SLB', 677, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(192, 'Somalia', 'Somalia', 'SO', 'SOM', 252, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(193, 'South Africa', 'South Africa', 'ZA', 'ZAF', 27, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(194, 'South Georgia &amp; South Sandwich Islands', 'South Georgia &amp; South Sandwich Islands', 'GS', 'SGS', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(195, 'Spain', 'Spain', 'ES', 'ESP', 34, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(196, 'Sri Lanka', 'Sri Lanka', 'LK', 'LKA', 94, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(197, 'St. Helena', 'St. Helena', 'SH', 'SHN', 290, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(198, 'St. Pierre and Miquelon', 'St. Pierre and Miquelon', 'PM', 'SPM', 508, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(199, 'Sudan', 'Sudan', 'SD', 'SDN', 249, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(200, 'Suriname', 'Suriname', 'SR', 'SUR', 597, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(201, 'Svalbard and Jan Mayen Islands', 'Svalbard and Jan Mayen Islands', 'SJ', 'SJM', 47, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(202, 'Swaziland', 'Swaziland', 'SZ', 'SWZ', 268, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(203, 'Sweden', 'Sweden', 'SE', 'SWE', 46, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(204, 'Switzerland', 'Switzerland', 'CH', 'CHE', 41, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(205, 'Syrian Arab Republic', 'Syrian Arab Republic', 'SY', 'SYR', 963, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(206, 'Taiwan', 'Taiwan', 'TW', 'TWN', 886, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(207, 'Tajikistan', 'Tajikistan', 'TJ', 'TJK', 992, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(208, 'Tanzania, United Republic of', 'Tanzania, United Republic of', 'TZ', 'TZA', 255, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(209, 'Thailand', 'Thailand', 'TH', 'THA', 66, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(210, 'Togo', 'Togo', 'TG', 'TGO', 228, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(211, 'Tokelau', 'Tokelau', 'TK', 'TKL', 690, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(212, 'Tonga', 'Tonga', 'TO', 'TON', 676, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(213, 'Trinidad and Tobago', 'Trinidad and Tobago', 'TT', 'TTO', 1868, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(214, 'Tunisia', 'Tunisia', 'TN', 'TUN', 216, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(215, 'Turkey', 'Turkey', 'TR', 'TUR', 90, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(216, 'Turkmenistan', 'Turkmenistan', 'TM', 'TKM', 7370, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(217, 'Turks and Caicos Islands', 'Turks and Caicos Islands', 'TC', 'TCA', 1649, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(218, 'Tuvalu', 'Tuvalu', 'TV', 'TUV', 688, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(219, 'Uganda', 'Uganda', 'UG', 'UGA', 256, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(220, 'Ukraine', 'Ukraine', 'UA', 'UKR', 380, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(221, 'United Arab Emirates', 'United Arab Emirates', 'AE', 'ARE', 971, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(222, 'United Kingdom', 'United Kingdom', 'GB', 'GBR', 44, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(223, 'United States', 'United States', 'US', 'USA', 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(224, 'United States Minor Outlying Islands', 'United States Minor Outlying Islands', 'UM', 'UMI', 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(225, 'Uruguay', 'Uruguay', 'UY', 'URY', 598, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(226, 'Uzbekistan', 'Uzbekistan', 'UZ', 'UZB', 998, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(227, 'Vanuatu', 'Vanuatu', 'VU', 'VUT', 678, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(228, 'Vatican City State (Holy See)', 'Vatican City State (Holy See)', 'VA', 'VAT', 39, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(229, 'Venezuela', 'Venezuela', 'VE', 'VEN', 58, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(230, 'Viet Nam', 'Viet Nam', 'VN', 'VNM', 84, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(231, 'Virgin Islands (British)', 'Virgin Islands (British)', 'VG', 'VGB', 1284, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(232, 'Virgin Islands (U.S.)', 'Virgin Islands (U.S.)', 'VI', 'VIR', 1340, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(233, 'Wallis and Futuna Islands', 'Wallis and Futuna Islands', 'WF', 'WLF', 681, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(234, 'Western Sahara', 'Western Sahara', 'EH', 'ESH', 212, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(235, 'Yemen', 'Yemen', 'YE', 'YEM', 967, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(237, 'Democratic Republic of Congo', 'Democratic Republic of Congo', 'CD', 'COD', 242, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(238, 'Zambia', 'Zambia', 'ZM', 'ZMB', 260, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(239, 'Zimbabwe', 'Zimbabwe', 'ZW', 'ZWE', 263, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(242, 'Montenegro', 'Montenegro', 'ME', 'MNE', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(243, 'Serbia', 'Serbia', 'RS', 'SRB', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(244, 'Aaland Islands', 'Aaland Islands', 'AX', 'ALA', 123, 1, '0000-00-00 00:00:00', '2020-12-17 22:11:46'),
(245, 'Bonaire, Sint Eustatius and Saba', 'Bonaire, Sint Eustatius and Saba', 'BQ', 'BES', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(246, 'Curacao', 'Curacao', 'CW', 'CUW', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(247, 'Palestinian Territory, Occupied', 'Palestinian Territory, Occupied', 'PS', 'PSE', 970, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(248, 'South Sudan', 'South Sudan', 'SS', 'SSD', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(249, 'St. Barthelemy', 'St. Barthelemy', 'BL', 'BLM', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(250, 'St. Martin (French part)', 'St. Martin (French part)', 'MF', 'MAF', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(251, 'Canary Islands', 'Canary Islands', 'IC', 'ICA', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(252, 'Ascension Island (British)', 'Ascension Island (British)', 'AC', 'ASC', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(253, 'Kosovo, Republic of', 'Kosovo, Republic of', 'XK', 'UNK', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(254, 'Isle of Man', 'Isle of Man', 'IM', 'IMN', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(255, 'Tristan da Cunha', 'Tristan da Cunha', 'TA', 'SHN', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(256, 'Guernsey', 'Guernsey', 'GG', 'GGY', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(257, 'Jersey', 'Jersey', 'JE', 'JEY', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title_en` varchar(100) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `title_en`, `date_added`, `date_modified`, `status`) VALUES
(16, 'Master of Divinity (M. Div.)', '2025-06-27 14:29:05', '2025-06-27 14:29:05', 1),
(17, 'Bachelor of Theology (B.Th.)', '2025-06-27 14:29:53', '2025-06-27 14:29:53', 0),
(18, 'Graduate in Theology (G.Th.)', '2025-06-27 14:30:22', '2025-06-27 14:30:22', 0),
(19, 'Certificate in Theology (C.Th.)', '2025-06-27 14:30:39', '2025-06-27 14:30:39', 0),
(20, 'Diploma in Christian Counseling (DCC)', '2025-06-27 14:30:50', '2025-06-27 14:30:50', 0),
(21, 'Bachelor in Christian Counseling (BCC)', '2025-06-27 14:30:59', '2025-06-27 14:30:59', 0),
(22, 'MA in Counselling Psychology', '2025-06-27 14:31:08', '2025-06-27 14:31:08', 0),
(23, 'Diploma in Theology (Dip.Th.)', '2025-06-27 14:31:16', '2025-06-27 14:31:16', 0);

-- --------------------------------------------------------

--
-- Table structure for table `course_times`
--

CREATE TABLE `course_times` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `time_value` varchar(250) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `course_times`
--

INSERT INTO `course_times` (`id`, `course_id`, `time_value`, `date_added`, `date_modified`, `sort_order`, `status`) VALUES
(1, 16, '9PM', '0000-00-00 00:00:00', '2022-07-28 09:42:04', 0, 1),
(2, 17, '10AM', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(4, 17, '8PM', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(5, 18, 'Regular', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(6, 19, '10AM', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(7, 19, '8PM', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(8, 20, 'Regular', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(9, 21, 'Regular', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(10, 22, 'Regular', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1),
(11, 23, 'Regular', '0000-00-00 00:00:00', '2023-01-16 16:48:41', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `title_en` varchar(250) NOT NULL,
  `status` int(11) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `title_en`, `status`, `date_added`) VALUES
(1, 'SSLC', 0, '2025-06-28 15:12:03'),
(2, 'Plus Two', 0, '2025-06-28 15:12:03'),
(3, 'Diploma', 0, '2025-06-28 15:12:54'),
(4, 'Graduation', 0, '2025-06-28 15:13:03'),
(5, 'Post Graduation', 0, '2025-06-28 15:13:03');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contact_no` varchar(250) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `course_id` int(11) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resetpw_admin`
--

CREATE TABLE `resetpw_admin` (
  `id` int(11) NOT NULL,
  `key_value` text NOT NULL,
  `code` varchar(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `resetpw_admin`
--

INSERT INTO `resetpw_admin` (`id`, `key_value`, `code`, `date`) VALUES
(4, 'YXlzd2FyeWEucHJhc2FkQGlsZWFkaW50ZWdyYXRlZC5jb20=', '66FD', '2022-07-26 09:30:48');

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` int(11) NOT NULL,
  `webtitle_en` varchar(250) NOT NULL,
  `webtitle_ar` varchar(250) NOT NULL,
  `metakey_en` text NOT NULL,
  `metakey_ar` text NOT NULL,
  `metadesc_en` text NOT NULL,
  `metadesc_ar` text NOT NULL,
  `from_email` varchar(250) NOT NULL,
  `from_name` varchar(250) NOT NULL,
  `secret_key` varchar(10) NOT NULL,
  `contact_email` varchar(250) NOT NULL,
  `facebook` text NOT NULL,
  `twitter` text NOT NULL,
  `instagram` varchar(250) NOT NULL,
  `whatsapp` text NOT NULL,
  `linkedin` varchar(250) NOT NULL,
  `youtube` varchar(250) NOT NULL,
  `contact_number` varchar(250) NOT NULL,
  `last_update` datetime NOT NULL,
  `real_account_en` text NOT NULL,
  `real_account_ar` text NOT NULL,
  `demo_account_en` text NOT NULL,
  `demo_account_ar` text NOT NULL,
  `about_en` text NOT NULL,
  `about_ar` text NOT NULL,
  `demoaccount_img` text NOT NULL,
  `realaccount_img` text NOT NULL,
  `enable_seo` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `site_settings`
--

INSERT INTO `site_settings` (`id`, `webtitle_en`, `webtitle_ar`, `metakey_en`, `metakey_ar`, `metadesc_en`, `metadesc_ar`, `from_email`, `from_name`, `secret_key`, `contact_email`, `facebook`, `twitter`, `instagram`, `whatsapp`, `linkedin`, `youtube`, `contact_number`, `last_update`, `real_account_en`, `real_account_ar`, `demo_account_en`, `demo_account_ar`, `about_en`, `about_ar`, `demoaccount_img`, `realaccount_img`, `enable_seo`) VALUES
(1, 'Sword Capital', 'Sword Capital', 'Sword Capital, Financial Brokerage', 'Sword Capital, Financial Brokerage', 'Worldwide Brokerage', 'Worldwide Brokerage', 'info@sword-capital.com', 'Sword Capital', '$4AHT#NIti', 'info@sword-capital.com', 'https://www.facebook.com/swordcapital', '#', 'https://www.instagram.com/swordcapital/', '+96522468817', 'https://www.linkedin.com/in/sword-capital-91b904a2?trk=hp-identity-name', 'https://www.youtube.com/channel/UCd6CahP6QjX-fdVbrP2B_fQ', '+96522468817', '2023-01-16 16:52:13', '#', '#', '#', '#', 'Sword Capital Trademark is reserved worldwide and is only used by Sword Capital companies, which are accredited by Sword Capital Kuwait and any illegal use is held accountable in any country in the world.\r\nSword Capital does not offer its services to residents of certain jurisdictions such as USA, Iran, Cuba, Sudan, Syria, North Korea or any country restricted by FATF', 'سورد كابيتال هي علامة تجارية ومسجلة ومحفوظة عالمياً لشركات سورد كابيتال حول العالم وتعمل في مجال الوساطة المالية العالمية كما تخدم عملاءها من الافراد والشركات في آسيا، أفريقيا، أوروبا، أستراليا وامريكا الجنوبية.', '/upload/images/00f32a023c6c54322a851b0ef0964fba.png', '/upload/images/box1.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_groups`
--

CREATE TABLE `user_groups` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `md_access` text NOT NULL,
  `md_modify` text NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `user_groups`
--

INSERT INTO `user_groups` (`id`, `name`, `md_access`, `md_modify`, `date_added`, `date_modified`) VALUES
(1, 'admin', '1,2,3,4,5,6,7,11,13,14,15,16,23,24,25,26', '1,2,3,4,5,6,7,11,13,14,15,16,23,24,25,26', '2017-01-10 00:00:00', '2022-10-04 13:14:23'),
(2, 'superadmin', '1,2,3,4,5,6,7,11,13,14,15,16,23,24,25,26', '1,2,3,4,5,6,7,11,13,14,15,16,23,24,25,26', '2017-01-10 00:00:00', '2022-09-08 10:25:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_modules`
--
ALTER TABLE `admin_modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_times`
--
ALTER TABLE `course_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resetpw_admin`
--
ALTER TABLE `resetpw_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_groups`
--
ALTER TABLE `user_groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `admin_modules`
--
ALTER TABLE `admin_modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=259;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `course_times`
--
ALTER TABLE `course_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resetpw_admin`
--
ALTER TABLE `resetpw_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_groups`
--
ALTER TABLE `user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
