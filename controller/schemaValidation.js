const Joi = require('joi');

const validations = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    owner: Joi.string().min(3).max(10).required(),
    dob: Joi.date().raw().required(),
    color: Joi.string().default("NA")
});


module.exports = {validations};