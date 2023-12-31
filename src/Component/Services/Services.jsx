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
      <div className="mt-36 px-4">
         <h2 className="text-4xl text-center mb-12 font-bold">Proffessional Services</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
               services.map(service => <ShowServices key={service.id} service={service}></ShowServices>)
            }
         </div>
      </div>
   );
};

export default Services;