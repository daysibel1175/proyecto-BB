import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Productos from './pages/Productos';
import Registros from './pages/Registros';

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

