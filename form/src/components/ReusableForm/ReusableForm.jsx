const ReusableForm = ({formTitle,handleSumbit,submitBtnText="Submit" , children}) => {
    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value, 
            password:e.target.password.value, 
        }
        handleSumbit(data)
    }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input  type="text" name="name"/>
                <br />
                <input  type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <button>Submit</button> */}
                <input  type="submit" value={submitBtnText} />
            </form> 
        </div>
    );
};

export default ReusableForm;