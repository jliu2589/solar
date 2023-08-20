import Image from 'next/image';
import Header from '../components/header';
import Showcase from '../components/showcase';
import Pricing from '../components/pricing';
import { FaBars } from 'react-icons/fa';

//header
import { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';

//accordian
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { get } from 'http';

//fetch data
import { client } from '@/lib/sanity';

export default function Home({ data }) {
  console.log(data);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <main className=' h-screen'>
      <header className='top-0 border-b-2 border-gray-200 h-16  '>
        <nav className='flex justify-between max-w-7xl items items-center mx-auto'>
          <div>Logo</div>
          <div className='pr-4 pt-4'>
            <ul className='hidden sm:flex space-x-7'>
              <li>About Us</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
            <button
              className='block sm:hidden'
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling to the document
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>
      <div className='relative'>
        {isMobileMenuOpen && (
          <div className='absolute border border-black bg-white z-10 w-full'>
            <ul>
              <li className='text-center border-b'>About Us</li>
              <li className='text-center border-b'>Pricing</li>
              <li className='text-center border-b'>FAQ</li>
              <li className='text-center'>Contact Us</li>
            </ul>
          </div>
        )}
      </div>
      <div>showcase</div>
      <div>Solar Panels </div>
      <div>Why Us</div>
      <div>contact us</div>
      <div>faq</div>
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
