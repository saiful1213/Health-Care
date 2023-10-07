/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowServices = ({ service }) => {
   const { id, service_name, img, service_charge, description } = service;
   return (
      <div>
         <div className="border shadow-md rounded-lg p-4 flex flex-col md:h-[550px]">
            <img src={img} className="rounded-lg" />
            <h2 className="text-3xl font-bold my-3">{service_name}</h2>
            <p className="text-justify flex-1">{description.slice(0, 200)}</p>
            <p className="font-medium text-xl mb-6 mt-3">Service Charge: {service_charge}</p>
            <Link to={`/services/${id}`}><button className="btn bg-heading text-white w-full">Details</button></Link>
         </div>
      </div>
   );
};

export default ShowServices;