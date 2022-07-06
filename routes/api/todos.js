const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/Todos');

// GET /api/todos
router.get('/', todosCtrl.index);

//POST /api/todos/new
router.post('/newTodo', todosCtrl.create);

// DELETE /api/categories/:id
router.delete('/deleteTodos/:id', todosCtrl.deleteTodo);

// GET /api/todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;
