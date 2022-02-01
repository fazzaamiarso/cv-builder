import { useNavigate } from 'react-router-dom';

const SectionItem = ({
  sectionName,
  onSelected,
  isActive,
  displayText,
  Icon,
}) => {
  const navigate = useNavigate();
  const handleSelect = () => {
    onSelected(sectionName);
    navigate(`/editor/add`);
  };

  return (
    <li
      className={`flex flex-col gap-1 items-center justify-center p-2 min-h-[90px] cursor-pointer ${
        isActive ? 'ring-2 ring-purple-300 rounded-sm ' : ''
      } `}
      onClick={handleSelect}
    >
      <Icon
        className="h-8 text-primary-purple opacity-60"
        title={sectionName}
      />
      <p className="text-center leading-none">{displayText}</p>
    </li>
  );
};

export default SectionItem;
