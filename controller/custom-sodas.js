const mongodb = require("../db/connect");

const getCustomSodaIngredients = async (req, res) => {
    try {
    
        const result = await mongodb
          .getDb()
          .db("sodaShop")
          .collection("custom-sodas")
          .find();
    
    
        result.toArray().then((lists) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(lists);
        });
      } catch (err) {
        res.status(400).json(err.message);
      }
    };

    module.exports ={
        getCustomSodaIngredients
      }