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
        try {
          const order = {
            order_id: req.body.order_id,
            name: "Mike Downs",
            order_num: req.body.order_num,
            cart: req.body.cart
          };
      

          const result = await mongodb
            .getDb()
            .db("sodaShop")
            .collection("orders")
            .insertOne(order);
      
          if (result.acknowledged) {
            res.status(202).json(result);
            console.log("The order was successfully inserted!");
          }
        } catch (err) {
          res.status(500).json(err.message);
        }
      };

module.exports = {
    getAllOrders,
    postNewOrder
}