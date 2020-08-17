import client from '../db';
import * as users from './create_users_table';
import * as todos from './create_todos_table';

// users.down(client);
// users.up(client);

todos.down(client);
// todos.up(client);
