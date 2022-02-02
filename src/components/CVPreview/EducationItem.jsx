const EducationItem = ({
  degree,
  fieldOfStudy,
  studyFrom,
  studyTo,
  institution,
}) => {
  return (
    <li>
      <h3 className="font-semibold">{`${
        institution ?? '[institution name]'
      }`}</h3>
      <p className="">{`${degree ?? '[degree]'} in ${
        fieldOfStudy ?? '[field of study]'
      }`}</p>
      <p className="">{`${studyFrom ?? '[study from]'} - ${
        studyTo ?? '[study to]'
      }`}</p>
    </li>
  );
};

export default EducationItem;
