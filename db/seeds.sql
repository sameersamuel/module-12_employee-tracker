USE employee_db;

INSERT INTO department (name)
VALUES ("Stage Techs"),
       ("Front of House"),
       ("Merch");

INSERT INTO role (title, salary, department_id)
VALUES ("Stage Manager", 40000, 1),
        ("Stage Tech", 30000, 1),
        ("Lighting Engineer", 50000, 2),
        ("Sound Engineer", 50000, 2),
        ("Merchdiser", 30000, 3);

INSERT INTO employee (first_name, last_name ,role_id ,manager_id)
VALUES ("Frank", "Wilson", 1, NULL),
        ("Charles", "McCrae", 2, 1),
        ("Tom", "Morello", 3, 1),
        ("James", "Seals", 4, 1),
        ("Jason", "Moran", 5, 1);
