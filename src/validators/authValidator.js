import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';

export function matchPassword(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, match) => {
      if (match) resolve('Password matched');
      else reject(Boom.badRequest("The password didn't match."));

      if (err) reject(err);
    });
  });
}