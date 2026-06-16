import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Solar icons: enforce stroke width 1.5
    document.querySelectorAll('iconify-icon').forEach((el) => el.setAttribute('stroke-width', '1.5'));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const mm = document.getElementById('mobileMenu');
        if (mm && !mm.classList.contains('hidden')) mm.classList.add('hidden');
      });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Scroll progress indicator
    const bar = document.getElementById('scrollbar');
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      bar.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal on scroll with cascade
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setInitial = (el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(2.5rem) scale(0.95)';
      el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out';
      el.style.willChange = 'transform, opacity';
    };

    const reveal = (el, delay = 0) => {
      el.style.transitionDelay = delay + 's';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
      if (el.classList.contains('cta') || el.classList.contains('card')) {
        el.style.boxShadow = el.classList.contains('cta')
          ? '0 18px 70px rgba(231, 76, 60, 0.28)'
          : '0 14px 50px rgba(231, 76, 60, 0.10)';
      }
    };

    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    if (!prefersReduced) revealEls.forEach(setInitial);
    else revealEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });

    if (!prefersReduced) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const staggerGroup = el.hasAttribute('data-stagger') ? el.parentElement : null;

          if (staggerGroup) {
            const items = Array.from(staggerGroup.querySelectorAll('[data-stagger].reveal'));
            items.forEach((item, idx) => reveal(item, 0.08 * idx));
            items.forEach(item => io.unobserve(item));
          } else {
            reveal(el, 0);
            io.unobserve(el);
          }
        });
      }, { threshold: 0.18 });

      revealEls.forEach(el => io.observe(el));
    }

    // Micro-interactions: links underline animation & CTA pulse
    document.querySelectorAll('.navlink').forEach(link => {
      link.style.backgroundImage = 'linear-gradient(#E74C3C, #E74C3C)';
      link.style.backgroundRepeat = 'no-repeat';
      link.style.backgroundPosition = '0 100%';
      link.style.backgroundSize = '0% 2px';
      link.style.transition = 'color 0.25s ease-out, background-size 0.25s ease-out';
      link.addEventListener('mouseenter', () => link.style.backgroundSize = '100% 2px');
      link.addEventListener('mouseleave', () => link.style.backgroundSize = '0% 2px');
      link.addEventListener('focus', () => link.style.backgroundSize = '100% 2px');
      link.addEventListener('blur', () => link.style.backgroundSize = '0% 2px');
    });

    const ctas = document.querySelectorAll('.cta');
    ctas.forEach(btn => {
      btn.style.backgroundSize = '140% 140%';
      btn.style.backgroundPosition = '0% 50%';
      btn.style.transition = 'transform 0.25s ease-out, box-shadow 0.25s ease-out, filter 0.25s ease-out, background-position 0.25s ease-out';
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-0.25rem) scale(1.05) rotate(1deg)';
        btn.style.backgroundPosition = '100% 50%';
        btn.style.boxShadow = '0 22px 90px rgba(231, 76, 60, 0.40)';
        btn.style.filter = 'saturate(1.05)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        btn.style.backgroundPosition = '0% 50%';
        btn.style.boxShadow = btn.classList.contains('cta-strong')
          ? '0 18px 70px rgba(231, 76, 60, 0.30)'
          : '0 18px 60px rgba(231, 76, 60, 0.26)';
        btn.style.filter = 'none';
      });
    });

    document.querySelectorAll('.card').forEach(card => {
      card.style.transition = 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-0.5rem)';
        card.style.boxShadow = '0 22px 90px rgba(231, 76, 60, 0.14)';
        card.style.background = 'linear-gradient(180deg, rgba(231,76,60,0.06), rgba(255,255,255,0.85) 40%)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow =
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-white"></div>
<div className="absolute -top-48 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl" style={{background: 'radial-gradient(circle at 50% 50%, rgba(231, 76, 60, 0.18), rgba(231, 76, 60, 0) 60%)'}}></div>
<div className="absolute top-32 right-[-10rem] h-[34rem] w-[34rem] rounded-full blur-3xl" style={{background: 'radial-gradient(circle at 50% 50%, rgba(230, 126, 34, 0.16), rgba(230, 126, 34, 0) 62%)'}}></div>
<div className="absolute inset-0 opacity-[0.35]" style={{backgroundImage: 'radial-gradient(rgba(26,26,26,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.92) 35%, rgba(255,255,255,1))'}}></div>
</div>

<div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
<div className="h-full w-0" id="scrollbar" style={{background: 'linear-gradient(90deg, rgb(231, 76, 60), rgb(230, 126, 34))', boxShadow: 'rgba(231, 76, 60, 0.18) 0px 4px 20px', width: '0%'}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur border-b border-black/5" style={{backgroundColor: 'rgba(255,255,255,0.78)'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md" href="#top" style={{-TwRingColor: '#E74C3C'}}>
<div className="grid place-items-center bg-white/80 w-9 h-9 border-black/10 border rounded-lg overflow-hidden" style={{boxShadow: '0 8px 30px rgba(231, 76, 60, 0.10), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<img alt="Logo Le Passage" className="bg-center w-full h-full object-cover pt-0.5 pr-0.5 pb-0.5 pl-0.5" decoding="async" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed5545ca-37c4-4802-8a41-db72dc254e9d_1600w.png"/>
</div>
<div className="hidden sm:block">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>LE PASSAGE</div>
<div className="text-xs text-[#4A4A4A]">Force Intérieure</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="navlink text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#concept" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Concept</a>
<a className="navlink text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#programme" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Programme</a>
<a className="navlink text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#investissement" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Investissement</a>
<a className="navlink text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#rejoindre" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Rejoindre</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#rejoindre" style={{background: 'linear-gradient(90deg, #E74C3C, #E67E22)', boxShadow: '0 12px 45px rgba(231, 76, 60, 0.22)', -TwRingColor: '#E74C3C'}}>
            Rejoindre
          </a>
<button aria-label="Ouvrir le menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" id="menuBtn" style={{boxShadow: '0 10px 35px rgba(231, 76, 60, 0.10), inset 0 1px 0 rgba(255,255,255,0.7)', -TwRingColor: '#E74C3C'}}>
<iconify-icon className="h-5 w-5 text-[#1A1A1A]" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-black/5 bg-white/90 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm font-medium">
<a className="navlink py-2 text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#concept" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Concept</a>
<a className="navlink py-2 text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#programme" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Programme</a>
<a className="navlink py-2 text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#investissement" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Investissement</a>
<a className="navlink py-2 text-[#1A1A1A] hover:text-[#E74C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm" href="#rejoindre" style={{-TwRingColor: '#E74C3C', backgroundImage: 'linear-gradient(rgb(231, 76, 60), rgb(231, 76, 60))', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 100%', backgroundSize: '0% 2px', transition: 'color 0.25s ease-out, background-size 0.25s ease-out'}}>Rejoindre</a>
<a className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#rejoindre" style={{background: 'linear-gradient(90deg, #E74C3C, #E67E22)', boxShadow: '0 16px 55px rgba(231, 76, 60, 0.26)', -TwRingColor: '#E74C3C'}}>
          Rejoindre
        </a>
</div>
</div>
</header>
<main className="" id="top">

<section className="bg-transparent relative" style={{paddingTop: '8.75rem', paddingBottom: '8.75rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="reveal inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs font-semibold text-white" style={{background: 'linear-gradient(90deg, #E74C3C, #E67E22)', boxShadow: '0 10px 40px rgba(231, 76, 60, 0.18)'}}>
<span className="tracking-tight">PROGRAMME DE TRANSFORMATION • 3 MOIS</span>
<span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span className="text-white/90">v1.0</span>
</div>
<div className="h-8"></div>
<h1 className="reveal text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
<span className="text-[#1A1A1A]">LE </span><span className="text-[#E74C3C]" style={{textShadow: '0 18px 60px rgba(231, 76, 60, 0.25)'}}>PASSAGE</span>
</h1>
<div className="h-6"></div>
<p className="reveal sm:text-2xl lg:text-3xl leading-relaxed text-xl text-[#4A4A4A] max-w-4xl" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            La formation, accompagnement, entraînement pour transformer sa force intérieure en force rayonnante
          </p>
<div className="h-12"></div>
<a className="reveal cta inline-flex items-center justify-center rounded-full text-white font-semibold text-base sm:text-lg px-10 sm:px-12 py-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-[90%] sm:w-auto" href="#rejoindre" style={{background: 'linear-gradient(90deg, #E74C3C, #E67E22)', boxShadow: '0 18px 60px rgba(231, 76, 60, 0.26)', -TwRingColor: '#E74C3C'}}>
            Rejoindre Le Passage
          </a>
<div className="h-5"></div>
<p className="reveal sm:text-sm text-xs text-[#4A4A4A]" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Places limitées • Prochaine session [AVRIL 2026]
          </p>
<div className="h-10"></div>
<div className="reveal h-0.5 w-24 rounded-full" style={{background: 'linear-gradient(90deg, #E74C3C, #E67E22)'}}></div>
</div>
</div>
</section>

<section className="bg-[#F8F8F8]/70 backdrop-blur" id="concept" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
            Tu es arrivé à un <span className="text-[#E74C3C]">tournant</span> de ta vie
          </h2>
<div className="h-10"></div>
<p className="reveal mx-auto max-w-3xl text-xl sm:text-2xl text-[#1A1A1A] leading-relaxed" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Tu sens en toi un <span className="font-semibold text-[#E74C3C]">potentiel inexploité</span>.
          </p>
<div className="h-5"></div>
<p className="reveal text-xl sm:text-2xl text-[#1A1A1A] leading-relaxed" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Une force qui ne demande qu'à s'exprimer pleinement.
          </p>
<div className="h-12"></div>
<p className="reveal text-lg sm:text-xl font-semibold text-[#4A4A4A]" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Tu aspires à :
          </p>
</div>
<div className="h-8"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="reveal card bg-white/80 backdrop-blur border-black/5 border rounded-lg pt-8 pr-8 pb-8 pl-8" style={{borderLeft: '0.25rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<div className="flex items-start gap-4">
<div className="mt-1 text-[#E74C3C]">
<iconify-icon className="h-6 w-6" icon="solar:fire-linear"></iconify-icon>
</div>
<p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
<span className="font-semibold">Incarner cette force tranquille</span> qui inspire et élève les autres
              </p>
</div>
</div>
<div className="reveal card bg-white/80 backdrop-blur border-black/5 border rounded-lg pt-8 pr-8 pb-8 pl-8" style={{borderLeft: '0.25rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<div className="flex items-start gap-4">
<div className="mt-1 text-[#E74C3C]">
<iconify-icon className="h-6 w-6" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
<span className="font-semibold">Créer un impact profond</span> dans tes relations et ton environnement
              </p>
</div>
</div>
<div className="reveal card bg-white/80 backdrop-blur rounded-lg p-8 border border-black/5" style={{borderLeft: '0.25rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<div className="flex items-start gap-4">
<div className="mt-1 text-[#E74C3C]">
<iconify-icon className="w-6 h-6" height="24" icon="solar:sun-outline" style={{color: 'rgb(231, 76, 60)'}} width="24"></iconify-icon>
</div>
<p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
<span className="font-semibold">Rayonner naturellement</span> sans effort ni épuisement
              </p>
</div>
</div>
<div className="reveal card bg-white/80 backdrop-blur border-black/5 border rounded-lg pt-8 pr-8 pb-8 pl-8" style={{borderLeft: '0.25rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<div className="flex items-start gap-4">
<div className="mt-1 text-[#E74C3C]">
<iconify-icon className="h-6 w-6" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
<span className="font-semibold">Vivre depuis ton essence</span> plutôt que de réagir aux circonstances
              </p>
</div>
</div>
</div>
<div className="h-14"></div>
<div className="reveal mx-auto max-w-3xl rounded-lg bg-white/80 backdrop-blur p-10 border border-black/5" style={{border: '0.125rem solid #E74C3C', boxShadow: '0 16px 60px rgba(231, 76, 60, 0.10), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="h-6"></div>
<p className="sm:text-2xl leading-relaxed text-xl font-semibold text-[#E74C3C]">Peut-être est-il temps pour toi de faire le passage…</p>
<div className="h-6"></div>
</div>
</div>
</section>

<section className="bg-transparent" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
          Le Passage est <span className="text-[#E74C3C]">pour toi</span> si...
        </h2>
<div className="h-16"></div>
<div className="mx-auto max-w-4xl">
<div className="reveal flex items-start gap-4" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C] leading-none">
<iconify-icon className="h-8 w-8" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-[#1A1A1A]">Tu veux <span className="font-semibold text-[#E74C3C]">cultiver une force intérieure stable</span> qui te porte dans toutes les situations</p>
</div>
<div className="h-8"></div>
<div className="reveal flex items-start gap-4" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C] leading-none">
<iconify-icon className="h-8 w-8" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-[#1A1A1A]">Tu aspires à <span className="font-semibold text-[#E74C3C]">sortir des dynamiques relationnelles limitantes</span> pour créer des relations d'alliance</p>
</div>
<div className="h-8"></div>
<div className="reveal flex items-start gap-4" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C] leading-none">
<iconify-icon className="h-8 w-8" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-[#1A1A1A]">Tu cherches à <span className="font-semibold text-[#E74C3C]">amplifier le sens</span> dans chaque aspect de ta vie</p>
</div>
<div className="h-8"></div>
<div className="reveal flex items-start gap-4" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C] leading-none">
<iconify-icon className="h-8 w-8" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-[#1A1A1A]">Tu désires <span className="font-semibold text-[#E74C3C]">devenir un agent d'amour</span> et d'élévation dans tes relations</p>
</div>
<div className="h-8"></div>
<div className="reveal flex items-start gap-4" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C] leading-none">
<iconify-icon className="h-8 w-8" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-[#1A1A1A]">Tu es <span className="font-semibold text-[#E74C3C]">prêt à t'aligner</span> avec ta vérité profonde et tes valeurs sacrées</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F8F8]/70 backdrop-blur" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
          Ce que tu vas développer pendant ces <span className="text-[#E74C3C]">3 mois</span>
</h2>
<div className="h-16"></div>
<div className="mx-auto max-w-4xl flex flex-col gap-8">
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:atom-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ta <span className="text-[#E74C3C]">Force</span> Intérieure
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Bâtir un socle solide et inébranlable qui ne dépend plus des circonstances extérieures. Vivre depuis ton centre, quoi qu'il arrive.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:restart-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ton <span className="text-[#E74C3C]">Espace</span> de Choix
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Développer cette capacité précieuse à faire une pause consciente et à choisir tes réactions et tes directions plutôt que de subir.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ta Capacité d'<span className="text-[#E74C3C]">Aimer</span> et de Rayonner
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Sur ton nouveau socle de force, retrouver la capacité d'aimer pleinement, de te réjouir sincèrement et de rayonner naturellement.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ta <span className="text-[#E74C3C]">Maîtrise</span> Relationnelle
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Acquérir des compétences de positionnement relationnel pour créer des alliances puissantes et sortir définitivement des jeux de pouvoir.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:compass-big-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ta <span className="text-[#E74C3C]">Connexion</span> au Sens
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Reconnecter avec ce qui donne profondément du sens à ta vie et amplifier cette sensation au quotidien.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:hand-heart-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ton Rôle d'<span className="text-[#E74C3C]">Agent</span> d'Amour
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Incarner discrètement mais puissamment l'amour dans tes relations et rayonner cette énergie dans ton environnement.
                </p>
</div>
</div>
</article>
<article className="reveal card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderTop: '0.1875rem solid #E74C3C', boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="flex items-start gap-4">
<div className="text-[#E74C3C] leading-none">
<iconify-icon className="h-10 w-10" icon="solar:shield-keyhole-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Ton <span className="text-[#E74C3C]">Alignement</span> Profond
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Comprendre et pratiquer concrètement l'alignement avec la vérité absolue et toutes les qualités divines qui t'habitent.
                </p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-transparent" id="programme" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
          Le Programme - <span className="text-[#E74C3C]">3 Mois</span> de Transformation
        </h2>
<div className="h-16"></div>
<div className="mx-auto max-w-4xl relative">
<div className="absolute left-5 sm:left-6 top-0 bottom-0 w-1 rounded-full" style={{background: 'linear-gradient(180deg, #E74C3C, #E67E22)', boxShadow: '0 10px 40px rgba(231, 76, 60, 0.16)'}}></div>
<div className="flex flex-col gap-8">
<div className="reveal relative pl-16 sm:pl-20" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="absolute left-1 sm:left-2 top-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur border border-black/10 grid place-items-center" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<iconify-icon className="h-6 w-6 text-[#E74C3C]" icon="solar:sunrise-linear"></iconify-icon>
</div>
<div className="card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderLeft: '0.25rem solid rgb(231, 76, 60)', boxShadow: 'rgba(231, 76, 60, 0.10) 0px 14px 50px, inset 0 1px 0 rgba(255,255,255,0.75)', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out'}}>
<div className="inline-flex items-center rounded-full px-5 py-2 text-xs font-semibold text-white" style={{backgroundColor: '#E74C3C'}}>
                  Séminaire d'ouverture
                </div>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight mt-4" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>1 journée en ligne - Vendredi 3 avril - Rediffusion prévue</h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Une journée immersive pour poser les fondations du Passage, rencontrer le groupe et te préparer à cette aventure intérieure.
                </p>
</div>
</div>
<div className="reveal relative pl-16 sm:pl-20" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="absolute left-1 sm:left-2 top-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur border border-black/10 grid place-items-center" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<iconify-icon className="h-6 w-6 text-[#E74C3C]" icon="solar:book-2-linear"></iconify-icon>
</div>
<div className="card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderLeft: '0.25rem solid rgb(231, 76, 60)', boxShadow: 'rgba(231, 76, 60, 0.10) 0px 14px 50px, inset 0 1px 0 rgba(255,255,255,0.75)', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out'}}>
<div className="inline-flex items-center rounded-full px-5 py-2 text-xs font-semibold text-white" style={{backgroundColor: '#E74C3C'}}>
                  12 Lives hebdomadaires
                </div>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight mt-4" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>90 minutes chaque semaine - Dimanche de 10h30 à 12h00</h3>
<ul className="mt-4 space-y-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
<li className="flex items-start gap-3">
<span className="mt-2 h-2 w-2 rounded-full shrink-0" style={{backgroundColor: '#E74C3C'}}></span>
<span>60 minutes d'enseignement profond sur les concepts, modèles de pensée et pratiques</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 h-2 w-2 rounded-full shrink-0" style={{backgroundColor: '#E74C3C'}}></span>
<span>30 minutes de questions-réponses pour ancrer les apprentissages</span>
</li>
</ul>
</div>
</div>
<div className="reveal relative pl-16 sm:pl-20" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="absolute left-1 sm:left-2 top-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur border border-black/10 grid place-items-center" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<iconify-icon className="h-6 w-6 text-[#E74C3C]" icon="solar:chat-round-linear"></iconify-icon>
</div>
<div className="card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderLeft: '0.25rem solid rgb(231, 76, 60)', boxShadow: 'rgba(231, 76, 60, 0.10) 0px 14px 50px, inset 0 1px 0 rgba(255,255,255,0.75)', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out'}}>
<div className="inline-flex items-center rounded-full px-5 py-2 text-xs font-semibold text-white" style={{backgroundColor: '#E74C3C'}}>
                  Accompagnement continu
                </div>
<h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                  Canal Telegram privé
                </h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Un espace privilégié où je réponds à tes questions, où tu partages tes expériences et où la communauté du Passage te soutient au quotidien.
                </p>
</div>
</div>
<div className="reveal relative pl-16 sm:pl-20" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="absolute left-1 sm:left-2 top-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur border border-black/10 grid place-items-center" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<iconify-icon className="h-6 w-6 text-[#E74C3C]" icon="solar:confetti-minimalistic-linear"></iconify-icon>
</div>
<div className="card bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{borderLeft: '0.25rem solid rgb(231, 76, 60)', boxShadow: 'rgba(231, 76, 60, 0.10) 0px 14px 50px, inset 0 1px 0 rgba(255,255,255,0.75)', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out'}}>
<div className="inline-flex items-center rounded-full px-5 py-2 text-xs font-semibold text-white" style={{backgroundColor: '#E74C3C'}}>
                  Séminaire de clôture
                </div>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight mt-4" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>1 journée en présentiel - Septembre 2026 - Toulouse - Dates à venir</h3>
<p className="mt-3 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Célébrer ton Passage, ancrer tes transformations, rencontrer physiquement la communauté et repartir avec une feuille de route pour continuer à incarner ta Force Intérieure.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F8F8]/70 backdrop-blur" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
          Ce qui rend Le Passage <span className="text-[#E74C3C]">unique</span>
</h2>
<div className="h-16"></div>
<div className="mx-auto max-w-5xl flex flex-col gap-10">
<div className="reveal flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C]">
<iconify-icon className="h-8 w-8" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
              Un <span className="font-semibold text-[#E74C3C]">ENTRAINEMENT pratique quotidien</span> - pas seulement de la théorie
            </p>
</div>
<div className="reveal flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C]">
<iconify-icon className="h-8 w-8" icon="solar:flame-linear"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
              Une <span className="font-semibold text-[#E74C3C]">TRANSFORMATION profonde sur 3 mois</span> - pas un simple stage ponctuel
            </p>
</div>
<div className="reveal flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C]">
<iconify-icon className="h-8 w-8" icon="solar:planet-linear"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
              Un <span className="font-semibold text-[#E74C3C]">alignement corps-esprit-âme</span> - développement personnel ET dimension spirituelle
            </p>
</div>
<div className="reveal flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C]">
<iconify-icon className="h-8 w-8" icon="solar:people-nearby-linear"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
              Une <span className="font-semibold text-[#E74C3C]">communauté inspirante</span> - tu progresses avec d'autres personnes engagées vers leur Force Intérieure
            </p>
</div>
<div className="reveal flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<div className="shrink-0 text-[#E74C3C]">
<iconify-icon className="h-8 w-8" icon="solar:bolt-linear"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
              Des <span className="font-semibold text-[#E74C3C]">pratiques concrètes applicables immédiatement</span> - tu repars avec des outils pour la vie
            </p>
</div>
</div>
</div>
</section>

<section className="bg-transparent" id="investissement" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<h2 className="reveal text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
          Ton <span className="text-[#E74C3C]">Investissement</span>
</h2>
<div className="h-16"></div>
<div className="reveal mx-auto max-w-4xl rounded-xl bg-white/80 backdrop-blur p-10 sm:p-12 border border-black/5" style={{border: '0.1875rem solid transparent', borderImage: 'linear-gradient(90deg, #E74C3C, #E67E22) 1', boxShadow: '0 16px 70px rgba(231, 76, 60, 0.14), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<div className="text-center">
<div className="sm:text-6xl lg:text-7xl text-5xl font-semibold tracking-tight" style={{color: '#E74C3C', fontFamily: 'Montserrat, Inter, system-ui', textShadow: '0 18px 60px rgba(231, 76, 60, 0.18)'}}>697 €</div>
<p className="sm:text-lg text-base text-[#4A4A4A] mt-3">Paiement en 1, 3 ou 5 fois</p>
<div className="h-10"></div>
<p className="text-lg sm:text-xl text-[#1A1A1A]">
              Pour le prix de quelques séances de coaching individuel, tu bénéficies de :
            </p>
</div>
<div className="h-8"></div>
<div className="space-y-5 text-base sm:text-lg text-[#1A1A1A]">
<div className="reveal flex items-start gap-3" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>2 séminaires complets (dont 1 en présentiel)</span>
</div>
<div className="reveal flex items-start gap-3" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>18 heures de formation live</span>
</div>
<div className="reveal flex items-start gap-3" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>3 mois d'accompagnement quotidien</span>
</div>
<div className="reveal flex items-start gap-3" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Une communauté de soutien</span>
</div>
<div className="reveal flex items-start gap-3" data-stagger="" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Des outils et pratiques pour toute ta vie</span>
</div>
</div>
<div className="h-10"></div>
<p className="text-center text-lg sm:text-xl font-semibold italic" style={{color: '#E74C3C'}}>
            Un investissement dans ta force intérieure qui te servira pour toujours.
          </p>
<div className="h-10"></div>
<div className="flex justify-center">
<a className="cta cta-strong inline-flex items-center justify-center sm:text-xl sm:px-14 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto text-lg font-semibold text-white w-[90%] rounded-full pt-6 pr-10 pb-6 pl-10" href="https://karkadann.learnybox.com/order-form/eyJmIjoxNzM4MDh9/" style={{background: 'linear-gradient(90deg, rgb(231, 76, 60), rgb(230, 126, 34)) 0% 50% / 140% 140%', boxShadow: 'rgba(231, 76, 60, 0.30) 0px 18px 70px', -TwRingColor: '#E74C3C', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, filter 0.25s ease-out, background-position 0.25s ease-out'}}>
              Rejoindre Le Passage Maintenant
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F8F8]/70 backdrop-blur" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="reveal bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)'}}>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
              Le Passage n'est <span style={{color: '#C0392B'}}>PAS</span> pour toi si...
            </h3>
<div className="h-8"></div>
<div className="space-y-5 text-base sm:text-lg text-[#1A1A1A]">
<div className="flex items-start gap-3">
<span className="leading-none" style={{color: '#C0392B'}}>
<iconify-icon className="h-6 w-6" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span>Tu cherches une solution miracle sans t'impliquer personnellement</span>
</div>
<div className="flex items-start gap-3">
<span className="leading-none" style={{color: '#C0392B'}}>
<iconify-icon className="h-6 w-6" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span>Tu n'es pas prêt à expérimenter de nouvelles façons de penser et d'être</span>
</div>
<div className="flex items-start gap-3">
<span className="leading-none" style={{color: '#C0392B'}}>
<iconify-icon className="h-6 w-6" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span>Tu veux des résultats instantanés sans pratique quotidienne</span>
</div>
<div className="flex items-start gap-3">
<span className="leading-none" style={{color: '#C0392B'}}>
<iconify-icon className="h-6 w-6" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span>Tu n'es pas ouvert à la dimension spirituelle de la transformation</span>
</div>
</div>
</div>
<div className="reveal bg-white/80 backdrop-blur rounded-lg p-10 border border-black/5" style={{boxShadow: '0 14px 50px rgba(231, 76, 60, 0.08), inset 0 1px 0 rgba(255,255,255,0.75)', borderTop: '0.1875rem solid #E74C3C'}}>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
              Le Passage <span className="text-[#E74C3C]">EST</span> pour toi si...
            </h3>
<div className="h-8"></div>
<div className="space-y-5 text-base sm:text-lg text-[#1A1A1A]">
<div className="flex items-start gap-3">
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Tu es <span className="font-semibold text-[#E74C3C]">prêt à t'engager pleinement</span> pendant 3 mois</span>
</div>
<div className="flex items-start gap-3">
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Tu veux <span className="font-semibold text-[#E74C3C]">transformer ta vie de l'intérieur vers l'extérieur</span></span>
</div>
<div className="flex items-start gap-3">
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Tu aspires à <span className="font-semibold text-[#E74C3C]">incarner l'amour et la force</span> dans ton quotidien</span>
</div>
<div className="flex items-start gap-3">
<span className="text-[#E74C3C] leading-none">
<iconify-icon className="h-6 w-6" icon="solar:check-circle-linear"></iconify-icon>
</span>
<span>Tu es <span className="font-semibold text-[#E74C3C]">ouvert à un accompagnement</span> alliant développement personnel et spiritualité</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A]" id="rejoindre" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem'}}>
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
            Es-tu <span className="text-[#E74C3C]">prêt</span> pour Le Passage ?
          </h2>
<div className="h-8"></div>
<p className="reveal text-lg sm:text-xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Les places sont limitées pour garantir un accompagnement de qualité et une vraie cohésion de groupe.
          </p>
<div className="h-10"></div>
<div className="reveal inline-flex sm:text-base text-sm font-semibold text-white rounded-full pt-3 pr-8 pb-3 pl-8 items-center gap-2" style={{backgroundColor: '#E74C3C', boxShadow: '0 16px 60px rgba(231, 76, 60, 0.26)'}}>
<iconify-icon className="h-5 w-5" icon="solar:calendar-date-linear"></iconify-icon>
<span>Prochaine session : [AVRIL 2026]</span>
</div>
<div className="h-12"></div>
<div className="flex justify-center">
<a className="cta cta-strong inline-flex items-center justify-center sm:text-2xl sm:px-16 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto text-xl font-semibold text-white w-[90%] rounded-full pt-6 pr-10 pb-6 pl-10" href="https://karkadann.learnybox.com/order-form/eyJmIjoxNzM4MDh9/" style={{background: 'linear-gradient(90deg, rgb(231, 76, 60), rgb(230, 126, 34)) 0% 50% / 140% 140%', boxShadow: 'rgba(231, 76, 60, 0.34) 0px 20px 80px', -TwRingColor: '#E74C3C', transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, filter 0.25s ease-out, background-position 0.25s ease-out'}}>
              Rejoindre Le Passage
            </a>
</div>
<div className="h-8"></div>
<p className="reveal sm:text-lg leading-relaxed text-base text-[#CCCCCC] max-w-4xl mr-auto ml-auto" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Pour rejoindre Le Passage et révéler ta Force rayonnante, clique sur le bouton ci-dessus.
          </p>
<div className="h-14"></div>
<div className="reveal mx-auto h-px w-48" style={{background: 'linear-gradient(90deg, rgba(231,76,60,0), rgba(231,76,60,1), rgba(230,126,34,0))'}}></div>
<div className="h-10"></div>
<p className="reveal sm:text-lg text-base text-[#CCCCCC]" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>En joie de t'accompagner sur ce chemin,</p>
<div className="h-5"></div>
<p className="reveal sm:text-2xl text-xl font-semibold" style={{color: '#E74C3C', fontFamily: 'Montserrat, Inter, system-ui'}}>Jean-Luc De Wachter</p>
<p className="reveal sm:text-lg text-base text-[#666666]" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>Créateur du canal 'Force Intérieure'</p>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] border-t border-black/0" style={{paddingTop: '3.75rem', paddingBottom: '3.75rem', borderTop: '1px solid #E74C3C'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="reveal text-base sm:text-lg font-semibold" style={{color: '#E74C3C'}}>P.S.</p>
<div className="h-5"></div>
<p className="reveal mx-auto max-w-3xl text-base sm:text-lg text-[#CCCCCC] italic leading-relaxed" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Si tu hésites encore, pose-toi cette question :
          </p>
<div className="h-5"></div>
<div className="reveal mx-auto max-w-3xl rounded-lg p-8 border border-black/10" style={{border: '0.125rem solid #E74C3C', boxShadow: '0 16px 70px rgba(231, 76, 60, 0.12)', background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'}}>
<p className="text-lg sm:text-xl text-white leading-relaxed">
              « Dans 3 mois, où serai-je si je continue sur ma lancée actuelle ? »
            </p>
</div>
<div className="h-5"></div>
<p className="reveal text-base sm:text-lg text-[#CCCCCC] italic leading-relaxed" style={{transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out', willChange: 'transform, opacity'}}>
            Et maintenant :
          </p>
<div className="h-5"></div>
<div className="reveal mx-auto max-w-3xl rounded-lg p-8 border border-black/10" style={{border: '0.125rem solid #E74C3C', boxShadow: '0 16px 70px rgba(231, 76, 60, 0.12)', background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'}}>
<p className="text-lg sm:text-xl text-white leading-relaxed">
              « Où pourrais-je être si je révèle pleinement ma Force Intérieure ? »
            </p>
</div>
<div className="h-8"></div>
<p className="reveal text-lg sm:text-xl font-semibold" style={{color: '#E74C3C'}}>
            La différence entre ces deux futurs, c'est ta décision d'aujourd'hui.
          </p>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A]" style={{paddingTop: '2.5rem', paddingBottom: '2.5rem'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs sm:text-sm" style={{color: '#666666'}}>
          © 2026 Le Passage - Force Intérieure. Tous droits réservés.
        </p>
</div>
</footer>
</main>

    </>
  );
}
