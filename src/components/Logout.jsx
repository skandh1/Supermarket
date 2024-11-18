import React from "react";
import { account } from "./appwrite/appwiteConfig";
import { useNavigate } from "react-router-dom";
function Logout(){

     const navigate = useNavigate();

        

    const logoutHandle = async()=>{
        try {
            await account.deleteSession("current");
            navigate('/login')
        } catch (error) {
           console.log(error); 
           navigate('/login')
        }
    }

    return(
        <>
         <button onClick={logoutHandle} className="bg-red-900 mb-3 text-cyan-200 p-1 rounded-md">Logout</button>
        </>
    )
}

export default Logout;