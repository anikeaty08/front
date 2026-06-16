import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#FFD700',
'brand-dark': '#E5C100',
background: '#000000',
surface: '#0a0a0a',
'surface-hover': '#111111',
border: '#262626',
'border-light': '#404040',
text: {
primary: '#ffffff',
secondary: '#a3a3a3',
tertiary: '#525252',
}
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
letterSpacing: {
tighter: '-0.05em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Mobile Menu
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('menu-open');
          if (isOpen) {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          } else {
            mobileMenu.classList.add('menu-open');
            menuIcon.classList.add('icon-hidden');
            closeIcon.classList.remove('icon-hidden');
          }
        });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          });
        });
      }

      // Animation Logic
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.1 });

      const selector = 'h1, section h2, section p, article, .group, #advisory > div > div, #methodology .grid > div, .fade-up';
      document.querySelectorAll(selector).forEach((el) => {
        // Apply animations to main content, excluding nav/footer for auto-logic
        if(!el.closest('nav') && !el.closest('#mobile-menu') && !el.closest('footer')) {
           // Prevent nested animations for paragraphs inside cards
           if(el.tagName === 'P' && (el.closest('article') || el.closest('.group') || el.closest('#tool'))) return;

           el.classList.add('fade-up');
           observer.observe(el);
        }
      });

      // Footer specific animations
      const footer = document.querySelector('footer');
      if(footer) {
         footer.querySelectorAll('h2, p, .flex.flex-col, form').forEach(el => {
           el.classList.add('fade-up');
           observer.observe(el);
         });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-border backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-brand flex items-center justify-center">
<span className="font-bold text-black text-lg">T</span>
</div>
<span className="font-semibold text-xl tracking-tight text-white group-hover:text-brand transition-colors duration-200">
            TRST.
          </span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#topics">
            Topics
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#tool">
            Calculator
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#journal">
            Journal
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#methodology">
            Methodology
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#advisory">
            Advisory
          </a>
<a className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors duration-200" href="#contact">
            Subscribe
          </a>
</div>

<button className="md:hidden p-2 text-white hover:text-brand transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
<iconify-icon className="icon-hidden" height="24" icon="solar:close-square-linear" id="close-icon" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-black border-b border-border flex-col p-6 space-y-6 md:hidden shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40" id="mobile-menu">
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#topics">
          Topics
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#tool">
          Calculator
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#journal">
          Journal
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#methodology">
          Methodology
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#advisory">
          Advisory
        </a>
<a className="block w-full text-center py-4 bg-brand text-black text-xs font-bold uppercase tracking-widest" href="#contact">
          Subscribe
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background border-b border-border">

<div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-10 hover:border-brand/50 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-none h-2 w-2 bg-brand"></span>
</span>
<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand transition-colors">
            Evaluating Digital Credibility
          </span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-10 leading-[0.9] select-none">
          MEASURE
          <br/>
<span className="text-white/30">DIGITAL TRUST.</span>
</h1>
<p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light delay-100 fade-up">
          The Journal of Digital Trust Signals. Frameworks, teardowns, and analyses for evaluating authenticity and credibility in the age of polished content and AI.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-brand transition-colors duration-200 min-w-[220px]" href="#journal">
            Read the Journal
          </a>
<a className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-200 min-w-[220px]" href="#tool">
            Use the Calculator
          </a>
</div>
</div>
<div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-between px-10 text-[10px] text-text-secondary uppercase tracking-widest pointer-events-none z-20">
<span>Independent Analysis</span>
<span className="animate-bounce">Scroll to Explore</span>
<span>Frameworks &amp; Insights</span>
</div>
</section>

<section className="py-24 border-y border-border bg-background" id="topics">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase leading-none">
              core
              <br/>
              topics
            </h2>
</div>
<div className="md:col-span-7 flex items-end">
<p className="text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
              We analyze how trust is built, measured, lost, and restored. Our research separates objective transparency signals from subjective performance.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon height="32" icon="solar:user-speak-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Influencer Disclosure
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Evaluating sponsored content, creator transparency, hidden incentives, and alignment between audience expectations and brand promotion.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon height="32" icon="solar:code-scan-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              AI Transparency
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Identifying AI-generated media, analyzing brand honesty in algorithmic output, and establishing disclosure standards for synthetic content.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon height="32" icon="solar:star-fall-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Review Integrity
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Detecting manipulated feedback networks, verifying user claims, and evaluating the platforms that host user-generated proof of value.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon height="32" icon="solar:shield-warning-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Reputation Recovery
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Strategic frameworks for restoring credibility after trust breaches, product failures, or public missteps through radical transparency.
            </p>
</div>
</div>

<div className="mt-20">
<div className="mb-8">
<h4 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-2">
              Downloadable Frameworks
            </h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border">
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start cursor-pointer">
<iconify-icon className="text-text-secondary mt-1" height="20" icon="solar:checklist-minimalistic-linear" width="20"></iconify-icon>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  Trust Signal Checklist
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Practical criteria for evaluating daily content.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start cursor-pointer">
<iconify-icon className="text-text-secondary mt-1" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  Disclosure Audit
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Review templates for creator partnerships.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background hover:bg-surface transition-colors duration-200 items-start cursor-pointer">
<iconify-icon className="text-text-secondary mt-1" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  AI Media Guide
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Standards for algorithmic transparency.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-b border-border" id="tool">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-0 py-1 text-xs font-bold uppercase tracking-widest mb-8 text-brand">
<span className="block w-1.5 h-1.5 bg-brand"></span>
              Interactive Evaluation
            </div>
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8 lowercase leading-none">
              trust signal
              <br/>
<span className="text-text-tertiary">scorecard.</span>
</h2>
<div className="space-y-6 text-text-secondary font-light text-lg mb-10">
<p>
                Use our interactive framework to evaluate the credibility of digital campaigns, creators, and corporate claims. 
              </p>
<p>
                The calculator weighs 40+ transparency signals—from verifiable sourcing to disclosure clarity—to generate an objective trust baseline before you engage, publish, or partner.
              </p>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-brand transition-colors duration-200" href="#tool">
              Launch Full Calculator
            </a>
</div>

<div className="bg-surface p-8 border border-border shadow-2xl relative group">
<div className="absolute inset-0 border border-brand/0 group-hover:border-brand/30 transition-colors duration-500 pointer-events-none"></div>
<div className="mb-8 border-b border-border pb-6 flex justify-between items-end">
<div>
<h3 className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-2">Live Analysis</h3>
<div className="text-4xl font-bold text-white tracking-tighter flex items-baseline gap-1">
                  78<span className="text-lg text-text-secondary font-normal">/100</span>
</div>
</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-brand border border-brand/30 bg-brand/5 px-3 py-1.5">
                Moderate Trust
              </div>
</div>

<div className="space-y-6 mb-8">
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Target URL or Campaign</label>
<div className="flex border border-border bg-background">
<span className="pl-4 py-3 text-text-tertiary text-sm flex items-center">https://</span>
<input className="w-full bg-transparent px-2 py-3 text-white text-sm focus:outline-none placeholder-text-tertiary/50" readonly="" type="text" value="example.com/sponsored-post"/>
</div>
</div>
<div className="space-y-5 pt-2">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">
<span>Disclosure Clarity</span>
<span className="text-white">High (85%)</span>
</div>
<div className="h-1 bg-background w-full relative"><div className="absolute top-0 left-0 h-full bg-brand w-[85%]"></div></div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">
<span>Verifiable Sourcing</span>
<span className="text-white">Medium (60%)</span>
</div>
<div className="h-1 bg-background w-full relative"><div className="absolute top-0 left-0 h-full bg-white w-[60%]"></div></div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">
<span>AI Content Transparency</span>
<span className="text-brand">Flagged (30%)</span>
</div>
<div className="h-1 bg-background w-full relative"><div className="absolute top-0 left-0 h-full bg-border-light w-[30%]"></div></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="w-full bg-background border border-border text-white text-[10px] font-bold uppercase tracking-widest py-3 hover:border-white transition-colors duration-200" type="button">
                Export PDF
              </button>
<button className="w-full bg-white text-black text-[10px] font-bold uppercase tracking-widest py-3 hover:bg-brand transition-colors duration-200" type="button">
                Detailed View
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background" id="journal">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16 border-b border-border pb-8">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase">
            The Journal
          </h2>
<p className="text-lg text-text-secondary font-light">
            Teardowns, analyses, and editorial deep-dives into digital credibility.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="AI Interface" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              The AI Transparency Dilemma
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                AI Media
              </span>
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Analysis
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Why brands face intense public backlash when algorithms write their apologies, and the signals that give it away.
            </p>
</article>

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Network Nodes" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Anatomy of a Fake Review Ring
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                Integrity
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              How coordinated manipulation networks evade basic platform detection, and the linguistic footprints they leave behind.
            </p>
</article>

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Mobile Screen" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Creator Trust Signals in 2024
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                Influencers
              </span>
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Teardown
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              The ongoing shift from hyper-polished video production to raw, verified authenticity as the primary driver of conversion.
            </p>
</article>

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Global Data" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Verification as a Service
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                Platforms
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              How major social networks are monetizing the fundamental human need for identity proof and baseline credibility.
            </p>
</article>

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Financial Charts" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              The ROI of Transparent Pricing
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                E-Commerce
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Research shows that obscuring hidden costs and fees destroys consumer conversion exponentially faster than simply having high prices.
            </p>
</article>

<article className="flex flex-col h-full group cursor-pointer">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Corporate Architecture" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Rebuilding Brand Honesty
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-brand border border-border px-2 py-1">
                Reputation
              </span>
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Framework
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              A breakdown of the most effective corporate apologies of the decade, and the structural transparency changes that backed them up.
            </p>
</article>
</div>
<div className="mt-20 border-t border-border pt-8 text-center">
<a className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-brand transition-colors inline-flex items-center gap-2" href="#journal">
            View the Complete Archive
            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-border" id="methodology">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<div className="inline-flex items-center gap-2 px-0 py-1 text-xs font-bold uppercase tracking-widest mb-8 text-brand">
<span className="block w-1.5 h-1.5 bg-brand"></span>
              Editorial Standards
            </div>
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8 lowercase leading-none">
              how we
              <br/>
<span className="text-text-tertiary">evaluate trust.</span>
</h2>
<div className="space-y-6 text-text-secondary font-light text-lg">
<p>
                TRST operates on strict editorial standards. We actively separate objective transparency signals from subjective brand preference.
              </p>
<p>
                Our frameworks and analyses rely strictly on public evidence, historical tracking, verifiable disclosures, and consistent evaluation criteria. We build tools to help the industry regulate itself.
              </p>
</div>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-8">
              Core Pillars
            </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">

<div className="p-8 bg-background hover:bg-surface-hover transition-colors duration-200">
<div className="w-16 h-16 bg-surface border border-border mb-6 flex items-center justify-center text-text-secondary">
<iconify-icon height="28" icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-1">Evidence-Based</h4>
<p className="text-[10px] font-medium text-brand uppercase tracking-widest mb-4">
                  Signal Over Noise
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  We prioritize measurable signals—like disclosure clarity, primary source citations, and verifiable technical claims—over public sentiment or PR narratives.
                </p>
</div>

<div className="p-8 bg-background hover:bg-surface-hover transition-colors duration-200">
<div className="w-16 h-16 bg-surface border border-border mb-6 flex items-center justify-center text-text-secondary">
<iconify-icon height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-1">Independent</h4>
<p className="text-[10px] font-medium text-brand uppercase tracking-widest mb-4">
                  Strict Objectivity
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  We do not accept payment for positive coverage, manufactured teardowns, or inflated calculator trust scores. Our evaluation frameworks are open and strictly objective.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-b border-border" id="advisory">
<div className="max-w-[1440px] mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase">
            advisory
          </h2>
<p className="text-lg text-text-secondary font-light">
            Practical support for marketing, PR, and communications teams navigating digital reputation risk.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border bg-border gap-px">

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                Messaging Review
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Evaluate an upcoming campaign's transparency footprint.
              </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Copy &amp; tone analysis
              </li>
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Disclosure compliance check
              </li>
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                AI media labeling guidance
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Request Review
            </a>
</div>

<div className="bg-surface-hover p-10 flex flex-col h-full border-border relative">
<div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                Trust Audit
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Comprehensive evaluation of your digital footprint.
              </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-white">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Historical signal analysis
              </li>
<li className="flex items-start gap-3 text-xs text-white">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Review &amp; reputation teardown
              </li>
<li className="flex items-start gap-3 text-xs text-white">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Creator partnership screening
              </li>
<li className="flex items-start gap-3 text-xs text-white">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Actionable recovery playbook
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 bg-brand text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-200" href="#contact">
              Book an Audit
            </a>
</div>

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                Corporate Workshops
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Train your internal teams on credibility standards.
              </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Half-day or full-day sessions
              </li>
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Navigating AI content risks
              </li>
<li className="flex items-start gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand shrink-0 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Aligning PR with public signals
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Discuss Scope
            </a>
</div>
</div>
</div>
</section>

<footer className="bg-surface pt-24 pb-12" id="contact">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white lowercase leading-[0.8]">
              stay ahead
              <br/>
              of trust trends.
            </h2>
<p className="text-text-secondary text-lg mb-12 max-w-md font-light">
              Join the newsletter for weekly briefs on digital trust signals, platform shifts, and credibility teardowns. Sent every Tuesday.
            </p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors" href="mailto:editor@trst.com">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-lg">editor@trst.com</span>
</a>
</div>
</div>

<div className="bg-background p-8 border border-border">
<form className="space-y-6">
<div className="grid grid-cols-1 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                    Full Name
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                    Work Email
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  Interest
                </label>
<div className="relative">
<select className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors cursor-pointer pr-10">
<option>Subscribe to Newsletter</option>
<option>Inquire about Trust Audit</option>
<option>Inquire about Workshop</option>
</select>
</div>
</div>
<button className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-4 hover:bg-brand transition-colors duration-200" type="button">
                Submit
              </button>
</form>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-brand flex items-center justify-center">
<span className="text-black text-xs font-bold">T</span>
</div>
<span className="font-bold text-sm text-white tracking-widest uppercase">
              TRST.com
            </span>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-text-tertiary">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Editorial Policy</a>
<span>© 2024 TRST.</span>
</div>
<div className="flex gap-6">
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
