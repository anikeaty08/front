import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons();

// Mobile menu toggle
const toggle = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');
let isOpen = false;

toggle?.addEventListener('click', () => {
  isOpen = !isOpen;
  menu.style.display = isOpen ? 'block' : 'none';
  const icon = toggle.querySelector('svg');
  icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/distortedspiralcopy-E3eftImqwWVDCs3VOeOacDLp" width="100%"></iframe></div>

<header className="fixed inset-x-0 top-0 z-50 glassmorphism fade-in" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
<div className="flex items-center gap-8">
<a className="bg-clip-text text-2xl font-bold text-transparent tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400" href="#">StudioRune</a>
<div className="hidden lg:flex items-center gap-2">
<div className="w-2 h-2 rounded-full animate-pulse bg-green-400"></div>
<span className="text-xs font-medium text-blue-400">247 designers online</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors duration-200 relative group hover:text-indigo-400" href="#">
        Studio
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-indigo-400"></span>
</a>
<a className="flex items-center gap-2 transition-colors duration-200 relative group hover:text-cyan-400" href="#">
        Resources
        <span className="text-xs bg-gradient-to-r px-2 py-0.5 rounded-full font-semibold from-indigo-600 to-cyan-600">142</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-cyan-400"></span>
</a>
<a className="transition-colors duration-200 relative group hover:text-green-400" href="#">
        Showcase
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-green-400"></span>
</a>
<a className="transition-colors duration-200 relative group hover:text-emerald-400" href="#">
        Pricing
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-emerald-400"></span>
</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-blue-300" href="#">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Sign in
      </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700" href="#">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Start Creating
      </a>
<button className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-white/10" id="mobile-toggle">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden border-t border-white/10" id="mobile-menu" style={{display: 'none'}}>
<div className="px-4 sm:px-6 pb-6 pt-4 space-y-4 text-sm font-medium">
<a className="flex items-center gap-3 py-2 transition-colors duration-200 hover:text-indigo-400" href="#">
<svg className="lucide lucide-home" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
        Studio
      </a>
<a className="flex items-center gap-3 py-2 transition-colors duration-200 hover:text-cyan-400" href="#">
<svg className="lucide lucide-layers" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
        Resources <span className="ml-auto text-xs bg-gradient-to-r px-2 py-0.5 rounded-full font-semibold from-indigo-600 to-cyan-600">142</span>
</a>
<a className="flex items-center gap-3 py-2 transition-colors duration-200 hover:text-green-400" href="#">
<svg className="lucide lucide-grid" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
        Showcase
      </a>
<a className="flex items-center gap-3 py-2 transition-colors duration-200 hover:text-emerald-400" href="#">
<svg className="lucide lucide-credit-card" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
        Pricing
      </a>
<div className="pt-4 border-t border-white/10">
<a className="flex items-center gap-3 py-2 transition-colors duration-200 hover:text-blue-300" href="#">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Sign in
        </a>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20">
<div className="blob absolute top-1/4 left-1/3 w-96 h-96 -z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent -z-20 via-blue-950/50 to-blue-950"></div>
<div className="max-w-7xl w-full sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 mr-auto ml-auto pr-4 pl-4 items-center">

<div className="hidden lg:flex lg:col-span-3 self-start pt-16 fade-in" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="glassmorphism rounded-2xl p-6 w-full">
<h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-blue-400">Quick Access</h3>
<ul className="space-y-3 text-sm font-medium">
<li className=""><a className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-indigo-400" href="#">
<svg className="lucide lucide-mouse-pointer-click group-hover:scale-110 transition-transform" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
            Interactive Elements
          </a></li>
<li><a className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-cyan-400" href="#">
<svg className="lucide lucide-layers group-hover:scale-110 transition-transform" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
            UI Components
          </a></li>
<li><a className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-green-400" href="#">
<svg className="lucide lucide-zap group-hover:scale-110 transition-transform" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Micro Interactions
          </a></li>
<li><a className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-emerald-400" href="#">
<svg className="lucide lucide-play group-hover:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            Motion Graphics
          </a></li>
<li><a className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-yellow-400" href="#">
<svg className="lucide lucide-loader group-hover:scale-110 transition-transform" data-lucide="loader" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
            Loading States
          </a></li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r to-indigo-500 flex items-center justify-center from-green-400">
<svg className="lucide lucide-trending-up" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-xs font-semibold text-blue-400">This Week</div>
<div className="text-sm font-semibold">+2,847 downloads</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-8">
<div className="fade-in text-center" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium mb-6 text-indigo-400">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          New: Advanced Animation Library
        </div>
<h1 className="sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-lg font-medium tracking-tight text-center">
          Craft extraordinary 
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 via-cyan-400 to-green-400">digital experiences</span>
          that captivate.
        </h1>
</div>
<div className="fade-in fade-in-delay-1" style={{opacity: '1', transform: 'translateY(0px)'}}>
<p className="sm:text-xl max-w-2xl leading-relaxed text-lg text-center text-blue-200">Kreovis Studio emerged from countless late-night design sessions, asking 'How can we make this feel more alive?' Our comprehensive toolkit combines cutting-edge components, advanced techniques, and creative workflows—continuously evolving with the design community.</p>
</div>
<div className="fade-in fade-in-delay-2" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center gap-3 rounded-xl border-2 bg-transparent px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105 group border-white/20 hover:bg-white hover:text-blue-950" href="#">
<svg className="lucide lucide-crown group-hover:rotate-12 transition-transform" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
            Join Premium
          </a>
<a className="inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105 group bg-white/10 hover:bg-white/20" href="#">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white/30" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white/30" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white/30" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="w-7 h-7 rounded-full border-2 bg-gradient-to-r flex items-center justify-center text-xs font-bold border-white/30 from-indigo-600 to-cyan-600">+K</div>
</div>
            Explore Community
          </a>
</div>
</div>
<div className="fade-in fade-in-delay-3" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
<div className="text-center lg:text-left">
<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 to-cyan-400">50K+</div>
<div className="text-sm font-medium text-blue-400">Active Designers</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-green-400">1.2M+</div>
<div className="text-sm font-medium text-blue-400">Components Used</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-red-400">99.8%</div>
<div className="text-sm font-medium text-blue-400">Uptime</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 fade-in fade-in-delay-3" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="glassmorphism rounded-2xl p-6 space-y-6">
<div className="flex items-center justify-between">
<h3 className="font-semibold">Live Preview</h3>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full animate-pulse bg-red-400"></div>
<span className="text-xs text-blue-400">Recording</span>
</div>
</div>
<div className="aspect-video bg-gradient-to-br rounded-lg relative overflow-hidden from-blue-800 to-blue-900">
<div className="absolute inset-4 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center animate-pulse bg-white/10">
<svg className="lucide lucide-play" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1 rounded-full overflow-hidden bg-white/20">
<div className="h-full bg-gradient-to-r rounded-full w-1/3 animate-pulse from-indigo-400 to-cyan-400"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-blue-400">Latest Update</span>
<span className="font-medium">2 hours ago</span>
</div>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-sm font-medium">Marcus Chen</div>
<div className="text-xs text-blue-400">Added new micro-interactions</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
