import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Profile from "../../Component/Profile/Profile";

const Doctors = () => {
   const profile = useLoaderData();
   return (
      <div className="mt-28 px-4">
         <Helmet>
            <title>Health Care || Doctors</title>
         </Helmet>

         <h1 className="text-4xl text-center mb-12 font-bold">Doctor Profile</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
               profile.map(doctor => <Profile key={doctor.id} doctor={doctor}></Profile>)
            }
         </div>

      </div>
   );
};

export default Doctors;