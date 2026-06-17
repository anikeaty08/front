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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-[#FAFAF8]', 'shadow-sm');
                    nav.classList.remove('bg-[#FAFAF8]/90');
                } else {
                    nav.classList.remove('bg-[#FAFAF8]', 'shadow-sm');
                    nav.classList.add('bg-[#FAFAF8]/90');
                }
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-10">
<a className="font-sans font-medium text-base tracking-tight text-stone-900 flex items-center gap-2" href="#">
<span className="tracking-tighter">TRST</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Topics</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Frameworks</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Journal</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Reports</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#tool">Tool</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#workshops">Workshops</a>
</div>
</div>

<div className="flex items-center gap-6">
<button aria-label="Search" className="text-stone-500 hover:text-stone-900 transition-colors mt-1">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="bg-[#C5A059] hover:bg-[#B38F48] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md tracking-wide" href="#">
                    Subscribe
                </a>
</div>
</div>
</nav>

<main>
<section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<span className="fade-in-up text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-8 border border-stone-200 rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm">
                    A Journal of Digital Credibility
                </span>
<h1 className="fade-in-up delay-1 text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-stone-900 leading-[1.1] mb-8">
                    Decoding Digital Trust
                </h1>
<p className="fade-in-up delay-2 max-w-2xl text-lg md:text-xl text-stone-500 font-light leading-relaxed mb-12">
                    Explore frameworks, teardowns, and practical signals that separate genuine credibility from manufactured polish in an era of AI and algorithmic manipulation.
                </p>
<div className="fade-in-up delay-3 flex flex-col items-center gap-6">
<a className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md tracking-wide" href="#library">
                        Explore Trust Signals
                    </a>
<a className="text-stone-400 hover:text-stone-900 transition-colors flex flex-col items-center gap-3 mt-4" href="#tool">
<span className="text-xs font-medium uppercase tracking-widest">Or Use The Calculator</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white py-32 border-y border-stone-100 relative" id="library">
<div className="max-w-[85rem] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">

<a className="group flex flex-col items-center text-center" href="#">
<div className="relative w-full max-w-[280px] aspect-[2/3] transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">

<div className="absolute -top-3 -left-3 z-20 flex flex-col gap-2">
<span className="bg-stone-900 text-white text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-md">New Report</span>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-r-md rounded-l-[2px] shadow-2xl shadow-stone-900/10 book-spine-effect flex items-center justify-center p-8 text-left">
<div className="w-full h-full border border-white/10 flex flex-col justify-between p-6">
<span className="text-white/60 text-xs uppercase tracking-widest font-sans">TRST Premium</span>
<div>
<h3 className="text-white font-serif text-2xl tracking-tight leading-snug mb-2">AI Media<br/>Transparency</h3>
<p className="text-white/70 text-xs font-light">Navigating synthetic content guidelines.</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 inset-x-4 h-4 bg-stone-900/5 blur-md rounded-[100%] transition-opacity duration-500 group-hover:opacity-60"></div>
</div>
<h4 className="mt-10 font-serif text-lg text-stone-900 tracking-tight group-hover:text-[#C5A059] transition-colors">AI Media Transparency</h4>
<p className="text-xs text-stone-500 font-medium mt-1">Research &amp; Frameworks</p>
</a>

<a className="group flex flex-col items-center text-center" href="#">
<div className="relative w-full max-w-[280px] aspect-[2/3] transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">
<div className="absolute -top-3 -left-3 z-20 flex flex-col gap-2">
<span className="bg-[#C5A059] text-white text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-md">Framework</span>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] rounded-r-md rounded-l-[2px] shadow-2xl shadow-stone-900/10 book-spine-effect flex items-center justify-center p-8 text-left">
<div className="w-full h-full border border-stone-900/10 flex flex-col justify-between p-6">
<span className="text-stone-900/50 text-xs uppercase tracking-widest font-sans">TRST Open Source</span>
<div>
<h3 className="text-stone-900 font-serif text-2xl tracking-tight leading-snug mb-2">Creator<br/>Disclosure</h3>
<p className="text-stone-900/70 text-xs font-light">The new rules of authentic influence.</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 inset-x-4 h-4 bg-stone-900/5 blur-md rounded-[100%] transition-opacity duration-500 group-hover:opacity-60"></div>
</div>
<h4 className="mt-10 font-serif text-lg text-stone-900 tracking-tight group-hover:text-[#C5A059] transition-colors">Creator Disclosure Matrix</h4>
<p className="text-xs text-stone-500 font-medium mt-1">Checklist &amp; Playbook</p>
</a>

<a className="group flex flex-col items-center text-center" href="#">
<div className="relative w-full max-w-[280px] aspect-[2/3] transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">
<div className="absolute inset-0 bg-gradient-to-br from-[#2D3A3A] to-[#1A2424] rounded-r-md rounded-l-[2px] shadow-2xl shadow-stone-900/10 book-spine-effect flex items-center justify-center p-8 text-left">
<div className="w-full h-full border border-white/10 flex flex-col justify-between p-6">
<span className="text-white/50 text-xs uppercase tracking-widest font-sans">TRST Premium</span>
<div>
<h3 className="text-white font-serif text-2xl tracking-tight leading-snug mb-2">Reputation<br/>Recovery</h3>
<p className="text-white/70 text-xs font-light">Rebuilding consumer confidence.</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 inset-x-4 h-4 bg-stone-900/5 blur-md rounded-[100%] transition-opacity duration-500 group-hover:opacity-60"></div>
</div>
<h4 className="mt-10 font-serif text-lg text-stone-900 tracking-tight group-hover:text-[#C5A059] transition-colors">Reputation Recovery Playbook</h4>
<p className="text-xs text-stone-500 font-medium mt-1">Strategic Advisory</p>
</a>
</div>
</div>
</section>

<section className="relative bg-[#FAFAF8] border-b border-stone-200" id="tool">
<div className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-20">

<div className="lg:w-[40%] relative">
<div className="sticky top-32 flex justify-center lg:justify-end">
<div className="relative w-full max-w-[360px] aspect-[2/3]">
<div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-r-lg rounded-l-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] book-spine-effect flex items-center justify-center p-10 text-left">
<div className="w-full h-full border border-white/10 flex flex-col justify-between p-8">
<span className="text-white/60 text-xs uppercase tracking-[0.2em] font-sans">Evaluation Tool</span>
<div>
<iconify-icon className="text-white/80 mb-6" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-serif text-4xl tracking-tight leading-tight mb-4">Trust<br/>Signal<br/>Scorecard</h3>
<p className="text-white/70 text-sm font-light">Evaluate the credibility of digital campaigns and partnerships.</p>
</div>
<div className="pt-6 border-t border-white/20">
<a className="text-white text-xs font-medium tracking-widest uppercase hover:text-[#C5A059] transition-colors flex items-center gap-2" href="#">
                                            Launch Calculator
                                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-[60%] flex flex-col max-w-2xl">
<div className="mb-12 border-b border-stone-200 pb-12">
<h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight text-stone-900 mb-6">Trust Signal Scorecard</h2>
<p className="text-xl text-stone-500 font-light leading-relaxed mb-8">
                            A practical calculator designed to measure the underlying credibility of digital marketing initiatives, influencer partnerships, and brand messaging.
                        </p>
<div className="prose prose-stone text-stone-600 font-light leading-loose text-base">
<p className="mb-6">
                                In an environment saturated with polished aesthetics and AI-generated media, consumers rely on subtle trust signals to evaluate authenticity. Our scorecard translates editorial heuristics into a quantifiable audit tool.
                            </p>
<p>
                                By inputting key variables about disclosure placement, source verification, and relational transparency, teams can identify vulnerability gaps before launching campaigns or entering creator partnerships.
                            </p>
</div>
</div>

<div className="flex flex-col mb-16">

<details className="group border-b border-stone-200 py-6" open="">
<summary className="flex justify-between items-center cursor-pointer font-sans font-medium text-lg text-stone-900 focus:outline-none">
<span className="tracking-tight">What the scorecard evaluates</span>
<span className="text-stone-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-2 text-stone-600 font-light leading-relaxed text-base">
                                We measure critical vectors including disclosure clarity, source verifiable evidence, emotional manipulation indicators, and AI-generation transparency markers.
                            </div>
</details>

<details className="group border-b border-stone-200 py-6">
<summary className="flex justify-between items-center cursor-pointer font-sans font-medium text-lg text-stone-900 focus:outline-none">
<span className="tracking-tight">Who should use this tool</span>
<span className="text-stone-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-2 text-stone-600 font-light leading-relaxed text-base">
                                Ideal for brand marketers auditing their own communications, PR teams evaluating potential influencer partnerships, and compliance officers ensuring baseline transparency.
                            </div>
</details>

<details className="group border-b border-stone-200 py-6">
<summary className="flex justify-between items-center cursor-pointer font-sans font-medium text-lg text-stone-900 focus:outline-none">
<span className="tracking-tight">The Methodology</span>
<span className="text-stone-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-2 text-stone-600 font-light leading-relaxed text-base">
                                Built on a 40-point heuristic developed from regulatory FTC guidelines, consumer behavioral studies, and our proprietary trust breakdown analyses.
                            </div>
</details>
</div>

<div className="bg-white p-8 md:p-10 border border-stone-100 shadow-sm flex flex-col md:flex-row gap-8 items-start mb-16">
<div className="w-16 h-16 rounded-full bg-stone-50 shrink-0 flex items-center justify-center border border-stone-200">
<iconify-icon className="text-stone-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<span className="text-xs font-medium tracking-[0.15em] uppercase text-[#C5A059] mb-2 block">Our Commitment</span>
<h3 className="font-serif text-2xl text-stone-900 tracking-tight mb-3">Editorial Standards</h3>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                                Every framework and tool we publish is rooted in objective evaluation criteria. We do not accept sponsored placements or native advertising in our journal, ensuring our methodologies remain impartial and focused entirely on assessing authentic credibility.
                            </p>
<div className="flex items-center gap-5">
<a className="text-stone-400 hover:text-stone-900 transition-colors text-xs font-medium uppercase tracking-widest flex items-center gap-2" href="#">
                                    Read Full Policy
                                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div>
<span className="text-xs font-medium tracking-[0.15em] uppercase text-stone-400 mb-8 block border-b border-stone-200 pb-4">Core Evaluation Pillars</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col">
<iconify-icon className="text-stone-300 mb-4" icon="solar:eye-linear" strokeWidth="1.5" width="28"></iconify-icon>
<p className="font-serif text-stone-900 text-lg tracking-tight mb-2">Radical Transparency</p>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-4">Clear, unmissable disclosure of sponsorships, AI usage, and material connections that respects the user's right to context.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-stone-300 mb-4" icon="solar:document-text-linear" strokeWidth="1.5" width="28"></iconify-icon>
<p className="font-serif text-stone-900 text-lg tracking-tight mb-2">Verifiable Evidence</p>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-4">Claims backed by accessible primary sources, data, and methodology rather than circular digital references.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white border-b border-stone-200" id="workshops">
<div className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-20">

<div className="lg:w-[40%] relative">
<div className="sticky top-32 flex justify-center lg:justify-end">
<div className="relative w-full max-w-[360px] aspect-[2/3]">
<div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] rounded-r-lg rounded-l-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] book-spine-effect flex items-center justify-center p-10 text-left border border-stone-200">
<div className="w-full h-full border border-stone-900/10 flex flex-col justify-between p-8">
<span className="text-stone-900/50 text-xs uppercase tracking-[0.2em] font-sans">TRST Advisory</span>
<div>
<h3 className="text-stone-900 font-serif text-4xl tracking-tight leading-tight mb-4">Workshops<br/>&amp; Audits</h3>
<p className="text-stone-900/70 text-sm font-light">Fortify your brand's digital credibility.</p>
</div>
<div className="pt-6 border-t border-stone-900/20 flex justify-between items-center">
<p className="text-stone-900/90 text-sm font-medium">B2B Services</p>
<iconify-icon className="text-stone-900/60" icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-[60%] flex flex-col max-w-2xl">
<div className="mb-12 border-b border-stone-200 pb-12">
<h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight text-stone-900 mb-6">Trust Audits &amp; Advisory</h2>
<p className="text-xl text-stone-500 font-light leading-relaxed mb-8">
                            Translate our editorial insights into organizational practice. We provide confidential messaging reviews and team workshops designed to navigate reputation risks before they occur.
                        </p>
<div className="prose prose-stone text-stone-600 font-light leading-loose text-base">
<p className="mb-6">
                                Understanding trust signals theoretically is different from implementing them across a diverse marketing organization. TRST Advisory bridges this gap by directly applying our frameworks to your current challenges.
                            </p>
<p>
                                Whether you are launching an AI-assisted product line, onboarding a new cohort of brand ambassadors, or recovering from a reputational misstep, our neutral, third-party perspective ensures your messaging communicates genuine credibility.
                            </p>
</div>
</div>

<div className="flex flex-col mb-16">
<details className="group border-b border-stone-200 py-6" open="">
<summary className="flex justify-between items-center cursor-pointer font-sans font-medium text-lg text-stone-900 focus:outline-none">
<span className="tracking-tight">Messaging &amp; Transparency Audits</span>
<span className="text-stone-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-2 text-stone-600 font-light leading-relaxed text-base">
                                A comprehensive, confidential review of your landing pages, PR materials, and campaign briefs against our strict trust heuristics, delivering actionable gap analysis.
                            </div>
</details>
<details className="group border-b border-stone-200 py-6">
<summary className="flex justify-between items-center cursor-pointer font-sans font-medium text-lg text-stone-900 focus:outline-none">
<span className="tracking-tight">In-House Training &amp; Workshops</span>
<span className="text-stone-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-2 text-stone-600 font-light leading-relaxed text-base">
                                Equip your marketing, PR, and communications teams with the frameworks needed to independently navigate the complexities of digital disclosure, creator relationships, and AI transparency.
                            </div>
</details>
</div>

<div className="bg-[#FAFAF8] p-8 border border-stone-100 flex items-center justify-between gap-6">
<div>
<h3 className="font-serif text-xl text-stone-900 tracking-tight mb-1">Schedule a Consultation</h3>
<p className="text-stone-500 font-light text-sm">Discuss your organizational needs confidentially.</p>
</div>
<a className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm tracking-wide shrink-0" href="#">
                            Book Inquiry
                        </a>
</div>
</div>
</div>
</section>

<section className="bg-[#1E293B] py-24 px-6 text-center border-b border-stone-800">
<div className="max-w-2xl mx-auto flex flex-col items-center">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:letter-unread-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight text-white mb-4">Stay ahead of trust trends.</h2>
<p className="text-stone-400 font-light text-base leading-relaxed mb-10 max-w-lg">
                    Join our weekly brief covering shifts in digital credibility, platform policies, and detailed teardowns of online transparency. No spam, just signal.
                </p>
<form className="flex w-full max-w-md gap-3" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="Email address" required="" type="email"/>
<button className="bg-[#C5A059] hover:bg-[#B38F48] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300 tracking-wide" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#FAFAF8] py-16 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<span className="font-sans font-medium text-lg tracking-tighter text-stone-900 mb-6 block">TRST</span>
<p className="text-xs text-stone-400 tracking-widest uppercase mb-8">Digital Trust Signals Journal</p>
<div className="flex gap-6 text-sm text-stone-500 font-light">
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
<a className="hover:text-stone-900 transition-colors" href="#">Methodology</a>
<a className="hover:text-stone-900 transition-colors" href="#">Advisory</a>
<a className="hover:text-stone-900 transition-colors" href="#">Editorial Policy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}
