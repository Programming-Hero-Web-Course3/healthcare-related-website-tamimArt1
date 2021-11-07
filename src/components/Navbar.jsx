import { useAtom } from 'jotai';
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { userInfoAtom } from '../store';

const Navbar = () => {
  const [user] = useAtom(userInfoAtom);
  const { logOut } = useFirebase();
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
      <div>
        {user?.email ? (
          <span className='text-2xl text-gray-600 mr-2'>{user.email}</span>
        ) : (
          <span></span>
        )}
        {user?.email ? (
          <button
            className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'
            onClick={logOut}
          >
            Logout
          </button>
        ) : (
          <Link to='/login'>
            <button className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
