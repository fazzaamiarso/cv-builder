import { useFormContext } from 'react-hook-form';

const Input = ({ label, placeholder, name, type, registerConfig = {} }) => {
  const isTextArea = type === 'textarea';
  const {
    register,
    formState: {
      errors: { [label]: error },
      //use bracket to get the computed value of label
    },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{name}</label>
      {isTextArea ? (
        <>
          <textarea
            {...register(label, { required: 'Required', ...registerConfig })}
            placeholder={placeholder}
            id={label}
          />
          {error && (
            <span className="text-xl" role="alert">
              {error.message}
            </span>
          )}
        </>
      ) : (
        <>
          <input
            {...register(label, { required: 'Required', ...registerConfig })}
            type={type}
            placeholder={placeholder}
            id={label}
            className="ring-1 ring-black"
          />
          {error && (
            <span className="text-xl" role="alert">
              {error.message}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
