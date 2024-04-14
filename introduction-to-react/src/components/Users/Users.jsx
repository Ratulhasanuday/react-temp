import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users=useLoaderData()
    console.log(users);
    const userStyle={
        display:"grid",
        "grid-template-columns":"repeat(3, 1fr)",
        gap:'20px'
    }
    return (
        <div>
            <h2>Our Users {users.length}</h2>
            <p>Fantastic and praty users</p>
            <div style={userStyle}>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
