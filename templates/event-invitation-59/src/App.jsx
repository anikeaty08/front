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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-900/5 bg-[#FFFBF5]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white rotate-3 shadow-lg shadow-orange-500/20">
<iconify-icon icon="lucide:mail-open" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">MySimpleinvite</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#">Features</a>
<a className="hover:text-orange-600 transition-colors" href="#">Examples</a>
<a className="hover:text-orange-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-orange-600 transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Log in</a>
<a className="group relative px-4 py-2 bg-stone-900 text-[#FFFBF5] text-sm font-medium rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-stone-900/10 hover:shadow-orange-600/20 overflow-hidden" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-44 md:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-orange-400/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-medium text-stone-600 mb-8 hover:border-orange-200 transition-all cursor-default group">
<div className="flex -space-x-1">
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white ring-2 ring-white">★</div>
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white ring-2 ring-white">★</div>
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white ring-2 ring-white">★</div>
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white ring-2 ring-white">★</div>
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white ring-2 ring-white">★</div>
</div>
<span className="text-stone-900 font-semibold group-hover:text-orange-600 transition-colors">4.9/5 Rating</span>
<span className="text-stone-400">from 2,000+ hosts</span>
</div>

<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Create beautiful invitations. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 pb-2">Track RSVPs on autopilot.</span>
</h1>

<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-2xl leading-relaxed">
                    Ditch the messy spreadsheets and group chats. Build a stunning event page in <span className="text-stone-900 font-medium">under 2 minutes</span>, send invites via SMS or Email, and watch the guest list fill up automatically.
                </p>

<div className="flex flex-col items-center gap-4 w-full sm:w-auto">
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="btn-shimmer w-full sm:w-auto px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-xl shadow-orange-600/25 hover:shadow-orange-600/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base">
                            Start Building for Free
                            <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-600 font-medium rounded-full hover:bg-stone-50 hover:border-stone-300 hover:text-stone-900 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                            See how it works
                        </button>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-stone-400 mt-2">
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-600" icon="lucide:check" width="14"></iconify-icon> No credit card required</span>
<span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-600" icon="lucide:check" width="14"></iconify-icon> Unlimited free events</span>
</div>
</div>

<div className="mt-12 pt-8 border-t border-stone-200/60 w-full max-w-3xl">
<p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">Trusted by event planners at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale mix-blend-multiply">
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:airbnb" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:spotify" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:pinterest" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:notion" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative max-w-5xl mx-auto mt-8 perspective-1000">

<div className="absolute -right-12 top-12 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
<div className="absolute -left-12 bottom-12 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-20"></div>

<div className="relative bg-white rounded-2xl border border-stone-200/60 shadow-2xl shadow-stone-900/5 overflow-hidden ring-1 ring-stone-900/5 transform transition-transform duration-700 hover:scale-[1.01]">

<div className="h-10 border-b border-stone-100 bg-stone-50/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
</div>
<div className="flex-1 text-center text-[10px] text-stone-400 font-medium tracking-wide">mysimpleinvite.com/event/summer-bash</div>
</div>
<div className="flex flex-col md:flex-row h-[500px]">

<div className="hidden md:flex w-64 border-r border-stone-100 bg-stone-50/30 flex-col p-4">
<div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Event Dashboard</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-100/50">
<iconify-icon icon="lucide:layout-dashboard" width="16"></iconify-icon>
                                    Overview
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-white hover:shadow-sm rounded-lg text-sm font-medium transition-all">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
                                    Guest List
                                    <span className="ml-auto text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">+3</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-white hover:shadow-sm rounded-lg text-sm font-medium transition-all">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
                                    Messages
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-white hover:shadow-sm rounded-lg text-sm font-medium transition-all">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon>
                                    Settings
                                </div>
</div>
<div className="mt-auto p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-stone-700">Live RSVPs</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] text-stone-500">
<div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center font-bold">SJ</div>
<span>Sarah J. just joined</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-stone-500">
<div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center font-bold">MK</div>
<span>Mike K. just joined</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 md:p-8 overflow-y-auto no-scrollbar relative">
<div className="max-w-md mx-auto">

<div className="bg-[#FFFBF5] rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="h-32 bg-orange-100 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-stone-800 shadow-sm border border-white/50 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> LIVE
                                        </div>
</div>
<div className="p-6 relative">
<div className="w-16 h-16 bg-white rounded-xl border-4 border-[#FFFBF5] absolute -top-8 left-6 shadow-sm flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:party-popper" width="28"></iconify-icon>
</div>
<div className="mt-8">
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">Summer Rooftop Social</h3>
<div className="flex items-center gap-2 mt-1 text-sm text-stone-500">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon>
<span>Aug 24, 6:00 PM</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Brooklyn, NY</span>
</div>
</div>
<div className="mt-6 flex gap-3">
<div className="flex-1 bg-stone-900 text-[#FFFBF5] text-center py-2.5 rounded-lg text-sm font-medium shadow-lg shadow-stone-900/10 cursor-pointer hover:bg-stone-800 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:check" width="14"></iconify-icon> Count me in
                                            </div>
<div className="flex-1 bg-white border border-stone-200 text-stone-600 text-center py-2.5 rounded-lg text-sm font-medium cursor-pointer hover:bg-stone-50">Can't go</div>
</div>

<div className="mt-6 pt-6 border-t border-stone-100">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-stone-900">Who's going (24)</span>
<span className="text-[10px] text-orange-600 font-medium cursor-pointer">View all</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-bold">JD</div>
<span className="text-xs text-stone-600">John Doe</span>
<div className="ml-auto flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                                        Attending
                                                    </div>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">AS</div>
<span className="text-xs text-stone-600">Alice Smith</span>
<div className="ml-auto flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                                        Attending
                                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-stone-900/90 backdrop-blur text-white pl-3 pr-4 py-3 rounded-xl text-xs font-medium shadow-2xl flex items-center gap-3 animate-bounce shadow-stone-900/20" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
<iconify-icon icon="lucide:bell-ring" width="14"></iconify-icon>
</div>
<div>
<div className="text-stone-300 text-[10px] uppercase tracking-wide">New Response</div>
<div className="font-semibold text-white">Sarah J. just RSVP'd "Yes"!</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Everything you need to host.</h2>
<p className="text-stone-500 text-lg">Powerful features packed into a simple, beautiful interface. Designed for hosts who care about the details.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-[#FFFBF5] rounded-2xl border border-stone-100 hover:border-orange-200 transition-colors duration-300">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Custom Design</h3>
<p className="text-stone-500 leading-relaxed mb-6">Choose from curated themes or customize colors, fonts, and layouts to match your vibe.</p>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer ring-2 ring-offset-2 ring-orange-500 ring-offset-[#FFFBF5]"></div>
<div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:ring-offset-[#FFFBF5] transition-all"></div>
<div className="w-6 h-6 rounded-full bg-stone-800 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-stone-800 hover:ring-offset-[#FFFBF5] transition-all"></div>
</div>
</div>

<div className="group p-8 bg-[#FFFBF5] rounded-2xl border border-stone-100 hover:border-orange-200 transition-colors duration-300">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Smart Guest List</h3>
<p className="text-stone-500 leading-relaxed mb-6">Import contacts, tag VIPs, and see who opened your invite in real-time.</p>
<div className="space-y-2 bg-white p-3 rounded-lg border border-stone-100 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-4 h-4 border border-stone-300 rounded flex items-center justify-center text-white bg-orange-500 border-orange-500">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="h-2 w-16 bg-stone-200 rounded-full"></div>
<div className="ml-auto h-2 w-8 bg-green-100 text-green-700 rounded-full"></div>
</div>
<div className="flex items-center gap-2 opacity-50">
<div className="w-4 h-4 border border-stone-200 rounded"></div>
<div className="h-2 w-20 bg-stone-100 rounded-full"></div>
</div>
</div>
</div>

<div className="group p-8 bg-[#FFFBF5] rounded-2xl border border-stone-100 hover:border-orange-200 transition-colors duration-300">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Instant Updates</h3>
<p className="text-stone-500 leading-relaxed mb-6">Change of plans? Send SMS or email broadcasts to all guests with one click.</p>
<div className="relative bg-white p-3 rounded-lg border border-stone-100 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
<iconify-icon className="text-stone-400" icon="lucide:send" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-full bg-stone-100 rounded-full mb-1.5"></div>
<div className="h-2 w-2/3 bg-stone-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFBF5]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="flex items-center gap-1 text-orange-500 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-8 leading-tight">
                        "Finally, an invite tool that doesn't look like it was built in 2010. My guests loved the experience."
                    </h2>
<div>
<div className="font-semibold text-stone-900">Elena Rodriguez</div>
<div className="text-stone-500 text-sm">Event Coordinator @ StudioM</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent opacity-20 blur-3xl rounded-full"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="space-y-4 translate-y-8">
<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-xs text-stone-400 mb-2">RSVP Rate</div>
<div className="text-2xl font-bold text-stone-900">88%</div>
<div className="text-xs text-green-600 flex items-center gap-1 mt-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +12% vs avg
                                </div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-xs text-stone-400 mb-2">Time Saved</div>
<div className="text-2xl font-bold text-stone-900">4hrs</div>
<div className="text-xs text-stone-500 mt-1">per event</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-orange-600 p-4 rounded-xl shadow-lg shadow-orange-600/20 text-white">
<div className="text-xs text-orange-100 mb-2">Total Guests</div>
<div className="text-2xl font-bold">12.5k</div>
<div className="text-xs text-orange-200 mt-1">managed this month</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-xs text-stone-400 mb-2">Rating</div>
<div className="text-2xl font-bold text-stone-900">4.9/5</div>
<div className="text-xs text-stone-500 mt-1">from 500+ reviews</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-lg">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Simple pricing for everyone.</h2>
<p className="text-stone-500 text-lg">Start for free, upgrade when you need more power. No hidden fees.</p>
</div>

<div className="flex items-center gap-3 bg-[#FFFBF5] p-1 pr-4 rounded-full border border-stone-200">
<button className="px-4 py-1.5 bg-white text-stone-900 shadow-sm rounded-full text-sm font-medium border border-stone-100">Monthly</button>
<button className="px-2 py-1.5 text-stone-500 text-sm font-medium hover:text-stone-900 transition-colors">Yearly</button>
<span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">-20%</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-colors">
<div className="font-medium text-stone-500 mb-2">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-stone-900">$0</span>
<span className="text-stone-400">/event</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Up to 50 guests
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Basic themes
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Email invites
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors">Start Free</button>
</div>

<div className="relative p-8 rounded-2xl border-2 border-orange-500 bg-[#FFFBF5]">
<div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>
<div className="font-medium text-orange-600 mb-2">Host</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-stone-900">$29</span>
<span className="text-stone-400">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-900 font-medium">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Unlimited guests
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-900 font-medium">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> SMS Invitations
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-900 font-medium">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Custom branding
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-900 font-medium">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Priority Support
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-colors">
<div className="font-medium text-stone-500 mb-2">Agency</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-stone-900">$99</span>
<span className="text-stone-400">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> Multiple team members
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> White-label solution
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600" icon="lucide:check" width="16"></iconify-icon> API Access
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-stone-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#FFFBF5] mb-6">Ready to host your next event?</h2>
<p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">Join thousands of planners creating beautiful invitations in minutes. No credit card required.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/25">Get Started for Free</button>
<button className="w-full sm:w-auto px-8 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-all border border-stone-700">Explore Examples</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#FFFBF5] pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:mail-open" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">MySimpleinvite</span>
</div>
<p className="text-stone-500 text-sm max-w-xs leading-relaxed">
                        The modern standard for event planning and invitation management. Built with love for hosts everywhere.
                    </p>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone-200 text-sm text-stone-400">
<p>© 2024 MySimpleinvite Inc. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
