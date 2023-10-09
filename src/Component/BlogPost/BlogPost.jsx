import { BsArrowRight } from "react-icons/bs"
import moment from 'moment';


const BlogPost = () => {
   return (
      <div className="mt-36 px-4">
         <div className="grid md:gap-12 grid-cols-1 md:flex md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-3">
               <div className="pb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-8">Why do mental health conditions raise death risk?</h1>

                  <p className="mb-6 font-medium">Get tips on creating a well-balanced diet that promotes overall health and well-being. Learn about the importance of various nutrients and how to incorporate them into your meals.</p>

                  <p className="mb-6 font-medium">Quis imperdiet massa tincidunt nunc. Luctus venenatis lectus magna fringilla. Praesent semper feugiat nibh sed.</p>

                  <p className="mb-6 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit lectus.</p>

                  <p className="mb-6 font-medium">Quis imperdiet massa tincidunt nunc. Luctus venenatis lectus magna fringilla. Praesent semper feugiat nibh sed. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.</p>

                  <img src={`https://i.ibb.co/pyyhjLy/doctor.jpg`} className="mb-6" />

                  <p className="mb-6 font-medium">Nisl purus in mollis nunc sed id semper risus in. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. At ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>

                  <p className="mb-6 font-medium">Consequat semper viverra nam libero justo laoreet sit amet. Nisi scelerisque eu ultrices vitae auctor eu augue. Commodo ullamcorper a lacus vestibulum sed arcu non. Tortor posuere ac ut consequat semper viverra nam. Facilisis volutpat est velit egestas dui id ornare arcu odio. Cursus euismod quis viverra nibh.</p>

                  <p className="mb-6 font-medium">Pellentesque habitant morbi tristique senectus et netus et malesuada. Erat imperdiet sed euismod nisi porta. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.</p>
               </div>


               <div className="border-t-2 border-gray-300 pt-12"> 
                  <h2 className="font-bold text-3xl mb-12">Continue Reading</h2>
                  <div className="flex flex-col md:flex-row gap-12">
                     <div>
                        <img src={`https://i.ibb.co/BsfrWgt/doctor2.jpg`} />
                        <p className="font-medium my-3">{moment().format(" MMMM D YYYY")} Health</p>
                        <h3 className="font-bold text-2xl">Why do mental health conditions raise death risk?</h3>
                     </div>
                     <div>
                        <img src={`https://i.ibb.co/HKmwmFc/doctor3.jpg`} />
                        <p className="font-medium my-3">{moment().format(" MMMM D YYYY")} Health</p>
                        <h3 className="font-bold text-2xl">Why do mental health conditions raise death risk?</h3>
                     </div>
                  </div>
               </div>

            </div>
            <div className="mt-6">
               <h2 className="text-2xl font-bold mb-12">Breaking News</h2>
               <div className="mb-12">
                  <img src={`https://i.ibb.co/BsfrWgt/doctor2.jpg`} />
                  <p className="font-medium mt-6 mb-1">{moment().format(" MMMM D YYYY")} Health</p>
                  <h3 className="text-2xl font-bold">Why do mental health conditions raise death risk?</h3>
               </div>
               <div className="mb-12">
                  <img src={`https://i.ibb.co/HKmwmFc/doctor3.jpg`} />
                  <p className="font-medium mt-6 mb-1">{moment().format(" MMMM D YYYY")} Health</p>
                  <h3 className="text-2xl font-bold">Two personality types may be linked to Alzheimer’s pathology</h3>
               </div>
               <div className="mb-12">
                  <img src={`https://i.ibb.co/sHcbvtg/doctor5.jpg`} />
                  <p className="font-medium mt-6 mb-1">{moment().format(" MMMM D YYYY")} Health</p>
                  <h3 className="text-2xl font-bold">Environmental factors significant contributor to heart disease</h3>
               </div>
               <img src={`https://i.ibb.co/KKmjX2Y/icons8-love-50.png`} className="mx-auto md:ml-auto" />
               <h3 className="font-bold text-2xl mt-12 mb-6">All Services</h3>
               <p className="flex items-center gap-8 font-medium">Learn More <BsArrowRight /></p>
               <div className="bg-blue-300 p-8 mt-12">
                  <h2 className="font-bold text-2xl mb-6 mt-12">Find Doctors</h2>
                  <p className="flex items-center gap-8 font-medium">Learn More <BsArrowRight /></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogPost;