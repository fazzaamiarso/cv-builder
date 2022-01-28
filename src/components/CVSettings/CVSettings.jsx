import { Link } from 'react-router-dom';

const CVSettings = ({ sectionsAdded, onTogglePreview }) => {
  const personalInfoItem = sectionsAdded.find(
    item => item.sectionName === 'Personal info',
  );
  const summaryItem = sectionsAdded.find(
    item => item.sectionName === 'Summary',
  );
  const educationsItem = sectionsAdded.filter(
    item => item.sectionName === 'Education',
  );
  const worksItem = sectionsAdded.filter(item => item.sectionName === 'Work');

  return (
    <section className="">
      <h2 className="text-lg font-bold">CV Settings</h2>
      <p className="">Lorem ipsum dolor sit amet</p>
      <ul className="flex flex-col">
        {personalInfoItem ? (
          <li>
            <Link to={`/editor/edit/${personalInfoItem.id}`}>
              {personalInfoItem.firstName}
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
                    <Link to={`/editor/edit/${item.id}`}>Education Item</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        )}
        {worksItem.length === 0 ? null : (
          <li>
            <div>Work</div>
            <ul>
              {worksItem.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={`/editor/edit/${item.id}`}>{item.role}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        )}
      </ul>
      <button onClick={onTogglePreview} className="bg-blue-500">
        Preview
      </button>
    </section>
  );
};

export default CVSettings;
