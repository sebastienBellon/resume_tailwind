import PropTypes from 'prop-types';

export const Education = ({ education }) => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <header className='flex flex-row items-center mb-4 border-b border-opacity-50 border-gray-400'>
        <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>EDUCATIONS</h2>
      </header>

      {education.map((item, index) => (
        <EducationEntry key={index} data={item} />
      ))}
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.Object),
};

const EducationEntry = ({ data }) => {
  return (
    <div className='mt-4'>
      <header className='flex flex-row justify-between text-xs leading-normal'>
        <div>
          {data.startDate} – {data.endDate}
        </div>
        <div>{data.institution}</div>
      </header>
      <div className='flex flex-row justify-end mt-2'>
        <div className='leading-start text-sm font-semibold text-gray-700'>
          {data.studyType} in {data.area}
        </div>
      </div>
    </div>
  );
};

EducationEntry.propTypes = {
  data: PropTypes.object,
};
