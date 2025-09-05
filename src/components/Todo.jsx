import React, { useEffect, useState } from 'react'
import './Todo.css'

export const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleToggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    const clearAll = () => {
        setTodos([]);
    }

    // localstorage implementation
    // const storageTodos = JSON.parse(localStorage.getItem())

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }, 100);
    }, [todos]);

    return (
        <>
            <h1 className='text-center'>React Todo App</h1>
            <div className='todo-container'>
                <div className='input-Container'>
                    <input type="text" placeholder='Enter your todos here....' className='input-field' value={inputValue} onChange={handleInputChange} />
                    <button type='submit' className='submit-btn' onClick={handleAddTodo}>ADD +</button>
                </div>

                <div className="list-container">
                    {todos.length === 0 ? (
                        <h2>Right now you don't have any todos...</h2>
                    ) :
                        (
                            <ul>
                                {todos.map((todo, index) => (
                                    <li key={index}>
                                        <div className="checkbox-field">
                                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(index)} />
                                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                                {todo.text}
                                            </span>
                                        </div>
                                        <div className="delete-btn">
                                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        )}
                </div>

                <div className="clear-btn">
                    <button className='clear-all-btn' onClick={() => { clearAll() }}>CLEAR ALL</button>
                </div>
            </div >
        </>
    )
}
