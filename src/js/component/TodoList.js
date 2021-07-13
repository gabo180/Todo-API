import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TodoList = () => {
	const [todos, setTodos] = useState([
		"Do Homework",
		"Do Laundry",
		"Catch on my Videos"
	]);

	let makeList = todos.map((item, i) => {
		return (
			<li key={i}>
				{item} <button onClick={() => removeTodo(i)}>X</button>
			</li>
		);
	});

	const removeTodo = index => {
		const newArray = todos.filter((item, i) => i != index);

		// const newArray = todos.filter((item, i) => {
		// 	if (i != index) {
		// 		return item;
		// 	}
		// });
		setTodos(newArray);
	};

	const newTodo = onKeyDownEvent => {
		if (onKeyDownEvent.keyCode === 13) {
			let userInput = onKeyDownEvent.target.value;
			const newTodoList = [...todos, userInput];
			setTodos(newTodoList);

			onKeyDownEvent.target.value = "";
		}
	};

	return (
		<div>
			<input
				onKeyDown={newTodo}
				placeholder="Enter Todo"
				type="text"
				id="fname"
				name="fname"
			/>
			<ul>{makeList}</ul>
		</div>
	);
};

export default TodoList;

TodoList.PropTypes = {};
