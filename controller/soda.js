const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllSodas = async (req, res) => {
    try {
    
        const result = await mongodb
          .getDb()
          .db("sodaShop")
          .collection("sodas")
          .find();
    
    
        result.toArray().then((lists) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(lists);
        });
      } catch (err) {
        res.status(400).json(err.message);
      }
    };

    const getSodaByID = async (req, res) => {
      try {
        const sodaIdString = req.params.id;
        const result = await mongodb
          .getDb()
          .db("sodaShop")
          .collection("sodas")
          .find({ _id: ObjectId(sodaIdString)});
    
        result.toArray().then((lists) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(lists);
        });
      } catch (err) {
        res.status(500).json(err.message);
      }
    };


  module.exports ={
    getAllSodas,
    getSodaByID
  }