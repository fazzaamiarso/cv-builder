import Input from './Input';
import { useFormContext } from 'react-hook-form';

const Summary = () => {
  const { register } = useFormContext();

  return (
    <>
      <Input
        type="textarea"
        placeholder="Write your summary here..."
        label="summary"
        name="Summary"
        register={register}
      />
    </>
  );
};

export default Summary;
