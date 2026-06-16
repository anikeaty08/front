import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Orbit Interactive Logic
    const ring = document.getElementById('orbit-ring');
    const nodes = document.querySelectorAll('.orbit-node');
    const orbitTarget = document.getElementById('orbit-click-target');
    const titleEl = document.getElementById('orbit-title');
    const descEl = document.getElementById('orbit-desc');
    
    let currentRotation = 0;
    
    const content = [
      { title: 'Automated Emails', desc: 'Beautiful email campaigns built and sent instantly without you typing a word.' },
      { title: 'Instant SMS', desc: 'High-converting text messages automatically written and deployed directly to phones.' },
      { title: 'Simple Reports', desc: 'A ridiculously simple dashboard that shows you sales without the confusing metrics.' },
      { title: 'Smart Flows', desc: 'Automated customer journeys fully constructed and launched in seconds.' },
      { title: 'AI Audiences', desc: 'AI perfectly targets your ideal buyers automatically, completely eliminating guesswork.' },
      { title: 'Auto Creative', desc: 'Stunning ad visuals and persuasive copy generated instantly with a single button.' }
    ];

    if (orbitTarget && ring && nodes.length > 0 && titleEl && descEl) {
      orbitTarget.addEventListener('click', () => {
        currentRotation += 60;
        ring.style.transform = `rotate(${currentRotation}deg)`;
        
        // Counter-rotate nodes to keep them upright
        nodes.forEach(node => {
          const baseAngle = parseInt(node.getAttribute('data-base-angle'));
          node.style.transform = `translate(-50%, -50%) rotate(${-(currentRotation + baseAngle)}deg)`;
        });

        // Update active text
        const activeIndex = (Math.abs(currentRotation / 60)) % 6;
        titleEl.style.opacity = '0';
        descEl.style.opacity = '0';
        
        setTimeout(() => {
          titleEl.textContent = content[activeIndex].title;
          descEl.textContent = content[activeIndex].desc;
          titleEl.style.opacity = '1';
          descEl.style.opacity = '1';
        }, 150);
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas className="fixed inset-0 z-0 pointer-events-none" id="bg-interactive"></canvas>
<div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0 mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 300 300\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'1.1\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E\')'}}></div>
<div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-sky-50/40 via-transparent to-blue-50/30"></div>
<div className="relative z-10 min-h-screen flex flex-col">

<header className="w-full border-b border-sky-100/60 backdrop-blur-xl bg-white/70 sticky top-0 z-50 animate-on-scroll opacity-0 -translate-y-4 transition-all duration-700 ease-out">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="flex items-center justify-between py-4">
<div className="text-sm font-semibold tracking-widest text-gray-900 flex items-center gap-1 uppercase">
            BrandClicks <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">.AI</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-sky-600 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-sky-600 transition-colors" href="#platform">Platform</a>
<a className="hover:text-sky-600 transition-colors" href="#results">Results</a>
<a className="hover:text-sky-600 transition-colors" href="#solutions">Solutions</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" href="#">
              Sign In
            </a>
<a className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-white bg-gray-900 hover:bg-sky-600 shadow-sm shadow-sky-500/20 transition-all duration-300 active:scale-95" href="#">
              Launch in 1 Click
            </a>
</div>
</div>
</div>
</header>

<section className="w-full relative pt-24 md:pt-32 pb-12 overflow-hidden bg-white/10">
<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
<img alt="HD Drone overlooking a city" className="min-w-full min-h-full object-cover opacity-[0.20] scale-105" src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&amp;fit=crop&amp;w=2800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-sky-50/70 to-slate-50 backdrop-blur-[1px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm ring-1 ring-sky-100 shadow-sm shadow-sky-100 text-xs font-medium text-gray-600 mb-8 hover:ring-sky-300 transition-colors cursor-default">
<iconify-icon className="text-sky-400" height="16" icon="solar:cpu-linear" strokeWidth="1.5" width="16"></iconify-icon>
            The Ultimate 1-Click Marketing Co-Pilot
            <span className="ml-1.5 bg-sky-50 text-sky-600 px-1.5 py-0.5 rounded text-xs font-semibold tracking-widest uppercase">V2</span>
</div>
<h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-5xl sm:text-7xl md:text-8xl tracking-tight font-semibold text-gray-900 mb-6 leading-[1.1]" style={{transitionDelay: '100ms'}}>
            Marketing, <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400">in Just One Click.</span>
</h1>
<p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-2xl text-base md:text-xl text-gray-600 leading-relaxed font-normal mx-auto mb-10" style={{transitionDelay: '200ms'}}>
            Zero learning curve. Zero complex dashboards. Choose your goal, click once, and watch our AI instantly build and launch your entire marketing campaign.
          </p>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto" style={{transitionDelay: '300ms'}}>
<a className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 active:scale-95" href="#">
              Start Your First Campaign Instantly
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-900 ring-1 ring-sky-100 px-6 py-3 text-sm font-medium hover:bg-sky-50 hover:text-sky-700 shadow-sm transition-all duration-200 active:scale-95" href="#">
              See How Ridiculously Simple It Is
            </a>
</div>
</div>
</div>
</section>

<div className="w-full py-4 mt-8 mb-4 marquee-mask border-y border-sky-100/50 bg-sky-50/40 backdrop-blur-md relative z-20">
<div className="marquee-content gap-8 items-center text-xs tracking-widest uppercase text-sky-600/70 font-medium">
<div className="flex items-center gap-12 shrink-0 px-6">
<span>Instant Launch</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Zero Learning Curve</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Simple</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>No Dashboards</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Push-Button Sales</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Instant Campaigns</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
</div>
<div className="flex items-center gap-12 shrink-0 px-6">
<span>Instant Launch</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Zero Learning Curve</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Simple</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>No Dashboards</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Push-Button Sales</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>Instant Campaigns</span><span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
</div>
</div>
</div>

<section className="w-full py-20 md:py-32 relative z-10 overflow-hidden" id="how-it-works">

<div className="absolute inset-0 z-0 pointer-events-none">
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:dollar-linear" style={{left: '10%', animationDuration: '25s', animationDelay: '0s'}} width="48"></iconify-icon>
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:chart-square-linear" style={{left: '30%', animationDuration: '20s', animationDelay: '-5s'}} width="64"></iconify-icon>
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:dollar-minimalistic-linear" style={{left: '55%', animationDuration: '28s', animationDelay: '-12s'}} width="36"></iconify-icon>
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:chart-linear" style={{left: '75%', animationDuration: '22s', animationDelay: '-8s'}} width="56"></iconify-icon>
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:dollar-linear" style={{left: '90%', animationDuration: '26s', animationDelay: '-2s'}} width="72"></iconify-icon>
<iconify-icon className="absolute text-sky-400/60 animate-float-icon" icon="solar:chart-square-linear" style={{left: '20%', animationDuration: '19s', animationDelay: '-15s'}} width="40"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 text-center">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-500 font-semibold mb-3 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full ring-1 ring-sky-100">
<iconify-icon className="text-sky-400" height="16" icon="solar:layers-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Simple
          </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-gray-900">Literally just one click. We handle the rest.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out h-full bg-white/95 backdrop-blur-sm ring-1 ring-sky-100/50 rounded-3xl p-6 shadow-sm shadow-sky-100 hover:shadow-md hover:shadow-sky-100 hover:ring-sky-200 transition-all tilt-card flex flex-col group" style={{transitionDelay: '100ms'}}>
<div className="flex items-center justify-between mb-6 shrink-0">
<div className="text-4xl text-sky-100 font-semibold tracking-tighter select-none group-hover:text-sky-300 transition-colors">01</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 ring-1 ring-gray-100 bg-gray-50 shrink-0">
<video autoplay="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-laptop-keyboard-close-up-1655-large.mp4"></video>
</div>
<div className="mt-auto">
<div className="text-base font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">Choose Your Goal</div>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Want more sales? Want to recover abandoned carts? Just click what you want. No menus, no confusing settings.</p>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out h-full bg-white/95 backdrop-blur-sm ring-1 ring-sky-100/50 rounded-3xl p-6 shadow-sm shadow-sky-100 hover:shadow-md hover:shadow-sky-100 hover:ring-sky-200 transition-all tilt-card flex flex-col group" style={{transitionDelay: '200ms'}}>
<div className="flex items-center justify-between mb-6 shrink-0">
<div className="text-4xl text-sky-100 font-semibold tracking-tighter select-none group-hover:text-sky-300 transition-colors">02</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 ring-1 ring-gray-100 bg-gray-50 shrink-0">
<video autoplay="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-hand-using-a-computer-mouse-4111-large.mp4"></video>
</div>
<div className="mt-auto">
<div className="text-base font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">AI Does The Work</div>
<p className="text-sm text-gray-500 leading-relaxed font-normal">You don't write a single word. Our AI instantly writes every single email, text message, and ad exactly for your brand.</p>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out h-full bg-white/95 backdrop-blur-sm ring-1 ring-sky-100/50 rounded-3xl p-6 shadow-sm shadow-sky-100 hover:shadow-md hover:shadow-sky-100 hover:ring-sky-200 transition-all tilt-card flex flex-col group" style={{transitionDelay: '300ms'}}>
<div className="flex items-center justify-between mb-6 shrink-0">
<div className="text-4xl text-sky-100 font-semibold tracking-tighter select-none group-hover:text-sky-300 transition-colors">03</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 ring-1 ring-gray-100 bg-gray-50 shrink-0">
<video autoplay="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-interface-3112-large.mp4"></video>
</div>
<div className="mt-auto">
<div className="text-base font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">Click "Launch"</div>
<p className="text-sm text-gray-500 leading-relaxed font-normal">The moment of truth. Hit the single big blue button. Everything goes live instantly across all your channels.</p>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out h-full bg-white/95 backdrop-blur-sm ring-1 ring-sky-100/50 rounded-3xl p-6 shadow-sm shadow-sky-100 hover:shadow-md hover:shadow-sky-100 hover:ring-sky-200 transition-all tilt-card flex flex-col group" style={{transitionDelay: '400ms'}}>
<div className="flex items-center justify-between mb-6 shrink-0">
<div className="text-4xl text-sky-100 font-semibold tracking-tighter select-none group-hover:text-sky-300 transition-colors">04</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 ring-1 ring-gray-100 bg-gray-50 shrink-0">
<video autoplay="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-fast-moving-numbers-and-data-in-a-computer-screen-1372-large.mp4"></video>
</div>
<div className="mt-auto">
<div className="text-base font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">Do Nothing Else</div>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Your job is done in 5 seconds. Sit back and watch the sales roll in on a ridiculously simple reporting screen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 md:py-28 relative z-10 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 border-y border-sky-900" id="platform">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 cyber-grid"></div>
<div className="absolute left-0 right-0 h-1 bg-sky-400/60 shadow-[0_0_20px_4px_rgba(56,189,248,0.5)] absolute animate-cyber-scan"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 text-center">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3 border border-sky-500/30 bg-sky-500/10 px-3 py-1 rounded-full">
<iconify-icon height="16" icon="solar:cpu-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Push-Button Ecosystem
          </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white">Instant deployment. Every marketing channel automated.</h2>
<p className="text-sm text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">Why learn 10 different complicated tools? With a single click, BrandClicks deploys a fully coordinated ecosystem of emails, SMS, and ads that run entirely on autopilot.</p>
</div>

<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out w-full max-w-3xl mx-auto rounded-[2rem] bg-white ring-1 ring-sky-200 p-2 sm:p-4 shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_-15px_rgba(56,189,248,0.4)] transition-shadow duration-500 relative group cursor-pointer" id="orbit-click-target">
<div aria-label="Click to rotate" className="absolute inset-0 z-20"></div>
<div className="w-full rounded-[1.5rem] bg-sky-50/20 ring-1 ring-sky-100/50 overflow-hidden flex flex-col items-center justify-center min-h-[450px] sm:min-h-[550px] relative">
<div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

<div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center mt-6 z-10">

<div className="absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white ring-1 ring-sky-200 shadow-xl shadow-sky-200/50 flex items-center justify-center text-sky-500 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
<div className="absolute inset-0 rounded-full bg-sky-400 opacity-20 animate-ping" style={{animationDuration: '3s'}}></div>
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>

<div className="absolute inset-6 sm:inset-10 border border-sky-200 rounded-full border-dashed opacity-70"></div>

<div className="absolute inset-6 sm:inset-10 transition-transform duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" id="orbit-ring" style={{transform: 'rotate(0deg)'}}>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(0deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="0" style={{transform: 'translate(-50%, -50%) rotate(0deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(60deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="60" style={{transform: 'translate(-50%, -50%) rotate(-60deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(120deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="120" style={{transform: 'translate(-50%, -50%) rotate(-120deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:chart-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(180deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="180" style={{transform: 'translate(-50%, -50%) rotate(-180deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:branching-paths-up-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(240deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="240" style={{transform: 'translate(-50%, -50%) rotate(-240deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{transform: 'rotate(300deg)'}}>
<div className="orbit-node absolute top-0 left-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white ring-1 ring-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto" data-base-angle="300" style={{transform: 'translate(-50%, -50%) rotate(-300deg)'}}>
<iconify-icon className="text-sky-400" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-8 mb-6 text-center px-4 relative z-10 h-20 flex flex-col items-center justify-center">
<h3 className="text-xl font-semibold text-gray-900 transition-all duration-300" id="orbit-title">Automated Emails</h3>
<p className="text-sm text-gray-500 mt-2 max-w-xs transition-all duration-300" id="orbit-desc">Beautiful email campaigns built and sent instantly without you typing a word.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 md:py-32 relative z-10 overflow-hidden" id="results">

<div className="absolute inset-0 z-0 pointer-events-none">
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:document-text-linear" strokeWidth="1.5" style={{left: '15%', animationDuration: '24s', animationDelay: '0s'}} width="48"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:book-2-linear" strokeWidth="1.5" style={{left: '35%', animationDuration: '28s', animationDelay: '-7s'}} width="64"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:global-linear" strokeWidth="1.5" style={{left: '55%', animationDuration: '21s', animationDelay: '-14s'}} width="40"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:document-text-linear" strokeWidth="1.5" style={{left: '75%', animationDuration: '26s', animationDelay: '-4s'}} width="56"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:global-linear" strokeWidth="1.5" style={{left: '90%', animationDuration: '30s', animationDelay: '-18s'}} width="72"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:book-2-linear" strokeWidth="1.5" style={{left: '5%', animationDuration: '23s', animationDelay: '-11s'}} width="36"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 text-center">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-500 font-semibold mb-3">
<iconify-icon className="text-sky-400" height="16" icon="solar:medal-star-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Real Success Stories
          </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-gray-900">Massive growth. Absolutely zero effort.</h2>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out animate-drift grid grid-cols-1 md:grid-cols-3 gap-6 w-full" style={{transitionDelay: '100ms'}}>
<div className="h-full bg-white ring-1 ring-sky-100 rounded-[2rem] overflow-hidden shadow-sm shadow-sky-100 hover:shadow-xl hover:shadow-sky-500/10 hover:ring-sky-200 transition-all duration-300 flex flex-col group tilt-card">
<div className="w-full aspect-video bg-sky-50 overflow-hidden relative shrink-0">
<img alt="Office success" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full ring-1 ring-white/30">Neo-Tech</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-4 leading-snug group-hover:text-sky-600 transition-colors">"Going global took exactly one click. Our sales expanded overnight."</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal mb-8 grow">Neo-Tech clicked one button to launch automated campaigns that adapted to new regions instantly, doubling their international footprint without adding a single extra staff member or configuring complex rules.</p>
<div className="flex items-center gap-3 pt-5 border-t border-sky-50 mt-auto">
<img alt="Sarah J." className="w-10 h-10 rounded-full bg-sky-100 ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?img=32"/>
<div>
<div className="text-xs font-semibold text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500">CMO, Neo-Tech</div>
</div>
</div>
</div>
</div>
<div className="h-full bg-white ring-1 ring-sky-100 rounded-[2rem] overflow-hidden shadow-sm shadow-sky-100 hover:shadow-xl hover:shadow-sky-500/10 hover:ring-sky-200 transition-all duration-300 flex flex-col group tilt-card">
<div className="w-full aspect-video bg-sky-50 overflow-hidden relative shrink-0">
<img alt="Analytics success" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full ring-1 ring-white/30">Aura DTC</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-4 leading-snug group-hover:text-sky-600 transition-colors">"We flipped a single switch and recovered $1.2M in abandoned carts with zero work."</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal mb-8 grow">Aura DTC just hit the "Recover Carts" button. The AI immediately started texting and emailing lost shoppers, turning missed opportunities into massive revenue without any daily management.</p>
<div className="flex items-center gap-3 pt-5 border-t border-sky-50 mt-auto">
<img alt="Michael T." className="w-10 h-10 rounded-full bg-sky-100 ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-xs font-semibold text-gray-900">Michael Torres</div>
<div className="text-xs text-gray-500">Founder, Aura DTC</div>
</div>
</div>
</div>
</div>
<div className="h-full bg-white ring-1 ring-sky-100 rounded-[2rem] overflow-hidden shadow-sm shadow-sky-100 hover:shadow-xl hover:shadow-sky-500/10 hover:ring-sky-200 transition-all duration-300 flex flex-col group tilt-card">
<div className="w-full aspect-video bg-sky-50 overflow-hidden relative shrink-0">
<img alt="Professional success" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full ring-1 ring-white/30">Core Gear</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-4 leading-snug group-hover:text-sky-600 transition-colors">"Migrating our shoppers to our site was as simple as pushing a single button."</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal mb-8 grow">Core Gear clicked one button to activate the "Store Migration" goal. Automated SMS sequences instantly brought their Amazon buyers directly to their own storefront website.</p>
<div className="flex items-center gap-3 pt-5 border-t border-sky-50 mt-auto">
<img alt="David L." className="w-10 h-10 rounded-full bg-sky-100 ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?img=68"/>
<div>
<div className="text-xs font-semibold text-gray-900">David Lin</div>
<div className="text-xs text-gray-500">VP of E-commerce</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 md:py-32 relative z-10 bg-white/60 backdrop-blur-lg border-y border-sky-100/60 overflow-hidden" id="solutions">

<div className="absolute inset-0 z-0 pointer-events-none">
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:hand-stars-linear" strokeWidth="1.5" style={{left: '12%', animationDuration: '22s', animationDelay: '0s'}} width="48"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:cart-large-2-linear" strokeWidth="1.5" style={{left: '32%', animationDuration: '26s', animationDelay: '-5s'}} width="64"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:rocket-linear" strokeWidth="1.5" style={{left: '50%', animationDuration: '20s', animationDelay: '-12s'}} width="40"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:restart-linear" strokeWidth="1.5" style={{left: '68%', animationDuration: '24s', animationDelay: '-8s'}} width="56"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:graph-up-linear" strokeWidth="1.5" style={{left: '88%', animationDuration: '28s', animationDelay: '-2s'}} width="72"></iconify-icon>
<iconify-icon className="absolute text-sky-400/50 animate-float-icon" icon="solar:crown-star-linear" strokeWidth="1.5" style={{left: '5%', animationDuration: '19s', animationDelay: '-15s'}} width="36"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 text-center">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-500 font-semibold mb-3">
<iconify-icon className="text-sky-400" height="16" icon="solar:widget-5-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Zero Setup Needed
          </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-gray-900">Complex marketing, radically simplified.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out p-6 bg-white ring-1 ring-sky-100/50 rounded-3xl hover:shadow-lg hover:shadow-sky-500/10 hover:ring-sky-200 transition-all group flex flex-col tilt-card" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-sky-50 ring-1 ring-sky-100 flex items-center justify-center mb-4 text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Email Blasts</h3>
<p className="text-sm text-gray-500 leading-relaxed">Never drag-and-drop a template again. Our AI writes the subject line, designs the body, and sends highly converting newsletters instantly.</p>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out p-6 bg-white ring-1 ring-sky-100/50 rounded-3xl hover:shadow-lg hover:shadow-sky-500/10 hover:ring-sky-200 transition-all group flex flex-col tilt-card" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-sky-50 ring-1 ring-sky-100 flex items-center justify-center mb-4 text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Cart Recovery</h3>
<p className="text-sm text-gray-500 leading-relaxed">Literally just flip a switch. It automatically texts and emails shoppers who left items behind to get them to checkout.</p>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out p-6 bg-white ring-1 ring-sky-100/50 rounded-3xl hover:shadow-lg hover:shadow-sky-500/10 hover:ring-sky-200 transition-all group flex flex-col tilt-card" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 rounded-lg bg-sky-50 ring-1 ring-sky-100 flex items-center justify-center mb-4 text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Effortless Ad Campaigns</h3>
<p className="text-sm text-gray-500 leading-relaxed">Skip the complex Meta/Google managers. One click deploys targeted ads directly to your most likely buyers. No expertise needed.</p>
</div>
</div>
</div>
</section>

<footer className="w-full py-12 mt-auto bg-white/50 backdrop-blur-md border-t border-sky-100/50 text-center relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-sm font-semibold tracking-widest text-gray-900 flex items-center justify-center gap-1 uppercase mb-4">
            BrandClicks <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">.AI</span>
</div>
<p className="text-sm text-gray-500">© 2026 BrandClicks AI. The easiest marketing platform on earth.</p>
</div>
</footer>
</div>


    </>
  );
}
