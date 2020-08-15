import client from '../db';

class Model {
  constructor(table) {
    this.table = table;
  }

  all = () => {
    const sql = `SELECT * FROM ${this.table}`;

    return queryDatabase(sql);
  };

  find = (id) => {
    const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`;

    return queryDatabase(sql);
  };

  create = (valueObject) => {
    const columns = Object.keys(valueObject);
    console.log(columns);
    const values = Object.values(valueObject);

    const sql = `INSERT INTO ${this.table} (${columns.join(',')}) VALUES (${values.join(',')})`;

    return queryDatabase(sql);
  };

  update = (id, valueObject) => {
    const columns = Object.keys(valueObject);
    const values = Object.values(valueObject);

    const sql = `UPDATE ${this.table} SET ${formKeyValue(columns, values)} WHERE id = ${id}`;

    return queryDatabase(sql);
  };

  destroy = (id) => {
    const sql = `DELETE FROM ${this.table} WHERE id = ${id}`;

    return queryDatabase(sql);
  };
}

function formKeyValue(columns, values) {
  let output = '';
  columns.forEach((column, index) => {
    output += `${column} = ${values[index]}`;
    if (index < columns.length - 1) {
      output += ', ';
    }
  });

  return output;
}

function queryDatabase(sql) {
  return new Promise((resolve, reject) => {
    client
      .query(sql)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        client.end();
      });
  });
}

export default Model;
