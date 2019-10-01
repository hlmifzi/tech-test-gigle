/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL
 Source Server Type    : MySQL
 Source Server Version : 100121
 Source Host           : localhost:3306
 Source Schema         : gigel_id_distro

 Target Server Type    : MySQL
 Target Server Version : 100121
 File Encoding         : 65001

 Date: 28/08/2019 22:39:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for barang
-- ----------------------------
DROP TABLE IF EXISTS `barang`;
CREATE TABLE `barang`  (
  `barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `artikel` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama_barang` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `size` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `warna` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `harga` float(10, 3) NULL DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`barang_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of barang
-- ----------------------------
INSERT INTO `barang` VALUES (12, 'KMJ', 'Kemeja', 'XL', 'Biru', 500000.000, 1);
INSERT INTO `barang` VALUES (13, 'GMS', 'Gamis', 'M', 'Hitam', 500000.000, 1);
INSERT INTO `barang` VALUES (14, 'KMJ', 'XL', 'Biru', '1', 500000.000, 1);
INSERT INTO `barang` VALUES (15, 'KMJ', 'Sepatu', 'XL', 'Biru', 500000.000, 1);
INSERT INTO `barang` VALUES (16, 'KMJ', 'Kemeja', 'XL', 'Biru', 500000.000, 0);

-- ----------------------------
-- Table structure for barang_type
-- ----------------------------
DROP TABLE IF EXISTS `barang_type`;
CREATE TABLE `barang_type`  (
  `barang_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL,
  `type` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `harga` float NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`barang_type_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 29 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of barang_type
-- ----------------------------
INSERT INTO `barang_type` VALUES (21, 12, 'NORMAL', 400000, 1);
INSERT INTO `barang_type` VALUES (22, 12, 'OB', 150000, 1);
INSERT INTO `barang_type` VALUES (23, 13, 'NORMAL', 500000, 1);
INSERT INTO `barang_type` VALUES (24, 13, 'OB', 200000, 1);
INSERT INTO `barang_type` VALUES (25, 14, 'OB', 200000, 1);
INSERT INTO `barang_type` VALUES (26, 14, 'NORMAL', 500000, 1);
INSERT INTO `barang_type` VALUES (27, 15, 'OB', 150000, 1);
INSERT INTO `barang_type` VALUES (28, 15, 'NORMAL', 400000, 1);

-- ----------------------------
-- Table structure for place
-- ----------------------------
DROP TABLE IF EXISTS `place`;
CREATE TABLE `place`  (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `name` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`place_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of place
-- ----------------------------
INSERT INTO `place` VALUES (1, 'P00112', 'Tenant JKTedit', 1);
INSERT INTO `place` VALUES (2, 'P002', 'Tenant BDG', 1);
INSERT INTO `place` VALUES (3, 'P000', 'Gudang', 1);
INSERT INTO `place` VALUES (4, 'helmi', 'tenat', 1);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `menu` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'Admin', '{  \r\n   \"items\":[  \r\n      {  \r\n         \"name\":\"Dashboards\",\r\n         \"url\":\"/dashboard\",\r\n         \"icon\":\"icon-speedometer\"\r\n      },\r\n      {  \r\n         \"title\":true,\r\n         \"name\":\"Data Master\",\r\n         \"wrapper\":{  \r\n            \"element\":\"\",\r\n            \"attributes\":{  \r\n\r\n            }\r\n         },\r\n         \"class\":\"\"\r\n      },\r\n      {  \r\n         \"name\":\"Users Management\",\r\n         \"url\":\"/dataMaster/userManagement\",\r\n         \"icon\":\"icon-user\"\r\n      },\r\n      {  \r\n         \"name\":\"Tenants Management\",\r\n         \"url\":\"/dataMaster/tenantManagement\",\r\n         \"icon\":\"icon-screen-desktop\"\r\n      },\r\n      {  \r\n         \"title\":true,\r\n         \"name\":\"Product Management\",\r\n         \"wrapper\":{  \r\n            \"element\":\"\",\r\n            \"attributes\":{  \r\n\r\n            }\r\n         }\r\n      }\r\n   ]\r\n}', 1);
INSERT INTO `role` VALUES (2, 'Tenant', '{  \n   \"items\":[  \n      {  \n         \"name\":\"Dashboards\",\n         \"url\":\"/dashboard\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Product Dashboard\",\n         \"url\":\"/dashboardBarang\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Sales Dashboard\",\n         \"url\":\"/dashboardPenjualan\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Data Master\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         },\n         \"class\":\"\"\n      },\n      {  \n         \"name\":\"Users Management\",\n         \"url\":\"/dataMaster/userManagement\",\n         \"icon\":\"icon-user\"\n      },\n      {  \n         \"name\":\"Tenants Management\",\n         \"url\":\"/dataMaster/tenantManagement\",\n         \"icon\":\"icon-screen-desktop\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Product Management\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         }\n      },\n      {  \n         \"name\":\"Entry\",\n         \"url\":\"/Entry\",\n         \"icon\":\"icon-action-redo\"\n      },\n      {  \n         \"name\":\"Depreciation\",\n         \"url\":\"/Depreciation\",\n         \"icon\":\"icon-arrow-down\"\n      },\n      {  \n         \"name\":\"Retur\",\n         \"url\":\"/Retur\",\n         \"icon\":\"icon-action-undo\"\n      },\n      {  \n         \"name\":\"Selling\",\n         \"url\":\"/Selling\",\n         \"icon\":\"icon-basket\"\n      },\n      {  \n         \"divider\":true\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Report\"\n      },\n      {  \n         \"name\":\"Product Report\",\n         \"url\":\"/pages\",\n         \"icon\":\"icon-book-open\",\n         \"children\":[  \n            {  \n               \"name\":\"Entry\",\n               \"url\":\"/report/Entry\",\n               \"icon\":\"icon-action-redo\"\n            },\n            {  \n               \"name\":\"Depreciation\",\n               \"url\":\"/report/Depreciation\",\n               \"icon\":\"icon-arrow-down\"\n            },\n            {  \n               \"name\":\"Retur\",\n               \"url\":\"/report/Retur\",\n               \"icon\":\"icon-action-undo\"\n            },\n            {  \n               \"name\":\"Selling\",\n               \"url\":\"/report/Selling\",\n               \"icon\":\"icon-basket\"\n            }\n         ]\n      }\n   ]\n}', 1);

-- ----------------------------
-- Table structure for stok
-- ----------------------------
DROP TABLE IF EXISTS `stok`;
CREATE TABLE `stok`  (
  `stok_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `barang_type_id` int(11) NOT NULL,
  `jumlah` float NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`stok_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `fullname` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `hashpass` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `active` int(1) NULL DEFAULT 1,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 1, 2, 'Rian', 'rian', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 0);
INSERT INTO `user` VALUES (2, 1, 2, 'rian-ta', 'rian-ta', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 1);
INSERT INTO `user` VALUES (3, 2, 2, 'Malik', 'malik-t', '$2a$10$K.iiA379TG4SAaaECTMR3uATG5PQKlSIFQaz6CTAC07CJafxtzNsu', 1);
INSERT INTO `user` VALUES (4, 1, 1, 'helmi fauzi', 'hlmifzi', '$2a$10$ToLyARyEM2PnsGU0WvziW.TxPVhWlSClw3x10EVLtps1ZqUGFZpUK', 0);
INSERT INTO `user` VALUES (5, 1, 2, 'helmi fauzi', 'vendor', '$2a$10$Agq3pz1YwvtDcWDDMmpVDurZHx7VxTw97YfGxcz6LG8/9MHIP64ze', 0);
INSERT INTO `user` VALUES (6, 1, 1, 'teesss', 'tes', '$2a$10$vMkvQTX9QZnM8aErM/GtB.TbJzCuTXRGg.SpvgqG8LuwXza3Cx5Ua', 1);
INSERT INTO `user` VALUES (7, 1, 1, 'tes tes', 'tes', '$2a$10$.JzB0HgQ4YAgLtccbzPEpe4ss7xqNgOhmTIrJlyi6.zKcG/gyKGnm', 1);
INSERT INTO `user` VALUES (8, 1, 1, 'helmi fauzi', 'hlmifzi', '$2a$10$Jn1Ej.Nze4RXN36MW2Qip.IdspLhG5T/lC9AahsEk7qEV7GfjZeU2', 1);

SET FOREIGN_KEY_CHECKS = 1;
