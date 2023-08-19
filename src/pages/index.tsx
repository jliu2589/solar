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

export default function Home() {
  return (
    <main className=' h-screen'>
      <header className='top-0 border-b-2 border-gray-200 h-16  '>
        <nav className='flex justify-between max-w-7xl items items-center'>
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
            <div>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    What incentives are available?
                  </AccordionTrigger>
                  <AccordionContent>
                    To find out about the available incentives please fill out
                    our contact form.
                  </AccordionContent>
                  <AccordionTrigger>
                    What types of homes are suitable for solar panels
                  </AccordionTrigger>
                  <AccordionContent>
                    Homes suitable for solar panels depend on a variety of
                    factors. Perferred roofing includes southward facing roofs,
                    roofs angled 10-40%, and limited tree coverings.
                  </AccordionContent>
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
