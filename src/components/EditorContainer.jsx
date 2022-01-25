import SectionSelector from './SectionSelector';
import Form from './Forms/Form';
import { useState } from 'react';

const EditorContainer = () => {
  const [currentSection, setCurrentSection] = useState('Personal info');

  return (
    <main className="w-full mt-10 flex gap-4">
      <SectionSelector onSelectSection={setCurrentSection} />
      <Form currentSection={currentSection} />
    </main>
  );
};

export default EditorContainer;
