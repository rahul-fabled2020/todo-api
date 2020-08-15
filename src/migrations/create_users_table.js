/**
 * Create users table.
 *
 * @param   {object} client
 */
export function up(client) {
  const query = `
  CREATE TABLE IF NOT EXISTS users (
      id serial primary key,
      username VARCHAR ( 50 ) UNIQUE NOT NULL,
	    password VARCHAR ( 50 ) NOT NULL,
	    email VARCHAR ( 255 ) UNIQUE NOT NULL,
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
    })
    .finally(() => {
      client.end();
    });
}

/**
 * Drop users table.
 *
 * @param   {object} client
 */
export function down(client) {
  const query = `
    DROP TABLE users`;

  client
    .query(query)
    .then((res) => {
      console.log('Table is successfully deleted');
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      client.end();
    });
}
