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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="fixed w-full z-50 top-0 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-3">
<img alt="Sun Stalwart Logo" className="h-10 w-auto object-contain drop-shadow-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-xl font-medium tracking-tight text-white hidden sm:block">Sun Stalwart</span>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-white text-lg font-medium" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition-colors text-lg font-medium" href="#services">Services</a>
<a className="text-zinc-400 hover:text-white transition-colors text-lg font-medium" href="#contact">Contact</a>
</div>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-base font-medium text-zinc-950 shadow-sm hover:bg-zinc-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="#contact">
                        Get in Touch
                    </a>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative" id="about">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-7 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-10">
<i className="w-4 h-4" data-lucide="building"></i>
<span>Corporate Leadership</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 leading-[1.1]">
                        LT JEN DATO SRI HJ ABDUL MUTALIB BIN DATUK HJ ABDUL WAHAB <span className="text-zinc-500 text-4xl md:text-5xl block mt-2">Retired</span>
</h1>
<p className="text-sm tracking-[0.2em] text-zinc-400 uppercase mb-12 font-medium">
                        Chairman of Sun Stalwart Security Services Sdn Bhd.
                    </p>
<div className="space-y-8 text-xl text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-10">
<p>
                            Founded and incorporated in 2020, Sun Stalwart Security Services Sdn Bhd was established to add finer quality to the ever-evolving security industry. Combining extensive expertise, we strive for greater heights in regulatory and industrial standards.
                        </p>
<p>
                            We proudly hold regulatory approval from the Home Ministry of Malaysia and are formally registered under the Ministry of Finance (MOF) Malaysia.
                        </p>
<p>
                            Under experienced leadership, our success is built on a steadfast policy of integrity, credibility, and strong partnerships. We aim to provide absolute peace of mind, enabling our clients to focus on achieving their core business objectives.
                        </p>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2">
<div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">

<div className="absolute inset-0 bg-zinc-700/20 blur-3xl rounded-[2rem]"></div>

<div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl" style={{maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'}}>

<img alt="LT JEN DATO SRI HJ ABDUL MUTALIB BIN DATUK HJ ABDUL WAHAB" className="w-full h-full object-cover object-top grayscale contrast-125 brightness-90" src="chairman.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">
                    Investing in Excellence
                </h2>
<p className="text-xl text-zinc-400 leading-relaxed">
                    We recognize that exceptional security goes beyond the norm. The key to providing outstanding, first-class service lies in investing deeply in our workforce and protocols.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="group border-l-2 border-zinc-800 pl-8 hover:border-zinc-500 transition-colors">
<div className="mb-6 text-zinc-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="shield"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Rigorous Standards</h3>
<p className="text-lg text-zinc-400 leading-relaxed">We invest heavily in the recruitment process to ensure we bring on board individuals who meet our uncompromising standards of integrity.</p>
</div>
<div className="group border-l-2 border-zinc-800 pl-8 hover:border-zinc-500 transition-colors">
<div className="mb-6 text-zinc-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Continuous Readiness</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Through relentless personal and professional development of our team, we ensure top-tier preparedness for any situation.</p>
</div>
<div className="group border-l-2 border-zinc-800 pl-8 hover:border-zinc-500 transition-colors">
<div className="mb-6 text-zinc-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="briefcase"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Client Partnership</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Our investment translates directly into greater staff motivation, resulting in unwavering reliability across all sectors.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-5xl font-medium tracking-tight text-white mb-8">
                Secure your operations today.
            </h2>
<p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                Let Sun Stalwart handle the security of your premises with our unparalleled expertise and dedication.
            </p>
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-zinc-950 shadow-sm hover:bg-zinc-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="mailto:contact@sunstalwart.com">
                Contact Management
                <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<img alt="Sun Stalwart Logo" className="h-6 w-auto object-contain grayscale opacity-40 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-lg font-medium tracking-tight text-zinc-500">Sun Stalwart Security Services</span>
</div>
<p className="text-lg text-zinc-600 text-center md:text-left">
                    © 2024 Sun Stalwart Security Services Sdn Bhd.
                </p>
</div>
</div>
</footer>


    </>
  );
}
