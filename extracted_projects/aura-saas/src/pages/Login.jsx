import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0099ff]/10 via-black to-black"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <Reveal delay={100} direction="down">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm font-medium">
            <iconify-icon icon="solar:arrow-left-linear" class="text-lg"></iconify-icon>
            Back to home
          </Link>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <iconify-icon icon="simple-icons:framer" class="text-white text-3xl"></iconify-icon>
              <h2 className="text-2xl font-bold text-white tracking-tight">Welcome back</h2>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/50 transition-all"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-white/70">Password</label>
                  <a href="#" className="text-xs text-[#0099ff] hover:underline">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/50 transition-all"
                />
              </div>

              <button className="w-full bg-white text-black font-semibold rounded-xl py-3 mt-2 hover:bg-gray-200 transition-colors">
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-white/50 mt-8">
              Don't have an account? <Link to="/signup" className="text-white hover:underline">Sign up</Link>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}