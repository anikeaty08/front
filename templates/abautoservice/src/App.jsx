import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () { const style = document.createElement('style'); document.head.appendChild(style); if (!window.__inViewIO) { window.__inViewIO = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('animate'); window.__inViewIO.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); } window.initInViewAnimations = function () { document.querySelectorAll('.animate-on-scroll').forEach((el) => window.__inViewIO.observe(el)); }; document.addEventListener('DOMContentLoaded', initInViewAnimations); })();



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



    (function() {
      // 1. Define frames
      const totalFrames = 60;
      const folder = "car 2";
      const account = "dh4wremer";
      const slider = document.getElementById('car-slider');
      const carImg = document.getElementById('car-frame');
      const loader = document.getElementById('loader');
      
      const frameImages = [];
      let loadedCount = 0;

      // Show loader initially
      if(loader) loader.classList.remove('opacity-0');

      // Generate URLs
      for (let i = 1; i <= totalFrames; i++) {
        const num = i.toString().padStart(2, "0");
        frameImages.push(`https://res.cloudinary.com/${account}/image/upload/${folder}/${num}.png`);
      }

      // Preload images
      frameImages.forEach(src => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames && loader) {
            loader.classList.add('opacity-0');
          }
        };
        img.src = src;
      });

      // Update frame function
      const updateFrame = (clientX) => {
        const rect = carImg.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(1, x / rect.width));
        // Clamp frame index to valid range 0 to totalFrames-1
        const frameIndex = Math.min(totalFrames - 1, Math.floor(percent * totalFrames));
        
        requestAnimationFrame(() => {
          carImg.src = frameImages[frameIndex];
        });
      };

      // Mouse interaction
      slider.addEventListener('mousemove', e => {
        updateFrame(e.clientX);
      });

      // Touch interaction
      slider.addEventListener('touchmove', e => {
        e.preventDefault(); // Prevent scrolling while scrubbing
        const touch = e.touches[0];
        updateFrame(touch.clientX);
      }, { passive: false });
      
    })();
  


      // Initialize Lucide Icons
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });

      // -----------------------------------------------------
      // Interactive Hero Canvas (Fluid Wave Simulation)
      // -----------------------------------------------------
      const canvas = document.getElementById('heroCanvas');
      const ctx = canvas.getContext('2d');

      let width, height;
      let mouse = { x: 0, y: 0 };
      let waves = [];

      class Wave {
          constructor(y, amplitude, length, speed, color) {
              this.y = y;
              this.amplitude = amplitude;
              this.length = length;
              this.speed = speed;
              this.color = color;
              this.offset = 0;
          }

          draw(ctx, time) {
              ctx.beginPath();
              ctx.moveTo(0, height);

              for (let i = 0; i <= width; i += 10) {
                  // Interaction: Distance from mouse affects amplitude locally
                  const dist = Math.abs(i - mouse.x);
                  const influence = Math.max(0, 1 - dist / 400); // 400px radius

                  // Mouse Y also affects the wave height slightly
                  const mouseHeightMod = (mouse.y / height) * 20;

                  const activeAmp = this.amplitude + (influence * 30);

                  const y = this.y + Math.sin(i / this.length + this.offset + time * this.speed) * activeAmp + (influence * mouseHeightMod);
                  ctx.lineTo(i, y);
              }

              ctx.lineTo(width, height);
              ctx.fillStyle = this.color;
              ctx.fill();
              ctx.closePath();
          }
      }

      function initCanvas() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;

          // Create waves with varying opacity for depth
          // Red accents: using rgba values for Tailwind's Red-600 approx (220, 38, 38)
          waves = [
              new Wave(height * 0.7, 40, 400, 0.5, 'rgba(254, 226, 226, 0.4)'), // Red-100 very transparent
              new Wave(height * 0.75, 50, 300, 0.8, 'rgba(252, 165, 165, 0.3)'), // Red-300 transparent
              new Wave(height * 0.8, 60, 200, 1.2, 'rgba(220, 38, 38, 0.05)')   // Red-600 very subtle wash
          ];
      }

      let time = 0;
      function animate() {
          ctx.clearRect(0, 0, width, height);
          time += 0.01;

          waves.forEach(wave => wave.draw(ctx, time));

          requestAnimationFrame(animate);
      }

      window.addEventListener('resize', initCanvas);
      window.addEventListener('mousemove', (e) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
      });

      initCanvas();
      animate();

      // -----------------------------------------------------
      // 3D Tilt Effect for Cards
      // -----------------------------------------------------
      // Updated to include .review-card in the selector
      const cards = document.querySelectorAll('.service-card, .review-card, #floating-card, #hero-text-container');

      cards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
              const rotateY = ((x - centerX) / centerX) * 5;

              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          });

          card.addEventListener('mouseleave', () => {
              card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
          });
      });

      // -----------------------------------------------------
      // Navbar scroll logic
      // -----------------------------------------------------
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('shadow-sm');
          } else {
              navbar.classList.remove('shadow-sm');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="top-0 w-full h-screen -z-10 bg-cover bg-center blur-sm absolute" data-alpha-mask="70" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45a4a53a-a9c7-445e-865a-3b59c4ecd160_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)'}}></div>


<nav className="fixed glass-nav transition-all duration-300 w-full z-50" id="navbar">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="bg-red-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-gauge w-6 h-6" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-red-600 transition-colors">
              AB Auto Service
            </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-red-600 transition-colors" href="#services">
              Services
            </a>
<a className="text-sm font-medium hover:text-red-600 transition-colors" href="#why-us">
              About
            </a>
<a className="text-sm font-medium hover:text-red-600 transition-colors" href="#reviews">
              Reviews
            </a>
<a className="hover:text-red-600 transition-colors text-sm font-medium" href="#contact">
              Location
            </a>
</div>

<a className="hidden md:flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5" href="tel:8322777052">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(832) 277-7052</span>
</a>
</div>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden w-full pt-20 relative items-center justify-center">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-none" height="1233" id="heroCanvas" width="1230"></canvas>
<div className="w-full max-w-screen-2xl z-10 mx-auto px-6 lg:px-12 relative">
<div className="grid lg:grid-cols-2 lg:gap-x-48 w-full gap-x-12 gap-y-12 items-center">

<div className="tilt-element space-y-8" id="hero-text-container" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold tracking-wide uppercase animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Premium Automotive Care in Houston
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-gray-50 tracking-tight">Precision Auto Repair. <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                Performance
              </span> You Can Trust.</h1>
<p className="leading-relaxed text-xl text-zinc-50 max-w-lg">
              Experience the intersection of technology and mechanics. We
              provide dealership-quality diagnostics and repair with
              transparency you can rely on.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="shiny-cta group" href="tel:8322777052">
<span className="text-lg">
                  Call Now for Service
                  <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full font-medium hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all" href="#contact">
                Get Directions
              </a>
</div>
</div>

<div className="hidden lg:block flex h-[600px] relative perspective-1000 items-center justify-center">
<div className="shadow-neutral-200/50 transform transition-transform duration-100 ease-out preserve-3d bg-white/80 w-full max-w-md border-white/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-sm" id="floating-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>

<div className="flex justify-between items-center mb-8 border-b border-neutral-100 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-neutral-200"></div>
</div>
<span className="text-xs font-mono text-neutral-400">
                  SYS.DIAGNOSTICS_ACTIVE
                </span>
</div>

<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<div className="text-neutral-900 font-medium">
                      Engine Analysis
                    </div>
<div className="text-sm text-neutral-400">
                      Optimization Required
                    </div>
</div>
<div className="ml-auto text-red-600">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-disc w-6 h-6" data-lucide="disc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="">
<div className="text-neutral-900 font-medium">
                      Brake Systems
                    </div>
<div className="text-sm text-green-500">Passed Inspection</div>
</div>
<div className="ml-auto text-neutral-300">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-thermometer w-6 h-6" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="">
<div className="text-neutral-900 font-medium">Fluid Levels</div>
<div className="text-sm text-green-500">Optimal Range</div>
</div>
<div className="ml-auto text-neutral-300">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>

<div className="absolute -right-8 -bottom-8 bg-neutral-900 text-white p-6 rounded-2xl shadow-xl transform translate-z-10">
<div className="text-3xl font-semibold tracking-tight">4.9/5</div>
<div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  Customer Rating
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs uppercase tracking-widest text-neutral-400">
          Scroll
        </span>
<svg className="lucide lucide-arrow-down w-4 h-4 text-neutral-400" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] bg-white pt-24 pb-24 relative animate" id="services">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Comprehensive Care
          </h2>
<p className="text-lg text-neutral-500">
            From routine maintenance to complex engine diagnostics, we treat
            every vehicle with surgical precision.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-droplet w-7 h-7" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Oil &amp; Fluid Service
            </h3>
<p className="text-neutral-500 leading-relaxed">
              High-performance synthetic blends and precise filtration to keep
              your engine running smoothly.
            </p>
</div>

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-disc-3 w-7 h-7" data-lucide="disc-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path><circle cx="12" cy="12" r="2"></circle><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Brake Repair
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Pad replacement, rotor resurfacing, and fluid flush using top-tier
              components for safety.
            </p>
</div>

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-cpu w-7 h-7" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Computer Diagnostics
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Advanced scanning tools to pinpoint check engine lights and
              electrical issues instantly.
            </p>
</div>

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-fan w-7 h-7" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              A/C Repair
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Leak detection, compressor repair, and recharging to combat the
              Texas heat effectively.
            </p>
</div>

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-settings-2 w-7 h-7" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Engine &amp; Transmission
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Heavy-duty repairs handled by certified experts. Timing belts,
              gaskets, and rebuilds.
            </p>
</div>

<div className="service-card group bg-neutral-50 hover:bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 cursor-pointer transform-style-3d" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
<svg className="lucide lucide-wrench w-7 h-7" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Suspension &amp; Steering
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Shocks, struts, and wheel alignments to ensure a smooth, safe
              driving experience.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-white bg-neutral-900 pt-24 pb-24 relative animate" id="why-us">

<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
<div className="absolute right-20 top-0 h-full w-[1px] bg-white"></div>
<div className="absolute right-40 top-0 h-full w-[1px] bg-white"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
              Why Houston Drivers Choose AB Auto Service
            </h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-red-500">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">
                    Uncompromising Honesty
                  </h3>
<p className="text-neutral-400">
                    We never upsell unnecessary repairs. We show you the
                    problem, explain the solution, and wait for your approval.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-red-500">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Rapid Turnaround</h3>
<p className="text-neutral-400">
                    We respect your time. Using efficient workflows and stocked
                    parts, we get you back on the road faster.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-red-500">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Certified Expertise</h3>
<p className="text-neutral-400">
                    Our technicians are ASE certified and constantly training on
                    the latest vehicle technologies.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] bg-neutral-800 rounded-3xl border border-neutral-700 p-8 shadow-2xl overflow-hidden group">
<div className="bg-gradient-to-br from-red-900/20 to-neutral-900/50 absolute top-0 right-0 bottom-0 left-0" onmouseenter="const v=this.querySelector('video');if(v)v.pause()" onmouseleave="const v=this.querySelector('video');if(v)v.play()" onmousemove="const v=this.querySelector('video');if(v&amp;&amp;v.duration){const r=this.getBoundingClientRect();v.currentTime=((event.clientX-r.left)/r.width)*v.duration}"><div className="w-full h-full flex items-center justify-center bg-black/10 backdrop-blur-sm" id="car-slider" style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}>
<div className="" style={{width: '100%', maxWidth: '900px', aspectRatio: '16/9', overflow: 'hidden', position: 'relative', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>
<img alt="Interactive Car View" id="car-frame" src="https://res.cloudinary.com/dh4wremer/image/upload/car%202/01.png" style={{width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none', pointerEvents: 'none', cursor: 'ew-resize'}}/>

<div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-opacity duration-300 opacity-0" id="loader">
<div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
</div>
</div>

</div></div>

<svg className="w-full h-full stroke-white/20 fill-none stroke-[0.5] group-hover:stroke-red-500/50 transition-colors duration-700" viewbox="0 0 400 200">
<path d="M40,140 C40,140 60,100 120,100 C180,100 240,60 300,80 C360,100 380,140 380,140"></path>
<circle cx="100" cy="140" r="30"></circle>
<circle cx="320" cy="140" r="30"></circle>
<line x1="0" x2="400" y1="170" y2="170"></line>
</svg>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex justify-between items-end border-b border-neutral-700 pb-4">
<div className="">
<div className="text-neutral-400 text-sm">Status</div>
<div className="text-white text-xl">Operational</div>
</div>
<div className="text-red-500 animate-pulse">
<svg className="lucide lucide-circle-dot w-4 h-4" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100 overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" id="reviews">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-12">
<div className="text-center md:text-left">
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
            Client Perspectives
          </h2>
<p className="text-neutral-500 mt-2">Rated 4.9/5 by Houston locals.</p>
</div>
</div>
<div className="relative w-full mask-gradient-x">
<div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">


<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "Finally an honest mechanic in Houston. They showed me exactly
              what was wrong with my transmission and fixed it for a fair price.
              The shop is incredibly clean too."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                MR
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Michael R.
                </div>
<div className="text-xs text-neutral-400">Local Guide</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "AB Auto Service saved me. My AC died in the middle of July. They
              got me in same-day and fixed the leak. Professional, fast, and
              polite."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                JL
              </div>
<div className="">
<div className="text-sm font-semibold text-neutral-900">
                  Jennifer L.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "No nonsense. Brought my truck in for diagnostics. They pinpointed
              the issue immediately. High tech equipment and old school service
              values."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                DK
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  David K.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "AB Auto Service is my go-to for anything car-related. They
              replaced my brakes quickly and at a reasonable price. It’s
              refreshing to deal with people who genuinely care about their
              customers. Highly recommend!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                CB
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Claire B.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "I was blown away by the service I received. My car was making
              weird noises, and they took the time to explain everything to me
              in plain language. No upselling, just solid advice and quality
              work. I’ll definitely be back!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                TR
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">Tom R.</div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "I can’t thank AB Auto Service enough! I was traveling through
              Houston when my battery died. They squeezed me in and had me back
              on the road in no time. Friendly staff and great prices. You saved
              my trip!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                HS
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Hannah S.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>


<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "Finally an honest mechanic in Houston. They showed me exactly
              what was wrong with my transmission and fixed it for a fair price.
              The shop is incredibly clean too."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                MR
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Michael R.
                </div>
<div className="text-xs text-neutral-400">Local Guide</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "AB Auto Service saved me. My AC died in the middle of July. They
              got me in same-day and fixed the leak. Professional, fast, and
              polite."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                JL
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Jennifer L.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "No nonsense. Brought my truck in for diagnostics. They pinpointed
              the issue immediately. High tech equipment and old school service
              values."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                DK
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  David K.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "AB Auto Service is my go-to for anything car-related. They
              replaced my brakes quickly and at a reasonable price. It’s
              refreshing to deal with people who genuinely care about their
              customers. Highly recommend!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                CB
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Claire B.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "I was blown away by the service I received. My car was making
              weird noises, and they took the time to explain everything to me
              in plain language. No upselling, just solid advice and quality
              work. I’ll definitely be back!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                TR
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">Tom R.</div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>

<div className="review-card flex-shrink-0 w-[24rem] p-8 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 transform-style-3d cursor-default">
<div className="flex gap-1 text-red-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mb-6 text-sm leading-relaxed">
              "I can’t thank AB Auto Service enough! I was traveling through
              Houston when my battery died. They squeezed me in and had me back
              on the road in no time. Friendly staff and great prices. You saved
              my trip!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500 text-xs">
                HS
              </div>
<div>
<div className="text-sm font-semibold text-neutral-900">
                  Hannah S.
                </div>
<div className="text-xs text-neutral-400">Verified Customer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 flex flex-col lg:flex-row min-h-[600px] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" id="contact">

<div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-neutral-100 relative">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.7335661218086!2d-95.63234992430348!3d29.709971975095347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e70405555555%3A0x123456789abc!2s13935%20Bellaire%20Blvd%2C%20Houston%2C%20TX%2077083!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
<div className="absolute inset-0 bg-red-600/5 pointer-events-none mix-blend-multiply"></div>
</div>

<div className="lg:w-1/2 lg:p-24 flex flex-col bg-white w-full pt-12 pr-12 pb-12 pl-12 justify-center">
<h2 className="text-3xl font-semibold text-neutral-900 mb-8 tracking-tight">
          Visit Our Workshop
        </h2>
<div className="space-y-8">
<div className="flex gap-4 items-start">
<svg className="lucide lucide-map-pin w-6 h-6 text-red-600 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<h4 className="font-medium text-neutral-900">Address</h4>
<p className="text-neutral-500 mt-1">
                13935 Bellaire Blvd Houston, TX 77083
              </p>
</div>
</div>
<div className="flex gap-4 items-start">
<svg className="lucide lucide-phone w-6 h-6 text-red-600 mt-1" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div className="">
<h4 className="font-medium text-neutral-900">Phone</h4>
<a className="text-neutral-500 mt-1 block hover:text-red-600 transition-colors" href="tel:8322777052">
                (832) 277-7052
              </a>
</div>
</div>
<div className="flex gap-4 items-start">
<svg className="lucide lucide-clock w-6 h-6 text-red-600 mt-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="">
<h4 className="font-medium text-neutral-900">Hours</h4>
<p className="text-neutral-500 mt-1">
                Mon - Fri: 8:00 AM - 6:00 PM Sat: 9:00 AM - 3:00 PM Sun: Closed
              </p>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-block hover:bg-red-600 transition-colors font-medium text-white text-center bg-neutral-900 w-full rounded-lg pt-4 pr-8 pb-4 pl-8" href="tel:8322777052">
            Make an Appointment
          </a>
</div>
</div>
</section>

<footer className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] bg-white border-neutral-100 border-t pt-12 pb-12">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-neutral-900 text-white p-1 rounded">
<svg className="lucide lucide-gauge w-4 h-4" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">
            AB Auto Service
          </span>
</div>
<div className="text-neutral-400 text-sm text-center md:text-right">
          © 2023 AB Auto Service. All rights reserved.
          <br/>
<span className="text-xs">Premium Automotive Repair in Houston, TX</span>
</div>
</div>
</footer>


    </>
  );
}
