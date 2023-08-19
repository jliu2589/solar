import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out max-w-7xl mx-auto px-4 rounded-lg shadow-lg`}
    >
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div className='text-2xl font-bold'>Solar Solutions</div>
        <nav className='hidden md:flex space-x-4'>
          <div className='hover:text-yellow-300 cursor-pointer'>About Us</div>
          <div className='hover:text-yellow-300 cursor-pointer'>Pricing</div>
          <div className='hover:text-yellow-300 cursor-pointer'>FAQ</div>
          <div className='hover:text-yellow-300 cursor-pointer'>Contact Us</div>
        </nav>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <FaBars size={20} />
          </button>
          {menuOpen && (
            <div className='absolute z-10 top-16 right-0 mt-2 bg-blue-800 border border-white rounded shadow-lg'>
              <ul className='p-4 space-y-2'>
                <div className='hover:text-yellow-300 cursor-pointer'>
                  About Us
                </div>
                <div className='hover:text-yellow-300 cursor-pointer'>
                  Pricing
                </div>
                <div className='hover:text-yellow-300 cursor-pointer'>FAQ</div>
                <div className='hover:text-yellow-300 cursor-pointer'>
                  Contact Us
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
