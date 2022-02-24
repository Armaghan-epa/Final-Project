-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2022 at 07:45 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `title`, `description`, `year`, `poster`) VALUES
(12, 'سریال Breaking Bad', 'سریال Breaking Bad بریکینگ بد داستان سریال درباره یک معلم شیمی میانسال است که متوجه می شود که دارای سرطان ریه است و ۲ سال بیشتر وقت برای زندگی ندارد. او که وضع مالی خوبی ندارد و دارای همسر و پسری معلول می باشد، به این فکر می افتد که باید قبل از مردن زندگی خانواده خود را تامین کند. پس با توجه به آشناییش به علم شیمی، همراه با یکی از شاگردان سابقش شروع به ساخت و فروش مواد مخدر می کند...', '2008', 'https://myzarfilm.bid/wp-content/uploads/2019/11/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500-210x310.jpg'),
(13, 'سریال Vikings وایکینگ ها', 'سریال Vikings وایکینگ‌ ها داستان سریال درباره فردی است به نام رگنار لاثبروک که با پادشاه آن دوران وایکینگ ها به مخالفت برمیخیزد و دوست دارد این بار به جای نبرد با شرقی های منطقه خود، حمله به سمت غرب را در دستور کار خود قرار بدهند. رگنار با مخالفت با پادشاه خود، کار را به جلو میبرد تا راه را برای نبرد با غربی ها هموار کند و حتی خود را در مقام پادشاهی ببیند...', '2013', 'https://myzarfilm.bid/wp-content/uploads/2021/11/vikings-210x310.jpg'),
(14, 'سریال Game of Thrones بازی تاج و تخت', 'سریال Game of Thrones بازی تاج و تخت هفت خاندان اشرافی برای حاکمیت بر سرزمین افسانه ای «وستروس» در حال ستیز با یکدیگرند. خاندان «استارک»، «لنیستر» و «باراثیون» برجسته ترین آنها هستند. داستان از جایی شروع می شود که «رابرت باراثیون» پادشاه وستروس، از دوست قدیمی اش، «ادارد» ارباب خاندان استارک، تقاضا می کند که بعنوان مشاور پادشاه، برترین سمت دربار، به او خدمت کند. این در حالی است که مشاور قبلی به طرز مرموزی به قتل رسیده است، با این حال ادارد تقاضای پادشاه را می پذیرد و به سرزمین شاهی راهی می شود. خانواده ملکه، یعنی لنیستر ها در حال توطئه برای بدست آوردن قدرت هستند. از سوی دیگر، بازمانده های خاندان پادشاه قبلی وستروس، «تارگرین ها» نیز نقشه ی پس گرفتن تاج و تخت را در سر می پرورانند، و تمام این ماجراها موجب در گرفتن نبردی عظیم میان آن‌ها خواهد شد...', '2011', 'https://myzarfilm.bid/wp-content/uploads/2019/12/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._UX500-210x310.jpg'),
(15, 'سریال Lost گمشدگان', 'سریال Lost گمشده سریال گمشدگان، داستان گروهی از مسافران پرواز سیدنی – لس آنجلس را روایت میکند که در بین راه، هواپیمایشان در جزیره ای واقع در مدار راس السرطان در وسط اقیانوس آرام سقوط میکند. تنها تعداد اندکی از مسافران این هواپیما زنده می مانند و بقیه می میرند. حال این افراد مجبور میشوند برای اینکه از گرسنگی، تشنگی و سایر عوامل در امان باشند، به صورت دسته جمعی زندگی کنند و با یکدیگر متحد باشند. هر روز اتفاقات مختلفی برای این گمشدگان رخ میدهد که هیجان انگیز و تماشایی است …', '2004', 'https://myzarfilm.bid/wp-content/uploads/2020/10/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._UX500.jpg'),
(16, 'سریال Prison Break فرار از زندان', 'سریال Prison Break فرار از زندان داستان این مجموعه تلویزیونی در مورد دو برادر است که یکی از آنها به جرم قتلی که انجام نداده به اعدام محکوم شده و برادرش خود را به زندان می‌اندازد تا با استفاده از نقشه‌ای که قبلا طراحی کرده او را از زندان فراری دهد…', '2005', 'https://myzarfilm.bid/wp-content/uploads/2020/07/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._UX500-210x310.jpg'),
(17, 'Peaky Blinders پیکی بلایندرز', 'سریال Peaky Blinders پیکی بلایندرز در دهه 20 که گروه های گنگستری در شهر بیرمنگهام واقع در انگلستان بسیار زیاد شده است، یک گروه گنگستر سعی میکند خود را در این دهه به قدرت برساند…', '2013', 'https://myzarfilm.bid/wp-content/uploads/2019/11/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX500-210x310.jpg'),
(18, 'سریال Money Heist (La Casa de Papel)', 'سریال Money Heist (La Casa de Papel) سرقت پول گروهی از سارقان خاص برای انجام بزرگترین سرقت تاریخ اسپانیا و دزدیدن دو میلیارد و چهارصد میلیون یورو دور هم جمع می‌شوند و...', '2017', 'https://myzarfilm.bid/wp-content/uploads/2020/04/money-210x310.jpg'),
(19, 'سریال Lucifer لوسیفر', 'سریال Lucifer لوسیفر داستان این سریال درباره ی یک فرشته رانده شده به نام لوسیفر است که عنوان پادشاه جهنم زندگی کسل کننده ای دارد او تصمیم میگیرد به لس آنجلس نقل مکان کند و یک کلوپ شبانه به ناک لوکس باز کند ولی خدا از این کار او راضی نیست و یک فرشته به نام آمنادییل را میفرستد تا او را قانع کند که به جهنم برگردد…', '2015', 'https://myzarfilm.bid/wp-content/uploads/2021/05/lucifer-210x310.jpg'),
(20, 'سریال The Vampire Diaries خاطرات خون‌ آشام', 'سریال The Vampire Diaries خاطرات یک خون آشام داستان سریال درباره ی دختری به نام الینا گیلبرت است که به تازگی والدینش را در تصادف رانندگی از دست داده و در اثر این واقعه اشتیاق و نشاطش را هم به زندگی از دست میدهد. استفن یک خون آشام هست، او فردی با وجدان هستش که هنوز انسانیتش را از دست نداده، به انسان ها علاقه منده و از خون حیوانات تغذیه می کند، اما برادرش دیمن که کینه ی شدیدی هم از استفن به دل دارد، هدفی غیر از آزار برادرش ندارد و برای جان انسان ها هم کوچک ترین ارزشی قائل نیست و...', '2009', 'https://myzarfilm.bid/wp-content/uploads/2021/05/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._UX500-210x310.jpg'),
(21, 'سریال Dark 2017 تاریک', 'سریال Dark تاریک این سریال داستان خانواده ای در شهر کوچکی در آلمان است که با مسائل ماورالطبیعه سر و کار دارند. پس از ناپدید شدن دو کودک، روابط میان چهار خانواده معروف شهر افشا می شود...', '2017', 'https://myzarfilm.bid/wp-content/uploads/2020/06/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._UX500-210x310.jpg'),
(22, 'سریال Squid Game بازی مرکب', 'سریال Squid Game بازی ماهی مرکب داستان افرادی که هر کدام به نوعی در زندگی خود مشکل بزرگی دارند و برای جبران آن وارد بازی مرموزی می شوند که فقط یک برنده با جایزه ۴۰ میلیون دلاری خواهد داشت...', '2021', 'https://myzarfilm.bid/wp-content/uploads/2021/09/MV5BZDI0ZDVhNTctOWI5Yy00NDE4LWI0MjctYTJiODU4ODA1YTJjXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_SX500-210x310.jpg'),
(23, 'سریال The Queens Gambit', 'سریال The Queen\'s Gambit گامبی وزیر این سریال از رمانی به همین نام اقتباس شده که در مورد زندگی بث هارمن یتیم است که نبوغ بالایی در شطرنج دارد و با وجود درگیری با اعتیاد وی تبدیل به برترین شطرنج‌باز دنیا شده است. این سریال از 8 سالگی تا 22 سالگی این دختر را به تصویر خواهد کشید و در دوران جنگ سرد روایت خواهد شد...', '2020', 'https://myzarfilm.bid/wp-content/uploads/2020/10/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._UX500-210x310.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
