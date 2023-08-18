import Image from 'next/image';
import Header from '../components/header';
import Showcase from '../components/showcase';

export default function Home() {
  return (
    <main className='bg-gradient-to-b  from-[#202002] to-[#15162c] text-white h-screen'>
      <Header />
      <Showcase />
    </main>
  );
}
