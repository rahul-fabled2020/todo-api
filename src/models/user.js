import Model from './model';

const TABLE_NAME = 'users';

/**
 * User model.
 */
class User extends Model {
  constructor() {
    super(TABLE_NAME);
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
