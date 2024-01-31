const Nutrition = require('../Models/Nutrition'); 

const nutritionController = {

    async getAll(req, res) {
    try {
      const nutritions = await Nutrition.findAll();
      res.json(nutritions);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async getOne(req, res) {
    try {
      const nutrition = await Nutrition.findByPk(req.params.id);
      if (!nutrition) {
        return res.status(404).send('Donnée nutritionnelle non trouvée');
      }
      res.json(nutrition);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async create(req, res) {
    try {
      const nouvelleNutrition = await Nutrition.create(req.body);
      res.status(201).json(nouvelleNutrition);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Nutrition.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedNutrition = await Nutrition.findByPk(req.params.id);
        res.status(200).json(updatedNutrition);
      } else {
        res.status(404).send('Donnée nutritionnelle non trouvée');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Nutrition.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send('Donnée nutritionnelle supprimée');
      } else {
        res.status(404).send('Donnée nutritionnelle non trouvée');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = nutritionController;
