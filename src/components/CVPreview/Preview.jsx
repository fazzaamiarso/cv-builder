import { useState, useEffect } from 'react';
import { findSingleSection, filterSections } from '../../utils/formUtils';
import EducationItem from './EducationItem';
import WorkItem from './WorkItem';
import { UserCircleIcon } from '@heroicons/react/solid';

const Preview = ({ onClosePreview, sectionsAdded }) => {
  const [imageUploaded, setImageUploaded] = useState('');
  const readImageUploaded = file => {
    const reader = new FileReader();
    reader.onload = e => {
      setImageUploaded(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const image = findSingleSection(sectionsAdded, 'Photo');
    if (!image || image.photo.length === 0) return;
    readImageUploaded(image.photo[0]);
  }, [sectionsAdded]);

  const personalInfoItem = findSingleSection(sectionsAdded, 'Personal info');
  const summaryItem = findSingleSection(sectionsAdded, 'Summary');
  const educationItems = filterSections(sectionsAdded, 'Education');
  const workItems = filterSections(sectionsAdded, 'Work');

  return (
    <>
      <div
        className="fixed z-10 inset-0 bg-black opacity-30"
        onClick={onClosePreview}
        data-testid="preview-overlay"
      />
      <div className="flex absolute  z-20 min-w-[700px] bg-white p-4 gap-8 left-1/2    -translate-x-1/2 shadow-lg leading-none h-[700px]   ">
        <section className="bg-blue-700 text-white w-8/12 px-6 py-4">
          <div className="flex flex-col items-start gap-6">
            <div className="self-center overflow-clip rounded-full aspect-square w-32 ">
              {imageUploaded ? (
                <img className="" src={imageUploaded} alt="user profile" />
              ) : (
                <UserCircleIcon className="h-32 " />
              )}
            </div>
            <h1 className="font-bold text-2xl mb-6">
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
            <ul className="w-full space-y-4" data-testid="work-list">
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
            <ul className="space-y-4" data-testid="education-list">
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
