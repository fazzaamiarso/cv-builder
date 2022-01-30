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
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={label} className="text-sm font-semibold">
        {name}
      </label>
      {isTextArea ? (
        <textarea
          {...register(label, { required: 'Required', ...registerConfig })}
          placeholder={placeholder}
          id={label}
          className={`resize-none rounded-sm ${error ? 'border-red-500' : ''} `}
          rows={5}
        />
      ) : (
        <input
          {...register(label, { required: 'Required', ...registerConfig })}
          type={type}
          placeholder={placeholder}
          id={label}
          className={`rounded-sm ${error ? 'border-red-500  ' : ''} `}
        />
      )}
      {error && (
        <span className="text-xs text-red-500" role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
