import Input from './Input';

const Summary = () => {
  return (
    <>
      <Input
        type="textarea"
        placeholder="Write your summary here..."
        label="summary"
        name="Summary"
        registerConfig={{
          minLength: {
            value: 20,
            message: 'Summary must be more than 20 characters',
          },
        }}
      />
    </>
  );
};

export default Summary;
