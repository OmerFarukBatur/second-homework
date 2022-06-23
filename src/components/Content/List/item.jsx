import React from 'react';
import { useTodo } from "../../../Context/ToDoContext";

function Item({todo}) {
	const {destroyTodo,toggleTodo} = useTodo();

	const onChange = (id) => toggleTodo(id);

	const onDestroy = (id) =>destroyTodo(id);

  return (
    <li key={todo.id} className={todo.complated ? "completed" : ""}>
				<div className="view">
					<input className="toggle" type="checkbox" checked={todo.complated} onChange={ () => onChange(todo.id)}/>
					<label>{todo.text}</label>
					<button className="destroy" onClick={ () => onDestroy(todo.id)}></button>
				</div>
			</li>
  )
}

export default Item
