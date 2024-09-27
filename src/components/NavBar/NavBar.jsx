import React from 'react';
import Links from '../Links/Links';


const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/", exact: true },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      
    return (
        <div>
            <ul className='flex'>
            {
                routes.map(route=> <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </div>
    );
};

export default NavBar;