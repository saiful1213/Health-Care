import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {

   const { emailSignin, googleSignin } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation()


   const handleLogin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      emailSignin(email, password)
         .then(() => {
            toast.success('succesfully logged in')
            
         })
         .catch(() => toast.error('invalid login credintial'))
   }

   const handleGoogleSignin = () => {
      googleSignin()
         .then(() => {
            toast.success('successfully signed in')
            navigate(`${location.state || '/'}`)
         })
         .catch(() => toast.error('invalid login credintial'))
   }


   return (
      <div className="h-screen">
         <Helmet>
            <title>Health Care- Login</title>
         </Helmet>
         <div className="hero  bg-base-200 pb-24">
            <div className="hero-content flex-col mt-24 w-1/2 mx-auto">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
               </div>
               <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                  <form className="card-body" onSubmit={handleLogin}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           <Link to="/register" className="label-text-alt link text-heading font-bold underline link-hover">Create An Account</Link>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  <div className="flex gap-4 justify-center items-center pb-6" onClick={handleGoogleSignin}>
                     <p className="font-medium">Log in with</p>
                     <button className="btn px-12 py-3 btn-ghost btn-active"><FcGoogle className="text-2xl" />Google</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;