import { Link } from 'react-router-dom';

const TransparentCard = ({ item, btn }) => {
  const { image, title, desc, id } = item;
  return (
    <div className='border h-[450px] w-96 border-gray-400 bg-transparent hover:bg-blue-700 p-8 flex flex-col items-start justify-between'>
      <img src={image} alt='teeth' />
      <h1 className='text-3xl'>{title}</h1>
      <p>{desc}</p>
      {btn && (
        <Link to={`/service/${id}`}>
          <button className='bg-pink-600 px-8 py-2 cursor-pointer hover:bg-pink-800 text-lg'>
            Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default TransparentCard;
