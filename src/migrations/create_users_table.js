/**
 * Create users table.
 *
 * @param   {object} client
 */
export function up(client) {
  const query = `
  CREATE TABLE IF NOT EXISTS users (
      id serial primary key,
      firstname VARCHAR ( 50 ) NOT NULL,
      lastname VARCHAR ( 50 ) NOT NULL,
      username VARCHAR ( 50 ) UNIQUE NOT NULL,
	    password VARCHAR ( 100 ) NOT NULL,
      email VARCHAR ( 255 ) UNIQUE NOT NULL,
      role VARCHAR ( 20 ) DEFAULT 'user',
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
  );
  `;

  client
    .query(query)
    .then((res) => {
      console.log('Table is successfully created');
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Drop users table.
 *
 * @param   {object} client
 */
export function down(client) {
  const query = `
    DROP TABLE IF EXISTS users`;

  client
    .query(query)
    .then((res) => {
      console.log('Table is successfully deleted');
    })
    .catch((err) => {
      console.error(err);
    });
}
