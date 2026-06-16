import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [volume, setVolume] = useState(1489203948);

  // Simulated live ticking number
  useEffect(() => {
    const interval = setInterval(() => {
      setVolume(prev => prev + Math.floor(Math.random() * 1000));
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white clip-diagonal">
      {/* Background Graphic */}
      <div className="hero-canvas">
        <div className="hero-gradient-layer"></div>
        <div className="hero-diagonal-line top-1/4 left-0"></div>
        <div className="hero-diagonal-line top-2/4 left-0"></div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-none lg:col-span-6 xl:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 font-light text-sm text-indigo-600 bg-indigo-600/10 inline-flex px-3 py-1 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span>Annual transaction volume:</span>
              <span className="tabular-nums-tight font-light">
                ${volume.toLocaleString()}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-slate-800 leading-[1.05] mb-8 text-balance">
              Global payment infrastructure for modern platforms.
            </h1>
            
            {/* Subheadline */}
            <p className="text-[19px] leading-relaxed text-slate-500 font-light mb-10 max-w-xl">
              Accept payments, launch financial services, and scale custom revenue models—from your first customer to your next million.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link 
                to="#" 
                className="group shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full py-3.5 px-8 relative shadow-lg"
                style={{
                  boxShadow: '0 15px 33px -12px rgba(99, 102, 241, 0.9), inset 0 4px 6.3px rgba(165, 180, 252, 0.6), inset 0 -5px 6.3px rgba(67, 56, 202, 0.8)'
                }}
              >
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
                <span className="relative flex items-center gap-2 text-[15px]">
                  Start building
                  <iconify-icon icon="lucide:send" width="16" height="16"></iconify-icon>
                </span>
              </Link>
              
              <Link to="#" className="bg-white text-slate-800 text-[15px] font-medium px-6 py-3.5 rounded-full hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm border border-gray-200 hover:-translate-y-0.5">
                <iconify-icon icon="simple-icons:google" width="16" height="16" className="text-blue-500"></iconify-icon>
                Sign up with Google
              </Link>
            </div>
          </div>

          {/* Right Demo UI */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 justify-end relative">
            <div className="relative w-full max-w-[420px]">
              
              {/* Main Dark Card */}
              <section className="w-full overflow-hidden bg-slate-900 border-slate-800 border rounded-[2.2rem] relative shadow-2xl hover:-translate-y-1 transition-transform duration-500 z-10">
                {/* Status bar */}
                <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-slate-300 border-b border-slate-800/70 pb-3">
                  <span className="font-sans">09:42</span>
                  <div className="flex items-center gap-1.5 text-xs">
                    <iconify-icon icon="solar:wifi-bold-duotone" width="14" height="14"></iconify-icon>
                    <span className="font-sans">Strong</span>
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative mt-3 mx-3 rounded-[1.8rem] overflow-hidden">
                  <img 
                    className="w-full h-52 object-cover" 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986aa754-3b73-4db0-972a-702c137f2789_800w.webp" 
                    alt="Code analytics background" 
                  />
                  <div className="bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-[11px] text-slate-200 font-sans">
                        1,240 devs synced · Live cohort
                      </p>
                      <p className="text-xs text-slate-400 max-w-[200px] font-sans">
                        Code snippets and webhooks will appear here automatically.
                      </p>
                    </div>
                    <button className="flex outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 flex-none text-slate-100 bg-black/50 w-9 h-9 border-white/10 border rounded-full backdrop-blur items-center justify-center transition hover:bg-black/70" type="button">
                      <iconify-icon icon="solar:menu-dots-bold-duotone" width="16" height="16"></iconify-icon>
                    </button>
                  </div>
                </div>

                {/* Content under hero */}
                <div className="mt-6 px-6 pb-6 space-y-6">
                  <div className="space-y-1 border-b border-slate-800/70 pb-4">
                    <p className="text-xs font-medium text-purple-400 uppercase tracking-[0.2em] font-sans">
                      API INTEGRATION · Live Series
                    </p>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-50 font-sans">
                      Optimising Payment Flows
                    </h2>
                    <p className="text-xs text-slate-400 font-sans mt-1">
                      Learn how to dynamically route payments to local acquirers to boost conversion automatically.
                    </p>
                  </div>

                  {/* Action buttons circle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="h-11 w-11 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 hover:bg-purple-400 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80" type="button">
                        <iconify-icon icon="solar:play-bold-duotone" width="20" height="20" className="translate-x-[1px]"></iconify-icon>
                      </button>
                      <div className="text-xs">
                        <p className="text-slate-200 font-medium font-sans">
                          Join session
                        </p>
                        <p className="text-slate-500 font-sans">
                          Starts in 18 minutes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <button className="flex hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 bg-slate-800 w-10 h-10 rounded-full items-center justify-center" type="button">
                        <iconify-icon icon="solar:eye-bold-duotone" width="16" height="16"></iconify-icon>
                      </button>
                      <button className="flex hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 bg-slate-800 w-10 h-10 rounded-full items-center justify-center" type="button">
                        <iconify-icon icon="solar:code-square-bold-duotone" width="16" height="16"></iconify-icon>
                      </button>
                      <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80" type="button">
                        <iconify-icon icon="solar:widget-3-bold-duotone" width="16" height="16"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-3 gap-4 text-[11px] text-slate-400 border-t border-slate-800/70 pt-4">
                    <div>
                      <p className="uppercase tracking-[0.22em] font-medium font-sans">Level</p>
                      <p className="mt-1 text-slate-50 font-medium font-sans">Advanced</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.22em] font-medium font-sans">Length</p>
                      <p className="mt-1 text-slate-50 font-medium font-sans">45 mins</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.22em] font-medium font-sans">Impact</p>
                      <p className="mt-1 text-slate-50 font-medium font-sans">High</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Floating Light Mode Card */}
              <div className="absolute -bottom-10 -left-16 w-[320px] z-20 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] shadow-2xl shadow-indigo-900/10 p-6 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-inner">
                      <iconify-icon icon="solar:check-circle-bold-duotone" width="24" height="24"></iconify-icon>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">Payment received</p>
                      <p className="text-[11px] text-slate-500 font-light">Just now via Apple Pay</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <iconify-icon icon="solar:menu-dots-bold" width="20" height="20"></iconify-icon>
                  </button>
                </div>
                
                <div className="mb-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-slate-400 font-medium text-lg">$</span>
                    <p className="text-3xl font-medium tracking-tight text-slate-800 tabular-nums-tight">4,299.00</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Customer" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-slate-500">From <span className="font-medium text-slate-700">Acme Corporation</span></p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono tracking-tight">INV-2024-081</span>
                  <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors flex items-center gap-1">
                    View receipt
                    <iconify-icon icon="solar:arrow-right-linear" width="14" height="14"></iconify-icon>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;