import pdf from '@react-pdf/renderer';
import styles from './Styles';

const { StyleSheet, View, Text } = pdf;

const WorkItem = ({ id, role, company, workDescription, workFrom, workTo }) => {
  return (
    <View key={id} style={styles.sectionItem}>
      <Text style={styles.subHeading}>{role}</Text>
      <Text style={styles.text}>{company}</Text>
      <Text style={styles.text}>{`${workFrom} - ${workTo}`}</Text>
      <Text style={styles.text}>{workDescription}</Text>
    </View>
  );
};

const workStyles = StyleSheet.create({});

export default WorkItem;
