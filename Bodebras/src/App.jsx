import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Productos from './pages/Productos';
import Registros from './pages/Registros';
export const MY_API_KEY = 'AIzaSyDm7ZMbDWXDjH03bS9I5DndeoHSvtANeU8'
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Registros" element={<Registros />} />
          <Route path="/*" element={<Navigate to="/Home" />} />
        </Routes>
      </Router>
  );
};

export default App;

