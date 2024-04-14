import useInputState from "../../hook/useInputState";

const HookForm = () => {
    // const [name, handleNameChange]=useInputState('ratul Hook');
    const emailState=useInputState('ratul@gmail.com');
    const handleSumbit=e=>{
        // console.log('form data',name);
        console.log('form data',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <input  {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <button>Submit</button> */}
                <input  type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default HookForm;