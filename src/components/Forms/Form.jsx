import { useForm, FormProvider } from 'react-hook-form';
import Work from './Work';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';
import Photo from './Photo';
import { useOutletContext } from 'react-router-dom';
import { findSingleSection } from '../../utils/formUtils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const { currentSection, onAddInput, sectionsAdded } = useOutletContext();
  const formMethods = useForm({
    shouldUnregister: true,
  });

  const submitHandler = formValues => {
    if (
      (currentSection === 'Personal info' ||
        currentSection === 'Summary' ||
        currentSection === 'Photo') &&
      findSingleSection(sectionsAdded, currentSection)
    ) {
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

    if ('photo' in formValues) return;
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
    <main className="col-span-2 flex flex-col gap-4 rounded-sm bg-white p-6 shadow-lg ">
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
          {currentSection === 'Photo' ? <Photo /> : null}
          <div className="mt-4 flex items-center gap-4 self-end">
            <button
              onClick={handleClear}
              className=" text-md w-max rounded-sm px-4 py-1 text-primary-purple ring-1 ring-primary-purple"
              type="button" //prevent submit
            >
              Clear
            </button>
            <button
              type="submit"
              className="text-md w-max  rounded-sm bg-primary-purple px-4 py-1 text-white"
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
