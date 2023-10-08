
const Registration = () => {
   return (
      <div className="mt-28 px-4">
         <h4 className="text-xl font-semibold text-center mb-8">MEDICAL PROCESS</h4>
         <h2 className="text-4xl text-center mb-6 font-bold">Simple Registration Process</h2>
         <p className="md:w-3/4 text-center mx-auto mb-16">Learn about the symptoms, causes, and treatments for the common cold, a prevalent viral infection affecting millions every year.</p>
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <img src={`https://i.ibb.co/xMc6XVg/national-cancer-institute-J-993su-Zjc0-unsplash-1.jpg`} />
            </div>
            <div className="flex-1 md:p-5">
               <div className="flex flex-col md:flex-row gap-8 mb-8 text-center md:text-left">
                  <p className="text-4xl font-bold text-gray-400">1.</p>
                  <div>
                     <h3 className="font-bold text-3xl">Schedule an appointment</h3>
                     <p className="mx-auto md:mx-0 lg:w-4/5 mt-3">Get tips on creating a well-balanced diet that promotes overall health and well-being.</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 mb-8 text-center md:text-left">
                  <p className="text-4xl font-bold text-gray-400">2.</p>
                  <div>
                     <h3 className="font-bold text-3xl">Confirm medical record</h3>
                     <p className="mx-auto md:mx-0 lg:w-4/5 mt-3">Get tips on creating a well-balanced diet that promotes overall health and well-being.</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                  <p className="text-4xl font-bold text-gray-400">3.</p>
                  <div>
                     <h3 className="font-bold text-3xl">Clinical examination</h3>
                     <p className="mx-auto md:mx-0 lg:w-4/5 mt-3">Get tips on creating a well-balanced diet that promotes overall health and well-being.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Registration;