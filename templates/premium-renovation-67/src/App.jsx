import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Lucide Icons
        lucide.createIcons();

        // Init Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Loader Sequence
        const tl = gsap.timeline();
        tl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
          .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: 0.2 })
          .to('body', { opacity: 1, duration: 0.5 }, "-=0.5")
          .from('.revealer span', { 
              y: '110%', 
              duration: 1.5, 
              ease: 'power4.out',
              stagger: 0.1
          }, "-=0.5")
          .to('.fade-in', { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=1");

        // Parallax Hero
        gsap.to(".hero-img", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-bg-wrap",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Text Split Animation (Simple version without SplitText plugin)
        const splitElements = document.querySelectorAll('.split-text');
        splitElements.forEach(el => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            });
        });

        // Stacked Cards Effect
        const cards = gsap.utils.toArray('.stack-card');
        cards.forEach((card, i) => {
            const nextCard = cards[i + 1];
            if (nextCard) {
                gsap.to(card, {
                    scale: 0.95,
                    opacity: 0.8,
                    filter: 'brightness(0.9)',
                    scrollTrigger: {
                        trigger: nextCard,
                        start: "top 60%", 
                        end: "top 20%",
                        scrub: true
                    }
                });
            }
        });

        // Footer Reveal Logic
        // The wrapper has margin-bottom: 100vh, so we scroll past it to see the fixed footer.
        // We can add a subtle scale effect to the footer content as it reveals
        gsap.from('footer > div', {
            y: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top bottom', // when footer top hits viewport bottom (which is conceptually always there due to fixed pos, but triggered by spacer)
                scrub: true
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="loader flex-col">
<div className="font-display text-2xl font-bold tracking-widest uppercase">build alliance</div>
<div className="loader-bar-wrap"><div className="loader-bar"></div></div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-40 mix-blend-difference text-[#E8E6E1]">
<a className="font-display text-sm md:text-base font-bold tracking-widest lowercase" href="#">build alliance</a>
<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest">
<a className="hover:opacity-60 transition-opacity" href="#manifesto">Manifesto</a>
<a className="hover:opacity-60 transition-opacity" href="#process">System</a>
<a className="hover:opacity-60 transition-opacity" href="#portfolio">Portfolio</a>
</div>
<a className="hidden md:block text-xs uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500" href="#contact">
            Consultation
        </a>
<div className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</div>
</nav>

<div className="relative z-10 bg-[var(--bg-body)] mb-[100vh] shadow-2xl">

<section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0 hero-bg-wrap">
<img alt="Premium Renovation" className="w-full h-full object-cover brightness-[0.85] scale-110 hero-img grayscale-[0.2]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="relative z-10 text-center text-[#E8E6E1] mix-blend-overlay px-4">
<h1 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] font-bold tracking-tighter mb-6">
<div className="revealer"><span>BUILT</span></div>
<div className="revealer"><span>REALITY</span></div>
</h1>
</div>
<div className="relative z-10 text-center text-[#F2F0EB] mt-8 max-w-xl px-6 fade-in opacity-0">
<p className="text-sm md:text-base font-light tracking-wide leading-relaxed opacity-90">
                    Premium renovation for apartments, offices, and private homes. <br className="hidden md:block"/>
                    High execution standard. Clean process. дисциплина сроков.
                </p>
<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
<button className="bg-[#E8E6E1] text-black px-8 py-3 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors">
                        Discuss Your Project
                    </button>
<button className="text-[#E8E6E1] border-b border-white/30 pb-1 text-xs uppercase tracking-widest hover:border-white transition-colors">
                        View Portfolio
                    </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm py-4 md:py-6 fade-in opacity-0">
<div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-6 md:gap-12 text-[10px] md:text-xs uppercase tracking-widest text-white/80">
<div className="flex items-center gap-2">
<i className="w-4 h-4 opacity-70" data-lucide="file-check"></i>
<span>Fixed Scope &amp; Estimate</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 opacity-70" data-lucide="shield-check"></i>
<span>Contract &amp; Milestones</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 opacity-70" data-lucide="ruler"></i>
<span>Quality Control Checkpoints</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 opacity-70" data-lucide="hard-hat"></i>
<span>Clean Site Standards</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-20 max-w-[1600px] mx-auto" id="manifesto">
<div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
<div className="md:col-span-5 sticky top-32">
<span className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">The Manifesto</span>
<h2 className="font-display text-4xl md:text-5xl leading-tight font-medium text-[var(--text-main)] split-text">
                        IT’S TIME TO MOVE FROM <br/>
<span className="opacity-40">“NICE DESIGN”</span> <br/>
                        TO BUILT REALITY.
                    </h2>
</div>
<div className="md:col-span-7 md:pl-10 space-y-8 text-lg md:text-xl font-light leading-relaxed text-[var(--text-main)]">
<p className="split-text-p">
                        At <span className="font-medium">build alliance</span>, we believe premium renovation has been diluted by flashy visuals and vague promises. Too many clients are left with delays, messy sites, and finishes that don’t match the render.
                    </p>
<p className="split-text-p">
                        The challenges are real: tight schedules, complex engineering, and zero tolerance for defects. In premium projects, there is no margin for improvisation. Every decision affects the result — acoustics, geometry, junctions, lighting, and the feel of space.
                    </p>
<div className="h-px bg-black/10 w-full my-8"></div>
<p className="text-base text-[var(--text-muted)] split-text-p">
                        Execution is the path forward. Premium quality is not luck — it’s systems. We deliver a controlled, end-to-end renovation system for apartments, offices, and private houses — with a result you can feel every day.
                    </p>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 bg-[#DEDCD7] border-y border-black/5" id="process">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
<h3 className="font-display text-3xl md:text-4xl">THE STANDARD</h3>
<p className="text-sm uppercase tracking-widest text-[var(--text-muted)] mt-4 md:mt-0">Design-respecting. Technically Correct.</p>
</div>
<div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">

<div className="bg-[#DEDCD7] p-8 md:p-12 hover:bg-[#E2E0DB] transition-colors duration-500 group h-full">
<div className="mb-8 p-3 border border-black/10 w-fit rounded-full group-hover:bg-white transition-colors duration-500">
<i className="w-6 h-6 stroke-1" data-lucide="layers"></i>
</div>
<h4 className="text-lg font-semibold mb-4 tracking-tight">Systematic Organization</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">
                            We’re not the contractor that disappears. We build what works: clean organization, disciplined сроки, and transparent budgeting from day one.
                        </p>
</div>

<div className="bg-[#DEDCD7] p-8 md:p-12 hover:bg-[#E2E0DB] transition-colors duration-500 group h-full">
<div className="mb-8 p-3 border border-black/10 w-fit rounded-full group-hover:bg-white transition-colors duration-500">
<i className="w-6 h-6 stroke-1" data-lucide="network"></i>
</div>
<h4 className="text-lg font-semibold mb-4 tracking-tight">Technical Coordination</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">
                            We coordinate all trades — отделка, инженерные сети, electrics, HVAC, smart home — ensuring the process is predictable from first measurement to handover.
                        </p>
</div>

<div className="bg-[#DEDCD7] p-8 md:p-12 hover:bg-[#E2E0DB] transition-colors duration-500 group h-full">
<div className="mb-8 p-3 border border-black/10 w-fit rounded-full group-hover:bg-white transition-colors duration-500">
<i className="w-6 h-6 stroke-1" data-lucide="gem"></i>
</div>
<h4 className="text-lg font-semibold mb-4 tracking-tight">Obsessive Detail</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">
                            Standards don't limit creativity; they protect it. We turn design into precision, ensuring junctions, acoustics, and materials look and work exactly as intended.
                        </p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-20 px-4 md:px-12 bg-[var(--bg-body)] card-stack-wrapper" id="portfolio">
<div className="max-w-[1400px] mx-auto text-center mb-24">
<span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Selected Works</span>
<h2 className="font-display text-4xl md:text-6xl mt-4">RECENT EXECUTION</h2>
</div>
<div className="max-w-[1200px] mx-auto">

<div className="stack-card bg-[var(--bg-card)] h-[600px] md:h-[700px] flex flex-col md:flex-row overflow-hidden rounded-sm group">
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between relative z-10">
<div>
<div className="font-display text-4xl md:text-5xl text-black/5 mb-4 font-bold">01</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Private Residence</h3>
<p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Moscow / Khamovniki</p>
</div>
<div className="mt-8 md:mt-0">
<p className="text-sm md:text-base font-light text-[var(--text-muted)] mb-8 leading-relaxed">
                                Complete renovation including soundproofing, smart home integration, and custom stone joinery. Delivered 2 weeks ahead of schedule.
                            </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors" href="#">
                                View Case Study <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="w-full md:w-1/2 h-full relative overflow-hidden">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="stack-card bg-[var(--bg-card)] h-[600px] md:h-[700px] flex flex-col md:flex-row overflow-hidden rounded-sm group">
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between relative z-10">
<div>
<div className="font-display text-4xl md:text-5xl text-black/5 mb-4 font-bold">02</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Tech Office HQ</h3>
<p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">City Center</p>
</div>
<div className="mt-8 md:mt-0">
<p className="text-sm md:text-base font-light text-[var(--text-muted)] mb-8 leading-relaxed">
                                Industrial fit-out with exposed engineering, acoustic paneling, and glass partitions. Focus on ventilation and lighting geometry.
                            </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors" href="#">
                                View Case Study <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="w-full md:w-1/2 h-full relative overflow-hidden">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="stack-card bg-[var(--bg-card)] h-[600px] md:h-[700px] flex flex-col md:flex-row overflow-hidden rounded-sm group">
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between relative z-10">
<div>
<div className="font-display text-4xl md:text-5xl text-black/5 mb-4 font-bold">03</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Penthouse Shell &amp; Core</h3>
<p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">River Side</p>
</div>
<div className="mt-8 md:mt-0">
<p className="text-sm md:text-base font-light text-[var(--text-muted)] mb-8 leading-relaxed">
                                Complex engineering execution. Reinforced flooring, premium electrical layout, and seamless wall-to-ceiling junctions.
                            </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors" href="#">
                                View Case Study <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="w-full md:w-1/2 h-full relative overflow-hidden">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<div className="h-40 flex items-center justify-center">
<div className="h-16 w-px bg-black/10"></div>
</div>
</div> 

<footer className="fixed bottom-0 w-full h-screen bg-[#111] text-[#E8E6E1] z-0 flex flex-col justify-center items-center text-center" id="contact">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/concrete-wall.png\')'}}></div>
<div className="relative z-10 max-w-4xl px-6">
<p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 mb-8">Ready to build the standard?</p>
<h2 className="font-display text-[8vw] md:text-[6vw] leading-none mb-10 hover:text-white transition-colors cursor-pointer">
                DISCUSS YOUR<br/>PROJECT
            </h2>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
<a className="border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto" href="#">
                    Book a site visit
                </a>
<a className="border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto" href="#">
                    Download process guide
                </a>
</div>
</div>
<div className="absolute bottom-12 w-full px-12 flex justify-between text-[10px] uppercase tracking-widest text-white/30">
<div>© 2024 build alliance</div>
<div className="flex gap-8">
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">Email</a>
<a className="hover:text-white" href="#">Whatsapp</a>
</div>
</div>
</footer>


    </>
  );
}
