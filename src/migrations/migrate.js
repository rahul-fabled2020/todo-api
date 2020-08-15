import client from '../db';
import * as users from './create_users_table';

users.up(client);
