import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    /* Pointer-following gradient */
    const gradients=document.querySelectorAll('.gradient');window.addEventListener('pointermove',e=>{const x=e.clientX/innerWidth*100,y=e.clientY/innerHeight*100;gradients.forEach(g=>{g.style.setProperty('--x',`${x}%`);g.style.setProperty('--y',`${y}%`)})},{passive:true});

    /* Typewriter */
    const words=['Explore Possibilities','Explore Ideas','Elevate Brands'];const el=document.getElementById('typewriter');const typeSpeed=90,hold=2000,fade=500;let i=0;
    function type(w,j=0){if(j<=w.length){el.textContent=w.slice(0,j);setTimeout(()=>type(w,j+1),typeSpeed)}else setTimeout(fadeOut,hold)}
    function fadeOut(){el.style.opacity=0;setTimeout(()=>{i=(i+1)%words.length;el.textContent='';el.style.opacity=1;type(words[i])},fade)}
    type(words[i]);

    /* Footer year */
    document.getElementById('year').textContent=new Date().getFullYear();

    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative w-full flex flex-col gap-12 items-center">
<div aria-hidden="true" className="gradient-wrap"><div className="gradient" style={{-X: '14.556327488111412%', -Y: '4.170981174045139%'}}></div></div>
<div className="relative h-[100px] w-full flex z-10 items-center justify-center">
<h1 aria-live="polite" className="text-white text-[92px] leading-none font-thin tracking-tight font-[Manrope] cursor transition-opacity select-none" id="typewriter" style={{opacity: '1'}}>Elevate Brands</h1>
</div>
<div aria-label="Decorative glass card with blue radial gradient" className="card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 z-10" tabindex="0"></div>

<section className="w-full flex flex-col gap-6 z-10 mt-16 mb-24 items-center">
<h2 className="text-white text-xl sm:text-2xl font-medium tracking-tight font-[Manrope] text-center">
        Brands we’ve transformed
      </h2>
<div className="relative w-full">
<div className="mx-auto max-w-6xl overflow-hidden">
<div className="logos-track flex items-center gap-16 whitespace-nowrap will-change-transform">
<img alt="Slack" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/slack.svg"/>
<img alt="Dropbox" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dropbox.svg"/>
<img alt="Atlassian" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/atlassian.svg"/>
<img alt="Notion" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg"/>
<img alt="Docker" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg"/>
<img alt="Adobe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobecreativecloud.svg"/>

<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/slack.svg"/>
<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dropbox.svg"/>
<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/atlassian.svg"/>
<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg"/>
<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg"/>
<img alt="" aria-hidden="true" className="h-8 sm:h-10 opacity-70" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobecreativecloud.svg"/>
</div>
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f172a] to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent"></div>
</div>
</section>
</header>

<div className="relative max-w-6xl w-full"><div className="w-full h-px bg-white/10"></div></div>

<section className="relative w-full flex flex-col items-center gap-16 z-10" id="pricing">
<h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight font-[Manrope] text-center">
      Simple, transparent pricing
    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

<article aria-labelledby="plan-starter" className="group relative flex flex-col rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-sky-400">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]" id="plan-starter">Starter</h3>
<p className="mt-4 flex items-baseline text-white"><span className="text-4xl font-semibold tracking-tight">$19</span><span className="ml-1 text-sm text-white/60">/mo</span></p>
<p className="mt-4 text-sm text-white/70 leading-relaxed">Perfect for early-stage projects getting off the ground.</p>
<ul className="mt-6 space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Up to 3 team members</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 GB storage</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Email support</li>
</ul>
<button className="mt-8 inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 transition text-sm font-medium px-5 py-3 text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
          Get Started
        </button>
</article>

<article aria-labelledby="plan-growth" className="group relative flex flex-col rounded-2xl border border-sky-500/40 p-8 bg-white/10 backdrop-blur-md ring-2 ring-sky-500/50 shadow-xl transition hover:-translate-y-1 focus-within:ring-2 focus-within:ring-sky-400">
<span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-sky-500 text-[#0f172a] font-semibold">Most Popular</span>
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]" id="plan-growth">Growth</h3>
<p className="mt-4 flex items-baseline text-white"><span className="text-4xl font-semibold tracking-tight">$49</span><span className="ml-1 text-sm text-white/60">/mo</span></p>
<p className="mt-4 text-sm text-white/70 leading-relaxed">Everything you need to scale your growing business.</p>
<ul className="mt-6 space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited team members</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>50 GB storage</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Advanced analytics</li>
</ul>
<button className="mt-8 inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 transition text-sm font-medium px-5 py-3 text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
          Start Free Trial
        </button>
</article>

<article aria-labelledby="plan-enterprise" className="group relative flex flex-col rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-sky-400">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]" id="plan-enterprise">Enterprise</h3>
<p className="mt-4 flex items-baseline text-white"><span className="text-4xl font-semibold tracking-tight">Custom</span></p>
<p className="mt-4 text-sm text-white/70 leading-relaxed">Tailored solutions for large teams and mission-critical workloads.</p>
<ul className="mt-6 space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated CSM</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited storage</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>24/7 phone support</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SSO &amp; advanced security</li>
</ul>
<button className="mt-8 inline-flex justify-center items-center rounded-lg bg-transparent ring-1 ring-white/30 hover:bg-white/10 transition text-sm font-medium px-5 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
          Contact Sales
        </button>
</article>
</div>
</section>

<div className="relative max-w-6xl w-full mt-24"><div className="w-full h-px bg-white/10"></div></div>

<section className="relative w-full flex flex-col items-center gap-16 z-10" id="portfolio">
<h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight font-[Manrope] text-center">
      Selected Work
    </h2>
<div className="grid gap-12 w-full max-w-6xl md:grid-cols-2 xl:grid-cols-3">

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="Dashboard analytics for FinSite" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">FinSite</h3>
<p className="text-white/70 text-sm">Fin-tech analytics dashboard</p>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="Marketing website for Nova Furniture" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">Nova Furniture</h3>
<p className="text-white/70 text-sm">E-commerce experience</p>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="Mobile app UI for FitSync" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1606312618375-9b4c0461ba24?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">FitSync</h3>
<p className="text-white/70 text-sm">Wellness mobile application</p>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="Streaming platform for Sphere TV" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1529244929461-e3e0057da744?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">Sphere TV</h3>
<p className="text-white/70 text-sm">Streaming platform overhaul</p>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="Travel booking system for Wanderly" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">Wanderly</h3>
<p className="text-white/70 text-sm">End-to-end booking flow</p>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400" href="#">
<img alt="B2B SaaS platform for CloudOps" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05]" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium tracking-tight font-[Manrope]">CloudOps</h3>
<p className="text-white/70 text-sm">Infrastructure management</p>
</div>
</a>
</div>
</section>

<div className="relative max-w-6xl w-full mt-24"><div className="w-full h-px bg-white/10"></div></div>

<footer className="relative w-full max-w-6xl mx-auto mt-20 pb-20 flex flex-col gap-12 z-10">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-sparkles w-6 h-6 text-sky-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-white text-lg font-semibold tracking-tight font-[Manrope]">BrandName</span>
</div>
<nav aria-label="Footer Navigation" className="">
<ul className="flex flex-wrap gap-6 text-sm text-white/80">
<li><a className="hover:text-white focus-visible:text-white focus-visible:outline-none" href="#portfolio">Work</a></li>
<li><a className="hover:text-white focus-visible:text-white focus-visible:outline-none" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white focus-visible:text-white focus-visible:outline-none" href="#blog">Blog</a></li>
<li><a className="hover:text-white focus-visible:text-white focus-visible:outline-none" href="#contact">Contact</a></li>
</ul>
</nav>
<div className="flex gap-4">
<a aria-label="Twitter" className="text-white/70 hover:text-white focus-visible:outline-none" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="LinkedIn" className="text-white/70 hover:text-white focus-visible:outline-none" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="GitHub" className="text-white/70 hover:text-white focus-visible:outline-none" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<p className="text-xs text-white/60">© <span id="year">2025</span> BrandName. All rights reserved.</p>
<h2 aria-hidden="true" className="mt-16 text-white/5 text-[96px] sm:text-[160px] font-semibold tracking-tight leading-none text-center select-none pointer-events-none">
      BrandName
    </h2>
</footer>



    </>
  );
}
