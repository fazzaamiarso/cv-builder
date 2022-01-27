import { Link } from 'react-router-dom';

const SectionItem = ({ sectionName, onSelected }) => {
  const handleSelect = () => {
    onSelected(sectionName);
  };

  return (
    <li className="cursor-pointer" onClick={handleSelect}>
      <Link to={`/editor/add`}>{sectionName}</Link>
    </li>
  );
};

export default SectionItem;
