import { useEffect, useState } from "react";
import ShowServices from "../ShowServices/ShowServices";

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch('/data.json')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   return (
      <div className="mt-28 px-4">
         <h1 className="text-4xl text-center mb-12 font-bold">Professional Services</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
               services.map(service => <ShowServices key={service.id} service={service}></ShowServices>)
            }
         </div>
      </div>
   );
};

export default Services;