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



  // Initialize Lucide icons
  lucide.createIcons();
  
  // Add smooth scrolling and enhanced interactions
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
    });

    // Enhanced hover effects for glass cards
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add dynamic typing effect for search placeholder
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
      const originalPlaceholder = searchInput.placeholder;
      const phrases = [
        'Search projects, files, team...',
        'Find your creative work...',
        'Search across all workspaces...',
        'Discover team activities...'
      ];
      let currentPhrase = 0;
      
      setInterval(() => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        searchInput.placeholder = phrases[currentPhrase];
      }, 3000);
    }

    // Add pulse effect to active indicators
    document.querySelectorAll('[class*="animate-pulse"]').forEach(el => {
      setInterval(() => {
        el.style.opacity = '0.4';
        setTimeout(() => el.style.opacity = '1', 500);
      }, 2000);
    });
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
      

<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/60 to-gray-800/70"></div>
<div className="w-full h-full opacity-30 blur-sm">
<iframe frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe>
</div>
</div>

<div className="fixed inset-0 -z-10 ambient-orbs pointer-events-none"></div>

<div className="flex flex-wrap justify-center gap-3 pt-8 px-4 text-sm font-medium animate-fade-in" style={{animationDelay: `0.1s`, animationPlayState: `running`}}>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">CREATIVE SUITE</span>
<span className="px-5 py-2.5 rounded-full backdrop-blur-sm border border-blue-500/30 bg-blue-600/20 text-blue-200 font-medium hover:scale-105 hover:bg-blue-600/30 transition-all duration-300">AI POWERED</span>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">CLOUD SYNC</span>
<span className="px-5 py-2.5 rounded-full backdrop-blur-sm border border-purple-500/30 bg-purple-600/20 text-purple-200 font-medium hover:scale-105 hover:bg-purple-600/30 transition-all duration-300">COLLABORATIVE</span>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">REAL-TIME</span>
</div>

<div className="flex-1 flex animate-blur-in px-4 sm:px-6 pb-16 pt-12 items-start justify-center relative" style={{animationDelay: `0.3s`, animationPlayState: `running`}}>
<div className="relative w-full max-w-7xl mt-8 glass-container rounded-3xl flex flex-col overflow-hidden shadow-2xl">

<div className="glass-chrome flex items-center justify-between h-16 px-6 relative z-10">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2.5">
<span className="w-4 h-4 rounded-full bg-red-500/90 shadow-md hover:bg-red-400 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
<span className="w-4 h-4 rounded-full bg-yellow-400/90 shadow-md hover:bg-yellow-300 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
<span className="w-4 h-4 rounded-full bg-green-500/90 shadow-md hover:bg-green-400 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
</div>
<div className="flex items-center gap-1 ml-6">
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-rotate-cw w-5 h-5" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
</button>
</div>
</div>
<div className="flex-1 mx-8 max-w-lg">
<div className="glass-input flex items-center gap-3 rounded-xl px-4 py-3 text-sm group">
<svg className="lucide lucide-lock w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="flex-1 truncate font-medium text-white">auraos.design</span>
<div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: `running`}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-gray-400">
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-share w-5 h-5" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-1 min-h-0 relative">

<div className="glass-sidebar w-80 lg:w-96 flex flex-col relative z-10 animate-slide-left" style={{animationDelay: `0.5s`, animationPlayState: `running`}}>

<div className="p-6 border-b border-white/5">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="icon-container p-3 rounded-xl">
<svg className="lucide lucide-sparkles w-7 h-7 text-blue-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div>
<h1 className="text-xl font-bold text-white">AuraOS Studio</h1>
<p className="text-sm text-gray-400">Creative Workspace</p>
</div>
</div>
<button className="icon-container p-2.5 rounded-lg transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-bell w-4 h-4 text-gray-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<div className="glass-input flex items-center gap-3 rounded-xl px-4 py-3 text-sm group">
<svg className="lucide lucide-search w-4 h-4 text-gray-400 group-focus-within:text-blue-300 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400" placeholder="Search projects, files, team..." type="text" />
<span className="text-xs text-gray-500 font-mono">⌘K</span>
</div>
</div>

<div className="flex-1 p-4 space-y-3 overflow-y-auto">
<div className="mb-8">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">Dashboard</h3>
<nav className="space-y-1.5">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-200 transition-all duration-200 hover:bg-blue-500/25 group" href="#">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Overview</span>
<div className="ml-auto w-2 h-2 rounded-full bg-blue-400"></div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-folder w-5 h-5" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="font-medium">Projects</span>
<span className="ml-auto text-xs bg-gray-600/50 text-gray-300 px-2 py-1 rounded-md font-mono">24</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Team</span>
<div className="ml-auto flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-gray-800"></div>
<div className="w-5 h-5 rounded-full bg-purple-500 border-2 border-gray-800"></div>
<div className="w-5 h-5 rounded-full bg-pink-500 border-2 border-gray-800"></div>
</div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium">Schedule</span>
<span className="ml-auto w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" style={{animationPlayState: `running`}}></span>
</a>
</nav>
</div>
<div className="mb-8">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">Tools</h3>
<nav className="space-y-1.5">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="font-medium">Messages</span>
<span className="ml-auto text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-mono">8</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-medium">Documents</span>
<span className="ml-auto text-xs text-gray-500 font-mono">156</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-brain w-5 h-5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<span className="font-medium">AI Assistant</span>
<div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: `running`}}></div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-medium">Settings</span>
</a>
</nav>
</div>

<div className="mb-6">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">Zenith Mobile App design completed</p>
<p className="text-xs text-gray-500 mt-0.5">3 minutes ago</p>
</div>
</div>
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">Emma Chen joined Quantum Project</p>
<p className="text-xs text-gray-500 mt-0.5">18 minutes ago</p>
</div>
</div>
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">Brand guidelines document shared</p>
<p className="text-xs text-gray-500 mt-0.5">1 hour ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/8 transition-all duration-200 cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
<span className="text-white font-semibold text-lg">AC</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-semibold text-white">Alexandra Chen</p>
<p className="text-sm text-gray-400 truncate">alexandra@auraos.design</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-0 relative animate-slide-right" style={{animationDelay: `0.7s`, animationPlayState: `running`}}>

<div className="p-8 border-b border-white/5">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div>
<h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome back, Alexandra</h2>
<p className="text-gray-400 text-lg">Here's what's happening with your creative projects today.</p>
</div>
<div className="flex items-center gap-4">
<button className="glass-card px-6 py-3 rounded-xl font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Export
              </button>
<button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                New Project
              </button>
</div>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-up" style={{animationDelay: `0.9s`, animationPlayState: `running`}}>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-folder w-6 h-6 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+18.2%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">32</h3>
<p className="text-gray-400">Active Projects</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-users w-6 h-6 text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+7.4%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">847</h3>
<p className="text-gray-400">Team Members</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up w-6 h-6 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+12.8%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">94.7%</h3>
<p className="text-gray-400">Success Rate</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-clock w-6 h-6 text-orange-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-sm text-red-400 font-semibold">-3.2%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">2.4h</h3>
<p className="text-gray-400">Avg. Response</p>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-slide-up" style={{animationDelay: `1.1s`, animationPlayState: `running`}}>

<div className="glass-card p-8 rounded-2xl" style={{transform: `translateY(-8px) scale(1.02)`}}>
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold text-white">Featured Projects</h3>
<button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 hover:scale-105 transition-all duration-200">
                  View All
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div><div className="space-y-6">
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: `translateY(-8px) scale(1.02)`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-smartphone w-6 h-6 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Zenith Mobile App</h4>
<p className="text-sm text-gray-400">Mobile Design • iOS & Android</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-medium">Completed</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-gray-800"></div>
<div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-gray-800"></div>
<div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-gray-800"></div>
</div>
<span className="text-sm text-gray-400">Due: Nov 28</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: `translateY(0px) scale(1)`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
<svg className="lucide lucide-globe w-6 h-6 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">Quantum Web Portal</h4>
<p className="text-sm text-gray-400">Web Application • React</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full font-medium">In Progress</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="w-full bg-gray-700/50 rounded-full h-2 mr-4">
<div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
<span className="text-sm text-gray-400 whitespace-nowrap">68%</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: `translateY(0px) scale(1)`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">Brand Identity Redesign</h4>
<p className="text-sm text-gray-400">Branding • Visual Identity</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-medium">Review</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-7 h-7 bg-emerald-500 border-gray-50 border-2 rounded-full"></div>
<div className="w-7 h-7 bg-teal-500 border-gray-50 border-2 rounded-full"></div>
</div>
<span className="text-sm text-gray-400">Dec 15</span>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold text-white">Team Activity</h3>
<button className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200">
                  View Analytics
                </button>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">EC</span>
</div>
<div>
<p className="text-white font-medium">Emma Chen</p>
<p className="text-sm text-gray-400">Updated Quantum Portal wireframes</p>
</div>
</div>
<span className="text-xs text-gray-500">2 min ago</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">MJ</span>
</div>
<div>
<p className="text-white font-medium">Michael Johnson</p>
<p className="text-sm text-gray-400">Completed code review for mobile app</p>
</div>
</div>
<span className="text-xs text-gray-500">15 min ago</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">SL</span>
</div>
<div>
<p className="text-white font-medium">Sarah Liu</p>
<p className="text-sm text-gray-400">Published new brand guidelines</p>
</div>
</div>
<span className="text-xs text-gray-500">1 hr ago</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">DW</span>
</div>
<div>
<p className="text-white font-medium">David Wilson</p>
<p className="text-sm text-gray-400">Added new team members to Zenith project</p>
</div>
</div>
<span className="text-xs text-gray-500">3 hr ago</span>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/5">
<h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
<div className="grid grid-cols-2 gap-3">
<button className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-200 text-center group">
<svg className="lucide lucide-video w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Start Meeting</span>
</button>
<button className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-200 text-center group">
<svg className="lucide lucide-share-2 w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Share Files</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 glass-card p-8 rounded-2xl animate-slide-up" style={{animationDelay: `1.3s`, animationPlayState: `running`}}>
<div className="flex items-center gap-4 mb-6">
<div className="icon-container p-3 rounded-xl">
<svg className="lucide lucide-brain w-8 h-8 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<div>
<h3 className="text-2xl font-bold text-white">AI Creative Assistant</h3>
<p className="text-gray-400">Get intelligent suggestions and automate your workflow</p>
</div>
<div className="ml-auto flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: `running`}}></div>
<span className="text-sm text-green-400 font-medium">Online</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-lightbulb w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2">Design Suggestions</h4>
<p className="text-gray-400 text-sm">Get AI-powered design recommendations based on current trends</p>
</div>
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-zap w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2">Auto-Generate</h4>
<p className="text-gray-400 text-sm">Automatically create mockups and prototypes from sketches</p>
</div>
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-target w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h4 className="text-lg font-semibold text-white mb-2">Smart Analysis</h4>
<p className="text-gray-400 text-sm">Analyze user engagement and optimize your designs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
