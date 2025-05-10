import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './componets/NavBar';
import AppRoutes from './Routes'; // Importa las rutas desde el archivo Routes.jsx


function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes /> {/* Aquí se usan las rutas definidas en Routes.jsx */}
    </Router>
  );
}

export default App;