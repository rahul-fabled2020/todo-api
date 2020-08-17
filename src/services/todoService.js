import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import Todo from '../models/todo';

const todo = new Todo();

/**
 * Get all todos.
 *
 * @returns {Promise}
 */
export function getAllTodos() {
  return todo.all().then((res) => formatTodos(res.rows));
}

/**
 * Get a todo.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getTodo(id) {
  return todo.find(id).then((todo) => {
    if (todo.rows.length === 0) throw Boom.notFound("The todo doesn't exist.");

    return formatTodos(todo.rows)[0];
  });
}

export function getTodoBy(filterData) {
  return todo.filterBy(filterData).then((res) => {
    return formatTodos(res.rows);
  });
}

/**
 * Create new todo.
 *
 * @param   {Object}  todo
 * @returns {Promise}
 */
export function createTodo(todoData) {
  const { title } = todoData;

  return todo
    .create(todoData)
    .then((res) => todo.filterBy({ title }))
    .then((res) => formatTodos(res.rows)[0])
    .catch((err) => err);
}

/**
 * Update a todo.
 *
 * @param   {Number|String}  id
 * @param   {Object}         todo
 * @returns {Promise}
 */
export function updateTodo(id, todoData) {
  const { title } = todoData;

  return todo
    .update(id, todoData)
    .then((res) => todo.filterBy({ title }))
    .then((res) => formatTodos(res.rows)[0])
    .catch((err) => err);
}

/**
 * Delete a todo.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteTodo(id) {
  return todo.destroy(id);
}

function formatTodos(todos) {
  return todos.map((todo) => {
    const isCompleted = todo.iscompleted ==="true" ? true : false;
    delete todo.iscompleted;

    return {
      ...todo,
      isCompleted
    };
  });
}
