import bcrypt from 'bcrypt';

export function insertUsers(client) {
  const rounds = 10;

  const hash = bcrypt.hashSync('rahul123', rounds);

  const query = `
    INSERT INTO users (firstname, lastname, username, password, email, role) VALUES (
      'Rahul', 'Sharma', 'rahul.fabled', '${hash}', 'rahul.fabled@gmail.com', 'admin'
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
