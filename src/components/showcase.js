import Image from 'next/image';

function Showcase() {
  return (
    <div className='max-w-7xl mx-auto h-96 lg:h-[600px] relative bg-white bg-opacity-90 rounded-lg shadow-lg animate-slideInFromLeft'>
      <Image
        src='/showcase.jpg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt='Showcase Image'
        className='absolute'
      />
      <div className='absolute inset-0 p-6 flex justify-start items-start'>
        <div className='bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-3/5 animate-slideInFromRight'>
          <div className='text-black text-base text-opacity-90'>
            Explore{' '}
            <span className='text-green-500 text-lg font-semibold'>
              Government Subsidies
            </span>{' '}
            and Secure Your Free Solar Consultation Today!
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 p-6 animate-bounceOnce'>
        <button className='bg-orange-500 text-white px-6 py-3 rounded-md shadow-md'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Showcase;
