import pdf from '@react-pdf/renderer';
import styles from './Styles';

const { StyleSheet, View, Text } = pdf;

const WorkItem = ({
  id,
  institution,
  degree,
  fieldOfStudy,
  studyFrom,
  studyTo,
}) => {
  return (
    <View style={styles.sectionItem} key={id}>
      <Text style={styles.subHeading}>{institution}</Text>
      <Text style={styles.text}>{`${degree} in ${fieldOfStudy}`}</Text>
      <Text style={styles.text}>{`${studyFrom} - ${studyTo}`}</Text>
    </View>
  );
};

const educationStyles = StyleSheet.create({});

export default WorkItem;
