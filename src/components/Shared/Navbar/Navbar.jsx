import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpeg';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/add">Add Toy</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl "><img className="h-24 w-32 rounded-full" src={logo}></img></Link>
                <h1 className="text-3xl font-bold">Magic Toy Mart</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user &&
                    <>
                        {/* <img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" /> */}
                        {/* <img className='rounded-circle w-10' src={user.photoURL} title={user.displayName} style={{ height: '40px' }} ></img> */}
                        <img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" />
                    </>
                }
                {user ? <Link to="/login"><button onClick={handleLogout} className="btn btn-primary mr-2">Logout</button></Link>
                    : <Link to="/login"><button className="btn btn-primary mr-2">Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;