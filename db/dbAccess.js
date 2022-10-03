const connection = require("./connection");
 
class DbAccess {
    constructor(connection){
        this.conn = connection;
    }
    getAllEmployees(){
        return this.connection.promise().query(
            "select employee.id, employee.first_name, employee.last_name, role.title,\
            department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name)\
            AS manager FROM employee LEFT JOIN role ON employeed.role_id = role.id \
            LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager \
            ON manager.id = employee.manager_id;"

        )
    }
};
module.exports = new DbAccess(connection);

