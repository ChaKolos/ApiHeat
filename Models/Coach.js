const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Coach = sequelize.define('Coach', {
    ID_Coach: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Nom: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Prenom: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(150),
        unique: true,
        allowNull: false
    },
    Matricule: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    Telephone: {
        type: Sequelize.STRING(20)
    },
    Date_de_naissance: {
        type: Sequelize.DATE
    },
    Annee_experience: {
        type: Sequelize.INTEGER
    },
    Specialisations: {
        type: Sequelize.TEXT
    }
});
