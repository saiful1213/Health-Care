import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Profile from "../../Component/Profile/Profile";
import Appointment from "../../Component/Appointment/Appointment";
import Speciality from "../../Component/Speciality/Speciality";
import Registration from "../../Component/Registration/Registration";

const Doctors = () => {
   const profile = useLoaderData();
   return (
      <div className="mt-28 px-4">
         <Helmet>
            <title>Health Care || Doctors</title>
         </Helmet>

         <h1 className="text-4xl text-center mb-4 font-bold">Meet Our Doctors</h1>
         <p className="font-medium w-3/5 text-center mx-auto mb-12">A selection of doctors who blog on health and wellbeing. The act of writing/blogging itself is a healthy outlet to share experiences, thoughts and self-care strategies for busy medical professionals.</p>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
               profile.map(doctor => <Profile key={doctor.id} doctor={doctor}></Profile>)
            }
         </div>
         
         <Appointment></Appointment>
         <Speciality></Speciality>
         <Registration></Registration>
      </div>
   );
};

export default Doctors;