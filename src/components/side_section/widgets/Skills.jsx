import PropTypes from 'prop-types';
import { Tags } from './Tags';

export const Skills = ({ programming, frameworks, tools }) => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <header className='flex flex-row items-center mb-4 border-b border-opacity-50 border-gray-400'>
        <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>SKILLS</h2>
      </header>

      <section>
        <header className='flex flex-row items-center mb-2'>
          <h3 className='text-md font-semibold text-gray-700 leading-snugish'>Programming & Languages</h3>
        </header>
        <div className='my-2.5 last:pb-1.5'>
          <ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
            {programming.map((item, index) => (
              <Tags key={index} name={item} />
            ))}
          </ul>
        </div>
      </section>

      <section>
        <header className='flex flex-row items-center mb-2'>
          <h3 className='text-md font-semibold text-gray-700 leading-snugish'>Libraries & Frameworks</h3>
        </header>
        <div className='my-2.5 last:pb-1.5'>
          <ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
            {frameworks.map((item, index) => (
              <Tags key={index} name={item} />
            ))}
          </ul>
        </div>
      </section>

      <section>
        <header className='flex flex-row items-center mb-2'>
          <h3 className='text-md font-semibold text-gray-700 leading-snugish'>Tools | Services | Database</h3>
        </header>
        <div className='my-2.5 last:pb-1.5'>
          <ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
            {tools.map((item, index) => (
              <Tags key={index} name={item} />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

Skills.propTypes = {
  programming: PropTypes.arrayOf(PropTypes.String),
  frameworks: PropTypes.arrayOf(PropTypes.String),
  tools: PropTypes.arrayOf(PropTypes.String),
};
