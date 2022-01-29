import CVItem from './CVItem';

const CVSettings = ({ sectionsAdded, onTogglePreview, onRemoveItem }) => {
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
    <section className="bg-white">
      <h2 className="text-lg font-bold">CV Settings</h2>
      <p className="">Lorem ipsum dolor sit amet</p>
      <ul className="flex flex-col">
        {sectionsAdded.length === 0 ? (
          <p className="">Ooops.. there is no section added yet.</p>
        ) : null}
        {personalInfoItem ? (
          <CVItem
            key={personalInfoItem.id}
            id={personalInfoItem.id}
            displayText={personalInfoItem.firstName}
            onRemoveItem={onRemoveItem}
          />
        ) : null}
        {summaryItem ? (
          <CVItem
            key={summaryItem.id}
            id={summaryItem.id}
            displayText={'summary'}
            onRemoveItem={onRemoveItem}
          />
        ) : null}
        {educationsItem.length === 0 ? null : (
          <li key="educationItem">
            <div>Education</div>
            <ul data-testid="educationList">
              {educationsItem.map(item => {
                return (
                  <CVItem
                    key={item.id}
                    id={item.id}
                    displayText={item.institution}
                    onRemoveItem={onRemoveItem}
                  />
                );
              })}
            </ul>
          </li>
        )}
        {worksItem.length === 0 ? null : (
          <li key="workItem">
            <div>Work</div>
            <ul data-testid="workList">
              {worksItem.map(item => {
                return (
                  <CVItem
                    key={item.id}
                    id={item.id}
                    displayText={item.role}
                    onRemoveItem={onRemoveItem}
                  />
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
