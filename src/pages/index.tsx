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
    <main>
      <div className='bg-gray-800 h-screen'>
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
        <section>
          <div
            className='bg-local bg-cover bg-center w-screen h-screen'
            style={{ backgroundImage: `url(/Showcase.jpg)` }}
          ></div>
        </section>
        <section>
          <div></div>
        </section>
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
