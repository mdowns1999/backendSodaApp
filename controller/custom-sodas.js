const mongodb = require("../db/connect");

const getCustomSodaIngredients = async (req, res) => {
  try {
    // #swagger.description = 'Get Ingredients for the drinks from the database.'
    const lists = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("custom-sodas")
      .find()
      .toArray();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCustomSodaIngredients,
};
