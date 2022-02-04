const WorkItem = ({ company, role, workDescription, workFrom, workTo }) => {
  return (
    <li className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{role ?? '[role name]'}</h3>
        <p className="text-xs text-gray-700">{`${workFrom ?? '[work from]'} - ${
          workTo ?? '[work to]'
        }`}</p>
      </div>
      <p className="text-gray-600">{company ?? '[company name]'}</p>
      <p className="mt-2">{workDescription ?? '[work description]'}</p>
    </li>
  );
};

export default WorkItem;
