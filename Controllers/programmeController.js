const Programme = require('../Models/Programme'); 
const programmeController = {
    // Create a new program
    async create(req, res) {
        try {
            const newProgramme = await Programme.create(req.body);
            res.status(201).json(newProgramme);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get all programs
    async getAll(req, res) {
        try {
            const programmes = await Programme.findAll();
            res.json(programmes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get a single program by ID
    async getOne(req, res) {
        try {
            const programme = await Programme.findByPk(req.params.id);
            if (programme) {
                res.json(programme);
            } else {
                res.status(404).send('Program not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Update a program
    async update(req, res) {
        try {
            const updated = await Programme.update(req.body, {
                where: { ID_Programme: req.params.id }
            });
            if (updated[0] === 1) {
                const updatedProgramme = await Programme.findByPk(req.params.id);
                res.json(updatedProgramme);
            } else {
                res.status(404).send('Program not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Delete a program
    async delete(req, res) {
        try {
            const deleted = await Programme.destroy({
                where: { ID_Programme: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Program deleted');
            } else {
                res.status(404).send('Program not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = programmeController;
