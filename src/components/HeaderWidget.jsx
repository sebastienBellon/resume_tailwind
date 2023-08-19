import PropTypes from 'prop-types';

export const HeaderWidget = ({ name, label }) => {
  return (
    <header className='flex row-gap-5 flex-row flex-wrap items-center mb-5 md:mb-2 border-b-2 border-opacity-50 border-gray-400'>
      <Logo name={name} />
      <Name name={name} />
      <Title label={label} />
    </header>
  );
};

HeaderWidget.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

const Logo = ({ name }) => {
  function getInitials(fullName) {
    const nameArray = fullName.split(' ');
    const initialsArray = nameArray.map((name) => name.charAt(0).toUpperCase());
    return initialsArray;
  }

  const initials = getInitials(name);

  return (
    <div className='initials-container mr-5 text-base leading-none pb-3 pt-3 text-white bg-indigo-800 font-medium px-3'>
      <div className='initial text-center text-2xl pb-1'>{initials[0]}</div>
      <div className='text-center text-2xl initial'>{initials[1]}</div>
    </div>
  );
};
Logo.propTypes = {
  name: PropTypes.string,
};

const Name = ({ name }) => {
  return (
    <h1 className='print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-gray-750 pb-px'>
      {name}
    </h1>
  );
};
Name.propTypes = {
  name: PropTypes.string,
};

const Title = ({ label }) => {
  return (
    <h2 className='print:text-3xl text-indigo-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px'>
      <code
        className='print:text-3xl text-indigo-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px'
        role='heading'
        aria-label='Software Developer'
      >
        {label}
      </code>
    </h2>
  );
};
Title.propTypes = {
  label: PropTypes.string,
};
