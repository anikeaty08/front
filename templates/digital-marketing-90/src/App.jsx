import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({
        attrs: { strokeWidth: 1.5 },
      });

      function route(event, pageId) {
        if (event) event.preventDefault();

        document.querySelectorAll(".page-content").forEach((page) => page.classList.remove("active"));

        const targetPage = document.getElementById("page-" + pageId);
        if (targetPage) {
          targetPage.classList.add("active");
          window.scrollTo(0, 0);
        }

        document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
        const navLink = document.getElementById("nav-" + pageId);
        if (navLink) navLink.classList.add("active");

        lucide.createIcons({
          attrs: { strokeWidth: 1.5 },
        });
      }

      // Ensure header links always work (even if inline handlers get changed later)
      document.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-route]");
        if (!a) return;
        route(e, a.getAttribute("data-route"));
      });

      // Set initial active state
      const initial = "home";
      const initialNav = document.getElementById("nav-" + initial);
      if (initialNav) initialNav.classList.add("active");
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[120px] opacity-20 bg-[radial-gradient(circle,rgba(56,189,248,0.3)_0%,rgba(0,0,0,0)_70%)]"></div>
<div className="absolute bottom-[-10%] left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10 bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(0,0,0,0)_70%)]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b supports-[backdrop-filter]:bg-black/20 border-white/5 bg-black/50" style={{}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#" onclick="route(event, 'home')">
<div className="w-8 h-8 flex items-center justify-center text-[#C8AA6E] transition-transform group-hover:rotate-45 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{}}>
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"></path>
<path d="M50 15 A35 35 0 0 1 85 50 M85 50 A35 35 0 0 1 50 85 M50 85 A35 35 0 0 1 15 50 M15 50 A35 35 0 0 1 50 15" fill="none" opacity="0.6" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tighter group-hover:text-white/90 transition-colors text-white" style={{}}> X.O. CONTINENTAL </span>
</a>
<div className="hidden md:flex items-center gap-2">
<a className="nav-link text-sm font-medium transition-colors px-4 py-2 rounded-full active text-white/60 hover:text-white" href="#" id="nav-home" onclick="route(event, 'home')" style={{}}>Home</a>
<a className="nav-link transition-colors hover:text-white text-sm font-medium text-white/60 rounded-full pt-2 pr-4 pb-2 pl-4" href="/about" id="nav-about" onclick="route(event, 'about')">About</a>
<a className="nav-link transition-colors hover:text-white text-sm font-medium text-white/60 rounded-full pt-2 pr-4 pb-2 pl-4" href="/services" id="nav-services" onclick="route(event, 'services')">Services</a>
<a className="nav-link transition-colors hover:text-white text-sm font-medium text-white/60 rounded-full pt-2 pr-4 pb-2 pl-4" href="/works" id="nav-works" onclick="route(event, 'works')">Works</a>
<a className="nav-link transition-colors hover:text-white text-sm font-medium text-white/60 rounded-full pt-2 pr-4 pb-2 pl-4" href="/contact" id="nav-contact" onclick="route(event, 'contact')">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 border-white/10 bg-white/5 text-white hover:bg-white/10" href="#" onclick="route(event, 'contact')" style={{}}>
            Get an Audit
          </a>
<button className="md:hidden text-white/80" style={{}} type="button">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5', width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-16">

<div className="page-content active" id="page-home">

<section className="md:pt-32 md:pb-32 overflow-hidden border-white/5 border-b pt-20 pb-20 relative" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="hero-bg">
<div className="layer"></div>
<div className="grid"></div>
<div className="ring"></div>
<div className="noise"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black"></div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-8 backdrop-blur-sm border-white/10 bg-white/5" style={{}}>
<span className="flex h-1.5 w-1.5 rounded-full bg-[#C8AA6E] shadow-[0_0_8px_rgba(200,170,110,0.6)]" style={{}}></span>
<span className="text-xs font-medium tracking-tight text-white/80" style={{}}>Accepting new enterprise clients for Q4</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 leading-[1.1] text-white" style={{}}>
                Growth through <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40" style={{}}>absolute precision.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light text-white/60">
                X.O. Continental is the digital partner for brands that demand performance. We blend data science with high-end creative to dominate markets.
              </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="btn-glow group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full px-8 font-medium transition-all duration-300 text-white" href="#" onclick="route(event, 'works')" style={{}}>
<span className="mr-2">View our work</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border px-8 font-medium transition-colors border-white/10 text-white/70 hover:bg-white/5 hover:text-white" href="#" onclick="route(event, 'contact')" style={{}}>
                  Book consultation
                </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b bg-white/[0.01] border-white/5" style={{}}>
<div className="mx-auto max-w-7xl px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>About Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white" style={{}}>The Intersection of Data &amp; Design.</h2>
<p className="text-lg leading-relaxed mb-8 text-white/60">
                  We are not a traditional agency. We are a collective of data scientists, creative directors, and systems architects who believe that the best marketing is invisible—seamlessly integrating into the user's life with relevance and precision.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium border-b pb-0.5 hover:text-[#C8AA6E] hover:border-[#C8AA6E] transition-all text-white border-white/30" href="#" onclick="route(event, 'about')" style={{}}>
                  Read our full story <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="p-6 rounded-2xl border border-gradient bg-white/5 border-white/5" style={{}}>
<div className="text-3xl font-bold mb-1 text-white" style={{}}>12+</div>
<div className="text-xs uppercase tracking-wider text-white/50" style={{}}>Years Experience</div>
</div>
<div className="p-6 rounded-2xl border border-gradient bg-white/5 border-white/5" style={{}}>
<div className="text-3xl font-bold mb-1 text-white" style={{}}>$500M</div>
<div className="text-xs uppercase tracking-wider text-white/50" style={{}}>Revenue Generated</div>
</div>
</div>
<div className="space-y-4 mt-8">
<div className="p-6 rounded-2xl border border-gradient bg-white/5 border-white/5" style={{}}>
<div className="text-3xl font-bold mb-1 text-white" style={{}}>85</div>
<div className="text-xs uppercase tracking-wider text-white/50" style={{}}>Team Members</div>
</div>
<div className="p-6 rounded-2xl border border-gradient bg-white/5 border-white/5" style={{}}>
<div className="text-3xl font-bold mb-1 text-white" style={{}}>3</div>
<div className="text-xs uppercase tracking-wider text-white/50" style={{}}>Global Offices</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5" style={{}}>
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>Services</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white" style={{}}>Strategic Capabilities</h2>
<p className="max-w-md text-white/60">Comprehensive digital solutions engineered to scale your revenue and brand presence.</p>
</div>
<a className="btn-glow inline-flex h-10 items-center justify-center rounded-full border px-6 text-xs font-medium transition-colors border-white/10 text-white" href="#" onclick="route(event, 'services')" style={{}}>
                Explore Capabilities
              </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group border-gradient rounded-3xl bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors cursor-pointer" onclick="route(event, 'services')">
<div className="h-12 w-12 rounded-xl border flex items-center justify-center mb-6 group-hover:text-[#C8AA6E] transition-colors bg-white/5 border-white/10 text-white" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Performance Marketing</h3>
<p className="text-sm leading-relaxed mb-4 text-white/60">Paid social and search campaigns managed by algorithms and human expertise.</p>
<span className="text-xs text-[#C8AA6E] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" style={{}}>
                  Learn more <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div className="group border-gradient rounded-3xl bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors cursor-pointer" onclick="route(event, 'services')">
<div className="h-12 w-12 rounded-xl border flex items-center justify-center mb-6 group-hover:text-[#C8AA6E] transition-colors bg-white/5 border-white/10 text-white" style={{}}>
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Brand &amp; Content</h3>
<p className="text-sm leading-relaxed mb-4 text-white/60">Narratives that resonate. We craft visual identities and content strategies.</p>
<span className="text-xs text-[#C8AA6E] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" style={{}}>
                  Learn more <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div className="group border-gradient rounded-3xl bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors cursor-pointer" onclick="route(event, 'services')">
<div className="h-12 w-12 rounded-xl border flex items-center justify-center mb-6 group-hover:text-[#C8AA6E] transition-colors bg-white/5 border-white/10 text-white" style={{}}>
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>SEO &amp; Development</h3>
<p className="text-sm leading-relaxed mb-4 text-white/60">Technical foundations that rank. Fast, accessible, and optimized web experiences.</p>
<span className="text-xs text-[#C8AA6E] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" style={{}}>
                  Learn more <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b bg-white/[0.01] border-white/5" style={{}}>
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between mb-16">
<div>
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>Case Studies</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{}}>Recent Work</h2>
</div>
<a className="group flex items-center gap-2 text-sm transition-colors text-white hover:text-white/80" href="#" onclick="route(event, 'works')" style={{}}>
                View all projects
                <span className="flex items-center justify-center w-6 h-6 rounded-full group-hover:bg-white/20 transition-colors bg-white/10">
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group cursor-pointer" onclick="route(event, 'works')">
<div className="aspect-[16/9] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 1" className="img-grayscale object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d68d6283-029d-4ef6-b034-b422d842f64c_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
<div className="absolute bottom-6 left-6 px-4 py-2 backdrop-blur-md rounded-full border bg-black/50 border-white/10" style={{}}>
<span className="text-xs font-medium text-white" style={{}}>Fintech</span>
</div>
</div>
<h3 className="text-xl font-medium mb-1 group-hover:text-[#C8AA6E] transition-colors text-white" style={{}}>Nova Finance</h3>
<p className="text-sm text-white/50" style={{}}>App Design &amp; Product Strategy</p>
</div>
<div className="group cursor-pointer" onclick="route(event, 'works')">
<div className="aspect-[16/9] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 2" className="img-grayscale object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5bad0cc-47f2-435e-b6df-9f12e61c6372_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
<div className="absolute bottom-6 left-6 px-4 py-2 backdrop-blur-md rounded-full border bg-black/50 border-white/10" style={{}}>
<span className="text-xs font-medium text-white" style={{}}>SaaS</span>
</div>
</div>
<h3 className="text-xl font-medium mb-1 group-hover:text-[#C8AA6E] transition-colors text-white" style={{}}>Lumina Analytics</h3>
<p className="text-sm text-white/50" style={{}}>SaaS Dashboard &amp; Identity</p>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white" style={{}}>Ready to dominate your market?</h2>
<p className="text-xl mb-10 font-light text-white/60">The audit is free. The insights are priceless. Let's see if we are a match.</p>
<a className="btn-glow inline-flex h-14 items-center justify-center rounded-full px-10 text-lg font-medium transition-all text-white" href="#" onclick="route(event, 'contact')" style={{}}>
              Initiate Sequence
            </a>
</div>
</section>
</div>

<div className="page-content" id="page-about">
<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-3xl">
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>About Us</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white" style={{}}>
                The Intersection of <br/>
<span className="text-white/40" style={{}}>Data &amp; Design.</span>
</h1>
<p className="text-xl leading-relaxed font-light mb-12 text-white/70" style={{}}>
                We are not a traditional agency. We are a collective of data scientists, creative directors, and systems architects who believe that the best marketing is invisible—seamlessly integrating into the user's life with relevance and precision.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-12 mt-20 border-t pt-12 border-white/5" style={{}}>
<div>
<h3 className="text-2xl font-medium mb-4 text-white" style={{}}>Our Philosophy</h3>
<p className="leading-relaxed text-white/60">
                  In a world saturated with noise, clarity is power. We strip away the unnecessary to focus on the metrics that actually drive business health: CAC, LTV, and ROAS. We don't chase trends; we analyze behaviors.
                </p>
</div>
<div>
<h3 className="text-2xl font-medium mb-4 text-white" style={{}}>Global Reach</h3>
<p className="leading-relaxed text-white/60">
                  Headquartered in New York with satellites in London and Singapore, X.O. Continental operates across time zones. Our distributed team ensures that your campaigns are optimized 24/7, never missing a beat in the global market.
                </p>
</div>
</div>
<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="p-6 rounded-2xl border bg-white/5 border-white/5" style={{}}>
<div className="text-4xl font-bold mb-2 text-white" style={{}}>12+</div>
<div className="text-xs uppercase text-white/50" style={{}}>Years Experience</div>
</div>
<div className="p-6 rounded-2xl border bg-white/5 border-white/5" style={{}}>
<div className="text-4xl font-bold mb-2 text-white" style={{}}>85</div>
<div className="text-xs uppercase text-white/50" style={{}}>Team Members</div>
</div>
<div className="p-6 rounded-2xl border bg-white/5 border-white/5" style={{}}>
<div className="text-4xl font-bold mb-2 text-white" style={{}}>$500M</div>
<div className="text-xs uppercase text-white/50" style={{}}>Revenue Generated</div>
</div>
<div className="p-6 rounded-2xl border bg-white/5 border-white/5" style={{}}>
<div className="text-4xl font-bold mb-2 text-white" style={{}}>3</div>
<div className="text-xs uppercase text-white/50" style={{}}>Global Offices</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="page-services">
<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6">
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>Our Expertise</span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-16 text-white" style={{}}>Capabilities</h1>
<div className="grid gap-12">
<div className="group border-b pb-12 border-white/10" style={{}}>
<div className="grid md:grid-cols-12 gap-8">
<div className="md:col-span-4">
<h3 className="text-2xl font-medium group-hover:text-[#C8AA6E] transition-colors text-white" style={{}}>Growth Marketing</h3>
</div>
<div className="md:col-span-8">
<p className="mb-6 max-w-2xl text-white/60">
                      We engineer full-funnel acquisition strategies. From awareness to retention, every touchpoint is optimized for conversion.
                    </p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Paid Social</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>SEM / PPC</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Programmatic</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>CRO</span>
</div>
</div>
</div>
</div>
<div className="group border-b pb-12 border-white/10" style={{}}>
<div className="grid md:grid-cols-12 gap-8">
<div className="md:col-span-4">
<h3 className="text-2xl font-medium group-hover:text-[#C8AA6E] transition-colors text-white" style={{}}>Design &amp; Branding</h3>
</div>
<div className="md:col-span-8">
<p className="mb-6 max-w-2xl text-white/60">We build brands that command attention. Our design language is rooted in minimalism and functionality.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Identity Systems</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>UI/UX Design</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Motion Graphics</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Art Direction</span>
</div>
</div>
</div>
</div>
<div className="group border-b pb-12 border-white/10" style={{}}>
<div className="grid md:grid-cols-12 gap-8">
<div className="md:col-span-4">
<h3 className="text-2xl font-medium group-hover:text-[#C8AA6E] transition-colors text-white" style={{}}>Technology</h3>
</div>
<div className="md:col-span-8">
<p className="mb-6 max-w-2xl text-white/60">Robust, scalable code. We build digital products that are fast, secure, and ready for enterprise scale.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Web Development</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Headless CMS</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>eCommerce</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white/70" style={{}}>Technical SEO</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="page-works">
<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6">
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>Case Studies</span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-16 text-white" style={{}}>Selected Works</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 1" className="img-grayscale object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d68d6283-029d-4ef6-b034-b422d842f64c_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1 text-white" style={{}}>Nova Finance</h3>
<p className="text-sm text-white/50" style={{}}>App Design &amp; Product Strategy</p>
</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border-white/10 text-white/50" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 2" className="img-grayscale object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5bad0cc-47f2-435e-b6df-9f12e61c6372_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1 text-white" style={{}}>Lumina Analytics</h3>
<p className="text-sm text-white/50" style={{}}>SaaS Dashboard &amp; Identity</p>
</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border-white/10 text-white/50" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 3" className="img-grayscale object-cover w-full h-full" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1 text-white" style={{}}>KINETIC Motors</h3>
<p className="text-sm text-white/50" style={{}}>Brand Re-launch &amp; 3D Web</p>
</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border-white/10 text-white/50" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-3xl border relative mb-6 bg-white/5 border-white/10" style={{}}>
<img alt="Project 4" className="img-grayscale object-cover w-full h-full" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10" style={{}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1 text-white" style={{}}>Vertex Protocol</h3>
<p className="text-sm text-white/50" style={{}}>Web3 Interface Design</p>
</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border-white/10 text-white/50" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="page-contact">
<section className="py-24 md:py-32">
<div className="mx-auto max-w-2xl px-6">
<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-widest text-[#C8AA6E] uppercase mb-4 block" style={{}}>Get Started</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-white" style={{}}>Initiate Sequence</h1>
<p className="text-white/60">Tell us about your project. We typically respond within 2 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium ml-1 text-white/70" style={{}}>First Name</label>
<input className="custom-input w-full rounded-lg px-4 py-3 text-sm placeholder:text-white/20" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium ml-1 text-white/70" style={{}}>Last Name</label>
<input className="custom-input w-full rounded-lg px-4 py-3 text-sm placeholder:text-white/20" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium ml-1 text-white/70" style={{}}>Work Email</label>
<input className="custom-input w-full rounded-lg px-4 py-3 text-sm placeholder:text-white/20" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium ml-1 text-white/70" style={{}}>Interest</label>
<div className="relative">
<select className="custom-input w-full appearance-none rounded-lg px-4 py-3 text-sm text-white/80" style={{}}>
<option>Growth Marketing</option>
<option>Web Development</option>
<option>Branding</option>
<option>Full Partnership</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50" style={{}}>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium ml-1 text-white/70" style={{}}>Message</label>
<textarea className="custom-input w-full rounded-lg px-4 py-3 text-sm placeholder:text-white/20" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<button className="btn-glow w-full rounded-lg py-4 font-medium mt-4 text-white" style={{}} type="button">Send Request</button>
</form>
</div>
</section>
</div>
</main>

<footer className="border-t py-12 border-white/5 bg-black" style={{}}>
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center gap-3" href="#" onclick="route(event, 'home')">
<div className="w-5 h-5 flex items-center justify-center text-[#C8AA6E]" style={{}}>
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"></path>
</svg>
</div>
<span className="text-xs font-medium tracking-tight text-white" style={{}}>X.O. CONTINENTAL</span>
</a>
<div className="flex gap-8">
<a className="text-xs transition-colors text-white/40 hover:text-white" href="#" onclick="return false" style={{}}>Twitter</a>
<a className="text-xs transition-colors text-white/40 hover:text-white" href="#" onclick="return false" style={{}}>LinkedIn</a>
<a className="text-xs transition-colors text-white/40 hover:text-white" href="#" onclick="return false" style={{}}>Instagram</a>
</div>
<p className="text-xs text-white/40" style={{}}>© 2025 X.O. Continental Inc.</p>
</div>
</footer>


    </>
  );
}
