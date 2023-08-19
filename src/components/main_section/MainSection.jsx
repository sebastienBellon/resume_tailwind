import PropTypes from 'prop-types';
import { Experience } from './widgets/Experience';

export const MainSection = ({ workExperience }) => {
  return (
    <section className='print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0'>
      <Experience content={workExperience} />
    </section>
  );
};

MainSection.propTypes = {
  workExperience: PropTypes.arrayOf(PropTypes.object),
};
