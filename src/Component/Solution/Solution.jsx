/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Solution = () => {

   useEffect(() => {
      AOS.init({
         duration: 800,
         easing: 'ease-in-out',
         once: false,
         mirror: false,
         offset: 320,
      });
   }, []);


   return (
      <div className="mt-36 px-4">
         <h2 className="text-4xl text-center mb-12 font-bold">A Proven Healthcare Data Solution</h2>

         <div className="flex flex-col md:flex-row items-center gap-12" data-aos="zoom-in">
            <div className="flex-1">
               <img src={`https://i.ibb.co/MSGYMT5/austin-distel-7b-Mdi-Iqz-J4-unsplash.jpg`} className='rounded-lg' />
            </div>

            <div className="flex-1">
               <p className=' font-medium text-2xl mb-12 pr-10'>Much more than just an innovative idea, Hart's innovative platform was successfully developed and tested with a 3-region, 15 hospital, $5 billion health system</p>
               <p className='text-heading text-center md:text-left font-medium text-2xl mb-8'>Beyond this, it was validated accorss:</p>
               <div className='flex justify-center md:justify-start gap-6 md:gap-12'>
                  <div className='text-center'>
                     <h3 className='text-heading text-6xl font-bold'>5</h3>
                     <p className='text-heading font-medium'>unique EHRs</p>
                  </div>
                  <div className='text-center'>
                     <h3 className='text-heading text-6xl font-bold'>4K</h3>
                     <p className='text-heading font-medium'>affiliates</p>
                  </div>
                  <div className='text-center'>
                     <h3 className='text-heading text-6xl font-bold'>350</h3>
                     <p className='text-heading font-medium'>clients</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Solution;