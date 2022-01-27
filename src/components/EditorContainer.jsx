import SectionSelector from './SectionSelector';
import { useState } from 'react';
import CVSettings from './CVSettings/CVSettings';
import { Outlet } from 'react-router-dom';
import PDF from './PDF';

const EditorContainer = () => {
  const [currentSection, setCurrentSection] = useState('Personal info');
  const [sectionsAdded, setSectionsAdded] = useState([]);

  const handleAddInput = newInput => {
    setSectionsAdded(prevState => [...prevState, newInput]);
  };
  const handleUpdateInput = (idx, newValue) => {
    setSectionsAdded(prevState => {
      const newArr = [...prevState];
      newArr[idx] = newValue;
      return newArr;
    });
  };

  return (
    <main className="w-full mt-10 flex gap-4">
      <SectionSelector onSelectSection={setCurrentSection} />
      <Outlet
        context={{
          currentSection,
          onAddInput: handleAddInput,
          sectionsAdded,
          onUpdateInput: handleUpdateInput,
        }}
      />
      <CVSettings sectionsAdded={sectionsAdded} />
      <PDF />
    </main>
  );
};

export default EditorContainer;
