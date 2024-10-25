import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/InicioSesion';
import Register from './componentes/RegistroUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* Agrega otras rutas para registro, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
