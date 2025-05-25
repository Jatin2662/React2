


import React from "react";
import { blogList } from "../Data";
import { useParams } from "react-router-dom";


function BlogDetails(){
    
    const { id } = useParams();
    console.log(id, typeof(id))
    const blog = blogList.find((b)=> b.id === parseInt(id))
    console.log(blog);

    if(!blog){
        return <h1>Blog Not Found!!!</h1>;
    }

    return(
        <section className="blog-details" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </section>
    );
}

export default BlogDetails;