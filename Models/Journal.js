const JournalNutritionnel = sequelize.define('journalNutritionnel', {
    
    date: Sequelize.DATE,
    
    calories_totales: Sequelize.FLOAT,
    
    id_utilisateur: {
        type: Sequelize.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id',
        }
    }
});
