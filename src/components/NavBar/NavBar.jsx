import React, { useState } from 'react';
import Links from '../Links/Links';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/", exact: true },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      const [open, setOpen]=useState(false);
    return (
        <nav>
            <div className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>: 
                     <FiMenu></FiMenu>
                } 
               
            </div>
            
            <ul className={`md:flex md:static bg-amber-400 rounded-lg p-2 absolute
            ${open ? 'left-2' :'-left-64'} duration-1000 
            `}>
            {
                routes.map(route=> <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;