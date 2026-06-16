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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
              


            window.switchTab = function(index) {
              document.querySelectorAll('.scenario-tab').forEach(tab => {
                const isSelected = tab.getAttribute('data-index') == index;
                if(isSelected) {
                  tab.classList.add('border-orange-600', 'bg-zinc-900/30');
                  tab.classList.remove('border-transparent');
                  tab.querySelector('.text-base').classList.remove('text-zinc-400');
                  tab.querySelector('.text-base').classList.add('text-white');
                } else {
                  tab.classList.remove('border-orange-600', 'bg-zinc-900/30');
                  tab.classList.add('border-transparent');
                  tab.querySelector('.text-base').classList.add('text-zinc-400');
                  tab.querySelector('.text-base').classList.remove('text-white');
                }
              });
              document.querySelectorAll('.scenario-panel').forEach(panel => {
                if(panel.getAttribute('data-index') == index) {
                  panel.classList.remove('opacity-0', 'pointer-events-none', 'z-0', 'translate-x-4');
                  panel.classList.add('opacity-100', 'z-10', 'translate-x-0');
                } else {
                  panel.classList.add('opacity-0', 'pointer-events-none', 'z-0', 'translate-x-4');
                  panel.classList.remove('opacity-100', 'z-10', 'translate-x-0');
                }
              });
            };
            window.toggleAccordion = function(btn) {
              const content = btn.nextElementSibling;
              const icon = btn.querySelector('iconify-icon');
              const isHidden = content.classList.contains('hidden');
              // Close others
              document.querySelectorAll('.lg\\:hidden .hidden').forEach(el => {
                 if(el.parentElement !== btn.parentElement) {
                    el.classList.add('hidden');
                    el.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                 }
              });
              if(isHidden) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
              } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
              }
            };
          


                !function(){if(window.UnicornStudio){try{window.UnicornStudio.init()}catch(i){}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
              


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");

              // Counter Animation (smoother + slower)
              if (entry.target.hasAttribute("data-sys-counter")) {
                const target = parseInt(entry.target.getAttribute("data-sys-counter"));
                const suffix = entry.target.getAttribute("data-sys-suffix") || "";
                const duration = 2800;
                const start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 5);

                  entry.target.innerText = Math.floor(start + (target - start) * ease) + suffix;

                  if (progress < 1) requestAnimationFrame(animate);
                  else entry.target.innerText = target + suffix;
                };
                requestAnimationFrame(animate);
              }

              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

        document.querySelectorAll(".sys-reveal, .sys-flicker-anim, [data-sys-counter], .sys-bar-fill").forEach(el => observer.observe(el));
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
          btn.addEventListener('click', () => {
            menu.classList.toggle('translate-x-full');
            const icon = btn.querySelector('iconify-icon');
            if (menu.classList.contains('translate-x-full')) {
              icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            } else {
              icon.setAttribute('icon', 'solar:close-square-linear');
            }
          });
        }
      });
    


      document.addEventListener('DOMContentLoaded', () => { const tBtn = document.getElementById('tablet-menu-btn'); const tMenu = document.getElementById('tablet-menu'); if (tBtn && tMenu) { tBtn.addEventListener('click', (e) => { e.stopPropagation(); const isHidden = tMenu.classList.contains('hidden'); if(isHidden) { tMenu.classList.remove('hidden'); tMenu.classList.add('flex'); tBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:close-square-linear'); } else { tMenu.classList.add('hidden'); tMenu.classList.remove('flex'); tBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear'); } }); document.addEventListener('click', (e) => { if (!tMenu.classList.contains('hidden') && !tMenu.contains(e.target) && !tBtn.contains(e.target)) { tMenu.classList.add('hidden'); tMenu.classList.remove('flex'); tBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear'); } }); document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !tMenu.classList.contains('hidden')) { tMenu.classList.add('hidden'); tMenu.classList.remove('flex'); tBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear'); } }); } });
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              document.querySelectorAll('.nav-link').forEach(link => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('border-orange-600', isActive);
                link.classList.toggle('text-orange-600', isActive);
                link.classList.toggle('bg-zinc-900', isActive);
                link.classList.toggle('text-zinc-600', !isActive);
                link.classList.toggle('border-zinc-800', !isActive);
              });
            }
          });
        }, { rootMargin: '-45% 0px -50% 0px' });

        ['hero', 'features', 'deployments', 'flow', 'validation', 'access'].forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-50 h-16 border-b border-zinc-800 bg-[#050505]/95 backdrop-blur-sm flex items-center justify-between sticky top-0">

<div className="flex items-center h-full pl-6 pr-8 border-r border-zinc-800 bg-[#050505]">
<a className="flex items-center group" href="#">
<img alt="AXION" className="group-hover:opacity-100 transition-opacity opacity-90 w-auto h-32 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5deecba8-dc0a-4556-9777-de9a588a4428_1600w.png"/>
</a>
<button aria-label="Toggle Tablet Navigation" className="hidden md:flex lg:hidden ml-6 w-10 h-10 border border-zinc-800 bg-zinc-900/30 items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-600" id="tablet-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
<div className="hidden lg:flex items-center ml-6 px-3 py-1 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-sm gap-2">
<span className="text-[10px] font-mono text-zinc-600 leading-none">
            [
          </span>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
            ENV: PRODUCTION
          </span>
<span className="text-[10px] font-mono text-zinc-600 leading-none">
            ]
          </span>
</div>
</div>

<nav className="hidden lg:flex items-center h-full flex-1 justify-center">
<div className="flex h-full items-center border-x border-zinc-800/50">
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#">
            System Core
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#">
            Deployments
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#">
            Security
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#">
            Pricing
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors relative group" href="#">
            Docs
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
</div>
</nav>

<div className="hidden md:flex items-center h-full border-l border-zinc-800 bg-[#050505]">
<a className="flex items-center px-8 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border-r border-zinc-800 hover:bg-zinc-900/30" href="#">
          Sign In
        </a>
<button className="h-full px-8 bg-orange-600 text-white text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center gap-2 group shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] font-medium">
          Request Demo
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>

<button className="md:hidden p-0 w-16 h-full text-zinc-400 hover:text-white border-l border-zinc-800 bg-[#050505] flex items-center justify-center transition-colors hover:bg-zinc-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden lg:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-zinc-800 z-40 flex-col shadow-2xl" id="tablet-menu">
<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none"></div>
<div className="flex items-center justify-between px-8 py-3 border-b border-zinc-800 bg-zinc-900/20 relative z-10">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
            Navigation_Module
          </span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
              PROD ONLINE
            </span>
</div>
</div>
<div className="flex flex-col relative z-10">
<a className="group flex items-center px-8 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors" href="#">
<span className="text-[10px] font-mono text-zinc-600 group-hover:text-orange-600 w-8 transition-colors">
              01.
            </span>
<span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider">
              System Core
            </span>
</a>
<a className="group flex items-center px-8 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors" href="#">
<span className="text-[10px] font-mono text-zinc-600 group-hover:text-orange-600 w-8 transition-colors">
              02.
            </span>
<span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider">
              Deployments
            </span>
</a>
<a className="group flex items-center px-8 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors" href="#">
<span className="text-[10px] font-mono text-zinc-600 group-hover:text-orange-600 w-8 transition-colors">
              03.
            </span>
<span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider">
              Security
            </span>
</a>
<a className="group flex items-center px-8 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors" href="#">
<span className="text-[10px] font-mono text-zinc-600 group-hover:text-orange-600 w-8 transition-colors">
              04.
            </span>
<span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider">
              Pricing
            </span>
</a>
<a className="group flex items-center px-8 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors" href="#">
<span className="text-[10px] font-mono text-zinc-600 group-hover:text-orange-600 w-8 transition-colors">
              05.
            </span>
<span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider">
              Docs
            </span>
</a>
</div>
</div>
</header>
<div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#050505] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col border-t border-zinc-800 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<button className="w-full py-4 bg-orange-600 text-white text-xs font-mono uppercase tracking-widest hover:bg-orange-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 font-medium">
          Request Demo
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="flex flex-col border border-zinc-800 bg-zinc-900/20">
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#">
            System Core
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#">
            Deployments
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#">
            Security
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#">
            Pricing
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#">
            Docs
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<a className="block py-4 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white text-center border border-zinc-800 hover:border-zinc-600 transition-colors" href="#">
          Sign In
        </a>
</div>
<div className="mt-auto p-6 border-t border-zinc-800">
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          System Operational
        </div>
</div>
</div>

<main className="relative z-10 flex-1 flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-16 border-r border-zinc-800 bg-[#050505] shrink-0 relative z-40">
<div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col items-center py-12 w-full">

<div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-900 -translate-x-1/2 z-0"></div>

<nav className="flex flex-col gap-10 relative z-10 w-full items-center">
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#hero">
              01
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                Hero
              </div>
</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#features">
              02
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                Features
              </div>
</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#deployments">
              03
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                Deployments
              </div>
</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#flow">
              04
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                System_Flow
              </div>
</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#validation">
              05
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                Validation
              </div>
</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#access">
              06
              <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                Pricing
              </div>
</a>
</nav>

<div className="mt-auto mb-12 flex flex-col items-center gap-4">
<div className="w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
<div className="text-[8px] font-mono text-zinc-700 -rotate-90 whitespace-nowrap tracking-widest uppercase">
              Nav_Module_v4
            </div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 relative z-0">

<div className="relative w-full min-h-[750px] flex items-center border-b border-zinc-800 overflow-hidden bg-[#050505]" id="hero">

<div className="absolute inset-0 z-0">

<div className="aura-background-component w-full h-full absolute inset-0">
<div className="absolute w-full h-full left-0 top-0" data-us-project="hRFfUymDGOHwtFe7evR2"></div>

</div>

<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/25 to-[#050505]/20 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10 pointer-events-none"></div>
</div>

<div className="container lg:px-12 grid grid-cols-1 lg:grid-cols-2 md:pt-32 md:pb-44 h-full z-20 mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col justify-center max-w-2xl">

<div className="flex items-center gap-3 mb-8 sys-reveal sys-rise">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase text-zinc-400 tracking-widest font-mono">CLUSTER: READY <span className="text-zinc-600 mx-2">//</span> SYSTEM ONLINE</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white uppercase tracking-tight leading-[0.9] mb-8 sys-reveal sys-rise sys-delay-100">
                Scale With

                <span className="text-zinc-600">Autonomy</span>
</h1>

<p className="text-base md:text-lg text-zinc-500 font-mono leading-relaxed mb-10 max-w-md border-l-2 border-orange-600 pl-4 sys-reveal sys-rise sys-delay-200">
                Deploy autonomous agents optimized for infrastructure
                scalability. Engineered for precision and zero-latency
                performance.
              </p>

<div className="flex flex-col gap-3 mb-10 sys-reveal sys-rise sys-delay-300">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
<span className="text-xs font-mono text-zinc-300 uppercase tracking-wide">
                    Global distributed infrastructure
                  </span>
</div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
<span className="text-xs font-mono text-zinc-300 uppercase tracking-wide">
                    Autonomous agent orchestration
                  </span>
</div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
<span className="text-xs font-mono text-zinc-300 uppercase tracking-wide">
                    Sub-10ms execution latency
                  </span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 mb-8 sys-reveal sys-rise sys-delay-400">
<button className="group bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-3 font-medium shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                  Initialize Build
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="group bg-transparent border border-zinc-700 hover:border-white text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-3 font-medium">
                  View Documentation
                  <iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-wide pl-1 sys-reveal sys-rise sys-delay-500">
<span>No Credit Card Req.</span>
<span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
<span>Instant Provisioning</span>
</div>
</div>

<div className="hidden lg:flex flex-col items-end justify-center relative h-full pointer-events-none select-none">

<div className="relative w-full max-w-sm perspective-1000 mt-12 mr-8">

<div className="absolute -top-32 right-0 w-64 bg-[#050505]/90 backdrop-blur-sm border border-zinc-800 p-5 z-10 sys-reveal sys-slide-l sys-delay-300 border-l-2 border-l-orange-600">
<div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Active_Nodes
                    </span>
<div className="flex gap-1">
<div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-400">
<span>US-EAST-1</span>
<span className="text-green-500">ONLINE</span>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-400">
<span>EU-WEST-2</span>
<span className="text-green-500">ONLINE</span>
</div>
</div>
</div>

<div className="relative w-80 bg-[#080808] border border-zinc-800 p-6 z-20 shadow-2xl sys-reveal sys-scale sys-delay-200 group hover:border-zinc-700 transition-colors pointer-events-auto">
<div className="absolute -left-px top-6 bottom-6 w-0.5 bg-orange-600"></div>
<div className="flex justify-between items-start mb-6">
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                        System_Health
                      </div>
<div className="text-3xl font-medium text-white tracking-tight">
                        99.99%
                      </div>
</div>
<div className="h-8 w-8 rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center">
<iconify-icon className="text-orange-600 text-lg" icon="solar:server-square-bold"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[9px] font-mono text-zinc-600 uppercase mb-1">
                        Load Status
                      </div>
<div className="w-full bg-zinc-900 h-1">
<div className="bg-orange-600 h-full w-[42%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-white"></div>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-2">
<div className="text-[10px] font-mono text-zinc-400">
                        LATENCY:
                        <span className="text-white">12ms</span>
</div>
<div className="text-[10px] font-mono text-green-500">
                        OPTIMAL
                      </div>
</div>
</div>

<div className="absolute inset-0 bg-orange-600/5 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_3px] pointer-events-none opacity-20"></div>
</div>

<div className="absolute -bottom-24 right-8 w-64 bg-[#050505]/90 backdrop-blur-sm border border-zinc-800 p-4 z-10 sys-reveal sys-slide-l sys-delay-400">
<div className="flex justify-between items-center mb-3">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Deployments
                    </span>
<span className="text-[9px] font-mono text-orange-600">
                      PROCESSING
                    </span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 border-l border-zinc-800 pl-3">
<iconify-icon className="text-orange-600 animate-spin-slow" icon="solar:refresh-circle-linear" width="14"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] text-white font-mono">
                          Build #8842-XC
                        </span>
<span className="text-[8px] text-zinc-600 font-mono">
                          Deploying to Cluster_Alpha...
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-zinc-800"></div>
<div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-zinc-800"></div>
</div>

<section className="flex flex-col bg-[#050505] border-b border-zinc-800" id="features">

<div className="flex flex-col md:px-12 md:flex-row md:items-end md:pt-36 md:pb-28 bg-center bg-gradient-to-r from-white/10 via-white/0 to-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_3840w.jpg?w=800&amp;q=80)] bg-cover border-zinc-800 border-b pt-36 pr-8 pb-28 pl-8 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] gap-x-6 gap-y-6 justify-between" style={{maskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)'}}>
<div className="max-w-2xl">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // Core_Capabilities
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none mb-4">
                Infrastructure
                <span className="text-zinc-600">Primitives</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg">
                The four pillars of the Nexus Engine. Modular, scalable, and
                secure by design.
              </p>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="group flex items-center gap-2 text-[10px] uppercase hover:text-orange-600 transition-colors text-zinc-500 tracking-widest font-mono" href="#deployments">
                Explore All Features
                </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-100 sys-active">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 transition-colors">
                    FIG. 01
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  Data Ingestion
                </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                  Real-time pipelines processing millions of events per second
                  across distributed shards.
                </p>
</div>
<div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
<span>Read Specs</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-200 sys-active">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 transition-colors">
                    FIG. 02
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  Core Processing
                </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                  Autonomous logic engines that adapt to workload demands in
                  sub-millisecond timeframes.
                </p>
</div>
<div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
<span className="">Read Specs</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-300 sys-active">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 transition-colors">
                    FIG. 03
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  Security Protocol
                </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                  SOC2 Type II compliant architecture with AES-256 encryption at
                  rest and in transit.
                </p>
</div>
<div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
<span className="">Read Specs</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-400 sys-active">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 transition-colors">
                    FIG. 04
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  System Telemetry
                </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                  Granular observability with real-time dashboards and
                  predictive anomaly detection.
                </p>
</div>
<div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
<span className="">Read Specs</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</section>
<section className="flex flex-col scroll-mt-16 group bg-[#050505] border-zinc-800 relative" id="deployments">

<div className="flex flex-col md:px-12 md:flex-row md:items-end md:pt-36 md:pb-28 bg-center bg-gradient-to-r from-white/10 via-white/0 to-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_3840w.jpg?w=800&amp;q=80)] bg-cover border-zinc-800 pt-24 pr-8 pb-20 pl-8 gap-x-6 gap-y-6 justify-between" style={{maskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)'}}>
<div className="max-w-2xl">
<div className="text-[10px] uppercase flex gap-2 text-orange-600 tracking-widest font-mono mb-6 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // System_Applications
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none">
                Deployment
                <span className="text-zinc-600">Scenarios</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg mb-4">
                Operational contexts where Nexus Engine delivers measurable
                value across enterprise infrastructure.
              </p>
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-wide">
<iconify-icon className="text-green-500" icon="solar:verified-check-linear"></iconify-icon>
                Used in production across distributed enterprise stacks
              </div>
</div>
<a className="group flex items-center gap-2 text-[10px] uppercase hover:text-orange-600 transition-colors text-zinc-500 tracking-widest font-mono" href="#all-scenarios">
              View All Scenarios
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="hidden lg:grid grid-cols-12 border-t border-zinc-800 min-h-[550px]">

<div className="col-span-4 border-r border-zinc-800 bg-[#050505] flex flex-col">

<button className="scenario-tab group hover:bg-zinc-900/20 transition-all text-left bg-zinc-900/30 w-full border-zinc-800 border-b border-l-2 pt-8 pr-8 pb-8 pl-8" data-index="0" onclick="window.switchTab(0)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
                    DEVOPS_ENV
                  </span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-white uppercase tracking-tight mb-3">
                  Cloud Infrastructure Automation
                </div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-green-500">
                  -63% DEPLOY TIME
                </div>
</button>

<button className="scenario-tab group w-full text-left p-8 border-b border-zinc-800 hover:bg-zinc-900/20 transition-all border-l-2 border-transparent" data-index="1" onclick="window.switchTab(1)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
                    AI_OPS
                  </span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:smart-home-angle-linear" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-zinc-400 group-hover:text-white uppercase tracking-tight mb-3 transition-colors">
                  Autonomous AI Orchestration
                </div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 group-hover:text-green-500 transition-colors">
                  +41% COMPUTE EFFICIENCY
                </div>
</button>

<button className="scenario-tab group w-full text-left p-8 border-b border-zinc-800 hover:bg-zinc-900/20 transition-all border-l-2 border-transparent" data-index="2" onclick="window.switchTab(2)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
                    ENTERPRISE
                  </span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-zinc-400 group-hover:text-white uppercase tracking-tight mb-3 transition-colors">
                  High-Scale System Monitoring
                </div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 group-hover:text-green-500 transition-colors">
                  99.99% UPTIME SLA
                </div>
</button>

<button className="scenario-tab group w-full text-left p-8 border-b border-zinc-800 hover:bg-zinc-900/20 transition-all border-l-2 border-transparent" data-index="3" onclick="window.switchTab(3)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
                    SECURITY
                  </span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-zinc-400 group-hover:text-white uppercase tracking-tight mb-3 transition-colors">
                  Infrastructure Security
                </div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 group-hover:text-green-500 transition-colors">
                  SOC2 TYPE II READY
                </div>
</button>
</div>

<div className="col-span-8 bg-[#080808] relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

<div className="scenario-panel absolute inset-0 p-16 flex flex-col justify-between opacity-100 z-10 transition-all duration-300" data-index="0">
<div className="flex justify-between items-start gap-12">
<div className="max-w-lg">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">
                      Cloud Infrastructure Automation
                    </h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">
                      Automate provisioning, scaling, and monitoring across
                      distributed cloud environments with real-time telemetry.
                      Eliminates manual intervention for routine ops.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Zero-touch Provisioning Pipelines
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Multi-region State Synchronization
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Native GitOps Workflow Integration
                      </li>
</ul>
</div>

<div className="hidden xl:flex w-72 border border-zinc-800 bg-[#050505] p-4 flex-col gap-3 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between border-b border-zinc-800 pb-2 mb-1">
<span className="text-[9px] font-mono text-zinc-500">
                        TERMINAL_OUT
                      </span>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-3/4 bg-zinc-800"></div>
<div className="h-1.5 w-1/2 bg-zinc-800"></div>
<div className="h-1.5 w-full bg-zinc-800"></div>
<div className="h-1.5 w-2/3 bg-orange-900/30 animate-pulse"></div>
</div>
<div className="mt-8 flex justify-between">
<span className="text-[9px] font-mono text-green-500">
                        BUILD_SUCCESS
                      </span>
<span className="text-[9px] font-mono text-zinc-600">
                        14ms
                      </span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="bg-orange-600 text-white px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-colors font-medium">
                    Request Demo
                  </button>
<button className="bg-transparent border border-zinc-700 text-zinc-400 px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                    Read Documentation
                  </button>
</div>
</div>

<div className="scenario-panel absolute inset-0 p-16 flex flex-col justify-between opacity-0 pointer-events-none z-0 transition-all duration-300 transform translate-x-4" data-index="1">
<div className="flex justify-between items-start gap-12">
<div className="max-w-lg">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">
                      Autonomous AI Orchestration
                    </h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">
                      Deploy and manage autonomous AI agents with centralized
                      processing control. Optimize GPU allocation and reduce
                      inference latency dynamically.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Dynamic GPU Resource Allocation
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Automated Model Versioning
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Inference Cost Optimization
                      </li>
</ul>
</div>
<div className="hidden xl:grid w-72 border border-zinc-800 bg-[#050505] p-4 grid-cols-2 gap-2 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
<div className="border border-zinc-800 bg-zinc-900/50 p-4 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      GPU_01
                    </div>
<div className="border border-zinc-800 bg-zinc-900/50 p-4 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      GPU_02
                    </div>
<div className="border border-orange-600/30 bg-orange-600/10 p-4 flex items-center justify-center text-[10px] font-mono text-orange-500 animate-pulse">
                      ACTIVE
                    </div>
<div className="border border-zinc-800 bg-zinc-900/50 p-4 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      IDLE
                    </div>
</div>
</div>
<div className="flex gap-4">
<button className="bg-orange-600 text-white px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-colors font-medium">
                    Request Demo
                  </button>
<button className="bg-transparent border border-zinc-700 text-zinc-400 px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                    Read Documentation
                  </button>
</div>
</div>

<div className="scenario-panel absolute inset-0 p-16 flex flex-col justify-between opacity-0 pointer-events-none z-0 transition-all duration-300 transform translate-x-4" data-index="2">
<div className="flex justify-between items-start gap-12">
<div className="max-w-lg">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">
                      High-Scale System Monitoring
                    </h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">
                      Monitor system health, resource utilization, and
                      operational performance across enterprise-scale
                      environments with granular observability.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Predictive Anomaly Detection
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Cross-Cluster Log Aggregation
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Role-Based Access Control Audit
                      </li>
</ul>
</div>
<div className="hidden xl:flex w-72 border border-zinc-800 bg-[#050505] p-4 flex-col gap-1 items-end shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
<div className="w-full h-2 bg-zinc-800 mb-2"></div>
<div className="w-[80%] h-2 bg-zinc-800 mb-2"></div>
<div className="w-[40%] h-2 bg-orange-600 mb-2 animate-pulse"></div>
<div className="w-[90%] h-2 bg-zinc-800"></div>
<div className="mt-4 pt-4 border-t border-zinc-800 w-full text-center text-[10px] font-mono text-green-500">
                      SYSTEM_HEALTH_99%
                    </div>
</div>
</div>
<div className="flex gap-4">
<button className="bg-orange-600 text-white px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-colors font-medium">
                    Request Demo
                  </button>
<button className="bg-transparent border border-zinc-700 text-zinc-400 px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                    Read Documentation
                  </button>
</div>
</div>

<div className="scenario-panel absolute inset-0 p-16 flex flex-col justify-between opacity-0 pointer-events-none z-0 transition-all duration-300 transform translate-x-4" data-index="3">
<div className="flex justify-between items-start gap-12">
<div className="max-w-lg">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">
                      Infrastructure Security Enforcement
                    </h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">
                      Enforce security policies, encryption standards, and
                      compliance requirements across every system layer.
                      Zero-trust architecture by default.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Automated Encryption Key Rotation
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        Real-time Intrusion Prevention
                      </li>
<li className="flex items-center gap-3 text-xs font-mono text-zinc-300">
<span className="w-1 h-1 bg-orange-600"></span>
                        SOC2 Type II Compliance Mapping
                      </li>
</ul>
</div>
<div className="hidden xl:flex w-72 items-center justify-center h-48 border border-zinc-800 bg-[#050505] p-4 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
<iconify-icon className="text-orange-600 text-6xl drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" icon="solar:shield-check-bold"></iconify-icon>
</div>
</div>
<div className="flex gap-4">
<button className="bg-orange-600 text-white px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-colors font-medium">
                    Request Demo
                  </button>
<button className="bg-transparent border border-zinc-700 text-zinc-400 px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                    Read Documentation
                  </button>
</div>
</div>
</div>
</div>

<div className="lg:hidden flex flex-col border-t border-zinc-800">

<div className="border-b border-zinc-800">
<button className="w-full text-left p-6 bg-[#050505] flex flex-col gap-2 group" onclick="window.toggleAccordion(this)">
<div className="flex justify-between items-center w-full mb-2">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    DEVOPS_ENV
                  </span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white uppercase tracking-tight">
                  Cloud Infrastructure Automation
                </div>
<div className="text-[10px] font-mono text-green-500 mt-1">
                  -63% DEPLOYMENT TIME
                </div>
</button>
<div className="hidden bg-zinc-900/20 p-6 pt-0 border-t border-zinc-800/50">
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-6 mt-4">
                  Automate provisioning, scaling, and monitoring across
                  distributed cloud environments with real-time telemetry.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Zero-touch Provisioning
                  </li>
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    GitOps Integration
                  </li>
</ul>
</div>
</div>

<div className="border-b border-zinc-800">
<button className="w-full text-left p-6 bg-[#050505] flex flex-col gap-2 group" onclick="window.toggleAccordion(this)">
<div className="flex justify-between items-center w-full mb-2">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    AI_OPS
                  </span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white uppercase tracking-tight">
                  Autonomous AI Orchestration
                </div>
<div className="text-[10px] font-mono text-green-500 mt-1">
                  +41% COMPUTE EFFICIENCY
                </div>
</button>
<div className="hidden bg-zinc-900/20 p-6 pt-0 border-t border-zinc-800/50">
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-6 mt-4">
                  Deploy and manage autonomous AI agents with centralized
                  processing control.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Dynamic GPU Allocation
                  </li>
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Model Versioning
                  </li>
</ul>
</div>
</div>

<div className="border-b border-zinc-800">
<button className="w-full text-left p-6 bg-[#050505] flex flex-col gap-2 group" onclick="window.toggleAccordion(this)">
<div className="flex justify-between items-center w-full mb-2">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    ENTERPRISE
                  </span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white uppercase tracking-tight">
                  High-Scale System Monitoring
                </div>
<div className="text-[10px] font-mono text-green-500 mt-1">
                  99.99% UPTIME
                </div>
</button>
<div className="hidden bg-zinc-900/20 p-6 pt-0 border-t border-zinc-800/50">
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-6 mt-4">
                  Monitor system health, resource utilization, and operational
                  performance across enterprise-scale environments.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Predictive Anomaly Detection
                  </li>
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Role-Based Access
                  </li>
</ul>
</div>
</div>

<div className="border-b border-zinc-800">
<button className="w-full text-left p-6 bg-[#050505] flex flex-col gap-2 group" onclick="window.toggleAccordion(this)">
<div className="flex justify-between items-center w-full mb-2">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    SECURITY
                  </span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white uppercase tracking-tight">
                  Infrastructure Security
                </div>
<div className="text-[10px] font-mono text-green-500 mt-1">
                  SOC2 COMPLIANT
                </div>
</button>
<div className="hidden bg-zinc-900/20 p-6 pt-0 border-t border-zinc-800/50">
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-6 mt-4">
                  Enforce security policies, encryption standards, and
                  compliance requirements across every system layer.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Automated Encryption
                  </li>
<li className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
<span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    Zero Trust Architecture
                  </li>
</ul>
</div>
</div>

<div className="sticky bottom-0 bg-[#050505] p-6 border-t border-zinc-800 flex gap-3 z-30 shadow-2xl">
<button className="flex-1 py-3 bg-orange-600 text-white text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-colors font-medium">
                Request Demo
              </button>
<button className="flex-1 py-3 bg-zinc-900 border border-zinc-700 text-zinc-400 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                Read Docs
              </button>
</div>
</div>

</section>
<div className="flex flex-col border-t border-b border-zinc-800 bg-[#050505] relative overflow-hidden" id="flow">

<div className="flex flex-col md:px-12 md:flex-row md:items-end z-10 md:pt-36 md:pb-28 bg-center bg-gradient-to-r from-white/10 via-white/0 to-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_3840w.jpg?w=800&amp;q=80)] bg-cover border-zinc-800 border-b pt-24 pr-8 pb-20 pl-8 relative gap-x-6 gap-y-6 justify-between" style={{maskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)'}}>
<div className="">
<div className="text-[10px] uppercase flex text-orange-600 tracking-widest font-mono mb-4 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // Operational_Logic
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                System
                <span className="text-zinc-600">Flow</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-xl mt-4">
                Operational pipeline outlining how Nexus Engine connects,
                deploys, monitors, and scales production systems.
              </p>
</div>
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Pipeline Active</span>
<div className="w-px h-4 bg-zinc-800 mx-2"></div>
<span>v4.2.0</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-3 border-r border-zinc-800 p-8 flex flex-col relative bg-zinc-900/10 group hover:bg-zinc-900/20 transition-colors sys-reveal sys-slide-l">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                01_CONNECT
              </div>
<div className="mt-12 space-y-6 flex-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm text-white font-medium uppercase tracking-wider">
                    Ingestion Nodes
                  </h3>
<iconify-icon className="text-zinc-500" icon="solar:link-circle-linear" width="18"></iconify-icon>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-orange-600 rounded-none"></div>
<span className="text-xs text-zinc-300 font-mono">
                        AWS_KINESIS
                      </span>
</div>
<span className="text-[9px] text-green-500 font-mono">
                      LINKED
                    </span>
</div>
<div className="flex items-center justify-between p-3 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-none"></div>
<span className="text-xs text-zinc-300 font-mono">
                        REST_API_V2
                      </span>
</div>
<span className="text-[9px] text-zinc-500 font-mono">IDLE</span>
</div>
<div className="flex items-center justify-between p-3 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-orange-600 rounded-none"></div>
<span className="text-xs text-zinc-300 font-mono">
                        SQL_SHARD_04
                      </span>
</div>
<span className="text-[9px] text-green-500 font-mono">
                      SYNC
                    </span>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-2">
<span>THROUGHPUT</span>
<span className="text-white">4.2 GB/s</span>
</div>
<div className="w-full bg-zinc-800 h-px overflow-hidden">
<div className="h-full w-1/3 bg-orange-600/80 animate-pulse ml-0"></div>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-zinc-800 bg-[#080808] relative flex flex-col overflow-hidden group sys-reveal sys-scale sys-delay-100">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
<div className="absolute top-0 right-0 p-2 border-l border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-orange-600 z-10">
                02_DEPLOY [CORE]
              </div>
<div className="p-12 flex flex-col h-full items-center justify-center relative z-10">

<div className="relative w-64 h-64 mb-12 flex items-center justify-center">
<div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
<div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-orange-600/20 bg-orange-600/5 rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-orange-600 text-4xl drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute bottom-1/2 right-0 translate-x-1 translate-y-1/2 w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
</div>
<div className="text-center space-y-2 max-w-md">
<h3 className="text-xl font-medium text-white uppercase tracking-tight">
                    Nexus Orchestration Engine
                  </h3>
<p className="text-zinc-500 font-mono text-xs leading-relaxed">
                    Deploying autonomous agents to optimized infrastructure
                    zones. Zero-latency handoff protocols active.
                  </p>
</div>

<div className="mt-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                    System Optimal
                  </span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 border-t border-zinc-800 bg-[#050505]/90 p-4 font-mono text-[10px] text-zinc-500 overflow-hidden">
<div className="flex justify-between items-center mb-2 opacity-50">
<span>LOG_STREAM</span>
<span>LIVE</span>
</div>
<div className="space-y-1 opacity-70">
<div className="flex gap-4">
<span className="text-zinc-700">00:01:23</span>
<span className="text-zinc-400">
                      &gt; init_sequence(target="cluster_alpha")
                    </span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:24</span>
<span className="text-zinc-400">
                      &gt; allocating_resources...
                      <span className="text-green-600">DONE</span>
</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:25</span>
<span className="text-zinc-400">
                      &gt; deploy_agents --mode=autonomous --scale=auto
                    </span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:25</span>
<span className="text-orange-600">
                      &gt; WARN: latency_spike detected in zone_b (resolved)
                    </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col border-r lg:border-r-0 border-zinc-800 sys-reveal sys-slide-r sys-delay-200">

<div className="flex-1 border-b border-zinc-800 p-8 relative bg-zinc-900/5 group hover:bg-zinc-900/10 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                  03_MONITOR
                </div>
<div className="mt-10 mb-6">
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-4">
                    Telemetry
                  </h3>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 border border-zinc-800 bg-[#050505]">
<div className="text-[9px] text-zinc-500 font-mono uppercase mb-1">
                        Latency
                      </div>
<div className="text-lg text-white font-light tracking-tighter">
                        12ms
                      </div>
</div>
<div className="p-3 border border-zinc-800 bg-[#050505]">
<div className="text-[9px] text-zinc-500 font-mono uppercase mb-1">
                        Uptime
                      </div>
<div className="text-lg text-green-500 font-light tracking-tighter">
                        99.9%
                      </div>
</div>
<div className="p-3 border border-zinc-800 bg-[#050505] col-span-2">
<div className="flex justify-between items-center mb-1">
<div className="text-[9px] text-zinc-500 font-mono uppercase">
                          Request Load
                        </div>
<div className="text-[9px] text-orange-600 font-mono">
                          HIGH
                        </div>
</div>
<div className="flex items-end gap-0.5 h-8 mt-2">
<div className="flex-1 bg-zinc-800 h-[30%] hover:bg-orange-600/80 transition-colors"></div>
<div className="flex-1 bg-zinc-800 h-[50%] hover:bg-orange-600/80 transition-colors"></div>
<div className="flex-1 bg-zinc-800 h-[80%] hover:bg-orange-600/80 transition-colors"></div>
<div className="flex-1 bg-orange-600 h-[95%]"></div>
<div className="flex-1 bg-zinc-800 h-[60%] hover:bg-orange-600/80 transition-colors"></div>
<div className="flex-1 bg-zinc-800 h-[40%] hover:bg-orange-600/80 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-8 relative bg-zinc-950 flex flex-col justify-center group hover:bg-zinc-900 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                  04_SCALE
                </div>
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider">
                      Auto-Scaling
                    </h3>
<p className="text-[10px] text-zinc-600 mt-1 font-mono">
                      Resource elasticity active
                    </p>
</div>
<iconify-icon className="text-orange-600" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-1">
<span>COMPUTE_ALLOC</span>
<span>84%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5">
<div className="bg-white h-full w-[84%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-orange-600"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-1">
<span>MEMORY_POOL</span>
<span>42%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5">
<div className="bg-zinc-600 h-full w-[42%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col border-b border-zinc-800 bg-[#050505] relative" id="validation">

<div className="flex flex-col overflow-hidden md:px-12 md:flex-row md:items-end md:pt-36 md:pb-28 bg-center bg-gradient-to-r from-white/10 via-white/0 to-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_3840w.jpg?w=800&amp;q=80)] bg-cover border-zinc-800 border-b pt-24 pr-8 pb-20 pl-8 relative gap-x-6 gap-y-6 justify-between" style={{maskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)'}}>

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-800/20 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // System_Audit_Protocol_v4
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Validation
                <span className="text-zinc-600">Console</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-2xl mt-4">
                Live system audit interface verifying production readiness,
                compliance, and operational integrity.
              </p>
</div>
<div className="flex items-center gap-8 relative z-10">
<div className="hidden md:block text-right">
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mb-1">
                  Audit Session
                </div>
<div className="text-xs text-white font-mono bg-zinc-900 px-2 py-1 border border-zinc-800">
                  ID: 8842-XC
                </div>
</div>
<div className="text-right">
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mb-1">
                  Status
                </div>
<div className="text-xs text-green-500 font-mono flex items-center gap-2 justify-end">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  VERIFIED
                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] bg-[#050505]">

<div className="lg:col-span-8 border-r border-zinc-800 flex flex-col">

<div className="flex-1 p-8 md:p-12 relative overflow-hidden group border-b border-zinc-800 bg-zinc-900/5 hover:bg-zinc-900/10 transition-colors sys-reveal sys-rise">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-500 uppercase tracking-wider mb-8">
<iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon>
                      Production Environment Active
                    </div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter uppercase leading-[0.9]">
                      Enterprise
                      <span className="block text-zinc-700">Integrity</span>
</h3>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
<p className="text-xs text-zinc-500 font-mono leading-relaxed border-l border-zinc-800 pl-4">
                      System infrastructure verified for high-availability
                      environments. Zero-trust architecture enforced across all
                      active nodes.
                    </p>
<div className="flex gap-8">
<div>
<div className="text-[9px] text-zinc-600 font-mono uppercase mb-1">
                          Uptime SLA
                        </div>
<div className="text-xl text-white font-light tracking-tight">
                          99.99%
                        </div>
</div>
<div>
<div className="text-[9px] text-zinc-600 font-mono uppercase mb-1">
                          Latency
                        </div>
<div className="text-xl text-white font-light tracking-tight">
                          &lt;10ms
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="h-auto md:h-64 grid grid-cols-1 md:grid-cols-2">

<div className="border-r border-zinc-800 p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Compliance_Log
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:file-check-linear" width="18"></iconify-icon>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between text-[10px] font-mono border-b border-zinc-800 pb-2">
<span className="text-zinc-300">SOC2 Type II</span>
<span className="text-green-500">[VERIFIED]</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono border-b border-zinc-800 pb-2">
<span className="text-zinc-300">ISO 27001</span>
<span className="text-green-500">[ACTIVE]</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono pb-1">
<span className="text-zinc-300">GDPR / CCPA</span>
<span className="text-green-500">[COMPLIANT]</span>
</div>
</div>
</div>

<div className="p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Security_Protocol
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<div className="z-10 mt-4">
<div className="text-3xl font-light text-white mb-2 tracking-tight">
                      AES-256
                    </div>
<div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      End-to-end encryption active for data at rest and in
                      transit.
                    </div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-zinc-800/50 -rotate-12 group-hover:text-zinc-800 transition-colors duration-500" icon="solar:shield-bold" width="100"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col bg-zinc-950/30">

<div className="flex-1 p-8 border-b border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-end mb-4">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    Event_Throughput
                  </span>
<span className="text-[9px] font-mono text-orange-600">
                    HIGH_LOAD
                  </span>
</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-4xl font-medium text-white tracking-tighter" data-sys-counter="142" data-sys-suffix="M+">
                    0
                  </span>
<span className="text-xs text-zinc-600 font-mono uppercase">
                    Daily
                  </span>
</div>

<div className="w-full bg-zinc-900 border border-zinc-800 h-2 p-0.5">
<div className="h-full bg-orange-600 w-[85%] relative overflow-hidden sys-bar-fill" style={{-SysWidth: '85%'}}>
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>

<div className="flex-1 p-8 border-b border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-end mb-4">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    Active_Clusters
                  </span>
<span className="text-[9px] font-mono text-green-500">
                    OPTIMAL
                  </span>
</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-4xl font-medium text-white tracking-tighter" data-sys-counter="240">
                    0
                  </span>
<span className="text-xs text-zinc-600 font-mono uppercase">
                    Global Zones
                  </span>
</div>
<div className="flex gap-1 h-3">
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
<div className="flex-1 bg-zinc-800 hover:bg-green-500 transition-colors"></div>
</div>
</div>

<div className="flex-1 p-8 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-6">
                  Verified_Partners
                </span>
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">
                      Fortune 500
                    </span>
</div>
<div className="flex flex-col gap-1 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">
                      Cloud Native
                    </span>
</div>
<div className="flex flex-col gap-1 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:card-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">
                      Fintech
                    </span>
</div>
<div className="flex flex-col gap-1 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:shield-user-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">
                      Gov/Defense
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="overflow-hidden bg-[#050505] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f879b8e1-cba6-476a-9fea-a4abd7ca2645_3840w.jpg?w=800&amp;q=80)] bg-cover bg-center border-zinc-800 border-b pr-4 pl-4 relative pt-32 md:pt-44 pb-32 md:pb-44" id="access">

<div className="bg-black/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto relative items-center">
<div className="mb-20 max-w-3xl mx-auto w-full px-6">
<div className="text-[10px] uppercase flex text-orange-600 tracking-widest font-mono text-center mb-4 gap-x-2 gap-y-2 items-center justify-center">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // Pricing_Tiers
              </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white uppercase tracking-tight leading-[0.9] mb-6">
                Scale Your
                <span className="text-zinc-600">Infrastructure</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg mx-auto">
                Enterprise-grade infrastructure pricing. Transparent costs,
                auto-scaling capabilities, and zero hidden fees.
              </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch mb-24 px-4 text-left">

<div className="group relative bg-zinc-900/20 border border-zinc-800 p-8 flex flex-col sys-reveal sys-rise sys-delay-100 hover:border-zinc-700 transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 bg-zinc-950">
                    Level_01
                  </span>
<iconify-icon className="text-zinc-500 text-xl group-hover:text-white transition-colors" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-base text-white font-medium uppercase tracking-tight mb-2">
                    Developer
                  </h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-white">$0</span>
<span className="text-[10px] text-zinc-500 font-mono uppercase">
                      / mo
                    </span>
</div>
</div>
<p className="text-[11px] text-zinc-500 font-mono leading-relaxed mb-8 border-b border-zinc-800 pb-8 min-h-[5rem]">
                  Sandbox environment for integration testing and prototype
                  development.
                </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    Shared Compute
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    Standard API Cap
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    Community Support
                  </li>
</ul>
<button className="w-full py-3 border border-zinc-800 hover:border-white text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-mono transition-all bg-transparent">
                  Start Building
                </button>
</div>

<div className="relative bg-[#080808] border border-zinc-800 p-10 flex flex-col shadow-2xl lg:-mt-6 lg:mb-6 z-10 sys-reveal sys-scale sys-delay-200 rounded-sm group hover:border-orange-600/30 transition-colors">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[9px] font-mono uppercase tracking-widest px-4 py-1.5 shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                  Recommended
                </div>
<div className="absolute inset-0 bg-orange-600/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative">
<span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest border border-orange-600/20 px-2 py-1 bg-orange-600/5">
                    Level_02
                  </span>
<iconify-icon className="text-orange-600 text-xl drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" icon="solar:server-square-bold"></iconify-icon>
</div>
<div className="mb-6 relative">
<h3 className="text-lg text-white font-medium uppercase tracking-tight mb-2">
                    Professional
                  </h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white">$499</span>
<span className="text-[10px] text-zinc-400 font-mono uppercase">
                      / mo
                    </span>
</div>
</div>
<p className="text-[11px] text-zinc-400 font-mono leading-relaxed mb-8 border-b border-zinc-800 pb-8 relative min-h-[5rem]">
                  Production-ready infrastructure with guaranteed resource
                  allocation and SLA.
                </p>
<ul className="space-y-4 mb-8 flex-1 relative">
<li className="flex items-center gap-3 text-[10px] text-zinc-300 font-mono uppercase">
<iconify-icon className="text-orange-600" icon="solar:check-read-bold"></iconify-icon>
                    Dedicated Nodes
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-300 font-mono uppercase">
<iconify-icon className="text-orange-600" icon="solar:check-read-bold"></iconify-icon>
                    99.9% Uptime SLA
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-300 font-mono uppercase">
<iconify-icon className="text-orange-600" icon="solar:check-read-bold"></iconify-icon>
                    Auto-Scaling
                  </li>
</ul>
<button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white text-[10px] uppercase tracking-widest font-mono transition-all shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] relative font-medium">
                  Deploy Now
                </button>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 p-8 flex flex-col sys-reveal sys-rise sys-delay-300 hover:border-zinc-700 transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 bg-zinc-950">
                    Level_03
                  </span>
<iconify-icon className="text-zinc-500 text-xl group-hover:text-white transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-base text-white font-medium uppercase tracking-tight mb-2">
                    Enterprise
                  </h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-white">Custom</span>
</div>
</div>
<p className="text-[11px] text-zinc-500 font-mono leading-relaxed mb-8 border-b border-zinc-800 pb-8 min-h-[5rem]">
                  Tailored solutions for mission-critical operations with
                  specific compliance needs.
                </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    Custom Compliance
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    On-Prem / Air-Gapped
                  </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                    Dedicated Success Mgr
                  </li>
</ul>
<button className="w-full py-3 border border-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-mono transition-all">
                  Contact Sales
                </button>
</div>
</div>

<div className="w-full max-w-6xl border-t border-zinc-800 bg-zinc-900/20 backdrop-blur-sm sys-reveal sys-rise sys-delay-400 rounded-sm">
<div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap justify-center md:justify-start gap-8">
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
<iconify-icon className="text-orange-600" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      SOC2 Type II
                    </span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
<iconify-icon className="text-orange-600" icon="solar:lock-keyhole-bold"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      ISO 27001
                    </span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
<iconify-icon className="text-orange-600" icon="solar:server-square-bold"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      99.99% SLA
                    </span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">
                    Trusted by 500+ Engineering Teams
                  </span>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-24 overflow-hidden flex flex-col select-none bg-[#050505] w-full border-zinc-800 pt-16 pb-16 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 25%, black 75%, transparent)'}}>

<div className="absolute inset-0 pointer-events-none z-0">
<div className="aura-background-component w-full h-full absolute inset-0">
<div className="absolute w-full h-full left-0 top-0" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_50%)] pointer-events-none mix-blend-screen"></div>
<div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>

<div className="relative z-20 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col text-left items-start sys-reveal sys-rise">

<div className="mb-8 flex items-center gap-4">
<div className="flex items-center gap-3 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                  Ready to Launch
                </div>
</div>

<h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-[0.9] mb-6 font-medium">
                System
                
                <span className="text-zinc-600">Ready</span>
</h2>

<p className="text-sm text-zinc-500 font-mono mb-8 max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-6">
<span className="text-orange-600">//</span>
                Infrastructure awaiting initialization command. Execute build
                sequence to deploy autonomous agents.
              </p>

<div className="flex items-center gap-6 pt-6 border-t border-zinc-800/50 w-full max-w-md">
<div className="flex flex-col">
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                    Security
                  </span>
<span className="text-[10px] font-mono text-green-500">
                    ENCRYPTED_256
                  </span>
</div>
<div className="w-px h-6 bg-zinc-800"></div>
<div className="flex flex-col">
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                    Latency
                  </span>
<span className="text-[10px] font-mono text-zinc-400">
                    0.02ms
                  </span>
</div>
<div className="w-px h-6 bg-zinc-800"></div>
<div className="flex flex-col">
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                    Node
                  </span>
<span className="text-[10px] font-mono text-orange-600">
                    US_EAST_4
                  </span>
</div>
</div>
</div>

<div className="relative w-full sys-reveal sys-scale sys-delay-100">
<div className="absolute -inset-1 bg-orange-600/10 rounded-sm blur-xl"></div>
<div className="relative bg-[#080808]/90 border border-zinc-800 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-8 rounded-sm">

<div className="space-y-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-700" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs font-mono text-zinc-300">
                      Create workspace (30s)
                    </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-700" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs font-mono text-zinc-300">
                      Connect repo &amp; deploy agent
                    </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-700" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs font-mono text-zinc-300">
                      Monitor nodes in real-time
                    </span>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 text-[10px] font-mono uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 group/btn font-medium">
                    Initialize Build
                    <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full bg-transparent border border-zinc-700 hover:border-white text-zinc-400 hover:text-white py-3 text-[10px] font-mono uppercase tracking-widest transition-all">
                    Request Demo
                  </button>
</div>

<div className="flex flex-col gap-4 text-center border-t border-zinc-800 pt-4">
<p className="text-[10px] text-zinc-600 font-mono">
                    No credit card • Cancel anytime • SOC2-ready
                  </p>
<div className="flex justify-center gap-4 text-[10px] font-mono text-zinc-500">
<a className="hover:text-orange-600 transition-colors" href="#">
                      Docs
                    </a>
<span className="text-zinc-800">/</span>
<a className="hover:text-orange-600 transition-colors" href="#">
                      Security
                    </a>
<span className="text-zinc-800">/</span>
<a className="hover:text-orange-600 transition-colors" href="#">
                      Pricing
                    </a>
<span className="text-zinc-800">/</span>
<a className="hover:text-orange-600 transition-colors" href="#">
                      GitHub
                    </a>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-zinc-800 bg-[#050505] text-zinc-500 font-mono relative z-20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.15]"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] relative">

<div className="order-1 lg:order-3 lg:col-span-3 p-8 flex flex-col justify-between bg-zinc-900/5 border-b lg:border-b-0 lg:border-l border-zinc-800">
<div className="">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                  // Get_Started
                </div>
<h3 className="text-xl text-white font-medium uppercase tracking-tight mb-3">
                  Start Building
                </h3>
<p className="text-xs text-zinc-500 mb-8 leading-relaxed">
                  Initialize your instance and deploy your first agent in
                  seconds.
                </p>
<button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white text-[10px] uppercase tracking-widest font-mono transition-all shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 group mb-4 font-medium">
                  Get API Key
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 mb-6">
<a className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white border-b border-transparent hover:border-zinc-500 transition-all pb-px" href="#">
                    Book a Demo
                  </a>
</div>
</div>
<div className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-wider text-zinc-600">
<iconify-icon icon="solar:card-linear" width="12"></iconify-icon>
                No credit card • 2 min setup
              </div>
</div>

<div className="order-2 lg:order-2 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 border-b lg:border-b-0 lg:border-l border-zinc-800">

<div className="p-8 border-r border-zinc-800 border-b md:border-b-0 relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                  Product
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li className="">
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Overview
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Features
                    </a>
</li>
<li className="">
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Pricing
                    </a>
</li>
</ul>
</div>

<div className="p-8 border-r border-zinc-800 border-b md:border-b-0 relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                  Resources
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li className="">
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Quickstart
                    </a>
</li>
<li className="">
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      API Reference
                    </a>
</li>
<li className="">
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      SDKs
                    </a>
</li>
</ul>
</div>

<div className="p-8 relative group hover:bg-zinc-900/10 transition-colors col-span-2 md:col-span-1">
<div className="mb-8">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                    Company
                  </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                        About
                      </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                        Blog
                      </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                        Careers
                        <span className="text-[9px] ml-1 text-orange-600 bg-orange-600/10 px-1 py-0.5 rounded-sm">
                          HIRING
                        </span>
</a>
</li>
</ul>
</div>
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                    Legal
                  </div>
<ul className="space-y-2 text-[10px] font-medium tracking-wide">
<li className="">
<a className="block text-zinc-500 hover:text-white hover:translate-x-1 transition-all" href="#">
                        Privacy Policy
                      </a>
</li>
<li>
<a className="block text-zinc-500 hover:text-white hover:translate-x-1 transition-all" href="#">
                        Terms of Service
                      </a>
</li>
<li>
<a className="block text-zinc-500 hover:text-white hover:translate-x-1 transition-all" href="#">
                        DPA
                      </a>
</li>
</ul>
</div>
</div>
</div>

<div className="order-3 lg:order-1 lg:col-span-3 flex flex-col lg:border-b-0 bg-zinc-900/5 border-b pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm justify-between">
<div className="">

<a className="flex items-center gap-3 mb-10 group w-fit" href="#">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:border-orange-600 transition-colors">
<iconify-icon icon="solar:command-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-widest uppercase group-hover:text-orange-600 transition-colors">
                    Axion
                    <span className="text-zinc-600 group-hover:text-orange-800 transition-colors">
                      _Sys
                    </span>
</span>
</a>

<div className="border border-zinc-800 bg-[#050505] p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 left-0 w-0.5 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-3">
<span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono">
                      System_Status
                    </span>
<div className="relative flex h-2 w-2 mt-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</div>
</div>
<div className="mb-4">
<div className="text-xs text-white font-medium tracking-wide uppercase mb-1">
                      Operational
                    </div>
<div className="text-[10px] text-zinc-600 font-mono flex gap-3">
<span>
                        Uptime:
                        <span className="text-zinc-400">99.98%</span>
</span>
<span>v4.2.0</span>
</div>
</div>
<div className="flex items-center justify-between border-t border-zinc-800/50 pt-3 mt-2">
<span className="text-[9px] text-zinc-600 font-mono">
                      Updated: 2m ago
                    </span>
<a className="text-[9px] uppercase tracking-wider text-orange-600 hover:text-white transition-colors flex items-center gap-1" href="#">
                      View Status
                      <iconify-icon icon="solar:arrow-right-linear" width="10"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mt-8 flex gap-4 opacity-60">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-[#080808] px-8 py-4 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-zinc-600 relative z-20">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-2 md:mb-0">
<span className="cursor-default">© 2024 Axion Inc.</span>
<span className="hidden md:inline w-px h-3 bg-zinc-800"></span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">DPA</a>
<a className="hover:text-white transition-colors" href="#">
                  Subprocessors
                </a>
</div>
</div>
<div className="flex items-center gap-6 font-mono">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>14:32:01 UTC</span>
</div>
<div className="hidden md:block w-px h-3 bg-zinc-800"></div>
<div className="flex items-center gap-2 text-green-900">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span className="text-green-600">Secure_Connection</span>
</div>
</div>
</div>
</footer>
</div>
</main>





    </>
  );
}
