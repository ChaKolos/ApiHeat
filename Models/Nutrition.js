const Nutrition = sequelize.define('nutrition', {
    
    type_repas: Sequelize.STRING,

    details_repas: Sequelize.TEXT,
    
    calories: Sequelize.FLOAT,
    
    nutriments: Sequelize.STRING,
    
    id_utilisateur: {
        type: Sequelize.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id',
        }
    }
});
