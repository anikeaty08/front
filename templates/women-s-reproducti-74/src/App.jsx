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



        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = overlay.classList.contains('menu-closed');
            if (isClosed) {
                overlay.classList.remove('menu-closed');
                overlay.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.add('menu-closed');
                overlay.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<div className="bg-[#8A5A5C] text-white/95 py-3 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs uppercase tracking-wider font-medium">
<span className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                We are currently in the early validation phase. <a className="underline underline-offset-4 ml-2 hover:text-white/70 transition-colors" href="#test">Take your test now</a>
</span>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#2D2926]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

<a className="flex items-center gap-4 group" href="#">
<div>
<span className="block text-2xl font-serif font-medium tracking-tight text-[#2D2926] leading-none">Aura</span>
<span className="text-[10px] uppercase tracking-[0.25em] text-[#8A5A5C] font-medium block mt-1.5">Reproductive Care</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-12 text-xs font-medium uppercase tracking-widest text-[#5C554F]">
<a className="hover:text-[#B05B43] transition-colors py-2" href="#problem">The Need</a>
<a className="hover:text-[#B05B43] transition-colors py-2" href="#focus">Clinical Focus</a>
<a className="hover:text-[#B05B43] transition-colors py-2" href="#philosophy">Philosophy</a>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-4">
<a className="bg-[#B05B43] text-white px-7 py-3 rounded-xl text-xs font-medium uppercase tracking-widest hover:bg-[#8A3A2C] transition-all shadow-sm flex items-center gap-2" href="#test">
                        Take your test now
                    </a>

<button aria-label="Open Menu" className="lg:hidden p-2 text-[#2D2926]" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-[#FDFBF7] menu-closed lg:hidden flex flex-col" id="mobile-menu-overlay">
<div className="flex justify-between items-center p-6 border-b border-[#2D2926]/5 h-24">
<div>
<span className="block text-xl font-serif font-medium text-[#2D2926] tracking-tight">Aura</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#8A5A5C] mt-1">Reproductive Care</span>
</div>
<button className="p-2 text-[#2D2926]" id="close-menu-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col p-10 gap-8 text-center text-xl font-serif">
<a className="mobile-link hover:text-[#B05B43] tracking-tight" href="#problem">The Need</a>
<a className="mobile-link hover:text-[#B05B43] tracking-tight" href="#focus">Clinical Focus</a>
<a className="mobile-link hover:text-[#B05B43] tracking-tight" href="#philosophy">Philosophy</a>
</div>
</div>

<header className="flex overflow-hidden relative items-center pt-24 pb-28">
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center justify-center">
<div className="max-w-5xl space-y-14 fade-up flex flex-col items-center">
<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-[#2D2926]/5 text-[#8A5A5C] text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-base" icon="solar:medical-kit-linear"></iconify-icon>
                    Structured Diagnosis
                </div>
<h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-normal text-[#2D2926] tracking-tight leading-[1.1] font-serif">
                    Advancing Women’s <br/>
<span className="italic text-[#8A5A5C]">Reproductive Care</span>
</h1>
<p className="text-xl md:text-2xl text-[#5C554F] font-light leading-relaxed max-w-3xl fade-up delay-100 tracking-tight">
                    Built for complex reproductive conditions—from symptoms to diagnosis to continuous care.
                </p>
<div className="flex flex-col sm:flex-row fade-up delay-200 pt-4 gap-x-6 gap-y-4 w-full sm:w-auto">
<a className="uppercase hover:bg-[#8A3A2C] transition-all hover:shadow-md flex items-center justify-center gap-3 text-xs font-medium text-white tracking-widest bg-[#B05B43] rounded-xl py-5 px-12 shadow-sm" href="#test">
                        Take your test now
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 relative bg-[#2D2926] text-[#FDFBF7]" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="space-y-12 pr-0 lg:pr-8">
<div className="space-y-6">
<span className="text-[#F4EFEA] text-xs font-medium tracking-widest uppercase flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#F4EFEA]"></span>
                            The Problem Space
                        </span>
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight font-serif leading-relaxed">
                            Women’s reproductive health is layered and often difficult to assess clearly.
                        </h2>
</div>
<p className="text-white/70 leading-loose font-light text-lg">
                        Navigating complex conditions requires more than a standard screening. Disconnected reporting and surface-level assessments frequently lead to prolonged suffering and diagnostic delays.
                    </p>
<div className="pt-6 p-8 bg-white/5 rounded-2xl border border-white/10">
<p className="text-xl font-serif text-[#F4EFEA] italic leading-loose tracking-tight">
                            "Clarity improves care. Structure improves clarity."
                        </p>
</div>
</div>

<div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#B05B43]">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Overlapping Symptoms</h3>
<p className="text-sm text-white/60 leading-loose">Presentations of different conditions frequently mask one another.</p>
</div>
<div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6 sm:translate-y-8 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#B05B43]">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Delayed Diagnosis</h3>
<p className="text-sm text-white/60 leading-loose">It takes an average of 7-10 years to reach a definitive diagnosis for many conditions.</p>
</div>
<div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6 sm:col-span-2 sm:w-[85%] mx-auto mt-6 sm:mt-0 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#B05B43]">
<iconify-icon className="text-2xl" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Fragmented Reporting</h3>
<p className="text-sm text-white/60 leading-loose">Patient histories are scattered across disjointed systems, hiding crucial patterns.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-28 bg-[#FDFBF7]" id="focus">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<span className="text-[#8A5A5C] text-xs font-medium tracking-widest uppercase block">Diagnosis-First Pillars</span>
<h2 className="text-3xl md:text-4xl font-serif font-normal text-[#2D2926] tracking-tight">Core Clinical Focus</h2>
</div>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#2D2926]/5 border-t-4 border-t-[#8A5A5C]">
<div className="w-14 h-14 bg-[#F4EFEA]/80 rounded-2xl flex items-center justify-center text-[#8A5A5C] mb-8">
<iconify-icon className="text-2xl" icon="solar:test-tube-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D2926] mb-6 tracking-tight">PCOS Assessment</h3>
<ul className="space-y-5 text-sm text-[#5C554F] mb-4">
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Rotterdam Criteria validation</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Precise phenotype classification</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Ovarian morphology mapping</span></li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#2D2926]/5 border-t-4 border-t-[#B05B43] transform md:-translate-y-4 relative overflow-hidden">
<div className="w-14 h-14 bg-[#F4EFEA]/80 rounded-2xl flex items-center justify-center text-[#B05B43] mb-8">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D2926] mb-6 tracking-tight">Endometriosis Evaluation</h3>
<ul className="space-y-5 text-[#5C554F] text-sm mb-4">
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">ASRM classification protocols</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Standardized severity grading</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Comprehensive pain profiling</span></li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#2D2926]/5 border-t-4 border-t-[#2D2926]">
<div className="w-14 h-14 bg-[#F4EFEA]/80 rounded-2xl flex items-center justify-center text-[#2D2926] mb-8">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D2926] mb-6 tracking-tight">Fertility Insight Layer</h3>
<ul className="space-y-5 text-sm text-[#5C554F] mb-4">
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">LH:FSH ratio monitoring</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">HOMA-IR metabolic tracking</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-xl text-[#B05B43] shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span className="leading-relaxed">Structured historical tracking</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#8A5A5C] text-[#FDFBF7]" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1 relative px-6 sm:px-14 py-12 bg-white rounded-3xl shadow-xl text-[#2D2926]">

<div className="absolute left-12 sm:left-20 top-20 bottom-20 w-[1px] bg-[#8A5A5C]/20 border-l border-dashed border-[#8A5A5C]/40"></div>
<div className="space-y-16 relative z-10">
<div className="flex items-start gap-8">
<div className="w-4 h-4 rounded-full bg-[#8A5A5C] ring-4 ring-[#F4EFEA] mt-1 shrink-0"></div>
<div className="space-y-2">
<h4 className="text-lg font-medium text-[#2D2926] tracking-tight">Initial Assessment</h4>
<p className="text-sm text-[#5C554F] leading-loose">Capturing layered symptom histories and diagnostic criteria clearly.</p>
</div>
</div>
<div className="flex items-start gap-8">
<div className="w-4 h-4 rounded-full bg-[#B05B43] ring-4 ring-[#F4EFEA] mt-1 shrink-0"></div>
<div className="space-y-2">
<h4 className="text-lg font-medium text-[#2D2926] tracking-tight">Clinical Diagnosis</h4>
<p className="text-sm text-[#5C554F] leading-loose">Empowering providers with organized, clinician-reviewed outputs.</p>
</div>
</div>
<div className="flex items-start gap-8">
<div className="w-4 h-4 rounded-full bg-[#8A5A5C] ring-4 ring-[#F4EFEA] mt-1 shrink-0"></div>
<div className="space-y-2">
<h4 className="text-lg font-medium text-[#2D2926] tracking-tight">Continuous Care</h4>
<p className="text-sm text-[#5C554F] leading-loose">Longitudinal tracking for ongoing condition management and fertility insight.</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-10">
<h2 className="text-3xl md:text-4xl font-serif font-normal text-white tracking-tight leading-snug">
                        From Diagnosis to <br/>
<span className="text-[#F4EFEA] italic">Continuous Care</span>
</h2>
<p className="text-white/80 leading-loose text-lg font-light">
                        We believe that historical visibility is vital for reproductive health. Our architecture shifts the paradigm from episodic visits to a cohesive, ongoing diagnostic narrative.
                    </p>
<ul className="space-y-5 text-sm font-medium text-white pt-4">
<li className="flex items-center gap-4">
<iconify-icon className="text-[#F4EFEA] text-lg" icon="solar:arrow-right-linear"></iconify-icon> Complete historical visibility
                        </li>
<li className="flex items-center gap-4">
<iconify-icon className="text-[#F4EFEA] text-lg" icon="solar:arrow-right-linear"></iconify-icon> Adaptive baseline tracking
                        </li>
<li className="flex items-center gap-4">
<iconify-icon className="text-[#F4EFEA] text-lg" icon="solar:arrow-right-linear"></iconify-icon> Transparent clinical translation
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white/40 backdrop-blur-sm" id="test">
<div className="max-w-4xl mx-auto px-6 text-center space-y-10">
<h2 className="text-3xl md:text-4xl font-serif font-normal text-[#2D2926] tracking-tight leading-snug max-w-2xl mx-auto">
                Start your first test today — be part of the future of improved reproductive care.
            </h2>
<div className="pt-6">
<a className="inline-flex items-center justify-center gap-3 text-xs font-medium text-white tracking-widest bg-[#B05B43] rounded-xl py-5 px-12 shadow-sm uppercase hover:bg-[#8A3A2C] transition-all hover:shadow-md" href="#test">
                    Take your Test
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#2D2926] text-[#FDFBF7]/60 pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-8">
<a className="block" href="#">
<span className="text-2xl font-serif font-medium text-white tracking-tight">Aura</span>
<span className="block text-[10px] text-[#8A5A5C] tracking-[0.2em] uppercase font-medium mt-1.5">Reproductive Care</span>
</a>
<p className="text-sm leading-loose max-w-sm">
                        A structured platform for assessing and supporting women’s reproductive health. Built for clarity, diagnosis, and continuous care.
                    </p>
</div>
<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-8">Platform</h4>
<ul className="space-y-5 text-sm">
<li><a className="hover:text-white transition-colors" href="#problem">The Need</a></li>
<li><a className="hover:text-white transition-colors" href="#focus">Clinical Focus</a></li>
<li><a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-8">Connect</h4>
<ul className="space-y-5 text-sm">
<li><a className="hover:text-white transition-colors" href="#test">Take your Test</a></li>
<li><a className="hover:text-white transition-colors" href="#">Provider Portal</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#FDFBF7]/40">
<p>© 2024 Aura Reproductive Care. All Rights Reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="bg-[#B05B43] text-white w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center" href="#test">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear"></iconify-icon>
</a>
</div>



    </>
  );
}
