//to edit and delete category schema, it seems like we need to build api,routes,controller files for the categories. - Sam
import { getToken } from './users-service'


const BASE_URL = '/api/todos';

// get all todos
export function getAll() {

  return sendRequest(BASE_URL);
}

// delete a todo
export function deleteTodo(id) {
    console.log("step 2")

    return sendRequest(`${BASE_URL}/deleteTodo/${id}`, 'DELETE');
  }

// get a todo by id 
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

// Add an todo to the todo list
export function addTodo(todoData) {
    // Just send itemId for best security
    return sendRequest(`${BASE_URL}/addTodo`, 'POST', todoData);
  }

  // create a new todo
    export function newTodo(todoData) {
        // Just send itemId for best security (no pricing)
        // console.log(catData)
        return sendRequest(`${BASE_URL}/newTodo`, 'POST', todoData);
        
      }

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method }
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const res = await fetch(url, options)
    // res.ok will be false if the status code set to 4xx in the controller action
    console.log(options)
    if (res.ok) return res.json()
    console.log(res.json)
    throw new Error('Bad Request')
  }