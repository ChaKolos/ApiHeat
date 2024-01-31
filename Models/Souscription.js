const Sequelize = require('sequelize');
const sequelize = require('../config/database');

sequelize.sync();

const Souscription = sequelize.define('souscription', {
    ID_Souscription: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DateSouscription: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    Actif: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true, 
    },
    ID_Utilisateur: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Utilisateur', 
            key: 'ID_Utilisateur',
        },
    },
    ID_Programme: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Programme', 
            key: 'ID_Programme',
        },
    },
}, {
    timestamps: false,
    tableName: 'souscriptions' 
});

module.exports = Souscription;
