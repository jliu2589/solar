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
    <div className='bg-gradient-to-r from-gray-500 to-white border border-gray-200 h-16 rounded-lg'>
      <header className=' '>
        <nav className='flex justify-between  items items-center'>
          <div className=''>
            <Image src='/logo.png' alt='logo' width={100} height={30} />
          </div>
          <div className='pr-4 pt-4'>
            <ul className='hidden sm:flex space-x-7'>
              <li className='hover:underline hover:cursor-pointer'>About Us</li>
              <li className='hover:underline hover:cursor-pointer'>Pricing</li>
              <li className='hover:underline hover:cursor-pointer'>FAQ</li>
              <li className='hover:underline hover:cursor-pointer'>
                Contact Us
              </li>
            </ul>
            <button
              className='block sm:hidden my-auto '
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling to the document
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <FaBars size={35} />
            </button>
          </div>
        </nav>
      </header>
      <div className='relative'>
        {isMobileMenuOpen && (
          <div className='absolute border border-black bg-white z-100 w-full'>
            <ul>
              <li className='text-center border-b  py-2'>About Us</li>
              <li className='text-center border-b  py-2'>Pricing</li>
              <li className='text-center border-b  py-2'>FAQ</li>
              <li className='text-center py-2'>Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
