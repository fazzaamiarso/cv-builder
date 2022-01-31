import SectionItem from './SectionItem';
import {
  IdentificationIcon,
  KeyIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline';
import {
  IdentificationIcon as IdentificationIconSolid,
  KeyIcon as KeyIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
} from '@heroicons/react/solid';

const SectionSelector = ({ onSelectSection, currentSection }) => {
  return (
    <section className="shadow-lg bg-white p-6 rounded-sm max-h-[30rem]">
      <h2 className="text-2xl font-bold ">Fill section</h2>
      <p className="">Choose a section to fill</p>
      <div className="mt-6">
        <ul className="grid grid-cols-2 gap-2 gap-y-4">
          <SectionItem
            key={'Personal info'}
            onSelected={onSelectSection}
            sectionName={'Personal info'}
            isActive={'Personal info' === currentSection}
            displayText="Personal"
            Icon={
              'Personal info' === currentSection
                ? IdentificationIconSolid
                : IdentificationIcon
            }
          />
          <SectionItem
            key={'Summary'}
            onSelected={onSelectSection}
            sectionName={'Summary'}
            isActive={'Summary' === currentSection}
            displayText="Summary"
            Icon={'Summary' === currentSection ? KeyIconSolid : KeyIcon}
          />
          <SectionItem
            key={'Education'}
            onSelected={onSelectSection}
            sectionName={'Education'}
            isActive={'Education' === currentSection}
            displayText="Education"
            Icon={
              'Education' === currentSection
                ? AcademicCapIconSolid
                : AcademicCapIcon
            }
          />
          <SectionItem
            key={'Work'}
            onSelected={onSelectSection}
            sectionName={'Work'}
            isActive={'Work' === currentSection}
            displayText="Work"
            Icon={
              'Work' === currentSection ? BriefcaseIconSolid : BriefcaseIcon
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default SectionSelector;
