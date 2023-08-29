import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      image: '/Incentives.jpg',
      title: 'Government Rebates',
      description:
        'Receive up to $5600 when you install solar panels on your home. Depending on your location, you may be eligible for additional funding.',
    },
    {
      image: '/GreenInitiatives.jpg',
      title: "Join Canada's Green Initiatives!",
      description:
        'Be one of the many proud Canadian homeowners who are helping our country reach its goal of net-zero emissions by 2050',
    },
    {
      image: '/SaveMoney.jpg',
      title: 'Save Money',
      description:
        'Did you know the excess energy you produce can be sold back to the hydro company? This is called Net Metering and it can save you hundreds of dollars a year!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <section className='my-10 relative'>
      <div className='flex justify-center items-center'>
        <h2 className='text-4xl italic text-white p-3 font-extrabold sm:mx-auto'>
          WHY GO SOLAR?
        </h2>
      </div>
      <button className='absolute left-0 top-1/2' onClick={goToPrevItem}>
        Previous
      </button>
      <button className='absolute right-0 top-1/2' onClick={goToNextItem}>
        Next
      </button>
      <div className='border border-green-500 rounded-3xl p-4 w-3/4 mx-auto my-10 h-1/2 w-1/2 flex sm:flex-row flex-col sm:gap-5'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className='rounded'
        >
          <div className='rounded'>
            <Image
              src={items[currentIndex].image}
              width={500}
              height={500}
              alt={items[currentIndex].title}
            />
          </div>
          <div className='p-2 mx-auto sm:w-1/2'>
            {items[currentIndex].title}

            {items[currentIndex].description}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
