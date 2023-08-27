import Image from 'next/image';
import Header from '../components/header';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

//fetch data
import { client } from '@/lib/sanity';

export default function Home({ data }) {
  console.log(data);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className='h-full bg-gray-800'>
      <div className='h-full'>
        <div>
          <header className='fixed w-full top-2 h-16 z-100 bg-transparent'>
            <div className='flex flex-row justify-between mx-auto items-center bg-white border rounded-3xl shadow-lg w-5/6'>
              <div>
                <Image src='/logo.png' width={128} height={46} alt='logo' />
              </div>
              <nav className='hidden sm:block'>
                <ul className='flex flex-row space-x-7'>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </nav>
              <div className='hidden sm:block pr-4'>Contact Us</div>
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

        <section className='bg-gray-800 h-full'>
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
            </div>
          </div>
        </section>
        <section className='my-10 '>
          <div className='flex justify-center items-center '>
            <h2 className='text-4xl italic text-white p-3 font-extrabold sm:mx-auto'>
              WHY GO SOLAR?
            </h2>
          </div>
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
                Receive up to $5600 when you install solar panels on your home.
                Depending on your location you may be eligible for additional
                funding
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
              <p className='text-white  item-center'>
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
        </section>

        <section>
          <div
            className='bg-local bg-cover bg-center w-screen h-screen relative'
            style={{ backgroundImage: `url(/Aboutus.jpg)` }}
          >
            <div className='absolute top-20 left-20'>
              <h2 className='text-4xl mb-4'>Why us?</h2>
              <div className=''>
                <p className=''>
                  Mission: To help us transition to sustainable energy one roof
                  at a time!
                </p>
                <p>
                  Our goal is to make the transition to Solar as easy as
                  possible.
                </p>
                <p>
                  Our team of experts will guide you through the process from
                  start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gray-800 my-5'>
          <h2 className='p-5 text-4xl italic bg-orange-500 my-5'>
            Get a Free Consult Now!
          </h2>
          <div className='text-white content-center flex flex-col gap-5 justify-center items-center'>
            <p className='p-5'>
              Our team at Solar Shift are eager to help you achieve you dream of
              going solar. If you share the same passion as we do, do not
              hesitate, contact us NOW!
            </p>
            <div>
              <h3 className='bg-orange-500'>Email: </h3>
              <span>sales@SolarShift.ca</span>
            </div>
            <div>
              <h3 className='bg-orange-500'>Phone: </h3>
              <span>1-888-888-8888</span>
            </div>
          </div>
        </section>

        <footer>
          <div className='flex flex-row bg-black h-28 text-white justify-evenly'>
            <Image src='/logo.png' width={128} height={90} alt='logo' />
            <div>
              <div>Address: 123 Fake St, Toronto Ontario</div>
              <div>Phone: 905-555-5555</div>
            </div>
            <div>
              <div>Email: Sales@solarshift.ca</div>
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
