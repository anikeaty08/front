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
manrope: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
purple: '#A855F7',
dark: '#050505',
surface: '#0A0A0A',
emerald: '#10B981',
orange: '#F97316'
}
},
backgroundImage: {
'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)',
'text-gradient': 'linear-gradient(to right, #E9D5FF, #A855F7, #FDBA74)',
}
}
}
}



        // Intersection Observer for fade-in animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white hover:text-purple-400 transition-colors" href="#">
                BUZZENCE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-white hover:text-purple-300 transition-colors">
                    Log in
                </button>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-all transform active:scale-95">
                    Partner With Us
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-hero-glow pointer-events-none opacity-80"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Reimagining Food Industry Connections
            </div>
<h1 className="reveal-on-scroll text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-100 to-neutral-400">
                人と店が出会える<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-orange-300">エコシステム</span>
</h1>
<p className="reveal-on-scroll text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Buzzence combines SNS marketing, influencer PR, and staff matching into a single, cohesive platform designed to accelerate growth for restaurants.
            </p>
<div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-full transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)]">
                    Start Matching
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 group">
<iconify-icon className="text-lg group-hover:text-purple-400 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                    View Demo
                </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="reveal-on-scroll text-center md:text-left">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">40万+</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Total Followers</div>
</div>
<div className="reveal-on-scroll text-center md:text-left transition-delay-100">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">500+</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Restaurants</div>
</div>
<div className="reveal-on-scroll text-center md:text-left transition-delay-200">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">300+</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Bookings / Post</div>
</div>
<div className="reveal-on-scroll text-center md:text-left transition-delay-300">
<div className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 tracking-tight mb-1">200,000%</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Platform Growth</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-on-scroll flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Core Solutions</h2>
<p className="text-neutral-400 max-w-md text-sm leading-relaxed">Everything you need to grow your food business, from marketing to staffing, integrated seamlessly.</p>
</div>
<a className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors" href="#">
                    View all features <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-on-scroll card-hover group p-8 rounded-2xl bg-card-gradient border border-white/5 relative overflow-hidden transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:megaphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">SNS Marketing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Data-driven social strategies to amplify your brand voice. Reach the right audience at the right time with targeted content.
                    </p>
</div>

<div className="reveal-on-scroll card-hover group p-8 rounded-2xl bg-card-gradient border border-white/5 relative overflow-hidden transition-all duration-300 delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Influencer PR</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Connect with food influencers who resonate with your culinary style. Authentic storytelling that drives reservations.
                    </p>
</div>

<div className="reveal-on-scroll card-hover group p-8 rounded-2xl bg-card-gradient border border-white/5 relative overflow-hidden transition-all duration-300 delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Staff Matching</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Solve labor shortages instantly. Find qualified, passionate staff members matched to your restaurant's culture.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-on-scroll text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">How It Works</h2>
<p className="text-neutral-400 text-sm">A seamless journey from initial discovery to exponential growth.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="reveal-on-scroll flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<span className="text-2xl font-semibold text-white">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Discovery</h3>
<p className="text-xs text-neutral-500">Analyze current brand position and identify market opportunities.</p>
</div>

<div className="reveal-on-scroll flex flex-col items-center text-center group delay-100">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] transition-all duration-300">
<span className="text-2xl font-semibold text-white">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Development</h3>
<p className="text-xs text-neutral-500">Crafting tailored strategies for content, PR, and staffing needs.</p>
</div>

<div className="reveal-on-scroll flex flex-col items-center text-center group delay-200">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
<span className="text-2xl font-semibold text-white">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Matching</h3>
<p className="text-xs text-neutral-500">Connecting you with the perfect influencers and staff members.</p>
</div>

<div className="reveal-on-scroll flex flex-col items-center text-center group delay-300">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400">04</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-xs text-neutral-500">Monitor results, optimize campaigns, and scale your business.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-900/5"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal-on-scroll text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to transform your<br/>restaurant business?
            </h2>
<p className="reveal-on-scroll text-neutral-400 mb-10 text-sm md:text-base">
                Join hundreds of successful restaurants using Buzzence to connect, grow, and thrive.
            </p>
<div className="reveal-on-scroll flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
                    Get Started Now
                </button>
<button className="px-8 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white mb-6 block" href="#">BUZZENCE</a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        The ultimate ecosystem connecting people and restaurants through technology and community.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600">© 2023 Buzzence Inc. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
