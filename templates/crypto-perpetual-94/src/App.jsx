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



      // Initialize Lucide Icons
      lucide.createIcons();

      // --- Announcement Ticker Logic ---
      const tickerItems = document.querySelectorAll('.ticker-item');
      let tickerIndex = 0;
      let tickerInterval;

      function nextTicker() {
          const current = tickerItems[tickerIndex];
          const nextIndex = (tickerIndex + 1) % tickerItems.length;
          const next = tickerItems[nextIndex];

          // Animate Out
          current.classList.remove('active', 'enter');
          current.classList.add('exit');

          // Prepare Next
          next.classList.remove('exit');
          next.classList.add('enter');

          // Force reflow
          void next.offsetWidth;

          // Animate In
          requestAnimationFrame(() => {
              next.classList.remove('enter');
              next.classList.add('active');
          });

          tickerIndex = nextIndex;
      }

      function startTicker() {
          tickerInterval = setInterval(nextTicker, 3000);
      }

      function stopTicker() {
          clearInterval(tickerInterval);
      }

      const announcementBar = document.getElementById('announcement-bar');
      if (announcementBar) {
          announcementBar.addEventListener('mouseenter', stopTicker);
          announcementBar.addEventListener('mouseleave', startTicker);
          startTicker();
      }

      // --- Hero Carousel Logic ---
      const slides = document.querySelectorAll('.hero-slide');
      const dots = [document.getElementById('dot-0'), document.getElementById('dot-1')];
      let currentSlide = 0;
      let slideInterval;
      const sliderWrapper = document.querySelector('.relative.h-screen');

      function updateDots(index) {
          dots.forEach((dot, i) => {
              if (!dot) return;
              if (i === index) {
                  dot.className = 'h-1.5 w-8 rounded-full bg-white transition-all duration-300';
              } else {
                  dot.className = 'h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-300 hover:bg-white/50';
              }
          });
      }

      function setSlide(index) {
          if (index === currentSlide) return;

          // Determine direction (optional visual cue, but here we stick to enter/exit classes)
          const outgoing = slides[currentSlide];
          const incoming = slides[index];

          outgoing.classList.remove('active', 'hero-slide-enter');
          outgoing.classList.add('exit');

          incoming.classList.remove('exit');
          // Reset state before animating in
          incoming.style.transform = 'translateX(40px) scale(1.02)';
          incoming.style.opacity = '0';

          // Force reflow
          void incoming.offsetWidth;

          incoming.style.transform = '';
          incoming.style.opacity = '';
          incoming.classList.add('active');

          // Clean up exit class after transition
          setTimeout(() => {
              outgoing.classList.remove('exit');
          }, 700);

          currentSlide = index;
          updateDots(currentSlide);
      }

      function nextSlide() {
          setSlide((currentSlide + 1) % slides.length);
      }

      function prevSlide() {
          setSlide((currentSlide - 1 + slides.length) % slides.length);
      }

      function startCarousel() {
          slideInterval = setInterval(nextSlide, 3000);
      }

      function stopCarousel() {
          clearInterval(slideInterval);
      }

      if (sliderWrapper) {
          sliderWrapper.addEventListener('mouseenter', stopCarousel);
          sliderWrapper.addEventListener('mouseleave', startCarousel);

          // Keyboard Navigation
          document.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowLeft') {
                  stopCarousel();
                  prevSlide();
                  startCarousel();
              } else if (e.key === 'ArrowRight') {
                  stopCarousel();
                  nextSlide();
                  startCarousel();
              }
          });

          startCarousel();
      }

      // Expose setSlide globally for dot clicks
      window.setSlide = (index) => {
          stopCarousel();
          setSlide(index);
          startCarousel();
      };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/5" style={{}}>
<div className="flex h-16 w-full max-w-[1500px] mx-auto px-4 md:px-6 items-center justify-between">

<div className="flex items-center gap-10">
<a className="flex items-center gap-2 group" href="#">

<svg fill="none" height="20" viewbox="0 0 100 20" width="100" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M19.6388 0.140358L0 19.863H10.1141L29.753 0.140358H19.6388Z" fill="white" fill-rule="evenodd"></path>
<path d="M24.2144 14.2929L29.7534 19.8563H19.6401L15.8726 16.0731L17.646 14.2929H24.2144Z" fill="white"></path>
<path d="M10.1143 0.140358L13.8828 3.92551L12.3115 5.50364H5.34082L0 0.140358H10.1143Z" fill="white"></path>
<path clip-rule="evenodd" d="M52.88 0L46.7658 10.8136L40.6458 0H36.418V20H40.613V8.00071L46.7629 18.8657L52.935 7.96V20H57.2V0H52.88Z" fill="white" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M94.932 0L79.2363 20H84.2027L99.9048 0H94.932Z" fill="white" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M79.2402 0L94.9366 20H99.8444L84.1938 0H79.2402Z" fill="white" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M58.5259 0L67.7473 16.3093L69.7251 11.7129L63.0966 0H58.5259Z" fill="white" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M73.6664 0L63.79 20H68.35L78.2264 0H73.6664Z" fill="white" fill-rule="evenodd"></path>
</svg>
</a>
<nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-300" style={{}}>
<a className="nav-link hover:text-white transition-colors font-sans" href="#" style={{}}>
              Trade
            </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors font-sans" href="#" style={{}}>
              Trade
              <span className="bg-[#00D68F] text-black text-[10px] px-1.5 py-0.5 rounded leading-none font-sans" style={{}}>
                V2
              </span>
</a>
<a className="px-3 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors font-sans" href="#" style={{}}>
              Stake
            </a>
<a className="nav-link hover:text-white transition-colors font-sans" href="#" style={{}}>
              Airdrop
            </a>
<a className="flex items-center gap-1 nav-link hover:text-white transition-colors group font-sans" href="#" style={{}}>
<svg aria-hidden="true" className="lucide lucide-gem w-3.5 h-3.5 text-[#00E3A5]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
              Get MYX
              <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-3 h-3 text-gray-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="nav-link hover:text-white transition-colors font-sans" href="#" style={{}}>
              文档
            </a>
</nav>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a className="hidden md:flex bg-[#00D68F] text-black text-[14px] px-4 py-1.5 rounded-[4px] hover:bg-[#00b579] transition-colors font-sans" href="#" style={{}}>
            Launch App
          </a>
<div className="flex items-center gap-4 text-gray-400">
<button className="hover:text-white transition-colors">
<svg className="lucide lucide-hand-metal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"></path>
<path d="M14 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
<path d="M10 10.5V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
<path d="m18 8 2.39-1.28A2 2 0 0 1 23 8.35v6.86a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-5.46a2 2 0 0 1 1.76-1.98L6 7.22"></path>
</svg>
</button>
<button className="hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</header>

<div className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#000000]" style={{}}>

<div className="-translate-x-1/2 flex absolute bottom-80 left-1/2">
<button className="h-1.5 transition-all duration-300 hover:bg-white bg-white w-8 rounded-full" id="dot-0" onclick="setSlide(0)"></button>
<button className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-300 hover:bg-white/50" id="dot-1" onclick="setSlide(1)" style={{}}></button>
<button className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-300"></button>
</div><div className="overflow-hidden w-full h-full relative" id="slider-track">

<section className="hero-slide active flex flex-col w-full h-full pt-20 justify-between">

<div className="flex-1 flex md:px-12 w-full max-w-[1440px] mr-auto ml-auto pr-6 pl-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-4 gap-y-4 items-center">

<div className="flex flex-col z-20 relative space-y-8">
<div className="">
<h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-semibold font-manrope">
<span className="text-gradient-teal block font-sans font-bold tracking-wide" style={{}}>Stock Futures</span>
<span className="block text-white mt-2 font-sans font-bold tracking-wide" style={{}}>Championship</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl leading-relaxed font-sans" style={{}}>
                    Epic Showdown, Kings Clash—Join In To Share A 1,551,000 USDT
                    Prize Pool!
                  </p>
</div>
<div className="flex flex-wrap items-center gap-4 btn-group">
<button className="btn-outline-glow h-12 px-8 rounded-full flex items-center gap-2 text-[15px] group font-sans" style={{}}>
                    Launch App
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-solid-teal h-12 px-8 rounded-full flex items-center gap-2 text-[15px] group shadow-[0_0_15px_rgba(0,214,143,0.4)] font-sans" style={{}}>
                    创建市场
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div aria-label="Announcements" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer w-fit py-2 group relative z-20" id="announcement-bar" role="region">
<svg aria-hidden="true" className="lucide lucide-bell w-4 h-4 text-white flex-shrink-0" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="relative h-6 w-[280px] md:w-[450px] overflow-hidden">
<div className="ticker-track relative w-full h-full">
<div className="ticker-item active">
<span className="font-sans" style={{}}>
                          MYX V2任何资产，上线首日即可开启无许可永续合约
                        </span>
</div>
<div className="ticker-item enter">
<span className="font-sans" style={{}}>
                          Stock Futures Championship: Share 1,551,000 USDT!
                        </span>
</div>
<div className="ticker-item enter">
<span className="font-sans" style={{}}>
                          Zero Fees on Stock Futures - Limited Time Offer!
                        </span>
</div>
</div>
</div>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="lg:h-[500px] flex h-[400px] relative perspective-1000 items-center justify-center">
<div className="relative z-10 flex flex-col items-center justify-center">
<div className="number-3d animate-pulse font-sans font-bold tracking-wide" style={{}}>4</div>

<div className="lightning-container"></div>

<div className="absolute w-2 h-2 bg-teal-400 rounded-full blur-[1px] animate-[ping_2s_infinite] top-10 left-10" style={{}}></div>
<div className="absolute w-1 h-1 bg-white rounded-full blur-[1px] animate-[ping_3s_infinite] bottom-20 right-20"></div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-t from-black via-black/90 to-transparent w-full pt-32 pr-6 pb-120 pl-6 gap-x-4 gap-y-4">
<div className="grid grid-cols-1 max-w-[1440px] mr-auto ml-auto gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-crown w-12 h-12 text-[#FFD700]" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-lg text-white font-sans mb-1">
                  VIP冲刺赛第十一期
                </h3>
<p className="text-gray-400 text-xs mb-3 font-sans" style={{}}>人人可冲，达标即领</p>
<div className="flex items-center gap-2 mt-4">
<div className="w-8 h-8 rounded bg-[#2a2a2a] flex items-center justify-center border border-white/10">
<span className="text-[#FFD700] text-xs font-sans" style={{}}>V</span>
</div>
<span className="text-xs text-gray-500 font-sans" style={{}}>
                    升级合约VIP 1领150 USDT
                  </span>
</div>
</div>

<div className="glass-panel overflow-hidden group cursor-pointer rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-calendar-days w-12 h-12 text-[#00E3A5]" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-lg text-white font-sans mb-1">
                  永续合约+股票合约
                </h3>
<p className="text-gray-400 text-xs mb-3 font-sans" style={{}}>交易大赛</p>
<div className="flex items-center gap-2 mt-4">
<div className="px-2 py-1 rounded bg-[#00D68F]/10 border border-[#00D68F]/30 flex items-center justify-center">
<span className="text-[10px] text-[#00E3A5] font-sans" style={{}}>
                      2026
                    </span>
</div>
<span className="text-xs text-[#00E3A5] font-sans" style={{}}>
                    8万U开年红包大派送!
                  </span>
</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-box w-12 h-12 text-blue-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-lg text-white font-sans">
                  首日翻倍 20 U
                </h3>
<p className="text-gray-400 text-xs mb-3 font-sans" style={{}}>
                  累计冲量解锁 1830 U 空投!
                </p>
<div className="mt-4">
<span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/20 font-sans" style={{}}>
                    新人开仓BUFF
                  </span>
<div className="text-[10px] text-gray-500 mt-2 font-sans" style={{}}>
                    官网新人专属活动
                  </div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-candlestick-chart w-12 h-12 text-cyan-400" data-lucide="candlestick-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2"></path><path d="M17 3v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
</div>
<h3 className="text-lg text-white mb-1 font-sans" style={{}}>
                  股票合约手续费
                </h3>
<p className="text-cyan-400 text-lg mb-1 font-sans" style={{}}>
                  1折
                  <span className="text-sm text-gray-400 font-sans" style={{}}>
                    (0.0065%)
                  </span>
</p>
<div className="mt-3 flex items-center gap-2">
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[90%]"></div>
</div>
<span className="text-[10px] text-cyan-400 whitespace-nowrap font-sans" style={{}}>
                    90% OFF
                  </span>
</div>
<p className="text-[10px] text-gray-500 mt-2 font-sans" style={{}}>活动延长至4月30日</p>
</div>
</div>
</div>
</section>

<section className="hero-slide flex flex-col w-full h-full items-center justify-center">
<div className="text-center space-y-4">
<h2 className="text-4xl text-gray-700 font-sans font-bold tracking-wide" style={{}}>
              Next Event Coming Soon
            </h2>
<p className="text-gray-500 font-sans" style={{}}>Stay tuned for more championships.</p>
</div>
</section>
</div>

</div>


    </>
  );
}
