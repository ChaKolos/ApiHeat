const Sommeil = require('../Models/Sommeil'); 

const sommeilController = {
  async getAll(req, res) {
    try {
      const sommeils = await Sommeil.findAll();
      res.json(sommeils);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async getOne(req, res) {
    try {
      const sommeil = await Sommeil.findByPk(req.params.id);
      if (!sommeil) {
        return res.status(404).send('Donnée de sommeil non trouvée');
      }
      res.json(sommeil);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async create(req, res) {
    try {
      const nouveauSommeil = await Sommeil.create(req.body);
      res.status(201).json(nouveauSommeil);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Sommeil.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedSommeil = await Sommeil.findByPk(req.params.id);
        res.status(200).json(updatedSommeil);
      } else {
        res.status(404).send('Donnée de sommeil non trouvée');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Sommeil.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send('Donnée de sommeil supprimée');
      } else {
        res.status(404).send('Donnée de sommeil non trouvée');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = sommeilController;
