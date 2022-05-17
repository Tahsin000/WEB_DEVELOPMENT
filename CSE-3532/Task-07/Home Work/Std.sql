-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 17, 2022 at 09:49 AM
-- Server version: 5.1.41
-- PHP Version: 5.3.1
 
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
 
 
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
 
--
-- Database: `std`
--
 
-- --------------------------------------------------------
 
--
-- Table structure for table `student`
--
 
CREATE TABLE IF NOT EXISTS `student` (
  `StudentName` varchar(30) NOT NULL,
  `StudentID` int(7) NOT NULL,
  `StudentPhone` varchar(11) NOT NULL,
  `StudentLocation` varchar(50) NOT NULL,
  `Update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`StudentID`)
) ENGINE=MyISAM DEFAULT CHARSET=ascii;
 
--
-- Dumping data for table `student`
--
 
INSERT INTO `student` (`StudentName`, `StudentID`, `StudentPhone`, `StudentLocation`, `Update`) VALUES
('Nimur', 1, '01830986665', 'CTG', '2022-05-17 15:26:08'),
('Rahat', 12, '01830986665', 'CTG', '2022-05-17 15:26:38');
 
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
