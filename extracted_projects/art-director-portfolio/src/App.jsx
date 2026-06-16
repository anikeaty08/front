import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<JournalDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;