-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 07 月 20 日 17:52
-- 服务器版本: 5.5.40
-- PHP 版本: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `ey`
--

-- --------------------------------------------------------

--
-- 表的结构 `ey_categorys`
--

CREATE TABLE IF NOT EXISTS `ey_categorys` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `tid` int(1) DEFAULT NULL COMMENT '1标签，2分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `ey_categorys`
--

INSERT INTO `ey_categorys` (`id`, `name`, `tid`) VALUES
(3, '随笔', 1),
(4, '网络123', 1),
(5, '123', 1);

-- --------------------------------------------------------

--
-- 表的结构 `ey_comments`
--

CREATE TABLE IF NOT EXISTS `ey_comments` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL COMMENT '地址',
  `email` varchar(30) DEFAULT NULL,
  `tid` int(1) DEFAULT NULL COMMENT '1:文章，2:心情',
  `nid` int(5) DEFAULT NULL COMMENT '节点ID',
  `pid` int(5) DEFAULT NULL COMMENT '评论对象',
  `comment` varchar(200) DEFAULT NULL,
  `time` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1804 ;


-- --------------------------------------------------------

--
-- 表的结构 `ey_contents`
--

CREATE TABLE IF NOT EXISTS `ey_contents` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `url` varchar(20) DEFAULT NULL,
  `uid` int(3) DEFAULT '1',
  `abscontent` text,
  `text` longtext,
  `markdown` longtext,
  `time` int(15) DEFAULT NULL,
  `updatetime` int(15) DEFAULT NULL,
  `tid` int(3) DEFAULT NULL,
  `cid` int(3) DEFAULT NULL,
  `ispage` int(1) DEFAULT NULL,
  `iscomment` int(1) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `view` int(5) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;


-- --------------------------------------------------------

--
-- 表的结构 `ey_count`
--

CREATE TABLE IF NOT EXISTS `ey_count` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `time` int(20) DEFAULT NULL,
  `userAgent` varchar(200) DEFAULT NULL,
  `Referer` varchar(200) DEFAULT NULL,
  `num` int(11) NOT NULL DEFAULT '0',
  `lng` varchar(15) DEFAULT NULL,
  `lat` varchar(15) DEFAULT NULL,
  `location` text,
  `address` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=112 ;


-- --------------------------------------------------------

--
-- 表的结构 `ey_moods`
--

CREATE TABLE IF NOT EXISTS `ey_moods` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `uid` int(3) NOT NULL,
  `mood` varchar(200) NOT NULL,
  `time` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;


-- --------------------------------------------------------

--
-- 表的结构 `ey_tags`
--

CREATE TABLE IF NOT EXISTS `ey_tags` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `tid` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `ey_tags`
--

INSERT INTO `ey_tags` (`id`, `name`, `tid`) VALUES
(11, '123', 1);

-- --------------------------------------------------------

--
-- 表的结构 `ey_users`
--

CREATE TABLE IF NOT EXISTS `ey_users` (
  `id` int(1) NOT NULL,
  `user` varchar(10) NOT NULL,
  `qq` varchar(11) DEFAULT NULL,
  `weibo` varchar(50) DEFAULT NULL,
  `email` varchar(15) DEFAULT NULL,
  `brief` varchar(500) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ey_users`
--

INSERT INTO `ey_users` (`id`, `user`, `qq`, `weibo`, `email`, `brief`, `img`, `pass`) VALUES
(1, 'admin', '123456', 'weibo.com', 'admin@eyblog', '这是简介a ', '/Public/img/logo.jpg', '8f9216fdfffc5728ec2332f3fd380312');

-- --------------------------------------------------------

--
-- 表的结构 `ey_web`
--

CREATE TABLE IF NOT EXISTS `ey_web` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `ey_web`
--

INSERT INTO `ey_web` (`id`, `content`) VALUES
(1, '{"title":"easyou","keyword":"","description":"","url":"http://127.0.0.1:8360/","duoshuo":"","bdpush":"","qnbucket":"","qnaccess":"","qnsecret":"","copyright":"","linkurl":""}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
