import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Enhanced smooth scroll reveal
      const inView = (el, threshold = 0.15) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0;
      };
      
      const revealEls = Array.from(document.querySelectorAll('.will-animate'));
      
      const setVisible = (el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px) translateX(0px) scale(1)';
      };
      
      const setHidden = (el) => {
        // Keep initial state as set in HTML
      };
      
      const onScroll = () => {
        revealEls.forEach((el) => {
          if (inView(el, 0.1)) {
            setVisible(el);
          }
        });
      };
      
      document.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('load', () => {
        // Small delay to ensure smooth initial load
        setTimeout(onScroll, 100);
      });

      // Portfolio Carousel (crossfade)
      const portfolio = {
        slides: Array.from(document.querySelectorAll('#portfolioCarousel .portfolio-slide')),
        dots: Array.from(document.querySelectorAll('.portfolio-dot')),
        i: 0,
        timer: null
      };
      const setPortfolio = (n) => {
        portfolio.i = (n + portfolio.slides.length) % portfolio.slides.length;
        portfolio.slides.forEach((s, idx) => {
          s.style.opacity = idx === portfolio.i ? 1 : 0;
          s.style.pointerEvents = idx === portfolio.i ? 'auto' : 'none';
        });
        portfolio.dots.forEach((d, idx) => {
          d.style.backgroundColor = idx === portfolio.i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)';
          d.style.width = idx === portfolio.i ? '16px' : '12px';
          d.style.transition = 'all .3s ease';
        });
      };
      const nextPortfolio = () => setPortfolio(portfolio.i + 1);
      const prevPortfolio = () => setPortfolio(portfolio.i - 1);
      document.getElementById('portfolioNext').addEventListener('click', () => { nextPortfolio(); restartPortfolio(); });
      document.getElementById('portfolioPrev').addEventListener('click', () => { prevPortfolio(); restartPortfolio(); });
      const startPortfolio = () => { portfolio.timer = setInterval(nextPortfolio, 5000); };
      const restartPortfolio = () => { clearInterval(portfolio.timer); startPortfolio(); };
      setPortfolio(0);
      startPortfolio();

      // Testimonials Carousel (crossfade)
      const testi = {
        slides: Array.from(document.querySelectorAll('#testimonialsCarousel .testi-slide')),
        dots: Array.from(document.querySelectorAll('.testi-dot')),
        i: 0,
        timer: null
      };
      const setTesti = (n) => {
        testi.i = (n + testi.slides.length) % testi.slides.length;
        testi.slides.forEach((s, idx) => {
          s.style.opacity = idx === testi.i ? 1 : 0;
          s.style.position = 'absolute';
          s.style.inset = '0';
        });
        testi.dots.forEach((d, idx) => {
          d.style.backgroundColor = idx === testi.i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)';
          d.style.width = idx === testi.i ? '16px' : '12px';
          d.style.transition = 'all .3s ease';
        });
      };
      const nextTesti = () => setTesti(testi.i + 1);
      const prevTesti = () => setTesti(testi.i - 1);
      document.getElementById('testiNext').addEventListener('click', () => { nextTesti(); restartTesti(); });
      document.getElementById('testiPrev').addEventListener('click', () => { prevTesti(); restartTesti(); });
      const startTesti = () => { testi.timer = setInterval(nextTesti, 5500); };
      const restartTesti = () => { clearInterval(testi.timer); startTesti(); };
      setTesti(0);
      startTesti();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<div className="flex items-center justify-between px-4 py-3">
<a className="flex items-center gap-2 text-sm tracking-tight font-medium text-white/90 hover:text-white transition-colors" href="#">
<span className="hidden sm:inline">Studio</span>
</a>
<div className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="relative hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="relative hover:text-white transition-colors" href="#about">About</a>
<a className="relative hover:text-white transition-colors" href="#work">Work</a>
<a className="relative hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="relative hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors" href="#contact">
<svg className="-ml-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z" opacity="0"></path>
<path d="M4 8l8 5 8-5"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
</svg>
<span className="font-medium">Start</span>
</a>
</div>
</div>
</nav>
</header>

<section className="relative flex min-h-screen items-center overflow-hidden" id="hero">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl animate-pulse"></div>
<div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse"></div>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-start pt-28 md:pt-36">
<span className="will-animate inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 opacity-0 translate-y-8" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.1s'}}>
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Available for new projects
          </span>
<h1 className="will-animate mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-white opacity-0 translate-y-12" style={{transition: 'all 1.4s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.25s'}}>
            Creative Designer &amp; Webflow Expert
          </h1>
<p className="will-animate max-w-2xl sm:text-lg text-base text-white/70 mt-5 opacity-0 translate-y-8" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.45s'}}>I craft timeless, conversion-focused experiences for modern brands clean typography, immersive motion, and meticulous systems.</p>
<div className="will-animate mt-8 flex items-center gap-3 opacity-0 translate-y-8" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.65s'}}>
<a className="group inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-white/90 transition-colors outline outline-1 outline-white/15" href="#portfolio">
              See My Work
              <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors" href="#contact">
              Start a Project
            </a>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center">
<div className="h-px w-11/12 max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative overflow-hidden" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="will-animate mb-8 flex items-end justify-between opacity-0 translate-y-8" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.1s'}}>
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
<p className="mt-1 text-sm text-white/60">Edge-to-edge visuals with smooth transitions</p>
</div>
<div className="flex gap-2">
<button aria-label="Previous" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" id="portfolioPrev">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18l-6-6 6-6"></path>
</svg>
</button>
<button aria-label="Next" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" id="portfolioNext">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="relative mx-auto max-w-[1400px] px-0">
<div className="will-animate relative h-[58vh] sm:h-[64vh] md:h-[72vh] opacity-0 translate-y-12" id="portfolioCarousel" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.3s'}}>

<article className="portfolio-slide absolute inset-0 opacity-0 transition-opacity duration-700 ease-out" style={{opacity: '1', pointerEvents: 'auto'}}>
<img alt="E-commerce Redesign" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">E-commerce Redesign</h3>
<p className="mt-1 text-sm text-white/70">Modern storefront with conversion-driven UX</p>
</div>
</article>

<article className="portfolio-slide absolute inset-0 opacity-0 transition-opacity duration-700 ease-out" style={{opacity: '0', pointerEvents: 'none'}}>
<img alt="SaaS Dashboard Experience" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">SaaS Dashboard</h3>
<p className="mt-1 text-sm text-white/70">Clarity-focused data design system</p>
</div>
</article>

<article className="portfolio-slide absolute inset-0 opacity-0 transition-opacity duration-700 ease-out" style={{opacity: '0', pointerEvents: 'none'}}>
<img alt="Brand Microsite" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Brand Microsite</h3>
<p className="mt-1 text-sm text-white/70">Playful motion with high-performance build</p>
</div>
</article>
</div>

<div className="will-animate pointer-events-none absolute inset-x-0 -bottom-2 flex justify-center opacity-0 translate-y-4" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.5s'}}>
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
<span className="portfolio-dot h-1.5 w-3 rounded-full bg-white/30" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', width: '16px', transition: '0.3s'}}></span>
<span className="portfolio-dot h-1.5 w-3 rounded-full bg-white/30" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '12px', transition: '0.3s'}}></span>
<span className="portfolio-dot h-1.5 w-3 rounded-full bg-white/30" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '12px', transition: '0.3s'}}></span>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28" id="about">
<div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.08] bg-[url(default)]" style={{}}></div>
<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
<img alt="Designer portrait" className="will-animate mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-white/20 shadow-lg shadow-black/30 opacity-0 translate-y-8 scale-95" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.1s'}}/>
<h2 className="will-animate mt-6 text-3xl sm:text-4xl font-semibold tracking-tight opacity-0 translate-y-8" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.25s'}}>Design that feels inevitable</h2>
<p className="will-animate max-w-2xl text-base text-white/70 mt-3 mr-auto ml-auto opacity-0 translate-y-6" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.4s'}}>I partner with ambitious teams to build elegant brands, websites, and products. Less noise, more clarity so your story delivers.</p>
</div>
</section>

<section className="relative" id="work">

<div className="h-px w-full bg-white/10"></div>

<article className="group relative grid min-h-[60vh] sm:min-h-[70vh] w-full grid-cols-1 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center bg-fixed scale-100 transition-transform duration-700 group-hover:scale-[1.02] bg-[url(https://images.unsplash.com/photo-1559722010-b9f876688128?w=3840&amp;q=80)]" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-black/20"></div>
<div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-20 sm:px-6 lg:px-8">
<div className="will-animate max-w-xl text-right opacity-0 translate-y-8 translate-x-8" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.2s'}}>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Lifestyle Brand Launch</h3>
<p className="mt-2 text-sm text-white/70">Editorial storytelling, commerce, and motion combined into a crisp journey.</p>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white underline-offset-4 hover:underline" href="#portfolio">
              Explore project
              <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</article>
</section>

<section className="relative py-20 sm:py-28" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="will-animate mb-10 flex items-end justify-between opacity-0 translate-y-8" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.1s'}}>
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What clients say</h2>
<p className="mt-1 text-sm text-white/60">Minimal cards with soft transitions</p>
</div>
<div className="flex gap-2">
<button aria-label="Previous testimonial" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" id="testiPrev">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 18l-6-6 6-6"></path>
</svg>
</button>
<button aria-label="Next testimonial" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" id="testiNext">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</button>
</div>
</div>
<div className="will-animate relative opacity-0 translate-y-10" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.3s'}}>
<div className="relative" id="testimonialsCarousel">

</div>
</div>
</div>
</section>

<section className="relative overflow-hidden" id="contact">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl animate-pulse"></div>
<div className="absolute -bottom-20 right-1/3 h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
<div className="mx-auto max-w-2xl text-center">
<h2 className="will-animate text-3xl sm:text-4xl font-semibold tracking-tight opacity-0 translate-y-8" style={{transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.1s'}}>Let's Collaborate</h2>
<p className="will-animate mt-3 text-base text-white/70 opacity-0 translate-y-6" style={{transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.25s'}}>Tell me about your product, timeline, and goals. I'll get back within 1–2 days.</p>
</div>
<form className="will-animate mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 opacity-0 translate-y-12 scale-95" style={{transition: 'all 1.3s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0.4s'}}>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="">
<label className="mb-1 block text-sm text-white/70">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm placeholder:text-white/30 focus:border-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition" placeholder="Your name" type="text"/>
</div>
<div>
<label className="mb-1 block text-sm text-white/70">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm placeholder:text-white/30 focus:border-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition" placeholder="you@company.com" type="email"/>
</div>
</div>
<div className="mt-4">
<label className="mb-1 block text-sm text-white/70">Project Details</label>
<textarea className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm placeholder:text-white/30 focus:border-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition" placeholder="Briefly describe your project, timeline, and success metrics." rows="5"></textarea>
</div>
<div className="mt-6 flex items-center justify-between">
<p className="text-xs text-white/50">By submitting, you agree to the terms &amp; privacy policy.</p>
<button className="group inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-white/90 transition-transform duration-200 hover:scale-[1.02] outline outline-1 outline-white/15" type="submit">
              Start a Project
              <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-neutral-900 text-[10px] font-semibold tracking-tight">JD</span>
<span>© <span id="year">2025</span>. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#portfolio">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
