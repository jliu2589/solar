import Image from 'next/image';
import Header from '../components/header';
import Showcase from '../components/showcase';
import Pricing from '../components/pricing';

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

//showcase
import { Button } from '@/components/ui/button';

export default function Home({ data }) {
  console.log(data);

  return (
    <main className='relative bg-gray-800'>
      <div className='sticky top-6 z-10 rounded-2xl max-w-5xl left-1/2 transform -translate-x-1/4 bg-white h-16 p-10'>
        <header className=''>
          <div className=''>
            <nav className='flex flex-row justify-between'>
              <div>Logo</div>
              <ul className='flex flex-row gap-3'>
                <li>About Us</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <section className='relative h-[800px] w-full'>
        <Image
          src='/Showcase.jpg'
          layout='fill'
          objectFit='cover'
          alt='Showcase'
        />
      </section>

      <section className='mt-4'>Other Shit</section>
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

//old?
<main className='h-screen mx-auto relative'>
  {/* Showcase Image */}
  <div className='absolute inset-0 block'>
    <Image src='/Showcase.jpg' layout='fill' objectFit='cover' alt='Showcase' />
  </div>
  {/* Header */}
  <Header />
  {/* Content */}
  <div className='my-3 mx-2 relative z-10'>
    <h1 className='items-center'>Shift into Solar Energy</h1>
    <h2>
      We are the #1 installers of Solar Panels in the GTA. Find out how you can
      shift into Solar!
    </h2>
    <Button variant='outline' size='sm'>
      Contact Us
    </Button>
  </div>
  {/* Other Sections */}
  <div className='relative z-10'>
    <div className='bg-white py-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Solar Panels */}
        <div className='mb-8'>Solar Panels</div>
        {/* Why Us */}
        <div className='mb-8'>Why Us</div>
        {/* Contact Us */}
        <div className='mb-8'>
          <h2>Contact Us</h2>
          <p>Get in touch with us today!</p>
        </div>
        {/* FAQ */}
        <div className='mb-8'>FAQ</div>
      </div>
    </div>
  </div>
</main>;
