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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between text-base">
<a className="font-medium tracking-wide text-white" href="#">MATTEOMONTANARI</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>

<div className="hidden md:flex gap-8 text-zinc-400">
<a className="hover:text-white transition-colors" href="#">curriculum vitae</a>
<a className="hover:text-white transition-colors" href="#">latest works</a>
<a className="hover:text-white transition-colors" href="#">customers</a>
<a className="hover:text-white transition-colors" href="#">testimonials</a>
<a className="hover:text-white transition-colors" href="#">contacts</a>
</div>
</div>
</nav>

<section className="relative pt-48 pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col items-start md:items-center md:text-center relative z-10">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-medium text-white mb-10 shadow-lg shadow-black/50">
                M
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-8">
<span className="text-zinc-500">My name is</span> <span className="text-white font-medium">Matteo</span>, <br className="hidden md:block"/>
<span className="text-zinc-500">I am</span> <span className="text-white font-medium">ConcreteCMS</span> <span className="text-zinc-500">web developer</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl font-light">
<span className="text-white font-medium">10+ years</span> experience <span className="text-white font-medium">worldwide</span> working <span className="text-white font-medium">remotely</span>
</p>
<a className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="#">
                check me out <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-32 bg-white text-zinc-900 px-6 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)] relative z-20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">full stack web developer</h2>
<p className="text-xl text-zinc-600 mb-4 leading-relaxed font-light">
                I am a <span className="font-medium text-zinc-900">freelance webmaster</span> who enjoys working with <span className="font-medium text-zinc-900">graphic designers</span>
</p>
<p className="text-xl text-zinc-600 mb-16 font-light">
                I create <span className="font-medium text-zinc-900">complete websites</span> based on 
                <a className="inline-flex items-center gap-1 text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors" href="#">
                    ConcreteCMS <i className="w-4 h-4 text-zinc-400" data-lucide="external-link" strokeWidth="1.5"></i>
</a> 
                since 2014
            </p>
<div className="mb-12 flex flex-col items-center">
<h3 className="text-lg text-zinc-500 mb-4 font-normal">curriculum vitae</h3>
<a className="px-6 py-3 border border-zinc-200 rounded-full text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all inline-flex items-center gap-2 text-zinc-700" href="#">
                    download <i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
</a>
</div>
<a className="px-10 py-4 bg-zinc-950 text-white rounded-full font-medium text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-950/20 inline-block" href="#">
                latest works
            </a>
</div>
</section>

<section className="py-32 bg-zinc-950 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6 text-white">latest works</h2>
<p className="text-xl text-zinc-400 font-light">
                    latest <span className="text-white font-medium">websites</span> I have developed as <span className="text-white font-medium">freelancer</span> with <span className="text-white font-medium">ConcreteCMS</span>
</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-32">

<div className="group relative rounded-3xl overflow-hidden bg-white border border-white/10 aspect-[4/3] flex flex-col items-center justify-center p-8 transition-transform hover:-translate-y-1 duration-300 shadow-2xl shadow-black/50">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="text-base text-zinc-500 mb-6 font-medium tracking-wide uppercase">Venture Capital firm U.K. based</span>
<h3 className="text-5xl font-normal tracking-tight text-zinc-900 mb-4 flex items-center">
<span className="text-blue-600 font-medium text-6xl">V</span>OLUTION
                        </h3>
<p className="text-lg text-zinc-500 mb-10 font-light">Technology redefining productivity</p>
<a className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/30" href="#">
                            See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] flex flex-col items-center justify-center p-8 transition-transform hover:-translate-y-1 duration-300 shadow-2xl shadow-black/50">

<img alt="Concert" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center text-center mt-auto pb-8">
<span className="text-base text-zinc-300 mb-4 font-medium tracking-wide uppercase">Orchestra &amp; Chorus in Chicago U.S.A.</span>
<h3 className="text-4xl font-normal tracking-tight text-white mb-4">GrantPark Music Festival</h3>
<p className="text-lg text-zinc-400 mb-10 font-light">Advocate for the arts awards benefit</p>
<a className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-base font-medium transition-all inline-flex items-center gap-2" href="#">
                            See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="text-center bg-zinc-900/50 border border-white/5 rounded-3xl p-12 backdrop-blur-sm">
<p className="text-3xl font-normal text-zinc-400 mb-8 tracking-tight">
                    get things <span className="text-white font-medium">done properly</span>
</p>
<a className="px-10 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg hover:bg-zinc-200 transition-colors inline-block" href="#">
                    hire me
                </a>
</div>
</div>
</section>

<section className="py-32 bg-white text-zinc-900 px-6 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)] relative z-20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">websites built by customers</h2>
<p className="text-2xl text-zinc-500 mb-12 font-light">with my ConcreteCMS plugins</p>
<a className="px-10 py-4 bg-zinc-950 text-white rounded-full font-medium text-lg hover:bg-zinc-800 transition-colors inline-block shadow-xl shadow-zinc-950/20" href="#">
                customers websites
            </a>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 pt-32 pb-12 px-6 relative z-10 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white text-center mb-24">contacts</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-32">

<div className="flex flex-col items-center">
<h4 className="text-base font-medium text-white tracking-widest uppercase mb-6 opacity-60">E-mail</h4>
<a className="text-xl text-zinc-300 hover:text-white underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all" href="mailto:matteo@italinux.com">
                        matteo@italinux.com
                    </a>
</div>

<div className="flex flex-col items-center">
<h4 className="text-base font-medium text-white tracking-widest uppercase mb-6 opacity-60">Available</h4>
<p className="text-xl text-white mb-8 font-light">24 / 7</p>
<h4 className="text-base font-medium text-white tracking-widest uppercase mb-6 opacity-60">Response Time</h4>
<p className="text-xl text-zinc-300 font-light">max <span className="text-white font-medium">6 hours</span></p>
</div>

<div className="flex flex-col items-center">
<h4 className="text-base font-medium text-white tracking-widest uppercase mb-6 opacity-60">Address</h4>
<p className="text-xl text-zinc-300 leading-relaxed font-light">
                        Rue de Tolbiac<br/>
                        75013 Paris<br/>
                        France
                    </p>
</div>
</div>

<div className="flex justify-center gap-12 mb-24">
<a className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<i className="w-6 h-6" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<i className="w-6 h-6" data-lucide="layout-template" strokeWidth="1.5"></i>
</a>
</div>

<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-base font-light">
<p>want to download this theme? <a className="text-white hover:underline underline-offset-4 decoration-white/30" href="#">download</a></p>
<p className="mt-4 md:mt-0 opacity-60">Graphics &amp; UI design by <a className="text-white hover:opacity-100 transition-opacity" href="#">MCHNK</a></p>
</div>
</div>
</footer>


    </>
  );
}
