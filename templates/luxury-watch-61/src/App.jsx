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



      document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(ScrollTrigger);

          const nav = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  nav.classList.add('bg-white/80', 'backdrop-blur-xl', 'text-[#0D0D12]', 'border-[#2A2A35]/10', 'shadow-sm');
                  nav.classList.remove('text-[#FAF8F5]', 'border-transparent');
                  nav.querySelector('.hidden').classList.remove('text-[#FAF8F5]/80');
                  nav.querySelector('.hidden').classList.add('text-[#0D0D12]/60');
              } else {
                  nav.classList.remove('bg-white/80', 'backdrop-blur-xl', 'text-[#0D0D12]', 'border-[#2A2A35]/10', 'shadow-sm');
                  nav.classList.add('text-[#FAF8F5]', 'border-transparent');
                  nav.querySelector('.hidden').classList.add('text-[#FAF8F5]/80');
                  nav.querySelector('.hidden').classList.remove('text-[#0D0D12]/60');
              }
          });

          const tlHero = gsap.timeline();
          tlHero.fromTo(".gsap-hero-text h1",
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
          )
          .fromTo(".gsap-hero-text h2",
              { y: 150, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
              "-=0.9"
          )
          .fromTo(".gsap-hero-fade",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
              "-=0.6"
          );

          const shufflerCards = document.querySelectorAll('.shuffler-card');
          let order = [2, 1, 0];

          setInterval(() => {
              order.unshift(order.pop());
              shufflerCards.forEach((card, index) => {
                  const pos = order[index];
                  const y = -pos * 15;
                  const scale = 1 - (pos * 0.05);
                  const opacity = 1 - (pos * 0.2);
                  const zIndex = 3 - pos;

                  gsap.to(card, {
                      y: y,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                      duration: 0.8,
                      ease: "back.out(1.5)"
                  });
              });
          }, 3000);

          const typewriterText = "System initialized. Scanning matrix... Micro-fractures: 0. Structural Integrity: 100%. Tuning resonant frequency... Optimal.";
          const twElement = document.getElementById('typewriter-text');
          let i = 0;

          function typeWriter() {
              if (i < typewriterText.length) {
                  twElement.innerHTML += typewriterText.charAt(i);
                  i++;
                  setTimeout(typeWriter, Math.random() * 50 + 20);
              } else {
                  setTimeout(() => {
                      twElement.innerHTML = '';
                      i = 0;
                      typeWriter();
                  }, 4000);
              }
          }
          setTimeout(typeWriter, 1000);

          const cursor = document.getElementById('scheduler-cursor');
          const targetDay = document.getElementById('target-day');
          const saveBtn = document.getElementById('save-btn');

          const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

          cursorTl.set(cursor, { x: -20, y: -20, opacity: 0 })
            .to(cursor, { opacity: 1, duration: 0.3 })
            .to(cursor, { x: 120, y: 35, duration: 1.2, ease: "power2.inOut" })
            .to(cursor, { scale: 0.85, duration: 0.1 })
            .to(targetDay, { backgroundColor: '#C9A84C', borderColor: '#C9A84C', duration: 0.1 }, "<")
            .to(cursor, { scale: 1, duration: 0.1 })
            .to(cursor, { x: 140, y: 125, duration: 1, ease: "power2.inOut" }, "+=0.3")
            .to(cursor, { scale: 0.85, duration: 0.1 })
            .to(saveBtn, { backgroundColor: 'rgba(201,168,76,0.2)', borderColor: '#C9A84C', duration: 0.1 }, "<")
            .to(cursor, { scale: 1, duration: 0.1 })
            .to(cursor, { opacity: 0, duration: 0.3 }, "+=0.5")
            .to([targetDay, saveBtn], { clearProps: "all", duration: 0.1 });

          gsap.from(".philosophy-text", {
              scrollTrigger: {
                  trigger: "#philosophy",
                  start: "top 60%",
              },
              y: 40,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out"
          });

          gsap.to("#philosophy-bg", {
              scrollTrigger: {
                  trigger: "#philosophy",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
              },
              y: 100,
              ease: "none"
          });

          const protocolCards = gsap.utils.toArray('.protocol-card');

          protocolCards.forEach((card, index) => {
              if (index < protocolCards.length - 1) {
                  gsap.to(card, {
                      scrollTrigger: {
                          trigger: protocolCards[index + 1],
                          start: "top bottom",
                          end: "top top",
                          scrub: true,
                      },
                      scale: 0.9,
                      opacity: 0.5,
                      filter: "blur(10px)",
                      transformOrigin: "top center",
                      ease: "none"
                  });
              }
          });

          gsap.to("#laser-line", {
              y: 200,
              duration: 2,
              ease: "linear",
              repeat: -1,
              yoyo: true
          });

          const magneticBtns = document.querySelectorAll('.btn-magnetic');

          magneticBtns.forEach(btn => {
              btn.addEventListener('mousemove', (e) => {
                  const rect = btn.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;

                  gsap.to(btn, {
                      x: x * 0.2,
                      y: y * 0.2,
                      duration: 0.4,
                      ease: "power3.out"
                  });

                  const content = btn.querySelector('.btn-content');
                  if(content) {
                      gsap.to(content, {
                          x: x * 0.1,
                          y: y * 0.1,
                          duration: 0.4,
                          ease: "power3.out"
                      });
                  }
              });

              btn.addEventListener('mouseleave', () => {
                  gsap.to(btn, {
                      x: 0,
                      y: 0,
                      duration: 0.7,
                      ease: "elastic.out(1, 0.3)"
                  });

                  const content = btn.querySelector('.btn-content');
                  if(content) {
                      gsap.to(content, {
                          x: 0,
                          y: 0,
                          duration: 0.7,
                          ease: "elastic.out(1, 0.3)"
                      });
                  }
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-full flex items-center justify-between px-6 py-4 border border-transparent text-[#FAF8F5]" id="navbar">
<div className="font-sans uppercase text-sm tracking-tighter font-medium">
        TEMPO LUXE
      </div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-[#FAF8F5]/80">
<a className="hover:-translate-y-px hover:text-[#FAF8F5] transition-transform duration-300" href="#features">
          Artifacts
        </a>
<a className="hover:-translate-y-px hover:text-[#FAF8F5] transition-transform duration-300" href="#philosophy">
          Manifesto
        </a>
<a className="hover:-translate-y-px hover:text-[#FAF8F5] transition-transform duration-300" href="#protocol">
          Protocol
        </a>
</div>
<button className="btn-magnetic bg-[#C9A84C] text-[#0D0D12] px-6 py-2.5 rounded-full font-sans font-medium text-sm tracking-tight shadow-[0_0_20px_rgba(201,168,76,0.2)]">
<span className="btn-content">Allocate</span>
</button>
</nav>

<section className="relative h-[100dvh] w-full flex items-end bg-[#0D0D12] overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Dark Luxury Architectural Texture" className="w-full h-full object-cover opacity-60 scale-105 transform origin-center" id="hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-start">
<div className="gsap-hero-text overflow-hidden">
<h1 className="font-sans font-medium text-4xl md:text-6xl text-[#FAF8F5] tracking-tight leading-none mb-2">
            Luxury defines
          </h1>
</div>
<div className="gsap-hero-text overflow-hidden">
<h2 className="font-serif italic font-medium text-7xl md:text-8xl lg:text-9xl text-[#C9A84C] tracking-tight leading-[0.85] pr-8">
            Precision.
          </h2>
</div>
<div className="gsap-hero-fade mt-12 max-w-md">
<p className="font-mono text-xs text-[#FAF8F5]/70 leading-relaxed mb-8">
            Aura Chronos — precision timepieces forged from aerospace-grade
            materials. Engineered for those who bend time.
          </p>
<button className="btn-magnetic bg-[#FAF8F5] text-[#0D0D12] px-8 py-4 rounded-full font-sans font-medium text-sm tracking-tight hover:shadow-xl transition-all">
<span className="btn-content">
              Request Allocation
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto" id="features">
<div className="mb-20">
<span className="font-mono text-xs text-[#C9A84C] tracking-widest uppercase block mb-4">
          Functional Artifacts
        </span>
<h3 className="font-sans font-medium text-3xl md:text-5xl text-[#0D0D12] tracking-tight">
          Engineered without compromise.
        </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[500px] md:h-[450px]">

<div className="relative w-full h-full bg-[#FAF8F5] border border-[#2A2A35]/10 rounded-3xl shadow-sm p-8 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-500">
<div className="z-10">
<div className="w-10 h-10 rounded-full bg-[#0D0D12] flex items-center justify-center mb-6 text-[#C9A84C]">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-sans font-medium text-2xl text-[#0D0D12] tracking-tight mb-2">
              Micro-Calibrated
            </h4>
<p className="font-mono text-xs text-[#2A2A35]/70">
              Tolerances measured in sub-microns.
            </p>
</div>
<div className="relative h-48 w-full mt-8 flex justify-center items-end pb-4 perspective-1000">
<div className="shuffler-card absolute w-[80%] h-24 bg-white border border-[#2A2A35]/10 rounded-2xl shadow-lg flex items-center px-4 gap-4" style={{zIndex: '3', transform: 'translateY(0) scale(1)'}}>
<div className="w-8 h-8 rounded-full bg-[#2A2A35]/5 flex items-center justify-center font-mono text-xs">
                A
              </div>
<div className="flex-col">
<div className="h-2 w-16 bg-[#2A2A35]/20 rounded-full mb-2"></div>
<div className="h-2 w-10 bg-[#C9A84C]/40 rounded-full"></div>
</div>
</div>
<div className="shuffler-card absolute w-[80%] h-24 bg-white border border-[#2A2A35]/10 rounded-2xl shadow-lg flex items-center px-4 gap-4" style={{zIndex: '2', transform: 'translateY(-15px) scale(0.95)', opacity: '0.8'}}>
<div className="w-8 h-8 rounded-full bg-[#2A2A35]/5 flex items-center justify-center font-mono text-xs">
                B
              </div>
<div className="flex-col">
<div className="h-2 w-12 bg-[#2A2A35]/20 rounded-full mb-2"></div>
<div className="h-2 w-14 bg-[#2A2A35]/10 rounded-full"></div>
</div>
</div>
<div className="shuffler-card absolute w-[80%] h-24 bg-white border border-[#2A2A35]/10 rounded-2xl shadow-lg flex items-center px-4 gap-4" style={{zIndex: '1', transform: 'translateY(-30px) scale(0.9)', opacity: '0.6'}}>
<div className="w-8 h-8 rounded-full bg-[#2A2A35]/5 flex items-center justify-center font-mono text-xs">
                C
              </div>
<div className="flex-col">
<div className="h-2 w-20 bg-[#2A2A35]/20 rounded-full mb-2"></div>
<div className="h-2 w-8 bg-[#2A2A35]/10 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full bg-[#0D0D12] rounded-3xl shadow-xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50"></div>
<div className="z-10 flex justify-between items-start w-full">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center mb-6 text-[#C9A84C]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 bg-[#2A2A35]/50 rounded-full px-3 py-1">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></div>
<span className="font-mono text-xs text-[#FAF8F5] tracking-widest uppercase">
                Live Feed
              </span>
</div>
</div>
<div className="z-10 mb-auto mt-4">
<h4 className="font-sans font-medium text-2xl text-[#FAF8F5] tracking-tight mb-2">
              Obsidian Sapphire
            </h4>
<p className="font-mono text-xs text-[#FAF8F5]/50">
              Impenetrable structural integrity.
            </p>
</div>
<div className="bg-[#15151A] rounded-xl p-4 font-mono text-xs text-[#C9A84C]/80 h-32 overflow-hidden border border-[#2A2A35]/30">
<span className="text-[#2A2A35]/40">&gt;</span>
<span id="typewriter-text">S</span>
<span className="blinking-cursor w-1.5 h-3 inline-block bg-[#C9A84C] align-middle ml-1"></span>
</div>
</div>

<div className="relative w-full h-full bg-[#FAF8F5] border border-[#2A2A35]/10 rounded-3xl shadow-sm p-8 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-500">
<div className="z-10">
<div className="w-10 h-10 rounded-full bg-[#0D0D12] flex items-center justify-center mb-6 text-[#C9A84C]">
<iconify-icon className="text-xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-sans font-medium text-2xl text-[#0D0D12] tracking-tight mb-2">
              Biometric Tuning
            </h4>
<p className="font-mono text-xs text-[#2A2A35]/70">
              Adapts to your lifetime rhythm.
            </p>
</div>
<div className="relative h-40 w-full mt-4 bg-[#2A2A35]/5 rounded-xl border border-[#2A2A35]/10 p-4">
<div className="grid grid-cols-7 gap-1 h-full font-mono text-xs text-center text-[#2A2A35]/50">
<div>S</div>
<div>M</div>
<div>T</div>
<div>W</div>
<div>T</div>
<div>F</div>
<div>S</div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2 day-cell" id="target-day" style={{borderColor: 'rgb(201, 168, 76)', backgroundColor: 'rgb(201, 168, 76)'}}></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="bg-white rounded border border-[#2A2A35]/5 h-6 mt-2"></div>
<div className="col-span-7 mt-auto bg-[#0D0D12]/5 rounded-md h-6 flex items-center justify-center border border-[#2A2A35]/10" id="save-btn" style={{borderColor: 'rgb(201, 168, 76)', backgroundColor: 'rgba(201, 168, 76, 0.2)'}}>
<div className="w-12 h-1.5 bg-[#0D0D12]/20 rounded-full"></div>
</div>
</div>
<div className="absolute top-0 left-0 text-[#0D0D12] drop-shadow-md z-20 pointer-events-none" id="scheduler-cursor" style={{transform: 'translate(-20px, -20px)', opacity: '0'}}>
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3.5L11.5 21.5L13.5 14L21 12L4.5 3.5Z" fill="currentColor" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 w-full bg-[#0D0D12] overflow-hidden flex items-center min-h-[80vh]" id="philosophy">
<div className="absolute inset-0 z-0">
<img alt="Marble Texture" className="w-full h-[120%] object-cover opacity-10" id="philosophy-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
<p className="font-sans font-normal text-sm text-[#FAF8F5]/60 tracking-tight mb-8 philosophy-text">
          Most horology focuses on: mass replication.
        </p>
<h2 className="font-serif italic font-medium text-4xl md:text-6xl lg:text-8xl text-[#FAF8F5] tracking-tight leading-[1.1] philosophy-text">
          We focus on:
          <br/>
<span className="text-[#C9A84C] block mt-2">singular perfection.</span>
</h2>
</div>
</section>

<section className="relative bg-[#FAF8F5] text-[#0D0D12] pb-32 pt-20" id="protocol">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
<span className="font-mono text-xs text-[#0D0D12]/50 tracking-widest uppercase block mb-4">
          The Methodology
        </span>
<h3 className="font-sans font-medium text-3xl md:text-4xl text-[#0D0D12] tracking-tight">
          Three phases to eternity.
        </h3>
</div>
<div className="protocol-container max-w-4xl mx-auto px-6 relative">

<div className="protocol-card sticky top-24 w-full min-h-[25rem] bg-white border border-[#2A2A35]/10 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden mb-8 origin-top" style={{transformOrigin: '391.5px 0px', filter: 'none'}}>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="font-mono text-3xl md:text-4xl text-[#C9A84C] mb-4">
              01
            </span>
<h4 className="font-sans font-medium text-2xl md:text-3xl tracking-tight mb-4">
              Material Forging
            </h4>
<p className="font-mono text-xs text-[#2A2A35]/70 leading-relaxed max-w-sm">
              Raw aerospace titanium is exposed to thermal extremis, aligning
              molecular structures for absolute impact resistance.
            </p>
</div>
<div className="w-full md:w-1/2 h-full flex items-center justify-center relative min-h-[15rem]">
<svg className="w-64 h-64 text-[#0D0D12]/5 animate-[spin_20s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-dasharray="2 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="1"></circle>
<path d="M50 20 L50 80 M20 50 L80 50 M28 28 L72 72 M28 72 L72 28" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 border-t-2 border-[#C9A84C] rounded-full animate-spin"></div>
</div>
</div>
</div>

<div className="protocol-card sticky top-32 w-full min-h-[25rem] bg-[#0D0D12] text-[#FAF8F5] rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden mb-8 origin-top" style={{transformOrigin: '391.5px 0px', filter: 'none'}}>
<div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
<span className="font-mono text-3xl md:text-4xl text-[#C9A84C] mb-4">
              02
            </span>
<h4 className="font-sans font-medium text-2xl md:text-3xl tracking-tight mb-4">
              Acoustic Calibration
            </h4>
<p className="font-mono text-xs text-[#FAF8F5]/60 leading-relaxed max-w-sm">
              Every micro-gear is laser-scanned and acoustically matched to
              ensure a resonant frequency identical to absolute silence.
            </p>
</div>
<div className="w-full md:w-1/2 h-full flex items-center justify-center relative bg-[#111116] rounded-2xl overflow-hidden border border-[#2A2A35]/30 min-h-[15rem]">
<div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4 opacity-20">
<div className="col-span-8 row-span-8 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #FAF8F5 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
<div className="absolute top-0 left-0 w-full h-0.5 bg-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.8)]" id="laser-line"></div>
</div>
</div>

<div className="protocol-card sticky top-40 w-full min-h-[25rem] bg-[#1A1A24] border border-[#2A2A35]/50 text-[#FAF8F5] rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden mb-8 origin-top">
<div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
<span className="font-mono text-3xl md:text-4xl text-[#C9A84C] mb-4">
              03
            </span>
<h4 className="font-sans font-medium text-2xl md:text-3xl tracking-tight mb-4">
              Biometric Binding
            </h4>
<p className="font-mono text-xs text-[#FAF8F5]/60 leading-relaxed max-w-sm">
              The escapement mechanism is algorithmically offset to synchronize
              with the wearer's resting pulse baseline.
            </p>
</div>
<div className="w-full md:w-1/2 h-full flex items-center justify-center relative min-h-[15rem]">
<svg className="w-full h-32 text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]" fill="none" preserveaspectratio="none" viewbox="0 0 500 100">
<path className="ekg-path" d="M0,50 L150,50 L170,20 L190,80 L210,10 L230,90 L250,50 L500,50" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAF8F5] border-t border-[#2A2A35]/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20 flex flex-col items-center">
<h3 className="font-sans font-medium text-3xl md:text-5xl text-[#0D0D12] tracking-tight mb-8">
            Secure your allocation.
          </h3>
<div className="flex items-center gap-4 bg-[#0D0D12]/5 p-1 rounded-full border border-[#0D0D12]/10">
<button className="px-6 py-2 rounded-full font-mono text-xs tracking-wide bg-white shadow-sm text-[#0D0D12] transition-all">
              Standard
            </button>
<button className="px-6 py-2 rounded-full font-mono text-xs tracking-wide text-[#0D0D12]/50 hover:text-[#0D0D12] transition-all">
              Bespoke
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white border border-[#2A2A35]/10 rounded-3xl p-10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500 shadow-sm">
<h4 className="font-serif italic font-medium text-2xl text-[#0D0D12] tracking-tight mb-2">
              Initiate
            </h4>
<p className="font-mono text-xs text-[#2A2A35]/60 mb-8 border-b border-[#2A2A35]/10 pb-8">
              Introduction to precision.
            </p>
<ul className="font-mono text-xs text-[#0D0D12]/80 space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Base Titanium Chassis
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Standard Resonance
              </li>
<li className="flex items-center gap-3 text-[#0D0D12]/30">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                Biometric Tuning
              </li>
</ul>
<button className="w-full py-4 rounded-full border border-[#0D0D12]/20 font-sans font-medium text-sm text-[#0D0D12] hover:bg-[#0D0D12] hover:text-white transition-colors tracking-tight">
              Select Tier
            </button>
</div>

<div className="bg-[#0D0D12] border border-[#2A2A35]/30 rounded-3xl p-10 flex flex-col h-[105%] shadow-2xl relative z-10 transform scale-100 md:scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0D0D12] px-4 py-1 rounded-full font-mono text-xs tracking-widest uppercase font-medium">
              Flagship
            </div>
<h4 className="font-serif italic font-medium text-3xl text-[#FAF8F5] tracking-tight mb-2 mt-4">
              Vanguard
            </h4>
<p className="font-mono text-xs text-[#FAF8F5]/50 mb-8 border-b border-[#2A2A35]/50 pb-8">
              The uncompromising standard.
            </p>
<ul className="font-mono text-xs text-[#FAF8F5]/80 space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Forged Obsidian Chassis
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Absolute Silence Calibration
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Personal Biometric Binding
              </li>
</ul>
<button className="btn-magnetic w-full py-4 rounded-full bg-[#C9A84C] text-[#0D0D12] font-sans font-medium text-sm tracking-tight shadow-[0_0_20px_rgba(201,168,76,0.15)]">
<span className="btn-content">Acquire Now</span>
</button>
</div>

<div className="bg-white border border-[#2A2A35]/10 rounded-3xl p-10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500 shadow-sm">
<h4 className="font-serif italic font-medium text-2xl text-[#0D0D12] tracking-tight mb-2">
              Heritage
            </h4>
<p className="font-mono text-xs text-[#2A2A35]/60 mb-8 border-b border-[#2A2A35]/10 pb-8">
              For generational transfer.
            </p>
<ul className="font-mono text-xs text-[#0D0D12]/80 space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Platinum Matrix Core
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Quantum Resonance
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Multi-generational Tuning
              </li>
</ul>
<button className="w-full py-4 rounded-full border border-[#0D0D12]/20 font-sans font-medium text-sm text-[#0D0D12] tracking-tight hover:bg-[#0D0D12] hover:text-white transition-colors">
              Inquire
            </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0D0D12] text-[#FAF8F5] rounded-t-3xl md:rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 mt-[-2rem] relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-[#2A2A35]/30 pb-20">
<div className="md:col-span-2 flex flex-col items-start">
<div className="font-sans uppercase text-sm tracking-tighter font-medium mb-4 text-[#C9A84C]">
            Aura Chronos
          </div>
<p className="font-mono text-xs text-[#FAF8F5]/50 max-w-sm leading-relaxed mb-8">
            Precision timepieces forged from aerospace-grade materials. Built
            for the present, calibrated for eternity.
          </p>
<div className="flex items-center gap-3 bg-[#1A1A24] rounded-full px-4 py-2 border border-[#2A2A35]/50">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="font-mono text-xs tracking-widest uppercase text-[#FAF8F5]/80">
              System Operational
            </span>
</div>
</div>
<div className="flex flex-col gap-4 font-sans text-sm text-[#FAF8F5]/70">
<strong className="font-mono text-xs tracking-widest uppercase text-[#FAF8F5] mb-2">
            Explore
          </strong>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Artifacts
          </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Manifesto
          </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Methodology
          </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Allocations
          </a>
</div>
<div className="flex flex-col gap-4 font-sans text-sm text-[#FAF8F5]/70">
<strong className="font-mono text-xs tracking-widest uppercase text-[#FAF8F5] mb-2">
            Legal
          </strong>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
            Warranty Info
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-xs text-[#FAF8F5]/40">
<p>© 2024 Aura Chronos. All rights reserved.</p>
<p className="mt-2 md:mt-0">Calibrated in Geneva, Switzerland.</p>
</div>
</footer>



    </>
  );
}
