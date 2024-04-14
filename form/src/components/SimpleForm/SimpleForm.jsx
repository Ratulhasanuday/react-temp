const SimpleForm = () => {
    const handleSumbit=e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submited');
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input type="text" name="name"/>
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

export default SimpleForm;