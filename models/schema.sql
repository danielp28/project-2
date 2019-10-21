-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;


DROP DATABASE IF EXISTS main_content;
CREATE DATABASE main_content;

CREATE TABLE threads (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body TEXT NOT NULL,
    author VARCHAR(20),
    PRIMARY KEY (id)
)

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    comments TEXT,
    PRIMARY KEY (id)
)


