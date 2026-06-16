import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Icons
      lucide.createIcons();

      // Scroll Reveal Observer
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6">
<svg className="lucide lucide-wrench text-[#0A8F6A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<span className="font-semibold tracking-tight text-white text-xs uppercase">
            Dave Bailey’s Mobile Repairs
          </span>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors duration-300" href="#process">
            How it Works
          </a>
<a className="hover:text-white transition-colors duration-300" href="#contact">
            Contact
          </a>
</nav>
<a className="hidden md:flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-medium rounded hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="tel:0400000000">
<svg className="mr-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          0400 000 000
        </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">

<div className="relative z-10 flex flex-col items-center">

<div className="mb-8 opacity-90">
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
             Rockhampton &amp; Surrounds
           </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
          We Come To You.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-700">
            Reliable Mobile Mechanics.
          </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Skip the workshop waiting room. We provide professional mechanical repairs, 
          servicing, and roadworthy inspections right at your home or workplace.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(10,143,106,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(10,143,106,0.25)] w-full sm:w-auto justify-center" href="tel:0400000000" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 143, 106, 0.9)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10">Call Now</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#services">
            View Services
            <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">
            Workshop Quality, <br/> Driveway Convenience.
          </h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-neutral-700 transition-colors mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  The Workshop Hassel
                </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Dropping your car off, arranging lifts, and losing half your day
                  just to get a simple service or repair done.
                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-[#0A8F6A] shadow-[0_0_15px_rgba(10,143,106,0.5)] mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  The Mobile Solution
                </h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                  We come to your home or office fully equipped. You get on with your 
                  day while we handle the mechanical work on-site.
                </p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-2xl relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0A8F6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="w-16 h-16 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
</div>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-8 relative z-10">
            "Professional care for your vehicle without the inconvenience of leaving your home."
          </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-6 h-px bg-[#0A8F6A]"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#0A8F6A] font-semibold">
              Dave Bailey
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-neutral-900/20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-xl text-center reveal group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="flex justify-center mb-4 text-[#0A8F6A]">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.28 3.6-1.28 5.1 0 1.26-1.28 1.26-2.87 0-4-1.5-1.28-3.6-1.28-5.1 0-1.26 1.28-1.26 2.87 0 4Z"></path><rect height="12" rx="2" width="18" x="3" y="6"></rect><path d="M3 6v18h18v-8"></path><path d="M11 12V8h4v4"></path></svg>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              On-Site
            </p>
<p className="text-[11px] text-neutral-500 leading-relaxed mx-auto">
              Home or Office
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-75 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="flex justify-center mb-4 text-[#0A8F6A]">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Locally Owned
            </p>
<p className="text-[11px] text-neutral-500 leading-relaxed mx-auto">
              Rockhampton Based
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-150 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="flex justify-center mb-4 text-[#0A8F6A]">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              All Vehicles
            </p>
<p className="text-[11px] text-neutral-500 leading-relaxed mx-auto">
              Cars, 4WDs, Trailers
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-200 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="flex justify-center mb-4 text-[#0A8F6A]">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Certified
            </p>
<p className="text-[11px] text-neutral-500 leading-relaxed mx-auto">
              RWC Inspections
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex items-center gap-3 mb-10 reveal">
<div className="p-2 rounded bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-[#0A8F6A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight">
            Comprehensive Mechanical Services
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal">
<h3 className="text-white font-medium mb-2 text-lg">Mobile Repairs</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              General mechanical repairs for all makes and models. We diagnose and fix issues on the spot.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal delay-75">
<h3 className="text-white font-medium mb-2 text-lg">Roadworthy Inspections</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              Certified mobile roadworthy certificates (Safety Certificates) for cars, trailers, and light trucks.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal delay-100">
<h3 className="text-white font-medium mb-2 text-lg">Vehicle Servicing</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              Logbook servicing and tune-ups that maintain your warranty. Oil, filters, and safety checks included.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal">
<h3 className="text-white font-medium mb-2 text-lg">Breakdown Assistance</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              Stuck on the side of the road? We provide prompt breakdown assistance to get you moving again.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal delay-75">
<h3 className="text-white font-medium mb-2 text-lg">4WD &amp; Suspension</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              Suspension upgrades, clutch repairs, and installation of 4WD accessories for your off-road needs.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal delay-100">
<h3 className="text-white font-medium mb-2 text-lg">Clutch &amp; Brakes</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
              Complete brake and clutch replacement services. Quality parts used for safety and reliability.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal">
          How It Works
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              01
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Book
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Call us or send a message to schedule a convenient time.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              02
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              We Arrive
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              We come to your location in Rockhampton fully equipped.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 bg-[#0A8F6A] rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_25px_rgba(10,143,106,0.4)] ring-4 ring-black/50">
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              We Fix
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Professional diagnosis and repair on the spot.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              04
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Drive
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Payment is easy and your car is ready to go.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">
<div className="relative max-w-4xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
          Need a Mechanic?
        </h2>
<p className="text-neutral-400 mb-16 text-sm font-light">
          Reliable, local, and straightforward service.
          <br/>
<span className="text-neutral-300">
            Servicing Rockhampton and surrounding areas.
          </span>
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<a className="relative p-8 rounded-2xl bg-[#0A8F6A]/10 border border-[#0A8F6A] hover:bg-[#0A8F6A]/20 transition-all group flex flex-col items-center overflow-hidden shadow-[0_0_40px_-10px_rgba(10,143,106,0.2)]" href="tel:0400000000">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A8F6A]/10 to-transparent opacity-50"></div>
<div className="w-12 h-12 rounded-full bg-[#0A8F6A] flex items-center justify-center mb-6 relative z-10 text-white">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<span className="text-xs text-[#0A8F6A] font-bold uppercase tracking-widest mb-2 relative z-10">
              Call or SMS
            </span>
<span className="text-3xl font-bold text-white mb-2 relative z-10">
              0400 000 000
            </span>
<span className="text-xs text-neutral-400 relative z-10">Click to call</span>
</a>

<a className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden" href="https://www.facebook.com/davebaileysmobilerepairs" target="_blank">
<div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center mb-6 relative z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">
              Social Media
            </span>
<span className="text-2xl font-bold text-white mb-8">Facebook</span>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full">
              Visit Page
            </div>
</a>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-black">
<div className="flex items-center justify-center gap-2 mb-6 opacity-70">
<svg className="text-[#0A8F6A]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-neutral-400 text-sm">Rockhampton, QLD</span>
</div>
<p className="text-sm font-semibold text-white tracking-tight mb-2">
        DAVE BAILEY’S MOBILE REPAIRS
      </p>
<p className="text-[10px] text-neutral-600 mb-10">
        Professional Mobile Mechanic Service.
      </p>
<div className="flex justify-center gap-8 text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
<a className="hover:text-white transition-colors" href="https://www.facebook.com/davebaileysmobilerepairs">Facebook</a>
</div>
</footer>


    </>
  );
}
