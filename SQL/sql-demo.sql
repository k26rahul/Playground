-- CREATE TABLE
--   users3 (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) UNIQUE
--   );
-- INSERT INTO
--   users2 (username, email)
-- VALUES
--   ('john_doe', 'john@example.com');
-- SELECT
--   *
-- from
--   users2;
CREATE TABLE
  students3 (
    roll char(5),
    name varchar(20),
    dept_name varchar(20)
  );

-- SELECT
--   *
-- FROM
--   pg_catalog.pg_database;
-- SELECT
--   *
-- from
--   pg_database;
SELECT
  *
FROM
  pg_stat_activity;

SELECT
  *
FROM
  actors4;

-- CREATE TABLE
--   Actors4 (
--     actor_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30) NOT NULL,
--     gender CHAR(1),
--     date_of_birth DATE
--   );