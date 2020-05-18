 
  DROP TABLE IF EXISTS doctor_info;
  --  DROP TABLE IF EXISTS reset_codes;
   CREATE TABLE doctor_info(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      quelification VARCHAR(255) NOT NULL,
      specialization VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      pincode INT NOT NULL,
      city VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
         pic_url TEXT,
         category VARCHAR(255) NOT NULL,
       
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
  DROP TABLE IF EXISTS users;
   
   CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

--  CREATE TABLE reset_codes(
--   id SERIAL PRIMARY KEY,
--   email VARCHAR NOT NULL,
--   code VARCHAR NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- CREATE TABLE friendships(
--     id SERIAL PRIMARY KEY,
--     receiver_id INT NOT NULL REFERENCES users(id),
--     sender_id INT NOT NULL REFERENCES users(id),
--     accepted BOOLEAN DEFAULT FALSE
-- );











