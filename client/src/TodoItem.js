import React from 'react';

//If item completed then a slash through of the todo item text.
//Clicking the X deletes item and clicking item updates status.
const TodoItem = ({todo, complete, onDelete, onToggle}) => (
  <li>
    <span
      style = {{textDecoration: complete ? 'line-through' : 'none'}}
      onClick={onToggle}
      >
    {todo}
    </span>
    <span
      onClick={onDelete}
      className = "selector"
      > X </span>
  </li>
)


export default TodoItem
