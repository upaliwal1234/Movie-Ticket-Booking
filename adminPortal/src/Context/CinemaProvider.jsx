/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CinemaContext = createContext();

function CinemaProvider({ children }) {
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("myToken"));
        // console.log(userInfo);
        setUser(userInfo);
        if (!userInfo) {
            navigate('/');
        }
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