const Todo = require('../../models/todo');

module.exports = {
  index,
  create,
  findAllTodos,
  deleteTodo,
  show
};

// Sorting all the todos by catetory. Might want to change this later -K
async function index(req, res) {
  try {
  const todos = await Todo.find({})
  // .populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  // todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(todos);
  } catch {
    res.status(400).json('Bad Serverside')
  }
}


// create new todos
async function create(req, res) {
  try {
  const newTodo = await Todo.create(req.body);
  const todoList = await Todo.find({});
  todoList.push(newTodo).then((todoList) => {console.log(todoList)})
  await todoList.save();
  res.json(todoList);
  } catch (e) {
    res.status(400).json(e)
  }
}

// async function create(req, res) {
//   try {
//     const user = await User.create(req.body);
//     // token will be a string
//     const token = createJWT(user);
//     // send back the token as a string
//     // which we need to account for 
//     // in the client
//     res.json(token);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// }

// async function create(req, res) {
//   try {
//     const user = await User.create(req.body);


// need to find all todos for a specific user
async function findAllTodos(userId) {
  return await this.find({ user: userId });
}

// to delete a todo
async function deleteTodo (req, res) {
  // console.log(req.body)
  console.log("step 3 delete")

  try {
    console.log(req.params.id)
    const one = await Todo.findByIdAndDelete(req.params.id)
    const todoList = await Todo.find({})
    await todoList.save()
    res.json(todoList)
  } catch (e) {
    res.status(400).json(e);
  }
}


async function show(req, res) {
  const todoList = await Todo.findById(req.params.id);
  res.json(todoList);
}