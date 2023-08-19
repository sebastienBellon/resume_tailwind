import PropTypes from 'prop-types';
import { BsHouseDoorFill } from 'react-icons/bs';
import { CgSwiss } from 'react-icons/cg';
import { FaBirthdayCake, FaGithub, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

export const Contact = ({ contacts }) => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <header className='flex flex-row items-center mb-5 border-b border-opacity-50 border-gray-400'>
        <h2 className='font-bold tracking-widest text-sm2 text-indigo-700'>CONTACT</h2>
      </header>

      <AddressSection
        icon={<BsHouseDoorFill className='text-indigo-900' />}
        address={contacts.location.address}
        city={contacts.location.city}
      />
      <LinkSection icon={<IoMailOpen className='text-indigo-900' />} link={contacts.email} isMail={true} />
      <LinkSection icon={<FaMobileAlt className='text-indigo-900' />} link={contacts.phone} isPhone={true} />
      <LinkSection icon={<FaLinkedin className='text-indigo-900' />} link={contacts.linkedin} />
      <LinkSection icon={<FaGithub className='text-indigo-900' />} link={contacts.github} />
      <ContactSection icon={<FaBirthdayCake className='text-indigo-900' />} content={contacts.birthday} />
      <ContactSection icon={<CgSwiss className='text-indigo-900' />} content={contacts.nationality} />
    </section>
  );
};

Contact.propTypes = {
  contacts: PropTypes.object,
};

const ContactSection = ({ icon, content }) => {
  return (
    <div className='px-4 pb-2 sm:grid sm:grid-cols-6'>
      {icon}
      <div className='text-sm text-gray-700 col-span-5 sm:mt-0 text-start'>{content}</div>
    </div>
  );
};

ContactSection.propTypes = {
  icon: PropTypes.object,
  content: PropTypes.string,
};

const LinkSection = ({ icon, link, isMail, isPhone }) => {
  var href = '';
  if (isMail) {
    href = 'mailto:' + link;
  } else if (isPhone) {
    href = 'tel:' + link;
  } else {
    href = link;
  }

  var displayLink = '';
  if (!isMail && !isPhone) {
    displayLink = link.replace(/^https?:\/\/(www\.)?/, '');
  } else {
    displayLink = link;
  }

  return (
    <div className='px-4 pb-2 sm:grid sm:grid-cols-6'>
      {icon}
      <div className='text-sm text-gray-700 col-span-5 sm:mt-0 text-start'>
        <a href={href} className='text-sm leading-normal text-gray-700'>
          {displayLink}
        </a>
      </div>
    </div>
  );
};

LinkSection.propTypes = {
  icon: PropTypes.object,
  link: PropTypes.string,
  isMail: PropTypes.bool,
  isPhone: PropTypes.bool,
};

const AddressSection = ({ icon, address, city }) => {
  return (
    <div className='px-4 pb-2 sm:grid sm:grid-cols-6'>
      {icon}
      <div className='text-sm text-gray-700 col-span-5 sm:mt-0 text-start'>
        <dd>{address}</dd>
        <dd>{city}</dd>
      </div>
    </div>
  );
};

AddressSection.propTypes = {
  icon: PropTypes.object,
  address: PropTypes.string,
  city: PropTypes.string,
};
