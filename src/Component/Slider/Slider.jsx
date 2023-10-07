/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Slider = () => {
   return (
      <div className='mt-36 px-4'>
         <h1 className="text-4xl text-center mb-16 font-bold">Doctor's Gallery</h1>
         <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            effect={'coverflow'}
            centeredSlides={true}
            loop={true}
            coverflowEffect={
               {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5
               }
            }
         >
            <SwiperSlide>
               <img src={`https://i.ibb.co/JHt7QsJ/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg`} className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={`https://i.ibb.co/BBPqXcH/care.jpg`} className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={`https://i.ibb.co/zSNMyg9/towfiqu-barbhuiya-Fs-VEqei-Ot-Po-unsplash.jpg`} className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={`https://i.ibb.co/jyf2VKh/marcelo-leal-6pc-GTJDuf6-M-unsplash.jpg`} className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={`https://i.ibb.co/qmkc9B4/lucas-vasques-9vn-ACv-X2748-unsplash.jpg`} className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={`https://i.ibb.co/zSNMyg9/towfiqu-barbhuiya-Fs-VEqei-Ot-Po-unsplash.jpg`} className='rounded-lg' />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Slider;