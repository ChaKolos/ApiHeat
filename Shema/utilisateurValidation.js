// Validations/utilisateurValidation.js

const Joi = require('joi');

const utilisateurSchema = Joi.object({
    ID_Utilisateur: Joi.number().integer(), 
    Nom: Joi.string().max(50).required(),
    Prenom: Joi.string().max(50).required(),
    Mot_de_passe: Joi.string().min(6).max(100).required(), 
    Email: Joi.string().email().max(150).required(),
    Telephone: Joi.string().max(20).allow('', null), 
    Date_de_naissance: Joi.date().less('now'), 
    Sexe: Joi.string().max(10).valid('M', 'F', 'Other').insensitive().allow('', null), 
    Taille: Joi.number().precision(2).min(0), 
    Poids: Joi.number().precision(2).min(0),
    Objectif: Joi.string().allow('', null) 
}).options({ abortEarly: false }); 

module.exports = utilisateurSchema;
