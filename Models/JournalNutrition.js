const Sequelize = require('sequelize');
const sequelize = require('../config/database');

sequelize.sync();

const JournalNutrition = sequelize.define(
  'Journal_de_nutrition',
  {
    ID_Nutrition: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    Calories: {
      type: Sequelize.INTEGER,
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
    tableName: 'Journal_de_nutrition', 
  }
);

module.exports = JournalNutrition;
