import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as todoService from '../services/todoService';

// Validation schema
const schema = Joi.object({
  title: Joi.string().max(200).required(),
  description: Joi.string().max(1000).required(),
  iscompleted: Joi.string().max(10)
});

/**
 * Validate create/update todo request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function todoValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate todos existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findTodo(req, res, next) {
  return todoService
    .getTodo(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findTodo, todoValidator };
