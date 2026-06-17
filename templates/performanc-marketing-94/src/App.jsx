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
sans: ['Lato', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
mueller: {
base: '#F5F5F2', // Ralph Lauren Cream/Off-white
navy: '#0F1623', // Deepest Matte Navy
accent: '#A3906D', // Antique Brass/Muted Gold
slate: '#5C6270', // Neutral Slate for text
light: '#E6E6E3', // Subtle borders
}
},
letterSpacing: {
tightest: '-.05em',
widest: '.15em',
},
backgroundImage: {
'matte': "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
}
}
}
}

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
      

<header className="fixed top-0 w-full z-50 bg-mueller-navy/95 backdrop-blur-sm border-b border-white/5 transition-all duration-500">
<div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tight text-white font-medium z-50" href="#">
          MUELLER.
        </a>

<nav className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium text-slate-300 hover:text-white transition-all tracking-widest uppercase opacity-80 hover:opacity-100" href="#about">
            About
          </a>
<a className="text-xs font-medium text-slate-300 hover:text-white transition-all tracking-widest uppercase opacity-80 hover:opacity-100" href="#philosophy">
            Philosophy
          </a>
<a className="text-xs font-medium text-slate-300 hover:text-white transition-all tracking-widest uppercase opacity-80 hover:opacity-100" href="#process">
            Process
          </a>
<a className="text-xs font-medium text-slate-300 hover:text-white transition-all tracking-widest uppercase opacity-80 hover:opacity-100" href="#contact">
            Contact
          </a>
</nav>

<a className="hidden md:inline-flex items-center justify-center px-8 py-3 border border-mueller-accent/50 text-mueller-accent text-xs font-medium tracking-widest uppercase hover:bg-mueller-accent hover:text-white transition-all duration-500 ease-out" href="#contact">
          Get in Touch
        </a>

<button className="md:hidden text-white opacity-80 hover:opacity-100">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center pt-24 bg-mueller-navy bg-navy-section overflow-hidden">
<div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid md:grid-cols-12 gap-16 items-center">

<div className="md:col-span-7 space-y-10 fade-enter" style={{animationDelay: '0.1s'}}>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-white font-normal">
              Real Numbers,
              <br/>
<span className="italic text-mueller-accent">Real Growth:</span>
<br/>
              Proven Success.
            </h1>
<div className="h-px w-16 bg-mueller-accent/40"></div>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-lg leading-relaxed">
              Founded by Adam Mueller, a leader in performance marketing, building on a proven track record.
            </p>
<div className="pt-4">
<a className="inline-block border-b border-mueller-accent pb-1 text-mueller-accent text-sm tracking-widest uppercase hover:text-white hover:border-white transition-all duration-300" href="#process">
                Learn More About Our Process
              </a>
</div>
</div>

<div className="md:col-span-5 relative h-[600px] fade-enter" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 bg-mueller-navy/10 z-10 pointer-events-none"></div>

<img alt="Adam Mueller" className="w-full h-full object-cover shadow-2xl opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 bg-mueller-base" id="about">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="relative">
<div className="relative z-10 aspect-[3/4]">
<img alt="Adam Mueller Portrait" className="w-full h-full object-cover shadow-lg grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute top-6 -left-6 w-full h-full border border-mueller-navy/10 z-0"></div>
</div>

<div className="space-y-10 pl-0 md:pl-10">
<h2 className="font-serif text-4xl md:text-5xl text-mueller-navy leading-tight font-normal">
                Built on Experience,
                <br/>
<span className="italic text-slate-500">Not Speculation.</span>
</h2>
<div className="h-px w-24 bg-mueller-navy/20"></div>
<div className="space-y-6 text-mueller-slate text-lg font-light leading-relaxed">
<p>
                  Adam Mueller is the co-founder of <strong className="text-mueller-navy font-medium">QuoteWay Canada Inc.</strong>, which was successfully acquired by <strong className="text-mueller-navy font-medium">Neilson Financial Services</strong>.
                </p>
<p>
                  With this proven track record, Mueller focuses on delivering performance marketing solutions that bring measurable results.
                </p>
</div>
<div className="pt-4">
<a className="group inline-flex items-center gap-3 text-mueller-navy text-sm tracking-widest uppercase hover:text-mueller-accent transition-colors" href="#philosophy">
                  Learn More About Our Philosophy
                  <span className="iconify group-hover:translate-x-1 transition-transform text-mueller-accent" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-y border-mueller-light" id="philosophy">
<div className="max-w-7xl mx-auto px-8">
<div className="max-w-3xl mb-24">
<span className="text-xs font-bold text-mueller-accent tracking-widest uppercase mb-4 block">
              Our Philosophy
            </span>
<h2 className="font-serif text-4xl text-mueller-navy leading-snug">
              Integrity in Data. Clarity in Results.
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-16">

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center text-mueller-navy">
<span className="iconify" data-icon="lucide:search" data-width="24"></span>
</div>
<h3 className="font-serif text-2xl text-mueller-navy">Total Transparency</h3>
<p className="text-mueller-slate text-sm leading-7 font-light">
                We believe in clear, measurable outcomes and transparent reporting of all marketing activities. No hidden metrics.
              </p>
</div>

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center text-mueller-navy">
<span className="iconify" data-icon="lucide:scale" data-width="24"></span>
</div>
<h3 className="font-serif text-2xl text-mueller-navy">Fair Approach</h3>
<p className="text-mueller-slate text-sm leading-7 font-light">
                Our methods ensure fairness and equity in all our business relationships. We operate as true partners.
              </p>
</div>

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center text-mueller-navy">
<span className="iconify" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<h3 className="font-serif text-2xl text-mueller-navy">Real Results</h3>
<p className="text-mueller-slate text-sm leading-7 font-light">
                We deliver marketing that’s not just theoretical—it's proven through tangible, measurable growth.
              </p>
</div>
</div>
<div className="mt-20 pt-10 border-t border-mueller-light text-center md:text-left">
<a className="inline-block text-mueller-navy hover:text-mueller-accent transition-colors text-sm tracking-widest uppercase font-medium" href="#process">
              Discover How We Work →
            </a>
</div>
</div>
</section>

<section className="py-32 bg-mueller-base" id="process">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-xl">
<h2 className="font-serif text-4xl text-mueller-navy mb-6">How We Work</h2>
<p className="text-mueller-slate font-light text-lg">
                A disciplined framework designed for predictability.
              </p>
</div>
<a className="hidden md:inline-flex px-8 py-3 bg-mueller-navy text-white text-xs tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-sm" href="#contact">
              Get In Touch
            </a>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="absolute top-0 left-0 w-full h-px bg-mueller-navy/5 md:block hidden"></div>

<div className="pt-12 relative">
<span className="absolute top-0 left-0 -mt-1.5 w-3 h-3 bg-mueller-accent rounded-full md:block hidden"></span>
<span className="text-xs font-bold text-mueller-accent tracking-widest uppercase mb-4 block">Step 01</span>
<h3 className="font-serif text-2xl text-mueller-navy mb-4">Established Foundations</h3>
<p className="text-mueller-slate text-sm leading-relaxed font-light">
                We begin by thoroughly understanding your business and marketing needs. A deep dive into data sets the baseline for truth.
              </p>
</div>

<div className="pt-12 relative">
<span className="absolute top-0 left-0 -mt-1.5 w-3 h-3 bg-mueller-navy rounded-full md:block hidden"></span>
<span className="text-xs font-bold text-mueller-accent tracking-widest uppercase mb-4 block">Step 02</span>
<h3 className="font-serif text-2xl text-mueller-navy mb-4">Tailored Excellence</h3>
<p className="text-mueller-slate text-sm leading-relaxed font-light">
                We customize our approach based on your specific goals. Every strategy is bespoke, ensuring excellence in execution.
              </p>
</div>

<div className="pt-12 relative">
<span className="absolute top-0 left-0 -mt-1.5 w-3 h-3 bg-mueller-navy rounded-full md:block hidden"></span>
<span className="text-xs font-bold text-mueller-accent tracking-widest uppercase mb-4 block">Step 03</span>
<h3 className="font-serif text-2xl text-mueller-navy mb-4">Consistent Results</h3>
<p className="text-mueller-slate text-sm leading-relaxed font-light">
                We focus on long-term, reliable results. Our goal is sustained success rather than short-lived spikes.
              </p>
</div>
</div>
<div className="mt-16 md:hidden">
<a className="inline-block w-full text-center px-8 py-4 bg-mueller-navy text-white text-xs tracking-widest uppercase" href="#contact">
              Get In Touch
            </a>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-mueller-light">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-16">
<span className="text-xs font-bold text-mueller-accent tracking-widest uppercase mb-4 block">
                  Perspectives
                </span>
<h2 className="font-serif text-3xl text-mueller-navy">Trusted Partners</h2>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="bg-mueller-base p-12">
<div className="mb-8 text-mueller-accent">
<span className="iconify" data-icon="lucide:quote" data-width="32"></span>
</div>
<blockquote className="font-serif text-xl text-mueller-navy leading-relaxed italic mb-8">
                        "Mueller transformed our approach to marketing. Their clarity, transparency, and results speak for themselves."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-px bg-mueller-navy/20"></div>
<div>
<cite className="not-italic text-sm font-bold text-mueller-navy uppercase tracking-wider block">Sarah Jenkins</cite>
<span className="text-xs text-mueller-slate">CEO, TechFlow Solutions</span>
</div>
</div>
</div>

<div className="bg-mueller-base p-12">
<div className="mb-8 text-mueller-accent">
<span className="iconify" data-icon="lucide:quote" data-width="32"></span>
</div>
<blockquote className="font-serif text-xl text-mueller-navy leading-relaxed italic mb-8">
                        "Finally, a partner who doesn't rely on guesswork. Adam's team delivered measurable growth from day one."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-px bg-mueller-navy/20"></div>
<div>
<cite className="not-italic text-sm font-bold text-mueller-navy uppercase tracking-wider block">David Ross</cite>
<span className="text-xs text-mueller-slate">Founder, Evolve Retail</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="text-mueller-navy text-sm font-medium border-b border-mueller-navy pb-1 hover:text-mueller-accent hover:border-mueller-accent transition-colors" href="#contact">
                     Join the Growing List of Successful Partners
                 </a>
</div>
</div>
</section>

<section className="py-32 bg-mueller-base border-t border-mueller-light" id="contact">
<div className="max-w-3xl mx-auto px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-mueller-navy mb-4">Start the Conversation</h2>
<p className="text-mueller-slate font-light">Direct access. No intermediaries.</p>
</div>
<form className="space-y-8 bg-white p-10 md:p-14 shadow-[0_2px_40px_rgba(0,0,0,0.02)] border border-mueller-light">
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold text-mueller-navy tracking-widest uppercase" htmlFor="name">Name</label>
<input className="w-full bg-mueller-base border-0 border-b border-mueller-light p-4 text-mueller-navy focus:ring-0 focus:border-mueller-accent transition-colors placeholder-mueller-slate/30" id="name" placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-mueller-navy tracking-widest uppercase" htmlFor="email">Email</label>
<input className="w-full bg-mueller-base border-0 border-b border-mueller-light p-4 text-mueller-navy focus:ring-0 focus:border-mueller-accent transition-colors placeholder-mueller-slate/30" id="email" placeholder="Email Address" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-mueller-navy tracking-widest uppercase" htmlFor="message">Message</label>
<textarea className="w-full bg-mueller-base border-0 border-b border-mueller-light p-4 text-mueller-navy focus:ring-0 focus:border-mueller-accent transition-colors placeholder-mueller-slate/30 resize-none" id="message" placeholder="How can we help you grow?" rows="4"></textarea>
</div>
<div className="pt-6 text-center">
<button className="w-full md:w-auto px-12 py-4 bg-mueller-accent text-white text-xs font-bold tracking-widest uppercase hover:bg-mueller-navy transition-colors duration-500" type="button">
                Send Message
              </button>
<p className="text-xs text-mueller-slate/60 mt-6">
                We respect your privacy and will get back to you as soon as possible.
              </p>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-mueller-navy text-slate-400 py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="font-serif text-3xl text-white font-medium tracking-tight">M.</span>
</div>
<div className="col-span-1">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Navigation</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-mueller-accent transition-colors" href="#about">About</a></li>
<li><a className="hover:text-mueller-accent transition-colors" href="#philosophy">Philosophy</a></li>
<li><a className="hover:text-mueller-accent transition-colors" href="#process">Process</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-mueller-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-mueller-accent transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
<p>© 2023 Mueller Performance Marketing. All Rights Reserved.</p>
<p>Designed for Excellence.</p>
</div>
</div>
</footer>

    </>
  );
}
