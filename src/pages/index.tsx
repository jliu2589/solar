import Image from 'next/image';
import Header from '../components/header';
import Showcase from '../components/showcase';
import Pricing from '../components/pricing';

export default function Home() {
  return (
    <main className=' text-black h-screen'>
      <header className='top-0 border-b-2 border-gray-200 h-16 '>
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
    </main>
  );
}
