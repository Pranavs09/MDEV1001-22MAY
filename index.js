const sqlite3 = require("sqlite3").verbose();

const db = new.sqlite3.Database(":memory");

db.seriaslize(function(){
db.run("CREATE TABLE INSTRUCTOR (ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");

db.run("INSERT INTO INSTRUCTOR VALUES()")

});

