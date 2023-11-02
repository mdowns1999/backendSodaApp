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
      id: req.body.id,
      name: req.body.name,
      rating: req.body.rating,
      message: req.body.message
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
