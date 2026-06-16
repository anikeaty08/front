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



      document.addEventListener('DOMContentLoaded', () => {
          const bar = document.getElementById('progress-bar');
          const loader = document.getElementById('loader');
          const text = document.getElementById('loading-text');

          // --- BOMB TIMER LOGIC ---
          function updateBombTimer() {
              // Target Date: 22/01/2026, 6:00:00 pm GMT
              const targetDate = new Date("January 22, 2026 18:00:00 GMT").getTime();
              const now = new Date().getTime();
              const distance = targetDate - now;

              if (distance < 0) {
                  document.getElementById("bomb-timer").innerText = "BOOM";
                  return;
              }

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              // Pad with zeros
              const d = days < 10 ? "0" + days : days;
              const h = hours < 10 ? "0" + hours : hours;
              const m = minutes < 10 ? "0" + minutes : minutes;
              const s = seconds < 10 ? "0" + seconds : seconds;

              const timerElement = document.getElementById("bomb-timer");
              if(timerElement) {
                  timerElement.innerText = `${d}:${h}:${m}:${s}`;
              }
          }
          // Update every second
          setInterval(updateBombTimer, 1000);
          updateBombTimer(); // Run immediately

          // --- LOADER MATRIX ---
          const loaderCanvas = document.getElementById('matrix-canvas');
          const loaderCtx = loaderCanvas.getContext('2d');

          // --- BROKIE SECTION MATRIX ---
          const brokieCanvas = document.getElementById('brokie-matrix');
          const brokieCtx = brokieCanvas.getContext('2d');
          const brokieSection = document.getElementById('manifesto');

          const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
          const matrixCharsArray = matrixChars.split("");
          const fontSize = 16;

          function initMatrix(canvas, ctx, width, height) {
              canvas.width = width;
              canvas.height = height;

              const columns = width / fontSize;
              const drops = [];
              for (let x = 0; x < columns; x++) {
                  drops[x] = Math.floor(Math.random() * height);
              }
              return drops;
          }

          let loaderDrops = initMatrix(loaderCanvas, loaderCtx, window.innerWidth, window.innerHeight);
          let brokieDrops = initMatrix(brokieCanvas, brokieCtx, brokieSection.offsetWidth, brokieSection.offsetHeight);

          function drawMatrix(canvas, ctx, drops, color) {
              // Fade effect
              ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              ctx.fillStyle = color;
              ctx.font = fontSize + "px Courier Prime";

              for (let i = 0; i < drops.length; i++) {
                  const text = matrixCharsArray[Math.floor(Math.random() * matrixCharsArray.length)];
                  ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                  if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                      drops[i] = 0;
                  }
                  drops[i]++;
              }
          }

          // Animation Loops
          let loaderInterval = setInterval(() => {
              drawMatrix(loaderCanvas, loaderCtx, loaderDrops, "#22c55e");
          }, 35);

          let brokieInterval = setInterval(() => {
              drawMatrix(brokieCanvas, brokieCtx, brokieDrops, "#22c55e");
          }, 50); // Slightly slower for background

          // Resize Listeners
          window.addEventListener('resize', () => {
              // Update Loader Canvas
              loaderDrops = initMatrix(loaderCanvas, loaderCtx, window.innerWidth, window.innerHeight);
              // Update Brokie Canvas
              brokieDrops = initMatrix(brokieCanvas, brokieCtx, brokieSection.offsetWidth, brokieSection.offsetHeight);
          });


          // LOADER LOGIC
          setTimeout(() => { bar.style.width = '30%'; }, 200);
          setTimeout(() => {
              bar.style.width = '70%';
              text.innerText = "Fighting Beta Males...";
          }, 800);
          setTimeout(() => {
              bar.style.width = '100%';
              text.innerText = "ESCAPING MATRICKS...";
          }, 1500);

          setTimeout(() => {
              loader.classList.add('loaded');
              setTimeout(() => {
                  clearInterval(loaderInterval); // Stop loader animation
              }, 1000);
              initScrollObserver();
          }, 2200);

          // ZIG ZAG CAR LOGIC
          const roadmapSection = document.getElementById('roadmap');
          const car = document.getElementById('mario-car');
          const carSprite = document.getElementById('car-sprite');
          let lastScrollY = window.scrollY;

          if(roadmapSection && car && carSprite) {
              window.addEventListener('scroll', () => {
                  const rect = roadmapSection.getBoundingClientRect();
                  const viewHeight = window.innerHeight;
                  const currentScrollY = window.scrollY;
                  const isMobile = window.innerWidth < 768;

                  // ROAD COORDINATES (Match SVG Paths)
                  const minX = isMobile ? 30 : 20;
                  const maxX = isMobile ? 70 : 80;

                  const startDelay = viewHeight * 0.3;
                  const scrollDistance = (viewHeight - rect.top) - startDelay;
                  const totalScrollable = rect.height;

                  let p = scrollDistance / totalScrollable;
                  p = Math.max(0, Math.min(1, p));

                  let x = 50;
                  let y = p * 100;
                  let rotation = 0;
                  let roadSegmentDirectionLeft = false;

                  // Define Turn Points based on Desktop vs Mobile
                  const turn1 = isMobile ? 0.25 : 0.20;
                  const turn2 = 0.50;
                  const turn3 = isMobile ? 0.75 : 0.70; // Desktop last turn raised to 0.70

                  // Interpolation Logic & Direction
                  if (p < turn1) {
                      const localP = p / turn1;
                      x = 50 + (minX - 50) * localP;
                      rotation = -25;
                      roadSegmentDirectionLeft = true;
                  } else if (p < turn2) {
                      const localP = (p - turn1) / (turn2 - turn1);
                      x = minX + (maxX - minX) * localP;
                      rotation = 25;
                      roadSegmentDirectionLeft = false;
                  } else if (p < turn3) {
                      const localP = (p - turn2) / (turn3 - turn2);
                      x = maxX + (minX - maxX) * localP;
                      rotation = -25;
                      roadSegmentDirectionLeft = true;
                  } else {
                      const localP = (p - turn3) / (1.0 - turn3);
                      x = minX + (50 - minX) * localP;
                      rotation = 25;
                      roadSegmentDirectionLeft = false;
                  }

                  const carOffset = isMobile ? '40px' : '64px';
                  car.style.left = `calc(${x}% - ${carOffset})`;
                  car.style.top = `calc(${y}% - ${carOffset})`;
                  car.style.transform = `rotate(${rotation}deg)`;

                  const isScrollingDown = currentScrollY > lastScrollY;
                  let faceLeft;

                  if (isScrollingDown) {
                      faceLeft = roadSegmentDirectionLeft;
                  } else {
                      faceLeft = !roadSegmentDirectionLeft;
                  }

                  if(faceLeft) {
                      carSprite.style.transform = "scaleX(-1)";
                  } else {
                      carSprite.style.transform = "scaleX(1)";
                  }

                  lastScrollY = currentScrollY;
              });
          }
      });

      // MODAL FUNCTIONS
      function openPdfModal() {
          const modal = document.getElementById('pdf-modal');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden';
      }

      function closePdfModal() {
          const modal = document.getElementById('pdf-modal');
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
      }

      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closePdfModal();
      });

      function initScrollObserver() {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, { threshold: 0.1 });

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }
    


      // Horizontal Scroll Logic for Missions Section
      document.addEventListener('DOMContentLoaded', () => {
        const missions = document.getElementById('missions');
        const track = document.getElementById('mission-track');
        if (missions && track) {
          const handleScroll = () => {
            const rect = missions.getBoundingClientRect();
            const sectionHeight = missions.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollableDist = sectionHeight - viewportHeight;
            const scrolled = -rect.top;

            // Logic to end scrolling when the Yellow Card is centered
            const lastCard = track.lastElementChild;
            const lastCardLeft = lastCard.offsetLeft;
            const lastCardWidth = lastCard.offsetWidth;
            const centerPos = lastCardLeft + (lastCardWidth / 2);
            // We want to translate such that centerPos ends up at window.innerWidth / 2
            const maxTranslate = Math.max(0, centerPos - (window.innerWidth / 2));

            if (scrolled >= 0 && scrolled <= scrollableDist) {
               const progress = scrolled / scrollableDist;
               const translateX = progress * maxTranslate;
               track.style.transform = `translateX(-${translateX}px)`;
            } else if (scrolled < 0) {
               track.style.transform = `translateX(0px)`;
            } else {
               track.style.transform = `translateX(-${maxTranslate}px)`;
            }
          };
          window.addEventListener('scroll', handleScroll);
          window.addEventListener('resize', handleScroll);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="" id="loader" style={{visibility: 'hidden'}}>

<canvas className="absolute inset-0 w-full h-full z-0 opacity-80" height="952" id="matrix-canvas" width="1050"></canvas>

<div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
<div className="text-4xl md:text-6xl font-shaky mb-4 text-center tracking-tight bg-black px-4 py-2 border-2 border-green-500 shadow-[4px_4px_0_#22c55e] text-green-500">
          INITIALIZING TOP G...
        </div>
<div className="w-64 h-6 border-4 border-green-500 p-1 bg-black">
<div className="h-full bg-green-500 w-0 transition-all duration-1000 ease-linear" id="progress-bar" style={{width: '100%'}}></div>
</div>
<div className="mt-4 text-xs font-typewriter text-center bg-black px-2 py-1 text-green-400" id="loading-text">
          ESCAPING MATRICKS...
        </div>
</div>
</div>

<section className="min-h-screen bg-matricks-animated flex flex-col items-center justify-center p-4 relative border-b-4 border-black overflow-hidden z-10" id="hero">
<div className="absolute top-10 left-10 animate-float opacity-50 hidden md:block text-black">
<iconify-icon height="64" icon="solar:dollar-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 animate-float opacity-50 hidden md:block text-black" style={{animationDelay: '1s'}}>
<iconify-icon height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<div className="w-full max-w-[96%] mx-auto flex flex-col items-center text-center z-10 space-y-8 pt-12">
<h1 className="font-shaky text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight drop-shadow-[4px_4px_0_rgba(255,255,255,1)] -rotate-1 hover-glitch cursor-default transition-all duration-300 max-w-[15ch] mx-auto">
          ESCAPE THE MATRICKS.
        </h1>
<h2 className="reveal font-main font-medium text-xl md:text-3xl bg-white border-4 border-black px-6 py-3 shadow-hard rotate-1 hover:rotate-2 transition-transform duration-300 tracking-tight active">
          LISTEN 2 ME BROKIES. PLS BUY $TOPG.
        </h2>
<div className="reveal relative w-full max-w-md aspect-square mx-auto my-6 group perspective-1000 hover-trigger active">
<div className="absolute inset-0 bg-black translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
<div className="relative w-full h-full bg-white border-4 border-black overflow-hidden animate-float hover:scale-105 transition-all duration-500">
<img alt="Androo on Tricycle" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cbce25b-aec0-4679-920d-a8788309964d_1600w.png"/>
</div>
<div className="absolute -top-6 -right-12 w-40 bg-white border-4 border-black p-3 font-shaky text-sm text-center shadow-hard-sm rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
<span className="text-[#F80602] font-semibold">VROOM VROOM</span>
            Bugatti speed!
          </div>
</div>

<div className="reveal flex flex-col sm:flex-row gap-6 items-center w-full justify-center pb-4 active">
<button className="hover:shadow-hard-hover transition-all sm:w-auto overflow-hidden group hover:animate-scribble flex text-2xl text-white font-shaky bg-[#F80602] w-full border-black border-4 rounded-sm pt-5 pr-10 pb-5 pl-10 relative shadow-hard -rotate-1 gap-x-3 gap-y-3 items-center justify-center" onclick="window.location.href='https://www.xtrends.fun/trend-info/topg'" role="button">
<span className="relative z-10">[BUY $TOPG]</span>
<iconify-icon className="relative z-10" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<button className="hover:shadow-hard-hover transition-all sm:w-auto flex hover:bg-yellow-50 text-xl font-semibold text-black font-typewriter bg-white w-full border-black border-2 pt-5 pr-10 pb-5 pl-10 shadow-hard rotate-1 gap-x-3 gap-y-3 items-center justify-center" onclick="openPdfModal()">
<iconify-icon className="" height="24" icon="solar:file-text-linear" width="24"></iconify-icon>
            [READ RITE-PAPER]
            <iconify-icon className="" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>

<div className="reveal mt-4 mb-12 relative group w-full max-w-xs mx-auto active">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-neutral-700 z-0"></div>
<div className="absolute -top-9 left-1/2 -translate-x-1/2 text-orange-500 animate-spark z-0">
<iconify-icon height="32" icon="solar:star-fall-bold" width="32"></iconify-icon>
</div>

<div className="bg-neutral-800 border-4 border-black p-4 shadow-hard flex flex-col items-center relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300 w-full">

<div className="w-full h-4 bg-yellow-400 border-b-2 border-black mb-3" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, black 10px, black 20px)'}}></div>
<div className="font-shaky text-white text-lg mb-2 flex items-center gap-2">
<iconify-icon className="text-[#F80602]" icon="solar:danger-triangle-linear"></iconify-icon>
              DETONATION IN:
            </div>
<div className="bg-black border-4 border-neutral-600 p-2 w-full text-center relative overflow-hidden shadow-inner">

<div className="absolute inset-0 bg-red-900 opacity-10 animate-pulse pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
<div className="font-typewriter font-bold text-2xl sm:text-3xl text-[#F80602] drop-shadow-[0_0_8px_rgba(248,6,2,0.8)] relative z-10 tracking-widest" id="bomb-timer">
                02:03:24:23
              </div>
</div>

<div className="w-full flex justify-around mt-3 px-2 relative h-4">
<div className="absolute top-0 left-4 w-8 h-4 border-l-4 border-b-4 border-red-600 rounded-bl-full"></div>
<div className="absolute top-0 right-4 w-8 h-4 border-r-4 border-b-4 border-blue-600 rounded-br-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-yellow-500 rounded-full mt-1"></div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-black border-y-4 border-black overflow-hidden py-3 rotate-1 scale-105 relative z-20 flex">
<div className="whitespace-nowrap shrink-0 animate-[marquee_20s_linear_infinite] font-typewriter font-semibold text-white text-xl px-4 tracking-tight">
        ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
        ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
      </div>
<div className="whitespace-nowrap shrink-0 animate-[marquee_20s_linear_infinite] font-typewriter font-semibold text-white text-xl px-4 tracking-tight">
        ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
        ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
      </div>
</div>

<section className="py-32 px-4 bg-white border-b-0 border-black torn-paper-top relative z-20" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[96%] mx-auto gap-x-24 gap-y-16 items-center">
<div className="space-y-8 order-2 lg:order-1 max-w-3xl mx-auto lg:mx-0">
<div className="reveal inline-block shadow-hard-sm transform hover:scale-110 transition-transform hover-trigger text-3xl text-white tracking-tight font-shaky border-black border-4 pt-3 pr-6 pb-3 pl-6 -rotate-2 bg-[#F80602] active">
            THE TOP G STORY
          </div>
<div className="font-main font-medium text-lg md:text-xl space-y-6 border-l-8 border-gray-200 pl-8 leading-relaxed">
<p className="reveal active">
              "Androo was traped in the Matricks (a box made of cardboard). He
              try to escape using pure maskulin energy but he
              <span className="bg-yellow-200 px-1 border border-black font-shaky text-sm">
                bonked
              </span>
              his head on the ceiling.
            </p>
<p className="reveal active" style={{transitionDelay: '100ms'}}>
              Now he is awake. He has seen the truth. The guverment doesnt want
              u to have this coin. He is here to tech u how to be a Top G, but
              first, pls buy token."
            </p>
</div>

<div className="reveal mt-12 relative w-fit transform rotate-6 hover:rotate-12 transition-transform duration-300 inline-block group cursor-pointer active">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-black shadow-sm z-20"></div>
<div className="flex flex-col bg-white z-10 border-black border-4 pt-4 pr-4 pb-4 pl-4 relative shadow-hard items-center">

<div className="w-40 h-40 bg-yellow-50 border-2 border-black border-dashed flex items-center justify-center overflow-hidden mb-3">
<img alt="My Red Horse" className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-cover scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36c08e71-df82-45a1-b023-185898f5bbc2_800w.png"/>
</div>
<div className="font-shaky text-xl border-t-2 border-black pt-2 w-full text-center">
                MY RED HORSE
              </div>
</div>
</div>
</div>
<div className="reveal order-1 lg:order-2 relative group hover-trigger active">
<div className="absolute inset-0 bg-black translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
<div className="relative bg-blue-50 border-4 border-black p-4 h-[400px] flex flex-col items-center justify-center overflow-hidden">
<div className="absolute opacity-20 top-0 right-0 animate-[pulse_2s_infinite] text-green-600">
<iconify-icon height="128" icon="solar:graph-up-linear" width="128"></iconify-icon>
</div>
<img alt="Androo analyzing" className="z-10 w-full h-full object-cover border-black border-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7c30585-1589-40b4-8f5f-045ff49e5be9_1600w.png"/>
<div className="absolute bottom-6 -left-2 bg-white border-2 border-black px-4 py-2 font-typewriter font-semibold text-xs shadow-hard-sm rotate-3 group-hover:-rotate-3 transition-transform z-20">
              Chart: STONKS ONLY GO UP
            </div>
</div>
</div>
</div>
</section>

<div className="relative w-full h-0 z-50">
<div className="absolute top-0 left-0 w-full -translate-y-1/2 overflow-hidden flex bg-white border-y-4 border-black pt-3 pb-3 -rotate-1 scale-105 shadow-xl">
<div className="whitespace-nowrap shrink-0 animate-[marquee_20s_linear_infinite] font-typewriter font-semibold text-black text-xl px-4 tracking-tight">
          ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
          ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
        </div>
<div className="whitespace-nowrap shrink-0 animate-[marquee_20s_linear_infinite] font-typewriter font-semibold text-black text-xl px-4 tracking-tight">
          ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
          ESCAPE THE MATRICKS +++ BUY $TOPG +++ DONT BE A BROKIE +++ 33 CARS +++
        </div>
</div>
</div>

<section className="py-32 px-4 bg-neutral-900 text-white border-b-4 border-black relative overflow-hidden -mt-1" id="manifesto">

<canvas className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0" height="970" id="brokie-matrix" width="1050"></canvas>
<div className="w-full max-w-[96%] mx-auto text-center relative z-10 pt-16">
<h2 className="reveal font-shaky text-5xl md:text-7xl mb-12 text-green-500 drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)] tracking-tight active">
          MESSAGE 4 BROKIES
        </h2>
<div className="reveal bg-black border-4 border-green-500 p-8 md:p-16 shadow-[10px_10px_0px_0px_#22c55e] text-left transform transition-all duration-500 hover:shadow-[15px_15px_0px_0px_#22c55e] hover:-translate-y-1 hover-trigger max-w-5xl mx-auto">
<div className="font-typewriter text-green-400 text-lg md:text-2xl leading-loose">
<span className="animate-pulse">_</span>
<br/>
            "Listen 2 me brokies. Why u poor? Is becoz u sleep. U drink tap
            wotr. I drink sparkling wotr (it bubbles in my nose).
            <br/>
<br/>
            I have 33 cars. One is Bugatti. One is Hot Wheel. One is invisible.
            What color is ur invisible car?
            <br/>
<br/>
            Buy $TOPG. We go to moon. Not because is easy. But because I need
            money for new crayons."
          </div>
<div className="mt-8 flex justify-end">
<span className="font-shaky text-white text-xl bg-green-600 px-4 py-1 border border-white -rotate-3">
              - Androo Tat
            </span>
</div>
</div>
</div>
</section>

<section className="bg-grass border-b-0 border-black overflow-hidden relative min-h-[1900px] flex justify-center w-full torn-paper-top z-10" id="roadmap">

<div className="absolute inset-0 w-full h-full z-10 pointer-events-none hidden md:block">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M 50 0 L 50 5 L 20 20 L 80 50 L 20 70 L 50 95 L 50 100" fill="none" stroke="#1f2937" strokeLinejoin="round" strokeWidth="14"></path>
<path d="M 50 0 L 50 5 L 20 20 L 80 50 L 20 70 L 50 95 L 50 100" fill="none" stroke="#4b5563" strokeLinejoin="round" strokeWidth="12"></path>
<path d="M 50 0 L 50 5 L 20 20 L 80 50 L 20 70 L 50 95 L 50 100" fill="none" stroke="white" stroke-dasharray="2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8"></path>
</svg>
</div>

<div className="absolute inset-0 w-full h-full z-10 pointer-events-none block md:hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 50 0 L 50 5 L 30 25 L 70 50 L 30 75 L 50 95 L 50 100" fill="none" stroke="#1f2937" strokeLinejoin="round" strokeWidth="18"></path>
<path d="M 50 0 L 50 5 L 30 25 L 70 50 L 30 75 L 50 95 L 50 100" fill="none" stroke="#4b5563" strokeLinejoin="round" strokeWidth="16"></path>
<path d="M 50 0 L 50 5 L 30 25 L 70 50 L 30 75 L 50 95 L 50 100" fill="none" stroke="white" stroke-dasharray="2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>


<div className="absolute top-[5%] right-[2%] md:right-[5%] z-20 flex flex-col items-center pointer-events-none">
<div className="w-24 h-24 md:w-32 md:h-32 transform rotate-6 hover:scale-105 transition-transform">
<svg className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" viewbox="0 0 100 100">
<rect fill="#F80602" height="80" stroke="black" strokeWidth="3" width="80" x="10" y="20"></rect>
<rect fill="#a5f3fc" height="20" stroke="black" strokeWidth="2" width="20" x="25" y="35"></rect>
<rect fill="#a5f3fc" height="20" stroke="black" strokeWidth="2" width="20" x="55" y="35"></rect>
<rect fill="#a5f3fc" height="20" stroke="black" strokeWidth="2" width="20" x="25" y="65"></rect>
<rect fill="#a5f3fc" height="20" stroke="black" strokeWidth="2" width="20" x="55" y="65"></rect>
<rect fill="white" height="20" stroke="black" strokeWidth="3" transform="rotate(-2 50 15)" width="90" x="5" y="5"></rect>
<text fill="black" fontFamily="Courier Prime" fontSize="10" text-anchor="middle" transform="rotate(-2 50 15)" x="50" y="20">
              HUSTLE HOTEL
            </text>
</svg>
</div>
</div>

<div className="absolute top-[8%] right-[25%] md:right-[20%] z-20 w-16 h-16 pointer-events-none">
<svg className="w-full h-full drop-shadow-[2px_2px_0_black]" viewbox="0 0 100 100">
<rect fill="#78350f" height="40" stroke="black" strokeWidth="2" width="10" x="45" y="60"></rect>
<circle cx="50" cy="45" fill="#166534" r="25" stroke="black" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute top-[25%] left-[1%] md:left-[2%] z-20 w-[140px] md:w-[200px] pointer-events-none">

<svg className="w-32 h-24 drop-shadow-[3px_3px_0_black] -rotate-3 z-30" viewbox="0 0 100 80">
<rect fill="#fca5a5" height="50" stroke="black" strokeWidth="3" width="80" x="10" y="30"></rect>
<path d="M5,30 L50,5 L95,30" fill="#b91c1c" stroke="black" strokeWidth="3"></path>
<rect fill="#450a0a" height="30" stroke="black" strokeWidth="2" width="30" x="35" y="50"></rect>
<text fill="white" fontFamily="Courier Prime" fontSize="8" text-anchor="middle" x="50" y="25">
            PIZZA
          </text>
</svg>
</div>
<div className="absolute top-[35%] left-[2%] md:left-[2%] z-20 w-24 h-32 pointer-events-none hidden md:block">

<svg className="w-full h-full drop-shadow-[3px_3px_0_black] rotate-2 z-10" viewbox="0 0 100 140">
<rect fill="#60a5fa" height="130" stroke="black" strokeWidth="3" width="60" x="20" y="10"></rect>
<rect fill="#bfdbfe" height="10" stroke="black" strokeWidth="2" width="40" x="30" y="20"></rect>
<rect fill="#bfdbfe" height="10" stroke="black" strokeWidth="2" width="40" x="30" y="40"></rect>
<rect fill="#bfdbfe" height="10" stroke="black" strokeWidth="2" width="40" x="30" y="60"></rect>
<rect fill="#bfdbfe" height="10" stroke="black" strokeWidth="2" width="40" x="30" y="80"></rect>
</svg>
</div>

<div className="absolute top-[28%] left-[18%] md:left-[15%] z-20 w-14 h-14 pointer-events-none">
<svg className="w-full h-full drop-shadow-[2px_2px_0_black]" viewbox="0 0 100 100">
<rect fill="#78350f" height="40" stroke="black" strokeWidth="2" width="10" x="45" y="60"></rect>
<circle cx="50" cy="45" fill="#15803d" r="25" stroke="black" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute top-[60%] right-[1%] md:right-[2%] z-20 w-40 h-64 pointer-events-none">

<svg className="w-32 h-32 drop-shadow-[4px_4px_0_black] -rotate-3" viewbox="0 0 120 120">
<rect fill="#fbbf24" height="70" stroke="black" strokeWidth="3" width="100" x="10" y="40"></rect>
<path d="M5,40 L60,5 L115,40" fill="#ef4444" stroke="black" strokeWidth="3"></path>
<rect fill="#1f2937" height="40" stroke="black" strokeWidth="3" width="30" x="45" y="70"></rect>
<rect fill="white" height="30" stroke="black" strokeWidth="2" width="20" x="20" y="50"></rect>
<rect fill="white" height="30" stroke="black" strokeWidth="2" width="20" x="80" y="50"></rect>
<rect fill="white" height="20" stroke="black" strokeWidth="2" width="80" x="20" y="20"></rect>
<text fontFamily="Courier Prime" fontSize="10" font-weight="bold" text-anchor="middle" x="60" y="34">
            THE G SPOT
          </text>
</svg>
</div>

<div className="absolute top-[55%] right-[15%] md:right-[15%] z-20 w-16 h-16 pointer-events-none">
<svg className="w-full h-full drop-shadow-[2px_2px_0_black] rotate-6" viewbox="0 0 100 100">
<rect fill="#78350f" height="40" stroke="black" strokeWidth="2" width="10" x="45" y="60"></rect>
<circle cx="50" cy="45" fill="#22c55e" r="25" stroke="black" strokeWidth="2"></circle>
</svg>
</div>
<div className="absolute top-[65%] right-[18%] md:right-[12%] z-20 w-24 h-24 pointer-events-none">
<svg className="w-full h-full drop-shadow-[2px_2px_0_black] -rotate-2" viewbox="0 0 100 100">
<rect fill="#78350f" height="45" stroke="black" strokeWidth="2" width="12" x="45" y="55"></rect>
<path d="M10,60 L50,5 L90,60 Z" fill="#14532d" stroke="black" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute top-[80%] left-[1%] md:left-[2%] md:top-[68%] z-20 w-[140px] md:w-[300px] pointer-events-none">

<svg className="w-32 h-32 drop-shadow-[4px_4px_0_black] rotate-3" viewbox="0 0 100 100">
<rect fill="#94a3b8" height="60" stroke="black" strokeWidth="3" width="90" x="5" y="30"></rect>
<rect fill="#334155" height="15" stroke="black" strokeWidth="3" width="100" x="0" y="20"></rect>
<text fill="white" fontFamily="Courier Prime" fontSize="10" font-weight="bold" text-anchor="middle" x="50" y="31">
            TOP G GYM
          </text>
<rect fill="#0f172a" height="30" stroke="black" strokeWidth="2" width="30" x="35" y="60"></rect>
</svg>

<div className="absolute top-20 right-8 w-6 h-12 bg-blue-200 border-2 border-black z-0 opacity-50"></div>
<div className="absolute top-20 left-8 w-6 h-12 bg-blue-200 border-2 border-black z-0 opacity-50"></div>

<svg className="absolute -top-6 right-0 w-16 h-10 animate-pulse opacity-80" viewbox="0 0 100 60">
<circle cx="20" cy="30" fill="white" r="15" stroke="black" strokeWidth="1"></circle>
<circle cx="50" cy="20" fill="white" r="20" stroke="black" strokeWidth="1"></circle>
<circle cx="80" cy="30" fill="white" r="15" stroke="black" strokeWidth="1"></circle>
</svg>
</div>

<div className="absolute top-[75%] left-[15%] md:left-[10%] md:top-[65%] z-20 w-16 h-16 pointer-events-none">
<svg className="w-full h-full drop-shadow-[2px_2px_0_black] -rotate-6" viewbox="0 0 100 100">
<rect fill="#78350f" height="40" stroke="black" strokeWidth="2" width="10" x="45" y="60"></rect>
<circle cx="50" cy="45" fill="#15803d" r="25" stroke="black" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute top-[85%] right-[2%] md:right-[5%] md:top-[75%] z-20">
<svg className="w-24 h-24 drop-shadow-[3px_3px_0_black] -rotate-6" viewbox="0 0 100 100">
<rect fill="white" height="50" stroke="black" strokeWidth="3" width="60" x="20" y="40"></rect>
<path d="M10,40 L50,10 L90,40" fill="#F80602" stroke="black" strokeWidth="3"></path>
<rect fill="#F80602" height="30" stroke="black" strokeWidth="2" width="20" x="40" y="60"></rect>
</svg>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
<div className="bg-white border-x-4 border-b-4 border-black px-6 py-4 font-shaky text-2xl shadow-hard">
          START
          <iconify-icon className="inline" icon="solar:flag-linear"></iconify-icon>
</div>
<div className="h-4 w-full flex">
<div className="w-1/2 bg-black h-full"></div>
<div className="w-1/2 bg-white h-full"></div>
</div>
</div>

<div className="absolute z-50 w-20 h-20 md:w-32 md:h-32 transition-transform duration-100 ease-linear will-change-transform flex items-center justify-center" id="mario-car" style={{left: 'calc(50% - 64px)', top: 'calc(100% - 64px)', transform: 'rotate(25deg)'}}>
<div className="relative w-full h-full animate-rumble">
<img alt="Driving Car" className="transition-transform duration-200 w-full h-full object-contain drop-shadow-[4px_8px_0_rgba(0,0,0,0.5)]" id="car-sprite" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5f403be-3090-4169-8d35-b6f800ff8680_320w.png" style={{transform: 'scaleX(1)'}}/>
<div className="absolute -bottom-2 -left-2 w-full text-center">
<span className="bg-black text-white text-[10px] font-typewriter px-1">
              1ST PLACE
            </span>
</div>
</div>
</div>

<div className="reveal absolute top-[20%] left-2 md:left-[5%] z-30 max-w-[150px] md:max-w-[180px]">
<div className="bg-yellow-400 border-4 border-black p-3 shadow-hard -rotate-3 hover:rotate-0 transition-transform hover:scale-105 group">
<div className="absolute -top-4 -right-4 animate-coin">
<iconify-icon className="text-yellow-200 drop-shadow-[2px_2px_0_black]" height="32" icon="solar:star-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="font-shaky text-lg mb-1">PHASE 1</h3>
<p className="font-typewriter text-[10px] font-semibold mb-1">
            THE ESCAPE
          </p>
<ul className="text-[10px] font-main space-y-1">
<li className="">[x] Leave Matrix</li>
<li className="">[ ] Buy Bugatti</li>
</ul>
</div>
</div>
<div className="reveal absolute top-[45%] right-2 md:right-[2%] z-30 max-w-[150px] md:max-w-[180px] text-left">
<div className="bg-[#F80602] text-white border-4 border-black p-3 shadow-hard rotate-3 hover:rotate-0 transition-transform hover:scale-105 group">
<div className="absolute -top-4 -left-4 animate-coin">
<iconify-icon className="text-black drop-shadow-[2px_2px_0_white]" height="32" icon="solar:bomb-bold" width="32"></iconify-icon>
</div>
<h3 className="font-shaky text-lg mb-1">PHASE 2</h3>
<p className="font-typewriter text-[10px] font-semibold mb-1">
            THE TAKEOVER
          </p>
<ul className="text-[10px] font-main space-y-1">
<li>[ ] World Dom</li>
<li>[ ] Sparkle Water</li>
</ul>
</div>
</div>

<div className="reveal absolute top-[80%] md:top-[68%] left-2 md:left-[5%] z-30 max-w-[150px] md:max-w-[180px]">
<div className="bg-blue-400 border-4 border-black p-3 shadow-hard -rotate-2 hover:rotate-0 transition-transform hover:scale-105 group">
<div className="absolute -top-4 -right-4 animate-coin">
<iconify-icon className="text-yellow-300 drop-shadow-[2px_2px_0_black]" height="32" icon="solar:crown-bold" width="32"></iconify-icon>
</div>
<h3 className="font-shaky text-lg mb-1">PHASE 3</h3>
<p className="font-typewriter text-[10px] font-semibold mb-1">
            TOP G STATUS
          </p>
<ul className="text-[10px] font-main space-y-1">
<li className="">[ ] Moon</li>
<li>[ ] 33 Cars</li>
</ul>
</div>
</div>


<div className="absolute bottom-0 w-full z-[60] flex flex-col items-center pointer-events-none">
<div className="relative w-full h-48 md:h-[500px] flex justify-center items-end">

<svg className="w-full h-full drop-shadow-[-10px_-10px_0_rgba(0,0,0,0.3)] z-10 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="M0,50 L0,15 Q15,5 25,20 Q40,-5 50,10 Q60,-5 75,20 Q85,5 100,15 L100,50 Z" fill="#57534e" stroke="black" strokeWidth="2"></path>

<path d="M25,50 Q25,25 35,20 Q50,10 65,20 Q75,25 75,50 Z" fill="#171717" stroke="black" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-20 flex gap-4 z-20 opacity-0 animate-[fade-in_2s_ease-in_infinite]" style={{animation: 'blink-eyes 4s infinite'}}>
<div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_red]"></div>
<div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_red]"></div>
</div>

<div className="absolute top-10 md:top-24 z-30 transform rotate-6 bg-[#fbbf24] border-2 border-black px-3 py-1 shadow-md">
<span className="font-shaky text-xs md:text-lg font-bold">
              REAL WORLD →
            </span>
</div>
</div>
</div>
</section>

<section className="overflow-visible z-20 bg-[#333333] border-black border-b-4 pt-24 pb-24 relative" id="war-room">

<div className="z-[80] pointer-events-none transform -translate-y-1/2 overflow-hidden flex flex-col w-full h-32 absolute top-0 left-0 items-center justify-center">
<div className="transform z-20 text-black bg-yellow-400 w-[120%] border-y-4 border-black pt-2 pb-2 relative shadow-lg rotate-2 flex overflow-hidden">
<div className="whitespace-nowrap shrink-0 animate-[marquee_10s_linear_infinite] text-xl font-bold tracking-widest font-typewriter px-4">
            CAUTION: TOP G ZONE // BROKIES BANNED // CAUTION: TOP G ZONE //
            BROKIES BANNED // CAUTION: TOP G ZONE // BROKIES BANNED //
          </div>
<div className="whitespace-nowrap shrink-0 animate-[marquee_10s_linear_infinite] text-xl font-bold tracking-widest font-typewriter px-4">
            CAUTION: TOP G ZONE // BROKIES BANNED // CAUTION: TOP G ZONE //
            BROKIES BANNED // CAUTION: TOP G ZONE // BROKIES BANNED //
          </div>
</div>
<div className="transform -mt-6 text-black bg-yellow-400 opacity-90 w-[120%] z-20 border-y-4 border-black pt-2 pb-2 relative shadow-lg -translate-y-8 -rotate-2 flex overflow-hidden">
<div className="whitespace-nowrap shrink-0 animate-[marquee-reverse_12s_linear_infinite] font-typewriter font-bold text-xl tracking-widest px-4">
            DO NOT CROSS // WEALTH AHEAD // DO NOT CROSS // WEALTH AHEAD // DO
            NOT CROSS // WEALTH AHEAD // DO NOT CROSS // WEALTH AHEAD //
          </div>
<div className="whitespace-nowrap shrink-0 animate-[marquee-reverse_12s_linear_infinite] font-typewriter font-bold text-xl tracking-widest px-4">
            DO NOT CROSS // WEALTH AHEAD // DO NOT CROSS // WEALTH AHEAD // DO
            NOT CROSS // WEALTH AHEAD // DO NOT CROSS // WEALTH AHEAD //
          </div>
</div>
</div>

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="w-full max-w-[96%] mx-auto px-4 relative z-20 flex flex-col items-center pt-16">
<div className="mb-12 text-center">
<h2 className="reveal inline-block font-shaky text-4xl md:text-6xl text-black bg-white border-4 border-black px-6 py-4 shadow-hard -rotate-1 tracking-tight">
            ENTER THE WAR RUM
          </h2>
</div>

<div className="reveal relative w-full group mx-auto max-w-7xl">
<div className="absolute inset-0 bg-black translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
<div className="relative border-4 border-black overflow-hidden bg-gray-800">
<img alt="Welcome to the War Rum - Top G Cartoon" className="transform group-hover:scale-105 transition-transform duration-500 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d42099d4-0313-4be5-bf1e-830bbdfb6b37_1600w.png"/>
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
</div>
</div>

<div className="reveal mt-12">
<a className="whitespace-nowrap px-6 md:px-12 md:text-3xl hover:shadow-[3px_3px_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-3 group hover:bg-[#0077b3] hover:rotate-0 text-xl sm:text-2xl text-white font-shaky bg-[#0088cc] z-20 border-black border-4 pt-4 pb-4 relative shadow-[6px_6px_0_rgba(0,0,0,1)] rotate-1" href="https://t.me/topg1000supply">
<iconify-icon className="group-hover:-rotate-12 transition-transform" height="32" icon="solar:plain-bold" width="32"></iconify-icon>
            JOIN TELEGRAM NOW
          </a>
</div>
<p className="reveal mt-6 font-typewriter text-gray-400 text-xs md:text-sm text-center max-w-lg">
          "THIS IS WHERE WE PLAN. WE HAVE MAPS. WE HAVE MARKERS. WE HAVE TOY
          CARS. DON'T ASK QUESTIONS."
        </p>
</div>
</section>

<section className="relative bg-matricks-animated border-b-4 border-black torn-paper-top h-[300vh] z-30" id="missions">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-start">
<div className="absolute top-16 z-20 w-full flex justify-center pointer-events-none">
<h2 className="font-shaky text-4xl md:text-6xl text-center bg-white px-8 py-4 border-4 border-black shadow-hard transform -rotate-1 mx-auto block w-fit tracking-tight pointer-events-auto">
            TRAIN LIKE A TOP G
          </h2>
</div>
<div className="flex items-center gap-16 md:gap-32 px-[10vw] md:px-[25vw] w-max will-change-transform" id="mission-track" style={{transform: 'translateX(-1872px)'}}>

<div className="w-[85vw] md:w-[500px] bg-white border-4 border-black p-8 shadow-hard flex flex-col items-center text-center transform rotate-2 hover:scale-105 transition-transform duration-300 group shrink-0">
<div className="w-20 h-20 bg-gray-200 border-4 border-black mb-6 flex items-center justify-center group-hover:bg-green-300 transition-colors">
<iconify-icon height="48" icon="solar:wallet-linear" width="48"></iconify-icon>
</div>
<h3 className="font-shaky text-2xl mb-4">Mission 1: "The Bag"</h3>
<p className="font-main font-medium">
              Draw your wallet in MS Paint. Make it fat.
            </p>
</div>

<div className="w-[85vw] md:w-[500px] bg-[#F80602] border-4 border-black p-8 shadow-hard flex flex-col items-center text-center transform -rotate-1 hover:scale-105 transition-transform duration-300 group shrink-0 text-white">
<div className="w-20 h-20 bg-black border-4 border-white mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-white" height="48" icon="solar:box-linear" width="48"></iconify-icon>
</div>
<h3 className="font-shaky text-2xl mb-4">Mission 2: "Pizza War"</h3>
<p className="font-main font-medium">Fight a pizza box. Win by KO.</p>
</div>

<div className="w-[85vw] md:w-[500px] bg-blue-200 border-4 border-black p-8 shadow-hard flex flex-col items-center text-center transform rotate-1 hover:scale-105 transition-transform duration-300 group shrink-0">
<div className="w-20 h-20 bg-white border-4 border-black mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
<iconify-icon height="48" icon="solar:wind-linear" width="48"></iconify-icon>
</div>
<h3 className="font-shaky text-2xl mb-4">Mission 3: "Breathe"</h3>
<p className="font-main font-medium">
              Go outside. Breathe air. Not vape.
            </p>
</div>

<div className="w-[85vw] md:w-[500px] bg-yellow-400 border-4 border-black p-8 shadow-hard flex flex-col items-center text-center transform -rotate-2 hover:scale-105 transition-transform duration-300 group shrink-0">
<div className="w-20 h-20 bg-white border-4 border-black mb-6 flex items-center justify-center group-hover:animate-spin">
<iconify-icon className="text-yellow-500" height="48" icon="solar:star-circle-bold" width="48"></iconify-icon>
</div>
<h3 className="font-shaky text-2xl mb-4">GRADUATION</h3>
<button className="bg-black text-white font-typewriter px-6 py-3 border-2 border-white hover:bg-gray-900 transition-colors">
              [ GET CERTIFIED ]
            </button>
</div>
</div>
<div className="absolute bottom-10 animate-bounce font-typewriter text-xs bg-white border-2 border-black px-2 shadow-hard-sm left-1/2 -translate-x-1/2">
          SCROLL &gt;&gt;&gt;
        </div>
</div>
</section>

<footer className="bg-black text-white py-20 px-4 border-t-0 zigzag-top relative z-10">
<div className="w-full max-w-[96%] mx-auto text-center space-y-16">
<h2 className="reveal md:text-8xl animate-pulse text-5xl text-white tracking-tight font-shaky max-w-[15ch] mx-auto leading-none">
          THE MATRICKS IS WATCHING.
        </h2>
<div className="reveal flex flex-wrap justify-center gap-8 md:gap-16">
<a className="group flex flex-col items-center gap-4 hover:text-[#F80602] transition-colors" href="#">
<div className="group-hover:border-[#F80602] flex transition-colors group-hover:rotate-6 bg-black w-20 h-20 border-white border-4 relative items-center justify-center cursor-pointer" onclick="window.location.href='https://x.com/ReelAndrooTat'" role="button">
<div className="w-6 h-6 rounded-full border-2 border-current"></div>
<div className="w-6 h-1 bg-current -ml-1"></div>
<div className="absolute top-2 right-2 text-xs font-semibold">X</div>
</div>
<span className="font-typewriter font-semibold text-xl">[Twitter]</span>
</a>
<a className="group flex flex-col items-center gap-4 hover:text-[#F80602] transition-colors" href="#">
<div className="group-hover:border-[#F80602] flex transition-colors group-hover:-rotate-6 bg-black w-20 h-20 border-white border-4 items-center justify-center" onclick="window.location.href='https://t.me/topg1000supply'" role="button">
<div className="rotate-180 transform translate-y-2 group-hover:translate-x-2 group-hover:translate-y-4 transition-transform text-white group-hover:text-[#F80602]">
<iconify-icon className="" height="48" icon="solar:plain-linear" width="48"></iconify-icon>
</div>
</div>
<span className="font-typewriter font-semibold text-xl">
              [Telegram]
            </span>
</a>
</div>
<div className="reveal border-t-2 border-gray-800 pt-12 mt-12 max-w-2xl mx-auto">
<p className="font-typewriter text-xs text-gray-500">
            Disclaimer: "This is not financial advice. I am a cartoon drawn in
            Paint."
          </p>
<p className="font-main font-medium text-xs text-gray-600 mt-4">
            © 2024 $TOPG.
          </p>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="pdf-modal" role="dialog">

<div className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity" onclick="closePdfModal()"></div>

<div className="relative z-10 w-full max-w-5xl h-[85vh] m-auto flex flex-col items-center justify-center p-4 pointer-events-none animate-[pop-in_0.3s_ease-out]">

<div className="w-full h-full bg-stone-100 border-4 border-black shadow-[8px_8px_0_#F80602] flex flex-col pointer-events-auto transform transition-all scale-100">

<div className="bg-black text-white px-4 py-2 flex justify-between items-center border-b-4 border-black select-none">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F80602]" icon="solar:file-text-bold"></iconify-icon>
<span className="font-typewriter text-sm md:text-base tracking-widest">
                TOPG_RITEPAPER_FINAL_V3.pdf
              </span>
</div>
<button className="hover:bg-[#F80602] hover:text-white px-2 py-0 font-mono font-bold transition-colors" onclick="closePdfModal()">
              [X] CLOSE
            </button>
</div>

<div className="flex-1 bg-gray-500 p-1 relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center text-white font-typewriter z-0">
              LOADING KNOWLEDGE...
            </div>

<iframe className="w-full h-full border-0 relative z-10" src="https://drive.google.com/file/d/1XuWHdLdMmVWRu6aKAKPs8EdIXurWNDJe/preview" title="Rite Paper PDF"></iframe>
</div>
</div>
</div>
</div>




    </>
  );
}
