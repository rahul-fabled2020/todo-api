import Model from './model';

const TABLE_NAME = 'users';
const COLUMN_TYPES = {
  id: 'number',
  firstname: 'string',
  lastname: 'string',
  username: 'string',
  email: 'string',
  password: 'string',
  created_at: 'string',
  updated_at: 'string'
};

/**
 * User model.
 */
class User extends Model {
  constructor() {
    super(TABLE_NAME, COLUMN_TYPES);
  }

  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default User;
