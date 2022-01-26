import { Link } from 'react-router-dom';

const CVSettings = ({ sectionsAdded }) => {
  const personalInfoItem = sectionsAdded.find(
    item => item.sectionName === 'Personal info',
  );
  const summaryItem = sectionsAdded.find(
    item => item.sectionName === 'Summary',
  );
  const educationsItem = sectionsAdded.filter(
    item => item.sectionName === 'Education',
  );

  return (
    <section className="">
      <h2 className="text-lg font-bold">CV Settings</h2>
      <p className="">Lorem ipsum dolor sit amet</p>
      <ul className="flex flex-col">
        {personalInfoItem ? (
          <li>
            <Link to={`/editor/edit/${personalInfoItem.id}`}>
              Personal Info
            </Link>
          </li>
        ) : null}
        {summaryItem ? (
          <li>
            <Link to={`/editor/edit/${summaryItem.id}`}>Summary</Link>
          </li>
        ) : null}
        {educationsItem.length === 0 ? null : (
          <li>
            <div>Education</div>
            <ul>
              {educationsItem.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={`/editor/edit/${item.id}`}>EducationItem</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
};

export default CVSettings;
