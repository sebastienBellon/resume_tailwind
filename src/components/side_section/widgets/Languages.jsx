import PropTypes from 'prop-types';

export const Languages = ({ languages }) => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <header className='flex flex-row items-center mb-4 border-b border-opacity-50 border-gray-400'>
        <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>LANGUAGES</h2>
      </header>

      {languages.map((item, index) => (
        <div key={index} className='mt-4'>
          <div className='flex flex-row justify-between text-sm leading-normal'>
            <div>{item.language}</div>
            <div>{item.fluency}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.Object),
};
