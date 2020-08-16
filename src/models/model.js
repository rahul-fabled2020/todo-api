import client from '../db';

class Model {
  constructor(table, columnTypes) {
    this.table = table;
    this.columnTypes = columnTypes;
  }

  all = () => {
    const sql = `SELECT * FROM ${this.table}`;

    return this.queryDatabase(sql);
  };

  find = (id) => {
    const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`;

    return this.queryDatabase(sql);
  };

  create = (valueObject) => {
    const columns = Object.keys(valueObject);
    const values = formatNonNumericValues(columns, Object.values(valueObject), this.columnTypes);

    const sql = `INSERT INTO ${this.table} (${columns.join(',')}) VALUES (${values.join(',')})`;

    return this.queryDatabase(sql);
  };

  update = (id, valueObject) => {
    const columns = Object.keys(valueObject);
    const values = formatNonNumericValues(columns, Object.values(valueObject), this.columnTypes);

    const sql = `UPDATE ${this.table} SET ${formKeyValue(
      columns,
      values
    )}, updated_at = CURRENT_TIMESTAMP WHERE id = ${id}`;

    return this.queryDatabase(sql);
  };

  destroy = (id) => {
    const sql = `DELETE FROM ${this.table} WHERE id = ${id}`;

    return this.queryDatabase(sql);
  };

  filterBy(filterData, logicalOperator = 'AND') {
    const columns = Object.keys(filterData);
    const values = formatNonNumericValues(columns, Object.values(filterData), this.columnTypes);

    const sql = `SELECT * FROM ${this.table} WHERE ${formKeyValue(columns, values, logicalOperator + ' ')}`;

    return this.queryDatabase(sql);
  }

  queryDatabase = (sql) => {
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
          // client.end();
        });
    });
  };
}

function formatNonNumericValues(columns, values, columnTypes) {
  columns.forEach((column, index) => {
    if (columnTypes[column] === 'string') values[index] = `'${values[index]}'`;
  });
  return values;
}

function formKeyValue(columns, values, separator = ', ') {
  let output = '';
  columns.forEach((column, index) => {
    output += `${column} = ${values[index]}`;
    if (index < columns.length - 1) {
      output += separator;
    }
  });

  return output;
}

export default Model;
