const Sequelize = require('sequelize');
const sequelize = require('../config/database');

sequelize.sync();

const Utilisateur = sequelize.define('utilisateur', {
    ID_Utilisateur: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nom: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Prenom: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Mot_de_passe: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    NomUtilisateur: {  
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    Email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
    },
    Telephone: {
        type: Sequelize.STRING(20)
    },
    Date_de_naissance: {
        type: Sequelize.DATE
    },
    Sexe: {
        type: Sequelize.STRING(10)
    },
    Taille: {
        type: Sequelize.DECIMAL(5, 2)
    },
    Poids: {
        type: Sequelize.DECIMAL(5, 2)
    },
    Objectif: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

module.exports = Utilisateur;
