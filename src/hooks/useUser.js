import { useEffect, useContext } from "react";
import AppContext from '../context/AppContext';

function User() {

    //Variables del context
	const {
        email,
        pass,
        userFlag,
        setEmail,
        setPass,
        setUserFlag
    } = useContext(AppContext);



    const checkUser = ()=>{
        useEffect(()=>{
            if(email !== null)
            {
                setUserFlag(true)
            }
        },[email])
    }


    return ( userFlag, checkUser );

}

export default User;