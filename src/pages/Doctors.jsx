import Card from '../components/Card';

const data = [
  {
    id: 1,
    image: 'https://donto-react.netlify.app/static/media/d2.c88fc8f8.png',
    title: 'David Howell',
    desc: 'Oral Surgeon',
  },
  {
    id: 2,
    image: 'https://donto-react.netlify.app/static/media/d1.904490fe.png',
    title: 'Mukit Hasan',
    desc: 'Oral Surgeon',
  },
  {
    id: 3,
    image: 'https://donto-react.netlify.app/static/media/d3.1e523b96.png',
    title: 'Salma Nasreen',
    desc: 'Oral Surgeon',
  },
  {
    id: 4,
    image: 'https://donto-react.netlify.app/static/media/d2.c88fc8f8.png',
    title: 'David Howell',
    desc: 'Oral Surgeon',
  },
  {
    id: 5,
    image: 'https://donto-react.netlify.app/static/media/d1.904490fe.png',
    title: 'Mukit Hasan',
    desc: 'Oral Surgeon',
  },
  {
    id: 6,
    image: 'https://donto-react.netlify.app/static/media/d3.1e523b96.png',
    title: 'Salma Nasreen',
    desc: 'Oral Surgeon',
  },
  {
    id: 7,
    image: 'https://donto-react.netlify.app/static/media/d2.c88fc8f8.png',
    title: 'David Howell',
    desc: 'Oral Surgeon',
  },
  {
    id: 8,
    image: 'https://donto-react.netlify.app/static/media/d1.904490fe.png',
    title: 'Mukit Hasan',
    desc: 'Oral Surgeon',
  },
  {
    id: 9,
    image: 'https://donto-react.netlify.app/static/media/d3.1e523b96.png',
    title: 'Salma Nasreen',
    desc: 'Oral Surgeon',
  },
];

const Doctors = () => {
  return (
    <div className='container rounded-2xl bg-gray-200 mx-auto mt-12 px-12 text-gray-800'>
      <h1 className='text-4xl text-center pt-12'>Doctors</h1>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-3 p-4 mt-8'>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
