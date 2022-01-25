const Form = ({ currentSection }) => {
  return (
    <main className="">
      <h2 className="text-lg font-bold">{currentSection}</h2>
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          placeholder="John"
          id="firstName"
          className="ring-1 ring-black"
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="John"
          id="lastName"
          className="ring-1 ring-black"
        />
      </form>
    </main>
  );
};

export default Form;
