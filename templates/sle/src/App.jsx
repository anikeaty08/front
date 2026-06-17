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



        lucide.createIcons();

        // -------------------------
        // GSAP ANIMATION LOGIC
        // -------------------------
        
        gsap.registerPlugin(ScrollTrigger);

        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = ''; 
            
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0'; 
                
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }

        const revealElements = document.querySelectorAll('.reveal-text');
        
        revealElements.forEach(element => {
            splitTextForReveal(element);
            const innerWords = element.querySelectorAll('.word-inner');
            
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            });
        });

        gsap.to("#hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true 
            }
        });

        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if(container && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: container.clientWidth * 0.7, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -(container.clientWidth * 0.7), behavior: 'smooth' });
            });
        }
    
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
<div className="flex items-center gap-2">
<iconify-icon height="28" icon="solar:home-smile-linear" width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">Service League</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight bg-stone-900/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<a className="hover:opacity-70 transition" href="#">Mission</a>
<a className="hover:opacity-70 transition" href="#">Housing</a>
<a className="hover:opacity-70 transition" href="#">Programs</a>
<a className="hover:opacity-70 transition" href="#">Resources</a>
</div>
<button className="bg-white text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-200 transition">
            Refer a Client
        </button>
</nav>

<header className="relative w-full h-screen min-h-[800px] overflow-hidden" id="hero-section">

<div className="absolute inset-0 w-full h-full overflow-hidden">

<img alt="Peaceful home exterior" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter brightness-[0.65] will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:px-12 md:pb-24 text-white pr-6 pb-12 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end z-10">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div className="">
<div className="flex items-center gap-2 mb-6 opacity-80">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase">Inland Empire • California</span>
</div>

<h1 className="reveal-text leading-[1.05] md:text-7xl text-5xl tracking-tighter mb-6 font-light">Safe, structured paths to independence.</h1>
</div>
<div className="flex flex-col items-start lg:items-end justify-end gap-8">
<p className="text-lg md:text-xl font-light leading-relaxed max-w-md text-left lg:text-right opacity-90">
                        Peer-supported transitional housing for individuals recovering from addiction, leaving rehabilitation, or reintegrating from incarceration.
                    </p>
<button className="group flex items-center gap-3 bg-white text-stone-950 pl-6 pr-2 py-2 rounded-full transition hover:bg-stone-200">
<span className="text-sm font-medium">Find housing</span>
<div className="w-8 h-8 bg-stone-950 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
<div className="max-w-7xl mx-auto w-full flex justify-between text-xs font-medium uppercase tracking-widest opacity-50 mt-12 border-t border-white/20 pt-6">
<span>Sober Living Environments (SLE)</span>
<span>© 2024 Service League</span>
</div>
</div>
</header>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex justify-between items-baseline mb-12 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest">/ 01 Our Purpose</span>
<span className="text-xs text-stone-400 font-mono">[ 01 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 relative group overflow-hidden rounded-2xl h-[500px]">
<img alt="Community Support" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
<p className="text-white text-lg font-light leading-snug">"Bridging the gap between rehabilitation and permanent housing through community."</p>
<div className="flex items-center gap-1 text-[#D4E8B0] mt-4">
<iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon>
<span className="text-white text-sm font-medium ml-1">Verified SLE Program</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
<div className="">

<h2 className="reveal-text text-3xl tracking-tight text-stone-900 leading-tight mb-8 font-light">" Recovery is sustainable when built on a foundation of structure, employment, and peer accountability. "</h2>
<p className="text-stone-500 text-base leading-relaxed">We provide a drug-free environment that fosters independent living skills for long-term sobriety.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex-1 flex flex-col justify-end relative overflow-hidden group">
<img alt="Common Room" className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between">
<p className="text-stone-500 text-sm max-w-[200px]">Supporting Families &amp; Parolees</p>
<button className="bg-stone-900 text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
<span className="text-xs font-medium">View Requirements</span>
<div className="bg-white text-black rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-[#2C3E35] rounded-2xl p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden text-[#D4E8B0]">

<div className="absolute top-0 right-0 p-8 opacity-10 text-white">
<iconify-icon height="120" icon="solar:chart-square-linear" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#D4E8B0] rounded-full animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-wide">Program Impact</span>
</div>
<div>
<h3 className="text-6xl tracking-tighter text-white mb-2 font-light">90+</h3>
<p className="text-[#D4E8B0] text-sm opacity-80 mb-8">Average days of residency to ensure effective reintegration.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white">Employment Placement</span>
<div className="absolute left-0 top-0 h-full bg-[#D4E8B0]/20 w-[85%]"></div>
</div>
<span className="text-sm font-medium text-white">85%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white">Housing Retention</span>
<div className="absolute left-0 top-0 h-full bg-[#D4E8B0]/20 w-[78%]"></div>
</div>
<span className="text-sm font-medium text-white">78%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-stone-200 bg-white py-12 relative flex items-center justify-center" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<style>
        @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
            animation: scroll-loop 40s linear infinite;
        }
    </style>
<div className="flex w-max animate-scroll-infinite items-center">

<div className="flex items-center gap-20 px-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out">
<div className="flex items-center gap-2"><iconify-icon icon="solar:hospital-linear" width="32"></iconify-icon><span className="font-bold text-lg">Health Services</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:city-linear" width="32"></iconify-icon><span className="font-bold text-lg">Housing Authority</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon><span className="font-bold text-lg">Social Services</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:scale-linear" width="32"></iconify-icon><span className="font-bold text-lg">Justice Dept</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:briefcase-linear" width="32"></iconify-icon><span className="font-bold text-lg">Vocational</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:home-angle-linear" width="32"></iconify-icon><span className="font-bold text-lg">Community Housing</span></div>
</div>

<div className="flex items-center gap-20 pl-10 pr-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out">
<div className="flex items-center gap-2"><iconify-icon icon="solar:hospital-linear" width="32"></iconify-icon><span className="font-bold text-lg">Health Services</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:city-linear" width="32"></iconify-icon><span className="font-bold text-lg">Housing Authority</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon><span className="font-bold text-lg">Social Services</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:scale-linear" width="32"></iconify-icon><span className="font-bold text-lg">Justice Dept</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:briefcase-linear" width="32"></iconify-icon><span className="font-bold text-lg">Vocational</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:home-angle-linear" width="32"></iconify-icon><span className="font-bold text-lg">Community Housing</span></div>
</div>
</div>
</div>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#2C3E35] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon height="400" icon="solar:home-smile-linear" width="400"></iconify-icon>
</div>
<div className="flex justify-between items-baseline mb-12 border-b border-white/10 pb-4 relative z-10">
<span className="text-xs text-[#D4E8B0]/60 uppercase tracking-widest">/ 02 The Environment</span>
<span className="text-xs text-[#D4E8B0]/60 font-mono">[ 02 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

<div className="flex flex-col justify-between order-2 lg:order-1 gap-12">
<div className="">
<div className="flex items-start justify-between gap-6">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white mb-8 max-w-md font-light">
                            Accountability measures for lasting change.
                        </h2>
<div className="border border-[#D4E8B0]/20 rounded-full p-2 hidden lg:block shrink-0">
<iconify-icon className="text-[#D4E8B0]" height="24" icon="solar:key-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Drug Testing</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Curfew Checks</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">House Rules</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Chores &amp; Maintenance</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Peer Support</span>
</div>
</div>
<div className="bg-[#23322b] border border-white/5 rounded-2xl p-6 flex gap-6 items-center">
<div className="w-20 h-20 rounded-xl bg-stone-700 flex items-center justify-center">
<iconify-icon className="text-stone-400" icon="solar:user-id-linear" width="40"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">Case Management</h4>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-white/50">Individualized Plans</span>
</div>
<p className="text-sm text-white/70 max-w-xs mb-4">"We work directly with probation officers and counselors to ensure compliance."</p>
<button className="bg-[#D4E8B0] text-[#2C3E35] pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium w-max hover:bg-white transition">
                            Contact Case Manager
                            <div className="bg-[#2C3E35] text-[#D4E8B0] rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] group order-1 lg:order-2">
<img alt="Group Meeting" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90" src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 bg-[#1A2621]/90 backdrop-blur-md p-5 rounded-2xl shadow-xl w-72 border border-white/10">
<div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
<div className="">
<span className="text-[10px] uppercase text-[#D4E8B0]/60 font-bold tracking-wider">Stability Metric</span>
<div className="text-2xl tracking-tight font-light text-white">Day 45 <span className="text-xs text-white/40 font-normal">avg</span></div>
</div>
<div className="text-right">
<span className="text-[10px] uppercase text-[#D4E8B0]/60 font-bold tracking-wider">Employment</span>
<div className="text-2xl tracking-tight font-light text-white">100% <span className="text-xs text-white/40 font-normal">req</span></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-xs text-white/80">
<iconify-icon className="text-[#D4E8B0]" icon="solar:check-circle-linear"></iconify-icon>
                            Meeting Attendance
                        </div>
<div className="flex items-center gap-2 text-xs text-white/80">
<iconify-icon className="text-[#D4E8B0]" icon="solar:check-circle-linear"></iconify-icon>
                            Rent Contribution
                        </div>
<div className="flex items-center gap-2 text-xs text-white/80">
<iconify-icon className="text-[#D4E8B0]" icon="solar:check-circle-linear"></iconify-icon>
                            Clean UA Screen
                        </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-stone-50 max-w-[1600px] border-stone-100 border rounded-[40px] mt-12 mr-auto mb-12 ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex justify-between items-baseline mb-16">
<div className="">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4">/ 03 Services</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 max-w-lg font-light">
                    Services bridging the gap to society.
                 </h2>
</div>
<div className="hidden lg:block">
<p className="text-sm text-stone-500 max-w-xs text-right">Comprehensive support systems for reentry and recovery.</p>
<span className="text-xs text-stone-400 font-mono block text-right mt-2">[ 03 ]</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative rounded-3xl overflow-hidden h-[700px]">
<img alt="Writing resumes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="text-xs text-stone-500 uppercase font-medium">Reentry Support</p>
<h3 className="text-3xl tracking-tight text-stone-900 font-light">Vocational<span className="text-sm text-stone-400 font-light"> Training</span></h3>
</div>
<div className="bg-stone-900 text-white text-[10px] uppercase font-bold tracking-wide px-3 py-1.5 rounded">
                            Mandatory
                        </div>
</div>
<div className="w-full h-1 bg-stone-100 rounded-full mb-4 overflow-hidden">
<div className="w-[70%] bg-[#2C3E35] h-full"></div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-medium">
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span>Resume Bldg</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span>Interview Prep</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span>Job Placement</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="group p-8 rounded-2xl bg-white shadow-sm border border-stone-100 transition cursor-pointer">
<div className="flex items-start gap-6">
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono text-stone-500">01</div>
<div className="flex-1">
<h3 className="text-2xl tracking-tight text-stone-900 mb-3 font-light">Sober Living (SLE)</h3>
<p className="text-stone-500 text-base font-light leading-relaxed mb-6">
                                Alcohol and drug-free peer-supported living environments. Residents commit to sobriety, curfew, and contributing to the household community.
                            </p>
<div className="flex items-center justify-between">
<button className="bg-[#2C3E35] text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
<span className="text-xs font-medium">Check Availability</span>
<div className="bg-white/20 text-white rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
<div className="flex items-center gap-1 text-[#2C3E35] text-sm font-medium">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
<span className="text-stone-600 text-xs">Shared &amp; Single Rooms</span>
</div>
</div>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600">02</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Life Skills Training</h3>
<p className="text-sm text-stone-400 mt-1">Financial literacy, cooking, and conflict resolution.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600">03</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Justice Reintegration</h3>
<p className="text-sm text-stone-400 mt-1">Specialized support for parolees and probation.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600">04</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Permanent Housing</h3>
<p className="text-sm text-stone-400 mt-1">Assistance finding long-term accommodation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex justify-between items-baseline mb-8 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest">/ 04 Expectations</span>
<span className="text-xs text-stone-400 font-mono">[ 04 ]</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-4xl tracking-tight text-stone-900 max-w-lg font-light">
                Creating a safe foundation for your future.
            </h2>
<div className="flex gap-2">
<button className="px-4 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium">Standards</button>
<button className="px-4 py-1.5 border border-stone-200 text-stone-600 rounded-full text-xs font-medium hover:border-stone-400 transition">Structure</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 overflow-hidden group flex flex-col bg-stone-100 bg-[url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop)] bg-cover bg-center rounded-3xl pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="relative z-10">
<span className="px-3 py-1 bg-white/80 backdrop-blur text-stone-900 text-[10px] font-bold uppercase tracking-wider rounded border border-stone-200">Core Requirement</span>
<h3 className="text-4xl text-stone-900 mt-6 mb-2 font-light">Zero Tolerance</h3>
<p className="text-stone-700 max-w-sm font-medium">To maintain safety, we strictly enforce an alcohol and drug-free environment through regular testing.</p>
</div>
<div className="relative z-10 flex justify-between items-end">
<div className="text-2xl text-stone-900 font-light">Safe Space</div>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:scale-110 transition shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-1 bg-[#E8F0D6] rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-[#2C3E35] rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-[#2C3E35]">Structure</h4>
<p className="text-xs text-[#2C3E35]/70 mt-1">Curfews &amp; Meetings</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-[#2C3E35]/10 pt-4">
<span className="font-medium text-[#2C3E35]">Daily</span>
<span className="text-[10px] uppercase tracking-wide text-[#2C3E35]/60">Check-ins</span>
</div>
</div>

<div className="md:col-span-1 bg-white border border-stone-200 rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-4">
<iconify-icon icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900">Employment</h4>
<p className="text-xs text-stone-500 mt-1">Active Job Search</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-stone-100 pt-4">
<span className="font-medium text-stone-900">Required</span>
<span className="text-[10px] uppercase tracking-wide text-stone-400">Or School</span>
</div>
</div>

<div className="md:col-span-2 bg-[#2C3E35] rounded-3xl p-8 flex items-center justify-between text-white relative overflow-hidden group">
<div className="relative z-10 max-w-[60%]">
<h4 className="text-2xl mb-2 font-light">Community Living</h4>
<p className="text-sm text-white/60 mb-6">Shared household responsibilities, weekly house meetings, and peer accountability.</p>
<button className="text-xs font-medium border-b border-white pb-0.5 hover:text-[#D4E8B0] hover:border-[#D4E8B0] transition">View House Rules</button>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition duration-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#2C3E35] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
<div className="flex justify-between items-start mb-12 relative z-10">
<div className="">
<span className="text-xs text-white/50 uppercase tracking-widest block mb-4">/ 05 Success Stories</span>
<h2 className="text-3xl md:text-5xl tracking-tight max-w-lg leading-tight font-light">
                        Real lives restored.
                    </h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2C3E35] transition duration-300" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2C3E35] transition duration-300" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-4 snap-x hide-scrollbar scroll-smooth" id="testimonial-container">

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#23322b] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="Resident" className="w-full h-full object-cover rounded-2xl lg:rounded-none lg:rounded-l-3xl opacity-90" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#D4E8B0]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light">
                                 "The structure here gave me the foundation I needed. I found a job within 30 days and learned how to live without substances."
                             </blockquote>
<div className="flex items-center gap-4">
<div>
<div className="font-medium text-lg text-[#D4E8B0]">Sarah M.</div>
<div className="text-xs uppercase tracking-wider opacity-60">Alumni, 18 Months Sober</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#23322b] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="Resident" className="lg:rounded-none lg:rounded-l-3xl opacity-90 w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#D4E8B0]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light">
                                 "Transitioning from incarceration was terrifying, but the Service League helped me navigate probation and find permanent housing."
                             </blockquote>
<div className="flex items-center gap-4">
<div className="">
<div className="font-medium text-lg text-[#D4E8B0]">David R.</div>
<div className="text-xs uppercase tracking-wider opacity-60">Former Resident</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto border-b border-stone-200">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4">/ 06 FAQ</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-12 font-light">
                    Common Questions
                </h2>
<div className="mb-12">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] uppercase font-bold text-stone-400">Bed Availability</span>
<span className="text-[10px] font-bold text-stone-400">Limited Space</span>
</div>
<div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#2C3E35] w-[92%] h-full"></div>
</div>
</div>
<button className="bg-stone-900 text-white pl-6 pr-2 py-3 rounded-full flex items-center gap-4 hover:bg-stone-800 transition w-full md:w-auto justify-between md:justify-start">
<span className="text-sm font-medium">Apply for Housing</span>
<div className="bg-white text-black rounded-full p-1.5">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="lg:col-span-8 space-y-6">

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">How long can I stay?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-stone-400 leading-relaxed max-w-2xl hidden group-hover:block">
                        Programs are typically designed for 90 days or longer, depending on your individual recovery needs and progress toward permanent housing.
                    </p>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">Do you accept parolees?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-stone-400 leading-relaxed max-w-2xl">
                        Yes, we serve individuals leaving incarceration and work closely with probation and parole officers to ensure compliance and successful reintegration.
                    </p>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">Is employment required?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">What are the house rules?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C3E35] text-white px-6 py-24 md:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="text-2xl tracking-tight mb-8 font-light">Rebuilding lives through community.</h2>
<button className="bg-[#D4E8B0] text-[#2C3E35] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-white transition">
<span className="text-sm font-medium">Contact Intake</span>
<div className="bg-[#2C3E35] text-[#D4E8B0] rounded-full p-1.5">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="grid grid-cols-2 lg:col-span-3 gap-8 text-[10px] uppercase tracking-widest text-[#D4E8B0]/60">
<div className="space-y-8">
<div className="">
<span className="block mb-4 text-[#D4E8B0]">Office Hours</span>
<div className="text-white normal-case text-sm font-light">Mon-Fri: 9:00 AM - 5:00 PM</div>
</div>
<div>
<span className="block mb-4 text-[#D4E8B0]">Contact</span>
<div className="text-white normal-case text-sm font-light block">(+1) 909 555 0123</div>
<div className="text-white normal-case text-sm font-light block">info@serviceleague.org</div>
</div>
</div>
<div className="space-y-8">
<div>
<span className="block mb-4 text-[#D4E8B0]">Locations</span>
<div className="text-white normal-case text-sm font-light mb-4">
                            Serving San Mateo County &amp; Inland Empire
                        </div>
</div>
<div className="pt-8">
<span className="block mb-4 text-[#D4E8B0]">Connect</span>
<div className="flex gap-2">
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#D4E8B0]/20 text-white hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition" href="#">
<iconify-icon icon="simple-icons:facebook"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#D4E8B0]/20 text-white hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition" href="#">
<iconify-icon icon="simple-icons:linkedin"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-[#D4E8B0]/20 flex flex-col md:flex-row justify-between text-[10px] text-[#D4E8B0]/60 tracking-wider uppercase">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition" href="#">About Us</a>
<a className="hover:text-white transition" href="#">Donate</a>
<a className="hover:text-white transition" href="#">Volunteer</a>
</div>
<div className="flex gap-6">
<span>© 2024 Service League</span>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
