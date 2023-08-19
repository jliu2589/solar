import Image from 'next/image';
import Header from '../components/header';
import Showcase from '../components/showcase';
import Pricing from '../components/pricing';

//header
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

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
  return (
    <main className=' h-screen'>
      <header className='top-0 border-b-2 border-gray-200 h-16  '>
        <nav className='flex justify-between max-w-7xl items items-center mx-auto'>
          <div>Logo</div>
          <ul className='flex space-x-7'>
            <li>About Us</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <div>
        <div className='flex justify-between max-w-7xl items items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold text-gray-800'>
              We are a modern digital agency
            </h1>
            <div></div>
            <div></div>
          </div>
        </div>
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
