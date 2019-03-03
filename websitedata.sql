-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dev
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (9,'50% off all apparel','02-20-2019','Get 50% off all apparel this week!');
INSERT INTO `announcement` VALUES (10,'20% off all road bikes','02-20-2019','Get 20% off all road bikes this month!');
INSERT INTO `announcement` VALUES (11,'Store closed this Saturday','02-20-2019','Foxycle will be closed this Saturday.');
INSERT INTO `announcement` VALUES (12,'test announcement','02-25-2019','test');
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,18915811,'');
INSERT INTO `category` VALUES (2,53959251,'');
INSERT INTO `category` VALUES (3,50463433,'');
INSERT INTO `category` VALUES (4,16661563,'other');
INSERT INTO `category` VALUES (5,42451345,'');
INSERT INTO `category` VALUES (6,55556551,'');
INSERT INTO `category` VALUES (7,60757017,'');
INSERT INTO `category` VALUES (8,81007500,'');
INSERT INTO `category` VALUES (9,35046047,'');
INSERT INTO `category` VALUES (10,46711111,'');
INSERT INTO `category` VALUES (11,77369675,'');
INSERT INTO `category` VALUES (12,58851120,'');
INSERT INTO `category` VALUES (13,1385116,'roadbike');
INSERT INTO `category` VALUES (14,36070147,'roadbike');
INSERT INTO `category` VALUES (15,18981133,'apparel');
INSERT INTO `category` VALUES (16,15730113,'');
INSERT INTO `category` VALUES (17,50855061,'other');
INSERT INTO `category` VALUES (18,51930659,'roadbike');
INSERT INTO `category` VALUES (19,51930659,'mountainbike');
INSERT INTO `category` VALUES (20,15524274,'');
INSERT INTO `category` VALUES (21,45234898,'mountainbike');
INSERT INTO `category` VALUES (22,59911113,'mountainbike');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 6 PM','10 AM - 5 PM','12 PM - 5 PM','(805) 111-1111','1 Grand Avenue San Luis Obispo, CA 93407','info@foxycle.com','\"https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed\"');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `item_purchased`
--

LOCK TABLES `item_purchased` WRITE;
/*!40000 ALTER TABLE `item_purchased` DISABLE KEYS */;
INSERT INTO `item_purchased` VALUES (1,93955931,41,1,15);
INSERT INTO `item_purchased` VALUES (2,93955931,42,1,25);
INSERT INTO `item_purchased` VALUES (3,69113512,37,1,3999);
INSERT INTO `item_purchased` VALUES (4,69113512,38,1,2499);
INSERT INTO `item_purchased` VALUES (5,18016615,38,2,4998);
INSERT INTO `item_purchased` VALUES (6,18016615,41,1,15);
INSERT INTO `item_purchased` VALUES (7,18016615,43,1,50);
INSERT INTO `item_purchased` VALUES (8,18016615,45,1,99);
INSERT INTO `item_purchased` VALUES (9,18016615,44,1,50);
INSERT INTO `item_purchased` VALUES (10,18016615,40,1,25);
INSERT INTO `item_purchased` VALUES (11,18016615,35,1,1599);
INSERT INTO `item_purchased` VALUES (12,18016615,46,1,99);
INSERT INTO `item_purchased` VALUES (13,18016615,36,2,11998);
INSERT INTO `item_purchased` VALUES (14,18016615,37,1,3999);
INSERT INTO `item_purchased` VALUES (15,18016615,39,1,3999);
INSERT INTO `item_purchased` VALUES (16,18016615,42,1,25);
INSERT INTO `item_purchased` VALUES (17,54015092,37,1,3999);
INSERT INTO `item_purchased` VALUES (18,54015092,35,1,1599);
INSERT INTO `item_purchased` VALUES (19,56172756,48,1,10);
INSERT INTO `item_purchased` VALUES (20,71311919,37,1,3999);
INSERT INTO `item_purchased` VALUES (21,71311919,38,1,2499);
INSERT INTO `item_purchased` VALUES (22,71311919,39,1,3999);
INSERT INTO `item_purchased` VALUES (23,71311919,36,1,5999);
INSERT INTO `item_purchased` VALUES (24,81251521,31,3,3267);
/*!40000 ALTER TABLE `item_purchased` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_management`
--

LOCK TABLES `order_management` WRITE;
/*!40000 ALTER TABLE `order_management` DISABLE KEYS */;
INSERT INTO `order_management` VALUES (12228788,5,'02.22.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (15735171,1,'02.25.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (17150106,1,'02.24.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (18016615,1,'02.25.2019','Store Pickup','Rohan Vembar','rohanvembar@gmail.com',26956,10,26966);
INSERT INTO `order_management` VALUES (22288685,4,'02.22.2019','123 Fake Address, San Luis Obispo, CA 94582','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (30300533,4,'02.22.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (30537771,5,'02.24.2019','Store Pickup','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (38131801,4,'02.24.2019','Store Pickup','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (45544145,4,'02.25.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (50842850,4,'02.22.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (51856651,2,'02.24.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (54000501,4,'02.24.2019','Store Pickup','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (54015092,1,'02.27.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',5598,10,5608);
INSERT INTO `order_management` VALUES (56172756,3,'02.27.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',10,10,20);
INSERT INTO `order_management` VALUES (69113512,1,'02.25.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',6498,10,6508);
INSERT INTO `order_management` VALUES (71311919,4,'02.27.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',16496,10,16506);
INSERT INTO `order_management` VALUES (81044825,4,'02.22.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (81251521,1,'02.27.2019','123 Fake Address, San Luis Obispo, CA 93401','Rohan Vembar','rohanvembar@gmail.com',3267,10,3277);
INSERT INTO `order_management` VALUES (81818856,5,'02.22.2019','123 Fake Address, San Luis Obispo, CA 94582','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (82585747,4,'02.22.2019','123 Fake Address, San Luis Obispo, CA 94582','Rohan Vembar','rohanvembar@gmail.com',0,0,0);
INSERT INTO `order_management` VALUES (93955931,4,'02.25.2019','Store Pickup','Rohan Vembar','rohanvembar@gmail.com',40,10,50);
/*!40000 ALTER TABLE `order_management` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \r\ntire inspection and inflation, safety check of all bolts and wipe down of frame.','tune-ups');
INSERT INTO `service` VALUES (2,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \r\nlube and frame clean and polish.','tune-ups');
INSERT INTO `service` VALUES (3,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \r\ncables and housing.','tune-ups');
INSERT INTO `service` VALUES (4,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \r\ntire inspection and inflation, safety check of all bolts and wipe down of frame.','adjustments');
INSERT INTO `service` VALUES (5,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \r\nlube and frame clean and polish.','adjustments');
INSERT INTO `service` VALUES (6,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \r\ncables and housing.','adjustments');
INSERT INTO `service` VALUES (7,'Basic Tune-Up',25,'Includes brake inspection and adjustments, derailleur inspection and adjustments, \r\ntire inspection and inflation, safety check of all bolts and wipe down of frame.','installations');
INSERT INTO `service` VALUES (8,'Premium Tune-Up',35,'Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and \r\nlube and frame clean and polish.','installations');
INSERT INTO `service` VALUES (9,'Brake System Tune-Up',45,'Includes brake pad installation, brake inspection and adjustments and inspection of \r\ncables and housing.','installations');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (5,'2019-03-03 11:05:54',27);
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shop_item`
--

LOCK TABLES `shop_item` WRITE;
/*!40000 ALTER TABLE `shop_item` DISABLE KEYS */;
INSERT INTO `shop_item` VALUES (31,'Road Bike 24\"',1089,'brand','https://www.wigglestatic.com/product-media/100375136/Brand-X-Road-Bike-Road-Bikes-Black-2017-BRNDXROADXL-0.jpg?w=960&h=430&a=7',1,5,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (35,'Orbea Road Bike 26\"',1599,'orbea','http://pngimg.com/uploads/bicycle/bicycle_PNG5381.png',1,3,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (36,'26\" Mountain Bike',5999,'','https://cdn.mec.ca/medias/sys_master/high-res/high-res/8943608201246/5056362-YLW02.jpg',1,2,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (37,'24\" Mountain Bike',3999,'brand','https://cdn.mec.ca/medias/sys_master/high-res/high-res/8943608201246/5056362-YLW02.jpg',1,2,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (38,'24\" Specialized Mountain BIke',2499,'','https://tredz.azureedge.net/prodimg/109251_1_Zoom.jpg',1,2,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (39,'26\" Specialized Mountain BIke',3999,'Specialized','https://tredz.azureedge.net/prodimg/109251_1_Zoom.jpg',1,2,0,'Description of a bike',0);
INSERT INTO `shop_item` VALUES (40,'Foxycle Tee (Small)',25,'','https://www.bigcitysportswear.com/media/catalog/product/cache/73/image/900x800/9df78eab33525d08d6e5fb8d27136e95/g/5/g500_black_front..jpg',0,10,0,'',0);
INSERT INTO `shop_item` VALUES (41,'Foxycle Tee (Large)',25,'','https://www.bigcitysportswear.com/media/catalog/product/cache/73/image/900x800/9df78eab33525d08d6e5fb8d27136e95/g/5/g500_black_front..jpg',0,50,15,'',0);
INSERT INTO `shop_item` VALUES (42,'Foxycle Tee (Medium)',25,'','https://www.bigcitysportswear.com/media/catalog/product/cache/73/image/900x800/9df78eab33525d08d6e5fb8d27136e95/g/5/g500_black_front..jpg',0,50,0,'',0);
INSERT INTO `shop_item` VALUES (43,'Foxycle Jersey (Medium)',50,'apparel','https://images-na.ssl-images-amazon.com/images/I/81R0er-SOlL._AC._SR360,460.jpg',0,50,0,'description of shirt',0);
INSERT INTO `shop_item` VALUES (44,'Foxycle Jersey (Large)',50,'','https://images-na.ssl-images-amazon.com/images/I/81R0er-SOlL._AC._SR360,460.jpg',0,50,0,'',0);
INSERT INTO `shop_item` VALUES (45,'Other Brand Jersey (Large)',99,'','https://ae01.alicdn.com/kf/HTB1UJ.SQVXXXXanXFXXq6xXFXXXu/MILOTO-Bike-Team-Pro-Cycling-Jersey-Ropa-Ciclismo-2018-mtb-Bicycle-Cycling-Clothing-Summer-Bike.jpg_640x640.jpg',0,50,0,'',0);
INSERT INTO `shop_item` VALUES (46,'Other Brand Jersey (Small)',99,'','https://ae01.alicdn.com/kf/HTB1UJ.SQVXXXXanXFXXq6xXFXXXu/MILOTO-Bike-Team-Pro-Cycling-Jersey-Ropa-Ciclismo-2018-mtb-Bicycle-Cycling-Clothing-Summer-Bike.jpg_640x640.jpg',0,50,0,'',0);
INSERT INTO `shop_item` VALUES (47,'Test - Not Shippable',10,'Test Brand','https://www.montaguebikes.com/wp-content/uploads/2015/11/BOSTON-DC-Open-Final.jpg',0,2,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (48,'Test - Shippable',10,'','https://www.montaguebikes.com/wp-content/uploads/2015/11/BOSTON-DC-Open-Final.jpg',1,2,0,'Orbea started by refining their production methods. The frame utilizes OMR, Orbea Monocoque Race, carbon, but how they set up the material for the mold has changed. They’ve stopped using bladders and started using EPS foam. Better, more consistent compaction, for a stiffer bike, and less weight, as the frame no longer has the bladders inside. They then optimized their lay-up, working to move materials around and shifting shapes so there’s more material and bigger shapes where you need stiffness, and less where you don’t. They also reduced the number of aluminum inserts necessary for the frame, another weight reduction tactic.\n\nOrbea also switched the Orca to a dramatically tapered 1 1/8” to 1 1/2” steerer for added steering precision with no weight increase. They moved to a BB86 bottom bracket shell so not only could the bottom bracket weigh less, but the area around it could be lighter and stiffer. They moved to a round 27.2mm seat post for a lighter clamp and post as well as for greater comfort.\n\nKnowing the value of aerodynamics, they shaped the head tube, fork, and down tube to minimize what the wind sees, giving you a speed boost with no cost in weight or stiffness.\n\nAll these changes result in the bike being 62% more efficient than the old Orca. By this, they mean that the bike goes faster for the same effort, as manifested by the improvements in aerodynamics, rigidity, and weight.\n\nThey also refined their sizing. The Orca comes in seven sizes, and there’s a linear progression in stack and reach measurements from the smallest to the largest. It’s easier than ever to fit on an Orca.\n\nThe ride, oh baby, that’s what is most exciting. The greater stiffness at the front end translates into better sprinting and standing climbing, the stiffness at the BB yields more power to the wheel, and the reduced materials and shapes at the seat post provide better comfort. Wins all around. Team Cofidis can ride 27mm tubulars in these bikes when they’re facing cobbled classics, so you’ve got some tire flexibility as well.\n\nIn terms of setup, the frameset comes with an FSA headset, a seat collar, front derailleur hanger, and sets of both cable stops and grommets so you can decide for yourself whether you want to run mechanical or electronic shifting internally or externally. If you choose to go the electronic route, the battery can be mounted externally under the left chain stay or internally-internal folks are limited to Shimano Di2. And there are magnet mounting spots for a SRM, Quarq, or Pioneer crank-based power meter.\n\nThe Orbea Orca Race Frameset is more of everything good in a bike.',0);
INSERT INTO `shop_item` VALUES (49,'Red Kids Bike',500,'mountainbike','https://www.islabikes.com/wp-content/uploads/2015/10/Cnoc16-Red-MY2016-SRGB-USA1.jpg',0,3,340,'Kids Bike',0);
/*!40000 ALTER TABLE `shop_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shop_item_categories_category`
--

LOCK TABLES `shop_item_categories_category` WRITE;
/*!40000 ALTER TABLE `shop_item_categories_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_item_categories_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shop_item_category_id_category`
--

LOCK TABLES `shop_item_category_id_category` WRITE;
/*!40000 ALTER TABLE `shop_item_category_id_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_item_category_id_category` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (21,'Rohan','Vembar','password','rohan',NULL,1);
INSERT INTO `user` VALUES (22,'Prof','Fox','password','fox',NULL,1);
INSERT INTO `user` VALUES (23,'Bob','Ross','password','bross',NULL,0);
INSERT INTO `user` VALUES (24,'Joe','Smith','password','jsmith',NULL,0);
INSERT INTO `user` VALUES (26,'Test','Employee','empl','empl',NULL,0);
INSERT INTO `user` VALUES (27,'Rohan','Vembar','owner','owner',NULL,1);
INSERT INTO `user` VALUES (33,'test','eohouh','ppppqqqq','oouha',NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-03 13:42:38
