import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Auth/Context/AuthContext';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user,logout } = useContext(AuthContext);

    const handleSignOut=()=>{
        logout()
        .then(()=>{
            console.log("Successfully Logged Out");
        })
        .catch(error=>{
                console.log("Faild to Logout : ",error.message);
            })
    }
   
    const links = <>

        <NavLink to="/" className="btn btn-ghost">Home</NavLink>
        <NavLink to="/about" className="btn btn-ghost">About</NavLink>
        <NavLink to="/contact" className="btn btn-ghost">Contact</NavLink>
        <NavLink to="/services" className="btn btn-ghost">Services</NavLink>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={logo} alt="" />
                    <h1 className='font-bold text-2xl'>Job Portal</h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><button onClick={handleSignOut} className='btn'>Logout</button></> : <>
                        <Link to="/login">
                            <button className="btn btn-ghost">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-ghost">Register</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;