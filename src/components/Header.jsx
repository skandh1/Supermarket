import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { account } from "./appwrite/appwiteConfig";
import Logout from "./Logout";


function Header(){

    const items = useSelector(state=>state.products)

  
  return(
    <>
     <Logout/>


    <nav className="bg-slate-900 text-white h-16 text-start pt-6 mb-5">
        <a className="text-blue-300 text-2xl mr-28 font-bold">Shoppo.in</a>

        <a className="mr-28 hover:border-2"> <NavLink to='/layout' className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
        Home 
        </NavLink></a>


        <a className="mr-28 hover:border-2"><NavLink to='about' className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
        About 
        </NavLink></a>


        <a className="mr-28 hover:border-2"><NavLink to='contact' className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
        Contact 
        </NavLink></a>


        <a className="mr-28 hover:border-2"><NavLink to='mybag' className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
        My Bag 👜: {items.length} 
        </NavLink></a>


        <input placeholder="search"/>
        <button className="bg-yellow-600 text-black font-serif text-xl" >search</button>
    </nav>
    
    </>
  )
}

export default Header