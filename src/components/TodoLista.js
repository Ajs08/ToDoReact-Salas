import React from 'react';
import Todo from './Todo';

const TodoLista = ({ todos, BorrarTodo, todoCompletado, setTodoEditar }) => {

    return (
        <div>
            {
                todos.length === 0
                ? (
                    <div className="alert alert-danger">
                        Lista vacia, agregue tareas para empezar a llenar {":)"}
                    </div>
                )
                : (
                    todos.map(todo => (
                        <Todo 
                            todo={todo}
                            key={todo.id} 
                            BorrarTodo={BorrarTodo}
                            todoCompletado={todoCompletado}
                            setTodoEditar={setTodoEditar}
                        />
                    ))
                )
            }
        </div>
    );
}

export default TodoLista;