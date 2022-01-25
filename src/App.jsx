import EditorContainer from './components/EditorContainer';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to="/editor" className="text-blue-500">
            Go to Editor
          </Link>
        }
      />
      <Route path="/editor" element={<EditorContainer />} />
    </Routes>
  );
}
export default App;
