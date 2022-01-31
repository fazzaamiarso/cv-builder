import { Link } from 'react-router-dom';

const SectionItem = ({
  sectionName,
  onSelected,
  isActive,
  displayText,
  Icon,
}) => {
  const handleSelect = () => {
    onSelected(sectionName);
  };

  return (
    <li
      className={`flex flex-col gap-1 items-center justify-center p-2 min-h-[90px] cursor-pointer ${
        isActive ? 'ring-2 ring-purple-300 rounded-sm ' : ''
      } `}
      onClick={handleSelect}
    >
      <Icon className="h-8 text-primary-purple opacity-60" />
      <Link to={`/editor/add`} className="text-center leading-none">
        {displayText}
      </Link>
    </li>
  );
};

export default SectionItem;
