

import React, { useState } from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";



function BoxNavbar({ options }) {

    return (
        <div className="box-navbar">
            <ul>
                {options.map((option) => (
                    <li key={option.id}><Link to={option.path}>{option.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}



function Navbar() {

    const { theme, toggleTheme } = useTheme();
    const [showBoxNavbar, setShowBoxNavbar] = useState(false);

    const options = [
        {
            id: 1,
            title: "Blogs",
            path: "/Blogs"
        },
        {
            id: 2,
            title: "Form",
            path: "/Form"
        },
        {
            id: 3,
            title: "ToDo",
            path: "/ToDo"
        },
        {
            id: 4,
            title: "Shopping",
            path: "/Shopping"
        }
    ]

    return (
        <nav className="navbar">
            <span>Practice</span>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li className="navigate-b-n" onClick={()=> setShowBoxNavbar(!showBoxNavbar)}>
                    Navigate
                    {showBoxNavbar && <BoxNavbar options={options} />}
                </li>
                {/* <li><Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/Form">Form</Link></li>
                <li><Link to="/ToDo">ToDo</Link></li> */}
                <li><button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button></li>
            </ul>

        </nav>
    );
}

export default Navbar;