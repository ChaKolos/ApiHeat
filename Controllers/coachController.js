const Coach = require('../Models/Coach'); 

const coachController = {
    // Create a new coach
    async create(req, res) {
        try {
            const newCoach = await Coach.create(req.body);
            res.status(201).json(newCoach);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get all coaches
    async getAll(req, res) {
        try {
            const coaches = await Coach.findAll();
            res.json(coaches);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Get a single coach by ID
    async getOne(req, res) {
        try {
            const coach = await Coach.findByPk(req.params.id);
            if (coach) {
                res.json(coach);
            } else {
                res.status(404).send('Coach not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Update a coach
    async update(req, res) {
        try {
            const updated = await Coach.update(req.body, {
                where: { ID_Coach: req.params.id }
            });
            if (updated) {
                const updatedCoach = await Coach.findByPk(req.params.id);
                res.json(updatedCoach);
            } else {
                res.status(404).send('Coach not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },


    async loginCoach(req, res) {
        try {
            const coach = await Coach.findOne({
                where: { matricule: req.body.matricule }
            });
            if (coach && coach.isValidPassword(req.body.motDePasse)) {
                res.json({ idCoach: coach.id });
            } else {
                res.status(401).send('Invalid credentials');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    
    // Delete a coach
    async delete(req, res) {
        try {
            const deleted = await Coach.destroy({
                where: { ID_Coach: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Coach deleted');
            } else {
                res.status(404).send('Coach not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = coachController;
