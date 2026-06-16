import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hk4GkXoEfSX9qZozoFL6"></div>
</div>

<header className="fixed z-50 xl:bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] xl:from-fuchsia-300/10 xl:to-violet-800/0 [animation:fadeSlideIn_1s_ease-out_0.1s_both] top-0 right-0 left-0 backdrop-blur-lg" style={{borderBottom: '1px solid transparent', borderImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.1) 100%) 1', borderImageSlice: '0 0 1 0'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex xl:pt-4 xl:pb-4 pt-6 pb-6 items-center justify-between">
<a className="text-2xl font-semibold tracking-tight font-geist" href="/">Melody</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/music">Music</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/programs">Programs</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/about">About</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/contact">Contact</a>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center">Sign in</button>
</nav>

<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<svg className="lucide lucide-menu w-[16px] h-[16px]" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-[16px] h-[16px] hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
<span id="menu-text">Menu</span>
</button>
</div>

<div className="lg:hidden fixed z-50 transition-all duration-300 ease-out bg-black/95 opacity-0 top-0 right-0 bottom-0 left-0 backdrop-blur-xl" id="mobile-menu" style={{display: 'none'}}>
<div className="flex flex-col h-full pt-6 pb-8 px-6">
<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur" id="mobile-close-button">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/music">Music</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/shows">Shows</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/about">About</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/contact">Contact</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-geist" href="/store">Store</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center justify-center">
              Book Now
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
<div className="inline-flex bg-white/10 border-white/10 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center">
<svg className="w-4 h-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
<span className="text-sm font-normal text-white/90 font-geist">New Release</span>
</div>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-geist mb-4"></h2>
</div>
</div><div className="order-1 pb-1">
<h1 className="leading-[0.9] [animation:fadeSlideIn_1s_ease-out_0.2s_both] sm:text-7xl lg:text-8xl xl:text-9xl xl:pb-0 xl:text-center xl:pt-10 xl:mt-36 text-6xl font-semibold tracking-tighter font-poppins mt-20 pt-10 pb-0">Where Music Lives</h1><p className="xl:text-base text-lg text-white/70 font-geist max-w-2xl mr-auto ml-auto">Immersive soundscapes and unforgettable melodies that move your soul</p>
</div></div></div></section><section className="z-20 pt-24 pb-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
<img alt="Album Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f11a68b7-17a3-4a61-b5a5-4637061e6813_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform">
<svg className="w-5 h-5 ml-0.5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 font-geist">Midnight Echoes</h3>
<p className="text-sm text-white/60 mb-4 font-geist">Single • 2024</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
              3:42
            </span>
<span>•</span>
<span>128k plays</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
<img alt="Album Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a9427af9-dc7a-42d5-86c6-21b51f8d4ba8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform">
<svg className="w-5 h-5 ml-0.5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 font-geist">Golden Hour</h3>
<p className="text-sm text-white/60 mb-4 font-geist">Single • 2024</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
              4:15
            </span>
<span>•</span>
<span>95k plays</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
<img alt="Album Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7343b1fa-30d8-4695-a5cd-1dfd789a20aa_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform">
<svg className="w-5 h-5 ml-0.5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 font-geist">Velvet Dreams</h3>
<p className="text-sm text-white/60 mb-4 font-geist">EP • 2024</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
              5:28
            </span>
<span>•</span>
<span>210k plays</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center group">
        View All Tracks
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</section><section className="z-20 py-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
<img alt="Artist Performance" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/88f22809-2486-4946-8a86-fe71e804680f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
<div>
<div className="text-2xl font-semibold text-white font-geist">1.2M+</div>
<div className="text-sm text-white/60 font-geist">Monthly Listeners</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur border border-white/10 mb-6">
<svg className="w-4 h-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
<span className="text-sm font-normal text-white/90 font-geist">About the Artist</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 font-geist">Crafting Stories Through Sound</h2>
<p className="text-lg text-white/70 mb-6 font-geist">
          For over a decade, I've been exploring the depths of musical expression, blending genres and pushing boundaries to create something truly unique.
        </p>
<p className="text-base text-white/60 mb-8 font-geist">
          From intimate acoustic sessions to electrifying live performances, every note is an invitation to feel something real. My music draws from personal experiences, cultural influences, and the raw emotion of human connection.
        </p>
<div className="flex flex-wrap gap-4 mb-8">
<div className="flex items-center gap-2 text-white/80">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-normal font-geist">15+ Awards</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<span className="text-sm font-normal font-geist">50+ Countries</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
<span className="text-sm font-normal font-geist">200+ Shows</span>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal font-geist bg-white text-black rounded-full pt-3 pr-6 pb-3 pl-6 items-center group hover:text-black">
            Learn More
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center">
            Watch Video
            <svg className="w-4 h-4" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
</div>
</div>
</div>
</section><section className="z-20 py-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur border border-white/10 mb-6">
<svg className="w-4 h-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15V6"></path>
<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
<path d="M12 12H3"></path>
<path d="M16 6H3"></path>
<path d="M12 18H3"></path>
</svg>
<span className="text-sm font-normal text-white/90 font-geist">Upcoming Events</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4 font-geist">Tour Dates</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto font-geist">Experience the music live. Join us at upcoming shows and events.</p>
</div>
<div className="space-y-4">

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-3xl font-semibold text-white font-geist">24</div>
<div className="text-xs text-white/60 font-geist uppercase">Mar</div>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-geist">Summer Nights Festival</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Los Angeles, CA
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                    8:00 PM
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Get Tickets
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-3xl font-semibold text-white font-geist">31</div>
<div className="text-xs text-white/60 font-geist uppercase">Mar</div>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-geist">Acoustic Sessions</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Nashville, TN
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                    7:30 PM
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Get Tickets
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-3xl font-semibold text-white font-geist">12</div>
<div className="text-xs text-white/60 font-geist uppercase">Apr</div>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-geist">Rooftop Live</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    New York, NY
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                    9:00 PM
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex gap-2 text-sm font-normal font-geist text-white/40 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 bg-white/5 items-center">
              Sold Out
            </span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-3xl font-semibold text-white font-geist">28</div>
<div className="text-xs text-white/60 font-geist uppercase">Apr</div>
</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-1 font-geist">Music Hall Performance</h3>
<div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-geist">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Chicago, IL
                  </span>
<span>•</span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                    7:00 PM
                  </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal font-geist bg-white text-black rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center group">
              Get Tickets
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center group">
        View All Events
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</section><footer className="border-t border-white/10 bg-neutral-950">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="text-2xl font-semibold tracking-tight font-geist mb-4">Melody</div>
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
<p className="text-sm text-white/40 font-geist">© 2024 Melody. All rights reserved.</p>
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
