import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "./pages/Home";
import { Routes} from 'react-router-dom';
import PostPage from './pages/PostPage';
import CreatePage from './pages/CreatePage';
import PostDetail from './componets/PostDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
}

export default AppRoutes;