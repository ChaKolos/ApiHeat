const express = require('express');
const router = express.Router();
const journalSommeilController = require('../Controllers/journalSommeilController');

router.post('/', journalSommeilController.create);
router.get('/', journalSommeilController.getAll);
router.get('/:id', journalSommeilController.getOne);
router.put('/:id', journalSommeilController.update);
router.delete('/:id', journalSommeilController.delete);

module.exports = router;
