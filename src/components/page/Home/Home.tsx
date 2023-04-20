import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTrans from 'utils/useTrans';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { paramsSwiper2, paramsSwiper3 } from 'utils/constants';
import { Button, Form } from 'antd';
import InputForm from '@common/InputForm/InputForm';

const FAKE_DATA_1 = [
  { img: '/imgs/bgr_3.jpg', title: 'Painted wolves safari with award-winning photographer Nick Dye, Painted wolves safari with award-winning photographer Nick Dye', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.' },
  { img: '/imgs/bgr_2.jpg', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.' },
  { img: '/imgs/bgr_3.jpg', title: 'Painted wolves safari with award-winning photographer Nick Dye', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.' },
  { img: '/imgs/bgr_2.jpg', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.' },
]

const Home = () => {
  const i18n = useTrans();

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, [])

  const onSubmitNewsLetter = () => {

  }

  return (
    <div className='home'>
      <section className='text-white pt-16 lg:pt-40 bg-primary-green'>
        <div className='container'>
          <div className='grid grid-cols-2'>
            <p className='text-2xl md:text-3xl lg:text-6xl font-apocBold text-second-green 2xl:mb-96 lg:mb-36 mobile:px-4' data-aos="fade-right">
              No two<br />journeys have<br /> ever been the<br /> same
            </p>
            <div className='relative w-full'>
              <img src="/imgs/bgr_3.jpg" className='absolute w-full h-auto' alt="" data-aos="fade-left" />
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='grid md:grid-cols-2 mobile:text-xs mobile:mt-8 mobile:px-3 mobile:text-center'>
          <p className='text-primary-green 2xl:w-3/4 lg:w-5/6 mt-8' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis. </p>
        </div>
      </div>

      <section className='container mt-6 md:mt-32'>
        <div className='flex'>
          <img src="/imgs/bgr_2.jpg" className='h-auto w-7/12 mx-auto' alt="bgr2" data-aos="fade-right" />
          <div className='text-black w-5/12 ml-4 lg:ml-12'>
            <p className='text-3xl lg:text-5xl font-apocBold' data-aos="fade-left">
              No two journeys have ever been the same
            </p>
          </div>
        </div>
      </section>
      <img src="/imgs/banner1.png" className='h-auto w-full mobile:mt-5' alt="banner1" />

      <section className='bg-white pb-10'>
        <div className='container'>
          <div className='lg:flex justify-between items-center border-b border-solid border-black pb-2 mobile:px-2'>
            <h3 className='text-3xl lg:text-5xl font-apocBold mb-0' data-aos="fade-left">Enquire</h3>
            <p className='xl:w-1/3 lg:w-1/2 mb-0 mobile:text-xs' data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.
            </p>
            <button className='flex-center mt-2 lg:mt-0 px-3 py-1 lg:px-6 lg:py-2.5 rounded-full outline-none border-black border border-solid hover-raise' data-aos="fade-right">
              <span>Submit</span>
              <FontAwesomeIcon icon={faChevronRight} className='w-1.5 ml-3' />
            </button>
          </div>

          <div className='mt-5 lg:mt-10'>
            <Swiper {...paramsSwiper2}>
              {FAKE_DATA_1.map(item => (
                <SwiperSlide key={item.title}>
                  <img src={item.img} className='w-full pointer' alt='' data-aos="fade-up" />
                  <p className='font-apocBold text-lg lg:text-3xl my-2 lg:my-5 hover:text-primary-green pointer line-clamp-2 h-13 lg:h-20'>{item.title}</p>
                  <p className='line-clamp-3 mobile:text-xs'>{item.des}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className='pt-5 bg-primary-gray'>
        <div className='container'>
          <p className='text-center'>Your Journey</p>
          <div className='xl:w-1/3 mb-10 mx-auto text-center'>
            <h3 className='text-3xl lg:text-5xl font-apocBold mb-8' data-aos="fade-left">No two journeys have<br /> ever been the same</h3>
            <p className='mobile:text-xs mobile:px-2' data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue lorem arcu, nec iaculis dui efficitur sit amet. Duis ultrices lobortis mauris in vehicula. Vestibulum ante ipsum primis.</p>
          </div>

          <Swiper {...paramsSwiper3}>
            {FAKE_DATA_1.map(item => (
              <SwiperSlide key={item.title}>
                <img src={item.img} className='w-full pointer' alt='' data-aos="fade-up" />
                <p className='font-apocBold text-lg lg:text-3xl my-2 lg:my-5 hover:text-primary-green pointer line-clamp-2 h-13 lg:h-20'>{item.title}</p>
                <p className='line-clamp-3 mobile:text-xs'>{item.des}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='bg-white pb-10 pt-10 lg:pt-16'>
        <div className='container'>
          <div className='lg:flex justify-between items-center border-b border-solid border-black pb-2 mobile:px-2'>
            <h3 className='text-lg lg:text-3xl mb-0' data-aos="fade-right">Newsletter</h3>
            <Form onFinish={onSubmitNewsLetter} className='flex'>
              <InputForm
                name="name" isRequired
                placeholder='Name' customClass='mb-0'
                customInput='border-none'
              />
              <InputForm
                name="email" isRequired
                placeholder='Email' customClass='mb-0 border-none'
              />
              <Button className='flex-center mt-2 lg:mt-0 px-3 py-1 lg:px-6 lg:py-5 rounded-full outline-none border-black border border-solid hover-raise'
                data-aos="fade-right" htmlType='submit'>
                <span>Submit</span>
                <FontAwesomeIcon icon={faChevronRight} className='w-1.5 ml-3' />
              </Button>
            </Form>
          </div>
        </div>
      </section>


    </div>
  );
}


export default React.memo(Home);
