const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllOrders = async (req, res) => {
    try {
    
        const result = await mongodb
          .getDb()
          .db("sodaShop")
          .collection("orders")
          .find();
    
    
        result.toArray().then((lists) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(lists);
        });
      } catch (err) {
        res.status(400).json(err.message);
      }
    };

    const postNewOrder= async (req, res) => {
        // try {
        //   const movie = {
        //     movie_id: req.body.movie_id,
        //     title: req.body.title,
        //     rating: req.body.rating,
        //     plot: req.body.plot,
        //     length: req.body.length,
        //   };
      

        //   const result = await mongodb
        //     .getDb()
        //     .db("movies")
        //     .collection("movie")
        //     .insertOne(movie);
      
        //   if (result.acknowledged) {
        //     res.status(202).json(result);
        //     console.log("The contact was successfully inserted!");
        //   }
        // } catch (err) {
        //   res.status(500).json(err.message);
        // }
      };

module.exports = {
    getAllOrders,
    postNewOrder
}