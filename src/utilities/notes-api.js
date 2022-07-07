// // to edit and delete category schema, it seems like we need to build api,routes,controller files for the categories. - Sam
import { getToken } from "./users-service";

const BASE_URL = "/api/notes";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/deleteNote/${id}`, "DELETE");
}

// Add an cat to the cat list
export function newNote(noteData) {
  // Just send itemId for best security (no pricing)
  // console.log(catData)
  return sendRequest(`${BASE_URL}/newNote`, "POST", noteData);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  console.log("sedning request");
  if (res.ok) return res.json();
  console.log(res.json);
  throw new Error("Not so good. Come on man, you're better than this.");
}
