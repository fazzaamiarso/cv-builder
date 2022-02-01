export const findSingleSection = (sectionsArray, sectionName) => {
  return sectionsArray.find(item => item.sectionName === sectionName);
};
export const filterSections = (sectionsArray, sectionName) => {
  return sectionsArray.filter(item => item.sectionName === sectionName);
};
