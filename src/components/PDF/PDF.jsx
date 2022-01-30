import React from 'react';
import pdf from '@react-pdf/renderer';
import WorkItem from './WorkItem';
import EducationItem from './EducationItem';
const { StyleSheet, Document, Page, View, Text } = pdf;
// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    gap: '4rem',
    padding: '1rem',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    backgroundColor: 'white',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  header: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoItem: {},
  name: {
    fontSize: '1.5rem',
    color: 'red',
  },
  summary: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebar: {
    height: '100%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  subHeading: {
    fontWeight: 'semibold',
  },
  section: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionItem: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// Create Document Component
const MyDocument = ({ sectionsAdded, onClosePreview }) => {
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
    <>
      <div
        onClick={onClosePreview}
        className="fixed z-8 inset-0 bg-black opacity-30 "
      ></div>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sidebar}>
            <Text style={styles.name}>
              {personalInfoItem?.firstName ?? '[Your name]'}
            </Text>
            <View style={styles.info}>
              <Text style={styles.infoItem}>
                {personalInfoItem?.phoneNumber ?? '[Your phone number]'}
              </Text>
              <Text style={styles.infoItem}>
                {personalInfoItem?.address ?? '[Your address]'}
              </Text>
              <Text style={styles.infoItem}>
                {personalInfoItem?.email ?? '[Your email address]'}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Education</Text>
              {educationsItem.length === 0 ? (
                <EducationItem
                  degree="[Degree]"
                  studyFrom="[study from]"
                  studyTo="[study to]"
                  institution="[Institution name]"
                  fieldOfStudy="[Field of study]"
                />
              ) : null}
              {educationsItem.map(item => {
                return (
                  <EducationItem
                    key={item.id}
                    degree={item.degree}
                    studyFrom={item.studyFrom}
                    studyTo={item.studyTo}
                    institution={item.institution}
                    fieldOfStudy={item.fieldOfStudy}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.section}>
              <Text style={styles.heading}>Summary</Text>
              <Text>{summaryItem?.summary ?? '[Your summary]'}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Work Experience</Text>
              {worksItem.length === 0 ? (
                <WorkItem
                  role="[Role]"
                  company="[Company name]"
                  workDescription="[Work description]"
                  workFrom="[Work from]"
                  workTo="[Work to]"
                />
              ) : null}
              {worksItem.map(item => {
                return (
                  <WorkItem
                    key={item.id}
                    id={item.id}
                    role={item.role}
                    company={item.company}
                    workDescription={item.workDescription}
                    workFrom={item.workFrom}
                    workTo={item.workTo}
                  />
                );
              })}
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default MyDocument;
