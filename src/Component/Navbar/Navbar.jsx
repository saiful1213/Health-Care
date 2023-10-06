import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

   const navlinks = <>
      <li className="font-medium">
         <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }>Home</NavLink>
      </li>
      <li className="font-medium">
         <NavLink to="/services" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }>Service Details</NavLink>
      </li>
      <li className="font-medium">
         <NavLink to="/doctors" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }>Doctors</NavLink>
      </li>
      <li className="font-medium">
         <NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }>Blog</NavLink>
      </li>
   </>

   return (
      <div className="shadow-md w-full bg-base-100 fixed top-0 z-10">
         <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost md:hidden">
                     <FiMenu size={'1.5rem'} />
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navlinks}
                  </ul>
               </div>
               <Link className="btn text-heading normal-case text-xl" to="/">Health Care</Link>
            </div>
            <div className="navbar-center hidden md:flex">
               <ul className="menu menu-horizontal px-1">
                  {navlinks}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn bg-heading text-white capitalize">Login</a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;