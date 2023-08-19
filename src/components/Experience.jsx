import PropTypes from 'prop-types';

export const Experience = ({ content }) => {
  return (
    <section className='col-span-3 mt-6 first:mt-0' id='experience'>
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
    <>
      <header className='flex flex-row justify-between'>
        <div className='leading-normal text-sm text-gray-700 mt-1'>
          {props.startDate} – {props.endDate}
        </div>
        <div>
          <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
            {props.jobTitle}{' '}
            <span id='company-name' className='text-gray-550 font-semibold'>
              @ {props.companyName}
            </span>
          </h3>
        </div>
      </header>

      <content className='grid pt-6'>
        <ul>
          {props.highlights.map((item, index) => (
            <div key={index} className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900 text-start'>{item.title}</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify'>
                {item.content}
              </dd>
            </div>
          ))}
        </ul>
      </content>
    </>
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
