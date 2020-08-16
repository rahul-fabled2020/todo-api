import client from '../db';
import * as usersSeed from './01_insert_users';

usersSeed.insertUsers(client);