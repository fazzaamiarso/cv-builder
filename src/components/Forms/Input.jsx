const Input = ({ label, placeholder, name, register, type }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{name}</label>
      <input
        {...register(label, { required: true })}
        type={type}
        placeholder={placeholder}
        id={label}
        className="ring-1 ring-black"
      />
    </div>
  );
};

export default Input;
