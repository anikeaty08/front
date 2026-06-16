import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburgerIcon = document.getElementById('hamburgerIcon');
      const closeIcon = document.getElementById('closeIcon');
      const body = document.body;
      let isMenuOpen = false;

      function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
          openMenu();
        } else {
          closeMenu();
        }
      }

      function openMenu() {
        // Show menu
        mobileMenu.classList.remove('opacity-0', 'invisible');
        mobileMenu.classList.add('opacity-100', 'visible');
        
        // Toggle icons
        hamburgerIcon.style.opacity = '0';
        hamburgerIcon.style.transform = 'rotate(-90deg)';
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'rotate(0deg)';
        
        // Prevent body scroll
        body.style.overflow = 'hidden';
        
        // Animate menu items
        const menuItems = mobileMenu.querySelectorAll('nav a, .flex.flex-col.items-center.space-y-4');
        menuItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'all 0.3s ease-out';
          }, index * 100);
        });
        
        // Scale animation for menu background
        mobileMenu.style.transform = 'scale(1)';
      }

      function closeMenu() {
        // Hide menu items first
        const menuItems = mobileMenu.querySelectorAll('nav a, .flex.flex-col.items-center.space-y-4');
        menuItems.forEach((item) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(1rem)';
        });
        
        // Hide menu after animation
        setTimeout(() => {
          mobileMenu.classList.add('opacity-0', 'invisible');
          mobileMenu.classList.remove('opacity-100', 'visible');
        }, 200);
        
        // Toggle icons
        hamburgerIcon.style.opacity = '1';
        hamburgerIcon.style.transform = 'rotate(0deg)';
        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'rotate(90deg)';
        
        // Restore body scroll
        body.style.overflow = '';
        
        // Scale animation for menu background
        mobileMenu.style.transform = 'scale(0.95)';
      }

      // Toggle menu on button click
      mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      });

      // Close menu when clicking on menu background
      mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu || e.target.closest('.absolute.inset-0')) {
          closeMenu();
          isMenuOpen = false;
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
          closeMenu();
          isMenuOpen = false;
        }
      });

      // Close menu when clicking on navigation links
      const navLinks = mobileMenu.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMenu();
          isMenuOpen = false;
        });
      });

      // Handle window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
          closeMenu();
          isMenuOpen = false;
        }
      });
    });
  

!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="relative">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-gradient-to-b from-sky-500/10 to-indigo-500/0 blur-3xl"></div>
<div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-violet-500/0 blur-3xl"></div>
<div className="absolute -bottom-48 -right-20 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tl from-cyan-500/10 to-blue-500/0 blur-3xl"></div>
</div>
<header className="relative w-full">
<nav className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between" id="aura-emfqp0nj2">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/62b89e3f-7ef8-49ca-8e45-8145582e88f5_800w.jpg)] bg-cover rounded invert-0" href="/home"></a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-300" href="/features">Features</a>
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-300" href="/how-it-works">How It Works</a>
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-300" href="/roadmap">Roadmap</a>
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-300" href="/pricing">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm font-medium transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 text-sm font-medium text-white tracking-tight bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" href="#">Get started</a>
</div>
<button aria-label="Toggle menu" className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all duration-300 z-50 relative" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5 transition-all duration-300" fill="none" height="24" id="hamburgerIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x h-5 w-5 absolute inset-0 m-auto opacity-0 transition-all duration-300 transform rotate-90" fill="none" height="24" id="closeIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</nav>

<div className="fixed inset-0 z-40 bg-neutral-950/90 backdrop-blur-md opacity-0 invisible transition-all duration-300" id="mobileMenu">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 to-neutral-900/95"></div>
<div className="relative h-full flex flex-col justify-center items-center">

<nav className="flex flex-col items-center space-y-8 mb-12">
<a className="text-2xl font-medium text-white hover:text-sky-300 transition-all duration-300 transform hover:scale-110 opacity-0 translate-y-4" href="/features" style={{animationDelay: '100ms'}}>Features</a>
<a className="text-2xl font-medium text-white hover:text-sky-300 transition-all duration-300 transform hover:scale-110 opacity-0 translate-y-4" href="/how-it-works" style={{animationDelay: '200ms'}}>How It Works</a>
<a className="text-2xl font-medium text-white hover:text-sky-300 transition-all duration-300 transform hover:scale-110 opacity-0 translate-y-4" href="/roadmap" style={{animationDelay: '300ms'}}>Roadmap</a>
<a className="text-2xl font-medium text-white hover:text-sky-300 transition-all duration-300 transform hover:scale-110 opacity-0 translate-y-4" href="/pricing" style={{animationDelay: '400ms'}}>Pricing</a>
</nav>

<div className="flex flex-col items-center space-y-4 opacity-0 translate-y-4" style={{animationDelay: '500ms'}}>
<a className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-lg font-medium text-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center" href="#">Sign in</a>
<a className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 min-w-[200px] text-center" href="#">Get started</a>
</div>
</div>
</div>

</header><section className="relative px-4">
<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-200 bg-center bg-neutral-900/60 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0f8e8ac3-0766-4194-8869-99007184ab6d_3840w.jpg)] max-w-7xl bg-cover rounded-3xl mt-20 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{height: '600px'}}>

<div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-slate-900 to-neutral-950">
<div data-us-project="FVRYYxG9GtLu24O4v6QA" style={{width: '1280px', height: '720px'}}></div>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(20vw, 280px)', lineHeight: '0.8', color: 'rgba(56, 189, 248, 0.3)'}}>PULSE</span>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6 animate-fadeIn animation-delay-600" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(20vw, 280px)', lineHeight: '0.8', color: 'rgba(56, 189, 248, 0.3)'}}>PULSE</span>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

<div className="lg:col-span-7">
<h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] animate-fadeInLeft animation-delay-300 font-light text-zinc-100 tracking-tighter" style={{}}>
        Personalized Wellness That Adapts to You</h1>
</div>

</div>
</section><div className="md:pt-24 max-w-7xl mr-auto ml-auto pt-16">
<div className="mx-auto max-w-3xl text-center">
<h1 className="md:text-6xl animate-pulse text-4xl text-slate-100 tracking-tight px-4" style={{animation: 'fadeInUp 1.2s ease-out, pulse 3s infinite'}}>
<span className="bg-clip-text animate-pulse font-light italic text-transparent font-serif bg-gradient-to-r from-sky-400 to-indigo-400" onmouseout="this.style.filter='none'" onmouseover="this.style.filter='drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))'" style={{filter: 'none'}}>Personalized Wellness</span> at Your Fingertips — PulseNova
    </h1>
<p className="md:text-lg transition-all duration-500 hover:text-slate-300 text-base font-light text-slate-400 tracking-tight mt-5 px-4" style={{animation: 'fadeInUp 1.5s ease-out'}}>
      A cohesive platform for proactive health. PulseNova blends real‑time biometrics, guidance, and community to help people feel better and live stronger.
    </p>
</div>

<div className="md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 items-start" style={{animation: 'fadeIn 2s ease-out'}}>

<div className="md:space-y-8 space-y-6">

<div className="relative md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-sky-400/30 hover:scale-105 group cursor-pointer bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(14, 165, 233, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex gap-3 items-start">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-sky-500/25 group-hover:ring-sky-500/40 group-hover:scale-110">
<svg className="lucide lucide-users w-[20px] h-[20px] transition-all duration-300 group-hover:text-sky-300" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-sky-300" style={{}}>Members Join PulseNova</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>People start with a quick baseline and daily check‑ins that adapt to their routine.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-indigo-400/30 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(99, 102, 241, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-indigo-500/25 group-hover:ring-indigo-500/40 group-hover:scale-110">
<svg className="lucide lucide-brain-circuit lucide-users w-[20px] h-[20px] transition-all duration-300 group-hover:text-indigo-300" data-icon-replaced="true" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-indigo-300" style={{}}>Nova Insight Engine</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Contextual AI turns signals into actions, continuously learning from outcomes.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-emerald-400/30 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(16, 185, 129, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/25 group-hover:ring-emerald-500/40 group-hover:scale-110 group-hover:rotate-45">
<svg className="lucide lucide-rotate-cw w-[20px] h-[20px] transition-all duration-300 group-hover:text-emerald-300" data-icon-replaced="true" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-emerald-300" style={{}}>Value Loop</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Better guidance drives better habits, creating a feedback loop of improvement.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-400/30 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(147, 51, 234, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-purple-500/25 group-hover:ring-purple-500/40 group-hover:scale-110">
<svg className="lucide lucide-badge-check w-[20px] h-[20px] transition-all duration-300 group-hover:text-purple-300" data-icon-replaced="true" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-purple-300" style={{}}>Membership Access</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Simple monthly plan unlocks the coach, biomarkers dashboard, and premium insights.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/30 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(245, 158, 11, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-yellow-500/25 group-hover:ring-yellow-500/40 group-hover:scale-110">
<svg className="lucide lucide-coins w-[20px] h-[20px] transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" data-icon-replaced="true" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-yellow-300" style={{}}>Community Treasury</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Shared incentives fund programs that demonstrate real, measurable impact.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(6, 182, 212, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/25 group-hover:ring-cyan-500/40 group-hover:scale-110 group-hover:animate-bounce">
<svg className="lucide lucide-watch w-[20px] h-[20px] transition-all duration-300 group-hover:text-cyan-300" data-icon-replaced="true" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v2.2l1.6 1"></path><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-cyan-300" style={{}}>Wearables Sync</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Connect your watch and rings for seamless heart, sleep, and activity data.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="sticky top-6">
<div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl shadow-sky-900/20 transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:shadow-sky-500/30 hover:border-sky-400/30 group">
<div className="relative overflow-hidden">
<img alt="Futuristic portrait with neon accents" className="h-80 w-full object-cover md:h-[28rem] transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4b7db9a-ceb9-4365-be76-2cadddbc41e5_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="p-6 md:p-7 bg-gradient-to-t from-slate-900/50 to-transparent backdrop-blur-sm">
<div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-300 transition-colors duration-300">
<svg className="lucide lucide-sparkles h-4 w-4 text-sky-400 animate-pulse group-hover:scale-125 transition-transform duration-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-sm transition-transform duration-300 group-hover:translateX-1" style={{}}>Nova adapts to your day. No overwhelm. Only momentum.</p>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-3 transition-all duration-300 hover:bg-white/10 hover:border-sky-400/30 hover:scale-105 group cursor-pointer">
<p className="text-xs text-slate-400 group-hover:text-sky-300 transition-colors duration-300" style={{}}>Avg HRV</p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-100 group-hover:text-sky-200 transition-all duration-300" style={{animation: 'countUp 2s ease-out'}}>72 ms</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/30 hover:scale-105 group cursor-pointer">
<p className="text-xs text-slate-400 group-hover:text-emerald-300 transition-colors duration-300" style={{}}>Sleep Score</p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-100 group-hover:text-emerald-200 transition-all duration-300" style={{animation: 'countUp 2.5s ease-out'}}>88</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30 hover:scale-105 group cursor-pointer">
<p className="text-xs text-slate-400 group-hover:text-purple-300 transition-colors duration-300" style={{}}>Readiness</p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-100 group-hover:text-purple-200 transition-all duration-300" style={{}}>High</p>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 text-sm font-medium text-white tracking-tight bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" href="#" onclick="this.style.animation='bounce 0.6s'" onmouseout="this.style.transform='scale(1) translateY(0)'" onmouseover="this.style.transform='scale(1.05) translateY(-2px)'" style={{transform: 'scale(1) translateY(0px)'}}>
<svg className="lucide lucide-rocket h-4 w-4 transition-transform duration-300 hover:rotate-12" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Get Started
              </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium tracking-tight text-slate-200 border border-white/10 hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 hover:scale-105 active:scale-95" href="#" onmouseout="this.style.transform='scale(1) translateY(0)'" onmouseover="this.style.transform='scale(1.05) translateY(-2px)'" style={{transform: 'scale(1) translateY(0px)'}}>
<svg className="lucide lucide-play-circle h-4 w-4 transition-transform duration-300 hover:scale-110" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                See How It Works
              </a>
</div>
</div>
</div>
</div>
</div>

<div className="md:space-y-8 space-y-6">
<div className="relative md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/30 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 group cursor-pointer bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(245, 158, 11, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-yellow-500/25 group-hover:ring-yellow-500/40 group-hover:scale-110">
<svg className="lucide lucide-star w-[20px] h-[20px] transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-yellow-300" style={{}}>Trust and Usage Grow</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Clear wins build confidence, increasing engagement and retention.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-red-400/30 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(239, 68, 68, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-red-500/25 group-hover:ring-red-500/40 group-hover:scale-110 group-hover:animate-pulse">
<svg className="lucide lucide-heart-pulse w-[20px] h-[20px] transition-all duration-300 group-hover:text-red-300" data-icon-replaced="true" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-red-300" style={{}}>Health Gains</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Members report better energy, resilience, and lower stress markers.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-pink-400/30 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(236, 72, 153, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-pink-500/25 group-hover:ring-pink-500/40 group-hover:scale-110">
<svg className="lucide lucide-message-square-heart w-[20px] h-[20px] transition-all duration-300 group-hover:text-pink-300" data-icon-replaced="true" data-lucide="message-square-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-pink-300" style={{}}>Stories &amp; Proof</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Authentic testimonials amplify reach and inform product updates.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-green-400/30 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(34, 197, 94, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-green-500/25 group-hover:ring-green-500/40 group-hover:scale-110">
<svg className="lucide lucide-user-plus w-[20px] h-[20px] transition-all duration-300 group-hover:text-green-300" data-icon-replaced="true" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-green-300" style={{}}>New Members via CreatorHub</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Partner creators bring their audiences to PulseNova with co‑branded programs.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-blue-400/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(59, 130, 246, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-blue-500/25 group-hover:ring-blue-500/40 group-hover:scale-110">
<svg className="lucide lucide-building-2 h-5 w-5 text-slate-300 transition-all duration-300 group-hover:text-blue-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-blue-300" style={{}}>Enterprise Pilots</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>Employers sponsor pilots to reduce burnout and improve productivity.</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-teal-400/30 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group cursor-pointer" onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.boxShadow=''" onmouseover="this.style.transform='scale(1.05) translateY(-5px)'; this.style.boxShadow='0 20px 40px rgba(20, 184, 166, 0.2)'" style={{transform: 'scale(1) translateY(0px)'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 flex bg-sky-500/15 w-10 h-10 ring-sky-500/20 ring-1 rounded-xl items-center justify-center transition-all duration-300 group-hover:bg-teal-500/25 group-hover:ring-teal-500/40 group-hover:scale-110 group-hover:rotate-6">
<svg className="lucide lucide-stethoscope w-[20px] h-[20px] transition-all duration-300 group-hover:text-teal-300" data-icon-replaced="true" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div className="transition-all duration-300 group-hover:transform group-hover:translateX-2">
<h3 className="text-lg md:text-xl tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-teal-300" style={{}}>Clinical Integrations</h3>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300" style={{}}>API links to EHRs and labs enable data‑driven decisions and referrals.</p>
</div>
</div>
</div>
</div>
</div>

<div className="md:mt-24 md:pt-12 border-white/10 border-t mt-16 mb-8 pt-10">
<div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 p-6 md:p-8 transition-all duration-700 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/20" style={{perspective: '1000px'}}>
<div className="relative transform-style-preserve-3d transition-all duration-500 hover:rotate-x-5 hover:rotate-y-10 shadow-sky-900/20 bg-gradient-to-br from-sky-500/10 to-indigo-500/5 border-sky-400/30 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl hover:shadow-sky-500/30">

<div className="absolute top-6 right-6 h-16 w-16 bg-white/95 border-2 border-sky-400/50 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:rotate-12 cursor-pointer" onclick="this.classList.toggle('animate-bounce')" style={{transform: 'translate3d(0, 0, 80px)'}}>
<span className="text-xs font-semibold text-sky-500 uppercase tracking-wider" style={{}}>Dec</span>
<span className="text-xl font-bold text-sky-600" style={{}}>25</span>
</div>

<div className="transform-style-preserve-3d">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
<div className="transform-style-preserve-3d">
<h2 className="text-2xl md:text-3xl tracking-tight text-slate-100 transition-all duration-500 hover:text-sky-200" style={{transform: 'translate3d(0px, 0px, 50px)'}}>Ready to try PulseNova?</h2>
<p className="mt-1 text-sm md:text-base text-slate-400 transition-all duration-500 hover:text-slate-300" style={{transform: 'translate3d(0px, 0px, 30px)'}}>Start free. Connect a wearable or just use your phone. Cancel anytime.</p>
</div>
<div className="flex items-center gap-3 transform-style-preserve-3d">
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium tracking-tight text-slate-200 border border-white/10 hover:bg-white/10 hover:border-sky-400/30 transition-all duration-500 hover:scale-105 active:scale-95" href="#" onmouseout="this.style.transform='translate3d(0px, 0px, 20px) scale(1)'" onmouseover="this.style.transform='translate3d(0px, -5px, 20px) scale(1.05)'" style={{transform: 'translate3d(0px, 0px, 20px) scale(1)'}}>
<svg className="lucide lucide-download h-4 w-4 transition-transform duration-300 hover:animate-bounce" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Download App
              </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:from-sky-400 hover:to-indigo-400 transition-all duration-500 shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-sky-500/40 active:scale-95" href="#" onclick="this.style.animation='pulse 0.8s'" onmouseout="this.style.transform='translate3d(0px, 0px, 40px) scale(1)'; this.style.boxShadow='0 10px 15px rgba(14, 165, 233, 0.3)'" onmouseover="this.style.transform='translate3d(0px, -5px, 40px) scale(1.1)'; this.style.boxShadow='0 25px 50px rgba(14, 165, 233, 0.4)'" style={{transform: 'translate3d(0px, 0px, 40px) scale(1)', boxShadow: 'rgba(14, 165, 233, 0.3) 0px 10px 15px'}}>
<svg className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 hover:translateX-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Create Account
              </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="md:py-24 max-w-7xl mr-auto ml-auto pt-16 pb-16">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 animate-pulse">
<svg className="lucide lucide-route h-3.5 w-3.5 text-sky-300 transition-transform duration-300 hover:scale-110" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="text-xs font-medium text-slate-300" style={{}}>Product Roadmap</span>
</div>
<h2 className="mt-4 text-3xl md:text-5xl tracking-tight text-slate-100 transition-all duration-700 hover:scale-105" style={{}}>
      Building the Future of <span className="bg-clip-text animate-pulse font-light italic text-transparent font-serif bg-gradient-to-r from-sky-400 to-indigo-400" style={{}}>Personalized Wellness</span>
</h2>
<p className="mt-3 text-sm md:text-base text-slate-400 transition-opacity duration-500 hover:text-slate-300" style={{}}>
      Our development roadmap focused on delivering real health outcomes through AI-driven insights and seamless user experiences.
    </p>
</div>

<div className="relative mx-auto mt-10 max-w-4xl">
<div className="absolute left-0 right-0 top-[14px] h-0.5 bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-slate-500/30 transition-all duration-1000 hover:from-sky-500/70 hover:via-indigo-500/70"></div>
<div className="relative grid grid-cols-4 items-center">

<div className="flex justify-center group">
<div className="h-7 w-7 rounded-lg bg-sky-500/20 border border-sky-400/40 ring-1 ring-sky-400/30 backdrop-blur-sm flex items-center justify-center text-sky-300 transition-all duration-300 hover:scale-125 hover:bg-sky-500/30 hover:ring-sky-400/50 cursor-pointer" onclick="this.style.transform='scale(1.3) rotate(360deg)'; setTimeout(() =&gt; this.style.transform='scale(1.25)', 300)">
<svg className="lucide lucide-check h-4 w-4 transition-transform duration-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>

<div className="flex justify-center group">
<div className="transition-all duration-300 hover:scale-125 hover:bg-indigo-500/30 hover:ring-indigo-400/50 cursor-pointer animate-pulse bg-indigo-500/20 w-7 h-7 border-indigo-400/50 border ring-indigo-400/30 ring-1 rounded-lg backdrop-blur-sm" onclick="this.classList.toggle('animate-bounce')"></div>
</div>

<div className="flex justify-center group">
<div className="transition-all duration-300 hover:scale-125 hover:bg-indigo-500/30 hover:ring-indigo-400/50 cursor-pointer animate-pulse ring-indigo-400/30 ring-1 bg-indigo-500/20 w-7 h-7 border-indigo-400/50 border rounded-lg backdrop-blur-sm" onmouseout="this.style.boxShadow=''" onmouseover="this.style.boxShadow='0 0 20px rgba(255,255,255,0.3)'" style={{}}></div>
</div>

<div className="flex justify-center group">
<div className="transition-all duration-300 hover:scale-125 hover:bg-indigo-500/30 hover:ring-indigo-400/50 cursor-pointer animate-pulse bg-indigo-500/20 w-7 h-7 border-indigo-400/50 border ring-indigo-400/30 ring-1 rounded-lg backdrop-blur-sm" onmouseout="this.style.boxShadow=''" onmouseover="this.style.boxShadow='0 0 20px rgba(255,255,255,0.3)'" style={{}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">

<div className="md:p-7 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-rotate-y-2 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 perspective-1000" onclick="this.classList.toggle('animate-bounce'); setTimeout(() =&gt; this.classList.remove('animate-bounce'), 1000)" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.background='rgba(56, 189, 248, 0.05)'" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100 transition-colors duration-300 hover:text-sky-300" style={{}}>Q1 Foundation</h3>
<div className="mt-4 space-y-5">
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-sky-300" style={{}}>Core Platform</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>User onboarding flow, biometric sync, and Nova AI baseline training.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-sky-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-sky-300" style={{}}>Wearable Integration</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Real-time sync with Apple Watch, Oura Ring, and Fitbit devices.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-sky-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-sky-300" style={{}}>Beta Launch</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Limited beta with 1,000 early members for feedback and iteration.</p>
</div>
</div>
</div>

<div className="md:p-7 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-rotate-y-2 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 perspective-1000" onclick="this.classList.toggle('animate-pulse'); setTimeout(() =&gt; this.classList.remove('animate-pulse'), 2000)" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.background='rgba(99, 102, 241, 0.05)'" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100 transition-colors duration-300 hover:text-indigo-300" style={{}}>Q2 Intelligence</h3>
<div className="mt-4 space-y-5">
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-indigo-300" style={{}}>Nova AI Enhancement</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Advanced pattern recognition and personalized recommendation engine.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-indigo-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-indigo-300" style={{}}>CreatorHub Launch</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Partner platform for health influencers and coaches to join ecosystem.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-indigo-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-indigo-300" style={{}}>Mobile Apps</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Native iOS and Android apps with offline mode and push notifications.</p>
</div>
</div>
</div>

<div className="md:p-7 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-rotate-y-2 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 perspective-1000" onclick="this.style.animation='bounce 1s'; setTimeout(() =&gt; this.style.animation='', 1000)" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.transform='scale(1)'" onmouseover="this.style.background='rgba(139, 92, 246, 0.05)'; this.style.transform='scale(1.02) rotateY(2deg)'" style={{background: 'rgba(255, 255, 255, 0.05)', transform: 'scale(1)'}}>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100 transition-colors duration-300 hover:text-violet-300" style={{}}>Q3 Scale</h3>
<div className="mt-4 space-y-5">
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-violet-300" style={{}}>Public Launch</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Full platform launch with membership tiers and community features.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-violet-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-violet-300" style={{}}>Community Treasury</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Incentive system rewarding healthy behaviors and community engagement.</p>
</div>
<div className="border-t border-dashed border-white/10 transition-colors duration-300 hover:border-violet-400/30"></div>
<div className="transition-all duration-300 hover:translate-x-2">
<p className="text-base font-medium text-slate-100 transition-colors duration-300 hover:text-violet-300" style={{}}>Enterprise Pilot</p>
<p className="mt-1 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300" style={{}}>Corporate wellness programs with ROI tracking and team challenges.</p>
</div>
</div>
</div>
</div>
</div>
</section><footer className="relative bg-[#000000] border-white/10 border-t mt-24 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="lg:col-span-1">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/62b89e3f-7ef8-49ca-8e45-8145582e88f5_800w.jpg)] bg-cover rounded invert-0" href="/home"></a>
<p className="text-sm text-slate-400 mb-6 max-w-xs" style={{}}>
          Personalized wellness at your fingertips. AI-driven insights for better health outcomes.
        </p>
<div className="flex items-center gap-4">
<a className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-base font-semibold tracking-tight text-slate-100 mb-4" style={{}}>Product</h3>
<nav className="space-y-3">
<a className="block hover:text-slate-100 transition-colors text-sm text-slate-400" href="#features" style={{}}>Features</a>
<a className="block hover:text-slate-100 transition-colors text-sm text-slate-400" href="#how-it-works" style={{}}>How It Works</a>
<a className="block hover:text-slate-100 transition-colors text-sm text-slate-400" href="#roadmap" style={{}}>Roadmap</a>
<a className="block hover:text-slate-100 transition-colors text-sm text-slate-400" href="#pricing" style={{}}>Pricing</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#integrations" style={{}}>Integrations</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#api" style={{}}>API</a>
</nav>
</div>

<div className="">
<h3 className="text-base font-semibold tracking-tight text-slate-100 mb-4" style={{}}>Company</h3>
<nav className="space-y-3">
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#about" style={{}}>About</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#blog" style={{}}>Blog</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#careers" style={{}}>Careers</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#press" style={{}}>Press</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#partners" style={{}}>Partners</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#contact" style={{}}>Contact</a>
</nav>
</div>

<div className="">
<h3 className="text-base font-semibold tracking-tight text-slate-100 mb-4" style={{}}>Resources</h3>
<nav className="space-y-3">
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#help" style={{}}>Help Center</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#community" style={{}}>Community</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#guides" style={{}}>Guides</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#webinars" style={{}}>Webinars</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#status" style={{}}>Status</a>
<a className="block text-sm text-slate-400 hover:text-slate-100 transition-colors" href="#changelog" style={{}}>Changelog</a>
</nav>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<div className="max-w-md">
<h3 className="text-base font-semibold tracking-tight text-slate-100 mb-2" style={{}}>Stay updated</h3>
<p className="text-sm text-slate-400 mb-4" style={{}}>Get the latest wellness insights and product updates delivered to your inbox.</p>
<div className="flex gap-3">
<input className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/50 focus:outline-none transition-colors" placeholder="Enter your email" type="email"/>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-medium tracking-tight text-white hover:from-sky-400 hover:to-indigo-400 transition-colors shrink-0" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
            Subscribe
          </button>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
<span className="" style={{}}>© 2025 PulseNova. All rights reserved.</span>
<a className="hover:text-slate-100 transition-colors" href="#privacy" style={{}}>Privacy Policy</a>
<a className="hover:text-slate-100 transition-colors" href="#terms" style={{}}>Terms of Service</a>
<a className="hover:text-slate-100 transition-colors" href="#cookies" style={{}}>Cookie Policy</a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-400">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span style={{}}>All systems operational</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-gradient-to-t from-sky-500/5 to-transparent blur-3xl"></div>
<div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-gradient-to-t from-indigo-500/5 to-transparent blur-3xl"></div>
</div>
</footer>
</main>




    </>
  );
}
