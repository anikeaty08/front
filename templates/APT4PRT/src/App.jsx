import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Initialize Lucide icons
  lucide.createIcons();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb20bde5-16a4-4ff2-bfad-0c6d915e0b59_3840w.jpg")'}}></div>

<header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0f]/80 border-white/5 border-b backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 text-xl font-bold tracking-tight animate-fade-in" href="#">
<span className="hidden sm:block font-sans">SolanaIQ</span>
</a>

<nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
<a className="transition-colors flex items-center gap-2 animate-fade-in animate-delay-1 hover:text-orange-400" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-sans">Open Source</span>
</a>
<a className="transition-colors flex items-center gap-2 animate-fade-in animate-delay-2 hover:text-orange-400" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="font-sans">Documentation</span>
</a>
<a className="transition-colors flex items-center gap-2 animate-fade-in animate-delay-3 hover:text-orange-400" href="#">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-sans">Research Paper</span>
</a>
<a className="transition-colors flex items-center gap-2 animate-fade-in animate-delay-4 hover:text-orange-400" href="#">
<svg className="lucide lucide-rss w-4 h-4" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
<span className="font-sans">Updates</span>
</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all animate-fade-in animate-delay-5 border-white/10 hover:border-white/20" href="#">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="font-sans">Sign In</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 px-5 py-2 text-sm font-semibold transition-all animate-fade-in animate-delay-6 bg-orange-600" href="#">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-sans">Get Started</span>
</a>
</div>

<button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors hover:bg-white/10" id="menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5" id="mobile-menu">
<div className="px-4 py-6 space-y-4 text-sm font-medium">
<a className="flex items-center gap-3 transition-colors hover:text-orange-400" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-sans">Open Source</span>
</a>
<a className="flex items-center gap-3 transition-colors hover:text-orange-400" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="font-sans">Documentation</span>
</a>
<a className="flex items-center gap-3 transition-colors hover:text-orange-400" href="#">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-sans">Research Paper</span>
</a>
<a className="flex items-center gap-3 transition-colors hover:text-orange-400" href="#">
<svg className="lucide lucide-rss w-4 h-4" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
<span className="font-sans">Updates</span>
</a>
<div className="pt-4 border-t space-y-3 border-white/10">
<a className="flex items-center gap-2 text-stone-300" href="#">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="font-sans">Sign In</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full hover:bg-orange-500 px-5 py-2 text-sm font-semibold transition-colors bg-orange-600" href="#">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-sans">Get Started</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b via-[#0a0a0f] to-[#0a0a0f] from-orange-900/30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-orange-600/20"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm font-medium mb-8 animate-fade-in text-orange-300">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="font-sans">Powered by Advanced Machine Learning</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight animate-slide-up font-manrope" style={{}}>
        The AI <span className="text-transparent bg-clip-text bg-gradient-to-r font-manrope from-orange-400 via-purple-400 to-orange-400" style={{}}>Intelligence Layer</span> for Solana Ecosystem
      </h1>
<p className="mt-6 sm:mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-1 font-sans text-stone-300">
        Unlock deep blockchain insights, automate complex DeFi strategies, and make data-driven decisions with our cutting-edge AI copilot built specifically for Solana developers and traders.
      </p>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-2">
<a className="inline-flex items-center justify-center gap-3 rounded-full font-semibold px-8 py-4 text-base hover:shadow-xl transition-all group bg-white text-black hover:bg-stone-100" href="#">
<svg className="lucide lucide-play-circle w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="font-sans">Start Building</span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-full border font-semibold px-8 py-4 text-base transition-all group border-white/20 hover:border-white/40 hover:bg-white/5" href="#">
<svg className="lucide lucide-video w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="font-sans">Watch Demo</span>
</a>
</div>
<div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm animate-slide-up animate-delay-3 text-stone-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-sans">Audited Smart Contracts</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-sans">Sub-second Latency</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-sans">12,000+ Active Users</span>
</div>
</div>
</div>

<div className="relative max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-24 animate-slide-up animate-delay-4">
<div className="rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] ring-1 shadow-2xl shadow-orange-500/10 overflow-hidden ring-white/10" style={{}}>

<div className="px-4 sm:px-6 py-4 border-b flex items-center justify-between border-white/10">
<div className="flex items-center gap-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-purple-500"></div>
<div className="w-3 h-3 rounded-full bg-pink-500"></div>
</div>
<span className="text-sm font-medium font-sans text-stone-400">SolanaIQ Dashboard</span>
</div>
<div className="flex items-center gap-2 text-xs text-stone-500">
<div className="w-2 h-2 rounded-full animate-pulse bg-pink-400"></div>
<span className="font-sans">Live Data</span>
</div>
</div>

<div className="aspect-[16/10] bg-gradient-to-br from-[#1a1a24] via-[#15151f] to-[#0f0f16] p-4 sm:p-6" style={{}}>
<div className="h-full flex flex-col gap-4">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-24">
<div className="bg-orange-500/10 rounded-lg border border-orange-500/20 p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-4 h-4 text-violet-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-xs font-sans text-stone-400">Portfolio Value</div>
<div className="font-semibold font-sans">$47,392.81</div>
</div>
</div>
<div className="bg-pink-500/10 rounded-lg border border-pink-500/20 p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-green-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div>
<div className="text-xs font-sans text-stone-400">24h Gain</div>
<div className="font-semibold font-sans text-pink-400">+12.4%</div>
</div>
</div>
<div className="bg-orange-500/10 rounded-lg border border-orange-500/20 p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
<svg className="lucide lucide-activity w-4 h-4 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="text-xs font-sans text-stone-400">Active Positions</div>
<div className="font-semibold font-sans">23</div>
</div>
</div>
</div>

<div className="flex-1 flex bg-[#0f0f16]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/956df0f5-3669-478b-aaf5-c77550e21137_1600w.jpg)] bg-cover rounded-lg pt-4 pr-4 pb-4 pl-4 items-center justify-center">
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight animate-slide-up font-manrope" style={{}}>
        Next-Generation Blockchain Intelligence
      </h2>
<p className="mt-4 sm:mt-6 text-lg sm:text-xl animate-slide-up animate-delay-1 font-sans text-stone-400">
        Our AI-powered platform combines deep learning, real-time blockchain analysis, and automated trading strategies to give you unprecedented insights into the Solana ecosystem.
      </p>
</div>
<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 mb-6 group-hover:scale-110 transition-transform to-purple-600 text-white">
<svg className="lucide lucide-brain w-7 h-7" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Neural Network Analysis</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Advanced deep learning models trained on petabytes of blockchain data to predict market movements, identify opportunities, and detect anomalies in real-time.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-orange-300 transition-colors text-orange-400">
<span className="font-sans">Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-1 ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 mb-6 group-hover:scale-110 transition-transform to-teal-600 text-white" style={{}}>
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Lightning Execution Engine</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Execute complex multi-step DeFi strategies across Jupiter, Raydium, and Orca with sub-100ms latency. Our MEV-protected execution ensures optimal fill rates.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-emerald-300 transition-colors text-emerald-400">
<span className="font-sans">View performance</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-2 ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 mb-6 group-hover:scale-110 transition-transform to-orange-600 text-white" style={{}}>
<svg className="lucide lucide-shield-check w-7 h-7" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Military-Grade Security</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Zero-knowledge proofs, hardware security modules, and multi-party computation ensure your private keys and trading strategies remain completely secure.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-orange-300 transition-colors text-orange-400">
<span className="font-sans">Security audit</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-3 ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 mb-6 group-hover:scale-110 transition-transform to-red-600 text-white" style={{}}>
<svg className="lucide lucide-cpu w-7 h-7" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Autonomous Trading Agents</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Deploy self-learning agents that adapt to market conditions, manage risk dynamically, and execute sophisticated arbitrage and yield farming strategies 24/7.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-orange-300 transition-colors text-orange-400">
<span className="font-sans">Deploy agent</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-4 ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 mb-6 group-hover:scale-110 transition-transform to-rose-600 text-white" style={{}}>
<svg className="lucide lucide-database w-7 h-7" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Real-Time Data Streams</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Access live price feeds, order book depth, transaction mempool data, and social sentiment from 200+ sources with guaranteed 99.99% uptime SLA.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-pink-300 transition-colors text-pink-400">
<span className="font-sans">API docs</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-5 ring-white/10 hover:ring-white/20">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 mb-6 group-hover:scale-110 transition-transform to-purple-600 text-white">
<svg className="lucide lucide-puzzle w-7 h-7" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl mb-4 font-manrope" style={{}}>Composable Architecture</h3>
<p className="leading-relaxed mb-6 font-sans text-stone-400">
          Mix and match trading strategies, risk management modules, and data sources with our drag-and-drop interface. Deploy custom strategies in minutes, not months.
        </p>
<div className="flex items-center gap-2 text-sm group-hover:text-orange-300 transition-colors text-orange-400">
<span className="font-sans">Build strategy</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-orange-950/10" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight animate-slide-up font-manrope" style={{}}>
        Trusted by Leading DeFi Professionals
      </h2>
<p className="mt-4 sm:mt-6 text-lg sm:text-xl animate-slide-up animate-delay-1 font-sans text-stone-400">
        From individual traders to institutional funds, see how SolanaIQ is transforming blockchain intelligence and automated trading strategies.
      </p>
</div>
<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 flex flex-col animate-slide-up ring-white/10">
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed flex-1 mb-6 font-sans text-stone-300">
          "SolanaIQ's AI agents have completely transformed our DeFi yield farming strategy. We've seen a 340% improvement in returns while reducing manual oversight by 95%. The predictive analytics are incredibly accurate."
        </p>
<div className="flex items-center gap-4">
<img alt="Marcus Chen" className="w-12 h-12 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<div className="">
<p className="font-semibold font-sans">Marcus Chen</p>
<p className="text-sm font-sans text-stone-400">Head of DeFi @ Phantom Ventures</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 flex flex-col animate-slide-up animate-delay-1 ring-white/10">
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed flex-1 mb-6 font-sans text-stone-300">
          "The real-time analytics and MEV protection have been game-changing for our trading operations. We've captured opportunities we never would have seen manually, and the AI's risk management has saved us from several major market downturns."
        </p>
<div className="flex items-center gap-4">
<img alt="Sarah Kim" className="w-12 h-12 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="font-semibold font-sans">Sarah Kim</p>
<p className="text-sm font-sans text-stone-400">Quantitative Trader @ Solana Capital</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#1a1a24] to-[#15151f] rounded-2xl p-6 sm:p-8 ring-1 flex flex-col animate-slide-up animate-delay-2 ring-white/10">
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed flex-1 mb-6 font-sans text-stone-300">
          "As a protocol developer, SolanaIQ's composable architecture and APIs have accelerated our development timeline by months. The documentation is excellent and the community support is outstanding."
        </p>
<div className="flex items-center gap-4">
<img alt="Alex Rodriguez" className="w-12 h-12 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop&amp;crop=face" style={{}}/>
<div>
<p className="font-semibold font-sans">Alex Rodriguez</p>
<p className="text-sm font-sans text-stone-400">Lead Developer @ DeFi Labs</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'saturate(180%) blur(20px)', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 4px 30px rgba(255, 255, 255, 0.1)'}}>
<div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 bg-transparent" style={{}}>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-black/10" style={{}}></div>
<div className="relative max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-manrope text-white" style={{}}>
          Ready to Transform Your Trading Strategy?
        </h2>
<p className="text-lg sm:text-xl mb-8 leading-relaxed font-sans text-orange-100">
          Join thousands of traders and developers who are already using SolanaIQ to unlock new opportunities in the Solana ecosystem. Start with our free tier and scale as you grow.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-3 rounded-full font-semibold px-8 py-4 text-base transition-all group bg-white bg-opacity-80 text-black hover:bg-opacity-100" href="#">
<svg className="lucide lucide-rocket w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-sans">Start Free Trial</span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-full border-2 font-semibold px-8 py-4 text-base transition-all group border-white/50 hover:border-white/70 hover:bg-white/20 text-white" href="#">
<svg className="lucide lucide-calendar w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-sans">Schedule Demo</span>
</a>
</div>
</div>
<div className="absolute right-0 top-0 opacity-10">
<div className="w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>

<footer className="border-t bg-[#0a0a0f] border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid gap-8 lg:grid-cols-5">

<div className="lg:col-span-2">
<a className="flex items-center gap-3 text-xl font-bold mb-4" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 flex items-center justify-center to-purple-600">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="font-sans">SolanaIQ</span>
</a>
<p className="leading-relaxed max-w-md mb-6 font-sans text-stone-400">
          The AI-powered intelligence layer for the Solana ecosystem. Unlock deep blockchain insights and automate complex DeFi strategies with cutting-edge machine learning.
        </p>
<div className="flex items-center gap-4">
<a className="transition-colors text-stone-400 hover:text-white" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition-colors text-stone-400 hover:text-white" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="transition-colors text-stone-400 hover:text-white" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="transition-colors text-stone-400 hover:text-white" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
<div>
<h3 className="font-semibold mb-4 font-sans text-white">Product</h3>
<ul className="space-y-3 text-sm">
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Features</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Pricing</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">API</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Documentation</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-sans text-white">Company</h3>
<ul className="space-y-3 text-sm">
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">About</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Blog</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Careers</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Press</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Partners</a></li>
</ul>
</div>
<div className="">
<h3 className="font-semibold mb-4 font-sans text-white">Support</h3>
<ul className="space-y-3 text-sm">
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Help Center</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Contact</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Status</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Security</a></li>
<li><a className="transition-colors font-sans text-stone-400 hover:text-white" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-sm border-white/10 text-stone-400">
<p className="font-sans">© 2024 SolanaIQ. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 sm:mt-0">
<a className="transition-colors font-sans hover:text-white" href="#">Terms</a>
<a className="transition-colors font-sans hover:text-white" href="#">Privacy</a>
<a className="transition-colors font-sans hover:text-white" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
