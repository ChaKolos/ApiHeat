const JournalSommeil = require('../Models/JournalSommeil'); 

const journalSommeilController = {
    // Create a new sleep entry
    async create(req, res) {
        try {
            const newJournalSommeil = await JournalSommeil.create(req.body);
            res.status(201).json(newJournalSommeil);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get all sleep entries
    async getAll(req, res) {
        try {
            const sommeilEntries = await JournalSommeil.findAll();
            res.json(sommeilEntries);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get a single sleep entry by ID
    async getOne(req, res) {
        try {
            const sommeilEntry = await JournalSommeil.findByPk(req.params.id);
            if (sommeilEntry) {
                res.json(sommeilEntry);
            } else {
                res.status(404).send('Sleep entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Update a sleep entry
    async update(req, res) {
        try {
            const updated = await JournalSommeil.update(req.body, {
                where: { ID_Sommeil: req.params.id }
            });
            if (updated[0] === 1) {
                const updatedSommeilEntry = await JournalSommeil.findByPk(req.params.id);
                res.json(updatedSommeilEntry);
            } else {
                res.status(404).send('Sleep entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Delete a sleep entry
    async delete(req, res) {
        try {
            const deleted = await JournalSommeil.destroy({
                where: { ID_Sommeil: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Sleep entry deleted');
            } else {
                res.status(404).send('Sleep entry not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = journalSommeilController;
