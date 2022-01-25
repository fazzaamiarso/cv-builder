import Input from './Input';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const Summary = () => {
  const { register, unregister } = useFormContext();

  useEffect(() => {
    return () => {
      unregister('summary');
    };
  }, [unregister]);
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
