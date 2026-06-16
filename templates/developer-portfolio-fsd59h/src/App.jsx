import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });

      const cursor = document.getElementById('cursor');
      const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');

      document.addEventListener('mousemove', (e) => {
        if (!cursor) return;
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      hoverTriggers.forEach((el) => {
        el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover-state'));
        el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover-state'));
      });

      const lines = document.querySelectorAll('.observe-line');
      const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.4 });

      lines.forEach((line) => lineObserver.observe(line));
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<nav className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
<div className="flex items-center gap-3 hover-trigger">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3c8b8] text-[#090909]">
<i className="h-5 w-5" data-lucide="cat"></i>
</div>
<span className="text-base font-medium text-[#d3c8b8]">RK</span>
</div>
<div className="hidden md:flex flex-col items-end gap-2 text-right">
<a className="hover-trigger text-xl font-semibold uppercase tracking-tight text-[#7d766c] transition-colors hover:text-[#d3c8b8]" href="#about">About</a>
<a className="hover-trigger text-xl font-semibold uppercase tracking-tight text-[#7d766c] transition-colors hover:text-[#d3c8b8]" href="#work">Work</a>
<a className="hover-trigger text-xl font-semibold uppercase tracking-tight text-[#7d766c] transition-colors hover:text-[#d3c8b8]" href="#contact">Contact</a>
</div>
<a className="md:hidden hover-trigger inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-[#d3c8b8]" href="#contact">
        Contact
        <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>
<section className="relative flex min-h-screen items-center px-6 pt-28 md:px-10">
<div className="absolute inset-0 soft-glow"></div>
<div className="relative mx-auto grid max-w-7xl items-end gap-16 lg:grid-cols-12">
<div className="lg:col-span-8">
<p className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]">
<span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
          MERN Stack Developer — Birgunj, Nepal
        </p>
<h1 className="max-w-5xl text-6xl font-semibold uppercase leading-none tracking-tight text-[#d3c8b8] sm:text-7xl md:text-8xl lg:text-[11rem]">
<span className="hero-word" style={{animationDelay: '0.08s'}}>I</span>
<span className="hero-word" style={{animationDelay: '0.16s'}}>build</span><br/>
<span className="hero-word text-[#ff5b36]" style={{animationDelay: '0.24s'}}>fast</span>
<span className="hero-word" style={{animationDelay: '0.32s'}}>digital</span><br/>
<span className="hero-word" style={{animationDelay: '0.40s'}}>products</span>
</h1>
<p className="mt-8 max-w-2xl text-lg font-normal leading-8 text-[#9f978a] md:text-xl">
          Full-stack applications with strong foundations, sharp interfaces, and business-focused execution.
        </p>
</div>
<div className="lg:col-span-4 lg:justify-self-end">
<div className="hover-trigger relative h-32 w-32 md:h-40 md:w-40">
<svg className="spin-slow h-full w-full" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-xs font-medium uppercase tracking-[0.28em]" fill="#d3c8b8">
<textpath href="#circlePath" startoffset="0%">
                Available for freelance • Available for freelance •
              </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-[#ff5b36]">
<i className="h-7 w-7" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>
<div className="px-6 md:px-10">
<div className="section-line observe-line"></div>
</div>
<section className="relative px-6 py-24 md:px-10 md:py-32" id="about">
<div className="mx-auto max-w-7xl">
<div className="mb-10">
<p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#bfb4a3]">About Me</p>
</div>
<div className="max-w-6xl">
<h2 className="text-5xl font-semibold leading-[0.94] tracking-tight text-[#d3c8b8] sm:text-6xl md:text-7xl lg:text-[7rem]">
<span className="about-line">I'm a <span className="highlight">selectively</span></span>
<span className="about-line"><span className="highlight">skilled</span> product</span>
<span className="about-line">developer with</span>
<span className="about-line">strong focus on</span>
<span className="about-line">producing high</span>
<span className="about-line">quality &amp; impactful</span>
<span className="about-line">digital experience<span className="text-[#2d2b29]">.</span></span>
</h2>
<p className="mt-10 max-w-3xl text-lg leading-8 text-[#8d8579] md:text-xl">
          I'm Ravindra — a full stack developer who builds complete web products from database to interface, with an emphasis on performance, clarity, and practical outcomes.
        </p>
</div>
</div>
</section>
<section className="overflow-hidden border-y border-white/5 bg-[#0b0b0b] py-16 text-[#d3c8b8] md:py-20">
<div className="marquee-wrapper gap-8 whitespace-nowrap text-5xl font-semibold uppercase tracking-tight opacity-95 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
<span>React</span><span className="text-[#ff5b36]">·</span>
<span>Node.js</span><span className="text-[#ff5b36]">·</span>
<span>Express</span><span className="text-[#ff5b36]">·</span>
<span>MongoDB</span><span className="text-[#ff5b36]">·</span>
<span>APIs</span><span className="text-[#ff5b36]">·</span>
<span>Authentication</span><span className="text-[#ff5b36]">·</span>
<span>Deployment</span><span className="text-[#ff5b36]">·</span>
<span>React</span><span className="text-[#ff5b36]">·</span>
<span>Node.js</span><span className="text-[#ff5b36]">·</span>
<span>Express</span><span className="text-[#ff5b36]">·</span>
<span>MongoDB</span><span className="text-[#ff5b36]">·</span>
<span>APIs</span><span className="text-[#ff5b36]">·</span>
<span>Authentication</span><span className="text-[#ff5b36]">·</span>
<span>Deployment</span><span className="text-[#ff5b36]">·</span>
</div>
<div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3 px-6 md:px-10">
<div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a79d90]">React / 2yr</div>
<div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a79d90]">Node.js / 1yr</div>
<div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a79d90]">MongoDB / 1yr</div>
<div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a79d90]">REST APIs / 2yr</div>
<div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a79d90]">UI Systems / 2yr</div>
</div>
</section>
<section className="bg-[#090909] px-6 py-24 md:px-10 md:py-32" id="work">
<div className="mx-auto max-w-7xl">
<div className="mb-16 flex items-center gap-6">
<h2 className="text-4xl font-semibold uppercase tracking-tight text-[#d3c8b8] md:text-5xl">Featured Work</h2>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="project-card group grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
<div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
<a className="hover-trigger mb-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-[#ff5b36]" href="https://kritisublimation.com.np" target="_blank">
            Live Site
            <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
<h3 className="mb-6 text-3xl font-semibold tracking-tight text-[#d3c8b8] md:text-4xl">
            Kriti Sublimation Platform
          </h3>
<p className="mb-8 max-w-2xl text-lg leading-8 text-[#9b9387] md:text-xl">
            Full-stack business platform for a printing and ID card shop in Birgunj, Nepal. Designed to streamline application tracking, media handling, and client communication.
          </p>
<ul className="mb-10 max-w-2xl space-y-4 text-base leading-7 text-[#c4baaa] md:text-lg">
<li className="flex items-start gap-3"><span className="mt-1 text-[#ff5b36]">—</span> Online ID card application system for offices, school staff, and students</li>
<li className="flex items-start gap-3"><span className="mt-1 text-[#ff5b36]">—</span> Real-time submission status tracking with unique IDs</li>
<li className="flex items-start gap-3"><span className="mt-1 text-[#ff5b36]">—</span> SMS notifications via Sparrow SMS API in Nepali language</li>
<li className="flex items-start gap-3"><span className="mt-1 text-[#ff5b36]">—</span> Admin panel with Excel export, bulk updates, and media management</li>
<li className="flex items-start gap-3"><span className="mt-1 text-[#ff5b36]">—</span> Photo retrieval flow based on phone number lookup</li>
</ul>
<div className="flex flex-wrap gap-3">
<span className="rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-[#918879]">React</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-[#918879]">Node.js</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-[#918879]">MongoDB</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-[#918879]">UI</span>
</div>
</div>
<div className="order-1 lg:order-2 lg:col-span-5">
<div className="project-img-container flex h-80 items-center justify-center border border-white/10 bg-[#111111] p-8 md:h-[32rem]">
<div className="text-center text-sm font-medium uppercase tracking-[0.28em] text-[#6f695f]">
              Platform Interface<br/>
<span className="text-xs opacity-60">(Hover to view)</span>
</div>
<div className="project-img-overlay">
<a className="hover-trigger inline-flex items-center gap-4 text-3xl font-semibold uppercase tracking-tight text-white md:text-4xl" href="https://kritisublimation.com.np" target="_blank">
                View Case
                <i className="h-8 w-8" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="my-20 h-px w-full bg-white/10"></div>
<div className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12">
<div className="md:col-span-3">
<p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7d766c]">Standalone Tool</p>
</div>
<div className="md:col-span-7">
<h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#d3c8b8]">Photo Retrieval System</h3>
<p className="text-lg text-[#91897d]">Client-facing secure photo download portal using phone number verification.</p>
</div>
<div className="md:col-span-2 md:text-right">
<span className="hover-trigger inline-flex text-[#7d766c] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#ff5b36]">
<i className="h-8 w-8" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/5 bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32" id="contact">
<div className="mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-between">
<div className="mb-20">
<p className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]">
<span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
          Available for new opportunities
        </p>
<h2 className="inline-block text-5xl font-semibold uppercase leading-none tracking-tight text-[#d3c8b8] md:text-7xl lg:text-[8rem]">
          Let's build<br/>something.
        </h2>
</div>
<div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
<div>
<p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#7d766c]">Email</p>
<a className="hover-trigger text-lg text-[#d3c8b8] transition-colors hover:text-[#ff5b36] md:text-xl" href="mailto:ravindrakushwaha2k20@gmail.com">ravindrakushwaha2k20@gmail.com</a>
</div>
<div>
<p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#7d766c]">Github</p>
<a className="hover-trigger text-lg text-[#d3c8b8] transition-colors hover:text-[#ff5b36] md:text-xl" href="https://github.com/Ravindra001rk" target="_blank">github.com/Ravindra001rk</a>
</div>
<div>
<p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#7d766c]">Location</p>
<p className="text-lg text-[#d3c8b8] md:text-xl">Birgunj, Nepal</p>
<p className="mt-2 text-sm text-[#7d766c]">+977 9746522742</p>
</div>
</div>
</div>
</section>


    </>
  );
}
