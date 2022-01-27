import Input from './Input';

const PersonalForm = () => {
  return (
    <>
      <Input
        label="firstName"
        placeholder="John"
        name="First Name"
        type="text"
      />
      <Input label="lastName" placeholder="Doe" name="Last Name" type="text" />
      <Input
        label="phoneNumber"
        placeholder="0822 1111 1111"
        name="Phone Number"
        type="tel"
      />
      <Input
        label="address"
        placeholder="42 Oak Drive, Center City, Indiana, 46278"
        name="Address"
        type="text"
      />
      <Input
        label="email"
        placeholder="example@gmail.com"
        name="Email Address"
        type="email"
      />
    </>
  );
};

export default PersonalForm;
