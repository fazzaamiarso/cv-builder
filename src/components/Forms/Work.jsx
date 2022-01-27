import Input from './Input';

const Work = () => {
  return (
    <>
      <Input
        label="role"
        placeholder="Software Engineer"
        name="Role"
        type="text"
      />
      <Input
        label="company"
        placeholder="Microsoft"
        name="Company Name"
        type="text"
      />

      <Input label="workFrom" name="From" type="month" />
      <Input label="workTo" name="To" type="month" />

      <Input
        label="workDescription"
        placeholder="describe here"
        name="Work Description"
        type="textarea"
      />
    </>
  );
};

export default Work;