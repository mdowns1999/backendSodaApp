const Joi = require("joi");

function validateOrder(order) {
  const JoiSchema = Joi.object({
    order_id: Joi.number().min(1).max(3).required(),

    name: Joi.string().min(1).max(50).required(),

    order_num: Joi.number().min(1).max(6).required(),

    cart: Joi.array().items({
        id: Joi.string().min(1).max(3).required(),
        name: Joi.string().required(),
        amount: Joi.number().required(),
        price: Joi.number().required(),
        size: Joi.string().required()
    })

  }).options({ abortEarly: false });

  return JoiSchema.validate(order);
}

module.exports = {
  validateOrder,
};
