import { Link } from 'react-router-dom';

const TransparentCard = ({ item, btn }) => {
  const { image, title, desc, id } = item;
  return (
    <div className='border h-auto w-[95%] lg:w-full border-gray-400 bg-transparent hover:bg-blue-700 p-8 flex flex-col justify-self-center text-center lg:text-left items-center lg:items-start justify-between rounded-2xl'>
      <img src={image} alt='teeth' />
      <h1 className='text-3xl mt-4 lg:mt-0'>{title}</h1>
      <p>{desc}</p>
      {btn && (
        <Link to={`/service/${id}`}>
          <button className='bg-pink-600 px-8 py-2 mt-4 lg:mt-0 cursor-pointer hover:bg-pink-800 text-lg'>
            Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default TransparentCard;
