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
REPLACE INTO `announcement` (`id`, `title`, `date`, `body`) VALUES
	(9, '50% off all apparel', '02-20-2019', 'Get 50% off all apparel this week!'),
	(10, '20% off all road bikes', '02-20-2019', 'Get 20% off all road bikes this month!'),
	(11, 'Store closed this Saturday', '02-20-2019', 'Foxycle will be closed this Saturday.'),
	(12, 'test announcement', '02-25-2019', 'test');
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;

-- Dumping data for table dev.brand: ~6 rows (approximately)
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
REPLACE INTO `brand` (`id`, `name`) VALUES
	(15813118, 'Giant'),
	(17715252, 'Raleigh'),
	(36572959, 'Liv'),
	(51141533, 'Foxycle'),
	(55776470, 'Trek'),
	(83515711, 'Diamondback');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;

-- Dumping data for table dev.category: ~7 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
REPLACE INTO `category` (`id`, `categoryId`, `category`) VALUES
	(21, 43315544, 'Road Bike'),
	(24, 23003764, 'Hybrid Bike'),
	(25, 91551511, 'Hybrid Bike'),
	(26, 35155851, 'Hybrid Bike'),
	(29, 75184111, 'Accessories'),
	(30, 92561277, 'Accessories'),
	(32, 63717143, 'Apparel');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping data for table dev.contact: ~0 rows (approximately)
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
REPLACE INTO `contact` (`id`, `monHours`, `tueHours`, `wedHours`, `thuHours`, `friHours`, `satHours`, `sunHours`, `phoneNumber`, `address`, `email`, `map`) VALUES
	(1, '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 6 PM', '10 AM - 5 PM', '12 AM - 5 PM', '(805) 111-1111', '1 Grand Avenue San Luis Obispo, CA 93407', 'info@foxycle.com', '"https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed"');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;

-- Dumping data for table dev.item_purchased: ~6 rows (approximately)
/*!40000 ALTER TABLE `item_purchased` DISABLE KEYS */;
REPLACE INTO `item_purchased` (`id`, `orderNumber`, `itemId`, `quantity`, `subtotal`) VALUES
	(1, 48444177, 4, 1, 999),
	(2, 48444177, 7, 1, 99),
	(3, 15551545, 7, 1, 99),
	(4, 15551545, 9, 1, 35),
	(5, 53655631, 7, 1, 99),
	(6, 16368410, 5, 1, 599);
/*!40000 ALTER TABLE `item_purchased` ENABLE KEYS */;

-- Dumping data for table dev.order_management: ~4 rows (approximately)
/*!40000 ALTER TABLE `order_management` DISABLE KEYS */;
REPLACE INTO `order_management` (`orderNumber`, `status`, `dateOrdered`, `mailingAddress`, `subtotal`, `shippingCost`, `total`, `name`, `email`) VALUES
	(15551545, 4, '03.04.2019', '1234 Fake Address, San Luis Obispo, CA 93401', 134, 10, 144, 'John Smith', 'johnsmith@gmail.com'),
	(16368410, 5, '03.04.2019', 'Store Pickup', 599, 10, 609, 'John Smith', 'johnsmith@gmail.com'),
	(48444177, 1, '03.04.2019', 'Store Pickup', 1098, 10, 1108, 'John Smith', 'johnsmith@gmail.com'),
	(53655631, 3, '03.04.2019', '1234 Fake Address, San Luis Obispo, CA 93401', 99, 10, 109, 'John Smith', 'johnsmith@gmail.com');
/*!40000 ALTER TABLE `order_management` ENABLE KEYS */;

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
REPLACE INTO `shop_item` (`id`, `name`, `price`, `saleprice`, `brandId`, `categoryId`, `image`, `delivery`, `quantity`, `description`) VALUES
	(1, 'Trek Bike 1', 5000, 0, 55776470, 43315544, 'https://trek.scene7.com/is/image/TrekBicycleProducts/MadoneSLR9eTapD_20_28486_A_Primary?$responsive-pjpg$&cache=on,on&wid=480&hei=360', 0, 5, 'Description of a red Trek bike.'),
	(2, 'Trek Bike 2', 3000, 0, 55776470, 14517551, 'https://trek.scene7.com/is/image/TrekBicycleProducts/EmondaSLR9DEtap_20_28489_A_Primary?$responsive-pjpg$&cache=on,on&wid=480&hei=360', 0, 10, 'Description of a Trek Bike again.'),
	(4, 'Diamondback Century 2 (2018)', 1500, 999, 83515711, 23003764, 'https://cdn.shopify.com/s/files/1/0286/1214/products/diamondback-century-2-2018-green-50cm-3327524503596_288x192.jpg?v=1549861860', 0, 9, 'Diamondback\'s Century 2 combines cutting-edge technology with a competitive component mix to deliver a bike that’s long on performance and short on dollar signs. The heart of this bike is its custom formed and butted aluminum tubes. Those tubes aren’t simply stylish; they also provide you with the perfect balance of weight savings and strength.\n\nNext, DB laid out those tubes using our Enhanced Performance Geometry as a blueprint. While traditional road bike geometry stretches the rider out in as low and long a position as possible, their Century models feature a slightly taller head tube and slightly relaxed head angle, both of which place you in a riding position that is still plenty fast and “aero,” but upright enough to be sustained on those long rides.\n\nThe Century 2’s components are equally up to the task. Tektro disc brakes and an 18-speed Shimano drivetrain are absolutely uncommon at this price.\n\nReady Ride bikes are shipped 95 percent assembled. Typical bike assembly is time-consuming and requires technical know-how. Ready Ride reduces the time and skills needed for the final, four-step assembly.'),
	(5, 'Raleigh Carlton (2018)', 599, 0, 17715252, 91551511, 'https://cdn.shopify.com/s/files/1/0286/1214/products/raleigh-carlton-2018-small-5-3-5-6-420705402907_288x288.jpg?v=1549863717', 0, 4, 'If you’re looking for a fast, great handling city bike with classic good looks, you can’t go wrong with the Carlton. Whether you are cruising to the corner store for a sixer or riding to work, the Carlton is great for casual urban trips, quick errands and commuting. A single speed with flip flop rear wheel, the Carlton can also be a fixed gear bike. This city bike has a unique Raleigh silhouette with dual top tubes, a one piece integrated handlebar and stem for a nice clean look, and a platform rack with classy wood inlay featuring a burnished Raleigh Heron insignia. Reflective decaling on the downtube adds visibility for riding at night or the early morning hours, and the bike bell lets peds and other commuters know you’re coming.'),
	(6, 'Giant Contend 1 (2019)', 499, 0, 15813118, 35155851, 'https://cdn.shopify.com/s/files/1/0286/1214/products/giant-contend-1-2019-charcoal-medium-5-8-5-10-3904585957420_288x192.jpg?v=1549852478', 0, 5, 'If you’re looking for a fast, great handling city bike with classic good looks, you can’t go wrong with the Carlton. Whether you are cruising to the corner store for a sixer or riding to work, the Carlton is great for casual urban trips, quick errands and commuting. A single speed with flip flop rear wheel, the Carlton can also be a fixed gear bike. This city bike has a unique Raleigh silhouette with dual top tubes, a one piece integrated handlebar and stem for a nice clean look, and a platform rack with classy wood inlay featuring a burnished Raleigh Heron insignia. Reflective decaling on the downtube adds visibility for riding at night or the early morning hours, and the bike bell lets peds and other commuters know you’re coming.'),
	(7, 'Giant Blue Helmet', 99, 0, 15813118, 75184111, 'https://cdn.shopify.com/s/files/1/0286/1214/products/giant-rev-comp-mips-helmet-matte-blue-medium-large-2981561630764_288x192.jpg?v=1551385121', 1, 2, 'Designed for everyday road riding performance, the all-new Rev Comp follows in the footsteps of the pro-level Rev, a favorite among WorldTour riders including Giro d’Italia champion Tom Dumoulin. This all-rounder introduces some new features to optimize its comfort, protection and versatility. It has 14 vents to maximize airflow, a Cinch Pro fit system for quick and comfortable fit adjustment, and is available with MIPS to offer added impact protection. Other features include integrated magnetic light mounts for riding in low-light conditions or at night.'),
	(8, 'Liv Rev MIPS Helmet', 179, 0, 36572959, 92561277, 'https://cdn.shopify.com/s/files/1/0286/1214/products/liv-rev-mips-helmet-black-purple-small-28027818954_288x288.jpg?v=1549702794', 1, 5, 'Designed for everyday road riding performance, the all-new Rev Comp follows in the footsteps of the pro-level Rev, a favorite among WorldTour riders including Giro d’Italia champion Tom Dumoulin. This all-rounder introduces some new features to optimize its comfort, protection and versatility. It has 14 vents to maximize airflow, a Cinch Pro fit system for quick and comfortable fit adjustment, and is available with MIPS to offer added impact protection. Other features include integrated magnetic light mounts for riding in low-light conditions or at night.'),
	(9, 'Liv BeLiv Long Sleeve Women\'s Jersey', 35, 0, 36572959, 63717143, 'https://cdn.shopify.com/s/files/1/0286/1214/products/liv-beliv-long-sleeve-women-s-jersey-white-black-x-small-28110178698_480x480.jpg?v=1549871457', 1, 4, 'Liv CLUB fit\nFull length front zipper\n3 back pockets\nFlatlock seams, non-restrictive collar\nSublimated graphics\nTransTextura(TM) fabric wicks moisture and dries quickly\nHigh-visibility reflective accents');
/*!40000 ALTER TABLE `shop_item` ENABLE KEYS */;

-- Dumping data for table dev.shop_item_category_id_category: ~0 rows (approximately)
/*!40000 ALTER TABLE `shop_item_category_id_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_item_category_id_category` ENABLE KEYS */;

-- Dumping data for table dev.user: ~2 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `firstName`, `lastName`, `password`, `profileUrl`, `emailAddress`, `role`) VALUES
	(2, 'Employee', 'Person', 'empl', NULL, 'empl', 0),
	(3, 'Owner', 'Person', 'owner', NULL, 'owner', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
