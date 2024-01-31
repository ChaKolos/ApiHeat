const JournalNutritionnel = require('../Models/Journal'); 
const journalNutritionnelController = {
  async getAll(req, res) {
    try {
      const journaux = await JournalNutritionnel.findAll();
      res.json(journaux);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async getOne(req, res) {
    try {
      const journal = await JournalNutritionnel.findByPk(req.params.id);
      if (!journal) {
        return res.status(404).send('Journal nutritionnel non trouvé');
      }
      res.json(journal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async create(req, res) {
    try {
      const nouveauJournal = await JournalNutritionnel.create(req.body);
      res.status(201).json(nouveauJournal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const [updated] = await JournalNutritionnel.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedJournal = await JournalNutritionnel.findByPk(req.params.id);
        res.status(200).json(updatedJournal);
      } else {
        res.status(404).send('Journal nutritionnel non trouvé');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      const deleted = await JournalNutritionnel.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send('Journal nutritionnel supprimé');
      } else {
        res.status(404).send('Journal nutritionnel non trouvé');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = journalNutritionnelController;
