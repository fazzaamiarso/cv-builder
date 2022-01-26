import { useForm, FormProvider } from 'react-hook-form';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';
import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditForm = () => {
  const { dataId } = useParams();
  const { sectionsAdded, onUpdateInput } = useOutletContext();

  const itemIdx = sectionsAdded.findIndex(item => item.id === dataId);
  const itemToEdit = sectionsAdded.find(item => item.id === dataId);

  const formMethods = useForm({
    shouldUnregister: true,
  });

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
    <main className="">
      <h2 className="text-lg font-bold">{`Editing ${dataId}`}</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submitHandler)}>
          {itemToEdit.sectionName === 'Personal info' ? <PersonalForm /> : null}
          {itemToEdit.sectionName === 'Summary' ? <Summary /> : null}
          {itemToEdit.sectionName === 'Education' ? <Education /> : null}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </main>
  );
};

export default EditForm;
