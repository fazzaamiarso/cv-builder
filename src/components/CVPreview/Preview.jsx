import { findSingleSection, filterSections } from '../../utils/formUtils';
import EducationItem from './EducationItem';
import WorkItem from './WorkItem';

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
      <div className="flex absolute  z-20 bg-white p-4 gap-8 left-1/2    -translate-x-1/2 shadow-lg leading-none h-[700px]   ">
        <section className="bg-blue-700 text-white w-8/12 px-6 py-4">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-bold text-xl ">
              {personalInfoItem
                ? `${personalInfoItem.firstName} ${personalInfoItem.lastName}`
                : '[Your name]'}
            </h1>
            <div className="">
              <h2 className="font-bold underline underline-offset-8 mb-2 text-lg tracking-wide">
                CONTACT
              </h2>
              <p className="text-sm">
                {personalInfoItem
                  ? `${personalInfoItem.address}`
                  : '[Your address]'}
              </p>
              <p className="text-sm">
                {personalInfoItem
                  ? `${personalInfoItem.phoneNumber}`
                  : '[Your phone number]'}
              </p>
              <p className="text-sm">
                {personalInfoItem
                  ? `${personalInfoItem.email}`
                  : '[Your email address]'}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full space-y-6">
          <div className="flex flex-col">
            <h2 className="font-bold underline underline-offset-8 mb-4 text-xl tracking-wide">
              SUMMARY
            </h2>
            <p className="">
              {summaryItem ? `${summaryItem.summary}` : '[Your summary]'}
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold underline underline-offset-8 mb-4 text-xl tracking-wide">
              WORK EXPERIENCE
            </h2>
            <ul className="w-full space-y-4">
              {workItems.length ? (
                workItems.map(item => {
                  return (
                    <WorkItem
                      key={item.id}
                      company={item.company}
                      role={item.role}
                      workDescription={item.workDescription}
                      workFrom={item.workFrom}
                      workTo={item.workTo}
                    />
                  );
                })
              ) : (
                <WorkItem />
              )}
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold underline underline-offset-8 mb-4 text-xl tracking-wide">
              EDUCATION
            </h2>
            <ul className=" space-y-4">
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
      </div>
    </>
  );
};

export default Preview;
