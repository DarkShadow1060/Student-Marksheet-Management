const Sequelize = require('sequelize');

const sequelize = new Sequelize("studentmarksheetmanagementdb","heramb","Abcd@1234#",
{
    hostname=studentmanagementserver.mysql.database.azure.com,
    ssl-mode=require
});

module.exports = sequelize;
