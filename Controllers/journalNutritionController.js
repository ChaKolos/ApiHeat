const JournalNutrition = require('../Models/JournalNutrition'); 

const journalNutritionController = {
    // Create a new nutrition entry
    async create(req, res) {
        try {
            const newJournalNutrition = await JournalNutrition.create(req.body);
            res.status(201).json(newJournalNutrition);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get all nutrition entries
    async getAll(req, res) {
        try {
            const journalEntries = await JournalNutrition.findAll();
            res.json(journalEntries);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get a single nutrition entry by ID
    async getOne(req, res) {
        try {
            const journalEntry = await JournalNutrition.findByPk(req.params.id);
            if (journalEntry) {
                res.json(journalEntry);
            } else {
                res.status(404).send('Nutrition entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Update a nutrition entry
    async update(req, res) {
        try {
            const updated = await JournalNutrition.update(req.body, {
                where: { ID_Nutrition: req.params.id }
            });
            if (updated[0] === 1) {
                const updatedJournalEntry = await JournalNutrition.findByPk(req.params.id);
                res.json(updatedJournalEntry);
            } else {
                res.status(404).send('Nutrition entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Delete a nutrition entry
    async delete(req, res) {
        try {
            const deleted = await JournalNutrition.destroy({
                where: { ID_Nutrition: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Nutrition entry deleted');
            } else {
                res.status(404).send('Nutrition entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = journalNutritionController;
