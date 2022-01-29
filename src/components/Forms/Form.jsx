import { useForm, FormProvider } from 'react-hook-form';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';
import { useOutletContext } from 'react-router-dom';
import Work from './Work';

const Form = () => {
  const formMethods = useForm({ shouldUnregister: true });
  const { currentSection, onAddInput } = useOutletContext();

  const submitHandler = formValues => {
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

  return (
    <main className="flex flex-col gap-4 bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold">{currentSection}</h2>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(submitHandler)}
          className="flex flex-col gap-4"
        >
          {currentSection === 'Personal info' ? <PersonalForm /> : null}
          {currentSection === 'Summary' ? <Summary /> : null}
          {currentSection === 'Education' ? <Education /> : null}
          {currentSection === 'Work' ? <Work /> : null}
          <button
            type="submit"
            className="mt-2 bg-primary-purple text-white self-end w-max px-4 py-1 rounded-sm text-md"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
