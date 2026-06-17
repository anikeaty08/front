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



                    (function () {
                      const canvas = document.getElementById('healthChart');
                      if (!canvas) return;
                      const ctx = canvas.getContext('2d');

                      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                      const activityBase = [6500, 8200, 7800, 9500, 7200, 11000, 8900];
                      const sleepBase = [7.5, 6.8, 8.1, 7.2, 7.8, 8.5, 7.0];

                      function makeBarGradient(colorTop, colorBottom, area) {
                        const g = ctx.createLinearGradient(0, area.top, 0, area.bottom);
                        g.addColorStop(0, colorTop);
                        g.addColorStop(1, colorBottom);
                        return g;
                      }

                      let chart = null;
                      let gradients = null;

                      function initChart() {
                        if (chart) {
                          chart.destroy();
                        }

                        chart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels,
                            datasets: [
                              {
                                type: 'bar',
                                label: 'Steps',
                                data: activityBase,
                                backgroundColor: (c) => {
                                  const {chartArea} = c.chart;
                                  if (!chartArea) return '#3b82f6';
                                  if (!gradients) gradients = {};
                                  if (!gradients.activity) gradients.activity = makeBarGradient('#60a5fa', '#2563eb', chartArea);
                                  return gradients.activity;
                                },
                                borderRadius: 6,
                                barPercentage: 0.5,
                                animation: {
                                  duration: 1500,
                                  easing: 'easeOutQuart'
                                }
                              },
                              {
                                type: 'line',
                                label: 'Sleep (hrs)',
                                data: sleepBase,
                                yAxisID: 'y2',
                                borderColor: '#10b981',
                                tension: 0.4,
                                pointRadius: 3,
                                pointBackgroundColor: '#fff',
                                borderWidth: 2,
                                animation: {
                                  duration: 2000,
                                  easing: 'easeOutSine'
                                }
                              }
                            ]
                          },
                          options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                              x: { grid: { display: false }, ticks: { color: '#64748b', font: {size: 10} } },
                              y: { display: false },
                              y2: { display: false }
                            }
                          }
                        });
                      }

                      initChart();
                      setInterval(initChart, 6000); 
                    })();
                  


            window.updateStep = function(step) {
              document.querySelectorAll('[id^="btn-step-"]').forEach(btn => {
                btn.className = 'px-5 py-2 text-slate-500 hover:text-slate-800 text-sm font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer';
                const numSpan = btn.querySelector('span:first-child');
                if (numSpan) {
                   numSpan.className = 'w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs';
                }
              });

              const activeBtn = document.getElementById('btn-step-' + step);
              if (activeBtn) {
                activeBtn.className = 'px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 transition-all duration-300 cursor-default border border-slate-200';
                const activeNumSpan = activeBtn.querySelector('span:first-child');
                if (activeNumSpan) {
                   activeNumSpan.className = 'font-bold';
                }
              }

              document.querySelectorAll('.step-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
              });
              document.querySelectorAll('.step-visual').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
              });

              const activeContent = document.getElementById('content-step-' + step);
              const activeVisual = document.getElementById('visual-step-' + step);

              if (activeContent) {
                 activeContent.classList.remove('hidden');
                 activeContent.classList.add('block');
                 activeContent.style.opacity = '0';
                 setTimeout(() => activeContent.style.opacity = '1', 50);
              }
              if (activeVisual) {
                 activeVisual.classList.remove('hidden');
                 activeVisual.classList.add('block');
              }
            };
          


              (function() {
                            const testimonials = [{
                                name: "Emily Roberts",
                                title: "Patient since 2021",
                                quote: "\"I've never experienced healthcare this seamless. The portal is so easy to use, and my doctor knew my entire history before I even sat down. It finally feels like they care about my time.\"",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                              },
                              {
                                name: "David Chen",
                                title: "Cardiology Patient",
                                quote: "\"After my surgery, the remote monitoring tools gave me incredible peace of mind. Whenever I had a question, my care team responded through the app within minutes.\"",
                                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80"
                              },
                              {
                                name: "Dr. Amanda Torres",
                                title: "Pediatrician",
                                quote: "\"As a physician, the integrated records system saves me hours every week. I can focus on interacting with the child and parents instead of staring at a screen trying to find lab results.\"",
                                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                              }
                            ];

                            let currentIndex = 0;
                            let isAnimating = false;

                            const avatarEl = document.getElementById('ts-avatar');
                            const contentEl = document.getElementById('ts-content-wrapper');
                            const quoteEl = document.getElementById('ts-quote');
                            const nameEl = document.getElementById('ts-name');
                            const titleEl = document.getElementById('ts-title');
                            const prevBtn = document.getElementById('ts-prev-btn');
                            const nextBtn = document.getElementById('ts-next-btn');

                            function updateTestimonial(index, direction) {
                              if (isAnimating) return;
                              isAnimating = true;

                              contentEl.style.opacity = '0';
                              contentEl.style.transform = direction === 'next' ? 'translateX(-20px)' : 'translateX(20px)';
                              avatarEl.style.opacity = '0';
                              avatarEl.style.transform = 'scale(0.95)';

                              setTimeout(() => {
                                const t = testimonials[index];
                                quoteEl.textContent = t.quote;
                                nameEl.textContent = t.name;
                                titleEl.textContent = t.title;
                                avatarEl.src = t.image;

                                contentEl.style.transition = 'none';
                                contentEl.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';

                                void contentEl.offsetWidth;

                                contentEl.style.transition = 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)';
                                contentEl.style.opacity = '1';
                                contentEl.style.transform = 'translateX(0)';

                                avatarEl.style.opacity = '1';
                                avatarEl.style.transform = 'scale(1)';

                                isAnimating = false;
                              }, 300);
                            }

                            if (prevBtn && nextBtn) {
                              prevBtn.addEventListener('click', () => {
                                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                                updateTestimonial(currentIndex, 'prev');
                              });

                              nextBtn.addEventListener('click', () => {
                                currentIndex = (currentIndex + 1) % testimonials.length;
                                updateTestimonial(currentIndex, 'next');
                              });
                            }
                          })();
            
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
      

<canvas height="2618" id="three-canvas" style={{width: '2080px', height: '1309px'}} width="4160"></canvas>

<header className="z-10 relative">
<div className="flex w-full max-w-[1500px] mx-auto items-center justify-between pt-8 px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="select-none flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white">
<iconify-icon icon="solar:health-bold" width="20"></iconify-icon>
</div>
<div className="md:text-2xl md:text-slate-900 text-xl font-semibold tracking-tight">
            Erdem Health
          </div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-blue-600" href="#">Services</a>
<a className="transition-colors hover:text-blue-600" href="#">Doctors</a>
<a className="transition-colors hover:text-blue-600" href="#">Locations</a>
<a className="transition-colors hover:text-blue-600" href="#">Patient Portal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium transition-colors text-slate-600 hover:text-blue-600" href="#">
            Sign in
          </a>
<button aria-label="Open menu" className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-transparent rounded-full p-[2px] relative items-center drop-shadow-sm">
<span className="z-0 inline-flex items-center justify-center leading-[1] font-semibold tracking-tight rounded-full px-5 py-2.5 relative transition-colors text-white bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </span>
</button>
</div>
</div>
</header>

<main className="z-10 relative">

<section className="relative pt-12 pb-16 md:pt-20 md:pb-24" id="hero">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="grid grid-cols-12 gap-6 lg:gap-10">

<div className="col-span-12 lg:col-span-7 pt-8 md:pt-14">
<div className="mb-6 md:mb-8 flex items-center gap-2">
<div className="h-px w-8 bg-blue-500"></div>
<span className="font-medium tracking-wide uppercase text-xs text-blue-600">
                  Next-Generation Healthcare
                </span>
</div>
<h1 className="[text-wrap:balance] leading-[1.05] text-[10vw] sm:text-5xl md:text-6xl lg:text-[85px] xl:text-[95px] font-semibold tracking-tight text-slate-900">
                Modern healthcare,
                <br className="hidden sm:block"/>
                designed around
                <span className="font-semibold text-blue-600">you</span>
                .
              </h1>
<div className="mt-12 max-w-2xl">
<p className="xl:text-lg text-xl tracking-tight leading-relaxed text-slate-600">
                  Erdem Health combines compassionate care with advanced technology.
                  Manage appointments, view records, and consult with top specialists—all from one platform.
                </p>
<div className="flex flex-wrap mt-10 gap-x-4 gap-y-4">
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r to-cyan-500 rounded-full px-[2px] py-[2px] relative shadow-lg shadow-blue-500/30 items-center from-blue-600">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative text-white bg-blue-600">
<span className="z-10 relative">Find a Doctor</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/20">
<iconify-icon height="20" icon="solar:user-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</span>
</button>
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform rounded-full p-[2px] relative ring-1 shadow-sm items-center bg-white ring-slate-200 hover:ring-slate-300">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold tracking-tight rounded-full py-3.5 px-6 relative transition-colors text-slate-700 hover:text-slate-900">
<span className="z-10 relative">Patient Portal</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl ring-1 bg-slate-100 ring-slate-200">
<iconify-icon height="20" icon="solar:shield-user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 pt-8 md:pt-14 flex items-center justify-center">
<style>
                @keyframes floatInfinite {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                @keyframes heartbeat {
                  0%, 100% { transform: scale(1); }
                  10%, 30% { transform: scale(1.1); }
                  20% { transform: scale(1.2); }
                }
                @keyframes fillProgress {
                  0% { width: 0%; }
                  100% { width: 85%; }
                }
              </style>
<div className="w-full max-w-lg relative drop-shadow-2xl">

<div className="-top-10 -right-8 sm:w-[260px] z-20 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute shadow-xl bg-white border-slate-200" style={{animation: 'floatInfinite 6s ease-in-out infinite'}}>
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-red-500 bg-red-50">
<iconify-icon icon="solar:heart-pulse-linear" style={{animation: 'heartbeat 2s infinite'}} width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold border bg-green-50 text-green-600 border-green-100">
                      Normal
                    </div>
</div>
<div className="mt-4">
<div className="flex justify-between items-end mb-1">
<h4 className="text-slate-500 text-xs font-medium tracking-tight uppercase">
                        Resting Heart Rate
                      </h4>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">68</span>
<span className="text-sm text-slate-500">bpm</span>
</div>
<p className="text-[11px] mt-2 flex items-center gap-1 text-slate-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                      Updated 2 mins ago
                    </p>
</div>
</div>

<div className="group overflow-hidden transition-all duration-500 border shadow-2xl rounded-2xl relative bg-white border-slate-200">
<div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 bg-blue-50"></div>
<div className="pt-6 pr-6 pb-6 pl-6 relative z-10">

<div className="flex mb-6 items-center justify-between border-b pb-4 border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 shadow-sm bg-slate-200 border-white">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;q=80"/>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h3>
<span className="text-[11px] text-slate-500">Patient ID: #EH-8492</span>
</div>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 transition-colors bg-slate-50 hover:bg-slate-100">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upcoming Appointment</h4>
<div className="rounded-xl p-4 border relative overflow-hidden bg-blue-50/50 border-blue-100">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-3">
<div className="">
<h5 className="text-sm font-semibold text-slate-900">Cardiology Checkup</h5>
<p className="text-xs mt-1 flex items-center gap-1 text-slate-600">
<iconify-icon icon="solar:user-linear"></iconify-icon>
                              Dr. Michael Chen
                            </p>
</div>
<div className="rounded shadow-sm px-2 py-1 text-center border bg-white border-slate-100">
<div className="text-[10px] text-red-500 font-bold uppercase">Oct</div>
<div className="text-lg font-bold leading-none text-slate-900">24</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mt-4 rounded-lg p-2 border bg-white/60 border-blue-50">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                            10:30 AM
                          </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Main Campus, Wing B
                          </span>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Wellness Score</span>
<span className="text-xs font-bold text-blue-600">85/100</span>
</div>
<div className="w-full rounded-full h-2 overflow-hidden bg-slate-100">
<div className="bg-gradient-to-r h-2 rounded-full from-blue-400 to-green-400" style={{width: '85%', animation: 'fillProgress 1.5s ease-out forwards'}}></div>
</div>
</div>
</div>
<div className="mt-6">
<button className="w-full text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md bg-slate-900 hover:bg-slate-800 text-white">
                        View Full Records
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-10 border-y border-slate-200 bg-white" id="partners">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="text-center mb-8">
<p className="uppercase text-xs font-semibold tracking-wider text-slate-400">
              Trusted by leading healthcare providers
            </p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 pt-2 pb-2 items-center" style={{width: 'max-content'}}>
<div className="flex gap-16 shrink-0 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter font-bricolage text-slate-800">
                  City General
                </span>
<span className="text-xl font-semibold tracking-tighter font-merriweather flex items-center gap-2 text-slate-800">
<iconify-icon className="text-blue-600" icon="solar:shield-cross-bold"></iconify-icon>
                  Mercy Care
                </span>
<span className="text-xl font-normal tracking-tighter font-instrument-serif text-slate-800">
                  Apex Health
                </span>
<span className="text-xl font-semibold tracking-tighter font-playfair text-slate-800">
                  St. Jude's
                </span>
<span className="text-xl font-bold tracking-tighter text-slate-800">
                  Summit Medical
                </span>
<span className="text-xl font-medium tracking-tighter flex items-center gap-1 text-slate-800">
<iconify-icon className="text-red-500" icon="solar:pulse-bold"></iconify-icon>
                  Vitality Group
                </span>
</div>
<div className="flex gap-16 shrink-0 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter font-bricolage text-slate-800">
                  City General
                </span>
<span className="text-xl font-semibold tracking-tighter font-merriweather flex items-center gap-2 text-slate-800">
<iconify-icon className="text-blue-600" icon="solar:shield-cross-bold"></iconify-icon>
                  Mercy Care
                </span>
<span className="text-xl font-normal tracking-tighter font-instrument-serif text-slate-800">
                  Apex Health
                </span>
<span className="text-xl font-semibold tracking-tighter font-playfair text-slate-800">
                  St. Jude's
                </span>
<span className="text-xl font-bold tracking-tighter text-slate-800">
                  Summit Medical
                </span>
<span className="text-xl font-medium tracking-tighter flex items-center gap-1 text-slate-800">
<iconify-icon className="text-red-500" icon="solar:pulse-bold"></iconify-icon>
                  Vitality Group
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="features">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">

<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-dm-sans tracking-tight font-light text-slate-200">
                  01
                </span>
<div className="w-px xl:bg-blue-200 h-16"></div>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-dm-sans tracking-tight font-light text-slate-900">
                  Engineered for
                  <span className="font-medium font-dm-sans tracking-tight text-slate-900">
                    Patient Outcomes
                  </span>
</h2>
<p className="text-xl max-w-3xl font-dm-sans tracking-tight font-light text-slate-600">
                  From initial consultation to ongoing treatment, we seamlessly connect data,
                  doctors, and patients to provide holistic care without the friction.
                </p>
</div>

<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-105 border shadow-sm font-sans bg-white text-slate-700 hover:bg-slate-50 border-slate-200">
                  Explore Services
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-fr lg:gap-8 gap-x-6 gap-y-6">

<div className="group transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 border shadow-sm rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16 hover:border-blue-200 bg-white border-slate-200">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-48 h-48 rounded-full absolute blur-3xl bg-blue-50"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="overflow-hidden border rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative group-hover:border-blue-200 transition-all duration-500 bg-slate-50 border-slate-200">

<div className="flex items-center gap-3 mb-4 relative z-10">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-sm text-slate-800">
                          Smart Booking
                        </span>
</div>

<div className="space-y-3 relative z-10 text-sm">
<div className="p-3 rounded-lg border shadow-sm bg-white border-slate-100 text-slate-600">
<div className="font-medium mb-1 text-slate-800">Select Specialty</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-xs rounded-md border bg-blue-50 text-blue-600 border-blue-100">Cardiology</span>
<span className="px-2 py-1 text-slate-500 text-xs rounded-md bg-slate-100">Neurology</span>
</div>
</div>
<div className="p-3 rounded-lg border shadow-sm bg-white border-slate-100">
<div className="flex justify-between items-center text-xs text-slate-500 mb-2">
<span className="">Available Slots</span>
<span className="text-blue-500">Today</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="text-center py-1.5 border rounded text-xs line-through border-slate-200 text-slate-400">09:00</div>
<div className="text-center py-1.5 border rounded text-xs font-medium cursor-pointer border-blue-200 bg-blue-50 text-blue-700">10:30</div>
<div className="text-center py-1.5 border rounded text-xs cursor-pointer border-slate-200 text-slate-600">11:00</div>
</div>
</div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">
                  Smart Triage &amp; Booking
                </h3>
<p className="leading-relaxed mb-4 text-slate-600">
                  Intelligent scheduling that matches your symptoms with the right specialist, minimizing wait times and ensuring prompt care.
                </p>
<div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform text-blue-600">
                  Book Now
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 border shadow-sm rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16 hover:border-blue-200 bg-white border-slate-200">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-48 h-30 rounded-full absolute blur-3xl bg-cyan-50"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="overflow-hidden border rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative group-hover:border-cyan-200 transition-all duration-500 bg-slate-50 border-slate-200">

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-100 text-cyan-700">
<iconify-icon icon="solar:notes-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-sm text-slate-800">
                            Clinical Notes
                          </span>
</div>
</div>

<div className="space-y-2 relative z-10 text-xs">
<div className="flex items-center gap-3 p-2 rounded-lg border text-slate-500 bg-slate-100 border-slate-200">
<iconify-icon icon="solar:history-linear"></iconify-icon>
                           Patient reported mild chest discomfort during exercise.
                        </div>
<div className="flex justify-center text-slate-300">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border shadow-sm bg-white border-cyan-100 text-slate-700">
<iconify-icon className="mt-0.5 text-cyan-600" icon="solar:stethoscope-linear" width="16"></iconify-icon>
<div className="">
<span className="font-medium block mb-1 text-slate-900">Updated Assessment</span>
                            Scheduled ECG and stress test. Prescribed sublingual nitroglycerin PRN. Follow-up in 2 weeks.
                          </div>
</div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">
                  Integrated Health Records
                </h3>
<p className="leading-relaxed mb-4 text-slate-600">
                  A unified view of your medical history, lab results, and prescriptions, accessible to you and your care team instantly.
                </p>
<div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform text-blue-600">
                  View Portal
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-2 group transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 border shadow-sm rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16 hover:border-blue-200 bg-white border-slate-200">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-48 h-48 rounded-full absolute blur-3xl bg-blue-50"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="group overflow-hidden transition-all duration-500 border rounded-2xl relative shadow-sm hover:shadow-md bg-white border-slate-200">
<div className="">
<style>
    @frames aura-fade-slide {
      0% { opacity: 0; transform: translate(px); }
      100% { opacity 1; transform: translateY(0); }
    }
    @keyframes aura-pulse-dot {
      0 100% transform: scale(1); box-shadow: 0 00 0 rgba(34,197,94,0.18); }
      50% { transform:(1.); box-shadow: 0 0 0 8px rgba(34,197,94,0); }
    }
    @keyframes aura-glow-line {
      0%, 100% { opacity: 0.55; }
      % { opacity: 1;    }
  </style>
<div className="flex justify-between items-center mb-4" font="" sm:text-lg="" text-base="" text-slate-900="" tracking-tight"="">
 Care Team Collaboration   h4&gt;
    <span className="text bg-green- px2 py-1 rounded-full font-medium text-green-700" style={{animation: 'aura-p-dot 2.2s ease-out infinite'}}>Active Casespan&gt;
  </span></div>
<div className="overflow-hidden pt-4 pr-4 pb-4 pl-4 relative bg-slate-50">
<div className="flex justify-between items-center mb-4">
<h4 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
      Care Team Collaboration
    </h4>
<span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700">Active Case</span>
</div>

<div className="space-y-3 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-white bg-slate-100">
<iconify-icon icon="solar:test-tube-linear" width="18"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded border shadow-sm border-slate-200 bg-white">
<div className="flex items-center justify-between mb-1">
<div className="font-bold text-xs text-slate-800">Lab Results Added</div>
</div>
<div className="text-slate-500 text-xs">Comprehensive Metabolic Panel uploaded by Dr. Smith.</div>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-white bg-blue-100 text-blue-600">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded border shadow-sm border-blue-100 bg-blue-50/50">
<div className="flex items-center justify-between mb-1">
<div className="font-bold text-xs text-slate-800">Specialist Note</div>
</div>
<div className="text-xs text-slate-600">"Reviewed labs. Recommend dietary changes and follow-up in 1 month." - Dr.
          Lee</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">
                  Continuity of Care
                </h3>
<p className="leading-relaxed mb-4 text-slate-600">
                  Seamless communication between your primary care physician, specialists, and pharmacy ensures everyone is on the same page.
                </p>
<div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform text-blue-600">
                  Meet Our Team
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-1 group transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 max-w-6xl border shadow-sm rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16 hover:border-blue-200 bg-white border-slate-200">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-48 h-48 rounded-full absolute blur-3xl bg-blue-50"></div>
<div className="relative z-10">
<div className="pt-2 pr-2 pb-6 pl-2">
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
<div className="absolute left-1/2 top-3 -translate-x-1/2 z-10">
<span className="inline-flex items-center rounded-xl border px-3 py-1.5 text-xs font-medium tracking-tight shadow-sm bg-white border-slate-200 text-slate-700">
                        Activity • Sleep • Vitals
                      </span>
</div>
<div className="relative h-48 sm:h-56 pt-14 pr-4 pl-4">
<canvas className="" height="336" id="healthChart" style={{display: 'block', boxSizing: 'border-box', height: '168px', width: '346px'}} width="693"></canvas>
</div>
</div>


</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">
                  Health Trends &amp; Analytics
                </h3>
<p className="leading-relaxed mb-4 text-slate-600">
                  Sync your wearables to track vitals and activity over time, providing your doctor with actionable data for preventive care.
                </p>
<div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform text-blue-600">
                  Connect Devices
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-1 group transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 max-w-6xl border shadow-sm rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16 hover:border-blue-200 bg-white border-slate-200">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-48 h-48 rounded-full absolute blur-3xl bg-blue-50"></div>
<div className="relative z-10">
<div className="overflow-hidden border rounded-2xl mb-8 relative group-hover:border-blue-200 transition-all duration-500 h-48 flex flex-col bg-slate-50 border-slate-200">
<div className="flex items-center justify-between p-3 border-b border-slate-200 bg-white">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:videocamera-linear" width="18"></iconify-icon>
<span className="font-medium text-xs text-slate-800">
                        Dr. Sarah Chen
                      </span>
</div>
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
</div>
<div className="flex-1 relative overflow-hidden bg-slate-200">

<img alt="Doctor on call" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&amp;q=80"/>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-8 h-8 rounded-full backdrop-blur flex items-center justify-center cursor-pointer bg-slate-800/80 text-white hover:bg-slate-700">
<iconify-icon icon="solar:microphone-linear" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer shadow-lg text-white hover:bg-red-600">
<iconify-icon className="rotate-[135deg]" icon="solar:phone-calling-rounded-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">
                  Telehealth Included
                </h3>
<p className="leading-relaxed mb-4 text-slate-600">
                  Consult with specialists from the comfort of your home. Secure, high-quality video calls integrated directly into your portal.
                </p>
<div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform text-blue-600">
                  Learn More
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32 border-y bg-white border-slate-200" id="process">
<div className="sm:px-6 lg:px-8 xl:px-12 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-dm-sans tracking-tight font-light text-slate-200">
                  02
                </span>
<div className="w-px xl:bg-blue-200 h-16"></div>
</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-dm-sans tracking-tight font-light text-slate-900">
                  Your Journey to
                  <span className="font-medium font-dm-sans tracking-tight text-slate-900">
                    Better Health
                  </span>
</h2>
<p className="text-xl max-w-3xl font-dm-sans tracking-tight font-light text-slate-600">
                  A simple, transparent process designed to get you the care you need
                  quickly and effectively.
                </p>
</div>
<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-105 border font-sans shadow-sm bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200">
                  View the Process
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:pt-0 lg:pb-0 w-full max-w-none z-10 mr-auto ml-auto pt-12 pb-12 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start order-2 lg:order-1 h-full justify-center">

<div className="inline-flex items-center p-1.5 rounded-full border mb-10 select-none bg-slate-100 border-slate-200">
<button className="px-5 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 transition-all duration-300 border bg-white text-slate-900 border-slate-200" id="btn-step-1" onclick="window.updateStep(1)">
<span className="font-bold">1</span>
                  Consult
                </button>
<button className="flex transition-all duration-300 text-sm font-medium text-slate-500 pt-2 pr-5 pb-2 pl-5 gap-x-2 gap-y-2 items-center hover:text-slate-800" id="btn-step-2" onclick="window.updateStep(2)">
<span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs border-slate-300">
                    2
                  </span>
                  Diagnose
                </button>
<button className="px-5 py-2 text-slate-500 text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:text-slate-800" id="btn-step-3" onclick="window.updateStep(3)">
<span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs border-slate-300">
                    3
                  </span>
                  Treat
                </button>
</div>

<div className="step-content block transition-all duration-500 ease-in-out" id="content-step-1">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-slate-900">
                  Accessible
                  <br/>
                  Initial Care
                </h2>
<p className="text-lg leading-relaxed mb-12 max-w-md font-medium text-slate-600">
                  Start with a virtual or in-person consultation. Our smart intake forms
                  gather your history beforehand so your doctor focuses entirely on you.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-blue-600 bg-blue-50">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Smart Intake Forms
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-blue-600 bg-blue-50">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Flexible Scheduling
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-blue-600 bg-blue-50">
<iconify-icon icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Secure Messaging
                    </span>
</div>
</div>
</div>

<div className="step-content hidden transition-all duration-500 ease-in-out" id="content-step-2">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-slate-900">
                  Precision
                  <br/>
                  Diagnostics
                </h2>
<p className="text-lg leading-relaxed mb-12 max-w-md font-medium text-slate-600">
                  State-of-the-art lab work and imaging, integrated directly into your profile.
                  Results are explained clearly, without the medical jargon.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-cyan-600 bg-cyan-50">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      In-House Labs
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-cyan-600 bg-cyan-50">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Advanced Imaging
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-cyan-600 bg-cyan-50">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Clear Explanations
                    </span>
</div>
</div>
</div>

<div className="step-content hidden transition-all duration-500 ease-in-out" id="content-step-3">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-slate-900">
                  Personalized
                  <br/>
                  Recovery
                </h2>
<p className="text-lg leading-relaxed mb-12 max-w-md font-medium text-slate-600">
                  Custom treatment plans, digital prescriptions sent to your preferred pharmacy,
                  and automated follow-ups to ensure you are healing properly.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-green-600 bg-green-50">
<iconify-icon icon="solar:pills-3-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Digital Prescriptions
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-green-600 bg-green-50">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Guided Care Plans
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg text-green-600 bg-green-50">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">
                      Automated Follow-ups
                    </span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 w-full perspective-normal">
<div className="rounded-xl border overflow-hidden shadow-xl relative group hover:rotate-y-0 transition-transform duration-700 ease-out rotate-y-5 rotate-x-5 border-slate-200 bg-white">

<div className="px-4 py-3 flex items-center gap-4 border-b bg-slate-100 border-slate-200">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full border border-red-500/30 bg-red-400"></div>
<div className="w-3 h-3 rounded-full border border-yellow-500/30 bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full border border-green-500/30 bg-green-400"></div>
</div>
<div className="flex-1 max-w-xl rounded-lg px-3 py-1.5 flex items-center justify-between text-xs text-slate-500 border mx-auto shadow-sm bg-white border-slate-200">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span className="font-medium text-slate-600">
                        https://portal.erdemhealth.com
                      </span>
</div>
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg flex items-center justify-center border shadow-sm bg-white text-slate-400 border-slate-200">
<iconify-icon icon="solar:menu-dots-square-linear"></iconify-icon>
</div>
</div>

<div className="step-visual block h-[550px] md:h-[600px] text-sm flex bg-slate-50" id="visual-step-1">

<div className="w-64 border-r flex flex-col hidden sm:flex shrink-0 bg-white border-slate-200">
<div className="p-4 border-b border-slate-200">
<div className="flex items-center gap-2 font-semibold text-slate-800">
<iconify-icon className="text-blue-600" icon="solar:health-bold" width="24"></iconify-icon>
                        Erdem Portal
                      </div>
</div>
<div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium border text-blue-700 bg-blue-50 border-blue-100" href="#">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
                          Dashboard
                       </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50" href="#">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                          Appointments
                       </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50" href="#">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
                          Messages <span className="ml-auto bg-red-500 text-[10px] px-1.5 rounded-full text-white">1</span>
</a>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0">
<div className="px-8 py-6 border-b border-slate-200 bg-white">
<h1 className="text-xl font-semibold tracking-tight mb-1 text-slate-900">
                        Intake Form: General Checkup
                      </h1>
<p className="text-xs text-slate-500">
                        Please fill this out before your consultation with Dr. Lee.
                      </p>
</div>
<div className="flex-1 p-8 overflow-y-auto">
<div className="max-w-md mx-auto p-6 rounded-xl border shadow-sm space-y-6 bg-white border-slate-200">
<div className="">
<label className="block text-sm font-medium mb-2 text-slate-700">Primary Reason for Visit</label>
<input className="w-full border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 text-slate-800" type="text" value="Routine annual physical"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-2 text-slate-700">Any new symptoms?</label>
<textarea className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:ring-blue-500 focus:border-blue-500 border-slate-300 text-slate-800">Occasional headaches in the evening over the last 2 weeks.</textarea>
</div>
<button className="w-full font-medium py-2 rounded-md transition-colors bg-blue-600 text-white hover:bg-blue-700">Submit to Doctor</button>
</div>
</div>
</div>
</div>

<div className="step-visual hidden h-[550px] md:h-[600px] text-sm flex bg-slate-50" id="visual-step-2">
<div className="flex-1 flex flex-col min-w-0">
<div className="px-8 py-6 border-b flex justify-between items-center border-slate-200 bg-white">
<div>
<h1 className="text-xl font-semibold tracking-tight mb-1 text-slate-900">
                          Test Results
                        </h1>
<p className="text-xs text-slate-500">
                          Comprehensive Metabolic Panel
                        </p>
</div>
<span className="border px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border-green-200">Reviewed</span>
</div>
<div className="flex-1 p-8 overflow-y-auto space-y-4">
<div className="border rounded-xl overflow-hidden shadow-sm bg-white border-slate-200">
<div className="grid grid-cols-3 p-3 border-b text-xs font-semibold text-slate-500 uppercase bg-slate-50 border-slate-200">
<div>Test Name</div>
<div>Result</div>
<div>Reference Range</div>
</div>
<div className="grid grid-cols-3 p-3 border-b text-sm items-center border-slate-100">
<div className="font-medium text-slate-800">Glucose</div>
<div className="font-bold text-slate-900">88 mg/dL</div>
<div className="text-slate-500 text-xs">65 - 99 mg/dL</div>
</div>
<div className="grid grid-cols-3 p-3 border-b text-sm items-center border-slate-100">
<div className="font-medium text-slate-800">Cholesterol, Total</div>
<div className="flex items-center gap-2">
<span className="font-bold text-red-600">210 mg/dL</span>
<iconify-icon className="text-red-500" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<div className="text-slate-500 text-xs">&lt; 200 mg/dL</div>
</div>
<div className="grid grid-cols-3 p-3 text-sm items-center">
<div className="font-medium text-slate-800">Vitamin D</div>
<div className="font-bold text-slate-900">35 ng/mL</div>
<div className="text-slate-500 text-xs">30 - 100 ng/mL</div>
</div>
</div>
<div className="border rounded-xl p-4 flex gap-4 bg-blue-50 border-blue-100">
<iconify-icon className="mt-0.5 text-blue-600" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="font-semibold mb-1 text-sm text-slate-900">Doctor's Note</h4>
<p className="text-xs leading-relaxed text-slate-700">Overall healthy panel. Total cholesterol is slightly elevated. Let's discuss minor dietary adjustments during our next follow-up. No medication needed at this time.</p>
</div>
</div>
</div>
</div>
</div>

<div className="step-visual hidden h-[550px] md:h-[600px] text-sm flex bg-slate-50" id="visual-step-3">
<div className="flex-1 flex flex-col min-w-0">
<div className="px-8 py-6 border-b border-slate-200 bg-white">
<h1 className="text-xl font-semibold tracking-tight mb-1 text-slate-900">
                        Active Prescriptions
                      </h1>
<p className="text-xs text-slate-500">
                        Manage your medications and refills.
                      </p>
</div>
<div className="flex-1 p-8 overflow-y-auto space-y-4">
<div className="border rounded-xl p-5 shadow-sm relative overflow-hidden bg-white border-slate-200">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-bold text-slate-900">Lisinopril 10mg</h3>
<p className="text-sm text-slate-500">Take 1 tablet daily by mouth</p>
</div>
<span className="border px-2 py-1 rounded text-xs font-medium flex items-center gap-1 bg-slate-100 text-slate-600 border-slate-200">
<iconify-icon icon="solar:pills-2-linear"></iconify-icon>
                               30 Supply
                             </span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-100">
<div className="text-xs text-slate-500">
                               Refills left: <span className="font-bold text-slate-800">2</span> • Expires: Oct 2025
                             </div>
<button className="px-3 py-1.5 rounded-md text-xs font-semibold transition-colors bg-slate-900 text-white hover:bg-slate-800">Request Refill</button>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm relative overflow-hidden opacity-60 bg-white border-slate-200">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-bold line-through text-slate-900">Amoxicillin 500mg</h3>
<p className="text-sm text-slate-500">Finished course</p>
</div>
<span className="text-slate-500 border px-2 py-1 rounded text-xs font-medium bg-slate-100 border-slate-200">
                               Inactive
                             </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="value">
<div className="sm:px-6 lg:px-8 xl:px-12 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-dm-sans tracking-tight font-light text-slate-200">
                  03
                </span>
<div className="w-px xl:bg-blue-200 h-16"></div>
</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
<div className="">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-light text-slate-900 tracking-tight font-dm-sans mb-6">Our <span className="font-medium text-slate-900 tracking-tight font-dm-sans">Doctors</span></h2>
<p className="text-xl max-w-3xl font-dm-sans tracking-tight font-light text-slate-600">
                  We don't just treat symptoms; we aim to improve your overall quality of life
                  through proactive, connected, and patient-centered care.
                </p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl space-y-4 max-w-6xl mx-auto">


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 pr-4 pb-4 pl-4" style={{minHeight: '600px'}}>

<section className="lg:col-span-2 flex">
<div className="relative overflow-hidden rounded-3xl bg-neutral-100 w-full">
<div className="relative h-[600px]" id="carousel">

<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="0">
<img alt="Portrait minimal" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f995362-9751-4d89-86fa-a5f7c03be905_1600w.jpg"/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-100" data-index="1">
<img alt="Beige fashion editorial" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1579684288599-e6b7e7a940ad?w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="2">
<img alt="Moody mountains" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3001134-ae66-49be-8bea-f8eed8b7e07e_1600w.jpg"/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="3">
<img alt="3D minimal render" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_800w.jpg"/>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-neutral-900/70 text-white hover:bg-neutral-900" id="prev">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 transition hover:bg-neutral-900 text-white bg-neutral-900/70 rounded-xl items-center justify-center">
<svg className="lucide lucide-chevron-right w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute left-4 bottom-4">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium backdrop-blur transition bg-white/90 text-neutral-900 hover:bg-white" href="#">
              View Project
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</a>
</div>

<div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2" id="dots">
<button aria-label="Go to slide 1" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button><button aria-label="Go to slide 2" className="h-2.5 w-2.5 rounded-full bg-white"></button><button aria-label="Go to slide 3" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button><button aria-label="Go to slide 4" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button>
</div>

<div className="absolute right-3 bottom-3">
</div>
</div>
</div>
</section>

<aside className="flex flex-col" style={{height: '600px'}}>
<div className="flex-1 flex flex-col space-y-4">

<div className="bg-white rounded-3xl ring-neutral-200 ring-1 pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-start gap-4">
<div className="flex-1">
<h2 className="text-xl font-semibold tracking-tight">Suzy Liu</h2>
<p className="text-sm text-neutral-600">Photographer</p>
<p className="mt-3 text-sm leading-6 text-neutral-700">
                We capture authentic moments and craft visual stories blending clean minimalism with soft emotion—every
                frame composed with intention.
              </p>
</div>
</div>
</div>
<div className="ring-1 bg-cover rounded-3xl pt-20 pr-5 pb-20 pl-5 shadow-sm ring-neutral-200 bg-white flex-1 min-h-0 bg-[url(https://images.unsplash.com/photo-1624133172024-87559cb5eeb2?w=800&amp;q=80)] bg-center">
</div>

<div className="space-y-3">
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800">Instagram</span>
<svg className="lucide lucide-instagram h-5 w-5 text-neutral-500" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line className="" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800">Behance</span>
<svg className="lucide lucide-palette h-5 w-5 text-neutral-500" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle className="" cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle className="" cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle className="" cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle className="" cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800">Twitter</span>
<svg className="lucide lucide-twitter w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-neutral-900 ring-neutral-200 hover:bg-black" href="#">
<span className="text-sm font-medium text-white">Contact Me</span>
<svg className="lucide lucide-mail h-5 w-5 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32 border-y bg-slate-50 border-slate-200" id="testimonials">
<div className="sm:px-6 lg:px-8 xl:px-12 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-dm-sans tracking-tight font-light text-slate-200">
                  04
                </span>
<div className="w-px xl:bg-blue-200 h-16"></div>
</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-x-8 gap-y-8">
<div className="">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-light tracking-tight font-dm-sans mb-6 text-slate-900">
                  Trusted by
                  <span className="font-medium font-dm-sans tracking-tight text-slate-900">
                    Patients
                  </span>
</h2>
<p className="text-xl font-light tracking-tight font-dm-sans max-w-3xl text-slate-600">
                  See how Erdem Health has transformed the care experience for individuals and families in our community.
                </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-auto gap-0 border rounded-3xl gap-x-0 gap-y-0 shadow-sm bg-white border-slate-200">
<div className="lg:col-span-3 overflow-hidden group border-b relative bg-white border-slate-200">
<div className="border-y border-black/5 pt-0 pb-0">
<style>@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
    .font-jakarta { font-family: 'Plus Jakarta Sans', 'Helvetica Neue', sans-serif; }
    .font-geist { font-family: 'Geist', 'Helvetica Neue', sans-serif; }
    
    .testimonial-cards-fan {
      perspective: 2000px;
    }

    .testimonial-card {
      position: absolute;
      left: 50%;
      top: 50%;
      transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
      will-change: transform, opacity, box-shadow;
      transform-origin: center center;
    }

    /* Fan State (Default) */
    .card-1 {
      z-index: 60;
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      filter: brightness(1.1);
    }

    .card-2 {
      z-index: 50;
      transform: translate(-50%, -50%) translate(-160px, 10px) rotate(-8deg) scale(0.95);
      opacity: 0.9;
    }
    
    .card-3 {
      z-index: 50;
      transform: translate(-50%, -50%) translate(160px, 10px) rotate(8deg) scale(0.95);
      opacity: 0.9;
    }

    .card-4 {
      z-index: 40;
      transform: translate(-50%, -50%) translate(-300px, 40px) rotate(-16deg) scale(0.9);
      opacity: 0.8;
    }
    
    .card-5 {
      z-index: 40;
      transform: translate(-50%, -50%) translate(300px, 40px) rotate(16deg) scale(0.9);
      opacity: 0.8;
    }

    .card-6 {
      z-index: 30;
      transform: translate(-50%, -50%) translateY(-20px) scale(0.88);
      opacity: 0.6;
      filter: brightness(0.7);
    }

    /* Grid State (Hover) */
    .group:hover .testimonial-card {
      z-index: 50;
      opacity: 1;
      filter: brightness(1);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .group:hover .card-2 { transform: translate(-50%, -50%) translate(-105%, -55%) rotate(0deg) scale(1); }
    .group:hover .card-1 { transform: translate(-50%, -50%) translate(0%, -55%) rotate(0deg) scale(1); }
    .group:hover .card-3 { transform: translate(-50%, -50%) translate(105%, -55%) rotate(0deg) scale(1); }
    .group:hover .card-4 { transform: translate(-50%, -50%) translate(-105%, 55%) rotate(0deg) scale(1); }
    .group:hover .card-6 { transform: translate(-50%, -50%) translate(0%, 55%) rotate(0deg) scale(1); }
    .group:hover .card-5 { transform: translate(-50%, -50%) translate(105%, 55%) rotate(0deg) scale(1); }

    /* Mobile Layout Override */
    @media (max-width: 1024px) {
      .testimonial-cards-fan { height: auto !important; display: flex; flex-direction: column; padding: 4rem 1rem; gap: 1.5rem; }
      .testimonial-card { position: relative !important; left: auto !important; top: auto !important; transform: none !important; width: 100% !important; max-width: 28rem !important; opacity: 1 !important; }
      .group:hover .testimonial-card { transform: none !important; }
    }</style>
<div className="group sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="testimonial-cards-fan group flex w-full h-[42rem] max-w-7xl mt-0 mb-0 relative gap-x-y-0 gap-y-0 items-center justify-center">
<article className="testimonial-card card-1 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="mb-3 text-3xl leading-none font-jakarta font-medium text-black">"</div>
<p className="mb-4 text-base font-geist text-gray-700">Nova has completely changed how we prototype 3D marketing pages. Our team can now try three concepts in the time it used to take to ship one.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div>
<div className="text-sm font-medium font-geist text-black">Alex Chen</div>
<div className="text-xs font-geist text-gray-500">Lead Designer, Orbit Labs</div>
</div>
</div>
</div>
</article>
<article className="testimonial-card card-2 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="leading-none text-3xl font-medium text-black font-jakarta mb-3">"</div>
<p className="mb-4 text-base font-geist text-gray-700">Our product walkthrough used to be a static video. With Nova, it became an interactive 3D scene we can iterate on like any other design file.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div className="">
<div className="text-sm font-medium font-geist text-black">Priya Nair</div>
<div className="text-xs font-geist text-gray-500">Product Lead, Lumenly</div>
</div>
</div>
</div>
</article>
<article className="testimonial-card card-3 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="mb-3 text-3xl leading-none font-jakarta font-medium text-black">"</div>
<p className="mb-4 text-base font-geist text-gray-700">The real-time collaboration feels like a modern canvas tool, but for spatial interfaces. Engineering gets clean components they can drop into code.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div>
<div className="text-sm font-medium font-geist text-black">Jordan Miles</div>
<div className="text-xs font-geist text-gray-500">VP Engineering, Vectorframe</div>
</div>
</div>
</div>
</article>
<article className="testimonial-card card-4 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="mb-3 text-3xl leading-none font-jakarta font-medium text-black">"</div>
<p className="mb-4 text-base font-geist text-gray-700">Our sales demos moved from slide decks to live 3D scenes in the browser. Close rates went up, and our team actually enjoys presenting now.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div className="">
<div className="text-sm font-medium font-geist text-black">Emily Carter</div>
<div className="text-xs font-geist text-gray-500">Revenue Operations, Northwind</div>
</div>
</div>
</div>
</article>
<article className="testimonial-card card-5 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="mb-3 text-3xl leading-none font-jakarta font-medium text-black">"</div>
<p className="mb-4 text-base font-geist text-gray-700">Being able to export to React Three Fiber means our prototypes are only a small step away from production. It keeps everyone in the same tool.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div>
<div className="text-sm font-medium font-geist text-black">Mark Johnson</div>
<div className="text-xs font-geist text-gray-500">Staff Engineer, Helio</div>
</div>
</div>
</div>
</article>
<article className="testimonial-card card-6 group/card w-full max-w-sm rounded-2xl border px-6 py-5 text-left relative overflow-hidden bg-gray-50 border-black/5">
<div className="relative z-10">
<div className="mb-3 text-3xl leading-none font-jakarta font-medium text-black">"</div>
<p className="mb-4 text-base font-geist text-gray-700">We ship interactive 3D launch moments every quarter now. Nova made that cadence realistic without growing the team or budget.</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-300"></div>
<div>
<div className="text-sm font-medium font-geist text-black">Michael Reyes</div>
<div className="text-xs font-geist text-gray-500">Creative Director, Parallel</div>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>


<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 h-fit bg-white">
</div>
</div>
</div>
</section>


<section className="z-10 lg:py-32 pt-20 pb-20 relative border-t bg-white border-slate-200" id="cta">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="relative overflow-hidden rounded-3xl border isolate shadow-sm border-blue-100 bg-blue-50">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-80 from-white/80"></div>
<div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full blur-[100px] bg-blue-200/50"></div>
</div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-20 gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-dm-sans tracking-tight font-medium mb-6 leading-[1.1] text-slate-900">
                  Take control of your health
                  <span className="block text-blue-600">
                    today.
                  </span>
</h2>
<p className="text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-sans tracking-tight text-slate-600">
                  Join thousands of patients who have discovered a better, more connected way to manage their wellbeing with Erdem Health.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105 active:scale-95 shadow-md bg-blue-600 text-white hover:bg-blue-700">
<span className="">Find a Doctor</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="group inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-medium transition-all shadow-sm border-slate-300 bg-white text-slate-700 hover:bg-slate-50">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="20"></iconify-icon>
                    Call Us
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t pt-16 pb-12 border-slate-200 bg-slate-50">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6 text-slate-900">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white">
<iconify-icon icon="solar:health-bold" width="20"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight">
                Erdem Health
              </div>
</div>
</div></div></div></footer>
    </>
  );
}
