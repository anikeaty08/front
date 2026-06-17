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
colors: {
dark: '#0A0A12',
lime: '#BBDF32',
limehover: '#aacc20',
surface: '#16161F'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-display text-3xl font-semibold tracking-tighter uppercase" href="#">Ticketz<span className="text-lime">.</span></a>
<div className="hidden lg:flex gap-6 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Discovery</a>
<a className="hover:text-white transition-colors" href="#">Communities</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:text-lime transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="text-sm font-medium hover:text-lime transition-colors" href="#">Log In</a>
<a className="bg-lime text-dark px-5 py-2 rounded-sm font-semibold text-sm hover:bg-limehover transition-colors uppercase tracking-tight" href="#">
                    Sign Up
                </a>
</div>
</div>
</nav>

<nav className="md:hidden fixed top-0 w-full z-50 glass-nav border-b border-white/5 px-4 h-16 flex items-center justify-between">
<a className="font-display text-2xl font-semibold tracking-tighter uppercase" href="#">Ticketz<span className="text-lime">.</span></a>
<button className="text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Crowd" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center mt-10">
<span className="text-lime font-mono text-xs uppercase tracking-widest mb-4 border border-lime/30 px-3 py-1 rounded-sm bg-lime/5">
                Live Experiences Await
            </span>
<h1 className="font-display text-6xl md:text-8xl font-semibold uppercase tracking-tighter leading-[0.9] mb-8">
                Find Your<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Scene</span>
</h1>

<div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-sm flex flex-col md:flex-row gap-2">
<div className="relative flex-grow">
<i className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" data-lucide="search"></i>
<input className="w-full bg-transparent border-none text-white placeholder-gray-400 pl-12 pr-4 py-3 focus:ring-0 focus:outline-none h-full" placeholder="Search events, clubs, vibes..." type="text"/>
</div>
<button className="bg-lime text-dark font-display font-semibold uppercase tracking-tight px-8 py-3 rounded-sm hover:bg-limehover transition-colors w-full md:w-auto">
                    Discover
                </button>
</div>

<div className="flex flex-wrap justify-center gap-3 mt-8">
<button className="px-4 py-2 border border-white/20 bg-dark/50 hover:border-lime hover:text-lime transition-all rounded-sm text-sm font-medium">Techno Bunkers</button>
<button className="px-4 py-2 border border-white/20 bg-dark/50 hover:border-lime hover:text-lime transition-all rounded-sm text-sm font-medium">Run Clubs</button>
<button className="px-4 py-2 border border-white/20 bg-dark/50 hover:border-lime hover:text-lime transition-all rounded-sm text-sm font-medium">Tech Meetups</button>
<button className="px-4 py-2 border border-white/20 bg-dark/50 hover:border-lime hover:text-lime transition-all rounded-sm text-sm font-medium">Indie Gigs</button>
</div>
</div>
</header>

<section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-tighter mb-2">Trending Now</h2>
<p className="text-gray-400 text-lg">Curated events heating up this week.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-lime hover:text-white transition-colors font-medium uppercase text-sm tracking-wide" href="#">
                View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-surface border border-white/5 hover:border-lime/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Running" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-lime text-dark text-xs font-semibold px-2 py-1 uppercase rounded-sm">
                        Selling Fast
                    </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div className="text-lime text-sm font-mono uppercase">Sat, Oct 24 • 06:00 AM</div>
<div className="text-white font-semibold">$15</div>
</div>
<h3 className="font-display text-2xl font-semibold uppercase tracking-tight leading-none mb-2 group-hover:text-lime transition-colors">Neon Sunrise 5K</h3>
<p className="text-gray-400 text-sm mb-6 line-clamp-2">Join the city's largest morning run club. Post-run coffee and networking included.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-xs text-gray-300 font-medium">Urban Striders</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-sm transition-colors">
<i className="w-4 h-4 text-gray-400" data-lucide="bookmark"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 hover:border-lime/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Tech" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div className="text-lime text-sm font-mono uppercase">Wed, Oct 28 • 06:30 PM</div>
<div className="text-white font-semibold">Free</div>
</div>
<h3 className="font-display text-2xl font-semibold uppercase tracking-tight leading-none mb-2 group-hover:text-lime transition-colors">React Patterns Workshop</h3>
<p className="text-gray-400 text-sm mb-6 line-clamp-2">Deep dive into advanced component composition. Pizza provided by Vercel.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-xs text-gray-300 font-medium">JS Collective</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-sm transition-colors">
<i className="w-4 h-4 text-gray-400" data-lucide="bookmark"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 hover:border-lime/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Rave" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white text-dark text-xs font-semibold px-2 py-1 uppercase rounded-sm">
                        Sold Out
                    </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div className="text-lime text-sm font-mono uppercase">Fri, Oct 30 • 11:00 PM</div>
<div className="text-white font-semibold">$35</div>
</div>
<h3 className="font-display text-2xl font-semibold uppercase tracking-tight leading-none mb-2 group-hover:text-lime transition-colors">Warehouse Project: 004</h3>
<p className="text-gray-400 text-sm mb-6 line-clamp-2">Underground techno in a secret industrial location. Location reveal 2h before.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-xs text-gray-300 font-medium">Bass Sector</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-sm transition-colors">
<i className="w-4 h-4 text-gray-400" data-lucide="bookmark"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface border-y border-white/5 py-24">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 mb-6 text-lime font-mono text-xs uppercase tracking-widest">
<i className="w-3 h-3" data-lucide="sparkles"></i> Community Spotlight
                    </div>
<h2 className="font-display text-5xl md:text-6xl font-semibold uppercase tracking-tighter leading-none mb-6">
                        Bass Sector<br/>Collective
                    </h2>
<p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        A curation of high-fidelity sound system culture. From dubstep to jungle, we host the most immersive underground events in the city.
                    </p>
<div className="flex gap-8 mb-10">
<div>
<div className="text-3xl font-display font-semibold text-white">12.5K</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Subscribers</div>
</div>
<div>
<div className="text-3xl font-display font-semibold text-white">48</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Events Hosted</div>
</div>
</div>
<div className="flex gap-4">
<button className="bg-lime text-dark font-display font-semibold uppercase tracking-tight px-8 py-3 rounded-sm hover:bg-limehover transition-colors shadow-[0_0_20px_rgba(187,223,50,0.3)]">
                            Subscribe
                        </button>
<button className="border border-white/20 text-white font-display font-semibold uppercase tracking-tight px-8 py-3 rounded-sm hover:bg-white/10 transition-colors">
                            View Profile
                        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<img className="w-full h-64 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-64 object-cover rounded-sm mt-8 opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="w-full h-64 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-64 object-cover rounded-sm mt-8 opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
<h2 className="font-display text-4xl font-semibold uppercase tracking-tighter mb-12 border-b border-white/10 pb-4">Upcoming Highlight</h2>
<div className="flex flex-col lg:flex-row bg-dark border border-white/10 rounded-sm overflow-hidden h-auto lg:h-[600px]">

<div className="lg:w-1/2 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 lg:opacity-30"></div>
<div className="absolute bottom-6 left-6 z-10 lg:hidden">
<h2 className="font-display text-4xl font-semibold uppercase tracking-tighter text-white">Electric Garden</h2>
</div>
</div>

<div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-surface relative">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="bg-lime/10 text-lime px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider border border-lime/20">Music Festival</span>
<span className="text-gray-400 text-sm flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> Nov 12 - 14</span>
</div>
<h2 className="hidden lg:block font-display text-5xl xl:text-6xl font-semibold uppercase tracking-tighter text-white mb-6 leading-none">
                        Electric<br/>Garden
                    </h2>
<div className="flex items-center gap-3 mb-8 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-lime" data-lucide="zap"></i>
</div>
<span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Hosted by <span className="text-white underline decoration-lime underline-offset-4">Sonic Bloom</span></span>
</div>
<div className="space-y-4 mb-8">
<div className="flex gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-sm border border-white/10">
<i className="w-5 h-5 text-gray-300" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-semibold text-white uppercase">The Conservatory</div>
<div className="text-sm text-gray-400">1200 Flower District Blvd, City Center</div>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-sm border border-white/10">
<i className="w-5 h-5 text-gray-300" data-lucide="music"></i>
</div>
<div>
<div className="text-sm font-semibold text-white uppercase">Lineup</div>
<div className="text-sm text-gray-400">Bonobo, Four Tet, Floating Points...</div>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex items-center justify-between">
<div>
<div className="text-sm text-gray-400 uppercase tracking-wide">Starting from</div>
<div className="text-3xl font-display font-semibold text-white">$89.00</div>
</div>
<button className="bg-lime text-dark font-display font-semibold uppercase tracking-tight px-10 py-4 rounded-sm hover:bg-limehover transition-colors flex items-center gap-2">
                        Get Tickets <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#0f0f16] py-20 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display text-4xl font-semibold uppercase tracking-tighter mb-4">Your Digital Wallet</h2>
<p className="text-gray-400 mb-12">Seamless entry. No paper, no hassle.</p>
<div className="relative mx-auto w-full max-w-sm group perspective-1000">

<div className="relative bg-white text-dark rounded-sm overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-rotate-1 hover:scale-105">

<div className="bg-dark p-6 text-white relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-lime blur-3xl opacity-20"></div>
<div className="flex justify-between items-center mb-4">
<span className="font-display text-xl uppercase tracking-tight font-semibold">Neon Sunrise</span>
<span className="bg-lime text-dark text-[10px] font-bold px-2 py-0.5 uppercase rounded-sm">Admit One</span>
</div>
<div className="text-left">
<div className="text-xs text-gray-400 uppercase">Date</div>
<div className="font-mono text-sm">OCT 24, 2023 • 06:00 AM</div>
</div>
</div>

<div className="p-6 bg-[#E5E5E5] relative">

<div className="absolute -left-3 top-0 w-6 h-6 bg-[#0f0f16] rounded-full translate-y-[-50%]"></div>
<div className="absolute -right-3 top-0 w-6 h-6 bg-[#0f0f16] rounded-full translate-y-[-50%]"></div>
<div className="border-t-2 border-dashed border-gray-400 w-full absolute top-0 left-0"></div>
<div className="flex flex-col items-center justify-center pt-4">
<div className="bg-white p-2 rounded-sm mb-4">

<div className="w-32 h-32 bg-dark flex items-center justify-center">
<i className="w-24 h-24 text-white stroke-1" data-lucide="qr-code"></i>
</div>
</div>
<div className="text-[10px] font-mono uppercase text-gray-500 tracking-widest">
                                ID: 8X92-MM29-KKS
                            </div>
<div className="mt-4 w-full bg-green-500/10 text-green-700 text-xs font-semibold py-2 rounded-sm uppercase flex items-center justify-center gap-1 border border-green-500/20">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Confirmed
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-display text-2xl font-semibold tracking-tighter uppercase">Ticketz<span className="text-lime">.</span></div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Support</a>
</div>
<div className="text-gray-600 text-sm">
                © 2023 Ticketz Inc.
            </div>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
<div className="glass-nav rounded-full border border-white/10 px-6 py-4 flex justify-between items-center shadow-2xl">
<a className="text-lime flex flex-col items-center gap-1" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
</a>
<a className="text-gray-400 hover:text-white flex flex-col items-center gap-1 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="search"></i>
</a>
<a className="text-gray-400 hover:text-white flex flex-col items-center gap-1 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="ticket"></i>
</a>
<a className="text-gray-400 hover:text-white flex flex-col items-center gap-1 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
</a>
</div>
</div>


    </>
  );
}
