import SectionSelector from './SectionSelector';
import Form from './Forms/Form';
import { useState, useEffect } from 'react';
import CVSettings from './CVSettings/CVSettings';

const EditorContainer = () => {
  const [currentSection, setCurrentSection] = useState('Personal info');
  const [sectionsAdded, setSectionsAdded] = useState([]);

  const handleAddInput = newInput => {
    setSectionsAdded(prevState => [...prevState, newInput]);
  };
  useEffect(() => {
    console.log(sectionsAdded);
  }, [sectionsAdded]);

  return (
    <main className="w-full mt-10 flex gap-4">
      <SectionSelector onSelectSection={setCurrentSection} />
      <Form currentSection={currentSection} onAddInput={handleAddInput} />
      <CVSettings sectionsAdded={sectionsAdded} />
    </main>
  );
};

export default EditorContainer;
