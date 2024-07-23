import { useNavigate, useParams, useSearchParams } from "react-router-dom";
//import {useSearchParams} from 'react-router-dom';
const BlogDetails = () => {
   
const {searchParams} = useSearchParams();
const id = searchParams.get('id')
    return (  
        <div className="blog-details">

            <h2>blog details{id}</h2>

        </div>
    );
}
 
export default BlogDetails;