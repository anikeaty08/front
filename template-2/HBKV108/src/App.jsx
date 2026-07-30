import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                container: { center: true, padding: '1rem' },
                extend: {
                    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
                    colors: { 
                        brand: { 
                            yellow: '#FFE000', 
                            orange: '#FF6B35',
                            dark: '#0F0F23',
                            darker: '#0A0A1B'
                        } 
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="max-w-6xl w-full mx-auto">
<div className="overflow-hidden bg-zinc-800 rounded-3xl shadow-2xl border border-zinc-700/50">
<main className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

<div className="flex flex-col relative overflow-hidden lg:p-12 bg-zinc-900 pt-8 pr-8 pb-8 pl-8">

<div className="flex items-center space-x-3 mb-8 relative z-10">
<div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
<svg className="lucide lucide-eye lucide-circle-gauge w-[24px] h-[24px]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(17, 24, 39)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-2xl font-semibold text-white">Vision</span>
</div>

<div className="flex-1 flex flex-col relative z-10 max-w-md justify-center">
<div className="mb-8">
<h1 className="lg:text-4xl leading-tight text-3xl font-semibold text-white tracking-tight mb-4">
                                Welcome back to your
                                <span className="text-brand-orange">professional suite.</span>
</h1>
<p className="text-zinc-400 leading-relaxed">
                                Access your VisionPro dashboard and continue creating stunning 4K content with our professional tools.
                            </p>
</div>
<form className="space-y-6">
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
<div className="relative">
<input className="w-full bg-zinc-800 border border-zinc-600 rounded-xl px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="your@email.com" type="email" />
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(107, 114, 128)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
<div className="relative">
<input className="w-full bg-zinc-800 border border-zinc-600 rounded-xl px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="••••••••" type="password" />
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(107, 114, 128)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center space-x-3">
<input className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-brand-orange focus:ring-brand-orange focus:ring-offset-0" type="checkbox" />
<span className="text-sm text-zinc-300">Remember me</span>
</label>
<a className="text-sm text-brand-orange hover:text-brand-orange transition-colors" href="#">Forgot password?</a>
</div>
<button className="w-full bg-brand-orange hover:bg-brand-orange transition-all duration-200 hover:scale-[1.02] font-semibold text-zinc-900 rounded-xl pt-3 pb-3 shadow-lg" type="submit">
                                Sign In to Dashboard
                            </button>
</form>
<div className="mt-8 pt-6 border-t border-zinc-700/50">
<p className="text-center text-zinc-400 text-sm">
                                Don't have an account? 
                                <a className="text-brand-orange hover:text-brand-orange transition-colors font-medium" href="#">Create one now</a>
</p>
</div>
</div>
</div>

<div className="bg-zinc-800 flex flex-col">

<div className="flex-1 bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700/50 border-b pt-8 pr-8 pb-8 pl-8">
<div className="mb-6">
<h3 className="text-lg font-semibold text-white mb-2">Crystal Clear Vision</h3>
<p className="leading-relaxed text-sm text-zinc-400">
                                Professional-grade F1.4 aperture lens captures stunning 4K video with exceptional low-light performance and razor-sharp detail.
                            </p>
</div>
<div className="flex h-40 bg-zinc-700/50 bg-[url(https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?w=1080&q=80)] bg-cover rounded-2xl items-center justify-center">
</div>
</div>

<div className="flex-1 border-b border-zinc-700/50 p-8">
<div className="mb-6">
<h3 className="text-lg font-semibold text-white mb-2">SmartMute Technology™</h3>
<p className="leading-relaxed text-sm text-zinc-400">
                                Intelligent capacitive touch sensor instantly mutes audio with a simple tap. Perfect for confidential moments.
                            </p>
</div>
<div className="flex h-40 bg-zinc-700/50 bg-[url(https://images.unsplash.com/photo-1542810104-7306c5397d97?w=1080&q=80)] bg-cover rounded-2xl items-center justify-center">
</div>
</div>

<div className="flex-1 p-8">
<div className="mb-6">
<h3 className="text-lg font-semibold text-white mb-2">VisionPro Studio Suite</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                                Exclusive access to professional editing suite with real-time filters, AI-powered auto-framing, and cloud sync.
                            </p>
</div>
<div className="flex h-40 bg-zinc-700/50 bg-[url(https://images.unsplash.com/photo-1490281127531-44704fa668fe?w=1080&q=80)] bg-cover rounded-2xl items-center justify-center">
<div className="relative">
</div>
</div>
</div>
</div>
</main>

<div className="bg-zinc-900 border-t border-zinc-700/50 px-8 py-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
<div className="flex items-center space-x-4 text-sm text-zinc-400">
<div className="flex items-center space-x-2">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="">256-bit SSL encryption</span>
</div>
<span className="text-zinc-600">•</span>
<div className="flex items-center space-x-2">
<svg className="text-blue-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01"></path>
<path d="M2 8.82a15 15 0 0 1 20 0"></path>
<path d="M5 12.859a10 10 0 0 1 14 0"></path>
<path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
</svg>
<span>Secure connection</span>
</div>
</div>
<div className="text-sm text-zinc-500">
                        © 2024 VisionPro. All rights reserved.
                    </div>
</div>
</div>
</div>
</div>


    </>
  );
}
