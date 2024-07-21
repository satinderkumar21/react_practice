import { useState } from "react";

const BlogList = (props) => {

const {blog,title} = props
    // const blogs = props.blogs
    // const  title = props.title
    
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
          {blog.map((blog)=> (
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>Written by{blog.author}</p>
                  
               </div>
               
            ))}
           
        </div>
        


    );
}
 
export default BlogList;