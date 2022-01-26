import { useForm, FormProvider } from 'react-hook-form';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';
import { useOutletContext } from 'react-router-dom';

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
    <main className="">
      <h2 className="text-lg font-bold">{currentSection}</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submitHandler)}>
          {currentSection === 'Personal info' ? <PersonalForm /> : null}
          {currentSection === 'Summary' ? <Summary /> : null}
          {currentSection === 'Education' ? <Education /> : null}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
