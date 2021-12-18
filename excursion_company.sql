-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 14, 2021 at 07:11 PM
-- Server version: 8.0.23
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `excursion_company`
--

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE `Account` (
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `AccessLevel` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Account`
--

INSERT INTO `Account` (`Username`, `Password`, `Email`, `AccessLevel`) VALUES
('alexisstew', '1234', 'astew@gmail.com', 'Customer'),
('AWinters', 'itsAutumnNotFall', 'awinters@excursions.ca', 'General Staff'),
('JCabbage', 'lettuce1234', 'jcabbage@excursions.ca', 'General Staff'),
('jimsim', '123JIM', 'jimmysimm@hotmail.com', 'Customer'),
('Luke.Fairway', 'golf2live', 'luke.fairway@excursions.ca', 'Admin'),
('MGreen', 'meow', 'mgreen@excursions.ca', 'General Staff'),
('Nicole.Stevenson', 'purple', 'nicole.stevenson@excursions.ca', 'Admin'),
('RLarson', 'swim', 'rlarson@excursions.ca', 'General Staff'),
('suz.johnson', 'zzz', 'suzie2002@hotmail.com', 'Customer');

-- --------------------------------------------------------

--
-- Table structure for table `Booking`
--

CREATE TABLE `Booking` (
  `BookingID` varchar(10) NOT NULL,
  `NumAdults` int NOT NULL,
  `NumMinors` int NOT NULL,
  `Cost` int NOT NULL,
  `TimeSlot` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Booking`
--

-- INSERT INTO `Booking` (`BookingID`, `NumAdults`, `NumMinors`, `Cost`, `TimeSlot`) VALUES
-- ('BX9S7GE3', 3, 0, 105, 'HIKE1');

-- --------------------------------------------------------

--
-- Table structure for table `Books`
--

CREATE TABLE `Books` (
  `BookingID` varchar(10) NOT NULL,
  `ExcursionName` varchar(50) NOT NULL,
  `Participants` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Books`
--

-- INSERT INTO `Books` (`BookingID`, `ExcursionName`, `Participants`) VALUES
-- ('BX9S7GE3', '2 Hour Guided Hike', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Coordinator`
--

CREATE TABLE `Coordinator` (
  `StaffID` int NOT NULL,
  `Shift` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Coordinator`
--

INSERT INTO `Coordinator` (`StaffID`, `Shift`) VALUES
(5, 'CTS1'),
(5, 'CTS2'),
(5, 'CTS3'),
(6, 'CTS4'),
(6, 'CTS5'),
(6, 'CTS6'),
(5, 'CTS4');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Address` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `City` varchar(20) NOT NULL,
  `Country` varchar(20) NOT NULL,
  `PostalCode` varchar(8) NOT NULL,
  `PhoneNumber` varchar(30) NOT NULL,
  `DOB` date NOT NULL,
  `HotelID` int DEFAULT NULL,
  `AccountUsername` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerID`, `FirstName`, `LastName`, `Address`, `City`, `Country`, `PostalCode`, `PhoneNumber`, `DOB`, `HotelID`, `AccountUsername`) VALUES
(1, 'Sheila', 'Carlson', '123 Sesame Street', 'Calgary', 'Canada', 'P1P 1P1', '403-111-1111', '2000-04-05', 1002, 'alexisstew'),
(2, 'Jimmy', 'Simmons', '222 Pineridge Crescent', 'Edmonton', 'Canada', 'T2W 7I2', '780-222-1212', '1980-03-22', NULL, 'jimsim'),
(3, 'Suzie', 'Johnson', '222 Pineridge Crescent', 'Edmonton', 'Canada', 'T2W 6T4', '780-111-2222', '2002-02-14', 1001, 'suz.johnson');

-- --------------------------------------------------------

--
-- Table structure for table `Emergency_Contact`
--

CREATE TABLE `Emergency_Contact` (
  `Name` varchar(100) NOT NULL,
  `PhoneNumber` varchar(30) NOT NULL,
  `Relationship` varchar(30) DEFAULT NULL,
  `CustomerID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Emergency_Contact`
--

INSERT INTO `Emergency_Contact` (`Name`, `PhoneNumber`, `Relationship`, `CustomerID`) VALUES
('Jane Johnson', '780-222-2222', 'Mother', 3),
('Joel Simmons', '780-222-1111', 'Brother', 2),
('Sarah Sampson', '403-111-1212', 'Aunt', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Excursion`
--

CREATE TABLE `Excursion` (
  `Name` varchar(50) NOT NULL,
  `Duration` int NOT NULL,
  `Cost` int NOT NULL,
  `Months` varchar(300) DEFAULT NULL,
  `MaxParticipants` int DEFAULT NULL,
  `CoordinatorID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Excursion`
--

INSERT INTO `Excursion` (`Name`, `Duration`, `Cost`, `Months`, `MaxParticipants`, `CoordinatorID`) VALUES
('2 Hour Guided Hike', 2, 35, 'All', 10, 5),
('Adult Ski Lessons', 8, 125, 'November-April', 15, 5),
('Canoeing', 3, 45, 'May-August', 8, 6),
('Ice Skating', 3, 50, 'All', NULL, 5),
('Kids Ski Lessons', 4, 75, 'November-April', 15, 6),
('Snowshoeing', 4, 75, 'November-March', 10, 5);

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `PartnerID` int NOT NULL,
  `Name` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Address` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `City` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PostalCode` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`PartnerID`, `Name`, `PhoneNumber`, `Address`, `City`, `PostalCode`) VALUES
(1001, 'Mariott Banff', '403-333-8888', '123 Elk Avenue', 'Banff', 'R5R 2R2'),
(1002, 'Holiday Inn Lake Louise', '403-333-9922', '456 Beaver Street', 'Lake Louise', 'R3T T3R'),
(1003, 'Fairmont Banff Springs', '403-333-2772', '789 Moose Drive', 'Banff', 'R4R 4R4');

-- --------------------------------------------------------

--
-- Table structure for table `Makes_a`
--

CREATE TABLE `Makes_a` (
  `CustomerID` int NOT NULL,
  `BookingID` varchar(10) NOT NULL,
  `Receipt` varchar(500) DEFAULT NULL,
  `AgreementSignature` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Makes_a`
--

-- INSERT INTO `Makes_a` (`CustomerID`, `BookingID`, `Receipt`, `AgreementSignature`) VALUES
-- (2, 'BX9S7GE3', 'I agree to pay the total cost onsite', 'Jimmy Simmons');

-- --------------------------------------------------------

--
-- Table structure for table `Offers`
--

CREATE TABLE `Offers` (
  `ExcursionName` varchar(50) NOT NULL,
  `TimeSlot` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Offers`
--

INSERT INTO `Offers` (`ExcursionName`, `TimeSlot`) VALUES
('2 Hour Guided Hike', 'HIKE1'),
('Ice Skating', 'ICE1'),
('Ice Skating', 'ICE2'),
('Adult Ski Lessons', 'ADSKI1'),
('Kids Ski Lessons', 'KSKI1'),
('Snowshoeing', 'SNO1'),
('Snowshoeing', 'SNO2');

-- --------------------------------------------------------

--
-- Table structure for table `Schedule`
--

CREATE TABLE `Schedule` (
  `TimeSlotID` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Start` int NOT NULL,
  `End` int NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Schedule`
--

INSERT INTO `Schedule` (`TimeSlotID`, `Start`, `End`, `Date`) VALUES
('ADSKI1', 8, 16, '2022-01-07'),
('CAN1', 13, 16, '2022-08-07'),
('CAN2', 13, 16, '2022-08-08'),
('CTS1', 9, 14, '2022-01-03'),
('CTS2', 9, 14, '2022-01-05'),
('CTS3', 9, 14, '2022-01-07'),
('CTS4', 9, 14, '2022-01-10'),
('CTS5', 9, 14, '2022-01-12'),
('CTS6', 9, 14, '2022-01-14'),
('HIKE1', 10, 12, '2022-01-03'),
('ICE1', 13, 16, '2022-01-03'),
('ICE2', 13, 16, '2022-01-05'),
('KSKI1', 10, 14, '2022-01-12'),
('SNO1', 10, 14, '2022-01-10'),
('SNO2', 10, 14, '2022-01-14'),
('TG1S1', 8, 16, '2022-01-03'),
('TG1S2', 8, 16, '2022-01-05'),
('TG1S3', 8, 16, '2022-01-07'),
('TG1S4', 8, 16, '2022-01-10'),
('TG1S5', 8, 16, '2022-01-12'),
('TG1S6', 8, 16, '2022-01-14'),
('TG2S1', 9, 17, '2022-01-03'),
('TG2S2', 9, 17, '2022-01-05'),
('TG2S3', 9, 17, '2022-01-07'),
('TG2S4', 9, 17, '2022-01-10'),
('TG2S5', 9, 17, '2022-01-12'),
('TG2S6', 9, 17, '2022-01-14');

-- --------------------------------------------------------

--
-- Table structure for table `Staff`
--

CREATE TABLE `Staff` (
  `StaffID` int NOT NULL,
  `SIN` varchar(20) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Address` varchar(300) NOT NULL,
  `City` varchar(50) NOT NULL,
  `PostalCode` varchar(10) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `DOB` date NOT NULL,
  `Mgr_SIN` varchar(20) DEFAULT NULL,
  `AccountUsername` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Staff`
--

INSERT INTO `Staff` (`StaffID`, `SIN`, `FirstName`, `LastName`, `Address`, `City`, `PostalCode`, `PhoneNumber`, `DOB`, `Mgr_SIN`, `AccountUsername`) VALUES
(1, '11100011', 'Autumn', 'Winters', '722 Caribou Drive', 'Banff', 'R5R 2S3', '403-444-4444', '1995-12-12', '88882626', 'AWinters'),
(2, '12200022', 'River', 'Larson', '8668 Rocky Ridge Green', 'Calgary', 'T2T 3U4', '403-678-1234', '1987-08-02', '88882626', 'RLarson'),
(3, '23003244', 'Maeve', 'Green', '5678 Frozen Lake Road', 'Lake Louise', 'R3T 1R1', '403-224-4444', '1993-05-05','88882626' , 'MGreen'),
(4, '23451234', 'John', 'Cabbage', '222 Kananaskis Way', 'Kananaskis', 'R8R 8T3', '587-211-3333', '1990-03-01', '88882626', 'JCabbage'),
(5, '88882626', 'Nicole', 'Stevenson', '1111 Brentwood Circle', 'Calgary', 'T2T 7H8', '403-266-9999', '1978-08-09', NULL, 'Nicole.Stevenson'),
(6, '88883434', 'Luke', 'Fairway', '312 Banff Avenue', 'Banff', 'R5R 1T2', '403-822-9933', '1975-02-14', NULL, 'Luke.Fairway');


-- --------------------------------------------------------

--
-- Table structure for table `Tour_Guide`
--

CREATE TABLE `Tour_Guide` (
  `StaffID` int NOT NULL,
  `Shift` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Tour_Guide`
--

INSERT INTO `Tour_Guide` (`StaffID`, `Shift`) VALUES
(2, 'TG1S1'),
(2, 'TG1S2'),
(1, 'TG2S1'),
(1, 'TG2S2'),
(3, 'TG1S3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`Username`);

--
-- Indexes for table `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`BookingID`),
  ADD KEY `TimeSlot` (`TimeSlot`);

--
-- Indexes for table `Books`
--
ALTER TABLE `Books`
  ADD KEY `books_ibfk_1` (`BookingID`),
  ADD KEY `books_ibfk_2` (`ExcursionName`);

--
-- Indexes for table `Coordinator`
--
ALTER TABLE `Coordinator`
  ADD KEY `coordinator_ibfk_2` (`Shift`),
  ADD KEY `coordinator_ibfk_3` (`StaffID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `customer_ibfk_1` (`HotelID`),
  ADD KEY `customer_ibfk_2` (`AccountUsername`);

--
-- Indexes for table `Emergency_Contact`
--
ALTER TABLE `Emergency_Contact`
  ADD PRIMARY KEY (`Name`),
  ADD KEY `emergency_contact_ibfk_1` (`CustomerID`);

--
-- Indexes for table `Excursion`
--
ALTER TABLE `Excursion`
  ADD PRIMARY KEY (`Name`),
  ADD KEY `excursion_ibfk_1` (`CoordinatorID`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`PartnerID`);

--
-- Indexes for table `Makes_a`
--
ALTER TABLE `Makes_a`
  ADD KEY `makes_a_ibfk_1` (`CustomerID`),
  ADD KEY `makes_a_ibfk_2` (`BookingID`);

--
-- Indexes for table `Offers`
--
ALTER TABLE `Offers`
  ADD KEY `ExcursionName` (`ExcursionName`),
  ADD KEY `TimeSlot` (`TimeSlot`);

--
-- Indexes for table `Schedule`
--
ALTER TABLE `Schedule`
  ADD PRIMARY KEY (`TimeSlotID`);

--
-- Indexes for table `Staff`
--
ALTER TABLE `Staff`
  ADD PRIMARY KEY (`StaffID`),
  ADD UNIQUE KEY `SIN` (`SIN`),
  ADD KEY `Mgr_SIN` (`Mgr_SIN`),
  ADD KEY `AccountUsername` (`AccountUsername`);

--
-- Indexes for table `Tour_Guide`
--
ALTER TABLE `Tour_Guide`
  ADD KEY `StaffID` (`StaffID`),
  ADD KEY `Shift` (`Shift`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `PartnerID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1004;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Coordinator`
--
ALTER TABLE `Coordinator`
  ADD CONSTRAINT `coordinator_ibfk_1` FOREIGN KEY (`StaffID`) REFERENCES `Staff` (`StaffID`),
  ADD CONSTRAINT `coordinator_ibfk_2` FOREIGN KEY (`Shift`) REFERENCES `Schedule` (`TimeSlotID`),
  ADD CONSTRAINT `coordinator_ibfk_3` FOREIGN KEY (`StaffID`) REFERENCES `Staff` (`StaffID`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`HotelID`) REFERENCES `hotel` (`PartnerID`),
  ADD CONSTRAINT `customer_ibfk_2` FOREIGN KEY (`AccountUsername`) REFERENCES `Account` (`Username`);

--
-- Constraints for table `Emergency_Contact`
--
ALTER TABLE `Emergency_Contact`
  ADD CONSTRAINT `emergency_contact_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Excursion`
--
ALTER TABLE `Excursion`
  ADD CONSTRAINT `excursion_ibfk_1` FOREIGN KEY (`CoordinatorID`) REFERENCES `Coordinator` (`StaffID`) ON DELETE RESTRICT;

--
-- Constraints for table `Offers`
--
ALTER TABLE `Offers`
  ADD CONSTRAINT `offers_ibfk_1` FOREIGN KEY (`ExcursionName`) REFERENCES `Excursion` (`Name`),
  ADD CONSTRAINT `offers_ibfk_2` FOREIGN KEY (`TimeSlot`) REFERENCES `Schedule` (`TimeSlotID`);

--
-- Constraints for table `Staff`
--
ALTER TABLE `Staff`
  ADD CONSTRAINT `AccountUsername` FOREIGN KEY (`AccountUsername`) REFERENCES `Account` (`Username`),
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`Mgr_SIN`) REFERENCES `Staff` (`SIN`);

--
-- Constraints for table `Tour_Guide`
--
ALTER TABLE `Tour_Guide`
  ADD CONSTRAINT `tour_guide_ibfk_1` FOREIGN KEY (`StaffID`) REFERENCES `Staff` (`StaffID`),
  ADD CONSTRAINT `tour_guide_ibfk_2` FOREIGN KEY (`Shift`) REFERENCES `Schedule` (`TimeSlotID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
