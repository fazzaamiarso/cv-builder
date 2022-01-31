import SectionSelector from './SectionSelector';
import { useState } from 'react';
import CVSettings from './CVSettings/CVSettings';
import { Outlet, useNavigate } from 'react-router-dom';
import PDF from './PDF/PDF';

const EditorContainer = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('Personal info');
  const [sectionsAdded, setSectionsAdded] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleToggle = () => {
    setShowPreview(!showPreview);
  };

  const handleRemoveItem = id => {
    setSectionsAdded(prevState => {
      const newArr = [...prevState];
      const removedItemIdx = newArr.findIndex(item => item.id === id);
      newArr.splice(removedItemIdx, 1);
      return newArr;
    });
    navigate('/editor/add');
  };

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
    <main className="w-screen mt-10 mb-20  px-10 grid grid-cols-4 gap-12  ">
      <SectionSelector
        onSelectSection={setCurrentSection}
        currentSection={currentSection}
      />
      <Outlet
        context={{
          currentSection,
          onAddInput: handleAddInput,
          sectionsAdded,
          onUpdateInput: handleUpdateInput,
          onRemoveItem: handleRemoveItem,
        }}
      />
      <CVSettings
        sectionsAdded={sectionsAdded}
        onTogglePreview={handleToggle}
        onRemoveItem={handleRemoveItem}
      />
      {showPreview ? (
        <PDF sectionsAdded={sectionsAdded} onClosePreview={handleToggle} />
      ) : null}
    </main>
  );
};

export default EditorContainer;
