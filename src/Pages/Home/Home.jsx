/* eslint-disable react/no-unescaped-entities */

import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import Slider from "../../Component/Slider/Slider";
import Solution from "../../Component/Solution/Solution";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <Solution></Solution>
         <Slider></Slider>
      </div>
   );
};

export default Home;