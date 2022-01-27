import { PDFViewer } from '@react-pdf/renderer';

const Preview = ({ docs }) => {
  return <PDFViewer>{docs}</PDFViewer>;
};

export default Preview;
