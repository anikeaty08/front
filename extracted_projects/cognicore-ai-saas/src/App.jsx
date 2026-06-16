import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Capabilities from './pages/Capabilities'
import Solutions from './pages/Solutions'
import Company from './pages/Company'
import PricingPage from './pages/PricingPage'
import SignIn from './pages/SignIn'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/company" element={<Company />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<GetStarted />} />
      </Routes>
    </div>
  )
}

export default App