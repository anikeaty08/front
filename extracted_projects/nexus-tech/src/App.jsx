import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';
import WebGLBackground from './components/WebGLBackground';

export default function App() {
  return (
    <>
      <WebGLBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/framework" element={<Placeholder />} />
          <Route path="/methodology" element={<Placeholder />} />
          <Route path="/modules" element={<Placeholder />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </Layout>
    </>
  );
}