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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
amber: {
350: '#fbbf24',
450: '#FBBF24',
500: '#f59e0b',
550: '#d97706',
650: '#b45309',
},
purple: {
950: '#2e1065',
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'marquee': 'marquee 40s linear infinite',
'marquee-reverse': 'marqueeReverse 60s linear infinite',
'blink': 'blink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shine': 'shine 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
marqueeReverse: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(0%)' },
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.4' },
},
shine: {
'0%, 80%': { transform: 'translateX(-150%) skewX(-15deg)' },
'100%': { transform: 'translateX(150%) skewX(-15deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-3px)' },
}
}
}
}
}



        // Accordion Toggle
        function toggleAccordion(element) {
            const isActive = element.classList.contains('active');
            
            // Close all other accordions (optional behavior)
            // document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

            if (isActive) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
        }

        // Modal Logic
        const modal = document.getElementById('consultationModal');
        const backdrop = document.getElementById('modalBackdrop');
        const panel = document.getElementById('modalPanel');

        function openModal() {
            modal.classList.remove('hidden');
            void modal.offsetWidth; // Trigger reflow
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            panel.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
            panel.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            panel.classList.add('opacity-0', 'translate-y-4', 'scale-95');
            panel.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
        let isMobileMenuOpen = false;

        function toggleMobileMenu() {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBackdrop.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
<div className="md:py-0 md:h-28 flex h-auto max-w-7xl mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 items-center justify-between">

<div className="flex flex-col gap-1.5">
<a className="flex items-center gap-4 group" href="#">

<div className="relative w-12 h-12 flex-shrink-0 animate-float">
<div className="absolute inset-[-4px] rounded-full border border-amber-500/10 animate-spin-slow"></div>
<div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-500">
<div className="w-full h-full rounded-full bg-purple-950 flex items-center justify-center relative overflow-hidden border border-amber-900/50">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.15),transparent)]"></div>
<iconify-icon className="text-amber-400 drop-shadow-md relative z-10" icon="lucide:shield" strokeWidth="2" width="20"></iconify-icon>
<div className="absolute inset-0 w-[200%] h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full animate-shine z-20"></div>
</div>
</div>
</div>
<div className="flex flex-col">
<span className="text-slate-100 font-medium tracking-tight text-lg leading-none group-hover:text-amber-400 transition-colors">Promised Land</span>
<span className="text-[10px] font-bold tracking-widest uppercase text-amber-500/90 mt-1">Leadership Dev</span>
</div>
</a>
<div className="flex items-center gap-2.5 animate-fade-in opacity-0 pl-1" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-0.5 text-amber-500">
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-amber-500 tracking-wide uppercase">Trusted by 500+ Families</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#services">Services</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#process">The Process</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#team">Meet the Team</a>
</div>

<div className="hidden md:flex flex-col items-center gap-3">
<button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] cursor-pointer" onclick="openModal()">
<span>Free Consultation</span>
<iconify-icon className="text-lg" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<a className="flex items-center gap-2 group cursor-pointer" href="https://registration.wfglaunch.com/" target="_blank" title="Start your career">
<div className="w-3.5 h-3.5 rounded-full border border-amber-500/30 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
</div>
<span className="text-[10px] uppercase animate-blink font-semibold text-amber-500 tracking-wider">Join the Movement</span>
</a>
</div>

<button className="md:hidden text-slate-300 hover:text-amber-500 transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[90] opacity-0 pointer-events-none transition-opacity duration-300" id="mobileMenuBackdrop" onclick="toggleMobileMenu()"></div>
<div className="fixed top-0 right-0 h-full w-[300px] bg-slate-900 border-l border-white/10 z-[100] transform translate-x-full transition-transform duration-300 shadow-2xl" id="mobileMenu">
<div className="p-6 h-full flex flex-col">
<div className="flex justify-between items-center mb-10">
<span className="text-lg font-medium text-white">Menu</span>
<button className="text-slate-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<nav className="flex flex-col gap-6">
<a className="text-lg font-light text-slate-300 hover:text-amber-500" href="#about" onclick="toggleMobileMenu()">About Us</a>
<a className="text-lg font-light text-slate-300 hover:text-amber-500" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-lg font-light text-slate-300 hover:text-amber-500" href="#process" onclick="toggleMobileMenu()">The Process</a>
<a className="text-lg font-light text-slate-300 hover:text-amber-500" href="#team" onclick="toggleMobileMenu()">Meet the Team</a>
<a className="text-lg font-light text-slate-300 hover:text-amber-500" href="#contact" onclick="toggleMobileMenu()">Contact</a>
</nav>
<div className="mt-auto space-y-4">
<button className="w-full bg-amber-500 text-slate-950 font-semibold py-3 rounded-full" onclick="openModal(); toggleMobileMenu();">
                    Free Consultation
                </button>
<a className="flex items-center justify-center gap-2 text-sm text-amber-500 uppercase font-bold tracking-wider" href="https://registration.wfglaunch.com/" target="_blank">
                    Join the Movement
                </a>
</div>
</div>
</div>

<header className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="animate-fade-in inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-900/10 backdrop-blur-sm mb-10 opacity-0" style={{animationDelay: '0.1s'}}>
<span className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">Leadership Development</span>
</div>
<h1 className="animate-slide-up opacity-0 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.1] md:leading-[1.05]" style={{animationDelay: '0.2s'}}>
<span className="text-white block mb-2 md:mb-4">Empower Your <br className="hidden lg:block"/> Financial Future:</span>
<span className="text-amber-500 block">Building Tomorrow,</span>
</h1>
<p className="animate-slide-up opacity-0 text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed" style={{animationDelay: '0.3s'}}>
                Secure the lifestyle you deserve with expert guidance. We bridge the gap between where you are and your promised land.
            </p>
<div className="animate-slide-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-5" style={{animationDelay: '0.4s'}}>
<button className="sm:w-auto flex hover:bg-slate-200 transition-colors text-sm font-medium text-slate-950 bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center shadow-lg shadow-white/5" onclick="openModal()">
                    Start Your Journey
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5"></iconify-icon>
</button>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-medium py-3.5 px-8 rounded-full transition-colors" href="#services">
                    Explore Services
                </a>
</div>
</div>
</header>

<div className="py-10 border-y border-white/[0.06] bg-slate-950 overflow-hidden relative select-none">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee w-max">
<div className="flex items-center gap-20 px-10">
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Wealth Management <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Strategic Growth <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Legacy Planning <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Financial Freedom <span className="text-amber-500/40 text-sm">✦</span></span>
</div>
<div className="flex items-center gap-20 px-10">
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Wealth Management <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Strategic Growth <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Legacy Planning <span className="text-amber-500/40 text-sm">✦</span></span>
<span className="text-2xl font-light text-slate-700 uppercase tracking-widest flex items-center gap-20">Financial Freedom <span className="text-amber-500/40 text-sm">✦</span></span>
</div>
</div>
</div>

<section className="py-32 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative order-2 lg:order-2 group">
<div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-950/40 rounded-[2.5rem] blur-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
<img alt="Corporate Leadership Professional" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1769&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-light text-slate-400">Families Protected</p>
<p className="text-2xl font-medium text-white">5,000+</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 order-1 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-8">
                        Our Story
                    </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter mb-8 leading-[1.1]">
                        Helping families <br/>
<span className="text-slate-600">bridge the gap.</span>
</h2>
<div className="space-y-8 text-lg text-slate-400 font-light leading-relaxed">
<p>
                            We believe that no family should be left behind. At <strong className="text-slate-200 font-normal">Promised Land Leadership Development</strong>, our mission transcends simple financial planning. We are dedicated to democratizing wealth management strategies that were once reserved for the ultra-wealthy.
                        </p>
<p>
                            Our team of experienced associates works tirelessly to educate and empower individuals from all walks of life. Whether you are just starting your career, building a business, or planning your legacy, we sit at the table with you to map out a clear path to your financial goals.
                        </p>
</div>
<div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-amber-500 text-xs" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Financial Education</h4>
<p className="text-sm text-slate-500 font-light">Workshops and personal coaching.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-amber-500 text-xs" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Diverse Solutions</h4>
<p className="text-sm text-slate-500 font-light">Access to top-tier providers.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-900/50 border-t border-white/[0.06]" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">How It Works</h2>
<p className="text-slate-500 font-light text-xl max-w-2xl mx-auto">
                    A simple, transparent journey to your financial freedom.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative p-8 rounded-3xl bg-slate-950 border border-white/10 group hover:border-amber-500/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-6xl text-slate-700 select-none">01</div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Discovery Meeting</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        We sit down to understand your current financial situation, goals, and dreams. No judgment, just clarity.
                    </p>
</div>

<div className="relative p-8 rounded-3xl bg-slate-950 border border-white/10 group hover:border-amber-500/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-6xl text-slate-700 select-none">02</div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-bar-chart-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Strategy Design</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Our experts build a custom roadmap using top-tier financial products to bridge the gap to your goals.
                    </p>
</div>

<div className="relative p-8 rounded-3xl bg-slate-950 border border-white/10 group hover:border-amber-500/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-6xl text-slate-700 select-none">03</div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Execution &amp; Growth</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        We implement the plan and provide ongoing coaching to ensure you stay on track for your legacy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-950/30 border-t border-white/[0.06]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Our Services</h2>
<p className="text-slate-500 font-light text-xl max-w-2xl">
                    Comprehensive financial solutions tailored to your life stage.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-6 items-start">

<div className="flex flex-col">
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Debt &amp; Tax Relief</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Strategies to manage and reduce debt while optimizing tax liabilities for a clearer financial future.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Health Cost Sharing</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Alternative health coverage solutions designed to lower costs while maintaining quality care standards.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Home, Car, Pet &amp; Umbrella</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Comprehensive protection for your most valuable assets and extended liability coverage.
                            </div>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Funeral Concierge / Will Prep</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Complete end-of-life planning assistance including will preparation and funeral coordination.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Term with Living Benefits</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Life insurance that offers access to death benefits while living for qualifying illnesses.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Return of Premium</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Protection options that refund your premiums if you outlive the term of the policy.
                            </div>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Personal Pension Plan</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Create your own guaranteed income stream for a secure and worry-free retirement.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Keyman, S.O.L.A.R Exec. Plan</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Specialized executive compensation and business continuity strategies.
                            </div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.08] group" onclick="toggleAccordion(this)">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer">
<span className="text-xl font-normal text-slate-200 group-hover:text-amber-500 transition-colors tracking-tight pr-4">Build an Agency CashFlow</span>
<span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
<iconify-icon className="absolute transform transition-all duration-300 scale-100 opacity-100 rotate-0 group-[.active]:rotate-45 group-[.active]:opacity-0" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transform transition-all duration-300 scale-90 opacity-0 rotate-[-45deg] group-[.active]:rotate-0 group-[.active]:scale-100 group-[.active]:opacity-100" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-6 text-slate-400 font-light leading-relaxed text-lg">
                                Develop a Thriving Agency Cash Flow with Strategic Financial Solutions.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-950 border-t border-white/[0.06]" id="team">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Meet Leadership</h2>
<p className="text-slate-500 font-light text-xl">
                        Visionaries dedicated to your financial empowerment.
                    </p>
</div>
<button className="flex items-center gap-2 text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors" onclick="openModal()">
                    Join our team
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Emmanuel Tita" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-2">
<h3 className="text-2xl font-medium text-white">Emmanuel Tita</h3>
<p className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Senior Marketing Director</p>
</div>
<p className="text-slate-400 font-light text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                            Leading the charge in financial education and agency development with over a decade of experience helping families secure their futures.
                        </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:mail" width="20"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Leadership Team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-2">
<h3 className="text-2xl font-medium text-white">Sarah Jenkins</h3>
<p className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Financial Strategist</p>
</div>
<p className="text-slate-400 font-light text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                            Specializing in tax-advantaged strategies and retirement planning for small business owners.
                        </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Leadership Team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-2">
<h3 className="text-2xl font-medium text-white">David Chen</h3>
<p className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Agency Director</p>
</div>
<p className="text-slate-400 font-light text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                            Expert in building high-performing teams and agency cash flow development.
                        </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 border-t border-white/[0.06] overflow-hidden" id="partners">
<div className="max-w-7xl mx-auto mb-16 text-center">
<h2 className="text-xl font-medium text-white mb-2">Our Partners</h2>
<p className="text-base font-light text-slate-500">Representing the world's leading providers</p>
</div>
<div className="relative w-full mask-linear-fade">
<div className="flex w-max items-center gap-16 md:gap-24 animate-marquee">

<div className="flex items-center gap-16 md:gap-24">

<img alt="Pacific Life" className="h-10 md:h-14 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert hover:invert-0 hover:brightness-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Pacific_Life_logo.svg/1200px-Pacific_Life_logo.svg.png"/>
<img alt="Voya" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Voya_Financial_logo.svg/1200px-Voya_Financial_logo.svg.png"/>
<img alt="Franklin Templeton" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Franklin_Templeton_logo.svg/1200px-Franklin_Templeton_logo.svg.png"/>
<img alt="Nationwide" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Nationwide_Mutual_Insurance_Company_logo.svg/1200px-Nationwide_Mutual_Insurance_Company_logo.svg.png"/>
<img alt="John Hancock" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Hancock_logo.svg/1200px-John_Hancock_logo.svg.png"/>
<img alt="Transamerica" className="h-8 md:h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert hover:invert-0 hover:brightness-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Transamerica_Corporation_logo.svg/1200px-Transamerica_Corporation_logo.svg.png"/>
<img alt="Athene" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Athene_Holding_logo.svg/1200px-Athene_Holding_logo.svg.png"/>
</div>

<div className="flex items-center gap-16 md:gap-24">

<img alt="Pacific Life" className="h-10 md:h-14 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert hover:invert-0 hover:brightness-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Pacific_Life_logo.svg/1200px-Pacific_Life_logo.svg.png"/>
<img alt="Voya" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Voya_Financial_logo.svg/1200px-Voya_Financial_logo.svg.png"/>
<img alt="Franklin Templeton" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Franklin_Templeton_logo.svg/1200px-Franklin_Templeton_logo.svg.png"/>
<img alt="Nationwide" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Nationwide_Mutual_Insurance_Company_logo.svg/1200px-Nationwide_Mutual_Insurance_Company_logo.svg.png"/>
<img alt="John Hancock" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Hancock_logo.svg/1200px-John_Hancock_logo.svg.png"/>
<img alt="Transamerica" className="h-8 md:h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert hover:invert-0 hover:brightness-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Transamerica_Corporation_logo.svg/1200px-Transamerica_Corporation_logo.svg.png"/>
<img alt="Athene" className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0 hover:brightness-100 hover:invert-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Athene_Holding_logo.svg/1200px-Athene_Holding_logo.svg.png"/>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.06] bg-slate-950 pt-28 pb-14 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-4 space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
<iconify-icon className="text-white mix-blend-screen" icon="lucide:shield" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-xl">Promised Land LD</span>
</div>
<p className="text-slate-500 text-base font-light leading-relaxed max-w-sm">
                        Building the bridge between your current reality and your promised land through strategic financial leadership.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/30 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/30 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/30 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="hidden md:block md:col-span-1"></div>
<div className="md:col-span-3">
<h4 className="text-white text-lg font-medium mb-8">Free Consultation &amp; Contact</h4>
<ul className="space-y-6 text-base text-slate-400 font-light">
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5 text-amber-500 text-lg" icon="lucide:map-pin"></iconify-icon>
<span>101 E Park Blvd, Floor 3 Suite 301<br/>Plano, TX 75024</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-amber-500 text-lg" icon="lucide:phone"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:4699703333">(469) 970-3333</a>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-amber-500 text-lg" icon="lucide:mail"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@promisedlandld.com">info@promisedlandld.com</a>
</li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="text-white text-lg font-medium mb-8">Office Hours</h4>
<div className="p-8 rounded-2xl bg-slate-900 border border-white/[0.06]">
<div className="flex justify-between items-center text-base mb-4">
<span className="text-slate-400 font-light">Monday – Friday</span>
<span className="text-white font-normal">10:00 AM – 5:00 PM</span>
</div>
<div className="w-full h-px bg-white/[0.06] mb-4"></div>
<div className="flex justify-between items-center text-base">
<span className="text-slate-400 font-light">Weekends</span>
<span className="text-slate-500 font-light">By Appointment</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06] text-sm font-light text-slate-600">
<div className="mb-4 md:mb-0">© 2026 Promised Land Leadership Development. All rights reserved.</div>
<div className="flex gap-8">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="consultationModal" role="dialog">

<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity opacity-0 pointer-events-none" id="modalBackdrop" onclick="closeModal()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

<div className="relative transform overflow-hidden rounded-3xl bg-slate-900 border border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl opacity-0 translate-y-4 scale-95" id="modalPanel">

<button className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-20" onclick="closeModal()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="px-8 py-12 sm:p-12">
<h3 className="text-3xl sm:text-4xl font-medium text-white text-center mb-4 tracking-tight">
                            Schedule appointment to meet <span className="text-amber-500">Emmanuel Tita.</span>
</h3>
<p className="text-slate-400 text-center mb-10 font-light text-lg">
                            We will get back to you on a first come, first serve basis.
                        </p>
<form className="space-y-8 text-xl text-slate-300 font-light leading-relaxed">

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>My biggest financial goal is to</span>
<div className="relative flex-grow sm:flex-grow-0 sm:w-80">
<select className="w-full bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 pr-8 appearance-none cursor-pointer hover:border-slate-500 transition-colors">
<option disabled="" selected="" value="">Select one</option>
<option value="protect-income">protect my income</option>
<option value="save-college">save for college</option>
<option value="grow-business">grow my business</option>
<option value="grow-investments">grow my investments</option>
<option value="family-plan">plan for my growing family</option>
<option value="buy-home">buy a home</option>
<option value="save-retirement">save for retirement</option>
<option value="protect-family">protect my family</option>
<option value="not-sure">I'm not sure</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span>.</span>
</div>

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>My age is</span>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 w-20 text-center placeholder:text-slate-600" placeholder="Age" type="text"/>
<span>and I live in</span>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 w-32 text-center placeholder:text-slate-600" placeholder="Zip code" type="text"/>
<span>.</span>
</div>

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>My annual household income is</span>
<div className="relative flex-grow sm:flex-grow-0 sm:min-w-[200px]">
<select className="w-full bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 pr-8 appearance-none cursor-pointer hover:border-slate-500 transition-colors">
<option disabled="" selected="" value="">Select a range</option>
<option value="less-40k">less than $40,000</option>
<option value="40k-75k">$40,000 - $75,000</option>
<option value="75k-100k">$75,001 - $100,000</option>
<option value="100k-150k">$100,001 - $150,000</option>
<option value="150k-200k">$150,001 - $200,000</option>
<option value="200k-300k">$200,001 - $300,000</option>
<option value="more-300k">more than $300,000</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span>.</span>
</div>

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>My name is</span>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 flex-grow sm:flex-grow-0 sm:w-40 text-center placeholder:text-slate-600" placeholder="First name" type="text"/>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 flex-grow sm:flex-grow-0 sm:w-40 text-center placeholder:text-slate-600" placeholder="Last name" type="text"/>
<span>.</span>
</div>

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>Email me at</span>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 flex-grow placeholder:text-slate-600" placeholder="Email address" type="email"/>
<span>.</span>
</div>

<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
<span>Call me at</span>
<input className="bg-transparent border-b border-slate-600 text-amber-500 focus:border-amber-500 focus:outline-none py-1 flex-grow placeholder:text-slate-600" placeholder="Phone number" type="tel"/>
<span>.</span>
</div>
<div className="pt-8 text-center">
<button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-4 px-12 rounded-full transition-all shadow-lg shadow-amber-500/20 w-full sm:w-auto" type="submit">
                                    Request Appointment
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
