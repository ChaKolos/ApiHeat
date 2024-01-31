const Sequelize = require('sequelize');
const sequelize = require('../config/database');

sequelize.sync();

const JournalSommeil = sequelize.define(
  'Journal_de_Sommeil',
  {
    ID_Sommeil: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    Duree: {
      type: Sequelize.INTEGER,
    },
    Qualite: {
      type: Sequelize.STRING, // Adjust the data type as needed
    },
    ID_Utilisateur: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Utilisateurs',
        key: 'ID_Utilisateur',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'Journal_de_Sommeil', // Specify the actual table name here
  }
);

module.exports = JournalSommeil;
