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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#358f44',
primaryDark: '#266931',
secondary: '#1372b8',
secondaryDark: '#0e578f',
cream: '#fdfcfb',
surface: '#ffffff',
},
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
},
boxShadow: {
'soft': '0 4px 40px -2px rgba(53, 143, 68, 0.08)',
'float': '0 20px 40px -10px rgba(0,0,0,0.05)',
},
animation: {
'blob': 'blob 7s infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
      const initCounters = () => {
        const counters = document.querySelectorAll('[data-element-id="aura-empc9b16nkcnks31"] .counter-value');
        if (!counters.length) return;
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (el.dataset.animated) return;
              el.dataset.animated = "true";
              
              const target = parseFloat(el.getAttribute('data-target'));
              const suffix = el.getAttribute('data-suffix') || '';
              const isFloat = el.getAttribute('data-float') === 'true';
              
              const duration = 1500;
              const stepTime = 20;
              const steps = duration / stepTime;
              
              let current = 1;
              if (target <= 1) {
                current = 0;
              }
              const increment = (target - current) / steps;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  let finalVal = isFloat ? (target % 1 !== 0 ? target.toFixed(1) : target) : target;
                  el.innerText = finalVal + suffix;
                  clearInterval(timer);
                } else {
                  el.innerText = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
                }
              }, stepTime);
            }
          });
        }, { threshold: 0.1 });
        
        counters.forEach(c => observer.observe(c));
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
      } else {
        initCounters();
        setTimeout(initCounters, 500); 
      }
    })();
  


      // Navbar scroll effect
      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
              nav.classList.add('shadow-sm', 'bg-white/90');
              nav.classList.remove('bg-white/80', 'border-transparent');
          } else {
              nav.classList.remove('shadow-sm', 'bg-white/90');
              nav.classList.add('bg-white/80');
          }
      });

      // Toggle Auth Modal
      function toggleAuthModal() {
          const modal = document.getElementById('authModal');
          if (modal.classList.contains('hidden')) {
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden'; // Prevent background scrolling
          } else {
              modal.classList.add('hidden');
              document.body.style.overflow = 'auto';
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 glass-panel border-b border-gray-100/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<img alt="Sabka Vaidya" className="h-12 w-auto object-contain" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b70b1f56-8385-4a0c-9857-36f0d2f3ccb0_320w.jpg"/>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="/doctor">
              Find Doctors
            </a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="/video-consult">
              Video Consult
            </a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#">
              Medicines
            </a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#">
              Lab Tests
            </a>
<div className="relative group cursor-pointer py-2">
<span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors flex items-center gap-1">
                More
                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>

<div className="absolute top-full right-0 w-48 bg-white rounded-xl shadow-float border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100 p-2">
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors" href="#">
                  Health Blogs
                </a>
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors" href="#">
                  Ask Questions
                </a>
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors" href="#">
                  About Us
                </a>
</div>
</div>
</div>

<div className="hidden md:flex items-center space-x-4">
<button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="toggleAuthModal()">
              Log in
            </button>
<button className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primaryDark transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-95" onclick="toggleAuthModal()">
              Sign up
            </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-primary focus:outline-none">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-28 pb-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primaryDark text-xs font-normal mb-6 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
            24/7 Video Consultations Now Live
          </div>
<h1 className="text-5xl md:text-7xl font-serif font-normal tracking-tight text-gray-900 leading-[1.1] mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
            Premium healthcare,
            <br/>
<span className="text-gradient font-medium">simplified for you.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-thin animate-fade-in" style={{animationDelay: '200ms'}}>
            Book appointments with top-rated doctors, order medicines, and get
            health checkups from the comfort of your home.
          </p>

<div className="bg-white p-2 rounded-2xl md:rounded-full shadow-float border border-gray-100 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 relative z-20 animate-fade-in" style={{animationDelay: '300ms'}}>

<div className="flex items-center px-4 py-3 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100">
<iconify-icon className="text-gray-400 mr-3 text-xl" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm focus:outline-none text-gray-700 placeholder-gray-400 font-normal" placeholder="Mumbai, IN" type="text"/>
</div>

<div className="flex items-center px-4 py-3 w-full md:w-auto flex-grow">
<iconify-icon className="text-gray-400 mr-3 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm focus:outline-none text-gray-700 placeholder-gray-400" placeholder="Search treatment, doctors, clinics, hospitals, etc." type="text"/>
</div>

<button className="w-full md:w-auto bg-primary text-white text-sm font-normal px-8 py-4 rounded-xl md:rounded-full hover:bg-primaryDark transition-all flex items-center justify-center gap-2">
              Search
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-in" style={{animationDelay: '350ms'}}>
<span className="text-sm text-gray-500 font-normal mr-2">
              Popular searches:
            </span>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm">
              Viral Fever
            </button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm">
              Cough &amp; Cold
            </button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm">
              Skin Allergy
            </button>
<span className="text-gray-300 mx-1 hidden md:block">|</span>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm flex items-center gap-1.5 group">
<iconify-icon className="text-gray-400 group-hover:text-primary transition-colors text-sm" icon="solar:map-point-linear"></iconify-icon>
              Mumbai
            </button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm flex items-center gap-1.5 group">
<iconify-icon className="text-gray-400 group-hover:text-primary transition-colors text-sm" icon="solar:map-point-linear"></iconify-icon>
              Delhi
            </button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-normal rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm flex items-center gap-1.5 group">
<iconify-icon className="text-gray-400 group-hover:text-primary transition-colors text-sm" icon="solar:map-point-linear"></iconify-icon>
              Bangalore
            </button>
</div>

<div className="flex flex-wrap md:gap-12 animate-fade-in mt-12 gap-x-6 gap-y-6 justify-center" style={{animationDelay: '400ms'}}>
<div className="flex flex-col items-center">
<span className="text-2xl font-serif font-light text-gray-900 tracking-tight counter-value" data-suffix="+" data-target="5000">
      1+
    </span>
<span className="text-xs text-gray-500 font-light uppercase tracking-wider mt-1">
      Verified Doctors
    </span>
</div>
<div className="w-px h-10 bg-gray-200 hidden md:block"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-serif font-light text-gray-900 tracking-tight counter-value" data-float="true" data-suffix="M+" data-target="1">
      0M+
    </span>
<span className="text-xs text-gray-500 font-light uppercase tracking-wider mt-1">
      Happy Patients
    </span>
</div>
<div className="w-px h-10 bg-gray-200 hidden md:block"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-serif font-light text-gray-900 tracking-tight counter-value" data-float="true" data-suffix="/5" data-target="4.9">
      1.0/5
    </span>
<span className="text-xs text-gray-500 font-light uppercase tracking-wider mt-1">
      App Rating
    </span>
</div>

</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex justify-between items-end mb-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-gray-900">
              Consult top specialities
            </h2>
<p className="text-sm text-gray-500 mt-2">
              Private online consultations with verified doctors
            </p>
</div>
<a className="hidden md:flex text-sm font-medium text-primary items-center gap-1 hover:text-primaryDark transition-colors" href="#">
            View all
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">General Physician</h3>
<p className="text-xs text-gray-400 mt-1">Cold, cough, fever</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Dermatology</h3>
<p className="text-xs text-gray-400 mt-1">Skin, hair issues</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:stomach-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Gastroenterology</h3>
<p className="text-xs text-gray-400 mt-1">Digestive issues</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Pediatrics</h3>
<p className="text-xs text-gray-400 mt-1">Child specialist</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Orthopedics</h3>
<p className="text-xs text-gray-400 mt-1">Bone &amp; joints</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-soft transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors mb-3">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Psychiatry</h3>
<p className="text-xs text-gray-400 mt-1">Mental wellness</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden relative shadow-lg">

<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between">
<div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-4">
                Instant Access
              </span>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-white mb-4">
                Skip the waiting room. Consult a doctor online.
              </h2>
<p className="text-primary-100 text-sm md:text-base mb-8 text-white/80">
                Connect with specialized doctors via secure video call in
                minutes. Available 24/7 for your convenience.
              </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="bg-white text-primaryDark text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center">
<iconify-icon className="text-lg" icon="solar:video-frame-linear"></iconify-icon>
                  Start Video Consult
                </button>
<span className="text-white/60 text-xs font-medium">
                  Starts at ₹299
                </span>
</div>
</div>

<div className="w-full md:w-1/3 flex justify-center relative">
<div className="w-48 h-48 md:w-64 md:h-64 relative">
<div className="absolute inset-0 bg-white/10 rounded-3xl rotate-6 backdrop-blur-sm border border-white/20"></div>
<div className="absolute inset-0 bg-white/20 rounded-3xl -rotate-3 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-white text-6xl opacity-90" icon="solar:shield-user-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-gray-900">
              Highly Recommended Doctors
            </h2>
<p className="text-sm text-gray-500 mt-2">
              Based on patient reviews and ratings
            </p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">

<div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all overflow-hidden flex-shrink-0 group">
<div className="p-5">
<div className="flex gap-4">

<div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden relative border border-gray-50 flex-shrink-0">
<img alt="Dr. Sharma" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=e2e8f0"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<h3 className="text-lg font-serif font-medium tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                    Dr. Ananya Sharma
                  </h3>
<p className="text-xs text-primary font-medium mt-0.5">
                    Cardiologist
                  </p>
<p className="text-xs text-gray-500 mt-1">12 years experience</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-700">4.9</span>
<span className="text-xs text-gray-400">(124 reviews)</span>
</div>
<span className="text-sm font-medium text-gray-900">₹800</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white border border-primary text-primary text-xs font-medium py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-center">
                  View Profile
                </button>
<button className="flex-1 bg-primary text-white text-xs font-medium py-2.5 rounded-xl hover:bg-primaryDark transition-colors text-center">
                  Book Now
                </button>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all overflow-hidden flex-shrink-0 group">
<div className="p-5">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden relative border border-gray-50 flex-shrink-0">
<img alt="Dr. Patel" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&amp;backgroundColor=e2e8f0"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<h3 className="text-lg font-serif font-medium tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                    Dr. Rahul Patel
                  </h3>
<p className="text-xs text-primary font-medium mt-0.5">
                    Dermatologist
                  </p>
<p className="text-xs text-gray-500 mt-1">8 years experience</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-700">4.8</span>
<span className="text-xs text-gray-400">(89 reviews)</span>
</div>
<span className="text-sm font-medium text-gray-900">₹600</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white border border-primary text-primary text-xs font-medium py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-center">
                  View Profile
                </button>
<button className="flex-1 bg-primary text-white text-xs font-medium py-2.5 rounded-xl hover:bg-primaryDark transition-colors text-center">
                  Book Now
                </button>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all overflow-hidden flex-shrink-0 group">
<div className="p-5">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden relative border border-gray-50 flex-shrink-0">
<img alt="Dr. Reddy" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Mia&amp;backgroundColor=e2e8f0"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<h3 className="text-lg font-serif font-medium tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                    Dr. Priya Reddy
                  </h3>
<p className="text-xs text-primary font-medium mt-0.5">
                    Pediatrician
                  </p>
<p className="text-xs text-gray-500 mt-1">15 years experience</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-700">5.0</span>
<span className="text-xs text-gray-400">(210 reviews)</span>
</div>
<span className="text-sm font-medium text-gray-900">₹900</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white border border-primary text-primary text-xs font-medium py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-center">
                  View Profile
                </button>
<button className="flex-1 bg-primary text-white text-xs font-medium py-2.5 rounded-xl hover:bg-primaryDark transition-colors text-center">
                  Book Now
                </button>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all overflow-hidden flex-shrink-0 group">
<div className="p-5">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden relative border border-gray-50 flex-shrink-0">
<img alt="Dr. Khan" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Leo&amp;backgroundColor=e2e8f0"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
</div>
<div>
<h3 className="text-lg font-serif font-medium tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                    Dr. Imran Khan
                  </h3>
<p className="text-xs text-primary font-medium mt-0.5">
                    Neurologist
                  </p>
<p className="text-xs text-gray-500 mt-1">10 years experience</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-700">4.7</span>
<span className="text-xs text-gray-400">(56 reviews)</span>
</div>
<span className="text-sm font-medium text-gray-900">₹1200</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white border border-primary text-primary text-xs font-medium py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-center">
                  View Profile
                </button>
<button className="flex-1 bg-primary text-white text-xs font-medium py-2.5 rounded-xl hover:bg-primaryDark transition-colors text-center">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/50 mt-8">
<div className="flex justify-between items-end mb-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-gray-900">
              Read top articles from health experts
            </h2>
<p className="text-sm text-gray-500 mt-2">
              Health and wellness tips to keep you fit
            </p>
</div>
<a className="hidden md:flex text-sm font-medium text-primary items-center gap-1 hover:text-primaryDark transition-colors" href="#">
            More articles
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="w-full h-48 rounded-2xl bg-gray-100 overflow-hidden mb-4">

<div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-4xl text-emerald-300" icon="solar:apple-linear"></iconify-icon>
</div>
</div>
<div className="flex mb-2 gap-x-2 gap-y-2 items-center">
<span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                Diet &amp; Nutrition
              </span>
<span className="text-xs text-gray-400">5 min read</span>
</div>
<h3 className="text-lg font-serif font-medium text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">
              10 Superfoods You Need in Your Daily Diet
            </h3>
<p className="text-sm text-gray-500 line-clamp-2">
              Discover the essential nutrients and foods that can boost your
              immunity and overall health...
            </p>
</div>

<div className="group cursor-pointer">
<div className="w-full h-48 rounded-2xl bg-gray-100 overflow-hidden mb-4">
<div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-4xl text-indigo-300" icon="solar:moon-sleep-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                Mental Wellness
              </span>
<span className="text-xs text-gray-400">4 min read</span>
</div>
<h3 className="text-lg font-serif font-medium text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">
              How Sleep Affects Your Mental Health
            </h3>
<p className="text-sm text-gray-500 line-clamp-2">
              Understanding the crucial link between getting enough rest and
              maintaining cognitive function...
            </p>
</div>

<div className="group cursor-pointer">
<div className="w-full h-48 rounded-2xl bg-gray-100 overflow-hidden mb-4">
<div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-4xl text-red-300" icon="solar:heart-angle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-md">
                Heart Health
              </span>
<span className="text-xs text-gray-400">6 min read</span>
</div>
<h3 className="text-lg font-serif font-medium text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">
              Recognizing Early Signs of Heart Conditions
            </h3>
<p className="text-sm text-gray-500 line-clamp-2">
              Learn the subtle symptoms that might indicate underlying
              cardiovascular issues...
            </p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<img alt="Sabka Vaidya" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a46fc791-162c-4c38-b2a3-dc44c40782b7_320w.jpg"/>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Making premium healthcare accessible, affordable, and reliable for
              everyone.
            </p>
<div className="flex space-x-4">
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors" href="#">
<iconify-icon icon="solar:camera-minimalistic-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="font-serif font-medium text-gray-900 mb-4 tracking-tight">
              For Patients
            </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Search for Doctors
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Search for Clinics
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Book Video Consult
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Health Articles
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-serif font-medium text-gray-900 mb-4 tracking-tight">
              For Doctors
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Join as a Doctor
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  SabkaVaidya Pro
                </a>
</li>
<li className="">
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Clinic Management
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-serif font-medium text-gray-900 mb-4 tracking-tight">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">
            © 2023 SabkaVaidya Technologies. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400">Built for</span>
<iconify-icon className="text-gray-400" icon="solar:cloud-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-500">
              Salesforce Experience Cloud
            </span>
</div>
</div>
</div>
</footer>



<div className="fixed inset-0 z-[100] hidden" id="authModal">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onclick="toggleAuthModal()"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px] max-h-[90vh]">

<button className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100/50 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors" onclick="toggleAuthModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-emerald-50 to-primary/10 p-12 flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-8">
<img alt="Sabka Vaidya" className="h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a46fc791-162c-4c38-b2a3-dc44c40782b7_320w.jpg?w=800&amp;q=80"/>
</div>
<h2 className="text-3xl font-serif font-medium tracking-tight text-gray-900 mb-4">
              Your health journey
              <br/>
              starts here.
            </h2>
<p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Join thousands of users managing their healthcare needs
              seamlessly. Book, consult, and order with confidence.
            </p>
</div>

<div className="relative z-10 flex gap-4">
<div className="bg-white/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-primary" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-900">
                  Secure Data
                </span>
</div>
<p className="text-[10px] text-gray-500">HIPAA compliant platform</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto hide-scrollbar flex flex-col justify-center">
<div className="max-w-sm mx-auto w-full">

<div className="flex p-1 bg-gray-100 rounded-lg mb-8">
<button className="flex-1 py-1.5 text-sm font-medium bg-white rounded-md shadow-sm text-gray-900">
                Log In
              </button>
<button className="flex-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Sign Up
              </button>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-gray-900 mb-1">
              Welcome back
            </h3>
<p className="text-sm text-gray-500 mb-8">
              Please enter your details to sign in.
            </p>
<form className="space-y-5" onsubmit="event.preventDefault();">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email or Phone Number
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:user-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-gray-50 focus:bg-white outline-none" placeholder="Enter your email or phone" type="text"/>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-gray-700">
                    Password
                  </label>
<a className="text-xs text-primary font-medium hover:text-primaryDark" href="#">
                    Forgot password?
                  </a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:lock-password-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-gray-50 focus:bg-white outline-none" placeholder="••••••••" type="password"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
<iconify-icon className="text-gray-400 hover:text-gray-600" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
</div>

<button className="w-full bg-primary text-white text-sm font-medium py-3 rounded-xl hover:bg-primaryDark transition-colors shadow-md shadow-primary/20 mt-2" type="submit">
                Sign in to account
              </button>
</form>
<div className="mt-6 flex items-center justify-center gap-4">
<div className="h-px bg-gray-200 flex-1"></div>
<span className="text-xs text-gray-400 font-medium">
                OR CONTINUE WITH
              </span>
<div className="h-px bg-gray-200 flex-1"></div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
<iconify-icon className="text-gray-600" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-700">OTP Login</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">

<iconify-icon className="text-gray-600" icon="solar:global-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Google</span>
</button>
</div>
<p className="text-center text-xs text-gray-500 mt-8">
              By logging in, you agree to our
              <a className="text-primary hover:underline" href="#">
                Terms of Service
              </a>
              and
              <a className="text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
</div>
</div>
</div>
</div>



    </>
  );
}
