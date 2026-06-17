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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Mapping view IDs to nice titles
        const titles = {
            'dashboard-view': 'Dashboard',
            'campaigns-view': 'Campaigns',
            'contacts-view': 'Contacts',
            'history-view': 'Email History',
            'analytics-view': 'Analytics',
            'billing-view': 'Billing',
            'settings-view': 'Settings'
        };

        function nav(target) {
            // Hide major sections
            document.getElementById('landing-container').classList.add('hidden');
            document.getElementById('auth-container').classList.add('hidden');
            document.getElementById('app-container').classList.add('hidden');
            document.getElementById('login-view').classList.add('hidden');
            document.getElementById('signup-view').classList.add('hidden');

            if (target === 'landing') {
                document.getElementById('landing-container').classList.remove('hidden');
            } else if (target === 'login' || target === 'signup') {
                document.getElementById('auth-container').classList.remove('hidden');
                document.getElementById(`${target}-view`).classList.remove('hidden');
            } else {
                // Default to dashboard when logging in
                document.getElementById('app-container').classList.remove('hidden');
                navApp('dashboard-view', document.querySelector('.sidebar-link')); // selects first link
            }
            window.scrollTo(0,0);
        }

        function navApp(viewId, linkElement) {
            // Hide all inner app views
            document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));
            document.getElementById(viewId).classList.remove('hidden');
            
            // Update Title
            document.getElementById('top-title').innerText = titles[viewId];

            // Update Sidebar active state visually
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.classList.remove('bg-white/[0.08]', 'text-white');
                link.classList.add('text-zinc-400', 'hover:bg-white/[0.04]', 'hover:text-white');
            });
            if(linkElement) {
                linkElement.classList.add('bg-white/[0.08]', 'text-white');
                linkElement.classList.remove('text-zinc-400', 'hover:bg-white/[0.04]', 'hover:text-white');
            }
        }
    
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#2B0040_0%,transparent_70%)] opacity-80"></div>

<div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#7c3aed]/10 rounded-full blur-[120px] mix-blend-screen animate-ambient pointer-events-none"></div>

<div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#a78bfa]/10 rounded-full blur-[80px] animate-float" style={{animationDelay: '-2s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4c1d95]/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '-4s'}}></div>

<div className="absolute bottom-0 left-0 w-full h-[50vh] perspective-1000">
<div className="w-full h-full bg-gradient-to-t from-[#05000c] via-[#4c1d95]/10 to-transparent transform-floor origin-bottom blur-sm">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"></div>
</div>
</div>
</div>



<div className="view-section relative z-10 w-full flex-1 flex flex-col" id="landing-container">

<header className="w-full px-6 py-4 flex items-center justify-between glass-panel border-b-0 border-x-0 rounded-none sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed]/80 to-[#120021] border border-[#a78bfa]/20 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
<iconify-icon className="text-white" icon="solar:mailbox-linear" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Mailvero</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" onclick="nav('login')">Log in</button>
<button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" onclick="nav('signup')">Start Free</button>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 mt-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-[#8b5cf6]/30 mb-8 text-xs font-medium text-[#a78bfa]">
<span className="w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa] animate-pulse"></span>
                Mailvero AI Engine 2.0 Live
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
                Land More Job Opportunities with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]">AI Cold Outreach</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-normal">
                Mailvero automatically finds HR contacts and sends personalized AI emails to help you get referrals faster. Stop applying into the void.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-b from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-medium shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all relative overflow-hidden group" onclick="nav('signup')">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-card text-white text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto relative perspective-1000">
<div className="relative w-full aspect-video glass-panel rounded-2xl border border-white/10 overflow-hidden transform rotateX(10deg) shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_60px_rgba(139,92,246,0.1)]">

<div className="w-full h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="p-8 flex gap-6 h-full">
<div className="w-1/3 space-y-4">
<div className="h-8 bg-white/5 rounded-lg w-full"></div>
<div className="h-20 glass-card rounded-xl w-full"></div>
<div className="h-20 glass-card rounded-xl w-full"></div>
</div>
<div className="flex-1 glass-card rounded-xl border-[#8b5cf6]/20 relative overflow-hidden flex flex-col p-6">
<div className="h-4 bg-white/10 rounded w-1/3 mb-6"></div>
<div className="space-y-3">
<div className="h-3 bg-white/5 rounded w-full"></div>
<div className="h-3 bg-white/5 rounded w-[90%]"></div>
<div className="h-3 bg-white/5 rounded w-[80%]"></div>
</div>
<div className="mt-auto flex justify-end">
<div className="px-4 py-2 rounded-lg bg-[#8b5cf6]/20 text-[#a78bfa] text-xs">AI Generating...</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-10 top-20 glass-card p-4 rounded-xl shadow-2xl animate-float border-[#a78bfa]/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white font-medium tracking-tight">Meeting Booked</p>
<p className="text-[10px] text-zinc-400">Sarah from Stripe</p>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-20 border-t border-white/5 py-10 text-center text-xs text-zinc-500">
            © 2024 Mailvero. All rights reserved.
        </footer>
</div>



<div className="view-section hidden fixed inset-0 z-50 flex items-center justify-center px-6" id="auth-container">
<button className="absolute top-6 left-6 text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors" onclick="nav('landing')">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon> Back
        </button>

<div className="view-section w-full max-w-[420px]" id="login-view">
<div className="glass-panel rounded-[1.5rem] p-8 sm:p-10 relative overflow-hidden group">
<div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent opacity-50"></div>
<div className="flex flex-col items-center mb-8 text-center">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed]/80 to-[#120021] border border-[#a78bfa]/20 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
<iconify-icon className="text-white relative z-10" icon="solar:mailbox-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Welcome back</h2>
<p className="text-sm text-zinc-400 font-normal">Sign in to continue your outreach</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); nav('dashboard');">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 pl-1">Email address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:bg-black/40 focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between pl-1 pr-1">
<label className="block text-xs font-medium text-zinc-400">Password</label>
<a className="text-xs text-[#a78bfa] hover:text-[#c4b5fd]" href="#">Forgot?</a>
</div>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:bg-black/40 focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full mt-2 relative group/btn overflow-hidden rounded-xl bg-gradient-to-b from-[#8b5cf6] to-[#7c3aed]" type="submit">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
<div className="relative z-10 px-4 py-3 flex items-center justify-center border border-[#a78bfa]/20 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.2)]">
<span className="text-sm font-medium text-white tracking-wide">Sign In</span>
</div>
</button>
</form>
<div className="flex items-center gap-3 my-6">
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Or</span>
<div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
</div>
<button className="w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white text-sm font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-all hover:border-white/20" type="button">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
<span>Continue with Google</span>
</button>
<p className="text-center text-xs text-zinc-400 mt-8">
                    Don't have an account? <button className="text-[#a78bfa] hover:text-[#c4b5fd] font-medium" onclick="nav('signup')">Sign up</button>
</p>
</div>
</div>

<div className="view-section hidden w-full max-w-[420px]" id="signup-view">
<div className="glass-panel rounded-[1.5rem] p-8 sm:p-10 relative overflow-hidden group">
<div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent opacity-50"></div>
<div className="flex flex-col items-center mb-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Create Account</h2>
<p className="text-sm text-zinc-400 font-normal">Start your 14-day free trial</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); nav('dashboard');">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 pl-1">Full Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:bg-black/40 transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 pl-1">Email address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:bg-black/40 transition-all" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 pl-1">Password</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:bg-black/40 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full mt-4 relative group/btn overflow-hidden rounded-xl bg-gradient-to-b from-[#8b5cf6] to-[#7c3aed]" type="submit">
<div className="relative z-10 px-4 py-3 flex items-center justify-center border border-[#a78bfa]/20 rounded-xl">
<span className="text-sm font-medium text-white tracking-wide">Create Account</span>
</div>
</button>
</form>
<div className="flex items-center gap-3 my-6">
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Or</span>
<div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
</div>
<button className="w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white text-sm font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-all hover:border-white/20" type="button">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
<span>Continue with Google</span>
</button>
<p className="text-center text-xs text-zinc-400 mt-6">
                    Already have an account? <button className="text-[#a78bfa] hover:text-[#c4b5fd] font-medium" onclick="nav('login')">Log in</button>
</p>
</div>
</div>
</div>



<div className="view-section hidden relative z-10 w-full flex-1 flex h-screen overflow-hidden" id="app-container">

<aside className="w-64 border-r border-white/10 glass-panel flex flex-col z-20 hidden md:flex h-full rounded-none backdrop-blur-3xl bg-black/20">
<div className="p-6 flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
<iconify-icon className="text-white" icon="solar:mailbox-linear" width="16"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-white">Mailvero</span>
</div>
<nav className="flex-1 px-3 space-y-1 overflow-y-auto">
<p className="px-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-4">Menu</p>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white bg-white/[0.08] transition-colors relative group" onclick="navApp('dashboard-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:widget-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('campaigns-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:rocket-linear" width="18"></iconify-icon>
                    Campaigns
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('contacts-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Contacts
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('history-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:history-linear" width="18"></iconify-icon>
                    Email History
                </button>
<p className="px-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-8">Insights</p>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('analytics-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </button>
<p className="px-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-8">Account</p>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('billing-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:card-linear" width="18"></iconify-icon>
                    Billing
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group" onclick="navApp('settings-view', this)">
<iconify-icon className="text-inherit opacity-80 group-hover:opacity-100" icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </button>
</nav>
<div className="p-4 mt-auto border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors" onclick="nav('landing')">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
                    Logout
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-white/10 glass-panel rounded-none flex items-center justify-between px-8 z-10 shrink-0 bg-black/10 backdrop-blur-md">
<h1 className="text-lg font-semibold tracking-tight text-white" id="top-title">Dashboard</h1>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#a78bfa] rounded-full shadow-[0_0_5px_#a78bfa]"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7c3aed] to-blue-500 p-[1px] cursor-pointer">
<div className="w-full h-full bg-[#0A0018] rounded-full flex items-center justify-center text-xs font-medium text-white">
                            JD
                        </div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 relative scroll-smooth">

<div className="app-view block space-y-6 max-w-6xl mx-auto" id="dashboard-view">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center text-[#a78bfa]">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-medium mb-1">Emails Sent Today</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">124</h3>
<p className="text-[10px] text-green-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> +12% from yesterday</p>
</div>

<div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-medium mb-1">Replies Received</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">8</h3>
<p className="text-[10px] text-green-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> +2 new today</p>
</div>

<div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-medium mb-1">Campaigns Active</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">3</h3>
<p className="text-[10px] text-zinc-500 mt-2">Sending 50 emails/day</p>
</div>

<div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-medium mb-1">Success Rate</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">6.4%</h3>
<p className="text-[10px] text-green-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> Top 10% average</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-card p-6 rounded-2xl flex flex-col h-[300px]">
<h3 className="text-sm font-medium text-white mb-6">Email Performance</h3>
<div className="flex-1 relative w-full flex items-end justify-between px-2 pb-4">

<div className="w-8 bg-[#8b5cf6]/20 rounded-t-sm h-[40%] relative group hover:bg-[#8b5cf6]/40 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Mon</div></div>
<div className="w-8 bg-[#8b5cf6]/20 rounded-t-sm h-[60%] relative group hover:bg-[#8b5cf6]/40 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Tue</div></div>
<div className="w-8 bg-[#8b5cf6]/60 rounded-t-sm h-[80%] relative group hover:bg-[#8b5cf6] transition-colors shadow-[0_0_15px_rgba(139,92,246,0.5)]"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-[#a78bfa]">Wed</div></div>
<div className="w-8 bg-[#8b5cf6]/20 rounded-t-sm h-[50%] relative group hover:bg-[#8b5cf6]/40 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Thu</div></div>
<div className="w-8 bg-[#8b5cf6]/20 rounded-t-sm h-[30%] relative group hover:bg-[#8b5cf6]/40 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Fri</div></div>
<div className="w-8 bg-white/5 rounded-t-sm h-[10%] relative group hover:bg-white/10 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Sat</div></div>
<div className="w-8 bg-white/5 rounded-t-sm h-[5%] relative group hover:bg-white/10 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">Sun</div></div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col h-[300px]">
<h3 className="text-sm font-medium text-white mb-4">Recent Activity</h3>
<div className="flex-1 overflow-y-auto space-y-4 pr-2">
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shadow-[0_0_5px_#4ade80]"></div>
<div>
<p className="text-xs text-white">Reply from <span className="font-semibold">Sarah (Stripe)</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">10 mins ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#8b5cf6] mt-1.5"></div>
<div>
<p className="text-xs text-white">Campaign <span className="font-semibold text-[#a78bfa]">Vercel Engineers</span> started</p>
<p className="text-[10px] text-zinc-500 mt-0.5">2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5"></div>
<div>
<p className="text-xs text-white">Email opened by <span className="font-semibold">HR (Linear)</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">5 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-6 max-w-6xl mx-auto h-full flex flex-col" id="campaigns-view">
<div className="flex items-center justify-between shrink-0 mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">Create Campaign</h2>
<button className="px-4 py-2 rounded-lg bg-gradient-to-b from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-shadow">
                            Launch Campaign
                        </button>
</div>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">

<div className="glass-card p-6 rounded-2xl overflow-y-auto">
<form className="space-y-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400">Campaign Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#8b5cf6]/50 focus:bg-black/40 outline-none transition-all" placeholder="e.g. Senior Frontend Eng - Q3" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400">Upload HR Contacts</label>
<div className="w-full h-32 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#8b5cf6]/30 transition-all cursor-pointer">
<iconify-icon className="text-zinc-500 mb-2" icon="solar:upload-linear" width="24"></iconify-icon>
<p className="text-xs text-zinc-300">Drop CSV or click to browse</p>
</div>
</div>
<div className="space-y-2 relative">
<label className="block text-xs font-medium text-zinc-400">Sending Schedule</label>
<button className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-left text-white flex justify-between items-center hover:bg-black/30 transition-colors" type="button">
                                        Monday - Friday, 9AM - 5PM EST
                                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="p-4 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">AI Personalization</p>
<p className="text-xs text-zinc-400 mt-0.5">Scan LinkedIn to personalize intros</p>
</div>

<div className="w-10 h-6 bg-[#8b5cf6] rounded-full relative cursor-pointer flex items-center px-1 shadow-[0_0_10px_rgba(139,92,246,0.4)]">
<div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform shadow-sm"></div>
</div>
</div>
</form>
</div>

<div className="glass-card rounded-2xl border-[#8b5cf6]/20 flex flex-col overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/5 to-transparent pointer-events-none"></div>
<div className="p-4 border-b border-white/10 bg-white/[0.02] flex items-center gap-3 shrink-0">
<iconify-icon className="text-[#a78bfa]" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-medium text-[#a78bfa]">AI Preview generated for Row 1</span>
</div>
<div className="p-6 flex-1 overflow-y-auto space-y-4">
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">Subject</p>
<p className="text-sm text-white font-medium">Quick question regarding the Frontend role at <span className="text-[#a78bfa] bg-[#8b5cf6]/20 px-1 rounded">Stripe</span></p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">Body</p>
<div className="text-sm text-zinc-300 leading-relaxed space-y-4">
<p>Hi <span className="text-[#a78bfa] bg-[#8b5cf6]/20 px-1 rounded">Sarah</span>,</p>
<p>I noticed your recent post about the <span className="text-[#a78bfa] bg-[#8b5cf6]/20 px-1 rounded">React migration</span> project. Really impressive work your team is doing!</p>
<p>I'm a Frontend Engineer with 4 years of experience building similar high-performance dashboards, and I recently applied for the open role on your team. Would you be open to a quick 5-min chat to see if my background aligns with what you're looking for?</p>
<p>Best,<br/>John Doe</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-6 max-w-6xl mx-auto h-full flex flex-col" id="contacts-view">
<div className="flex items-center justify-between shrink-0">
<div className="relative w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-black/20 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:border-[#8b5cf6]/50 focus:bg-black/40 outline-none" placeholder="Search contacts..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export
                            </button>
<button className="px-3 py-2 rounded-lg bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-medium hover:bg-[#8b5cf6]/30 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:import-linear"></iconify-icon> Import
                            </button>
</div>
</div>
<div className="flex-1 glass-card rounded-2xl overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="text-xs text-zinc-400 bg-white/[0.02] border-b border-white/10 uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-medium">Name</th>
<th className="px-6 py-4 font-medium">Company</th>
<th className="px-6 py-4 font-medium">Email</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">Sarah Jenkins</td>
<td className="px-6 py-4">Stripe</td>
<td className="px-6 py-4 text-zinc-400">sarah.j@stripe.com</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">Replied</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">Mike Chen</td>
<td className="px-6 py-4">Vercel</td>
<td className="px-6 py-4 text-zinc-400">mike@vercel.com</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-[#8b5cf6]/10 text-[#a78bfa] border border-[#8b5cf6]/20 text-[10px]">In Campaign</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">Emily Davis</td>
<td className="px-6 py-4">Linear</td>
<td className="px-6 py-4 text-zinc-400">emily.d@linear.app</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 text-[10px]">Uncontacted</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="app-view hidden space-y-6 max-w-6xl mx-auto h-full flex flex-col" id="history-view">
<div className="flex items-center justify-between shrink-0">
<div className="flex items-center gap-4">
<button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/20">All Sent</button>
<button className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white text-xs font-medium transition-colors">Opened</button>
<button className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white text-xs font-medium transition-colors">Replied</button>
</div>
</div>
<div className="flex-1 glass-card rounded-2xl overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="text-xs text-zinc-400 bg-white/[0.02] border-b border-white/10 uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-medium">Recipient</th>
<th className="px-6 py-4 font-medium">Subject</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium">Sent Date</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="px-6 py-4">
<p className="font-medium text-white">Sarah Jenkins</p>
<p className="text-[10px] text-zinc-500">Stripe</p>
</td>
<td className="px-6 py-4 text-zinc-300 max-w-[300px] truncate">Quick question regarding the Frontend role...</td>
<td className="px-6 py-4"><span className="flex items-center gap-1.5 text-[10px] text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80]"></div>Replied</span></td>
<td className="px-6 py-4 text-zinc-500 text-xs">Today, 10:30 AM</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="px-6 py-4">
<p className="font-medium text-white">Mike Chen</p>
<p className="text-[10px] text-zinc-500">Vercel</p>
</td>
<td className="px-6 py-4 text-zinc-300 max-w-[300px] truncate">Exploring opportunities at Vercel...</td>
<td className="px-6 py-4"><span className="flex items-center gap-1.5 text-[10px] text-blue-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_#60a5fa]"></div>Opened</span></td>
<td className="px-6 py-4 text-zinc-500 text-xs">Yesterday, 2:15 PM</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="px-6 py-4">
<p className="font-medium text-white">David Kim</p>
<p className="text-[10px] text-zinc-500">OpenAI</p>
</td>
<td className="px-6 py-4 text-zinc-300 max-w-[300px] truncate">AI integration roles - follow up</td>
<td className="px-6 py-4"><span className="flex items-center gap-1.5 text-[10px] text-zinc-400"><div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>Sent</span></td>
<td className="px-6 py-4 text-zinc-500 text-xs">Oct 24, 09:00 AM</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="app-view hidden space-y-6 max-w-6xl mx-auto" id="analytics-view">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl">
<p className="text-sm text-zinc-400 font-medium mb-2">Total Open Rate</p>
<div className="flex items-end gap-3">
<h3 className="text-4xl font-semibold tracking-tight text-white">48.2%</h3>
<span className="text-xs text-green-400 mb-1">+4.1%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-blue-400 w-[48%] shadow-[0_0_10px_#60a5fa]"></div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<p className="text-sm text-zinc-400 font-medium mb-2">Total Reply Rate</p>
<div className="flex items-end gap-3">
<h3 className="text-4xl font-semibold tracking-tight text-white">12.5%</h3>
<span className="text-xs text-green-400 mb-1">+1.2%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-green-400 w-[12%] shadow-[0_0_10px_#4ade80]"></div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-[#8b5cf6]/30 bg-[#8b5cf6]/5 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8b5cf6]/20 blur-2xl rounded-full"></div>
<p className="text-sm text-[#a78bfa] font-medium mb-2">Referrals Secured</p>
<div className="flex items-end gap-3">
<h3 className="text-4xl font-semibold tracking-tight text-white">4</h3>
</div>
<p className="text-xs text-zinc-400 mt-3">From 32 total replies</p>
</div>
</div>
<div className="glass-card p-6 rounded-2xl h-[400px] flex flex-col">
<h3 className="text-sm font-medium text-white mb-6">Conversion Funnel</h3>
<div className="flex-1 flex flex-col justify-center items-center gap-4 w-full max-w-lg mx-auto">

<div className="w-full py-3 bg-white/5 rounded-xl border border-white/10 text-center relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400">Sent</div>
<span className="text-lg font-semibold text-white">1,024</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-down-linear"></iconify-icon>
<div className="w-[80%] py-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-blue-400">Opened</div>
<span className="text-lg font-semibold text-white">493</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-down-linear"></iconify-icon>
<div className="w-[60%] py-3 bg-green-500/10 rounded-xl border border-green-500/20 text-center relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-green-400">Replied</div>
<span className="text-lg font-semibold text-white">128</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-down-linear"></iconify-icon>
<div className="w-[40%] py-3 bg-[#8b5cf6]/20 rounded-xl border border-[#8b5cf6]/40 text-center relative shadow-[0_0_20px_rgba(139,92,246,0.2)]">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#a78bfa]">Referral</div>
<span className="text-lg font-semibold text-white">4</span>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-8 max-w-5xl mx-auto" id="billing-view">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Upgrade your outreach</h2>
<p className="text-sm text-zinc-400">Choose a plan that fits your job search velocity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl flex flex-col border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Hobby</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">$0</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> 50 emails per day</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Basic templates</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Standard support</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors">Current Plan</button>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col border-[#8b5cf6]/50 bg-gradient-to-b from-[#8b5cf6]/10 to-transparent relative shadow-[0_0_40px_rgba(139,92,246,0.15)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#8b5cf6] text-white text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-[0_0_15px_#8b5cf6]">Most Popular</div>
<h3 className="text-lg font-medium text-[#a78bfa] mb-2">Pro Hunter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">$29</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-[#8b5cf6]" icon="solar:check-circle-linear"></iconify-icon> Unlimited emails</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#8b5cf6]" icon="solar:check-circle-linear"></iconify-icon> AI Personalization engine</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#8b5cf6]" icon="solar:check-circle-linear"></iconify-icon> LinkedIn scanning</li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all">Upgrade to Pro</button>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">$99</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Multiple mailboxes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Team collaboration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated proxy IPs</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>

<div className="app-view hidden max-w-5xl mx-auto flex flex-col md:flex-row gap-8" id="settings-view">

<div className="w-full md:w-64 shrink-0 space-y-1">
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-white bg-white/10 transition-colors">Profile</button>
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">Email Configuration</button>
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">Notifications</button>
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 mt-4 transition-colors">Danger Zone</button>
</div>

<div className="flex-1 space-y-6">
<div className="glass-card p-6 rounded-2xl">
<h3 className="text-base font-semibold text-white mb-1">Profile Information</h3>
<p className="text-xs text-zinc-400 mb-6">Update your personal details here.</p>
<form className="space-y-4 max-w-md">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400">Full Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#8b5cf6]/50 focus:bg-black/40 outline-none" type="text" value="John Doe"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400">Email Address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#8b5cf6]/50 focus:bg-black/40 outline-none" type="email" value="john@example.com"/>
</div>
<button className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors mt-2" type="button">Save Changes</button>
</form>
</div>
<div className="glass-card p-6 rounded-2xl">
<h3 className="text-base font-semibold text-white mb-1">Connected Accounts</h3>
<p className="text-xs text-zinc-400 mb-6">Connect your email provider for sending.</p>
<div className="p-4 rounded-xl border border-[#8b5cf6]/20 bg-white/[0.02] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
<iconify-icon icon="logos:google-gmail" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">john@example.com</p>
<p className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Connected successfully</p>
</div>
</div>
<button className="text-xs text-zinc-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg">Disconnect</button>
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
