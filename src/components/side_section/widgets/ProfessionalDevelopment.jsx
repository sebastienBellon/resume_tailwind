import PropTypes from 'prop-types';

export const ProfessionalDevelopment = ({ side_projects }) => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <header className='flex flex-row items-center mb-4 border-b border-opacity-50 border-gray-400'>
        <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>TECHNICAL PROJECTS</h2>
      </header>

      {side_projects.map((item, index) => (
        <SideProjectsEntry key={index} project={item} />
      ))}
    </section>
  );
};

ProfessionalDevelopment.propTypes = {
  side_projects: PropTypes.arrayOf(PropTypes.Object),
};

const SideProjectsEntry = ({ project }) => {
  return (
    <section className='mb-4.5'>
      <header className='flex flex-row items-center mb-1'>
        <h3 className='text-sm text-gray-700 leading-snugish text-start'>
          {project.position} @{' '}
          <a href={project.link} className='group font-semibold'>
            {project.title}
            <span className='inline-block text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in'>
              ↗
            </span>
          </a>
          <div className='leading-normal text-sm text-gray-650'>
            <span className=' font-semibold text-gray-700'>Stack: </span>
            {project.stack}
          </div>
        </h3>
      </header>
      <div className='text-start text-xs text-gray-700 leading-normal'>
        <p>
          {project.startDate} - {project.endDate}
        </p>
        <p>
          <span className='font-semibold'>Description: </span>
          {project.description}
        </p>
        <p>
          <span className='font-semibold'>Status: </span>
          {project.status}
        </p>
      </div>
    </section>
  );
};

SideProjectsEntry.propTypes = {
  project: PropTypes.Object,
};
