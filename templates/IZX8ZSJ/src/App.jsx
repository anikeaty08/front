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
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-left': 'slideLeft 0.7s ease-out forwards',
'slide-right': 'slideRight 0.7s ease-out forwards',
'blur-in': 'blurIn 1s ease-out forwards',
'progress': 'progress 2s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
'wave': 'wave 3s ease-in-out infinite',
'shimmer': 'shimmer 2s linear infinite',
'rotate-slow': 'rotateSlow 8s linear infinite',
'scale-up': 'scaleUp 0.5s ease-out forwards',
'gradient-shift': 'gradientShift 3s ease-in-out infinite',
'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
'100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(6px)' },
'100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' }
},
slideLeft: {
'0%': { opacity: '0', transform: 'translateX(-30px)', filter: 'blur(4px)' },
'100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0px)' }
},
slideRight: {
'0%': { opacity: '0', transform: 'translateX(30px)', filter: 'blur(4px)' },
'100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0px)' }
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(10px) brightness(0.8)' },
'100%': { opacity: '1', filter: 'blur(0px) brightness(1)' }
},
progress: {
'0%': { width: '0%' },
'100%': { width: '73%' }
},
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-10px)' }
},
pulseGlow: {
'0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
'50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' }
},
bounceIn: {
'0%': { transform: 'scale(0.3)', opacity: '0' },
'50%': { transform: 'scale(1.05)' },
'70%': { transform: 'scale(0.9)' },
'100%': { transform: 'scale(1)', opacity: '1' }
},
wave: {
'0%, 100%': { transform: 'rotate(0deg)' },
'25%': { transform: 'rotate(10deg)' },
'75%': { transform: 'rotate(-10deg)' }
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
},
rotateSlow: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' }
},
scaleUp: {
'0%': { transform: 'scale(0.8)', opacity: '0' },
'100%': { transform: 'scale(1)', opacity: '1' }
},
gradientShift: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' }
},
typing: {
from: { width: '0' },
to: { width: '100%' }
},
'blink-caret': {
'from, to': { borderColor: 'transparent' },
'50%': { borderColor: 'rgb(99, 102, 241)' }
}
}
}
}
}



    // Initialize Lucide icons
    lucide.createIcons();

    // Month dropdown functionality
    const monthBtn = document.getElementById('monthBtn');
    const monthMenu = document.getElementById('monthMenu');
    const monthLabel = document.getElementById('monthLabel');

    monthBtn?.addEventListener('click', () => {
        monthMenu.classList.toggle('hidden');
        monthBtn.querySelector('i').classList.toggle('rotate-180');
    });

    // Month selection
    monthMenu?.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            monthLabel.textContent = btn.dataset.month;
            monthMenu.classList.add('hidden');
            monthBtn.querySelector('i').classList.remove('rotate-180');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!monthBtn?.contains(e.target)) {
            monthMenu?.classList.add('hidden');
            monthBtn?.querySelector('i').classList.remove('rotate-180');
        }
    });

    // Animate progress bars on load
    setTimeout(() => {
        const storageBar = document.getElementById('storageBar');
        const uploadBar = document.getElementById('uploadBar');
        if (storageBar) storageBar.style.width = '73%';
        if (uploadBar) uploadBar.style.width = '73%';
    }, 2300);

    // Add interactive hover effects
    document.querySelectorAll('.group').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-2px)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-3xl"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/iphone14wallpaper9copy-d98969f84b43360bb0c164413b743e10" width="100%"></iframe></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-2 h-2 bg-indigo-500/30 rounded-full animate-float"></div>
<div className="absolute top-40 right-20 w-1 h-1 bg-violet-500/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-40 left-32 w-3 h-3 bg-blue-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute top-60 right-40 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
<div className="absolute bottom-20 right-16 w-2 h-2 bg-cyan-500/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
</div>

<aside className="fixed inset-y-0 left-0 w-16 md:w-20 bg-gradient-to-b from-indigo-600/70 to-indigo-800/80 flex flex-col items-center py-6 space-y-6 backdrop-blur-sm border-r border-slate-800/50 z-50 opacity-0 animate-slide-left" style={{animationDelay: '0.1s'}}>
<button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12 opacity-0 animate-bounce-in group" style={{animationDelay: '0.2s'}}>
<svg className="lucide lucide-layout-grid w-6 h-6 group-hover:animate-pulse" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 bg-white/10 opacity-0 animate-bounce-in animate-pulse-glow group" style={{animationDelay: '0.3s'}}>
<svg className="lucide lucide-home w-6 h-6 group-hover:animate-wave" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12 opacity-0 animate-bounce-in group" style={{animationDelay: '0.4s'}}>
<svg className="lucide lucide-folder w-6 h-6 group-hover:animate-pulse" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12 opacity-0 animate-bounce-in group" style={{animationDelay: '0.5s'}}>
<svg className="lucide lucide-activity w-6 h-6 group-hover:animate-pulse" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12 opacity-0 animate-bounce-in group" style={{animationDelay: '0.6s'}}>
<svg className="lucide lucide-users w-6 h-6 group-hover:animate-pulse" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
<button className="mt-auto p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 opacity-0 animate-bounce-in group" style={{animationDelay: '0.7s'}}>
<svg className="lucide lucide-settings w-6 h-6 group-hover:animate-rotate-slow" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</aside>

<main className="pl-16 md:pl-20 lg:pl-24 min-h-screen relative z-10">
<div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 opacity-0 animate-slide-up" style={{animationDelay: '0.8s'}}>
<h1 className="text-2xl font-semibold tracking-tight opacity-0 animate-blur-in relative overflow-hidden" style={{animationDelay: '0.9s'}}>
<span className="animate-typing border-r-2 border-indigo-400 pr-1 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Dashboard</span>
</h1>
<div className="flex items-center gap-4 w-full md:w-auto">
<label className="relative flex-1 md:flex-none group opacity-0 animate-slide-right" style={{animationDelay: '1s', transform: 'translateY(0px)'}}>
<svg className="lucide lucide-search absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-indigo-400 transition-all duration-300 group-focus-within:scale-110" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full md:w-80 bg-slate-800/80 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 hover:shadow-lg hover:shadow-indigo-500/20" placeholder="Search space, folder, file etc" type="text"/>
</label>
<button className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:rotate-6 opacity-0 animate-fade-in group" style={{animationDelay: '1.1s', transform: 'translateY(0px)'}}>
<svg className="lucide lucide-message-circle w-5 h-5 group-hover:animate-bounce" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</button>
<button className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-110 relative opacity-0 animate-fade-in group" style={{animationDelay: '1.2s'}}>
<svg className="lucide lucide-bell w-5 h-5 group-hover:animate-wave" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
</button>
<div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 hover:bg-slate-700/60 transition-all cursor-pointer opacity-0 animate-slide-right hover:scale-105 group" style={{animationDelay: '1.3s', transform: 'translateY(0px)'}}>
<img alt="avatar" className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92e0b5cf-f71b-4ee5-b910-b64bbec6bbec_320w.jpg" style={{}}/>
<div className="hidden lg:block">
<p className="leading-none text-sm font-manrope font-bold" style={{}}>Alice Williamson</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>williamson@example.com</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<section className="lg:col-span-3 space-y-6">

<div className="opacity-0 animate-blur-in" style={{animationDelay: '1.4s'}}>
<p className="text-slate-400 text-sm opacity-0 animate-fade-in font-manrope font-bold" style={{animationDelay: '1.5s'}}>Good Morning,</p>
<h2 className="opacity-0 animate-slide-up bg-clip-text animate-gradient-shift text-3xl text-transparent tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-montserrat font-medium" style={{animationDelay: '1.6s', backgroundSize: '200% 200%', transition: 'outline 0.1s ease-in-out'}}>Alice Williamson</h2>
</div>

<div className="grid sm:grid-cols-2 gap-6">

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-6 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 group" style={{animationDelay: '1.7s', transform: 'translateY(0px)'}}>
<div className="flex items-start justify-between">
<p className="text-sm text-slate-400 opacity-0 animate-fade-in group-hover:text-slate-300 transition-colors font-manrope font-bold" style={{animationDelay: '1.8s'}}>Used per month</p>
<div className="relative opacity-0 animate-slide-left" style={{animationDelay: '1.9s'}}>
<button className="flex items-center gap-1 bg-slate-700/60 hover:bg-slate-700 text-sm px-3 py-1.5 rounded-md transition-all duration-300 hover:scale-105" id="monthBtn">
<span className="font-manrope font-bold" id="monthLabel" style={{}}>September</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="hidden absolute right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20 overflow-hidden animate-scale-up" id="monthMenu">
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-700 text-sm transition-all duration-200 hover:scale-105 font-manrope font-bold" data-month="September" style={{}}>September</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-700 text-sm transition-all duration-200 hover:scale-105 font-manrope font-bold" data-month="August" style={{}}>August</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-700 text-sm transition-all duration-200 hover:scale-105 font-manrope font-bold" data-month="July" style={{}}>July</button></li>
</ul>
</div>
</div>
<p className="text-5xl tracking-tight opacity-0 animate-blur-in group-hover:scale-110 transition-transform duration-300 font-montserrat font-medium" style={{animationDelay: '2s', transition: 'outline 0.1s ease-in-out'}}>650<span className="text-3xl text-slate-400 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}> GB</span></p>
<div className="opacity-0 animate-slide-up" style={{animationDelay: '2.1s'}}>
<p className="text-sm mb-3 text-slate-300 font-manrope font-bold" style={{}}>Your Storage</p>
<div className="relative h-3 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-yellow-400 to-emerald-500 rounded-full animate-shimmer" id="storageBar" style={{width: '73%', animation: '2s ease-out 2.3s forwards progress, 2s linear infinite shimmer', backgroundSize: '1000px 100%'}}></div>
</div>
<div className="flex justify-between text-xs pt-2 text-slate-400">
<span className="font-manrope font-bold" style={{}}>0GB</span><span className="font-manrope font-bold" style={{}}>50GB left</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group" style={{animationDelay: '2s', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-between opacity-0 animate-fade-in" style={{animationDelay: '2.1s'}}>
<h3 className="group-hover:text-purple-300 transition-colors font-manrope font-bold" style={{}}>Spaces</h3>
<button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:scale-110 font-manrope font-bold" style={{}}>
<svg className="lucide lucide-plus w-4 h-4 hover:rotate-90 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                Add Space
                            </button>
</div>
<p className="text-sm text-slate-400 opacity-0 animate-fade-in font-manrope font-bold" style={{animationDelay: '2.2s'}}>Use spaces to sort files by their meaning.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 space-y-3 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 opacity-0 animate-slide-left hover:scale-105 hover:rotate-1 group/space" style={{animationDelay: '2.3s'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-folder w-5 h-5 text-violet-400 group-hover/space:animate-bounce" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<p className="font-manrope font-bold" style={{}}>Documents</p>
</div>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>21 GB Used</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>79 GB Available</p>
</div>
<div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 space-y-2 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 opacity-0 animate-slide-right hover:scale-105 hover:-rotate-1 group/space" style={{animationDelay: '2.4s'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-user w-5 h-5 text-emerald-400 group-hover/space:animate-bounce" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<p className="font-manrope font-bold" style={{}}>Personal</p>
</div>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>256 GB Total</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>56 GB Used</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>200 GB Available</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-up hover:shadow-2xl hover:shadow-blue-500/20" style={{animationDelay: '2.4s'}}>
<div className="flex items-center justify-between opacity-0 animate-fade-in" style={{animationDelay: '2.5s'}}>
<h3 className="font-manrope font-bold" style={{}}>Recent Files</h3>
<button className="text-sm text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:scale-110 font-manrope font-bold" style={{}}>View all</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 cursor-pointer opacity-0 animate-slide-up hover:scale-105 hover:-rotate-1 hover:shadow-lg group" style={{animationDelay: '2.6s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-file-text w-5 h-5 text-white group-hover:animate-pulse" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm truncate font-manrope font-bold" style={{}}>Project Brief.pdf</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>2.3 MB</p>
</div>
</div>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>Modified 2 hours ago</p>
</div>
<div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 cursor-pointer opacity-0 animate-slide-up hover:scale-105 hover:rotate-1 hover:shadow-lg group" style={{animationDelay: '2.7s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-image w-5 h-5 text-white group-hover:animate-pulse" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm truncate font-manrope font-bold" style={{}}>Hero Image.jpg</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>5.7 MB</p>
</div>
</div>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>Modified 4 hours ago</p>
</div>
<div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 cursor-pointer opacity-0 animate-slide-up hover:scale-105 hover:-rotate-1 hover:shadow-lg group" style={{animationDelay: '2.8s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-video w-5 h-5 text-white group-hover:animate-pulse" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm truncate font-manrope font-bold" style={{}}>Demo Video.mp4</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>124 MB</p>
</div>
</div>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>Modified yesterday</p>
</div>
<div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800 hover:border-slate-600/50 transition-all duration-300 cursor-pointer opacity-0 animate-slide-up hover:scale-105 hover:rotate-1 hover:shadow-lg group" style={{animationDelay: '2.9s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-file-spreadsheet w-5 h-5 text-white group-hover:animate-pulse" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm truncate font-manrope font-bold" style={{}}>Budget.xlsx</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>892 KB</p>
</div>
</div>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>Modified 2 days ago</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20" style={{animationDelay: '2.5s'}}>
<div className="flex items-center justify-between opacity-0 animate-fade-in" style={{animationDelay: '2.6s'}}>
<h3 className="font-manrope font-bold" style={{}}>Uploading Files</h3>
<button className="p-1 rounded hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 hover:rotate-90">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-center justify-between hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 opacity-0 animate-slide-right hover:scale-105" style={{animationDelay: '2.7s'}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-5 h-5 text-sky-400 animate-pulse" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-manrope font-bold" style={{}}>Project estimate</span>
</div>
<span className="text-slate-400 font-manrope font-bold" style={{}}>12.3 Mb</span>
</li>
<li className="flex items-center justify-between hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 opacity-0 animate-slide-right hover:scale-105" style={{animationDelay: '2.8s'}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-5 h-5 text-sky-400 animate-pulse" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-manrope font-bold" style={{}}>Presentation for...</span>
</div>
<span className="text-slate-400 font-manrope font-bold" style={{}}>36.7 Mb</span>
</li>
<li className="flex items-center justify-between hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 opacity-0 animate-slide-right hover:scale-105" style={{animationDelay: '2.9s'}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-5 h-5 text-sky-400 animate-pulse" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-manrope font-bold" style={{}}>Work invoicing</span>
</div>
<span className="text-slate-400 font-manrope font-bold" style={{}}>9.8 Mb</span>
</li>
</ul>
<div className="space-y-2 opacity-0 animate-blur-in" style={{animationDelay: '3s'}}>
<div className="flex justify-between text-xs">
<span className="font-manrope font-bold" style={{}}>Uploading</span>
<span className="font-manrope font-bold" id="uploadPercent" style={{}}>73%</span>
</div>
<div className="relative h-3 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-shimmer" id="uploadBar" style={{width: '73%', animation: '2s ease-out 3.2s forwards progress, 2s linear infinite shimmer', backgroundSize: '1000px 100%'}}></div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20" style={{animationDelay: '2.7s'}}>
<div className="flex items-center justify-between opacity-0 animate-fade-in" style={{animationDelay: '2.8s'}}>
<h3 className="font-manrope font-bold" style={{}}>Shared Files</h3>
<button className="text-sm text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:scale-110 font-manrope font-bold" style={{}}>View all</button>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3 hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer opacity-0 animate-slide-left hover:scale-105 group" style={{animationDelay: '2.9s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-file-text w-4 h-4 text-white group-hover:animate-pulse" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="truncate font-manrope font-bold" style={{}}>Marketing Brief</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>Shared by John Doe</p>
</div>
<span className="text-xs text-slate-400 font-manrope font-bold" style={{}}>2h</span>
</li>
<li className="flex items-center gap-3 hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer opacity-0 animate-slide-left hover:scale-105 group" style={{animationDelay: '3s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-image w-4 h-4 text-white group-hover:animate-pulse" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="truncate font-manrope font-bold" style={{}}>Design Assets</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>Shared by Sarah Wilson</p>
</div>
<span className="text-xs text-slate-400 font-manrope font-bold" style={{}}>1d</span>
</li>
<li className="flex items-center gap-3 hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer opacity-0 animate-slide-left hover:scale-105 group" style={{animationDelay: '3.1s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-file-spreadsheet w-4 h-4 text-white group-hover:animate-pulse" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="truncate font-manrope font-bold" style={{}}>Q4 Report</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>Shared by Mike Chen</p>
</div>
<span className="text-xs text-slate-400 font-manrope font-bold" style={{}}>3d</span>
</li>
</ul>
</div>
</div>
</section>

<aside className="space-y-6">

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-right hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20" style={{animationDelay: '3.2s'}}>
<h3 className="opacity-0 animate-fade-in font-manrope font-bold" style={{animationDelay: '3.3s'}}>Storage Overview</h3>
<div className="space-y-4">
<div className="flex items-center justify-between opacity-0 animate-slide-left" style={{animationDelay: '3.4s'}}>
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
<span className="text-sm font-manrope font-bold" style={{}}>Documents</span>
</div>
<span className="text-sm text-slate-400 font-manrope font-bold" style={{}}>45%</span>
</div>
<div className="flex items-center justify-between opacity-0 animate-slide-left" style={{animationDelay: '3.5s'}}>
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm font-manrope font-bold" style={{}}>Images</span>
</div>
<span className="text-sm text-slate-400 font-manrope font-bold" style={{}}>30%</span>
</div>
<div className="flex items-center justify-between opacity-0 animate-slide-left" style={{animationDelay: '3.6s'}}>
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
<span className="text-sm font-manrope font-bold" style={{}}>Videos</span>
</div>
<span className="text-sm text-slate-400 font-manrope font-bold" style={{}}>20%</span>
</div>
<div className="flex items-center justify-between opacity-0 animate-slide-left" style={{animationDelay: '3.7s'}}>
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
<span className="text-sm font-manrope font-bold" style={{}}>Others</span>
</div>
<span className="text-sm text-slate-400 font-manrope font-bold" style={{}}>5%</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 space-y-4 hover:border-slate-600/50 transition-all duration-500 opacity-0 animate-slide-right hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20" style={{animationDelay: '3.8s'}}>
<h3 className="opacity-0 animate-fade-in font-manrope font-bold" style={{animationDelay: '3.9s'}}>Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-start gap-3 opacity-0 animate-slide-up hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer group" style={{animationDelay: '4s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-upload w-4 h-4 text-white group-hover:animate-bounce" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-manrope font-bold" style={{}}>File uploaded</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>project-specs.pdf</p>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>2 minutes ago</p>
</div>
</div>
<div className="flex items-start gap-3 opacity-0 animate-slide-up hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer group" style={{animationDelay: '4.1s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-share w-4 h-4 text-white group-hover:animate-bounce" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-manrope font-bold" style={{}}>File shared</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>design-mockups.zip</p>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>1 hour ago</p>
</div>
</div>
<div className="flex items-start gap-3 opacity-0 animate-slide-up hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer group" style={{animationDelay: '4.2s'}}>
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-folder-plus w-4 h-4 text-white group-hover:animate-bounce" data-lucide="folder-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v6"></path><path d="M9 13h6"></path><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-manrope font-bold" style={{}}>Folder created</p>
<p className="text-xs text-slate-400 font-manrope font-bold" style={{}}>Client Resources</p>
<p className="text-xs text-slate-500 font-manrope font-bold" style={{}}>3 hours ago</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>




    </>
  );
}
