const mongodb = require("../db/connect");

const getAllSodas = async (req, res) => {
  try {
    // #swagger.description = 'Get all Soda Drinks from the database.'
    const lists = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("sodas")
      .find()
      .toArray();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSodaByID = async (req, res) => {
  try {
    // #swagger.description = 'Get One Soda Drink from the database.'
    const sodaIdString = req.params.id;
    const lists = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("sodas")
      .find({ id: sodaIdString })
      .toArray();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSodas,
  getSodaByID,
};
