import React from 'react'
import './Todo.css'

export const Todo = () => {
    return (
        <>
            <h1 className='text-center'>React Todo App</h1>
            <div className='todo-container'>
                <div className='input-Container'>
                    <input type="text" placeholder='Enter your todos here....' className='input-field' />
                    <button type='submit' className='submit-btn'>ADD +</button>
                </div>

                <div className="list-container">
                    <ul>
                        <li>
                            <div className="checkbox-field">
                                <input type="checkbox" />
                                <span>First todo</span>
                            </div>
                            <div className="delete-btn">
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="clear-btn">
                    <button className='clear-all-btn'>Clear All</button>
                </div>
            </div>


        </>
    )
}
