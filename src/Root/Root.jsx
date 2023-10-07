import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
   return (
      <div className="font-roboto">
         <Navbar></Navbar>
         <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            <ToastContainer />
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Root;