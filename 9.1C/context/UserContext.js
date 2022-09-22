import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../Firebase";

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user); 
        });
    }, [])

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}