


import React from "react";
import '../styles/Home.css';


function Home() {

    const topics = [
        {
            title: "React Router (Routing in Single Page Applications)",
            whatToLearn: [
                "Setting up routes using react-router-dom.",
                "Navigating between pages/components.",
                "Dynamic routes and useParams.",
                "useNavigate and programmatic navigation."
            ],
            exampleTasks: [
                "Creating a mini blog app with Home, About, Blog, and a dynamic Post/:id page."
            ]
        },
        {
            title: "React Context API (Basic Global State Management)",
            whatToLearn: [
                "Creating a Context.",
                "Providing and consuming global values.",
                "Replacing prop-drilling in medium apps."
            ],
            exampleTasks: [
                "Theme toggler across app (light/dark).",
                "User login status shared across multiple components."
            ]
        },
        {
            title: "Form Handling (Advanced Forms)",
            whatToLearn: [
                "Step form, filling step by step."
            ],
            exampleTasks: [
                "Creating a multi-step signup form with validation (name, email, password, etc.)."
            ]
        },
        {
            title: "Lifting State Up & Component Communication",
            whatToLearn: [
                "Sharing data between sibling components.",
                "Lifting state up to common parent.",
            ],
            exampleTasks: [
                "Building a Todo App:",
                "Add and delete tasks.",
                "Mark complete.",
                "Filter (All, Active, Completed)."
            ]
        }
    ];



    return (
        <section className="home">
            <h1>Practice</h1>
            <div>
                {topics.map((t, index) => (
                    <div key={index}>
                        <h1>{t.title}</h1>
                        <h4>What to Learn:</h4>
                        <ul>
                            {t.whatToLearn.map((tw, i) => (
                                <li key={i}>{tw}</li>
                            ))}
                        </ul>
                        <h4>Example Tasks:</h4>
                        <ul>
                            {t.exampleTasks.map((te, i) => (
                                <li key={i}>{te}</li>
                            ))}
                        </ul>
                        <hr />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home;