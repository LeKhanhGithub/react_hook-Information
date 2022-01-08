import React, {useState} from 'react'
import './form.css'



const Form = (props) => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    

    const handleOnsubmit= (e) => {
        e.preventDefault();
        const newInfor = {
            name: name,
            email: email
        };
        props.giveInfor(newInfor);
    }

    const handleOnchangeName = (e) => {
        setName(e.target.value);
    }

    const  handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="cart__form">
            <div className="cart__form-container">
                <h1>Register</h1>
                <form className="cart__form-form" action="" onSubmit = {(e) =>handleOnsubmit(e)}>
                    
                    <div className="form-group">
                        <label  htmlFor ="Name" >User Name: </label>
                        <input 
                        type = "text" 
                        id = "Name" 
                        placeholder = "User Name"
                        value = {name}
                        onChange = {(e) => handleOnchangeName(e)}

                        />
                    </div>

                    <div className="form-group">
                        <label  htmlFor ="Email" >Email: </label>
                        <input
                            type="Email"
                            id="Email"
                            placeholder="ex: Khanh@gmail.com"
                            value={email}
                            onChange = {(e) => handleOnchangeEmail(e)}
                        />
                    </div>
                    <button >Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default Form
