


import react, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import '../styles/ToDoItem.css';


function ToDoItem({ todoList, setTodoList }) {

    const navigate = useNavigate();

    const { id } = useParams();

    const todo = todoList.find(item => item.id === id);

    const [isEditable, setIsEditable] = useState(true);

    const [editedTodo, setEditedTodo] = useState({
        title: todo.title,
        content: todo.content,
        status: todo.status
    });


    if (!todo) {
        return <p>To-Do item not found</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleDelete = () => {
        navigate("/ToDo");
        setTimeout(() => {
          const updatedList = todoList.filter(item => item.id !== id);
          setTodoList(updatedList);
          localStorage.setItem("todoList", JSON.stringify(updatedList));
        }, 100);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditable(true);
        setTodoList(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, ...editedTodo, dateModified: new Date().toISOString() } : item
            )
        );
        navigate("/ToDo");
    };


    return (
        <section key={todo.id} className="todo-item">

            <h1>{todo.title}</h1>

            <div className="td-i-op">
                <span className="td-i-o-s">{todo.status}</span>
                <span className="td-i-o">
                    <span><MdEdit onClick={() => setIsEditable(!isEditable)} /></span>
                    <span><MdOutlineDelete onClick={handleDelete} /></span>
                </span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="td-status">
                    <input
                        type="checkbox"
                        id="completed"
                        name="status"
                        checked={editedTodo.status === "Completed"}
                        onChange={(e) =>
                            setEditedTodo(prev => ({
                                ...prev,
                                status: e.target.checked ? "Completed" : "Pending"
                            }))
                        }
                    />
                    <label htmlFor="completed">Mark as Completed</label>
                </div>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={editedTodo.title}
                    onChange={handleChange}
                    disabled={isEditable}
                />

                <textarea
                    name="content"
                    placeholder="Description"
                    value={editedTodo.content}
                    onChange={handleChange}
                    disabled={isEditable}

                />
                <button type="submit">Save</button>
            </form>
            <div className="todo-dates">
                <span>Date Created: {todo.dateCreated}</span>
                <span>Last Modified: {todo.dateModified}</span>
            </div>

        </section>
    );
}

export default ToDoItem;







// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { MdEdit } from "react-icons/md";
// import { MdOutlineDelete } from "react-icons/md";
// import '../styles/ToDoItem.css';

// function ToDoItem({ todoList, setTodoList }) {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const [isEditable, setIsEditable] = useState(true);
//     const [editedTodo, setEditedTodo] = useState({
//         title: "",
//         content: "",
//         status: ""
//     });

//     const [todo, setTodo] = useState(null);
//     const [deletedMessage, setDeletedMessage] = useState(""); // For the deleted message

//     // Find the todo item based on the id from the URL
//     useEffect(() => {
//         const foundTodo = todoList.find(item => item.id === id);
//         if (foundTodo) {
//             setTodo(foundTodo);
//             setEditedTodo({
//                 title: foundTodo.title,
//                 content: foundTodo.content,
//                 status: foundTodo.status
//             });
//         } else {
//             // If the todo is not found, navigate back to the todo list
//             navigate("/ToDo");
//         }
//     }, [todoList, id, navigate]); // Re-run if todoList or id changes

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedTodo(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleDelete = () => {
//         const updatedList = todoList.filter(item => item.id !== id);
//         setTodoList(updatedList);
//         localStorage.setItem("todoList", JSON.stringify(updatedList));

//         // Show the deleted message and navigate after a short delay
//         setDeletedMessage("To-do item deleted successfully");
//         setTimeout(() => {
//             navigate("/ToDo");
//         }, 2000); // Wait for 2 seconds before redirecting
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsEditable(true);
//         setTodoList(prevList =>
//             prevList.map(item =>
//                 item.id === id ? { ...item, ...editedTodo, dateModified: new Date().toISOString() } : item
//             )
//         );
//     };

//     return (
//         <section key={todo ? todo.id : null} className="todo-item">
//             {deletedMessage && <p className="deleted-message">{deletedMessage}</p>} {/* Show deleted message */}

//             <h1>{todo ? todo.title : "Loading..."}</h1>

//             <div className="td-i-op">
//                 <span className="td-i-o-s">{todo ? todo.status : ""}</span>
//                 <span className="td-i-o">
//                     <span><MdEdit onClick={() => setIsEditable(!isEditable)} /></span>
//                     <span><MdOutlineDelete onClick={handleDelete} /></span>
//                 </span>
//             </div>

//             {todo && (
//                 <form onSubmit={handleSubmit}>
//                     <div className="td-status">
//                         <input
//                             type="checkbox"
//                             id="completed"
//                             name="status"
//                             checked={editedTodo.status === "Completed"}
//                             onChange={(e) =>
//                                 setEditedTodo(prev => ({
//                                     ...prev,
//                                     status: e.target.checked ? "Completed" : "Pending"
//                                 }))
//                             }
//                         />
//                         <label htmlFor="completed">Mark as Completed</label>
//                     </div>

//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={editedTodo.title}
//                         onChange={handleChange}
//                         disabled={isEditable}
//                     />

//                     <textarea
//                         name="content"
//                         placeholder="Description"
//                         value={editedTodo.content}
//                         onChange={handleChange}
//                         disabled={isEditable}
//                     />
//                     <button type="submit">Save</button>
//                 </form>
//             )}
//             <div className="todo-dates">
//                 <span>Date Created: {todo ? todo.dateCreated : ""}</span>
//                 <span>Last Modified: {todo ? todo.dateModified : ""}</span>
//             </div>
//         </section>
//     );
// }

// export default ToDoItem;




