import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: {
DEFAULT: '#050608',
secondary: '#07080B',
},
surface: {
DEFAULT: '#0C0F14',
hover: '#12161E'
},
border: {
DEFAULT: '#171B22',
light: '#252932'
},
brand: {
DEFAULT: '#4CF4FF', // Electric Teal
glow: 'rgba(76, 244, 255, 0.5)',
dim: 'rgba(76, 244, 255, 0.1)'
},
violet: {
DEFAULT: '#8B5CF6',
glow: 'rgba(139, 92, 246, 0.5)'
},
text: {
main: '#FFFFFF',
muted: '#AAB2C0'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 20px -5px var(--tw-shadow-color)',
'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
},
backgroundImage: {
'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #050608 0deg, #1e293b 180deg, #050608 360deg)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Reveal on Scroll Logic using IntersectionObserver
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });

        // Navbar blur effect adjustment on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg');
                nav.classList.replace('bg-bg/80', 'bg-bg/90');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.replace('bg-bg/90', 'bg-bg/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10 opacity-40"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-violet/5 blur-[120px] rounded-full pointer-events-none -z-10 opacity-30"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-bg/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-br from-brand to-violet-500 flex items-center justify-center">
<svg fill="none" height="14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
<span className="text-white font-semibold tracking-tight text-sm group-hover:text-brand transition-colors">ProductDemos</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-text-muted">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#customers">Stories</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-text-muted hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-brand transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_-3px_rgba(76,244,255,0.5)]" href="#">
                    Request Demo
                </a>
</div>

<button aria-label="Toggle menu" className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full h-screen bg-bg border-t border-border p-6 flex flex-col gap-6 z-50" id="mobile-menu">
<a className="text-sm font-medium text-white" href="#platform">Platform</a>
<a className="text-sm font-medium text-white" href="#use-cases">Use Cases</a>
<a className="text-sm font-medium text-white" href="#customers">Stories</a>
<a className="text-sm font-medium text-white" href="#">Sign in</a>
<a className="w-full text-center bg-brand text-black py-3 rounded-lg text-sm font-semibold" href="#">Request Demo</a>
</div>
</nav>
<main className="relative z-10">

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto text-center relative z-20">

<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-brand">New: AI Voiceover</span>
</div>

<h1 className="reveal-on-scroll text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    The Enterprise Platform <br/>
<span className="text-gradient">for Product Demos</span>
</h1>

<p className="reveal-on-scroll text-lg md:text-xl text-text-muted font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    Create interactive, self-serve demos that feel real — and measure what converts. No engineering required.
                </p>

<div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-brand text-black rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(76,244,255,0.4)] flex items-center justify-center gap-2">
                        Request Demo
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 border border-border text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
<svg className="group-hover:text-brand transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        Watch Video
                    </button>
</div>

<div className="reveal-on-scroll relative max-w-5xl mx-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-brand to-violet-500 rounded-2xl blur opacity-20"></div>

<div className="relative bg-[#0F1218] rounded-xl border border-border browser-mockup overflow-hidden aspect-[16/10] md:aspect-[2/1]">

<div className="h-10 border-b border-border bg-[#14181F] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-block px-3 py-1 rounded bg-[#0A0C10] border border-white/5 text-[10px] text-gray-500 font-mono">
                                    app.productdemos.io
                                </div>
</div>
</div>

<div className="flex h-full">

<div className="w-16 md:w-64 border-r border-border bg-[#0C0F14] p-4 hidden sm:flex flex-col gap-4">
<div className="h-8 w-8 md:w-24 bg-white/5 rounded"></div>
<div className="space-y-2 mt-4">
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
</div>
<div className="mt-auto space-y-2">
<div className="h-8 w-full bg-brand/10 rounded border border-brand/20"></div>
</div>
</div>

<div className="flex-1 bg-[#050608] relative">

<div className="p-8 grid grid-cols-3 gap-6 opacity-50 blur-[1px]">
<div className="col-span-2 h-32 bg-white/5 rounded-lg border border-white/5"></div>
<div className="col-span-1 h-32 bg-white/5 rounded-lg border border-white/5"></div>
<div className="col-span-3 h-64 bg-white/5 rounded-lg border border-white/5"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/30 cursor-pointer group">
<div className="w-20 h-20 rounded-full bg-brand/90 flex items-center justify-center shadow-[0_0_40px_rgba(76,244,255,0.4)] group-hover:scale-105 transition-transform">
<svg className="ml-1" fill="black" height="32" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 reveal-on-scroll">
<p className="text-xs font-medium uppercase tracking-widest text-gray-600 mb-8">Trusted by teams shipping faster demos</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale mix-blend-screen">

<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H70 V25 H60 Z M80,15 A10,10 0 1,0 80,15.1 Z"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="10" width="20" x="35" y="10"></rect><rect height="20" width="20" x="65" y="5"></rect></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M45,15 h20 M80,5 v20 M70,25 h20"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><rect height="20" rx="5" width="20" x="10" y="5"></rect><circle cx="50" cy="15" r="8"></circle><path d="M80,5 L90,25 L70,25 Z"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 q10,-10 20,0 q10,10 20,0" fill="none" stroke="currentColor" strokeWidth="4"></path><circle cx="70" cy="15" r="5"></circle><circle cx="90" cy="15" r="5"></circle></svg>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-surface/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal-on-scroll text-center md:text-left group cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-brand transition-colors">10×</div>
<div className="text-xs font-medium text-text-muted uppercase tracking-wider">Faster Production</div>
</div>
<div className="reveal-on-scroll text-center md:text-left group cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-brand transition-colors">85%</div>
<div className="text-xs font-medium text-text-muted uppercase tracking-wider">Higher Engagement</div>
</div>
<div className="reveal-on-scroll text-center md:text-left group cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-brand transition-colors">$2.3B</div>
<div className="text-xs font-medium text-text-muted uppercase tracking-wider">Pipeline Influenced</div>
</div>
<div className="reveal-on-scroll text-center md:text-left group cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-brand transition-colors">500+</div>
<div className="text-xs font-medium text-text-muted uppercase tracking-wider">Demos Launched</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 reveal-on-scroll sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Build it yourself. <br/>
<span className="text-gray-500">Or let us handle it.</span>
</h2>
<p className="text-text-muted text-lg mb-8 leading-relaxed">
                        Whether you need a self-serve platform for your SEs or a full-service production team, we adapt to your GTM motion.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5 text-brand"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span>Zero-latency rendering engine</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5 text-brand"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span>HTML/CSS capture, not video</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5 text-brand"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span>Personalization variables via URL</span>
</li>
</ul>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="feature-card reveal-on-scroll bg-surface border border-border p-6 rounded-2xl relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-400 icon-glow transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Strategy &amp; Positioning</h3>
<p className="text-sm text-text-muted mb-4 leading-relaxed">Align your demo narrative with buyer personas.</p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li>• Storyboard workshops</li>
<li>• Copywriting audit</li>
<li>• Flow optimization</li>
</ul>
</div>

<div className="feature-card reveal-on-scroll bg-surface border border-border p-6 rounded-2xl relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-400 icon-glow transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Managed Production</h3>
<p className="text-sm text-text-muted mb-4 leading-relaxed">We build the assets. You approve them.</p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li>• Pixel-perfect capture</li>
<li>• Custom UI masking</li>
<li>• Responsive adaptation</li>
</ul>
</div>

<div className="feature-card reveal-on-scroll bg-surface border border-border p-6 rounded-2xl relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-400 icon-glow transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">GTM Enablement</h3>
<p className="text-sm text-text-muted mb-4 leading-relaxed">Equip your champions with shareable assets.</p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li>• Sales leave-behinds</li>
<li>• Marketing embed kits</li>
<li>• Email sequences</li>
</ul>
</div>

<div className="feature-card reveal-on-scroll bg-surface border border-border p-6 rounded-2xl relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-400 icon-glow transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Feature Launches</h3>
<p className="text-sm text-text-muted mb-4 leading-relaxed">Announce new updates with interactive tours.</p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li>• Changelog integration</li>
<li>• In-app tooltips</li>
<li>• Launch day support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-secondary border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll order-2 lg:order-1">
<div className="text-brand font-mono text-xs uppercase tracking-widest mb-4">Insights</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Know exactly what's working</h2>
<p className="text-text-muted text-lg mb-8">
                        Stop guessing. Track every click, hover, and drop-off to understand how prospects interact with your product before they book a call.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
<span className="text-brand text-xs">1</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Granular Event Tracking</h4>
<p className="text-xs text-gray-500 mt-1">Page views, step completion, feature clicks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
<span className="text-brand text-xs">2</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Intent Signals</h4>
<p className="text-xs text-gray-500 mt-1">Identify high-intent accounts based on engagement time.</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll order-1 lg:order-2">
<div className="bg-surface border border-border rounded-xl p-6 shadow-2xl relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex justify-between items-center mb-8">
<h3 className="text-sm font-medium text-white">Demo Engagement</h3>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-bg p-3 rounded border border-white/5">
<div className="text-[10px] text-gray-500 mb-1">Views</div>
<div className="text-lg font-medium text-white">2,405</div>
</div>
<div className="bg-bg p-3 rounded border border-white/5">
<div className="text-[10px] text-gray-500 mb-1">Completion</div>
<div className="text-lg font-medium text-white">68%</div>
</div>
<div className="bg-bg p-3 rounded border border-white/5">
<div className="text-[10px] text-gray-500 mb-1">CTA Clicks</div>
<div className="text-lg font-medium text-white">142</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 text-xs">
<span className="w-20 text-gray-500">Step 1</span>
<div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
<div className="h-full bg-brand w-[95%] rounded-full"></div>
</div>
<span className="text-white">95%</span>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="w-20 text-gray-500">Step 2</span>
<div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
<div className="h-full bg-brand/80 w-[82%] rounded-full"></div>
</div>
<span className="text-white">82%</span>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="w-20 text-gray-500">Step 3</span>
<div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
<div className="h-full bg-brand/60 w-[65%] rounded-full"></div>
</div>
<span className="text-white">65%</span>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="w-20 text-gray-500">Step 4</span>
<div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
<div className="h-full bg-brand/40 w-[48%] rounded-full"></div>
</div>
<span className="text-white">48%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">From zero to demo in days</h2>
<p className="text-text-muted">Streamlined production for enterprise speed.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="reveal-on-scroll relative pt-8 md:pt-16 group">
<div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-border group-hover:border-brand transition-colors z-10"></div>
<div className="text-xs font-mono text-brand mb-2">01</div>
<h3 className="text-white font-medium text-lg mb-3">Discovery</h3>
<ul className="text-sm text-gray-500 space-y-1">
<li>• Goal alignment</li>
<li>• Asset gathering</li>
<li>• Persona definition</li>
</ul>
</div>

<div className="reveal-on-scroll relative pt-8 md:pt-16 group" style={{transitionDelay: '100ms'}}>
<div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-border group-hover:border-brand transition-colors z-10"></div>
<div className="text-xs font-mono text-brand mb-2">02</div>
<h3 className="text-white font-medium text-lg mb-3">Strategy</h3>
<ul className="text-sm text-gray-500 space-y-1">
<li>• Storyboarding</li>
<li>• Copywriting</li>
<li>• Flow design</li>
</ul>
</div>

<div className="reveal-on-scroll relative pt-8 md:pt-16 group" style={{transitionDelay: '200ms'}}>
<div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-border group-hover:border-brand transition-colors z-10"></div>
<div className="text-xs font-mono text-brand mb-2">03</div>
<h3 className="text-white font-medium text-lg mb-3">Production</h3>
<ul className="text-sm text-gray-500 space-y-1">
<li>• Capture &amp; Edit</li>
<li>• Interaction build</li>
<li>• QA &amp; Review</li>
</ul>
</div>

<div className="reveal-on-scroll relative pt-8 md:pt-16 group" style={{transitionDelay: '300ms'}}>
<div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-border group-hover:border-brand transition-colors z-10"></div>
<div className="text-xs font-mono text-brand mb-2">04</div>
<h3 className="text-white font-medium text-lg mb-3">Launch</h3>
<ul className="text-sm text-gray-500 space-y-1">
<li>• Embed &amp; Share</li>
<li>• Analytics setup</li>
<li>• Optimization</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-secondary border-t border-white/5" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Built for scale. Secured for enterprise.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="text-white font-medium mb-2">Role-based Access</h3>
<p className="text-sm text-gray-500">Granular permissions for admins, editors, and viewers.</p>
</div>

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<h3 className="text-white font-medium mb-2">Workspaces</h3>
<p className="text-sm text-gray-500">Isolate environments for different product lines or regions.</p>
</div>

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<h3 className="text-white font-medium mb-2">Variants</h3>
<p className="text-sm text-gray-500">Personalize demos by vertical, persona, or company size.</p>
</div>

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<h3 className="text-white font-medium mb-2">Advanced Reporting</h3>
<p className="text-sm text-gray-500">Export CSVs or sync directly to your data warehouse.</p>
</div>

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<h3 className="text-white font-medium mb-2">Native Integrations</h3>
<p className="text-sm text-gray-500">Connect with CRM, MAP, and Slack instantly.</p>
</div>

<div className="bg-surface p-8 hover:bg-surface-hover transition-colors group reveal-on-scroll">
<svg className="text-gray-500 group-hover:text-brand mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
<h3 className="text-white font-medium mb-2">Global CDN</h3>
<p className="text-sm text-gray-500">Edge caching ensures demos load instantly anywhere.</p>
</div>
</div>

<div className="mt-8 flex justify-center reveal-on-scroll">
<div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-xs text-gray-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>SOC2-ready practices • SSO/SAML available • Audit logs</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="customers">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll bg-surface border border-border p-8 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-colors">
<div>
<div className="mb-6 text-brand">
<svg className="opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.9825C16.5348 16 16.9825 15.5523 16.9825 15V9C16.9825 8.44772 16.5348 8 15.9825 8H12.0175C11.4652 8 11.0175 8.44772 11.0175 9V18C11.0175 19.6569 12.3607 21 14.0175 21H21Z"></path></svg>
</div>
<p className="text-white text-lg font-light leading-relaxed mb-6">"Our sales cycle dropped by 30% after switching to ProductDemos. The ability to send a personalized walkthrough before the first call is a game changer."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div> 
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-gray-500">VP of Sales, CloudScale</div>
</div>
</div>
</div>

<div className="reveal-on-scroll bg-surface border border-border p-8 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-colors" style={{transitionDelay: '100ms'}}>
<div>
<div className="mb-6 text-brand">
<svg className="opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.9825C16.5348 16 16.9825 15.5523 16.9825 15V9C16.9825 8.44772 16.5348 8 15.9825 8H12.0175C11.4652 8 11.0175 8.44772 11.0175 9V18C11.0175 19.6569 12.3607 21 14.0175 21H21Z"></path></svg>
</div>
<p className="text-white text-lg font-light leading-relaxed mb-6">"We launched our new feature set using a guided tour. Engagement was 5x higher than our traditional video announcements."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-gray-500">Head of Product, FlowTech</div>
</div>
</div>
</div>

<div className="reveal-on-scroll bg-surface border border-border p-8 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-colors" style={{transitionDelay: '200ms'}}>
<div>
<div className="mb-6 text-brand">
<svg className="opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.9825C16.5348 16 16.9825 15.5523 16.9825 15V9C16.9825 8.44772 16.5348 8 15.9825 8H12.0175C11.4652 8 11.0175 8.44772 11.0175 9V18C11.0175 19.6569 12.3607 21 14.0175 21H21Z"></path></svg>
</div>
<p className="text-white text-lg font-light leading-relaxed mb-6">"Finally, a tool that looks professional enough for enterprise buyers. The analytics help us understand exactly what they care about."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-gray-500">Director of Marketing, Nexus</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto relative">
<div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full"></div>
<div className="relative bg-surface border border-border rounded-3xl p-12 text-center overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Ready to transform your <br/> demo experience?</h2>
<p className="text-gray-400 mb-10">Get a tailored demo environment in days.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-brand text-black rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(76,244,255,0.4)]">Request Demo</button>
<button className="px-8 py-3 border border-border text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors">Talk to Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-bg-secondary border-t border-white/5 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-sm"></div>
</div>
<span className="text-white font-semibold tracking-tight">ProductDemos</span>
</div>
<p className="text-sm text-gray-500 max-w-xs">
                            The enterprise standard for interactive product experiences.
                        </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand transition-colors" href="#">Platform</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2024 ProductDemos Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
