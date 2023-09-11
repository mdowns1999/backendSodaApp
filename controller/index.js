const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllSodas = async (req, res) => {
    try {
    
        const result = await mongodb
          .getDb()
          .db("sodaDB")
          .collection("sodas")
          .find();
    
          console.log("MADE IT ")
    
        result.toArray().then((lists) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(lists);
        });
      } catch (err) {
        res.status(400).json(err.message);
      }
    };

  module.exports ={
    getAllSodas
  }