import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)
    const handleSumbit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    useEffect(()=>{
        nameRef.current.focus();
    })
    return (

        <div>
            <form onSubmit={handleSumbit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={"user@gmail.com"} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;