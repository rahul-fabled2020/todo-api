import Model from './model';

const TABLE_NAME = 'todos';
const COLUMN_TYPES = {
  id: 'number',
  title: 'string',
  description: 'string',
  user_id: 'number',
  created_at: 'string',
  updated_at: 'string'
};

/**
 * Todo model.
 */
class Todo extends Model {
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

export default Todo;
