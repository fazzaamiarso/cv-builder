import EditorContainer from './components/EditorContainer';
import Form from './components/Forms/Form';
import EditForm from './components/Forms/EditForm';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to="/editor/add" className="text-blue-500">
            Go to Editor
          </Link>
        }
      />
      <Route path="/editor" element={<EditorContainer />}>
        <Route path="add" element={<Form />} />
        <Route path="edit/:dataId" element={<EditForm />} />
      </Route>
    </Routes>
  );
}
export default App;
