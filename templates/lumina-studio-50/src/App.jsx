import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Animated counters
      function animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const suffix = element.dataset.suffix || '';
        const decimals = parseInt(element.dataset.decimals) || 0;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          if (decimals > 0) {
            element.textContent = current.toFixed(decimals) + suffix;
          } else {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
          }
        }, 16);
      }

      // Initialize counters when stats container is visible
      const statsContainer = document.getElementById('statsContainer');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
              setTimeout(() => animateCounter(counter), 500);
            });
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(statsContainer);

      // Activity panel toggle
      const activityToggle = document.getElementById('activityToggle');
      const activityList = document.getElementById('activityList');
      const activityFooter = document.getElementById('activityFooter');

      activityToggle.addEventListener('click', () => {
        const isHidden = activityList.classList.contains('hidden');
        if (isHidden) {
          activityList.classList.remove('hidden');
          activityFooter.classList.remove('hidden');
        } else {
          activityList.classList.add('hidden');
          activityFooter.classList.add('hidden');
        }
      });

      // Scroll animations
      const scrollElements = document.querySelectorAll('.scroll-animate');
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });

      scrollElements.forEach(el => scrollObserver.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="krvLrHX3sj3cg8BHywDj"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-20">
<div className="absolute -top-32 -left-32 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.15),transparent_70%)] blur-3xl"></div>
<div className="absolute top-1/3 -right-32 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(175,82,222,0.12),transparent_70%)] blur-3xl"></div>
<div className="absolute -bottom-32 left-1/4 h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,199,89,0.08),transparent_70%)] blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1400px_600px_at_50%_0%,rgba(0,122,255,0.08),transparent),radial-gradient(1200px_500px_at_80%_100%,rgba(175,82,222,0.06),transparent)]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 animate-fade-in delay-0 backdrop-blur-xl bg-black/20 border-b border-white/10" style={{animationPlayState: 'running'}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex lg:py-6 pt-4 pb-4 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative">
<svg className="" fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M16.4666 9.98601C16.4666 9.98601 21.596 9.33699 26 11.3334C28.1175 12.2933 29.7798 13.6204 30.9149 14.7107L30.92 14.7029C31.6572 17.5844 31.4396 20.7292 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.2684 11.3573 16.3357 10.6738 16.4573 9.98113L16.4666 9.98601Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M13.9746 23.4789C11.8918 25.2168 7.71515 26.4899 7.71515 26.4899C8.93912 27.9749 10.5052 29.217 12.3655 30.0844C12.8609 30.3154 13.3632 30.5134 13.8699 30.6791C14.0151 30.6328 14.1603 30.5864 14.3053 30.5399C15.133 30.2741 15.9575 30.0014 16.7635 29.6829C18.3761 29.046 19.9175 28.2253 21.2715 26.9077C22.5979 25.6171 23.8898 23.6366 24.8487 21.9828C25.3286 21.1552 25.7258 20.4079 26.0032 19.8676C26.1418 19.5974 26.2505 19.3789 26.3246 19.2279L26.3599 19.1556C25.9732 18.8502 25.5735 18.5894 25.1695 18.401C22.6281 17.2159 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 16.0131 21.7778 13.9746 23.4789Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M18.1298 4.66446C18.1298 4.66446 16.1759 9.03514 16.2932 11.9774C16.3906 14.4202 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.0131 21.7779 13.9746 23.4789C11.8918 25.2168 7.7151 26.49 7.7151 26.49C4.54807 22.6477 3.67169 17.1791 5.91629 12.3655C8.19652 7.47555 13.0649 4.61836 18.1298 4.66446Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.1759 9.03508 18.1298 4.6644 18.1298 4.6644C19.9775 4.68122 21.8514 5.08435 23.6353 5.91619C30.3092 9.02827 33.1966 16.9613 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">.71515 26.4899C7.71515 26.4899 11.8918 25.2168 13.9746 23.4789C16.0131 21.7778 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 22.6281 17.2159 25.1695 18.401C27.7108 19.586 30.0845 23.6352 30.0845 23.6352C26.9725 30.3091 19.0394 33.1965 12.3655 30.0844C10.5052 29.217 8.93912 27.9749 7.71515 26.4899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=""&gt;</path>
</svg>
</div>
<span className="text-xl font-display font-semibold tracking-tight" style={{}}>Lumina Studio</span>
</a>
<nav className="hidden md:flex items-center gap-1 text-sm font-medium">
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#features" style={{}}>Features</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#gallery" style={{}}>Gallery</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#testimonials" style={{}}>Testimonials</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#pricing" style={{}}>Pricing</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#support" style={{}}>Support</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl" style={{}}>
          Sign In
        </button>
<button className="group relative inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/20">
<span className="relative z-10" style={{}}>Get Started</span>
<div className="absolute inset-0 rounded-xl bg-white opacity-0 blur-lg group-hover:opacity-20 transition-opacity"></div>
</button>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="">
<section className="relative lg:pt-32 lg:pb-24 pt-8 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">

<div className="relative z-10 lg:col-span-6 xl:col-span-5">
<div className="animate-slide-up delay-200 mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></span>
<span className="text-xs font-medium" style={{}}>AI-Powered Creation</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<span className="text-xs" style={{}}>Now Available</span>
</div>
<h1 className="animate-slide-up delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-6 font-geist font-light tracking-tighter" style={{animationPlayState: 'running'}}>
                Create Beyond
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>Imagination</span>
</h1>
<p className="animate-slide-up delay-500 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/70 mb-8" style={{animationPlayState: 'running'}}>
                Transform your creative vision into stunning reality with our advanced AI studio. From concept to creation, bring your wildest ideas to life with unprecedented precision and artistry.
              </p>
<div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{animationPlayState: 'running'}}>
<button className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span style={{}}>Start Creating</span>
<div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl group-hover:opacity-25 transition-opacity"></div>
</button>
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="" style={{}}>Watch Demo</span>
</button>
</div>

<div className="animate-slide-up delay-900 grid grid-cols-3 gap-8 mt-12" id="statsContainer" style={{animationPlayState: 'running'}}>
<div>
<div className="text-2xl text-white font-geist font-light tracking-tighter" style={{}}>
<span className="counter" data-suffix="+" data-target="2000000">0</span>
</div>
<div className="text-sm text-white/60 mt-1" style={{}}>Creations</div>
</div>
<div className="">
<div className="text-2xl text-white font-geist font-light tracking-tighter" style={{}}>
<span className="counter" data-suffix="+" data-target="50000">0</span>
</div>
<div className="text-sm text-white/60 mt-1" style={{}}>Artists</div>
</div>
<div className="">
<div className="text-2xl text-white font-geist font-light tracking-tighter" style={{}}>
<span className="counter" data-decimals="1" data-suffix="%" data-target="99.9">0</span>
</div>
<div className="text-sm text-white/60 mt-1" style={{}}>Uptime</div>
</div>
</div>
</div>

<div className="relative lg:col-span-6 xl:col-span-7">

<div className="animate-blur-in delay-500 relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/5 shadow-2xl shadow-black/40" style={{animationPlayState: 'running'}}>
<img alt="AI Generated Art" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2012f549-ddcb-4a4a-beb4-d602bbe116c2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" style={{}}></div>

<div className="glow-light"></div>

<div className="absolute top-4 right-4">
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-black/40 p-3 backdrop-blur-xl ring-1 ring-white/10">
<div className="text-sm font-medium text-white" style={{}}>Ethereal Landscape</div>
<div className="text-xs text-white/70 mt-0.5" style={{}}>Generated in 3.2 seconds</div>
</div>
</div>
</div>

<div className="animate-slide-up delay-1100 absolute -bottom-16 right-0 w-full max-w-sm lg:absolute lg:right-0 lg:top-8 lg:-bottom-auto lg:w-80" style={{animationPlayState: 'running'}}>
<div className="relative shadow-black/40 ring-1 ring-white/10 bg-white/20 border-white/15 border rounded-2xl mr-5 pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-3xl" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'}}>
<div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<div className="inline-flex h-9 w-9 ring-1 ring-white/20 bg-neutral-50/20 rounded-xl items-center justify-center">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-base font-display font-semibold" style={{}}>Live Activity</h3>
</div>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" id="activityToggle">
<svg className="stroke-[1.5] w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3 hidden" id="activityList">

<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate" style={{}}>Image Enhancement</p>
<p className="text-xs text-white/60" style={{}}>Enhanced • 2 mins ago</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 stroke-[2] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate" style={{}}>Style Transfer</p>
<p className="text-xs text-white/60" style={{}}>Processing • 5 mins ago</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl ring-1 ring-white/15 shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.2 1.2 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate" style={{}}>AI Generation</p>
<p className="text-xs text-white/60" style={{}}>Completed • 8 mins ago</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 stroke-[2] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 hidden" id="activityFooter">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
      Start New Project
    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter" style={{}}>
              Illuminate Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>Creative Process</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed" style={{}}>
              Experience the future of creative expression with Lumina's advanced AI-powered tools designed to amplify your artistic vision.
            </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 lg:p-8 ring-1 ring-white/5 shadow-2xl shadow-black/40">
<div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Neural Networks" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a8a6a2b-b092-45fa-8841-49e21aad6579_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</button>
</div>
</div>
<div>
<h3 className="text-xl font-display font-semibold tracking-tight mb-3" style={{}}>Neural Networks</h3>
<p className="text-white/70 leading-relaxed mb-6" style={{}}>Advanced deep learning models trained on millions of artistic masterpieces to understand style, composition, and creative intent.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    Explore Models
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Real-time Collaboration" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91128fd1-ca2a-44e1-b4e8-678711b5c5f4_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
<div className="">
<h3 className="text-xl font-display font-semibold tracking-tight mb-3" style={{}}>Team Collaboration</h3>
<p className="text-white/70 leading-relaxed mb-6" style={{}}>Work together seamlessly with real-time collaboration tools, version control, and instant feedback loops for creative teams.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                    Join Workspace
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Advanced Tools" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a63e1c25-72f0-45b9-bdc0-c52907914b49_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="">
<h3 className="text-xl font-display font-semibold tracking-tight mb-3" style={{}}>Advanced Tools</h3>
<p className="text-white/70 leading-relaxed mb-6" style={{}}>Professional-grade editing suite with precision controls, custom brushes, and intelligent automation for pixel-perfect results.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
                    View Toolkit
                  </button>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter" style={{}}>
              Where Light Meets
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>Artistry</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed" style={{}}>
              Discover breathtaking creations from our community of artists, each piece illuminated by the power of AI-enhanced creativity.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Abstract Art" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8eb0f134-ad73-4767-934c-a816876c5a4c_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1" style={{}}>Luminous Dreams</h4>
<p className="text-xs text-white/70" style={{}}>Digital painting enhanced with AI</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Surreal Landscape" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b535e27a-5611-40e0-a6fd-24d3fdc4aa08_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1" style={{}}>Ethereal Realms</h4>
<p className="text-xs text-white/70" style={{}}>AI-generated surreal landscape</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Futuristic Art" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/905eec03-e9d1-4c06-ac00-75f4081ef1b6_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1" style={{}}>Neon Futures</h4>
<p className="text-xs text-white/70" style={{}}>Cyberpunk-inspired creation</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5 md:col-span-2">
<img alt="Abstract Portrait" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a8a6a2b-b092-45fa-8841-49e21aad6579_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 ring-1 ring-white/10">
<h4 className="text-lg font-semibold text-white mb-2" style={{}}>Illuminated Being</h4>
<p className="text-sm text-white/70 max-w-md" style={{}}>A striking portrait that blends human emotion with digital light, showcasing the harmony between technology and artistry.</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Digital Art" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3f1ce1e-0214-4406-9122-f084f36f4fc8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1" style={{}}>Digital Cosmos</h4>
<p className="text-xs text-white/70" style={{}}>Space-inspired digital art</p>
</div>
</div>
</div>
</div>
<div className="text-center">
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span style={{}}>Explore Full Gallery</span>
</button>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter" style={{}}>
              Trusted by
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>Creative Minds</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed" style={{}}>
              See what artists, designers, and creators are saying about their experience with Lumina Studio.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6" style={{}}>
                  "Lumina Studio has revolutionized my creative workflow. The AI assistance feels like having a brilliant collaborator who understands my vision perfectly."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Sarah Chen" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg"/>
<div>
<div className="font-semibold text-white" style={{}}>Sarah Chen</div>
<div className="text-sm text-white/60" style={{}}>Digital Artist</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6" style={{}}>
                  "The collaborative features are game-changing. Our team's productivity has increased 300% since switching to Lumina Studio."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Marcus Rodriguez" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg"/>
<div>
<div className="font-semibold text-white" style={{}}>Marcus Rodriguez</div>
<div className="text-sm text-white/60" style={{}}>Creative Director</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6" style={{}}>
                  "As a freelance designer, Lumina Studio gives me enterprise-level tools at an affordable price. It's like having a superpower."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Elena Vasquez" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg"/>
<div>
<div className="font-semibold text-white" style={{}}>Elena Vasquez</div>
<div className="text-sm text-white/60" style={{}}>Freelance Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative lg:py-32 in-view pt-20 pb-20" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-light tracking-tighter font-geist mb-6" style={{}}>
              Choose Your
              <span className="block bg-clip-text font-light text-transparent tracking-tighter font-geist bg-gradient-to-r from-blue-400 via-purple-400 to-green-400" style={{}}>Creative Plan</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed" style={{}}>
              Flexible pricing options designed to grow with your creative ambitions. Start free and upgrade as you illuminate new possibilities.
            </p>
</div>
<div className="flex justify-center">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.10) inset', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle className="" cx="10" cy="8" r="5"></circle><path className="" d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Starter</h3>
<p className="text-xs text-neutral-500" style={{}}>Perfect for beginners</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter" style={{}}>$0</span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<p className="text-xs text-neutral-500 mt-1" style={{}}>No credit card required</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</div>
                    5 AI generations per day
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Basic editing tools
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    1GB cloud storage
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Community support
                  </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
                  Get Started Free
                </button>
</div>

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', backgroundImage: 'radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset'}}>
<div style={{overflow: 'hidden', pointerEvents: 'none', position: 'absolute', zIndex: '-10', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)', backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)', borderRadius: '1rem'}}>
<div style={{content: '\'\'', pointerEvents: 'none', position: 'fixed', zIndex: '200', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'left', width: '200%', height: '10rem', backgroundImage: 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)', animation: 'rotate 8s linear infinite'}}></div>
</div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Pro</h3>
<p className="text-xs text-neutral-500" style={{}}>Perfect for professionals</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter" style={{}}>$19</span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<p className="text-xs text-neutral-500 mt-1" style={{}}>14-day free trial</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-purple-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Unlimited AI generations
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-purple-600 rounded-full">
<svg className="" fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Advanced editing tools
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-purple-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    100GB cloud storage
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-purple-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Priority support
                  </li>
</ul>
<button className="w-full inline-flex gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm font-semibold text-white bg-gradient-to-br from-[#4d22b3] to-[#d357fe] rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center" style={{}}>
                  Start Free Trial
                </button>
</div>

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.10) inset', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Enterprise</h3>
<p className="text-xs text-neutral-500" style={{}}>For large teams</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter" style={{}}>$99</span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Custom pricing available</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-orange-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Everything in Pro
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-orange-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Unlimited team members
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-orange-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    1TB cloud storage
                  </li>
<li className="flex items-start gap-3" style={{}}>
<div className="flex justify-center items-center w-4 h-4 bg-orange-600 rounded-full">
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    24/7 dedicated support
                  </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200" style={{}}>
                  Contact Sales
                </button>
</div>
</div></div>
</div>
</section>
</main>

<footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<svg0 0="" 36="" 36"="" className="" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16.4666 9.98601C16.4666 9.98601 21.596 9.33699 26 11.3334C28.1175 12.2933 29.7798 13.6204 30.9149 14.7107L30.92 14.7029C31.6572 17.5844 31.4396 20.7292 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.2684 11.3573 16.3357 10.6738 16.4573 9.98113L16.4666 9.98601Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M13.9746 23.4789C11.8918 25.2168 7.71515 26.4899 7.71515 26.4899C8.93912 27.9749 10.5052 29.217 12.3655 30.0844C12.8609 30.3154 13.3632 30.5134 13.8699 30.6791C14.0151 30.6328 14.1603 30.5864 14.3053 30.5399C15.133 30.2741 15.9575 30.0014 16.7635 29.6829C18.3761 29.046 19.9175 28.2253 21.2715 26.9077C22.5979 25.6171 23.8898 23.6366 24.8487 21.9828C25.3286 21.1552 25.7258 20.4079 26.0032 19.8676C26.1418 19.5974 26.2505 19.3789 26.3246 19.2279L26.3599 19.1556C25.9732 18.8502 25.5735 18.5894 25.1695 18.401C22.6281 17.2159 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 16.0131 21.7778 13.9746 23.4789Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<span className="text-xl font-display font-semibold tracking-tight">Lumina Studio</span>
</svg0></div>
<p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Illuminating creativity through advanced AI technology. Transform your artistic vision into stunning reality with tools designed for the future of creative expression.
            </p>
<div className="flex items-center gap-4">
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.759-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z.017.001 12.017 0z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">API</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Roadmap</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-4">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-white/60 hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/60">© 2024 Lumina Studio. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
