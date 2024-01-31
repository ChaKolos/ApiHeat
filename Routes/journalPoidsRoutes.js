const express = require('express');
const router = express.Router();
const journalPoidsController = require('../Controllers/journalPoidsController');

router.post('/', journalPoidsController.create);
router.get('/', journalPoidsController.getAll);
router.get('/:id', journalPoidsController.getOne);
router.put('/:id', journalPoidsController.update);
router.delete('/:id', journalPoidsController.delete);

module.exports = router;
