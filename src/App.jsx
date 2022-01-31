import EditorContainer from './components/EditorContainer';
import Form from './components/Forms/Form';
import EditForm from './components/Forms/EditForm';

import { Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Dashboard</h1>
            <Link to="/editor/add" className="text-blue-500">
              Go to Editor
            </Link>
          </>
        }
      />
      <Route element={<PageLayout />}>
        <Route path="/editor" element={<EditorContainer />}>
          <Route path="add" element={<Form />} />
          <Route path="edit/:dataId" element={<EditForm />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
