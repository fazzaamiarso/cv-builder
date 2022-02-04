import { useForm, FormProvider } from 'react-hook-form';
import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Summary from './Summary';
import Work from './Work';
import Photo from './Photo';
import PersonalForm from './PersonalForm';
import Education from './Education';
import ConfirmationModal from '../Modal/ConfirmationModal';

const EditForm = () => {
  const { dataId } = useParams();
  const { sectionsAdded, onUpdateInput, onRemoveItem } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemIdx = sectionsAdded.findIndex(item => item.id === dataId);
  const itemToEdit = sectionsAdded.find(item => item.id === dataId);

  const formMethods = useForm({
    shouldUnregister: true,
  });

  const handleRemoveItem = () => {
    onRemoveItem(itemToEdit.id);
  };

  const submitHandler = formValues => {
    const updatedValues = { ...itemToEdit, ...formValues };
    onUpdateInput(itemIdx, updatedValues);
  };

  useEffect(() => {
    for (const key in itemToEdit) {
      formMethods.setValue(key, itemToEdit[key]);
    }
  }, [formMethods, itemToEdit]);

  return (
    <main className="flex flex-col col-span-2 gap-4 bg-white p-6 shadow-lg rounded-sm">
      <h2 className="text-2xl font-bold">{`Editing ${itemToEdit.sectionName}`}</h2>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(submitHandler)}
          className="flex flex-col gap-4"
        >
          {itemToEdit.sectionName === 'Personal info' ? <PersonalForm /> : null}
          {itemToEdit.sectionName === 'Summary' ? <Summary /> : null}
          {itemToEdit.sectionName === 'Education' ? <Education /> : null}
          {itemToEdit.sectionName === 'Work' ? <Work /> : null}
          {itemToEdit.sectionName === 'Photo' ? <Photo /> : null}
          <div className="flex self-end mt-4 gap-4">
            <button
              className=" ring-primary-purple ring-1 text-primary-purple w-max px-4 py-1 rounded-sm text-md"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              Delete
            </button>
            <button
              type="submit"
              className="ring-primary-purple ring-1  bg-primary-purple text-white w-max px-4 py-1 rounded-sm text-md"
            >
              Save
            </button>
          </div>
        </form>
      </FormProvider>
      <ConfirmationModal
        item={itemToEdit}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onConfirm={handleRemoveItem}
      />
    </main>
  );
};

export default EditForm;
