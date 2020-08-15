import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import User from '../models/user';

const user = new User();

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return user.all().then((res) => res.rows);
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {
  return user.find(id).then((user) => {
    if (user.rows.length === 0) throw Boom.notFound("The user doesn't exist.");
    return user.rows[0];
  });
}

export function filterUserBy({ username, email }) {
  return user.filterBy({ username, email }, 'OR').then((res) => {
    if (res.rows.length > 0) throw Boom.badRequest('The email or username is already resgisterd.');

    return res;
  });
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createUser(userData) {
  const { username, password } = userData;

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10).then((hash) => {
  
      user
        .create({ ...userData, password: hash })
        .then((res) => user.filterBy({ username }))
        .then((res) => resolve(res.rows[0]))
        .catch((err) => reject(err));
    });
  });

  return;
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         user
 * @returns {Promise}
 */
export function updateUser(id, userData) {
  const { username } = userData;

  return user
    .update(id, userData)
    .then((res) => user.filterBy({ username }))
    .then((res) => res.rows[0]);
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return user.destroy(id);
}
