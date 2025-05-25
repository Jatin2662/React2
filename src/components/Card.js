


import React from "react";
import '../styles/Card.css';


function Card({ id, title, content }) {

    return (
        <div className="card" key={id}>
            <h1>{title}</h1>
            <p>{content}</p>
            
        </div>
    );
}

export default Card;