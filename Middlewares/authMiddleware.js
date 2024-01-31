const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Vérifiez si le token est présent et bien formaté
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        try {
            const token = req.headers.authorization.split(' ')[1]; 
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.userData = {
                userId: decodedToken.userId,
                role: decodedToken.role 
            }; 
            next();
        } catch (error) {
            res.status(401).json({ message: 'Authentification échouée' });
        }
    } else {
        // Si aucun token n'est trouvé ou s'il est mal formaté
        res.status(401).json({ message: 'Token manquant ou invalide' });
    }
};

module.exports = authMiddleware;
