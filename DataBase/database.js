

const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentmarksheetmanagementdb','heramb','Abcd1234',{
    host:"studentmarksheetmanagementdb.cluster-ct0tqivkeuwn.ap-south-1.rds.amazonaws.com",
    dialect:"mysql"
});

module.exports = sequelize;
