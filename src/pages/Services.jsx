import TransparentCard from '../components/TransparentCard';

const data = [
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
  {
    id: 4,
    image: 'https://donto-react.netlify.app/static/media/implants.629b6ebf.svg',
    title: 'Dental Implants',
    desc: 'A dental implant (also known as an endosseous implant or fixture) is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, or facial prosthesis or to act as an orthodontic anchor.',
  },
  {
    id: 5,
    image: 'https://donto-react.netlify.app/static/media/oral.1b014515.svg',
    title: 'Oral Surgery',
    desc: 'Oral surgery refers to any surgical procedure performed in or around your mouth and jaw, usually by a dental specialist whos trained to perform certain kinds of oral surgeries.',
  },
  {
    id: 6,
    image: 'https://donto-react.netlify.app/static/media/general.3870bdc7.svg',
    title: 'General Dentistry',
    desc: 'A general dentist is your primary care dental provider. This dentist diagnoses, treats, and manages your overall oral health care needs, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education.',
  },
  {
    id: 7,
    image:
      'https://donto-react.netlify.app/static/media/dentistry.d3c700d9.svg',
    title: 'Complete Dentistry',
    desc: 'Complete Dentistry is a philosophy of addressing and evaluating the entire masticatory system (all parts involved with chewing). ... "Complete Dentistry" also means finding the root cause of dental problems. Imagine that a patient presents a broken tooth.',
  },
  {
    id: 8,
    image: 'https://donto-react.netlify.app/static/media/selants.ee98a54b.svg',
    title: 'Dental Selants',
    desc: 'Dental sealant is a thin, plastic coating painted on the chewing surfaces of teeth -- usually the back teeth (the premolars and molars) -- to prevent tooth decay. The sealant quickly bonds into the depressions and grooves of the teeth, forming a protective shield over the enamel of each tooth.',
  },
  {
    id: 9,
    image:
      'https://donto-react.netlify.app/static/media/dictionary.5266e97b.svg',
    title: 'Dental Dictionary',
    desc: 'one who is skilled in and licensed to practice the prevention, diagnosis, and treatment of diseases, injuries, and malformations of the teeth, jaws, and mouth and who makes and inserts false teeth.',
  },
  {
    id: 10,
    image: 'https://donto-react.netlify.app/static/media/implants.629b6ebf.svg',
    title: 'Dental Implants',
    desc: 'A dental implant (also known as an endosseous implant or fixture) is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, or facial prosthesis or to act as an orthodontic anchor.',
  },
  {
    id: 11,
    image: 'https://donto-react.netlify.app/static/media/oral.1b014515.svg',
    title: 'Oral Surgery',
    desc: 'Oral surgery refers to any surgical procedure performed in or around your mouth and jaw, usually by a dental specialist whos trained to perform certain kinds of oral surgeries.',
  },
  {
    id: 12,
    image: 'https://donto-react.netlify.app/static/media/general.3870bdc7.svg',
    title: 'General Dentistry',
    desc: 'A general dentist is your primary care dental provider. This dentist diagnoses, treats, and manages your overall oral health care needs, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education.',
  },
];

const Services = () => {
  return (
    <div className='container mx-auto mt-12 px-12 text-gray-200'>
      <h1 className='text-4xl text-center mb-12'>Treatments</h1>
      <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 p-4'>
        {data.map((item) => (
          <TransparentCard key={item.id} item={item} btn={true} />
        ))}
      </div>
    </div>
  );
};

export default Services;
