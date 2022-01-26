import { Link } from 'react-router-dom';

const CVSettings = ({ sectionsAdded }) => {
  return (
    <section className="">
      <h2 className="text-lg font-bold">CV Settings</h2>
      <p className="">Lorem ipsum dolor sit amet</p>
      <ul className="flex flex-col">
        {sectionsAdded.length === 0 ? (
          <p>There are no sections added yet!</p>
        ) : (
          sectionsAdded.map(section => {
            return (
              <li key={`${section.id}`} className="bg-blue-300">
                <Link to={`edit/${section.id}`}>{section.sectionName}</Link>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default CVSettings;
