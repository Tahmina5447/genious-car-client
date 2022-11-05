import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const {logOut,user}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.error(error));
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>HOME</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost h-24 w-24"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   <li><Link to='/'>HOME</Link></li>
                   <li><Link to='/orders'>ORDER</Link></li>
                   {
                    user?.email ? 
                    <>
                        <li onClick={handleLogOut}><button>SIGN OUT</button></li>
                    </>
                    :
                    <>
                        <li><Link to='/login'>LOGIN</Link></li>
                        <li><Link to='/signup'>SIGN UP</Link></li>
                    </>
                   }
                   
                   
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;