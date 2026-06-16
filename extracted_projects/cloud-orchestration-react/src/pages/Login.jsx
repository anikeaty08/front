import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative z-10">
      {/* Abstract Background Elements for Login */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      {/* Minimal header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="lucide:arrow-left" class="text-zinc-500 group-hover:text-white group-hover:-translate-x-1 transition-all"></iconify-icon>
          <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">Back to Home</span>
        </Link>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        {/* We use class `animate` to force the transition effect on load */}
        <div className="w-full max-w-[400px] spotlight-group animate-on-scroll animate">
          <div className="relative rounded-2xl bg-zinc-900/60 border border-white/10 p-8 overflow-hidden backdrop-blur-2xl shadow-2xl">
            {/* Hover Spotlight Layer */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" 
              style={{ background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.08), transparent 40%)' }}
            ></div>
            
            {/* Header / Logo */}
            <div className="relative z-10 flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                <iconify-icon icon="lucide:box" class="text-white text-2xl"></iconify-icon>
              </div>
              <h1 className="text-2xl font-geist text-white tracking-tight mb-2">Welcome back</h1>
              <p className="text-sm text-zinc-400 text-center font-light">Log in to your Nexus account to manage your infrastructure.</p>
            </div>

            {/* SSO Providers */}
            <div className="relative z-10 flex flex-col gap-3 mb-6">
              <button className="flex items-center justify-center gap-3 w-full h-11 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-sm active:scale-[0.98]">
                <iconify-icon icon="simple-icons:github" class="text-lg"></iconify-icon>
                Continue with GitHub
              </button>
              <button className="flex items-center justify-center gap-3 w-full h-11 rounded-lg bg-zinc-800/50 border border-white/5 text-white font-medium text-sm hover:bg-zinc-800 hover:border-white/20 transition-colors active:scale-[0.98]">
                <iconify-icon icon="simple-icons:google" class="text-lg"></iconify-icon>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="h-px bg-white/5 flex-1"></div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Or</span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400 pl-1">Email address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <iconify-icon icon="lucide:mail" class="text-zinc-500 group-focus-within:text-white transition-colors text-sm"></iconify-icon>
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 rounded-lg bg-zinc-950/50 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-xs font-medium text-zinc-400">Password</label>
                  <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <iconify-icon icon="lucide:lock" class="text-zinc-500 group-focus-within:text-white transition-colors text-sm"></iconify-icon>
                  </div>
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-11 rounded-lg bg-zinc-950/50 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-11 rounded-lg bg-zinc-800 text-white font-medium text-sm hover:bg-zinc-700 transition-all shadow-sm disabled:opacity-70 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                {isLoading ? (
                  <iconify-icon icon="lucide:loader-2" class="animate-spin text-lg"></iconify-icon>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer Link */}
            <div className="relative z-10 mt-6 text-center">
              <span className="text-xs text-zinc-500">
                Don't have an account? <a href="#" className="text-white hover:underline transition-all">Request access</a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}