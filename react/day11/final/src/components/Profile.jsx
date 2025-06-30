import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile(){
    const {user, login} = useContext(UserContext);

    if(!user){
        return(
            <div>
                <h2>login to see your profile</h2>
                <button onClick={login}>login</button>
            </div>
        )
    }
    return(
        <div>
            <h2>profile page</h2>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}

export default Profile;