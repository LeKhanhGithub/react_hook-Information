import React from 'react'
import { Link, Outlet } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <>
            <div className="cart__heading">
                <h1>Contact Management</h1> 
                
                <Link to='contact'> <button>Contact</button></Link>
                <Link to='form'> <button>Add Infor</button></Link>
            </div>
            <div className='cart__heading-child'>
                <Outlet />
            </div>
        </>
        
        
    )
}

export default Header
