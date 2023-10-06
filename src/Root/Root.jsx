import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const Root = () => {
   return (
      <div className="font-roboto">
         <Navbar></Navbar>
         <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Root;