import React from 'react';
import { useTodo } from "../Context/ToDoContext";

function ContentFooter() {

	const {todos,setTodos, filter, setFilter} = useTodo();

	const clearComplated = () => setTodos((prev) => prev.filter((todo) => !todo.complated));

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length}  </strong>  
			item{todos.length >1 && "s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={() => setFilter("all")} className={filter === "all" ? "selected" : ""} >All</a>
			</li>
			<li>
				<a href="#/" onClick={() => setFilter("active")} className={filter === "active" ? "selected" : ""}>Active</a>
			</li>
			<li>
				<a href="#/" onClick={() => setFilter("selected")} className={filter === "completed" ? "selected" : ""}>Completed</a>
			</li>
		</ul>

		<button onClick={ clearComplated} className="clear-completed">
			Clear completed
		</button>
	</footer>
  )
}

export default ContentFooter
