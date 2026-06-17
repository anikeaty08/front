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



        window.addEventListener("load", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Simple Fade Up Animations
            gsap.utils.toArray('.gsap-fade-up').forEach(element => {
                gsap.fromTo(element, 
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power3.out",
                      scrollTrigger: {
                          trigger: element,
                          start: "top 85%",
                      }
                    }
                );
            });
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
      

<section className="min-h-[95vh] overflow-hidden flex flex-col lg:pb-32 text-white bg-[#090821] pt-32 pb-24 relative justify-center">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="w-full h-full opacity-30" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7c3aed]/5 rounded-full blur-[100px] pointer-events-none"></div>
</div>

<nav className="-translate-x-1/2 z-50 flex gap-4 sm:gap-6 whitespace-nowrap bg-[#090821]/80 border-white/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6 fixed top-8 left-1/2 shadow-2xl backdrop-blur-xl gap-x-4 gap-y-4 items-center">
<a aria-label="Web10 Home" className="flex items-center hover:opacity-80 transition-opacity" href="/">
<svg className="text-white fill-current" height="20" viewbox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="nav-mask">
<rect fill="white" height="100%" width="100%"></rect>
<rect fill="black" height="2.5" width="38" x="-2" y="27"></rect>
</mask>
</defs>
<text className="font-playfair" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="38" font-style={{}} font-weight="600" mask="url(#nav-mask)" tracking="tight" x="0" y="36">WEB</text>
<text className="font-playfair" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="20" font-weight="600" x="88" y="16">10</text>
</svg>
</a>
<div className="hidden sm:block w-px h-5 bg-white/10 ml-2"></div>
<div className="hidden sm:flex items-center gap-6 px-2">
<a className="text-sm text-slate-300 hover:text-white transition-colors font-geist" href="#services">Services</a>
<a className="hover:text-white transition-colors text-sm text-slate-300 font-geist" href="#pricing">Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors font-geist" href="#about">About</a>
</div>
<a className="flex items-center gap-2 bg-white text-[#090821] px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors font-geist" href="#contact">
            Let's Talk
            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
<div className="lg:px-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 sm:mt-16 z-10 w-full max-w-7xl mt-12 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col z-10 max-w-2xl relative items-start">
<div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8 font-geist">
<span className="w-2 h-2 rounded-full bg-[#7c3aed] shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse"></span>
                Accepting New Clinic Clients
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl text-white tracking-tighter mb-8">
<span className="font-light italic text-slate-100 font-playfair">Websites that</span><br className=""/>
<span className="font-medium text-[#7c3aed] tracking-tighter font-playfair">work as hard</span><br/>
<span className="inline-block whitespace-nowrap font-light italic text-slate-100 font-playfair max-w-4xl">as your clinic does.</span>
</h1>
<p className="leading-relaxed md:text-lg text-lg font-light text-slate-50 font-geist max-w-xl mb-8">
                We're a web design agency building fast, professional websites for clinics and private practices. The digital foundation that brings patients through your door and keeps your diary full.
            </p>
<div className="flex flex-wrap uppercase text-xs font-medium text-slate-300 tracking-wide mb-12 gap-x-6 gap-y-3 items-center">
<div className="flex text-slate-400 font-geist gap-x-2 gap-y-2 items-center"><iconify-icon className="text-[#7c3aed]" height="16" icon="solar:bolt-linear" style={{color: 'rgb(124, 58, 237)'}} width="16"></iconify-icon>High Performance</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
<div className="flex gap-2 text-slate-400 font-geist gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-[#7c3aed]" height="16" icon="solar:smartphone-linear" width="16"></iconify-icon> Mobile Responsive
                </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
<div className="flex gap-2 text-slate-400 font-geist gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-[#7c3aed]" height="16" icon="solar:calendar-linear" width="16"></iconify-icon> Booking Ready
                </div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#7c3aed] border border-transparent text-white text-sm font-medium hover:bg-[#6d28d9] transition-all shadow-lg shadow-[#7c3aed]/25 text-center font-geist" href="#contact">
                    Start Your Project
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group font-geist" href="#services">
                    View Our Work 
                    <svg className="lucide lucide-arrow-right text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative w-full aspect-square max-w-[550px] mx-auto hidden lg:flex items-center justify-center pointer-events-none z-0">
<style>
                @keyframes float-inner-1 {
                    0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
                    50% { transform: translate(-2%, 3%) rotate(2deg) scale(1.02); }
                }
                @keyframes float-inner-2 {
                    0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
                    50% { transform: translate(2%, 3%) rotate(-2deg) scale(0.98); }
                }
                @keyframes float-inner-3 {
                    0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
                    50% { transform: translate(2%, -2%) rotate(3deg) scale(1.03); }
                }
                @keyframes rotate-breathe-1 {
                    0% { transform: scale(1) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1.05) rotate(180deg); opacity: 0.6; }
                    100% { transform: scale(1) rotate(360deg); opacity: 1; }
                }
                @keyframes rotate-breathe-2 {
                    0% { transform: scale(1) rotate(360deg); opacity: 1; }
                    50% { transform: scale(0.95) rotate(180deg); opacity: 0.5; }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
            </style>

<div className="w-2 h-2 rounded-full bg-[#7c3aed] shadow-[0_0_15px_3px_rgba(124,58,237,0.6)] relative z-20 animate-pulse"></div>

<div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed]/20 to-transparent z-10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
<div className="absolute h-[120%] w-[1px] bg-gradient-to-b from-transparent via-[#7c3aed]/20 to-transparent z-10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{animationDelay: '1s'}}></div>

<div className="absolute w-[15%] h-[15%] rounded-full border border-[#7c3aed]/30 border-t-[#7c3aed] z-10 animate-[spin_4s_linear_infinite]"></div>
<div className="absolute w-[45%] h-[45%] rounded-full border border-white/5 border-r-white/20 z-0" style={{animation: 'rotate-breathe-1 15s linear infinite'}}></div>
<div className="absolute w-[75%] h-[75%] rounded-full border border-white/5 border-l-white/10 z-0" style={{animation: 'rotate-breathe-2 20s linear infinite'}}></div>

<div className="absolute w-[100%] h-[100%] -translate-x-[30%] -translate-y-[15%] z-0">
<div className="w-full h-full rounded-full border border-white/[0.03]" style={{animation: 'float-inner-1 12s ease-in-out infinite'}}></div>
</div>
<div className="absolute w-[100%] h-[100%] translate-x-[30%] translate-y-[15%] z-0">
<div className="w-full h-full rounded-full border border-white/[0.03]" style={{animation: 'float-inner-2 15s ease-in-out infinite'}}></div>
</div>
<div className="absolute w-[80%] h-[80%] translate-x-[20%] -translate-y-[30%] z-0">
<div className="w-full h-full rounded-full border border-white/[0.03]" style={{animation: 'float-inner-3 18s ease-in-out infinite'}}></div>
</div>

<div className="absolute top-[28%] right-[10%] z-20">
<div className="text-xs tracking-widest text-[#7c3aed] uppercase mb-1 font-geist">High Performance</div>
<div className="w-24 h-[1px] bg-[#7c3aed]/40"></div>
</div>
<div className="absolute bottom-[28%] right-[5%] z-20 text-right">
<div className="text-xs tracking-widest text-slate-400 uppercase mb-1 font-geist">Booking <span className="text-white/60 font-geist">Ready</span></div>
<div className="flex justify-end">
<div className="w-24 h-[1px] bg-slate-400/30"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-indigo-400 to-indigo-600 pt-24 pb-24" id="offer">
<div className="lg:px-12 max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="gsap-fade-up overflow-hidden bg-[#090821] rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative">
<div className="md:p-14 bg-[#090821] border-[#7c3aed]/20 border rounded-[2.4rem] mt-8 pt-12 pr-8 pb-12 pl-8 relative shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed] text-white text-sm font-medium px-6 py-2 rounded-full uppercase tracking-wider whitespace-nowrap font-geist z-20">
        Limited to 5 Clinics
    </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 relative items-center">
<div className="flex flex-col items-start">
<h2 className="text-5xl font-medium text-white mb-6 font-playfair tracking-normal md:text-4xl">
                Founding Client Offer:<br/>75% Off All Packages
            </h2>
<p className="leading-relaxed text-base text-slate-300 font-geist mb-10">We're looking for 5 clinics or private practices to work with at a special rate. We want to build our portfolio with brilliant practices like yours. You get an incredible deal, we get to showcase our work. Win win.</p>
<a className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-[#7c3aed] rounded-full hover:bg-[#6d28d9] transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] border border-[#7c3aed]/50 font-geist" href="#contact">
                Claim Your Spot
            </a>
</div>
<div className="lg:pl-8">
<h3 className="text-lg font-medium tracking-tight text-white uppercase mb-8 font-geist">What you get:</h3>
<ul className="flex flex-col gap-6">
<li className="flex items-start gap-4">
<svg className="text-[#7c3aed] shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
<span className="text-lg text-slate-300 font-geist"><strong className="font-medium text-white font-geist">75% off</strong> your website (save up to £2,250)</span>
</li>
<li className="flex items-start gap-4">
<svg className="text-[#7c3aed] shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
<span className="text-lg text-slate-300 font-geist"><strong className="font-medium text-white font-geist">Direct access</strong> to our founder throughout the build</span>
</li>
<li className="flex items-start gap-4">
<svg className="text-[#7c3aed] shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
<span className="text-lg text-slate-300 font-geist"><strong className="font-medium text-white font-geist">Featured</strong> in our portfolio as a founding clinic</span>
</li>
<li className="flex items-start gap-4">
<svg className="text-[#7c3aed] shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
<span className="text-lg text-slate-300 font-geist"><strong className="font-medium text-white font-geist">3 months free</strong> Web10 Care lite included (worth £147)</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-8" id="who-we-work-with">
<div className="lg:px-12 max-w-4xl mx-auto px-6 text-center">
<h2 className="gsap-fade-up text-3xl md:text-4xl font-semibold tracking-tight text-[#090821] mb-6 font-playfair">Built for clinics and private practices.</h2>
<p className="gsap-fade-up text-lg text-slate-500 leading-relaxed font-geist">
                We work with physiotherapy and sports therapy clinics, dental and orthodontic practices, osteopaths and chiropractors, private GPs, psychologists and counsellors, aesthetic clinics, podiatrists, audiologists, and allied health specialists. If you see patients and want to see more of them, you're in the right place.
            </p>
</div>
</section>

<section className="bg-slate-50 border-t border-slate-200 pt-16 pb-24" id="pricing">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#090821] mb-4 font-playfair">Transparent Pricing</h2>
<p className="text-sm text-slate-500 font-geist">Simple, straightforward packages. Founding clients get 75% off the prices below.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">

<div className="gsap-fade-up bg-white rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
<h3 className="text-lg font-medium text-[#090821] mb-2 font-geist">Solo Practice</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-[#090821] font-playfair">£750</span>
</div>
<p className="text-sm text-slate-500 min-h-[3rem] mb-8 font-geist">For solo practitioners launching their first professional website.</p>
<a className="block w-full py-3 px-4 bg-slate-50 text-[#090821] text-sm font-medium text-center rounded-full hover:bg-slate-100 transition-colors border border-slate-200 mb-8 mt-auto font-geist" href="#contact">
                        Select Solo
                    </a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> 5 core pages (Home, About, Treatments, Contact, Book Online)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Mobile responsive, accessible design
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> GDPR compliant enquiry form
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Basic local SEO (Google Business Profile setup included)
                        </li>
</ul>
</div>

<div className="gsap-fade-up bg-[#090821] rounded-3xl p-8 border border-[#090821] relative shadow-2xl shadow-[#090821]/20 lg:-mt-4 lg:mb-4 flex flex-col h-full">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider whitespace-nowrap font-geist">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">Growing Clinic</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white font-playfair">£1,500</span>
</div>
<p className="text-sm text-slate-400 min-h-[3rem] mb-8 font-geist">For established clinics that want to rank on Google and fill the diary.</p>
<a className="block w-full py-3 px-4 bg-[#7c3aed] text-white text-sm font-medium text-center rounded-full hover:bg-[#6d28d9] transition-colors mb-8 mt-auto shadow-lg shadow-[#7c3aed]/20 font-geist" href="#contact">
                        Select Growing Clinic
                    </a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Everything in Solo, plus:
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> 8 pages including dedicated treatment and service pages
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Embedded online booking (patients book without leaving your site)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Tailored branding, colours, and photography direction
                        </li>
</ul>
</div>

<div className="gsap-fade-up bg-white rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
<h3 className="text-lg font-medium text-[#090821] mb-2 font-geist">Multi-Practitioner</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-[#090821] font-playfair">£3,000</span>
</div>
<p className="text-sm text-slate-500 min-h-[3rem] mb-8 font-geist">For multi-therapist or multi-location practices that need a serious digital presence.</p>
<a className="block w-full py-3 px-4 bg-slate-50 text-[#090821] text-sm font-medium text-center rounded-full hover:bg-slate-100 transition-colors border border-slate-200 mb-8 mt-auto font-geist" href="#contact">
                        Select Multi-Practitioner
                    </a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Everything in Growing Clinic, plus:
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> 12+ pages with individual practitioner bio pages
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Advanced booking flow (by practitioner, service, or location)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Live chat or automated enquiry triage
                        </li>
</ul>
</div>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-500 bg-slate-100/50 inline-block px-6 py-2 rounded-full border border-slate-200 font-geist">
                    Every package: 30 minute discovery call included · you own your site and domain · no lock in contracts · hosting and care available from £49/month.
                </p>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 border-t border-slate-200" id="care">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="flex w-fit bg-[#7c3aed]/10 px-4 py-2 rounded-full mx-auto mb-6 items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#7c3aed] uppercase font-geist">
<iconify-icon className="text-[#7c3aed]" height="16" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span>Hosting and Support</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#090821] mb-4 font-playfair">Your website is a living thing.<br/>We keep it alive.</h2>
<p className="text-sm text-slate-500 font-geist">Sites break, plugins update, hackers probe, content goes stale. Web10 Care means you never have to think about any of it.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="gsap-fade-up bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
<h3 className="text-lg font-medium text-[#090821] mb-2 font-geist">Care Lite</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-[#090821] font-playfair">£49<span className="text-lg text-slate-400 font-normal font-geist">/mo</span></span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[2.5rem] font-geist">Essentials to keep your site online and safe.</p>
<ul className="flex flex-col gap-4 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Hosting and domain management
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Daily backups
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Security monitoring and SSL renewal
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> 1 content update per month
                        </li>
</ul>
</div>

<div className="gsap-fade-up bg-white rounded-3xl p-8 border-2 border-[#7c3aed] relative shadow-xl shadow-[#7c3aed]/10 lg:-mt-4 lg:mb-4 flex flex-col h-full">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider whitespace-nowrap font-geist">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-medium text-[#090821] mb-2 font-geist">Care</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-[#090821] font-playfair">£100<span className="text-lg text-slate-400 font-normal font-geist">/mo</span></span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[2.5rem] font-geist">Everything in Lite, plus active monthly support.</p>
<ul className="flex flex-col gap-4 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> 5 content updates per month
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Monthly performance report
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Priority email support
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-[#7c3aed] shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Plugin and software updates
                        </li>
</ul>
</div>

<div className="gsap-fade-up bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
<h3 className="text-lg font-medium text-[#090821] mb-2 font-geist">Care Pro</h3>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-[#090821] font-playfair">£200<span className="text-lg text-slate-400 font-normal font-geist">/mo</span></span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[2.5rem] font-geist">For clinics treating their website as a core marketing channel.</p>
<ul className="flex flex-col gap-4 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Everything in Care, plus:
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Unlimited small content updates
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Monthly 30 minute strategy call
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-geist">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="18" icon="solar:check-read-linear" width="18"></iconify-icon> Ongoing local SEO (citations, GBP optimisation, reviews)
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 pt-24 pb-24 border-t border-slate-200" id="about">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="gsap-fade-up md:text-4xl text-3xl font-semibold text-[#090821] tracking-tight font-playfair mb-6">Built for clinics that deserve better.</h2>
<p className="gsap-fade-up md:text-lg leading-relaxed text-base text-slate-500 font-geist">Web10 was founded to help clinics and private practices compete online. We believe every practice deserves a website that looks professional, loads fast, books patients, and meets the rules that apply to healthcare, without the large agency price tag.</p>
</div>
<h3 className="gsap-fade-up text-sm font-semibold tracking-widest text-slate-400 uppercase text-center mb-12 font-geist">How we work</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>
<div className="gsap-fade-up relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center text-3xl font-semibold text-[#7c3aed] mb-6 shadow-sm font-playfair">
                        1
                    </div>
<h4 className="text-xl font-semibold text-[#090821] tracking-tight font-playfair mb-3">Discovery call</h4>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-geist">Tell us about your practice, your patients, and what a better website would actually do for you. We'll outline a plan.</p>
</div>
<div className="gsap-fade-up flex flex-col text-center z-10 relative items-center" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center text-3xl font-semibold text-[#7c3aed] mb-6 shadow-sm font-playfair">
                        2
                    </div>
<h4 className="text-xl font-semibold tracking-tight text-[#090821] mb-3 font-playfair">Build</h4>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-geist">We create your site in days, not weeks. Wired up to your booking system, optimised for local search, and built for your patients. You're kept in the loop throughout.</p>
</div>
<div className="gsap-fade-up relative z-10 flex flex-col items-center text-center" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center text-3xl font-semibold text-[#7c3aed] mb-6 shadow-sm font-playfair">
                        3
                    </div>
<h4 className="text-xl font-semibold tracking-tight text-[#090821] mb-3 font-playfair">Launch</h4>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-geist">Once approved, we go live. You get a beautiful, booking ready website and a short walkthrough so you can update it yourself.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 my-24 gap-x-8 gap-y-8" id="services">
<div className="gsap-fade-up hover:border-[#7c3aed]/50 hover:shadow-xl hover:shadow-[#7c3aed]/5 transition-all duration-300 group bg-slate-50 border-slate-50 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen text-[#090821]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#090821] tracking-tight mb-3 font-playfair">Design</h3>
<p className="text-sm text-slate-500 leading-relaxed font-geist">Modern, clean, professional designs that reflect the quality of care you provide and help you stand out from other clinics in your area.</p>
</div>
<div className="gsap-fade-up hover:border-[#7c3aed]/50 hover:shadow-xl hover:shadow-[#7c3aed]/5 transition-all duration-300 group bg-slate-50 border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-code text-[#090821]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#090821] mb-3 font-playfair">Build</h3>
<p className="text-sm text-slate-500 leading-relaxed font-geist">Fast loading, mobile responsive, accessible websites built with modern technology. Wired directly into the booking systems clinics actually use.</p>
</div>
<div className="gsap-fade-up hover:border-[#7c3aed]/50 hover:shadow-xl hover:shadow-[#7c3aed]/5 transition-all duration-300 group bg-slate-50 border-slate-200 border rounded-3xl px-8 py-8" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check text-[#090821]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#090821] mb-3 font-playfair">Maintain</h3>
<p className="text-sm text-slate-500 leading-relaxed font-geist">Secure hosting, daily backups, GDPR compliant forms, and ongoing updates so you never have to worry about your site going down or falling behind.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#090821] mb-4 font-playfair">Questions clinic owners usually ask.</h2>
</div>
<div className="space-y-4">
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">Do I own my website?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Yes, completely. You own the domain, the design, and all the content. If you ever want to move to another host or agency, we'll hand over the files and help you migrate. No drama, no hostage situation.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">Is Web10 Care required?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        We strongly recommend it, and every site we build is optimised for our hosting. If you have in house IT or a preferred host, we can discuss self hosting, but we can't guarantee performance or security outside Web10 Care.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">What happens if I cancel Care later?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Your site keeps running until the end of your billing month. We'll help you migrate to a new host and hand over everything you need. You won't lose your site.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">Do you write the copy for my site?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        We'll guide you with prompts, examples from other clinics, and light editing. For polished, SEO optimised copy written from scratch, we offer professional copywriting from £75 per page. Just ask.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">What if I already have branding?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Perfect. Send us your logo, brand colours, and any guidelines and we'll build around them. If you don't have branding yet, Growing Clinic and above include design direction to pull it together.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">How involved do I need to be?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        We ask for about 2 to 3 hours of your time across the project. A kickoff call, feedback on the first design, and a review before launch. Everything else is on us.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">Can I update the site myself after launch?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Yes. We build on a CMS that lets you edit text, swap images, and publish blog posts without touching code. We'll walk you through it at handover. If you'd rather we handle updates, that's what Web10 Care is for.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">What about GDPR and patient data?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Our contact and booking forms are GDPR compliant by default. We don't collect patient medical data directly. For that, we integrate with dedicated clinical systems like Cliniko, Jane, or SimplePractice which are built to handle it securely.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">Do you offer payment plans?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Yes. All packages can be split into 50% upfront and 50% on launch. For Multi-Practitioner, we can arrange three instalments. Just ask.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">What if I'm not happy with the design?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Every package includes revision rounds for exactly this reason. We don't move to development until you're happy with the design direction. If we can't get there together, we'll refund the balance beyond work completed.
                    </div>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#090821] hover:text-[#7c3aed] transition-colors">
<span className="font-geist">How soon can we start?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-3 leading-relaxed pl-1 pr-8 font-geist">
                        Usually within 1 to 2 weeks of your deposit. Book a discovery call to check current availability.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="gsap-fade-up">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#090821] mb-6 font-playfair">Let's build your clinic's website.</h2>
<p className="text-base text-slate-500 mb-12 max-w-md font-geist">
                        Ready to get started? Fill out the form to request a quote or claim your Founding Client spot. We reply to all enquiries within 24 hours.
                    </p>
<div className="flex flex-col gap-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#090821]" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#090821] font-geist">Email Us</p>
<a className="text-sm text-slate-500 hover:text-[#7c3aed] transition-colors font-geist" href="mailto:hello@web10.co">hello@web10.co</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#090821]" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#090821] font-geist">Response Time</p>
<p className="text-sm text-slate-500 font-geist">We reply within 24 hours</p>
</div>
</div>
</div>
</div>
<div className="gsap-fade-up bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/20">
<form action="https://formspree.io/f/mnjgbgoj" className="flex flex-col gap-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-500 font-geist">Name</label>
<input className="bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors placeholder:text-slate-300" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-500 font-geist">Practice Name</label>
<input className="bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors placeholder:text-slate-300" name="practice_name" placeholder="City Physiotherapy" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-500 font-geist">Email Address</label>
<input className="bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors placeholder:text-slate-300" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-500 font-geist">Phone Number</label>
<input className="bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors placeholder:text-slate-300" name="phone" placeholder="07123 456789" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-slate-500 font-geist">Type of Practice</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors appearance-none cursor-pointer rounded-none pr-8" name="practice_type">
<option className="font-geist" disabled="" selected="" value="">Select an option...</option>
<option className="font-geist" value="physio">Physiotherapy</option>
<option className="font-geist" value="dental">Dental</option>
<option className="font-geist" value="osteopathy">Osteopathy</option>
<option className="font-geist" value="chiropractic">Chiropractic</option>
<option className="font-geist" value="gp">Private GP</option>
<option className="font-geist" value="mental_health">Mental Health</option>
<option className="font-geist" value="aesthetic">Aesthetic</option>
<option className="font-geist" value="podiatry">Podiatry</option>
<option className="font-geist" value="other">Other</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-slate-500 font-geist">Package Interest</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors appearance-none cursor-pointer rounded-none pr-8" name="package">
<option className="font-geist" disabled="" selected="" value="">Select an option...</option>
<option className="font-geist" value="solo">Solo - £750</option>
<option className="font-geist" value="growing">Growing Clinic - £1,500</option>
<option className="font-geist" value="multi">Multi-Practitioner - £3,000</option>
<option className="font-geist" value="unsure">Not sure yet</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2 mb-4">
<label className="text-xs font-medium text-slate-500 font-geist">Message</label>
<textarea className="bg-transparent border-b border-slate-200 text-sm text-[#090821] py-2 focus:outline-none focus:border-[#7c3aed] transition-colors resize-none placeholder:text-slate-300" name="message" placeholder="Tell us a bit about your clinic and goals..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#090821] hover:bg-[#7c3aed] text-white text-sm font-medium py-4 rounded-full transition-colors shadow-md font-geist" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#090821] text-slate-400 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a aria-label="Web10 Home" className="flex items-center mb-6 hover:opacity-80 transition-opacity" href="/">
<svg className="text-white fill-current" height="28" viewbox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="footer-mask">
<rect fill="white" height="100%" width="100%"></rect>
<rect fill="black" height="2.5" width="38" x="-2" y="27"></rect>
</mask>
</defs>
<text className="font-playfair" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="38" font-style={{}} font-weight="600" mask="url(#footer-mask)" tracking="tight" x="0" y="36">WEB</text>
<text className="font-playfair" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="20" font-weight="600" x="88" y="16">10</text>
</svg>
</a>
<p className="text-sm text-slate-400 max-w-sm font-geist">
                        Websites for clinics and private practices. Fast, professional, booking ready.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 font-geist">Navigation</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#offer">Founding Offer</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 font-geist">Contact</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="mailto:hello@web10.co">hello@web10.co</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#contact">Get a Quote</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-slate-500">
<p className="font-geist">© 2026 Web10 Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
