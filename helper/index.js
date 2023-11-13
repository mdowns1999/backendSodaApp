const Joi = require("joi");

function validateOrder(order) {
  const JoiSchema = Joi.object({
    order_id: Joi.number().min(1).max(1000).required(),

    name: Joi.string().min(1).max(50).required(),

    order_num: Joi.number().min(1).max(1000).required(),

    cart: Joi.array().items({
      id: Joi.string().min(1).max(3).required(),
      name: Joi.string().required(),
      amount: Joi.number().required(),
      price: Joi.number().required(),
      ingredients: { baseSoda: Joi.string(), ingredients: Joi.array() },
      size: Joi.number().required(),
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(order);
}

function validateReview(review) {
  const JoiSchema = Joi.object({
    id: Joi.number().min(1).max(1000).required(),

    name: Joi.string().min(1).max(50).required(),

    rating: Joi.number().min(1).max(5).required(),
    message: Joi.string(),
    date: Joi.string().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(review);
}

module.exports = {
  validateOrder,
  validateReview,
};
