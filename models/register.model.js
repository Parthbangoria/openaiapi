const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const registerModel = sequelize.define('register', {

    email: { type: DataTypes.STRING,
        allowNull: true,
       
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
     
    }



}, {
    tableName: 'register'

});




module.exports = registerModel;