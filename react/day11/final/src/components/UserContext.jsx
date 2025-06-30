import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({children}){
    
    const[user, setUser] = useState(null);


    const login = ()=>{
        setUser({name:"mansi", email:"mansi@123"})
    }

    const logout = ()=>{
        setUser("");
    }

    return(
        <UserContext.Provider value ={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}