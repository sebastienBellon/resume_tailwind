import PropTypes from 'prop-types';

export const Experience = ({ content }) => {
  return (
    <section className='col-span-3'>
      <Title />
      {content.map((item, index) => (
        <ExperienceEntry
          key={index}
          jobTitle={item.title}
          companyName={item.companyName}
          startDate={item.startDate}
          endDate={item.endDate}
          highlights={item.highlights}
        />
      ))}
    </section>
  );
};

Experience.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

const ExperienceEntry = (props) => {
  return (
    <div className='mt-6'>
      <header className='py-2 grid grid-cols-4 gap-4 text-lg font-semibold text-gray-700'>
        <div className='text-end'>
          {props.startDate} – {props.endDate}
        </div>

        <h3 className='text-end col-span-3'>
          {props.jobTitle} <span className='text-gray-550'>@ {props.companyName}</span>
        </h3>
      </header>

      {props.highlights.map((item, index) => (
        <div key={index} className='py-2 text-sm grid grid-cols-4 gap-4 break-inside-avoid-page'>
          <dt className='font-medium text-gray-800 text-end'>{item.title}</dt>
          <dd className=' text-gray-700 text-justify col-span-3'>{item.content}</dd>
        </div>
      ))}
    </div>
  );
};

ExperienceEntry.propTypes = {
  jobTitle: PropTypes.string,
  companyName: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.object),
};

const Title = () => {
  return (
    <header className='flex flex-row items-center mb-5 md:mb-2 border-b border-opacity-50 border-gray-400'>
      <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>EXPERIENCE</h2>
    </header>
  );
};
