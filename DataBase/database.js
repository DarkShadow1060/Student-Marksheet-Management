

const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentmarksheetmanagementdb','studentadmin','Abcd1234',{
    host:"studentmarksheetmanagementdb.database.windows.net",
    dialect:"mysql"
});

module.exports = sequelize;
