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



      // Initialize Icons
      lucide.createIcons();

      // 3D Background Animation Script
      const canvas = document.getElementById('bg-canvas');
      const ctx = canvas.getContext('2d');
      let width, height;

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      // Points for a simple 3D mesh (Abstract shape)
      const points = [];
      const numPoints = 40;

      for(let i=0; i<numPoints; i++) {
          points.push({
              x: (Math.random() - 0.5) * 800,
              y: (Math.random() - 0.5) * 800,
              z: (Math.random() - 0.5) * 800,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              vz: (Math.random() - 0.5) * 0.5
          });
      }

      let angle = 0;

      function animate() {
          ctx.clearRect(0, 0, width, height);

          // Center of screen
          const cx = width / 2;
          const cy = height / 2;

          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';

          angle += 0.002;

          // Rotate and Project points
          const projected = points.map(p => {
              // Rotate Y
              let x1 = p.x * Math.cos(angle) - p.z * Math.sin(angle);
              let z1 = p.z * Math.cos(angle) + p.x * Math.sin(angle);

              // Rotate X
              let y1 = p.y * Math.cos(angle * 0.5) - z1 * Math.sin(angle * 0.5);
              let z2 = z1 * Math.cos(angle * 0.5) + p.y * Math.sin(angle * 0.5);

              // Movement
              p.x += p.vx;
              p.y += p.vy;
              p.z += p.vz;

              // Boundaries
              if(Math.abs(p.x) > 500) p.vx *= -1;
              if(Math.abs(p.y) > 500) p.vy *= -1;
              if(Math.abs(p.z) > 500) p.vz *= -1;

              // Simple projection
              const scale = 600 / (600 + z2);
              return {
                  x: cx + x1 * scale,
                  y: cy + y1 * scale,
                  scale: scale
              };
          });

          // Draw connections
          ctx.beginPath();
          for(let i=0; i<projected.length; i++) {
              for(let j=i+1; j<projected.length; j++) {
                  const dist = Math.hypot(projected[i].x - projected[j].x, projected[i].y - projected[j].y);
                  if(dist < 150) {
                      ctx.moveTo(projected[i].x, projected[i].y);
                      ctx.lineTo(projected[j].x, projected[j].y);
                  }
              }
          }
          ctx.stroke();

          // Draw points
          for(let p of projected) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(100, 116, 139, ${p.scale * 0.8})`;
              ctx.fill();
          }

          requestAnimationFrame(animate);
      }

      animate();
    


      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');

        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        } else {
          menu.classList.add('hidden');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      }

      function closeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');

        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000;
                const start = performance.now();

                function step(currentTime) {
                  const elapsed = currentTime - start;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

                  counter.innerText = Math.floor(ease * target);

                  if (progress < 1) {
                    requestAnimationFrame(step);
                  } else {
                    counter.innerText = target;
                  }
                }
                requestAnimationFrame(step);
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        const container = document.querySelector('.counters-container');
        if (container) observer.observe(container);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" height="712" id="bg-canvas" width="1056"></canvas>

<div className="fixed top-0 left-0 w-full h-12 z-[60] border-b flex items-center justify-center px-2 sm:px-4 shadow-2xl bg-gradient-to-r from-[#020410] via-[#2563eb] to-[#020410] bg-[length:200%_200%] animate-gradient-xy border-white/10 shadow-lg shadow-blue-900/40">
<div className="flex items-center gap-1.5 sm:gap-6">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-white"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-white text-[10px] sm:text-sm font-medium tracking-wide whitespace-nowrap">
            Анализ 5 конкурентов
          </span>
</div>
<div className="hidden sm:block h-3 w-px bg-white/40"></div>
<span className="font-semibold text-[10px] sm:text-sm tracking-tight whitespace-nowrap text-white">
          10 000 ₽
        </span>
<button className="ml-1 sm:ml-2 bg-white text-blue-950 hover:bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] whitespace-nowrap" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<span className="sm:hidden">Заказать</span>
<span className="hidden sm:inline">Оставить заявку</span>
</button>
</div>
</div>
<nav className="fixed w-full z-50 border-b border-white/5 bg-[#020410]/80 backdrop-blur-md top-12">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-4 select-none cursor-pointer group" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">

<div className="relative w-11 h-11 flex-shrink-0 perspective-1000">

<div className="absolute inset-0 bg-[#3b82f6] rounded-md transform translate-y-1.5 -translate-x-1.5 group-hover:translate-x-[-8px] group-hover:translate-y-[8px] transition-transform duration-300 ease-out shadow-lg"></div>

<div className="absolute inset-0 bg-[#172554] rounded-md z-10 shadow-xl overflow-hidden group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 border border-blue-500/20">

<div className="absolute top-0 right-0 w-4 h-4 bg-[#3b82f6] rounded-bl-lg shadow-md z-20"></div>

<div className="absolute top-0 right-0 w-4 h-4 bg-black/20 blur-[2px] -translate-x-0.5 translate-y-0.5 z-10"></div>

<div className="absolute inset-0 flex items-center justify-center pb-0.5 pl-0.5 z-10">
<span className="font-manrope font-bold text-2xl text-white tracking-tighter flex items-baseline leading-none">
                  R
                  <span className="text-[13px] font-semibold ml-0.5 text-blue-200">
                    c
                  </span>
</span>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out z-30"></div>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-[24px] font-extrabold text-white leading-none font-manrope tracking-tight group-hover:text-blue-100 transition-colors">
              REGENTA
            </span>
<span className="text-[10px] text-slate-300 font-medium tracking-[0.35em] lowercase leading-tight font-manrope mt-1 group-hover:text-white transition-colors pl-0.5">
              consulting
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">
            Услуги
          </a>
<a className="hover:text-blue-400 transition-colors" href="#startups">
            Стартапам и новым компаниям
          </a>
<a className="hover:text-white transition-colors" href="#micro-products">
            Микро-продукты
          </a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Связаться
          </button>

<button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<svg className="w-6 h-6" fill="none" height="24" id="menu-icon-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="w-6 h-6 hidden" fill="none" height="24" id="menu-icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#020410]/95 backdrop-blur-xl border-b border-white/10" id="mobile-menu">
<div className="flex flex-col px-6 py-6 space-y-4">
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" href="#services" onclick="closeMobileMenu()">
            Услуги
          </a>
<a className="text-base font-medium text-slate-300 hover:text-blue-400 transition-colors py-2 border-b border-white/5" href="#startups" onclick="closeMobileMenu()">
            Стартапам и новым компаниям
          </a>
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" href="#micro-products" onclick="closeMobileMenu()">
            Микро-продукты
          </a>
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" href="#cases" onclick="closeMobileMenu()">
            Кейсы
          </a>
<button className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-3 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]" onclick="closeMobileMenu(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Связаться
          </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Консалтинг нового поколения
          </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Стратегии
            <br/>
<span className="text-slate-500">роста и масштаба</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-light">
            Мы помогаем бизнесу находить точки роста, оптимизировать процессы и
            выходить на новые рынки через экспертный анализ и внедрение
            системных решений.
          </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-white text-black px-8 py-4 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors shadow-xl shadow-white/5" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
              Обсудить проект
            </button>
<a className="px-8 py-4 rounded-lg text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2" href="#cases">
<span className="">Смотреть кейсы</span>
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</a>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-8 text-slate-500 counters-container">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">
<span className="counter" data-target="50">0</span>
                +
              </span>
<span className="text-xs">Успешных кейсов</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">
<span className="counter" data-target="300">0</span>
                %
              </span>
<span className="text-xs">Средний ROI проектов</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">
                -
                <span className="counter" data-target="40">0</span>
                %
              </span>
<span className="text-xs">Снижение CAC</span>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center items-center h-[600px] perspective-1000 relative">

<div className="absolute w-80 h-80 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse bg-blue-600/25"></div>
<div className="absolute w-64 h-64 rounded-full blur-[80px] top-1/3 left-1/2 -translate-x-1/2 animate-float bg-indigo-600/25" style={{animationDelay: '1s'}}></div>
<div className="relative w-full h-full flex items-center justify-center animate-float">

<div className="w-96 h-96 border border-blue-500/10 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border border-white/5 rounded-full rotate-45 scale-110"></div>
<div className="absolute inset-0 border border-blue-500/10 rounded-full -rotate-12 scale-125 border-dashed opacity-50"></div>

<div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full backdrop-blur-sm border border-white/10 shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
            Наши компетенции
          </h2>
<div className="h-1 w-20 bg-blue-600 rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-3d group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-blue-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
<svg className="lucide lucide-crosshair w-6 h-6" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Стратегический консалтинг
            </h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Разработка долгосрочных стратегий развития, поиск новых точек
              роста и оптимизация бизнес-модели.
            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Анализ рынка
              </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Масштабирование
              </li>
</ul>
</div>

<div className="card-3d group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-purple-900/20 flex items-center justify-center mb-6 text-purple-400">
<svg className="lucide lucide-megaphone w-6 h-6" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
<path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
<path d="M8 6v8"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Маркетинг</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Комплексный аудит и построение маркетинговой стратегии.
              Позиционирование бренда и лидогенерация.
            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                Go-to-market
              </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                Бренд-стратегия
              </li>
</ul>
</div>

<div className="card-3d group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-emerald-900/20 flex items-center justify-center mb-6 text-emerald-400">
<svg className="lucide lucide-settings-2 w-6 h-6" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17H5"></path>
<path d="M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Операционный консалтинг
            </h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Настройка бизнес-процессов, внедрение управленческого учета и
              повышение эффективности команды.
            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                Оптимизация
              </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                Автоматизация
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-y bg-gradient-to-b from-[#020410] via-blue-950/20 to-[#020410] border-white/5 pt-24 pb-24" id="startups">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2 block">
              Focus Area
            </span>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight">
              Стартапам и компаниям на старте
            </h2>
</div>
<p className="text-sm text-slate-400 max-w-md">
            Специализированные решения для быстрого запуска и привлечения
            инвестиций. От идеи до реализации
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-colors group">
<div className="flex items-start justify-between mb-8">
<div className="p-3 bg-blue-600 rounded-lg text-white">
<svg className="lucide lucide-rocket w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20">
                Launchpad
              </span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">
              Упаковка продукта
            </h3>
<p className="text-slate-400 mb-8 leading-relaxed">
              Поможем сформулировать ценность, создать Pitch Deck и
              подготовиться к переговорам с инвесторами.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-black/40 border border-white/5">
<div className="font-medium text-white mb-1">Бизнес план</div>
<div className="text-xs text-slate-500">
                  Стратегия запуска с детальными расчётами
                </div>
</div>
<div className="bg-black/40 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="font-medium text-white mb-1">Юнит экономика</div>
<div className="text-xs text-slate-500">Расчет сходимости</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-gradient-to-bl from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-colors flex flex-col justify-between">
<div className="">
<div className="flex items-start justify-between mb-8">
<div className="p-3 bg-indigo-600 rounded-lg text-white">
<svg className="lucide lucide-line-chart w-6 h-6" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4">
                Анализ ниши и конкурентов
              </h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                Глубокий ресерч рынка, чтобы найти "голубой океан" и избежать
                ошибок на старте.
              </p>
</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/30 blur-2xl rounded-full"></div>
<div className="relative z-10 flex justify-between items-center">
<div className="">
<h4 className="text-white font-medium">
                    Мини-аудит 5 конкурентов
                  </h4>
<p className="text-xs text-indigo-200 mt-1">Быстрый старт</p>
</div>
<span className="text-lg font-semibold text-white">10 000 ₽</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="micro-products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
            Микро-продукты
          </h2>
<p className="text-slate-400 text-sm">
            Точечные решения конкретных бизнес-задач с фиксированной ценой
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-2xl bg-[#080c1a] border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col">
<div className="mb-4 text-blue-500">
<svg className="lucide lucide-search w-8 h-8 stroke-1" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Анализ 5 конкурентов
            </h3>
<p className="text-xs text-slate-400 mb-6 flex-1">
              Разбор сильных и слабых сторон, каналов продаж и воронок.
            </p>
<div className="flex border-white/5 border-t pt-4 items-center justify-between">
<span className="text-lg font-semibold text-white">10 000 ₽</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-[#080c1a] border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col">
<div className="mb-4 text-purple-500">
<svg className="lucide lucide-pie-chart w-8 h-8 stroke-1" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Мини-аудит маркетинга
            </h3>
<p className="text-xs text-slate-400 mb-6 flex-1">
              Экспресс-оценка текущих рекламных кампаний и конверсии сайта.
            </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-lg font-semibold text-white">15 000 ₽</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-[#080c1a] border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col">
<div className="mb-4 text-emerald-500">
<svg className="lucide lucide-map w-8 h-8 stroke-1" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
<path d="M15 5.764v15"></path>
<path d="M9 3.236v15"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Мини-аудит стратегии
            </h3>
<p className="text-xs text-slate-400 mb-6 flex-1">
              Проверка целей компании на реалистичность и поиск узких мест.
            </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-lg font-semibold text-white">20 000 ₽</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-[#080c1a] border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col">
<div className="mb-4 text-orange-500">
<svg className="lucide lucide-clock w-8 h-8 stroke-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              1-часовая консультация
            </h3>
<p className="text-xs text-slate-400 mb-6 flex-1">
              Разбор конкретного бизнес-кейса с экспертом Regenta Cons.
            </p>
<div className="flex border-white/5 border-t pt-4 items-center justify-between">
<span className="text-lg font-semibold text-white">4 000 ₽</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="cases">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16">
<span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2 block">
            Портфолио
          </span>
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
            Реализованные кейсы
          </h2>
<p className="text-slate-400 text-sm max-w-2xl">
            Мы верим в результаты, которые можно измерить. Ниже представлены
            детальные разборы некоторых наших проектов с полным описанием
            проблематики и достигнутых показателей.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group rounded-3xl bg-[#080c1a] border border-white/5 hover:border-blue-500/30 overflow-hidden flex flex-col">
<div className="flex flex-col bg-gradient-to-b from-blue-900/20 to-transparent h-48 pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute top-6 right-6 p-2 bg-white/10 rounded-lg backdrop-blur-md">
<svg className="lucide lucide-trending-up w-5 h-5 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div className="text-xs font-bold text-blue-400 tracking-wider mb-2">
                Аренда строительной техники
              </div>
<h3 className="text-xl font-medium text-white">
                Рост прибыли на 50%
              </h3>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex-1 space-y-6">
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Проблема
                  </div>
<p className="leading-relaxed text-sm text-slate-300">
                    Прибыль компании — менее 1,5% от выручки. Отсутствие
                    горизонтальных коммуникаций между сотрудниками офиса. Не
                    определены зоны ответственности каждого сотрудника.
                    Неконтролируемые расходы в поле: ГСМ, ремонт, обслуживание.
                    Неэффективная структура и отсутствие единых процессов.
                  </p>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Решение
                  </div>
<ul className="list-disc list-inside marker:text-blue-500 text-sm text-slate-300 space-y-2">
<li className="">
                      Провели контроль и настройку всех расходных статей (ГСМ,
                      ремонты, обслуживание)
                    </li>
<li className="">
                      Проанализировали и оптимизировали ФОТ без его уменьшения
                    </li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-2xl font-semibold text-white">+50%</div>
<div className="text-[10px] uppercase text-slate-500">
                    Рост прибыли
                  </div>
</div>
<div className="">
<div className="text-2xl font-semibold text-white">-22%</div>
<div className="text-[10px] uppercase text-slate-500">
                    расходов
                  </div>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-[#080c1a] border border-white/5 hover:border-purple-500/30 overflow-hidden flex flex-col">
<div className="flex flex-col bg-gradient-to-b from-purple-900/20 to-transparent h-48 pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute top-6 right-6 p-2 bg-white/10 rounded-lg backdrop-blur-md">
<svg className="lucide lucide-briefcase w-5 h-5 text-purple-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
<div className="text-xs font-bold text-purple-400 tracking-wider mb-2">
                eCommerce
              </div>
<h3 className="text-xl font-medium text-white" style={{}}>
                Стратегия и отчетность
              </h3>
</div>
<div className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="space-y-6 flex-1">
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Проблема
                  </div>
<p className="leading-relaxed text-sm text-slate-300">
                    Падение продаж ключевых SKU на 20–25%; неэффективное
                    распределение рекламного бюджета (отрицательный ROI);
                    отсутствие корректной юнит-экономики и модели прибыльности;
                    низкая прозрачность данных: фактическая прибыль по товарам
                    не отслеживалась.
                  </p>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Решение
                  </div>
<ul className="text-sm text-slate-300 space-y-2 list-disc list-inside marker:text-purple-500">
<li className="">
                      Сформирована новая ассортиментная стратегия с выделением
                      высокомаржинальных позиций
                    </li>
<li className="">
                      Внедрена система управленческой отчётности по ключевым
                      метрикам (CAC, ROMI, маржа, рентабельность продаж)
                    </li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-2xl font-semibold text-white">-27%</div>
<div className="text-[10px] uppercase text-slate-500">
                    Снижение рекламных расходов
                  </div>
</div>
<div className="">
<div className="text-2xl font-semibold text-white">+38</div>
<div className="text-[10px] uppercase text-slate-500">
                    К выручке
                  </div>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-[#080c1a] border border-white/5 hover:border-emerald-500/30 overflow-hidden flex flex-col">
<div className="flex flex-col bg-gradient-to-b from-emerald-900/20 to-transparent h-48 pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute top-6 right-6 p-2 bg-white/10 rounded-lg backdrop-blur-md">
<svg className="lucide lucide-truck w-5 h-5 text-emerald-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<div className="text-xs font-bold text-emerald-400 tracking-wider mb-2">
                RETAIL
              </div>
<h3 className="text-xl font-medium text-white">
                Оптимизация логистики
              </h3>
</div>
<div className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex-1 space-y-6">
<div className="">
<div className="uppercase text-xs text-slate-500 tracking-wider mb-1">
                    Проблема
                  </div>
<p className="leading-relaxed text-sm text-slate-300">
                    Неэффективное планирование логистики (низкая загрузка
                    транспорта, неупорядоченные маршруты); • разрозненной
                    структурой складских процессов и высокими трудозатратами
                    персонала; • дублированием управленческих функций в офисе; •
                    отсутствием интегрированной системы отчётности по складу и
                    поставкам; • регулярными срывами поставок и ухудшением
                    клиентского сервиса.
                  </p>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Решение
                  </div>
<ul className="text-sm text-slate-300 space-y-2 list-disc list-inside marker:text-emerald-500">
<li className="">
                      Снижение операционных издержек на 17,6 млн ₽ в год
                    </li>
<li className="">
                      Внедрение прозрачной системы отчётности и регламентов
                    </li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-2xl font-semibold text-white">17,6 млн</div>
<div className="text-[10px] uppercase text-slate-500">
                    годовая экономия
                  </div>
</div>
<div className="">
<div className="text-2xl font-semibold text-white">41%</div>
<div className="text-[10px] uppercase text-slate-500">
                    Снижение количества срывов поставок
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">
            Готовы к кратному росту?
          </h2>
<p className="text-lg text-slate-400 max-w-xl mx-auto">
            Давайте обсудим ваши задачи. Мы не продаем воздух, мы предлагаем
            конкретные решения для масштабирования вашего бизнеса.
          </p>
</div>
<div className="max-w-xl mx-auto">
<form action="https://formspree.io/f/xblnyvra" className="space-y-6" method="POST">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-400 mb-2">Имя *</label>
<input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors" name="name" placeholder="Ваше имя" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">
                  Компания
                </label>
<input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors" name="company" placeholder="Название компании" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-400 mb-2">Email *</label>
<input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">Телефон</label>
<input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors" name="phone" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm text-slate-400 mb-2">
                Интересующая услуга
              </label>
<select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none cursor-pointer" name="service" style={{backgroundImage: 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%2394a3b8%27%3e%3cpath strokeLinecap=%27round%27 strokeLinejoin=%27round%27 strokeWidth=%272%27 d=%27M19 9l-7 7-7-7%27/%3e%3c/svg%3e\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem'}}>
<option className="bg-[#080c1a]" value="">Выберите услугу</option>
<option className="bg-[#080c1a]" value="strategy">
                  Стратегический консалтинг
                </option>
<option className="bg-[#080c1a]" value="marketing">
                  Маркетинг
                </option>
<option className="bg-[#080c1a]" value="operations">
                  Операционный консалтинг
                </option>
<option className="bg-[#080c1a]" value="startup">
                  Упаковка для стартапа
                </option>
<option className="bg-[#080c1a]" value="micro">
                  Микро-продукт
                </option>
<option className="bg-[#080c1a]" value="other">Другое</option>
</select>
</div>
<div className="">
<label className="block text-sm text-slate-400 mb-2">
                Сообщение *
              </label>
<textarea className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none" name="message" placeholder="Опишите вашу задачу или вопрос..." required="" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
<button className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]" type="submit">
<div className="-inset-3 transition-opacity duration-200 group-hover:opacity-40 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-xl absolute blur-lg"></div>
<span className="flex items-center gap-2 relative">
                  Отправить заявку
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</span>
</button>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm font-medium text-slate-300 w-full border-white/10 border rounded-xl pt-4 pr-6 pb-4 pl-6" href="https://wa.me/message/VKJRG7Q2WFO6D1" target="_blank">
                Написать в WhatsApp
              </a>
</div>
</form>
</div>
<div className="mt-12 flex justify-center gap-8 opacity-50">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs text-slate-400">Быстрый ответ</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<span className="text-xs text-slate-400">Под NDA</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#010208] border-white/5 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2"></div>
<div className="text-xs text-slate-600">
          © ИП Амбарцумян Е.С ИНН 772577794810
        </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"></a>
<a className="hover:text-white transition-colors text-slate-500" href="#"></a>
<a className="hover:text-white transition-colors text-slate-500" href="https://t.me/Regenta_consulting"></a>
</div>
</div>
</footer>





    </>
  );
}
