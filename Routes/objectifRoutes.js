const express = require('express');
const router = express.Router();
const objectifController = require('../controllers/objectifController');

router.get('/', objectifController.getAll);
router.get('/:id', objectifController.getOne);
router.post('/', objectifController.create);
router.put('/:id', objectifController.update);
router.delete('/:id', objectifController.delete);

module.exports = router;
