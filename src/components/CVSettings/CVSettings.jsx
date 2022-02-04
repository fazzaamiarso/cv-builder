import CVItem from './CVItem';
import { Link } from 'react-router-dom';
import { EmojiSadIcon } from '@heroicons/react/outline';
import { findSingleSection, filterSections } from '../../utils/formUtils';

const CVSettings = ({ sectionsAdded, onTogglePreview }) => {
  const photoItem = findSingleSection(sectionsAdded, 'Photo');
  const personalInfoItem = findSingleSection(sectionsAdded, 'Personal info');
  const summaryItem = findSingleSection(sectionsAdded, 'Summary');
  const educationsItem = filterSections(sectionsAdded, 'Education');
  const worksItem = filterSections(sectionsAdded, 'Work');
  return (
    <section className="flex flex-col shadow-lg bg-white p-6 rounded-sm max-h-[30rem]">
      <h2 className="text-2xl font-bold">CV Settings</h2>
      {sectionsAdded.length === 0 ? (
        <div className="my-auto flex flex-col gap-2 items-center">
          <EmojiSadIcon className="h-12 text-primary-purple opacity-80" />
          <p className="font-semibold">There is no section added yet.</p>
        </div>
      ) : null}
      <ul className="flex flex-col w-full mt-4 space-y-2">
        {photoItem ? (
          <li className="flex font-bold text-lg">
            <Link to={`/editor/edit/${photoItem.id}`}>
              {photoItem.sectionName}
            </Link>
          </li>
        ) : null}
        {personalInfoItem ? (
          <li className="flex font-bold text-lg">
            <Link to={`/editor/edit/${personalInfoItem.id}`}>
              {personalInfoItem.sectionName}
            </Link>
          </li>
        ) : null}
        {summaryItem ? (
          <li className="flex font-bold text-lg">
            <Link to={`/editor/edit/${summaryItem.id}`}>
              {summaryItem.sectionName}
            </Link>
          </li>
        ) : null}
        {educationsItem.length === 0 ? null : (
          <li key="educationItem">
            <div className="font-bold text-lg flex items-center ">
              Education
            </div>
            <ul data-testid="educationList">
              {educationsItem.map(item => {
                return (
                  <CVItem
                    key={item.id}
                    id={item.id}
                    displayText={item.institution}
                  />
                );
              })}
            </ul>
          </li>
        )}
        {worksItem.length === 0 ? null : (
          <li key="workItem">
            <div className="font-bold text-lg ">Work</div>
            <ul data-testid="workList">
              {worksItem.map(item => {
                return (
                  <CVItem key={item.id} id={item.id} displayText={item.role} />
                );
              })}
            </ul>
          </li>
        )}
      </ul>
      <button
        onClick={onTogglePreview}
        className=" mt-auto bg-primary-purple text-white self-center w-max px-4 py-1 rounded-sm text-md"
      >
        Preview
      </button>
    </section>
  );
};

export default CVSettings;
