import Input from './Input';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const PersonalForm = () => {
  const { register, unregister } = useFormContext();

  useEffect(() => {
    const unregisterAll = () => {
      unregister('firstName');
      unregister('lastName');
      unregister('phoneNumber');
      unregister('address');
      unregister('email');
    };

    return () => {
      unregisterAll();
      console.log('Unmount');
    };
  }, [unregister]);

  return (
    <>
      <Input
        label="firstName"
        placeholder="John"
        name="First Name"
        register={register}
        type="text"
      />
      <Input
        label="lastName"
        placeholder="Doe"
        name="Last Name"
        register={register}
        type="text"
      />
      <Input
        label="phoneNumber"
        placeholder="0822 1111 1111"
        name="Phone Number"
        register={register}
        type="tel"
      />
      <Input
        label="address"
        placeholder="42 Oak Drive, Center City, Indiana, 46278"
        name="Address"
        register={register}
        type="text"
      />
      <Input
        label="email"
        placeholder="example@gmail.com"
        name="Email Address"
        register={register}
        type="email"
      />
    </>
  );
};

export default PersonalForm;
