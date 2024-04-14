import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail]=useState('rojni kant');
    const [password,setPassword]=useState(null);
    const [name, setName]=useState(null);
    const [error ,setError]=useState('')
    const handleNameChanage=e=>{
        setName(e.target.value)
    }
    const handleSumbit=e=>{
        e.preventDefault();
        if (password.length<6) {
            setError('Password must be 6 character or longer')
        }
        else{
            setError('')
            console.log(email,password,name);
        }
    }

    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }
    const handleEmailChange=e=>{
        console.log(e.target);
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input onChange={handleNameChanage}
                type="text" name="name" />
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} 
                type="password" name="password" required />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error&& <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;