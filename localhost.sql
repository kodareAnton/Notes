-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 12 jun 2022 kl 17:11
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `notesdb`
--
CREATE DATABASE IF NOT EXISTS `notesdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `notesdb`;

-- --------------------------------------------------------

--
-- Tabellstruktur `notesdb`
--

CREATE TABLE `notesdb` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `notesdb`
--

INSERT INTO `notesdb` (`id`, `title`, `description`, `date`) VALUES
(1, 'Anton', 'Kör bil', '2022-06-11 16:40:45'),
(2, 'Adam', 'kör mariokart\r\n', '2022-06-11 17:10:35');

-- --------------------------------------------------------

--
-- Tabellstruktur `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `date`) VALUES
(1, 'Springa', '<p>jag ska springa p&aring; kl&ouml;rdagen.</p>', '2022-06-11 17:12:28'),
(2, 'Jenny', '<p>Simmar</p>', '2022-06-11 17:12:50'),
(3, 'aaa', '<p><strong>kakaka</strong></p>', '2022-06-11 17:14:44'),
(4, 'skrata', '<p>skrattar s&aring; jag gr&aring;ter</p>', '2022-06-12 11:34:40'),
(5, 'Anton', '<p style=\"text-align: center;\">hej!</p>\n<p>Mitt namn &auml;r <em>anton </em>och jag gillar <strong>gitarr</strong></p>', '2022-06-12 12:00:25'),
(10, 'Jonass', '<p>Bajen</p>', '2022-06-12 14:29:08'),
(11, 'Jenny', '<p>cyckla</p>', '2022-06-12 14:39:06');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `notesdb`
--
ALTER TABLE `notesdb`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `notesdb`
--
ALTER TABLE `notesdb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT för tabell `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
