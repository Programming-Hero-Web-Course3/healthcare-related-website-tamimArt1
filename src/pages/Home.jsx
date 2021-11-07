import { Link } from 'react-router-dom';
import Card from '../components/Card';
import TransparentCard from '../components/TransparentCard';
import operation from '../images/operation.jpg';

const data = [
  {
    image:
      'https://donto-react.netlify.app/static/media/appointment.c2e8b7ae.svg',
    title: 'Easy Appoinment',
    desc: 'Here you can take appoinment without any hassle',
  },
  {
    image: 'https://donto-react.netlify.app/static/media/icon3.3d000cd0.svg',
    title: 'Emergency Service',
    desc: 'We provide emergency service better than others',
  },
  {
    image: 'https://donto-react.netlify.app/static/media/icon.7cbafe70.svg',
    title: '24/7 Service',
    desc: 'Out team working their best to provide you 24/7 service',
  },
];

const treatments = [
  {
    id: 1,
    image:
      'https://donto-react.netlify.app/static/media/dentistry.d3c700d9.svg',
    title: 'Complete Dentistry',
    desc: 'Complete Dentistry is a philosophy of addressing and evaluating the entire masticatory system (all parts involved with chewing). ... "Complete Dentistry" also means finding the root cause of dental problems. Imagine that a patient presents a broken tooth.',
  },
  {
    id: 2,
    image: 'https://donto-react.netlify.app/static/media/selants.ee98a54b.svg',
    title: 'Dental Selants',
    desc: 'Dental sealant is a thin, plastic coating painted on the chewing surfaces of teeth -- usually the back teeth (the premolars and molars) -- to prevent tooth decay. The sealant quickly bonds into the depressions and grooves of the teeth, forming a protective shield over the enamel of each tooth.',
  },
  {
    id: 3,
    image:
      'https://donto-react.netlify.app/static/media/dictionary.5266e97b.svg',
    title: 'Dental Dictionary',
    desc: 'one who is skilled in and licensed to practice the prevention, diagnosis, and treatment of diseases, injuries, and malformations of the teeth, jaws, and mouth and who makes and inserts false teeth.',
  },
];

const Home = () => {
  return (
    <>
      <div className='container mx-auto my-8 min-h-[80vh] grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center items-center lg:items-start text-gray-200'>
          <h1 className='text-4xl font-bold'>Better Life Through</h1>
          <h1 className='text-6xl mt-4 font-bold'>Better Dentistry</h1>
          <p className='text-lg mt-8'>
            Join us to a fun and friendly dental environment. Our professionals
            are working so hard to see smile on your face that you deserve! We
            are dedicated about our duties.
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
        <div className='flex justify-center lg:justify-end mt-8 lg:mt-0 items-center'>
          <img
            className='w-9/12 rounded-full animate-pulse hover:scale-105'
            src='https://i.gifer.com/9P3z.gif'
            alt='tooth'
          />
        </div>
      </div>
      <div className='container mx-auto my-16 bg-gray-100 p-12 rounded-2xl'>
        <div className='grid gap-12 grid-cols-1 lg:grid-cols-3'>
          {data.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-32'>
          <img src={operation} alt='operation' />
          <div className='flex flex-col items-center lg:items-start mt-12 lg:mt-0'>
            <h1 className='text-4xl font-semibold text-gray-700'>
              Welcome to a Family
            </h1>
            <p className='text-gray-600 my-4'>
              Welcome to Datobbo Dental represents everything going to dentist
              necessary. We have upgraded your dreaded dentist appointment and
              transformed it into a relaxing.
            </p>
            <Link
              to='/about'
              className='text-pink-600 text-lg hover:text-blue-600'
            >
              About Us
            </Link>
            <div className='flex border border-gray-400 rounded-2xl mt-4 divide-x-2 divide-gray-300 text-gray-600 p-4 shadow-lg w-1/2'>
              <div>
                <div className='p-4'>
                  <h1 className='text-2xl font-semibold'>900+</h1>
                  <p>Happy Patients</p>
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-semibold'>17+</h1>
                  <p>Years Experience</p>
                </div>
              </div>
              <div>
                <div className='p-4'>
                  <h1 className='text-2xl font-semibold'>51+</h1>
                  <p>Qualified Doctors</p>
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-semibold'>21+</h1>
                  <p>Dental Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='mt-12 text-center text-4xl text-gray-200'>
        Top 3 Treatments
      </h1>
      <div className='container mx-auto text-gray-200 grid gap-12 grid-cols-1 lg:grid-cols-3 mb-32 mt-12'>
        {treatments.map((item) => (
          <TransparentCard key={item.title} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
