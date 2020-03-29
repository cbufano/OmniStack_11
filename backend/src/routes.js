const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

routes.get('/ongs', OngController.index);
//Validar 
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().min(1),
    // Não funciona 
    //whatsapp: Joi.string().min(10).max(15),

    city: Joi.string().required(),
    uf: Joi.string().length(2),

  })
}), OngController.create);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), celebrate({

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().min(1),
    ativo: Joi.boolean().required(),
  }),
}), IncidentController.create);




routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().min(1),
  })
}), IncidentController.delete);




routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
}), ProfileController.index);


routes.post('/sessions', SessionController.create);

module.exports = routes;

