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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
<span className="font-bold text-white text-lg">K</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">Kiparu<span className="text-slate-500">Mentorship</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="transition-colors text-sm font-medium text-white" href="#">Home</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#about">About Kiparu</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#ecosystem">How it Works</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#courses">Services</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#results">Results</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-white">
<img alt="TZ" className="w-5 rounded-sm opacity-80" src="https://flagcdn.com/w20/tz.png"/>
                    TZ
                </button>
<button className="hover:bg-white/5 transition-colors text-sm font-medium text-white bg-[#111] border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 cursor-pointer" onclick="window.location.href='https://wisuno.me/105593-AES00'" role="button">Login</button>
<button className="hover:bg-violet-500 transition-colors cursor-pointer text-sm font-medium text-white bg-violet-600 rounded-full pt-1.5 pr-5 pb-1.5 pl-5 shadow-[0_0_15px_rgba(124,58,237,0.3)]" onclick="window.location.href='https://wisuno.me/105593-AES00'" role="button">Join Now</button>
</div>
</div>
</nav>

<section className="overflow-hidden min-h-[85vh] flex pt-32 pb-16 relative items-center">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

<div className="absolute top-0 right-0 w-[800px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col space-y-8 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/20 border border-violet-500/20 text-violet-300 text-xs font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                        Tanzania's #1 Trading Educator
                    </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">
                        Unlocking Financial <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">Freedom</span>.
                    </h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-lg">
                        Learn from <strong className="">Kiparu</strong>, the mentor revolutionizing trading in Tanzania. Master Forex, Indices, and the psychology needed to dominate the global markets from Dar es Salaam.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="hover:bg-slate-200 transition-all flex gap-2 cursor-pointer text-sm font-medium text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://chat.whatsapp.com/HDBlSa4N0MeJ51Ee15Uwxl'" role="button">
                            Start Learning
                            <iconify-icon className="" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="hover:bg-white/10 transition-all flex gap-2 text-sm font-medium text-white bg-white/5 border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.tiktok.com/@kiparu?_r=1&amp;_t=ZS-93UyC5zJ91R'" role="button">
<iconify-icon className="text-violet-400" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Watch TikToks
                        </button>
</div>

<div className="pt-8 border-t border-white/5 w-full">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Trusted By Traders In</p>
<div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold text-white tracking-tight">Dar es Salaam</span>
<span className="text-lg font-bold text-white tracking-tight">Arusha</span>
<span className="text-lg font-bold text-white tracking-tight">Nairobi</span>
<span className="text-lg font-bold text-white tracking-tight">Kampala</span>
</div>
</div>
</div>

<div className="relative perspective-container">
<div className="hero-image-tilt relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20 bg-[#050505] aspect-[4/5] group">


<img alt="Kiparu - Trading Educator" className="transform group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7072a78b-52ee-4d2f-812a-59fe4b7cd19d_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/20">
<iconify-icon height="22" icon="solar:medal-star-linear" width="22"></iconify-icon>
</div>
<div className="">
<div className="text-white text-sm font-medium">Top Rated Mentor</div>
<div className="text-slate-400 text-xs">Swahili &amp; English</div>
</div>
</div>
<div className="text-right">
<div className="text-white text-sm font-bold flex items-center justify-end gap-1">
<iconify-icon className="text-blue-400" icon="solar:verified-check-bold" width="14"></iconify-icon>
                                    Verified
                                </div>
<div className="text-slate-400 text-[10px] uppercase">Fx Educator</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/30 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#050505] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start space-y-1 group">
<span className="text-3xl font-semibold text-white tracking-tight flex items-center gap-2">
                        7+
                        <iconify-icon className="text-slate-600 group-hover:text-violet-500 transition-colors w-5 h-5" icon="solar:calendar-linear"></iconify-icon>
</span>
<span className="text-sm text-slate-500">Years Experience</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1 group">
<span className="text-3xl font-semibold text-white tracking-tight flex items-center gap-2">
                        5,000+
                        <iconify-icon className="text-slate-600 group-hover:text-violet-500 transition-colors w-5 h-5" icon="solar:users-group-rounded-linear"></iconify-icon>
</span>
<span className="text-sm text-slate-500">Students Mentored</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1 group">
<span className="text-3xl font-semibold text-white tracking-tight flex items-center gap-2">
                        $2M+
                        <iconify-icon className="text-slate-600 group-hover:text-violet-500 transition-colors w-5 h-5" icon="solar:wallet-money-linear"></iconify-icon>
</span>
<span className="text-sm text-slate-500">Student Withdrawals</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1 group">
<span className="text-3xl font-semibold text-white tracking-tight flex items-center gap-2">
                        4.9/5
                        <iconify-icon className="text-slate-600 group-hover:text-violet-500 transition-colors w-5 h-5" icon="solar:stars-linear"></iconify-icon>
</span>
<span className="text-sm text-slate-500">Community Rating</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<div className="inline-flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Certified Mentor</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Real Trading.<br/>Real Lifestyle.<br/>Real Results.</h2>
<div className="w-16 h-1 bg-violet-600 rounded-full mb-8"></div>
<p className="text-slate-400 leading-relaxed mb-6">
                        Kiparu isn't just about charts; it's about the freedom that trading brings. Based in Tanzania, Kiparu has demystified the Forex market for thousands of East Africans, simplifying complex concepts into actionable strategies in both English and Swahili.
                    </p>
<a className="text-violet-400 hover:text-violet-300 text-sm font-medium inline-flex items-center gap-1 transition-colors" href="#">
                        Read full bio 
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-colors group">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
<iconify-icon className="text-white" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">East African Focus</h3>
<p className="text-sm text-slate-400">Strategies optimized for the London &amp; NY sessions, perfectly timed for Tanzanian traders.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-colors group">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
<iconify-icon className="text-white" icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Simplified Learning</h3>
<p className="text-sm text-slate-400">Complex institutional concepts broken down into simple, easy-to-understand lessons.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-colors group">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
<iconify-icon className="text-white" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Swahili Community</h3>
<p className="text-sm text-slate-400">Join a vibrant community of like-minded Tanzanians growing together daily.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-colors group">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
<iconify-icon className="text-white" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lifestyle &amp; Freedom</h3>
<p className="text-sm text-slate-400">Follow the journey on Instagram &amp; TikTok. See what's possible with discipline.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] relative overflow-hidden border-t border-white/5" id="ecosystem">

<div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-900/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium uppercase tracking-wider mb-4">
                    Complete Ecosystem
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Transform Your Trading Journey</h2>
<p className="text-slate-400 max-w-xl mx-auto">Access a complete suite of tools, mentorship, and analysis designed to take you from novice to pro trader.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2 hidden md:block"></div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 items-center group">

<div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center z-10 shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-violet-500/50 transition-colors">
<span className="text-violet-400 font-bold">01</span>
</div>

<div className="md:text-right order-2 md:order-1">
<div className="w-10 h-10 bg-violet-900/20 rounded-lg flex items-center justify-center mb-4 md:ml-auto text-violet-400 border border-violet-500/20">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Interactive Mentorship</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm md:ml-auto">
                            Join Kiparu for deep-dive sessions. Ask questions directly via chat and watch him dissect the charts in real-time. We cover everything from basic Forex structure to advanced entries.
                        </p>
<button className="hover:bg-violet-500 transition-all inline-flex gap-2 text-xs font-semibold text-white bg-violet-600 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://chat.whatsapp.com/HDBlSa4N0MeJ51Ee15Uwxl'" role="button">
                            Join Next Session <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="order-1 md:order-2">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080808] aspect-video shadow-2xl group-hover:shadow-violet-900/10 transition-shadow">

<div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1.5 z-20">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Live
                            </div>

<img alt="Kiparu Live Webinar" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg?w=800&amp;q=80"/>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-slate-700"></div>
<div className="w-8 h-8 rounded-full border border-black bg-slate-600"></div>
<div className="w-8 h-8 rounded-full border border-black bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">+200</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center"><iconify-icon className="text-white" icon="solar:microphone-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 items-center group">

<div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center z-10 shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-violet-500/50 transition-colors">
<span className="text-violet-400 font-bold">02</span>
</div>

<div className="order-1 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080808] aspect-video shadow-2xl group-hover:shadow-violet-900/10 transition-shadow">
<img alt="Market Analysis" className="group-hover:scale-105 transition-transform duration-700 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e29153e-adbc-4fbd-b729-b966e62a6604_1600w.webp?w=800&amp;q=80"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-[#111]/90 backdrop-blur border border-white/10 rounded-lg p-4 shadow-xl">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-bold text-white">GBP/JPY Analysis</div>
<div className="text-[10px] text-green-400 font-mono">+80 Pips</div>
</div>
<div className="flex items-end gap-1 h-16 w-full">
<div className="w-1/6 bg-violet-500/20 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-violet-500/40 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-violet-500/30 h-[30%] rounded-sm"></div>
<div className="w-1/6 bg-violet-500/60 h-[80%] rounded-sm"></div>
<div className="w-1/6 bg-violet-500/80 h-[90%] rounded-sm"></div>
<div className="w-1/6 bg-violet-500 h-[70%] rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="order-2 md:order-2 md:pl-0">
<div className="w-10 h-10 bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/20">
<iconify-icon className="" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Daily Market Breakdowns</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Stop guessing. Get comprehensive market insights before the major sessions. We analyze Gold, US30, and major pairs so you can trade with confidence.
                        </p>
<button className="text-white text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-full transition-all inline-flex items-center gap-2">
                            View Free Analysis
                        </button>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 items-center group">

<div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center z-10 shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-violet-500/50 transition-colors">
<span className="text-violet-400 font-bold">03</span>
</div>

<div className="md:text-right order-2 md:order-1">
<div className="w-10 h-10 bg-pink-900/20 rounded-lg flex items-center justify-center mb-4 md:ml-auto text-pink-400 border border-pink-500/20">
<iconify-icon className="" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Private Community</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm md:ml-auto">
                            Connect with other Tanzanian traders in our exclusive Discord &amp; Telegram channels. Share setups, celebrate wins, and learn from the community.
                        </p>
<button className="hover:bg-violet-500 transition-all inline-flex gap-2 text-xs font-semibold text-white bg-violet-600 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://chat.whatsapp.com/HDBlSa4N0MeJ51Ee15Uwxl'" role="button">Join whatsapp</button>
</div>

<div className="order-1 md:order-2">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e24] aspect-video shadow-2xl group-hover:shadow-violet-900/10 transition-shadow flex flex-col p-4">

<div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
<div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">K</div>
<div className="">
<div className="text-white text-xs font-bold">Kiparu (Admin)</div>
<div className="text-slate-500 text-[10px]">Today at 9:30 AM</div>
</div>
</div>
<div className="bg-[#15151a] p-3 rounded-lg border border-white/5 mb-3">
<div className="text-slate-300 text-xs mb-2">Looking for buys on XAUUSD at 2030 zone. Wait for confirmation candle. 🚀</div>
<div className="h-24 bg-[#0a0a0a] rounded border border-white/5 relative overflow-hidden">
<svg className="w-full h-full opacity-50 stroke-green-500 fill-none stroke-2" viewbox="0 0 100 40">
<path className="" d="M0,35 Q20,35 40,20 T80,10 T100,5"></path>
</svg>
</div>
</div>
<div className="mt-auto flex gap-2">
<div className="h-8 bg-[#15151a] rounded flex-1"></div>
<div className="h-8 w-8 bg-violet-600 rounded flex items-center justify-center"><iconify-icon className="text-white text-xs" icon="solar:plain-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center group">

<div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center z-10 shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-violet-500/50 transition-colors">
<span className="text-violet-400 font-bold">04</span>
</div>

<div className="order-1 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080808] aspect-video shadow-2xl group-hover:shadow-violet-900/10 transition-shadow flex items-center justify-center">

<div className="absolute inset-0 z-20 flex items-center justify-center bg-[#080808] overflow-hidden group-hover:bg-[#080808]/90 transition-colors duration-500">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-full h-full flex items-center justify-center p-4 relative group cursor-default transition-all duration-700 ease-out">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="relative w-full max-w-[320px] bg-[#0E0E12]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.2)] group-hover:border-violet-500/30">

<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 flex items-center justify-center shadow-inner shadow-[#FFD700]/5">
<svg fill="none" height="20" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>

<div>
<div className="flex items-center gap-2">
<h3 className="text-white font-semibold text-sm tracking-tight">XAUUSD</h3>
<span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] text-slate-400 font-medium">SPOT</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<p className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Signal Active</p>
</div>
</div>
</div>

<div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.1)] flex items-center gap-1">
                Buy Limit
            </div>
</div>

<div className="flex items-end justify-between mb-5">
<div>
<p className="text-slate-500 text-[10px] uppercase font-medium mb-1">Entry Price</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-bold text-white tracking-tight font-mono">2,034.50</span>
</div>
</div>
<div className="text-right">
<p className="text-slate-500 text-[10px] uppercase font-medium mb-1">Target (TP2)</p>
<div className="flex items-baseline gap-1 justify-end">
<span className="text-lg font-bold text-emerald-400 tracking-tight font-mono">2,048.00</span>
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
</div>
</div>

<div className="relative h-2hidden mb-4">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgDBIMVjBIMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"></div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 280 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 70 Q 30 70, 40 60 T 80 55 T 120 40 T 160 45 T 200 25 T 240 20 L 280 10" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>

<path d="M0 70 Q 30 70, 40 60 T 80 55 T 120 40 T 160 45 T 200 25 T 240 20 L 280 10 V 100 H 0 Z" fill="url(#chartGradient)" style={{mixBlendMode: 'plus-lighter'}}></path>

<circle cx="280" cy="10" fill="#10b981" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;5;3"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</svg>
</div>

<div className="flex items-center gap-3 pt-1">
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<span className="text-[9px] font-medium text-slate-400">RR 1:3.5</span>
</div>
</div>
</div>
</div>

<div className="relative w-32 h-56 bg-black border-4 border-slate-800 rounded-2xl p-2 shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
<div className="w-full h-full bg-[#111] rounded-lg overflow-hidden flex flex-col p-2 space-y-2">
<div className="bg-slate-800/50 p-2 rounded border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-[8px] text-white font-bold">SIGNAL SELL</span>
<span className="text-[6px] text-slate-400">Now</span>
</div>
<div className="text-[10px] text-red-400 font-mono">US30 @ 34200</div>
</div>
<div className="bg-slate-800/50 p-2 rounded border border-white/5 opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-[8px] text-white font-bold">TP HIT</span>
<span className="text-[6px] text-slate-400">2h ago</span>
</div>
<div className="text-[10px] text-blue-400 font-mono">+120 Pips Secured</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-2 md:order-2 md:pl-0">
<div className="w-10 h-10 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Kiparu Signals</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Receive high-probability setup alerts directly to your phone. Clear entry, stop loss, and take profit levels for Gold and Major Currencies.
                        </p>
<button className="text-white text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-full transition-all inline-flex items-center gap-2">
                            See Past Results
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] relative border-t border-white/5" id="courses">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Choose Your Path</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Whether you are a complete beginner, looking for passive income, or want to refine your edge, Kiparu has a solution for you.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="bg-violet-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
<span className="text-white font-medium">$199 <span className="text-slate-500 font-normal text-sm">/ Lifetime</span></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">The Kiparu Blueprint</h3>
<p className="text-slate-400 text-sm mb-8 max-w-md">The complete strategy to master the markets. Covers technical analysis, psychology, and risk management.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Video Course (Eng &amp; Swahili)
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Weekly Live Q&amp;A Sessions
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Lifetime Community Access
                                </li>
</ul>
</div>
<button className="hover:bg-slate-200 transition-colors font-medium text-black bg-white w-full rounded-xl pt-3 pb-3 cursor-pointer" onclick="window.location.href='https://chat.whatsapp.com/HDBlSa4N0MeJ51Ee15Uwxl'" role="button">Enroll Now</button>
</div>
</div>

<div className="bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden relative group flex flex-col">
<div className="p-8 h-full flex flex-col">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">VIP Signal Room</h3>
<p className="text-slate-400 text-sm mb-6">Get real-time entry and exit alerts directly from Kiparu's desk.</p>

<div className="mt-auto bg-[#080808] rounded-lg border border-white/5 p-4 relative overflow-hidden">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-white font-medium">XAUUSD Buy</span>
</div>
<span className="text-xs text-green-400">+120 Pips</span>
</div>
<div className="h-10 w-full flex items-end gap-1 opacity-50">
<div className="w-1/6 bg-green-500/20 h-full rounded-sm"></div>
<div className="w-1/6 bg-green-500/40 h-[80%] rounded-sm"></div>
<div className="w-1/6 bg-green-500/60 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-green-500/80 h-[90%] rounded-sm"></div>
<div className="w-1/6 bg-green-500 h-full rounded-sm"></div>
</div>
</div>
<button className="hover:bg-white/5 transition-colors font-medium text-white w-full border-white/10 border rounded-xl mt-6 pt-3 pb-3 cursor-pointer" onclick="window.location.href='https://chat.whatsapp.com/HDBlSa4N0MeJ51Ee15Uwxl'" role="button">Join Waitlist</button>
</div>
</div>

<div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Copy Trading</h3>
<p className="text-slate-400 text-sm mb-6">Hands-free profits. Link your account and automatically mirror Kiparu's trades.</p>
<div className="flex items-center gap-2 mb-6">
<span className="text-emerald-400 text-2xl font-bold tracking-tight">18%</span>
<span className="text-slate-500 text-xs">Avg. Monthly<br/>Return</span>
</div>
</div>
<button className="hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all z-10 text-sm font-medium text-white w-full border-white/10 border rounded-xl pt-3 pb-3 relative cursor-pointer" onclick="window.location.href='https://wisuno.me/105593-AES00'" role="button">Start Copying</button>
</div>

<div className="lg:col-span-2 bg-gradient-to-r from-violet-900/20 to-black border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 h-full">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<iconify-icon className="text-yellow-500" icon="solar:crown-linear" width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-white mb-1">Private Mentorship</h3>
<p className="text-slate-400 text-sm max-w-sm">Direct access to Kiparu for personalized guidance. We work 1-on-1 to identify your weaknesses and build a trading plan that suits your lifestyle.</p>
</div>
</div>
<button className="shrink-0 px-8 py-3 rounded-full border border-violet-500 text-violet-300 hover:bg-violet-500/10 transition-colors text-sm font-medium whitespace-nowrap">Apply Now</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-tight">Wall of Love from Tanzania</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Kiparu's teaching style is different. He explains things simply in Swahili when needed, which helped me understand market structure finally. I passed my prop firm challenge thanks to him."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">BE</div>
<div>
<div className="text-white text-sm font-medium">Baraka Elias</div>
<div className="text-slate-500 text-xs">Dar es Salaam</div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Best trading community in TZ. The daily signals and analysis are spot on. It really helps to have a mentor who is accessible and shows real results."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">AJ</div>
<div className="">
<div className="text-white text-sm font-medium">Amani John</div>
<div className="text-slate-500 text-xs">Arusha</div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Finally, an educator who actually shows his PnL and trades live. No fake lifestyle, just real charts and real money. Kiparu is the real deal."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">GM</div>
<div className="">
<div className="text-white text-sm font-medium">Grace Mushi</div>
<div className="text-slate-500 text-xs">Zanzibar</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
<span className="font-bold text-white text-lg">K</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">Kiparu<span className="text-slate-500">Mentorship</span></span>
</div>
<p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-8">
                        Empowering traders across Tanzania with financial literacy, technical analysis, and the psychological edge needed to succeed in global markets.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-slate-200 transition-colors" href="https://www.tiktok.com/@kiparu" target="_blank"><iconify-icon icon="mdi:tiktok" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-slate-200 transition-colors" href="https://www.instagram.com/kiparu___" target="_blank"><iconify-icon icon="mdi:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-slate-200 transition-colors" href="#"><iconify-icon icon="mdi:youtube" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-slate-200 transition-colors" href="#"><iconify-icon icon="mdi:telegram" width="16"></iconify-icon></a>
</div>
</div>

<div className="hidden md:block md:col-span-2"></div>

<div className="md:col-span-2">
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Learn</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 text-xs hover:text-white transition-colors" href="#">Free Basics</a></li>
<li><a className="text-slate-400 text-xs hover:text-white transition-colors" href="#">Blueprint Course</a></li>
<li><a className="text-slate-400 text-xs hover:text-white transition-colors" href="#">Live Trading</a></li>
</ul>
</div>

<div className="md:col-span-3">
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Contact Team Kiparu</h4>
<div className="space-y-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:letter-linear" width="14"></iconify-icon>
<a className="text-slate-400 text-xs hover:text-white transition-colors" href="mailto:support@kiparu.com">support@kiparu.com</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-slate-400 text-xs">Dar es Salaam, Tanzania</span>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-600 text-[10px]">© 2024 Kiparu Mentorship. All Rights Reserved.</div>
<div className="flex gap-6">
<a className="text-slate-600 text-[10px] hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
<span className="text-slate-700 text-[10px]">•</span>
<a className="text-slate-600 text-[10px] hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
