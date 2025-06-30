import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header(){
     const {user, logout} = useContext(UserContext);
     console.log(user)
    return(
          <header style={{ padding: "1rem", background: "#eee" }}>
      {user ? (
        <>
          <span>👤 Welcome, {user.name}</span>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>Logout</button>
        </>
      ) : (
        <span>Not Logged In</span>
      )}
    </header>
    )
}

export default Header;