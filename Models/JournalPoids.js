const Sequelize = require('sequelize');
const sequelize = require('../config/database');

sequelize.sync();

const JournalPoids = sequelize.define(
  'Journal_de_Poids',
  {
    ID_Poids: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    Poids: {
      type: Sequelize.DECIMAL(5, 2), // Adjust the data type as needed
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
    tableName: 'Journal_de_Poids', // Specify the actual table name here
  }
);

module.exports = JournalPoids;
