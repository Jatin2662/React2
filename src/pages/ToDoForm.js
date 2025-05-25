


import react, { useState } from "react";
import '../styles/ToDoForm.css';
import { IoClose } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';


function ToDoForm({ onSave, setShowForm }) {


    const [todoData, setTodoData] = useState({
        id: uuidv4(),
        title: "",
        content: "",
        status: "Pending"
    })

    const saveToDo = (e) => {
        e.preventDefault();
        const today = new Date().toISOString().split('T')[0];

        const newTodo = {
            ...todoData,
            dateCreated: today,
            dateModified: ''
        };

        onSave(newTodo);
        setShowForm(false);

        console.log(today);

    }

    const handleChange = (e) => {
        setTodoData({
            ...todoData,
            [e.target.name]: e.target.value
        })
    }



    return (
        <section className="todo-form">

            <form onSubmit={saveToDo}>
                <div className="todo-form-head">
                    <h1>New task</h1>
                    <button onClick={() => setShowForm(false)}><IoClose size={20} /></button>
                </div>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={todoData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    type="text"
                    name="content"
                    placeholder="Description"
                    value={todoData.content}
                    onChange={handleChange}
                    rows={10}
                    required
                />
                <button type="submit">Save</button>

            </form>
        </section>
    );
}

export default ToDoForm;