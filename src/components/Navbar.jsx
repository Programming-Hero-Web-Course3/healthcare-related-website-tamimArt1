import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container mx-auto rounded-2xl bg-gray-200 px-16 py-4 flex justify-between items-center mt-12 z-10'>
      <div className='flex items-center'>
        <FaTooth className='text-2xl text-pink-600 animate-bounce' />
        <h1 className='ml-2 text-3xl text-blue-500 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600'>
          Happy Teeth
        </h1>
      </div>
      <div className='flex text-xl text-blue-800'>
        <Link to='/' className='px-2 hover:animate-pulse font-medium'>
          Home
        </Link>
        <Link to='/services' className='px-2 hover:animate-pulse font-medium'>
          Services
        </Link>
        <Link to='/doctors' className='px-2 hover:animate-pulse font-medium'>
          Doctors
        </Link>
        <Link to='/about' className='px-2 hover:animate-pulse font-medium'>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
