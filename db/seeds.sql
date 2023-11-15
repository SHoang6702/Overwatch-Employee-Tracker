INSERT INTO departments (department_name)
VALUES
('Civil Protection')
('Overwatch')

INSERT INTO roles (title, salary, department_id)
VALUES
-- No one gets paid in the Combine :D
('Civil Protection Officer', 0, 1)
('Overwatch Soldier', 0, 2)
('Overwatch Elite', 0, 2)
('Combine Grunt', 0, 2)
('Combine Charger', 0, 2)
('Combine Suppressor', 0, 2)
('Combine Ordinal', 0, 2)

INSERT INTO employee (first_name, last_name, role_id, overwatch_id)
VALUES
-- If I'm right this should make barney part of Civil Protection
('Barney', 'Calhoun', 1, 1)
('Jimmy', "Johns", 1, 1)