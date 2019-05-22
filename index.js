const sqlite3 = require("sqlite3").verbose();

const db = new.sqlite3.Database(":memory");

db.seriaslize(function(){
db.run("CREATE TABLE INSTRUCTOR (ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");

db.run("INSERT INTYO INSTRUCTOR VALUES(10101, 'Srivisan', 'comp. Sci',65000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(12121, 'Wu', 'Finance',90000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(15151, 'Mozart', 'Music',90000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(22222, 'Einstein', 'Physics',95000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(32343, 'El Said', 'History',62000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(3456, 'Gold', 'Physics',87000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(45565, 'Katz', 'comp. Sci.',75000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(58583, 'Califieri', 'History',62000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(76543, 'Singh', 'Finance',80000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(76766, 'Crick', 'Biology',72000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(83821, 'Brandt', 'comp. Sci.',92000)");
db.run("INSERT INTYO INSTRUCTOR VALUES(98345, 'Kim', 'Elec. Eng.',80000)");
});

