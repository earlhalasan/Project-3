import { useParams } from "react-router-dom"; //you can import more than one thing at a time
import * as todoAPI from "../../utilities/todos-api";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import * as katyTodo from "../../components/TodoList/TodoList";
import TodoList from "../TodoList/TodoList";

export default function TodoListItem({ allTodos, setAllTodos, setUpdated, activeCat }) {
  // todo here is the state that we - this is the state
  const [todo, setTodo] = useState([]);
  const [click, setClick] = useState(false);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    urgency: "",
  });
  // const [activeTodo, setActiveTodo] = useState([]);
  // const [formData, setFormData] = useState({
  //   // add in all the other fields
  //   title: "",
  //   date: "",
  //   time: "",
  //   description: "",
  //   urgency: "",
  // });

  // let { todoName } = useParams();
  // // construct data
  //  const data = katyTodo.getTodos()
  //  console.log(data)

  let { id } = useParams();

  useEffect(function () {
    async function getSingleTodos() {
      // let foundTodo = allTodos.filter((todo) => todo._id === id)
      // console.log(foundTodo)
      const foundTodo = await todoAPI.getById(id);
      setTodo(foundTodo);
    }
    getSingleTodos(id);
    // important to have the brackets below, otherwise infinate loop
  }, []);


  ////////////////
  // CHANGE DATE
  ////////////////

  let date = new Date(todo.date)
  const dateRecord = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  // function clickedTodo(todo) {
  //   let selectedTodo = 0;
  //   // movies goes back to the movie seed data from movie homeowrk. What would we need to call here? that is the param that gets passed down
  //   for (let i = 0; i < props.allTodos.length; i++) {
  //     //need to confirm that the movie we are passing through matches with the correct movie data. like matching id's
  //     if (props.allTodos[i].title === todo) {
  //       selectedTodo = i;
  //     }
  //   }
  //   console.log(selectedTodo);
  //   return selectedTodo;
  // }

  // const chosenTodo = clickedTodo(todoName);

  // //*** function = creating new category ***//
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   //sending new data to backend
  //   const addTodos = await todoAPI.newTodo(formData);
  //   // get data again from the backend
  //   const todos = await todoAPI.getAll();
  //   return setAllTodos(todos);
  // }

  // //*** function = form data ***//
  // function handleChange(evt) {
  //   const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
  //   setFormData(updatedTodo);
  //   console.log(formData);
  //   // setNewTodo(evt.target.value);
  // }

  function handleChange(evt) {
    const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
  }


  //*** function = Edit data ***//
  function handleEditing(evt) {
    console.log("edit mode activated");
    setEdit(!edit);
  }

  let viewMode = {}
  let editMode = {}

  if (edit) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (

    <div className="flex-col px-10 flex mt-24">
      <TodoList
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        setUpdated={setUpdated}
        activeCat={activeCat}
       
      />

      <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] ">
        <h5>TodoListItem</h5>
        <div
          className="border-black border-[1px] rounded-md py-4 px-4 font-light"
          id="hardshadow"
        >
          {/* title */}
          <h5 style={viewMode}>{todo.title}</h5>
          <input
            type="text"
            className='textInput'
            style={editMode}
            placeholder={todo.title}
            onChange={handleChange}
          />

          {/* Date */}
          <p style={viewMode}>{dateRecord}</p>

          {/* Description */}
          <p style={viewMode}>{todo.description}</p>
          <input
            type="text"
            className='textInput'
            style={editMode}
            placeholder={todo.description}
            onChange={handleChange}
          />

          {/* Urgency */}
          <p style={viewMode}>{todo.urgency}</p>
          <input
            type="text"
            className='textInput'
            style={editMode}
            placeholder={todo.urgency}
            onChange={handleChange}
          />

          {/* Category */}
          {/* <p style={viewMode}>{todo.category}</p>
          <input
            type="text"
            className='textInput'
            style={editMode}
            placeholder={todo.category}
            onChange={handleChange}
          /> */}

          <button
            className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2"
            onClick={handleEditing}
          >
            Edit
          </button>

        </div>

        {/* /* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]"> */}
      </div>

    </div>
  );
}
