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



      // SERVICE SCROLL LOGIC
      window.scrollServices = function(direction) {
        const container = document.getElementById('services-scroll');
        if(container) {
          const scrollAmount = 350;
          if(direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }

      // 2. DIGITAL READINESS LOGIC
      const readinessIds = ['readiness-infra', 'readiness-cloud', 'readiness-auto', 'readiness-data', 'readiness-sec'];
      function calculateReadiness() {
          let total = 0;
          total += parseInt(document.getElementById('readiness-infra')?.value || 0);
          total += parseInt(document.getElementById('readiness-cloud')?.value || 0);
          total += parseInt(document.getElementById('readiness-data')?.value || 0);
          total += parseInt(document.getElementById('readiness-sec')?.value || 0);
          
          let autoVal = parseInt(document.getElementById('readiness-auto')?.value || 0);
          total += autoVal * 3; // weight automation up to 30

          // Update text label for automation slider
          let autoLabel = "Low";
          if(autoVal > 3) autoLabel = "Medium";
          if(autoVal > 7) autoLabel = "High";
          const autoValDisplay = document.getElementById('readiness-auto-val');
          if(autoValDisplay) autoValDisplay.innerText = autoLabel;

          total = Math.min(total, 100);

          const disp = document.getElementById('readiness-total');
          const bar = document.getElementById('readiness-bar');
          if(disp) disp.innerText = total;
          if(bar) bar.style.width = total + '%';
      }
      readinessIds.forEach(id => {
          const el = document.getElementById(id);
          if(el) el.addEventListener('input', calculateReadiness);
      });
      calculateReadiness();

      // 3. GROWTH ANALYZER LOGIC
      const growthIds = ['growth-team', 'growth-stack', 'growth-rev', 'growth-global'];
      function calculateGrowth() {
          let score = 0;
          score += parseInt(document.getElementById('growth-team')?.value || 0);
          score += parseInt(document.getElementById('growth-stack')?.value || 0);
          score += parseInt(document.getElementById('growth-rev')?.value || 0);
          if(document.getElementById('growth-global')?.checked) score += 15;

          score = Math.min(score, 100);

          const disp = document.getElementById('growth-score-display');
          const bar = document.getElementById('growth-score-bar');
          const risk = document.getElementById('growth-risk');
          
          if(disp) disp.innerText = score;
          if(bar) bar.style.width = score + '%';
          
          if(risk) {
             if(score > 80) { risk.innerText = "Low"; risk.className = "text-emerald-500 font-medium"; }
             else if(score > 50) { risk.innerText = "Moderate"; risk.className = "text-amber-500 font-medium"; }
             else { risk.innerText = "High"; risk.className = "text-red-500 font-medium"; }
          }
      }
      growthIds.forEach(id => {
          const el = document.getElementById(id);
          if(el) el.addEventListener('change', calculateGrowth);
      });
      calculateGrowth();

      // 4. BUSINESS IMPACT ESTIMATOR
      const slider = document.getElementById('budget-slider');
      const display = document.getElementById('budget-value');
      
      if(slider) {
          slider.addEventListener('input', (e) => {
              const val = parseInt(e.target.value);
              display.innerText = val + '%';
              // Update generic results based on value (simulated interaction)
              const container = document.getElementById('results-container');
              if(val > 40) {
                 container.querySelector('h4').innerText = "60% Time Saved";
                 container.querySelectorAll('h4')[1].innerText = "2.5x Revenue Uplift";
              } else if (val > 20) {
                 container.querySelector('h4').innerText = "35% Time Saved";
                 container.querySelectorAll('h4')[1].innerText = "1.8x Revenue Uplift";
              } else {
                 container.querySelector('h4').innerText = "15% Time Saved";
                 container.querySelectorAll('h4')[1].innerText = "1.2x Revenue Uplift";
              }
          });
      }
    


      window.addEventListener('load', () => {
        const loader = document.getElementById('initial-loader');
        const logo = document.getElementById('loader-logo');
        const text = document.getElementById('loader-text');

        setTimeout(() => {
          if(text) text.classList.add('visible');
          setTimeout(() => {
            if(text) text.classList.remove('visible');
            if(text) text.classList.add('hidden');
            setTimeout(() => {
              if(logo) logo.classList.add('dock-logo');
              setTimeout(() => {
                if(loader) loader.classList.add('fade-out');
                setTimeout(() => {
                  if(loader) loader.style.display = 'none';
                }, 1000);
              }, 1500);
            }, 1000);
          }, 1500);
        }, 500);
      });
    


      function toggleMenu() {
          const menu = document.getElementById('nav-dropdown');
          if (menu) {
              const isHidden = menu.classList.contains('opacity-0');
              if (isHidden) {
                  menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
                  menu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
              } else {
                  menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
                  menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
              }
          }
      }
      document.addEventListener('click', function(event) {
          const menu = document.getElementById('nav-dropdown');
          const button = document.querySelector('button[onclick="toggleMenu()"]');
          if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
              menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
              menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const logo = document.getElementById('header-logo-link');
        const handleScroll = () => {
          if (window.scrollY > 50) {
            logo?.classList.add('scroll-hidden');
          } else {
            logo?.classList.remove('scroll-hidden');
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px' });

        document.querySelectorAll('.section-reveal').forEach(section => {
          observer.observe(section);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="initial-loader" style={{display: 'none'}}>
<div className="relative flex flex-col items-center justify-center p-4">
<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-xl shadow-violet-500/20" id="loader-logo">
<iconify-icon className="text-white text-6xl" icon="solar:programming-linear"></iconify-icon>
</div>
<p id="loader-text">Initializing Enterprise Systems...</p>
</div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
<div className="flex items-center justify-between pointer-events-auto">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#" id="header-logo-link">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
<iconify-icon className="text-white text-xl" icon="solar:programming-linear"></iconify-icon>
</div>
<span className="font-jakarta font-medium text-lg tracking-tight text-slate-900">Atlantech</span>
</a>
<div className="flex items-center gap-4 relative">
<a className="hidden sm:inline-flex items-center justify-center shadow-violet-600/20 hover:bg-violet-700 transition text-sm font-medium text-white font-geist bg-violet-600 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="#consultation">
            Book Strategy Call
          </a>
<div className="relative">
<button className="flex hover:scale-105 transition-transform group z-50 bg-white/90 w-12 h-12 border-slate-200 border rounded-full relative shadow-sm backdrop-blur-md items-center justify-center" onclick="toggleMenu()">
<iconify-icon className="w-5 h-5 text-slate-600 group-hover:text-slate-900" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute right-0 top-full mt-4 w-64 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl p-2 transform opacity-0 scale-95 pointer-events-none transition-all duration-200 origin-top-right flex flex-col gap-1" id="nav-dropdown">
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#services" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:layers-linear"></iconify-icon> Core Capabilities
              </a>
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#tools" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon> Impact Estimator
              </a>
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#crs-wizard" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear"></iconify-icon> Readiness Assessment
              </a>
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#aus-calculator" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon> Growth Analyzer
              </a>
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#destinations" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon> Global Delivery
              </a>
<a className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition font-medium flex items-center gap-3" href="#expert" onclick="toggleMenu()">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Leadership
              </a>
</div>
</div>
</div>
</div>
</header>

<main className="section-card relative pt-20 pb-24 mt-32 overflow-hidden bg-white/60">
<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-10 animate-enter ring-1 ring-slate-100">
<iconify-icon className="text-violet-500" icon="solar:cpu-linear"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-slate-600 uppercase">
            AI • Cloud • Engineering
          </span>
</div>
<h1 className="leading-[1.1] animate-enter delay-100 sm:text-7xl md:text-8xl text-5xl font-medium text-slate-900 tracking-tight font-jakarta mb-8">
          Engineering Intelligent<br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
            Enterprises.
          </span>
</h1>
<p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 leading-relaxed animate-enter delay-200">
          Atlantech Global partners with ambitious enterprises to design, build, and scale AI-driven, cloud-native digital ecosystems that deliver measurable business impact.
        </p>
<div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-enter delay-300">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-white font-medium shadow-lg shadow-violet-500/25 hover:opacity-90 transition-all hover:scale-105" href="#crs-wizard">
<span>Start Your Transformation</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-white backdrop-blur-xl px-8 py-4 text-slate-900 font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-all hover:scale-105" href="#consultation">
<span>Book Strategy Consultation</span>
</a>
</div>

<a className="fixed bottom-6 right-6 z-50 md:hidden bg-violet-600 text-white p-4 rounded-full shadow-2xl shadow-violet-500/30 ring-1 ring-white/20" href="#consultation">
<iconify-icon className="text-2xl" icon="solar:calendar-add-linear"></iconify-icon>
</a>

<div className="mt-24 relative mx-auto max-w-5xl animate-enter delay-300 perspective-1000">
<div className="relative z-10 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200 p-2 shadow-xl ring-1 ring-black/5 rotate-x-10 hover:rotate-x-0 transition-transform duration-1000 ease-out transform-style-3d group">
<div className="rounded-xl overflow-hidden bg-slate-900 aspect-[21/9] relative border border-slate-800 shadow-inner">
<img alt="Cloud Infrastructure" className="w-full h-full object-cover opacity-20 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-40" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2034&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

<div className="absolute top-6 left-6 flex gap-3">
<div className="px-3 py-1 rounded-full bg-violet-500/10 backdrop-blur-md border border-violet-500/20 text-[10px] font-mono font-medium text-violet-300 tracking-wider flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                  SYSTEM_OPTIMIZED
                </div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
<div className="text-3xl font-jakarta font-medium text-white tracking-tight flex items-center justify-center gap-3">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> Enterprise Cloud OS
                  </div>
<div className="text-blue-400 font-mono text-xs mt-2">
                    NODE_NETWORK: STABLE • LATENCY: 12ms
                  </div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end border-t border-white/10 bg-black/20 backdrop-blur-md">
<div>
<div className="text-5xl font-jakarta font-medium text-white mb-1 tracking-tighter">
                    99.99<span className="text-2xl text-violet-400">%</span>
</div>
<div className="text-xs text-slate-400 font-mono uppercase tracking-widest">
                    Infrastructure Uptime
                  </div>
</div>
<div className="text-right">
<div className="text-3xl font-jakarta font-medium text-white mb-1 tracking-tighter">
                    2.4<span className="text-xl text-blue-400">PB</span>
</div>
<div className="text-xs text-slate-400 font-mono uppercase tracking-widest">
                    Data Processed
                  </div>
</div>
</div>
</div>
</div>

<div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block z-20 animate-float-slow">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-slate-200 w-56">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 border border-violet-100">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-jakarta">
                    Threat Blocked
                  </div>
<div className="text-[10px] text-slate-500 font-mono">
                    AI SecOps • 2s ago
                  </div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-full animate-pulse"></div>
</div>
</div>
</div>
<div className="absolute -right-12 top-1/3 hidden lg:block z-20 animate-float-delayed">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-slate-200 w-56">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-jakarta">
                    +42% Efficiency
                  </div>
<div className="text-[10px] text-slate-500 font-mono">
                    Process Automation
                  </div>
</div>
</div>
<div className="flex gap-1.5 h-8 items-end">
<div className="h-[40%] w-2 bg-blue-200 rounded-sm"></div>
<div className="h-[60%] w-2 bg-blue-300 rounded-sm"></div>
<div className="h-[50%] w-2 bg-blue-200 rounded-sm"></div>
<div className="h-[80%] w-2 bg-blue-400 rounded-sm"></div>
<div className="h-[100%] w-2 bg-blue-600 rounded-sm shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-10 border-t border-slate-200 animate-enter delay-300">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-medium">Trusted by innovative enterprises worldwide</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-2xl text-slate-900" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-3xl text-slate-900" icon="simple-icons:amazonaws"></iconify-icon>
<iconify-icon className="text-3xl text-slate-900" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-3xl text-slate-900" icon="simple-icons:googlecloud"></iconify-icon>
<iconify-icon className="text-3xl text-slate-900" icon="simple-icons:databricks"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 px-2">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tight text-slate-900 animate-enter">
              Our Core Capabilities
            </h2>
<p className="mt-4 text-slate-500 animate-enter delay-100">
              End-to-end digital solutions designed for scalable enterprise growth. Hover over to explore.
            </p>
</div>
<div className="flex gap-3">
<button className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm" onclick="scrollServices('left')">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm" onclick="scrollServices('right')">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-2 no-scrollbar" id="services-scroll">

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[520px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-3xl">

<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="Digital" className="w-full h-full object-cover opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-slate-900">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 backdrop-blur-md border border-slate-200 mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-violet-600">Strategy</span>
</div>
<h3 className="text-3xl font-jakarta font-medium leading-tight mb-2">Digital Transformation</h3>
<p className="text-slate-600 text-sm mb-6">Modernize legacy systems into scalable digital ecosystems.</p>
<div className="inline-flex items-center text-sm font-medium border-b border-slate-300 pb-0.5 text-slate-600 group-hover:text-violet-600 transition-colors">
                    Explore Solutions <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
<iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Transformation</h4>
<p className="text-xs text-slate-500">Enterprise Modernization</p>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-slate-600 leading-relaxed">We assess your current infrastructure and design a comprehensive roadmap to migrate legacy monolithic systems to agile, cloud-native architectures.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Legacy System Migration</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Process Digitalization</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Change Management IT</li>
</ul>
</div>
<a className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition shadow-sm" href="#consultation">
                  Discuss Strategy
                </a>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[520px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="Code" className="w-full h-full object-cover opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-slate-900">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 backdrop-blur-md border border-slate-200 mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-blue-600">Development</span>
</div>
<h3 className="text-3xl font-jakarta font-medium leading-tight mb-2">Product Engineering</h3>
<p className="text-slate-600 text-sm mb-6">Build high-performance digital products from strategy to deployment.</p>
<div className="inline-flex items-center text-sm font-medium border-b border-slate-300 pb-0.5 text-slate-600 group-hover:text-blue-600 transition-colors">
                    Explore Solutions <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:code-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Engineering</h4>
<p className="text-xs text-slate-500">Full-Cycle Development</p>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-slate-600 leading-relaxed">Deliver exceptional user experiences with scalable, secure, and maintainable custom software applications designed for enterprise needs.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex gap-2 items-center"><iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Custom SaaS Development</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> API &amp; Integration Design</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Enterprise Mobile Apps</li>
</ul>
</div>
<a className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition shadow-sm" href="#consultation">
                  Discuss Product
                </a>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[520px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="AI" className="w-full h-full object-cover opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-slate-900">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 backdrop-blur-md border border-violet-100 mb-4 shadow-sm">
<span className="text-xs font-medium uppercase tracking-widest text-violet-700">Intelligence</span>
</div>
<h3 className="text-3xl font-jakarta font-medium leading-tight mb-2">AI &amp; Automation</h3>
<p className="text-slate-600 text-sm mb-6">Intelligent systems that reduce cost and improve operational efficiency.</p>
<div className="inline-flex items-center text-sm font-medium border-b border-slate-300 pb-0.5 text-slate-600 group-hover:text-violet-600 transition-colors">
                    Explore Solutions <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">AI Solutions</h4>
<p className="text-xs text-slate-500">Machine Learning &amp; RPA</p>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-slate-600 leading-relaxed">Embed cognitive capabilities into your workflows. We deploy custom LLMs, predictive models, and robotic process automation to multiply workforce output.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Generative AI Integration</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Intelligent Process Automation</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-violet-600" icon="solar:check-circle-linear"></iconify-icon> Predictive Analytics Models</li>
</ul>
</div>
<a className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition shadow-sm" href="#consultation">
                  Discuss Automation
                </a>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[520px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="Cloud" className="w-full h-full object-cover opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-slate-900">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 backdrop-blur-md border border-slate-200 mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-cyan-600">Infrastructure</span>
</div>
<h3 className="text-3xl font-jakarta font-medium leading-tight mb-2">Cloud Architecture</h3>
<p className="text-slate-600 text-sm mb-6">Resilient, scalable, and secure cloud environments.</p>
<div className="inline-flex items-center text-sm font-medium border-b border-slate-300 pb-0.5 text-slate-600 group-hover:text-cyan-600 transition-colors">
                    Explore Solutions <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
<iconify-icon className="text-xl" icon="solar:cloud-network-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Cloud Systems</h4>
<p className="text-xs text-slate-500">AWS, Azure, GCP</p>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-slate-600 leading-relaxed">Design and deploy multi-cloud or hybrid architectures optimized for high availability, compliance, and cost-efficiency.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Cloud Migration Strategy</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> DevOps &amp; CI/CD Pipelines</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> FinOps &amp; Cost Optimization</li>
</ul>
</div>
<a className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition shadow-sm" href="#consultation">
                  Discuss Cloud
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="tools">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden">
<div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"></div>
<div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"></div>
<div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-slate-200 text-slate-600 shadow-sm">
<iconify-icon className="text-violet-600" icon="solar:calculator-minimalistic-linear"></iconify-icon>
                ROI Simulation Tool
              </div>
<h2 className="text-3xl md:text-5xl font-jakarta font-medium tracking-tight text-slate-900">
                Business Impact Estimator
              </h2>
<p className="text-slate-500 max-w-sm">
                Understand the measurable value of digital transformation. Adjust the target optimization to see projected impact.
              </p>
<div className="bg-white rounded-2xl p-6 ring-1 ring-slate-200 shadow-sm backdrop-blur-sm">
<div className="flex justify-between items-end mb-4">
<label className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                    Target Cost Optimization
                  </label>
<span className="text-2xl font-medium text-violet-600 font-jakarta" id="budget-value">
                    25%
                  </span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="budget-slider" max="60" min="5" step="5" type="range" value="25"/>
<div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
<span>5%</span>
<span>Conservative</span>
<span>60%</span>
</div>
</div>
</div>
<div id="results-container">

<div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 shadow-xl animate-enter">
<div className="flex items-center gap-3 mb-6">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                    Projected Outcomes
                  </span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 ring-1 ring-slate-200 transition cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 font-jakarta">
                        35% Time Saved
                      </h4>
<p className="text-xs text-slate-500">
                        Via Process Automation
                      </p>
</div>
<iconify-icon className="ml-auto w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 ring-1 ring-slate-200 transition cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 font-jakarta">
                        1.8x Revenue Uplift
                      </h4>
<p className="text-xs text-slate-500">
                        Via Data-Driven Insights
                      </p>
</div>
<iconify-icon className="ml-auto w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="crs-wizard">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
<div>
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tight text-slate-900 animate-enter">
              Digital Readiness Assessment
            </h2>
<p className="mt-2 text-slate-500 animate-enter delay-100">
              Evaluate your organization's transformation maturity in real-time.
            </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 ring-1 ring-violet-200 shadow-sm animate-enter">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Enterprise Matrix
          </span>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 rounded-3xl bg-white/80 backdrop-blur-md p-8 ring-1 ring-slate-200 shadow-sm">
<div className="mb-10">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 block">
                Step 01: Core Architecture
              </span>
<div className="grid md:grid-cols-2 gap-8">
<div>
<label className="text-sm font-medium text-slate-700 mb-3 block">
                    Infrastructure Type
                  </label>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-violet-500 outline-none appearance-none shadow-sm" id="readiness-infra">
<option value="10">Legacy On-Premise</option>
<option selected="" value="20">Hybrid Environment</option>
<option value="30">Cloud Native (Multi-cloud)</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-3 block">
                    Cloud Adoption Level
                  </label>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-violet-500 outline-none appearance-none shadow-sm" id="readiness-cloud">
<option value="5">Siloed / Experimental</option>
<option selected="" value="15">Partial Migration (IaaS)</option>
<option value="25">Advanced (PaaS/SaaS)</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 block">
                Step 02: Intelligence &amp; Operations
              </span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<div className="flex justify-between">
<label className="text-[10px] uppercase text-slate-500 font-medium">Automation Level</label>
<span className="text-[10px] text-violet-600" id="readiness-auto-val">Medium</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="readiness-auto" max="10" min="0" type="range" value="5"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-slate-500 font-medium block">Data Strategy</label>
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-violet-500 outline-none appearance-none shadow-sm" id="readiness-data">
<option value="5">Fragmented Silos</option>
<option selected="" value="10">Data Warehouse</option>
<option value="15">AI-Ready Data Lake</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-slate-500 font-medium block">Security Posture</label>
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-violet-500 outline-none appearance-none shadow-sm" id="readiness-sec">
<option value="5">Perimeter Basic</option>
<option selected="" value="15">Zero-Trust Ready</option>
</select>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white/90 p-8 ring-1 ring-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600 rounded-full blur-[60px] opacity-10 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 ring-1 ring-slate-100">
<iconify-icon className="text-violet-600 text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-jakarta mb-1 text-slate-900">
                Transformation Score
              </h3>
<p className="text-slate-500 text-sm">
                Current Enterprise Maturity Index.
              </p>
</div>
<div className="relative z-10 py-8">
<div className="flex items-end gap-2 mb-4">
<span className="text-6xl font-medium tracking-tighter font-jakarta text-slate-900" id="readiness-total">65</span>
<span className="text-lg text-slate-400 mb-2">
                  / 100
                </span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-700 shadow-sm" id="readiness-bar" style={{width: '65%'}}></div>
</div>
</div>
<a className="relative z-10 w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20 transition-all font-medium text-sm flex items-center justify-center gap-2" href="#consultation">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Download Strategic Roadmap
            </a>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="aus-calculator">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
<div>
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tight text-slate-900 animate-enter">
              Enterprise Growth Analyzer
            </h2>
<p className="mt-2 text-slate-500 animate-enter delay-100">
              Analyze your scalability based on current operational metrics.
            </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200 shadow-sm animate-enter">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon> AI Insights Engine
          </span>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="rounded-3xl bg-white/80 backdrop-blur-md p-8 ring-1 ring-slate-200 shadow-sm">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 block">
                Operational Inputs
              </span>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">
                    Engineering Team Size
                  </label>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 outline-none appearance-none shadow-sm" id="growth-team">
<option value="10">1 - 50</option>
<option selected="" value="20">51 - 200</option>
<option value="30">200+</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">
                    Core Tech Stack
                  </label>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 outline-none appearance-none shadow-sm" id="growth-stack">
<option value="10">Monolithic Architecture</option>
<option selected="" value="20">Microservices</option>
<option value="25">Serverless / Edge</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">
                    Annual Revenue Range
                  </label>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 outline-none appearance-none shadow-sm" id="growth-rev">
<option value="10">$5M - $20M</option>
<option selected="" value="20">$20M - $100M</option>
<option value="30">$100M+</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-sm">
<input className="w-5 h-5 rounded border-slate-300 bg-white text-blue-600 focus:ring-blue-500" id="growth-global" type="checkbox"/>
<label className="text-sm text-slate-700 select-none" htmlFor="growth-global">
                    Multi-region Deployment Active
                  </label>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 rounded-3xl bg-white text-slate-900 p-8 shadow-xl overflow-hidden relative border border-slate-200">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 backdrop-blur-md">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-jakarta mb-1">
                  Growth Potential
                </h3>
<p className="text-slate-500 text-sm mb-8">
                  Scalability index based on industry benchmarks.
                </p>
<div className="flex items-end gap-2 mb-4">
<span className="text-7xl font-medium tracking-tighter font-jakarta text-slate-900" id="growth-score-display">75</span>
<span className="text-lg text-slate-400 mb-3">
                    / 100
                  </span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-8">
<div className="h-full bg-blue-500 rounded-full transition-all duration-700 shadow-sm" id="growth-score-bar" style={{width: '75%'}}></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Bottleneck Risk</span>
<span className="text-amber-500 font-medium" id="growth-risk">Moderate</span>
</div>
</div>
<a className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2" href="#consultation">
                  Request Custom Strategy
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="destinations">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-jakarta font-medium text-slate-900 tracking-tight">
            Global Delivery. Enterprise Impact.
          </h2>
<p className="mt-2 text-slate-500">
            Supporting businesses across industries with scalable digital infrastructure globally.
          </p>
</div>
<div className="relative max-w-2xl mx-auto">
<div className="relative w-full aspect-square md:w-[450px] md:h-[450px] mx-auto rounded-full bg-slate-50 overflow-hidden shadow-xl ring-1 ring-slate-200">
<div className="globe-track h-full items-center">
<div className="w-1/2 h-full relative shrink-0 flex items-center justify-center p-12">
<svg className="w-full h-auto fill-slate-200 stroke-slate-300 stroke-[1.5]" viewbox="0 0 1000 500">
<path className="" d="M150,120 Q180,90 220,130 T300,200 T180,350 Z"></path>
<path className="" d="M450,100 Q500,80 550,120 T600,250 T480,280 Z"></path>
<path d="M700,100 Q800,80 850,150 T800,300 T680,280 Z"></path>
<circle cx="220" cy="130" fill="#7C3AED" r="10"></circle>
<circle cx="550" cy="120" fill="#2563EB" r="15"></circle>
<circle cx="850" cy="150" fill="#7C3AED" r="12"></circle>
<line opacity="0.5" stroke="#7C3AED" stroke-dasharray="5,5" x1="220" x2="550" y1="130" y2="120"></line>
<line opacity="0.5" stroke="#2563EB" stroke-dasharray="5,5" x1="550" x2="850" y1="120" y2="150"></line>
</svg>
<div className="absolute top-[25%] left-[20%] group">
<div className="w-3 h-3 bg-violet-500 rounded-full animate-ping-slow absolute"></div>
<div className="w-3 h-3 bg-violet-500 rounded-full relative shadow-[0_0_10px_#7C3AED]"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-slate-200 shadow-md">
                    North America <span className="text-violet-600 ml-1">US-East</span>
</div>
</div>
<div className="absolute top-[45%] left-[55%] group">
<div className="w-3 h-3 bg-blue-500 rounded-full animate-ping-slow absolute"></div>
<div className="w-3 h-3 bg-blue-500 rounded-full relative shadow-[0_0_10px_#2563EB]"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-slate-200 shadow-md">
                    Europe <span className="text-blue-600 ml-1">EU-Central</span>
</div>
</div>
</div>
<div className="w-1/2 h-full relative shrink-0 flex items-center justify-center p-12">
<svg className="w-full h-auto fill-slate-200 stroke-slate-300 stroke-[1.5]" viewbox="0 0 1000 500">
<path className="" d="M150,120 Q180,90 220,130 T300,200 T180,350 Z"></path>
<path className="" d="M450,100 Q500,80 550,120 T600,250 T480,280 Z"></path>
<path d="M700,100 Q800,80 850,150 T800,300 T680,280 Z"></path>
</svg>
</div>
</div>
<div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/80 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="expert">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -left-10 -bottom-10 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl"></div>
<div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl rotate-1 hover:rotate-0 transition-all duration-700 ring-1 ring-slate-200 aspect-[3/4]">
<img alt="CEO" className="w-full h-full object-cover mix-blend-luminosity opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&amp;w=1632&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-8">
<p className="text-slate-900 font-jakarta text-xl font-medium">David Chen</p>
<p className="text-violet-600 text-sm">Chief Technology Officer</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
<iconify-icon className="text-violet-600" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Proven Expertise
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-jakarta font-medium text-slate-900 tracking-tight leading-tight">
                Strategic Leadership.
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Built for Scale.</span>
</h2>
</div>
<p className="text-lg text-slate-500 leading-relaxed">
              Atlantech Global is led by experienced technology strategists and enterprise architects dedicated to delivering scalable, intelligent digital systems that drive competitive advantage in modern markets.
            </p>
<div className="grid sm:grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-violet-600 text-xl" icon="solar:server-path-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Enterprise Architecture</h4>
<p className="text-sm text-slate-500">Robust System Design</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:cloud-network-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">AI &amp; Cloud Strategy</h4>
<p className="text-sm text-slate-500">Future-proof Tech</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-600 text-xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Product Innovation</h4>
<p className="text-sm text-slate-500">Rapid Development</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:earth-linear"></iconify-icon>
</div>
<div>
<h4 className="font-jakarta font-medium text-slate-900">Global Delivery</h4>
<p className="text-sm text-slate-500">Distributed Agile Teams</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card pt-24 pb-24 px-6 lg:px-8 section-reveal" id="consultation">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200 shadow-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-violet-600 mb-4">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">
                  Let's Talk Strategy
                </span>
</div>
<h3 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-slate-900 mb-4">
                Schedule a Consultation
              </h3>
<p className="text-slate-500 mb-8">
                Let's discuss your transformation roadmap and identify key growth opportunities for your enterprise infrastructure.
              </p>
<div className="bg-violet-50 border border-violet-100 p-4 rounded-xl flex items-start gap-4 mb-6">
<div className="mt-1 bg-violet-600 text-white rounded-full p-1"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<div>
<h4 className="text-violet-900 font-medium text-sm">Complimentary Digital Audit</h4>
<p className="text-xs text-violet-700/70 mt-1">Book a call today and receive a high-level architecture assessment free of charge.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-slate-50/50 ring-1 ring-slate-200 p-6 md:p-8">
<form className="space-y-4" id="strategy-form" onsubmit="event.preventDefault(); alert('Strategy Call Requested!');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full rounded-xl bg-white border-0 ring-1 ring-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none transition-shadow shadow-sm" placeholder="First Name" required="" type="text"/>
<input className="w-full rounded-xl bg-white border-0 ring-1 ring-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none transition-shadow shadow-sm" placeholder="Last Name" required="" type="text"/>
</div>
<input className="w-full rounded-xl bg-white border-0 ring-1 ring-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none transition-shadow shadow-sm" placeholder="Work Email" required="" type="email"/>
<input className="w-full rounded-xl bg-white border-0 ring-1 ring-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none transition-shadow shadow-sm" placeholder="Company Name" required="" type="text"/>
<div className="relative">
<select className="w-full bg-white border-0 ring-1 ring-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-violet-500 outline-none appearance-none shadow-sm" required="">
<option disabled="" selected="" value="">Primary Area of Interest</option>
<option value="cloud">Cloud Migration</option>
<option value="ai">AI &amp; Automation</option>
<option value="product">Custom Product Engineering</option>
<option value="data">Data Strategy</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<textarea className="w-full rounded-xl bg-white border-0 ring-1 ring-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none transition-shadow resize-none shadow-sm" placeholder="Brief project scope or current challenges..." rows="3"></textarea>
<button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:opacity-90 transition shadow-lg shadow-violet-500/20" type="submit">
                  Request Consultation
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-[95%] xl:max-w-7xl mx-auto my-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl text-slate-500 py-16 shadow-xl overflow-hidden px-6 lg:px-8 section-reveal ring-1 ring-slate-200 border-none">
<div className="lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:programming-linear"></iconify-icon>
</div>
<span className="text-slate-900 font-jakarta font-medium tracking-tight">
                Atlantech Global
              </span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-8">
              Engineering intelligent enterprises through scalable cloud architectures and AI-driven automation.
            </p>

<div>
<h4 className="text-sm font-medium text-slate-900 mb-3">Subscribe to Enterprise Insights</h4>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="bg-slate-50 border-0 ring-1 ring-slate-200 rounded-lg px-4 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-violet-500 outline-none w-full" placeholder="Email address" type="email"/>
<button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition" type="submit">Join</button>
</form>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-4">Capabilities</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-violet-600 transition" href="#">Digital Transformation</a></li>
<li><a className="hover:text-violet-600 transition" href="#">Product Engineering</a></li>
<li><a className="hover:text-violet-600 transition" href="#">Cloud Architecture</a></li>
<li><a className="hover:text-violet-600 transition" href="#">AI &amp; Automation</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-4">Company</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-violet-600 transition" href="#">About Us</a></li>
<li><a className="hover:text-violet-600 transition" href="#">Case Studies</a></li>
<li><a className="hover:text-violet-600 transition" href="#">Insights &amp; Blog</a></li>
<li><a className="hover:text-violet-600 transition" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-4">Connect</h3>
<div className="flex gap-3">
<a className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-violet-600 hover:text-white transition-all text-slate-500 ring-1 ring-slate-200" href="#">
<iconify-icon icon="mdi:linkedin" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-violet-600 hover:text-white transition-all text-slate-500 ring-1 ring-slate-200" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-violet-600 hover:text-white transition-all text-slate-500 ring-1 ring-slate-200" href="#">
<iconify-icon icon="mdi:github" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2024 Atlantech Global. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-900 transition" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
