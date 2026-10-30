import { useNavigate } from "react-router-dom";

const About = () => {
    const navigator = useNavigate();
    return (
        <div>
            Hello I am about page
            <button onClick={() => navigator("/")}> back home </button>
        </div>
    )
}

export default About;