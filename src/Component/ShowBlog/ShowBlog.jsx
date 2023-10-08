/* eslint-disable react/prop-types */
import {BsArrowRight} from "react-icons/bs"

const ShowBlog = ({blog}) => {
   const {img, title, description} = blog;
   return (
      <div className="border shadow-md rounded-lg p-4 flex flex-col md:h-[550x] lg:h-[500px]">
         <img src={img}  className="rounded-lg" />
         <h2 className="text-2xl font-bold mt-4">{title}</h2>
         <p className="text-justify flex-1 mt-2">{description}</p>
         <h5 className="flex items-center gap-4 text-xl font-medium text-heading cursor-pointer">Read More <BsArrowRight /></h5>
      </div>
   );
};

export default ShowBlog;