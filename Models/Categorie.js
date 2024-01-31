const Sequelize = require('sequelize');
const sequelize = require('../config/database'); 
const Categorie = sequelize.define('Categorie', {
    ID_Categorie: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NomCategorie: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});
