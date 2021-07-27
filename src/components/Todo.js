import React from 'react';

const Todo = ({ todo, BorrarTodo, todoCompletado, setTodoEditar }) => {
    return (
        <div className="card border-dark mb-3 mt-2">
            <div className="card-body">
                <h4 className="card-header" style={{ backgroundColor: 'white' }}>
                    {todo.title}
                </h4>
                <p className="card-text text-start mt-3 ms-3">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        onClick={() => todoCompletado(todo.id)}
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} me-2`}
                    >
                        {todo.completed ? 'Completado' : 'Completar'}
                    </button>
                    <button
                        onClick={() => setTodoEditar(todo)}
                        className="btn btn-sm btn-primary me-2">
                        Editar
                    </button>
                    <button
                        onClick={() => BorrarTodo(todo.id)}
                        className="btn btn-sm btn-danger"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;