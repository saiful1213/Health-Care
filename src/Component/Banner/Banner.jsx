/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowRight } from "react-icons/ai"


const Banner = () => {
   return (
      <div>
         <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-36 px-4">
            <div>
               <h1 className="text-3xl lg:text-5xl font-bold  lg:w-5/6">Better Healthcare Data for Better Healthcare Outcomes</h1>
               <p className="font-medium mt-8 mb-5 lg:w-2/3">Hart's innovative data interoperability platform integrates multiple sources and data types into a seamless, unified healthcare resourece</p>
               <button className="bg-heading px-8 flex gap-3 items-center py-3 rounded-full text-white">
                  Let's Talk  <AiOutlineArrowRight className="text-2xl" /></button>
            </div>
            <div>
               <img src={`https://i.ibb.co/d2gn8pw/banner.jpg`} className="rounded-xl" />
            </div>
         </div>
      </div>
   );
};

export default Banner;