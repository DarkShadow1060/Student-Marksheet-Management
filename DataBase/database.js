

const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentmarksheetmanagementdb','studentadmin','Abcd1234',{
    host:"studentmarksheetmanagementdb.mysql.database.azure.com",
    dialect:"mysql"
});

module.exports = sequelize;
