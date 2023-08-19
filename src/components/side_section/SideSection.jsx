import PropTypes from 'prop-types';
import { Contact } from './widgets/Contact';
import { Education } from './widgets/Education';
import { Languages } from './widgets/Languages';
import { ProfessionalDevelopment } from './widgets/ProfessionalDevelopment';
import { Skills } from './widgets/Skills';

export const SideSection = ({
  contacts,
  programming,
  frameworks,
  tools,
  strengths,
  education,
  languages,
  side_projects,
}) => {
  return (
    <section className='col-span-1'>
      <Skills programming={programming} frameworks={frameworks} tools={tools} strengths={strengths} />
      <Education education={education} />
      <Languages languages={languages} />
      <ProfessionalDevelopment side_projects={side_projects} />
      <Contact contacts={contacts} />
    </section>
  );
};
SideSection.propTypes = {
  contacts: PropTypes.object,
  programming: PropTypes.arrayOf(PropTypes.String),
  frameworks: PropTypes.arrayOf(PropTypes.String),
  tools: PropTypes.arrayOf(PropTypes.String),
  strengths: PropTypes.arrayOf(PropTypes.String),
  education: PropTypes.arrayOf(PropTypes.Object),
  languages: PropTypes.arrayOf(PropTypes.Object),
  side_projects: PropTypes.arrayOf(PropTypes.Object),
};
