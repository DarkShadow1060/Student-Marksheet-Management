const Sequelize = require('sequelize');

const sequelize = new Sequelize("studentmarksheetmanagementdb","test","test",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;