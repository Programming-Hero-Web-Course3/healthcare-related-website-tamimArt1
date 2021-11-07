import { useForm } from 'react-hook-form';
import useFirebase from '../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const { emailPasswordSignUp, googleClient } = useFirebase();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    emailPasswordSignUp(data.email, data.password);
  };

  return (
    <div className='container mx-auto flex justify-center bg-gray-200 text-gray-800 my-16 rounded-2xl p-16'>
      <div className='p-4 border border-gray-500'>
        <h1 className='mb-4 text-4xl font-bold'>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='mb-4 p-4 text-xl rounded-md focus:outline-none'
            {...register('email')}
            placeholder='Email'
            type='email'
          />{' '}
          <br />
          <input
            className='mb-4 p-4 text-xl rounded-md focus:outline-none'
            {...register('password')}
            placeholder='Password'
            type='password'
          />
          <br />
          <input
            className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'
            type='submit'
          />
        </form>
        <h5 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          Already have an account? click below to go in login page
        </h5>
        <Link
          to='/login'
          className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md'
        >
          Login page
        </Link>
        <h3 style={{ marginTop: '2rem' }}>
          -------------------- Or Login with Google? -----------------
        </h3>
        <button
          className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg text-gray-200 rounded-md w-full mt-4'
          onClick={googleClient}
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
