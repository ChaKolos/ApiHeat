const Sommeil = sequelize.define('sommeil', {
    
    date: Sequelize.DATE,
    
    duree: Sequelize.FLOAT,
    
    qualite: Sequelize.STRING,
    
    commentaires: Sequelize.TEXT,
    
    id_utilisateur: {
        type: Sequelize.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id',
        }
    }
})