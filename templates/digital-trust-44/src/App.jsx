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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Fraunces', 'serif'],
},
colors: {
primary: '#28b879',
dark: '#1e3a2b',
highlight: '#4fb848',
gold: '#689540',
background: '#f6f6f6',
body: '#1e3a2b',
muted: '#3c4a40',
border: '#dde5df'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for fade-up scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });

            // Demo Form Expandable Logic
            const toggleBtn = document.getElementById('demo-toggle');
            const formContainer = document.getElementById('demo-form-container');
            const icon = document.getElementById('demo-toggle-icon');
            const form = document.getElementById('demo-form');
            const successMsg = document.getElementById('demo-success');

            if(toggleBtn && formContainer) {
                toggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isOpen = formContainer.style.maxHeight;
                    
                    if (isOpen && isOpen !== "0px") {
                        formContainer.style.maxHeight = "0px";
                        icon.style.transform = "rotate(0deg)";
                    } else {
                        formContainer.style.maxHeight = formContainer.scrollHeight + "px";
                        icon.style.transform = "rotate(90deg)";
                        
                        // Scroll slightly to ensure form is in view
                        setTimeout(() => {
                            const y = formContainer.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({top: y, behavior: 'smooth'});
                        }, 300);
                    }
                });
            }

            // Demo Form Submit Logic
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // Fade out form, fade in success message
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.style.display = 'none';
                        successMsg.style.display = 'block';
                        successMsg.style.opacity = '0';
                        
                        // Recalculate container height for the smaller success message
                        formContainer.style.maxHeight = successMsg.scrollHeight + 64 + "px"; // 64 is padding
                        
                        setTimeout(() => {
                            successMsg.style.opacity = '1';
                            successMsg.style.transition = 'opacity 0.5s ease';
                        }, 50);
                    }, 300);
                });
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-dark text-lg" href="#">TRST</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#topics">Topics</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#frameworks">Frameworks</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Journal</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#tool">Tool</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#workshops">Workshops</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition-colors shadow-sm" href="#newsletter">
                Subscribe
            </a>
<button className="md:hidden text-dark">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 clip-path-diagonal -z-10" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-highlight animate-pulse shadow-[0_0_8px_#4fb848]"></span>
<span className="text-xs font-medium text-muted">The Digital Trust Signals Journal</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-dark tracking-tight leading-tight mb-6">
                    How to evaluate credibility when everything looks <span className="bg-highlight px-2 rounded text-white inline-block transform -rotate-1">polished</span>
</h1>
<p className="text-base md:text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    A publication and advisory practice decoding authenticity, disclosure, and reputation online. We help brands, creators, and consumers navigate the new trust economy.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center bg-dark text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary transition-colors shadow-md" href="#journal">
                        Read the Journal
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center bg-white text-dark border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-background transition-colors shadow-sm" href="#tool">
                        Use the Trust Calculator →
                    </a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted">
<div className="flex items-center gap-1">
<iconify-icon className="text-primary" icon="solar:pen-new-round-linear"></iconify-icon>
                        Editorial Independence
                    </div>
<span>·</span>
<div>Evidence-Based</div>
<span>·</span>
<div>Zero Pay-to-Play</div>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out relative">
<div className="aspect-video bg-white rounded-2xl border border-border shadow-2xl p-2 relative group cursor-pointer overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-background to-white opacity-50 pointer-events-none"></div>

<div className="w-full h-full border border-border/50 rounded-xl bg-background flex flex-col p-4 opacity-70">
<div className="h-4 w-32 bg-border rounded mb-4"></div>
<div className="flex gap-2 mb-4">
<div className="h-16 w-1/3 bg-border/50 rounded-lg flex flex-col justify-center items-center gap-1"><div className="h-2 w-8 bg-border rounded"></div><div className="h-4 w-12 bg-dark/20 rounded"></div></div>
<div className="h-16 w-1/3 bg-border/50 rounded-lg flex flex-col justify-center items-center gap-1"><div className="h-2 w-8 bg-border rounded"></div><div className="h-4 w-12 bg-dark/20 rounded"></div></div>
<div className="h-16 w-1/3 bg-border/50 rounded-lg flex flex-col justify-center items-center gap-1"><div className="h-2 w-8 bg-border rounded"></div><div className="h-4 w-12 bg-dark/20 rounded"></div></div>
</div>
<div className="flex-1 bg-border/30 rounded-lg w-full flex p-3 gap-3">
<div className="w-1/4 h-full bg-border/40 rounded"></div>
<div className="w-3/4 flex flex-col gap-2">
<div className="h-3 w-full bg-border/40 rounded"></div>
<div className="h-3 w-5/6 bg-border/40 rounded"></div>
<div className="h-3 w-4/6 bg-border/40 rounded"></div>
</div>
</div>
</div>
<button className="absolute bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-border text-dark group-hover:scale-110 group-hover:bg-white transition-all">
<iconify-icon icon="solar:document-add-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-dark py-8 border-y border-dark">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-x-0 md:divide-x divide-primary/30 text-white">
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Independent</div>
<span className="text-sm font-medium text-white/80">Zero pay-to-play coverage</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Evidence-Based</div>
<span className="text-sm font-medium text-white/80">Verifiable signals only</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Transparent</div>
<span className="text-sm font-medium text-white/80">Clear evaluation metrics</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Actionable</div>
<span className="text-sm font-medium text-white/80">Practical trust frameworks</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-background" id="frameworks">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-dark mb-4">Decoding the mechanics of digital trust</h2>
<p className="text-base text-muted max-w-2xl mx-auto">Explore our core frameworks for evaluating authenticity, uncovering hidden signals, and building resilient reputations in a skeptical era.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min">

<div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col justify-between relative overflow-hidden group">
<div className="absolute right-0 top-0 w-72 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none flex items-center justify-end pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
<div className="space-y-3 translate-x-8 group-hover:translate-x-0 transition-transform duration-700 ease-out">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-border flex items-center gap-4 w-48">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><iconify-icon icon="solar:eye-scan-linear" width="20"></iconify-icon></div>
<div className="space-y-2 flex-1"><div className="w-3/4 h-2 bg-dark rounded-full"></div><div className="w-1/2 h-1.5 bg-border rounded-full"></div></div>
</div>
<div className="bg-white p-3 rounded-2xl shadow-sm border border-border flex items-center gap-4 w-48 -translate-x-6">
<div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center text-highlight"><iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon></div>
<div className="space-y-2 flex-1"><div className="w-full h-2 bg-dark rounded-full"></div><div className="w-2/3 h-1.5 bg-border rounded-full"></div></div>
</div>
</div>
</div>
<div className="relative z-10 md:w-2/3">
<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-dark mb-3">Influencer Disclosure &amp; Creator Trust</h3>
<p className="text-base text-muted leading-relaxed mb-6">Analyzing transparency in the creator economy. Learn how to spot hidden sponsorships, evaluate creator credibility, and measure the authenticity of audience relationships.</p>
<div className="flex items-center gap-2 text-xs font-medium text-dark bg-background inline-flex px-3 py-1.5 rounded-full border border-border">
<span className="w-1.5 h-1.5 rounded-full bg-highlight"></span> Sponsored Content Rubric Available
                        </div>
</div>
</div>

<div className="md:col-span-5 bg-dark rounded-3xl p-8 lg:p-10 border border-dark shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-75 ease-out flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-highlight/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-highlight/30"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-highlight mb-8 border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-white mb-3">AI Media &amp; Synthetic Transparency</h3>
<p className="text-base text-white/70 leading-relaxed">Frameworks for evaluating synthetic content and brand honesty in the age of generative AI. How to signal human oversight effectively.</p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90 backdrop-blur-md transition-colors group-hover:bg-white/10">
<iconify-icon icon="solar:code-scan-linear"></iconify-icon> AI Disclosure Guidelines
                            </span>
</div>
</div>
</div>

<div className="md:col-span-5 bg-primary rounded-3xl p-8 lg:p-10 border border-primary shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out flex flex-col justify-between overflow-hidden group relative">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 border border-white/20 backdrop-blur-sm">
<iconify-icon icon="solar:chat-round-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-white mb-3">Review Integrity &amp; Consensus</h3>
<p className="text-base text-white/80 leading-relaxed">The anatomy of authentic feedback. Separating manipulated consensus and paid reviews from genuine customer signals.</p>
</div>

<div className="mt-10 flex items-end gap-2 h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-full bg-white/20 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-500 ease-out"></div>
<div className="w-full bg-white/30 rounded-t-md h-[55%] group-hover:h-[75%] transition-all duration-500 delay-75 ease-out"></div>
<div className="w-full bg-white/50 rounded-t-md h-[35%] group-hover:h-[50%] transition-all duration-500 delay-100 ease-out"></div>
<div className="w-full bg-white/70 rounded-t-md h-[70%] group-hover:h-[90%] transition-all duration-500 delay-150 ease-out"></div>
<div className="w-full bg-white rounded-t-md h-[100%] group-hover:h-[85%] transition-all duration-500 delay-200 ease-out"></div>
</div>
</div>

<div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out flex flex-col justify-between items-start group">
<div className="w-full">
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-2xl bg-dark/5 flex items-center justify-center text-dark border border-dark/10">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<div className="px-3 py-1.5 bg-highlight/10 text-highlight text-xs font-semibold rounded-full border border-highlight/20 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse"></span> Case Studies Inside
                            </div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-dark mb-3">Corporate Honesty &amp; Reputation</h3>
<p className="text-base text-muted leading-relaxed mb-8 md:w-5/6">Audits and teardowns of corporate messaging. We analyze apologies, transparency reports, and crisis responses to understand what separates performative marketing from operational honesty.</p>
</div>
<a className="inline-flex items-center justify-center bg-dark text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-primary transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 gap-2" href="#journal">
                        Read Latest Teardowns
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-background pb-24" id="topics">
<div className="max-w-7xl mx-auto px-6">
<div className="border border-border rounded-3xl overflow-hidden bg-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="p-10">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">TOPIC 01</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Digital Trust Signals</h3>
<p className="text-sm text-muted leading-relaxed">Understand the micro-interactions, disclosures, and verification markers that establish (or erode) credibility in digital spaces.</p>
</div>
<div className="p-10 bg-background/30">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">TOPIC 02</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Platform Verification</h3>
<p className="text-sm text-muted leading-relaxed">Analyzing how platforms verify identity, combat manipulation, and design UI elements that imply trustworthiness to consumers.</p>
</div>
<div className="p-10">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">TOPIC 03</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Reputation Recovery</h3>
<p className="text-sm text-muted leading-relaxed">The playbook for regaining trust after a misstep. Evidence-based analysis of successful and failed brand rehabilitation efforts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-white border-y border-dark relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-highlight text-sm font-medium tracking-wide uppercase mb-4 block">TRST Standards</span>
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-6">How we evaluate digital credibility.</h2>
<p className="text-base text-white/80 leading-relaxed mb-8">
                    TRST is built on the premise that trust is no longer assumed—it must be signaled clearly. We provide frameworks to evaluate the integrity of digital content, campaigns, and creators, entirely independent of sponsored influence.
                </p>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<p className="text-sm text-white/90 leading-relaxed font-medium">
<strong className="text-highlight font-semibold">TRST</strong> operates as a hybrid editorial and advisory firm. We analyze public campaigns and content through strict evaluation criteria, publishing teardowns and offering private workshops to help organizations communicate with verifiable authenticity.
                    </p>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out pl-0 md:pl-10">
<div className="flex flex-col gap-8">
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">1</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Transparency Intent</h4>
<p className="text-sm text-white/60">Is the motivation behind the content clear? We evaluate how upfront a brand or creator is about sponsorships, AI usage, and commercial goals.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">2</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Verifiable Evidence</h4>
<p className="text-sm text-white/60">Are claims substantiated by external proof? We look for documentation, objective data, and third-party verification over hollow assertions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">3</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Behavioral Consistency</h4>
<p className="text-sm text-white/60">Does historical behavior match current messaging? Trust is broken when public stances conflict with operational realities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">4</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Accountability</h4>
<p className="text-sm text-white/60">How are errors handled? We assess the presence of clear correction policies, sincere apologies, and tangible corrective actions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-center gap-2 mb-12 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
<iconify-icon className="text-primary" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold text-dark">What you'll find inside TRST</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-dark text-white rounded-2xl p-8 md:p-10 border border-dark shadow-md flex flex-col justify-between animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out relative overflow-hidden">
<iconify-icon className="text-white/10 absolute top-6 left-6" icon="solar:document-text-linear" width="120"></iconify-icon>
<div className="relative z-10 mb-8 md:w-3/4">
<div className="flex gap-2 items-center mb-6">
<span className="bg-highlight/20 text-highlight text-xs font-semibold px-2 py-1 rounded">Core Content</span>
</div>
<h3 className="text-2xl font-serif font-semibold mb-4 tracking-tight">Deep-Dive Teardowns</h3>
<p className="text-base md:text-lg font-medium leading-relaxed mb-6 text-white/80">
                            Step-by-step analyses of recent brand crises, creator controversies, and highly transparent marketing campaigns. We break down the exact trust signals deployed, missed, or manipulated.
                        </p>
<div>
<a className="text-sm font-medium text-highlight hover:text-white transition-colors flex items-center gap-1" href="#">Read the latest teardown <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-75 ease-out">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:checklist-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-sm text-dark mb-2">Trust Frameworks</h4>
<p className="text-sm text-muted leading-relaxed mb-4">Downloadable rubrics for evaluating content authenticity, from sponsored post disclosures to executive apologies.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-sm text-dark mb-2">Signal Checklists</h4>
<p className="text-sm text-muted leading-relaxed mb-4">Quick-reference guides designed for PR and marketing teams to audit their own campaigns before launch.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-sm text-dark mb-2">Industry Reports</h4>
<p className="text-sm text-muted leading-relaxed mb-4">Quarterly macro-analyses detailing shifting consumer trust patterns, platform policy changes, and credibility trends.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-sm text-dark mb-2">Advisory Workshops</h4>
<p className="text-sm text-muted leading-relaxed mb-4">Private trust audits and messaging reviews for enterprise teams looking to fortify their brand credibility.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border relative" id="tool">
<div className="max-w-4xl mx-auto px-6">

<div className="grid md:grid-cols-5 gap-12 items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="md:col-span-3">
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-dark mb-4">Campaign Credibility Check</h2>
<p className="text-base text-muted mb-8 leading-relaxed">Use our interactive Trust Signal Scorecard to evaluate your upcoming campaign, creator partnership, or corporate announcement before it goes live to the public.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> Evaluates transparency intent
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> Identifies critical disclosure risks
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> Assesses evidence quality &amp; sourcing
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> Generates a baseline trust score
                        </li>
</ul>
<button className="group flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary transition-all shadow-md" id="demo-toggle">
                        Launch Trust Calculator
                        <iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-right-linear" id="demo-toggle-icon" width="18"></iconify-icon>
</button>
</div>
<div className="md:col-span-2">
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-dark mb-2">Private &amp; Confidential</h4>
<p className="text-xs text-muted leading-relaxed">Submissions to the Trust Scorecard are entirely confidential. We do not publish evaluations of pending campaigns without explicit consent.</p>
</div>
</div>
</div>

<div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out mt-8" id="demo-form-container">
<div className="bg-white border border-border rounded-2xl shadow-sm p-8">
<div className="hidden text-center py-8" id="demo-success">
<div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-dark mb-2">Evaluation Requested</h3>
<p className="text-sm text-muted">Thank you. Our team will review the submitted materials and send your Trust Signal Scorecard shortly.</p>
</div>
<form className="space-y-8" id="demo-form">
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-4">
<h4 className="text-sm font-semibold tracking-wide text-dark uppercase border-b border-border pb-2 mb-4">Requester Details</h4>
<div>
<label className="block text-xs font-medium text-muted mb-1">Full Name</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Work Email</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Role / Job Title</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Marketing Director..." type="text"/>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold tracking-wide text-dark uppercase border-b border-border pb-2 mb-4">Campaign Details</h4>
<div>
<label className="block text-xs font-medium text-muted mb-1">Brand / Project Name</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Project Alpha..." required="" type="text"/>
</div>
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs font-medium text-muted mb-1">URL or Staging Link</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="https://..." type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Primary Trust Concern</label>
<select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow appearance-none">
<option>Creator/Influencer Disclosure</option>
<option>AI Usage Transparency</option>
<option>Claim Verification/Evidence</option>
<option>Crisis Response/Apology</option>
<option>Other</option>
</select>
</div>
</div>
</div>
</div>
<button className="w-full bg-dark text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2" type="submit">
                            Submit for Trust Audit
                            <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-primary/5 py-16 border-y border-border" id="newsletter">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div>
<h3 className="text-xl font-serif font-semibold text-dark mb-2">Stay ahead of digital trust trends.</h3>
<p className="text-sm text-muted">Join professionals receiving our regular brief on platform shifts, credibility signals, and transparency frameworks.</p>
</div>
<div className="flex justify-end">
<form className="w-full max-w-md flex bg-white rounded-full p-1 border border-border shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<input className="flex-1 bg-transparent px-4 py-2 text-sm text-dark focus:outline-none rounded-l-full" placeholder="Work email address" required="" type="email"/>
<button className="bg-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition-colors" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-10 text-white/70">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="font-semibold tracking-tighter text-white text-xl mb-4 block" href="#">TRST</a>
<p className="text-sm leading-relaxed mb-6">
                        The authoritative journal and advisory practice on digital trust, authenticity, and reputation online.
                    </p>
<div className="flex items-center gap-2 text-xs">
<div className="flex text-highlight">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon>
</div>
<span>100% Independent Analysis</span>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Content</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#topics">Topics &amp; Themes</a></li>
<li><a className="hover:text-white transition-colors" href="#frameworks">Trust Frameworks</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Premium Reports</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Advisory</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#tool">Trust Calculator</a></li>
<li><a className="hover:text-white transition-colors" href="#workshops">Messaging Audits</a></li>
<li><a className="hover:text-white transition-colors" href="#">Private Workshops</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">About</h4>
<div className="flex gap-4 mb-6">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:hashtag-linear" width="18"></iconify-icon>
</a>
</div>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">Editorial Standards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
<p>©  TRST.com. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
