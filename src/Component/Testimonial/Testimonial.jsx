
const Testimonial = () => {
   return (
      <div className="mt-28">
         <h1 className="text-4xl text-center mb-4 font-bold">Testimonials</h1>
         <p className="md:w-3/5 md:text-center mx-auto">Discover skincare routines and tips to maintain healthy and radiant skin. Learn about proper cleansing, moisturizing, and protection from environmental factors.</p>
         <div className="flex mt-12 gap-12 flex-col sm:flex-row">
            <div className="border shadow-md rounded-lg p-5">
               <div className="flex flex-1 flex-col md:flex-row items-center">
                  <img src={`https://i.ibb.co/MSGYMT5/austin-distel-7b-Mdi-Iqz-J4-unsplash.jpg`} className="w-24 rounded-full mr-4" />
                  <h4 className="font-bold text-xl mr-3 mt-2">Josh Brollins</h4>
                  <p>mywebsite.com</p>
               </div>
               <p className="mt-4 md:w-3/4">Explore effective strategies for managing stress and maintaining good mental health. Learn about relaxation techniques, mindfulness, and seeking professional help when needed.</p>
            </div>
            <div className="border shadow-md rounded-lg p-5">
               <div className="flex flex-1 flex-col md:flex-row items-center">
                  <img src={`https://i.ibb.co/JHt7QsJ/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg`} className="w-24 rounded-full mr-4" />
                  <h4 className="font-bold text-xl mr-3">Dave inaue</h4>
                  <p>yourwebsite.com</p>
               </div>
               <p className="mt-4">Learn about the symptoms, causes, and treatments for the common cold, a prevalent viral infection affecting millions every year.</p>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;