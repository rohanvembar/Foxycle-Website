-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table dev.announcement: ~4 rows (approximately)
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;

-- Dumping data for table dev.contact: ~0 rows (approximately)
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
REPLACE INTO `contact` (`id`, `monHours`, `tueHours`, `wedHours`, `thuHours`, `friHours`, `satHours`, `sunHours`, `phoneNumber`, `address`, `email`, `map`) VALUES
	(1, '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 5 PM', '12 AM - 5 PM', '(805) 111-1111', '1 Grand Avenue San Luis Obispo, CA 93407', 'info@foxycle.com', '"https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed"');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;

-- Dumping data for table dev.item_purchased: ~6 rows (approximately)

-- Dumping data for table dev.service: ~9 rows (approximately)
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
REPLACE INTO `service` (`id`, `title`, `price`, `description`, `category`) VALUES
	(1, 'Basic Tune-Up', 25, 'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.', 'tune-ups'),
	(2, 'Premium Tune-Up', 35, 'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.', 'tune-ups'),
	(3, 'Brake System Tune-Up', 45, 'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.', 'tune-ups'),
	(4, 'Basic Tune-Up', 25, 'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.', 'adjustments'),
	(5, 'Premium Tune-Up', 35, 'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.', 'adjustments'),
	(6, 'Brake System Tune-Up', 45, 'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.', 'adjustments'),
	(7, 'Basic Tune-Up', 25, 'Includes brake inspection and adjustments, derailleur inspection and adjustments, \ntire inspection and inflation, safety check of all bolts and wipe down of frame.', 'installations'),
	(8, 'Premium Tune-Up', 35, 'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \nlube and frame clean and polish.', 'installations'),
	(9, 'Brake System Tune-Up', 45, 'Includes brake pad installation, brake inspection and adjustments and inspection of \ncables and housing.', 'installations');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;

-- Dumping data for table dev.session: ~0 rows (approximately)
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
REPLACE INTO `session` (`id`, `expiresAt`, `userId`) VALUES
	(4, '2019-03-06 16:10:38', 3);
/*!40000 ALTER TABLE `session` ENABLE KEYS */;

-- Dumping data for table dev.shop_item: ~8 rows (approximately)
/*!40000 ALTER TABLE `shop_item` DISABLE KEYS */;

-- Dumping data for table dev.shop_item_category_id_category: ~0 rows (approximately)
/*!40000 ALTER TABLE `shop_item_category_id_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_item_category_id_category` ENABLE KEYS */;

-- Dumping data for table dev.user: ~2 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `firstName`, `lastName`, `password`, `profileUrl`, `emailAddress`, `role`) VALUES
	(3, 'Owner', 'Person', 'owner', NULL, 'owner', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
