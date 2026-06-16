import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
lob: {
neon: '#C0FF04',
black: '#0A0A0A',
base: '#F2F2F2',
silver: '#D6D6D6',
white: '#FFFFFF',
darkbg: '#050505',
darkcard: '#121212',
darkborder: '#1F1F1F'
}
},
backgroundImage: {
'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
'mesh': 'radial-gradient(at 40% 20%, hsla(74,100%,51%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,76%,0.05) 0px, transparent 50%)',
}
}
}
}



      lucide.createIcons();

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }

      function toggleTheme() {
          const html = document.documentElement;
          if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              localStorage.setItem('theme', 'light');
          } else {
              html.classList.add('dark');
              localStorage.setItem('theme', 'dark');
          }
      }

      const container = document.getElementById('carousel');
      const leftBtn = document.getElementById('scrollLeft');
      const rightBtn = document.getElementById('scrollRight');

      if(leftBtn && rightBtn && container) {
          leftBtn.addEventListener('click', () => {
              container.scrollBy({ left: -320, behavior: 'smooth' });
          });
          rightBtn.addEventListener('click', () => {
              container.scrollBy({ left: 320, behavior: 'smooth' });
          });
      }
    


      const header = document.getElementById('navbar');
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 10) {
              header.classList.add('bg-white/80', 'dark:bg-lob-darkbg/80', 'backdrop-blur-md', 'border-b', 'border-lob-silver', 'dark:border-lob-darkborder', 'py-3');
              header.classList.remove('bg-transparent', 'py-5');
          } else {
              header.classList.remove('bg-white/80', 'dark:bg-lob-darkbg/80', 'backdrop-blur-md', 'border-b', 'border-lob-silver', 'dark:border-lob-darkborder', 'py-3');
              header.classList.add('bg-transparent', 'py-5');
          }
      });

      mobileBtn.addEventListener('click', () => {
          const isOpen = !mobileMenu.classList.contains('hidden');
          if (isOpen) {
              mobileMenu.classList.add('hidden');
              mobileMenu.classList.remove('flex');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
          } else {
              mobileMenu.classList.remove('hidden');
              mobileMenu.classList.add('flex');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>';
          }
      });

      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
              mobileMenu.classList.remove('flex');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
          });
      });
    


      window.addEventListener('load', function() { document.body.classList.remove('opacity-0'); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5" id="navbar">
<div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">

<a className="flex items-center gap-2 group z-50" href="#">
<div className="w-8 h-8 md:w-9 md:h-9 bg-lob-black dark:bg-lob-neon text-lob-neon dark:text-lob-black rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
<svg className="fill-current" fill="none" height="18" viewbox="0 0 100 100" width="18">
<path clip-rule="evenodd" d="M25 35H75L62 50H75V65H50V50H38L25 35Z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-xl font-bold text-lob-black dark:text-white tracking-tight">
            Lob.
          </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#formats">
            Formats
          </a>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#events">
            Calendar
          </a>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#league">
            The League
          </a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button className="p-2 text-gray-500 dark:text-gray-400 hover:text-lob-black dark:hover:text-white transition-colors" onclick="toggleTheme()">
<svg className="dark:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
<svg className="hidden dark:block" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</button>
<a className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-lob-black dark:hover:text-white transition-colors" href="#join">
            Sign In
          </a>
<a className="px-5 py-2 bg-lob-black text-white dark:bg-lob-neon dark:text-lob-black text-sm font-bold rounded-full hover:bg-gray-800 dark:hover:bg-[#a6db00] transition-colors flex items-center gap-2 shadow-lg shadow-lob-black/20 dark:shadow-lob-neon/20" href="#join">
            Join Club
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="md:hidden flex items-center gap-4">
<button className="p-2 text-gray-500 dark:text-gray-400" onclick="toggleTheme()">
<svg className="dark:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
<svg className="hidden dark:block" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</button>
<button className="p-2 text-lob-black dark:text-white z-50" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="fixed inset-0 bg-white dark:bg-lob-darkbg z-40 hidden flex-col items-center justify-center space-y-8" id="mobile-menu">
<nav className="flex flex-col items-center gap-6 text-xl font-semibold text-lob-black dark:text-white">
<a className="mobile-link" href="#formats">Formats</a>
<a className="mobile-link" href="#events">Calendar</a>
<a className="mobile-link" href="#league">The League</a>
</nav>
<div className="flex flex-col items-center gap-4 w-full px-10">
<a className="w-full py-4 bg-lob-black text-white dark:bg-lob-neon dark:text-lob-black font-bold rounded-xl shadow-lg text-center" href="#join">
              Join Club
            </a>
<a className="text-gray-500 dark:text-gray-400 font-medium py-2" href="#join">
              Sign In
            </a>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0">
<img alt="Padel Court" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56bb64d5-0be3-460f-a19b-8b46d6120a76_800w.png"/>

<div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-[2px]"></div>
<div className="dark:to-lob-darkbg bg-gradient-to-b from-black/30 via-transparent via-[60%] to-white absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lob-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lob-neon"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
              Season 2 Registration
            </span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.9] mb-8">
            RAISE
            <br/>
            THE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lob-neon to-lime-500">
              GAME.
            </span>
</h1>
<p className="text-xl md:text-2xl text-white/80 font-light max-w-lg mx-auto text-balance mb-10">
            The modern padel community for the ambitious. Competitive formats,
            verified rankings, and a league designed for progress.
          </p>
<div className="flex flex-wrap justify-center gap-4">
<a className="px-8 py-4 bg-lob-neon text-lob-black rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(192,255,4,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2" href="#events">
              Find a Match
              <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[2]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-bold text-sm hover:bg-white/20 transition-all duration-300 backdrop-blur-sm" href="#league">
              View Rankings
            </a>
</div>
</div>
</section>

<section className="bg-white dark:bg-lob-darkbg py-24 border-b border-lob-silver dark:border-lob-darkborder" id="formats">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-lob-black dark:text-white mb-6">
              Our Community
            </h2>
<p className="text-gray-500 dark:text-gray-400 text-lg">
              Experience the perfect blend of competition, connection, and
              lifestyle.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-bold text-white mb-2">
                  Vibrant Community
                </h3>
<p className="text-white/80 text-sm leading-relaxed font-medium">
                  Connect with passionate players. Events that go beyond the
                  court.
                </p>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Competition" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-bold text-white mb-2">
                  Competitive Spirit
                </h3>
<p className="text-white/80 text-sm leading-relaxed font-medium">
                  Structured leagues and tournaments designed to push your
                  limits.
                </p>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-bold text-white mb-2">
                  Premium Experience
                </h3>
<p className="text-white/80 text-sm leading-relaxed font-medium">
                  Professional organization, stats tracking, and seamless play.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-lob-base dark:bg-lob-darkbg py-24" id="events">
<div className="max-w-7xl mx-auto px-6 mb-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-lob-black dark:text-white">
                Upcoming Events
              </h2>
<p className="text-sm text-gray-500 mt-1">
                Book your spot for this week.
              </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-lob-silver dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-colors" id="scrollLeft">
<svg className="lucide lucide-chevron-left w-5 h-5 text-lob-black dark:text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full border border-lob-silver dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-colors" id="scrollRight">
<svg className="lucide lucide-chevron-right w-5 h-5 text-lob-black dark:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar max-w-7xl mx-auto px-6" id="carousel">
<div className="min-w-[300px] md:min-w-[340px] snap-center">
<div className="group h-full bg-white dark:bg-lob-darkcard rounded-2xl border border-lob-silver dark:border-lob-darkborder p-1.5 flex flex-col hover:border-lob-black dark:hover:border-lob-neon hover:shadow-lg transition-all duration-300">
<div className="h-48 rounded-xl relative overflow-hidden flex flex-col justify-between p-4">
<img alt="League Match" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="bg-white/90 dark:bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-black/5 dark:border-white/10">
                    Oct 24 • 18:00
                  </span>
<span className="bg-lob-neon text-lob-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    League
                  </span>
</div>
</div>
<div className="p-5 flex flex-col gap-4 flex-grow">
<div>
<h3 className="text-lg font-semibold text-lob-black dark:text-white leading-tight mb-1">
                    Premier League Matchday
                  </h3>
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                    The Padel Club, Center Court
                  </div>
</div>
<div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
<span className="px-2 py-1 rounded bg-lob-base dark:bg-white/5 border border-lob-silver dark:border-white/5">
                    Level 4.0+
                  </span>
<span className="px-2 py-1 rounded bg-lob-base dark:bg-white/5 border border-lob-silver dark:border-white/5">
                    Pairs
                  </span>
</div>
<button className="w-full mt-auto py-2.5 rounded-lg bg-lob-black text-white dark:bg-white dark:text-lob-black text-xs font-bold uppercase hover:opacity-90 transition-opacity">
                  Join League ($30)
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[340px] snap-center">
<div className="group h-full bg-white dark:bg-lob-darkcard rounded-2xl border border-lob-silver dark:border-lob-darkborder p-1.5 flex flex-col hover:border-lob-black dark:hover:border-lob-neon hover:shadow-lg transition-all duration-300">
<div className="h-48 rounded-xl relative overflow-hidden flex flex-col justify-between p-4">
<img alt="Tournament" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="bg-white/90 dark:bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-black/5 dark:border-white/10">
                    Nov 02 • 09:00
                  </span>
<span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    Tournament
                  </span>
</div>
</div>
<div className="p-5 flex flex-col gap-4 flex-grow">
<div>
<h3 className="text-lg font-semibold text-lob-black dark:text-white leading-tight mb-1">
                    Winter Cup Qualifiers
                  </h3>
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                    City Sports Arena
                  </div>
</div>
<div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
<span className="px-2 py-1 rounded bg-lob-base dark:bg-white/5 border border-lob-silver dark:border-white/5">
                    Open
                  </span>
<span className="px-2 py-1 rounded bg-lob-base dark:bg-white/5 border border-lob-silver dark:border-white/5">
                    Knockout
                  </span>
</div>
<button className="w-full mt-auto py-2.5 rounded-lg border border-lob-black dark:border-white text-lob-black dark:text-white text-xs font-bold uppercase hover:bg-lob-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Register Team
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[340px] snap-center">
<div className="group h-full bg-gray-50 dark:bg-lob-darkcard/50 rounded-2xl border border-dashed border-lob-silver dark:border-lob-darkborder p-1.5 flex flex-col justify-center items-center text-center relative overflow-hidden">
<img alt="Coming Soon" className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="relative z-10 p-8 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
<i className="w-5 h-5 text-lob-black dark:text-white" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-bold text-lob-black dark:text-white mb-2">
                  Coming Soon
                </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 max-w-[200px] leading-relaxed">
                  New tournament formats and league divisions are being
                  finalized for the upcoming season.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-lob-darkbg py-24" id="league">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl bg-lob-black dark:bg-[#080808] text-white relative overflow-hidden px-6 py-16 md:p-16">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lob-neon/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-lob-neon animate-pulse"></span>
<span className="text-lob-neon uppercase text-xs font-bold tracking-widest">
                    Launching Winter 2024
                  </span>
</div>
<h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                  The Lob League.
                </h2>
<p className="text-gray-400 text-lg mb-8 max-w-md">
                  A structured, season-long competition. 10 weeks, fixed pairs,
                  promotion and relegation battles. This is where the city's
                  best prove it.
                </p>
<div className="space-y-6 border-t border-white/10 pt-8">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<i className="w-4 h-4 text-lob-neon" data-lucide="layers"></i>
</div>
<div>
<h4 className="font-bold text-white text-sm">4 Divisions</h4>
<p className="text-gray-500 text-xs mt-1">
                        From Beginners (2.5) to Elite (5.5+). Find your level.
                      </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<i className="w-4 h-4 text-lob-neon" data-lucide="trending-up"></i>
</div>
<div>
<h4 className="font-bold text-white text-sm">Live Stats</h4>
<p className="text-gray-500 text-xs mt-1">
                        Real-time match tracking and historical performance
                        data.
                      </p>
</div>
</div>
</div>
<div className="mt-10">
<button className="bg-white text-lob-black hover:bg-lob-silver px-6 py-3 rounded-lg text-sm font-bold transition-colors">
                    Join Waiting List
                  </button>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<i className="w-12 h-12 text-gray-600 mb-4" data-lucide="lock"></i>
<h3 className="text-2xl font-bold text-white mb-2">
                  Registration Locked
                </h3>
<p className="text-sm text-gray-500 max-w-xs mx-auto">
                  League spots are limited to 32 teams per division. Priority
                  access opens for members on Nov 1st.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-lob-darkbg border-lob-silver dark:border-lob-darkborder bg-white border-b pt-24 pb-24" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div className="">
<div className="flex mb-4 gap-x-2 gap-y-2 items-center">
<div className="w-2 h-2 rounded-full bg-lob-neon"></div>
<span className="uppercase text-xs font-semibold text-gray-500 tracking-wider">
                    FAQs
                  </span>
</div>
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-lob-black dark:text-white mb-6">
                  Frequently Asked
                  <br/>
                  Questions
                </h2>
</div>

<div className="bg-lob-base dark:bg-lob-darkcard border border-lob-silver dark:border-lob-darkborder rounded-2xl p-8 shadow-sm">
<h3 className="text-lob-black dark:text-white text-xl font-bold mb-2">
                  Can't find the answer you're looking for?
                </h3>
<p className="dark:text-gray-400 leading-relaxed text-sm text-gray-500 mb-8">
                  Reach out to our team directly.
                </p>
<div className="space-y-4">
<a className="flex items-center gap-3 dark:bg-white/5 border-lob-silver dark:border-white/10 hover:border-lob-black dark:hover:border-white transition-colors bg-white border rounded-lg pt-3 pr-3 pb-3 pl-3" href="mailto:hello@lob.community">
<svg className="lucide lucide-mail w-4 h-4 text-lob-black dark:text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<span className="text-lob-black dark:text-white text-sm font-medium">
                      geral@lob-padel.pt
                    </span>
</a>
<a className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 rounded-lg border border-lob-silver dark:border-white/10 hover:border-lob-black dark:hover:border-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4 text-lob-black dark:text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-lob-black dark:text-white text-sm font-medium">
                      @lob.padel
                    </span>
</a>
<a className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 rounded-lg border border-lob-silver dark:border-white/10 hover:border-lob-black dark:hover:border-white transition-colors" href="#">
<svg className="lucide lucide-message-circle w-4 h-4 text-lob-black dark:text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
<span className="text-sm font-medium text-lob-black dark:text-white">
                      Join WhatsApp Community
                    </span>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-4">

<details className="group bg-lob-base dark:bg-lob-darkcard border border-lob-silver dark:border-lob-darkborder rounded-2xl overflow-hidden transition-all duration-300 [&amp;[open]]:shadow-lg">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors list-none">
<h4 className="font-semibold text-base text-lob-black dark:text-white">
                    What is an Americano format?
                  </h4>
<span className="transition-transform duration-300 group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  In an Americano, you play short matches with different
                  partners. You collect individual points for every ball you
                  win. The player with the most points at the end is the winner.
                  It's fast, fun, and fair.
                </div>
</details>

<details className="group bg-lob-base dark:bg-lob-darkcard border border-lob-silver dark:border-lob-darkborder rounded-2xl overflow-hidden transition-all duration-300 [&amp;[open]]:shadow-lg">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors list-none">
<h4 className="font-semibold text-base text-lob-black dark:text-white">
                    Do I need a partner to join?
                  </h4>
<span className="transition-transform duration-300 group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  For our Americano and Mexicano events, no! You sign up
                  individually and we rotate partners. For "League" or
                  "Tournament" events, you will need a fixed partner.
                </div>
</details>

<details className="group bg-lob-base dark:bg-lob-darkcard border border-lob-silver dark:border-lob-darkborder rounded-2xl overflow-hidden transition-all duration-300 [&amp;[open]]:shadow-lg">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors list-none">
<h4 className="font-semibold text-base text-lob-black dark:text-white">
                    How is my level calculated?
                  </h4>
<span className="transition-transform duration-300 group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  We use a proprietary algorithm based on your match results
                  against other rated players. New players start with a
                  provisional rating based on self-assessment.
                </div>
</details>

<details className="group bg-lob-base dark:bg-lob-darkcard border border-lob-silver dark:border-lob-darkborder rounded-2xl overflow-hidden transition-all duration-300 [&amp;[open]]:shadow-lg">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors list-none">
<h4 className="font-semibold text-base text-lob-black dark:text-white">
                    What is the cancellation policy?
                  </h4>
<span className="transition-transform duration-300 group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Cancellations made more than 24 hours before the event are
                  fully refunded. Late cancellations are credited only if we can
                  find a replacement player.
                </div>
</details>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-lob-darkbg py-24 px-6" id="join">
<div className="max-w-7xl mx-auto">
<div className="bg-lob-silver/30 dark:bg-white/5 border border-lob-silver dark:border-lob-darkborder rounded-3xl p-8 md:p-16 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">

<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-lob-black dark:text-white mb-6">
                  Join the
                  <br/>
                  Community.
                </h2>
<p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  Get organized, track your stats, and find players who match
                  your ambition.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lob-black dark:bg-lob-neon flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-white dark:text-lob-black stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lob-black dark:text-white text-sm font-medium">
                      Early access to tournament slots
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lob-black dark:bg-lob-neon flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-white dark:text-lob-black stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lob-black dark:text-white text-sm font-medium">
                      Verified skill ratings
                    </span>
</div>
</div>
</div>

<div className="flex items-center justify-center lg:justify-end">
<div className="bg-white dark:bg-black border border-lob-silver dark:border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-lob-black dark:text-white mb-2">
                      Create Account
                    </h3>
<p className="text-xs text-gray-500 dark:text-gray-400">
                      Join 1,200+ local players today
                    </p>
</div>
<form className="space-y-4">
<div>
<label className="block text-[10px] font-bold uppercase text-gray-500 mb-1.5 ml-1">
                        Email
                      </label>
<input className="w-full bg-lob-base dark:bg-white/10 border border-transparent focus:border-lob-black dark:focus:border-lob-neon rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors dark:text-white" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full bg-lob-black text-white dark:bg-lob-neon dark:text-lob-black font-bold py-3.5 rounded-lg hover:scale-[1.02] transition-all duration-200 text-sm mt-2 shadow-lg" type="button">
                      Get Started
                    </button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-white dark:bg-lob-darkbg border-t border-lob-silver dark:border-white/10 pt-20 pb-0 overflow-hidden relative transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20">

<div className="flex flex-col space-y-4 max-w-xs">
<a className="flex items-center gap-2 group" href="#">
<div className="p-2 bg-lob-black dark:bg-white rounded-lg group-hover:scale-105 transition-transform duration-300">
<svg fill="none" height="20" viewbox="0 0 100 100" width="20">
<path className="fill-lob-neon dark:fill-lob-black" clip-rule="evenodd" d="M25 35H75L62 50H75V65H50V50H38L25 35Z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-xl font-bold text-lob-black dark:text-lob-neon tracking-tight">
                Lob.
              </span>
</a>
<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Elevating the padel experience through technology, design, and
              competitive spirit. Built for the modern player.
            </p>
<div className="text-sm text-gray-400 dark:text-gray-500 pt-2">
              © 2024 Lob Community Inc.
            </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">

<div className="flex flex-col space-y-4">
<h4 className="font-semibold text-lob-black dark:text-white text-sm tracking-wider">
                Product
              </h4>
<ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Events
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Leagues
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Rankings
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    For Clubs
                  </a>
</li>
</ul>
</div>

<div className="flex flex-col space-y-4">
<h4 className="font-semibold text-lob-black dark:text-white text-sm tracking-wider">
                Resources
              </h4>
<ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Rules
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Support
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Partners
                  </a>
</li>
</ul>
</div>

<div className="flex flex-col space-y-4">
<h4 className="font-semibold text-lob-black dark:text-white text-sm tracking-wider">
                Legal
              </h4>
<ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Terms of Service
                  </a>
</li>
<li>
<a className="hover:text-lob-black dark:hover:text-white transition-colors" href="#">
                    Cookie Policy
                  </a>
</li>
</ul>
</div>

<div className="flex flex-col space-y-4">
<h4 className="font-semibold text-lob-black dark:text-white text-sm tracking-wider">
                Socials
              </h4>
<ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
<li>
<a className="flex items-center gap-2 hover:text-lob-black dark:hover:text-white transition-colors" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
                    Twitter
                  </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-lob-black dark:hover:text-white transition-colors" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
                    Instagram
                  </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-lob-black dark:hover:text-white transition-colors" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
                    LinkedIn
                  </a>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden mt-12 sm:mt-20 select-none pointer-events-none pb-10">
<h1 className="text-[15vw] md:text-[13rem] font-bold text-center leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-lob-black/10 to-transparent dark:from-lob-neon/10 dark:to-transparent opacity-100">
          LOB.
        </h1>
</div>
</footer>




    </>
  );
}
