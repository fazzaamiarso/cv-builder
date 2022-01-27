import Input from './Input';

const Education = () => {
  return (
    <>
      <Input
        label="institution"
        placeholder="Boston University"
        name="Institution Name"
        type="text"
      />
      <Input
        label="fieldOfStudy"
        placeholder="Natural science"
        name="Field of Study"
        type="text"
      />
      <Input label="degree" placeholder="Bsc" name="Degree" type="text" />
      <Input label="studyFrom" name="From" type="month" />
      <Input label="studyTo" name="To" type="month" />
    </>
  );
};

export default Education;
