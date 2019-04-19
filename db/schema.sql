CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured_by VARCHAR(255),
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);