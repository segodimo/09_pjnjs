<!-- credenciales -->
git config --global user.name "segodimo"
git config --global user.email "segodimo@gmail.com"


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

git config --global user.email "segodimo@gmail.com"
git config --global user.name "segodimo"
git config --global user.email "jsbachb612"

git remote add origin https://github.com/segodimo/09_pjnjs.git

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/segodimo/09_pjnjs.git
git push -u origin master

git remote add origin https://github.com/segodimo/09_pjnjs.git
git push -u origin master

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- Reverter Cambios -->
git checkout -- 

<!-- depois de git status antes de git add pode usar diff -->
git diff index.html

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

PUSH =>
PULL <=


sudo /etc/init.d/mysql start
sudo /etc/init.d/mysql stop


CREATE DATABASE `tbl0901`;

CREATE USER 'segodimo' IDENTIFIED BY '105474';

GRANT USAGE ON *.* TO 'segodimo'@localhost IDENTIFIED BY '105474';

GRANT USAGE ON *.* TO 'segodimo'@'%' IDENTIFIED BY '105474';


GRANT ALL privileges ON `tbl0901`.* TO 'segodimo'@localhost;
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'segodimo'@localhost; 

DROP USER segodimo@localhost;
DROP DATABASE tbl0901;



<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->
https://www.guru99.com/mariadb-tutorial-install.html


show databases;

use database;

show tables;

desc tbl0901;

DROP TABLE tablename;
DROP TABLE tbl0901;

CREATE DATABASE tbl0901;


<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->
//PROCURANDO HOST

select @@hostname;
<!-- CASDEV01 -->

show variables where Variable_name like '%host%';
+-------------------------------+----------+
| Variable_name                 | Value    |
+-------------------------------+----------+
| host_cache_size               | 279      |
| hostname                      | CASDEV01 |
| performance_schema_hosts_size | -1       |
| report_host                   |          |
+-------------------------------+----------+

select host from information_schema.processlist;
+-----------------+
| host            |
+-----------------+
| localhost:60970 |
| localhost:65074 |
|                 |
|                 |
|                 |
|                 |
|                 |
+-----------------+


show processlist;
+----+-------------+-----------------+---------+---------+------+--------------------------+------------------+----------+
| Id | User        | Host            | db      | Command | Time | State                    | Info             | Progress |
+----+-------------+-----------------+---------+---------+------+--------------------------+------------------+----------+
|  1 | system user |                 | NULL    | Daemon  | NULL | InnoDB purge coordinator | NULL             |    0.000 |
|  2 | system user |                 | NULL    | Daemon  | NULL | InnoDB purge worker      | NULL             |    0.000 |
|  3 | system user |                 | NULL    | Daemon  | NULL | InnoDB purge worker      | NULL             |    0.000 |
|  4 | system user |                 | NULL    | Daemon  | NULL | InnoDB purge worker      | NULL             |    0.000 |
|  5 | system user |                 | NULL    | Daemon  | NULL | InnoDB shutdown handler  | NULL             |    0.000 |
| 13 | root        | localhost:65074 | tbl0901 | Sleep   |    1 |                          | NULL             |    0.000 |
| 24 | root        | localhost:60970 | NULL    | Query   |    0 | Init                     | show processlist |    0.000 |
+----+-------------+-----------------+---------+---------+------+--------------------------+------------------+----------+


mysql -h 166.78.144.191 -u username -ppassword database_name
//funcionaou
mysql -h localhost -uroot -p105474 tbl0901


http://localhost:8000

<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->




<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- no funciona -->
ALTER tbl0901 MODIFY data DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE MODIFY dt_modified datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++ -->

CREATE TABLE persons (
id int, 
name varchar(20), 
surname varchar(20)
);

INSERT INTO persons VALUES (1,"poftut","com");


CREATE TABLE Book(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE Price(
id INT NOT NULL AUTO_INCREMENT,
price float NOT NULL,
PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS equipment (
equip_id int(5) NOT NULL AUTO_INCREMENT,
type varchar(50) DEFAULT NULL,
install_date DATETIME DEFAULT NULL,
color varchar(20) DEFAULT NULL,
working bool DEFAULT NULL,
location varchar(250) DEFAULT NULL,
PRIMARY KEY(equip_id)
);



CREATE TABLE Book(  
id INT NOT NULL AUTO_INCREMENT,  
name VARCHAR(100) NOT NULL,  
PRIMARY KEY (id));


INSERT INTO book
(id, name)
VALUES(1, 'MariaDB Book');


<!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->





<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
CREATE TABLE tbl0901(
id INT NOT NULL AUTO_INCREMENT,
url TEXT NOT NULL,
titulo varchar(250) DEFAULT NULL,
data DATETIME DEFAULT CURRENT_TIMESTAMP,
tags varchar(250) DEFAULT NULL,
PRIMARY KEY (id)
);
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
INSERT INTO tbl0901
(url, titulo, tags)  
VALUES('www.test.com', 'titest', 'tstags');

INSERT INTO tbl0901 (url, titulo, tags) VALUES('www.test_2.com', 'titest_2', 'tstags_2');
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
INSERT INTO tbl0901
(url, titulo, data, tags)  
VALUES(
'www.test.com', 'titest', '2004-05-23T14:25:10', 'tstags');  
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

sudo /etc/init.d/mysql start
sudo /etc/init.d/mysql stop




