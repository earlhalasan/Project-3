//to edit and delete category schema, it seems like we need to build api,routes,controller files for the categories. - Sam
import { getToken } from './users-service'


const BASE_URL = '/api/categories';

export function getAll() {

  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

// Add an cat to the cat list
export function addCat() {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/addCat`, 'POST');
  }

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method }
 
    const res = await fetch(url, options)
    // res.ok will be false if the status code set to 4xx in the controller action
    console.log('cat-api')
    if (res.ok) return res.json()
    console.log(res.json)
    throw new Error('Bad Request')
}