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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        !function () {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: !1 };
        var i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload = function () {
          if (!window.UnicornStudio.isInitialized) {
            UnicornStudio.init();
            window.UnicornStudio.isInitialized = !0;
          }
        };
        (document.head || document.body).appendChild(i);
      }
    }();
    


        // Integrations section: entrance animation (stagger) + keyboard helpers
    (function () {
      const section = document.currentScript && document.currentScript.closest(".integrations-section");
      if (!section) return;

      const cards = Array.from(section.querySelectorAll(".int-card"));
      const wrapper = section.querySelector(".int-scroll-wrapper");

      // Stagger in when section enters view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            cards.forEach((card, i) => {
              // add stagger only once
              if (card.classList.contains("in-view")) return;
              card.style.transitionDelay = (i * 90) + "ms";
              card.classList.add("in-view");
            });
            observer.disconnect();
          });
        },
        { threshold: 0.22 }
      );

      observer.observe(section);

      // Keyboard: Enter/Space scroll card into view (nice for accessibility)
      cards.forEach((card) => {
        card.addEventListener("keydown", (e) => {
          const key = e.key;
          if (key === "Enter" || key === " ") {
            e.preventDefault();
            card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
          }
        });
      });

      // Wheel-to-horizontal scroll (trackpad/mouse) for the wrapper
      if (wrapper) {
        wrapper.addEventListener(
          "wheel",
          (e) => {
            // only hijack if user is trying to scroll vertically over the carousel
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              e.preventDefault();
              wrapper.scrollLeft += e.deltaY;
            }
          },
          { passive: false }
        );
      }
    })();
    


    (function(){
      // 1) Reveal on scroll (works even if Aura already has other scripts)
      var section = document.currentScript && document.currentScript.closest('.foundations-section');
      if (!section) section = document.querySelector('.foundations-section');

      var revealTargets = [];
      if (section) revealTargets.push(section);

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){
              entry.target.classList.add('active');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        revealTargets.forEach(function(el){ io.observe(el); });
      } else {
        // Fallback
        revealTargets.forEach(function(el){ el.classList.add('active'); });
      }

      // 2) Accordion behavior
      if (!section) return;
      var items = Array.prototype.slice.call(section.querySelectorAll('.fnd-item'));

      function closeAll(exceptEl){
        items.forEach(function(it){
          if (it !== exceptEl) it.classList.remove('is-open');
        });
      }

      items.forEach(function(item){
        item.addEventListener('click', function(){
          var isOpen = item.classList.contains('is-open');
          closeAll(item);
          if (!isOpen) item.classList.add('is-open');
          else item.classList.remove('is-open');
        });
      });

      // 3) Gentle number bump animation when revealed
      var num = section.querySelector('.scale-num');
      if (num) {
        var target = 5000;
        var started = false;

        function runCount(){
          if (started) return;
          started = true;
          var start = 0;
          var duration = 900;
          var t0 = performance.now();

          function tick(now){
            var p = Math.min(1, (now - t0) / duration);
            // easeOutCubic
            var eased = 1 - Math.pow(1 - p, 3);
            var val = Math.floor(start + (target - start) * eased);
            num.textContent = val.toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }

        if ('IntersectionObserver' in window) {
          var io2 = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){
                runCount();
                io2.disconnect();
              }
            });
          }, { threshold: 0.3 });
          io2.observe(section);
        } else {
          runCount();
        }
      }
    })();
  


        // Feature Cards Spotlight
        const cards = document.querySelectorAll(".feature-card");
        document.addEventListener("mousemove", (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // Dashboard Straighten on Scroll
        const dashboard = document.querySelector('.dashboard-wrapper');
        window.addEventListener('scroll', () => {
            if (!dashboard) return;
            const scrollY = window.scrollY;
            const maxScroll = 600; 
            const progress = Math.min(scrollY / maxScroll, 1);
            
            const startX = 20; const startY = -8; const startZ = 5;
            const currentX = startX - (startX * progress);
            const currentY = startY - (startY * progress);
            const currentZ = startZ - (startZ * progress);

            dashboard.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg) rotateZ(${currentZ}deg)`;
        });

        // AI Section Interactive Tilt
        const aiWrapper = document.querySelector('.ai-demo-wrapper');
        const aiMenu = document.querySelector('.ai-menu-container');
        if (aiWrapper && aiMenu) {
            aiWrapper.addEventListener('mousemove', (e) => {
                const rect = aiWrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10; 
                const rotateY = ((x - centerX) / centerX) * 10;
                aiMenu.style.transform = `rotateX(${20 + rotateX}deg) rotateY(${rotateY}deg) scale(0.95)`;
                aiMenu.style.setProperty('--menu-x', `${x}px`);
                aiMenu.style.setProperty('--menu-y', `${y}px`);
            });
            aiWrapper.addEventListener('mouseleave', () => {
                aiMenu.style.transform = `rotateX(20deg) scale(0.95)`;
            });
        }

        // Issue Tracking Parallax (New)
        const itSection = document.querySelector('.issue-tracking-section');
        const itBoard = document.querySelector('.it-board');
        if(itSection && itBoard) {
            itSection.addEventListener('mousemove', (e) => {
                const rect = itSection.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate slight tilt based on mouse pos
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Add to base tilt: rotateX(25deg) rotateY(-15deg) rotateZ(5deg)
                const tiltY = ((x - centerX) / centerX) * 5; 
                const tiltX = ((y - centerY) / centerY) * -5;

                itBoard.style.transform = `rotateX(${25 + tiltX}deg) rotateY(${-15 + tiltY}deg) rotateZ(5deg)`;
            });
            itSection.addEventListener('mouseleave', () => {
                itBoard.style.transform = `rotateX(25deg) rotateY(-15deg) rotateZ(5deg)`;
            });
        }

        // Roadmap Parallax
        const roadmapSection = document.querySelector('.roadmap-section');
        const roadmapPlane = document.querySelector('.roadmap-plane');
        if (roadmapSection && roadmapPlane) {
            roadmapSection.addEventListener('mousemove', (e) => {
                const rect = roadmapSection.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const moveX = (x / rect.width) * -20;
                roadmapPlane.style.transform = `rotateX(60deg) rotateZ(-20deg) scale(1.1) translateX(${moveX}px)`;
            });
        }
    


  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FD47WQ7ROdJlcijHXL7X"></div>
</div>



<nav className="fixed flex transition-all duration-500 hover:border-white/10 hover:bg-[#050505]/80 group/nav z-[1000] md:px-12 bg-[#050505]/60 w-full border-white/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 backdrop-blur-xl items-center justify-between">
<style>
    /* Toggle visibility of hamburger icons based on checkbox state since they are wrapped */
    #mobile-menu-toggle:checked ~ .nav-right-group .hamburger-open { display: none; }
    #mobile-menu-toggle:checked ~ .nav-right-group .hamburger-close { display: block; }
  </style>

<input aria-hidden="true" className="peer hidden" id="mobile-menu-toggle" type="checkbox"/>

<a className="bg-center hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22a501b8-fdc0-4b37-85e9-0367b65fcc58_1600w.png)] bg-cover rounded relative z-[1002]" href="/home"></a>

<ul className="nav-links hidden lg:flex items-center gap-1 bg-[#ffffff0a] p-1.5 rounded-full border border-white/5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:bg-[#ffffff0f]">

<li className="relative group">
<button className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full py-2 px-5 relative cursor-pointer" onclick="window.location.href='/product'">
<span className="z-10 relative">Product</span>

<div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-[0_0_8px_#5E6AD2]"></div>
</button>

<div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden p-2 backdrop-blur-3xl">
<div className="flex gap-2 h-full">

<div className="w-[260px] flex flex-col gap-1">
<div className="px-3 py-2 text-[11px] font-medium text-[#555] uppercase tracking-wider font-mono">Core</div>
<a className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden" href="#">
<div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#5E6AD2] group-hover/item:border-[#5E6AD2]/20 transition-all z-10 shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="z-10">
<div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Issues</div>
<div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Task management</div>
</div>
</a>
<a className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden" href="#">
<div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#E2B340] group-hover/item:border-[#E2B340]/20 transition-all z-10 shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<div className="z-10">
<div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Cycles</div>
<div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Sprint planning</div>
</div>
</a>
<a className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden" href="#">
<div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#4DAF73] group-hover/item:border-[#4DAF73]/20 transition-all z-10 shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="z-10">
<div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Roadmaps</div>
<div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Long-term goals</div>
</div>
</a>
<a className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden" href="#">
<div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#FF5F57] group-hover/item:border-[#FF5F57]/20 transition-all z-10 shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="z-10">
<div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Views</div>
<div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Custom filters</div>
</div>
</a>
</div>

<div className="flex-1">
<a className="block h-full w-full rounded-xl bg-[#111] border border-white/5 relative overflow-hidden group/card hover:border-white/20 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black opacity-80"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold text-indigo-300 uppercase tracking-wide backdrop-blur-sm">New Feature</span>
</div>
<div className="relative">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-indigo-500/30 group-hover/card:scale-110 transition-transform duration-300 ease-out">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<h4 className="text-[15px] font-medium text-white mb-1">Axis Import</h4>
<p className="text-[12px] text-gray-400 leading-relaxed group-hover/card:text-gray-300 transition-colors">Move your tasks from Jira, Asana, or GitHub in minutes.</p>

<div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500 rounded-full animate-[shimmer_2s_infinite] relative">
<div className="absolute inset-0 bg-white/20"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover/card:bg-indigo-500/20 transition-colors duration-500"></div>
<div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
</a>
</div>
</div>

<div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between px-2">
<div className="flex items-center gap-4">
<a className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5 group/link" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover/link:shadow-[0_0_5px_#10B981] transition-shadow"></span>
                        Changelog
                    </a>
<a className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors" href="#">Documentation</a>
</div>
<a className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1" href="#">
                    All features <svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</li>
<li className="relative group">
<a className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative" href="/method">
<span className="z-10 cursor-pointer relative" onclick="window.location.href='/method'">Method</span>
</a>
</li>
<li className="relative group">
<a className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative" href="/pricing">
<span className="cursor-pointer z-10 relative" onclick="window.location.href='/pricing'">Pricing</span>
</a>
</li>
<li className="relative group">
<a className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative" href="/customers">
<span className="cursor-pointer z-10 relative" onclick="window.location.href='/customers'">Customers</span>
</a>
</li>
<li className="relative group">
<a className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative" href="/changelog">
<span className="cursor-pointer z-10 relative" onclick="window.location.href='/changelog'">Changelog</span>
</a>
</li>
</ul>

<div className="nav-right-group flex items-center gap-2 md:gap-4 z-[1002]">
<div className="nav-auth hidden md:flex items-center gap-5">
<a className="text-[13px] hover:text-[#F7F8F8] transition-colors group font-medium text-[#8A8F98] relative" href="/login">
          Log in
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="signup-btn text-[13px] overflow-hidden group transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] font-medium text-[#F7F8F8] border-white/5 border rounded-lg pt-2 pr-4 pb-2 pl-4 relative" href="#">
<span className="cursor-pointer z-10 relative" onclick="window.location.href='/signup'" role="button">Sign up</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
</a>
</div>
<label className="hamburger-open lg:hidden hover:text-white cursor-pointer block transition-colors text-[#8A8F98] p-2" htmlFor="mobile-menu-toggle">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</label>
<label className="hamburger-close lg:hidden text-[#8A8F98] hover:text-white cursor-pointer p-2 hidden transition-colors" htmlFor="mobile-menu-toggle">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</label>
</div>

<div className="fixed top-0 left-0 w-full h-[100dvh] bg-[#050505] z-[1001] hidden peer-checked:flex flex-col pt-28 px-6 pb-10 gap-6 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 supports-[height:100dvh]:h-[100dvh]">
<div className="flex flex-col gap-6">
<a className="text-xl font-medium text-[#F7F8F8] flex items-center justify-between group" href="/product">
        Product
        <svg className="text-[#5E6AD2] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group" href="/method">
        Method
        <svg className="text-[#4DAF73] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group" href="/pricing">
        Pricing
        <svg className="text-[#E2B340] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group" href="/customers">
        Customers
        <svg className="text-[#FF5F57] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group" href="/changelog">
        Changelog
        <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="h-px bg-white/10 w-full my-2"></div>
<div className="flex flex-col gap-4">
<a className="text-[15px] font-medium text-[#F7F8F8] bg-white/10 rounded-lg py-3 text-center border border-white/5 hover:bg-white/15 transition-colors" href="#">Log in</a>
<a className="text-[15px] font-medium text-[#050505] bg-white rounded-lg py-3 text-center hover:bg-gray-200 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<main className="flex min-h-screen flex-col overflow-hidden antialiased selection:bg-purple-500/30 selection:text-purple-200 pt-32 pb-20 relative perspective-[2000px] items-center justify-start" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}>

<style className="">
        @keyframes float-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes drop-in {
            0% { opacity: 0; transform: translateY(-40px) translateZ(-50px); }
            100% { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes reveal-pane {
            0% { opacity: 0; transform: translateX(-10px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes item-slide {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .anim-delay-100 { animation-delay: 100ms; }
        .anim-delay-200 { animation-delay: 200ms; }
        .anim-delay-300 { animation-delay: 300ms; }
        .anim-delay-400 { animation-delay: 400ms; }
        .anim-delay-500 { animation-delay: 500ms; }
        .anim-delay-600 { animation-delay: 600ms; }
        .anim-delay-700 { animation-delay: 700ms; }
        
        .glass-panel {
            background: rgba(15, 16, 18, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 
                0 0 0 1px rgba(255,255,255,0.08),
                0 20px 50px -10px rgba(0,0,0,0.5),
                inset 0 1px 0 rgba(255,255,255,0.1);
        }
    </style>

<div className="relative z-20 flex flex-col items-center text-center max-w-[1000px] px-6 mb-16 animate-[float-in-up_0.8s_ease-out_forwards]">
<h1 className="leading-[0.9] bg-clip-text md:text-[92px] text-6xl font-semibold text-transparent tracking-[-0.04em] bg-gradient-to-b from-white via-white to-white/60 mb-8 pt-2 pb-2">The new standard for<br/>building software</h1>
<p className="text-[21px] leading-[1.5] text-[#8A8F98] max-w-[640px] mx-auto mb-10 font-normal">
            Meet the system for modern software development.
            Streamline issues, projects, and product roadmaps.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="group relative h-12 px-8 rounded-full bg-white text-black font-medium text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out skew-x-12"></div>
<span className="relative z-10 flex items-center gap-2">
        Start building
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<a className="group flex items-center gap-2 text-[15px] text-[#8A8F98] hover:text-white transition-colors" href="#">
<span className="">New: Axis agent for Slack</span>
<svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="12" viewbox="0 0 12 12" width="12"><path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>

<div className="flex w-full h-[800px] max-w-[1400px] z-10 pt-12 pb-0 relative perspective-[2000px] justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>
<div className="dashboard-wrapper absolute top-10 transition-transform duration-500 ease-out hover:scale-[1.02]" style={{transform: 'rotateX(4.73333deg) rotateY(-1.89333deg) rotateZ(1.18333deg)', transformStyle: 'preserve-3d', width: '1100px', height: '700px'}}>

<div className="dashboard-container w-full h-full rounded-xl bg-[#0F1011] border border-white/10 flex overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative">

<div className="w-[240px] bg-[#0A0A0A] border-r border-white/5 flex flex-col relative z-20">

<div className="h-14 flex items-center px-5 gap-2 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
</div>

<div className="p-3">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-[#CCC] text-sm font-medium transition-colors">
<div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold border border-indigo-500/30">O</div>
<span className="">Axis Inc.</span>
<svg className="ml-auto w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex-1 px-3 flex flex-col gap-6 overflow-y-auto py-2">
<div className="flex flex-col gap-0.5">
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-white font-medium bg-white/10 rounded-md cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="flex-1">Inbox</span>
<span className="text-[10px] font-semibold bg-blue-500 text-white px-1.5 py-0.5 rounded-full">4</span>
</div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            My Issues
                        </div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Views
                        </div>
</div>

<div className="flex flex-col gap-0.5">
<div className="px-2 text-[10px] font-semibold text-[#444] uppercase tracking-wider mb-1">Favorites</div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<div className="w-4 h-4 rounded-sm border border-[#5E6AD2]/30 flex items-center justify-center text-[9px] text-[#5E6AD2] font-bold">R</div>
                            Roadmap 2024
                        </div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<div className="w-4 h-4 rounded-sm border border-[#E2B340]/30 flex items-center justify-center text-[#E2B340] font-bold">Q</div>
                            Q4 Goals
                        </div>
</div>

<div className="flex flex-col gap-0.5">
<div className="px-2 text-[10px] font-semibold text-[#444] uppercase tracking-wider mb-1">Your Teams</div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<span className="w-1.5 h-1.5 rounded bg-[#5E6AD2]"></span> Core Engine
                         </div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<span className="w-1.5 h-1.5 rounded bg-[#4DAF73]"></span> Platform
                         </div>
<div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
<span className="w-1.5 h-1.5 rounded bg-[#E2B340]"></span> Design System
                         </div>
</div>
</div>

<div className="p-3 border-t border-white/5 mt-auto">
<div className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
<img className="w-6 h-6 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<div className="text-xs font-medium text-gray-300">Alicia V.</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0F1011] relative z-10">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0F1011]/100 backdrop-blur-md">
<div className="flex items-center gap-3 text-sm">
<div className="w-5 h-5 rounded bg-[#5E6AD2] flex items-center justify-center text-white shadow-[0_0_10px_rgba(94,106,210,0.4)]">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="text-[#888]">Core Engine</span>
<span className="text-[#444]">/</span>
<span className="font-medium text-white">Inbox</span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<img className="w-6 h-6 rounded-full ring-2 ring-[#0F1011] object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp"/>
<img className="w-6 h-6 rounded-full ring-2 ring-[#0F1011] object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
</div>
<button className="h-7 px-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-xs text-[#AAA] transition-colors">Filter</button>
<button className="h-7 w-7 bg-[#5E6AD2] hover:bg-[#4b55a8] rounded flex items-center justify-center text-white shadow-[0_0_10px_rgba(94,106,210,0.3)] transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
</div>
</div>

<div className="h-10 border-b border-white/5 flex items-center px-6 gap-6 text-[11px] text-[#666] font-medium tracking-wide bg-[#0A0A0A]/30">
<div className="flex items-center gap-2 text-white cursor-pointer hover:text-white transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
                        List
                    </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-[#CCC] transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="9" x2="9" y1="3" y2="21"></line></svg>
                        Board
                    </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-[#CCC] transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                        Calendar
                    </div>
<div className="ml-auto flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#4DAF73]"></span> 36 active issues
                    </div>
</div>

<div className="flex-1 overflow-y-auto p-4">

<div className="grid grid-cols-[80px_1fr_100px_100px_100px] px-3 py-2 text-[10px] uppercase font-semibold text-[#555] tracking-wider border-b border-white/5 mb-1">
<div className="">ID</div>
<div>Title</div>
<div>Priority</div>
<div>Status</div>
<div className="text-right">Assignee</div>
</div>

<div className="group grid grid-cols-[80px_1fr_100px_100px_100px] items-center px-3 py-2.5 text-[13px] border-b border-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-md cursor-pointer">
<div className="font-mono text-[#666] text-xs">ORB-101</div>
<div className="text-[#E0E0E0] font-medium flex items-center gap-2">
                            Refactor sync engine
                            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-[#888] font-normal">Core</span>
</div>
<div className="flex items-center gap-1.5">
<svg fill="none" height="12" stroke="#FF5F57" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
<span className="text-[#FF5F57] text-xs">High</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-[#E2B340] flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#E2B340]/50"></div>
</div>
<span className="text-[#CCC] text-xs">In Progress</span>
</div>
<div className="flex justify-end">
<img className="w-5 h-5 rounded-full ring-1 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
</div>
</div>

<div className="group grid grid-cols-[80px_1fr_100px_100px_100px] items-center px-3 py-2.5 text-[13px] border-b border-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-md cursor-pointer">
<div className="font-mono text-[#666] text-xs">ORB-102</div>
<div className="text-[#E0E0E0] font-medium flex items-center gap-2">Design new auth flow</div>
<div className="flex items-center gap-1.5">
<svg fill="none" height="12" stroke="#E2B340" strokeWidth="2" viewbox="0 0 24 24" width="12"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<span className="text-[#E2B340] text-xs">Medium</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-[#888]"></div>
<span className="text-[#888] text-xs">Todo</span>
</div>
<div className="flex justify-end">
<img className="w-5 h-5 rounded-full ring-1 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
</div>
</div>

<div className="group grid grid-cols-[80px_1fr_100px_100px_100px] items-center px-3 py-2.5 text-[13px] border-b border-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-md cursor-pointer">
<div className="text-[#666] text-xs font-mono">ORB-103</div>
<div className="text-[#888] line-through font-medium flex items-center gap-2">Update API docs</div>
<div className="flex items-center gap-1.5">
<svg fill="none" height="12" stroke="#4DAF73" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
<span className="text-[#888] text-xs">Low</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#5E6AD2] flex items-center justify-center">
<svg fill="none" height="8" stroke="white" strokeWidth="4" viewbox="0 0 24 24" width="8"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-[#5E6AD2] text-xs">Done</span>
</div>
<div className="flex justify-end">
<img className="w-5 h-5 rounded-full ring-1 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a44deb57-f322-4fc8-9184-d05e21080cb2_320w.jpg"/>
</div>
</div>

<div className="group grid grid-cols-[80px_1fr_100px_100px_100px] items-center px-3 py-2.5 text-[13px] border-b border-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-md cursor-pointer">
<div className="text-[#666] text-xs font-mono">ORB-104</div>
<div className="text-[#E0E0E0] font-medium flex items-center gap-2">Fix dark mode regression</div>
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 rounded flex items-center justify-center bg-[#FF5F57] shadow-[0_0_8px_rgba(255,95,87,0.4)]">
<svg fill="none" height="8" stroke="white" strokeWidth="4" viewbox="0 0 24 24" width="8"><line x1="12" x2="12" y1="2" y2="22"></line><line x1="2" x2="22" y1="12" y2="12"></line></svg>
</div>
<span className="text-[#FF5F57] text-xs font-semibold">Urgent</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-[#888]"></div>
<span className="text-[#888] text-xs">Todo</span>
</div>
<div className="flex justify-end">
<div className="w-5 h-5 rounded-full bg-[#333] border border-dashed border-[#666] flex items-center justify-center text-[9px] text-[#888]">?</div>
</div>
</div>
</div>
</div>

</div>

<div className="absolute top-[280px] left-[50%] -translate-x-1/2 w-[340px] bg-[#1A1B1E] border border-white/10 rounded-lg shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] p-1 z-40 animate-[float-in-up_1s_ease-out_0.5s_forwards] opacity-0" style={{transform: 'translateZ(60px)'}}>
<div className="flex items-center gap-3 p-3 border-b border-white/5">
<div className="w-2 h-2 rounded-full bg-[#4DAF73] shadow-[0_0_5px_#4DAF73]"></div>
<input className="bg-transparent border-none text-sm text-white placeholder-[#666] focus:outline-none w-full font-medium" placeholder="Search issues..." type="text"/>
<div className="text-[10px] text-[#555] border border-[#333] rounded px-1.5 py-0.5 bg-[#111]">⌘K</div>
</div>
<div className="p-1">
<div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded text-sm text-[#CCC] cursor-pointer">
<svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Create new issue
                 </div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded text-sm text-[#CCC] cursor-pointer">
<svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Change view
                 </div>
</div>
</div>
</div>
</div></main>


<div className="clients-section overflow-hidden z-10 bg-[#000000] w-full pt-24 pb-24 relative">

<div className="clients-header text-center mb-20 px-6 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Powering the world’s best product teams.</h2>
<p className="text-lg md:text-xl text-[#8A8F98] font-normal leading-relaxed">From next-gen startups to established enterprises.</p>
</div>

<div className="ticker-row w-full overflow-hidden flex mb-16 relative reveal delay-100" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'}}>
<div className="track track-right flex items-center gap-24 w-max">

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white font-sans tracking-tight">OpenAI</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center text-black font-bold text-lg leading-none">$</div>
<span className="text-2xl font-semibold text-white tracking-tight">Cash App</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-3xl font-medium text-white font-sans tracking-tight">scale</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white tracking-tight lowercase">ramp</span>
<svg className="w-6 h-6 text-white" fill="currentColor" height="24" viewbox="0 0 24 24" width="24"><path d="M2 18h6c0-3 2 18z"></path></svg>
</div>

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white font-sans tracking-tight">OpenAI</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center text-black font-bold text-lg leading-none">$</div>
<span className="text-2xl font-semibold text-white tracking-tight">Cash App</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-3xl font-medium text-white font-sans tracking-tight">scale</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white tracking-tight lowercase">ramp</span>
<svg className="w-6 h-6 text-white" fill="currentColor" height="24" viewbox="0 0 24 24" width="24"><path d="M2 18h6c0-5 4-9 9-9h5V6h-5C9 6 2 13 2 18z"></path></svg>
</div>

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white font-sans tracking-tight">OpenAI</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center text-black font-bold text-lg leading-none">$</div>
<span className="text-2xl font-semibold text-white tracking-tight">Cash App</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-3xl font-medium text-white font-sans tracking-tight">scale</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-semibold text-white tracking-tight lowercase">ramp</span>
<svg className="w-6 h-6 text-white" fill="currentColor" height="24" viewbox="0 0 24 24" width="24"><path d="M2 18h6c0-5 4-9 9-9h5V6h-5C9 6 2 13 2 18z"></path></svg>
</div>
</div>
</div>

<div className="ticker-row flex w-full overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'}}>
<div className="track track-left flex items-center gap-24 w-max">

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" viewbox="0 0 24 24"><path d="M12 1L24 22H0L12 1Z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight">Vercel</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-bold text-white tracking-tight font-sans">coinbase</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" fill="white"></path></svg>
<span className="text-2xl font-bold text-white tracking-widest uppercase">BOOM</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" height="24" viewbox="0 0 24 24" width="24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.3l7 3.5v7.4l-7-3.5V9.3zm9 10.9v-7.4l7-3.5v7.4l-7 3.5z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight uppercase">CURSOR</span>
</div>

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" viewbox="0 0 24 24"><path className="" d="M12 1L24 22H0L12 1Z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight">Vercel</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-bold text-white tracking-tight font-sans">coinbase</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" fill="white"></path></svg>
<span className="text-2xl font-bold text-white tracking-widest uppercase">BOOM</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" height="24" viewbox="0 0 24 24" width="24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.3l7 3.5v7.4l-7-3.5V9.3zm9 10.9v-7.4l7-3.5v7.4l-7 3.5z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight uppercase">CURSOR</span>
</div>

<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" viewbox="0 0 24 24"><path d="M12 1L24 22H0L12 1Z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight">Vercel</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<span className="text-2xl font-bold text-white tracking-tight font-sans">coinbase</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" fill="white"></path></svg>
<span className="text-2xl font-bold text-white tracking-widest uppercase">BOOM</span>
</div>
<div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
<svg className="w-6 h-6" fill="white" height="24" viewbox="0 0 24 24" width="24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.3l7 3.5v7.4l-7-3.5V9.3zm9 10.9v-7.4l7-3.5v7.4l-7 3.5z"></path></svg>
<span className="text-2xl font-bold text-white tracking-tight uppercase">CURSOR</span>
</div>
</div>
</div>
</div>

<section className="features md:px-12 overflow-hidden bg-[#050505] w-full pt-24 pr-6 pb-24 pl-6 relative">
<style>
        @keyframes float-layers {
            0%, 100% { transform: translateY(0px) rotateX(50deg) rotateZ(-30deg) translateZ(0); }
            50% { transform: translateY(-10px) rotateX(50deg) rotateZ(-30deg) translateZ(15px); }
        }
        @keyframes shimmer-line {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        @keyframes dash-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
    </style>
<div className="max-w-[1200px] mx-auto relative z-10">

<div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-12">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1] max-w-xl reveal">
                Made for modern
                <span className="block">product teams</span>
</h2>
<div className="max-w-lg pt-2 reveal delay-100">
<p className="text-lg text-[#8A8F98] leading-relaxed mb-6 font-light">Axis is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.</p>
<a className="inline-flex items-center text-white font-medium hover:text-[#bbb] transition-colors group text-sm" href="#">
                    Make the switch
                    <svg className="ml-1 group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-100">
<div className="relative w-full flex-1 flex items-center justify-center perspective-[800px] overflow-visible">

<div className="relative w-40 h-40 preserve-3d transition-transform duration-700 group-hover:translate-y-[-10px]" style={{transform: 'rotateX(60deg) rotateZ(-45deg) rotateY(0deg)'}}>

<div className="absolute inset-0 bg-[#1A1A1A] rounded-xl border border-white/5 shadow-2xl transition-transform duration-500 ease-out translate-z-[-20px] group-hover:translate-x-4 group-hover:translate-y-4"></div>

<div className="absolute inset-0 bg-[#222] rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out translate-z-[0px] group-hover:translate-x-2 group-hover:translate-y-2 flex flex-col p-4 gap-2 opacity-60">
<div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
<div className="h-1.5 w-full bg-white/10 rounded-full mt-2"></div>
<div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out translate-z-[20px] group-hover:translate-z-[40px] flex flex-col p-4 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="font-mono text-[7px] text-gray-500 leading-relaxed">
<span className="text-purple-400">function</span> <span className="text-blue-400">aiModelData</span>() {
                                  <span className="text-purple-400">return</span> <span className="text-green-400">&lt;AIModel&gt;</span>
                                  <span className="text-blue-300">accuracy</span>=<span className="text-orange-300">0.99</span>
                                };
                                <span className="text-gray-600">// Issues</span>
<span className="text-blue-300">let</span> <span className="text-white">model</span> = ...
                            </div>

<div className="absolute -right-12 top-0 text-[8px] text-white/30 rotate-90 origin-top-left">Roadmap</div>
<div className="absolute -right-12 top-8 text-[8px] text-white/30 rotate-90 origin-top-left">Projects</div>
<div className="absolute -right-12 top-16 text-[8px] text-white/30 rotate-90 origin-top-left">Issues</div>
</div>
</div>
</div>
<div className="flex items-end justify-between relative z-10 mt-auto">
<div className="max-w-[80%]">
<h3 className="text-xl font-medium text-white leading-tight">Purpose-built for product development</h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M12 5v14M5 12h14"></path></svg>
</div>
</div>
</div>

<div className="group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-200">
<div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 20px'}}></div>

<div className="relative w-full h-32 flex flex-col items-center justify-center">
<div className="absolute top-0 right-[20%] font-mono text-white/40 text-lg font-medium italic tracking-tight opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">50ms</div>
<div className="w-full h-full flex flex-col justify-evenly opacity-40 group-hover:opacity-80 transition-opacity duration-500 transform skew-x-[-20deg]">
<div className="h-px w-[80%] bg-gradient-to-r from-transparent via-white/30 to-transparent self-end transition-all duration-700 group-hover:w-[100%]"></div>
<div className="h-px w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent self-end transition-all duration-500 group-hover:w-[90%] delay-75"></div>
<div className="h-px w-[90%] bg-gradient-to-r from-transparent via-white/20 to-transparent self-end transition-all duration-1000 group-hover:w-[110%] delay-100"></div>
<div className="h-px w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent self-end transition-all duration-300 group-hover:w-[80%]"></div>
<div className="h-px w-[70%] bg-gradient-to-r from-transparent via-white/30 to-transparent self-end transition-all duration-700 group-hover:w-[95%] delay-150"></div>
</div>

<div className="absolute top-1/2 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors"></div>
</div>
</div>
<div className="flex items-end justify-between relative z-10 mt-auto">
<div className="max-w-[80%]">
<h3 className="text-xl font-medium text-white leading-tight">Designed to move fast</h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M12 5v14M5 12h14"></path></svg>
</div>
</div>
</div>

<div className="group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-300">
<div className="relative w-full flex-1 flex items-center justify-center perspective-[800px]">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none" style={{transform: 'rotateX(60deg) rotateZ(45deg) scale(2)'}}>
<div className="w-[400px] h-[400px]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px', border: '1px dashed rgba(255,255,255,0.3)'}}></div>
</div>

<div className="relative transform transition-transform duration-700 ease-out group-hover:translate-y-[-15px]" style={{transform: 'rotateX(50deg) rotateZ(-30deg)'}}>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-black blur-xl opacity-80 transform scale-y-[0.3]"></div>

<div className="w-28 h-10 bg-[#1A1A1A] border border-white/20 rounded-md flex items-center justify-between px-3 shadow-2xl relative z-10 group-hover:border-white/40 group-hover:bg-[#222] transition-all">
<span className="w-3 h-3 border border-white/30 rounded-sm flex items-center justify-center text-[8px] text-white/50">+</span>
<span className="text-white text-xs font-medium tracking-wide">Create</span>
</div>

<div className="absolute top-1/2 -left-[100%] w-[300%] h-px border-t border-dashed border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-[100%] left-1/2 h-[300%] w-px border-l border-dashed border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute -right-4 -bottom-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
<svg fill="white" height="24" stroke="black" strokeWidth="1" viewbox="0 0 24 24" width="24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path></svg>
</div>
</div>
</div>
<div className="flex items-end justify-between relative z-10 mt-auto">
<div className="max-w-[80%]">
<h3 className="text-xl font-medium text-white leading-tight">Crafted to perfection</h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M12 5v14M5 12h14"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid-section w-full max-w-[1400px] mx-auto flex flex-col md:flex-row border-t border-b border-white/5 bg-[#050505] relative overflow-hidden group/section">
<style>
        @keyframes subtle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
        }
        @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); border-color: rgba(255,255,255,0.1); }
            50% { box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.1); border-color: rgba(255,255,255,0.2); }
        }
        @keyframes text-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        @keyframes cursor-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        @keyframes code-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10%); }
        }
        @keyframes fade-in-up-delay {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    </style>

<div className="grid-col flex-1 p-8 md:p-16 md:pr-12 flex flex-col gap-12 border-b md:border-b-0 md:border-r border-white/5 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent transition-colors hover:bg-white/[0.02]">
<div className="col-text z-10">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Axis MCP</h3>
<p className="text-lg text-[#8A8F98] leading-relaxed max-w-md font-light">Connect Axis to your favorite tools including Cursor, Claude, ChatGPT, and more.</p>
</div>
<div className="col-visual h-[380px] w-full flex items-center justify-center relative perspective-[1000px]">

<div className="relative w-full max-w-[420px] bg-[#0F1011] rounded-xl border border-white/10 p-5 overflow-hidden shadow-2xl group/card transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)]">

<div className="flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] mb-6">
<svg className="animate-[spin_10s_linear_infinite]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
                    Triage Intelligence
                </div>

<div className="space-y-4 opacity-40 blur-[1px] transition-all duration-500 group-hover/card:blur-[2px] group-hover/card:opacity-30">
<div className="flex items-center gap-3 text-[13px] text-[#666]">
<span className="w-20">Suggestions</span>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
<span className="text-gray-400">nan</span>
</div>
<span className="px-2 py-1 rounded border border-dashed border-white/10 text-xs">Mobile App Refactor</span>
<div className="flex items-center gap-1.5 ml-auto">
<span className="w-1.5 h-1.5 rounded-full bg-[#E24040]"></span>
<span className="text-xs">Slack</span>
</div>
</div>
<div className="flex items-center gap-3 text-[13px] text-[#666]">
<span className="w-20">Duplicate of</span>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
<span className="text-gray-400">nan</span>
</div>
</div>
<div className="flex items-center gap-3 text-[13px] text-[#666]">
<span className="w-20">Related to</span>
<div className="h-6 w-24 bg-white/5 rounded"></div>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-[#161719] rounded-lg border border-white/10 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,1)] ring-1 ring-white/5 backdrop-blur-xl transform transition-all duration-500 ease-out translate-y-2 group-hover/card:translate-y-0 opacity-90 group-hover/card:opacity-100" style={{animation: 'subtle-float 6s ease-in-out infinite'}}>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<h4 className="text-[13px] font-medium text-white">Why this assignee was suggested</h4>
</div>
<p className="text-[12px] leading-relaxed text-[#8A8F98]">This person was the assignee on previous issues related to performance problems in the mobile app launch flow.</p>
<div className="h-px w-full bg-white/5 my-1"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-[#666] uppercase tracking-wider">Alternatives</span>
<div className="flex -space-x-1.5">
<img alt="" className="w-5 h-5 rounded-full ring-2 ring-[#161719] grayscale opacity-70" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-5 h-5 rounded-full ring-2 ring-[#161719] grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48efba97-0b3f-4a79-a4e3-6d8f000e4515_320w.jpg"/>
</div>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[12px] font-medium text-white transition-all hover:scale-105 active:scale-95 group/btn">
<svg className="text-white group-hover/btn:text-[#4DAF73] transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Accept suggestion
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid-col flex-1 p-8 md:p-16 md:pl-12 flex flex-col gap-12 relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent transition-colors hover:bg-white/[0.02] reveal-right delay-200">
<div className="col-text z-10">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Linear MCP</h3>
<p className="text-lg text-[#8A8F98] leading-relaxed max-w-md font-light">Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.</p>
</div>
<div className="col-visual h-[380px] w-full flex items-center justify-center relative perspective-[1000px]">

<div className="relative w-full max-w-[440px] h-[300px] bg-[#0A0B0C] rounded-xl border border-white/10 overflow-hidden shadow-2xl group/terminal">

<div className="absolute inset-0 p-6 font-mono text-[11px] leading-loose text-[#555] opacity-60 select-none overflow-hidden">
<div className="" style={{animation: 'code-scroll 20s linear infinite'}}>
<span className="text-[#666] block mb-2">// mcp.linear.app/sse</span>
<span className="block"><span className="text-[#d97757]">"mcpServers"</span>: {</span>
<span className="block pl-4"><span className="text-[#569CD6]">"Axis"</span>: {</span>
<span className="block pl-8"><span className="text-[#d97757]">"command"</span>: <span className="text-[#98c379]">"npx"</span>,</span>
<span className="block pl-8"><span className="text-[#d97757]">"args"</span>: [</span>
<span className="block pl-12"><span className="text-[#98c379]">-y"</span>,</span>
<span className="block pl-12"><span "="" className="text-[#98c379]">"@linear/mcp-server"</span></span>
<span className="block pl-8">],</span>
<span className="block pl-8"><span className="text-[#d97757]">"env"</span>: {</span>
<span className="block pl-12"><span className="text-[#569CD6]">"LINEAR_API_KEY"</span>: <span className="text-[#98c379]">"lin_api_..."</span></span>
<span className="block pl-8">}</span>
<span className="block pl-4">},</span>
<span className="block pl-4"><span className="text-[#569CD6]">"github"</span>: {</span>
<span className="block pl-8"><span className="text-[#d97757]">"command"</span>: <span className="text-[#98c379]">"npx"</span>,</span>
<span className="block pl-8"><span className="text-[#d97757]">"args"</span>: [<span "="" className="text-[#98c379]">"-y"</span>, <span "="" className="text-[#98c379]">"@modelcontextprotocol/server-github"</span>],</span>
<span className="block pl-8"><span className="text-[#d97757]">"env"</span>: {</span>
<span className="block pl-12"><span className="text-[#569CD6]">"GITHUB_PERSONAL_ACCESS_TOKEN"</span>: <span className="text-[#98c379]">"ghp_..."</span></span>
<span className="block pl-8">}</span>
<span className="block pl-4">}</span>
<span className="block">}</span>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/40 to-transparent pointer-events-none"></div>

<div className="absolute bottom-6 left-6 right-6 bg-[#161719]/80 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover/terminal:border-white/20 group-hover/terminal:bg-[#161719]/90" style={{animation: 'glow-pulse 4s infinite ease-in-out'}}>
<div className="flex items-center gap-2 mb-4">
<div className="w-0.5 h-4 bg-blue-500 animate-[cursor-blink_1s_step-end_infinite]"></div>
<span className="text-[14px] text-gray-300 font-light">Ask anything</span>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                            Attach
                        </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            Search
                        </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                            Reason
                        </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:px-12 flex flex-col min-h-[850px] bg-[#050505] w-full pt-32 pr-6 pb-32 pl-6 relative perspective-[2000px]">
<style>
    @keyframes scene-drift {
      0% {
        transform: rotateX(55deg) rotateZ(-15deg) rotateY(5deg) translateY(0px);
      }

      50% {
        transform: rotateX(58deg) rotateZ(-15deg) rotateY(3deg) translateY(-30px);
      }

      100% {
        transform: rotateX(55deg) rotateZ(-15deg) rotateY(5deg) translateY(0px);
      }
    }

    @keyframes active-pulse {

      0%,
      100% {
        box-shadow: 0 0 0 1px rgba(77, 175, 115, 0.3), 0 20px 50px -10px rgba(0, 0, 0, 0.6);
        border-color: rgba(255, 255, 255, 0.1);
      }

      50% {
        box-shadow: 0 0 0 2px rgba(77, 175, 115, 0.6), 0 20px 50px -10px rgba(77, 175, 115, 0.2);
        border-color: rgba(77, 175, 115, 0.5);
      }
    }

    @keyframes laser-scan {
      0% {
        opacity: 0.4;
        height: 100%;
        top: -100px;
      }

      50% {
        opacity: 0.8;
        height: 120%;
        top: -120px;
        box-shadow: 0 0 20px rgba(77, 175, 115, 0.5);
      }

      100% {
        opacity: 0.4;
        height: 100%;
        top: -100px;
      }
    }

    @keyframes signal-flow {
      0% {
        stroke-dashoffset: 200;
        opacity: 0;
      }

      20% {
        opacity: 1;
      }

      80% {
        opacity: 1;
      }

      100% {
        stroke-dashoffset: 0;
        opacity: 0;
      }
    }

    @keyframes float-particle {
      0% {
        transform: translate3d(0, 0, 0);
        opacity: 0;
      }

      20% {
        opacity: 0.6;
      }

      100% {
        transform: translate3d(0, -60px, 0);
        opacity: 0;
      }
    }

    @keyframes blink-badge {

      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0.4;
      }
    }
  </style>

<div className="relative z-20 max-w-4xl ml-[5%] mb-16 pointer-events-none select-none">
<div className="flex items-center gap-3 text-[#4DAF73] text-[13px] font-medium tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DAF73] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4DAF73]"></span>
</span>
<span className="uppercase tracking-wider">Project and long-term planning</span>
<svg className="opacity-50" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<h2 className="text-6xl md:text-[84px] font-semibold tracking-[-0.03em] leading-[1] text-white mb-8">
      Set the
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#666]">product direction</span>
</h2>
<p className="text-[22px] text-[#8A8F98] leading-[1.5] max-w-2xl font-light tracking-[-0.01em]">
      Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Axis’s
      visual planning tools.
    </p>
</div>

<div className="overflow-visible select-none absolute top-0 right-0 bottom-0 left-0 perspective-[1000px]">

<div className="w-[140%] h-[150%] mt-44 absolute top-[10%] left-[-20%]" style={{transform: 'rotateX(55deg) rotateZ(-15deg) rotateY(5deg)', transformStyle: 'preserve-3d', animation: 'scene-drift 24s ease-in-out infinite'}}>

<div className="absolute inset-0 border-t border-white/10" style={{backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 140px)'}}>

<div className="relative h-full w-full">

<div className="absolute left-[15%] top-6 text-xs font-mono text-[#555] tracking-wider">AUG 3</div>
<div className="absolute left-[15%] top-0 h-full w-px border-l border-dashed border-white/5"></div>

<div className="absolute left-[22%] top-8 text-[10px] font-mono text-[#333]">10</div>
<div className="absolute left-[28%] top-10 h-3 w-px bg-white/5"></div>

<div className="absolute left-[35%] top-6 text-xs font-mono text-[#555] tracking-wider">17</div>
<div className="absolute left-[35%] top-0 h-full w-px border-l border-white/5"></div>

<div className="absolute left-[48%] w-px bg-gradient-to-b from-transparent via-[#4DAF73] to-transparent z-10" style={{animation: 'laser-scan 4s ease-in-out infinite'}}></div>

<div className="absolute left-[48%] top-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4DAF73]/20 opacity-0 scale-0" style={{animation: 'ping 4s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div className="absolute left-[48%] top-[-25px] transform -translate-x-1/2 -rotate-x-60 z-30" style={{transformStyle: 'preserve-3d'}}>
<div className="bg-[#1A1C1E] ring-1 ring-[#333] px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-[#ccc] shadow-2xl whitespace-nowrap flex items-center gap-1.5" style={{transform: 'rotateX(-55deg)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-[#4DAF73] animate-pulse"></div>
              AUG 22
            </div>
</div>

<div className="absolute left-[60%] top-6 text-xs font-mono text-[#555] tracking-wider">24</div>
<div className="absolute left-[60%] top-0 h-full w-px border-l border-white/5"></div>

<div className="absolute left-[75%] top-6 text-xs font-bold font-mono text-[#555] tracking-[0.2em]">SEP</div>
<div className="absolute left-[75%] top-0 h-full w-px border-l border-white/10"></div>
</div>
</div>

<div className="absolute inset-0" style={{transformStyle: 'preserve-3d'}}>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{transform: 'translateZ(10px)'}}>
<defs>
<lineargradient id="flow-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(77,175,115,0)"></stop>
<stop offset="50%" stop-color="#4DAF73"></stop>
<stop offset="100%" stop-color="rgba(77,175,115,0)"></stop>
</lineargradient>
</defs>

<path d="M 40% 200 Q 48% 200 55% 308" fill="none" stroke="url(#flow-gradient)" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="2" style={{animation: 'signal-flow 3s linear infinite', opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(77,175,115,0.5))'}}>
</path>

<line stroke="rgba(77,175,115,0.2)" stroke-dasharray="4 4" x1="48%" x2="48%" y1="0" y2="170"></line>
</svg>

<div className="absolute top-[140px] left-[22%] w-[38%] h-[64px] bg-[#141518]/90 backdrop-blur-xl rounded-lg border border-white/10 flex flex-col justify-center px-5 z-20 group transition-transform duration-500 hover:translate-z-[60px]" style={{transform: 'translateZ(40px)', animation: 'active-pulse 4s infinite'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">

<div className="w-5 h-5 rounded-[3px] bg-[#4DAF73]/10 border border-[#4DAF73] flex items-center justify-center transform rotate-45 shadow-[0_0_10px_rgba(77,175,115,0.2)]">
<div className="w-1.5 h-1.5 bg-[#4DAF73] rounded-full shadow-[0_0_5px_#4DAF73]"></div>
</div>
<span className="text-[17px] font-medium text-white tracking-tight group-hover:text-[#4DAF73] transition-colors">Realtime inference</span>
</div>

<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#141518] grayscale opacity-80 group-hover:grayscale-0 transition-all object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a97a0c41-fd53-4e71-a67c-d1621d1c359f_320w.jpg"/>
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#141518] grayscale opacity-80 group-hover:grayscale-0 transition-all object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a91c1566-41b6-46c6-9605-e4fbe4ed2f39_320w.jpg"/>
<div className="w-6 h-6 rounded-full ring-2 ring-[#141518] bg-[#333] flex items-center justify-center text-[9px] font-medium text-white/70">
                +3</div>
</div>
</div>

<div className="absolute -bottom-10 left-2 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
<div className="w-1 h-1 bg-white/30 rounded-full"></div> Prototype
          </div>
</div>

<div className="absolute top-[280px] left-[55%] w-[32%] h-[56px] bg-[#0F1012]/80 backdrop-blur-md rounded-lg border border-white/5 flex items-center px-5 gap-4 z-10 shadow-lg hover:border-white/20 transition-colors" style={{transform: 'translateZ(20px)'}}>

<div className="grid grid-cols-2 gap-[3px] opacity-40 rotate-12">
<div className="w-1.5 h-1.5 bg-white rounded-[1px] reveal-left"></div>
<div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
<div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
<div className="w-1.5 h-1.5 bg-white rounded-[1px] reveal-right delay-100"></div>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-medium text-white/80 tracking-tight">RLHF fine tuning</span>
<div className="h-0.5 w-12 bg-white/10 mt-1.5 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white/30 rounded-full"></div>
</div>
</div>

<div className="absolute -bottom-10 left-2 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Beta
          </div>
</div>

<div className="absolute top-[80px] left-[65%] w-[28%] h-[48px] bg-[#0F1012]/60 backdrop-blur-sm rounded-lg border border-white/5 flex items-center px-4 gap-3 z-5 shadow-lg" style={{transform: 'translateZ(10px)'}}>
<div className="w-2 h-2 rounded-full border border-[#E2B340] flex items-center justify-center">
<div className="w-0.5 h-0.5 bg-[#E2B340] rounded-full"></div>
</div>
<span className="text-[13px] font-medium text-white/40 tracking-tight">API Gateway v2</span>
</div>

<div className="absolute bottom-[20%] right-[10%] w-[180px] p-4 bg-[#111]/80 backdrop-blur border border-white/5 rounded-lg flex flex-col gap-2 z-20" style={{transform: 'translateZ(60px) rotateY(-10deg)'}}>
<div className="text-[10px] uppercase tracking-wider text-white/40 font-mono">Sprint Velocity</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-white">42.5</span>
<span className="text-xs text-[#4DAF73] mb-1 flex items-center">▲ 12%</span>
</div>

<div className="flex items-end gap-1 h-6 mt-1">
<div className="w-1.5 bg-white/10 h-[40%] rounded-sm"></div>
<div className="w-1.5 bg-white/10 h-[60%] rounded-sm"></div>
<div className="w-1.5 bg-white/10 h-[30%] rounded-sm"></div>
<div className="w-1.5 bg-white/20 h-[80%] rounded-sm"></div>
<div className="w-1.5 bg-[#4DAF73] h-[100%] rounded-sm shadow-[0_0_10px_rgba(77,175,115,0.4)]"></div>
</div>
</div>

<div className="absolute left-[30%] top-[40%] pointer-events-none" style={{transform: 'translateZ(30px)'}}>
<div className="font-mono text-[10px] text-[#4DAF73]/40 whitespace-nowrap" style={{animation: 'float-particle 4s infinite ease-out'}}>git commit -m "fix: latency"</div>
</div>
<div className="absolute left-[50%] top-[60%] pointer-events-none" style={{transform: 'translateZ(15px)'}}>
<div className="font-mono text-[10px] text-white/20 whitespace-nowrap" style={{animation: 'float-particle 5s 1s infinite ease-out'}}>deploy_prod.sh</div>
</div>

<div className="absolute top-[380px] left-[8%] w-[25%] h-[40px] bg-gradient-to-r from-white/5 to-transparent rounded border-l border-t border-white/5 opacity-20" style={{transform: 'translateZ(5px)'}}></div>
</div>
</div>
</div>
</section>


<section className="collab-section">
<div className="collab-container flex flex-col md:flex-row gap-12 md:gap-24 items-center w-full max-w-[1200px] mx-auto px-6 py-24">

<div className="flex-1 max-w-md z-10 reveal-left">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-10 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Real-time artifacts<br/>for better decisions
        </h2>
<div className="flex flex-col relative border-l border-white/10" id="collab-tabs">

<button className="tab-btn text-left px-6 py-4 text-lg font-medium transition-all duration-300 border-l-2 -ml-[1px] text-white border-[#4DAF73] bg-white/5 rounded-r-lg group flex items-center gap-3" onclick="
                const root = this.closest('[data-element-id]');
                // Reset all tabs
                root.querySelectorAll('.tab-btn').forEach(el =&gt; {
                    el.classList.remove('text-white', 'border-[#4DAF73]', 'bg-white/5');
                    el.classList.add('text-[#8A8F98]', 'border-transparent');
                });
                // Activate this tab
                this.classList.add('text-white', 'border-[#4DAF73]', 'bg-white/5');
                this.classList.remove('text-[#8A8F98]', 'border-transparent');
                
                // Switch views
                root.querySelectorAll('.tab-view').forEach(el =&gt; {
                    el.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none', 'scale-95');
                });
                root.querySelector('#view-docs').classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none', 'scale-95');
            ">
<svg className="opacity-70 group-hover:opacity-100 transition-opacity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                Collaborative documents
            </button>

<button className="tab-btn text-left px-6 py-4 text-lg font-medium transition-all duration-300 border-l-2 -ml-[1px] text-[#8A8F98] border-transparent hover:text-gray-300 hover:bg-white/[0.02] rounded-r-lg group flex items-center gap-3" onclick="
                const root = this.closest('[data-element-id]');
                // Reset all tabs
                root.querySelectorAll('.tab-btn').forEach(el =&gt; {
                    el.classList.remove('text-white', 'border-[#4DAF73]', 'bg-white/5');
                    el.classList.add('text-[#8A8F98]', 'border-transparent');
                });
                // Activate this tab
                this.classList.add('text-white', 'border-[#4DAF73]', 'bg-white/5');
                this.classList.remove('text-[#8A8F98]', 'border-transparent');
                
                // Switch views
                root.querySelectorAll('.tab-view').forEach(el =&gt; {
                    el.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none', 'scale-95');
                });
                root.querySelector('#view-comments').classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none', 'scale-95');
            ">
<svg className="opacity-70 group-hover:opacity-100 transition-opacity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Inline comments
            </button>
</div>
</div>

<div className="flex-[1.4] w-full relative h-[460px] reveal-right delay-200 perspective-[1000px]">

<div className="tab-view absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] origin-bottom" id="view-docs" style={{transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="w-full h-full bg-[#0F1011] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative group">

<div className="h-10 border-b border-white/5 bg-[#141517] flex items-center px-4 justify-between select-none">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
</div>
<div className="text-xs text-[#666] font-medium flex items-center gap-1.5 opacity-60">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        specs_v2.md
                    </div>
<div className="w-12"></div>
</div>

<div className="p-8 font-sans text-[#A1A1AA] leading-relaxed text-[15px]">
<div className="text-[11px] font-bold text-[#4DAF73] mb-2 uppercase tracking-widest">Draft</div>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">Product Specifications 2.0</h3>
<p className="mb-4">The new sync engine should handle <span className="text-white bg-[#4DAF73]/20 px-1 rounded relative cursor-text transition-colors hover:bg-[#4DAF73]/30">offline states</span></p><div className="absolute -top-7 left-0 bg-[#4DAF73] text-[10px] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-lg transform transition-transform duration-300 scale-100 flex items-center gap-1">zoe <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span></div> gracefully without data loss.<p></p>
<p className="mb-4 relative">
                        We need to ensure that the <span className="text-white">conflict resolution</span> strategy prioritizes user intent over server timestamp.
                        
<span className="absolute inline-block w-0.5 h-5 bg-[#5E6AD2] ml-0.5 animate-pulse align-middle" style={{animationDuration: '1s'}}></span>
<span className="absolute -top-7 ml-1 bg-[#5E6AD2] text-[10px] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">alex <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span></span>
</p>
<div className="p-4 bg-[#1A1B1E] rounded-lg border border-white/5 mt-6 flex items-start gap-3">
<div className="w-1 h-10 bg-[#E2B340] rounded-full"></div>
<div>
<div className="text-xs text-[#E2B340] font-bold mb-1 uppercase tracking-wider">Note</div>
<p className="text-xs text-[#CCC]">Remember to update the WebSocket protocol to support binary frames for efficiency.</p>
</div>
</div>
</div>
</div>
</div>

<div className="tab-view absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 translate-y-8 pointer-events-none scale-95 origin-bottom" id="view-comments" style={{transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="w-full h-full bg-[#0F1011] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">

<div className="h-10 border-b border-white/5 bg-[#141517] flex items-center px-4 justify-between select-none">
<div className="flex gap-2 opacity-50">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="text-xs text-[#666] font-mono flex items-center gap-2">
<svg className="opacity-50" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        auth_middleware.ts
                    </div>
<div className="w-12"></div>
</div>

<div className="p-6 font-mono text-[13px] leading-loose text-[#888] overflow-hidden relative h-full bg-[#0F1011]">
<div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">1</span> <span><span className="text-[#C678DD]">export</span> <span className="text-[#C678DD]">const</span> <span className="text-[#61AFEF]">verifySession</span> = <span className="text-[#C678DD]">async</span> (req, res) =&gt; {</span></div>
<div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">2</span> <span>  <span className="text-[#C678DD]">const</span> token = req.headers[<span className="text-[#98C379]">'authorization'</span>];</span></div>

<div className="flex relative bg-[#4DAF73]/10 -mx-6 px-6 border-l-2 border-[#4DAF73]">
<span className="w-8 text-[#444] select-none text-right mr-4">3</span> <span>  <span className="text-[#C678DD]">if</span> (!token) <span className="text-[#C678DD]">throw</span> <span className="text-[#C678DD]">new</span> <span className="text-[#E5C07B]">Error</span>(<span className="text-[#98C379]">'No token provided'</span>);</span>

<div className="absolute left-1/3 top-full mt-4 w-[280px] bg-[#1A1B1E] border border-white/10 rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] p-3 z-10 animate-[float-in-up_0.4s_ease-out_forwards]">
<div className="flex items-start gap-3">
<img className="w-8 h-8 rounded-full ring-2 ring-[#0F1011] object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=64&amp;h=64&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-white">Sarah</span>
<span className="text-[10px] text-[#666]">2m ago</span>
</div>
<p className="text-xs text-[#CCC] leading-relaxed">Should we return a 401 status code here instead of throwing a generic error?</p>
</div>
</div>
<div className="mt-3 flex gap-2 pt-2 border-t border-white/5">
<input className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none placeholder-white/20" placeholder="Reply..." type="text"/>
<button className="bg-[#5E6AD2] hover:bg-[#4b55a8] text-white px-3 py-1 rounded text-xs font-medium transition-colors">Send</button>
</div>

<div className="absolute -top-1.5 left-8 w-3 h-3 bg-[#1A1B1E] border-l border-t border-white/10 transform rotate-45"></div>
</div>
</div>
<div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">4</span> <span>  <span className="text-[#C678DD]">const</span> session = <span className="text-[#C678DD]">await</span> db.sessions.<span className="text-[#61AFEF]">find</span>(token);</span></div>
<div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">5</span> <span>  <span className="text-[#C678DD]">return</span> session;</span></div>
<div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">6</span> <span>};</span></div>
</div>
</div>
</div>
</div>
</div>
<div className="feature-footer reveal delay-300">
<div className="ff-item"><h4>Initiatives</h4><p>Coordinate strategic product efforts.</p></div>
<div className="ff-item"><h4 className="">Cross-team projects</h4><p className="">Collaborate across departments.</p></div>
<div className="ff-item"><h4>Milestones</h4><p className="">Break projects down into phases.</p></div>
<div className="ff-item"><h4>Progress insights</h4><p className="">Track scope and velocity automatically.</p></div>
</div>
</section>

<section className="issue-tracking-section">
<div className="it-content reveal-left">
<div className="it-tag"><span className="dot"></span> Task tracking and sprint planning &gt;</div>
<h2 className="">Issue tracking you’ll enjoy using</h2>
<p className="">Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context, and breeze through
            your
            work in views tailored to you and your team.</p>
</div>
<div className="it-visual reveal-right delay-200">
<div className="it-board" style={{transform: 'rotateX(25deg) rotateY(-15deg) rotateZ(5deg)'}}>

<div className="it-col-header" style={{left: '50px', top: '120px'}}>High Priority
                <span style={{opacity: '0.3', marginLeft: '10px'}}>+</span>
</div>
<div className="it-col-header" style={{left: '420px', top: '40px'}}>Urgent</div>


<div className="it-card card-1">
<div className="it-id">ENG-1025</div>
<div className="it-title"><span style={{color: '#E2B340'}}>◐</span> Improve keyboard shortcuts</div>
<div className="it-meta">
<div className="it-chip"><svg fill="currentColor" height="10" viewbox="0 0 24 24" width="10">
<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
</svg></div>
<div className="it-chip">✨ UI Refresh</div>
</div>
</div>

<div className="it-card card-2">
<div className="it-id">ENG-1018</div>
<div className="it-title">
<span style={{border: '1px solid #777', borderRadius: '50%', width: '12px', height: '12px'}}></span>
                    Implement AES-256 Encryption</div>
<div className="it-meta">
<div className="it-chip">! Security improvements</div>
</div>
</div>

<div className="it-card card-3">
<div className="it-id">ENG-1012</div>
<div className="it-title"><span style={{color: '#3b82f6'}}>✔</span> Update payment gateway integration</div>
<div className="it-meta">
<div className="it-chip">PSD2 Regulation</div>
</div>
</div>

<div className="it-card card-4">
<div className="it-id">ENG-902</div>
<div className="it-title"><span style={{color: '#E2B340'}}>◐</span> Remove duplicated Postgres indexes</div>
<div className="it-meta">
<div className="it-chip">! Mobile v1</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden group/section text-[#F7F8F8] bg-[#050505] w-full border-white/5 border-t border-b relative">
<div className="max-w-[1300px] mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="md:p-16 flex flex-col gap-10 group/cycles hover:bg-white/[0.01] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 gap-x-10 gap-y-10">
<div className="max-w-md z-10">
<h3 className="text-2xl md:text-[26px] font-medium tracking-tight mb-3 text-white">Build momentum with Cycles</h3>
<p className="text-[17px] text-[#8A8F98] leading-relaxed font-normal">Create healthy routines and focus your team on what work should happen next.</p>
</div>

<div className="relative w-full aspect-[4/3] bg-[#0E0F11] border border-white/5 rounded-xl overflow-hidden shadow-2xl p-6 flex flex-col group-hover/cycles:border-white/10 transition-colors duration-500">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>

<div className="relative z-10 flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-white text-[13px] font-medium tracking-tight">
<svg className="text-[#888]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
                    Cycle 55
                </div>
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
</div>
<div className="flex items-center gap-4 text-[11px] font-medium text-[#666]">
<div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div> Scope</div>
<div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shadow-[0_0_6px_rgba(94,106,210,0.4)]"></div> Progress</div>
</div>
</div>

<div className="relative flex-1 w-full mt-2">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
</div>

<svg className="overflow-visible w-[472px] h-[282px] absolute top-0 right-0 bottom-0 left-0" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{color: 'rgb(247, 248, 248)', width: '472px', height: '282px'}} viewbox="0 0 300 120">
<defs>
<lineargradient id="fillGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#5E6AD2" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#5E6AD2" stop-opacity="0"></stop>
</lineargradient>
<mask id="pathMask">
<rect fill="white" height="120" width="300" x="0" y="0">
<animate attributename="width" calcmode="spline" dur="1.5s" fill="freeze" from="0" keysplines="0.4 0 0.2 1" to="300"></animate>
</rect>
</mask>
</defs>

<path d="M0,20 L40,20 L60,15 L120,15 L140,25 L300,25" fill="none" mask="url(#pathMask)" opacity="0.5" stroke="#444" stroke-dasharray="3 3" strokeWidth="1.5"></path>

<path className="" d="M0,110 C40,105 80,80 120,60 C160,40 200,35 240,30" fill="url(#fillGradient)" mask="url(#pathMask)" opacity="0.8"></path>

<path d="M0,110 C40,105 80,80 120,60 C160,40 200,35 240,30" fill="none" mask="url(#pathMask)" stroke="#5E6AD2" strokeLinecap="round" strokeWidth="2.5"></path>

<circle className="opacity-0 animate-[fade-in_0.5s_ease-out_0.8s_forwards]" cx="120" cy="60" fill="#0E0F11" r="2.5" stroke="#5E6AD2" strokeWidth="1.5"></circle>
<circle className="opacity-0 animate-[fade-in_0.5s_ease-out_1.2s_forwards] shadow-[0_0_10px_#5E6AD2]" cx="240" cy="30" fill="#5E6AD2" r="3"></circle>

<line opacity="0.3" stroke="#5E6AD2" stroke-dasharray="2 2" strokeWidth="1" x1="240" x2="240" y1="0" y2="120"></line>
</svg>

<div className="absolute top-[10%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 animate-[fade-in-up_0.6s_ease-out_1.4s_forwards]">
<div className="bg-[#1A1B1E]/90 backdrop-blur-md border border-white/10 p-2.5 rounded-lg shadow-xl flex flex-col gap-1 min-w-[100px]">
<div className="flex items-center justify-between gap-3">
<span className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Velocity</span>
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</div>
<div className="flex items-end gap-1.5">
<span className="text-[16px] font-medium text-white tracking-tight">42 pts</span>
<span className="text-[10px] text-emerald-400 font-mono mb-0.5">▲12%</span>
</div>
</div>

<div className="w-px h-4 bg-white/20 mx-auto"></div>
<div className="w-1.5 h-1.5 bg-white/20 rounded-full mx-auto -mt-0.5"></div>
</div>

<div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-[#555] font-mono uppercase tracking-wider">
<span>Apr 22</span>
<span>Apr 29</span>
<span>May 06</span>
</div>
</div>
</div>
<style>
        @keyframes fade-in { to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translate(-50%, -40%); } to { opacity: 1; transform: translate(-50%, -50%); } }
    </style>
</div>

<div className="p-8 md:p-16 flex flex-col gap-10 group/triage hover:bg-white/[0.01] transition-colors duration-500">
<div className="max-w-md z-10">
<h3 className="text-2xl md:text-[26px] font-medium tracking-tight mb-3 text-white">Manage incoming work with Triage</h3>
<p className="text-lg text-[#8A8F98] leading-relaxed font-normal">Review and assign incoming bug reports, feature requests, and other unplanned work.</p>
</div>

<div className="relative w-full aspect-[4/3] bg-[#0E0F11] border border-white/5 rounded-xl overflow-hidden shadow-2xl group-hover/triage:border-white/10 transition-colors duration-500">

<div className="h-10 border-b border-white/5 flex items-center px-4 bg-[#141517]">
<span className="text-[12px] font-medium text-[#888]">Triage</span>
</div>

<div className="p-2 space-y-1 relative">

<div className="p-3 rounded-md bg-[#1A1C1E] border border-white/5 flex items-start gap-3 relative group/item">
<div className="mt-0.5 w-4 h-4 rounded-sm border border-white/20 flex items-center justify-center text-[8px] text-[#888] font-bold">P</div>
<div className="flex-1 min-w-0">
<div className="text-[13px] text-[#EEE] font-medium mb-1 truncate">Users report unexpected rate limiting</div>
<div className="flex items-center gap-2 text-[11px] text-[#666]">
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#333] flex items-center justify-center text-[7px] text-white">TM</div> tom</div>
<span>•</span>
<span>API Core</span>
</div>
</div>

<div className="absolute top-[20px] left-[60px] w-[180px] bg-[#1A1B1E] border border-white/10 rounded-lg shadow-[0_20px_40px_-5px_rgba(0,0,0,0.6)] py-1 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-left">
<div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
<svg className="text-[#888]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[13px]">Accept</span>
<span className="ml-auto text-[10px] text-[#555] font-mono">E</span>
</div>
<div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
<svg className="text-[#888]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span className="text-[13px]">Mark as duplicate</span>
</div>
<div className="h-px bg-white/5 my-1 mx-1"></div>
<div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
<svg className="text-[#888]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
<span className="text-[13px]">Decline</span>
<span className="ml-auto text-[10px] text-[#555] font-mono">Cmd+D</span>
</div>
</div>
</div>

<div className="p-3 rounded-md hover:bg-white/[0.02] flex items-start gap-3 opacity-60">
<div className="mt-0.5 w-4 h-4 rounded-sm border border-white/10 flex items-center justify-center text-[8px] text-[#555]">!</div>
<div className="flex-1 min-w-0">
<div className="text-[13px] text-[#AAA] font-medium mb-1 truncate">RangeError: Maximum call stack size exceeded</div>
<div className="flex items-center gap-2 text-[11px] text-[#555]">
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#222]"></div> romain</div>
</div>
</div>
</div>

<div className="p-3 rounded-md hover:bg-white/[0.02] flex items-start gap-3 opacity-40">
<div className="mt-0.5 w-4 h-4 rounded-sm border border-white/10"></div>
<div className="flex-1 min-w-0">
<div className="text-[13px] text-[#AAA] font-medium mb-1 truncate">Pressing "Enter" quickly when logging in via email</div>
<div className="flex items-center gap-2 text-[11px] text-[#555]">
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#222]"></div> tuomas</div>
</div>
</div>
</div>

<div className="absolute top-[130px] left-[140px] z-30 pointer-events-none drop-shadow-xl">
<svg fill="white" height="24" stroke="black" strokeWidth="1" viewbox="0 0 24 24" width="24"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19138L11.7841 12.3673H5.65376Z"></path></svg>
</div>
</div>
</div>
</div>
</div>

<section aria-label="Workflows and integrations" className="integrations-section">
<style>
        /* ---------- Integrations Section (Self-contained) ---------- */
        .integrations-section {
            --bg: #050505;
            --panel: #0a0a0a;
            --border: rgba(255, 255, 255, 0.08);
            --border-strong: rgba(255, 255, 255, 0.18);
            --text: #f7f8f8;
            --muted: #8a8f98;

            padding: 120px 0;
            background: var(--bg);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            overflow: hidden;
            position: relative;
            color: var(--text);
            font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .integrations-section * {
            box-sizing: border-box;
        }

        .integrations-section .int-header {
            max-width: 1200px;
            margin: 0 auto 60px;
            padding: 0 24px;
        }

        .integrations-section .int-tag {
            color: #a0aec0;
            font-size: 13px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
            letter-spacing: 0.2px;
        }

        .integrations-section .int-tag .dot {
            width: 8px;
            height: 8px;
            background: #a0aec0;
            border-radius: 999px;
            opacity: 0.9;
        }

        .integrations-section .int-header h2 {
            font-size: 56px;
            line-height: 1.1;
            font-weight: 600;
            letter-spacing: -2px;
            margin: 0 0 22px;
            background: linear-gradient(180deg, #ffffff 0%, #aaa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .integrations-section .int-header p {
            font-size: 20px;
            color: var(--muted);
            max-width: 520px;
            line-height: 1.6;
            margin: 0;
        }

        /* Horizontal Scroll Carousel */
        .integrations-section .int-scroll-wrapper {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 40px;
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-snap-type: x proximity;
            scroll-behavior: smooth;
        }

        .integrations-section .int-scroll-wrapper::-webkit-scrollbar {
            display: none;
        }

        .integrations-section .int-track {
            display: flex;
            gap: 24px;
            width: max-content;
            padding-right: 24px;

            /* left align to container edges on large screens */
            padding-left: max(24px, calc(50vw - 600px));
        }

        .integrations-section .int-card {
            min-width: 340px;
            height: 480px;
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
            scroll-snap-align: start;
            outline: none;
            isolation: isolate;
        }

        .integrations-section .int-card::before {
            content: "";
            position: absolute;
            inset: -1px;
            background: radial-gradient(600px 300px at 20% 10%, rgba(94, 106, 210, 0.14), transparent 60%);
            opacity: 0;
            transition: opacity 0.28s ease;
            z-index: 0;
            pointer-events: none;
        }

        .integrations-section .int-card:hover::before,
        .integrations-section .int-card:focus-visible::before {
            opacity: 1;
        }

        .integrations-section .int-card:hover,
        .integrations-section .int-card:focus-visible {
            border-color: var(--border-strong);
            transform: translateY(-6px);
            box-shadow: 0 26px 60px rgba(0, 0, 0, 0.6);
            background: #0c0c0c;
        }

        .integrations-section .int-visual {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }

        .integrations-section .int-info {
            position: relative;
            z-index: 1;
        }

        .integrations-section .int-info h3 {
            font-size: 18px;
            color: #fff;
            margin: 0 0 8px;
            font-weight: 500;
            letter-spacing: -0.2px;
        }

        .integrations-section .int-info p {
            font-size: 15px;
            color: #888;
            line-height: 1.5;
            margin: 0 0 22px;
            max-width: 240px;
        }

        .integrations-section .int-btn {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin-left: auto;
            transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
            font-size: 16px;
            line-height: 1;
            user-select: none;
        }

        .integrations-section .int-card:hover .int-btn,
        .integrations-section .int-card:focus-visible .int-btn {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.14);
            transform: translateX(2px);
        }

        /* --- Entrance Animation (JS toggles .in-view) --- */
        .integrations-section .int-card {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
        }

        .integrations-section .int-card.in-view {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: opacity 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
        }

        /* Card 1: Mobile List Animation */
        .integrations-section .mobile-frame {
            width: 160px;
            height: 260px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 22px;
            overflow: hidden;
            position: relative;
            background: #000;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
        }

        .integrations-section .mobile-frame::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(220px 140px at 50% 0%, rgba(255, 255, 255, 0.08), transparent 55%);
            pointer-events: none;
        }

        .integrations-section .m-header {
            height: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 10px;
            position: relative;
        }

        .integrations-section .m-header::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 10px;
            transform: translateX(-50%);
            width: 60px;
            height: 6px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.10);
        }

        .integrations-section .m-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 0 10px 10px;
            animation: int-scrollUp 4s linear infinite;
            will-change: transform;
        }

        .integrations-section .m-item {
            height: 24px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 6px;
            width: 100%;
        }

        .integrations-section .m-item:nth-child(even) {
            width: 78%;
            opacity: 0.85;
        }

        .integrations-section .m-item:nth-child(3n) {
            width: 92%;
            opacity: 0.9;
        }

        @keyframes int-scrollUp {
            0% {
                transform: translateY(0);
            }

            100% {
                transform: translateY(-104px);
            }
        }

        /* Card 2: Orbit Requests (Breathing Logo) */
        .integrations-section .req-logo {
            width: 108px;
            height: 108px;
            border: 10px solid rgba(255, 255, 255, 0.10);
            border-radius: 999px;
            position: relative;
            animation: int-breathe 3s infinite ease-in-out;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.08);
        }

        .integrations-section .req-logo::after {
            content: "";
            position: absolute;
            inset: 50% auto auto 50%;
            transform: translate(-50%, -50%);
            width: 42px;
            height: 42px;
            background: rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
        }

        @keyframes int-breathe {

            0%,
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.08);
                border-color: rgba(255, 255, 255, 0.10);
            }

            50% {
                box-shadow: 0 0 26px 10px rgba(255, 255, 255, 0.05);
                border-color: rgba(255, 255, 255, 0.18);
            }
        }

        /* Card 3: Integrations (Orbiting) */
        .integrations-section .solar-sys {
            position: relative;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .integrations-section .center-hub {
            width: 42px;
            height: 42px;
            background: #fff;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #000;
            z-index: 2;
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
            user-select: none;
        }

        .integrations-section .orbit-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 1px dashed rgba(255, 255, 255, 0.18);
            border-radius: 999px;
            animation: int-spin 10s linear infinite;
            filter: drop-shadow(0 0 18px rgba(94, 106, 210, 0.12));
        }

        .integrations-section .satellite {
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.14);
            border: 1px solid rgba(255, 255, 255, 0.10);
            border-radius: 999px;
            transform: translate(-50%, -50%);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        .integrations-section .s-1 {
            top: 0%;
            left: 50%;
        }

        .integrations-section .s-2 {
            top: 50%;
            left: 100%;
        }

        .integrations-section .s-3 {
            top: 100%;
            left: 50%;
        }

        .integrations-section .s-4 {
            top: 50%;
            left: 0%;
        }

        @keyframes int-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        /* Card 4: Design (Floating Isometric Layers) */
        .integrations-section .layer-stack {
            position: relative;
            width: 110px;
            height: 110px;
            transform: rotateX(60deg) rotateZ(45deg);
            transform-style: preserve-3d;
        }

        .integrations-section .layer {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: rgba(0, 0, 0, 0.45);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
        }

        .integrations-section .l-bottom {
            transform: translateZ(0);
            opacity: 0.7;
        }

        .integrations-section .l-top {
            transform: translateZ(44px);
            border-color: rgba(255, 255, 255, 0.40);
            background: rgba(255, 255, 255, 0.04);
            animation: int-floatLayer 3s ease-in-out infinite;
            position: relative;
            overflow: hidden;
        }

        .integrations-section .l-top::after {
            content: "";
            position: absolute;
            inset: -20%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.10), transparent);
            transform: translateX(-40%);
            animation: int-shimmer 2.6s infinite linear;
        }

        @keyframes int-floatLayer {

            0%,
            100% {
                transform: translateZ(44px) translateY(0);
            }

            50% {
                transform: translateZ(64px) translateY(-2px);
            }
        }

        @keyframes int-shimmer {
            0% {
                transform: translateX(-55%);
                opacity: 0.6;
            }

            100% {
                transform: translateX(55%);
                opacity: 0.6;
            }
        }

        /* Card 5: API (Typing) */
        .integrations-section .terminal-win {
            width: 200px;
            height: 130px;
            background: rgba(0, 0, 0, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            padding: 12px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 11px;
            line-height: 1.5;
            color: rgba(77, 175, 115, 0.95);
            box-shadow: 0 18px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.06);
            position: relative;
            overflow: hidden;
        }

        .integrations-section .terminal-win::before {
            content: "";
            position: absolute;
            left: 10px;
            top: 10px;
            width: 54px;
            height: 8px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.10);
        }

        .integrations-section .terminal-win .type-text {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid rgba(77, 175, 115, 0.85);
            width: 0;
            animation: int-typing 2.2s steps(16, end) infinite alternate;
            vertical-align: bottom;
        }

        @keyframes int-typing {
            from {
                width: 0;
            }

            to {
                width: 11.8ch;
            }

            /* "Connecting..." */
        }

        /* Responsive */
        @media (max-width: 900px) {
            .integrations-section {
                padding: 90px 0;
            }

            .integrations-section .int-header h2 {
                font-size: 42px;
                letter-spacing: -1.4px;
            }

            .integrations-section .int-header p {
                font-size: 18px;
            }

            .integrations-section .int-track {
                padding-left: 24px;
            }

            .integrations-section .int-card {
                min-width: 320px;
                height: 460px;
            }
        }

        @media (prefers-reduced-motion: reduce) {

            .integrations-section .m-list,
            .integrations-section .req-logo,
            .integrations-section .orbit-ring,
            .integrations-section .l-top,
            .integrations-section .l-top::after,
            .integrations-section .terminal-win .type-text {
                animation: none !important;
            }

            .integrations-section .int-scroll-wrapper {
                scroll-behavior: auto;
            }
        }
    </style>
<div className="int-header">
<div className="int-tag"><span className="dot"></span> Workflows and integrations</div>
<h2>Collaborate acrosstools and teams</h2>
<p>
            Expand the capabilities of the Orbit system with a wide variety of integrations that keep everyone in your
            organization
            aligned and focused.
        </p>
</div>
<div aria-label="Integrations carousel" className="int-scroll-wrapper" role="region" tabindex="0">
<div className="int-track">

<div aria-label="Orbit Requests" className="int-card" role="button" tabindex="0">
<div className="int-visual">
<div aria-hidden="true" className="mobile-frame">
<div className="m-header"></div>
<div className="m-list">
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
<div className="m-item"></div>
</div>
</div>
</div>
<div className="int-info">
<h3>Orbit Requests</h3>
<p>Turn workplace requests into actionable issues</p>
<div aria-hidden="true" className="int-btn">&gt;</div>
</div>
</div>

<div aria-label="Orbit Ecosystem (Requests)" className="int-card" role="button" tabindex="0">
<div className="int-visual">
<div aria-hidden="true" className="req-logo"></div>
</div>
<div className="int-info">
<h3>Orbit Ecosystem</h3>
<p>100+ ways to enhance your Orbit experience</p>
<div aria-hidden="true" className="int-btn">&gt;</div>
</div>
</div>

<div aria-label="Orbit Ecosystem (Integrations)" className="int-card" role="button" tabindex="0">
<div className="int-visual">
<div aria-hidden="true" className="solar-sys">
<div className="orbit-ring"></div>
<div className="center-hub">X</div>
<div className="satellite s-1"></div>
<div className="satellite s-2"></div>
<div className="satellite s-3"></div>
<div className="satellite s-4"></div>
</div>
</div>
<div className="int-info">
<h3>Orbit Ecosystem</h3>
<p>100+ ways to enhance your Orbit experience</p>
<div aria-hidden="true" className="int-btn">&gt;</div>
</div>
</div>

<div aria-label="Design Sync" className="int-card" role="button" tabindex="0">
<div className="int-visual">
<div aria-hidden="true" className="layer-stack">
<div className="layer l-bottom"></div>
<div className="layer l-top"></div>
</div>
</div>
<div className="int-info">
<h3>Design Sync</h3>
<p>Bridge the gap between engineering and design</p>
<div aria-hidden="true" className="int-btn">&gt;</div>
</div>
</div>

<div aria-label="Orbit API" className="int-card" role="button" tabindex="0">
<div className="int-visual">
<div aria-hidden="true" className="terminal-win">
                        &gt; Orbit.api.init()
                        <span className="type-text">Connecting...</span>
</div>
</div>
<div className="int-info">
<h3>Orbit API</h3>
<p>Build your own add-ons with the Orbit API</p>
<div aria-hidden="true" className="int-btn">&gt;</div>
</div>
</div>
</div>
</div>

</section>

<section className="foundations-section reveal">
<style>
    :root{
      --bg-color:#050505;
      --panel-bg:#0A0A0A;
      --text-main:#F7F8F8;
      --text-muted:#8A8F98;
      --border-color:rgba(255,255,255,0.08);
      --glass-bg:rgba(20,20,22,0.6);
      --accent-green:#4DAF73;
      --accent-purple:#5E6AD2;
      --accent-yellow:#E2B340;
    }

    /* Basic reset (safe inside section) */
    .foundations-section *{ box-sizing:border-box; }
    .foundations-section{ background:var(--bg-color); color:var(--text-main); border-top:1px solid rgba(255,255,255,0.05); }

    /* Scroll reveal */
    .reveal{ opacity:0; transform:translateY(28px); transition:opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1); }
    .reveal.active{ opacity:1; transform:translateY(0); }

    /* Layout */
    .foundations-section{ padding:140px 0; display:flex; justify-content:center; }
    .fnd-container{
      width:100%;
      max-width:1200px;
      padding:0 24px;
      display:flex;
      gap:80px;
      align-items:center;
    }
    .fnd-content{ flex:1; display:flex; flex-direction:column; justify-content:center; }
    .fnd-tag{
      color:#888;
      font-size:14px;
      display:inline-flex;
      align-items:center;
      gap:8px;
      margin-bottom:24px;
      border:1px solid #333;
      padding:6px 12px;
      border-radius:999px;
      width:max-content;
      background:rgba(255,255,255,0.02);
    }
    .fnd-content h2{
      font-size:56px;
      font-weight:600;
      line-height:1.05;
      letter-spacing:-2px;
      margin:0 0 18px;
      background:linear-gradient(180deg,#fff 0%, #b0b0b0 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
    .fnd-content p{
      font-size:18px;
      color:#888;
      line-height:1.65;
      margin:0 0 46px;
      max-width:520px;
    }

    /* Accordion list */
    .fnd-list{ display:flex; flex-direction:column; gap:0; border-top:1px solid #222; }
    .fnd-item{
      padding:22px 0;
      border-bottom:1px solid #222;
      cursor:pointer;
      user-select:none;
    }
    .fnd-item-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:18px;
    }
    .fnd-item-title{
      font-size:18px;
      font-weight:500;
      color:#9aa0a6;
      transition:color .25s ease;
    }
    .fnd-item-toggle{
      width:26px;
      height:26px;
      border-radius:999px;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#666;
      border:1px solid rgba(255,255,255,0.08);
      background:rgba(255,255,255,0.02);
      transition:transform .2s ease, color .2s ease, border-color .2s ease, background .2s ease;
      flex:0 0 auto;
      font-size:16px;
      line-height:1;
    }
    .fnd-item-desc{
      font-size:15px;
      color:#6f7680;
      line-height:1.6;
      max-width:92%;
      overflow:hidden;
      max-height:0;
      opacity:0;
      transform:translateY(-6px);
      transition:max-height .35s ease, opacity .25s ease, transform .35s ease;
      margin-top:0;
    }

    .fnd-item:hover .fnd-item-title{ color:#fff; }
    .fnd-item.is-open .fnd-item-title{ color:#fff; }
    .fnd-item.is-open .fnd-item-desc{
      max-height:140px;
      opacity:1;
      transform:translateY(0);
      margin-top:12px;
    }
    .fnd-item.is-open .fnd-item-toggle{
      color:#fff;
      border-color:rgba(255,255,255,0.16);
      background:rgba(255,255,255,0.06);
      transform:rotate(45deg);
    }

    /* Right visual */
    .fnd-visual{
      flex:1.2;
      height:700px;
      position:relative;
      border:1px dashed #333;
      border-radius:8px;
      overflow:hidden;
      background-color:#080808;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size:40px 40px;
      box-shadow:0 40px 120px rgba(0,0,0,0.6);
    }

    /* Scan line */
    .scan-line{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:2px;
      background:rgba(255,255,255,0.22);
      box-shadow:0 0 14px rgba(255,255,255,0.45);
      animation:scan 4.2s linear infinite;
      z-index:1;
    }
    @keyframes scan{
      0%{ top:-2px; opacity:0; }
      10%{ opacity:1; }
      90%{ opacity:1; }
      100%{ top:100%; opacity:0; }
    }

    /* Modules */
    .bp-module{
      position:absolute;
      border:1px solid #333;
      background:rgba(10,10,10,0.78);
      display:flex;
      align-items:center;
      justify-content:center;
      backdrop-filter:blur(10px);
      -webkit-backdrop-filter:blur(10px);
      box-shadow:0 20px 60px rgba(0,0,0,0.55);
      transition:transform .35s cubic-bezier(.2,.8,.2,1), border-color .25s ease, background .25s ease;
      z-index:2;
    }
    .foundations-section:hover .bp-module{ border-color:rgba(255,255,255,0.14); background:rgba(12,12,12,0.85); }

    /* Sync module */
    .mod-sync{
      top:54px;
      right:54px;
      width:170px;
      height:170px;
      border-radius:14px;
      flex-wrap:wrap;
      padding:14px;
      gap:8px;
      justify-content:flex-start;
      align-content:flex-start;
    }
    .sync-dot{
      width:6px;
      height:6px;
      background:#2a2a2a;
      border-radius:50%;
      box-shadow:0 0 0 rgba(0,0,0,0);
      animation:dotIdle 2.2s ease-in-out infinite;
      opacity:.8;
    }
    @keyframes dotIdle{
      0%,100%{ transform:translateY(0); opacity:.65; }
      50%{ transform:translateY(-1px); opacity:.95; }
    }
    .sync-active{
      background:var(--accent-green);
      box-shadow:0 0 10px rgba(77,175,115,0.55);
      animation:blink 1.8s ease-in-out infinite;
      opacity:1;
    }
    @keyframes blink{
      0%,100%{ opacity:.35; }
      50%{ opacity:1; }
    }

    /* Scale module */
    .mod-scale{
      top:280px;
      left:70px;
      width:220px;
      height:160px;
      border-radius:14px;
      flex-direction:column;
      justify-content:center;
      gap:10px;
      color:#bcbcbc;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .scale-num{
      font-size:40px;
      letter-spacing:-1px;
      color:#e7e7e7;
      text-shadow:0 0 18px rgba(94,106,210,0.18);
    }

    /* Security module */
    .mod-sec{
      bottom:80px;
      right:90px;
      width:190px;
      height:190px;
      border-radius:999px;
    }
    .sec-icon{
      width:74px;
      height:74px;
      border-radius:20px;
      border:1px solid rgba(255,255,255,0.1);
      background:
        radial-gradient(circle at 30% 25%, rgba(94,106,210,0.25), transparent 55%),
        radial-gradient(circle at 70% 75%, rgba(77,175,115,0.18), transparent 55%),
        rgba(255,255,255,0.03);
      position:relative;
      box-shadow:0 20px 60px rgba(0,0,0,0.55);
      animation:floatSoft 5.5s ease-in-out infinite;
    }
    .sec-icon:before{
      content:"";
      position:absolute;
      inset:18px 22px 26px 22px;
      border-radius:10px;
      border:1px solid rgba(255,255,255,0.12);
      background:rgba(0,0,0,0.15);
    }
    .sec-icon:after{
      content:"";
      position:absolute;
      width:22px;
      height:18px;
      left:50%;
      top:18px;
      transform:translateX(-50%);
      border-radius:10px 10px 12px 12px;
      border:1px solid rgba(255,255,255,0.14);
      background:rgba(255,255,255,0.04);
      box-shadow:0 0 0 rgba(0,0,0,0);
    }
    @keyframes floatSoft{
      0%,100%{ transform:translateY(0); }
      50%{ transform:translateY(-10px); }
    }

    /* Subtle parallax tilt on hover */
    .fnd-visual .bp-module{ transform:translateY(0); }
    .foundations-section:hover .mod-sync{ transform:translateY(-6px) translateX(2px); }
    .foundations-section:hover .mod-scale{ transform:translateY(6px) translateX(-2px); }
    .foundations-section:hover .mod-sec{ transform:translateY(-4px); }

    /* Responsive */
    @media (max-width: 980px){
      .fnd-container{ flex-direction:column; gap:44px; align-items:flex-start; }
      .fnd-visual{ width:100%; height:520px; }
      .fnd-content h2{ font-size:42px; letter-spacing:-1.5px; }
    }
    @media (max-width: 520px){
      .foundations-section{ padding:96px 0; }
      .fnd-visual{ height:460px; }
      .mod-sync{ right:18px; top:18px; }
      .mod-scale{ left:18px; top:220px; width:200px; }
      .mod-sec{ right:22px; bottom:22px; width:160px; height:160px; }
    }
  </style>
<div className="fnd-container">
<div className="fnd-content">
<div className="fnd-tag">Under the hood</div>
<h2>Engineered for velocity</h2>
<p>Orbit handles the complexity so you don't have to. Built on a high-performance architecture with an obsessive focus on speed, safety, and scale.</p>
<div className="fnd-list" role="list">
<div className="fnd-item is-open">
<div className="fnd-item-header">
<div className="fnd-item-title">Orbit Sync Core</div>
<div aria-hidden="true" className="fnd-item-toggle">+</div>
</div>
<div className="fnd-item-desc">Real-time state synchronization across all clients with optimistic updates and offline support.</div>
</div>
<div className="fnd-item">
<div className="fnd-item-header">
<div className="fnd-item-title">Bank-grade Security</div>
<div aria-hidden="true" className="fnd-item-toggle">+</div>
</div>
<div className="fnd-item-desc">SOC 2 Type II compliant, SSO, SAML, and advanced admin controls to keep your work safe.</div>
</div>
<div className="fnd-item">
<div className="fnd-item-header">
<div className="fnd-item-title">Infinite Scalability</div>
<div aria-hidden="true" className="fnd-item-toggle">+</div>
</div>
<div className="fnd-item-desc">From startup to IPO, Orbit scales with your organization to support thousands of active users.</div>
</div>
</div>
</div>
<div aria-hidden="true" className="fnd-visual">
<div className="scan-line"></div>
<div className="bp-module mod-sync">
<div className="sync-dot sync-active"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
<div className="sync-dot"></div>
</div>
<div className="bp-module mod-scale">
<div style={{alignSelf: 'flex-start', marginBottom: '5px'}}>+</div>
<div className="scale-num">5,000</div>
<div style={{alignSelf: 'flex-end'}}>-</div>
</div>
<div className="bp-module mod-sec">
<div className="sec-icon"></div>
</div>
</div>
</div>

</section>

<div className="absolute bottom-10 left-[-24px] -rotate-90 origin-bottom-left text-[8px] font-mono text-[#222] tracking-[0.3em] uppercase whitespace-nowrap group-hover:text-[#333] transition-colors">
                            Designed Worldwide
                        </div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mt-32 relative z-20">

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

<div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-24">

<div className="col-span-2 md:col-span-4 flex flex-col items-start gap-8">
<a className="bg-center hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22a501b8-fdc0-4b37-85e9-0367b65fcc58_1600w.png)] bg-cover rounded relative" href="#"></a>
<p className="text-[#8A8F98] leading-relaxed max-w-xs font-light">
                    The modern standard for high-velocity software teams. Manage issues, projects, and product roadmaps.
                </p>

<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A8F98] hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A8F98] hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A8F98] hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Product</h4>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Features</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Roadmap</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Integrations</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Changelog</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Pricing</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Docs</a>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Company</h4>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">About</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Blog</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Careers</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Customers</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Brand</a>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Resources</h4>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Community</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Help Center</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Partners</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Status</a>
<a className="text-[#8A8F98] text-sm hover:text-white transition-all duration-200 footer-link" href="#">Terms</a>
</div>

<div className="col-span-2 md:col-span-2 flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Subscribe</h4>
<div className="relative group">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-mono" placeholder="email@domain.com" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-xs text-[#666]">Join our newsletter for the latest updates.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-[#666] font-mono">
<div className="flex items-center gap-6">
<span className="">© 2024 Axis Inc.</span>
<span className="hidden md:inline">San Francisco, CA</span>
</div>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-2 h-2 bg-emerald-500 rounded-full"></div>
</div>
<span className="group-hover:text-[#888] transition-colors">All systems normal</span>
</div>
<div className="hidden md:flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>UTC 14:20</span>
</div>
</div>
</div>

<div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 select-none pointer-events-none overflow-hidden w-full flex justify-center opacity-[0.03]">
<h1 className="text-[20vw] font-bold tracking-tighter text-white leading-none whitespace-nowrap" style={{background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>AXIS</h1>
</div>
</div>


</section>
    </>
  );
}
