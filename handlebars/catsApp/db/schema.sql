DROP DATABASE cat_db;

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	catname varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);