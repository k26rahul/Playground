SELECT
  id,
  name,
  salary / 12 as monthly_salary
FROM
  instructor;

SELECT
  name,
  salary
FROM
  instructor
WHERE
  dept_name = 'Comp. Sci.'
  and salary > 100000;

SELECT
  name,
  salary
FROM
  instructor
WHERE
  salary = salary * 2;

SELECT
  *
FROM
  instructor;

SELECT
  dept_name
FROM
  instructor;

SELECT DISTINCT
  dept_name
FROM
  instructor;

SELECT DISTINCT
  dept_name
FROM
  instructor
WHERE
  salary > 100000;

SELECT DISTINCT
  dept_name
FROM
  instructor
UNION
SELECT DISTINCT
  dept_name
FROM
  instructor
WHERE
  salary > 100000;

SELECT
  *
FROM
  instructor,
  teaches;

SELECT
  instructor.name,
  t.course_id as c_id
FROM
  instructor,
  teaches t
WHERE
  instructor.dept_name = 'Art';

select
  name,
  course_id
from
  instructor,
  teaches
where
  instructor.ID = teaches.ID
  and instructor.dept_name = 'Art';

select distinct
  T.name
from
  instructor as T,
  instructor as S
where
  T.salary > S.salary
  and S.dept_name = 'Comp. Sci.';

SELECT
  name
FROM
  instructor
WHERE
  name like '%ll%';

SELECT DISTINCT
  name
FROM
  instructor
ORDER BY
  name DESC
LIMIT
  10;

select
  top 10 distinct name
from
  instructor;

select distinct
  name
from
  instructor
order by
  name DESC
fetch first
  10 rows only;

select
  count(*)
from
  instructor,
  teaches
where
  instructor.id = '78699';

select
  *
from
  instructor;