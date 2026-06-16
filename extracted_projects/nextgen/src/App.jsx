import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Studio from './pages/Studio';
import TerminalAccess from './pages/TerminalAccess';

function App() {
  return (
    <Routes>
      {/* Standalone Full-screen Route */}
      <Route path="/access" element={<TerminalAccess />} />
      
      {/* Standard App Layout Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="studio" element={<Studio />} />
        <Route path="features" element={<Features />} />
        <Route path="work" element={<Work />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        {/* Fallback to home for undefined routes to maintain immersion */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;