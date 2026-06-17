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



        // Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-lg', 'bg-neutral-950/95');
                navbar.classList.remove('bg-neutral-950/80');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-neutral-950/95');
                navbar.classList.add('bg-neutral-950/80');
            }
        });

        // Dropdown Logic (Desktop)
        const dropdownToggle = document.getElementById('dropdownToggle');
        const dropdownMenu = document.getElementById('dropdownMenu');
        const dropdownIcon = document.getElementById('dropdownIcon');
        let isDropdownOpen = false;

        dropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            isDropdownOpen = !isDropdownOpen;
            if (isDropdownOpen) {
                dropdownMenu.classList.remove('invisible', 'opacity-0', 'translate-y-2');
                dropdownIcon.classList.add('rotate-180');
            } else {
                dropdownMenu.classList.add('invisible', 'opacity-0', 'translate-y-2');
                dropdownIcon.classList.remove('rotate-180');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (isDropdownOpen && !dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                isDropdownOpen = false;
                dropdownMenu.classList.add('invisible', 'opacity-0', 'translate-y-2');
                dropdownIcon.classList.remove('rotate-180');
            }
        });

        // Mobile Sidebar Logic
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const closeSidebarBtn = document.getElementById('closeSidebar');

        function openSidebar() {
            sidebar.classList.remove('translate-x-full');
            sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeSidebar() {
            sidebar.classList.add('translate-x-full');
            sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
        }

        sidebarToggle.addEventListener('click', openSidebar);
        closeSidebarBtn.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // Sidebar link click closes sidebar
        const sidebarLinks = sidebar.querySelectorAll('a[href^="#"]');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeSidebar);
        });

        // Modal Logic
        const modal = document.getElementById('ticketModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');

        function openModal() {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity/transform
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('opacity-0', 'scale-95');
                modalContent.classList.add('opacity-100', 'scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
            // Close sidebar if open
            closeSidebar();
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.remove('opacity-100', 'scale-100');
            modalContent.classList.add('opacity-0', 'scale-95');
            
            // Wait for animation to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modal on backdrop click
        modalBackdrop.addEventListener('click', closeModal);
    
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
      

<nav className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-xl font-semibold tracking-tighter text-white">FC<span className="text-neutral-500">PRO</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-white hover:text-emerald-400 transition-colors" href="#home">Home</a>

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium hover:text-emerald-400 transition-colors focus:outline-none" id="dropdownToggle">
                            Teams <iconify-icon className="text-xs transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="dropdownIcon" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute top-full mt-2 w-48 bg-neutral-900 border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible translate-y-2 transition-all duration-200" id="dropdownMenu">
<div className="p-1">
<a className="block px-4 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">First Team</a>
<a className="block px-4 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">Women's Team</a>
<a className="block px-4 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">Academy</a>
</div>
</div>
</div>
<a className="text-sm font-medium hover:text-emerald-400 transition-colors" href="#matches">Matches</a>
<a className="text-sm font-medium hover:text-emerald-400 transition-colors" href="#news">News</a>
<a className="text-sm font-medium hover:text-emerald-400 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4 z-50">
<button className="hidden sm:flex items-center justify-center px-4 py-1.5 text-sm font-medium text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" onclick="openModal()">
                        Get Tickets
                    </button>

<button className="md:hidden text-neutral-300 hover:text-white focus:outline-none flex items-center justify-center" id="sidebarToggle">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="sidebarOverlay"></div>
<div className="fixed top-0 right-0 h-full w-72 bg-neutral-900 border-l border-white/5 z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-2xl flex flex-col" id="sidebar">
<div className="p-6 flex items-center justify-between border-b border-white/5">
<span className="text-lg font-semibold tracking-tighter text-white">Menu</span>
<button className="text-neutral-400 hover:text-white transition-colors" id="closeSidebar">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#home">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon> Home
            </a>
<div className="space-y-1">
<div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-300">
<iconify-icon className="text-lg" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon> Teams
                </div>
<div className="pl-11 pr-4 space-y-1">
<a className="block py-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors" href="#">First Team</a>
<a className="block py-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors" href="#">Women's Team</a>
</div>
</div>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#matches">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Matches
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#news">
<iconify-icon className="text-lg" icon="solar:document-linear" strokeWidth="1.5"></iconify-icon> News
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#contact">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> Contact
            </a>
</div>
<div className="p-6 border-t border-white/5">
<button className="w-full py-3 text-sm font-medium text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-colors" onclick="openModal()">
                Get Tickets Now
            </button>
</div>
</div>

<main className="relative bg-grid-pattern">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5" id="home">

<div className="absolute inset-0 z-0">
<img alt="Stadium" className="w-full h-full object-cover opacity-20 object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">New season starts in 14 days</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                    Dominate the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Beautiful Game.</span>
</h1>
<p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-medium">
                    Experience football at its finest. Join the legacy, feel the passion, and witness greatness on the pitch. Welcome to the home of champions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2" onclick="openModal()">
                        Join the Club <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-md flex items-center justify-center" href="#matches">
                        View Fixtures
                    </a>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/5" id="teams">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Our Squads</h2>
<p className="text-sm text-neutral-400 max-w-xl">Meet the warriors who wear our crest with pride across all divisions.</p>
</div>
<a className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 group" href="#">
                        See full roster <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-neutral-800/50 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-7xl text-white" icon="solar:shield-bold"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">First Team</h3>
<p className="text-sm text-neutral-400 mb-6">Competing at the highest level in the premier division.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon> 28 Players</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon> 5 Trophies</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-neutral-800/50 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-7xl text-white" icon="solar:shield-bold"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Women's Team</h3>
<p className="text-sm text-neutral-400 mb-6">Trailblazers setting new standards in women's football.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon> 24 Players</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon> 3 Trophies</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-neutral-800/50 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-pointer lg:col-span-1 md:col-span-2">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-7xl text-white" icon="solar:shield-bold"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:academic-cap-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Academy</h3>
<p className="text-sm text-neutral-400 mb-6">Nurturing the next generation of world-class talent.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon> 60+ Prospects</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Local &amp; Int.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/5 bg-neutral-900/20" id="matches">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Match Center</h2>
<p className="text-sm text-neutral-400">Upcoming fixtures and recent results.</p>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">

<div className="p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start w-full md:w-1/3">
<span className="text-xs font-medium text-emerald-400 mb-1">Champions League • Next</span>
<span className="text-sm text-neutral-400">Sat, 24 Oct • 20:00</span>
</div>
<div className="flex items-center justify-center gap-6 w-full md:w-1/3">
<div className="text-right">
<span className="block text-base font-semibold text-white tracking-tight">FC PRO</span>
</div>
<div className="px-4 py-2 bg-neutral-950 border border-white/10 rounded-lg text-sm font-medium text-white shadow-inner">
                                VS
                            </div>
<div className="text-left">
<span className="block text-base font-medium text-neutral-300 tracking-tight">United CF</span>
</div>
</div>
<div className="flex justify-center md:justify-end w-full md:w-1/3">
<button className="text-xs font-medium text-white px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">Buy Tickets</button>
</div>
</div>

<div className="p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start w-full md:w-1/3">
<span className="text-xs font-medium text-neutral-500 mb-1">Premier Div • FT</span>
<span className="text-sm text-neutral-400">Wed, 20 Oct</span>
</div>
<div className="flex items-center justify-center gap-6 w-full md:w-1/3">
<div className="text-right flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="block text-base font-semibold text-white tracking-tight">FC PRO</span>
</div>
<div className="px-4 py-2 bg-neutral-950 border border-white/10 rounded-lg text-sm font-semibold text-white tracking-widest shadow-inner">
                                3 - 1
                            </div>
<div className="text-left">
<span className="block text-base font-medium text-neutral-400 tracking-tight">City FC</span>
</div>
</div>
<div className="flex justify-center md:justify-end w-full md:w-1/3">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1">Highlights <iconify-icon icon="solar:play-circle-linear"></iconify-icon></button>
</div>
</div>

<div className="p-6 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start w-full md:w-1/3">
<span className="text-xs font-medium text-neutral-500 mb-1">Premier Div • FT</span>
<span className="text-sm text-neutral-400">Sat, 16 Oct</span>
</div>
<div className="flex items-center justify-center gap-6 w-full md:w-1/3">
<div className="text-right">
<span className="block text-base font-medium text-neutral-400 tracking-tight">Athletico</span>
</div>
<div className="px-4 py-2 bg-neutral-950 border border-white/10 rounded-lg text-sm font-semibold text-neutral-400 tracking-widest shadow-inner">
                                0 - 0
                            </div>
<div className="text-left">
<span className="block text-base font-medium text-neutral-300 tracking-tight">FC PRO</span>
</div>
</div>
<div className="flex justify-center md:justify-end w-full md:w-1/3">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1">Report <iconify-icon icon="solar:document-text-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/5" id="news">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Latest Updates</h2>
<a className="hidden sm:flex text-sm text-emerald-400 hover:text-emerald-300 font-medium items-center gap-1 group" href="#">
                        View all news <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-white/5">
<img alt="Training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-500 rounded-full">Club News</span>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span>Oct 22, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>3 min read</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-snug group-hover:text-emerald-400 transition-colors">New training facility officially opens doors to academy players.</h3>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-white/5">
<img alt="Match" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-neutral-800 border border-white/10 rounded-full backdrop-blur-md">Match Report</span>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span>Oct 20, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>5 min read</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-snug group-hover:text-emerald-400 transition-colors">Dominant display secures crucial three points in the derby.</h3>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-white/5">
<img alt="Signing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-neutral-800 border border-white/10 rounded-full backdrop-blur-md">Transfer</span>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span>Oct 18, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>2 min read</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-snug group-hover:text-emerald-400 transition-colors">Club announces agreement for highly-rated international midfielder.</h3>
</article>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl mx-auto flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Get in touch</h2>
<p className="text-sm text-neutral-400">For press, partnerships, or general inquiries.</p>
</div>
<form className="space-y-4 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="subject">Subject</label>

<select className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none cursor-pointer" id="subject">
<option className="text-neutral-600" disabled="" selected="" value="">Select a topic</option>
<option value="general">General Inquiry</option>
<option value="tickets">Ticketing</option>
<option value="press">Press &amp; Media</option>
<option value="partnership">Partnerships</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full py-3.5 text-sm font-medium text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] mt-2" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xl font-semibold tracking-tighter text-white">FC<span className="text-neutral-500">PRO</span></span>
</div>
<p className="text-sm text-neutral-500 mb-6">More than a club. A legacy of excellence, passion, and unyielding dedication to the beautiful game.</p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Club</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">History</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Stadium</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Teams</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">First Team</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Women's Team</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Academy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Staff</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Support</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Ticketing FAQ</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Accessibility</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Store Help</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2023 FC PRO. All rights reserved.</p>
<div className="flex gap-4 text-xs text-neutral-600">
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="ticketModal">

<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="modalBackdrop"></div>

<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
<div className="relative bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl transform scale-95 opacity-0 transition-all duration-300 sm:max-w-md w-full p-6 text-left overflow-hidden" id="modalContent">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex justify-between items-center mb-6 relative z-10">
<h3 className="text-xl font-semibold text-white tracking-tight">Join FC PRO</h3>
<button className="text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-full" onclick="closeModal()">
<iconify-icon className="text-lg" icon="solar:close-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
<div className="relative z-10">
<p className="text-sm text-neutral-400 mb-6">Sign up for official membership to get priority access to match tickets, exclusive content, and club merchandise discounts.</p>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Enter your email" type="email"/>
</div>

<label className="flex items-start gap-3 cursor-pointer group mt-4">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-neutral-950 border border-white/20 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center">
<iconify-icon className="text-neutral-950 text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
                                I agree to receive marketing communications and accept the <a className="text-emerald-400 hover:underline" href="#">Terms &amp; Conditions</a>.
                            </span>
</label>
<button className="w-full py-3.5 mt-6 text-sm font-medium text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]" type="button">
                            Become a Member
                        </button>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}
