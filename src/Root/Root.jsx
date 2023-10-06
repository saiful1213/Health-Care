import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const Root = () => {
   return (
      <div className="font-roboto">
         <Navbar></Navbar>
         <Outlet></Outlet>
      </div>
   );
};

export default Root;