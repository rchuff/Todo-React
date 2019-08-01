/*All of the API calls for the application live here */

const API_URL = '/api/todo';

//Initially loads all of the todos on our page
export async function getTodos(){
  return fetch(API_URL)
  .then(response => response.json())
}

//Adds the todo when the user enters it into the todo form
export async function addTodo(data){
  let req = {todo: data};
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

//Deletes the todo from the list
export async function deleteTodo(id){
  return fetch(API_URL, {
    method: 'DELETE',
    body: JSON.stringify({_id: id}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

//Updates the todo on the list
export async function updateTodo(todo){
  return fetch(API_URL, {
    method: 'PATCH',
    body: JSON.stringify({_id: todo._id, complete: !todo.complete}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}
