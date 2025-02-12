import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';  // Página para mostrar todas las publicaciones
import CreatePage from './pages/CreatePage';
import NavBar from './componets/NavBar';
import PostDetail from './componets/PostDetail';  // Página para ver el detalle de una publicación

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostPage />} /> {/* Aquí mostramos la lista de publicaciones */}
        <Route path="/post/:id" element={<PostDetail />} /> {/* Detalles de una publicación */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
