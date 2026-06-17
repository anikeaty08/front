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



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const header = document.getElementById('main-header');

        function toggleMenu() {
            if (mobileMenu.classList.contains('mobile-menu-hidden')) {
                mobileMenu.classList.remove('mobile-menu-hidden');
                mobileMenu.classList.add('mobile-menu-visible');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('mobile-menu-hidden');
                mobileMenu.classList.remove('mobile-menu-visible');
                document.body.style.overflow = 'auto';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg', 'bg-[#050505]/95');
                header.classList.remove('bg-[#050505]/80');
            } else {
                header.classList.remove('shadow-lg', 'bg-[#050505]/95');
                header.classList.add('bg-[#050505]/80');
            }
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/5" id="main-header">

<div className="hidden lg:flex bg-black/50 px-8 py-2 justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/5">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New York &amp; New Jersey</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#9d6b3d]" icon="solar:shield-star-linear"></iconify-icon> Elite Trial Counsel</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:2012898614">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 289-8614
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="relative z-50 flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-[#9d6b3d] to-[#5e4024] flex items-center justify-center text-white font-serif text-2xl font-bold rounded-sm">
                    X
                </div>
<div className="flex flex-col">
<span className="text-xl font-serif text-white tracking-wide leading-none">X Law Firm</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-[#9d6b3d] font-medium leading-none mt-1">Trial Attorneys</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-[13px] font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors" href="#practice-areas">Practice Areas</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors" href="#attorneys">Attorneys</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors" href="#results">Results</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors" href="#locations">Locations</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="bg-white/5 hover:bg-[#9d6b3d] border border-white/10 hover:border-[#9d6b3d] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-all" href="tel:2012898614">
                    Contact Us
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden text-white z-50 relative p-2" id="mobile-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="mobile-menu-hidden fixed inset-0 z-40 bg-[#050505] transition-all duration-300 lg:hidden flex flex-col pt-32 px-8 border-r border-white/10" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#practice-areas">Practice Areas</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#attorneys">Attorneys</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#results">Case Results</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#locations">Locations</a>
</nav>
<div className="mt-auto mb-12 flex flex-col gap-4">
<a className="w-full bg-[#9d6b3d] text-white py-4 text-center text-sm font-semibold uppercase tracking-widest rounded-sm" href="tel:2012898614">
                Call Now
            </a>
</div>
</div>

<section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Architecture" className="w-full h-full object-cover object-center grayscale opacity-40" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,107,61,0.15),transparent_70%)]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mx-auto">
<span className="w-1.5 h-1.5 rounded-full bg-[#9d6b3d] animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-gray-300">Hackensack &amp; New York</span>
</div>
<h1 className="text-5xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight">
                    Justice <span className="text-[#9d6b3d] italic font-light">Redefined.</span>
</h1>
<p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    X Law Firm represents the injured with unwavering resolve. We combine modern litigation strategies with traditional advocacy to secure the results you deserve.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
<a className="bg-[#9d6b3d] hover:bg-[#8a5d34] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all shadow-[0_0_30px_-5px_rgba(157,107,61,0.3)]" href="#locations">
                        Contact Us
                    </a>
<a className="group border border-white/20 hover:border-white hover:bg-white/5 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2" href="#practice-areas">
                        Practice Areas
                    </a>
</div>
<div className="pt-12 mt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
<div className="flex flex-col items-center">
<span className="text-3xl font-serif text-white">$100M+</span>
<span className="text-[10px] uppercase text-gray-500 tracking-wider mt-1">Recovered</span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col items-center">
<span className="text-3xl font-serif text-white">99%</span>
<span className="text-[10px] uppercase text-gray-500 tracking-wider mt-1">Success Rate</span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col items-center">
<span className="text-3xl font-serif text-white">24/7</span>
<span className="text-[10px] uppercase text-gray-500 tracking-wider mt-1">Availability</span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-black border-y border-white/5 py-10">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">Recognized Excellence</p>
<div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white/80 font-serif italic"><iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon> Super Lawyers</div>
<div className="flex items-center gap-2 text-white/80 font-serif italic"><iconify-icon className="text-2xl" icon="solar:medal-ribbon-star-linear"></iconify-icon> Best Lawyers</div>
<div className="flex items-center gap-2 text-white/80 font-serif italic"><iconify-icon className="text-2xl" icon="solar:diploma-verified-linear"></iconify-icon> Top 100 Trial</div>
<div className="flex items-center gap-2 text-white/80 font-serif italic"><iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon> AV Preeminent</div>
</div>
</div>
</div>

<section className="bg-[#9d6b3d]/10 border-b border-[#9d6b3d]/20 text-white py-4 overflow-hidden" id="results">
<div className="flex gap-12 whitespace-nowrap items-center text-sm font-medium tracking-wide">
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$16,000,000</span> Wrongful Death</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$8,750,000</span> Medical Malpractice</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$7,000,000</span> Car Accident</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$1,320,000</span> Premises Liability</span>
</div>
</section>

<section className="py-24 bg-[#050505]" id="practice-areas">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Practice Areas</span>
<h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">How We Can Help</h2>
<p className="text-gray-500 font-light">We handle complex personal injury matters with the attention, resources, and dedication you deserve.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#9d6b3d] transition-colors pb-1" href="#">
                    View All Cases <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#9d6b3d]/50 hover:bg-[#0f0f0f] transition-all duration-500">
<div className="w-12 h-12 rounded-sm bg-white/5 text-gray-300 flex items-center justify-center mb-8 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Auto Accidents</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Expert representation for complex vehicular negligence cases involving severe injuries.</p>
<div className="w-8 h-[1px] bg-[#9d6b3d] group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#9d6b3d]/50 hover:bg-[#0f0f0f] transition-all duration-500">
<div className="w-12 h-12 rounded-sm bg-white/5 text-gray-300 flex items-center justify-center mb-8 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Medical Malpractice</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Holding healthcare providers accountable for deviations from the standard of care.</p>
<div className="w-8 h-[1px] bg-[#9d6b3d] group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#9d6b3d]/50 hover:bg-[#0f0f0f] transition-all duration-500">
<div className="w-12 h-12 rounded-sm bg-white/5 text-gray-300 flex items-center justify-center mb-8 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Premises Liability</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Recovering damages for injuries sustained due to unsafe property conditions.</p>
<div className="w-8 h-[1px] bg-[#9d6b3d] group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#9d6b3d]/50 hover:bg-[#0f0f0f] transition-all duration-500">
<div className="w-12 h-12 rounded-sm bg-white/5 text-gray-300 flex items-center justify-center mb-8 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-broken-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Wrongful Death</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Compassionate legal support for families seeking justice for the loss of a loved one.</p>
<div className="w-8 h-[1px] bg-[#9d6b3d] group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-y border-white/5" id="attorneys">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="space-y-8 order-2 lg:order-1">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em]">Our Team</span>
<h2 className="text-4xl lg:text-5xl font-serif text-white">Unrelenting Advocacy</h2>
<p className="text-gray-400 font-light leading-relaxed">
                        X Law Firm brings decades of big-firm experience to a boutique setting. We limit our caseload to ensure every client receives the direct attention of a partner, not a junior associate.
                    </p>
<div className="space-y-8 pt-4">
<div className="flex gap-5 items-start group">
<div className="w-16 h-16 bg-white/5 flex items-center justify-center text-2xl text-white font-serif rounded-sm border border-white/10 group-hover:border-[#9d6b3d] transition-colors">X</div>
<div>
<h4 className="font-serif text-xl text-white group-hover:text-[#9d6b3d] transition-colors">Managing Partner</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Founder</p>
<p className="text-xs text-gray-500">Former Big Law Trial Attorney • Multi-Million Dollar Verdicts</p>
</div>
</div>
<div className="flex gap-5 items-start group">
<div className="w-16 h-16 bg-white/5 flex items-center justify-center text-2xl text-white font-serif rounded-sm border border-white/10 group-hover:border-[#9d6b3d] transition-colors">Y</div>
<div>
<h4 className="font-serif text-xl text-white group-hover:text-[#9d6b3d] transition-colors">Senior Partner</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Litigation Chair</p>
<p className="text-xs text-gray-500">Certified Civil Trial Attorney • Top 100 National Trial Lawyers</p>
</div>
</div>
</div>
</div>
<div className="relative h-[600px] order-1 lg:order-2">
<img alt="Law Office" className="w-full h-full object-cover rounded-sm absolute top-0 right-0 bottom-0 left-0 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-[#9d6b3d] mb-8 opacity-80" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="text-2xl lg:text-3xl font-serif leading-relaxed mb-8 text-white italic">
                "They didn't just handle my case; they restored my life. The level of professionalism and aggressive representation was beyond anything I expected."
            </h3>
<div className="flex flex-col items-center">
<span className="font-bold uppercase tracking-widest text-sm mb-1 text-white">Client Confidential</span>
<span className="text-[#9d6b3d] text-xs flex gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-xs text-gray-500 mt-2">Personal Injury Settlement</span>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Our Offices</span>
<h2 className="text-3xl font-serif text-white mb-6">Visit X Law Firm</h2>
<p className="text-gray-500 font-light text-sm">Serving clients throughout New York and New Jersey. Consultations available by appointment.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-[#050505] p-10 border border-white/5 hover:border-[#9d6b3d] transition-colors rounded-sm text-center md:text-left group">
<div className="w-10 h-10 bg-[#9d6b3d]/10 text-[#9d6b3d] flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-xl text-white mb-2">Hackensack, NJ</h4>
<p className="text-xs text-gray-400 mb-6 leading-relaxed">
                        Court Plaza South<br/>
                        21 Main St Suite 205<br/>
                        Hackensack, NJ 07601
                    </p>
<div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center md:justify-start">
<a className="text-xs font-bold text-white hover:text-[#9d6b3d] flex items-center gap-2" href="tel:2012898614">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 289-8614
                        </a>
<a className="text-[10px] uppercase font-bold text-[#9d6b3d] tracking-widest border-b border-[#9d6b3d]/30 pb-1 group-hover:border-[#9d6b3d] transition-colors" href="#">Get Directions</a>
</div>
</div>

<div className="bg-[#050505] p-10 border border-white/5 hover:border-[#9d6b3d] transition-colors rounded-sm text-center md:text-left group">
<div className="w-10 h-10 bg-[#9d6b3d]/10 text-[#9d6b3d] flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-xl text-white mb-2">New York, NY</h4>
<p className="text-xs text-gray-400 mb-6 leading-relaxed">
                        Financial District<br/>
                        30 Wall Street, 8th Floor<br/>
                        New York, NY 10005
                    </p>
<div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center md:justify-start">
<a className="text-xs font-bold text-white hover:text-[#9d6b3d] flex items-center gap-2" href="tel:6465687202">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (646) 568-7202
                        </a>
<a className="text-[10px] uppercase font-bold text-[#9d6b3d] tracking-widest border-b border-[#9d6b3d]/30 pb-1 group-hover:border-[#9d6b3d] transition-colors" href="#">Get Directions</a>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border border-[#9d6b3d] text-[#9d6b3d] hover:bg-[#9d6b3d] hover:text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all" href="mailto:info@xlawfirm.com">
                    Email General Inquiries
                </a>
</div>
</div>
</section>

<footer className="bg-black text-gray-500 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6 opacity-90">
<div className="w-8 h-8 bg-[#9d6b3d] flex items-center justify-center text-white font-serif text-lg font-bold rounded-sm">X</div>
<span className="text-lg font-serif text-white">X Law Firm</span>
</div>
<p className="text-xs leading-relaxed max-w-sm mb-6 text-gray-400">
                    A premier litigation firm dedicated to high-stakes personal injury and employment matters. We fight for those who cannot fight for themselves.
                </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#9d6b3d] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#9d6b3d] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#9d6b3d] transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-sm">Navigation</h4>
<ul className="space-y-3 text-[11px] uppercase tracking-wider">
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#practice-areas">Practice Areas</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#attorneys">Attorneys</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#locations">Locations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-sm">Legal</h4>
<ul className="space-y-3 text-[11px] uppercase tracking-wider">
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Attorney Advertising</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 X Law Firm. All Rights Reserved.
        </div>
</footer>



    </>
  );
}
