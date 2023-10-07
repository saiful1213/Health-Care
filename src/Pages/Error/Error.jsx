import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h1 className="text-5xl font-bold">Oops!! something is wrong</h1>
            <Link to={-1}><button className="btn btn-error mx-auto text-white mt-12 block">Go Back</button></Link>
         </div>
      </div>
   );
};

export default Error;