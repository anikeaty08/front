import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Placeholders for multiple pages */}
        <Route path="platform" element={<Home />} />
        <Route path="solutions" element={<Home />} />
        <Route path="pricing" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;