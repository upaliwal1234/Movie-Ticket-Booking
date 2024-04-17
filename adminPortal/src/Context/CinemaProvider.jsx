/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenCheck } from "../helperToken";

const CinemaContext = createContext();

function CinemaProvider({ children }) {
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = tokenCheck();
        setUser(userInfo);
    }, [navigate]);

    return (
        <CinemaContext.Provider
            value={{
                user,
                setUser
            }}
        >{children}</CinemaContext.Provider>
    )
}

export const CinemaState = () => {
    return useContext(CinemaContext);
}
export default CinemaProvider