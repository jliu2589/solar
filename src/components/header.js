import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { BiX } from 'react-icons/bi';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='top-10 relative z-10 bg-white w-2/3 mx-auto border rounded-xl'>
      <header className=''>
        <nav className='flex flex-row items-center justify-between'>
          <div className='flex flex-row'>
            <Image src='/logo.png' width={100} height={100} alt='logo' />
            <div className='bottom-2 text-6xl py-1 sm:hidden'>Solar Shift</div>
          </div>
          <ul className='flex row gap-3 pr-5'>
            <li className='hover:underline hover:cursor-pointer'>About Us</li>
            <li className='hover:underline hover:cursor-pointer'>Pricing</li>
            <li className='hover:underline hover:cursor-pointer'>FAQ</li>
            <li className='hover:underline hover:cursor-pointer'>Contact Us</li>
          </ul>
          {/* Show the hamburger icon only on mobile */}
          <button
            className='block sm:hidden'
            onClick={(e) => {
              e.stopPropagation();
              toggleMobileMenu();
            }}
          >
            {isMobileMenuOpen ? <BiX /> : <FaBars />}
          </button>
        </nav>
      </header>
      {/* Show the mobile menu when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div
          className='absolute border border-black bg-white z-10 w-full'
          ref={dropdownRef}
        >
          <ul>
            <li className='text-center border-b py-2'>About Us</li>
            <li className='text-center border-b py-2'>Pricing</li>
            <li className='text-center border-b py-2'>FAQ</li>
            <li className='text-center py-2'>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
