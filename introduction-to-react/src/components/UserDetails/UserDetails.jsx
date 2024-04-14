import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, phone } = user;
    return (
        <div>
            <h2>Details About user:{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;
