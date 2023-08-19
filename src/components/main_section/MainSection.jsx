import PropTypes from 'prop-types';
import { Experience } from './widgets/Experience';

export const MainSection = ({ workExperience }) => {
  return (
    <section className='col-span-2'>
      <Experience content={workExperience} />
    </section>
  );
};

MainSection.propTypes = {
  workExperience: PropTypes.arrayOf(PropTypes.object),
};
