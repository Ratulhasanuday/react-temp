import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const {postId}=useParams();
    console.log(postId);
    const {id, title, body}=post;
    const navigate=useNavigate();

    const handleGoBack=()=>{
        navigate(-1);    
    }
    return (
        <div>
            <h2>{id}</h2>
            <h2>Title: {title}</h2>
            <h3>Post Details About: {body}</h3>            
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;