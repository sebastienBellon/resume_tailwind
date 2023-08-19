import PropTypes from 'prop-types';
import { Contact } from './widgets/Contact';
import { Skills } from './widgets/Skills';

export const SideSection = ({ contacts, programming, frameworks, tools }) => {
  return (
    <section className='col-span-1 md:col-span-1'>
      <Contact contacts={contacts} />
      <Skills programming={programming} frameworks={frameworks} tools={tools} />
    </section>
  );
};
SideSection.propTypes = {
  contacts: PropTypes.object,
  programming: PropTypes.arrayOf(PropTypes.String),
  frameworks: PropTypes.arrayOf(PropTypes.String),
  tools: PropTypes.arrayOf(PropTypes.String),
};
