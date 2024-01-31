const express = require('express');
const router = express.Router();
const journalNutritionController = require('../Controllers/journalNutritionController');

router.post('/', journalNutritionController.create);
router.get('/', journalNutritionController.getAll);
router.get('/:id', journalNutritionController.getOne);
router.put('/:id', journalNutritionController.update);
router.delete('/:id', journalNutritionController.delete);

module.exports = router;
