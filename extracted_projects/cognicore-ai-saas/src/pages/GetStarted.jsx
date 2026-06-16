import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function GetStarted() {
  const mainRef = useRef(null)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', password: '' })

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.fromTo('.auth-card',
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'expo.out' }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      navigate('/capabilities') // Redirect to a protected-like area or dashboard
    }, 2000)
  }

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 flex items-center justify-center relative px-6">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb]/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

        <div className="auth-card relative z-10 w-full max-w-md p-8 md:p-10 bg-[#131315]/80 backdrop-blur-xl border border-[#27272a] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="mb-8">
            <h1 className="text-3xl font-light tracking-tighter text-white font-geist mb-3">Start building</h1>
            <p className="text-zinc-400 font-extralight text-sm leading-relaxed font-geist">
              Create an account to deploy your first neural architecture. No credit card required.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-medium text-zinc-400 font-geist uppercase tracking-wider">Full Name</label>
              <div className="relative flex items-center group">
                <iconify-icon icon="solar:user-linear" class="absolute left-4 text-zinc-500 group-focus-within:text-[#2563eb] transition-colors"></iconify-icon>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#18181b] border border-[#27272a] text-white text-sm rounded-none py-3 pl-12 pr-4 focus:outline-none focus:border-[#2563eb]/50 focus:bg-[#1e1e22] transition-colors font-geist placeholder:text-zinc-600" 
                  placeholder="Jane Doe" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-medium text-zinc-400 font-geist uppercase tracking-wider">Work Email</label>
              <div className="relative flex items-center group">
                <iconify-icon icon="solar:letter-linear" class="absolute left-4 text-zinc-500 group-focus-within:text-[#2563eb] transition-colors"></iconify-icon>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#18181b] border border-[#27272a] text-white text-sm rounded-none py-3 pl-12 pr-4 focus:outline-none focus:border-[#2563eb]/50 focus:bg-[#1e1e22] transition-colors font-geist placeholder:text-zinc-600" 
                  placeholder="name@company.com" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-medium text-zinc-400 font-geist uppercase tracking-wider">Company <span className="text-zinc-600 lowercase tracking-normal">(Optional)</span></label>
              <div className="relative flex items-center group">
                <iconify-icon icon="solar:buildings-linear" class="absolute left-4 text-zinc-500 group-focus-within:text-[#2563eb] transition-colors"></iconify-icon>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-[#18181b] border border-[#27272a] text-white text-sm rounded-none py-3 pl-12 pr-4 focus:outline-none focus:border-[#2563eb]/50 focus:bg-[#1e1e22] transition-colors font-geist placeholder:text-zinc-600" 
                  placeholder="Acme Corp" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-medium text-zinc-400 font-geist uppercase tracking-wider">Password</label>
              <div className="relative flex items-center group">
                <iconify-icon icon="solar:lock-password-linear" class="absolute left-4 text-zinc-500 group-focus-within:text-[#2563eb] transition-colors"></iconify-icon>
                <input 
                  type="password" 
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-[#18181b] border border-[#27272a] text-white text-sm rounded-none py-3 pl-12 pr-4 focus:outline-none focus:border-[#2563eb]/50 focus:bg-[#1e1e22] transition-colors font-geist placeholder:text-zinc-600" 
                  placeholder="At least 8 characters" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3.5 mt-4 bg-[#2563eb] text-white text-sm font-medium hover:bg-blue-600 transition-all active:scale-[0.98] font-geist flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:active:scale-100 disabled:hover:bg-[#2563eb]"
            >
              {isLoading ? (
                <iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon>
              ) : (
                <>
                  Create Account
                  <iconify-icon icon="solar:arrow-right-linear" class="text-base"></iconify-icon>
                </>
              )}
            </button>
            <p className="text-center text-xs text-zinc-600 font-geist mt-1">
              By continuing, you agree to our <a href="#" className="underline hover:text-zinc-400">Terms of Service</a> and <a href="#" className="underline hover:text-zinc-400">Privacy Policy</a>.
            </p>
          </form>

          <div className="mt-8 text-center border-t border-[#27272a]/50 pt-8">
            <span className="text-zinc-500 text-sm font-extralight font-geist">Already have an account? </span>
            <Link to="/signin" className="text-white text-sm font-medium hover:text-[#2563eb] transition-colors font-geist ml-1">
              Sign in
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}