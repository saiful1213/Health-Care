
const Appointment = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200 mt-28 md:mt-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left flex flex-col md:flex-row">
                  <div className="md:px-4">
                     <h1 className="text-3xl md:w-4/5 font-bold"> A selection of doctors who blog on health and wellbeing.</h1>
                     <p className="py-6">A selection of doctors who blog on health and wellbeing. The act of writing/blogging itself is a healthy outlet to share experiences, thoughts and self-care strategies for busy medical professionals.</p>
                  </div>
                  <img src={`https://i.ibb.co/MSGYMT5/austin-distel-7b-Mdi-Iqz-J4-unsplash.jpg`} className="md:w-2/4" />
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                     <h1 className="font-bold text-xl mb-6">Book an Appointment</h1>
                     <div className="form-control">
                        <input type="name" placeholder="Full Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <input type="number" placeholder="Phone Number" className="input input-bordered" required />
                     </div>
                     <select className="select w-full max-w-xs input input-bordered">
                        <option disabled selected>Select Doctor</option>
                        <option>Dr. Jessica Smith</option>
                        <option>Dr. David Anderson</option>
                        <option>Dr. Brian Taylor</option>
                        <option>Dr. Sarah Clark</option>
                        <option>Dr. Michael Lee</option>
                     </select>
                     <div className="form-control">
                        <input type="date" placeholder="Select Date" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary capitalize">Book Now</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Appointment;