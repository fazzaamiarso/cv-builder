import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CVSettings from './CVSettings/CVSettings';
import SectionSelector from './SectionSelector';
import Preview from './CVPreview/Preview';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.info('Deleted a section!', { hideProgressBar: false });
  };

  const handleAddInput = newInput => {
    setSectionsAdded(prevState => [...prevState, newInput]);
    toast.success('Submit success!', { hideProgressBar: false });
  };
  const handleUpdateInput = (idx, newValue) => {
    setSectionsAdded(prevState => {
      const newArr = [...prevState];
      newArr[idx] = newValue;
      return newArr;
    });
    toast.success('Changes saved!', { hideProgressBar: false });
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
          sectionsAdded,
          onAddInput: handleAddInput,
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
        <Preview onClosePreview={handleToggle} sectionsAdded={sectionsAdded} />
      ) : null}
    </main>
  );
};

export default EditorContainer;
