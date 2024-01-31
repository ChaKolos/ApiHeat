const Objectif = require('../Models/Objectif'); 

const objectifController = {
  async getAll(req, res) {
    try {
      const objectifs = await Objectif.findAll();
      res.json(objectifs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async getOne(req, res) {
    try {
      const objectif = await Objectif.findByPk(req.params.id);
      if (!objectif) {
        return res.status(404).send('Objectif non trouvé');
      }
      res.json(objectif);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async create(req, res) {
    try {
      const nouvelObjectif = await Objectif.create(req.body);
      res.status(201).json(nouvelObjectif);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Objectif.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedObjectif = await Objectif.findByPk(req.params.id);
        res.status(200).json(updatedObjectif);
      } else {
        res.status(404).send('Objectif non trouvé');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Objectif.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send('Objectif supprimé');
      } else {
        res.status(404).send('Objectif non trouvé');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = objectifController;
