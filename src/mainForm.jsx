import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import './style.css';

const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [All, setAll] = useState([]);
  const [course1, setCourse1] = useState(false);
  const [course2, setCourse2] = useState(false);
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    console.log("course 1 is " + course1);
    console.log("gender is " + gender);

    const obj = {
      name: name,
      email: email,
      message: message
    };

    setAll([...All, obj]);
    setName("");
    setEmail("");
    setMessage("");
    alert("User added to array");

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

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" onChange={(e) => setMessage(e.target.value)} placeholder="How can we help you?" value={message} ></textarea>
        </div>

        <fieldset>
          <legend>Select your favorite programming languages:</legend>

          <div>
            <input value={course1} onChange={(e) => setCourse1(e.target.checked)} type="checkbox" id="lang-html" name="languages" value="html" />
            <label htmlFor="lang-html">HTML</label>
          </div>

          <div>
            <input value={course2} onChange={(e) => setCourse2(e.target.checked)} type="checkbox" id="lang-css" name="languages" value="css" />
            <label htmlFor="lang-css">CSS</label>
          </div>


        </fieldset>


        <fieldset>
          <legend>Gender:</legend>

          <div>
            <input checked={gender == "male"} onChange={(e) => setGender("male")} type="radio" id="html" name="fav_language" value="male" />
            <label htmlFor="html">male</label>
          </div>

          <div>
            <input checked={gender == "female"} onChange={(e) => setGender("female")} type="radio" id="css" name="fav_language" value="female" />
            <label htmlFor="css">female</label>
          </div>

        </fieldset>


        <button type="submit" className="submit-btn">Send Message</button>

      </form>

      {All.map((obj) => <p key={obj.name}>{obj.name}</p>)}
    </div>
  )
}


const Form2 = () => {
  const [info, setInfo] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  const updateInfp = (e) => {
    const newData = { ...info, [e.target.name]: e.target.value };
    setInfo(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  }
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input value={info.name} onChange={updateInfp} type="text" id="name" name="name" placeholder="John Doe" />

        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input value={info.email} onChange={updateInfp} type="email" id="email" name="email" placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" onChange={updateInfp} placeholder="How can we help you?" value={info.message} ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>

      </form>

    </div>
  )
}
createRoot(document.getElementById('root')).render(<Form2 />);
