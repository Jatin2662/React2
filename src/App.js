


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import { ThemeProvider } from './context/ThemeContext';
import Form from './pages/Form';
import ToDo from './pages/ToDo';
import ToDoItem from './pages/ToDoItem';
import { useState, useEffect } from 'react';
import Shopping from './pages/Shopping';



function App() {

  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);


  return (

    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/:id" element={<BlogDetails />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/ToDo" element={<ToDo todoList={todoList} setTodoList={setTodoList} />} />
        <Route path="/ToDo/ToDoItem/:id" element={<ToDoItem todoList={todoList} setTodoList={setTodoList} />} />
        <Route path="/Shopping" element={<Shopping />} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
