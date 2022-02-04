const EducationItem = ({
  degree,
  fieldOfStudy,
  studyFrom,
  studyTo,
  institution,
}) => {
  return (
    <li className=" w-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">{`${
          institution ?? '[institution name]'
        }`}</h3>
        <p className="text-xs text-gray-700">{`${
          studyFrom ?? '[study from]'
        } - ${studyTo ?? '[study to]'}`}</p>
      </div>
      <p className="">{`${degree ?? '[degree]'} in ${
        fieldOfStudy ?? '[field of study]'
      }`}</p>
    </li>
  );
};

export default EducationItem;
