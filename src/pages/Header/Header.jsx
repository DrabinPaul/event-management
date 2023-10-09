import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    const links = <>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#fe3e01] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Home</NavLink>
        <NavLink to='/gallery' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#fe3e01] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Gallery</NavLink>
        <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#fe3e01] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>About Us</NavLink>
        <NavLink to='/login'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#fe3e01] underline text-xl font-bold" : "text-xl font-bold"
            }>Login</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-2xl lg:text-3xl font-bold text-[#fe3e01]">D<span className="text-black">wedding</span></a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end ">
                {
                    user && <div>
                       <h2 className="text-black font-semibold text-sm  lg:text-lg pr-2">{user.displayName}</h2>
                    </div>
                }
                <label tabIndex={0} className="avatar online mr-2">
                   { user &&
                     <div className="w-10 rounded-full">
                     <img src={user.photoURL} />
                 </div>
                   }
                </label>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn text-[#fe3e01]">Logout</button>
                        :
                        <Link className="" to="/login">
                            <button className="btn text-[#fe3e01]">Login</button>
                        </Link>
                }
            </div>



        </div>
    );
};

export default Header;