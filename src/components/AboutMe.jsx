import PropTypes from 'prop-types';

export const AboutMe = ({ content }) => {
  return (
    <section className='mb-10 first:mt-0' id='about_me'>
      <h2 className='mb-2 md:mb-0 font-bold tracking-widest text-sm2 text-indigo-700'>ABOUT ME</h2>
      <div className='mt-4 mb-4'>{content}</div>
    </section>
  );
};

AboutMe.propTypes = {
  content: PropTypes.string,
};
