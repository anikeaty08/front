import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Initialize Icons
    lucide.createIcons();

    // Chart.js Configuration
    document.addEventListener('DOMContentLoaded', function() {
      const canvas = document.getElementById('comfortChart');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0.2)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
              label: 'Smiles Dental',
              data: [85, 88, 92, 94, 96, 98],
              borderColor: '#0EA5E9', // Sky 500
              backgroundColor: gradient,
              borderWidth: 2,
              tension: 0.4,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#0EA5E9',
              pointRadius: 4,
              fill: true
            }, {
              label: 'Industry Avg',
              data: [70, 72, 71, 75, 74, 76],
              borderColor: '#cbd5e1', // Slate 300
              borderWidth: 2,
              borderDash: [5, 5],
              tension: 0.4,
              pointRadius: 0,
              fill: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { display: true, min: 50, max: 100, grid: { color: '#f1f5f9' }, ticks: { font: { family: 'Inter', size: 10 } } },
              x: { display: true, grid: { display: false }, ticks: { font: { family: 'Inter', size: 10 } } }
            }
          }
        });
      }
    });

    // Scroll Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none hidden lg:block h-screen">
<div className="grid-line-v" style={{left: '6%'}}></div>
<div className="grid-line-v" style={{left: '28%'}}></div>
<div className="grid-line-v" style={{left: '62%'}}>
<div className="beam-v" style={{animation: 'beam-v 7s infinite 3s'}}></div>
</div>
<div className="grid-line-v" style={{left: '94%'}}></div>
<div className="grid-line-h" style={{top: '100px'}}></div>
<div className="grid-line-h" style={{top: '35%'}}></div>
<div className="grid-line-h" style={{top: '75%'}}></div>
</div>

<nav className="lg:h-[100px] flex lg:px-[6%] sticky bg-white/80 w-full h-[80px] z-50 border-slate-100 border-b pr-6 pl-6 relative top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">

<a className="flex items-center gap-1 group" href="#">
<span className="sm:text-3xl leading-none text-2xl font-bold text-slate-900 tracking-tight font-nunito"></span>
<span className="text-2xl sm:text-3xl font-semibold font-jakarta tracking-tight text-slate-800 leading-none">Dental</span>
<sup className="text-[10px] text-slate-400 -top-2">®</sup>
</a>
</div>
<div className="hidden md:flex text-sm font-medium text-slate-500 gap-x-10 items-center">
<a className="transition-colors hover:text-sky-600" href="#specializations">Specializations</a>
<a className="transition-colors hover:text-sky-600" href="#about">Our Story</a>
<a className="transition-colors hover:text-sky-600" href="#technology">Technology</a>
<a className="transition-colors hover:text-sky-600" href="#booking">Booking</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:flex group items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-sky-200 transition-all duration-300 shadow-sm" href="tel:+48221234567">
<div className="p-1 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-100 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-phone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-700">Call Us</span>
</a>
<div className="hidden md:flex flex-col items-end mr-4">
<span className="text-[10px] tracking-widest uppercase text-slate-400">Warsaw • Mokotów</span>
<span className="text-xs font-medium text-slate-900">Open 8am - 8pm</span>
</div>
<button className="md:hidden transition-colors text-slate-600 hover:text-slate-900">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="md:hidden text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded bg-slate-900 text-white" href="#booking">
        Book
      </a>
</div>
</nav>

<header className="sm:px-6 lg:px-8 sm:pt-24 lg:pt-32 z-10 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-24 pl-4 relative">
<div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="animate-fade-slide-left delay-100 flex items-center gap-3">
<div className="gradient-border-wrapper">
<div className="rounded-full px-4 py-1.5 bg-white">
<span className="text-xs font-medium tracking-wider uppercase flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-sparkles w-3 h-3 text-sky-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Now accepting new patients
              </span>
</div>
</div>
<div className="h-px bg-gradient-to-r to-transparent flex-1 from-sky-200"></div>
</div>
<h1 className="animate-fade-slide-left delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-slate-900">
          Where Every Smile <br/>
<span className="bg-gradient-to-r from-sky-500 to-[#C5A059] bg-clip-text text-transparent pb-2 via-sky-400">Begins.</span>
</h1>
<p className="animate-fade-slide-left delay-300 text-slate-500 leading-relaxed text-base sm:text-lg max-w-xl font-light">
          Founded by Dr. Emilia Końska in Warsaw. Experience the perfect fusion of biomimetic dentistry and a luxury spa atmosphere. Art meets science in every treatment.
        </p>
<div className="animate-fade-slide-left delay-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">

<a className="button shadow-lg shadow-sky-200/50" href="#booking">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
              Book Consultation
              <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-semibold border-white bg-slate-100 text-slate-600">+2k</div>
</div>
<span className="text-sm text-slate-500">Happy smiles in 2024</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="animate-fade-slide-right delay-300 relative rounded-2xl overflow-hidden shadow-2xl border shadow-sky-100 border-white">
<img alt="Dental Office Interior" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md p-6 rounded-xl border shadow-lg bg-white/90 border-white/50">
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="text-xs font-medium uppercase tracking-widest text-[#C5A059] mb-1">Clinic Status</p>
<h3 className="text-lg font-semibold text-slate-900">Dr John Lynch</h3>
</div>
<div className="h-8 w-8 rounded-full flex items-center justify-center bg-sky-50 text-sky-600">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
              Accepting appointments for tomorrow
            </div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-full h-full border rounded-2xl border-slate-200"></div>
</div>
</div>
</header>

<section className="w-full relative z-10 border-y overflow-hidden bg-white border-slate-100">
<div className="lg:px-[6%] lg:py-24 max-w-[1600px] mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative z-10 scroll-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-widest mb-6 bg-slate-50 border-slate-100 text-slate-600">
             Performance Metrics
          </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6 text-slate-900">
            Confidence backed by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
              science.
            </span>
</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-lg">
            "Smiles Dental" symbolizes natural beauty and protection. We use AI-powered scans and biomimetic materials to ensure your smile is as strong as it is beautiful.
          </p>
<div className="grid grid-cols-2 gap-x-12 gap-y-10">
<div className="group cursor-default">
<div className="text-4xl font-semibold tracking-tight mb-2 group-hover:text-sky-600 transition-colors text-slate-900">
                100%
              </div>
<div className="h-0.5 w-12 mb-3 group-hover:w-full group-hover:bg-sky-500 transition-all duration-700 ease-out bg-slate-200"></div>
<p className="text-sm text-slate-500 leading-snug">
                Metal-free, biocompatible materials used
              </p>
</div>
<div className="group cursor-default">
<div className="text-4xl font-semibold tracking-tight mb-2 group-hover:text-sky-600 transition-colors text-slate-900">
                15min
              </div>
<div className="h-0.5 w-12 mb-3 group-hover:w-full group-hover:bg-sky-500 transition-all duration-700 ease-out bg-slate-200"></div>
<p className="text-sm text-slate-500 leading-snug">
                Average time for full digital smile simulation
              </p>
</div>
</div>
</div>

<div className="relative group scroll-reveal delay-200">
<div className="absolute -inset-4 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl from-sky-50 to-amber-50"></div>
<div className="relative border rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-lg bg-white border-slate-100">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Patient Comfort Index</h3>
<p className="text-[10px] mt-1 font-mono uppercase tracking-widest text-slate-400">Post-procedure Surveys</p>
</div>
<div className="flex items-center gap-4 text-[10px] font-semibold tracking-wider uppercase">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-slate-600">Smiles Dental</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
<span className="text-slate-400">Industry</span>
</div>
</div>
</div>
<div className="w-full h-[280px]">
<canvas height="490" id="comfortChart" style={{display: 'block', boxSizing: 'border-box', height: '280px', width: '589.5px'}} width="1031"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative z-10 py-24 border-t bg-slate-50 border-slate-100" id="about">
<div className="lg:px-[6%] max-w-[1600px] mx-auto px-6">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-12 scroll-reveal text-slate-900">Our team</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal delay-100">

<div className="group flex flex-col border rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg bg-slate-50 border-slate-100 hover:border-sky-100 hover:shadow-sky-100/10">
<div className="w-full aspect-[4/5] rounded-[1.5rem] bg-gradient-to-b relative overflow-hidden mb-6 from-slate-100 to-slate-200">
<div className="absolute inset-0 flex items-end justify-center">
<svg className="w-4/5 h-4/5 text-slate-300/50" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<div className="text-center px-2 pb-4">
<h3 className="text-lg font-semibold mb-1.5 text-slate-900">Dr Joanna Szydlowska</h3>
<p className="text-sm font-light mb-1.5 text-slate-600">General dentist</p>
<p className="text-xs font-mono tracking-wide text-slate-400">IDC: 16707</p>
</div>
</div>

<div className="group flex flex-col border rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg bg-slate-50 border-slate-100 hover:border-sky-100 hover:shadow-sky-100/10">
<div className="w-full aspect-[4/5] rounded-[1.5rem] bg-gradient-to-b relative overflow-hidden mb-6 from-slate-100 to-slate-200">
<div className="absolute inset-0 flex items-end justify-center">
<svg className="w-4/5 h-4/5 text-slate-300/50" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<div className="text-center px-2 pb-4">
<h3 className="text-lg font-semibold mb-1.5 text-slate-900">Dr Janusz Banasik</h3>
<p className="text-sm font-light mb-1.5 leading-snug text-slate-600">General dentist with specialinterest in orthodontics</p>
<p className="text-xs font-mono tracking-wide text-slate-400">IDC: 16407</p>
</div>
</div>

<div className="group flex flex-col border rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg bg-slate-50 border-slate-100 hover:border-sky-100 hover:shadow-sky-100/10">
<div className="w-full aspect-[4/5] rounded-[1.5rem] relative overflow-hidden mb-6 bg-slate-100">
<img alt="Dr John Lynch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="text-center px-2 pb-4">
<h3 className="text-lg font-semibold mb-1.5 text-slate-900">Dr John Lynch</h3>
<p className="text-sm font-light mb-1.5 text-slate-600">General dentist</p>
<p className="text-xs font-mono tracking-wide text-slate-400">IDC: 1179</p>
</div>
</div>

<div className="group flex flex-col border rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg bg-slate-50 border-slate-100 hover:border-sky-100 hover:shadow-sky-100/10">
<div className="w-full aspect-[4/5] rounded-[1.5rem] bg-gradient-to-b relative overflow-hidden mb-6 from-slate-100 to-slate-200">
<div className="absolute inset-0 flex items-end justify-center">
<svg className="w-4/5 h-4/5 text-slate-300/50" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<div className="text-center px-2 pb-4">
<h3 className="text-lg font-semibold mb-1.5 text-slate-900">Dr Angelko Ashtalkoski</h3>
<p className="text-sm font-light mb-1.5 text-slate-600">General dentist</p>
<p className="text-xs font-mono tracking-wide text-slate-400">IDC: 2011</p>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-12 scroll-reveal delay-200">
<button className="p-3 rounded-full border text-slate-500 transition-all duration-200 group border-slate-200 hover:bg-slate-100 hover:text-sky-600">
<svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-3 rounded-full border text-slate-500 transition-all duration-200 group border-slate-200 hover:bg-slate-100 hover:text-sky-600">
<svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="lg:py-32 w-full z-10 pt-24 pb-24 relative bg-slate-50/50" id="specializations">
<div className="relative z-10 lg:px-[6%] max-w-[1600px] mx-auto px-6">
<div className="mb-20 lg:mb-24 max-w-4xl">
<h2 className="lg:text-6xl text-4xl font-semibold tracking-tight mb-6 scroll-reveal text-slate-900">
          Art Meets Science
          <span className="text-slate-300">In Every Smile.</span>
</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed scroll-reveal delay-100">
          From advanced cosmetics to family care, our boutique clinic offers a comprehensive range of treatments in a calming environment.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

<div className="scroll-reveal delay-200 col-span-1 lg:col-span-2 group transition-all duration-300 flex flex-col border rounded-xl p-8 backdrop-blur-sm justify-between shadow-sm hover:shadow-lg hover:bg-white hover:border-sky-200 border-slate-200 bg-white/60">
<div className="h-12 w-12 rounded-lg flex items-center justify-center mb-8 bg-sky-50 text-sky-600">
<svg className="lucide lucide-sparkles w-6 h-6 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold mb-2 tracking-tight text-slate-900">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
              Veneers, whitening, and full smile design tailored to your unique facial features.
            </p>
</div>
</div>

<div className="scroll-reveal delay-300 col-span-1 lg:col-span-2 group transition-all duration-300 flex flex-col border rounded-xl p-8 backdrop-blur-sm justify-between shadow-sm hover:shadow-lg hover:bg-white hover:border-sky-200 border-slate-200 bg-white/60">
<div className="h-12 w-12 rounded-lg flex items-center justify-center text-[#C5A059] mb-8 bg-amber-50">
<svg className="lucide lucide-zap w-6 h-6 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold mb-2 tracking-tight text-slate-900">Laser Surgery</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
              Minimally invasive procedures for gum contouring and treatment with faster healing times.
            </p>
</div>
</div>

<div className="scroll-reveal delay-400 col-span-1 lg:col-span-2 group transition-all duration-300 flex flex-col border rounded-xl p-8 backdrop-blur-sm justify-between shadow-sm hover:shadow-lg hover:bg-white hover:border-sky-200 border-slate-200 bg-white/60">
<div className="h-12 w-12 rounded-lg flex items-center justify-center mb-8 bg-slate-100 text-slate-600">
<svg className="lucide lucide-box w-6 h-6 stroke-[1.5]" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold mb-2 tracking-tight text-slate-900">3D Printing</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">
              In-house lab for same-day crowns and precise implant guides using biomimetic resin.
            </p>
</div>
</div>

<div className="scroll-reveal delay-200 col-span-1 lg:col-span-3 group transition-all duration-300 flex flex-col min-h-[300px] border rounded-xl p-8 backdrop-blur-sm justify-between shadow-sm hover:shadow-lg relative overflow-hidden hover:bg-white hover:border-sky-200 border-slate-200 bg-white/60">
<div className="absolute top-8 right-8 group-hover:text-sky-100 transition-colors text-slate-200">
<svg className="lucide lucide-scan-face w-16 h-16 stroke-[1]" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">AI Diagnostics</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed max-w-sm">
              We use advanced AI to analyze X-rays and scans, detecting issues earlier than the human eye can see.
            </p>
</div>
</div>

<div className="scroll-reveal delay-300 col-span-1 lg:col-span-3 group transition-all duration-300 flex flex-col min-h-[300px] border rounded-xl p-8 backdrop-blur-sm justify-between shadow-sm hover:shadow-lg relative overflow-hidden hover:bg-white hover:border-sky-200 border-slate-200 bg-white/60">
<div className="absolute top-8 right-8 group-hover:text-amber-100 transition-colors text-slate-200">
<svg className="lucide lucide-heart-handshake w-16 h-16 stroke-[1]" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Family &amp; Pediatric</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed max-w-sm">
              Gentle care for the little ones. Our "First Visit" program ensures a fear-free introduction to dental health.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:py-32 w-full z-20 pt-24 pb-24 relative bg-white" id="reviews">
<div className="lg:px-[6%] max-w-[1600px] mx-auto px-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
<div className="lg:col-span-6 flex flex-col justify-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
            Smile With Confidence. <br/>
<span className="text-slate-400">Smile With Smiles Dental.</span>
</h2>
<div className="flex items-center gap-4 mt-8">
<div className="flex -space-x-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 object-cover border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 object-cover border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 object-cover border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<p className="text-sm font-medium text-slate-600">Loved by 2,000+ patients in Warsaw</p>
</div>
</div>
<div className="lg:col-span-6">
<div className="border p-8 rounded-2xl relative bg-slate-50 border-slate-100">
<svg className="lucide lucide-quote w-10 h-10 absolute top-8 right-8 text-sky-200" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg font-light leading-relaxed mb-6 italic text-slate-600">
              "The interior feels like a luxury boutique, not a medical office. Dr. Końska completely transformed my smile with veneers that look incredibly natural. Best decision I've ever made."
            </p>
<div>
<h4 className="font-semibold text-slate-900">Anna Wójcik</h4>
<p className="text-xs uppercase tracking-wider text-slate-400">Veneers Patient</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900">
<div className="absolute inset-0 bg-gradient-to-br z-0 from-slate-800 to-slate-900"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 text-center md:text-left">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 text-white">From First Visit to Forever Smiles.</h3>
<p className="font-light text-slate-400">Book your comprehensive assessment today.</p>
</div>
<div className="relative z-10">
<button className="px-8 py-4 rounded-xl font-semibold text-sm transition-colors bg-white text-slate-900 hover:bg-sky-50">
             Schedule Appointment
           </button>
</div>
</div>
</div>
</section>

<section className="border-t py-24 border-slate-100 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-xs font-semibold uppercase tracking-widest mb-10 text-center text-slate-400">Common Questions</h3>
<div className="space-y-4">
<div className="border rounded-lg p-6 transition-colors cursor-pointer group border-slate-100 hover:border-sky-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium group-hover:text-sky-600 transition-colors text-slate-800">Do you offer payment plans?</h4>
<svg className="lucide lucide-plus w-5 h-5 group-hover:text-sky-600 text-slate-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
<div className="border rounded-lg p-6 transition-colors cursor-pointer group border-slate-100 hover:border-sky-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium group-hover:text-sky-600 transition-colors text-slate-800">What is biomimetic dentistry?</h4>
<svg className="lucide lucide-plus w-5 h-5 group-hover:text-sky-600 text-slate-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
<div className="border rounded-lg p-6 transition-colors cursor-pointer group border-slate-100 hover:border-sky-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium group-hover:text-sky-600 transition-colors text-slate-800">How long does a smile makeover take?</h4>
<svg className="lucide lucide-plus w-5 h-5 group-hover:text-sky-600 text-slate-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-slate-50 border-slate-100 relative z-10" id="booking">
<div className="max-w-[1000px] mx-auto px-6">
<h2 className="serif-font text-4xl font-normal text-slate-800 mb-8 scroll-reveal">Book Now</h2>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 scroll-reveal delay-100">
<form action="#" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Select a Service <span className="text-red-500">*</span></label>
<div className="relative">
<select className="custom-select block w-full rounded-lg border-0 bg-slate-50 py-3 pl-4 pr-10 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow">
<option>Dental Treatment</option>
<option>Cosmetic Consultation</option>
<option>Emergency Care</option>
<option>Whitening Session</option>
</select>
</div>
</div>

<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Name <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 bg-slate-50 py-3 px-4 text-slate-700 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow" type="text"/>
</div>

<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Phone <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 bg-slate-50 py-3 px-4 text-slate-700 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow" type="tel"/>
</div>

<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Email <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 bg-slate-50 py-3 px-4 text-slate-700 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow" type="email"/>
</div>

<div className="md:col-span-1 flex flex-col justify-end pb-3">
<label className="block text-xs font-medium text-slate-500 mb-3 uppercase tracking-wide">Are you an existing customer? <span className="text-red-500">*</span></label>
<div className="flex items-center gap-6">
<div className="flex items-center">
<input className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-600" id="yes" name="customer" type="radio"/>
<label className="ml-3 block text-sm font-medium leading-6 text-slate-700" htmlFor="yes">Yes</label>
</div>
<div className="flex items-center">
<input className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-600" id="no" name="customer" type="radio"/>
<label className="ml-3 block text-sm font-medium leading-6 text-slate-700" htmlFor="no">No</label>
</div>
</div>
</div>

<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Appointment Day <span className="text-red-500">*</span></label>
<div className="relative">
<select className="custom-select block w-full rounded-lg border-0 bg-slate-50 py-3 pl-4 pr-10 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow">
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
</select>
</div>
</div>

<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Time Preferred <span className="text-red-500">*</span></label>
<div className="relative">
<select className="custom-select block w-full rounded-lg border-0 bg-slate-50 py-3 pl-4 pr-10 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
</div>
</div>

<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Additional Info</label>
<textarea className="block w-full rounded-lg border-0 bg-slate-50 py-3 px-4 text-slate-700 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-shadow" rows="4"></textarea>
</div>

<div className="md:col-span-2 pt-4">
<button className="w-full md:w-auto rounded-lg bg-sky-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors" type="submit">
                        Confirm Booking
                    </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-slate-50 border-slate-200">
<div className="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="group flex items-center gap-1 mb-4" href="#">
<span className="text-xl font-bold font-nunito tracking-tight text-slate-900">Smiles</span>
<span className="text-xl font-semibold font-jakarta tracking-tight text-slate-800">Dental</span>
<sup className="text-[8px] text-slate-400 -top-1">®</sup>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
            Warsaw's premier dental studio combining luxury care with advanced technology.
          </p>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest mb-6 text-slate-900">Services</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="transition-colors hover:text-sky-600" href="#">Cosmetic</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Implants</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Orthodontics</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Pediatric</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest mb-6 text-slate-900">Clinic</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="transition-colors hover:text-sky-600" href="#">Our Team</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Contact</a></li>
<li><a className="transition-colors hover:text-sky-600" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="border p-6 rounded-lg bg-white border-slate-200">
<p className="text-xs uppercase tracking-widest mb-2 text-slate-400">Emergency</p>
<p className="text-xl font-semibold mb-1 text-slate-900">+48 22 123 4567</p>
<p className="text-xs text-slate-500">Available 24/7 for urgent care</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4 border-slate-200">
<p className="text-xs text-slate-400">© 2024 Smiles Dental. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-sky-600" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-sky-600" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-sky-600" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
