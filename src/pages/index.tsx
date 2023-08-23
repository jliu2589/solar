import Image from 'next/image';
import Header from '../components/header';

//accordian
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

//fetch data
import { client } from '@/lib/sanity';

export default function Home({ data }) {
  console.log(data);

  return (
    <main>
      <div className='bg-gray-800 h-screen'>
        <Header />
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
