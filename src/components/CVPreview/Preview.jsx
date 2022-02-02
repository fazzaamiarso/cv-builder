import { findSingleSection, filterSections } from '../../utils/formUtils';
import EducationItem from './EducationItem';

const Preview = ({ onClosePreview, sectionsAdded }) => {
  const personalInfoItem = findSingleSection(sectionsAdded, 'Personal info');
  const summaryItem = findSingleSection(sectionsAdded, 'Summary');
  const educationItems = filterSections(sectionsAdded, 'Education');
  const workItems = filterSections(sectionsAdded, 'Work');

  console.log(educationItems);

  return (
    <>
      <div
        className="fixed z-10 inset-0 bg-black opacity-30"
        onClick={onClosePreview}
      />
      <div className="flex absolute z-20 bg-white p-4 gap-8 left-1/2 -translate-x-1/2  ">
        <section className="">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl">
              {personalInfoItem
                ? `${personalInfoItem.firstName} ${personalInfoItem.lastName}`
                : '[Your name]'}
            </h1>
            <p className="">
              {personalInfoItem
                ? `${personalInfoItem.address}`
                : '[Your address]'}
            </p>
            <p className="">
              {personalInfoItem
                ? `${personalInfoItem.phoneNumber}`
                : '[Your phone number]'}
            </p>
            <p className="">
              {personalInfoItem
                ? `${personalInfoItem.email}`
                : '[Your email address]'}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">Education</h2>
            <ul className="">
              {educationItems.length ? (
                educationItems.map(item => {
                  return (
                    <EducationItem
                      key={item.id}
                      institution={item.institution}
                      degree={item.degree}
                      fieldOfStudy={item.fieldOfStudy}
                      studyFrom={item.studyFrom}
                      studyTo={item.studyTo}
                    />
                  );
                })
              ) : (
                <EducationItem />
              )}
            </ul>
          </div>
        </section>
        <section>
          <div className="flex flex-col">
            <h2 className="font-bold">Summary</h2>
            <p className="">
              {summaryItem ? `${summaryItem.summary}` : '[Your summary]'}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Preview;
