import React, { useState } from "react";
import { account } from "./appwrite/appwiteConfig";
import { useNavigate } from "react-router-dom";

function Login(){

    const [user,setUser] = useState({email:'',password:''});
    const [valid,setValid] = useState(true);
    const navigate = useNavigate();
     
    
   const loginUser = async(e)=>{
      e.preventDefault();

      const promise = account.createEmailPasswordSession(user.email,user.password)

      promise.then((res)=>{
        navigate('/layout');
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
        setValid(false)
      })
   }


   return(
    <>
     <div className="mt-36 ml-96 border-2 border-black w-96 h-96 text-left pl-4 pt-5 rounded-md bg-slate-50">
            <form onSubmit={(e)=>loginUser(e)}>

            <label className="mr-9 font-semibold">Email id</label>
            <input onChange={(e)=>setUser({...user,email:e.target.value})} type="email" required className="mb-10 border-b-2 border-black h-7 font-thin"/><br/>

            <label className="mr-7 font-semibold">Password</label>
            <input onChange={(e)=>setUser({...user,password:e.target.value})} type="password" required className="mb-14 border-b-2 border-black h-7 font-thin"/><br/>

            <button type="submit" className="mt-5 ml-36 border-blue-400 border-2 w-20 h-10 rounded-md hover:bg-blue-500 text-xl font-sans font-bold">Login</button> <br/>
            <p className="ml-5 mt-7 text-blue-700">Dont have an account?<button onClick={()=>navigate('/')} className="border-b-2 border-blue-700">create new account</button></p><br/>
            {
              !valid && (<p className="text-red-600">Invalid credentials. Please check the email and password.</p>)
            }
            </form>
          </div>
    </>
   )
}

export default Login