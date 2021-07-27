import React, { useState, useEffect } from 'react';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ AgregarTodo, todoEditar, todoActualizar, setTodoEditar }) => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {

        if (todoEditar) {
            setFormValues(todoEditar);
        } else {
            setFormValues(initialFormValues);
        }

    }, [todoEditar])

    const handleInputChange = (e) => {
        const changeFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changeFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Por favor introduzca un titulo !!');
            return;
        }

        if (description.trim() === '') {
            setError('Por favor introduzca una descripcion a la tarea !!');
            return;
        }

        if (todoEditar) {
            todoActualizar(formValues);
            setSuccess('Tarea actualizada');
        } else {
            AgregarTodo(formValues);
            setSuccess('Tarea agregada con exito');
            setFormValues(initialFormValues);
        }

        setTimeout(() => {
            setSuccess(null);
        }, 2000);

        setError(null);
    }
    return (
        <div>
            <h3 className="text-center">{todoEditar ? 'Actualizar' : 'Agregar tarea'}</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    name="description"
                    placeholder="Descripcion"
                    className="form-control mt-2"
                    value={description}
                    onChange={handleInputChange}>
                </textarea>

                <button
                    className="btn btn-primary btn-block mt-2 me-2">
                    {todoEditar ? 'Actualizar tarea' : 'Agregar tarea'}
                </button>

                {
                    todoEditar &&
                    <button
                        onClick={() => setTodoEditar(null)}
                        className="btn btn-danger mt-2">
                        Volver
                    </button>
                }
            </form>

            {
                error &&
                (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>
                )
            }

            {
                success &&
                (
                    <div className="alert alert-success mt-2">
                        {success}
                    </div>
                )
            }
        </div>
    );
}

export default TodoForm;