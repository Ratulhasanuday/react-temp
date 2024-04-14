import { Link } from "react-router-dom";
import "./User.css"
const User = ({user}) => {
    const {id,name,email,phone,website,username}=user;
    return (
        <div className="box">
            <h2>User Name:{name}</h2>
            <h2>E-mail:{email}</h2>
            <h2>Number:{phone}</h2>
            <h2>Web: {website}</h2>
            <h2>User Name: {username}</h2>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;