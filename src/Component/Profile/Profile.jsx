/* eslint-disable react/prop-types */

const Profile = ({doctor}) => {
   const {image, name, specialty, education, experience, contact_details} = doctor
   return (
      <div className="border shadow-md rounded-lg p-4 flex flex-col md:h-[550x] lg:h-[480px]">
         <img src={image}  className="rounded-lg"/>
         <h2 className="text-3xl font-bold mt-4">{name}</h2>
         <p className="font-bold text-xl mt-2">Speciality: {specialty}</p>
         <p className="text-xl mt-1">Experience: {experience}</p>
         <p className="text-lg mt-1 flex-1">Education: {education}</p>
         <p className="text-lg">Contact: {contact_details.email}</p>
      </div>
   );
};

export default Profile;