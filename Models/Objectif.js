const Objectif = sequelize.define('objectif', {
    
    description: Sequelize.STRING,
    
    date_debut: Sequelize.DATE,
    
    date_fin: Sequelize.DATE,
    
    statut: Sequelize.STRING,
    
    id_utilisateur: {
        type: Sequelize.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id',
        }
    }
});
