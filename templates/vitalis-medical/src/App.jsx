import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize chart safely
      (function initChart() {
          const canvas = document.getElementById('recoveryChart');
          if (!canvas) return;

          const ctx = canvas.getContext('2d');

          // Custom Gradient
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(20, 184, 166, 0.15)'); // Teal 500 low opacity
          gradient.addColorStop(1, 'rgba(20, 184, 166, 0)');

          new Chart(ctx, {
              type: 'line',
              data: {
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  datasets: [
                      {
                          label: 'VITALIS',
                          data: [65, 78, 82, 85, 88, 92],
                          borderColor: '#14b8a6', // Teal 500
                          backgroundColor: gradient,
                          borderWidth: 2,
                          tension: 0.4,
                          pointBackgroundColor: '#ffffff',
                          pointBorderColor: '#14b8a6',
                          pointBorderWidth: 2,
                          pointRadius: 4,
                          pointHoverRadius: 6,
                          fill: true
                      },
                      {
                          label: 'National Avg',
                          data: [45, 48, 52, 51, 54, 56],
                          borderColor: '#cbd5e1', // Slate 300
                          borderWidth: 2,
                          borderDash: [6, 6],
                          tension: 0.4,
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          fill: false
                      }
                  ]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                      legend: { display: false },
                      tooltip: {
                          backgroundColor: '#0f172a',
                          padding: 12,
                          titleFont: { family: 'Inter', size: 12, weight: 600 },
                          bodyFont: { family: 'Inter', size: 12 },
                          cornerRadius: 4,
                          displayColors: false,
                          callbacks: {
                              label: function(context) {
                                  return context.dataset.label + ': ' + context.parsed.y + '%';
                              }
                          }
                      }
                  },
                  scales: {
                      y: {
                          display: true,
                          beginAtZero: true,
                          max: 100,
                          grid: { color: '#f1f5f9', drawBorder: false },
                          ticks: { font: { family: 'Inter', size: 10 }, color: '#94a3b8', padding: 10 }
                      },
                      x: {
                          display: true,
                          grid: { display: false },
                          ticks: { font: { family: 'Inter', size: 10 }, color: '#94a3b8', padding: 10 }
                      }
                  },
                  interaction: {
                      intersect: false,
                      mode: 'index',
                  },
                  animation: {
                      duration: 2000,
                      easing: 'easeOutQuart'
                  }
              }
          });
      })();
    


      lucide.createIcons();

      // Mobile Menu Toggle
      const menuBtn = document.getElementById('open-menu');
      const closeBtn = document.getElementById('close-menu');
      const mobileMenu = document.getElementById('mobile-menu');
      const body = document.body;

      function toggleMenu() {
          const isHidden = mobileMenu.classList.contains('hidden-menu');
          if (isHidden) {
              mobileMenu.classList.remove('hidden-menu');
              mobileMenu.classList.add('visible-menu');
              body.style.overflow = 'hidden';
          } else {
              mobileMenu.classList.remove('visible-menu');
              mobileMenu.classList.add('hidden-menu');
              body.style.overflow = '';
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);

      // Scroll Animation Observer
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.scroll-reveal').forEach(el => {
          observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute blur-md h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl hidden-menu flex flex-col pt-32 px-8 border-b border-slate-100" id="mobile-menu">
<button className="absolute top-8 right-6 text-slate-500 hover:text-slate-900" id="close-menu">
<span className="iconify w-8 h-8" data-icon="solar:close-circle-linear"></span>
</button>
<nav className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
<a className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#">
          Services
        </a>
<a className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#">
          Specialists
        </a>
<a className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#">
          Research
        </a>
<a className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#">
          Patients
        </a>
</nav>
<div className="mt-auto mb-12">
<a className="flex w-full items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider bg-slate-900 text-white py-4 rounded hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200" href="#">
          Book Consultation
        </a>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-sky-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-teal-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none hidden lg:block h-screen">
<div className="grid-line-v" style={{left: 'var(--gx-1)'}}></div>
<div className="grid-line-v" style={{left: 'var(--gx-2)'}}>
<div className="beam-v" style={{animation: 'beam-v 6s infinite 1s'}}></div>
</div>
<div className="grid-line-v" style={{left: 'var(--gx-3)'}}>
<div className="beam-v" style={{animation: 'beam-v 7s infinite 3s'}}></div>
</div>
<div className="grid-line-v" style={{left: 'var(--gx-4)'}}></div>
<div className="grid-line-h" style={{top: 'var(--gy-1)'}}></div>
<div className="grid-line-h" style={{top: '35%'}}></div>
<div className="grid-line-h" style={{top: '75%'}}></div>
</div>

<nav className="relative z-50 w-full h-[80px] lg:h-[100px] flex items-center justify-between px-6 lg:px-[6%] border-b border-slate-100 bg-white/70 backdrop-blur-md animate-reveal sticky top-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-teal-50 text-teal-600 rounded flex items-center justify-center">
<span className="iconify w-5 h-5" data-icon="solar:add-square-linear"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">
          VITALIS
        </span>
</div>
<div className="hidden md:flex text-sm font-medium text-slate-500 gap-x-8 items-center">
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">
          Specialists
        </a>
<a className="hover:text-slate-900 transition-colors" href="#">Research</a>
<a className="hover:text-slate-900 transition-colors" href="#">Patients</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white py-2.5 px-5 rounded hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg" href="#">
          Book Consultation
        </a>
<button className="md:hidden text-slate-600 hover:text-slate-900 transition-colors" id="open-menu">
<span className="iconify w-6 h-6" data-icon="solar:hamburger-menu-linear"></span>
</button>
</div>
</nav>

<section className="flex flex-col lg:block lg:h-[calc(100vh-100px)] z-10 w-full relative">

<div className="order-1 flex flex-col lg:py-0 lg:absolute lg:top-0 lg:right-[38%] lg:bottom-[6%] lg:left-[28%] lg:pr-12 lg:pl-12 z-20 pointer-events-none pt-20 pr-12 pb-12 pl-12 relative justify-center">
<h1 className="sm:text-6xl md:text-7xl lg:text-[3.5rem] xl:text-[4.5rem] leading-[1] lg:leading-[0.95] lg:text-left text-5xl font-semibold text-slate-900 tracking-tight text-center">
<span className="block animate-reveal delay-100">Precision</span>
<span className="block text-slate-400 lg:ml-[0.5em] animate-reveal delay-200">
            Focused
          </span>
<span className="block text-teal-600 animate-reveal delay-300">
            Healthcare
          </span>
</h1>
<div className="flex animate-reveal delay-500 lg:justify-start lg:pl-2 lg:mt-12 pointer-events-auto mt-12 pl-2 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all shadow-sm">
<span className="text-sm font-medium text-slate-700">
              Find a specialist
            </span>
<div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<span className="iconify w-4 h-4" data-icon="solar:arrow-right-linear"></span>
</div>
</button>
<div className="flex flex-col text-left">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
              Emergency Wait Time
            </span>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-500 font-mono">12 MIN</span>
</div>
</div>
</div>
</div>

<div className="relative order-2 w-full px-6 py-12 border-y border-slate-100 lg:border-y-0 lg:border-r lg:absolute lg:left-[6%] lg:top-0 lg:bottom-[6%] lg:w-[22%] lg:px-0 lg:py-0 flex flex-col bg-slate-50/50 lg:bg-transparent">
<div className="lg:pt-12 lg:pr-8 lg:absolute lg:top-0 lg:h-[62%] lg:w-full animate-reveal delay-200">
<p className="leading-relaxed lg:text-left lg:mx-0 text-base font-normal text-slate-500 text-center max-w-md mx-auto">
            VITALIS combines advanced diagnostics with compassionate care to
            create a new standard for medical excellence.
          </p>
</div>
<div className="mt-12 lg:mt-0 lg:absolute lg:top-[62%] lg:bottom-0 lg:left-0 lg:right-0 lg:border-t border-slate-100 lg:pt-6 flex flex-col justify-between animate-reveal delay-300 items-center lg:items-start">

<div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
<div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>

<div className="absolute top-[-1px] left-0 right-0 h-[1px] overflow-hidden hidden lg:block">
<div className="beam-h" style={{animation: 'beam-h 5s infinite'}}></div>
</div>
<div className="lg:text-left text-center w-full overflow-hidden">
<style>
              @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-marquee { animation: marquee-scroll 30s linear infinite; }
            </style>
<p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-6 pl-1">
              In Network With
            </p>
<div className="relative w-full max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0 h-[40px] flex items-center mask-linear-fade">
<div className="flex gap-12 items-center w-max animate-marquee will-change-transform">

<div className="text-slate-400 font-semibold text-lg flex items-center gap-2">
<span className="iconify w-6 h-6" data-icon="solar:shield-check-linear"></span>
                  AETNA
                </div>
<div className="text-slate-400 font-semibold text-lg flex items-center gap-2">
<span className="iconify w-6 h-6" data-icon="solar:heart-pulse-linear"></span>
                  CIGNA
                </div>
<div className="text-slate-400 font-semibold text-lg flex items-center gap-2">
<span className="iconify w-6 h-6" data-icon="solar:add-square-linear"></span>
                  BLUECROSS
                </div>
<div className="text-slate-400 font-semibold text-lg flex items-center gap-2">
<span className="iconify w-6 h-6" data-icon="solar:graph-up-linear"></span>
                  UNITED
                </div>

<div className="text-slate-400 font-semibold text-lg flex items-center gap-2">
<span className="iconify w-6 h-6" data-icon="solar:shield-check-linear"></span>
                  AETNA
                </div>
</div>
</div>
</div>
<div className="pb-1 mt-6 lg:mt-0">
<div className="flex items-center gap-2 mb-2">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-500">Clinics Operational</span>
</div>
</div>
</div>
</div>

<div className="relative order-3 w-full h-64 sm:h-80 lg:absolute lg:left-[62%] lg:right-[6%] lg:top-0 lg:h-[62%] lg:border-l lg:w-auto border-slate-100 overflow-hidden group animate-reveal delay-200">

<div className="absolute top-0 bottom-0 left-[-1px] w-[1px] overflow-hidden z-20 hidden lg:block">
<div className="beam-v" style={{animation: 'beam-v 4s infinite'}}></div>
</div>

<div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
<div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>
<img alt="Medical Lab" className="group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f023d8e-7464-4eea-9789-18f1b0227cc8_1600w.webp" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur border border-slate-200 p-3 rounded shadow-sm">
<span className="iconify w-6 h-6 text-slate-700" data-icon="solar:test-tube-linear"></span>
</div>
</div>

<div className="relative order-4 p-6 flex items-center justify-center animate-reveal delay-300 lg:p-0 lg:absolute lg:right-[6%] lg:top-[62%] lg:bottom-[6%] lg:border-l lg:border-t lg:border-slate-100 lg:left-[62%]">

<div className="absolute top-[-1px] left-0 right-0 h-[1px] overflow-hidden z-20 hidden lg:block">
<div className="beam-h" style={{animation: 'beam-h 6s infinite reverse'}}></div>
</div>
<div className="absolute top-0 bottom-0 left-[-1px] w-[1px] overflow-hidden z-20 hidden lg:block">
<div className="beam-v" style={{animation: 'beam-v 6s infinite 2s'}}></div>
</div>

<div className="flex flex-col bg-white w-full h-full lg:rounded-none rounded-sm pt-8 pr-8 pb-8 pl-8 relative shadow-lg shadow-slate-200/50 justify-between transition-all duration-500 border border-slate-100 lg:border-none" id="card-wrapper">

<div className="flex items-start justify-between relative z-10 min-h-[60px]">
<div className="transition-all duration-300 ease-out">
<div className="flex items-center gap-2 text-teal-600 mb-2">
<span className="iconify w-4 h-4" data-icon="solar:user-check-linear"></span>
<span className="text-[10px] font-semibold uppercase tracking-widest">
                  Portal
                </span>
</div>
<h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-900">
                Upcoming Visit
              </h3>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
<span className="iconify w-6 h-6" data-icon="solar:calendar-add-linear"></span>
</div>
</div>

<div className="relative z-10 flex flex-col justify-end flex-1 mt-6">
<p className="text-sm text-slate-500 font-medium leading-relaxed mb-4 border-l-2 border-teal-100 pl-3">
              Dr. Sarah Jenkins
              <span className="text-slate-400 font-normal">
                Cardiology • Tomorrow, 10:00 AM
              </span>
</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="flex -space-x-2">
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<button className="text-xs font-semibold uppercase tracking-wide text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1">
                Details
                <span className="iconify w-3.5 h-3.5" data-icon="solar:arrow-right-linear"></span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="w-full relative z-10 bg-white border-b border-slate-100 overflow-hidden">
<div className="lg:px-[6%] lg:py-32 max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative z-10 scroll-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-widest mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Live Impact Report
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
              Data-driven care,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                measurable results.
              </span>
</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-lg">
              We continuously monitor outcomes to ensure the highest standard of
              care. Our predictive models help prevent complications before they
              occur, setting a new benchmark for patient safety.
            </p>
<div className="grid grid-cols-2 gap-x-12 gap-y-10">
<div className="group cursor-default">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-teal-600 transition-colors">
                  99.9%
                </div>
<div className="h-0.5 w-12 bg-slate-200 mb-3 group-hover:w-full group-hover:bg-teal-500 transition-all duration-700 ease-out"></div>
<p className="text-sm text-slate-500 leading-snug">
                  Diagnostic accuracy rate across all departments
                </p>
</div>
<div className="group cursor-default">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-teal-600 transition-colors">
                  35%
                </div>
<div className="h-0.5 w-12 bg-slate-200 mb-3 group-hover:w-full group-hover:bg-teal-500 transition-all duration-700 ease-out"></div>
<p className="text-sm text-slate-500 leading-snug">
                  Faster recovery times compared to national average
                </p>
</div>
</div>
</div>

<div className="relative group scroll-reveal delay-200">

<div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
<div className="relative bg-white border border-slate-200 rounded-sm p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-teal-100">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">
                    Recovery Trajectory
                  </h3>
<p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-widest">
                    AVG. DAYS TO DISCHARGE
                  </p>
</div>
<div className="flex items-center gap-4 text-[10px] font-bold tracking-wider uppercase">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-slate-600">VITALIS</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
<span className="text-slate-400">National Avg</span>
</div>
</div>
</div>
<div className="w-full h-[320px]">
<canvas height="640" id="recoveryChart" style={{display: 'block', boxSizing: 'border-box', height: '320px', width: '480.9px'}} width="961"></canvas>
</div>
<div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-full">
<span className="iconify w-4 h-4" data-icon="solar:graph-up-linear"></span>
</div>
<div className="text-sm">
<span className="font-semibold text-slate-900 block leading-tight">
                      12% Increase
                    </span>
<span className="text-slate-500 text-xs font-normal">
                      in patient throughput
                    </span>
</div>
</div>
<button className="group/btn flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-wider hover:text-teal-700 transition-colors">
                  View Report
                  <span className="iconify w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="lg:py-32 bg-slate-50/50 w-full z-10 border-slate-100 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
<div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-slate-200/50"></div>
<div className="absolute top-0 bottom-0 left-[28%] w-[1px] bg-slate-200/50"></div>
<div className="absolute top-0 bottom-0 left-[62%] w-[1px] bg-slate-200/50"></div>
<div className="absolute top-0 bottom-0 right-[6%] w-[1px] bg-slate-200/50"></div>
</div>
<div className="relative z-10 lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 lg:mb-24 max-w-4xl">
<h2 className="lg:text-7xl text-4xl font-medium text-slate-900 tracking-tight mb-8 scroll-reveal">
            Holistic Health
            <span className="text-slate-300">Infrastructure.</span>
</h2>
<div className="scroll-reveal delay-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
<p className="text-lg text-slate-500 font-light leading-relaxed">
              From primary care to advanced specialized treatments, VITALIS
              bridges the gap between patient comfort and medical innovation.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6" onmousemove="for(const card of this.children){const rect=card.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;card.style.setProperty('--mouse-x', x + 'px');card.style.setProperty('--mouse-y', y + 'px');}">

<div className="scroll-reveal delay-200 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md" style={{-MouseX: '881.8828125px', -MouseY: '468.75px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)', zIndex: '0'}}></div>
<div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-8 relative z-10">
<span className="iconify w-6 h-6" data-icon="solar:stethoscope-linear"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Primary Care
              </h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
                Comprehensive annual checkups, preventative screenings, and
                personalized health plans.
              </p>
</div>
</div>

<div className="scroll-reveal delay-300 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md" style={{-MouseX: '477.296875px', -MouseY: '468.75px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)', zIndex: '0'}}></div>
<div className="h-12 w-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-8 relative z-10">
<span className="iconify w-6 h-6" data-icon="solar:document-medicine-linear"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Digital Records
              </h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
                Secure, instant access to your medical history, lab results, and
                prescriptions via our portal.
              </p>
</div>
</div>

<div className="scroll-reveal delay-500 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md" style={{-MouseX: '72.7109375px', -MouseY: '468.75px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)', zIndex: '0'}}></div>
<div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-8 relative z-10">
<span className="iconify w-6 h-6" data-icon="solar:test-tube-linear"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Advanced Diagnostics
              </h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
                State-of-the-art imaging and on-site laboratory for rapid,
                accurate diagnosis.
              </p>
</div>
</div>

<div className="scroll-reveal delay-200 col-span-1 lg:col-span-3 group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] hover:border-slate-300 border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md" style={{-MouseX: '881.8828125px', -MouseY: '217.25px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)', zIndex: '0'}}></div>
<div className="absolute top-8 right-8 text-slate-200 group-hover:text-teal-100 transition-colors">
<span className="iconify w-16 h-16" data-icon="solar:monitor-camera-linear"></span>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                Telemedicine Integration
              </h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed max-w-md">
                Connect with your doctor from the comfort of your home.
                High-definition video consultations allow for routine follow-ups
                without the commute.
              </p>
<div className="mt-8 flex items-center gap-4">
<div className="text-xs font-mono text-teal-700 bg-teal-50 border border-teal-100 px-2 py-1 rounded">
                  HIPAA Compliant
                </div>
<div className="text-xs font-mono text-slate-400">
                  Encrypted Video
                </div>
</div>
</div>
</div>

<div className="scroll-reveal delay-300 col-span-1 lg:col-span-3 group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] hover:border-slate-300 border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md" style={{-MouseX: '275.0078125px', -MouseY: '217.25px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)', zIndex: '0'}}></div>
<div className="absolute top-8 right-8 text-slate-200 group-hover:text-sky-100 transition-colors">
<span className="iconify w-16 h-16" data-icon="solar:users-group-two-rounded-linear"></span>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                Specialist Network
              </h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed max-w-md">
                Direct referrals to the top specialists in the region. Our
                coordinated care model ensures your entire medical team is on
                the same page.
              </p>
<div className="mt-8 flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-600">
                  +12
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:py-32 w-full z-20 pt-24 pb-24 relative bg-white">

<div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
<div className="grid-line-v" style={{left: '6%'}}></div>
<div className="grid-line-v" style={{left: '28%'}}></div>
<div className="grid-line-v" style={{left: '62%'}}></div>
<div className="grid-line-v" style={{right: '6%'}}></div>
<div className="grid-line-h" style={{top: '0'}}></div>
<div className="grid-line-h" style={{bottom: '0'}}></div>
</div>
<div className="lg:px-[6%] max-w-[1600px] z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="border border-slate-100 bg-slate-50/50 rounded-sm p-10 lg:p-12 relative flex flex-col justify-center min-h-[240px]">
<h2 className="leading-[0.95] lg:text-5xl text-4xl font-semibold text-slate-900 tracking-tight z-10 mb-2 relative">
                Care that puts
                <span className="text-slate-300">you first.</span>
</h2>
</div>
<div className="lg:h-[500px] overflow-hidden group h-[420px] border-slate-200 border rounded-sm relative shadow-sm">
<img alt="Doctor patient consultation" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3d7aa0-9b80-49e5-94f8-4b8527c42263_1600w.jpg"/>
<div className="absolute bottom-10 right-10 text-right bg-white/90 backdrop-blur-sm p-4 rounded shadow-lg">
<span className="block text-4xl font-bold text-slate-900 tracking-tight">
                  98%
                </span>
<span className="block text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">
                  Patient Satisfaction
                </span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-white p-10 rounded-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-yellow-400 mb-6">
<span className="iconify w-5 h-5" data-icon="solar:star-bold"></span>
<span className="iconify w-5 h-5" data-icon="solar:star-bold"></span>
<span className="iconify w-5 h-5" data-icon="solar:star-bold"></span>
<span className="iconify w-5 h-5" data-icon="solar:star-bold"></span>
<span className="iconify w-5 h-5" data-icon="solar:star-bold"></span>
</div>
<p className="text-lg font-light leading-relaxed mb-8 text-slate-600">
                  "The level of attention to detail at VITALIS is unmatched. I
                  never felt rushed, and Dr. Emily actually listened to my
                  concerns. The app makes scheduling a breeze."
                </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d0296a8-c467-44ef-9d51-ce4ee3a2c3c6_320w.webp"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">
                    Michael Ross
                  </h4>
<span className="text-xs text-slate-400">Patient since 2022</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify w-[18px] h-[18px]" data-icon="solar:star-bold"></span>
<span className="iconify w-[18px] h-[18px]" data-icon="solar:star-bold"></span>
<span className="iconify w-[18px] h-[18px]" data-icon="solar:star-bold"></span>
<span className="iconify w-[18px] h-[18px]" data-icon="solar:star-bold"></span>
<span className="iconify w-[18px] h-[18px]" data-icon="solar:star-bold"></span>
</div>
<p className="text-base font-normal leading-relaxed mb-6 text-slate-600">
                "The facility is spotless and modern. Having the lab on-site
                saved me a separate trip. Highly recommended."
              </p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6ec4622-d827-4c9e-9744-0c24c81f9515_320w.webp"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Sarah Jay</h4>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-sm p-8 lg:px-12 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl shadow-slate-300/50">

<div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center md:text-left">
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">
              Ready to prioritize your health?
            </h3>
<p className="text-slate-400 text-base font-light">
              Join over 10,000 patients trusting VITALIS.
            </p>
</div>
<button className="relative z-10 bg-white text-slate-900 pl-8 pr-6 py-4 rounded font-semibold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-4 group/btn shadow-lg">
            Schedule Visit
            <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
<span className="iconify w-3.5 h-3.5" data-icon="solar:arrow-right-linear"></span>
</div>
</button>
</div>
</div>
</section>

<section className="z-20 w-full border-t border-slate-100 relative bg-white">
<div className="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6 pt-24 pb-24">
<div className="max-w-3xl">
<h3 className="text-xs font-mono text-slate-500 uppercase mb-8">
            Common Questions
          </h3>
<div className="space-y-0">
<div className="group border-b border-slate-100">
<button className="w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden');">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                  Do you accept my insurance?
                </h3>
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="solar:add-circle-linear"></span>
</button>
<div className="hidden pb-8 text-slate-500 font-light leading-relaxed animate-reveal">
                We accept most major insurance providers including Aetna, Cigna,
                BlueCross BlueShield, and UnitedHealthcare. Please contact our
                front desk for verification of your specific plan.
              </div>
</div>
<div className="group border-b border-slate-100">
<button className="w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden');">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                  How do I access my lab results?
                </h3>
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="solar:add-circle-linear"></span>
</button>
<div className="hidden pb-8 text-slate-500 font-light leading-relaxed animate-reveal">
                All lab results are posted to the VITALIS Patient Portal
                immediately upon review by your physician. You will receive a
                secure notification email when they are ready.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative w-full border-t border-slate-100 bg-slate-50 z-20 pt-24 pb-12">
<div className="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
<div className="lg:col-span-3">
<div className="flex items-center gap-2 text-slate-900 mb-6">
<div className="w-6 h-6 bg-slate-200 text-slate-700 rounded flex items-center justify-center">
<span className="iconify w-3.5 h-3.5" data-icon="solar:add-square-linear"></span>
</div>
<span className="font-bold tracking-tight">VITALIS</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
              Reimagining the patient experience through technology, design, and
              compassion.
            </p>
</div>
<div className="lg:col-span-2">
<h4 className="text-xs font-mono text-slate-400 uppercase mb-6">
              Services
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Primary Care
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Cardiology
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Pediatrics
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Urgent Care
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-xs font-mono text-slate-400 uppercase mb-6">
              Patients
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Portal Login
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Pay Bill
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Insurance
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end items-start">
<div className="bg-white border border-slate-200 p-6 rounded-sm w-full sm:w-64">
<span className="block text-xs font-mono text-slate-400 mb-2">
                EMERGENCY CONTACT
              </span>
<span className="block text-2xl font-semibold text-slate-900 mb-1">
                555-0123
              </span>
<span className="block text-sm text-slate-500">24/7 Triage Line</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-4">
<p className="text-xs text-slate-400">
            © 2024 VITALIS Health Group. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="ri:twitter-x-line"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="ri:facebook-circle-line"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="ri:instagram-line"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
