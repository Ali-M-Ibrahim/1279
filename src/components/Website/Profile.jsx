import { useLocation } from "react-router-dom";
const Profile = () => {
    const location = useLocation();
    return (
        <div>
            <p>Name is: {location.state.fullname} </p>
            <p>Email is: {location.state.email} </p>

        </div>
    )
}

export default Profile;