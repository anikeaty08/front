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



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
},
{ threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
);
document
.querySelectorAll(".animate-on-scroll")
.forEach((el) => observer.observe(el));
// Spotlight Logic
document.querySelectorAll(".spotlight-grid").forEach((grid) => {
grid.addEventListener("mousemove", (e) => {
const rect = grid.getBoundingClientRect();
grid.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
grid.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
});
});
// Scramble Text
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
document.querySelectorAll("[data-scramble]").forEach((el) => {
el.setAttribute("data-original", el.innerText);
el.addEventListener("mouseenter", () => {
let iter = 0;
const original = el.getAttribute("data-original");
const interval = setInterval(() => {
el.innerText = original
.split("")
.map((l, i) => {
if (i < iter) return original[i];
return chars[Math.floor(Math.random() * chars.length)];
})
.join("");
if (iter >= original.length) clearInterval(interval);
iter += 1 / 3;
}, 30);
el.dataset.interval = interval;
});
el.addEventListener("mouseleave", () => {
clearInterval(el.dataset.interval);
el.innerText = el.getAttribute("data-original");
});
});
// Magnetic Buttons
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;
btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
});
btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0px, 0px)";
});
});
});

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
      

<div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-10 mix-blend-multiply" loop="" muted="" playsinline="" style={{filter: 'grayscale(1) invert(1) contrast(1.2)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
</div>

<div className="aura-background-component top-0 w-full -z-20 absolute h-[1200px]" data-alpha-mask="60" style="
        mask-image: linear-gradient(
          to bottom,
          transparent,
          white 0%,
          white 80%,
          transparent
        );
      ">
</div>

<div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-30"></div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-black/[0.04]">
<div className="absolute left-1/4 h-full w-px bg-black/[0.02]"></div>
<div className="absolute left-2/4 h-full w-px bg-black/[0.02]"></div>
<div className="absolute left-3/4 h-full w-px bg-black/[0.02]"></div>
</div>

<div className="fixed z-50 flex w-full top-6 px-6 justify-center">
<nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-8 h-8 flex items-center justify-center text-orange-500">
<iconify-icon icon="mdi:bee" width="28"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-orange-600 uppercase">
            Daimboo Labs
          </span>
</div>
<div className="hidden md:flex items-center gap-1 backdrop-blur-xl bg-white/[0.8] border border-black/[0.06] rounded-full p-1.5 pr-2 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
<a className="px-5 py-2 rounded-full bg-black text-white text-[11px] font-semibold tracking-wide hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all" href="#">
            Core Offerings
          </a>
<a className="px-5 py-2 rounded-full text-neutral-500 hover:text-black hover:bg-black/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Process
          </a>
<a className="px-5 py-2 rounded-full text-neutral-500 hover:text-black hover:bg-black/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Our Philosophy
          </a>
<a className="px-5 py-2 rounded-full text-neutral-500 hover:text-black hover:bg-black/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Contact
          </a>
</div>
<button className="flex items-center gap-2 text-[11px] font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
          Menu
          <span className="text-neutral-400">+</span>
</button>
</nav>
</div>
<main className="z-10 relative">

<section className="max-w-[1400px] mx-auto px-6 pb-40 pt-20 border-b border-black/5">
<div className="max-w-5xl">
<div className="inline-flex items-center gap-3 px-3 py-1.5 mb-10 border border-black/5 rounded-full bg-black/5 backdrop-blur-sm animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="flex items-center gap-2 px-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-widest" data-scramble="true">
                Systems Operational
              </span>
</div>
<div className="h-3 w-px bg-black/10"></div>
<span className="text-[10px] text-neutral-500 font-mono">v1.2.0</span>
</div>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter text-black leading-[0.95] mb-12">
            Building real
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-black via-neutral-600 to-neutral-400">
              products, not just code.
            </span>
</h1>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<p className="text-lg text-neutral-600 max-w-xl leading-relaxed font-light">
              We design, build, and launch real products — systems that are production-ready, scalable, and built to support real users and real businesses. A full-stack studio by hands-on founders.
            </p>
<div className="flex items-center gap-6">
<button className="group relative px-8 py-4 bg-black text-white text-xs font-bold tracking-widest uppercase overflow-hidden hover:bg-neutral-800 transition-all duration-300 magnetic-btn">
<span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="ph:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mix-blend-difference"></div>
</button>
<div className="h-px w-12 bg-black/20"></div>
<span className="text-[10px] font-mono text-neutral-500">
                SCROLL TO EXPLORE
              </span>
</div>
</div>
</div>
</section>

<div className="border-b border-black/5 bg-white">
<div className="max-w-[1400px] mx-auto overflow-hidden marquee-wrapper">
<div className="marquee-content opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 items-center">
<iconify-icon className="text-black" icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:n8n" width="30"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:zapier" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:make" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:nextdotjs" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:supabase" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:n8n" width="30"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:zapier" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:make" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:nextdotjs" width="24"></iconify-icon>
<iconify-icon className="text-black" icon="simple-icons:supabase" width="24"></iconify-icon>
</div>
</div>
</div>

<section className="relative bg-white border-b border-black/5 overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/50 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[900px]">

<div className="w-full md:w-[40%] px-6 py-20 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-white via-white to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-black/10 rounded-full bg-black/5 self-start">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-widest">
                  Who We Are
                </span>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-8 leading-[0.9]">
              The
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-black via-neutral-700 to-neutral-400">
                Substrate.
              </span>
</h2>
<div className="space-y-8 max-w-sm">
<p className="text-neutral-600 text-lg font-light leading-relaxed">
                  Daimboo Labs is a full-stack software and automation studio founded by two hands-on technical founders. We don't just write code; we architect systems that replace manual work and scale revenue.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-black/10 bg-black/5 flex items-center justify-center group-hover:bg-black/10 group-hover:border-black/20 transition-all">
<iconify-icon className="text-neutral-500 group-hover:text-black transition-colors" icon="ph:rocket-launch"></iconify-icon>
</div>
<div>
<div className="text-black text-sm font-medium">SaaS &amp; MVPs</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">Next.js / Supabase / Stripe</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-black/10 bg-black/5 flex items-center justify-center group-hover:bg-black/10 group-hover:border-black/20 transition-all">
<iconify-icon className="text-neutral-500 group-hover:text-black transition-colors" icon="ph:robot"></iconify-icon>
</div>
<div>
<div className="text-black text-sm font-medium">Automation &amp; AI</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">n8n / Make / OpenAI / RAG</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-black/10 bg-black/5 flex items-center justify-center group-hover:bg-black/10 group-hover:border-black/20 transition-all">
<iconify-icon className="text-neutral-500 group-hover:text-black transition-colors" icon="ph:device-mobile"></iconify-icon>
</div>
<div>
<div className="text-black text-sm font-medium">Mobile &amp; Web</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">Native Swift / Framer</div>
</div>
</div>
</div>
<div className="pt-8">
<button className="shiny-cta" style={{'--gradient-shine': '#f97316'}}>
<span>Explore Offerings</span>
</button>
</div>
</div>
</div>

<div className="absolute right-[-10%] md:right-[-5%] top-[-10%] bottom-[-10%] w-[120%] md:w-[70%] wall-container overflow-hidden pointer-events-none md:pointer-events-auto">
<div className="wall-grid h-full w-full flex gap-6 px-10">

<div className="wall-column wall-column-up flex flex-col gap-6 w-full">

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:nextdotjs" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Next.js</div>
<div className="text-[9px] font-mono text-neutral-500">Full Stack</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#FF6584]" icon="simple-icons:n8n" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">n8n</div>
<div className="text-[9px] font-mono text-neutral-500">Workflows</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#635BFF]" icon="simple-icons:stripe" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Stripe</div>
<div className="text-[9px] font-mono text-neutral-500">Payments</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#3ECF8E]" icon="simple-icons:supabase" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Supabase</div>
<div className="text-[9px] font-mono text-neutral-500">Backend</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:nextdotjs" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Next.js</div>
<div className="text-[9px] font-mono text-neutral-500">Full Stack</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#FF6584]" icon="simple-icons:n8n" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">n8n</div>
<div className="text-[9px] font-mono text-neutral-500">Workflows</div>
</div>
</div>
</div>

<div className="wall-column wall-column-down flex flex-col gap-6 w-full pt-12">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#F05138]" icon="simple-icons:swift" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Swift</div>
<div className="text-[9px] font-mono text-neutral-500">Native iOS</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#6D34AA]" icon="simple-icons:make" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Make</div>
<div className="text-[9px] font-mono text-neutral-500">Automation</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:framer" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Framer</div>
<div className="text-[9px] font-mono text-neutral-500">Marketing Sites</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:openai" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">OpenAI</div>
<div className="text-[9px] font-mono text-neutral-500">RAG &amp; AI</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#F05138]" icon="simple-icons:swift" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Swift</div>
<div className="text-[9px] font-mono text-neutral-500">Native iOS</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#6D34AA]" icon="simple-icons:make" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Make</div>
<div className="text-[9px] font-mono text-neutral-500">Automation</div>
</div>
</div>
</div>

<div className="wall-column wall-column-up flex flex-col gap-6 w-full pt-24 hidden lg:flex">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#61DAFB]" icon="simple-icons:react" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">React</div>
<div className="text-[9px] font-mono text-neutral-500">Frontend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:vercel" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Vercel</div>
<div className="text-[9px] font-mono text-neutral-500">Edge Config</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:python" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Python</div>
<div className="text-[9px] font-mono text-neutral-500">Data &amp; AI</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#61DAFB]" icon="simple-icons:react" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">React</div>
<div className="text-[9px] font-mono text-neutral-500">Frontend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-black" icon="simple-icons:vercel" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>
<div>
<div className="text-sm font-mono text-black/80">Vercel</div>
<div className="text-[9px] font-mono text-neutral-500">Edge Config</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none opacity-50"></div>
</div>
</div>
</section>

<section className="border-b border-black/5 bg-white py-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-end justify-between mb-24">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                02 — What We Build
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black max-w-2xl leading-[1.05]">
                Core Offerings
              </h2>
</div>
<div className="hidden md:block text-right">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">
                Engineering
              </div>
<div className="text-black font-mono text-sm">Full-Stack</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 overflow-hidden spotlight-grid">

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:rocket-launch-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">SaaS Products &amp; MVPs</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                End-to-end platforms from idea to launch. Product architecture, user roles, payments, and scalable databases.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Subscription Systems (Stripe)
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Admin Panels
                 </li>
</ul>
</div>

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:robot-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">Automation Systems</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Replace manual work with intelligent workflows using n8n, Make, and Zapier. Fewer errors, lower costs.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Lead Handling
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> CRM Syncing
                 </li>
</ul>
</div>

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:brain-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">AI &amp; RAG Chatbots</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                AI systems that actually work in production. RAG chatbots connected to your data and documents.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Customer Support Bots
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Internal Knowledge Assistants
                 </li>
</ul>
</div>

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:squares-four-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">Custom Dashboards</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Tailored analytics panels and internal tools. We build systems that match how your business actually works.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Role-Based Access
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Operations Panels
                 </li>
</ul>
</div>

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:desktop-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">Web Development</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Modern, high-performance websites using Next.js and Framer. Focused on speed, clean UI, and conversion.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> SaaS Landing Pages
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Product Marketing Sites
                 </li>
</ul>
</div>

<div className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="ph:device-mobile-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-6">Mobile App Dev</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Real native iOS apps (Swift), not wrappers. Integrated with backend APIs and authentication.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Native Swift
                 </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Backend Sync
                 </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5 bg-white py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex items-end justify-between mb-20">
<div>
<div className="text-[10px] font-mono text-orange-600 uppercase mb-4 tracking-widest flex items-center gap-2">
<span className="w-1 h-1 bg-orange-600 rounded-full animate-pulse"></span>
                Partners
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
                Who We Work With
              </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative bg-neutral-100 border border-black/10 aspect-[4/3] overflow-hidden p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-white group-hover:bg-neutral-50 transition-colors"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="ph:rocket-fill"></iconify-icon>
<h3 className="text-lg font-medium text-black mb-2">Startup Founders</h3>
<p className="text-sm text-neutral-500">Visionaries needing execution.</p>
</div>
</div>
<div className="group relative bg-neutral-100 border border-black/10 aspect-[4/3] overflow-hidden p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-white group-hover:bg-neutral-50 transition-colors"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="ph:buildings-fill"></iconify-icon>
<h3 className="text-lg font-medium text-black mb-2">SaaS Companies</h3>
<p className="text-sm text-neutral-500">Scaling product platforms.</p>
</div>
</div>
<div className="group relative bg-neutral-100 border border-black/10 aspect-[4/3] overflow-hidden p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-white group-hover:bg-neutral-50 transition-colors"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="ph:trend-up-fill"></iconify-icon>
<h3 className="text-lg font-medium text-black mb-2">Growing Businesses</h3>
<p className="text-sm text-neutral-500">Automating operations.</p>
</div>
</div>
<div className="group relative bg-neutral-100 border border-black/10 aspect-[4/3] overflow-hidden p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-white group-hover:bg-neutral-50 transition-colors"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="ph:users-three-fill"></iconify-icon>
<h3 className="text-lg font-medium text-black mb-2">Product Teams</h3>
<p className="text-sm text-neutral-500">Needing technical backup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5 bg-white py-32 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-12">
            03 — Process
          </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-20">
             How We Work
          </h2>

<div className="relative mt-20">

<div className="absolute top-[27px] left-0 w-full h-px bg-black/10 z-0"></div>
<div className="absolute top-[27px] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent z-0 animate-[shimmer_2s_infinite]"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group hover:-translate-y-2 transition-transform duration-300 cursor-default">
<div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
<span className="text-sm font-mono text-black">01</span>
<div className="absolute inset-0 rounded-full border border-black/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
</div>
<h4 className="text-lg text-black font-medium mb-3">Discovery &amp; Planning</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Understand your idea, goals, users, and constraints. We set the foundation.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
<span className="text-sm font-mono text-black">02</span>
</div>
<h4 className="text-lg text-black font-medium mb-3">Architecture</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Plan the right tech stack and structure for scale. No over-engineering.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
<span className="text-sm font-mono text-black">03</span>
</div>
<h4 className="text-lg text-black font-medium mb-3">Build &amp; Iterate</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Develop in phases with constant feedback. Production-ready code from day one.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
<span className="text-sm font-mono text-black">04</span>
<div className="absolute w-2 h-2 bg-orange-500 rounded-full top-0 right-0 animate-pulse"></div>
</div>
<h4 className="text-lg text-black font-medium mb-3">Testing &amp; Launch</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Ensuring everything works in production. We stay for fixes, improvements, and scaling.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5 bg-white py-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                04 — Philosophy
              </div>
<h2 className="text-3xl md:text-4xl text-black font-medium tracking-tight mb-6">
                Why Clients
                <br/>
                Choose Us
              </h2>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                We work like a technical partner, not a task-based agency.
              </p>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-black">
<iconify-icon className="text-orange-500" icon="ph:check-circle-fill"></iconify-icon> Founder-led, not outsourced
                 </li>
<li className="flex items-center gap-3 text-sm font-medium text-black">
<iconify-icon className="text-orange-500" icon="ph:check-circle-fill"></iconify-icon> Production-ready systems
                 </li>
<li className="flex items-center gap-3 text-sm font-medium text-black">
<iconify-icon className="text-orange-500" icon="ph:check-circle-fill"></iconify-icon> Strong Automation &amp; AI expertise
                 </li>
<li className="flex items-center gap-3 text-sm font-medium text-black">
<iconify-icon className="text-orange-500" icon="ph:check-circle-fill"></iconify-icon> Ownership mindset
                 </li>
</ul>
</div>
<div className="lg:col-span-8 border-t border-black/10">
<div className="py-6 border-b border-black/10">
<h3 className="text-lg font-medium text-black mb-4">What We Don't Do</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 bg-neutral-50 rounded border border-black/5">
<span className="text-xs font-mono text-orange-600 mb-2 block">01</span>
<p className="text-sm text-neutral-700">No half-baked MVPs. We build for launch.</p>
</div>
<div className="p-4 bg-neutral-50 rounded border border-black/5">
<span className="text-xs font-mono text-orange-600 mb-2 block">02</span>
<p className="text-sm text-neutral-700">No throwaway prototypes.</p>
</div>
<div className="p-4 bg-neutral-50 rounded border border-black/5">
<span className="text-xs font-mono text-orange-600 mb-2 block">03</span>
<p className="text-sm text-neutral-700">No "just design" without logic.</p>
</div>
<div className="p-4 bg-neutral-50 rounded border border-black/5">
<span className="text-xs font-mono text-orange-600 mb-2 block">04</span>
<p className="text-sm text-neutral-700">No overengineering for no reason.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-black/5 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="relative z-10 w-full bg-white border border-black/10 rounded-3xl overflow-hidden min-h-[600px] flex flex-col items-center justify-center group isolate shadow-2xl">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[80px] mix-blend-multiply animate-pulse duration-[8s]"></div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" loop="" muted="" playsinline="" style={{filter: 'grayscale(1) invert(1) contrast(1.2)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,white_100%)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-orange-500/20 rounded-full bg-orange-50 backdrop-blur-xl shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-widest">
                  Accepting New Projects
                </span>
</div>
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-black mb-8 leading-[0.9]">
                Ready to
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-black via-orange-500 to-orange-300">
                  build?
                </span>
</h2>
<p className="text-neutral-500 text-lg font-light leading-relaxed max-w-lg mb-12">
                Secure your development slot. We are currently accepting applications for high-growth ventures and automation overhauls.
              </p>
<div className="flex flex-col md:flex-row items-center gap-8">

<button className="shiny-cta" style={{'--gradient-shine': '#f97316'}}>
<span>Contact Us</span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-32 pb-12 border-t border-black/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="flex items-center gap-4 text-[5vw] leading-[0.8] font-bold tracking-tighter text-black opacity-90 select-none hover:text-orange-500 transition-colors duration-500 cursor-default">

<iconify-icon className="text-orange-500 hidden md:block" icon="mdi:bee" width="100"></iconify-icon>
              DAIMBOO LABS
            </div>
<div className="flex flex-col gap-4 text-right mb-4">
<a className="text-lg text-neutral-600 hover:text-black transition-colors" href="#">
                Start a Project -&gt;
              </a>
<div className="text-sm text-neutral-500">
                Full-Stack &amp; Automation Studio
              </div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-10">
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
                Sitemap
              </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-black" href="#">Home</a></li>
<li><a className="hover:text-black" href="#">Offerings</a></li>
<li><a className="hover:text-black" href="#">Process</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
                Socials
              </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-black" href="#">Twitter / X</a></li>
<li><a className="hover:text-black" href="#">LinkedIn</a></li>
<li><a className="hover:text-black" href="#">Instagram</a></li>
</ul>
</div>
<div className="md:col-span-2 text-right">
<p className="text-[10px] font-mono uppercase text-neutral-500">
                System Status:
                <span className="text-orange-600">Operational</span>
</p>
<p className="text-[10px] font-mono uppercase text-neutral-500 mt-1">
                © 2024 Daimboo Labs.
              </p>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
