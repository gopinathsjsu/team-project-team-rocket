-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2021 at 02:30 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twozerotwo`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `TRANSACTIONID` varchar(13) DEFAULT NULL,
  `FLIGHTDATE` varchar(10) DEFAULT NULL,
  `AIRLINECODE` varchar(11) DEFAULT NULL,
  `AIRLINENAME` varchar(25) DEFAULT NULL,
  `TAILNUM` varchar(7) DEFAULT NULL,
  `FLIGHTNUM` varchar(9) DEFAULT NULL,
  `ORIGINAIRPORTCODE` varchar(17) DEFAULT NULL,
  `ORIGAIRPORTNAME` varchar(65) DEFAULT NULL,
  `ORIGINCITYNAME` varchar(26) DEFAULT NULL,
  `ORIGINSTATE` varchar(11) DEFAULT NULL,
  `ORIGINSTATENAME` varchar(46) DEFAULT NULL,
  `DESTAIRPORTCODE` varchar(15) DEFAULT NULL,
  `DESTAIRPORTNAME` varchar(65) DEFAULT NULL,
  `DESTCITYNAME` varchar(26) DEFAULT NULL,
  `DESTSTATE` varchar(9) DEFAULT NULL,
  `DESTSTATENAME` varchar(46) DEFAULT NULL,
  `CRSDEPTIME` varchar(10) DEFAULT NULL,
  `DEPTIME` varchar(7) DEFAULT NULL,
  `DEPDELAY` varchar(8) DEFAULT NULL,
  `TAXIOUT` varchar(7) DEFAULT NULL,
  `WHEELSOFF` varchar(9) DEFAULT NULL,
  `WHEELSON` varchar(8) DEFAULT NULL,
  `TAXIIN` varchar(6) DEFAULT NULL,
  `CRSARRTIME` varchar(10) DEFAULT NULL,
  `ARRTIME` varchar(7) DEFAULT NULL,
  `ARRDELAY` varchar(8) DEFAULT NULL,
  `CRSELAPSEDTIME` varchar(14) DEFAULT NULL,
  `ACTUALELAPSEDTIME` varchar(17) DEFAULT NULL,
  `CANCELLED` varchar(9) DEFAULT NULL,
  `DIVERTED` varchar(8) DEFAULT NULL,
  `DISTANCE` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`TRANSACTIONID`, `FLIGHTDATE`, `AIRLINECODE`, `AIRLINENAME`, `TAILNUM`, `FLIGHTNUM`, `ORIGINAIRPORTCODE`, `ORIGAIRPORTNAME`, `ORIGINCITYNAME`, `ORIGINSTATE`, `ORIGINSTATENAME`, `DESTAIRPORTCODE`, `DESTAIRPORTNAME`, `DESTCITYNAME`, `DESTSTATE`, `DESTSTATENAME`, `CRSDEPTIME`, `DEPTIME`, `DEPDELAY`, `TAXIOUT`, `WHEELSOFF`, `WHEELSON`, `TAXIIN`, `CRSARRTIME`, `ARRTIME`, `ARRDELAY`, `CRSELAPSEDTIME`, `ACTUALELAPSEDTIME`, `CANCELLED`, `DIVERTED`, `DISTANCE`) VALUES
('31925900', '19980127', 'RA', 'Rocket Airlines Inc.', 'N1836U', '223', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '1510', '1510', '0', '15', '1525', '1624', '6', '1638', '1630', '-8', '148', '140', 'FALSE', 'F', '888 miles'),
('40384100', '19990509', 'RA', 'Rocket Airlines Inc.', 'N7288U', '1047', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '915', '918', '3', '9', '927', '1123', '3', '1137', '1126', '-11', '142', '128', 'F', 'FALSE', '925 miles'),
('39368000', '19990510', 'RA', 'Rocket Airlines Inc.', 'N816UA', '391', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1644', '1644', '0', '20', '1704', '1843', '2', '1857', '1845', '-12', '253', '241', 'FALSE', 'FALSE', '1721 miles'),
('40250800', '19990511', 'RA', 'Rocket Airlines Inc.', 'N203UA', '636', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '730', '727', '-3', '9', '736', '1018', '7', '1026', '1025', '-1', '116', '118', 'FALSE', 'F', '719 miles'),
('38966100', '19990512', 'RA', 'Rocket Airlines Inc.', 'N526UA', '1436', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '744', '748', '4', '33', '821', '1007', '3', '951', '1010', '19', '67', '82', 'FALSE', 'FALSE', '316 miles'),
('40520300', '19990512', 'RA', 'Rocket Airlines Inc.', 'N528UA', '109', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '915', '951', '36', '18', '1009', '1151', '6', '1140', '1157', '17', '265', '246', 'F', 'FALSE', '1745 miles'),
('39411600', '19990515', 'RA', 'Rocket Airlines Inc.', 'N782UA', '762', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '800', '801', '1', '21', '822', '1018', '7', '1028', '1025', '-3', '268', '264', 'FALSE', 'F', '1846 miles'),
('39716600', '19990517', 'RA', 'Rocket Airlines Inc.', 'N7259U', '1500', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '1650', '1738', '48', '122', '1940', '2305', '4', '2013', '2309', '176', '143', '271', 'FALSE', 'FALSE', '1005 miles'),
('7563300', '19930529', 'RA', 'Rocket Airlines Inc.', '', '1116', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '1500', '1457', '-3', '', '', '', '', '1616', '1611', '-5', '76', '74', 'FALSE', 'FALSE', '337 miles'),
('7622400', '19930529', 'RA', 'Rocket Airlines Inc.', '', '1770', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1700', '1706', '6', '', '', '', '', '1933', '1924', '-9', '153', '138', 'FALSE', 'F', '954 miles'),
('7413400', '19930529', 'RA', 'Rocket Airlines Inc.', '', '36', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '730', '729', '-1', '', '', '', '', '1514', '1518', '4', '284', '289', 'FALSE', 'F', '2288 miles'),
('7539100', '19930530', 'RA', 'Rocket Airlines Inc.', '', '842', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1300', '1330', '30', '', '', '', '', '1908', '1918', '10', '248', '228', 'FALSE', 'F', '1745 miles'),
('7412700', '19930531', 'RA', 'Rocket Airlines Inc.', '', '30', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '1240', '1240', '0', '', '', '', '', '2055', '2048', '-7', '315', '308', 'FALSE', 'F', '2454 miles'),
('7492800', '19930519', 'RA', 'Rocket Airlines Inc.', '', '533', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '1305', '1303', '-2', '', '', '', '', '1620', '1636', '16', '135', '153', 'F', 'FALSE', '849 miles'),
('6603200', '19930126', 'RA', 'Rocket Airlines Inc.', '', '290', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '1255', '1253', '-2', '', '', '', '', '2034', '2025', '-9', '279', '272', '0', '0', '2217 miles'),
('43613500', '20000129', 'RA', 'Rocket Airlines Inc.', 'N826UA', '530', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1345', '1341', '-4', '13', '1354', '1838', '9', '1849', '1847', '-2', '184', '186', '0', '0', '1379 miles'),
('141616700', '20150507', 'RA', 'Rocket Airlines Inc.', 'N65832', '1166', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '2139', '2139', '0', '15', '2154', '2313', '12', '2325', '2325', '0', '226', '226', 'F', 'FALSE', '1379 miles'),
('140939700', '20150507', 'RA', 'Rocket Airlines Inc.', 'N57870', '1764', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '850', '848', '-2', '14', '902', '1148', '8', '1204', '1156', '-8', '134', '128', 'FALSE', 'F', '854 miles'),
('141612400', '20150508', 'RA', 'Rocket Airlines Inc.', 'N462UA', '509', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1018', '1025', '7', '16', '1041', '1253', '13', '1301', '1306', '5', '163', '161', 'FALSE', 'F', '925 miles'),
('141625400', '20150510', 'RA', 'Rocket Airlines Inc.', 'N69833', '1905', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '1137', '1144', '7', '88', '1312', '1451', '26', '1306', '1517', '131', '149', '273', 'F', 'FALSE', '862 miles'),
('141604200', '20150510', 'RA', 'Rocket Airlines Inc.', 'N66841', '1456', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '1000', '1016', '16', '33', '1049', '1247', '12', '1219', '1259', '40', '259', '283', 'FALSE', 'F', '1635 miles'),
('123603900', '20120529', 'RA', 'Rocket Airlines Inc.', 'N463UA', '220', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '2316', '2316', '0', '12', '2328', '624', '10', '636', '634', '-2', '260', '258', 'FALSE', 'FALSE', '2052 miles'),
('147160000', '20160531', 'RA', 'Rocket Airlines Inc.', 'N72405', '1779', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '943', '942', '-1', '18', '1000', '1213', '9', '1238', '1222', '-16', '295', '280', '0', '0', '1874 miles'),
('144993900', '20160102', 'RA', 'Rocket Airlines Inc.', 'N415UA', '1979', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '851', '856', '5', '18', '914', '1303', '6', '1317', '1309', '-8', '206', '193', '0', '0', '1400 miles'),
('146646900', '20160502', 'RA', 'Rocket Airlines Inc.', 'N78509', '1616', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '1623', '1627', '4', '21', '1648', '1947', '3', '2014', '1950', '-24', '171', '143', 'F', 'FALSE', '1091 miles'),
('7422800', '19930531', 'RA', 'Rocket Airlines Inc.', '', '97', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '800', '800', '0', '', '', '', '', '1048', '1043', '-5', '348', '343', 'FALSE', 'F', '2454 miles'),
('7422100', '19930507', 'RA', 'Rocket Airlines Inc.', '', '91', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '840', '839', '-1', '', '', '', '', '1055', '1109', '14', '255', '270', 'FALSE', 'FALSE', '1617 miles'),
('7455600', '19930510', 'RA', 'Rocket Airlines Inc.', '', '329', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '2030', '2040', '10', '', '', '', '', '2152', '2136', '-16', '142', '116', 'FALSE', 'F', '719 miles'),
('7411300', '19930510', 'RA', 'Rocket Airlines Inc.', '', '19', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '1705', '1703', '-2', '', '', '', '', '2017', '1950', '-27', '372', '347', '0', '0', '2565 miles'),
('7615500', '19930504', 'RA', 'Rocket Airlines Inc.', '', '1683', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '1225', '1229', '4', '', '', '', '', '1502', '1506', '4', '157', '157', '0', '0', '938 miles'),
('6734400', '19930107', 'RA', 'Rocket Airlines Inc.', '', '1261', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1500', '1458', '-2', '', '', '', '', '1610', '1600', '-10', '70', '62', 'FALSE', 'FALSE', '213 miles'),
('28540300', '19970531', 'RA', 'Rocket Airlines Inc.', 'N437UA', '243', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1800', '1800', '0', '30', '1830', '2043', '4', '2051', '2047', '-4', '351', '347', 'FALSE', 'FALSE', '2401 miles'),
('121746100', '20120102', 'RA', 'Rocket Airlines Inc.', 'N14237', '119', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '1800', '1818', '18', '16', '1834', '1937', '8', '1944', '1945', '1', '104', '87', 'FALSE', 'FALSE', '404 miles'),
('121748100', '20120102', 'RA', 'Rocket Airlines Inc.', 'N53442', '1589', 'MER', 'Mariner 10 Space Station', 'Mercury', 'NJ', 'New Jersey', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '840', '844', '4', '12', '856', '1116', '5', '1156', '1121', '-35', '256', '217', 'FALSE', 'FALSE', '1400 miles'),
('30140400', '19970926', 'RA', 'Rocket Airlines Inc.', 'N576UA', '329', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '850', '851', '1', '10', '901', '1016', '5', '1034', '1021', '-13', '224', '210', 'FALSE', 'F', '1546 miles'),
('30939000', '19970930', 'RA', 'Rocket Airlines Inc.', 'N583UA', '1219', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '815', '814', '-1', '11', '825', '945', '8', '954', '953', '-1', '159', '159', '0', '0', '1005 miles'),
('27852900', '19970123', 'RA', 'Rocket Airlines Inc.', 'N407UA', '491', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '800', '801', '1', '11', '812', '1017', '6', '1026', '1023', '-3', '326', '322', 'FALSE', 'F', '2217 miles'),
('29523900', '19970529', 'RA', 'Rocket Airlines Inc.', 'N573UA', '1217', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1423', '1421', '-2', '11', '1432', '1610', '4', '1630', '1614', '-16', '127', '113', '0', '0', '758 miles'),
('34441500', '19980528', 'RA', 'Rocket Airlines Inc.', 'N565UA', '95', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '730', '730', '0', '15', '745', '959', '6', '1001', '1005', '4', '331', '335', 'FALSE', 'F', '2445 miles'),
('134426400', '20140102', 'RA', 'Rocket Airlines Inc.', 'N468UA', '338', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '1604', '1701', '57', '25', '1726', '1920', '4', '1833', '1924', '51', '149', '143', 'FALSE', 'F', '895 miles'),
('134441600', '20140102', 'RA', 'Rocket Airlines Inc.', 'N567UA', '998', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '1906', '1935', '29', '19', '1954', '2144', '16', '2139', '2200', '21', '153', '145', 'FALSE', 'F', '937 miles'),
('134423300', '20140104', 'RA', 'Rocket Airlines Inc.', 'N838UA', '261', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '751', '756', '5', '20', '816', '919', '6', '931', '925', '-6', '160', '149', '0', '0', '854 miles'),
('1264900', '19920106', 'RA', 'Rocket Airlines Inc.', '', '1760', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1130', '1216', '46', '', '', '', '', '1336', '1435', '59', '126', '139', 'FALSE', 'F', '679 miles'),
('1081200', '19920107', 'RA', 'Rocket Airlines Inc.', '', '194', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1620', '1625', '5', '', '', '', '', '2221', '2234', '13', '241', '249', 'FALSE', 'FALSE', '1846 miles'),
('1256900', '19920107', 'RA', 'Rocket Airlines Inc.', '', '1640', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '630', '633', '3', '', '', '', '', '952', '', '', '142', '', 'FALSE', 'TRUE', '956 miles'),
('1181700', '19920108', 'RA', 'Rocket Airlines Inc.', '', '810', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '1230', '1227', '-3', '', '', '', '', '1351', '1358', '7', '81', '91', 'FALSE', 'FALSE', '337 miles'),
('1083200', '19920108', 'RA', 'Rocket Airlines Inc.', '', '208', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1255', '1306', '11', '', '', '', '', '2047', '2104', '17', '292', '298', '0', '0', '2419 miles'),
('1182700', '19920126', 'RA', 'Rocket Airlines Inc.', '', '828', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1210', '1208', '-2', '', '', '', '', '1753', '1810', '17', '223', '242', 'FALSE', 'F', '1635 miles'),
('1091500', '19920126', 'RA', 'Rocket Airlines Inc.', '', '254', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '1230', '1231', '1', '', '', '', '', '2041', '2040', '-1', '311', '309', 'FALSE', 'FALSE', '2445 miles'),
('22238500', '19960117', 'RA', 'Rocket Airlines Inc.', 'N539UA', '72', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '915', '918', '3', '16', '934', '1719', '9', '1732', '1728', '-4', '317', '310', 'F', 'FALSE', '2565 miles'),
('141584200', '20150513', 'RA', 'Rocket Airlines Inc.', 'N34282', '1681', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '2233', '2224', '-9', '26', '2250', '602', '6', '616', '608', '-8', '283', '284', '0', '0', '2161 miles'),
('134443800', '20140101', 'RA', 'Rocket Airlines Inc.', 'N36272', '1148', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1306', '1632', '206', '14', '1646', '2354', '9', '2100', '3', '183', '294', '271', 'FALSE', 'F', '2306 miles'),
('134432100', '20140103', 'RA', 'Rocket Airlines Inc.', 'N76515', '1463', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '2332', '2344', '12', '10', '2354', '642', '7', '648', '649', '1', '256', '245', 'FALSE', 'F', '2021 miles'),
('134431200', '20140103', 'RA', 'Rocket Airlines Inc.', 'N37293', '1173', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '1813', '1822', '9', '17', '1839', '2010', '7', '2029', '2017', '-12', '136', '115', '0', '0', '679 miles'),
('132568700', '20130902', 'RA', 'Rocket Airlines Inc.', 'N75410', '1495', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1403', '1404', '1', '15', '1419', '1938', '11', '1958', '1949', '-9', '235', '225', '0', '0', '1721 miles'),
('131816400', '20130903', 'RA', 'Rocket Airlines Inc.', 'N449UA', '690', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '746', '740', '-6', '14', '754', '1108', '9', '1121', '1117', '-4', '155', '157', 'FALSE', 'F', '1024 miles'),
('132546500', '20130905', 'RA', 'Rocket Airlines Inc.', 'N849UA', '636', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '611', '604', '-7', '28', '632', '1414', '18', '1427', '1432', '5', '316', '328', '0', '0', '2402 miles'),
('132523800', '20130911', 'RA', 'Rocket Airlines Inc.', 'N75436', '1581', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1339', '1339', '0', '10', '1349', '1935', '6', '1951', '1941', '-10', '252', '242', '0', '0', '1874 miles'),
('139574800', '20150124', 'RA', 'Rocket Airlines Inc.', 'N841UA', '357', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '1706', '1652', '-14', '15', '1707', '1909', '8', '1947', '1917', '-30', '161', '145', 'FALSE', 'F', '954 miles'),
('4468300', '19920918', 'RA', 'Rocket Airlines Inc.', '', '173', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '855', '855', '0', '', '', '', '', '1127', '1122', '-5', '332', '327', 'F', 'FALSE', '2419 miles'),
('4511000', '19920920', 'RA', 'Rocket Airlines Inc.', '', '435', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '750', '749', '-1', '', '', '', '', '838', '828', '-10', '108', '99', 'FALSE', 'FALSE', '589 miles'),
('4456800', '19920929', 'RA', 'Rocket Airlines Inc.', '', '95', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1725', '1829', '64', '', '', '', '', '1957', '2103', '66', '332', '334', 'F', 'FALSE', '2306 miles'),
('4578900', '19920907', 'RA', 'Rocket Airlines Inc.', '', '919', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '1820', '1819', '-1', '', '', '', '', '1955', '2019', '24', '215', '240', 'FALSE', 'F', '1464 miles'),
('4652900', '19920911', 'RA', 'Rocket Airlines Inc.', '', '1790', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '1815', '1814', '-1', '', '', '', '', '1924', '1922', '-2', '69', '68', 'F', 'FALSE', '288 miles'),
('4448700', '19920916', 'RA', 'Rocket Airlines Inc.', '', '36', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '1615', '1613', '-2', '', '', '', '', '1738', '1751', '13', '83', '98', '0', '0', '213 miles'),
('4451700', '19920903', 'RA', 'Rocket Airlines Inc.', '', '59', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '1710', '1718', '8', '', '', '', '', '1932', '1953', '21', '322', '335', 'FALSE', 'FALSE', '2288 miles'),
('18832600', '19950504', 'RA', 'Rocket Airlines Inc.', 'N995UA', '1041', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1710', '1710', '0', '16', '1726', '1929', '3', '1915', '1932', '17', '185', '202', 'FALSE', 'FALSE', '1190 miles'),
('13439400', '19940506', 'RA', 'Rocket Airlines Inc.', '', '537', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1418', '1422', '4', '', '', '', '', '1435', '1447', '12', '77', '85', 'FALSE', 'F', '316 miles'),
('13430500', '19940509', 'RA', 'Rocket Airlines Inc.', '', '483', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', '925', '925', '0', '', '', '', '', '1031', '', '', '186', '', '0', '1', '1201 miles'),
('10981900', '19940108', 'RA', 'Rocket Airlines Inc.', '', '1924', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1537', '1541', '4', '', '', '', '', '1641', '1641', '0', '64', '60', '0', '0', '288 miles'),
('121746700', '20120102', 'RA', 'Rocket Airlines Inc.', 'N17620', '1155', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '845', '840', '-5', '25', '905', '1120', '9', '1119', '1129', '10', '154', '169', '0', '0', '895 miles'),
('121741300', '20120104', 'RA', 'Rocket Airlines Inc.', 'N11612', '114', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '1655', '1651', '-4', '13', '1704', '1816', '11', '1851', '1827', '-24', '116', '96', '0', '0', '404 miles'),
('121740400', '20120105', 'RA', 'Rocket Airlines Inc.', 'N19621', '1609', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1220', '1214', '-6', '11', '1225', '1353', '6', '1443', '1359', '-44', '203', '165', 'FALSE', 'F', '1091 miles'),
('121697900', '20120123', 'RA', 'Rocket Airlines Inc.', 'N75854', '1616', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '840', '840', '0', '11', '851', '1043', '26', '1058', '1109', '11', '318', '329', 'FALSE', 'FALSE', '2052 miles'),
('121698000', '20120123', 'RA', 'Rocket Airlines Inc.', 'N27213', '1637', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '846', '853', '7', '9', '902', '1112', '7', '1127', '1119', '-8', '341', '326', 'FALSE', 'FALSE', '2161 miles'),
('126276400', '20120910', 'RA', 'Rocket Airlines Inc.', 'N57863', '73', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '819', '827', '8', '29', '856', '1044', '5', '1013', '1049', '36', '294', '322', 'F', 'FALSE', '2021 miles'),
('144950800', '20160110', 'RA', 'Rocket Airlines Inc.', 'N27239', '1774', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'MER', 'Mariner 10 Station', 'Mercury', 'NJ', 'New Jersey', '1115', '1120', '5', '11', '1131', '1645', '7', '1656', '1652', '-4', '221', '212', '0', '0', '1605 miles'),
('144939900', '20160110', 'RA', 'Rocket Airlines Inc.', 'N33284', '268', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'VEN', 'Galileo Space Station', 'Venus', 'CA', 'California', '955', '1031', '36', '10', '1041', '1143', '9', '1154', '1152', '-2', '179', '141', '0', '0', '967 miles'),
('144940200', '20160110', 'RA', 'Rocket Airlines Inc.', 'N68807', '344', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'JUP', 'IO Space Station', 'Jupiter', 'VA', 'Virginia', '1746', '1750', '4', '12', '1802', '2242', '5', '2301', '2247', '-14', '195', '177', 'FALSE', 'FALSE', '1452 miles'),
('144932700', '20160113', 'RA', 'Rocket Airlines Inc.', 'N411UA', '457', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'EAR', 'Humans United Space Station', 'Earth', 'IL', 'Illinois', '1416', '1411', '-5', '11', '1422', '1720', '12', '1746', '1732', '-14', '150', '141', 'FALSE', 'FALSE', '888 miles'),
('144933100', '20160113', 'RA', 'Rocket Airlines Inc.', 'N27903', '544', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'MOO', 'Armstrong Space Station', 'Moon', 'TX', 'Texas', '1505', '1503', '-2', '14', '1517', '1802', '9', '1827', '1811', '-16', '142', '128', '0', '0', '862 miles'),
('144936900', '20160114', 'RA', 'Rocket Airlines Inc.', 'N461UA', '744', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'SAT', 'Dione Space Station', 'Saturn', 'CA', 'California', '1400', '1412', '12', '10', '1422', '1520', '14', '1541', '1534', '-7', '161', '142', 'FALSE', 'F', '862 miles'),
('147166900', '20160531', 'RA', 'Rocket Airlines Inc.', 'N401UA', '208', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'NPT', 'Triton Space Station', 'Neptune', 'FL', 'Florida', '815', '805', '-10', '22', '827', '1332', '4', '1350', '1336', '-14', '215', '211', '0', '0', '1546 miles'),
('147316400', '20160505', 'RA', 'Rocket Airlines Inc.', 'N68801', '948', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'PLT', 'Ronald Ekers Space Station', 'Pluto', 'WA', 'Washington', '1539', '1534', '-5', '15', '1549', '1701', '11', '1734', '1712', '-22', '175', '158', 'F', 'FALSE', '1024 miles'),
('143534500', '20150924', 'RA', 'Rocket Airlines Inc.', 'N38268', '1092', 'MAR', 'Musk Interplanetary Space Station', 'Mars', 'CO', 'Colorado', 'URA', 'Voyager II Space Station', 'Uranus', 'OH', 'Ohio', '1546', '1541', '-5', '11', '1552', '2017', '5', '2044', '2022', '-22', '178', '161', 'FALSE', 'F', '1201 miles');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
