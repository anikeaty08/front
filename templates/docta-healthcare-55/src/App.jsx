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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      document.addEventListener('DOMContentLoaded', () => {

          // Sticky Header Glassmorphism Effect
          const header = document.getElementById('main-header');
          if (header) {
              window.addEventListener('scroll', () => {
                  if (window.scrollY > 20) {
                      header.classList.add('bg-white/80', 'backdrop-blur-md', 'border-slate-200/60', 'shadow-sm');
                      header.classList.remove('border-transparent');
                      header.classList.replace('py-5', 'py-4');
                  } else {
                      header.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-slate-200/60', 'shadow-sm');
                      header.classList.add('border-transparent');
                      header.classList.replace('py-4', 'py-5');
                  }
              }, { passive: true });
          }

          // Role Switch Logic for Form
          const radios = document.querySelectorAll('.role-radio');
          radios.forEach(radio => {
              radio.addEventListener('change', (e) => {
                  const btnText = e.target.nextElementSibling;
                  document.querySelectorAll('.role-radio').forEach(r => {
                      r.nextElementSibling.classList.remove('bg-white', 'text-slate-900', 'shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]');
                      r.nextElementSibling.classList.add('text-slate-600');
                  });
                  if(e.target.checked) {
                      btnText.classList.remove('text-slate-600');
                      btnText.classList.add('bg-white', 'text-slate-900', 'shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]');
                  }
              });
          });

          // 3D Tilt Logic
          const container = document.getElementById('tilt-container');
          const card = document.getElementById('tilt-card');
          const glare = document.getElementById('glare');

          if (container && card && glare) {
              container.addEventListener('mousemove', (e) => {
                  const rect = container.getBoundingClientRect();
                  const xPct = (e.clientX - rect.left) / rect.width;
                  const yPct = (e.clientY - rect.top) / rect.height;

                  const xRot = (0.5 - yPct) * 15;
                  const yRot = (xPct - 0.5) * 15;

                  card.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
                  glare.style.opacity = 0.2 + (Math.abs(xPct - 0.5) * 0.3);
                  glare.style.background = `linear-gradient(${xRot * 5 + 45}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)`;
              });

              container.addEventListener('mouseleave', () => {
                  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
                  glare.style.opacity = 0;
              });
          }

          // Visual Scroll Indicator inside Phone UI
          const phoneScrollArea = document.getElementById('phone-scroll-area');
          const scrollProgress = document.getElementById('phone-scroll-progress');
          if(phoneScrollArea && scrollProgress) {
              phoneScrollArea.addEventListener('scroll', () => {
                  const scrollTop = phoneScrollArea.scrollTop;
                  const scrollHeight = phoneScrollArea.scrollHeight - phoneScrollArea.clientHeight;
                  if (scrollHeight > 0) {
                      const progress = (scrollTop / scrollHeight) * 100;
                      scrollProgress.style.width = progress + '%';
                  }
              }, { passive: true });
          }

          // Count Up Observer
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.querySelectorAll('.count-up').forEach(counter => {
                          const target = +counter.getAttribute('data-target');
                          const start = performance.now();
                          const updateCount = (currentTime) => {
                              const progress = Math.min((currentTime - start) / 2500, 1);
                              const ease = 1 - Math.pow(1 - progress, 3);
                              counter.innerText = Math.floor(ease * target).toLocaleString();
                              if (progress < 1) requestAnimationFrame(updateCount);
                          };
                          requestAnimationFrame(updateCount);
                      });
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.5 });

          document.querySelectorAll('.count-up').forEach(c => {
              const parent = c.closest('.group\\/item')?.parentElement;
              if(parent) observer.observe(parent);
          });
      });

      // FAQ Accordion
      function toggleAccordion(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('.icon-plus');
          const isClosed = content.style.maxHeight === '0px' || !content.style.maxHeight;

          document.querySelectorAll('[data-accordion-item]').forEach(item => {
              const itemContent = item.querySelector('div[style*="max-height"]');
              const itemIcon = item.querySelector('.icon-plus');
              const itemTitle = item.querySelector('button > span');
              const itemBtn = item.querySelector('button');

              if (itemContent && itemContent !== content) {
                  itemContent.style.maxHeight = '0px';
                  itemContent.style.opacity = '0';
                  if(itemIcon) itemIcon.style.transform = 'rotate(0deg)';
                  if(itemTitle) itemTitle.classList.remove('text-blue-600');
                  if(itemBtn) itemBtn.setAttribute('aria-expanded', 'false');
              }
          });

          if (isClosed) {
              content.style.maxHeight = content.scrollHeight + 'px';
              content.style.opacity = '1';
              icon.style.transform = 'rotate(45deg)';
              button.querySelector('span').classList.add('text-blue-600');
              button.setAttribute('aria-expanded', 'true');
          } else {
              content.style.maxHeight = '0px';
              content.style.opacity = '0';
              icon.style.transform = 'rotate(0deg)';
              button.querySelector('span').classList.remove('text-blue-600');
              button.setAttribute('aria-expanded', 'false');
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/60 rounded-full blur-[120px] animate-float mix-blend-multiply transform-gpu will-change-transform"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-cyan-100/50 rounded-full blur-[120px] animate-float-delayed mix-blend-multiply transform-gpu will-change-transform"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-slate-200/40 rounded-full blur-[100px] animate-float-slower mix-blend-multiply transform-gpu will-change-transform"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto flex justify-between px-6 md:px-12 opacity-30">
<div className="w-px h-full bg-gradient-to-b from-slate-300/0 via-slate-300 to-slate-300/0 relative"></div>
<div className="w-px h-full bg-gradient-to-b from-slate-300/0 via-slate-300 to-slate-300/0 hidden md:block relative"></div>
<div className="w-px h-full bg-gradient-to-b from-slate-300/0 via-slate-300 to-slate-300/0 hidden lg:block relative"></div>
<div className="w-px h-full bg-gradient-to-b from-slate-300/0 via-slate-300 to-slate-300/0"></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 border-b" id="main-header">
<div className="max-w-7xl mx-auto flex justify-between items-center animate-enter">
<a aria-label="Docta Home" className="flex items-center gap-2 group" href="#">
<div className="relative text-blue-600 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
</div>
<span className="md:text-2xl text-2xl font-semibold text-slate-900 tracking-normal my-3">
            Docta
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#ecosystem">
            The Platform
          </a>
<a className="hover:text-slate-900 transition-colors" href="#providers">
            Solutions
          </a>
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#">
            Sign in
          </a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:scale-105 transform shadow-[0_4px_14px_0_rgba(15,23,42,0.15)]" href="#waitlist">
            Get Early Access
          </a>
</nav>
</div>
</header>

<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col min-h-screen pt-32">

<main className="flex-grow flex flex-col pb-12 items-center" id="waitlist">

<div className="animate-enter text-center max-w-4xl mx-auto mb-12" style={{animationDelay: '100ms'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm animate-float-slower cursor-default">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
              Rolling out across the UAE
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-semibold text-slate-900 tracking-tight mb-6">
            Healthcare without
            <br/>
<span className="text-slate-600">the waiting room.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-600 max-w-2xl mb-10">
            Skip the phone tag and opaque pricing. Get instant access to the UAE's top specialists with AI-matched care, while providers scale their clinics on autopilot.
          </p>

<div className="relative w-full max-w-md mx-auto z-20 mb-10">
<div className="bg-white/70 border border-white/50 rounded-[2rem] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md">
<fieldset className="grid grid-cols-2 gap-1 p-1 bg-slate-100/80 rounded-[1.5rem] mb-2 border-0">
<legend className="sr-only">Choose your role</legend>
<label className="cursor-pointer relative">
<input aria-label="I am a patient" checked="" className="role-radio sr-only" name="role" type="radio"/>
<div className="transition-all duration-200 text-sm font-medium text-slate-600 text-center rounded-full py-2">
                    I'm a Patient
                  </div>
</label>
<label className="cursor-pointer relative">
<input aria-label="I am a provider" className="role-radio sr-only" name="role" type="radio"/>
<div className="transition-all duration-200 text-sm font-medium text-slate-600 text-center rounded-full py-2">
                    I'm a Provider
                  </div>
</label>
</fieldset>
<form className="flex flex-col sm:flex-row gap-2">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg group-focus-within:text-slate-600 transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<input aria-label="Email address" className="focus:ring-4 focus:ring-slate-100 focus:border-slate-300 block placeholder-slate-400 transition-all outline-none text-sm text-slate-900 bg-white w-full border border-slate-200 rounded-full py-3.5 pl-11 pr-4 shadow-sm" placeholder="Enter your work or personal email" required="" type="email"/>
</div>
<button aria-label="Join Waitlist" className="w-full sm:w-auto hover:bg-slate-800 hover:scale-105 transition-all duration-300 flex whitespace-nowrap text-sm font-medium text-white bg-slate-900 rounded-full px-6 py-3.5 shadow-[0_4px_14px_0_rgba(15,23,42,0.15)] gap-2 items-center justify-center" type="submit">
                  Secure My Spot
                  <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="-bottom-7 flex text-[11px] font-medium text-slate-500 w-full absolute left-0 gap-x-1.5 gap-y-1.5 items-center justify-center">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:shield-check-linear"></iconify-icon>
              DHA &amp; HIPAA Compliant. Your data is strictly secure.
            </div>
</div>

<div className="flex flex-col animate-enter my-10 items-center transform-gpu z-10 relative" style={{animationDelay: '200ms'}}>
<div className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-full py-2.5 px-5 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.04)]">
<div className="flex -space-x-2.5">
<img alt="User Avatar 1" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
<img alt="User Avatar 2" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<img alt="User Avatar 3" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-medium text-slate-500 shadow-sm">
                  +25k
                </div>
</div>
<div className="text-sm font-medium text-slate-900 flex flex-col items-start leading-tight">
<span>Join 25,000+ patients &amp; 800+ top clinics</span>
<span className="text-slate-500 font-normal">
                  Securing early access to the network
                </span>
</div>
</div>
</div>
</div>

<div className="flex w-full h-[600px] max-w-4xl mx-auto mb-32 relative items-center justify-center">

<div className="w-full max-w-[300px] md:max-w-[340px] cursor-default z-20 relative perspective-1000 transform-gpu" id="tilt-container">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse-glow transform-gpu will-change-transform"></div>

<div className="tilt-card transform-style-3d border-[8px] overflow-hidden bg-white h-[680px] border-slate-800 ring-black/5 ring-1 rounded-[3rem] relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]" id="tilt-card">
<div className="absolute inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300" id="glare" style={{background: 'linear-gradient(28.455882deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)'}}></div>
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-2xl z-50 pointer-events-none"></div>

<div className="flex flex-col bg-slate-50 w-full h-full relative overflow-hidden">
<div className="shrink-0 bg-white/80 w-full z-40 top-0 backdrop-blur-md pt-6 pb-2 px-6 flex justify-between items-end h-12">
<span className="text-xs font-medium text-slate-900 tracking-tight">
                    9:41
                  </span>
<div className="flex gap-1.5 items-center">
<iconify-icon className="text-slate-900 text-xs" icon="solar:cellular-outline"></iconify-icon>
<iconify-icon className="text-slate-900 text-xs" icon="solar:wi-fi-outline"></iconify-icon>
<iconify-icon className="text-slate-900 text-xs" icon="solar:battery-full-outline"></iconify-icon>
</div>
</div>
<div className="shrink-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 pt-3 px-5 pb-4 transition-all duration-300 ease-in-out relative">
<div className="flex mb-6 items-center justify-between">
<button aria-label="Go back" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none">
                        AI Verified Match
                      </span>
<span className="text-base font-medium text-slate-900 tracking-tight leading-none">
                        Dermatology Dubai
                      </span>
</div>
<button aria-label="User profile" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:border-slate-300 transition-all active:scale-95 overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
</button>
</div>
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 -mx-5 px-5 select-none snap-x">
<button aria-label="Select Today" className="snap-center flex-shrink-0 relative group flex flex-col items-center justify-center w-14 h-[4.5rem] bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-900/20 ring-1 ring-black/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                        Today
                      </span>
<span className="text-xl font-medium tracking-tight leading-none">
                        24
                      </span>
<div className="absolute bottom-2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
</button>
<button aria-label="Select Friday 25th" className="snap-center flex-shrink-0 flex flex-col items-center justify-center w-14 h-[4.5rem] bg-white text-slate-500 border border-slate-200 rounded-2xl hover:border-slate-300 hover:text-slate-900 transition-all duration-200 active:scale-95">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wider mb-1">
                        Fri
                      </span>
<span className="text-xl font-medium tracking-tight leading-none">
                        25
                      </span>
</button>
<button aria-label="Select Saturday 26th" className="snap-center flex-shrink-0 flex flex-col items-center justify-center w-14 h-[4.5rem] bg-white text-slate-500 border border-slate-200 rounded-2xl hover:border-slate-300 hover:text-slate-900 transition-all duration-200 active:scale-95">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wider mb-1">
                        Sat
                      </span>
<span className="text-xl font-medium tracking-tight leading-none">
                        26
                      </span>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent">
<div className="h-full bg-blue-500 w-0 transition-all duration-75" id="phone-scroll-progress"></div>
</div>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar z-0 p-5 pb-24 relative space-y-4" id="phone-scroll-area">
<div className="flex items-center justify-between px-1">
<span className="text-xs font-medium text-slate-500">
                      3 Specialists available
                    </span>
<button aria-label="Filter results" className="flex items-center gap-1 text-xs font-medium text-blue-600 p-1">
                      Filters
                      <iconify-icon icon="solar:tuning-linear"></iconify-icon>
</button>
</div>

<div className="group bg-white border border-slate-100 rounded-[1.25rem] p-4 relative shadow-[0_2px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:border-slate-200">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-bl-xl z-10">
                      98% AI Match
                    </div>
<div className="flex gap-3.5 items-start mb-4">
<div className="w-14 h-14 rounded-[1rem] overflow-hidden bg-slate-100 relative shrink-0">
<img alt="Dr. Sarah Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&amp;q=80"/>
<div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-0.5 flex items-center gap-1.5">
                          Dr. Sarah Chen
                          <iconify-icon aria-label="Verified Doctor" className="text-blue-500" icon="solar:verified-check-bold"></iconify-icon>
</h3>
<p className="text-xs text-slate-500 font-normal mb-1.5 truncate">
                          Takes your insurance • 12 yrs exp
                        </p>
<div className="flex gap-2 items-center">
<div aria-label="Rating 4.9" className="flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-100/60 text-amber-500">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-amber-700">
                              4.9
                            </span>
</div>
<span className="text-xs text-slate-400 font-normal">
                            128 verified reviews
                          </span>
</div>
</div>
</div>
<div className="space-y-2.5">
<div className="h-px w-full bg-slate-50"></div>
<div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Available Today
                      </div>
<div className="grid grid-cols-3 gap-2">
<button aria-label="Book for 11:30 AM" className="relative py-2.5 text-xs font-medium text-blue-600 bg-blue-50/50 border border-blue-200 rounded-xl hover:bg-blue-50 transition-all">
                          11:30 AM
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="inline-flex h-2.5 w-2.5 bg-blue-500 border-white border-2 rounded-full relative"></span>
</span>
</button>
<button aria-label="Book for 2:15 PM" className="py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                          2:15 PM
                        </button>
<button aria-label="Book for 4:45 PM" className="py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                          4:45 PM
                        </button>
</div>
</div>
</div>

<div className="bg-white rounded-[1.25rem] p-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:border-slate-200 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
<div className="flex gap-3.5 items-start mb-4 relative z-10">
<div className="w-14 h-14 rounded-[1rem] overflow-hidden bg-slate-100 shrink-0">
<img alt="Dr. James Wilson" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&amp;q=80"/>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-0.5">
                          Dr. James Wilson
                        </h3>
<p className="text-xs text-slate-500 font-normal mb-1.5 truncate">
                          Esthetician • 8 yrs exp
                        </p>
<div className="flex items-center gap-2">
<div aria-label="Rating 4.7" className="flex items-center gap-0.5 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100 text-amber-400">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                              4.7
                            </span>
</div>
</div>
</div>
</div>
<div className="space-y-2.5 relative z-10">
<div className="h-px w-full bg-slate-50"></div>
<div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Available Today
                      </div>
<div className="grid grid-cols-3 gap-2">
<button aria-label="Book for 10:15 AM" className="py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                          10:15 AM
                        </button>
<button aria-label="Book for 3:45 PM" className="py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                          3:45 PM
                        </button>
<button aria-label="Book for 5:00 PM" className="py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                          5:00 PM
                        </button>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center pointer-events-none">
<button aria-label="Switch to map view" className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group text-white bg-slate-900 pointer-events-auto border border-slate-700/50 rounded-full pl-3 pr-4 py-1.5 shadow-[0_8px_30px_-4px_rgba(15,23,42,0.4)] backdrop-blur-xl">
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-wide">
                      Map View
                    </span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[5%] right-[8%] z-20 hidden md:block animate-enter transform-gpu" style={{animationDelay: '300ms'}}>
<div className="bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-5 rounded-[1.25rem] w-72 transform rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 group cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-60 z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100/80">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 leading-none">
                      Live Network
                    </span>
</div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100/80 px-2 py-1 rounded-md border border-slate-200/50">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span>UAE</span>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-[0.85rem] bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide leading-none mb-1">
                          Patients
                        </div>
<div className="text-base font-semibold text-slate-900 tracking-tight leading-none count-up tabular-nums" data-target="25492">
                          0
                        </div>
</div>
</div>
<div aria-label="12 percent increase" className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                      12%
                    </div>
</div>

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-[0.85rem] bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 group-hover/item:bg-purple-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
<iconify-icon className="text-lg" icon="solar:hospital-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide leading-none mb-1">
                          Clinics
                        </div>
<div className="text-base font-semibold text-slate-900 tracking-tight leading-none count-up tabular-nums" data-target="843">
                          0
                        </div>
</div>
</div>
<div aria-label="8 percent increase" className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                      8%
                    </div>
</div>

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-[0.85rem] bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 group-hover/item:bg-amber-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
<iconify-icon className="text-lg" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide leading-none mb-1">
                          Doctors
                        </div>
<div className="text-base font-semibold text-slate-900 tracking-tight leading-none count-up tabular-nums" data-target="3291">
                          0
                        </div>
</div>
</div>
<div aria-label="24 percent increase" className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                      24%
                    </div>
</div>
</div>
<div className="mt-5">
<div aria-hidden="true" className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full rounded-full w-0 animate-progress"></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-xs font-medium text-slate-500">
                      System Capacity
                    </span>
<span className="text-xs font-medium text-slate-600">
                      Optimal
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-[20%] right-[15%] z-30 animate-float-delayed transform-gpu hidden md:block">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-64 transform rotate-6 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">
                    Insurance Approved
                  </p>
<p className="text-xs text-slate-500 font-medium">
                    Zero out-of-pocket costs.
                  </p>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span className="font-medium">Date</span>
<span className="font-semibold text-slate-900">Tomorrow</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span className="font-medium">Time</span>
<span className="font-semibold text-slate-900">9:30 AM</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-[20%] left-[15%] z-10 animate-float transform-gpu hidden md:block">
<div className="bg-slate-900 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] w-56 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-slate-800">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  AI Triage
                </span>
<iconify-icon className="text-blue-400 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<p className="text-sm text-white mb-2 font-semibold">
                Specialist Found
              </p>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-1">
<div className="h-full bg-blue-500 w-[98%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
<p className="text-[10px] font-medium text-slate-400 text-right">
                98% Match Probability
              </p>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 mb-24" id="ecosystem">
<div className="text-center mb-16">
<p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
              The Docta Ecosystem
            </p>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
              The complete healthcare
              <br/>
              operating system.
            </h2>
<p className="text-lg text-slate-500 font-normal max-w-3xl mx-auto">
              We've rebuilt the entire healthcare journey from the ground up.
              Whether you're booking a routine checkup, flying in for
              specialized surgery, or caring for your pet, Docta is your single
              access point.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-1 overflow-hidden flex flex-col bg-white h-full border-slate-200 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Docta App
              </h3>
<p className="leading-relaxed flex-grow text-sm text-slate-500">
                Book verified specialists instantly. View real-time calendars,
                read trusted reviews, and manage your family's health history in
                one unified platform.
              </p>
</div>

<div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:crown-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Docta Crown
              </h3>
<p className="text-sm leading-relaxed text-slate-500 flex-grow">
                White-glove medical concierge. From luxury recovery suites to
                elite surgeon selection, we manage end-to-end medical tourism
                for VIP patients.
              </p>
</div>

<div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-5 right-5">
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                  Soon
                </span>
</div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Docta Anywhere
              </h3>
<p className="text-sm leading-relaxed text-slate-500 flex-grow">
                Instant virtual care. Connect with certified doctors in under 3
                minutes for prescriptions, referrals, and urgent consultations.
              </p>
</div>

<div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-5 right-5">
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                  Soon
                </span>
</div>
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-5 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:hearts-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Docta Paws
              </h3>
<p className="leading-relaxed flex-grow text-sm text-slate-500">
                Because your pets deserve the same frictionless booking and
                elite specialists as the rest of your family. Premium veterinary
                care on demand.
              </p>
</div>
</div>

<div className="text-center opacity-60 w-full max-w-5xl mx-auto px-4 mt-16">
<p className="text-[10px] uppercase font-semibold text-slate-500 tracking-widest mb-8">
              Trusted by the UAE's modern healthcare teams
            </p>
<div className="flex flex-wrap gap-10 md:gap-16 grayscale justify-center items-center">
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-5 h-5 bg-slate-400 rounded-full"></div>
<span className="font-semibold text-slate-700 tracking-tight text-xl">
                  MEDIC
                </span>
</div>
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-5 h-5 bg-slate-400 rotate-45"></div>
<span className="font-semibold text-slate-700 tracking-tight text-xl">
                  PlusHealth
                </span>
</div>
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-5 h-5 bg-slate-400 rounded-sm"></div>
<span className="font-semibold text-slate-700 tracking-tight text-xl">
                  CLINICA
                </span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 mb-24" id="providers">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
              A fundamentally better experience.
              <br/>
              For everyone.
            </h2>
<p className="text-lg text-slate-500 font-normal max-w-2xl mx-auto">
              Docta isn't just an app; it's a bridge. We eliminate the
              administrative burden for doctors while giving patients
              unprecedented access and transparency to care.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

<div className="group relative bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
<div className="overflow-hidden h-56 relative">
<div className="z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 absolute inset-0 mt-20"></div>
<img alt="Patient checking their schedule" className="group-hover:scale-105 transition-transform duration-700 z-10 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="bg-white border border-slate-200 rounded-full absolute top-6 left-6 shadow-sm px-3 py-1.5 z-20">
<span className="uppercase flex items-center gap-2 text-[10px] font-semibold text-slate-700 tracking-widest">
<iconify-icon className="text-sm" icon="solar:user-linear"></iconify-icon>
                    For Patients
                  </span>
</div>
</div>
<div className="flex flex-col flex-grow -mt-12 z-20 p-8 pt-0 bg-white">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                  Total control of your health.
                </h3>
<p className="leading-relaxed text-slate-500 mb-8">
                  Take the guesswork out of healthcare. Find the exact
                  specialist you need based on your symptoms, your insurance
                  network, and immediate availability.
                </p>
<div className="mt-auto space-y-4">
<div className="flex items-start gap-3 group/item">
<div className="flex shrink-0 w-5 h-5 rounded-full mt-0.5 items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-slate-900">
                        AI-Powered Triage
                      </span>
<span className="block text-sm text-slate-500 mt-0.5">
                        Describe your symptoms and our AI matches you with the
                        right specialist instantly.
                      </span>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="flex shrink-0 w-5 h-5 rounded-full mt-0.5 items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-slate-900">
                        Instant Insurance Verification
                      </span>
<span className="block text-sm text-slate-500 mt-0.5">
                        Know your exact coverage, network status, and copay
                        before you even step into the clinic.
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
<div className="h-56 overflow-hidden relative">
<div className="z-10 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 absolute inset-0 mt-20"></div>
<img alt="Doctor reviewing notes" className="group-hover:scale-105 transition-transform duration-700 z-10 w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&amp;q=80"/>
<div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full absolute top-6 left-6 shadow-sm px-3 py-1.5 z-20">
<span className="uppercase flex items-center gap-2 text-[10px] font-semibold text-emerald-400 tracking-widest">
<iconify-icon className="text-sm" icon="solar:stethoscope-linear"></iconify-icon>
                    For Providers
                  </span>
</div>
</div>
<div className="flex flex-col flex-grow -mt-12 z-20 p-8 pt-0 bg-slate-900">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                  Scale your practice effortlessly.
                </h3>
<p className="leading-relaxed text-slate-400 mb-8">
                  Stop losing revenue to no-shows and administrative bloat.
                  Docta automates your front desk so you can focus entirely on
                  patient outcomes and care delivery.
                </p>
<div className="mt-auto space-y-4">
<div className="flex items-start gap-3 group/item">
<div className="flex shrink-0 w-5 h-5 rounded-full mt-0.5 items-center justify-center bg-slate-800 border border-slate-700 text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-slate-900 transition-colors">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-slate-200">
                        Automated Waitlist Recovery
                      </span>
<span className="block text-sm text-slate-400 mt-0.5">
                        When a patient cancels, our system instantly alerts the
                        next person in line to fill your slot.
                      </span>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="flex shrink-0 w-5 h-5 rounded-full mt-0.5 items-center justify-center bg-slate-800 border border-slate-700 text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-slate-900 transition-colors">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-slate-200">
                        Pre-Verified Patient Intake
                      </span>
<span className="block text-sm text-slate-400 mt-0.5">
                        Patients arrive with digital paperwork completed and
                        insurance automatically pre-authorized.
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="px-6 md:px-12 w-full max-w-3xl mx-auto border-t border-slate-200/60 pt-16 pb-20" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Frequently asked questions
            </h2>
<p className="text-lg text-slate-500 font-normal">
              Everything you need to know about Docta and our advanced
              healthcare network.
            </p>
</div>
<div className="w-full border-t border-slate-200/60">

<div className="group border-b border-slate-200/60" data-accordion-item="">
<button aria-expanded="false" className="flex w-full items-center justify-between py-5 text-left focus:outline-none transition-colors" onclick="toggleAccordion(this)">
<span className="group-hover:text-blue-600 transition-colors text-sm font-medium text-slate-900">
                  How exactly does the AI matching work?
                </span>
<span className="ml-6 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</span>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 opacity-0" style={{maxHeight: '0px'}}>
<div className="pb-6 pr-12 text-sm leading-relaxed text-slate-500 font-normal">
                  Our proprietary triage algorithm cross-references your
                  reported symptoms, medical history, location, and insurance
                  provider against our database of specialists. In milliseconds,
                  it filters out out-of-network doctors and presents you with
                  highly rated specialists who are actually equipped to handle
                  your specific case and have immediate availability.
                </div>
</div>
</div>
<div className="group border-b border-slate-200/60" data-accordion-item="">
<button aria-expanded="false" className="flex w-full items-center justify-between py-5 text-left focus:outline-none transition-colors" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  How does Docta help clinics increase revenue?
                </span>
<span className="ml-6 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</span>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 opacity-0" style={{maxHeight: '0px'}}>
<div className="pb-6 pr-12 text-sm leading-relaxed text-slate-500 font-normal">
                  We act as a high-conversion patient acquisition channel while
                  drastically reducing your operational costs. By automating
                  waitlist fulfillment, eliminating phone-based scheduling, and
                  pre-authorizing insurance digitally before the patient
                  arrives, clinics see a massive drop in no-shows and a
                  significant increase in daily billable hours.
                </div>
</div>
</div>
<div className="group border-b border-slate-200/60" data-accordion-item="">
<button aria-expanded="false" className="flex w-full items-center justify-between py-5 text-left focus:outline-none transition-colors" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  What is Docta Crown?
                </span>
<span className="ml-6 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</span>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 opacity-0" style={{maxHeight: '0px'}}>
<div className="pb-6 pr-12 text-sm leading-relaxed text-slate-500 font-normal">
                  Docta Crown is our elite medical concierge service designed
                  for international VIPs seeking treatments in the UAE. We
                  assign you a dedicated clinical case manager who curates the
                  top surgical teams, coordinates your medical records, arranges
                  luxury travel and accommodations, and oversees your
                  post-operative recovery, guaranteeing a flawless medical
                  tourism experience.
                </div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200/60 pb-8 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
<div className="md:col-span-5 flex flex-col items-start">
<a aria-label="Docta Home" className="flex items-center gap-2 mb-6 text-blue-600" href="#">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear"></iconify-icon>
<span className="text-xl font-semibold text-slate-900 tracking-tight">
                Docta Group
              </span>
</a>
<h3 className="text-sm font-semibold text-slate-900 mb-2">
              Join the network
            </h3>
<p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
              Experience the future of healthcare. Sign up for early access and
              platform updates in the UAE.
            </p>
<form className="flex w-full max-w-sm gap-2">
<input aria-label="Email address for newsletter" className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 shadow-sm focus:ring-4 focus:ring-slate-100 focus:border-slate-300 outline-none transition-all" placeholder="Enter your email" required="" type="email"/>
<button aria-label="Subscribe" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all active:scale-95 shadow-[0_4px_14px_0_rgba(15,23,42,0.15)]" type="submit">
                Secure Access
              </button>
</form>
</div>
<div className="hidden md:block md:col-span-1"></div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-6">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">
                Platform
              </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Docta App
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Docta Crown
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Docta Anywhere
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Docta Paws
                  </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    About Us
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Legal</h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    Terms
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row border-t border-slate-200/60 pt-8 items-start md:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<p className="text-sm text-slate-500">
              © 2026 Docta Group L.L.C. Headquartered in Dubai.
            </p>
<p className="text-xs text-slate-400">
              We are operators, not theorists.
            </p>
</div>
<div className="flex gap-4">
<a aria-label="Link" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:-translate-y-0.5" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a aria-label="Play" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:-translate-y-0.5" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
</a>
<a aria-label="Email" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:-translate-y-0.5" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
