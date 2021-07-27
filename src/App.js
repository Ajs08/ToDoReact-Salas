import React, { useEffect, useState } from 'react';
import './App.css';
import TodoLista from './components/TodoLista';
import TodoForm from './components/TodoForm';

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {

  const [todos, setTodos] = useState(localTodos || '');
  const [todoEditar, setTodoEditar] = useState(null);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);

  const AgregarTodo = (todo) => {

    const nuevoTodo = {
      id: Date.now(),
      ...todo,
      completed: false

    }

    const cambiarTodos = [
      nuevoTodo,
      ...todos,
    ]

    setTodos(cambiarTodos);
  }

  const BorrarTodo = (todoId) => {

    if (todoEditar && todoId === todoEditar.id) {
      setTodoEditar(null);
    }

    const cambiarTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(cambiarTodos);
  }

  const todoCompletado = (todoId) => {
    const cambiarTodos = todos.map(todo => (
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
    setTodos(cambiarTodos);
  }

  const todoActualizar = (todoEditar) => {

    const cambiarTodos = todos.map(todo => (
      todo.id === todoEditar.id
        ? todoEditar
        : todo
    ))

    setTodos(cambiarTodos);
  }

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-6 mx-auto">
          <TodoForm
            AgregarTodo={AgregarTodo}
            todoActualizar={todoActualizar}
            setTodoEditar={setTodoEditar}
            todoEditar={todoEditar}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto">
          <TodoLista
            todos={todos}
            BorrarTodo={BorrarTodo}
            todoCompletado={todoCompletado}
            setTodoEditar={setTodoEditar}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
