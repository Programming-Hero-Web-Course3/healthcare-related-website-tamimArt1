const Home = () => {
  return (
    <div className='container mx-auto my-8 min-h-[60vh] grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col justify-center items-start text-gray-200'>
        <p className='text-4xl font-light'>Better Life Through</p>
        <p className='text-6xl mt-4 font-semibold'>Better Dentistry</p>
        <p className='text-lg mt-8'>
          Join us to a fun and friendly dental environment. Our professionals
          are working so hard to see smile on your face that you deserve! We are
          dedicated about our duties.
        </p>
        <div className='flex mt-8'>
          <button className='px-8 rounded-sm cursor-pointer py-4 bg-pink-600 text-white text-lg hover:bg-gray-200 hover:text-gray-700 transition-all duration-700 ease-in-out font-semibold'>
            Appointment
          </button>
          <button className='ml-2 px-8 rounded-sm cursor-pointer border border-gray-200 py-4 bg-transparent text-gray-200 text-lg hover:bg-pink-600 hover:border-none hover:text-gray-200 transition-all duration-700 ease-in-out font-semibold'>
            Learn More
          </button>
        </div>
      </div>
      <div className='flex justify-end items-center'>
        <img
          className='w-9/12 opacity-90 rounded-full animate-pulse hover:scale-105'
          src='https://i.gifer.com/9P3z.gif'
          alt='tooth'
        />
      </div>
    </div>
  );
};

export default Home;
