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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="fixed inset-0 pointer-events-none opacity-[0.045]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg xmlns=\'http: //www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fillOpacity=\'1\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'43\' cy=\'33\' r=\'1\'/%3E%3Ccircle cx=\'93\' cy=\'73\' r=\'1\'/%3E%3Ccircle cx=\'133\' cy=\'123\' r=\'1\'/%3E%3Ccircle cx=\'123\' cy=\'23\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot'}}></div>
<div className="absolute top-0 inset-x-0 h-[40rem] pointer-events-none opacity-80" style={{background: 'radial-gradient(circle at 20% 10%, rgba(255,185,122,0.26), transparent 32%), radial-gradient(circle at 80% 0%, rgba(255,221,173,0.34), transparent 28%), linear-gradient(to bottom, rgba(255,255,255,0.32), transparent 65%)'}}></div>
<header className="fixed top-0 inset-x-0 z-40 bg-[#f6f1e8]/80 border-b border-black/5 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-blue-900 hover:text-blue-700 transition-colors" href="#">
        DS
      </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-blue-600 hover:text-blue-900 transition-colors" href="#work">Work</a>
<a className="text-sm font-normal text-blue-600 hover:text-blue-900 transition-colors" href="#experience">Experience</a>
<a className="text-sm font-normal text-blue-600 hover:text-blue-900 transition-colors" href="#philosophy">Philosophy</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white rounded-full px-4 py-2 transition-colors bg-blue-900 hover:bg-blue-800" href="mailto:hello@example.com">
          Let's Talk
        </a>
</div>
</div>
</header>
<main className="relative z-10 flex-grow pt-28 pb-24">
<section className="max-w-5xl mx-auto px-6 pt-10 md:pt-16 pb-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white/60 mb-8 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-blue-700">Available for new opportunities</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-blue-900 leading-[0.98] max-w-4xl">
        Designing systems with
        <br className="hidden md:block"/>
        warmth, clarity, and purpose.
      </h1>
<p className="mt-6 text-base md:text-lg text-blue-600 font-normal max-w-2xl leading-relaxed">
        I build thoughtful digital products with a quieter visual language—editorial, tactile, and precise—designed to feel premium without feeling cold.
      </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 px-5 py-3 rounded-full transition-colors flex items-center gap-2 shadow-[0_8px_24px_rgba(24,24,27,0.10)]" href="#experience">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
          Experience Summary
        </a>
<a className="text-sm font-medium text-blue-900 hover:text-blue-900 border border-black/10 hover:border-black/15 bg-white/70 hover:bg-white px-5 py-3 rounded-full transition-colors flex items-center gap-2" href="#work">
          Explore Work
        </a>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-16" id="work">
<h2 className="text-xl font-medium tracking-tight text-blue-900 mb-8 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
        Selected Endeavors
      </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 group relative rounded-[1.75rem] overflow-hidden transition-colors duration-300 flex flex-col justify-between p-8 min-h-[22rem] border border-black/8 bg-[#fbf8f2] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)] hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_28px_70px_rgba(62,39,18,0.10)]">
<div className="absolute inset-0 opacity-100" style={{background: 'radial-gradient(circle at top right, rgba(255,183,94,0.14), transparent 28%), linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0))'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/80 border border-black/5 p-2.5 rounded-2xl inline-block shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
<iconify-icon className="text-xl text-blue-700" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="text-blue-400 group-hover:text-blue-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-lg font-medium tracking-tight text-blue-900">Enterprise Design System</h3>
<p className="text-sm mt-2 text-blue-600 font-normal max-w-md leading-relaxed">Architected a scalable component library utilized by over 40+ engineering teams, standardizing visual language across the global organization.</p>
</div>
</div>
<div className="group relative rounded-[1.75rem] overflow-hidden transition-colors duration-300 p-8 min-h-[22rem] flex flex-col justify-between border border-black/8 bg-[#efe4d2] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)] hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_28px_70px_rgba(62,39,18,0.10)]">
<div className="absolute inset-0 opacity-100" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.32), rgba(255,255,255,0))'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/70 border border-black/5 p-2.5 rounded-2xl inline-block shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
<iconify-icon className="text-xl text-blue-700" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-lg font-medium tracking-tight text-blue-900">Fintech Dashboard</h3>
<p className="text-sm mt-2 text-blue-700 font-normal leading-relaxed">Simplifying complex data visualization into an intuitive, high-performance interface.</p>
</div>
</div>
<div className="group relative rounded-[1.75rem] overflow-hidden transition-colors duration-300 p-8 min-h-[22rem] flex flex-col justify-between border border-black/8 bg-[#f3eee5] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)] hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_28px_70px_rgba(62,39,18,0.10)]">
<div className="absolute inset-0 opacity-100" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.36), rgba(255,255,255,0))'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/80 border border-black/5 p-2.5 rounded-2xl inline-block shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
<iconify-icon className="text-xl text-blue-700" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-lg font-medium tracking-tight text-blue-900">Headless Architecture</h3>
<p className="text-sm mt-2 text-blue-600 font-normal leading-relaxed">Developed custom storefronts using modern frameworks to maximize performance and conversion.</p>
</div>
</div>
<div className="md:col-span-2 group relative rounded-[1.75rem] overflow-hidden transition-colors duration-300 p-8 min-h-[22rem] flex flex-col justify-between border border-black/8 bg-[#e9d3b8] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)] hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_28px_70px_rgba(62,39,18,0.10)]">
<div className="absolute inset-0 opacity-100" style={{background: 'radial-gradient(circle at 85% 20%, rgba(255,255,255,0.32), transparent 24%), linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0))'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/70 border border-black/5 p-2.5 rounded-2xl inline-block shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
<iconify-icon className="text-xl text-blue-700" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="text-blue-500 group-hover:text-blue-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-lg font-medium tracking-tight text-blue-900">Mobile Innovation</h3>
<p className="text-sm mt-2 text-blue-700 font-normal max-w-md leading-relaxed">Redefined mobile interactions for an e-commerce giant, driving a 34% increase in user engagement through fluid animations and micro-interactions.</p>
</div>
</div>
</div>
</section>
<section className="max-w-3xl mx-auto px-6 py-24" id="experience">
<h2 className="text-xl font-medium tracking-tight text-blue-900 mb-2 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
        Experience Summary
      </h2>
<p className="text-sm text-blue-500 font-normal mb-12">A timeline of professional rigor and continuous refinement.</p>
<div className="space-y-12 relative before:absolute before:inset-y-0 before:left-[5px] before:w-px before:bg-black/10">
<div className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-[#f6f1e8] border-2 border-blue-400/50 rounded-full group-hover:border-blue-700 transition-colors"></div>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
<h3 className="text-base font-medium tracking-tight text-blue-900">Principal Product Designer</h3>
<span className="text-xs text-blue-500 font-normal tracking-tight">2021 — PRESENT</span>
</div>
<div className="text-sm font-medium text-blue-700 mb-3">Acme Corporation</div>
<p className="text-sm text-blue-600 font-normal leading-relaxed mb-4">
            Spearheaded the redesign of the core web application, improving user retention by 24%. Managed a cross-functional team of 5 designers and collaborated closely with engineering leadership to implement a new React-based design system from the ground up.
          </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Design Systems</span>
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Leadership</span>
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">UX Strategy</span>
</div>
</div>
<div className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-[#f6f1e8] border-2 border-blue-400/50 rounded-full group-hover:border-blue-700 transition-colors"></div>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
<h3 className="text-base font-medium tracking-tight text-blue-900">Senior UI/UX Designer</h3>
<span className="text-xs text-blue-500 font-normal tracking-tight">2018 — 2021</span>
</div>
<div className="text-sm font-medium text-blue-700 mb-3">Creative Defiance Agency</div>
<p className="text-sm text-blue-600 font-normal leading-relaxed mb-4">
            Delivered end-to-end digital experiences for Fortune 500 clients. Specialized in rapid prototyping, user testing, and bridging the gap between high-fidelity visual design and robust front-end implementation.
          </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Interaction Design</span>
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Prototyping</span>
</div>
</div>
<div className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-[#f6f1e8] border-2 border-blue-400/50 rounded-full group-hover:border-blue-700 transition-colors"></div>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
<h3 className="text-base font-medium tracking-tight text-blue-900">Frontend Developer &amp; Designer</h3>
<span className="text-xs text-blue-500 font-normal tracking-tight">2015 — 2018</span>
</div>
<div className="text-sm font-medium text-blue-700 mb-3">Stoic Labs</div>
<p className="text-sm text-blue-600 font-normal leading-relaxed mb-4">
            Began career at a specialized boutique studio. Translated wireframes into functional, pixel-perfect web experiences utilizing HTML, CSS, and early JavaScript frameworks.
          </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Frontend Dev</span>
<span className="text-xs font-normal px-2.5 py-1 rounded-full border border-black/10 bg-white/60 text-blue-700">Visual Design</span>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-black/10 flex items-center justify-between">
<p className="text-sm text-blue-500 font-normal">For a comprehensive breakdown, view the full document.</p>
<a className="text-xs font-medium text-blue-900 flex items-center gap-1.5 hover:text-blue-700 transition-colors" href="#">
          Download PDF
          <iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-16" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-[1.75rem] p-8 transition-colors duration-300 border border-black/8 bg-[#fbf8f2] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)]">
<iconify-icon className="text-xl text-blue-700 mb-6" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-blue-900 mb-3">The Toolkit</h3>
<p className="text-sm text-blue-600 font-normal leading-relaxed mb-8">
            Mastery of a tool is essential, but it is merely an extension of thought. I utilize industry standards to ensure seamless collaboration and output.
          </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div className="flex items-center gap-3 text-sm text-blue-700 font-normal">
<iconify-icon className="text-blue-500 text-lg" icon="solar:figma-linear" strokeWidth="1.5"></iconify-icon> Figma
            </div>
<div className="flex items-center gap-3 text-sm text-blue-700 font-normal">
<iconify-icon className="text-blue-500 text-lg" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon> React / Next.js
            </div>
<div className="flex items-center gap-3 text-sm text-blue-700 font-normal">
<iconify-icon className="text-blue-500 text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> Framer
            </div>
<div className="flex items-center gap-3 text-sm text-blue-700 font-normal">
<iconify-icon className="text-blue-500 text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> CSS Systems
            </div>
</div>
</div>
<div className="rounded-[1.75rem] p-8 transition-colors duration-300 border border-black/8 bg-[#f0e2cf] shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_rgba(62,39,18,0.06)]">
<iconify-icon className="text-xl text-blue-700 mb-6" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-blue-900 mb-3">Defiant Stoicism</h3>
<p className="text-sm text-blue-700 font-normal leading-relaxed mb-4">
            In a landscape of digital noise, clarity is an act of rebellion. I design with intent, stripping away the superfluous to reveal the essential structure beneath.
          </p>
<p className="text-sm text-blue-700 font-normal leading-relaxed">
            Every element must earn its place. Every interaction must serve a purpose. This philosophy drives a relentless pursuit of both warmth and functional depth.
          </p>
</div>
</div>
</section>
</main>
<footer className="border-t border-black/10 mt-auto bg-transparent">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-sm font-medium tracking-tight text-blue-900">DS</span>
<span className="text-xs text-blue-500 font-normal">© 2024 Defiant Stoic. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-blue-500 hover:text-blue-900 transition-colors" href="#">
<span className="sr-only">Email</span>
<iconify-icon className="text-lg" icon="solar:letter-unread-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-500 hover:text-blue-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-lg" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-500 hover:text-blue-900 transition-colors" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
