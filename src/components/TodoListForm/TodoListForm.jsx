import * as todoAPI from "../../utilities/todos-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function TodoListForm() {
  const [allTodos, setAllTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState([]);
  const [formData, setFormData] = useState({
    // add in all the other fields
    title: "",
    date: "",
    // time: "",
    urgency: "",
    description: "",
  });

  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getTodos() {
      const todos = await todoAPI.getAll();
      setAllTodos(todos);
      //   console.log(allTodos);
    }
    getTodos();
  }, []);

  //*** fucntion = creating new category ***//
  async function deleteTodo(evt) {
    console.log(evt.target.value);
    //sending new data to backend
    // get data again from the backend
    // const todos = await todoAPI.getAll();
    // setAllTodos(todos);
    const todos = allTodos.filter((todo) => todo._id !== evt.target.value);
    console.log(todos);
    setAllTodos(todos);
    const addTodo = await todoAPI.deleteTodo(evt.target.value);
  }

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    //sending new data to backend
    const addTodos = await todoAPI.newTodo(formData);
    // get data again from the backend
    const todos = await todoAPI.getAll();
    return setAllTodos(todos);
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
    // setNewTodo(evt.target.value);
  }

  return (
    <>
      <div className="flex flex-col form max-w-xs mx-auto bg-orange-400">
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2">
          {/* // don't think I actually want all todos to show on the form */}
          {/* <div>
            {allTodos.map((todo, idx) => (
              <>
                <li key={idx} onClick={() => setActiveTodo(todo)}>
                  <Link to={`/todos/${todo.title}`}>{todo.title}</Link>

                  <button
                    type="submit"
                    value={todo._id}
                    // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                    onClick={deleteTodo}
                  >
                    delete
                  </button>
                </li>
              </>
            ))}
            //  {todos}
          </div> */}

          <h3>Create a new to-do</h3>
        </div>
        <form action="" onChange={handleChange}>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="write here..."
          />
          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            placeholder="write here..."
          />
          <p>&nbsp;</p>

          {/* // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM */}
          {/* <label >Category</label>
                    <select name="Category">
                    <option value="A">a</option>
                    <option value="B">b</option>
                    <option value="C">c</option>
                    </select> */}

          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Urgency
          </label>
          <select name="urgency" value={formData.urgency}>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>

          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="write here..."
          />
          <p>&nbsp;</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400"
          >
            Create new to-do
          </button>
        </form>
      </div>
    </>
  );
}
