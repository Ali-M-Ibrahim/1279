import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name is:" + name);
        console.log("email is:" + email);
        const dataToSend = {
            fullname: name,
            email: email
        };
        navigator("/profile", { state: dataToSend });

    }
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input className={nameError ? "is-invalid" : null} type="text" value={name} id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                    {nameError && (
                        <span className='red' >Email field is required</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
                </div>
                <button type="submit" className="submit-btn">Send Message</button>

            </form>
        </div>
    )
}

export default Form;
