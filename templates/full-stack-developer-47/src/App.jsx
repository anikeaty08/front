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



(function () {
try {
const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const useDark = stored ? stored === "dark" : prefersDark;
document.addEventListener("DOMContentLoaded", () => {
document.body.classList.toggle("dark", useDark);
document.documentElement.style.colorScheme = useDark ? "dark" : "light";
});
} catch (e) {}
})();



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



        (function () {
          const applyBodyBackground = () => {
            const b = document.body;
            if (!b) return;
            b.style.backgroundImage = 'url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80)';
            b.style.backgroundAttachment = 'fixed';
            b.style.backgroundSize = 'cover';
            b.style.backgroundPosition = 'center';
            b.style.backgroundRepeat = 'no-repeat';
          };

          const disableHeaderVideo = () => {
            const heroVideo = document.querySelector('section#home video');
            if (heroVideo) {
              try { heroVideo.pause(); } catch (e) {}
              try { heroVideo.currentTime = 0; } catch (e) {}
              heroVideo.style.display = 'none';
            }
          };

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              applyBodyBackground();
              disableHeaderVideo();
            });
          } else {
            applyBodyBackground();
            disableHeaderVideo();
          }
        })();
      


    (function () {
      const viewport = document.getElementById('ts-viewport');
      const track = document.getElementById('ts-track');
      if (!viewport || !track) return;

      const prev = document.getElementById('ts-prev');
      const next = document.getElementById('ts-next');
      const prevM = document.getElementById('ts-prev-m');
      const nextM = document.getElementById('ts-next-m');
      const dots = Array.from(document.querySelectorAll('[data-ts-dot]'));
      const slides = Array.from(track.children);

      let index = 0, step = 0, maxIndex = 0, gap = 24, raf;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const compute = () => {
        const first = slides[0];
        if (!first) return;
        const slideW = first.getBoundingClientRect().width;
        const styles = getComputedStyle(track);
        const gapStr = styles.gap || styles.columnGap || '24px';
        gap = parseFloat(gapStr) || 24;

        const visible = Math.max(1, Math.round((viewport.offsetWidth + gap) / (slideW + gap)));
        maxIndex = Math.max(0, slides.length - visible);
        step = slideW + gap;
        index = Math.min(index, maxIndex);
        track.style.transform = `translateX(${-index * step}px)`;
        updateDots();
      };

      const updateDots = () => {
        dots.forEach((d, i) => {
          d.classList.toggle('w-5', i === index);
          d.classList.toggle('bg-sky-400/60', i === index);
          d.classList.toggle('w-1.5', i !== index);
          d.classList.toggle('bg-white/20', i !== index);
        });
      };

      const goTo = (i) => {
        index = Math.max(0, Math.min(i, maxIndex));
        track.style.transform = `translateX(${-index * step}px)`;
        updateDots();
      };

      const goNext = () => goTo(index + 1);
      const goPrev = () => goTo(index - 1);

      prev?.addEventListener('click', goPrev);
      next?.addEventListener('click', goNext);
      prevM?.addEventListener('click', goPrev);
      nextM?.addEventListener('click', goNext);

      dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.tsDot || '0', 10))));

      // Keyboard support
      viewport.tabIndex = 0;
      viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
      });

      // Autoplay
      let timer;
      const start = () => {
        if (prefersReduced) return;
        stop();
        timer = setInterval(() => {
          if (index >= maxIndex) goTo(0);
          else goNext();
        }, 5000);
      };
      const stop = () => timer && clearInterval(timer);

      viewport.addEventListener('mouseenter', stop);
      viewport.addEventListener('mouseleave', start);
      viewport.addEventListener('touchstart', stop, { passive: true });
      viewport.addEventListener('touchend', start, { passive: true });

      // Resize handling
      const onResize = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(compute);
      };
      window.addEventListener('resize', onResize);

      // Init
      compute();
      start();
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    })();
  


      document.addEventListener("DOMContentLoaded", () => {
        // Icons
        if (window.lucide) lucide.createIcons();

        // Theme toggle
        const toggle = document.getElementById("theme-toggle");
        toggle?.addEventListener("click", () => {
          const useDark = !document.body.classList.contains("dark");
          document.body.classList.toggle("dark", useDark);
          document.documentElement.style.colorScheme = useDark ? "dark" : "light";
          try { localStorage.setItem("theme", useDark ? "dark" : "light"); } catch (e) {}
        });

        // Reveal on scroll
        const reveals = document.querySelectorAll("[data-reveal]");
        const obs = new IntersectionObserver((entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.remove("opacity-0","translate-y-6");
              e.target.classList.add("opacity-100","translate-y-0");
              obs.unobserve(e.target);
            }
          }
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
        reveals.forEach(el => {
          el.classList.add("opacity-0","translate-y-6","transition","duration-700","ease-out");
          obs.observe(el);
        });

        // Mobile menu: close on link click
        const mm = document.getElementById("mobile-menu");
        mm?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mm.classList.add("hidden")));

        // Contact form (demo)
        const contactForm = document.getElementById("contact-form");
        const status = document.getElementById("contact-status");
        contactForm?.addEventListener("submit", (e) => {
          e.preventDefault();
          status.textContent = "Sending…";
          setTimeout(() => {
            status.textContent = "Thanks! Your message has been received.";
            contactForm.reset();
          }, 900);
        });

        // Login form (demo)
        const loginForm = document.getElementById("login-form");
        const loginStatus = document.getElementById("login-status");
        loginForm?.addEventListener("submit", (e) => {
          e.preventDefault();
          loginStatus.textContent = "Signing in…";
          setTimeout(() => {
            loginStatus.textContent = "Check your inbox for access details.";
          }, 800);
        });

        // Year
        const y = document.getElementById("year");
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="video-background-container fixed w-full top-0" data-alpha-mask="80"><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://gabemade.unobtuse.com/bg.mp4"></video></div>

<div className="fixed -z-10 top-0 right-0 bottom-0 left-0">

<div className="hidden dark:block w-full h-full" style="
          background:
            radial-gradient(1200px 800px at 20% 10%, rgba(0, 255, 255, 0.06), transparent 60%),
            radial-gradient(800px 600px at 80% 20%, rgba(16, 185, 129, 0.06), transparent 60%),
            linear-gradient(180deg, #00090f 0%, #000d15 40%, #00101a 100%);
        "></div>

<div className="block dark:hidden w-full h-full" style={{background: 'radial-gradient(1000px 700px at 10% 0%, rgba(14, 165, 233, 0.08), transparent 60%), radial-gradient(800px 500px at 90% 10%, rgba(16, 185, 129, 0.06), transparent 60%), linear-gradient(rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)', display: 'none'}}></div>
</div>

<header className="sticky pointer-events-auto bg-sky-400/10 mr-auto ml-auto shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] backdrop-blur-lg justify-center">
<div className="sm:px-6 lg:pl-0 lg:pr-0 max-w-full mr-auto ml-auto pr-0 pl-0 backdrop-blur-none [--fx-filter:blur(10px)_liquid-glass(1.7,10)_saturate(1.05)_noise(0.5,1,0)_contrast(1.4)]">
<nav className="flex dark: transition-all shadow-sky-500/5 sm:px-4 md:py-3 pointer-events-auto max-w-6xl border-0 ring-0 rounded-none mt-0 mr-auto mb-0 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative space-x-0 items-center justify-between" id="site-nav">

<a className="group flex items-center gap-3 sm:pl-2 pl-2" href="#home">

<span className="inline-flex items-center rounded-lg p-1 sm:p-1.5 dark:text-white bg-white/0 text-slate-900">
<svg aria-label="GABEMADE wordmark" className="sm:h-7 md:h-8 w-[256px] h-[28px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '256px', height: '28px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 2048 256" xmlns="http://www.w3.org/2000/svg">
<text className="" fill="none" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontSize="200" font-weight="700" letter-spacing="14" stroke="currentColor" strokeWidth="10" x="0" y="200">GABEMADE</text>
</svg>
</span>
</a>

<div className="hidden lg:flex gap-x-2 items-center">
<a className="transition-all duration-700 ease-out px-3 py-2 text-sm font-medium rounded-md dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 dark:text-slate-300 text-slate-700/90 hover:bg-slate-900/5 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:ring-sky-500/50 transition opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#about">About Me</a>
<a className="transition-all duration-700 ease-out delay-75 px-3 py-2 text-sm font-medium rounded-md dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 dark:text-slate-300 text-slate-700/90 hover:bg-slate-900/5 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:ring-sky-500/50 transition opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#live-projects">Portfolio</a>
<a className="transition-all duration-700 ease-out delay-100 px-3 py-2 text-sm font-medium rounded-md dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 dark:text-slate-300 text-slate-700/90 hover:bg-slate-900/5 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:ring-sky-500/50 transition opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#process">My Process</a>
<a className="transition-all duration-700 ease-out delay-150 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 dark:text-slate-300 hover:bg-slate-900/5 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:ring-sky-500/50 transition text-sm font-medium text-slate-700/90 opacity-100 rounded-md pt-2 pr-3 pb-2 pl-3 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#case-studies">Case Studies</a>
<a className="transition-all duration-700 ease-out delay-200 px-3 py-2 text-sm font-medium rounded-md dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 dark:text-slate-300 text-slate-700/90 hover:bg-slate-900/5 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:ring-sky-500/50 transition opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#blog">Blog</a>
</div>

<div className="flex gap-2 sm:pr-3 pr-2 gap-x-2 gap-y-2 items-center">
<a className="hidden md:inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold tracking-tight focus:outline-none focus-visible:ring-2 transition shadow-[0_0_0_1px_rgba(34,211,238,0.15)] border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="#contact">
<span className="">Get In Touch</span>
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="hidden md:inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium dark:bg-white/10 dark:hover:bg-white/15 focus:outline-none focus-visible:ring-2 transition border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" href="#client-login">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="">Client Login</span>
</a>

<button aria-label="Toggle dark mode" className="inline-flex items-center justify-center rounded-xl border p-2 dark:bg-white/10 dark:hover:bg-white/15 focus:outline-none focus-visible:ring-2 transition border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" id="theme-toggle" type="button">
<svg className="lucide lucide-sun hidden dark:block w-5 h-5" data-icon-replaced="true" data-lucide="sun" fill="none" height="24" id="icon-sun" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="lucide lucide-moon h-5 w-5 block dark:hidden" data-lucide="moon" fill="none" height="24" id="icon-moon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>

<button aria-label="Open menu" className="ml-1 inline-flex items-center justify-center rounded-xl border p-2 dark:bg-white/10 dark:hover:bg-white/15 focus:outline-none focus-visible:ring-2 transition lg:hidden border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

</nav>
</div>
</header>

<section className="pt-500px pl-500px relative top--50px" id="home">

<div aria-hidden="true" className="overflow-hidden absolute top-0 right-0 bottom-0 left-0 blur-none brightness-100 -z-50" style={{maskImage: 'linear-gradient(180deg, transparent, black 25%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 25%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover absolute" loop="" muted="" playsinline="" src="https://gabemade.unobtuse.com/bg.mp4" style={{display: 'none'}}></video>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent dark:from-black/70 dark:via-black/40"></div>
</div>

<div aria-hidden="true" className="-top-10 pointer-events-none max-w-6xl mr-auto ml-auto absolute right-0 left-0 blur-3xl">
<div className="sm:h-56 bg-gradient-to-r via-cyan-400/20 to-blue-400/20 from-sky-500/20 w-full h-44 rounded-full"></div>
</div>
<div className="sm:px-6 sm:pb-28 lg:px-8 lg:pt-32 lg:pb-4 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-24 pl-4">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 transition duration-700 ease-out opacity-100 translate-y-0" data-reveal="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] ring-1 shadow-md border-white/10 bg-white/10 ring-white/10 dark:text-slate-300 text-slate-200 shadow-sky-500/10">
<span className="inline-flex h-1.5 w-1.5 rounded-full animate-pulse bg-blue-400"></span>
              Available for remote roles and contract projects
            </div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight dark:text-white text-slate-900">
<span className="bg-clip-text text-transparent bg-gradient-to-br via-cyan-300 to-blue-300 from-sky-400 mix-blend-hard-light drop-shadow-[0_0_20px_rgba(34,211,238,0.15)] invert brightness-90">
                Building Scalable Web Applications
              </span>
<span className="dark:text-slate-200 text-slate-800 hue-rotate-180">That Drive Real Business Results</span>
</h1>
<p className="mt-6 text-base sm:text-lg dark:text-slate-300 text-slate-700">
              Full-Stack Developer &amp; Digital Strategist | 15+ Years Experience
              
              Specializing in WordPress, Laravel, AI Integration &amp; E-Commerce Solutions
            </p>
<p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              $1M+ revenue increases • 4,800+ conversions generated • 2 live SaaS products in production
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold tracking-tight focus:outline-none focus-visible:ring-2 transition shadow-[0_0_0_1px_rgba(34,211,238,0.15)] border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="#contact">
                Let's Work Together
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5 transition -translate-x-0 group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium dark:bg-white/10 dark:hover:bg-white/15 focus:outline-none focus-visible:ring-2 transition border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" href="#live-projects">
                View My Work
                <svg className="lucide lucide-plus h-4.5 w-4.5 transition group-hover:translate-y-0.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-5 transition duration-700 ease-out opacity-100 translate-y-0" data-reveal="">

<div className="relative rounded-3xl border p-6 sm:p-7 backdrop-blur-xl ring-1 shadow-xl border-white/10 bg-white/10 ring-white/10 shadow-sky-500/10">
<div className="-inset-0.5 -z-10 bg-gradient-to-br via-cyan-400/10 to-blue-400/10 from-sky-500/10 rounded-3xl absolute blur-2xl"></div>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border ring-1 border-white/10 bg-white/10 ring-white/10">
<svg className="lucide lucide-app-window h-5 w-5 text-sky-300" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200">Results that matter</p>
<p className="text-xs text-slate-400">From Fortune 500 to indie creators</p>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-2xl border p-4 ring-1 border-white/10 bg-white/5 ring-white/10">
<p className="text-xs text-slate-400">Revenue Impact</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-blue-300">$1M+</p>
</div>
<div className="rounded-2xl border p-4 ring-1 border-white/10 bg-white/5 ring-white/10">
<p className="text-xs text-slate-400">Conversions</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-sky-300">4,800+</p>
</div>
<div className="rounded-2xl border p-4 ring-1 border-white/10 bg-white/5 ring-white/10">
<p className="text-xs text-slate-400">Live SaaS</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-cyan-300">2</p>
</div>
</div>
<div className="mt-6 rounded-xl border p-4 ring-1 border-white/10 bg-white/5 ring-white/10">
<p className="text-xs text-slate-400">Clients &amp; Collabs</p>
<p className="mt-1 text-sm text-slate-300">Warner Music, Sony BMG, T‑Pain, Rick Ross, Sam Jay</p>
</div>
</div>
</div>
</div>

<div className="flex transition duration-700 ease-out opacity-100 mt-32 mb-8 translate-y-0 justify-center opacity-0 translate-y-6" data-reveal="">
<a className="group inline-flex items-center gap-2 transition text-slate-500 hover:text-sky-300" href="#live-projects">
<span className="text-xs">Scroll</span>
<svg className="lucide lucide-chevron-down animate-bounce w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(125, 211, 252)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
</section><section className="relative" id="clients">
<div className="sm:px-6 lg:px-8 max-w-7xl border-white/10 border-t mr-auto ml-auto pt-12 pr-4 pb-12 pl-4" style={{maskImage: 'linear-gradient(90deg, transparent, black 45%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 45%, black 55%, transparent)'}}>
<p className="dark:text-slate-400 text-xs text-slate-500 text-center" style={{}}>Satisfied Clients</p>
<div className="mt-6 relative overflow-hidden transition duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent dark:from-black/80 dark:via-black/20"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/80 via-slate-50/20 to-transparent dark:from-black/80 dark:via-black/20"></div>
<div className="group">
<div className="marquee-track flex items-center gap-10 sm:gap-14 md:gap-16">

<div className="flex items-center gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16">
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Warner Music</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Sony BMG</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">T‑Pain</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Rick Ross</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Sam Jay</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Peartree</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">AnyFence</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">MoveSmiths</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Stripe</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80 hover:text-sky-300 transition-colors">Cloudflare</span>
</div>

<div aria-hidden="true" className="flex items-center gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16">
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Warner Music</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Sony BMG</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">T‑Pain</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Rick Ross</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Sam Jay</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Peartree</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">AnyFence</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">MoveSmiths</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Stripe</span>
<span className="shrink-0 text-[12px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-slate-400/80">Cloudflare</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      will-change: transform;
      width: max-content;
      animation: marquee 36s linear infinite;
    }
    .group:hover .marquee-track {
      animation-play-state: paused;
    }
    @media (max-width: 640px) {
      .marquee-track { animation-duration: 28s; }
    }
  </style>
</section>

<section className="z-0 rounded-none relative perspective-midrange" id="live-projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<div className="flex items-end justify-between">
<div className="transition duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900">
<span className="bg-clip-text text-transparent bg-gradient-to-br via-cyan-300 to-blue-300 from-sky-400 invert brightness-90">Recent Work</span> in Production
            </h2>
<p className="mt-2 dark:text-slate-400 text-slate-600">Real projects delivering real results for real businesses</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm transition text-sky-400 hover:text-sky-300 duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="" href="#contact">
            Hire me
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<article className="group rounded-3xl border backdrop-blur-xl overflow-hidden transition ring-1 shadow-lg border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden">
<img alt="AnyFence site placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WordPress</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Advanced Taxonomies</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">SEO Optimization</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Security Hardening</span>
</div>
<h3 className="text-xl font-semibold text-slate-100 tracking-tight mt-4">AnyFence</h3>
<p className="mt-2 text-sm text-slate-300">
                Rescued a compromised 5-page site and transformed it into a 1,000+ page SEO powerhouse. Built advanced WordPress taxonomy system generating unique landing pages for every fence type and location combination. Result: 700+ quote requests and restored Google Ads standing.
              </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="https://anyfence.com" rel="noopener" target="_blank">
                  View Live Site
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group overflow-hidden transition hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out bg-white/10 opacity-100 border-white/10 border ring-white/10 ring-1 rounded-3xl shadow-lg backdrop-blur-xl translate-y-0 opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden">
<img alt="MoveSmiths e-commerce placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WordPress</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WooCommerce</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Payment Gateway</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Compliance Systems</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-100">MoveSmiths</h3>
<p className="mt-2 text-sm text-slate-300">
                Developed premium e-commerce platform for fine spirits distribution with age verification, state-specific shipping restrictions, and sophisticated inventory management. Designed to match the high-end aesthetic of the product line.
              </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="https://movesmiths.com" rel="noopener" target="_blank">
                  View Live Site
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-3xl border backdrop-blur-xl overflow-hidden transition ring-1 shadow-lg border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden">
<img alt="Cyann Ribeiro portfolio placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WordPress</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WooCommerce</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Booking System</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">Video Integration</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-100">Cyann Ribeiro</h3>
<p className="mt-2 text-sm text-slate-300">
                Comprehensive portfolio and e-commerce site combining video showcase, booking system, and online store. Designed covers for 3 books including Amazon Bestseller "Driven: From Love and War to Poetry." Professional platform elevating personal brand.
              </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="https://cyannribeiro.com" rel="noopener" target="_blank">
                  View Live Site
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-3xl border backdrop-blur-xl overflow-hidden transition ring-1 shadow-lg border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden">
<img alt="Peartree B2B site placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WordPress</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">WooCommerce Custom</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">GPT-5 Integration</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">QuickBooks API</span>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] border bg-white/10 border-white/10 text-slate-300">PHP Business App</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-100">Peartree Office Furniture</h3>
<p className="mt-2 text-sm text-slate-300">
                Architected custom WordPress/WooCommerce platform that grew annual revenue from $1.5M to $2.5M. Built custom "Add to Quote" system generating 10-20 daily B2B leads. Integrated QuickBooks Online API for real-time inventory sync. Developed GPT-5 WordPress plugin reducing content creation time from 30 minutes to 3 minutes per product.
              </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="#case-studies">
                  View Case Study
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="unobtose">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<span className="text-transparent bg-clip-text bg-gradient-to-br via-cyan-300 to-blue-300 from-sky-400">Current Projects:</span> The Unobtose Platform
        </h2>
<p className="mt-2 dark:text-slate-400 text-slate-600 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">Building modern SaaS solutions with AI-powered intelligence and real-world impact</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<article className="group rounded-3xl border backdrop-blur-xl overflow-hidden transition ring-1 shadow-lg border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden relative">
<img alt="Ledger dashboard placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<span className="inline-flex items-center gap-1 text-[11px] text-blue-300 bg-blue-900/60 border-blue-400/30 border ring-blue-400/20 ring-1 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 absolute top-3 left-3 backdrop-blur-sm">
<span className="h-1.5 w-1.5 animate-pulse bg-blue-300 rounded-full"></span> LIVE BETA
              </span>
</div>
<div className="p-5">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10">
<svg className="lucide lucide-panel-top h-4.5 w-4.5 text-sky-300" data-lucide="panel-top" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Unobtose Ledger</h3>
</div>
<p className="mt-2 text-sm text-slate-300">
    AI-powered personal finance SaaS helping users manage bills aligned with their pay schedule, reduce late fees, and
    eliminate wasted subscriptions. Features secure bank linking via Plaid, smart payment prioritization, and
    intelligent budgeting with AI spending insights.
  </p>
<p className="mt-3 text-sm italic text-slate-400">Stop living paycheck-to-paycheck. Never miss a bill. Know exactly where
    your money goes.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="glass-tag">Laravel 12</span><span className="glass-tag">React Native</span><span className="glass-tag">Plaid API</span><span className="glass-tag">GPT-5</span><span className="glass-tag">PostgreSQL</span><span className="glass-tag">Google Cloud Vision</span>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium hover:text transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 -sky-200 focus-visible:ring-sky-500/60 text-sky-300" href="https://ledger.unobtuse.com" rel="noopener" target="_blank">
      Join the Beta
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-3xl border backdrop-blur-xl overflow-hidden transition ring-1 shadow-lg border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 shadow-sky-500/10 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="aspect-video overflow-hidden relative">
<img alt="Studio content system placeholder" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] ring-1 border-sky-400/30 bg-sky-400/10 text-sky-300 ring-sky-400/20">
<span className="h-1.5 w-1.5 rounded-full animate-pulse bg-sky-300"></span> IN BUILD
              </span>
</div>
<div className="p-5">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10">
<svg className="lucide lucide-sparkles h-4.5 w-4.5 text-cyan-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Unobtose Studio</h3>
</div>
<p className="mt-2 text-sm text-slate-300">
                Headless content and campaign engine with AI editorial assistance. Create once, publish everywhere: site, newsletter, socials, and product pages. Smart briefs, variant generation, and SEO-optimized blocks that integrate with your stack.
              </p>
<p className="mt-3 text-sm italic text-slate-400">From idea to shipped content in minutes—consistent, on‑brand, measurable.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="glass-tag">Next.js</span><span className="glass-tag">Laravel API</span><span className="glass-tag">OpenAI/GPT-5</span><span className="glass-tag">Tailwind</span><span className="glass-tag">Cloudflare R2</span><span className="glass-tag">Webhook Automations</span>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium dark:bg-white/10 dark:hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" href="#contact">
                  Request Demo
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="relative">
<div className="absolute -inset-1 rounded-3xl bg-gradient-to-br blur-2xl -z-10 via-cyan-400/20 to-blue-400/20 from-sky-500/20"></div>
<img alt="Portrait placeholder" className="w-full rounded-3xl border ring-1 object-cover aspect-[4/5] border-white/10 ring-white/10" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="lg:col-span-7 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900">About Me</h2>
<p className="mt-4 dark:text-slate-300 text-slate-600">
              I'm Vonree Gabriel Nelson—full-stack developer and digital strategist with 15+ years building performant web apps and content systems. I collaborate with founders, marketing teams, and B2B brands to ship outcomes: revenue growth, operational efficiency, and delightful UX.
            </p>
<ul className="mt-6 space-y-3 dark:text-slate-300 text-slate-600">
<li className="flex items-start gap-3"><svg className="lucide lucide-check-circle-2 h-5 w-5 mt-0.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Senior-level expertise: WordPress, Laravel, WooCommerce, React/Next.js</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check-circle-2 h-5 w-5 mt-0.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> AI integrations for content ops, product data, and customer support</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check-circle-2 h-5 w-5 mt-0.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Secure infra, performance audits, and DX-focused tooling</li>
</ul>
<div className="mt-6 flex flex-wrap gap-2">
<span className="glass-tag">WordPress</span><span className="glass-tag">Laravel</span><span className="glass-tag">Next.js</span><span className="glass-tag">WooCommerce</span><span className="glass-tag">Stripe</span><span className="glass-tag">QuickBooks API</span><span className="glass-tag">GPT-5</span><span className="glass-tag">Tailwind CSS</span><span className="glass-tag">Cloud Functions</span>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 transition focus:outline-none focus-visible:ring-2 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 hover:text-sky-200 text-sm font-semibold text-sky-300 bg-sky-500/10 border-sky-500/30 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-md" href="#contact">
                Book a Call
                <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 dark:bg-white/10 dark:hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 hover:bg-white/80 dark:text-slate-100 focus-visible:ring-sky-500/60 text-sm font-medium text-slate-900 bg-white/60 border-white/10 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-md" href="#live-projects">
                See Portfolio
                <svg className="lucide lucide-images h-4 w-4" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="sm:px-6 lg:px-8 sm:py-20 max-w-7xl border-white/10 border-t mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">How I Build</h2>
<p className="mt-2 dark:text-slate-400 text-slate-600 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">Reliable outcomes through a collaborative, measurable, and transparent process</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="rounded-2xl border p-5 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-compass h-4.5 w-4.5 text-sky-300" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg></span>
<h3 className="font-semibold text-slate-100">1. Discovery</h3>
</div>
<p className="mt-2 text-sm text-slate-300">Define success metrics, audit systems, map requirements, and align on timelines.</p>
</div>
<div className="rounded-2xl border p-5 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-blocks h-4.5 w-4.5 text-cyan-300" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg></span>
<h3 className="font-semibold text-slate-100">2. Build</h3>
</div>
<p className="mt-2 text-sm text-slate-300">Ship in iterative sprints with CI, code reviews, and staging environments.</p>
</div>
<div className="transition duration-700 ease-out bg-white/10 border-white/10 border ring-white/10 ring-1 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-rocket h-4.5 w-4.5 text-blue-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></span>
<h3 className="font-semibold text-slate-100">3. Launch &amp; Grow</h3>
</div>
<p className="mt-2 text-sm text-slate-300">Monitor KPIs, refine UX, improve SEO, and automate ops to maximize ROI.</p>
</div>
</div>
</div>
</section><section className="relative" id="testimonials">
<div className="sm:px-6 lg:px-8 sm:py-20 max-w-full border-white/10 border-t mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 justify-center">
<div className="flex transition duration-700 ease-out max-w-7xl mx-auto px-8 items-end justify-between opacity-0 translate-y-6" data-reveal="">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900">
          What Clients Say
        </h2>
<p className="mt-2 dark:text-slate-400 text-slate-600">Proof from partners I’ve shipped with</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Previous testimonial" className="inline-flex items-center justify-center rounded-xl border p-2 ring-1 transition border-white/10 bg-white/60 hover:bg-white/80 focus:outline-none focus-visible:ring-2 dark:bg-white/10 dark:hover:bg-white/15 ring-white/10 focus-visible:ring-sky-500/60 dark:text-slate-100 text-slate-900" id="ts-prev">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex items-center justify-center rounded-xl border p-2 ring-1 transition border-white/10 bg-white/60 hover:bg-white/80 focus:outline-none focus-visible:ring-2 dark:bg-white/10 dark:hover:bg-white/15 ring-white/10 focus-visible:ring-sky-500/60 dark:text-slate-100 text-slate-900" id="ts-next">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-8 relative transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">


<div className="mt-4 flex sm:hidden items-center justify-center gap-2">
<button aria-label="Previous testimonial" className="inline-flex items-center justify-center rounded-xl border p-2 ring-1 transition border-white/10 bg-white/60 hover:bg-white/80 focus:outline-none focus-visible:ring-2 dark:bg-white/10 dark:hover:bg-white/15 ring-white/10 focus-visible:ring-sky-500/60 dark:text-slate-100 text-slate-900" id="ts-prev-m">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex items-center justify-center rounded-xl border p-2 ring-1 transition border-white/10 bg-white/60 hover:bg-white/80 focus:outline-none focus-visible:ring-2 dark:bg-white/10 dark:hover:bg-white/15 ring-white/10 focus-visible:ring-sky-500/60 dark:text-slate-100 text-slate-900" id="ts-next-m">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div><div className="overflow-hidden" id="ts-viewport" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}} tabindex="0">
<div className="flex will-change-transform transition-transform duration-500 ease-out gap-x-6 gap-y-6" id="ts-track" style={{transform: 'translateX(0px)'}}>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              Grew revenue from $1.5M to $2.5M in 12 months. The custom quoting flow and QuickBooks sync were game‑changers—and the AI content tooling cut product setup to minutes.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="COO portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=160&amp;h=160&amp;fit=crop"/>
<div className="">
<p className="text-sm font-medium text-slate-100 tracking-tight">Alex Carter</p>
<p className="text-xs text-slate-400">COO, Peartree Office Furniture</p>
</div>
</figcaption>
</figure>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] bg-white/10 border-white/10 border ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              He rescued our hacked site and turned it into a 1,000+ page local SEO engine. We’ve logged 700+ quote requests and our ads are back on track.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="Owner portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=160&amp;h=160&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-100 tracking-tight">Jamie Nguyen</p>
<p className="text-xs text-slate-400">Owner, AnyFence</p>
</div>
</figcaption>
</figure>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] bg-white/10 border-white/10 border ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              Launch day was flawless. The headless stack handled traffic spikes, and the analytics pipeline gave us real attribution across channels.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="Marketing Director portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;h=160&amp;fit=crop"/>
<div className="">
<p className="text-sm font-medium text-slate-100 tracking-tight">Morgan Blake</p>
<p className="text-xs text-slate-400">Marketing Director, Warner Music</p>
</div>
</figcaption>
</figure>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              Compliance, payments, age‑gate—done right the first time. The store looks premium and the ops are effortless.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="Founder portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=160&amp;h=160&amp;fit=crop"/>
<div className="">
<p className="text-sm font-medium text-slate-100 tracking-tight">Riley Thompson</p>
<p className="text-xs text-slate-400">Founder, MoveSmiths</p>
</div>
</figcaption>
</figure>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              Our AI content pipeline slashed production time by 90% and improved consistency across web, email, and product pages.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="Content Director portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-sm font-medium text-slate-100 tracking-tight">Priya Desai</p>
<p className="text-xs text-slate-400">Content Director, DTC Brand</p>
</div>
</figcaption>
</figure>

<figure className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[33%] rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-sky-300" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="mt-4 text-sm sm:text-base text-slate-300">
              Exceptional communication and velocity. He delivered measurable outcomes and documented everything for our team.
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<img alt="CTO portrait" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=160&amp;h=160&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-100 tracking-tight">Diego Alvarez</p>
<p className="text-xs text-slate-400">CTO, Seed‑Stage SaaS</p>
</div>
</figcaption>
</figure>
</div>
</div>
</div>

<div className="flex gap-1.5 mt-6 gap-x-1.5 gap-y-1.5 items-center justify-center">
<span className="h-1.5 rounded-full w-5 bg-sky-400/60" data-ts-dot="0"></span>
<span className="h-1.5 rounded-full w-1.5 bg-white/20" data-ts-dot="1"></span>
<span className="h-1.5 rounded-full w-1.5 bg-white/20" data-ts-dot="2"></span>
<span className="h-1.5 rounded-full w-1.5 bg-white/20" data-ts-dot="3"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20" data-ts-dot="4"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20" data-ts-dot="5"></span>
</div>
</div>

</section>

<section className="relative" id="case-studies">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<div className="flex items-end justify-between">
<div className="transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900">
              Selected Case Studies
            </h2>
<p className="mt-2 dark:text-slate-400 text-slate-600">Deep dives into projects with measurable outcomes</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm transition text-sky-400 hover:text-sky-300 duration-700 ease-out opacity-0 translate-y-6" data-reveal="" href="#contact">
            Start your project
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
<article className="group rounded-3xl border p-6 ring-1 backdrop-blur-xl transition border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-store h-5 w-5 text-blue-300" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg></span>
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Peartree Office Furniture</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Custom B2B commerce with quoting, QuickBooks Online sync, and AI-assisted product data—leading to $1M annual revenue growth.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="glass-tag">WooCommerce</span><span className="glass-tag">QuickBooks Online</span><span className="glass-tag">Custom Plugins</span><span className="glass-tag">GPT-5</span>
</div>
<div className="mt-5">
<a className="inline-flex items-center gap-2 transition focus:outline-none focus-visible:ring-2 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 hover:text-sky-200 text-sm font-medium text-sky-300 bg-sky-500/10 border-sky-500/30 border rounded-xl pt-2 pr-3 pb-2 pl-3 invert brightness-75" href="#contact">
                Discuss similar build
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="group rounded-3xl border p-6 ring-1 backdrop-blur-xl transition border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-music h-5 w-5 text-sky-300" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></span>
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Warner Music Partnerships</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Campaign sites and content tooling for artist releases with millions of impressions and robust analytics funnels.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="glass-tag">Headless WP</span><span className="glass-tag">Next.js</span><span className="glass-tag">Analytics</span><span className="glass-tag">CDN</span>
</div>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium dark:bg-white/10 dark:hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" href="#contact">
                Explore opportunities
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<h2 className="sm:text-4xl dark:text-white transition duration-700 ease-out text-3xl font-semibold text-slate-900 tracking-tight opacity-0 translate-y-6" data-reveal="" style={{}}>From the Journal</h2>
<p className="mt-2 dark:text-slate-400 text-slate-600 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">Notes on development, AI, and growing digital products</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<article className="group rounded-2xl border p-5 ring-1 backdrop-blur-xl transition border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Sep 2025
            </div>
<h3 className="mt-3 font-semibold text-slate-100">Shipping Faster with AI-Assisted Product Data</h3>
<p className="mt-2 text-sm text-slate-300">How GPT accelerates specs, descriptions, and categorization without sacrificing accuracy.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200" href="#">Read post <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
<article className="group rounded-2xl border p-5 ring-1 backdrop-blur-xl transition border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Jul 2025
            </div>
<h3 className="mt-3 font-semibold text-slate-100">WordPress at Scale: Patterns that Actually Work</h3>
<p className="mt-2 text-sm text-slate-300">Caching, search, and taxonomy techniques for large content catalogs.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200" href="#">Read post <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
<article className="group rounded-2xl border p-5 ring-1 backdrop-blur-xl transition border-white/10 bg-white/10 ring-white/10 hover:border-sky-500/30 duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              May 2025
            </div>
<h3 className="mt-3 font-semibold text-slate-100">Designing for Conversion in B2B</h3>
<p className="mt-2 text-sm text-slate-300">Turning catalog browsers into qualified leads with productized request flows.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200" href="#">Read post <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white text-slate-900">Let's Build Something</h2>
<p className="mt-2 dark:text-slate-400 text-slate-600">Share your goals. I'll follow up within 1 business day.</p>
<div className="mt-6 space-y-3 text-sm text-slate-300">
<p className="flex items-center gap-2"><svg className="lucide lucide-map-pin h-4 w-4 text-sky-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Remote (US Eastern)</p>
<p className="flex items-center gap-2"><svg className="lucide lucide-briefcase h-4 w-4 text-sky-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Contract or FT Remote</p>
<p className="flex items-center gap-2"><svg className="lucide lucide-clock h-4 w-4 text-sky-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Response within 24 hours</p>
</div>
</div>
<div className="lg:col-span-7 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<form className="rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10" id="contact-form">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm text-slate-300" htmlFor="name">Your Name</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 placeholder-slate-400 text-slate-100 focus:ring-sky-500/50" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-300" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 placeholder-slate-400 text-slate-100 focus:ring-sky-500/50" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm text-slate-300" htmlFor="budget">Budget</label>
<select className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 text-slate-100 focus:ring-sky-500/50" id="budget" name="budget">
<option className="text-slate-900" value="tbd">TBD</option>
<option className="text-slate-900" value="5-10k">$5k - $10k</option>
<option className="text-slate-900" value="10-25k">$10k - $25k</option>
<option className="text-slate-900" value="25k+">$25k+</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-300" htmlFor="timeline">Timeline</label>
<select className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 text-slate-100 focus:ring-sky-500/50" id="timeline" name="timeline">
<option className="text-slate-900" value="flexible">Flexible</option>
<option className="text-slate-900" value="asap">ASAP</option>
<option className="text-slate-900" value="1-2mo">1-2 months</option>
<option className="text-slate-900" value="3mo+">3+ months</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-slate-300" htmlFor="message">Project Details</label>
<textarea className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 placeholder-slate-400 text-slate-100 focus:ring-sky-500/50" id="message" name="message" placeholder="What are you building? What does success look like?" required="" rows="5"></textarea>
</div>
<div className="sm:col-span-2 flex items-start gap-2">
<input className="mt-1 h-4 w-4 rounded border-white/10 bg-white/5 text-sky-500 focus:ring-sky-500/50" id="consent" required="" type="checkbox"/>
<label className="text-sm text-slate-400" htmlFor="consent">I agree to be contacted and receive helpful project materials.</label>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" type="submit">
                  Send Message
                  <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p aria-live="polite" className="text-sm text-slate-400" id="contact-status" role="status"></p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="relative" id="client-login">
<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10">
<div className="rounded-3xl border p-6 ring-1 backdrop-blur-xl border-white/10 bg-white/10 ring-white/10 transition duration-700 ease-out opacity-0 translate-y-6" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-white/10 bg-white/10 ring-white/10"><svg className="lucide lucide-lock h-4.5 w-4.5 text-sky-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
<h2 className="text-xl font-semibold tracking-tight text-slate-100">Client Portal</h2>
</div>
<p className="mt-2 text-sm text-slate-300">Access proposals, invoices, and project docs.</p>
<form className="mt-4 space-y-3" id="login-form">
<div className="">
<label className="block text-sm text-slate-300" htmlFor="login-email">Email</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 placeholder-slate-400 text-slate-100 focus:ring-sky-500/50" id="login-email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm text-slate-300" htmlFor="login-pass">Password</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-inset border-white/10 bg-white/5 ring-white/10 placeholder-slate-400 text-slate-100 focus:ring-sky-500/50" id="login-pass" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium dark:bg-white/10 dark:hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 border-white/10 bg-white/60 hover:bg-white/80 dark:text-slate-100 text-slate-900 focus-visible:ring-sky-500/60" type="submit">
              Sign In
              <svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
</button>
<p aria-live="polite" className="text-center text-xs text-slate-400" id="login-status" role="status"></p>
</form>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
<div className="grid md:grid-cols-3 gap-8 items-start">
<div className="">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-lg p-1.5 dark:text-white text-slate-900">
<svg aria-label="GABEMADE wordmark" className="h-7 w-auto" fill="none" viewbox="0 0 2048 256" xmlns="http://www.w3.org/2000/svg">
<text className="" fill="none" fontFamily="Inter" fontSize="200" font-weight="700" letter-spacing="14" stroke="currentColor" strokeWidth="10" x="0" y="200">GABEMADE</text>
</svg>
</span>
</div>
<p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Full-stack development, product strategy, and AI integrations that move the needle.</p>
</div>
<div className="grid grid-cols-2 gap-6 md:justify-self-center">
<div className="">
<h4 className="text-sm font-semibold text-slate-200">Navigate</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-400 hover:text-sky-300" href="#about">About</a></li>
<li><a className="text-slate-400 hover:text-sky-300" href="#live-projects">Portfolio</a></li>
<li className=""><a className="text-slate-400 hover:text-sky-300" href="#process">Process</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-200">Connect</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300" href="#contact"><svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Email</a></li>
<li><a className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300" href="https://www.linkedin.com/" rel="noopener" target="_blank"><svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>LinkedIn</a></li>
<li><a className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300" href="https://github.com/" rel="noopener" target="_blank"><svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a></li>
</ul>
</div>
</div>
<div className="md:justify-self-end">
<a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/15 focus-visible:ring-sky-500/60 text-sky-300 hover:text-sky-200" href="#contact">
              Start a project
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<p className="mt-3 text-xs text-slate-500 dark:text-slate-400">© <span className="" id="year">2025</span> Vonree Gabriel Nelson</p>
</div>
</div>
</div>
</footer>

<style>
      .glass-tag {
        display: inline-flex;
        align-items: center;
        border-radius: 9999px;
        padding: 0.25rem 0.5rem;
        font-size: 11px;
        line-height: 1;
        color: rgb(203 213 225);
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-bounce { animation: none !important; }
        .transition { transition: none !important; }
      }
    </style>



    </>
  );
}
