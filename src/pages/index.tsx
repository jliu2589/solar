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
    <main className=' h-screen max-w-5xl mx-auto'>
      <div className='my-5'>
        <Header />
      </div>
      <div className='my-3 mx-2'>
        <h1 className='items-center'>Shift into Solar Energy</h1>
        <h2>
          We are the #1 installers of Solar Panels in the GTA. Find out how you
          can shift into Solar!
        </h2>
        <Button variant='outline' size='sm'>
          Contact Us
        </Button>
      </div>
      <div>Solar Panels </div>
      <div>Why Us</div>
      <div>
        <h2>Contact Us</h2>
        <p>Get in touch with us today!</p>
      </div>
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
