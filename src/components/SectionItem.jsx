const SectionItem = ({ sectionName, onSelected }) => {
  const handleSelect = () => {
    onSelected(sectionName);
  };

  return (
    <li className="cursor-pointer" onClick={handleSelect}>
      {sectionName}
    </li>
  );
};

export default SectionItem;
