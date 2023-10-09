import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ShowBlog from "../../Component/ShowBlog/ShowBlog";
import Testimonial from "../../Component/Testimonial/Testimonial";
import Accordian from "../../Component/Accordian/Accordian";
import BlogPost from "../../Component/BlogPost/BlogPost";

const Blog = () => {
   const blogData = useLoaderData();
   return (
      <div className="mt-24 px-4">
         <Helmet>
            <title>Health Care || Blog</title>
         </Helmet>
         <h1 className="text-4xl text-center mb-4 font-bold">Latest News</h1>
         <p className="font-medium md:w-3/5 md:text-center mx-auto mb-12">Finding the right content type and topic for your blog is critical. The last thing you want is to spend hours and days writing a piece of content that doesn’t end up performing well.</p>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
               blogData.map(blog => <ShowBlog key={blog.id} blog={blog}></ShowBlog>)
            }
         </div>
         <Testimonial></Testimonial>
         <BlogPost></BlogPost>
         <Accordian></Accordian>
      </div>
   );
};

export default Blog;