import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";



const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);


   const handleLogOut = () => {
      logOut()
         .then(() => {
            toast.success('Sign-out successful')
         })
         .catch(() => {
            toast.error('an error occoured')
         })
   }

   const navlinks = <>

      <li className="font-medium hover:text-heading">
         <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-heading" : ""
         }><button className="font-medium hover:text-heading">Home</button></NavLink>
      </li>
      <li className="font-medium hover:text-heading">
         <NavLink to="/services/:id" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-heading" : ""
         }><button className="font-medium hover:text-heading">Service Details</button></NavLink>
      </li>
      <li className="font-medium hover:text-heading">
         <NavLink to="/doctors" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }><button className="font-medium hover:text-heading">Doctors</button></NavLink>
      </li>
      <li className="font-medium hover:text-heading">
         <NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-heading text-white hover:text-title" : ""
         }><button className="font-medium hover:text-heading">Blog</button></NavLink>
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
               {
                  user ?
                     <details className="dropdown dropdown-end">
                        <summary className="list-none">
                           <div className="avatar">
                              <div className="w-12 rounded-full">
                                 <img src={user?.photoURL || `https://i.ibb.co/QCFzwjZ/bcg.jpg`} /> 
                              </div>
                           </div>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                           <li><h3 className="text-xl font-bold">{user?.displayName || 'User Name'}</h3></li>
                           <li><button className="btn btn-primary capitalize py-4" onClick={handleLogOut}>Logout</button></li>
                        </ul>
                     </details>

                     : <Link to="/login" className="btn bg-heading text-white capitalize">Login</Link>
               }

            </div>
         </div>
      </div>
   );
};

export default Navbar;