import PropTypes from 'prop-types';
export const Tags = ({ name }) => {
  return (
    <li className='px-2.5 mr-1.6 mb-1.6 text-sm text-gray-750 print:bg-white print:border-inset bg-gray-200 rounded '>
      {name}
    </li>
  );
};
Tags.propTypes = {
  name: PropTypes.String,
};
