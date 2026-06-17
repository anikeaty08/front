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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Initializing Lucide Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        navLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Scroll Progress & Navbar Style
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            const scrollProgress = document.getElementById('scrollProgress');
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            
            scrollProgress.style.width = scrolled + '%';

            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
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
      

<div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#7B2FFF] z-[100] transition-all duration-300 w-0" id="scrollProgress"></div>

<nav className="fixed w-full z-50 glass-strong transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#7B2FFF] flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="zap" strokeWidth="2"></i>
</div>
                Vibe2Launch
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="px-5 py-2.5 rounded-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white text-sm font-semibold transition-all shadow-[0_0_15px_rgba(255,107,107,0.3)] hover:shadow-[0_0_25px_rgba(255,107,107,0.5)] transform hover:-translate-y-0.5">
                    Book Strategy Call
                </button>
</div>

<button className="md:hidden text-white" id="mobileMenuBtn">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A1628] z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6" id="mobileMenu">
<a className="text-2xl font-medium text-white border-b border-white/10 pb-4" href="#how-it-works">How It Works</a>
<a className="text-2xl font-medium text-white border-b border-white/10 pb-4" href="#pricing">Pricing</a>
<a className="text-2xl font-medium text-white border-b border-white/10 pb-4" href="#results">Results</a>
<a className="text-2xl font-medium text-white border-b border-white/10 pb-4" href="#faq">FAQ</a>
<button className="w-full py-4 rounded-xl bg-[#FF6B6B] text-white text-lg font-semibold mt-4">
            Book Strategy Call
        </button>
<button className="absolute top-6 right-6 text-slate-400" id="closeMenuBtn">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
</div>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7B2FFF] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 w-fit">
<span className="w-2 h-2 rounded-full bg-[#00D9A3] animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-widest text-[#00D9A3]">AI-Powered Business Acceleration</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white">
                    From Idea to <br/>
<span className="text-gradient">Income in 60 Days</span>
</h1>
<p className="text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
                    Stop dreaming. Start earning. We build complete, revenue-ready businesses for under $3K while you watch. No coding. No complexity. Just results.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="px-8 py-4 rounded-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold text-lg transition-all shadow-[0_0_20px_rgba(255,107,107,0.3)] hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Start Your Journey
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium text-lg transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
                        See How It Works
                    </button>
</div>
<div className="flex items-center gap-6 mt-8 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00D9A3]" data-lucide="check-circle-2"></i>
<span>60-Day Guarantee</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00D9A3]" data-lucide="check-circle-2"></i>
<span>Under $3,000 Total</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00D9A3]" data-lucide="check-circle-2"></i>
<span>500+ Launched</span>
</div>
</div>
</div>

<div className="relative z-10 lg:h-[600px] flex items-center justify-center perspective-1000">
<div className="relative w-full max-w-lg aspect-square animate-float">

<div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col gap-4 transform rotate-y-[-10deg] rotate-x-[5deg]">

<div className="flex justify-between items-center mb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="h-2 w-20 bg-white/10 rounded-full"></div>
</div>

<div className="flex-1 glass rounded-xl p-4 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/10 to-transparent"></div>
<div className="flex items-end justify-between gap-2 h-32">
<div className="w-full bg-[#0066FF]/30 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-700"></div>
<div className="w-full bg-[#0066FF]/40 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-[#0066FF]/60 rounded-t-sm h-[40%] group-hover:h-[55%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-[#0066FF]/80 rounded-t-sm h-[75%] group-hover:h-[85%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-[#0066FF] rounded-t-sm h-[90%] shadow-[0_0_15px_#0066FF] group-hover:h-[100%] transition-all duration-700 delay-200"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="glass p-3 rounded-lg">
<div className="text-xs text-slate-400 mb-1">Revenue</div>
<div className="text-lg font-mono text-[#00D9A3]">$15,240</div>
</div>
<div className="glass p-3 rounded-lg">
<div className="text-xs text-slate-400 mb-1">Leads</div>
<div className="text-lg font-mono text-white">428</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-20 glass p-4 rounded-xl border border-[#00D9A3]/30 shadow-xl animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#00D9A3]/20 flex items-center justify-center text-[#00D9A3]">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<div className="text-xs text-slate-400">Status</div>
<div className="text-sm font-semibold text-white">Level 2 Complete</div>
</div>
</div>
</div>

<div className="absolute -left-8 bottom-32 glass p-4 rounded-xl border border-[#7B2FFF]/30 shadow-xl animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#7B2FFF]/20 flex items-center justify-center text-[#7B2FFF]">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<div className="text-xs text-slate-400">AI Agent</div>
<div className="text-sm font-semibold text-white">Active &amp; Booking</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
<div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">

<div className="flex gap-12 px-6 items-center min-w-full justify-around">
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">SM</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Transformed my idea into $15K/mo in 8 weeks"</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Best investment I've ever made. Period."</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">AL</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"AI setup was flawless. Support is incredible."</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">KR</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Launched in 45 days. Already profitable."</p>
</div>
</div>
</div>

<div className="flex gap-12 px-6 items-center min-w-full justify-around">
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">SM</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Transformed my idea into $15K/mo in 8 weeks"</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Best investment I've ever made. Period."</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">AL</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"AI setup was flawless. Support is incredible."</p>
</div>
</div>
<div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">KR</div>
<div>
<div className="flex text-yellow-500 w-20"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
<p className="text-xs text-slate-300 w-48 truncate">"Launched in 45 days. Already profitable."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 relative">

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<i className="text-[#0A1628]" data-lucide="arrow-right"></i>
</div>

<div className="glass p-10 rounded-3xl border-l-4 border-l-red-500/50 bg-gradient-to-b from-red-500/5 to-transparent">
<h3 className="text-2xl font-semibold mb-6 text-slate-200">The Traditional Startup Nightmare</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-red-500 mt-1 shrink-0" data-lucide="x" strokeWidth="2"></i>
<span className="text-slate-400"><strong className="text-slate-200">$75k - $150k</strong> average investment</span>
</li>
<li className="flex items-start gap-3">
<i className="text-red-500 mt-1 shrink-0" data-lucide="x" strokeWidth="2"></i>
<span className="text-slate-400"><strong className="text-slate-200">9-15 months</strong> until launch</span>
</li>
<li className="flex items-start gap-3">
<i className="text-red-500 mt-1 shrink-0" data-lucide="x" strokeWidth="2"></i>
<span className="text-slate-400">Managing 8-12 different contractors</span>
</li>
<li className="flex items-start gap-3">
<i className="text-red-500 mt-1 shrink-0" data-lucide="x" strokeWidth="2"></i>
<span className="text-slate-400">75% failure rate within 2 years</span>
</li>
</ul>
</div>

<div className="glass p-10 rounded-3xl border-l-4 border-l-[#00D9A3] bg-gradient-to-b from-[#00D9A3]/5 to-transparent">
<h3 className="text-2xl font-semibold mb-6 text-white">The Vibe2Launch Way</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-[#00D9A3] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-slate-300"><strong className="text-white">$2,991 total</strong> investment (98% savings)</span>
</li>
<li className="flex items-start gap-3">
<i className="text-[#00D9A3] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-slate-300"><strong className="text-white">60 days</strong> from idea to launch</span>
</li>
<li className="flex items-start gap-3">
<i className="text-[#00D9A3] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-slate-300">1 unified expert team handles everything</span>
</li>
<li className="flex items-start gap-3">
<i className="text-[#00D9A3] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-slate-300">Peace of mind with <strong className="text-white">100% Guarantee</strong></span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative" id="how-it-works">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066FF]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#0066FF] font-medium tracking-wide text-sm uppercase">The Roadmap</span>
<h2 className="text-3xl md:text-5xl font-semibold mt-2 mb-4">3 Levels to Launch</h2>
<p className="text-slate-400 max-w-2xl mx-auto">A systematic, AI-accelerated process designed to move you from concept to cash flow in record time.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#0066FF] to-[#7B2FFF] opacity-30 z-0"></div>

<div className="glass p-8 rounded-2xl relative z-10 hover:border-[#0066FF]/50 transition-colors group">
<div className="w-24 h-24 rounded-2xl bg-[#0a1628] border border-white/10 flex items-center justify-center mb-6 mx-auto relative group-hover:scale-110 transition-transform duration-300">
<i className="text-[#0066FF] w-10 h-10" data-lucide="file-text"></i>
<div className="absolute -top-3 -right-3 bg-[#0066FF] text-white text-xs font-bold px-2 py-1 rounded">L1</div>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold mb-2">Foundation</h3>
<p className="text-xs font-mono text-slate-400 mb-4">WEEKS 1-2 | $297</p>
<p className="text-sm text-slate-300 mb-6">Complete 12-24 month business plan, revenue models, and proof-of-concept website.</p>
<ul className="text-left space-y-2 mb-6 text-sm text-slate-400">
<li className="flex gap-2"><i className="w-4 h-4 text-[#0066FF]" data-lucide="check"></i> Business Blueprint</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#0066FF]" data-lucide="check"></i> Market Analysis</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#0066FF]" data-lucide="check"></i> PoC Website</li>
</ul>
<a className="text-[#0066FF] text-sm font-semibold hover:underline" href="#">Learn more →</a>
</div>
</div>

<div className="glass p-8 rounded-2xl relative z-10 border-[#7B2FFF]/50 shadow-[0_0_30px_rgba(123,47,255,0.1)] group">
<div className="w-24 h-24 rounded-2xl bg-[#0a1628] border border-[#7B2FFF]/30 flex items-center justify-center mb-6 mx-auto relative group-hover:scale-110 transition-transform duration-300">
<i className="text-[#7B2FFF] w-10 h-10" data-lucide="cpu"></i>
<div className="absolute -top-3 -right-3 bg-[#7B2FFF] text-white text-xs font-bold px-2 py-1 rounded">L2</div>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
<p className="text-xs font-mono text-slate-400 mb-4">WEEKS 3-6 | $697</p>
<p className="text-sm text-slate-300 mb-6">Technical buildout with AI automation, CRM, payments, and compliance setup.</p>
<ul className="text-left space-y-2 mb-6 text-sm text-slate-400">
<li className="flex gap-2"><i className="w-4 h-4 text-[#7B2FFF]" data-lucide="check"></i> AI Voice/Chat Agents</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7B2FFF]" data-lucide="check"></i> Payment Systems</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7B2FFF]" data-lucide="check"></i> CRM Automation</li>
</ul>
<a className="text-[#7B2FFF] text-sm font-semibold hover:underline" href="#">Learn more →</a>
</div>
</div>

<div className="glass p-8 rounded-2xl relative z-10 hover:border-[#FF6B6B]/50 transition-colors group">
<div className="w-24 h-24 rounded-2xl bg-[#0a1628] border border-white/10 flex items-center justify-center mb-6 mx-auto relative group-hover:scale-110 transition-transform duration-300">
<i className="text-[#FF6B6B] w-10 h-10" data-lucide="rocket"></i>
<div className="absolute -top-3 -right-3 bg-[#FF6B6B] text-white text-xs font-bold px-2 py-1 rounded">L3</div>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold mb-2">Launch</h3>
<p className="text-xs font-mono text-slate-400 mb-4">WEEKS 7-8 + SUPPORT | $1,997</p>
<p className="text-sm text-slate-300 mb-6">Full market deployment with 90 days of expert support for marketing and scaling.</p>
<ul className="text-left space-y-2 mb-6 text-sm text-slate-400">
<li className="flex gap-2"><i className="w-4 h-4 text-[#FF6B6B]" data-lucide="check"></i> Market Launch</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#FF6B6B]" data-lucide="check"></i> 90 Days Expert Team</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#FF6B6B]" data-lucide="check"></i> 24/7 AI Support</li>
</ul>
<a className="text-[#FF6B6B] text-sm font-semibold hover:underline" href="#">Learn more →</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#7B2FFF]">
<button className="px-8 py-3 rounded-full bg-[#0A1628] hover:bg-[#0f1f38] text-white font-medium transition-all flex items-center gap-2 mx-auto">
                        Start Level 1 Today
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">Total Investment: $2,991 | Time: 60 Days</p>
</div>
</div>
</section>

<section className="py-24 bg-[#050b14]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold mb-4">Transparent Pricing</h2>
<p className="text-slate-400">No hidden fees. Upgrade as you grow.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glass p-8 rounded-2xl border-t-4 border-t-[#0066FF]">
<h3 className="text-lg font-medium text-slate-300">Level 1</h3>
<div className="text-3xl font-bold text-white mt-2">$297</div>
<p className="text-sm text-slate-400 mt-1">One-time payment</p>
<div className="my-6 border-b border-white/10"></div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><i className="text-[#0066FF] w-5 h-5 shrink-0" data-lucide="check"></i> Business Blueprint</li>
<li className="flex gap-3"><i className="text-[#0066FF] w-5 h-5 shrink-0" data-lucide="check"></i> Proof-of-concept Site</li>
<li className="flex gap-3"><i className="text-[#0066FF] w-5 h-5 shrink-0" data-lucide="check"></i> Market Analysis</li>
<li className="flex gap-3"><i className="text-[#0066FF] w-5 h-5 shrink-0" data-lucide="check"></i> 100% Money-back Guarantee</li>
</ul>
<button className="w-full py-3 rounded-lg border border-[#0066FF] text-[#0066FF] font-medium hover:bg-[#0066FF] hover:text-white transition-all">Start Level 1</button>
</div>

<div className="glass-strong p-8 rounded-2xl border border-[#7B2FFF] relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(123,47,255,0.15)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7B2FFF] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</div>
<h3 className="text-lg font-medium text-[#7B2FFF]">Level 2</h3>
<div className="text-3xl font-bold text-white mt-2">$697</div>
<p className="text-sm text-slate-400 mt-1">One-time payment</p>
<div className="my-6 border-b border-white/10"></div>
<ul className="space-y-3 mb-8 text-sm text-slate-200">
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> <strong>Everything in Level 1</strong></li>
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> Production Website</li>
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> Stripe Payments Setup</li>
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> CRM (GoHighLevel)</li>
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> AI Voice &amp; Chat Agents</li>
<li className="flex gap-3"><i className="text-[#7B2FFF] w-5 h-5 shrink-0" data-lucide="check"></i> Legal Compliance Roadmap</li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#7B2FFF] text-white font-medium hover:bg-[#6821e0] transition-all shadow-lg shadow-[#7B2FFF]/20">Get Level 2</button>
</div>

<div className="glass p-8 rounded-2xl border-t-4 border-t-[#FF6B6B]">
<h3 className="text-lg font-medium text-slate-300">Level 3</h3>
<div className="text-3xl font-bold text-white mt-2">$1,997</div>
<p className="text-sm text-slate-400 mt-1">One-time payment</p>
<div className="my-6 border-b border-white/10"></div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><i className="text-[#FF6B6B] w-5 h-5 shrink-0" data-lucide="check"></i> <strong>Everything in Level 1 &amp; 2</strong></li>
<li className="flex gap-3"><i className="text-[#FF6B6B] w-5 h-5 shrink-0" data-lucide="check"></i> Full Market Launch</li>
<li className="flex gap-3"><i className="text-[#FF6B6B] w-5 h-5 shrink-0" data-lucide="check"></i> 90-Day Expert Support</li>
<li className="flex gap-3"><i className="text-[#FF6B6B] w-5 h-5 shrink-0" data-lucide="check"></i> Marketing Campaigns</li>
<li className="flex gap-3"><i className="text-[#FF6B6B] w-5 h-5 shrink-0" data-lucide="check"></i> Dedicated Account Mgr</li>
</ul>
<button className="w-full py-3 rounded-lg border border-[#FF6B6B] text-[#FF6B6B] font-medium hover:bg-[#FF6B6B] hover:text-white transition-all">Get Level 3</button>
</div>
</div>

<div className="mt-12 glass p-8 rounded-2xl border border-[#00D9A3]/30 text-center max-w-3xl mx-auto bg-gradient-to-r from-[#00D9A3]/10 to-transparent">
<h3 className="text-2xl font-semibold text-white mb-2">🎁 Complete Package: All 3 Levels</h3>
<p className="text-slate-300 mb-6">Join as a Founding Client and save $800 instantly.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<span className="text-slate-400 line-through text-lg">$2,991</span>
<span className="text-3xl font-bold text-[#00D9A3]">$2,191</span>
</div>
<button className="mt-6 px-8 py-3 rounded-full bg-[#00D9A3] text-[#0A1628] font-bold hover:bg-[#00c493] transition-all">Claim Founding Client Pricing</button>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-12 text-center">Why Vibe2Launch is a No-Brainer</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider">
<th className="py-6 pl-4 font-medium">Factor</th>
<th className="py-6 font-medium text-red-400">Traditional Launch</th>
<th className="py-6 font-medium text-[#00D9A3]">Vibe2Launch</th>
</tr>
</thead>
<tbody className="text-sm md:text-base text-slate-300">
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 pl-4 font-medium text-white">Total Cost</td>
<td className="py-4">$75,000 - $200,000</td>
<td className="py-4 text-[#00D9A3] font-bold">$2,991</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 pl-4 font-medium text-white">Time to Market</td>
<td className="py-4">9-15 Months</td>
<td className="py-4 text-[#00D9A3] font-bold">60 Days</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 pl-4 font-medium text-white">Vendors</td>
<td className="py-4">8-15 Contractors</td>
<td className="py-4 text-[#00D9A3] font-bold">1 Unified Team</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 pl-4 font-medium text-white">AI Integration</td>
<td className="py-4">$20k+ Extra</td>
<td className="py-4 text-[#00D9A3] font-bold">Included</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 pl-4 font-medium text-white">Guarantee</td>
<td className="py-4">None</td>
<td className="py-4 text-[#00D9A3] font-bold">100% Money-Back</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8 text-center text-xl font-medium text-white">
                You Save: <span className="text-[#00D9A3]">$97,009</span> and <span className="text-[#00D9A3]">10 Months</span>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-semibold mb-4 text-center">Real Founders. Real Results.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

<div className="glass p-6 rounded-2xl flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold">SM</div>
</div>
<div>
<h4 className="font-bold text-white">Sarah Martinez</h4>
<p className="text-sm text-[#0066FF]">MindFlow Coaching</p>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-400 uppercase tracking-widest">Result</span>
<p className="text-2xl font-bold text-white">$15,000<span className="text-sm text-slate-400 font-normal">/mo by Month 3</span></p>
</div>
<p className="text-slate-300 italic mb-6 flex-grow">"I would have spent $50k trying to figure this out. Vibe2Launch had me earning in 60 days."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20">First Client Wk 7</span>
<span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">20+ Clients</span>
</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold">MT</div>
</div>
<div>
<h4 className="font-bold text-white">Marcus T.</h4>
<p className="text-sm text-[#7B2FFF]">FitCore Supplements</p>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-400 uppercase tracking-widest">Result</span>
<p className="text-2xl font-bold text-white">$30,000<span className="text-sm text-slate-400 font-normal">/mo in 4 months</span></p>
</div>
<p className="text-slate-300 italic mb-6 flex-grow">"The AI automation handles 90% of my customer service. It's like having a team of 10 for free."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">AI Support</span>
<span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">DTC Brand</span>
</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold">JL</div>
</div>
<div>
<h4 className="font-bold text-white">Jennifer Lee</h4>
<p className="text-sm text-[#FF6B6B]">Legal Tech Consult</p>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-400 uppercase tracking-widest">Result</span>
<p className="text-2xl font-bold text-white">20 Hours<span className="text-sm text-slate-400 font-normal">/week Saved</span></p>
</div>
<p className="text-slate-300 italic mb-6 flex-grow">"The infrastructure Vibe2Launch built is enterprise-grade. My clients are blown away."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs border border-red-500/20">Efficiency</span>
<span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Automation</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-slate-400 mb-10 text-sm uppercase tracking-widest">Powered by Industry Leaders</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="mic"></i> VAPI</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="message-square"></i> Twilio</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="bar-chart-2"></i> GoHighLevel</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="workflow"></i> n8n</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="database"></i> Pinecone</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="credit-card"></i> Stripe</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="cpu"></i> OpenAI</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="zap"></i> Zapier</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="cloud"></i> Google Cloud</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="bot"></i> Anthropic</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="code"></i> Voiceflow</div>
<div className="flex items-center justify-center gap-2 font-bold text-lg"><i className="w-5 h-5" data-lucide="phone"></i> Retell</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg">Do I need technical knowledge?</span>
<i className="transition-transform group-open:rotate-180 text-slate-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        None whatsoever. We handle the entire technical build, including AI integration, website development, and automation. You focus on your vision; we handle the code.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg">How does the 100% money-back guarantee work?</span>
<i className="transition-transform group-open:rotate-180 text-slate-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        If we don't deliver a viable business plan and proof-of-concept website within the first 10 days (Level 1), you get a full refund. No questions asked. We take the risk, not you.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg">Can I start with Level 1 and upgrade later?</span>
<i className="transition-transform group-open:rotate-180 text-slate-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Absolutely. Many founders start with Level 1 to validate their idea before committing to the full infrastructure build. You can upgrade at any time.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg">What industries do you work with?</span>
<i className="transition-transform group-open:rotate-180 text-slate-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        We specialize in service-based businesses, e-commerce, coaching/consulting, and SaaS. If your business relies on finding customers and delivering value, our AI systems can power it.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#7B2FFF] opacity-90"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<p className="text-white/80 font-medium tracking-widest uppercase mb-4">Ready to Launch?</p>
<h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Your Business Launches in 60 Days. Let's Start Today.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="px-10 py-5 rounded-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold text-xl shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto">
                    Book My Free Strategy Call
                </button>
<button className="px-10 py-5 rounded-full bg-white text-[#0066FF] font-bold text-xl hover:bg-slate-100 transition-colors w-full sm:w-auto">
                    Start Level 1 - $297
                </button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-white/90 text-sm font-medium">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="shield-check"></i> Money-Back Guarantee</span>
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="users"></i> 500+ Founders Joined</span>
</div>
</div>
</section>

<footer className="bg-[#050b14] border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div>
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#7B2FFF] flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="zap"></i>
</div>
                    Vibe2Launch
                </a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                    From Idea to Income in 60 Days. The AI-powered acceleration platform for modern entrepreneurs.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-[#0066FF]" href="#">How It Works</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Level 1: Foundation</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Level 2: Infrastructure</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Level 3: Launch</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-[#0066FF]" href="#">Success Stories</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Blog</a></li>
<li><a className="hover:text-[#0066FF]" href="#">FAQ</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-[#0066FF]" href="#">About Us</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Contact</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#0066FF]" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<div>© 2025 Vibe2Launch, LLC. All rights reserved.</div>
<div className="flex items-center gap-2">Built with Vibe2Launch <span className="w-2 h-2 rounded-full bg-[#00D9A3]"></span></div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-white text-[#0A1628] rounded-full p-4 shadow-[0_0_20px_rgba(0,102,255,0.4)] animate-pulse-glow flex items-center gap-2 font-medium hover:scale-110 transition-transform">
<span className="relative">
<i className="w-6 h-6" data-lucide="message-circle"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
</span>
<span className="hidden md:inline">Questions? Chat with AI</span>
</button>
</div>


    </>
  );
}
