import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
   const { id } = useParams();
   const data = useLoaderData();
   const selectedCard = data.find(obj => obj.id == id)
   return (
      <div className="mt-36 px-4 min-h-[20vh]">
         <Helmet>
            <title>Health Care || Service Details</title>
         </Helmet>
         {
            selectedCard ? <div>
               <h1 className="text-4xl text-center mb-12 font-bold">Service Details</h1>
               <div className="border shadow-md rounded-lg p-4 flex flex-col md:w-1/2 mx-auto">
                  <img src={selectedCard?.img} className="rounded-lg" />
                  <h2 className="text-3xl font-bold my-3">{selectedCard?.service_name}</h2>
                  <p className="text-justify flex-1">{selectedCard?.description}</p>
                  <p className="font-medium text-xl mt-3">Service Charge: {selectedCard?.service_charge}</p>
               </div>
            </div> : <p className="text-2xl font-bold text-center md:w-1/2 mx-auto">No data available here!!  You should click on details button in home page. Then you will see details of the service</p>
         }
      </div>
   );
};

export default ServiceDetails;