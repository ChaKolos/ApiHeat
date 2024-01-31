// Validations/coachValidation.js

const Joi = require('joi');

// Define the validation schema
const coachSchema = Joi.object({
    ID_Coach: Joi.number().integer().min(1), 
    Nom: Joi.string().max(50).required(),
    Prenom: Joi.string().max(50).required(),
    Email: Joi.string().email().max(150).required(),
    Telephone: Joi.string().max(20),
    Date_de_naissance: Joi.date().less('now'), 
    Annee_experience: Joi.number().integer().min(0), 
    Specialisations: Joi.string().max(1000), 
});

module.exports = coachSchema;
