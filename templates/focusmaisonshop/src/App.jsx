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



    (()=>{"use strict";
      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      // Reveal on enter
      const revealEls=[...document.querySelectorAll("[data-reveal]")];
      if("IntersectionObserver"in window){
        const io=new IntersectionObserver((entries)=>{
          for(const e of entries){
            if(e.isIntersecting){
              const el=e.target;
              el.classList.add("transition","duration-500","ease-out","opacity-100","translate-y-0");
              el.classList.remove("opacity-0","translate-y-2");
              io.unobserve(el);
            }
          }
        },{threshold:.12});
        revealEls.forEach(el=>io.observe(el));
      }else{revealEls.forEach(el=>{el.classList.remove("opacity-0","translate-y-2");});}

      // Parallax (max 14px)
      const img=document.getElementById("hero-img");
      let active=false, lastY=0;
      if(img && !prefersReduced && "IntersectionObserver"in window){
        const cap=14;
        const raf=()=>{img.style.transform=`translate3d(0,${lastY.toFixed(2)}px,0)`;active=false;};
        const onScroll=()=>{
          const rect=img.getBoundingClientRect();
          const vh=window.innerHeight||document.documentElement.clientHeight;
          const p=Math.min(1,Math.max(0,(vh-rect.top)/(vh+rect.height)));
          lastY=(p-.5)*cap*2;
          if(!active){active=true;requestAnimationFrame(raf);}
        };
        const io2=new IntersectionObserver((entries)=>{
          for(const e of entries){
            if(e.isIntersecting){window.addEventListener("scroll",onScroll,{passive:true});onScroll();}
            else{window.removeEventListener("scroll",onScroll);img.style.transform="translate3d(0,0,0)";}
          }
        },{threshold:[0,1]});
        io2.observe(img);
      }

      // CTA hover subtle lift
      const cta=document.querySelector('#hero a[href^="https://buy.stripe.com"]');
      if(cta){cta.style.transition="transform .2s ease, box-shadow .2s ease, filter .2s ease";
        cta.addEventListener("pointerenter",()=>{cta.style.transform="translateY(-1px) scale(1.02)";cta.style.boxShadow="0 14px 36px rgba(212,175,55,.28)";});
        cta.addEventListener("pointerleave",()=>{cta.style.transform="translateY(0) scale(1)";cta.style.boxShadow="0 8px 24px rgba(212,175,55,.18)";});
      }

      // Accordéon (si présent)
      document.querySelectorAll("[data-accordion-button]").forEach(btn=>{
        btn.addEventListener("click",()=>{
          const panel=document.getElementById(btn.getAttribute("aria-controls"));
          const expanded=btn.getAttribute("aria-expanded")==="true";
          btn.setAttribute("aria-expanded",String(!expanded));
          if(panel){panel.hidden=expanded;}
        });
      });
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
      <div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3b9a860-6d1a-4f31-a841-945398bd70fd_1600w.png")'}}></div>

<main aria-label="Section de mise en avant avec appel à l’action" className="relative overflow-hidden" role="main">

<div className="absolute inset-0 -z-10" style="background:
      radial-gradient(1200px 600px at 70% 20%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%),
      radial-gradient(60% 80% at 50% 40%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 65%),
      linear-gradient(180deg,#0D1321 0%,#0F172A 100%);">
</div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22&gt', backgroundSize: '200px 200px'}}></div>

<div className="absolute inset-0 -z-10">
<span className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/60 blur-[2px] animate-pulse" style={{top: '12%', left: '14%', animationDuration: '2.8s'}}></span>
<span className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 blur-[1.5px] animate-pulse" style={{top: '36%', right: '18%', animationDuration: '3.4s'}}></span>
<span className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 blur-[1.5px] animate-pulse" style={{bottom: '22%', left: '28%', animationDuration: '3.8s'}}></span>
</div>

<section className="mx-auto max-w-[1200px] px-6 sm:px-8 md:px-10 py-20 md:py-28" id="hero">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

<div className="lg:col-span-6 xl:col-span-5 space-y-6">
<div className="will-change-transform" data-reveal="">
<h6 className="text-xs uppercase tracking-[0.18em] text-white/60">REPRENDS LE</h6>
<h1 className="mt-2 font-bold tracking-tight" style={{fontSize: 'clamp(40px,6vw,72px)', lineHeight: '1.04'}}>
              CONTRÔLE.<br/>MAÎTRISE-TOI.
            </h1>
</div>
<p className="text-white/80 leading-relaxed max-w-prose will-change-transform" data-reveal="" style={{transitionDelay: '60ms'}}>
            Un guide essentiel pour faire taire le bruit, reprendre ton pouvoir intérieur et reconstruire ta discipline.
          </p>

<ul className="space-y-3 will-change-transform" data-reveal="" style={{transitionDelay: '90ms'}}>
<li className="flex items-start gap-3">
<span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#D4AF37]" style={{boxShadow: '0 0 40px rgba(212,175,55,.12)'}}></span>
<span className="text-white/80">Programme minimaliste pour retrouver ton focus.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#D4AF37]" style={{boxShadow: '0 0 40px rgba(212,175,55,.12)'}}></span>
<span className="text-white/80">Dopamine sous contrôle, énergie dirigée.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#D4AF37]" style={{boxShadow: '0 0 40px rgba(212,175,55,.12)'}}></span>
<span className="text-white/80">Système simple, durable, tenable.</span>
</li>
</ul>

<div className="will-change-transform" data-reveal="" style={{transitionDelay: '120ms'}}>
<a aria-label="Acheter FOCUS via Stripe" className="inline-flex items-center gap-2 text-[#0B0B0B] font-semibold rounded-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2" href="https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D" rel="nofollow noopener" style={{background: 'linear-gradient(rgb(227, 196, 111) 0%, rgb(212, 175, 55) 100%)', padding: '14px 22px', boxShadow: 'rgba(212, 175, 55, 0.18) 0px 8px 24px', transform: 'translateZ(0px)', willChange: 'transform, filter', transition: 'transform 0.2s, box-shadow 0.2s, filter 0.2s'}} target="_blank">
<svg aria-hidden="true" className="shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.9 4.6L18 9.5l-4.1 1.9L12 16l-1.9-4.6L6 9.5l4.1-1.9L12 3z"></path>
<path d="M20 3l.95 2.3L24 6l-2.05.95L20 9l-.95-2.05L17 6l2.05-.7L20 3z"></path>
<path d="M4 14l.8 1.9L7 17l-2.2.8L4 20l-.8-2.2L1 17l2.2-.8L4 14z"></path>
</svg>
<span>OBTENIR FOCUS — 12,90 €</span>
</a>
<div aria-live="polite" className="mt-3 flex items-center gap-2 text-sm text-white/70">
<svg aria-label="Sécurisé" className="opacity-80" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span>Paiement sécurisé · Accès instantané</span>
</div>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-7">
</div>
</div>
</section>

</main>
<noscript>
    &lt;div className="fixed inset-x-3 bottom-3 rounded-lg border border-white/20 bg-[#0D1321] px-3 py-2 text-sm font-semibold"&gt;
      Astuce: activez JavaScript pour le léger effet de parallaxe. Le contenu reste pleinement accessible.
    &lt;/div&gt;
  </noscript>



    </>
  );
}
