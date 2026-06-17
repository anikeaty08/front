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
sans: ['Outfit', 'sans-serif'],
tech: ['Rajdhani', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#7c3aed',
dark: '#5b21b6',
glow: '#8b5cf6',
accent: '#a78bfa'
},
dark: {
bg: '#050505',
card: '#0A0A0A',
border: '#1F1F1F',
surface: '#121212'
}
},
animation: {
'float-slow': 'float 8s ease-in-out infinite',
'float-medium': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 30s linear infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.5' },
'50%': { opacity: '1' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Toggle Game Lists Logic
        function toggleGameList(element) {
            const list = element.querySelector('.game-list');
            const icon = element.querySelector('i[data-lucide="chevron-down"]');
            
            if (list.classList.contains('h-0')) {
                // Open
                list.classList.remove('h-0');
                list.classList.add('h-auto');
                icon.style.transform = 'rotate(180deg)';
                // Optional: Close others
                const allLists = document.querySelectorAll('.game-list');
                allLists.forEach(l => {
                    if(l !== list) {
                        l.classList.add('h-0');
                        l.classList.remove('h-auto');
                        // Reset other icons
                        l.parentElement.querySelector('i[data-lucide="chevron-down"]').style.transform = 'rotate(0deg)';
                    }
                });
            } else {
                // Close
                list.classList.add('h-0');
                list.classList.remove('h-auto');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // 2. Sponsor Logo Color Interaction
        const sponsors = document.querySelectorAll('.sponsor-logo');
        sponsors.forEach(sponsor => {
            sponsor.addEventListener('click', () => {
                // Toggle active class to show color
                if(sponsor.classList.contains('active')) {
                    sponsor.classList.remove('active');
                } else {
                    // Reset others
                    sponsors.forEach(s => s.classList.remove('active'));
                    sponsor.classList.add('active');
                }
            });
        });

        // 3. Live System Time Logic
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
            document.getElementById('live-clock').innerText = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime(); // Initial call
    
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
      

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none mix-blend-difference">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-sm font-mono text-emerald-400">
<i className="w-4 h-4 animate-pulse" data-lucide="clock"></i>
<span className="text-sm font-bold tracking-widest" id="live-clock">00:00:00</span>
</div>
<div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1 mr-1">System Time</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10">
<svg className="fill-current text-brand group-hover:text-brand-glow transition-colors duration-300" viewbox="0 0 100 100">
<path d="M50 10 L90 85 Q50 95 10 85 Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M50 25 L75 75 H25 Z" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="5"></path>
<path d="M35 65 C35 65 40 60 50 60 C60 60 65 65 65 65" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col leading-none font-tech uppercase tracking-wider">
<span className="text-xl font-semibold text-brand-glow">Arcade</span>
<span className="text-lg font-medium text-white/80">Society</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#games">Games</a>
<a className="hover:text-white transition-colors" href="#tournaments">Tournaments</a>
<a className="hover:text-white transition-colors" href="#articles">News</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-glow hover:text-white transition-all duration-300" href="https://discord.gg/YqPctXyh36" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Discord</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] z-0 animate-pulse-glow"></div>
<div className="relative z-20 text-center max-w-4xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
<span className="text-sm font-medium text-brand-glow tracking-wide uppercase">Global Esports Ecosystem</span>
</div>
<h1 className="font-tech text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] text-white mb-6">
                ARCHITECTS OF <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand/50">COMPETITIVE PLAY</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The premier destination for high-stakes tournaments, community events, and esports infrastructure. 
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-brand/25" href="#tournaments">
<i className="w-5 h-5" data-lucide="trophy"></i>
<span>View Tournaments</span>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm" href="#services">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span>Our Services</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-dark-bg relative border-t border-white/5" id="games">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-tech text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">GAME TITLES</h2>
<p className="text-white/50 mb-12 max-w-xl">Select a category to view the active competitive titles hosted on our platform.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-brand" data-lucide="crosshair"></i> FPS
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>

<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Valorant</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> CS:GO 2</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Overwatch 2</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Call of Duty</li>
</ul>
</div>
</div>

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-blue-400" data-lucide="swords"></i> MOBA
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> League of Legends</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> DOTA 2</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Mobile Legends</li>
</ul>
</div>
</div>

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-orange-400" data-lucide="skull"></i> Battle Royale
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Apex Legends</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Fortnite</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> PUBG</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Warzone</li>
</ul>
</div>
</div>

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-emerald-400" data-lucide="flag"></i> Sports &amp; Sim
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Rocket League</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> EA FC 24</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> iRacing</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> F1 23</li>
</ul>
</div>
</div>

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1555864326-5cf22ef123cf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-yellow-400" data-lucide="zap"></i> Fighting
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Street Fighter 6</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Tekken 8</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Smash Bros Ult</li>
</ul>
</div>
</div>

<div className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300" onclick="toggleGameList(this)">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
<div className="absolute bottom-4 left-6">
<h3 className="font-tech text-2xl font-bold text-white flex items-center gap-2">
<i className="text-pink-400" data-lucide="brain-circuit"></i> Strategy
                            </h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="game-list h-0 overflow-hidden transition-all duration-500 bg-black/40">
<ul className="p-6 space-y-3 border-t border-white/5 text-sm text-white/70">
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Teamfight Tactics</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> StarCraft II</li>
<li className="flex items-center gap-2 hover:text-brand cursor-pointer"><i className="w-3 h-3" data-lucide="arrow-right"></i> Magic: Arena</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/50" id="tournaments">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-tech text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">TOURNAMENT HUB</h2>
<p className="text-white/40">Track our active competitions and historical records.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="px-6 py-2 rounded-lg bg-brand text-white text-sm font-medium">Ongoing</button>
<button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white text-sm font-medium">Past Results</button>
</div>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row items-center gap-6 p-6 bg-dark-card border border-white/5 rounded-xl hover:border-brand/30 transition-all duration-300">
<div className="w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500">
<i className="w-8 h-8" data-lucide="crosshair"></i>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-xl font-bold font-tech text-white">Valorant: Summer Open</h3>
<p className="text-white/40 text-sm">Region: NA East • 5v5 Tactical</p>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<div className="text-xs text-white/30 uppercase tracking-wide">Prize Pool</div>
<div className="text-lg font-bold text-emerald-400">$5,000</div>
</div>
<div className="text-center">
<div className="text-xs text-white/30 uppercase tracking-wide">Teams</div>
<div className="text-lg font-bold text-white">32/64</div>
</div>
<a className="px-6 py-3 bg-white text-black text-sm font-bold rounded-lg hover:bg-brand-glow hover:text-white transition-colors" href="#">Register</a>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center gap-6 p-6 bg-dark-card border border-white/5 rounded-xl hover:border-brand/30 transition-all duration-300">
<div className="w-16 h-16 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
<i className="w-8 h-8" data-lucide="swords"></i>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-xl font-bold font-tech text-white">League of Legends: Academy</h3>
<p className="text-white/40 text-sm">Region: EU West • Draft Pick</p>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<div className="text-xs text-white/30 uppercase tracking-wide">Prize Pool</div>
<div className="text-lg font-bold text-emerald-400">$12,000</div>
</div>
<div className="text-center">
<div className="text-xs text-white/30 uppercase tracking-wide">Status</div>
<div className="text-lg font-bold text-brand flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span> Live</div>
</div>
<a className="px-6 py-3 bg-white/10 border border-white/10 text-white text-sm font-bold rounded-lg hover:bg-white hover:text-black transition-colors" href="#">Watch</a>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center gap-6 p-6 bg-dark-card border border-white/5 rounded-xl hover:border-brand/30 transition-all duration-300 opacity-60 hover:opacity-100">
<div className="w-16 h-16 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-500">
<i className="w-8 h-8" data-lucide="skull"></i>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-xl font-bold font-tech text-white">Apex Legends: Trios Cup</h3>
<p className="text-white/40 text-sm">Completed • Oct 15, 2023</p>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<div className="text-xs text-white/30 uppercase tracking-wide">Winner</div>
<div className="text-lg font-bold text-yellow-400">Team Liquid</div>
</div>
<a className="px-6 py-3 bg-transparent border border-white/10 text-white text-sm font-bold rounded-lg hover:bg-white/5" href="#">Results</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] relative overflow-hidden" id="services">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.2'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="font-tech text-4xl font-semibold text-white tracking-tight">SOCIETY SERVICES</h2>
<p className="text-white/40 mt-2">Platform Infrastructure Inventory</p>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-0 border-2 border-white/10 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">

<div className="inventory-slot aspect-square border-r border-b border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="monitor-play"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Production</h3>
<p className="text-xs text-white/30 text-center">Broadcast &amp; Streaming</p>
</div>

<div className="inventory-slot aspect-square border-r border-b border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="users"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Management</h3>
<p className="text-xs text-white/30 text-center">Team &amp; Player Ops</p>
</div>

<div className="inventory-slot aspect-square border-b border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="megaphone"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Marketing</h3>
<p className="text-xs text-white/30 text-center">Brand Activation</p>
</div>

<div className="aspect-square border-r border-b border-white/10 flex items-center justify-center bg-white/5 relative group cursor-pointer">
<div className="absolute inset-0 bg-brand/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-black animate-spin-slow">
<div className="w-12 h-12 rounded-full border border-brand/50 flex items-center justify-center">
<div className="w-2 h-2 bg-brand rounded-full"></div>
</div>
</div>
<span className="absolute mt-28 font-tech text-sm font-bold tracking-widest text-brand-glow">CORE</span>
</div>

<div className="inventory-slot aspect-square border-r border-b border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="code"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Development</h3>
<p className="text-xs text-white/30 text-center">Tech &amp; Integration</p>
</div>

<div className="inventory-slot aspect-square border-b border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="scale"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Legal</h3>
<p className="text-xs text-white/30 text-center">Contract &amp; Rights</p>
</div>

<div className="inventory-slot aspect-square border-r border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="database"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Data</h3>
<p className="text-xs text-white/30 text-center">Analytics &amp; Scouting</p>
</div>

<div className="inventory-slot aspect-square border-r border-white/10 p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="shield"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Security</h3>
<p className="text-xs text-white/30 text-center">Anti-Cheat &amp; Integrity</p>
</div>

<div className="inventory-slot aspect-square p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer">
<i className="w-10 h-10 text-white/30 group-hover:text-brand transition-colors mb-4" data-lucide="heart-handshake"></i>
<h3 className="font-tech text-lg font-bold text-white mb-1">Community</h3>
<p className="text-xs text-white/30 text-center">Events &amp; Support</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-dark-bg overflow-hidden" id="articles">
<div className="mb-10 px-6 max-w-7xl mx-auto">
<h2 className="font-tech text-3xl font-semibold text-white">LATEST INTEL</h2>
</div>

<div className="flex overflow-hidden relative w-full group">
<div className="flex animate-marquee gap-8 whitespace-nowrap hover:[animation-play-state:paused]">

<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 24, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">The Evolution of Macro Strategy in Tier 1 Esports</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>
<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 22, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">Arcade Society Partners with TechGear for 2025 Circuit</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>
<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 18, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">Understanding the New Meta: Valorant Patch 8.04 Analysis</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>
<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 15, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">Interview: How 'Team Eclipse' Rose from Open Qualifiers</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>

<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 24, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">The Evolution of Macro Strategy in Tier 1 Esports</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>
<a className="w-[400px] h-[200px] bg-dark-card border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand/50 transition-colors shrink-0" href="#">
<div>
<span className="text-xs font-mono text-brand mb-2 block">OCT 22, 2024</span>
<h3 className="text-xl font-bold text-white whitespace-normal line-clamp-2">Arcade Society Partners with TechGear for 2025 Circuit</h3>
</div>
<div className="flex items-center gap-2 text-sm text-white/40">Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i></div>
</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black">
<div className="text-center mb-12">
<h2 className="font-tech text-sm font-bold text-brand uppercase tracking-widest mb-2">Powered By</h2>
</div>
<div className="relative w-full overflow-hidden">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex animate-marquee gap-24 items-center">

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-white fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">LOGITECH G</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-red-500 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">RED BULL</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-yellow-400 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">CORSAIR</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-blue-500 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">INTEL</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-green-500 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">NVIDIA</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-white fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">ALIENWARE</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-green-400 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">MONSTER</text>
</svg>
</div>

<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-white fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">LOGITECH G</text>
</svg>
</div>
<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-red-500 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">RED BULL</text>
</svg>
</div>
<div className="sponsor-logo cursor-pointer shrink-0">
<svg className="h-10 text-yellow-400 fill-current" viewbox="0 0 100 30">
<text fontFamily="Rajdhani" fontSize="28" font-weight="900" letter-spacing="2" x="0" y="22">CORSAIR</text>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-bg" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="font-tech text-4xl md:text-5xl font-semibold text-white tracking-tight">ABOUT THE SOCIETY</h2>
<div className="h-1 w-20 bg-brand rounded-full"></div>
<p className="text-xl text-white/80 font-light leading-relaxed">
                        Established in 2021, Arcade Society began as a grassroots initiative to bridge the gap between casual gaming and professional esports.
                    </p>
<p className="text-white/60 leading-relaxed">
                        Today, we act as a comprehensive ecosystem for gamers, developers, and brands. Our mission is to democratize esports by providing professional-grade tournament infrastructure to communities of all sizes. From local LAN parties to international online qualifiers, Arcade Society sets the standard for fair play, high production value, and community engagement.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<h4 className="font-tech text-xl font-bold text-white mb-1">Mission</h4>
<p className="text-sm text-white/50">To elevate every gamer's potential through competition.</p>
</div>
<div>
<h4 className="font-tech text-xl font-bold text-white mb-1">Vision</h4>
<p className="text-sm text-white/50">A world where esports is accessible to everyone.</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand/20 blur-[80px]"></div>
<img className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-tech text-5xl md:text-7xl font-bold text-white mb-6">JOIN THE RANKS</h2>
<p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Connect with over 50,000 members, find your team, and start your journey to pro.</p>
<a className="inline-flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752C4] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl" href="https://discord.gg/YqPctXyh36" target="_blank">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"></path>
</svg>
                Join Discord Server
            </a>
</div>
</section>

<footer className="pt-24 pb-12 bg-dark-bg border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="relative w-8 h-8">
<svg className="fill-current text-brand" viewbox="0 0 100 100">
<path d="M50 10 L90 85 Q50 95 10 85 Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M50 25 L75 75 H25 Z" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="5"></path>
</svg>
</div>
<span className="font-tech text-2xl font-bold text-white tracking-wide">ARCADE SOCIETY</span>
</a>
<p className="text-white/40 max-w-sm text-lg font-light">
                        Building the ultimate ecosystem for competitive gamers. Join us and reshape the future of esports.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-6">Platform</h4>
<ul className="space-y-4 text-white/50 text-base">
<li><a className="hover:text-brand transition-colors" href="#tournaments">Tournaments</a></li>
<li><a className="hover:text-brand transition-colors" href="#games">Games</a></li>
<li><a className="hover:text-brand transition-colors" href="#articles">News &amp; Intel</a></li>
<li><a className="hover:text-brand transition-colors" href="#about">About Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Socials</h4>
<ul className="space-y-4 text-white/50 text-base">
<li><a className="hover:text-brand transition-colors flex items-center gap-2" href="https://discord.gg/YqPctXyh36" target="_blank"><i className="w-4 h-4" data-lucide="gamepad-2"></i> Discord</a></li>
<li><a className="hover:text-brand transition-colors flex items-center gap-2" href="https://www.instagram.com/arcade_society" target="_blank"><i className="w-4 h-4" data-lucide="instagram"></i> Instagram</a></li>
<li><a className="hover:text-brand transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="twitter"></i> Twitter</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-white/30 text-sm">© 2024 Arcade Society. All rights reserved.</p>
<div className="flex gap-6 text-sm text-white/30">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
