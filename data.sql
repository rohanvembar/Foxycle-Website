# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.24)
# Database: dev
# Generation Time: 2019-03-03 23:20:27 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table announcement
# ------------------------------------------------------------

DROP TABLE IF EXISTS `announcement`;

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;

INSERT INTO `announcement` (`id`, `title`, `date`, `body`)
VALUES
	(9,'50% off all apparel','02-20-2019','Get 50% off all apparel this week!'),
	(10,'20% off all road bikes','02-20-2019','Get 20% off all road bikes this month!'),
	(11,'Store closed this Saturday','02-20-2019','Foxycle will be closed this Saturday.'),
	(12,'test announcement','02-25-2019','test');

/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`id`, `categoryId`, `category`)
VALUES
	(23,35885156,''),
	(24,10500655,''),
	(25,81555768,''),
	(26,41858651,''),
	(27,55141165,''),
	(28,60559125,''),
	(29,66175511,'');

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monHours` varchar(255) NOT NULL,
  `tueHours` varchar(255) NOT NULL,
  `wedHours` varchar(255) NOT NULL,
  `thuHours` varchar(255) NOT NULL,
  `friHours` varchar(255) NOT NULL,
  `satHours` varchar(255) NOT NULL,
  `sunHours` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `map` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;

INSERT INTO `contact` (`id`, `monHours`, `tueHours`, `wedHours`, `thuHours`, `friHours`, `satHours`, `sunHours`, `phoneNumber`, `address`, `email`, `map`)
VALUES
	(1,'10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 5 PM','12 AM - 5 PM','(805) 111-1111','1 Grand Avenue San Luis Obispo, CA 93407','info@foxycle.com','\"https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed\"');

/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table item_purchased
# ------------------------------------------------------------

DROP TABLE IF EXISTS `item_purchased`;

CREATE TABLE `item_purchased` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderNumber` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `item_purchased` WRITE;
/*!40000 ALTER TABLE `item_purchased` DISABLE KEYS */;

INSERT INTO `item_purchased` (`id`, `orderNumber`, `itemId`, `quantity`, `subtotal`)
VALUES
	(25,55157252,50,1,110),
	(26,1655551,50,1,110),
	(27,1655551,53,1,130),
	(28,55514481,54,1,130),
	(29,55514481,56,1,500),
	(30,55514481,53,1,130),
	(31,55514481,55,1,250);

/*!40000 ALTER TABLE `item_purchased` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table order_management
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_management`;

CREATE TABLE `order_management` (
  `orderNumber` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `dateOrdered` varchar(255) NOT NULL,
  `mailingAddress` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `shippingCost` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`orderNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `order_management` WRITE;
/*!40000 ALTER TABLE `order_management` DISABLE KEYS */;

INSERT INTO `order_management` (`orderNumber`, `status`, `dateOrdered`, `mailingAddress`, `name`, `email`, `subtotal`, `shippingCost`, `total`)
VALUES
	(1655551,1,'03.03.2019','Store Pickup','fake fake','fake@fake.com',240,10,250),
	(55157252,1,'03.03.2019','fake, fake, AR 00000','Fake Name','fake@gmail.com',110,10,120),
	(55514481,1,'03.03.2019','Store Pickup','fake fake','fake@blah.com',1010,10,1020);

/*!40000 ALTER TABLE `order_management` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table service
# ------------------------------------------------------------

DROP TABLE IF EXISTS `service`;

CREATE TABLE `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;

INSERT INTO `service` (`id`, `title`, `price`, `description`, `category`)
VALUES
	(1,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.','tune-ups'),
	(2,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.','tune-ups'),
	(3,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.','tune-ups'),
	(4,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.','adjustments'),
	(5,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.','adjustments'),
	(6,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.','adjustments'),
	(7,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.','installations'),
	(8,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.','installations'),
	(9,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.','installations');

/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `session`;

CREATE TABLE `session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expiresAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_3d2f174ef04fb312fdebd0ddc5` (`userId`),
  CONSTRAINT `FK_3d2f174ef04fb312fdebd0ddc53` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;

INSERT INTO `session` (`id`, `expiresAt`, `userId`)
VALUES
	(7,'2019-03-03 15:49:57',5);

/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table shop_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shop_item`;

CREATE TABLE `shop_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `delivery` tinyint(4) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '1',
  `saleprice` int(11) NOT NULL DEFAULT '0',
  `description` mediumtext NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `shop_item` WRITE;
/*!40000 ALTER TABLE `shop_item` DISABLE KEYS */;

INSERT INTO `shop_item` (`id`, `name`, `price`, `brand`, `image`, `delivery`, `quantity`, `saleprice`, `description`, `categoryId`)
VALUES
	(50,'2019 Marrakesh Deore',110,'Salsa Cycles','https://salsacycles.com/files/bikes/salsa-marrakesh-19-BK8353-drop-bar-deore-touring-bike-640x360.jpg',1,3,0,'This is a fun bike!',35885156),
	(51,'KENT GZR700 Road Bike',160,'KENT','https://images-na.ssl-images-amazon.com/images/I/81nsr0LPsYL._SX425_.jpg',0,6,0,'awesome bike!!!!!',10500655),
	(53,'Grail',130,'Gravel Bikes','https://static.canyon.com/_img/bikes/2019/grail-cf-sl-7_c1281.png',0,2,0,'awesome bike!!!!!',41858651),
	(54,'Long Haul Trucker',130,'Surly Bikes','https://surlybikes.com/uploads/bikes/surly-long-haul-trucker-bike-700c-blue-BK0417-1200x800.jpg',0,3,0,'awesome bike!!!!!',55141165),
	(55,'Cannondale Quick 7 Bike',250,'Cannondale','https://www.rei.com/media/product/145841',0,5,0,'an awesome bike!!!',60559125),
	(56,'Tandem Bike',500,'cool brand','https://outdoors.byu.edu/wp-content/uploads/2016/02/Smooth-Blue.png',0,2,0,'an awesome bike!!!',66175511);

/*!40000 ALTER TABLE `shop_item` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table shop_item_categories_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shop_item_categories_category`;

CREATE TABLE `shop_item_categories_category` (
  `shopItemId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`shopItemId`,`categoryId`),
  KEY `FK_ff43b91b2ba745874e958ca1745` (`categoryId`),
  CONSTRAINT `FK_0074e141f869cfc316d0f6e877b` FOREIGN KEY (`shopItemId`) REFERENCES `shop_item` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ff43b91b2ba745874e958ca1745` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table shop_item_category_id_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shop_item_category_id_category`;

CREATE TABLE `shop_item_category_id_category` (
  `shopItemId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`shopItemId`,`categoryId`),
  KEY `FK_dd9984e54b067fb306b3ae68812` (`categoryId`),
  CONSTRAINT `FK_18626aeee07cef6bd753b67de16` FOREIGN KEY (`shopItemId`) REFERENCES `shop_item` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_dd9984e54b067fb306b3ae68812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profileUrl` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_eea9ba2f6e1bb8cb89c4e672f6` (`emailAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `firstName`, `lastName`, `password`, `profileUrl`, `emailAddress`, `role`)
VALUES
	(5,'owner','owner','owner',NULL,'owner',1),
	(6,'empl','empl','empl',NULL,'empl',0);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
