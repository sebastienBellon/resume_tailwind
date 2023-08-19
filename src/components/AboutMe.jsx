import PropTypes from 'prop-types';

export const AboutMe = ({ content }) => {
  return (
    <section className='mb-5 mt-5 sm:mb-10 print:mt-0'>
      <h2 className='font-bold tracking-widest text-sm2  text-indigo-700'>ABOUT ME</h2>
      <div className=' text-justify'>{content}</div>
    </section>
  );
};

AboutMe.propTypes = {
  content: PropTypes.string,
};
