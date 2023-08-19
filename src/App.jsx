import './App.css';
import { AboutMe } from './components/AboutMe';
import { HeaderWidget } from './components/HeaderWidget';
import { MainSection } from './components/MainSection';
import { SideSection } from './components/SideSection';

import resume from '../resume.json';

function App() {
  return (
    <div className='p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white'>
      <HeaderWidget name={resume.basics.name} label={resume.basics.label} />
      <AboutMe content={resume.basics.summary} />
      {/* Main section with a Grid 2 1 */}
      <div className='grid grid-cols-3 gap-10'>
        <MainSection workExperience={resume.work} />
        <SideSection />
      </div>
    </div>
  );
}

export default App;
