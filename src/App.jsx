import EditorContainer from './components/EditorContainer';
import Form from './components/Forms/Form';
import EditForm from './components/Forms/EditForm';

import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import PageLayout from './components/PageLayout';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
