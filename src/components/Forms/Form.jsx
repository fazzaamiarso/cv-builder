import { useForm, FormProvider } from 'react-hook-form';
import Work from './Work';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';
import { useOutletContext } from 'react-router-dom';
import { findSingleSection } from '../../utils/formUtils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const formMethods = useForm({
    shouldUnregister: true,
  });
  const { currentSection, onAddInput, sectionsAdded } = useOutletContext();

  const submitHandler = formValues => {
    if (findSingleSection(sectionsAdded, currentSection)) {
      toast.error('Section already exist, please kindly edit to make change!', {
        hideProgressBar: false,
        autoClose: 4000,
      });
      return;
    }

    const newInput = {
      ...formValues,
      sectionName: currentSection,
      id: `${currentSection.split(' ').join('').toLowerCase()}${Math.floor(
        Math.random() * 10000,
      )}`,
    };
    onAddInput(newInput);
    formMethods.reset();
  };

  const handleClear = () => {
    toast.info('Form cleared!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    formMethods.reset();
    formMethods.clearErrors();
  };

  return (
    <main className="flex flex-col col-span-2 gap-4 bg-white p-6 shadow-lg rounded-sm">
      <h2 className="text-2xl font-bold">{currentSection}</h2>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(submitHandler)}
          className="flex flex-col gap-4"
        >
          {currentSection === 'Personal info' ? <PersonalForm /> : null}
          {currentSection === 'Summary' ? <Summary /> : null}
          {currentSection === 'Education' ? <Education /> : null}
          {currentSection === 'Work' ? <Work /> : null}
          <div className="flex self-end mt-4 gap-4 items-center">
            <button
              onClick={handleClear}
              className=" ring-primary-purple ring-1 text-primary-purple w-max px-4 py-1 rounded-sm text-md"
              type="button" //prevent submit
            >
              Clear
            </button>
            <button
              type="submit"
              className=" bg-primary-purple text-white  w-max px-4 py-1 rounded-sm text-md"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
