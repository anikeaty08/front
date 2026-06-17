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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      (function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileCloseButton = document.getElementById('mobile-close-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const menuText = document.getElementById('menu-text');
        let isMenuOpen = false;

        function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          
          if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenu.classList.add('opacity-100', 'visible');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            menuText.textContent = 'Close';
            document.body.style.overflow = 'hidden';
          } else {
            mobileMenu.classList.remove('opacity-100', 'visible');
            mobileMenu.classList.add('opacity-0', 'invisible');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuText.textContent = 'Menu';
            document.body.style.overflow = '';
          }
        }

        mobileMenuButton.addEventListener('click', toggleMenu);
        mobileCloseButton.addEventListener('click', toggleMenu);

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
            if (isMenuOpen) {
              toggleMenu();
            }
          });
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
          }
        });

        mobileMenu.addEventListener('click', (e) => {
          if (e.target === mobileMenu && isMenuOpen) {
            toggleMenu();
          }
        });
      })();
    
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hk4GkXoEfSX9qZozoFL6"></div>
</div>

<header className="fixed z-50 xl:bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] xl:from-fuchsia-300/10 xl:to-violet-800/0 [animation:fadeSlideIn_1s_ease-out_0.1s_both] top-0 right-0 left-0 backdrop-blur-lg" style={{borderBottom: '1px solid transparent', borderImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.1) 100%) 1', borderImageSlice: '0 0 1 0'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex xl:pt-4 xl:pb-4 pt-6 pb-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<iconify-icon className="text-white/90 group-hover:text-white transition-colors" height="24" icon="solar:music-library-2-linear" width="24"></iconify-icon>
<span className="text-2xl font-bold tracking-tighter font-inter text-white">Spectrum</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/features">Features</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/integrations">Integrations</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/about">About</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/pricing">Pricing</a>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center">Get Started</button>
</nav>

<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" id="menu-icon" width="20"></iconify-icon>
<iconify-icon className="hidden" height="20" icon="solar:close-circle-linear" id="close-icon" width="20"></iconify-icon>
<span id="menu-text">Menu</span>
</button>
</div>

<div className="lg:hidden fixed z-50 transition-all duration-300 ease-out bg-black/95 opacity-0 top-0 right-0 bottom-0 left-0 backdrop-blur-xl" id="mobile-menu" style={{display: 'none'}}>
<div className="flex flex-col h-full pt-6 pb-8 px-6">
<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur" id="mobile-close-button">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<nav className="flex-1">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-inter" href="/features">Features</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-inter" href="/integrations">Integrations</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-inter" href="/about">About</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-inter" href="/contact">Contact</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-inter" href="/pricing">Pricing</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center justify-center">
              Book Demo
            </button>
</div>
</nav>
</div>
</div>

</div>
</header>

<section className="z-20 flex min-h-[90vh] xl:mb-0 xl:pb-20 mb-0 pb-20 relative items-end">
<div className="max-w-7xl mr-auto ml-auto pt-0 pr-6 pb-0 pl-6 lg:px-8 lg:pt-0">
<div className="grid grid-cols-1 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="order-1 mt-20 xl:mt-36">
<div className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate text-center mb-16">
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-inter mb-4"></h2>
</div>
</div><div className="order-1 pb-1">
<h1 className="leading-[0.9] [animation:fadeSlideIn_1s_ease-out_0.2s_both] sm:text-7xl lg:text-8xl xl:text-9xl xl:pb-0 xl:text-center xl:pt-10 xl:mt-36 text-6xl font-semibold tracking-tighter font-inter mt-20 pt-10 pb-0">Redefine Sound.</h1><p className="xl:text-base text-lg text-white/70 font-geist text-center max-w-2xl mr-auto ml-auto">Advanced audio processing tools designed for modern creators. Uncover the potential of every frequency.</p>
</div></div></div></section><section className="z-20 pt-24 pb-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<iconify-icon className="text-white/80 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" height="120" icon="solar:soundwave-bold-duotone" width="120"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 font-inter">Spatial Audio Engine</h3>
<p className="text-sm text-white/60 mb-4 font-geist">Immersive 3D sound processing</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-bold-duotone" width="16"></iconify-icon>
              Dolby Atmos
            </span>
<span>•</span>
<span>Binaural Ready</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<iconify-icon className="text-white/80 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" height="120" icon="solar:tuning-bold-duotone" width="120"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 font-inter">Smart Quantization</h3>
<p className="text-sm text-white/60 mb-4 font-geist">AI-powered rhythm correction</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:bolt-bold-duotone" width="16"></iconify-icon>
              Real-time
            </span>
<span>•</span>
<span>Zero Latency</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-rose-500/10 to-orange-500/10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<iconify-icon className="text-white/80 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" height="120" icon="solar:users-group-rounded-bold-duotone" width="120"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 font-inter">Cloud Collaboration</h3>
<p className="text-sm text-white/60 mb-4 font-geist">Seamless multiplayer sessions</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:globe-bold-duotone" width="16"></iconify-icon>
              Global Sync
            </span>
<span>•</span>
<span>Version History</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center group">
        Explore Capabilities
        <iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section><section className="z-20 py-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
<img alt="Interface Dashboard" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56dc4531-8b90-48dc-b729-da2ff9199f0c_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="space-y-3">
<div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
<div className="h-full bg-white/80 w-2/3"></div>
</div>
<div className="flex justify-between text-xs text-white/60 font-geist-mono">
<span>-12.4dB</span>
<span>L: 45 R: 55</span>
<span>00:03:42</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:chart-square-bold-duotone" width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-bold text-white font-inter">99.9%</div>
<div className="text-sm text-white/60 font-geist">Uptime Guarantee</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur border border-white/10 mb-6">
<iconify-icon className="text-white/90" height="16" icon="solar:graph-new-linear" width="16"></iconify-icon>
<span className="text-sm font-normal text-white/90 font-geist">Performance Analytics</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 font-inter">Data-Driven Creativity</h2>
<p className="text-lg text-white/70 mb-6 font-geist">
          Understand your audience like never before. Our advanced analytics suite provides real-time insights into listener behavior, engagement metrics, and geographic distribution.
        </p>
<p className="text-base text-white/60 mb-8 font-geist">
          Visualize your growth with interactive dashboards. Track stream counts across platforms, monitor playlist adds, and identify your most loyal fanbases instantly.
        </p>
<div className="flex flex-wrap gap-4 mb-8">
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-white" height="20" icon="solar:shield-check-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-normal font-geist">Enterprise Security</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-white" height="20" icon="solar:server-square-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-normal font-geist">API Access</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-white" height="20" icon="solar:clock-circle-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-normal font-geist">24/7 Support</span>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal font-geist bg-white text-black rounded-full pt-3 pr-6 pb-3 pl-6 items-center group hover:text-black">
            View Documentation
            <iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center">
            Watch Demo
            <iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section><section className="z-20 pt-24 pb-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur border border-white/10 mb-6">
<iconify-icon className="text-white/90" height="16" icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
<span className="text-sm font-normal text-white/90 font-geist">Ecosystem</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4 font-inter">Integrations</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto font-geist">Connect Spectrum with your favorite tools and platforms. Streamline your workflow effortlessly.</p>
</div>
<div className="space-y-4">

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/5">
<iconify-icon className="text-blue-400" height="24" icon="solar:laptop-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-inter">DAW Connect</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Logic Pro X
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Ableton Live
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Install Plugin
              <iconify-icon className="transition-transform duration-200 group-hover:translate-y-0.5" height="16" icon="solar:download-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/5">
<iconify-icon className="text-purple-400" height="24" icon="solar:cloud-storage-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-inter">Cloud Sync API</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Dropbox
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Google Drive
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Connect Account
              <iconify-icon className="transition-transform duration-200 group-hover:rotate-45" height="16" icon="solar:link-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-white/5">
<iconify-icon className="text-amber-400" height="24" icon="solar:smartphone-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-inter">Mobile Companion</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    iOS
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Android
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex gap-2 text-sm font-normal font-geist text-white/40 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 bg-white/5 items-center border border-white/5">
              Coming Soon
            </span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-white/5">
<iconify-icon className="text-green-400" height="24" icon="solar:plug-circle-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-inter">VST3 Support</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Native Instruments
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Arturia
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Learn More
              <iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center group">
        View All Integrations
        <iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section><footer className="border-t border-white/10 bg-neutral-950">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="text-2xl font-bold tracking-tighter font-inter mb-4 text-white">Spectrum</div>
<p className="text-sm text-white/60 font-geist max-w-md">
            Discover your musical voice with expert instruction, personalized lessons, and a supportive community of passionate musicians.
          </p>
</div>
<div className="">
<h4 className="hover:text-white transition xl:pb-4 text-sm text-white/60 font-geist pb-4" onclick="window.location.href='/music'" role="button">Music</h4>
<ul className="space-y-3">
<li className=""><a className="hover:text-white transition text-sm text-white/60 font-geist" href="/programs">Programs</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60 font-geist" href="/instructors">Instructors</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60 font-geist" href="/method">Method</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition font-geist" href="/pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium font-geist mb-4">Resources</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-white/60 hover:text-white transition font-geist" href="/help">Help Center</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-geist" href="/contact">Contact</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-geist" href="/community">Community</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition font-geist" href="/blog">Blog</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="text-sm text-white/40 font-geist">© 2026 Spectrum. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="text-sm text-white/40 hover:text-white/60 transition font-geist" href="/privacy">Privacy</a>
<a className="text-sm text-white/40 hover:text-white/60 transition font-geist" href="/terms">Terms</a>
<a className="text-sm text-white/40 hover:text-white/60 transition font-geist" href="/cookies">Cookies</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
