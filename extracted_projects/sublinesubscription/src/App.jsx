import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BackgroundEffect from './components/BackgroundEffect'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Customers from './pages/Customers'
import Integrations from './pages/Integrations'
import Billing from './pages/Billing'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <BackgroundEffect />
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App