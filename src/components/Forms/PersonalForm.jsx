import Input from './Input';

const PersonalForm = () => {
  return (
    <>
      <Input
        label="firstName"
        placeholder="John"
        name="First Name"
        type="text"
        registerConfig={{
          minLength: {
            value: 2,
            message: 'Name must be more than 1 characters',
          },
        }}
      />
      <Input
        label="lastName"
        placeholder="Doe"
        name="Last Name"
        type="text"
        registerConfig={{
          minLength: {
            value: 2,
            message: 'Name must be more than 1 characters',
          },
        }}
      />

      <Input
        label="phoneNumber"
        placeholder="0822 1111 1111"
        name="Phone Number"
        type="tel"
        registerConfig={{
          pattern: {
            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
            message: 'Entered value does not match phone number format',
          },
        }}
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
        registerConfig={{
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        }}
      />
    </>
  );
};

export default PersonalForm;
