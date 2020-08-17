/**
 * Create todos table.
 *
 * @param   {object} client
 */
export function up(client) {
  const query = `
  CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title VARCHAR ( 200 ) NOT NULL,
      description VARCHAR ( 1000 ) NOT NULL,
      isCompleted VARCHAR (10),
      user_id INT NOT NULL,

      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (user_id)
        REFERENCES users (id)
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
 * Drop todos table.
 *
 * @param   {object} client
 */
export function down(client) {
  const query = `
    DROP TABLE IF EXISTS todos`;

  client
    .query(query)
    .then((res) => {
      console.log('Table is successfully deleted');
    })
    .catch((err) => {
      console.error(err);
    });
}
