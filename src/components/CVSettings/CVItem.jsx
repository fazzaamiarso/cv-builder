import { Link } from 'react-router-dom';

const CVItem = ({ displayText, id }) => {
  return (
    <li className="flex pl-4">
      <Link to={`/editor/edit/${id}`}>{displayText}</Link>
    </li>
  );
};

export default CVItem;
