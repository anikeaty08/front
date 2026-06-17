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
brand: {
yellow: '#FADA5E',
dark: '#222222',
},
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'float-fast': 'float 4s ease-in-out infinite',
'wave': 'wave 2s ease-in-out infinite alternate',
'slide-up': 'slideUp 0.8s ease-out forwards',
'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-12px)' },
},
wave: {
'0%': { transform: 'rotate(-5deg)' },
'100%': { transform: 'rotate(25deg)' },
},
slideUp: {
'0%': { opacity: 0, transform: 'translateY(24px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
pulseGlow: {
'0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
'50%': { opacity: 0.5, transform: 'scale(1.05)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



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
      

<div className="fixed top-0 w-full z-[60] bg-brand-dark text-brand-yellow">
<div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs">
<div className="font-medium tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
<span className="hidden sm:inline">Download App</span>
</div>
<div className="flex items-center gap-4 font-normal">
<a className="hover:text-white transition-colors flex items-center gap-1" href="#download">iOS</a>
<span className="text-slate-600">|</span>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#download">Android</a>
</div>
</div>
</div>

<nav className="fixed top-10 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-xl tracking-tight text-brand-dark flex items-center gap-2" href="#">
<iconify-icon className="text-brand-yellow" icon="solar:rocket-linear"></iconify-icon> RAKETLY
                </a>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#experts">For Experts</a>
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#enterprise">For Businesses</a>
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#features">Features</a>
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#safety">Safety</a>
<a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#waitlist">Join</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-normal text-slate-600 hover:text-brand-dark transition-colors" href="#login">Login</a>
<a className="bg-brand-dark text-brand-yellow px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm" href="#waitlist">Get Started</a>
</div>
</div>
</nav>

<header className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative border-b border-slate-200 bg-white">

<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob pointer-events-none"></div>
<div className="absolute top-40 left-20 w-[400px] h-[400px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-medium mb-6 animate-[slideUp_0.8s_ease-out_forwards]">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon> The Future of Local Services
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-dark leading-[1.1] mb-6 opacity-0 animate-[slideUp_0.8s_ease-out_0.1s_forwards]">
                    Find Trusted Experts Near You.<br/>
<span className="text-slate-400 font-medium">Or Turn Your Skills Into Income.</span>
</h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl leading-relaxed opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards] font-normal">
                    Raketly connects skilled workers, professionals, and service businesses with people who need their services — safely, locally, and instantly.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
<a className="w-full sm:w-auto bg-brand-dark text-brand-yellow px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-md text-center" href="#how-it-works">
                        Find Services
                    </a>
<a className="w-full sm:w-auto bg-white text-brand-dark border border-slate-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm text-center" href="#experts">
                        Become an Expert
                    </a>
</div>

<div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
<div className="flex items-center gap-1.5"><iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon> Verified Experts</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-brand-yellow text-lg" icon="solar:map-point-linear"></iconify-icon> Location-based matching</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-800 text-lg" icon="solar:lock-keyhole-linear"></iconify-icon> Secure platform</div>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards]">

<div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-brand-dark animate-float-fast z-20">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-20 left-0 bg-brand-yellow/20 p-3 rounded-2xl text-brand-dark animate-float z-20" style={{animationDelay: '1s'}}>
<iconify-icon icon="solar:broom-linear" width="24"></iconify-icon>
</div>
<div className="absolute top-20 right-10 bg-brand-dark p-3 rounded-2xl shadow-lg text-brand-yellow animate-float-fast z-20" style={{animationDelay: '2s'}}>
<iconify-icon icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-32 right-0 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-brand-dark animate-float z-20" style={{animationDelay: '0.5s'}}>
<iconify-icon icon="solar:hammer-linear" width="24"></iconify-icon>
</div>

<div className="relative z-10 animate-float-delayed">
<svg fill="none" height="280" viewbox="0 0 160 160" width="280" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse-glow" cx="80" cy="80" fill="#FADA5E" fillOpacity="0.2" r="70"></circle>
<rect fill="#222222" height="40" rx="12" width="40" x="60" y="85"></rect>
<circle cx="80" cy="65" fill="#fcd34d" r="16"></circle>
<path d="M 58 60 C 58 38, 102 38, 102 60 Z" fill="#FADA5E"></path>
<rect fill="#FADA5E" height="6" rx="3" width="52" x="54" y="60"></rect>
<circle cx="73" cy="65" fill="#222222" r="2"></circle>
<circle cx="87" cy="65" fill="#222222" r="2"></circle>
<path d="M 75 72 Q 80 76 85 72" stroke="#222222" strokeLinecap="round" strokeWidth="2"></path>
<rect fill="#222222" height="25" rx="5" width="10" x="50" y="90"></rect>
<g className="animate-wave" style={{transformOrigin: '105px 100px'}}>
<rect fill="#222222" height="35" rx="5" width="10" x="100" y="70"></rect>
<rect fill="#cbd5e1" height="30" rx="2" width="6" x="102" y="45"></rect>
<path d="M 96 45 C 96 35 114 35 114 45 L 108 45 C 108 40 102 40 102 45 Z" fill="#cbd5e1"></path>
</g>
<rect fill="#475569" height="6" width="44" x="58" y="105"></rect>
<rect fill="#FADA5E" height="10" rx="2" width="10" x="75" y="103"></rect>
</svg>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-3 z-30 w-max animate-slide-up" style={{animationDelay: '1.5s'}}>
<div className="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center text-brand-dark">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-brand-dark tracking-tight">Expert Ready</div>
<div className="text-xs text-slate-500">ID &amp; NBI Cleared</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium tracking-tight text-slate-400 mb-8 uppercase">Built for Real Work in the Real World</h2>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-400">
<div className="flex items-center gap-2 hover:text-brand-dark transition-colors cursor-default">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Home Services</span>
</div>
<div className="flex items-center gap-2 hover:text-brand-dark transition-colors cursor-default">
<iconify-icon icon="solar:case-minimalistic-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Professional</span>
</div>
<div className="flex items-center gap-2 hover:text-brand-dark transition-colors cursor-default">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Repair &amp; Maintenance</span>
</div>
<div className="flex items-center gap-2 hover:text-brand-dark transition-colors cursor-default">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Cleaning &amp; Care</span>
</div>
<div className="flex items-center gap-2 hover:text-brand-dark transition-colors cursor-default">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Technical</span>
</div>
</div>
<p className="text-xs text-slate-500 mt-8 max-w-lg mx-auto">Thousands of skilled workers and professionals can connect with clients through Raketly.</p>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">Try Raketly in Seconds</h2>
<p className="text-base text-slate-500">See how easy it is to find experts near you.</p>
</div>

<div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-6 md:p-10 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 mb-10 bg-slate-50 p-3 rounded-2xl border border-slate-100">

<div className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-brand-yellow transition-colors relative group">
<div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
                            Plumbing
                        </div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>

<div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg hidden group-hover:block z-20">
<div className="p-2 text-sm text-slate-600">
<div className="px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer">Electrical</div>
<div className="px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer">Cleaning</div>
<div className="px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer">Aircon Repair</div>
<div className="px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer">Massage Therapy</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-brand-dark font-medium w-full" readonly="" type="text" value="Makati City"/>
</div>
<button className="bg-brand-dark text-brand-yellow px-8 py-3 rounded-xl text-sm font-medium hover:bg-black transition-colors shadow-sm flex items-center justify-center gap-2">
                        Find Experts
                    </button>
</div>

<div className="space-y-4">

<div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-slate-300 flex items-end justify-center pt-2"><div className="w-8 h-8 rounded-t-full bg-slate-400"></div></div>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark tracking-tight flex items-center gap-1">
                                    Juan Dela Cruz <iconify-icon className="text-brand-yellow" icon="solar:verified-check-bold"></iconify-icon>
</h4>
<div className="text-xs text-slate-500 mb-1">Plumbing Specialist</div>
<div className="flex items-center gap-3 text-xs">
<span className="flex items-center gap-1 font-medium text-slate-700"><iconify-icon className="text-brand-yellow" icon="solar:star-bold"></iconify-icon> 4.9</span>
<span className="flex items-center gap-1 text-slate-500"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> 3 km away</span>
</div>
</div>
</div>
<button className="hidden sm:block bg-brand-yellow/20 text-brand-dark px-4 py-2 rounded-lg text-xs font-medium group-hover:bg-brand-yellow transition-colors">Hire</button>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-slate-300 flex items-end justify-center pt-2"><div className="w-8 h-8 rounded-t-full bg-slate-400"></div></div>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark tracking-tight flex items-center gap-1">
                                    Maria Santos <iconify-icon className="text-brand-yellow" icon="solar:verified-check-bold"></iconify-icon>
</h4>
<div className="text-xs text-slate-500 mb-1">Home Cleaning</div>
<div className="flex items-center gap-3 text-xs">
<span className="flex items-center gap-1 font-medium text-slate-700"><iconify-icon className="text-brand-yellow" icon="solar:star-bold"></iconify-icon> 4.8</span>
<span className="flex items-center gap-1 text-slate-500"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> 2 km away</span>
</div>
</div>
</div>
<button className="hidden sm:block bg-brand-yellow/20 text-brand-dark px-4 py-2 rounded-lg text-xs font-medium group-hover:bg-brand-yellow transition-colors">Hire</button>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-slate-300 flex items-end justify-center pt-2"><div className="w-8 h-8 rounded-t-full bg-slate-400"></div></div>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark tracking-tight flex items-center gap-1">
                                    Carlos Ramirez <iconify-icon className="text-brand-yellow" icon="solar:verified-check-bold"></iconify-icon>
</h4>
<div className="text-xs text-slate-500 mb-1">Electrical Repair</div>
<div className="flex items-center gap-3 text-xs">
<span className="flex items-center gap-1 font-medium text-slate-700"><iconify-icon className="text-brand-yellow" icon="solar:star-bold"></iconify-icon> 4.7</span>
<span className="flex items-center gap-1 text-slate-500"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> 2.5 km away</span>
</div>
</div>
</div>
<button className="hidden sm:block bg-brand-yellow/20 text-brand-dark px-4 py-2 rounded-lg text-xs font-medium group-hover:bg-brand-yellow transition-colors">Hire</button>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden leading-none bg-white">
<svg className="block relative w-full h-[60px] md:h-[100px]" preserveaspectratio="none" viewbox="0 0 1200 120">
<path className="fill-slate-50" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>

<section className="py-24 bg-white border-b border-slate-100" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">How Raketly Works</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto">A seamless experience whether you're hiring or looking for work.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-brand-dark text-sm font-medium mb-8">
<iconify-icon icon="solar:user-linear"></iconify-icon> For Clients
                    </div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-100">

<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark font-semibold shadow-sm">1</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Post a Job</h4>
<p className="text-sm text-slate-500 leading-relaxed">Describe the service you need done and when you need it.</p>
</div>
</div>
<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark font-semibold shadow-sm">2</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Receive Expert Applications</h4>
<p className="text-sm text-slate-500 leading-relaxed">Nearby experts receive notifications and apply instantly.</p>
</div>
</div>
<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark font-semibold shadow-sm">3</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Choose and Get It Done</h4>
<p className="text-sm text-slate-500 leading-relaxed">Compare ratings, price, and experience. Hire the best fit.</p>
</div>
</div>
</div>
<div className="mt-10 ml-16">
<a className="inline-block bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm" href="#waitlist">Post a Job</a>
</div>
</div>

<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark text-brand-yellow text-sm font-medium mb-8">
<iconify-icon icon="solar:wrench-linear"></iconify-icon> For Experts
                    </div>
<div className="space-y-8 relative">
<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-brand-dark bg-white flex items-center justify-center text-brand-dark font-semibold">1</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Create a Profile</h4>
<p className="text-sm text-slate-500 leading-relaxed">Showcase your skills, experience, and get verified to build trust.</p>
</div>
</div>
<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-brand-dark bg-white flex items-center justify-center text-brand-dark font-semibold">2</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Receive Job Notifications</h4>
<p className="text-sm text-slate-500 leading-relaxed">Jobs appear within your defined location radius.</p>
</div>
</div>
<div className="relative z-10 flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-brand-dark bg-white flex items-center justify-center text-brand-dark font-semibold">3</div>
<div className="pt-2">
<h4 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">Apply and Earn</h4>
<p className="text-sm text-slate-500 leading-relaxed">Get hired, complete the job, and grow your reputation. Keep 100% of earnings.</p>
</div>
</div>
</div>
<div className="mt-10 ml-16">
<a className="inline-block bg-white border border-slate-200 text-brand-dark px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="#waitlist">Become an Expert</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100 relative overflow-hidden border-b border-slate-200">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-16">Experts Available Near You</h2>
<div className="relative h-80 max-w-3xl mx-auto rounded-[2rem] bg-white/50 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center">

<div className="bg-brand-dark text-brand-yellow px-5 py-3 rounded-full shadow-lg border border-slate-800 flex items-center gap-3 z-30 animate-pulse-glow">
<div className="w-2 h-2 rounded-full bg-brand-yellow animate-ping"></div>
<span className="text-sm font-medium tracking-tight">12 Experts Online Nearby</span>
</div>

<div className="absolute top-1/4 left-1/4 animate-float bg-white p-2 rounded-full shadow-md border border-slate-100 text-slate-600">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-1/4 right-1/4 animate-float-delayed bg-white p-2 rounded-full shadow-md border border-slate-100 text-slate-600">
<iconify-icon icon="solar:plug-circle-linear" width="20"></iconify-icon>
</div>
<div className="absolute top-1/3 right-1/3 animate-float-fast bg-brand-yellow p-2 rounded-full shadow-md text-brand-dark">
<iconify-icon icon="solar:broom-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-1/3 left-1/3 animate-float bg-white p-2 rounded-full shadow-md border border-slate-100 text-slate-600">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Smart Location Matching</h3>
<p className="text-sm text-slate-500 leading-relaxed">Default 3KM radius shows nearby experts first. Clients can easily expand search radius if needed.</p>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Verified Experts</h3>
<p className="text-sm text-slate-500 leading-relaxed">Experts verify using Government ID, NBI Clearance, Phone, or Facebook verification for peace of mind.</p>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Flexible Job Types</h3>
<p className="text-sm text-slate-500 leading-relaxed">Post one-time jobs, scheduled services, recurring tasks, short-term projects, or emergency requests.</p>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Direct Messaging</h3>
<p className="text-sm text-slate-500 leading-relaxed">Communicate inside the app safely. Contact details are filtered to prevent bypassing the platform securely.</p>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Credit-Based System</h3>
<p className="text-sm text-slate-500 leading-relaxed">Experts keep 100% of earnings with 0% commission. Use simple credits to apply, message, or boost visibility.</p>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow group">
<div className="bg-brand-yellow text-brand-dark p-3 rounded-xl inline-flex mb-6 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3 tracking-tight">Ratings &amp; Reviews</h3>
<p className="text-sm text-slate-500 leading-relaxed">Honest feedback with written explanations and optional photo evidence. Low ratings require valid reasons.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white" id="safety">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">A Platform Built for Trust</h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">We require rigorous verification to ensure clients feel completely safe hiring professionals for their homes or businesses.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-brand-yellow/20 text-brand-yellow p-2 rounded-lg">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium mb-1">Expert Verification</div>
<div className="text-sm text-slate-400">Real identity and clearances confirmed.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-brand-yellow/20 text-brand-yellow p-2 rounded-lg">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium mb-1">Transparent Reviews</div>
<div className="text-sm text-slate-400">Detailed accountability for both parties.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-brand-yellow/20 text-brand-yellow p-2 rounded-lg">
<iconify-icon icon="solar:flag-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium mb-1">Moderation &amp; Reporting</div>
<div className="text-sm text-slate-400">Strict policies. Repeated valid complaints lead to restriction or permanent removal.</div>
</div>
</li>
</ul>
</div>
<div className="relative flex justify-end">

<div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 w-full max-w-sm">
<div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
<div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center">
<iconify-icon className="text-2xl text-slate-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-base font-medium flex items-center gap-1 tracking-tight">
                                    Verified Profile <iconify-icon className="text-brand-yellow" icon="solar:verified-check-bold"></iconify-icon>
</div>
<div className="text-xs text-brand-yellow">High Trust Score</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">ID Verification</span>
<span className="text-emerald-400 font-medium">Approved</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Background Check</span>
<span className="text-emerald-400 font-medium">Cleared</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Account Status</span>
<span className="text-white font-medium">Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="enterprise">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 relative h-80 bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-float">
<div className="flex items-center justify-between mb-6">
<div className="text-sm font-semibold text-brand-dark">Team Dashboard</div>
<div className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-md font-medium">Enterprise</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
<div className="flex items-center gap-3"><div className="w-8 h-8 bg-slate-200 rounded-full"></div><span className="text-sm font-medium">Mark (Plumber)</span></div>
<span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">On Job</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
<div className="flex items-center gap-3"><div className="w-8 h-8 bg-slate-200 rounded-full"></div><span className="text-sm font-medium">Sarah (Cleaner)</span></div>
<span className="text-xs text-brand-dark bg-slate-100 px-2 py-1 rounded">Available</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-brand-dark mb-6">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-6">Built for Service Businesses Too</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">Raketly supports companies with multiple workers. Perfect for cleaning companies, massage spas, repair services, and manpower agencies.</p>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-3 text-sm text-brand-dark font-medium"><iconify-icon className="text-brand-yellow text-lg" icon="solar:check-circle-linear"></iconify-icon> Manage multiple staff members</li>
<li className="flex items-center gap-3 text-sm text-brand-dark font-medium"><iconify-icon className="text-brand-yellow text-lg" icon="solar:check-circle-linear"></iconify-icon> Accept multiple bookings simultaneously</li>
<li className="flex items-center gap-3 text-sm text-brand-dark font-medium"><iconify-icon className="text-brand-yellow text-lg" icon="solar:check-circle-linear"></iconify-icon> Assign jobs directly to workers</li>
</ul>
<a className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-sm" href="#waitlist">
                    Apply for Enterprise Account
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">How Much Can You Earn on Raketly?</h2>
<p className="text-base text-slate-500 mb-12">Set your own rates and keep 100% of what you make.</p>
<div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12 max-w-2xl mx-auto text-left">
<div className="mb-8">
<label className="block text-sm font-medium text-brand-dark mb-2">Service Type</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-yellow appearance-none cursor-pointer">
<option>Aircon Cleaning / Repair</option>
<option>Plumbing Services</option>
<option>Home Cleaning</option>
<option>Electrical Repair</option>
</select>
</div>
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<label className="block text-sm font-medium text-brand-dark">Average Job Price</label>
<span className="text-sm font-semibold text-brand-dark">₱1,500</span>
</div>
<input className="w-full" max="5000" min="500" type="range" value="1500"/>
</div>
<div className="mb-10">
<div className="flex justify-between items-end mb-2">
<label className="block text-sm font-medium text-brand-dark">Jobs Per Week</label>
<span className="text-sm font-semibold text-brand-dark">5 jobs</span>
</div>
<input className="w-full" max="20" min="1" type="range" value="5"/>
</div>
<div className="bg-brand-dark text-white rounded-2xl p-6 text-center">
<div className="text-sm text-slate-400 mb-1">Estimated Monthly Earnings</div>
<div className="text-4xl font-semibold tracking-tight text-brand-yellow mb-6">₱32,000</div>
<a className="inline-block bg-brand-yellow text-brand-dark w-full py-3 rounded-xl text-sm font-semibold hover:bg-white transition-colors" href="#experts">Start as an Expert</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-2">5,000+</div>
<div className="text-sm text-slate-500 font-medium">Verified Experts</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-2">20+</div>
<div className="text-sm text-slate-500 font-medium">Service Categories</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-2">10k+</div>
<div className="text-sm text-slate-500 font-medium">Jobs Completed</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-2">50+</div>
<div className="text-sm text-slate-500 font-medium">Cities Covered</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-brand-dark mb-10 text-center">Popular Services Near You</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/plumber-near-me">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:waterdrops-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Plumbing</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/electrician-near-me">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:plug-circle-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Electrical</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/cleaning-services">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:broom-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Cleaning</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/aircon-repair">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:wind-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Aircon Repair</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/home-maintenance">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:hammer-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Home Maintenance</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/massage-therapy">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:heart-angle-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Massage Therapy</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/laundry-services">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:t-shirt-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Laundry Services</h3>
</a>
<a className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-brand-dark hover:shadow-md transition-all text-center group" href="/services/appliance-repair">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-brand-dark mb-3 transition-colors" icon="solar:devices-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-brand-dark">Appliance Repair</h3>
</a>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white overflow-hidden relative">
<div className="absolute inset-0 bg-brand-yellow/5 filter blur-[150px]"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
<div className="max-w-lg">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Everything in One App</h2>
<p className="text-lg text-slate-400 mb-10 leading-relaxed">Find experts, post jobs, manage bookings, and chat securely—all from the palm of your hand.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-brand-dark px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:apple-linear"></iconify-icon> Download on iOS
                    </button>
<button className="bg-white text-brand-dark px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:android-linear"></iconify-icon> Download on Android
                    </button>
</div>
</div>

<div className="relative w-full max-w-sm flex justify-center perspective-[1000px]">

<div className="w-[280px] h-[580px] bg-slate-50 rounded-[3rem] border-[12px] border-slate-800 relative shadow-2xl overflow-hidden z-20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-30"></div>

<div className="w-full h-full bg-slate-50 flex flex-col">
<div className="pt-12 px-5 pb-4 bg-white border-b border-slate-100">
<div className="text-lg font-semibold text-brand-dark tracking-tight">Find Services</div>
</div>
<div className="flex-1 p-5 overflow-y-auto no-scrollbar space-y-4">
<div className="bg-brand-dark rounded-xl p-4 text-white">
<div className="text-xs font-medium mb-1 text-brand-yellow">Special Offer</div>
<div className="text-sm font-semibold">10% off first cleaning</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<div className="text-sm font-semibold text-brand-dark text-slate-800">Maria S.</div>
<div className="text-xs text-slate-500">Cleaner • 2km</div>
</div>
</div>
<button className="w-full bg-slate-100 text-brand-dark py-2 rounded-lg text-xs font-medium mt-2">View Profile</button>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<div className="text-sm font-semibold text-brand-dark text-slate-800">Juan D.</div>
<div className="text-xs text-slate-500">Plumber • 3km</div>
</div>
</div>
<button className="w-full bg-slate-100 text-brand-dark py-2 rounded-lg text-xs font-medium mt-2">View Profile</button>
</div>
</div>
<div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around text-slate-400 pb-2">
<iconify-icon className="text-xl text-brand-dark" icon="solar:home-angle-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-16 text-center">Trusted by the Community</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
<div className="flex items-center gap-1 text-brand-yellow mb-4"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"I needed a plumber urgently and found one within minutes. The app is incredibly easy to use and very transparent."</p>
<div className="text-sm font-semibold text-brand-dark">— Sarah L., Client</div>
</div>

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
<div className="flex items-center gap-1 text-brand-yellow mb-4"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"I started receiving jobs near my area right after joining Raketly. The fact that they take 0% commission is amazing for us Raketeros."</p>
<div className="text-sm font-semibold text-brand-dark">— Mark R., Expert</div>
</div>

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
<div className="flex items-center gap-1 text-brand-yellow mb-4"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Raketly helped us manage bookings for our cleaning team seamlessly. The enterprise dashboard is a game-changer."</p>
<div className="text-sm font-semibold text-brand-dark">— CleanCo Services</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50" id="waitlist">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">The Future of Local Services Starts Here</h2>
<p className="text-base text-slate-500 mb-10">Be among the first to use Raketly. Join the waitlist for early access.</p>
<form className="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault();">
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark text-sm text-brand-dark placeholder:text-slate-400 shadow-sm transition-all" placeholder="Your Name" required="" type="text"/>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark text-sm text-brand-dark placeholder:text-slate-400 shadow-sm transition-all" placeholder="Email Address" required="" type="email"/>
<button className="w-full bg-brand-dark text-brand-yellow py-3.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors shadow-sm" type="submit">
                    Join the Waitlist
                </button>
</form>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-200/50">
<a className="text-sm font-medium text-brand-dark hover:text-slate-600 transition-colors" href="#how-it-works">Find Services</a>
<span className="hidden sm:block text-slate-300">•</span>
<a className="text-sm font-medium text-brand-dark hover:text-slate-600 transition-colors" href="#experts">Become an Expert</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="font-semibold text-xl tracking-tight text-brand-dark mb-4 flex items-center gap-2" href="#">
<iconify-icon className="text-brand-yellow" icon="solar:rocket-linear"></iconify-icon> RAKETLY
                    </a>
<p className="text-sm text-slate-500 max-w-xs mb-6">Connecting skilled professionals with people who need them. Safely, locally, instantly.</p>
<div className="flex gap-3 mb-6">
<button className="bg-slate-100 text-brand-dark px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:apple-linear"></iconify-icon> iOS
                        </button>
<button className="bg-slate-100 text-brand-dark px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:android-linear"></iconify-icon> Android
                        </button>
</div>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-brand-dark transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-brand-dark transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-brand-dark transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#experts">For Experts</a></li>
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#enterprise">For Businesses</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#">About</a></li>
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#safety">Safety</a></li>
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm font-normal text-slate-500 hover:text-brand-dark transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-normal text-slate-400">© 2024 Raketly. All rights reserved.</p>
<div className="text-xs font-normal text-slate-400 flex items-center gap-1">
                    Made for <iconify-icon className="text-slate-500" icon="solar:map-point-linear"></iconify-icon> Local Communities
                </div>
</div>
</div>
</footer>

    </>
  );
}
