import React from 'react';
import pdf from '@react-pdf/renderer';
const { StyleSheet, Document, Page, View, Text } = pdf;
// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    padding: '1rem',
    // height: '100vh',
    // position: 'absolute',
    // zIndex: 10,
    // top: 0,
    // backgroundColor: 'white',
    // left: '50%',
    // transform: 'translateX(-50%)',
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
    display: 'flex',
    flexDirection: 'column',
  },
  sectionItem: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// Create Document Component
const MyDocument = ({ sectionsAdded }) => {
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
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          <Text style={styles.name}>Zhongli Daddy </Text>
          <View style={styles.info}>
            <Text style={styles.infoItem}>8332129999</Text>
            <Text style={styles.infoItem}>Oak wood drive way 13</Text>
            <Text style={styles.infoItem}>Zhongli-Pappy-Daddy@gmail.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            <View style={styles.sectionItem}>
              <Text style={styles.subHeading}>Boston University</Text>
              <Text style={styles.text}>BSc in Computer Science</Text>
              <Text style={styles.text}>Oct 2012 - May 2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.summary}>
            <Text>Summary</Text>
            <Text>Lorem ipsum dolor sit amet</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Work Experience</Text>
            <View style={styles.sectionItem}>
              <Text style={styles.subHeading}>Vago Mundo</Text>
              <Text style={styles.text}>Genshin Impact</Text>
              <Text style={styles.text}>Oct 2012 - Present</Text>
              <Text style={styles.text}>
                I am a Geo element wielder and I am a Sugar Daddy
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
