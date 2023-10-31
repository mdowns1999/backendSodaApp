const mongodb = require("../db/connect");
const valid = require("../helper");

const getAllReviews = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("reviews")
      .find();

    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const postNewReview = async (req, res) => {
  try {
    const review = {
      order_id: req.body.order_id,
      name: "Mike Downs",
      order_num: req.body.order_num,
      cart: req.body.cart,
    };

    // const response = valid.validateOrder(order);
    // if(response.error){
    //   res.status(422).json(response.error.message);
    //   return;
    // }

    const result = await mongodb
      .getDb()
      .db("sodaShop")
      .collection("reviews")
      .insertOne(review);

    if (result.acknowledged) {
      res.status(202).json(result);
      console.log("The review was successfully inserted!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getAllReviews,
  postNewReview,
};
