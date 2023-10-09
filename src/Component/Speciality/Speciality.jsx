import { useEffect, useState } from "react";

const Speciality = () => {
   const [speciality, setSpeciality] = useState([]);
   useEffect(()=>{
      fetch('/special.json')
      .then(res => res.json())
      .then(data => setSpeciality(data))
   },[])
   console.log(speciality)
   return (
      <div className="mt-36 px-4">
         <h1 className="text-3xl sm:text-4xl sm:text-center mb-4 font-bold uppercase">What Special in Health-Care</h1>
         <p className="font-medium sm:w-3/5 sm:text-center text-xl mx-auto mb-12">We provide the best service for your health.</p>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {
               speciality.map(obj => (
                  <div key={obj.id} className="text-center border shadow-md py-4 px-6 rounded-lg">
                     <img src={obj.img} className="mx-auto"/>
                     <h4 className="text-xl font-bold mt-3 mb-5">{obj.title}</h4>
                     <p>{obj.description}</p>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Speciality;