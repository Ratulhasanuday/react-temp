import useInputState from "../../hook/useInputState";

const HookForm = () => {
    const [name, handleNameChange]=useInputState('ratul Hook');
    const handleSumbit=e=>{
        console.log('form data',name);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input value={name} onChange={handleSumbit} type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
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