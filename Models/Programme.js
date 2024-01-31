const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Utilisateur = require('../Models/Utilisateur');



sequelize.sync()



const Programme = sequelize.define('Programme', {
    ID_Programme: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Titre: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT
    },
    Type: {
        type: Sequelize.STRING(255)
    },
    ID_Coach: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Coach',
            key: 'ID_Coach'
        }
    },
    ID_Categorie: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Categorie',
            key: 'ID_Categorie'
        }
    }
});
