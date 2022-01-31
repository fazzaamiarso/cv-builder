import pdf from '@react-pdf/renderer';
const { StyleSheet } = pdf;

const styles = StyleSheet.create({
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
  text: {},
});

export default styles;
