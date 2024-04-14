import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const{id,title,body}=post;
    const navigate=useNavigate()
    const postS={
        border:"1px solid yellow",
        padding:'10px',
        "borderRadius": "20px"
    }
    const handleShowDetails=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postS}>
            <h2>{id}</h2>
            <h2> {title}</h2>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Posts Details</button></Link>
            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
};

export default Post;