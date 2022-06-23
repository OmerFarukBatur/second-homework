import React from 'react'
import { useTodo } from '../../../Context/ToDoContext'
import Item from './item';


let filtered = null;

function List() {
    const {todos, filter} = useTodo();

    filtered = todos;

    if (filter !== "all") {
        filtered = todos.filter((todo) => filter === "active" ? todo.complated === false  : todo.complated === true);
    }

  return (
    <ul className="todo-list">
        {filtered.map(todo =>(
            <Item key={todo.id} todo={todo} />
        ))}
		</ul>
  )
}

export default List
