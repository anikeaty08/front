import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
      const items = document.querySelectorAll('[data-element-id="aura-emlsz95w71flq7nvb"] .timeline-item');
      const dots = document.querySelectorAll('[data-element-id="aura-emlsz95w71flq7nvb"] .timeline-dot');
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        }, { threshold: 0.15 });
        items.forEach(el => { el.style.animationPlayState = 'paused'; obs.observe(el); });
        dots.forEach(el => { el.style.animationPlayState = 'paused'; obs.observe(el); });
      } else {
        items.forEach(el => { el.style.opacity = '1'; });
        dots.forEach(el => { el.style.opacity = '1'; });
      }
    })();
  


      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(".hero-eyebrow, .hero-title, .hero-subtitle, .hero-context, .hero-actions, .hero-panel, .section-content, .spotlight, .animate-on-scroll", { opacity: 1, y: 0, visibility: "visible" });
          return;
        }

        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
          .from(".hero-title", { y: 30, opacity: 0, duration: 1, skewY: 1 }, "-=0.6")
          .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
          .from(".hero-context", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-panel", { y: 40, opacity: 0, duration: 1.2, filter: "blur(10px)" }, "-=0.6");

        const sections = gsap.utils.toArray(".section");

        sections.forEach((section) => {
          if (section.querySelector('.hero-title')) return;

          const spotlight = section.querySelector(".spotlight");
          const content = section.querySelector(".section-content");
          const children = section.querySelectorAll(".animate-on-scroll");

          const stTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          });

          if (spotlight) {
            stTl.from(spotlight, { opacity: 0, duration: 1.2 });
          }

          if (content) {
            stTl.from(content, { y: 30, opacity: 0, duration: 0.8 }, "<+=0.1");
          }

          if (children.length > 0) {
            stTl.from(children, {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
              clearProps: "all"
            }, "-=0.5");
          }
        });

        ScrollTrigger.refresh();
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-button');
      });
    


      function switchPipeline(index) {
        const btns = document.querySelectorAll('.pipeline-btn');
        const line = document.getElementById('active-line');

        btns.forEach((btn, i) => {
          const tag = btn.querySelector('.tag-label');
          const title = btn.querySelector('h3');
          const desc = btn.querySelector('p');

          if (i === index) {
            btn.classList.add('active');
            if(tag) {
               tag.classList.remove('text-[color:var(--text-subtle)]', 'border-[color:var(--border)]', 'bg-[color:var(--bg-card)]');
               tag.classList.add('text-[color:var(--accent)]', 'bg-[color:var(--accent-soft)]', 'border-[color:var(--border)]');
            }
            if(title) {
              title.classList.remove('text-[color:var(--text-subtle)]');
              title.classList.add('text-[color:var(--text)]');
            }
             if(desc) {
              desc.classList.remove('text-[color:var(--text-subtle)]');
              desc.classList.add('text-[color:var(--text-muted)]');
            }
          } else {
            btn.classList.remove('active');
            if(tag) {
               tag.classList.remove('text-[color:var(--accent)]', 'bg-[color:var(--accent-soft)]');
               tag.classList.add('text-[color:var(--text-subtle)]', 'bg-[color:var(--bg-card)]', 'border-[color:var(--border)]');
            }
            if(title) {
              title.classList.remove('text-[color:var(--text)]');
              title.classList.add('text-[color:var(--text-subtle)]');
            }
             if(desc) {
              desc.classList.remove('text-[color:var(--text-muted)]');
              desc.classList.add('text-[color:var(--text-subtle)]');
            }
          }
        });

        if (line) line.style.top = (index * 33.33) + '%';

        const visuals = document.querySelectorAll('.pipeline-visual');
        const tagLabel = document.getElementById('pipeline-header-tag');

        const tags = ['INGEST::ACTIVE', 'GOVERN::ACTIVE', 'DEPLOY::ACTIVE'];
        if(tagLabel) tagLabel.textContent = tags[index];

        const anims = [
          { active: ['opacity-100', 'translate-x-0', 'z-10'], inactive: ['opacity-0', '-translate-x-4', 'pointer-events-none', 'z-0'] },
          { active: ['opacity-100', 'scale-100', 'z-10'], inactive: ['opacity-0', 'scale-95', 'pointer-events-none', 'z-0'] },
          { active: ['opacity-100', 'translate-y-0', 'z-10'], inactive: ['opacity-0', 'translate-y-8', 'pointer-events-none', 'z-0'] }
        ];

        visuals.forEach((vis, i) => {
          const conf = anims[i];
          if (i === index) {
            vis.classList.remove(...conf.inactive);
            vis.classList.add(...conf.active);
          } else {
            vis.classList.remove(...conf.active);
            vis.classList.add(...conf.inactive);
          }
        });
      }
    


      window.toggleHeroPanel = function(state) {
        const inputPanel = document.getElementById('panel-input');
        const outputPanel = document.getElementById('panel-output');
        const outputCard = document.getElementById('output-card');
        const btnInput = document.getElementById('btn-input');
        const btnOutput = document.getElementById('btn-output');

        if (state === 'input') {
          inputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0');
          inputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10');

          outputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10');
          outputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0');

          outputCard.classList.remove('scale-100');
          outputCard.classList.add('scale-95');

          btnInput.classList.remove('text-[color:var(--text-subtle)]', 'border-transparent');
          btnInput.classList.add('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');

          btnOutput.classList.remove('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');
          btnOutput.classList.add('text-[color:var(--text-subtle)]', 'border-transparent', 'hover:text-[color:var(--text)]');
        } else {
          inputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10');
          inputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0');

          outputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0');
          outputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10');

          setTimeout(() => {
            outputCard.classList.remove('scale-95');
            outputCard.classList.add('scale-100');
          }, 50);

          btnOutput.classList.remove('text-[color:var(--text-subtle)]', 'border-transparent');
          btnOutput.classList.add('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');

          btnInput.classList.remove('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');
          btnInput.classList.add('text-[color:var(--text-subtle)]', 'border-transparent', 'hover:text-[color:var(--text)]');
        }
      };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-[color:var(--bg-card)]/90 backdrop-blur-md border-b border-[color:var(--border)]">
<div className="sm:px-6 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center flex-shrink-0 md:mr-4">
</div>
<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
</div>
</div>
</nav>

<main className="section section--main overflow-hidden min-h-screen flex flex-col sm:px-6 sm:pt-36 sm:pb-24 z-10 pt-36 pr-4 pb-24 pl-4 relative">
<div className="bg-center mix-blend-normal bg-[url(https://images.unsplash.com/photo-1543706951-493412d4a78f?w=2560&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
</div>
</div>
<div className="flex-1 flex flex-col text-center max-w-7xl mr-auto ml-auto relative items-center">
<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[200px] sm:h-[300px] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none bg-[color:var(--accent)]/10"></div>
<div className="flex flex-col z-10 opacity-75 w-full max-w-5xl relative items-center">
<h1 className="hero-title uppercase leading-[0.95] text-[color:var(--text)] sm:text-6xl md:text-7xl text-4xl font-medium text-neutral-900 tracking-tighter font-display mb-3 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>RISHA BATRA</h1>
<p className="hero-subtitle text-[color:var(--text)] sm:text-xl leading-tight text-lg font-normal text-neutral-900 tracking-tight rounded-lg mb-8 pt-3 pr-4 pb-3 pl-4 shadow-[var(--shadow)] backdrop-blur-sm" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>I connect dots, people, and opportunities in the B2B SaaS world. Sales, customer success, business development - it’s all about building bridges that last. </p>
<p className="hero-context text-[color:var(--text)] leading-relaxed sm:text-base text-sm font-light text-zinc-900 text-center max-w-xl rounded-lg mr-auto mb-10 ml-auto pt-3 pr-3 pb-3 pl-3 shadow-[var(--shadow)] backdrop-blur-sm" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>On the human side, I’m someone who thrives on empathy, creativity, and making everyday moments feel lighter.</p>
<div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<button className="transition-all duration-300 hover:bg-[color:var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-main)] sm:w-auto text-sm font-semibold text-white tracking-tight bg-pink-600 w-full rounded pt-3 pr-8 pb-3 pl-8 shadow-[var(--shadow)] cursor-pointer" onclick="window.location.href='https://www.linkedin.com/in/rishabatra2323/'" role="button">View Linkedin Profile</button>
</div>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</main>

<section className="section section--surface section-divider bg-center md:py-32 pt-24 pb-24">
<div className="spotlight" style={{opacity: '0'}}></div>
<div className="section-content bg-center max-w-7xl mr-10 ml-10 pr-6 pl-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes lineGrow {
      from { height: 0; }
      to { height: 100%; }
    }
    @keyframes dotPop {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.3); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .timeline-item {
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
    }
    .timeline-dot {
      animation: dotPop 0.4s ease forwards;
      opacity: 0;
    }
    .timeline-line-fill {
      animation: lineGrow 1.2s ease forwards;
    }
  </style>
<div className="mb-12">
<span className="text-[10px] uppercase text-[color:var(--accent)] block tracking-widest font-mono mb-3"></span>
<h2 className="md:text-5xl text-[color:var(--text)] uppercase leading-none text-3xl font-medium text-pink-600 tracking-tighter font-display mb-4">My Journey</h2>
<p className="text-[color:var(--text-muted)] leading-relaxed text-sm font-light max-w-md mr-16 -multi">From Raipur to London, a short glimpse into my professional career</p>
</div>

<div className="relative">

<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[color:var(--border)] -translate-x-1/2 z-0"></div>
<div className="hidden lg:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 z-0 bg-[color:var(--accent)] timeline-line-fill" style={{animationDelay: '0.3s'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-0">

<div className="timeline-item lg:pr-12 pb-10 relative" style={{animationDelay: '0.1s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -right-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.15s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Teacher</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Gyanjoti Vidyalay</h4>
</div>
<span className="text-[9px] text-[color:var(--accent)] border-[color:var(--border)] whitespace-nowrap font-mono border rounded ml-auto pt-0.5 pr-1.5 pb-0.5 pl-1.5">2014–2015</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Teaching taught me patience, curiosity, and the art of explaining complex ideas simply.</p>
</div>

<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pl-12 pb-10 relative lg:mt-16" style={{animationDelay: '0.2s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -left-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.25s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Sales Advisor</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Retail Sales</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2016–2018</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Discovered needs-based selling by listening deeply before offering solutions.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pr-12 pb-10 relative" style={{animationDelay: '0.3s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -right-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.35s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Master's Student</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">University of Hertfordshire</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2019–2020</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Developed critical thinking and gained a global lens for understanding markets.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pl-12 pb-10 relative lg:mt-16" style={{animationDelay: '0.4s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -left-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.45s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Customer Success Executive</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Clientjoy</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2021–2022</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Worked with diverse clients across industries, building adaptability in the fast-paced world of SaaS.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pr-12 pb-10 relative" style={{animationDelay: '0.5s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -right-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.55s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Inside Sales Specialist</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Novel Patterns</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2022–2023</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Mastered negotiation, accountability, and high-stakes conversations partnering with C-level executives.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pl-12 pb-10 relative lg:mt-16" style={{animationDelay: '0.6s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -left-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.65s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Senior Sales Specialist</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Mrs Kaurs Bakery</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2023</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Learned that warmth and brand experience are inseparable — creating small moments of happiness.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pr-12 pb-10 relative" style={{animationDelay: '0.7s'}}>
<div className="border-[color:var(--border)] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[var(--shadow)]">
<div className="hidden lg:flex absolute -right-[25px] top-6 w-[10px] h-[10px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.75s'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Freelance Sales</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Travel, Real Estate, FMCG</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--border)] font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2023–2024</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Every industry taught me something new about human needs while embracing agility across new domains.</p>
</div>
<div className="lg:hidden absolute left-5 top-full w-[1px] h-10 bg-[color:var(--border)]"></div>
</div>

<div className="timeline-item lg:pl-12 lg:mt-16 md:pl-0 mt-16 pb-10 pl-12 relative" style={{animationDelay: '0.8s'}}>
<div className="bg-[color:var(--accent-soft)] border border-[color:var(--accent)]/30 rounded-xl p-6 shadow-[var(--shadow)] relative">
<div className="hidden lg:flex absolute -left-[25px] top-6 w-[12px] h-[12px] rounded-full bg-[color:var(--accent)] border-2 border-[color:var(--bg-card)] timeline-dot z-10" style={{animationDelay: '0.85s', boxShadow: '0 0 0 4px rgba(37,99,235,0.15)'}}></div>
<div className="flex items-center gap-3 mb-3">
<div className="">
<h3 className="text-[color:var(--text)] text-base font-semibold leading-tight">Customer Success Specialist</h3>
<h4 className="text-[color:var(--text-muted)] text-sm font-normal">Kroolo</h4>
</div>
<span className="ml-auto text-[9px] text-[color:var(--accent)] border border-[color:var(--accent)]/40 bg-[color:var(--accent)] text-white font-mono rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 whitespace-nowrap">2024–Present</span>
</div>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed">Driving product journey — bringing all experiences together in the world of SaaS customer success.</p>
</div>
</div>
</div>
</div>

</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>


<section className="section section--surface section-divider bg-center bg-emerald-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7a5603-9d41-49aa-9d18-f92f1417605f_1600w.jpg)] bg-cover pt-24 pb-24 md:pt-26 md:pb-26">
<div className="spotlight" style={{opacity: '0'}}></div>
<div className="section-content max-w-7xl mr-10 ml-10 pr-6 pl-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<span className="text-[10px] uppercase text-[color:var(--text-subtle)] block tracking-widest font-mono mb-3"></span>
<h2 className="text-[color:var(--text)] uppercase leading-none md:text-5xl text-3xl font-medium text-gray-700 tracking-tighter font-display mb-4">
          What I Bring With Me</h2>
<p className="text-[color:var(--text-muted)] leading-relaxed -multi text-sm font-light mr-16">Skills shaped by
          diverse
          experiences each role adding depth to how I create value.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 overflow-hidden bg-[color:var(--border)] border border-[color:var(--border)] rounded-[2rem] shadow-[var(--shadow)] gap-px">
<div className="group hover:bg-[color:var(--bg-card-hover)] transition-colors flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none">
</div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none">
</div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70">
</div>
<div className="z-10 relative">
<span className="text-[10px] uppercase text-[color:var(--accent)] block tracking-widest font-mono mb-4"></span>
<h3 className="text-[color:var(--text)] text-lg font-semibold tracking-tight mb-2">Human Skills</h3>
<p className="text-[color:var(--text-muted)] leading-relaxed text-sm font-light mb-8">The foundation of all
            meaningful connections Empathetic listening, Teaching and Guiding, Building Trust, Patience ,
            Emotional
            Intelligence </p>
</div>
<div className="text-[10px] text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex gap-2 z-10 font-mono relative gap-x-2 gap-y-2 items-center">
</div>
</div>
<div className="group hover:bg-[color:var(--bg-card-hover)] transition-colors flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none">
</div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none">
</div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70">
</div>
<div className="relative z-10">
<span className="text-[10px] uppercase text-[color:var(--accent)] block tracking-widest font-mono mb-4"></span>
<h3 className="text-[color:var(--text)] text-lg font-semibold tracking-tight mb-2">Business &amp; Sales
          </h3>
<p className="text-[color:var(--text-muted)] leading-relaxed text-sm font-light mb-8">Aligning solutions
            with
            stories that resonate: Needs Based Selling, Negotiation, Closing Deals, Accountability ,
            Relationship Building
          </p>
</div>
<div className="text-[10px] text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex gap-2 z-10 font-mono relative gap-x-2 gap-y-2 items-center">
</div>
</div>
<div className="group hover:bg-[color:var(--bg-card-hover)] transition-colors flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none">
</div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none">
</div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70">
</div>
<div className="relative z-10">
<span className="text-[10px] uppercase text-[color:var(--accent)] block tracking-widest font-mono mb-4"></span>
<h3 className="text-[color:var(--text)] text-lg font-semibold tracking-tight mb-2">Product &amp; Process
          </h3>
<p className="text-[color:var(--text-muted)] leading-relaxed text-sm font-light mb-8">Bringing structure to
            customer
            success: Customer Success, Project Management, Product mockups, process thinking , documentation</p>
</div>
<div className="text-[10px] text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex gap-2 z-10 font-mono relative gap-x-2 gap-y-2 items-center">
</div>
</div>
<div className="group hover:bg-[color:var(--bg-card-hover)] transition-colors flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none">
</div>
<div className="">
<span className="text-[10px] uppercase text-[color:var(--text-subtle)] block tracking-widest font-mono mb-4"></span>
<h3 className="text-[color:var(--text)] text-lg font-semibold tracking-tight mb-2">Domain Agility </h3>
<p className="text-[color:var(--text-muted)] leading-relaxed text-sm font-light mb-8">Thriving across
            diverse
            industries : SAAS , Fintech , Travel , FMCG , Education</p>
</div>
<div className="text-[10px] text-[color:var(--text-subtle)] transition-colors font-mono"></div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[11px] text-[color:var(--text-subtle)] uppercase tracking-widest font-mono opacity-90"></p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section><section className="section section--surface section-divider bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7a5603-9d41-49aa-9d18-f92f1417605f_1600w.jpg)] bg-cover pt-24 pb-24 md:pt-0 md:pb-0">
<div className="spotlight" style={{opacity: '0'}}></div>
<section className="lg:px-24 md:px-12 md:pt-12 md:pb-12 bg-zinc-300/30 w-full border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative" id="evaluations">
<div className="max-w-7xl mx-auto">
<div className="mb-20 reveal-on-scroll" data-reveal="" style={{-RevealDelay: '0ms'}}>
<h2 className="text-[color:var(--text)] uppercase leading-none md:text-5xl text-3xl font-medium text-gray-700 tracking-tighter font-display mb-4">MOMENTS THAT CHANGED ME</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll border-white/10 border px-8 py-8 relative" data-reveal="" style={{-RevealDelay: '90ms'}}>
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="leading-relaxed z-10 text-sm font-light text-neutral-900 mb-8 relative">I watched a senior colleague close deals not by pushing harder, but by asking better questions. People leaned in because they felt genuinely understood. Sales wasn't about persuasion—it was about alignment.</p>
<div className="flex gap-4 border-white/5 border-t mt-auto pt-6 gap-x-4 gap-y-4 items-center">
<div className="">
<p className="uppercase text-xs text-neutral-900 tracking-[0.1em] font-orbitron">Trust is built through genuine curiosity, not clever tactics.</p>
</div>
</div>
</div>

<div className="group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll border-white/10 border px-8 py-8 relative" data-reveal="" style={{-RevealDelay: '180ms'}}>
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="leading-relaxed z-10 text-sm font-light text-neutral-900 mb-8 relative">A customer once told me that our little bakery was her weekly escape. It wasn't about the pastries—it was about how we made her feel. That's when I understood: every touchpoint is an opportunity to create joy.</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="">
<p className="uppercase text-xs text-neutral-900 tracking-[0.1em] font-orbitron">Brand experience is really about human experience.
</p>
</div>
</div>
</div>

<div className="group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll border-white/10 border px-8 py-8 relative" data-reveal="" style={{-RevealDelay: '270ms'}}>
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="leading-relaxed z-10 text-sm font-light text-neutral-900 mb-8 relative">At Kroolo, I stopped seeing myself as just a success manager. I became part educator, part advisor, part partner. Product mockups, process improvements, real conversations—it all blended into creating genuine value.</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="">
<p className="uppercase text-xs text-neutral-900 tracking-[0.1em] font-orbitron">The best work happens when you care as much as your customer does</p>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll" data-reveal="" style={{-RevealDelay: '360ms'}}>
</div>
</div>
</section>
<div aria-hidden="true" className="surface-seam"></div>
</section>


<h2 className="text-[color:var(--text)] uppercase leading-none md:text-5xl text-3xl font-medium text-pink-600 tracking-tighter font-display mt-16 mb-16 ml-16">SOME of MY ART work...</h2><meta charset="utf-8"/><meta charset="utf-8"/><main className="mt-6 pr-10 pl-10">
<div className="max-w-7xl mx-auto">
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 pb-10 gap-x-4 gap-y-4" id="masonry">

<article className="mb-4 reveal" data-date="2024-10-01" data-tags="interior minimal workspace" data-title="Calm modern workspace" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Calm modern workspace" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21260af0-0789-4f7e-b2fe-1d93cef7cb10_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: 'Inter, sans-serif'}}>Traditional Jewels, desert, and the poetry of heritage</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-08-11" data-tags="nature landscape travel" data-title="Mountain Landscape" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Mountain Landscape" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/234ba076-5eab-4e56-8098-38f4aa9b2f8e_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>A mother’s embrace, the purest form of love</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-09-12" data-tags="interior zen workspace minimal" data-title="Zen workspace aesthetic" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Zen workspace aesthetic" className="w-full h-auto object-cover bg-lime-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/695b9340-e56a-4432-a163-dfed4576ba29_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Books, butterflies, and a heart full of joy</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-06-30" data-tags="interior decor home" data-title="Interior Design" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Interior Design" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37929fb9-e642-47e5-adb7-4e19d803c30d_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Jewels of tradition, captured in pencil</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-07-18" data-tags="nature forest travel" data-title="Forest Path" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Forest Path" className="object-auto w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f219b587-130b-42c8-9074-1d3f38c9d937_3840w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: 'Inter, sans-serif'}}>Eyes that tell stories beyond words</h4>
<p className="text-xs text-slate-400 mt-1" id="masonry" style={{fontFamily: 'Inter, sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-05-26" data-tags="fashion style editorial" data-title="Fashion Style" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Fashion Style" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d87578f1-0e6e-4443-87b4-cd4ea6a17c2e_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Rustic charm painted in bold strokes</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: 'Inter, sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-09-02" data-tags="tech innovation digital 3d" data-title="Tech Innovation" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Tech Innovation" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b784a6c-cd4c-4923-abb9-61120f34b6c7_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Lord Ganesha, sketched on the gentlest of textures</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: 'Inter, sans-serif'}}></p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-04-14" data-tags="travel ocean seascape motion" data-title="Ocean Views" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="group rounded-2xl overflow-hidden bg-[#393D5E] ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl transition">
<div className="relative">
<img alt="Ocean Views" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48ead019-3235-490b-8288-8656f925989d_800w.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
</div>
</div>
<div className="bg-teal-200/60 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: 'Inter, sans-serif'}}>Her presence lingers in petals and patterns</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}></p>
</div>
</div>
</article>
</div>

<div className="hidden text-center py-16" id="emptyState">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-white/10 mb-4">
<svg className="lucide lucide-search text-slate-400" data-lucide="search" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21 21-4.34-4.34"></path>
<circle className="" cx="11" cy="11" r="8"></circle>
</svg>
</div>
<h4 className="text-lg font-medium mb-1" style={{fontFamily: '\'Inter\',sans-serif'}}>No results found</h4>
<p className="text-sm text-slate-400" style={{fontFamily: '\'Inter\',sans-serif'}}>Try a different keyword or filter.</p>
</div>
</div>
</main><div className="sm:px-6 md:px-10 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7a5603-9d41-49aa-9d18-f92f1417605f_1600w.jpg)] max-w-7xl bg-cover mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl">
</div>
</div>

<div className="sm:px-6 md:px-10 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7a5603-9d41-49aa-9d18-f92f1417605f_1600w.jpg)] max-w-7xl bg-cover mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl">
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12">

<div className="flex-1 flex flex-col items-start">

<div className="flex items-center gap-4 text-neutral-400 text-sm">
<span className="h-px w-12 bg-white/10"></span>
<span className="h-px w-12 bg-white/10"></span>
</div>

<h2 className="hero-title uppercase leading-[0.95] text-[color:var(--text)] sm:text-6xl md:text-3xl text-4xl font-light text-neutral-900 tracking-normal font-display mb-3 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                Let's Stay <span className="font-light text-neutral-900/90 tracking-tighter">Connected</span>
</h2>

<p className="sm:text-base text-sm text-stone-800 max-w-md mt-4">Got questions or
                want to collaborate? Feel free to reach out—We're open to new projects or just a casual chat!</p>



<p className="mt-6">
<a className="underline underline-offset-4 hover:text-white text-sm text-gray-900 font-sans" href="/mailto:rbatra102@gmail.com">rbatra102@gmail.com</a>
</p>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm">
<img alt="Contact visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/348ed5ff-5e91-4e8b-839f-ea03d6c0fa75_320w.png"/>
</div>
</div>
</div>

<div className="mt-12 h-px bg-white/5"></div>
</div>

<div className="mt-12 h-px bg-white/5"></div>
</div>









    </>
  );
}
