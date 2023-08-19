import { BsHouseDoorFill } from 'react-icons/bs';
import { CgSwiss } from 'react-icons/cg';
import { FaBirthdayCake, FaGithub, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

export const Contact = () => {
  return (
    <section className='col-span-1 mt-8 first:mt-0'>
      <h2 className='mb-4 font-bold tracking-widest text-sm2 text-indigo-700'>CONTACT</h2>

      <div className='grid grid-cols-6 gap-x-1 gap-y-0'>
        <section className='col-span-1 text-center'>
          <BsHouseDoorFill className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <div className='text-sm leading-normal text-gray-700'>Chemin de la Naz 40</div>
        </section>
        <section className='col-span-1 text-center'></section>
        <section className='col-span-5'>
          <div className='text-sm leading-normal text-gray-700'>CH-1052 Mont-sur-Lausanne</div>
        </section>

        <section className='col-span-1 text-center'>
          <IoMailOpen className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <a
            href='mailto:sebastien.bellon@outlook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm leading-normal text-gray-700'
          >
            sebastien.bellon@outlook.com
          </a>
        </section>

        <section className='col-span-1 text-center'>
          <FaMobileAlt className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <a href='tel:+41797557477' className='text-sm leading-normal text-gray-700'>
            {' '}
            +41 (0)79 755 74 77{' '}
          </a>
        </section>

        <section className='col-span-1 text-center'>
          <FaLinkedin className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <a
            href='https://www.linkedin.com/in/sebbellon/'
            rel='noopener noreferrer'
            className='text-sm leading-normal text-gray-700'
          >
            linkedin.com/in/sebbellon
          </a>
        </section>

        <section className='col-span-1 text-center'>
          <FaGithub className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <a
            href='https://github.com/sebastienBellon'
            rel='noopener noreferrer'
            className='text-sm leading-normal text-gray-700'
          >
            github.com/sebastienBellon
          </a>
        </section>

        <section className='col-span-1 text-center'>
          <FaBirthdayCake className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <div className='text-sm leading-normal text-gray-700'>20/11/1985</div>
        </section>

        <section className='col-span-1 text-center'>
          <CgSwiss className='text-indigo-900' />
        </section>
        <section className='col-span-5'>
          <div className='text-sm leading-normal text-gray-700'>Swiss Nationality</div>
        </section>
      </div>
    </section>
  );
};
