const express = require('express');
const router = express.Router();
const utilisateurController = require('../Controllers/utilisateurController');
const utilisateurValidationSchema = require('../Shema/utilisateurValidation');

// Middleware for validation
const validateUtilisateur = (req, res, next) => {
    const { error } = utilisateurValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

// Routes with validation
router.post('/', validateUtilisateur, utilisateurController.create);
router.put('/:id', validateUtilisateur, utilisateurController.update);
router.post('/loginUtilisateur', utilisateurController.loginUtilisateur);

// Other routes
router.get('/', utilisateurController.getAll);
router.get('/:id', utilisateurController.getOne);
router.delete('/:id', utilisateurController.delete);

module.exports = router;
