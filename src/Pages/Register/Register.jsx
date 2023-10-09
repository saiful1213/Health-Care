import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";



const Register = () => {
   const navigate = useNavigate()
   const { createUser, googleSignin } = useContext(AuthContext);
   const [err, setErr] = useState('');


   const handleRegister = e => {
      e.preventDefault()
      const name = e.target.name.value;
      const img = e.target.img.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (password.length < 6) {
         return setErr('password should be at least 6 or more charecters')
      }

      if (!/(?=.*[A-Z])(?=.*[#?!@$%^&*-])/.test(password)) {
         return setErr('password should be at least 1 uppercase letter and 1 special charcter')
      }

      createUser(email, password)
         .then(result => {
            updateProfile(result.user, {
               displayName: name,
               photoURL: img
            })
            toast('successfully user created')
            navigate('/')
         })
         .catch(() => {
            setErr('Email already in use')
         })
   }

   const handleGoogleSignin = () => {
      googleSignin()
         .then(() => {
            toast('successfully signed in')
            navigate('/')
         })
         .catch((err) => {
            console.log(err.message)
            toast.error("An error occoured !")
         })
   }

   return (
      <div>
         <Helmet>
            <title>Health- Register</title>
         </Helmet>
         <div className="hero bg-base-200 pb-24">
            <div className="hero-content flex-col mt-24 w-1/2 mx-auto">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Register now!</h1>
               </div>
               <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                  <form className="card-body" onSubmit={handleRegister}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="img" placeholder="img link" className="input input-bordered" required />
                     </div>
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
                           <Link to="/login" className="label-text-alt text-heading font-bold underline link link-hover">Login here</Link>
                        </label>
                     </div>
                     {err && <p className="text-red-600 font-medium">{err}</p>}
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>

                  <div className="flex gap-4 justify-center items-center pb-6" onClick={handleGoogleSignin}>
                     <p className="font-medium">Sign up with</p>
                     <button className="btn px-12 py-3 btn-ghost btn-active"><FcGoogle className="text-2xl" />Google</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;