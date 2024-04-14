import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts=useLoaderData();
    const stylePost={
        display:"grid",
        "gridTemplateColumns":"repeat(3, 1fr)",
        gap:'20px'
    }
    return (
        <div>
            <h2>Post: {posts.length} </h2>
            <div style={stylePost}>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;