
const Technology = () => {
   return (
      <div className="mt-36 px-4">
         <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
               <h4 className="font-medium text-xl mb-6">FACILITIES</h4>
               <h1 className="font-bold text-5xl mb-12">Modern Medical Technology</h1>
               <p className="mb-8 md:w-3/5">Get tips on creating a well-balanced diet that promotes overall health and well-being. Learn about the importance of various nutrients and how to incorporate them into your meals.</p>
               <button className="bg-heading text-white px-12 py-4">Virtual Tour</button>
            </div>
            <div className="flex-1 relative">
               <img src={`https://i.ibb.co/pyyhjLy/doctor.jpg`} />
               <div className="absolute flex gap-2 -bottom-20 md:bottom-20 lg:-bottom-20 md:-left-24">
                  <div className="bg-blue-300 p-6 md:p-12">
                     <h2 className="font-bold text-6xl">75+</h2>
                     <p className="font-medium">Rooms Available</p>
                  </div>
                  <div className="bg-blue-300 p-6 md:p-12">
                     <h2 className="font-bold text-6xl">63</h2>
                     <p className="font-medium">Medical Staffs</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Technology;