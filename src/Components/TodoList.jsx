import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { toast } from 'react-toastify';


function TodoList() {
  const [
     todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todos.some(existingTodo => existingTodo.text === todo.text)) {
      toast.warning('The todo already exists');
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;