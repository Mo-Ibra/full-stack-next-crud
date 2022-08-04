const Joi = require('joi');

const notesSchema = Joi.object({
    id: Joi.number().greater(0),
    name: Joi.string().min(8).max(191).required(),
    description: Joi.string().min(8).max(191).required(),
    isDone: Joi.boolean().required(),
});

module.exports = notesSchema;