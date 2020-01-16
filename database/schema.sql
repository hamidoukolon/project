DROP DATABASE IF EXISTS move_db;
create database move_db;
use move_db;
-- bmi
DROP TABLE IF EXISTS bmi;
CREATE TABLE bmi (
    id INTEGER AUTO_INCREMENT,
    weight DECIMAL(4,1),
    height INT,
    createdAt DATETIME,
    PRIMARY KEY(id)
);
-- activities
DROP TABLE IF EXISTS activities;
CREATE TABLE activities(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    bodypart VARCHAR(255) NOT NULL,
    unit VARCHAR(255) NOT NULL,
    reps DECIMAL(10,2) NOT NULL,
    createdAt DATETIME NOT NULL,
    PRIMARY KEY(id)
);
-- meals
DROP TABLE IF EXISTS meals;
CREATE TABLE meals(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    calories INTEGER,
    createdAt DATETIME NOT NULL,
    PRIMARY KEY(id)
);
