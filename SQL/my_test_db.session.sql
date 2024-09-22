CREATE TABLE
  instructor (
    ID CHAR(5),
    name VARCHAR(20),
    dept_name VARCHAR(20),
    salary NUMERIC(8, 2)
  );

SELECT
  *
FROM
  instructor;

CREATE TABLE
  department (dept_name VARCHAR(20), primary key (dept_name));

DROP TABLE instructor;

DROP TABLE department;

CREATE TABLE
  instructor (
    ID CHAR(5),
    name VARCHAR(20) NOT NULL,
    dept_name VARCHAR(20),
    salary NUMERIC(8, 2),
    primary key (ID),
    foreign key (dept_name) references department
  );

CREATE TABLE
  student (
    ID VARCHAR(5),
    name VARCHAR(20) not NULL,
    dept_name VARCHAR(20),
    tot_cred NUMERIC(3, 0),
    primary key (ID),
    foreign key (dept_name) references department
  );

CREATE TABLE
  course (
    course_id VARCHAR(8),
    title VARCHAR(50),
    dept_name VARCHAR(20),
    credits NUMERIC(2, 0),
    primary key (course_id),
    foreign key (dept_name) references department
  );

CREATE TABLE
  takes (
    ID VARCHAR(5),
    course_id VARCHAR(8),
    semester VARCHAR(6),
    year NUMERIC(4, 0),
    grade VARCHAR(2),
    primary key (ID, course_id, semester, year)
  );

ALTER TABLE takes add primary key (ID, course_id, semester, year, attr_a);

ALTER TABLE takes add attr_b VARCHAR(10) not NULL;

ALTER TABLE takes
drop attr_a;

INSERT INTO
  instructor
VALUES
  ('10211', 'Smith', 'Biology', 66000);

delete FROM instructor;

INSERT INTO
  instructor (ID, name, dept_name, salary)
VALUES
  ('10211', 'Smith', 'Biology', 66000),
  ('10212', 'Johnson', 'Chemistry', 72000),
  ('10213', 'Williams', 'Physics', 69000);

SELECT
  *
FROM
  instructor;

SELECT DISTINCT
  name
FROM
  instructor;

INSERT INTO
  department
VALUES
  ('Biology'),
  ('Chemistry'),
  ('Physics');

delete from department;

CREATE DATABASE university;

SELECT
  '199' as id;

SELECT
  'a'
FROM
  instructor;