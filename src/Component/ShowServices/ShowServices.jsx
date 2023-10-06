/* eslint-disable react/prop-types */

const ShowServices = ( {service} ) => {
   const { service_name, img, service_charge, description } = service;
   return (
      <div>
         <div className="border shadow-md rounded-lg p-4 flex flex-col md:h-[550px]">
            <img src={img} className="rounded-lg"/>
            <h2 className="text-3xl font-bold my-3">{service_name}</h2>
            <p className="text-justify flex-1">{description}</p>
            <p className="font-medium text-xl mb-6">Service Charge: {service_charge}</p>
            <button className="btn bg-heading text-white">Details</button>
         </div>
      </div>
   );
};

export default ShowServices;