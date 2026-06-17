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

        // Counter animation
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start).toLocaleString();
                }
            }, 16);
        }

        // Animate all counters on page load
        window.addEventListener('load', () => {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent.replace(/,/g, ''));
                counter.textContent = '0';
                setTimeout(() => {
                    animateCounter(counter, target);
                }, 500);
            });
        });

        // Mobile menu toggle (for future implementation)
        document.querySelector('[data-lucide="menu"]')?.parentElement.addEventListener('click', () => {
            // Mobile menu toggle logic would go here
            console.log('Mobile menu clicked');
        });

        // Add click handlers for interactive elements
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Featured game play button
        document.querySelector('.featured-game .play-indicator')?.addEventListener('click', () => {
            console.log('Play button clicked');
        });

        // Quick action cards
        document.querySelectorAll('.cursor-pointer').forEach(card => {
            card.addEventListener('click', () => {
                console.log('Quick action clicked:', card.querySelector('h3')?.textContent);
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
      
<div className="min-h-screen flex">

<aside className="hidden md:flex md:flex-col w-80 p-4 space-y-4 bg-gray-900/60 backdrop-blur-xl border-r border-gray-700/50 animate-slide-left overflow-y-auto" style={{background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.7) 100%)'}}>

<div className="flex items-center gap-3 pl-1 pt-1 animate-fade-in delay-100">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center logo-pulse shadow-lg">
<svg className="lucide lucide-gamepad-2 w-6 h-6" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-100 font-jakarta" style={{}}>GameHub</span>
</div>

<div className="animate-fade-in delay-200 bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="flex items-center gap-3 mb-3">
<div className="relative">
<img alt="avatar" className="w-12 h-12 ring-2 ring-purple-500/20 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36e9fafd-c1ed-46b5-a6e7-b976cfd26e1c_800w.jpg"/>
<div className="absolute bottom-0 right-0 w-4 h-4 rounded-full status-online border-2 border-gray-900"></div>
</div>
<div className="flex-1">
<h3 className="font-semibold text-white font-jakarta" style={{}}>Alicia Thompson</h3>
<p className="flex items-center gap-1 text-sm text-green-400 font-jakarta" style={{}}>
<svg className="lucide lucide-circle fill-current" data-lucide="circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                            Online
                        </p>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center">
<div className="">
<div className="counter text-lg font-bold text-white font-jakarta" style={{}}>27</div>
<div className="text-xs text-gray-400 font-jakarta" style={{}}>Hours</div>
</div>
<div className="">
<div className="counter text-lg font-bold text-white font-jakarta" style={{}}>458</div>
<div className="text-xs text-gray-400 font-jakarta" style={{}}>Games</div>
</div>
<div className="">
<div className="counter text-lg font-bold text-white font-jakarta" style={{}}>45</div>
<div className="text-xs text-gray-400 font-jakarta" style={{}}>Level</div>
</div>
</div>
<div className="mt-3 pt-3 border-t border-white/10">
<div className="flex text-sm items-center justify-between">
<span className="text-gray-400 font-jakarta" style={{}}>XP Progress</span>
<span className="text-white font-medium font-jakarta" style={{}}>8,450 / 10,000</span>
</div>
<div className="mt-2 w-full bg-gray-700/50 rounded-full h-2">
<div className="progress-bar bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '84.5%'}}></div>
</div>
</div>
</div>

<nav className="flex-1 space-y-2">
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 animate-fade-in delay-300 font-jakarta" style={{}}>Main</div>
<a className="menu-item active flex items-center gap-3 px-4 py-3 rounded-xl text-white border border-transparent animate-fade-in delay-400" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium font-jakarta" style={{}}>Dashboard</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-500" href="#">
<svg className="lucide lucide-list w-5 h-5" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Game Library</span>
<span className="ml-auto bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>89</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-600" href="#">
<svg className="lucide lucide-store w-5 h-5" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Store</span>
<span className="ml-auto bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>New</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-700" href="#">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Downloads</span>
<span className="ml-auto bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>3</span>
</a>
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 mt-6 animate-fade-in delay-800 font-jakarta" style={{}}>Social</div>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-900" href="#">
<div className="relative">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="notification-dot"></div>
</div>
<span className="font-medium font-jakarta" style={{}}>Friends</span>
<span className="ml-auto bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>12</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-1000" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Messages</span>
<span className="ml-auto bg-red-600/20 text-red-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>3</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-1100" href="#">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Achievements</span>
<span className="ml-auto bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded-full font-jakarta" style={{}}>127</span>
</a>
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 mt-6 animate-fade-in delay-1200 font-jakarta" style={{}}>Account</div>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-1300" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-medium font-jakarta" style={{}}>Settings</span>
</a>
<a className="menu-item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent animate-fade-in delay-1400" href="#">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Help &amp; Support</span>
</a>
</nav>

<div className="pt-4 border-t border-white/10 animate-fade-in delay-1500">
<button className="logout-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 border border-transparent hover:text-red-400 transition-colors">
<svg className="lucide lucide-log-out w-5 h-5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
<span className="font-medium font-jakarta" style={{}}>Sign Out</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-xl border-b border-white/10 animate-fade-in">
<div className="flex items-center gap-4">

<button className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="">
<h1 className="text-2xl text-white font-medium font-jakarta" style={{}}>Welcome back, Alicia!</h1>
<p className="text-gray-400 font-jakarta" style={{}}>Ready for your next gaming adventure?</p>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block">
<input className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Search games..." type="text"/>
<svg className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>

<button className="relative p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="notification-dot"></div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-6 pr-6 pb-6 pl-6">


<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="lg:col-span-2">
<h2 className="text-xl font-bold text-white mb-4 animate-fade-in delay-500 font-jakarta" style={{}}>Featured Game</h2>
<div className="featured-game relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden animate-slide-up delay-600">
<div className="relative h-80 overflow-hidden video-motion">
<img alt="Featured Game" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d000995c-dcc1-4e9e-896b-f2e36e2d330c_1600w.jpg"/>
<div className="video-overlay"></div>
<div className="video-grain"></div>
<div className="video-border"></div>
<div className="play-indicator">
<svg className="w-8 h-8" fill="white" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon points="5,3 19,12 5,21"></polygon>
</svg>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-2xl text-white mb-2 font-medium font-jakarta" style={{}}>Cyberpunk 2077</h3>
<p className="text-gray-300 mb-4 font-jakarta" style={{}}>Experience the future in this immersive RPG adventure</p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 font-jakarta" style={{}}>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5,3 19,12 5,21"></polygon>
</svg>
                                                    Play Now
                                                </button>
<button className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/30 transition-colors font-jakarta" style={{}}>
                                                    Learn More
                                                </button>
</div>
</div>
<div className="text-right">
<div className="text-yellow-400 flex items-center gap-1 mb-2">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
</svg>
<span className="font-bold font-jakarta" style={{}}>4.8</span>
</div>
<p className="text-gray-300 text-sm font-jakarta" style={{}}>234K reviews</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-slide-right delay-700">
<h2 className="text-xl font-bold text-white mb-4 font-jakarta" style={{}}>Recent Activity</h2>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
<svg className="lucide lucide-trophy text-yellow-400" data-lucide="trophy" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="flex-1">
<p className="text-white font-medium font-jakarta" style={{}}>Achievement Unlocked!</p>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Master Strategist in Chess</p>
<p className="text-gray-500 text-xs font-jakarta" style={{}}>2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center">
<svg className="lucide lucide-user-plus text-green-400" data-lucide="user-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="flex-1">
<p className="text-white font-medium font-jakarta" style={{}}>New Friend Added</p>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Sarah joined your friend list</p>
<p className="text-gray-500 text-xs font-jakarta" style={{}}>4 hours ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
<svg className="lucide lucide-download text-blue-400" data-lucide="download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div className="flex-1">
<p className="text-white font-medium font-jakarta" style={{}}>Game Downloaded</p>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>The Witcher 3: Wild Hunt</p>
<p className="text-gray-500 text-xs font-jakarta" style={{}}>Yesterday</p>
</div>
</div>
</div>
</div>
</div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-slide-up delay-100">
<div className="flex items-center justify-between mb-4">
<div className="p-3 rounded-xl bg-purple-600/20">
<svg className="lucide lucide-gamepad-2 w-6 h-6 text-purple-400" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full font-jakarta" style={{}}>+12%</span>
</div>
<h3 className="counter text-2xl font-medium text-white font-jakarta mb-1" style={{}}>0</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Hours Played</p>
<div className="mt-3 w-full bg-gray-700/50 rounded-full h-1">
<div className="progress-bar bg-purple-500 h-1 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-slide-up delay-200">
<div className="flex items-center justify-between mb-4">
<div className="p-3 rounded-xl bg-green-600/20">
<svg className="lucide lucide-trophy w-6 h-6 text-green-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full font-jakarta" style={{}}>+3</span>
</div>
<h3 className="counter text-2xl font-medium text-white font-jakarta mb-1" style={{}}>0</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Achievements</p>
<div className="mt-3 w-full bg-gray-700/50 rounded-full h-1">
<div className="progress-bar-green bg-green-500 h-1 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-slide-up delay-300">
<div className="flex items-center justify-between mb-4">
<div className="p-3 rounded-xl bg-blue-600/20">
<svg className="lucide lucide-users w-6 h-6 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full font-jakarta" style={{}}>Online</span>
</div>
<h3 className="text-2xl text-white mb-1 counter font-medium font-jakarta" style={{}}>0</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Friends Online</p>
<div className="mt-3 w-full bg-gray-700/50 rounded-full h-1">
<div className="progress-bar-blue bg-blue-500 h-1 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-slide-up delay-400">
<div className="flex items-center justify-between mb-4">
<div className="p-3 rounded-xl bg-orange-600/20">
<svg className="lucide lucide-zap w-6 h-6 text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xs text-orange-400 bg-orange-400/20 px-2 py-1 rounded-full font-jakarta" style={{}}>Lvl 42</span>
</div>
<h3 className="text-2xl text-white mb-1 counter font-medium font-jakarta" style={{}}>0</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Experience Points</p>
<div className="mt-3 w-full bg-gray-700/50 rounded-full h-1">
<div className="progress-bar-orange bg-orange-500 h-1 rounded-full" style={{width: '84.5%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="animate-slide-left delay-800">
<h2 className="text-xl font-bold text-white mb-4 font-jakarta" style={{}}>Continue Playing</h2>
<div className="space-y-4">
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
<img alt="Game" className="w-16 h-16 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8aa4c77b-ff68-4e40-a3e1-517139da29de_320w.jpg" style={{}}/>
<div className="flex-1">
<h3 className="text-white font-semibold font-jakarta" style={{}}>God of War</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Last played 2 hours ago</p>
<div className="mt-2 w-full bg-gray-700/50 rounded-full h-2">
<div className="progress-bar bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '67%'}}></div>
</div>
</div>
<button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-jakarta" style={{}}>
                                    Play
                                </button>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
<img alt="Game" className="w-16 h-16 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d58d888-b70d-4447-bffb-e8a323df8d16_800w.jpg"/>
<div className="flex-1">
<h3 className="text-white font-semibold font-jakarta" style={{}}>Horizon Zero Dawn</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Last played yesterday</p>
<div className="mt-2 w-full bg-gray-700/50 rounded-full h-2">
<div className="progress-bar bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '34%'}}></div>
</div>
</div>
<button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-jakarta" style={{}}>
                                    Play
                                </button>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
<img alt="Game" className="w-16 h-16 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1773dbe5-b035-4a2e-977a-641d73a59c78_320w.jpg"/>
<div className="flex-1">
<h3 className="text-white font-semibold font-jakarta" style={{}}>Red Dead Redemption 2</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Last played 3 days ago</p>
<div className="mt-2 w-full bg-gray-700/50 rounded-full h-2">
<div className="progress-bar bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{width: '89%'}}></div>
</div>
</div>
<button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-jakarta" style={{}}>
                                    Play
                                </button>
</div>
</div>
</div>

<div className="animate-slide-right delay-900">
<h2 className="text-xl font-bold text-white mb-4 font-jakarta" style={{}}>Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-store text-purple-400 w-6 h-6" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>
</div>
<h3 className="text-white font-semibold mb-2 font-jakarta" style={{}}>Browse Store</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Discover new games and deals</p>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-users text-green-400 w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-white font-semibold mb-2 font-jakarta" style={{}}>Find Friends</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Connect with other gamers</p>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-trophy text-blue-400 w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h3 className="text-white font-semibold mb-2 font-jakarta" style={{}}>View Achievements</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Track your progress</p>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-orange-600/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-settings text-orange-400 w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-white font-semibold mb-2 font-jakarta" style={{}}>Settings</h3>
<p className="text-gray-400 text-sm font-jakarta" style={{}}>Customize your experience</p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
