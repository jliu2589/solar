import Image from 'next/image';
import Header from '../components/header';
import { FaBars } from 'react-icons/fa';
import {
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { MdOutlineSms } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

//fetch data
import { client } from '@/lib/sanity';

export default function Home({ data }) {
  console.log(data);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);

    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //carosel

  return (
    <main className='h-full bg-gray-800'>
      <div className='h-full'>
        <div>
          <header className='fixed w-full top-2 h-20 z-1010 bg-transparent'>
            <div className='flex flex-row justify-around mx-auto items-center bg-white border rounded-3xl shadow-lg w-5/6'>
              <div className='relative'>
                <div className='hover:cursor-pointer'>
                  <Link href='/'>
                    <Image src='/logo.png' width={128} height={46} alt='logo' />
                  </Link>
                </div>
                <div className='hover:cursor-pointer absolute top-0'>
                  <Link href='/'>
                    <Image
                      src='/solarshiftblack.png'
                      width={512}
                      height={160}
                      alt='Solar Shift'
                    />
                  </Link>
                </div>
              </div>
              <nav className='hidden sm:flex flex-row gap-3 pr-5'>
                <ul className=''>
                  <motion.a
                    className='hover:cursor-pointer'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => smoothScroll('AboutUs')}
                  >
                    About Us
                  </motion.a>
                </ul>
                <div className=''>
                  <motion.a
                    className='hover:cursor-pointer'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => smoothScroll('ContactUs')}
                  >
                    Contact Us
                  </motion.a>
                </div>
              </nav>

              <button className='sm:hidden pr-4' onClick={toggleMenu}>
                <FaBars className='text-xl transform scale-125' />
              </button>
            </div>
          </header>
          {showMenu && (
            <div className='fixed z-101 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black text-white opacity-70 '>
              <div className='flex flex-row justify-between'>
                <div className='ml-3 mt-3'>
                  <Image src='/logo.png' width={64} height={23} alt='logo' />
                </div>
                <button
                  onClick={toggleMenu}
                  className='border-4 p-2 mt-3 mr-3 border-[#39E991]'
                >
                  close
                </button>
              </div>
              <div className='bg-white h-1 w-1/2 mx-auto my-5 opacity-50 rounded-4xl'></div>
              <div className='flex flex-col items-center gap-10 mt-5'>
                <div>About Us</div>
                <div>Pricing</div>
                <div>FAQ</div>
              </div>
            </div>
          )}
        </div>

        <section id='Showcase' className='bg-gray-800 h-full'>
          <div
            className='bg-local bg-cover bg-center w-screen h-screen flex items-center justify-center text-white'
            style={{ backgroundImage: `url(/Showcase.jpg)` }}
          >
            <div className=''>
              <h2 className='text-6xl font-bold italic mb-10'>
                Going Solar has never been so easy!
              </h2>
              <p className=''>
                Discover government incentives that make going Solar more
                afforadable than ever!
              </p>
              <div className='flex justify-center items-center mt-20'>
                <motion.a
                  className='bg-orange-500 text-white p-5 rounded-2xl text-2xl hover:cursor-pointer font-bold italic'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => smoothScroll('ContactUs')}
                >
                  GET A FREE CONSULT
                </motion.a>
              </div>
            </div>
          </div>
        </section>
        <section className='my-10 '>
          <div className='flex justify-center items-center '>
            <h2 className='text-4xl italic text-white p-3 font-extrabold sm:mx-auto'>
              WHY GO SOLAR?
            </h2>
          </div>
          <div className='carousel-container '>
            <div
              className=' bg-repeat-x w-screen h-screen flex items-center justify-center text-white opacity-10 absolute'
              style={{ backgroundImage: `url(/logo.png)` }}
            ></div>
            <div className='border border-green-500 rounded-3xl p-4 w-3/4 mx-auto my-10 h-1/2 w-1/2 flex sm:flex-row flex-col sm:gap-5 '>
              <div className='rounded'>
                <Image
                  src={'/Incentives.jpg'}
                  width={500}
                  height={500}
                  alt='Government Rebates'
                />
              </div>
              <div className='p-2 mx-auto sm:w-1/2'>
                <h3 className='text-white item-center text-3xl mb-3 italic'>
                  Government Rebates
                </h3>
                <p className='text-white  item-center'>
                  Receive up to $5600 when you install solar panels on your
                  home. Depending on your location you may be eligible for
                  additional funding
                </p>
              </div>
            </div>
            <div className='border border-green-500 rounded-3xl p-4 w-3/4 mx-auto my-10 h-1/2 w-1/2 flex sm:flex-row flex-col sm:gap-5 '>
              <div className='rounded'>
                <Image
                  src={'/GreenInitiatives.jpg'}
                  width={500}
                  height={500}
                  alt='Green Initiatives'
                />
              </div>
              <div className='p-2 mx-auto sm:w-1/2'>
                <h3 className='text-white item-center text-3xl mb-3 italic'>
                  Join Canada's Green Initiatives!
                </h3>
                <p className='text-white item-center'>
                  Be one of the many pround Canadian homeowners who are helping
                  our country reach its goal of net-zero emissions by 2050
                </p>
              </div>
            </div>
            <div className='border border-green-500 rounded-3xl p-4 w-3/4 mx-auto my-10 h-1/2 w-1/2 flex sm:flex-row flex-col sm:gap-5 '>
              <div className='rounded'>
                <Image
                  src={'/SaveMoney.jpg'}
                  width={500}
                  height={500}
                  alt='Save Money'
                />
              </div>
              <div className='p-2 mx-auto sm:w-1/2'>
                <h3 className='text-white item-center text-3xl mb-3 italic'>
                  Save Money
                </h3>
                <p className='text-white  item-center'>
                  Did you know the excess energy you produce can be sold back to
                  the hydro company?
                  <br />
                  This is called Net Metering and it can save you hundreds of
                  dollars a year!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='AboutUs'>
          <div
            className='bg-local bg-cover bg-center w-screen h-screen  flex flex-col items-center justify-center text-black sm:items-start sm:justify-start'
            style={{ backgroundImage: `url(/Aboutus.jpg)` }}
          >
            <h2 className='text-5xl m-4 p-2 font-bold italic sm:text-center '>
              WHY US?
            </h2>
            <p className='m-4 p-2 sm:text-center'>
              Mission: To help us transition to sustainable energy one roof at a
              time!
            </p>
            <p className='m-4 p-2 sm:text-center'>
              Our goal is to make the transition to Solar as easy as possible.
            </p>
            <p className='m-4 p-2 sm:text-center'>
              Our team of experts will guide you through the process from start
              to finish.
            </p>
          </div>
        </section>

        <section
          id='ContactUs'
          className='bg-gray-800 my-5 flex flex-row justify-evenly items-center gap-10 mx-auto'
        >
          <div>
            <Image src='/ContactUs.jpg' width={640} height={360} alt='logo' />
          </div>
          <div>
            <h2 className='text-4xl italic font-bold text-white '>
              GET A FREE CONSULT NOW!
            </h2>
            <div className='text-white content-center flex flex-col gap-5 justify-center items-center'>
              <p className='p-5'>
                Our team at Solar Shift are eager to help you achieve your dream
                of going solar. If you share the same passion as we do, do not
                hesitate, contact us NOW!
              </p>
              <a
                href='tel:+18888888888'
                className='bg-blue-500 text-white text-2xl p-2 rounded'
              >
                Call Us
                <AiOutlinePhone className='inline-block text-3xl ml-2' />
              </a>
              <a
                href='sms:+18888888888'
                className='bg-green-500 text-white p-2 rounded text-2xl'
              >
                Text Us
                <MdOutlineSms className='inline-block text-3xl ml-2' />
              </a>
              <a
                href='mailto:email@example.com'
                className='bg-red-500 text-white p-2 rounded text-2xl'
              >
                Email Us
                <AiOutlineMail className='inline-block text-3xl ml-2' />
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className='flex flex-row bg-black text-white justify-evenly p-5 my-10 h-[200px]'>
            <div className='w-22 h-22'>
              <Image
                src='/solarshift.png'
                width={160}
                height={100}
                alt='logo'
              />
            </div>

            <div>
              <div>Address: 123 Fake St, Toronto Ontario</div>
              <div>Phone: 905-555-5555</div>
            </div>
            <div>
              <div>Email: Sales@solarshift.ca</div>
              <div>
                <AiOutlineInstagram className='text-xl transform scale-500' />
              </div>
              <div>Tearms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'post']`;

  const data = await client.fetch(query);

  return {
    props: { data },
  };
}
