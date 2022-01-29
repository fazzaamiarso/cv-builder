import { Link } from 'react-router-dom';

const CVItem = ({ displayText, id, onRemoveItem }) => {
  const handleRemove = () => {
    onRemoveItem(id);
  };

  return (
    <li className="flex">
      <Link to={`/editor/edit/${id}`}>{displayText}</Link>
      <button onClick={handleRemove}>remove</button>
    </li>
  );
};

export default CVItem;
