import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import PersonalForm from './PersonalForm';

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
          <PersonalForm />
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
