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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="min-h-screen flex flex-col w-full relative">
<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#E63946] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.07] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#FF4D4D] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.05] pointer-events-none z-0"></div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.02] mix-blend-overlay">
<iconify-icon className="text-white text-[120vw]" icon="solar:settings-linear"></iconify-icon>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#080304]/80 backdrop-blur-xl border-b border-[#1E1E1E]/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 relative z-10 group" href="#">
<span className="font-['Bebas_Neue'] text-3xl tracking-tight text-white mt-1 hover:text-[#FF4D4D] transition-colors">
              FFF.
            </span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#">
              Club
            </a>
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#">
              Resources
            </a>
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#">
              App
            </a>
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#">
              Family office
            </a>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:block text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#">
              Sign in
            </a>
<a className="bg-gradient-to-r from-[#E63946] to-[#FF4D4D] hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] text-white text-sm font-normal px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-white/10" href="#">
              Become a member
            </a>
</div>
</div>
</nav>

<main className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-[#080304]">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-[#080304]/90 via-[#080304]/70 to-[#E63946]/10 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#080304] via-transparent to-transparent z-10"></div>
<img alt="Scenic lake and mountains" className="w-full h-full object-cover object-center grayscale-[40%] opacity-70 saturate-150 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col lg:flex-row justify-between items-center mt-12 gap-12">
<div className="max-w-2xl w-full pt-10">
<span className="inline-flex border border-[#E63946]/40 bg-[#E63946]/10 text-[#FF4D4D] px-4 py-1.5 rounded-full text-xs font-normal tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(230,57,70,0.15)] items-center gap-2 w-max">
<div className="w-2 h-2 bg-[#FF4D4D] rounded-full animate-pulse"></div>
              400+ tech investors joined
            </span>
<h1 className="font-['Bebas_Neue'] text-8xl md:text-9xl leading-[0.85] text-white tracking-tight mb-6 drop-shadow-2xl">
              FINANCE.
              <br/>
              FREEDOM.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE5E5] to-[#E63946]">
                FELLOWS.
              </span>
</h1>
<p className="text-lg text-[#A0A0A0] max-w-lg mb-10 leading-relaxed font-light">
              Private club of top tech investors. Join us to access exclusive
              deals, resources, and a network of highly driven individuals.
            </p>
<div className="flex flex-wrap gap-4 mb-16">
<a className="bg-gradient-to-r from-[#E63946] to-[#FF4D4D] text-white text-lg font-normal px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-[0_0_30px_rgba(230,57,70,0.3)] hover:shadow-[0_0_50px_rgba(230,57,70,0.6)] hover:scale-105 border border-white/10 gap-2" href="#">
                Become a member
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pt-8 border-t border-[#1E1E1E]/50">
<div className="flex flex-col">
<span className="font-['Bebas_Neue'] text-4xl tracking-tight text-white mb-1">
                  410+
                </span>
<span className="text-xs text-[#A0A0A0] uppercase tracking-widest">
                  Tech professionals
                </span>
</div>
<div className="flex flex-col">
<span className="font-['Bebas_Neue'] text-4xl tracking-tight text-white mb-1">
                  €11M
                </span>
<span className="text-xs text-[#A0A0A0] uppercase tracking-widest">
                  Invested
                </span>
</div>
<div className="flex flex-col">
<span className="font-['Bebas_Neue'] text-4xl tracking-tight text-white mb-1">
                  14
                </span>
<span className="text-xs text-[#A0A0A0] uppercase tracking-widest">
                  Deals made
                </span>
</div>
<div className="flex flex-col">
<span className="font-['Bebas_Neue'] text-4xl tracking-tight text-white mb-1">
                  2.5
                </span>
<span className="text-xs text-[#A0A0A0] uppercase tracking-widest">
                  Years active
                </span>
</div>
</div>
</div>
<div className="hidden lg:block w-[380px] bg-[#110507]/60 backdrop-blur-2xl p-8 rounded-3xl border border-[#E63946]/20 shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(230,57,70,0.05)] relative translate-y-[-20px] group hover:-translate-y-8 transition-transform duration-700">
<div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF4D4D] rounded-full animate-pulse shadow-[0_0_20px_rgba(255,77,77,1)] border border-white/20"></div>
<div className="flex items-center justify-between mb-6 pb-6 border-b border-[#1E1E1E]/50 group-hover:border-[#E63946]/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E63946] to-[#080304] border border-[#FF4D4D] flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<div className="font-['Bebas_Neue'] text-2xl tracking-tight text-white leading-none">
                    Deal Flow
                  </div>
<div className="text-[#E63946] text-xs uppercase tracking-widest font-normal">
                    Active Deals
                  </div>
</div>
</div>
</div>
<div className="mb-6 bg-[#080304] rounded-2xl p-4 border border-[#1E1E1E]/80 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E63946]"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div className="text-white text-sm font-normal">New Syndicate</div>
<iconify-icon className="text-[#FF4D4D] text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<p className="text-[#A0A0A0] text-xs font-light pl-2">
                "Series A B2B SaaS target. €2M allocation remaining. Closing in
                4 days."
              </p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between group/task cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-md border border-[#E63946] flex items-center justify-center group-hover/task:bg-[#E63946]/20 transition-colors">
<iconify-icon className="text-[#E63946] opacity-0 group-hover/task:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-white font-normal">
                    Review Term Sheet
                  </span>
</div>
<span className="text-xs text-[#A0A0A0]">2h left</span>
</div>
<div className="flex items-center justify-between group/task cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-md border border-[#1E1E1E] bg-[#E63946] flex items-center justify-center shadow-[0_0_10px_rgba(230,57,70,0.4)]">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-[#A0A0A0] line-through font-normal">
                    KYC Verification
                  </span>
</div>
<span className="text-xs text-[#A0A0A0]">Done</span>
</div>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 border border-[#1E1E1E] text-white text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
              Enter Portal
              <iconify-icon className="text-[#E63946] group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
