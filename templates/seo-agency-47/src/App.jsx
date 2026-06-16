import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    (function () {
      const el = document.querySelector('[data-element-id="aura-emhf08ark1ibdlzjf"]');
      if (!el || el.dataset.motionBound === 'true') return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      el.dataset.motionBound = 'true';

      const nudge = () => {
        if (!el.isConnected) return;

        const dx = (Math.random() * 2 - 1) * 2; // -2px to 2px
        const dy = (Math.random() * 2 - 1) * 2; // -2px to 2px
        const rot = (Math.random() * 2 - 1) * 0.6; // -0.6deg to 0.6deg
        const scale = 1 + Math.random() * 0.004; // 1 to 1.004

        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scale})`;

        const backDelay = 800 + Math.floor(Math.random() * 600); // 800–1400ms
        setTimeout(() => {
          if (!el.isConnected) return;
          el.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)';

          const nextDelay = 3000 + Math.floor(Math.random() * 5000); // 3–8s
          setTimeout(nudge, nextDelay);
        }, backDelay);
      };

      const startDelay = 2000 + Math.floor(Math.random() * 2000); // 2–4s
      setTimeout(nudge, startDelay);
    })();
  


    (function () {
      const root = document.querySelector('[data-element-id="aura-emhf0exmw1kfth8q6"]');
      if (!root) return;
      const openBtn = root.querySelector('[data-mobile-open]');
      const overlay = root.querySelector('[data-mobile-overlay]');
      const panel = overlay ? overlay.querySelector('#mobile-menu') : null;
      const closeEls = root.querySelectorAll('[data-mobile-close]');
      if (!openBtn || !overlay || !panel) return;

      const menuIcon = openBtn.querySelector('[data-icon="menu"]');
      const closeIcon = openBtn.querySelector('[data-icon="close"]');

      function openMenu() {
        overlay.classList.remove('hidden');
        panel.classList.remove('translate-x-full');
        if (menuIcon && closeIcon) {
          menuIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
        }
        openBtn.setAttribute('aria-expanded', 'true');
        document.documentElement.classList.add('overflow-hidden');
      }

      function closeMenu() {
        panel.classList.add('translate-x-full');
        setTimeout(() => {
          overlay.classList.add('hidden');
        }, 200);
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
        openBtn.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('overflow-hidden');
      }

      openBtn.addEventListener('click', () => {
        const isHidden = overlay.classList.contains('hidden');
        isHidden ? openMenu() : closeMenu();
      });

      closeEls.forEach((el) => el.addEventListener('click', closeMenu));
      overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    })();
  


    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-50 pt-4">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="border rounded-full pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
</a><a className="inline-flex items-center justify-center bg-center w-[260px] h-[140px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e2f82a2a-feac-49ac-81db-21f35de811b2_1600w.png)] max-w-sm bg-cover rounded" href="#" style={{transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)', transformOrigin: '50% 50%', willChange: 'transform', maskImage: 'linear-gradient(100deg, transparent, black 30%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 30%, black 65%, transparent)'}}>

</a>
<nav className="hidden md:flex text-xl font-thin gap-x-8 gap-y-8 items-center text-white/80">
<a className="transition-colors font-sans font-light hover:text-white" href="#services" style={{}}>How It Works</a>
<a className="transition-colors font-sans font-light hover:text-white" href="#results" style={{}}>Results</a>
<a className="transition-colors font-sans font-light hover:text-white" href="#testimonials" style={{}}>Assessment</a>
<a className="transition-colors font-sans font-light hover:text-white" href="#contact" style={{}}>Resources</a>
</nav>
<div className="flex items-center gap-3">
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-full border w-10 h-10 transition-colors border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10" data-mobile-open="" type="button">
<svg className="lucide lucide-menu w-5 h-5" data-icon="menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-5 h-5 hidden" data-icon="close" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden md:hidden" data-mobile-overlay="">
<div className="absolute inset-0 backdrop-blur-sm bg-black/60" data-mobile-close=""></div>
<aside className="absolute inset-y-0 right-0 w-[88%] max-w-sm border rounded-l-3xl shadow-2xl backdrop-blur-xl translate-x-full transition-transform duration-200 bg-white/5 border-white/10" id="mobile-menu">
<div className="flex items-center justify-between pt-4 pr-4 pb-4 pl-5">
<a aria-label="Home" className="inline-flex items-center justify-center bg-center w-[120px] h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dfaab735-fa18-4791-afa5-229d15c6cfa1_1600w.png)] bg-cover rounded" href="#"></a>
<button aria-label="Close menu" className="inline-flex items-center justify-center rounded-full border w-10 h-10 transition-colors border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10" data-mobile-close="" type="button">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="h-px bg-white/10"></div>
<nav className="pt-3 pr-5 pb-5 pl-5">
<a className="flex items-center justify-between py-3 text-lg transition-colors font-sans font-light text-white/80 hover:text-white" href="#services" style={{}}>
          How It Works
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-3 text-lg transition-colors font-sans font-light text-white/80 hover:text-white" href="#results" style={{}}>
          Results
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-3 text-lg transition-colors font-sans font-light text-white/80 hover:text-white" href="#testimonials" style={{}}>
          Assessment
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-3 text-lg transition-colors font-sans font-light text-white/80 hover:text-white" href="#contact" style={{}}>
          Resources
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</nav>
<div className="px-5 pb-6">
<div className="inline-block w-full">
<a className="codepen-button-aura w-full" href="#contact">
<span className="w-full font-sans font-light" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Fix My Local Marketing
            </span>
</a>
</div>
</div>
</aside>
</div>

</div>
</div>
</header>

<main className="z-10 pt-24 relative">
<section className="md:pl-6 md:pr-6 md:pt-20 text-center max-w-6xl mt-20 mr-auto mb-20 ml-auto pt-12 pr-6 pl-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="inline-flex gap-2 text-xs border rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 items-center backdrop-blur-sm text-white/80 bg-white/5 border-white/10">
<svg className="lucide lucide-trending-up h-3.5 w-3.5 text-white/80" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans font-light" style={{}}>Local SEO, Web Dev &amp; PPC — Solved</span>
<span className="mx-1 h-1 w-1 rounded-full bg-white/40"></span>
<span className="font-sans font-light text-white/60" style={{}}>Trusted by 500+ local businesses</span>
</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl tracking-tighter mt-6 pt-2 pb-2 drop-shadow-lg font-bricolage font-light" style={{maskImage: 'linear-gradient(110deg, transparent, black 35%, black 70%, transparent)'}}>
        End the headaches from <span className="bg-gradient-to-r bg-clip-text text-transparent font-bricolage font-light from-blue-400 to-purple-400" style={{}}>Local SEO • Web Dev • PPC</span>
</h1>
<p className="mt-5 text-base md:text-lg max-w-3xl mx-auto font-sans font-light text-white/70" style={{}}>
        Tired of not showing in Maps, slow sites that don’t convert, and PPC that burns budget? We fix inconsistent listings, rebuild slow pages, and make ads trackable—so you get qualified leads you can see and measure.
      </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center [animation:fadeSlideIn_0.8s_ease-out_0.3s_both]">
<div className="inline-block">
<a className="codepen-button-aura" href="#contact">
<span className="font-sans font-light" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Fix My Local Marketing
            </span>
</a>
</div>
<a className="border-gradient inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm transition-colors backdrop-blur-sm font-sans font-light bg-white/5 text-white hover:bg-white/10" href="#services" style={{}}>
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          See How We Fix It
        </a>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] text-white/70">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-trophy h-4 w-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-sm font-sans font-light" style={{}}>Transparent reporting</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-sans font-light" style={{}}>Lower CPA in 90 days</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-sans font-light" style={{}}>Faster sites, higher conversions</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 90%, transparent)'}}>
<div className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden border-gradient border border-white/10">
<img alt="Local SEO Expert" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f80d1daa-cb94-4a23-ba5e-148174e2b5ed_800w.webp"/>
</div>
<div className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden border-gradient border border-white/10">
<img alt="Web Performance &amp; Speed" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_800w.jpg"/>
</div>
<div className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden border-gradient border border-white/10">
<img alt="PPC Results &amp; Insights" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_800w.jpg"/>
</div>
<div className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden border-gradient border border-white/10">
<img alt="Conversion Tracking" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e080ec8d-304b-41cc-a8e7-c2b6efc8ab07_800w.jpg"/>
</div>
</div>
</section>

<section className="md:mt-32 max-w-7xl mt-24 mr-auto ml-auto pt-16 pr-6 pb-6 pl-6 relative">
<div className="text-center">
<p className="uppercase text-sm tracking-wide font-sans font-light text-white/40" style={{}}>
          Trusted by Industry Leaders
        </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-6 will-change-transform animate-[marquee-left_30s_linear_infinite]">
<div className="flex shrink-0 gap-x-20 gap-y-6">
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>AT&amp;T</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>SONY MUSIC</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>E&amp;E REMODELING</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>TOTAL CAPITAL INC</div>
<div className="inline-flex text-xl font text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] items-center justify-center">ESSENCE DOCUMENTS</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>REMODEL ME PROS</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>SIMPLY HOME REMODELING</div>
</div>
<div className="flex shrink-0 gap-x-20">
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>NEXUS</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>ZENITH</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>ORBIT</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>APEX</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>PRIME</div>
<div className="inline-flex items-center justify-center mix-blend-screen w-[120px] h-[40px] text-xl tracking-tight font-sans font-light text-white/40" style={{}}>VAULT</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 max-w-7xl rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-neutral-950" id="services" style={{position: 'relative', overflow: 'hidden'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-sans font-light text-zinc-300" style={{}}>For Local Businesses: SEO, Web Dev, PPC</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] tracking-tighter mt-2 font-bricolage font-light text-zinc-100" style={{maskImage: 'linear-gradient(140deg, transparent, black 30%, black 75%, transparent)'}}>Fix what's blocking leads and revenue.</h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-black/5 via-black/10 to-black/5"></div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<p className="text-sm tracking-tight font-sans font-light text-zinc-100" style={{}}>Local SEO pain points solved</p>
<p className="mt-1 text-sm font-sans font-light text-zinc-300" style={{}}>We clean up inconsistent NAP citations, improve Google Business Profile rankings, fix slow, non-converting pages, and stop wasted ad spend with tight targeting and negatives.</p>
<div className="inline-block mt-4">
<a className="codepen-button-aura" href="#contact">
<span className="font-sans font-light" style={{}}>
                      Get a Free Local Assessment
                    </span>
</a>
</div>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent to-transparent sm:block hidden via-black/10"></div>
<p className="text-base leading-relaxed sm:text-right sm:pl-8 font-sans font-light text-zinc-200" style={{}}>
                  We rebuild slow layouts for speed and conversions, set up GA4 and call tracking end-to-end, and align PPC with real intent—so every click, call, and form is tracked and attributable.
                </p>
</div>
</div>
</div>
</div>
<div className="relative h-[520px] overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<style>
            @keyframes marquee-vertical-seo {
              from { transform: translateY(0); }
              to { transform: translateY(-50%); }
            }
            .animate-marquee-vertical-seo {
              animation: marquee-vertical-seo 40s linear infinite;
            }
          </style>
<div className="animate-marquee-vertical-seo">
<div className="grid grid-cols-2 gap-4 mb-4">
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Local SEO &amp; Maps" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800&amp;q=80"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Maps 3‑Pack</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Google Business Profile</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Conversion Tracking" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Tracking Setup</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>GA4 + Call Tracking</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Website Performance" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Website Speed</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Core Web Vitals</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="PPC Optimization" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c825ee85-0bba-42f5-affd-b7ef33b7a58c_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Ad Spend Waste</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Reduce CPA</p>
</div>
</article>
</div>
<div className="grid grid-cols-2 gap-4">
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Local SEO &amp; Maps" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1b98a0e-8414-4f43-97f4-7f19e45fabca_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Maps 3‑Pack</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Google Business Profile</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Conversion Tracking" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Tracking Setup</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>GA4 + Call Tracking</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="Website Performance" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Website Speed</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Core Web Vitals</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br border rounded-2xl from-zinc-800/50 to-zinc-900/50 border-black/30">
<img alt="PPC Optimization" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c825ee85-0bba-42f5-affd-b7ef33b7a58c_800w.jpg"/>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md backdrop-blur text-[11px] border font-sans font-light bg-black/60 text-zinc-300 border-black/30" style={{}}>Ad Spend Waste</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-lg tracking-tight leading-tight font-sans font-light text-white" style={{}}>Reduce CPA</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4" id="results">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 uppercase tracking-tight font-sans font-light bg-cyan-400/10 text-cyan-300 ring-cyan-300/20" style={{}}>
<svg className="lucide lucide-bar-chart h-3.5 w-3.5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
          Performance
        </span>
<h2 className="sm:text-5xl text-4xl tracking-tight mt-4 font-bricolage font-light" style={{maskImage: 'linear-gradient(60deg, transparent, black 40%, black 70%, transparent)'}}>
          Know what's working—local, web, and ads
        </h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-sans font-light text-neutral-300" style={{}}>
          Clear dashboards tie calls, forms, and revenue to channels. Connect GBP insights, GA4, ad platforms, and your CRM—no more guessing where leads come from.
        </p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-6 sm:gap-10">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-search h-5 w-5 text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-bar-chart-2 h-5 w-5 text-white" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-trending-up h-5 w-5 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-target h-5 w-5 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-activity h-5 w-5 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-globe h-5 w-5 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
</div>
<div className="relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<defs>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="3.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<circle cx="150" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#22D3EE" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl ring-2 bg-cyan-400/20 ring-cyan-300/40" style={{boxShadow: '0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(34,211,238,0.3)'}}>
<svg className="lucide lucide-zap h-6 w-6 text-cyan-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
</div>
</div>
<div className="mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-gauge h-4 w-4 text-cyan-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="font-sans font-light" style={{}}>Call &amp; form tracking</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-cyan-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-cyan-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-sans font-light" style={{}}>Clear, honest reporting</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-cyan-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-trending-up h-4 w-4 text-cyan-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans font-light" style={{}}>Lower cost per lead</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-cyan-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-users h-4 w-4 text-cyan-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-sans font-light" style={{}}>Local-first strategy</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mt-24 md:mt-32 relative" id="testimonials">
<div className="sm:p-8 border-gradient rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-lg bg-white/5">
<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter font-bricolage font-light text-white" style={{maskImage: 'linear-gradient(120deg, transparent, black 25%, black 60%, transparent)'}}>Client Success.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/20" role="separator"></span>
<p className="sm:text-base text-sm mt-1 tracking-tight font-sans font-light text-white/60" style={{}}>Local proof. Real results.</p>
</div>
<div className="h-px mt-4 bg-white/20"></div>
<div className="relative mt-8">
<div className="overflow-hidden h-[420px] rounded-3xl relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 gap-x-6 gap-y-6 items-center" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] border rounded-[24px] p-8 backdrop-blur-sm snap-center -rotate-2 shadow-2xl border-gradient bg-white/5 border-white/10 text-white">
<p className="text-lg sm:text-xl md:text-2xl tracking-tighter font-bricolage font-light text-white" style={{}}>
                  "We weren’t showing in the local 3‑pack and calls were drying up. Within 90 days we hit top-3 for core terms and set up call tracking, so I finally see which channels drive revenue."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_320w.jpg"/>
<div>
<div className="text-sm tracking-tight font-sans font-light" style={{}}>Jennifer Walsh</div>
<div className="text-xs tracking-tight font-sans font-light text-white/50" style={{}}>CEO, TechStart</div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] border rounded-[24px] p-8 backdrop-blur-sm snap-center rotate-1 shadow-2xl border-gradient bg-white/5 border-white/10 text-white">
<p className="text-lg sm:text-xl md:text-2xl tracking-tighter font-bricolage font-light text-white" style={{}}>
                  "Our site was slow and ads were expensive. They rebuilt key pages (CWV 90+), fixed forms, and tightened keywords—cost per lead dropped 38% without increasing spend."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3487391c-84ae-4ac0-b0c5-ab8a77cba264_320w.jpg"/>
<div>
<div className="text-sm tracking-tight font-sans font-light" style={{}}>Marcus Rodriguez</div>
<div className="text-xs tracking-tight font-sans font-light text-white/50" style={{}}>Founder, GrowthCo</div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] border rounded-[24px] p-8 backdrop-blur-sm snap-center -rotate-1 shadow-2xl border-gradient bg-white/5 border-white/10 text-white">
<p className="text-lg sm:text-xl md:text-2xl tracking-tighter font-bricolage font-light text-white" style={{}}>
                  "Finally a partner who explains everything. From GBP optimizations to GA4 and CRM integration—we have end‑to‑end attribution and better quality leads."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_320w.jpg"/>
<div>
<div className="text-sm tracking-tight font-sans font-light" style={{}}>Alicia Chen</div>
<div className="text-xs tracking-tight font-sans font-light text-white/50" style={{}}>CMO, Digital Solutions</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl sm:px-6 sm:mt-10 mt-8 mr-auto mb-16 ml-auto pr-4 pl-4" id="contact">
<div className="relative overflow-hidden rounded-[40px] border shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8 border-white/10 bg-neutral-950 text-white">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="text-[16vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-geist">
<span className="block font-bricolage font-light" style={{maskImage: 'linear-gradient(120deg, transparent, black 20%, black 60%, transparent)'}}>Ready to fix your</span>
<span className="block font-bricolage font-light text-white/60" style={{maskImage: 'linear-gradient(140deg, transparent, black 30%, black 75%, transparent)'}}>local SEO, website, and PPC?</span>
</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="">
<p className="text-sm font-sans font-light text-white/60" style={{}}>Get Started</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight font-geist text-white" href="mailto:steve@stevemartinseo.com">
<svg className="lucide lucide-mail w-5 h-5 stroke-[1.5] flex-shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="break-all font-bricolage font-light" style={{}}>steve@stevemartinseo.com</span>
</a>
</div>
<div className="">
<p className="text-sm font-sans font-light text-white/60" style={{}}>Schedule a Call</p>
<a className="inline-flex items-center gap-2 transition-colors duration-200 text-sm font-medium tracking-tight border rounded-full mt-2 pt-3 pr-5 pb-3 pl-5 hover:bg-white/90 text-gray-900 bg-white border-white/10" href="#" style={{maskImage: 'linear-gradient(330deg, transparent, black 35%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(330deg, transparent, black 35%, black 70%, transparent)'}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-sans font-light" style={{}}>Book Strategy Session</span>
</a>
</div>
<div className="">
<p className="text-sm font-sans font-light text-white/60" style={{}}>Follow Along</p>
<div className="flex flex-wrap mt-2 gap-x-3 gap-y-3 items-center" style={{maskImage: 'linear-gradient(140deg, transparent, black 25%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 25%, black 70%, transparent)'}}>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight border rounded-full pt-3 pr-4 pb-3 pl-4 transition-colors duration-200 text-gray-900 bg-white border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span className="font-sans font-light" style={{}}>5.2K</span>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-200 bg-white text-gray-900 border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-200 bg-white text-gray-900 border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-200 bg-white text-gray-900 border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<p className="text-sm font-sans font-light text-white/60" style={{}}>Explore</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="tracking-tight hover:underline font-sans font-light" href="#services" style={{}}>Services</a>
<a className="tracking-tight hover:underline font-sans font-light" href="#results" style={{}}>Results</a>
<a className="tracking-tight hover:underline font-sans font-light" href="#testimonials" style={{}}>Testimonials</a>
<a className="tracking-tight hover:underline font-sans font-light" href="#contact" style={{}}>Contact</a>
</div>
</div>
<div className="">
<p className="text-sm font-sans font-light text-white/60" style={{}}>Legal</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="tracking-tight hover:underline font-sans font-light" href="#" style={{}}>Terms &amp; Conditions</a>
<a className="tracking-tight hover:underline font-sans font-light" href="#" style={{}}>Privacy Policy</a>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs font-sans font-light text-white/70" style={{}}>© 2025 Steve Martin — Local SEO, Web Dev &amp; PPC for Business Owners</p>
</div>
</div>
</div>
</main>


    </>
  );
}
