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
      

<header className="w-full relative z-50">
<nav className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<iconify-icon className="text-3xl text-[#1B2632] group-hover:text-[#A35139] transition-colors" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl font-medium tracking-[0.15em] uppercase text-[#1B2632]">Bitasha</span>
</a>
</nav>
</header>
<main className="flex-grow">

<section className="relative pt-16 pb-32 md:pt-24 md:pb-48 px-6 md:px-10 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB162]/10 via-[#FAFAFA]/0 to-transparent -z-10 pointer-events-none opacity-60 mix-blend-multiply"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9C1B1]/50 bg-white/50 backdrop-blur-sm text-sm font-normal text-[#A35139] tracking-wide mb-10">
<span className="w-2 h-2 rounded-full bg-[#A35139] animate-pulse"></span>
                    Designed in India. Used around the world.
                </span>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#1B2632] leading-[1.05] mb-8">
                    Bitcoin hardware.<br/>
<span className="text-[#A35139]">Done right.</span>
</h1>
<p className="text-xl md:text-3xl text-[#2C3B4D]/70 max-w-2xl leading-relaxed mb-12">
                    Simple, reliable tools to help you use it with confidence.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-[#1B2632] text-[#FAFAFA] rounded-full text-lg font-normal hover:bg-[#2C3B4D] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#1B2632]/10" href="#kossh">
                        Get Kossh
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-[#C9C1B1] text-[#2C3B4D] rounded-full text-lg font-normal hover:border-[#2C3B4D] hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center group" href="#bitaxe">
                        Get BitAxe
                    </a>
</div>
</div>
</section>

<section className="bg-[#1B2632] text-[#FAFAFA] py-32 md:py-48 px-6 md:px-10 relative overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#A35139]/40 via-[#2C3B4D] to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
<iconify-icon className="text-5xl text-[#FFB162]/50 mb-8" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-10 leading-[1.1]">
                    Until now, it’s been<br/> built elsewhere.
                </h2>
<div className="text-xl md:text-2xl text-[#C9C1B1] space-y-4 max-w-2xl mx-auto leading-relaxed font-normal">
<p>Most Bitcoin hardware has come from the US and Europe.</p>
<p className="text-[#FFB162] font-normal pt-2 text-2xl md:text-3xl">BitAsha brings it closer to home.</p>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-10 border-b border-[#C9C1B1]/20" id="kossh">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<div className="w-16 h-16 bg-white border border-[#C9C1B1]/30 rounded-2xl flex items-center justify-center mb-8 text-[#A35139] shadow-sm">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="inline-block px-3 py-1 rounded-full border border-[#C9C1B1]/30 bg-white text-sm font-normal text-[#2C3B4D] mb-6">Kossh</div>
<h3 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1B2632] mb-6 leading-[1.1]">Start with your backup.</h3>
<p className="text-2xl md:text-3xl tracking-tight text-[#A35139] font-normal mb-8">A steel plate for your recovery phrase.</p>
<div className="space-y-4 text-lg md:text-xl text-[#2C3B4D]/80 leading-relaxed font-normal">
<p>If you lose access, you lose everything. Kossh ensures your seed phrase outlives the elements.</p>
<p>Protected against fire, water, and time.</p>
</div>
<div className="mt-12 pt-8 border-t border-[#C9C1B1]/30 flex flex-wrap items-center gap-6">
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#1B2632] text-white rounded-full text-lg font-normal hover:bg-[#2C3B4D] transition-all" href="#">
                            Get Kossh 
                        </a>
<span className="text-xl font-normal text-[#2C3B4D]/60 tracking-tight">Starting at ₹2,500</span>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="w-full aspect-[4/3] bg-gray-100 rounded-[2.5rem] border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-200 opacity-50"></div>
<iconify-icon className="text-5xl text-gray-400 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-gray-400 font-normal text-sm tracking-wide relative z-10">Kossh Product Image</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1B2632] text-white py-24 md:py-40 px-6 md:px-10 relative overflow-hidden" id="bitaxe">

<div className="absolute top-1/2 -right-32 w-[600px] h-[600px] -translate-y-1/2 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#FFB162]/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

<div className="order-1 lg:order-1">
<div className="w-full aspect-[4/3] bg-[#2C3B4D] rounded-[2.5rem] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
<iconify-icon className="text-5xl text-white/30 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-white/30 font-normal text-sm tracking-wide relative z-10">BitAxe Product Image</p>
</div>
</div>

<div className="order-2 lg:order-2">
<div className="w-16 h-16 bg-[#2C3B4D] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#FFB162] shadow-sm">
<iconify-icon className="text-3xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-[#2C3B4D] text-sm font-normal text-[#FAFAFA] mb-6">BitAxe</div>
<h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">Run your own miner.</h3>
<p className="text-2xl md:text-3xl tracking-tight text-[#FFB162] font-normal mb-8">A compact Bitcoin miner you can run from your desk.</p>
<div className="space-y-4 text-lg md:text-xl text-[#C9C1B1] leading-relaxed font-normal">
<p>It runs quietly in the background, consuming minimal power.</p>
<p>Support the network directly, with a small chance of mining a block completely on your own.</p>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1B2632] rounded-full text-lg font-normal hover:bg-gray-100 transition-all" href="#">
                            Explore BitAxe
                        </a>
<span className="text-xl font-normal text-white/50 tracking-tight">₹18,000</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#C9C1B1]/40 py-12 md:py-16 px-6 md:px-10 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl text-[#2C3B4D]" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-medium tracking-[0.15em] uppercase text-[#2C3B4D]">Bitasha</span>
</div>
<p className="text-lg text-[#2C3B4D]/60 font-normal">
                © 2024 Bitasha. Bitcoin hardware.
            </p>
</div>
</footer>

    </>
  );
}
