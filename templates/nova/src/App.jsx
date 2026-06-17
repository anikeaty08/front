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
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


            document.addEventListener('DOMContentLoaded', function() {
              const cards = document.querySelectorAll('#card1, #card2, #card3');

              cards.forEach(card => {
                let isDragging = false;
                let startX, startY;
                let currentX = 0, currentY = 0;
                let initialTransform = '';

                const computedStyle = window.getComputedStyle(card);
                initialTransform = computedStyle.transform;

                card.addEventListener('mousedown', startDrag);
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stopDrag);

                card.addEventListener('touchstart', startDrag, { passive: false });
                document.addEventListener('touchmove', drag, { passive: false });
                document.addEventListener('touchend', stopDrag);

                function startDrag(e) {
                  isDragging = true;
                  card.style.cursor = 'grabbing';
                  card.style.zIndex = '1000';
                  card.style.transition = 'none';

                  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                  startX = clientX - currentX;
                  startY = clientY - currentY;

                  e.preventDefault();
                }

                function drag(e) {
                  if (!isDragging) return;

                  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                  currentX = clientX - startX;
                  currentY = clientY - startY;

                  const transform = `${getInitialTransform(card)} translate(${currentX}px, ${currentY}px)`;
                  card.style.transform = transform;

                  e.preventDefault();
                }

                function stopDrag(e) {
                  if (!isDragging) return;

                  isDragging = false;
                  card.style.cursor = 'grab';
                  card.style.zIndex = '';
                  card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';

                  setTimeout(() => {
                    currentX = 0;
                    currentY = 0;
                    card.style.transform = getInitialTransform(card);

                    setTimeout(() => {
                      card.style.transition = 'all 0.3s ease-out';
                    }, 400);
                  }, 100);
                }

                function getInitialTransform(element) {
                  if (element.id === 'card1') {
                    return 'rotate(-6deg) translateX(1.5rem) translateY(0.75rem)';
                  } else if (element.id === 'card2') {
                    return 'rotate(4deg) translateX(-0.75rem) translateY(-0.5rem)';
                  } else if (element.id === 'card3') {
                    return 'rotate(0.5deg)';
                  }
                  return '';
                }
              });
            });
          


      lucide.createIcons();

      const card = document.getElementById('cardStack');
      const bounds = () => card.getBoundingClientRect();

      let frame;
      const handleMove = (e) => {
        if (!card) return;
        const b = bounds();
        const x = (e.clientX - (b.left + b.width / 2)) / (b.width / 2);
        const y = (e.clientY - (b.top + b.height / 2)) / (b.height / 2);
        const rotX = Math.max(Math.min(-y * 6, 8), -8);
        const rotY = Math.max(Math.min(x * 6, 8), -8);

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
        });
      };

      const resetTilt = () => {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      };

      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseleave', resetTilt);
    
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
      

<div className="aura-background-component -z-10 w-full h-[1100px] absolute top-0 hue-rotate-180 saturate-200" style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to bottom, transparent, black 0%, black 40%, transparent);">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="VHdphegF30v2j1bserOH">
</div>

</div>
<header className="fixed z-50 xl:bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] xl:from-[#000000]/20 xl:to-slate-800/0 ring-slate-50/10 ring-1 top-0 right-0 left-0 backdrop-blur-xl">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{}}>
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="font-medium text-white/80 hover:text-white transition" href="#">
              Work
            </a>
<a className="font-medium text-white/80 hover:text-white transition" href="#">
              Studio
            </a>
<a className="font-medium text-white/80 hover:text-white transition" href="#">
              Capabilities
            </a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold tracking-tight hover:bg-white/90 transition" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Contact
          </a>
</div>
</div>
</header>
<section className="isolate overflow-hidden md:pt-32 pt-32 pb-20 relative" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{}}>
<div className="relative md:h-[82vh] h-full">
<div className="relative z-10 flex items-start justify-between pt-10">
<h1 className="text-[16vw] leading-none sm:text-[14vw] md:text-[12vw] font-semibold tracking-tight">
              WE
            </h1>
<h1 className="text-[16vw] leading-none sm:text-[14vw] md:text-[12vw] font-semibold tracking-tight">
              ARE
            </h1>
</div>
<div className="z-20 grid place-items-center h-full absolute top-0 right-0 bottom-0 left-0">
<div className="sm:w-64 sm:h-96 md:w-80 md:h-[28rem] [transform-style:preserve-3d] transition-transform duration-300 ease-out w-56 h-80 relative" id="cardStack" style={{transform: 'perspective(1200px) rotateX(0.834935deg) rotateY(8deg) translateZ(0px)'}}>
<img alt="3D abstract scene" className="cursor-grab transition-all duration-300 ease-out w-full h-full object-cover ring-white/10 ring-1 rounded-xl mt-auto mr-auto mb-auto ml-auto absolute top-0 right-0 bottom-0 left-0 shadow-2xl translate-x-6 translate-y-3 rotate-[-6deg]" id="card1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73357ebc-edc9-483d-a5f9-234e65d12778_800w.webp" style={{transformOrigin: 'center center', touchAction: 'none', cursor: 'grab', transform: 'rotate(-6deg) translateX(1.5rem) translateY(0.75rem)'}}/>
<img alt="Minimal mountain landscape" className="absolute inset-0 m-auto h-full w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10 rotate-[4deg] -translate-x-3 -translate-y-2 cursor-grab transition-all duration-300 ease-out" id="card2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d708ce19-baee-49bc-a026-830c390661dd_1600w.webp" style={{transformOrigin: 'center center', touchAction: 'none', cursor: 'grab', transform: 'rotate(4deg) translateX(-0.75rem) translateY(-0.5rem)'}}/>
<img alt="Portrait with soft light" className="absolute inset-0 m-auto h-full w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10 rotate-[0.5deg] cursor-grab transition-all duration-300 ease-out" id="card3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8edc041b-4747-4049-a802-e5118ad36d38_800w.jpg" style={{transformOrigin: 'center center', touchAction: 'none'}}/>
</div>
</div>
<div className="z-10 flex xl:pb-40 h-full mt-auto mb-20 pb-10 relative items-end">
<h2 className="text-[15vw] leading-none sm:text-[13vw] md:text-[11vw] font-semibold tracking-tight">CREATORS</h2>
</div>

</div>
</div>
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
</section>
<section className="isolate md:py-28 md:my-20 mt-20 mb-20 pt-20 pb-20 relative">
<div className="mx-auto max-w-7xl px-6">
<h2 className="sr-only">Immersive VR experiences</h2>
<div className="space-y-2 md:space-y-3 font-semibold tracking-tight leading-[0.92]">
<p className="uppercase text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            FROM
            <img alt="VR Headset" className="align-middle inline-block sm:h-10 sm:w-20 md:h-20 md:w-30 w-14 h-12 object-cover ring-white/10 ring-1 rounded-xl mr-1 ml-1 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf38f494-4d19-49fd-add0-789dbd8aa4c8_320w.jpg"/>
            TRAINING &amp;
          </p>
<p className="uppercase text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            SIMULATION
            <img alt="VR User" className="align-middle inline-block sm:h-10 sm:w-20 md:h-20 md:w-30 w-14 h-12 object-cover ring-white/10 ring-1 rounded-xl mr-1 ml-1 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cd2cebec-df25-4598-a453-aed7021cbd9c_320w.jpg"/>
            TO
          </p>
<p className="uppercase text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            VIRTUAL
            <img alt="VR Experience" className="align-middle inline-block sm:h-10 sm:w-20 md:h-20 md:w-30 w-14 h-12 object-cover ring-white/10 ring-1 rounded-xl mr-1 ml-1 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_320w.jpg"/>
            EVENTS
          </p>
<p className="uppercase text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            &amp; TOURS, WE CREATE
          </p>
<p className="text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
<span className="uppercase align-middle">THE</span>
<img alt="VR World" className="align-middle inline-block sm:h-10 sm:w-20 md:h-20 md:w-30 w-14 h-12 object-cover ring-white/10 ring-1 rounded-xl mr-1 ml-1 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73357ebc-edc9-483d-a5f9-234e65d12778_320w.webp"/>
<span className="font-serif italic font-medium tracking-tight align-middle" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
              Most
            </span>
</p>
<p className="uppercase text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            IMMERSIVE WORLDS
          </p>
<p className="uppercase text-white/40 text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
            TO TRANSFORM
          </p>
<p className="text-white/40 text-[12vw] sm:text-[10vw] md:text-[7.5vw]">
<span className="uppercase align-middle">YOUR</span>
<span className="font-serif italic font-medium tracking-tight align-middle" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
              Reality
            </span>
<span className="align-middle">.</span>
</p>
</div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]"></div>
</section>
<section className="relative isolate py-20 md:py-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="space-y-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
              Our Approach
            </div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Engineering
              <span className="font-serif italic font-medium" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
                Unforgettable
              </span>
              Experiences
            </h3>
<p className="text-lg text-white/60 leading-relaxed max-w-xl">
              We blend cutting-edge technology with creative vision to build
              immersive environments that captivate audiences and push the
              boundaries of what's possible in virtual reality.
            </p>
<div className="flex flex-wrap gap-4 pt-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white/90">
                    Real-time Rendering
                  </div>
<div className="text-xs text-white/50">Ultra-high fidelity</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<div className="">
<div className="text-sm font-medium text-white/90">
                    Cross-Platform
                  </div>
<div className="text-xs text-white/50">Any device, anywhere</div>
</div>
</div>
</div>
</div>
<div className="relative [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="VR Technology" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e5f466d-ba76-4370-8204-0eb85dff3b07_800w.webp"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="Immersive Design" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17b47c4d-d6ef-482e-b15f-83080c8209b6_800w.jpg"/>
</div>
</div>
<div className="space-y-4 pt-12">
<div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="Digital Experience" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_800w.jpg"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="VR Headset" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf8a505e-077b-4767-a4a6-5f049de93919_800w.jpg" style={{}}/>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.04),transparent_50%)]"></div>
</section>
<section className="relative isolate py-20 md:py-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/10 mb-6">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
            Our Capabilities
          </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Full-Spectrum
            <span className="font-serif italic font-medium" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
              VR
            </span>
            Solutions
          </h2>
<p className="text-lg text-white/60 leading-relaxed">
            From concept to deployment, we offer comprehensive services to bring
            your virtual reality vision to life with precision and impact.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              3D Environment Design
            </h3>
<p className="text-white/60 leading-relaxed">
              Crafting photorealistic and stylized virtual spaces that engage
              users and create lasting impressions.
            </p>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              Interactive Experiences
            </h3>
<p className="text-white/60 leading-relaxed">
              Building intuitive interactions and mechanics that make virtual
              worlds feel natural and responsive.
            </p>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              Multi-Platform Development
            </h3>
<p className="text-white/60 leading-relaxed">
              Optimized deployment across all major VR headsets and platforms
              for maximum reach.
            </p>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              Multiplayer Solutions
            </h3>
<p className="text-white/60 leading-relaxed">
              Creating shared virtual spaces where teams collaborate and
              audiences connect in real-time.
            </p>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              Custom Development
            </h3>
<p className="text-white/60 leading-relaxed">
              Tailored VR solutions built from the ground up to meet your unique
              business objectives.
            </p>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-6">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">
              Ongoing Support
            </h3>
<p className="text-white/60 leading-relaxed">
              Continuous optimization, updates, and technical support to ensure
              peak performance.
            </p>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]"></div>
</section>
<section className="relative isolate py-20 md:py-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-2 lg:order-1 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="Featured VR Project" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7148c597-f646-4f6c-a98e-621dd336b12a_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Live Project
                </div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">
                  Virtual Training Academy
                </h4>
<p className="text-sm text-white/70">
                  Immersive learning platform for Fortune 500 enterprise
                </p>
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl hidden md:block">
<img alt="VR Detail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ef7ebee1-9aa8-44cb-a356-f344d0edd3b1_800w.jpg" style={{}}/>
</div>
</div>
<div className="space-y-8 order-1 lg:order-2 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/10 mb-6">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m15 19-3 3-3-3"></path>
<path d="m19 9 3 3-3 3"></path>
<path d="M2 12h20"></path>
<path d="m5 9-3 3 3 3"></path>
<path d="m9 5 3-3 3 3"></path>
</svg>
                Featured Work
              </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Transforming
                <span className="font-serif italic font-medium" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
                  Industries
                </span>
                Through VR
              </h2>
<p className="text-lg text-white/60 leading-relaxed">
                Our portfolio showcases groundbreaking virtual reality
                experiences across education, healthcare, entertainment, and
                enterprise sectors. Each project pushes technological boundaries
                while delivering measurable business outcomes.
              </p>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  150+
                </div>
<div className="text-sm text-white/60">Projects Delivered</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  98%
                </div>
<div className="text-sm text-white/60">Client Satisfaction</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  5M+
                </div>
<div className="text-sm text-white/60">Active Users</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  24/7
                </div>
<div className="text-sm text-white/60">Support Available</div>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-white/90 transition" href="#">
              View All Projects
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.04),transparent_50%)]"></div>
</section><section className="isolate md:py-32 overflow-hidden pt-20 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/10 mb-6">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
        Testimonials
      </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
        What Our
        <span className="font-serif italic font-medium" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia'}}>
          Partners
        </span>
        Say
      </h2>
<p className="text-lg text-white/60 leading-relaxed">
        Trusted by leading brands and innovators who demand excellence in virtual reality experiences.
      </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec22ced7-c536-4cff-84b9-fd729117769e_320w.webp)] bg-cover ring-white/20 ring-2 rounded-full"></div>
<div className="">
<div className="font-semibold text-white">Sarah Chen</div>
<div className="text-sm text-white/60">VP of Innovation, TechCorp</div>
</div>
</div>
<p className="text-white/70 leading-relaxed mb-4">
          "The immersive training platform they built has revolutionized how we onboard new employees. Engagement is up 300% and retention has improved dramatically."
        </p>
<div className="flex gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/413c3c48-136b-4313-b6ae-425bde0a8d6e_320w.webp)] bg-cover rounded-full ring-white/20 ring-2"></div>
<div className="">
<div className="font-semibold text-white">Marcus Rodriguez</div>
<div className="text-sm text-white/60">Creative Director, LUXE</div>
</div>
</div>
<p className="text-white/70 leading-relaxed mb-4">
          "Working with this team was seamless. They understood our vision instantly and delivered a virtual showroom that exceeded all expectations."
        </p>
<div className="flex gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<div className="group relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cdf47b31-80d9-4501-81b5-43f6ba2375c3_320w.webp)] bg-cover ring-white/20 ring-2 rounded-full"></div>
<div className="">
<div className="font-semibold text-white">Elena Kowalski</div>
<div className="text-sm text-white/60">CEO, NextGen Medical</div>
</div>
</div>
<p className="text-white/70 leading-relaxed mb-4">
          "The surgical training simulator they developed is now used across 50+ hospitals. The attention to detail and realism is unmatched."
        </p>
<div className="flex gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
</div>
<div className="mt-16 text-center [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="inline-flex items-center gap-8 rounded-2xl bg-white/5 px-8 py-6 ring-1 ring-white/10">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1">4.9/5</div>
<div className="text-sm text-white/60">Average Rating</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1">200+</div>
<div className="text-sm text-white/60">Reviews</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1">100%</div>
<div className="text-sm text-white/60">Recommended</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)]"></div>
</section>
<footer className="relative z-10" style={{opacity: '1', transform: 'translateY(0)'}}>
<div className="border-white/10 border-t">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid gap-10 md:grid-cols-3">
<div className="flex flex-col gap-4">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<div className="mt-2 flex items-center gap-3">
<a aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="h-4 w-4 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="h-4 w-4 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="h-4 w-4 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-xs text-neutral-500 mt-2">© NOVA. All rights reserved.</p>
</div>
<div className="grid grid-cols-3 gap-8 md:col-span-2">
<div className="">
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Work</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Portfolio</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Case Studies</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Clients</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Studio</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">About Us</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Team</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Get in Touch</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Partnerships</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="#">Press</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
