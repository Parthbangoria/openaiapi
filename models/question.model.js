const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const questionModel = sequelize.define("question",{

    question : {
        type : DataTypes.STRING,
        allowNull:true},
    
    answer : {
        type : DataTypes.STRING,
        allowNull: true 
    }},
    {
        tableName : "question"
    });

module.exports = questionModel;