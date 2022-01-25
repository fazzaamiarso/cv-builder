import { useForm, FormProvider } from 'react-hook-form';
import PersonalForm from './PersonalForm';
import Summary from './Summary';

const Form = ({ currentSection }) => {
  const formMethods = useForm();

  const submitHandler = formValues => {
    console.log(formValues);
  };

  return (
    <main className="">
      <h2 className="text-lg font-bold">{currentSection}</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submitHandler)}>
          {currentSection === 'Personal info' && <PersonalForm />}
          {currentSection === 'Summary' && <Summary />}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
