import { useForm } from 'react-hook-form';
import useFirebase from '../hooks/useFirebase';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
  const { emailPasswordLogin, googleClient } = useFirebase();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, location);
  };

  return (
    <div className='container mx-auto flex justify-center bg-gray-200 text-gray-800 my-16 rounded-2xl p-16'>
      <div className='p-4 border border-gray-500 w-full'>
        <h1 className='mb-4 text-4xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='mb-4 p-4 md:text-xl rounded-md focus:outline-none w-full'
            {...register('email')}
            placeholder='Email'
            type='email'
          />
          <input
            className='mb-4 p-4 md:text-xl rounded-md focus:outline-none w-full'
            {...register('password')}
            placeholder='Password'
            type='password'
          />
          <input
            className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'
            type='submit'
          />
        </form>
        <h5 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          Don't have an account? click below to go in signup page
        </h5>
        <Link
          to='/signup'
          className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'
        >
          Signup page
        </Link>
        <h3 style={{ marginTop: '2rem' }}>Or Login with Google?</h3>
        <button
          className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md w-full mt-4'
          onClick={() => googleClient(location)}
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
