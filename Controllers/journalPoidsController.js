const JournalPoids = require('../Models/JournalPoids'); 

const journalPoidsController = {
    // Create a new weight entry
    async create(req, res) {
        try {
            const newJournalPoids = await JournalPoids.create(req.body);
            res.status(201).json(newJournalPoids);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get all weight entries
    async getAll(req, res) {
        try {
            const poidsEntries = await JournalPoids.findAll();
            res.json(poidsEntries);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get a single weight entry by ID
    async getOne(req, res) {
        try {
            const poidsEntry = await JournalPoids.findByPk(req.params.id);
            if (poidsEntry) {
                res.json(poidsEntry);
            } else {
                res.status(404).send('Weight entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Update a weight entry
    async update(req, res) {
        try {
            const updated = await JournalPoids.update(req.body, {
                where: { ID_Poids: req.params.id }
            });
            if (updated[0] === 1) {
                const updatedPoidsEntry = await JournalPoids.findByPk(req.params.id);
                res.json(updatedPoidsEntry);
            } else {
                res.status(404).send('Weight entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Delete a weight entry
    async delete(req, res) {
        try {
            const deleted = await JournalPoids.destroy({
                where: { ID_Poids: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Weight entry deleted');
            } else {
                res.status(404).send('Weight entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = journalPoidsController;
