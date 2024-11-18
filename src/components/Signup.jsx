import React, { useState } from "react";
import {account} from './appwrite/appwiteConfig' 
import {useNavigate} from 'react-router-dom'
import { ID } from "appwrite";

function Signup(){

  const [user,setUser] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();

  const signupUser = async(e)=>{
     e.preventDefault();

     const promise = account.create(ID.unique(),user.email,user.password,user.name)

     promise.then((res)=>{
      navigate("/layout");
      console.log(res);
     })
     .catch((error)=>console.log(error))

  }

    return(
        <>
          <div className="mt-36 ml-96 border-2 border-black w-96 h-96 text-left pl-4 pt-5 rounded-md bg-slate-50">
            <form onSubmit={(e)=>signupUser(e)}>
            <label className="mr-4 font-semibold">User Name</label>
            <input onChange={(e)=>setUser({...user,name:e.target.value})} type="text" required className="mb-10 border-b-2 border-black h-7 font-thin"/><br/>

            <label className="mr-9 font-semibold">Email id</label>
            <input onChange={(e)=>setUser({...user,email:e.target.value})} type="email" required className="mb-10 border-b-2 border-black h-7 font-thin"/><br/>

            <label className="mr-7 font-semibold">Password</label>
            <input onChange={(e)=>setUser({...user,password:e.target.value})} type="password" required className="mb-14 border-b-2 border-black h-7 font-thin"/><br/>

            <button type="submit" className="mt-5 ml-36 border-blue-400 border-2 w-20 h-10 rounded-md hover:bg-blue-500 text-xl font-sans font-bold">Signup</button> <br/>

            <p className="ml-16 mt-7 text-blue-700">Already have an account?<button onClick={()=>navigate('/login')} className="border-b-2 border-blue-700">Log in</button></p>
            </form>
          </div>
        </>
    )
}

export default Signup