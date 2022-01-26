import Input from './Input';
import { useFormContext } from 'react-hook-form';

const PersonalForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <Input
        label="institution"
        placeholder="Boston University"
        name="Institution Name"
        register={register}
        type="text"
      />
      <Input
        label="fieldOfStudy"
        placeholder="Natural science"
        name="Field of Study"
        register={register}
        type="text"
      />
      <Input label="studyFrom" name="From" register={register} type="month" />
      <Input label="studyTo" name="To" register={register} type="month" />
    </>
  );
};

export default PersonalForm;
