import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll
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



(function(){const btn=document.getElementById('mobile-menu-btn');const menu=document.getElementById('mobile-menu');if(btn&&menu){btn.addEventListener('click',()=>{menu.classList.toggle('hidden');});}})();



              (function() {
                const btnLeft = document.getElementById('btn-left');
                const btnRight = document.getElementById('btn-right');
                const menuTrack = document.getElementById('menu-track');
                const scrollAmount = 250;

                function updateButtons() {
                  const atStart = menuTrack.scrollLeft <= 0;
                  const atEnd = menuTrack.scrollLeft + menuTrack.clientWidth >= menuTrack.scrollWidth - 1;

                  btnLeft.disabled = atStart;
                  btnRight.disabled = atEnd;
                }

                btnLeft.addEventListener('click', function() {
                  menuTrack.scrollLeft -= scrollAmount;
                  setTimeout(updateButtons, 300);
                });

                btnRight.addEventListener('click', function() {
                  menuTrack.scrollLeft += scrollAmount;
                  setTimeout(updateButtons, 300);
                });

                menuTrack.addEventListener('scroll', updateButtons);

                updateButtons();
              })();
            


    (function () {
      const root = document.currentScript.closest('section');
      const quoteEl = root.querySelector('#t-quote');
      const nameEl = root.querySelector('#t-name');
      const roleEl = root.querySelector('#t-role');
      const avatarEl = root.querySelector('#t-avatar');
      const countEl = root.querySelector('#t-count');
      const prevBtn = root.querySelector('#t-prev');
      const nextBtn = root.querySelector('#t-next');

      const slides = [
        {
          quote: '"This library makes sourcing visuals effortless. Accurate search, fast downloads, and a sleek interface—exactly what my team needed."',
          name: 'Alex M.',
          role: 'Design Lead at NovaStudio',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
        },
        {
          quote: '"We ship campaigns faster with consistent, high-quality images. Licensing is clear and saves us hours."',
          name: 'Priya K.',
          role: 'Marketing Manager at Lumos',
          avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop'
        },
        {
          quote: '"The curation is spot-on. Our product feels premium without breaking the budget."',
          name: 'Daniel R.',
          role: 'Founder at PixelForge',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
        }
      ];

      let index = 0;

      function render(i) {
        const s = slides[i];
        quoteEl.textContent = s.quote;
        nameEl.textContent = s.name;
        roleEl.textContent = s.role;
        avatarEl.src = s.avatar;
        if (countEl) countEl.textContent = (i + 1) + '/' + slides.length;
      }

      prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        render(index);
      });

      nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        render(index);
      });

      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
      });

      render(index);
    })();
  


          (function () {
            const container = document.getElementById('expanding-cards');
            if (!container) return;
            const cards = Array.from(container.querySelectorAll('.card'));

            const show = (active) => {
              cards.forEach((c) => {
                const panel = c.querySelector('.reveal');
                if (c === active) {
                  c.style.flex = '2.2';
                  c.classList.remove('opacity-70');
                  c.classList.add('ring-neutral-700');
                  if (panel) {
                    panel.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                    panel.classList.add('opacity-100', 'translate-y-0');
                  }
                } else {
                  c.style.flex = '0.85';
                  c.classList.add('opacity-70');
                  if (panel) {
                    panel.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                    panel.classList.remove('opacity-100', 'translate-y-0');
                  }
                }
              });
            };

            const reset = () => {
              cards.forEach((c) => {
                c.style.flex = '1';
                c.classList.remove('opacity-70', 'ring-neutral-700');
                const panel = c.querySelector('.reveal');
                if (panel) {
                  panel.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                  panel.classList.remove('opacity-100', 'translate-y-0');
                }
              });
            };

            cards.forEach((c) => {
              c.addEventListener('mouseenter', () => show(c));
              c.addEventListener('focusin', () => show(c));
            });

            container.addEventListener('mouseleave', reset);

            // Touch support: tap to expand
            cards.forEach((c) => {
              c.addEventListener('click', (e) => {
                const expanded = c.style.flex === '2.2';
                if (!expanded) {
                  e.preventDefault();
                  show(c);
                }
              });
            });
          })();
        


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="sm:px-6 lg:px-8 max-w-[1400px] mr-auto ml-auto pr-4 pl-4">

<header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] sm:pr-6 sm:pl-6 lg:pr-0 lg:pl-0 pt-4 pr-6 pb-4 pl-6 gap-x-3 gap-y-3 items-center justify-between">
<div className="flex items-center gap-6">
<a className="inline-flex items-center justify-center h-[30px] px-3 rounded text-white font-geist font-semibold tracking-tight text-[18px] leading-none whitespace-nowrap" href="#">Luna</a>
<nav className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition text-sm font-medium text-neutral-300 font-geist" href="#">Explore</a>
<a className="transition text-sm font-medium text-white font-geist" href="#">Photos</a>
<a className="hover:text-white transition text-sm font-medium text-neutral-300 font-geist" href="#">Videos</a>
<a className="hover:text-white transition text-sm font-medium text-neutral-300 font-geist" href="#">Contributors</a>
</nav>
</div>
<div className="hidden md:flex flex-1 pr-4 pl-4 items-center justify-center">
<div className="w-full max-w-2xl">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center text-neutral-400">
<svg className="lucide lucide-search w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(163, 163, 163)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input aria-label="Search" className="ring-inset placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700 text-sm text-neutral-200 font-geist bg-neutral-900/70 w-full h-10 ring-neutral-800 ring-1 rounded-full pr-4 pl-10" placeholder="Search photos and illustrations" type="text"/>
</div>
</div>
</div>
<button className="" style="
    position: relative; cursor: pointer;
    height: 40px; min-width: 120px; padding: 2px;
    border: 0; border-radius: 9999px;
    /* Added blue tone in the middle of the gradient */
    background: linear-gradient(135deg, #ff6fb3 0%, #3ba6ff 50%, #ffb36b 100%);
    box-shadow:
      0 8px 24px rgba(59, 166, 255, 0.35),
      0 2px 6px rgba(0,0,0,0.25);
    display: inline-flex; align-items: center; justify-content: center;
  ">

<span style="
      position: relative; display: flex; align-items: center; justify-content: center;
      width: 100%; height: 100%; border-radius: inherit; overflow: hidden;
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(255, 255, 255, 0.28);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.35),
        inset 0 -8px 18px rgba(59, 166, 255, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      padding: 0 0.25rem;
    ">

<span style="
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(-65deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 70%);
        background-size: 200% 100%; background-repeat: no-repeat;
        animation: btn_sheen 2.8s ease-in-out infinite;
        pointer-events: none; border-radius: inherit;
        mix-blend-mode: screen;
      "></span>

<span style="
        content: ''; position: absolute; inset: 0;
        background: radial-gradient(120% 60% at 50% -10%, rgba(255,255,255,0.45), transparent 55%);
        pointer-events: none; border-radius: inherit;
      "></span>
<span className="" style="
        position: relative; z-index: 1;
        color: rgba(255,255,255,0.95);
        font-weight: 600; line-height: 1; padding: 0 1.1rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.35);
        letter-spacing: 0.2px;
      ">Sign in</span>
</span>
<style>
    @keyframes btn_sheen {
      0% { background-position: 130% 0; opacity: 1; }
      100% { background-position: -160% 0; opacity: 0; }
    }
    button:hover > span {
      background: rgba(255, 255, 255, 0.13);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.5),
        inset 0 -10px 20px rgba(59,166,255,0.3);
    }
    button:hover {
      transform: translateY(-1px);
      box-shadow:
        0 10px 28px rgba(59, 166, 255, 0.4),
        0 4px 10px rgba(0,0,0,0.28);
    }
    button:active {
      transform: translateY(1px);
      box-shadow:
        0 6px 16px rgba(59, 166, 255, 0.28),
        0 2px 6px rgba(0,0,0,0.28);
    }
  </style>
</button>
</div>
</header>
<div className="hidden md:hidden fixed top-[72px] left-0 right-0 bg-neutral-950/95 backdrop-blur-lg z-30 border-t border-neutral-800" id="mobile-menu">
<nav className="flex flex-col p-4 gap-2">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-geist px-4 py-3 rounded-lg hover:bg-neutral-900" href="#">
            Explore
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-geist px-4 py-3 rounded-lg hover:bg-neutral-900" href="#">
            Collections
          </a>
<a className="text-sm font-medium text-white font-geist px-4 py-3 rounded-lg bg-neutral-900" href="#">
            Photos
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-geist px-4 py-3 rounded-lg hover:bg-neutral-900" href="#">
            Videos
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-geist px-4 py-3 rounded-lg hover:bg-neutral-900" href="#">
            Contributors
          </a>
</nav>
</div>
<section className="z-10 animate-scaleIn animation-delay-200 overflow-hidden sm:p-8 sm:mb-0 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] border-white/10 border rounded-2xl mt-6 mr-auto mb-0 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-none" style={{height: '500px'}}>
<style className="">
    @keyframes float1 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-2deg); }
    }
    @keyframes float3 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-25px) rotate(3deg); }
    }
    @keyframes float4 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-18px) rotate(-1deg); }
    }
  </style>
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="flex w-full h-full items-center">
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<img alt="Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/386aed4d-4457-47f0-9edf-23b08539d1e4_3840w.webp"/>
</div>
<div className="sm:px-6 lg:px-8 z-10 w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl">
<h1 className="leading-[0.95] sm:text-6xl md:text-7xl [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-4xl font-light text-white tracking-tighter font-geist max-w-xl">
            Discover Beautiful Stock Photos
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] text-base text-neutral-300 font-geist max-w-[60ch] mt-6">
            Over 3 million high-quality stock photos from talented photographers worldwide. Free to use for personal and
            commercial projects.
          </p>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] mt-6 space-y-4">
<div className="xl:bg-neutral-50/5 rounded-full px-[1px] py-[1px]">
<div className="flex xl:bg-white/0 ring-white/20 ring-1 rounded-full px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl gap-x-2 gap-y-2 items-center">
<div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 transition">
<svg className="text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<input aria-label="Search" className="w-full bg-transparent outline-none border-0 placeholder-white/60 text-white sm:text-base text-sm py-2 px-2" placeholder="Search high-resolution images..." type="text"/>
<button className="" style="
    position: relative; cursor: pointer;
    height: 40px; min-width: 120px; padding: 2px;
    border: 0; border-radius: 9999px;
    /* Pink → Blue → Darker Coral */
    background: linear-gradient(135deg, #ff6fb3 0%, #3ba6ff 50%, #e26a4c 100%);
    box-shadow:
      0 8px 24px rgba(59, 166, 255, 0.35),
      0 2px 6px rgba(0,0,0,0.25);
    display: inline-flex; align-items: center; justify-content: center;
  ">

<span style="
      position: relative; display: flex; align-items: center; justify-content: center;
      width: 100%; height: 100%; border-radius: inherit; overflow: hidden;
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(255, 255, 255, 0.28);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.35),
        inset 0 -8px 18px rgba(59, 166, 255, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      padding: 0 0.25rem;
    ">

<span style="
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(-65deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 70%);
        background-size: 200% 100%; background-repeat: no-repeat;
        animation: btn_sheen 2.8s ease-in-out infinite;
        pointer-events: none; border-radius: inherit;
        mix-blend-mode: screen;
      "></span>

<span style="
        content: ''; position: absolute; inset: 0;
        background: radial-gradient(120% 60% at 50% -10%, rgba(255,255,255,0.45), transparent 55%);
        pointer-events: none; border-radius: inherit;
      "></span>
<span style="
        position: relative; z-index: 1;
        color: rgba(255,255,255,0.95);
        font-weight: 600; line-height: 1; padding: 0 1.1rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.35);
        letter-spacing: 0.2px;
      ">Search</span>
</span>
<style>
    @keyframes btn_sheen {
      0% { background-position: 130% 0; opacity: 1; }
      100% { background-position: -160% 0; opacity: 0; }
    }
    button:hover > span {
      background: rgba(255, 255, 255, 0.13);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.5),
        inset 0 -10px 20px rgba(59,166,255,0.3);
    }
    button:hover {
      transform: translateY(-1px);
      box-shadow:
        0 10px 28px rgba(59, 166, 255, 0.4),
        0 4px 10px rgba(0,0,0,0.28);
    }
    button:active {
      transform: translateY(1px);
      box-shadow:
        0 6px 16px rgba(59, 166, 255, 0.28),
        0 2px 6px rgba(0,0,0,0.28);
    }
  </style>
</button>
</div>
</div>
<div className="flex flex-wrap items-center gap-2"></div>
</div>
</div>
</div>

</div>
</div>
</section>
<div className="max-w-7xl mt-0 mr-auto mb-0 ml-auto pr-0 pl-0 space-y-6 gap-x-y-0 gap-y-0 sm:gap-y-0 sm:pl-0 sm:pr-0 sm:mb-0">
<section className="sm:pl-0 sm:pr-0 max-w-7xl mr-auto mb-24 ml-auto pr-0 pl-0"></section>

<header className="sticky top-0 z-40 -mx-2 mb-6 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"></header>

<section className="mb-5">
<div className="ring-inset xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/60 rounded-2xl ring-neutral-800 ring-1 pt-3 pr-3 pb-3 pl-3">
<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

<div className="flex items-center gap-3">
<button className="inline-flex flex-none items-center whitespace-nowrap gap-2 h-10 px-3 text-sm font-medium font-geist text-neutral-200 bg-neutral-900 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
<svg className="h-5 w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="2"></circle>
<circle cx="8" cy="12" r="2"></circle>
<circle cx="16" cy="20" r="2"></circle>
</svg>
                  Filter
                </button>
</div>

<div className="flex items-center justify-between gap-2 min-w-0">

<button className="flex-none inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 text-neutral-300 ring-1 ring-inset ring-neutral-800 hover:text-white hover:ring-neutral-700 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-left">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>

<div className="flex overflow-x-auto scrollbar-none min-w-0 pr-2 pl-2 gap-x-2 gap-y-2" id="menu-track" style={{scrollbarWidth: 'none', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', scrollBehavior: 'smooth'}}>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900 text-white ring-1 ring-inset ring-neutral-700 rounded-xl transition">
                    All Photos
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Nature
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Business
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Technology
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Portrait
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Architecture
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Food
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Travel
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Animals
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Abstract
                  </button>
<button className="chip inline-flex flex-none items-center whitespace-nowrap h-10 px-3 text-sm font-medium font-geist bg-neutral-900/50 text-neutral-300 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
                    Lifestyle
                  </button>
</div>

<button className="flex-none inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 text-neutral-300 ring-1 ring-inset ring-neutral-800 hover:text-white hover:ring-neutral-700 transition disabled:opacity-50 disabled:cursor-not-allowed" id="btn-right">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="flex items-center gap-3">
<button className="inline-flex flex-none items-center whitespace-nowrap gap-2 h-10 px-3 text-sm font-medium font-geist text-neutral-200 bg-neutral-900 ring-1 ring-inset ring-neutral-800 rounded-xl hover:text-white hover:ring-neutral-700 transition">
<svg className="h-5 w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 8 6 6 6-6"></path>
</svg>
                  Recommended
                </button>
</div>
</div>

</div>
</section>

<section className="mb-6"></section>

<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pb-24 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll pb-24 gap-x-4 gap-y-4">

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Mountain Landscape at Sunset" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef749f82-a7d0-4319-97df-75365c533bc7_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Mountain Landscape at Sunset
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Benjamin Boulanger
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Modern Office Workspace" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Modern Office Workspace
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Benny To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Urban City Street at Night" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7356ff87-92cc-4a91-a88b-3ad9a28041bf_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Urban City Street at Night
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Benjamin Boulanger
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Professional Portrait Photography" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7969202b-d159-47e3-badd-ce3ff5efef3a_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Professional Portrait Photography
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Benny To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Tropical Beach Paradise" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5d711f2-c1d8-4a6c-80aa-a69b42a33e00_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Tropical Beach Paradise
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Benny To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Fresh Food and Ingredients" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc78b114-8d82-4b45-b756-25d0697fe629_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Fresh Food and Ingredients
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Megan Lyn
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Abstract Art and Patterns" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dbdc665-9457-4d9e-8802-35ee5a13090e_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Abstract Art and Patterns
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b476201e-4ebc-447a-b9b9-0c7e4e8302a0_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Meng To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Technology and Innovation" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82781526-4ef8-4653-8d37-243d7194d6e5_800w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Technology and Innovation
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Meng To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Wildlife and Nature Photography" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aedb2425-6c2b-48a3-8ba5-01ea63f19cf5_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Wildlife and Nature Photography
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Sourany Phomphone
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Minimalist Architecture" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2974da65-b519-45e9-a413-b9d7b00099a5_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Minimalist Architecture
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24f664fd-07a7-45e6-9553-ed03aa0c764f_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Meng To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Sunset Over the Ocean" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8a18478-d20b-4c5f-9811-5e3a92a55aa1_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Sunset Over the Ocean
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24f664fd-07a7-45e6-9553-ed03aa0c764f_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Meng To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Cozy Interior Design" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1cdcac4-b146-4843-a403-1e0e749b5e24_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-300 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4 gap-x-3 gap-y-3">
<h4 className="text-2xl lg:text-lg font-semibold text-white mb-1 font-geist" style={{}}>
                  Cozy Interior Design
                </h4>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Author" className="w-8 h-8 rounded-full ring-1 ring-neutral-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24f664fd-07a7-45e6-9553-ed03aa0c764f_320w.jpg"/>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium text-neutral-200 font-geist" style={{}}>
                        Meng To
                      </span>
<span className="text-sm text-neutral-400 font-geist" style={{}}>
                        5 years of experience
                      </span>
</div>
</div>
<button aria-label="Download" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center z-20">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
</div>
</article>
</main>

</div>
<div className="sm:gap-y-0 sm:pl-0 sm:pr-0 sm:mt-0 sm:mb-0 max-w-7xl mt-0 mr-auto mb-0 ml-auto pr-0 pl-0 space-y-6 gap-x-y-0 gap-y-0">
<section className="xl:pt-24 xl:pb-24 xl:gap-y-0 pt-24 pr-0 pb-24 pl-0">
<div className="text-center md:text-left mb-12">
<h2 className="sm:text-5xl md:text-6xl leading-[0.95] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-4xl font-light text-white tracking-tight font-geist max-w-none mb-2">
              Discover the Power of Visual Inspiration
            </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-sm text-neutral-300 font-geist max-w-none">
              Explore millions of high-quality photos curated for creators,
              designers, and teams who value speed, impact, and freedom
            </p>
</div>

<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4" id="expanding-cards">

<div className="feature-cards flex flex-col md:flex-row [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll gap-4">

<article className="card group w-full md:flex-1 min-w-0 overflow-hidden transition-all duration-500 ease-out bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl relative" style={{flex: '1 1 0%'}}>

<img alt="Endless Inspiration" className="md:h-[420px] transition duration-500 group-hover:scale-[1.02] w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

<div className="absolute top-4 left-4 right-4">
<span className="inline-flex rounded-lg px-3 py-2 text-white text-lg sm:text-xl font-semibold font-geist">
                    Endless Inspiration
                  </span>
</div>

<div className="sm:p-6 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 opacity-0 pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0 translate-y-4">
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5">
<h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 font-geist">
                      Discover millions of photos
                    </h3>
<p className="text-neutral-300 text-sm sm:text-base mb-4 font-geist">
                      Browse our vast collection of high-quality stock photos
                      from talented photographers around the world.
                    </p>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium ring-1 ring-inset ring-white/20 px-3 py-2 transition font-geist" href="/explore">
                      Explore now →
                    </a>
</div>
</div>
</article>

<article className="card group w-full md:flex-1 min-w-0 overflow-hidden transition-all duration-500 ease-out bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl relative" style={{flex: '1 1 0%'}}>
<img alt="Professional Quality" className="md:h-[420px] transition duration-500 group-hover:scale-[1.02] w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56ed5565-df57-4091-904a-06ea43760e76_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
<div className="absolute top-4 left-4 right-4">
<span className="inline-flex rounded-lg px-3 py-2 text-white text-lg sm:text-xl font-semibold font-geist">
                    Professional Quality
                  </span>
</div>
<div className="sm:p-6 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 opacity-0 pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0 translate-y-4">
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5">
<h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 font-geist">
                      Curated for impact
                    </h3>
<p className="text-neutral-300 text-sm sm:text-base mb-4 font-geist">
                      Hand-picked shots that look polished across web, mobile,
                      and print.
                    </p>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium ring-1 ring-inset ring-white/20 px-3 py-2 transition font-geist" href="/quality">
                      View more →
                    </a>
</div>
</div>
</article>

<article className="card group w-full md:flex-1 min-w-0 overflow-hidden transition-all duration-500 ease-out bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl relative" style={{flex: '1 1 0%'}}>
<img alt="Time-Saving Search" className="md:h-[420px] transition duration-500 group-hover:scale-[1.02] w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6663740f-b15d-4a86-bcad-0623f9660f7c_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
<div className="absolute top-4 left-4 right-4">
<span className="inline-flex rounded-lg px-3 py-2 text-white text-lg sm:text-xl font-semibold font-geist">
                    Time-Saving Search
                  </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5">
<h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 font-geist">
                      Find the right shot fast
                    </h3>
<p className="text-neutral-300 text-sm sm:text-base mb-4 font-geist">
                      Smart tags and categories designed for designers,
                      marketers, and creators.
                    </p>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium ring-1 ring-inset ring-white/20 px-3 py-2 transition font-geist" href="/search">
                      Try search →
                    </a>
</div>
</div>
</article>

<article className="card group w-full md:flex-1 min-w-0 overflow-hidden transition-all duration-500 ease-out bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl relative" style={{flex: '1 1 0%'}}>
<img alt="Free for Everyone" className="md:h-[420px] transition duration-500 group-hover:scale-[1.02] w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa00117b-6282-48e6-8a58-cb95c40a5b90_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
<div className="absolute top-4 left-4 right-4">
<span className="inline-flex rounded-lg px-3 py-2 text-white text-lg sm:text-xl font-semibold font-geist">
                    Free for Everyone
                  </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5">
<h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 font-geist">
                      Personal &amp; commercial use
                    </h3>
<p className="text-neutral-300 text-sm sm:text-base mb-4 font-geist">
                      Download and use without fees. Clear usage guidance
                      included.
                    </p>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium ring-1 ring-inset ring-white/20 px-3 py-2 transition font-geist" href="/license">
                      See license →
                    </a>
</div>
</div>
</article>
</div>



</div>
</section>
<section className="xl:pt-24 xl:pb-24 xl:gap-y-0 pt-24 pr-0 pb-24 pl-0">

<div className="text-left mb-12">
<h2 className="sm:text-5xl md:text-6xl leading-[0.95] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-4xl font-light text-white tracking-tight font-geist mb-2">
      Trusted by Creators Worldwide
    </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-sm text-neutral-300 font-geist max-w-none">
      Join a growing community of teams who rely on our library for
      quality, speed, and a premium experience.
    </p>
</div>

<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl" id="t-wrap">
<div className="grid grid-cols-1 lg:grid-cols-12 h-full">

<div className="lg:col-span-8 sm:p-8 md:p-12 flex flex-col pt-6 pr-6 pb-6 pl-6 relative justify-between" style={{minHeight: '500px'}}>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(255,255,255,0.06),transparent_50%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_120%_120%,rgba(255,255,255,0.04),transparent_55%)]"></div>
</div>

<blockquote className="relative z-10 mt-8 text-white text-2xl sm:text-4xl md:text-5xl tracking-tight font-geist font-light leading-tight" id="t-quote">"This library makes sourcing visuals effortless. Accurate search, fast downloads, and a sleek interface—exactly what my team needed."</blockquote>

<div className="z-10 flex mt-10 relative items-center justify-between">

<div className="flex items-center gap-4">
<img alt="Author avatar" className="w-12 h-12 object-cover ring-neutral-800 ring-1 rounded-full" id="t-avatar" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-white text-lg font-semibold font-geist" id="t-name">Alex M.</p>
<p className="text-neutral-400 text-sm font-geist" id="t-role">Design Lead at NovaStudio</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 lg:border-t-0 lg:border-l flex flex-col border-neutral-800 border-t" style={{minHeight: '500px'}}>
<div className="flex-1 flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6663740f-b15d-4a86-bcad-0623f9660f7c_1600w.jpg)] bg-cover items-center justify-center">
</div>
<div className="flex lg:flex-row border-neutral-800 border-t border-b divide-x divide-neutral-800">
<button className="flex-1 inline-flex items-center gap-3 px-6 py-6 text-lg font-medium font-geist text-neutral-200 hover:text-white transition focus:outline-none" id="t-prev">
<svg className="lucide lucide-chevron-left w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
            Previous
          </button>
<button className="flex-1 inline-flex gap-3 hover:text-white transition text-lg font-medium text-neutral-200 font-geist px-6 py-6 items-center justify-end focus:outline-none" id="t-next">
            Next
            <svg className="lucide lucide-chevron-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

</section>

</div>

<footer className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-neutral-800 border-t mt-24 pt-16 pb-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">

<div>
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Explore
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Popular Photos
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Collections
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Videos
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Photographers
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Pro
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Resources
            </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Nature
                </a>
</li>
<li className="">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Business
                </a>
</li>
<li className="">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Technology
                </a>
</li>
<li className="">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Travel
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Food
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Become a Contributor
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Upload Guidelines
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Contributor Blog
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Licensing
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Earnings
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Legal
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Help Center
                </a>
</li>
<li className="">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  License Information
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  API Documentation
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Privacy Policy
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Social
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Twitter
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  GitHub
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  Discord
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  LinkedIn
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#" style={{}}>
                  YouTube
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4 font-geist" style={{}}>
              Newsletter
            </h4>
<p className="text-sm text-neutral-400 mb-3 font-geist" style={{}}>
              Subscribe to our newsletter
            </p>
<div className="flex flex-col gap-2">
<input className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Enter email" type="email"/>
<button className="w-full px-3 py-2 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-geist" style={{}}>
                Subscribe
              </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800">
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[40px] h-[24px] bg-[url(https://cdn.midjourney.com/3f5c16da-080f-427f-a80d-ee75c8f5a173/0_0.png?w=800&amp;q=80)] bg-cover rounded invert" href="#" style={{}}></a>
<p className="text-sm text-neutral-500 font-geist" style={{}}>
              © 2024 All rights reserved.
            </p>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<svg className="lucide lucide-github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
