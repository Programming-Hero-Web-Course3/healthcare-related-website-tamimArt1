const Card = ({ item }) => {
  const { image, title, desc } = item;
  return (
    <div className='bg-white h-[400px] p-4 rounded-xl shadow-2xl flex flex-col justify-center items-center text-center divide-y-2 divide-blue-300 transition-all duration-500 transform hover:-translate-y-6'>
      <img src={image} className='py-4' alt='image' />
      <h1 className='text-3xl py-4 font-light'>{title}</h1>
      <p className='text-lg text-blue-700 py-4'>{desc}</p>
    </div>
  );
};

export default Card;
