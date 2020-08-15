import HttpStatus from 'http-status-codes';

import User from '../models/user';

const user = new User();

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  user
    .all()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  user
    .find(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  user
    .create(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  user
    .update(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteUser(req, res, next) {
  user
    .delete(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
}
