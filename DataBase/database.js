

const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentmarksheetmanagementdb','studentadmin','Abcd1234',{
    host:"studentmanagementdb.ct0tqivkeuwn.ap-south-1.rds.amazonaws.com",
    dialect:"mysql"
});

module.exports = sequelize;
