import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
// Standard Reveal
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
// Animated Number Counter
if (entry.target.hasAttribute('data-count')) {
const targetCount = parseInt(entry.target.getAttribute('data-count'));
const suffix = entry.target.getAttribute('data-suffix') || '';
animateValue(entry.target, 0, targetCount, 2000, suffix);
entry.target.removeAttribute('data-count');
}
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Smooth Parallax
const parallaxElements = document.querySelectorAll('.parallax');
const scrollHandler = () => {
requestAnimationFrame(() => {
const scrolled = window.scrollY;
parallaxElements.forEach(el => {
const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
const yPos = scrolled * speed;
el.style.transform = `translate3d(0, ${yPos}px, 0)`;
});
});
};
window.addEventListener('scroll', scrollHandler);
// Sticky Workflow Narrative
const steps = document.querySelectorAll('.workflow-step');
const visuals = document.querySelectorAll('.workflow-visual');
const stepObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const stepId = entry.target.getAttribute('data-step');
// Update visual container
visuals.forEach(v => {
if (v.getAttribute('data-visual') === stepId) {
v.style.opacity = '1';
v.style.transform = 'translateY(0) scale(1)';
} else {
v.style.opacity = '0';
v.style.transform = 'translateY(10px) scale(0.98)';
}
});
// Dim non-active text steps
steps.forEach(s => {
s.classList.remove('opacity-100');
s.classList.add('opacity-40');
});
entry.target.classList.remove('opacity-40');
entry.target.classList.add('opacity-100');
}
});
}, { rootMargin: '-40% 0px -40% 0px' });
steps.forEach(step => stepObserver.observe(step));
});
function animateValue(obj, start, end, duration, suffix) {
let startTimestamp = null;
const step = (timestamp) => {
if (!startTimestamp) startTimestamp = timestamp;
const progress = Math.min((timestamp - startTimestamp) / duration, 1);
const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
const current = Math.floor(ease * (end - start) + start);
obj.innerHTML = current + suffix;
if (progress < 1) {
window.requestAnimationFrame(step);
}
};
window.requestAnimationFrame(step);
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2" href="#">
<div className="w-5 h-5 rounded bg-neutral-900 flex items-center justify-center text-[10px] text-white font-medium">D</div>
          DEV.
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-neutral-900 transition-colors" href="#workflow">Process</a>
<a className="hover:text-neutral-900 transition-colors" href="#projects">Work</a>
<a className="hover:text-neutral-900 transition-colors" href="#blog">Writing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="https://github.com" target="_blank">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full btn-primary" href="#contact">
            Contact
          </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[95vh]">

<div className="absolute inset-0 bg-grid z-0 opacity-60 parallax" data-speed="0.05"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-neutral-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 parallax" data-speed="0.1"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-neutral-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 parallax" data-speed="0.15"></div>

<div className="hidden lg:flex absolute top-1/4 right-[10%] p-4 bg-white/80 backdrop-blur border border-neutral-100 rounded-2xl shadow-xl flex-col gap-3 z-10 parallax animate-float" data-speed="-0.1">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:server-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest">Latency</div>
<div className="text-sm font-medium text-neutral-900">12ms</div>
</div>
</div>
</div>
<div className="hidden lg:flex absolute bottom-1/3 left-[10%] p-3 bg-white/80 backdrop-blur border border-neutral-100 rounded-2xl shadow-xl flex-col gap-2 z-10 parallax animate-float-slow" data-speed="-0.15">
<div className="flex gap-1 items-end h-8">
<div className="w-2 bg-neutral-200 rounded-t h-3"></div>
<div className="w-2 bg-neutral-300 rounded-t h-5"></div>
<div className="w-2 bg-neutral-900 rounded-t h-8"></div>
<div className="w-2 bg-neutral-200 rounded-t h-4"></div>
</div>
<div className="text-[10px] font-medium text-neutral-500">99.9% Uptime</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-20">
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md text-xs font-medium text-neutral-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
          Available for new opportunities
        </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6 text-balance">
          Engineering digital <br/>
<span className="text-neutral-400">products of scale.</span>
</h1>
<p className="reveal delay-200 text-base md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal text-balance">
          I build scalable, performant, and accessible web applications. Bridging the gap between beautiful editorial design and complex backend architecture.
        </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-primary" href="#projects">
            View selected work
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-secondary" href="#case-study">
            Read case study
          </a>
</div>
</div>

<div className="reveal delay-300 w-full max-w-5xl mx-auto px-6 mt-20 md:mt-32 relative z-10 parallax" data-speed="-0.08">
<div className="relative w-full aspect-[21/9] bg-neutral-50 rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
<div className="absolute top-0 w-full h-10 border-b border-neutral-200 bg-white flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-neutral-200"></div>
</div>
<div className="relative z-10 w-3/4 flex flex-col gap-4 mt-8">
<div className="h-8 w-1/3 bg-neutral-200 rounded-md"></div>
<div className="h-32 w-full bg-neutral-100 rounded-md border border-neutral-200"></div>
<div className="flex gap-4">
<div className="h-24 w-1/2 bg-neutral-100 rounded-md border border-neutral-200"></div>
<div className="h-24 w-1/2 bg-neutral-100 rounded-md border border-neutral-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 relative bg-white border-t border-neutral-100 overflow-hidden" id="philosophy">
<div className="absolute inset-0 bg-grid-subtle opacity-40 parallax" data-speed="0.03"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-tight reveal text-balance">
              Building premium products requires a <span className="text-neutral-400">systematic mindset.</span>
</h2>
<div className="space-y-6 text-lg text-neutral-500 font-light reveal delay-100 max-w-lg">
<p>
                Great engineering is invisible. It lives in the sub-second response times, the fluid micro-interactions, and the scalable architectures that never falter under load.
              </p>
<p>
                I approach every project with an architecture-first mindset—focusing on strict design systems, type-safe data pipelines, and a relentless pursuit of performance. 
              </p>
</div>
<div className="mt-10 reveal delay-200">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group" href="#workflow">
                  Explore my process
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-[400px] w-full reveal delay-200">

<div className="absolute top-10 right-10 w-64 h-64 border border-neutral-200 rounded-full parallax" data-speed="-0.05"></div>
<div className="absolute bottom-0 left-0 w-72 h-48 bg-neutral-50 border border-neutral-100 rounded-2xl parallax shadow-sm" data-speed="0.08"></div>
<div className="absolute top-20 left-10 w-48 h-48 bg-neutral-900 rounded-2xl parallax flex items-center justify-center shadow-xl" data-speed="0.12">
<iconify-icon className="text-white opacity-80" icon="solar:layers-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="absolute bottom-10 right-20 w-32 h-32 border border-neutral-200 rounded-full parallax backdrop-blur-md bg-white/50" data-speed="-0.02"></div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-neutral-50 border-t border-neutral-100" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center max-w-2xl mx-auto reveal">
<h2 className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-4">Methodology</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6">The engineering lifecycle.</h3>
</div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

<div className="hidden lg:block lg:w-1/2 sticky top-32 h-[500px] rounded-3xl bg-white border border-neutral-200 shadow-xl overflow-hidden reveal">

<div className="absolute inset-0 workflow-visual flex flex-col items-center justify-center p-12 opacity-100" data-visual="1">
<div className="w-full h-full bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-grid-subtle opacity-50"></div>
<iconify-icon className="text-neutral-300 relative z-10" icon="solar:magnifer-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 workflow-visual flex flex-col items-center justify-center p-12 opacity-0 scale-95" data-visual="2">
<div className="w-full h-full flex flex-col gap-4 items-center justify-center relative">
<div className="w-32 h-16 bg-neutral-900 rounded-lg shadow-lg relative z-10 flex items-center justify-center"><iconify-icon className="text-white" icon="solar:database-linear" width="24"></iconify-icon></div>
<div className="w-px h-8 bg-neutral-300"></div>
<div className="flex gap-8">
<div className="w-24 h-16 bg-white border border-neutral-200 shadow-sm rounded-lg flex items-center justify-center"><iconify-icon className="text-neutral-400" icon="solar:server-square-linear" width="20"></iconify-icon></div>
<div className="w-24 h-16 bg-white border border-neutral-200 shadow-sm rounded-lg flex items-center justify-center"><iconify-icon className="text-neutral-400" icon="solar:server-square-linear" width="20"></iconify-icon></div>
</div>
</div>
</div>

<div className="absolute inset-0 workflow-visual flex flex-col items-center justify-center p-12 opacity-0 scale-95" data-visual="3">
<div className="w-full h-full bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col">
<div className="h-8 border-b border-neutral-200 bg-white flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-200"></div><div className="w-2 h-2 rounded-full bg-neutral-200"></div>
</div>
<div className="flex-grow p-4 flex gap-4">
<div className="w-1/3 bg-white rounded border border-neutral-100 h-full"></div>
<div className="w-2/3 flex flex-col gap-4">
<div className="h-1/2 bg-white rounded border border-neutral-100"></div>
<div className="h-1/2 bg-white rounded border border-neutral-100"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 workflow-visual flex flex-col items-center justify-center p-12 opacity-0 scale-95" data-visual="4">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 border-4 border-neutral-50 rounded-full animate-ping opacity-20"></div>
<div className="w-32 h-32 bg-green-50 border border-green-100 rounded-full flex items-center justify-center relative z-10 text-green-500">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 py-10 lg:py-[20vh] flex flex-col gap-[30vh]">
<div className="workflow-step opacity-100 transition-opacity duration-500" data-step="1">
<h4 className="text-2xl font-medium text-neutral-900 mb-4">1. Problem Discovery</h4>
<p className="text-neutral-500 leading-relaxed font-light text-lg">
                Before writing a single line of code, we define the exact constraints and business goals. We map out user journeys, establish performance budgets, and mitigate architectural risks early on.
              </p>
</div>
<div className="workflow-step opacity-40 transition-opacity duration-500" data-step="2">
<h4 className="text-2xl font-medium text-neutral-900 mb-4">2. System Architecture</h4>
<p className="text-neutral-500 leading-relaxed font-light text-lg">
                Designing the backbone. I focus on normalized data modeling, scalable API contracts (REST or GraphQL), and choosing the right infrastructural components to avoid technical debt.
              </p>
</div>
<div className="workflow-step opacity-40 transition-opacity duration-500" data-step="3">
<h4 className="text-2xl font-medium text-neutral-900 mb-4">3. UI Implementation</h4>
<p className="text-neutral-500 leading-relaxed font-light text-lg">
                Translating design into pixel-perfect, highly accessible React components. Heavy emphasis on micro-interactions, layout shift prevention, and utilizing Server Components for zero-JS delivery.
              </p>
</div>
<div className="workflow-step opacity-40 transition-opacity duration-500" data-step="4">
<h4 className="text-2xl font-medium text-neutral-900 mb-4">4. Testing &amp; Reliability</h4>
<p className="text-neutral-500 leading-relaxed font-light text-lg">
                Ensuring resilience through automated testing. I integrate strict CI/CD pipelines running E2E tests via Playwright and unit tests via Vitest, ensuring zero regressions on deployment.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white border-t border-neutral-100">
<div className="absolute inset-0 bg-grid-subtle opacity-30 parallax" data-speed="0.04"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Technology Ecosystem</h2>
<p className="text-neutral-500 max-w-xl mx-auto font-light">The foundational tools and frameworks I use to engineer robust digital products.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="card-premium rounded-2xl p-8 reveal delay-100 group">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" icon="solar:monitor-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-neutral-900 mb-4">Frontend</h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>React &amp; Next.js App Router</li>
<li>TypeScript</li>
<li>Tailwind CSS &amp; Radix UI</li>
<li>Framer Motion</li>
</ul>
</div>
<div className="card-premium rounded-2xl p-8 reveal delay-200 group">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" icon="solar:server-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-neutral-900 mb-4">Backend</h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>Node.js &amp; Express</li>
<li>tRPC &amp; GraphQL</li>
<li>PostgreSQL &amp; Prisma</li>
<li>Redis Caching</li>
</ul>
</div>
<div className="card-premium rounded-2xl p-8 reveal delay-300 group">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" icon="solar:cloud-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-neutral-900 mb-4">Infrastructure</h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>AWS (EC2, S3, RDS)</li>
<li>Vercel Edge Network</li>
<li>Docker &amp; Containerization</li>
<li>GitHub Actions (CI/CD)</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-neutral-900 text-white relative overflow-hidden" id="projects">

<div className="absolute inset-0 z-0 opacity-10 parallax" data-speed="0.05">
<div className="w-full h-full" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Selected Work</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">
              Every project represents a complex engineering challenge, focusing on high-density data and refined user interfaces.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors group" href="#">
            View archive
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<a className="block group reveal" href="#case-study">
<div className="relative w-full aspect-[16/10] bg-neutral-800 rounded-2xl mb-6 overflow-hidden border border-neutral-700 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
<iconify-icon className="text-neutral-600" icon="solar:chart-square-linear" width="64"></iconify-icon>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-2xl font-medium text-white group-hover-underline inline-block">Nova Analytics</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base text-neutral-400 mb-4 font-light max-w-md">
                A high-performance financial dashboard handling millions of data points with zero layout shift.
              </p>
<div className="flex gap-2">
<span className="px-2.5 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Next.js</span>
<span className="px-2.5 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Tremor</span>
</div>
</div>
</a>

<a className="block group reveal delay-200 mt-0 lg:mt-24" href="#">
<div className="relative w-full aspect-[16/10] bg-neutral-800 rounded-2xl mb-6 overflow-hidden border border-neutral-700 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
<iconify-icon className="text-neutral-600" icon="solar:cart-large-minimalistic-linear" width="64"></iconify-icon>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-2xl font-medium text-white group-hover-underline inline-block">Lumina Commerce</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base text-neutral-400 mb-4 font-light max-w-md">
                Headless e-commerce storefront utilizing edge caching to achieve sub-second global page loads.
              </p>
<div className="flex gap-2">
<span className="px-2.5 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Remix</span>
<span className="px-2.5 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Shopify</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-b border-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-30 parallax" data-speed="0.02"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
<div className="reveal border-l-2 border-neutral-200 pl-6">
<div className="text-4xl md:text-5xl font-medium text-neutral-900 mb-2" data-count="60" data-suffix="%">0%</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Faster Load Times</div>
</div>
<div className="reveal delay-100 border-l-2 border-neutral-200 pl-6">
<div className="text-4xl md:text-5xl font-medium text-neutral-900 mb-2" data-count="100" data-suffix="">0</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Lighthouse Score</div>
</div>
<div className="reveal delay-200 border-l-2 border-neutral-200 pl-6">
<div className="text-4xl md:text-5xl font-medium text-neutral-900 mb-2" data-count="2" data-suffix="M+">0M+</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Events Processed</div>
</div>
<div className="reveal delay-300 border-l-2 border-neutral-200 pl-6">
<div className="text-4xl md:text-5xl font-medium text-neutral-900 mb-2" data-count="99" data-suffix="%">0%</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Uptime Guarantee</div>
</div>
</div>
</div>
</section>

<section className="bg-white relative" id="case-study">
<div className="relative pt-40 pb-32 border-b border-neutral-100 overflow-hidden">

<div className="absolute inset-0 bg-neutral-50 z-0 parallax" data-speed="0.1"></div>
<div className="absolute -right-20 top-20 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl parallax" data-speed="0.2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[10px] uppercase tracking-widest font-medium mb-6 shadow-sm reveal">
            Case Study
          </div>
<h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-neutral-900 mb-8 leading-tight text-balance reveal delay-100">
            Architecting a scalable financial dashboard for Atlas FinTech.
          </h1>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-12 font-light reveal delay-200">
            A complete frontend rewrite to handle millions of data points without layout shift, dropping initial load time by 60%.
          </p>
<div className="flex flex-wrap justify-center gap-12 text-sm text-neutral-600 reveal delay-300">
<div className="flex flex-col items-center">
<span className="text-[10px] uppercase text-neutral-400 mb-1 font-medium tracking-widest">Role</span>
<span className="font-medium">Lead Engineer</span>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] uppercase text-neutral-400 mb-1 font-medium tracking-widest">Timeline</span>
<span className="font-medium">4 Months</span>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] uppercase text-neutral-400 mb-1 font-medium tracking-widest">Live URL</span>
<a className="font-medium hover:text-neutral-900 underline underline-offset-4" href="#">atlasfintech.io</a>
</div>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-24">

<div className="w-full aspect-[16/9] bg-neutral-100 rounded-3xl border border-neutral-200 mb-32 shadow-2xl flex items-center justify-center overflow-hidden reveal relative">
<div className="absolute inset-0 bg-grid-subtle opacity-40 parallax" data-speed="0.05"></div>
<div className="w-full h-full relative p-8 z-10 parallax" data-speed="-0.03">
<div className="w-full h-full bg-white rounded-xl shadow-sm border border-neutral-200 flex flex-col overflow-hidden">
<div className="h-12 border-b border-neutral-100 flex items-center px-6 gap-4">
<div className="w-4 h-4 rounded text-neutral-300">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
</div>
<div className="h-4 w-24 bg-neutral-100 rounded"></div>
</div>
<div className="flex-grow p-6 flex gap-6">
<div className="w-64 border border-neutral-100 rounded-lg p-4 flex flex-col gap-4">
<div className="h-8 w-full bg-neutral-50 rounded"></div>
<div className="h-32 w-full bg-neutral-50 rounded"></div>
</div>
<div className="flex-grow flex flex-col gap-6">
<div className="flex gap-6">
<div className="h-24 flex-grow bg-neutral-50 rounded-lg border border-neutral-100"></div>
<div className="h-24 flex-grow bg-neutral-50 rounded-lg border border-neutral-100"></div>
<div className="h-24 flex-grow bg-neutral-50 rounded-lg border border-neutral-100"></div>
</div>
<div className="flex-grow bg-neutral-50 rounded-lg border border-neutral-100 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neutral-200/50 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-8 space-y-20">
<div className="reveal">
<h3 className="text-2xl font-medium text-neutral-900 mb-6">The Context</h3>
<p className="text-neutral-600 leading-relaxed mb-4 font-light text-lg">
                Atlas FinTech provides enterprise wealth management solutions. Their legacy dashboard, built on an aging SPA framework, was struggling to render large datasets. Users were experiencing 8+ second load times and browser freezes when viewing complex financial charts.
              </p>
<p className="text-neutral-600 leading-relaxed font-light text-lg">
                I was brought in to lead the frontend rewrite, tasked with migrating the platform to a modern architecture without disrupting the existing user base.
              </p>
</div>
<div className="reveal">
<h3 className="text-2xl font-medium text-neutral-900 mb-6">Architecture Decisions</h3>
<p className="text-neutral-600 leading-relaxed mb-8 font-light text-lg">
                We chose <strong>Next.js App Router</strong> to heavily leverage React Server Components. By shifting the massive data aggregations to the server, we reduced the client JS bundle size by over 70%.
              </p>
<div className="p-8 bg-neutral-50 border border-neutral-100 rounded-2xl space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-neutral-400" icon="solar:server-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-neutral-900 mb-2 text-lg">Server-first Data Fetching</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                      Implemented tRPC with React Query to ensure type safety from DB to client, utilizing parallel fetching to eliminate waterfalls.
                    </p>
</div>
</div>
<div className="w-full h-px bg-neutral-200"></div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-neutral-400" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-neutral-900 mb-2 text-lg">Strict Design System</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                      Built a headless UI component library with Radix Primitives and Tailwind CSS for absolute styling control and WAI-ARIA compliance.
                    </p>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-neutral-200 relative reveal overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-neutral-900 animate-[moveRight_3s_ease-in-out_infinite]" style={{animation: 'moveRight 3s ease-in-out infinite'}}></div>
<style>@keyframes moveRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }</style>
</div>
<div className="reveal">
<h3 className="text-2xl font-medium text-neutral-900 mb-6">Results &amp; Impact</h3>
<p className="text-neutral-600 leading-relaxed mb-8 font-light text-lg">
                The migration was deployed incrementally over 3 months. The immediate impact on performance metrics and user retention was substantial, proving that architectural rigor directly correlates with business value.
              </p>
</div>
</div>
<div className="md:col-span-4 relative">
<div className="sticky top-32 space-y-10">
<div className="reveal">
<h4 className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium mb-4">Technologies</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-xs rounded border border-neutral-200 text-neutral-700 bg-white shadow-sm">Next.js 14</span>
<span className="px-3 py-1.5 text-xs rounded border border-neutral-200 text-neutral-700 bg-white shadow-sm">TypeScript</span>
<span className="px-3 py-1.5 text-xs rounded border border-neutral-200 text-neutral-700 bg-white shadow-sm">Tailwind CSS</span>
<span className="px-3 py-1.5 text-xs rounded border border-neutral-200 text-neutral-700 bg-white shadow-sm">tRPC</span>
</div>
</div>
<div className="p-8 bg-neutral-900 text-white rounded-2xl reveal delay-100 shadow-xl">
<iconify-icon className="text-neutral-600 mb-6" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-base text-neutral-300 leading-relaxed mb-6 font-light">
                  "The rewrite completely transformed how our users interact with the data. It feels like a completely different, premium product."
                </p>
<div className="text-xs font-medium tracking-wide uppercase text-neutral-400">— CTO, Atlas FinTech</div>
</div>
</div>
</div>
</div>
<div className="mt-32 pt-16 border-t border-neutral-100 text-center reveal">
<p className="text-xs uppercase tracking-widest text-neutral-400 mb-4 font-medium">Up next</p>
<a className="inline-block group" href="#">
<h2 className="text-4xl font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors tracking-tight">
              Lumina Commerce
            </h2>
<span className="inline-flex items-center gap-2 text-sm font-medium mt-4 text-neutral-600 group-hover:text-neutral-900">
              View project
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-32 md:py-40 bg-neutral-50 border-t border-neutral-100 relative" id="blog">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">Writing</h2>
<p className="text-lg text-neutral-500 font-light max-w-lg">
              Thoughts on frontend engineering, system design, and navigating the modern tech ecosystem.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors group" href="#">
            View all articles
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-6">
<a className="block p-8 md:p-12 bg-white border border-neutral-100 rounded-3xl group hover:border-neutral-200 hover:-translate-y-1 transition-all duration-300 reveal shadow-sm hover:shadow-lg" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3 text-xs text-neutral-400 font-medium uppercase tracking-widest">
<time>Oct 24, 2023</time>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>5 min read</span>
</div>
<span className="px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-neutral-50 text-neutral-600 font-medium border border-neutral-100 w-fit">
                Architecture
              </span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-4 group-hover-underline inline-block">
              Mastering React Server Components
            </h3>
<p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-3xl font-light">
              A deep dive into how RSCs change the mental model of building React applications and how to leverage them to completely eliminate client-side JavaScript waterfalls.
            </p>
</a>
<a className="block p-8 md:p-12 bg-white border border-neutral-100 rounded-3xl group hover:border-neutral-200 hover:-translate-y-1 transition-all duration-300 reveal delay-100 shadow-sm hover:shadow-lg" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3 text-xs text-neutral-400 font-medium uppercase tracking-widest">
<time>Sep 12, 2023</time>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>8 min read</span>
</div>
<span className="px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-neutral-50 text-neutral-600 font-medium border border-neutral-100 w-fit">
                Design Systems
              </span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-4 group-hover-underline inline-block">
              Building Scalable Tailwind Architectures
            </h3>
<p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-3xl font-light">
              How to structure your Tailwind configuration to support multiple themes, maintain semantic clarity, and ship enterprise-grade UI components without the mess.
            </p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 text-center reveal">
<h4 className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium mb-10">Daily Arsenal</h4>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
<iconify-icon className="text-neutral-500 group-hover:text-blue-500 transition-colors" icon="solar:code-square-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900">VSCode</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-900 transition-colors" icon="solar:programming-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900">GitHub</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
<iconify-icon className="text-neutral-500 group-hover:text-blue-600 transition-colors" icon="solar:database-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900">Postgres</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
<iconify-icon className="text-neutral-500 group-hover:text-purple-500 transition-colors" icon="solar:pen-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900">Figma</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
<iconify-icon className="text-neutral-500 group-hover:text-blue-400 transition-colors" icon="solar:server-square-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900">Docker</span>
</div>
</div>
</div>
</section>

<section className="py-40 relative bg-neutral-900 text-white overflow-hidden border-t border-neutral-800" id="contact">
<div className="absolute inset-0 z-0 opacity-10 parallax" data-speed="0.08">
<div className="w-full h-full" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
</div>

<div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-neutral-700 opacity-20 parallax" data-speed="-0.1"></div>
<div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-neutral-700 opacity-20 parallax" data-speed="0.15"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 reveal">
          Let's build together.
        </h2>
<p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light reveal delay-100 text-balance">
          Currently open for new opportunities. Whether you have an architectural question or a large-scale project in mind, I'd love to hear about it.
        </p>
<div className="reveal delay-200 flex justify-center">
<a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-medium bg-white text-neutral-900 hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="mailto:hello@example.com">
            Start a conversation
            <iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-800 bg-neutral-900 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center text-[10px] text-neutral-900 font-medium">D</div>
          DEV.
        </div>
<div className="flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">GitHub</a>
</div>
<p className="text-xs font-medium text-neutral-600 uppercase tracking-widest">
          © 2024 Engineered with precision.
        </p>
</div>
</footer>

    </>
  );
}
