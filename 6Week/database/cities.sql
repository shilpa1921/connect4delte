DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
    id SERIAL primary key,
    city VARCHAR(255) NOT NULL,
    population INT,
    country VARCHAR
);
-- Lets add some rows to the table

INSERT INTO cities (city, population, country)
VALUES ('Berlin', 3610156, 'Germany');

INSERT INTO cities (city, population, country)
VALUES ('Goettingen', 118000, 'Sweden');

-- to read from a table we use

-- SELECT * FROM cities; (to read everything)
-- we can add conditions i.e.
-- SELECT * FROM cities WHERE population > 1000000;

-- To do an update it looks like this...
UPDATE cities 
SET country = 'Germany' 
WHERE id = 2;

-- DESTROY! (delete);

DELETE FROM cities 
WHERE id = 2;