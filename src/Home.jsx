import JsxPdf from 'jsx-pdf';

const Greeting = ({ name }) => <text>Hello, {name}!</text>;

const doc = (
  <document>
    <content>
      <Greeting name="Bob" />
    </content>
  </document>
);

export default doc;
