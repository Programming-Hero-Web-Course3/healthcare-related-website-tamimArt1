const data = [
  {
    id: 1,
    image: 'https://img.icons8.com/fluency/48/000000/filled-like.png',
    title: 'Care',
    desc: 'Caring is our top most priority for our patients',
  },
  {
    id: 2,
    image:
      'https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-love-womens-day-wanicon-lineal-color-wanicon.png',
    title: 'Consolation',
    desc: 'Consolation is our second most priority',
  },
  {
    id: 3,
    image:
      'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-love-love-moment-photo3ideastudio-lineal-color-photo3ideastudio.png',
    title: 'Familiarity',
    desc: 'Our big plus point is our familiarity',
  },
];

const About = () => {
  return (
    <div className='container mx-auto mt-20'>
      <h1 className='text-5xl text-pink-500 text-center font-bold my-8'>
        About Us
      </h1>
      <div className='bg-gray-200 py-32 px-32 rounded-2xl mx-auto'>
        <h1 className='text-4xl text-gray-800'>Our Dental Practice</h1>
        <p className='text-xl text-gray-600 mt-8'>
          Since 1998, Donto Dentistry has been proud to combine modern
          techniques and high-tech equipment. Dr. John Dae, Micha and his team
          deliver a personalized and comfortable dental care experience unlike
          any other Mason dentist.
        </p>
      </div>
      <div className='text-center py-32 px-32 rounded-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-pink-500'>
          Patient Focused Approach
        </h1>
        <div className='mt-12 grid gap-4 grid-cols-1 lg:grid-cols-3 text-gray-200'>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card({ item }) {
  const { image, title, desc } = item;
  return (
    <div className='border h-auto w-[300px] lg:w-full border-gray-400 bg-transparent hover:bg-blue-700 p-8 mt-4 lg:mt-0 flex flex-col justify-self-center text-center lg:text-left items-center lg:items-start justify-between rounded-2xl'>
      <img src={image} alt='teeth' />
      <h1 className='text-3xl mt-4 lg:mt-0'>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default About;
