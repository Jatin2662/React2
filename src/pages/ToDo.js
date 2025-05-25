


import react, { useState, useEffect } from "react";
import '../styles/ToDo.css';
import { LuListTodo } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import ToDoForm from "./ToDoForm";
import { useNavigate } from "react-router-dom";


function ToDo({ todoList, setTodoList }) {

    const navigate = useNavigate();

    const [todoValue, setTodoValue] = useState('all');

    // const [todoList, setTodoList] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const handleSave = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const filteredTodos = todoList.filter(todo => {
        if (todoValue === 'completed') return todo.status === 'Completed';
        if (todoValue === 'pending') return todo.status === 'Pending';
        return true;
    });

    return (
        <main className="todo-app">
            <div className="todo-nav">
                <div className="todo-logo">
                    <span><LuListTodo /></span>
                    <span>TODO</span>
                </div>
                <ul className="todo-filter">
                    <li>
                        <label htmlFor="todo-all">All</label>
                        <input
                            type="radio"
                            name="filter"
                            id="todo-all"
                            value="all"
                            checked={todoValue === 'all'}
                            onChange={() => setTodoValue('all')}
                        />
                    </li>
                    <li>
                        <label htmlFor="todo-completed">Completed</label>
                        <input
                            type="radio"
                            name="filter"
                            id="todo-completed"
                            value="completed"
                            checked={todoValue === 'completed'}
                            onChange={() => setTodoValue('completed')}
                        />
                    </li>
                    <li>
                        <label htmlFor="todo-pending">Pending</label>
                        <input
                            type="radio"
                            name="filter"
                            id="todo-pending"
                            value="pending"
                            checked={todoValue === 'pending'}
                            onChange={() => setTodoValue('pending')}
                        />
                    </li>
                </ul>
            </div>
            <section className="todo-list">
                {filteredTodos.map((todo, id) => (
                    <div key={id} className="todo-list-item" onClick={() => (navigate(`/ToDo/ToDoItem/${todo.id}`))}>
                        <h3>{todo.title}</h3>
                        <small>{todo.status}</small>
                        <p>{todo.content.slice(0, 150) + '...' }</p>
                        {/* <p>{todo.content}</p> */}
                    </div>
                ))}
            </section>
            <button className="todo-add-btn" onClick={() => setShowForm(!showForm)}><IoMdAdd size={40} /></button>

            {showForm && <ToDoForm onSave={handleSave} setShowForm={setShowForm} />}
        </main>
    );
}

export default ToDo;