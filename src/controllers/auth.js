import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService';
import { matchPassword } from '../validators/authValidator';

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function register(req, res, next) {
  userService
  .createUser(req.body)
  .then(data => res.status(HttpStatus.CREATED).json({ data }))
  .catch(err => next(err));
}

export function login(req, res, next) {
  const { username, password } = req.body;
  //validate()
  userService
    .getUserBy({ username })
    .then((data) => {
      const user = data[0];

      matchPassword(password, user.password)
        .then((msg) => {
          
          createToken(user)
            .then((token) => {
              
              res.json({data:{user, token}});
            })
            .catch((err) => next(err));
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => next(err));
}

function createToken(data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, process.env.JWT_SECRET, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
}
