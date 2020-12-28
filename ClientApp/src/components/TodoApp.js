/**
 * How To Build a React To-Do App with React Hooks
 * https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
 * https://react-redux.js.org/introduction/basic-tutorial
 * https://redux.js.org/basics/example/
 *
 * TODO:
 *   1. Add react-redux
 *   2. Store data in mongodb
 *   3. Modify style to match digitalocean tutorial
 */
import React, { useState, useEffect } from "react";
import shortid from 'shortid';

import "../styles/TodoApp.css";

function Todo({ todo, index, completeTodo, removeTodo, updateTodo, blurTodo }) {
  return (
      <div
          className="todo-item"
          key={index}
          style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
      >
        {/*
            Allow for checking off items.
            Checked items will contain span with check mark HTML entity, inside a green circle.
            Unchecked items will contain empty span, styled a a transparent circle with border.
        */}
        {/* handler to check/uncheck the item */}
        <div onClick={() => completeTodo(index)}>
          {todo.isCompleted ? (
              <span className="todo-item-checked">✔</span>
          ) : (
              <span className="todo-item-unchecked" />
          )}
        </div>

        <div className="todo-item-input-wrapper">
          {/*
              Make the todo item editable.
              Settings are passed from the todo object via props.
              Add handler methods for onBlur and onChange events.
              Use ChangeEvent method to attach onChange handler to input element.
          */}
          <input
              value={todo.text}
              onBlur={() => blurTodo(index)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTodo(event, todo.id)}
          />
        </div>
        {/* Add element to remove the todo item */}
        <div className="item-remove" onClick={() => removeTodo(index)}>
          ⨯
        </div>
      </div>
  );
}

function TodoForm({ addTodo }) {
  // Create ref for form input
  // We use the useRef hook to store the reference to the input.
  // When the user presses "Enter", we use this reference to reset the input
  // by setting the value to an empty string before we create a new todo item.
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [value, setValue] = useState("")

  // Handle todo input change
  // Update the form state when the use enters something in the input (title/text).
  // We use ChangeEvent to attach onChange handler to the input element.
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with the text from input
    setValue(event.target.value)
  }

  // Handle 'Enter' in todo input
  // Create new todo object and reset the input field.
  // We use shortid to generate unique id for every new todo by calling generate().
  // We use KeyboardEvent because we are listening for the key press event.
  function handleInputEnter(event: React.KeyboardEvent) {
    // Check for 'Enter' key
    if (event.key === 'Enter') {
      // Prepare new todo object
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: value,
        isCompleted: false
      }

      // Create new todo item
      addTodo(value)

      // Reset the input field
      // if (inputRef && inputRef.current) {
      //   inputRef.current.value = ''
      // }
    }
  }

  return (
      <div className="todo-form">
          <input
              // ref={inputRef}
              type="text"
              className="input"
              placeholder='Enter new todo'
              value={value}
              onChange={event => handleInputChange(event)}
              onKeyPress={e => handleInputEnter(e)}
          />
      </div>
  );
}

export function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // Update existing todo item
  function updateTodo(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state (same as handleTodoCreate)
    const newTodos = [...todos];

    // Find correct todo item to update by id and update the text value.
    // New value will come from the value of the input inside the specific todo item.
    newTodos[id].text = event.target.value

    // Update todos state
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Check if todo item has title
  // We watch for a change on the input element inside every todo,
  // so we use ChangeEvent to attach an onChange event handler to the input element.
  // Then, we check that its value is not an empty string (length != 0).
  // If there is an empty string, we add a CSS class.
  // When the user inputs some text, we remove the CSS class.
  function blurTodo(event: React.ChangeEvent<HTMLInputElement>) {
    // if (event.target.value.length === 0) {
    //   event.target.classList.add('todo-input-error')
    // } else {
    //   event.target.classList.remove('todo-input-error')
    // }
  }
  return (
      <div className="todo-list-app">
        <div className="todo-list">
          <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                  <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      updateTodo={updateTodo}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}
                      blurTodo={blurTodo}
                  />
                </li>
            ))}
            <TodoForm addTodo={addTodo} />
          </ul>
        </div>
      </div>
  );
}
