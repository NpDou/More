/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : npdou_db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:45:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for fenlei
-- ----------------------------
DROP TABLE IF EXISTS `fenlei`;
CREATE TABLE `fenlei` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `classname` varchar(255) NOT NULL,
  `classlist` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fenlei
-- ----------------------------
INSERT INTO `fenlei` VALUES ('1', '营养辅食', '米粉1，米粉2，米粉3，米粉4，米粉5，米粉6，米粉7');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `engname` varchar(255) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `pinpai` varchar(255) NOT NULL,
  `nprice` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `saled` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `class` varchar(255) NOT NULL,
  `hot` varchar(255) DEFAULT NULL,
  `sendm` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('3', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('2', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('1', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('4', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('5', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', 't', '自贸仓');
INSERT INTO `goods` VALUES ('6', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('7', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', 't', '自贸仓');
INSERT INTO `goods` VALUES ('8', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('9', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('10', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', 't', '自贸仓');
INSERT INTO `goods` VALUES ('11', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('12', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('13', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('14', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('15', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', 't', '自贸仓');
INSERT INTO `goods` VALUES ('16', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('17', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('18', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('19', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('20', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('21', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('22', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', 't', '海外仓');
INSERT INTO `goods` VALUES ('23', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', 't', '自贸仓');
INSERT INTO `goods` VALUES ('24', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('25', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('26', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', 't', '海外仓');
INSERT INTO `goods` VALUES ('27', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('28', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('29', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('30', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', 't', '自贸仓');
INSERT INTO `goods` VALUES ('31', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('32', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('33', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', 't', '海外仓');
INSERT INTO `goods` VALUES ('34', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('35', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('36', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('37', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('38', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('39', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('40', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('41', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('42', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('43', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('44', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('45', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('46', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('47', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', 't', '海外仓');
INSERT INTO `goods` VALUES ('48', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('49', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('50', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('51', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', 't', '海外仓');
INSERT INTO `goods` VALUES ('52', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('53', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('54', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', 't', '自贸仓');
INSERT INTO `goods` VALUES ('55', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('56', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('57', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('58', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('59', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('60', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('61', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('62', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('63', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('64', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('65', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('66', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('67', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('68', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('69', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('70', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('71', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('72', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('73', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('74', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('75', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('76', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('77', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('78', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('79', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('80', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('81', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('82', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('83', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('84', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('85', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('86', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('87', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('88', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('89', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('90', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('91', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('92', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('93', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('94', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('95', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('96', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('97', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('98', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('99', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('100', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('101', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('102', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('103', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('104', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('105', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('106', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('107', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('108', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('109', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('110', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('111', '风筒', 'wuwuwu', '../img/good3', 'dse', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('112', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('113', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'a', '', '海外仓');
INSERT INTO `goods` VALUES ('114', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('115', '盆', 'pen', '../img/good2', 'dse', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('116', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'b', '', '海外仓');
INSERT INTO `goods` VALUES ('117', '盆', 'pen', '../img/good2', 'ade', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('118', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'a', '', '自贸仓');
INSERT INTO `goods` VALUES ('119', '农药', 'pils', '../img/good6', 'dasesss', '134.00', '234.00', '12', '8', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('120', '风筒', 'wuwuwu', '../img/good3', 'adssad', '134.00', '234.00', '12', '8', 'c', '', '海外仓');
INSERT INTO `goods` VALUES ('121', '吃枣药丸', 'pengg', '../img/good8', 'ade啊dad', '13.00', '23.00', '1232', '10', 'c', '', '自贸仓');
INSERT INTO `goods` VALUES ('122', '包包', 'bag', '../img/good4', 'dse', '1342.00', '2342.00', '134', '8', 'b', '', '自贸仓');
INSERT INTO `goods` VALUES ('123', 'bb水', 'babywater', '../img/good9', 'dsesd', '125.00', '189.00', '12', '8', 'b', '', '海外仓');

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `nprice` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL,
  `sendm` varchar(255) NOT NULL,
  `pinpai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('3', '包包', '../img/good4', '2342.00', '1342.00', '10', '海外仓', 'dse');
INSERT INTO `shopcar` VALUES ('5', '包包', '../img/good4', '2342.00', '1342.00', '8', '海外仓', 'dse');
INSERT INTO `shopcar` VALUES ('34', 'bb水', '../img/good9', '189.00', '125.00', '9', '自贸仓', 'dsesd');
INSERT INTO `shopcar` VALUES ('7', '盆', '../img/good2', '23.00', '13.00', '23', '海外仓', 'dse');
INSERT INTO `shopcar` VALUES ('2', '盆', '../img/good2', '23.00', '13.00', '4', '海外仓', 'ade');

-- ----------------------------
-- Table structure for userdb
-- ----------------------------
DROP TABLE IF EXISTS `userdb`;
CREATE TABLE `userdb` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `hoby` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userdb
-- ----------------------------
INSERT INTO `userdb` VALUES ('1', '13432876075', 'qweqwe', null, null, null);
INSERT INTO `userdb` VALUES ('2', '13432876075', 'qwqeqw', null, null, null);
INSERT INTO `userdb` VALUES ('3', '13432876075a', 'asddaw', null, null, null);
INSERT INTO `userdb` VALUES ('4', '13432876076', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('5', '13435363723', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('6', '13432434343', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('7', '13124988152', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('8', '13432453245', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('10', '13432876079', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('11', '13987654567', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `userdb` VALUES ('12', '', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
SET FOREIGN_KEY_CHECKS=1;
