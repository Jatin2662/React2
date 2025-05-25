


import React from "react";
import '../styles/Home.css';


function Home() {
    return (
        <section className="home">
            <h1>Practice</h1>
            <ul>
                <li>
                    1️⃣ React Router (Routing in Single Page Applications)
                    What to Learn:
                    •	Setting up routes using react-router-dom.
                    •	Navigating between pages/components.
                    •	Dynamic routes and useParams.
                    •	useNavigate and programmatic navigation.
                    Example Task:
                    •	Create a mini blog app with Home, About, Blog, and a dynamic Post/:id page.
                </li>

                <li>
                    2️⃣ React Context API (Basic Global State Management)
                    What to Learn:
                    •	Creating a Context.
                    •	Providing and consuming global values.
                    •	Replacing prop-drilling in medium apps.
                    Example Task:
                    •	Theme toggler across app (light/dark).
                    •	User login status shared across multiple components.

                </li>

                <li>
                    3️⃣ Form Handling & Validation (Advanced Forms)
                    What to Learn:
                    •	Controlled vs Uncontrolled components.
                    •	Handling large forms (with multiple fields).
                    •	Validating fields.
                    •	Optional: use libraries like formik, react-hook-form.
                    Example Task:
                    •	Create a multi-step signup form with validation (name, email, password, etc.).

                </li>

                <li>
                    4️⃣ Lifting State Up & Component Communication
                    What to Learn:
                    •	Sharing data between sibling components.
                    •	Lifting state up to common parent.
                    •	More practice with functions as props.
                    Example Task:
                    •	Build a Todo App:
                    o	Add and delete tasks.
                    o	Mark complete.
                    o	Filter (All, Active, Completed).

                </li>
            </ul>
        </section>
    )
}

export default Home;