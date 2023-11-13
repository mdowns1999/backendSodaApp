const mongodb = require("../db/connect");
const valid = require("../helper");

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

const getOrderByID = async (req, res) => {
  try {
    const orderIdString = req.params.id;
    const result = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("orders")
      .find({ order_id: +orderIdString });

    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const postNewOrder = async (req, res) => {
  try {
    const order = {
      order_id: req.body.order_id,
      name: req.body.name,
      order_num: req.body.order_num,
      phone: req.body.phone,
      notes: req.body.notes,
      cart: req.body.cart,
    };

    const response = valid.validateOrder(order);
    if (response.error) {
      res.status(422).json(response.error.message);
      return;
    }

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
  getOrderByID,
  postNewOrder,
};

// {"order_id":250 ,
// "name":"TEST",
// "order_num":250,
// "cart":[{"id":"s28","name":"Basic White Girl","amount":1,"price":1.5 ,
// "ingredients":{"baseSoda":"Dr.Pepper",
// "ingredients":["Coffee Creamer","Vanilla","Raspberry"]},"size":8}]}