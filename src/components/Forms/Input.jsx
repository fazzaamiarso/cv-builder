import { useFormContext } from 'react-hook-form';

const Input = ({ label, placeholder, name, type }) => {
  const isTextArea = type === 'textarea';
  const { register, control } = useFormContext();
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{name}</label>
      {isTextArea ? (
        <textarea
          {...register(label, { required: true })}
          placeholder={placeholder}
          id={label}
        />
      ) : (
        <input
          control={control}
          {...register(label, { required: true })}
          type={type}
          placeholder={placeholder}
          id={label}
          className="ring-1 ring-black"
        />
      )}
    </div>
  );
};

export default Input;
