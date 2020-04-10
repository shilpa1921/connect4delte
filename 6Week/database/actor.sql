DROP TABLE IF EXISTS actor;

CREATE TABLE actor (
    
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    numberofOscars  INT
   
);


INSERT INTO actor (name, age, numberofOscars)
VALUES ('Leonardo DiCaprio', 41, 1);

INSERT INTO actor (name, age, numberofOscars)
VALUES ('Jennifer Lawrence', 25, 1);

INSERT INTO actor (name, age, numberofOscars)
VALUES ('Samuel L. Jackson', 67, 0);

INSERT INTO actor (name, age, numberofOscars)
VALUES ('Meryl Streep', 66, 3);

INSERT INTO actor (name, age, numberofOscars)
VALUES ('John Cho	', 43, 0);

SELECT name FROM actor
WHERE numberofOscars > 1;


SELECT name FROM actor
WHERE age > 30;