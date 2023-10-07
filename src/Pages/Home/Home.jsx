/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import Slider from "../../Component/Slider/Slider";
import Solution from "../../Component/Solution/Solution";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Health Care || Home</title>
         </Helmet>
         <Banner></Banner>
         <Services></Services>
         <Solution></Solution>
         <Slider></Slider>
      </div>
   );
};

export default Home;