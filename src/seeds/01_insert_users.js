export function insertUsers(client) {
  const query = `
    INSERT INTO users (firstname, lastname, username, password, email, role) VALUES (
      'Rahul', 'Sharma', 'rahul.fabled', 'rahul123', 'rahul.fabled@gmail.com', 'admin'
    )
  `;
  
  client
    .query(query)
    .then((res) => {
      console.log('Users seeded successfully');
    })
    .catch((err) => {
      console.error(err);
    });
}
