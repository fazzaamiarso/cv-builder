import SectionItem from './SectionItem';

const SECTION_LIST = ['Personal info', 'Summary', 'Education', 'Work'];

const SectionSelector = ({ onSelectSection }) => {
  return (
    <section className="">
      <h2 className="text-lg font-bold">Fill section</h2>
      <p className="">Lorem ipsum dolor sit amet</p>
      <div className="">
        <ul className="">
          {SECTION_LIST.map(section => {
            return (
              <SectionItem
                key={section}
                onSelected={onSelectSection}
                sectionName={section}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionSelector;
