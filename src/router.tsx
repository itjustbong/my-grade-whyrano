import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grade from './Grade/grade';
import Login from './Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Grade" element={<Grade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
