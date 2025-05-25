


import react from "react";
import '../styles/Blogs.css';
import { blogList } from "../Data";
import { Link, useParams } from "react-router-dom";


function Blogs(){

    

    return(
        <section className="blogs">
            <h1>Blog Posts</h1>
            <section className="blogs-cards">
                {blogList.map((data)=>(
                    <div className="blogs-card" key={data.id}>
                    <h1>{data.title}</h1>
                    <p>{data.content.slice(0, 60)}...</p>
                    <Link to={`/Blogs/${data.id}`} >Read more...</Link>
                </div>
                ))}
            </section>
        </section>
    );
}

export default Blogs;