import { useForm, FormProvider } from 'react-hook-form';
import Summary from './Summary';
import PersonalForm from './PersonalForm';
import Education from './Education';

const Form = ({ currentSection, onAddInput }) => {
  const formMethods = useForm();

  const submitHandler = formValues => {
    const newInput = { ...formValues, sectionName: currentSection };
    formMethods.reset();
    onAddInput(newInput);
  };
  return (
    <main className="">
      <h2 className="text-lg font-bold">{currentSection}</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submitHandler)}>
          {currentSection === 'Personal info' && <PersonalForm />}
          {currentSection === 'Summary' && <Summary />}
          {currentSection === 'Education' && <Education />}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
