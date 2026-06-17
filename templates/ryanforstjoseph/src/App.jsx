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
colors: {
brand: {
red: '#D6001C',
dark: '#B2050F',
},
accent: {
yellow: '#FFD200',
},
surface: {
dark: '#050505',
neutral: '#525252',
light: '#F5F5F7',
offwhite: '#FAFAFA',
footer: '#121212',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
animation: {
'marquee': 'marquee 30s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
<div className="pointer-events-auto glass-nav rounded-full py-2.5 px-3 flex items-center gap-2 md:gap-8 transition-all duration-300 hover:scale-[1.01]">
<a className="flex items-center gap-2 pl-4 pr-2 font-display font-semibold text-lg tracking-tight" href="#">
                Ryan<span className="text-surface-neutral font-normal text-sm">ForSt.Joseph</span>
<span className="h-2 w-2 rounded-full bg-brand-red ml-1"></span>
</a>
<div className="hidden md:flex items-center bg-surface-light/50 rounded-full px-1 py-1 border border-surface-neutral/5">
<a className="px-5 py-2 rounded-full text-xs font-medium text-surface-neutral hover:text-surface-dark hover:bg-white transition-all" href="#vision">Vision</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-surface-neutral hover:text-surface-dark hover:bg-white transition-all" href="#meet-ryan">Candidate</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-surface-neutral hover:text-surface-dark hover:bg-white transition-all flex items-center gap-1.5" href="#ask-ryan">
<i className="w-3.5 h-3.5 text-accent-yellow fill-accent-yellow" data-lucide="sparkles"></i>
                    AI Policy
                </a>
</div>
<a className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-medium transition-colors flex items-center gap-2" href="#contact">
                Join Us
                <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden pt-28 lg:pt-0">

<div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:pl-24 lg:pr-12 py-12 lg:py-0 relative z-10">
<div className="mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
</span>
<span className="text-xs font-medium uppercase tracking-widest text-brand-red">Nomination Day: Nov 22</span>
</div>
</div>
<h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-surface-dark mb-8 text-balance animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
                A Brighter<br/>
                Future <span className="text-brand-red">Together.</span>
</h1>
<div className="flex flex-wrap gap-4 mb-10 text-sm text-surface-neutral font-medium animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-red" data-lucide="check"></i> Authentic</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-red" data-lucide="check"></i> Grounded</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-red" data-lucide="check"></i> Progressive</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-red" data-lucide="check"></i> Visionary</span>
</div>
<div className="flex items-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
<button className="bg-surface-dark text-white hover:bg-surface-neutral px-8 py-4 rounded-full text-sm font-medium transition-all duration-300">
                    Manifesto 2025
                </button>
<button className="group flex items-center gap-3 px-6 py-4 rounded-full text-surface-dark text-sm font-medium hover:bg-surface-light transition-all">
<span className="w-8 h-8 rounded-full border border-surface-neutral/20 flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform">
<i className="w-3.5 h-3.5 fill-current ml-0.5" data-lucide="play"></i>
</span>
                    Watch Launch
                </button>
</div>
</div>

<div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-surface-light overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-l lg:via-transparent lg:to-transparent opacity-80 z-10"></div>
<img alt="Ryan Brathwaite" className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-full h-full object-cover object-top z-0 grayscale-[20%] contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/025ac706-a47f-4641-921e-9260292db13d_1600w.png"/>

<div className="absolute bottom-8 right-6 lg:left-12 lg:right-auto bg-white/90 backdrop-blur-xl border border-white/50 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.06)] max-w-xs z-20 animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0">
<h3 className="font-display font-semibold text-xl tracking-tight text-surface-dark mb-2">For Us.</h3>
<p className="text-sm text-surface-neutral leading-relaxed">By Us. Rooted in the community. Ready to serve St. Joseph.</p>
</div>
</div>
</section>

<div className="bg-brand-red text-white py-6 overflow-hidden border-y border-brand-red relative z-20">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex gap-16 items-center px-8">
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">ST. JOSEPH <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">NOMINATION DAY</span>
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">COMMUNITY <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">INTEGRITY</span>
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">PROGRESS <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">YOUTH</span>
</div>

<div aria-hidden="true" className="flex gap-16 items-center px-8">
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">ST. JOSEPH <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">NOMINATION DAY</span>
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">COMMUNITY <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">INTEGRITY</span>
<span className="font-display font-bold text-2xl tracking-tight flex items-center gap-4">PROGRESS <i className="w-5 h-5 text-accent-yellow fill-accent-yellow" data-lucide="star"></i></span>
<span className="font-display font-medium text-2xl tracking-tight opacity-60">YOUTH</span>
</div>
</div>
</div>

<section className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-surface-offwhite" id="vision">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter text-surface-dark mb-6 leading-[1.1]">
                        The Plan for <br/>St. Joseph.
                    </h2>
<p className="text-lg text-surface-neutral leading-relaxed mb-10 text-balance">
                        We are moving beyond promises to practical, people-centred solutions. Ryan's vision focuses on what matters most to your daily life.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-surface-dark border-b border-surface-dark/20 pb-1 hover:border-brand-red hover:text-brand-red transition-all" href="#">
                        Download Full PDF
                        <i className="w-4 h-4" data-lucide="arrow-down-to-line"></i>
</a>
</div>
<div className="lg:col-span-7 space-y-20">

<div className="group">
<div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-8 bg-surface-light">
<div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
<span className="text-xs font-semibold tracking-widest uppercase text-surface-dark">Pillar 01</span>
</div>
<img alt="Infrastructure" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f810490-c936-46e7-9ff0-89d71a8a8a38_3840w.webp"/>
</div>
<h3 className="font-display text-3xl font-medium tracking-tight mb-4 text-surface-dark group-hover:text-brand-red transition-colors">Infrastructure &amp; Resilience</h3>
<p className="text-surface-neutral text-lg leading-relaxed">
                            Strengthening disaster preparedness, improving drainage systems, and ensuring every district road is safe, well-lit, and paved.
                        </p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-8 bg-surface-light">
<div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
<span className="text-xs font-semibold tracking-widest uppercase text-surface-dark">Pillar 02</span>
</div>
<img alt="Youth" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68ede32c-2209-4100-9dd0-915ed927a57b_3840w.jpg"/>
</div>
<h3 className="font-display text-3xl font-medium tracking-tight mb-4 text-surface-dark group-hover:text-brand-red transition-colors">Youth, Skills &amp; Enterprise</h3>
<p className="text-surface-neutral text-lg leading-relaxed">
                            Investing in youth programmes, modern skills training, and supporting local entrepreneurs to create decent work within the parish.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-surface-neutral/5" id="ask-ryan">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="inline-block px-3 py-1 bg-surface-light text-surface-dark border border-surface-neutral/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">Interactive Policy</span>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-surface-dark mb-6">Ask Ryan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-accent-yellow">AI</span></h2>
<p className="text-lg text-surface-neutral max-w-xl mx-auto">An intelligent assistant trained on Ryan’s manifesto and public record. Get instant answers about the future of St. Joseph.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-surface-offwhite rounded-[2rem] border border-surface-neutral/10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-[500px]">
<div className="p-6 border-b border-surface-neutral/5 flex items-center justify-between bg-white/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-dark text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<div className="font-display font-medium text-sm text-surface-dark">Ryan Assistant</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs text-surface-neutral">Online</span>
</div>
</div>
</div>
</div>
<div className="flex-1 p-6 space-y-6 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-surface-light to-surface-light">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-surface-dark text-white flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none border border-surface-neutral/5 shadow-sm text-sm text-surface-neutral max-w-[80%]">
                                Hello! I'm trained on Ryan's vision for St. Joseph.
                            </div>
</div>
<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-surface-light border border-surface-neutral/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-surface-neutral" data-lucide="user"></i>
</div>
<div className="bg-surface-dark text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
                                What is the plan for small businesses?
                            </div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-surface-dark text-white flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="flex gap-1.5 bg-white px-4 py-4 rounded-2xl rounded-tl-none border border-surface-neutral/5 shadow-sm w-16 items-center justify-center">
<div className="w-1.5 h-1.5 bg-surface-neutral/40 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-surface-neutral/40 rounded-full animate-bounce delay-75"></div>
<div className="w-1.5 h-1.5 bg-surface-neutral/40 rounded-full animate-bounce delay-150"></div>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-surface-neutral/5">
<div className="relative">
<input className="w-full bg-surface-light rounded-full pl-5 pr-12 py-3.5 text-sm outline-none focus:ring-1 focus:ring-brand-red/20 transition-shadow" placeholder="Type your question..." type="text"/>
<button className="absolute right-2 top-2 bottom-2 w-9 h-9 bg-brand-red rounded-full text-white flex items-center justify-center hover:bg-brand-dark transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<button className="flex-1 bg-surface-offwhite p-8 rounded-[2rem] text-left border border-surface-neutral/10 hover:border-brand-red/20 hover:shadow-lg hover:shadow-brand-red/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-surface-neutral/5 flex items-center justify-center text-brand-red mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-1" data-lucide="zap"></i>
</div>
<h4 className="font-display font-medium text-lg text-surface-dark mb-1">"Fixing our roads"</h4>
<p className="text-sm text-surface-neutral">Ask about the infrastructure resilience plan.</p>
</button>
<button className="flex-1 bg-surface-offwhite p-8 rounded-[2rem] text-left border border-surface-neutral/10 hover:border-brand-red/20 hover:shadow-lg hover:shadow-brand-red/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-surface-neutral/5 flex items-center justify-center text-brand-red mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-1" data-lucide="heart-handshake"></i>
</div>
<h4 className="font-display font-medium text-lg text-surface-dark mb-1">"Seniors Care"</h4>
<p className="text-sm text-surface-neutral">Ask about healthcare access and social support.</p>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-surface-offwhite overflow-hidden" id="meet-ryan">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-gradient-to-tr from-brand-red/20 to-accent-yellow/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
<img alt="Ryan Portrait" className="relative rounded-[2rem] shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700 ease-out z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbbc365a-bad5-4e3d-af95-7741d337022b_1600w.png"/>
<div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-xl z-20 max-w-[240px] hidden md:block border border-surface-neutral/5">
<div className="font-display text-5xl font-semibold text-brand-red mb-1">15+</div>
<div className="text-xs uppercase tracking-widest text-surface-neutral font-medium">Years of Service</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">The Candidate</span>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-surface-dark mb-8">Meet Ryan.</h2>
<p className="text-xl text-surface-neutral font-light mb-10 leading-relaxed text-balance">
                    Born and raised in St. Joseph, Ryan Brathwaite isn't just a politician—he is a community organizer, a policy expert, and a neighbour.
                </p>
<div className="space-y-8 mb-10">
<div className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-3.5 h-3.5 text-brand-red stroke-2" data-lucide="check"></i>
</div>
<div>
<h4 className="font-display text-lg font-medium text-surface-dark mb-1">Masters in Public Policy</h4>
<p className="text-surface-neutral text-sm">Specialized in Caribbean Development &amp; Infrastructure.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-3.5 h-3.5 text-brand-red stroke-2" data-lucide="check"></i>
</div>
<div>
<h4 className="font-display text-lg font-medium text-surface-dark mb-1">Community Council Chair</h4>
<p className="text-surface-neutral text-sm">Led the renovation of 3 community centres.</p>
</div>
</div>
</div>
<a className="group inline-flex items-center text-sm font-semibold uppercase tracking-widest text-surface-dark border-b border-surface-dark/20 pb-1 hover:border-brand-red hover:text-brand-red transition-all" href="#">
                    Read Full Bio
                    <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-surface-footer text-white px-6 md:px-12 lg:px-24" id="events">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter">Upcoming<br/>Events</h2>
<span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">Join the movement on the ground</span>
</div>
<div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="py-8 lg:py-0 lg:pr-12 group">
<div className="flex items-center justify-between mb-8">
<span className="bg-accent-yellow text-surface-dark text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Major</span>
<i className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="font-display text-7xl font-semibold text-brand-red mb-2">22</div>
<div className="text-xl font-light text-white/80 mb-6">November</div>
<h3 className="font-display text-2xl font-medium mb-2">Nomination Day</h3>
<p className="text-sm text-white/50 mb-8 font-mono">Grantley Adams Memorial School<br/>4:30 PM</p>
<button className="w-full py-3 bg-white text-surface-dark rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors">RSVP Now</button>
</div>

<div className="py-8 lg:py-0 lg:px-12 group">
<div className="flex items-center justify-between mb-8">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<i className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="font-display text-7xl font-semibold text-white/10 group-hover:text-white transition-colors mb-2">25</div>
<div className="text-xl font-light text-white/80 mb-6">November</div>
<h3 className="font-display text-2xl font-medium mb-2">Youth Town Hall</h3>
<p className="text-sm text-white/50 mb-8 font-mono">St. Elizabeth Village Centre<br/>6:00 PM</p>
<button className="w-full py-3 border border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-surface-dark transition-colors">Details</button>
</div>

<div className="py-8 lg:py-0 lg:pl-12 group">
<div className="flex items-center justify-between mb-8">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<i className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="font-display text-7xl font-semibold text-white/10 group-hover:text-white transition-colors mb-2">28</div>
<div className="text-xl font-light text-white/80 mb-6">November</div>
<h3 className="font-display text-2xl font-medium mb-2">Walkabout</h3>
<p className="text-sm text-white/50 mb-8 font-mono">Melvin Hill Start<br/>4:00 PM</p>
<button className="w-full py-3 border border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-surface-dark transition-colors">Join Us</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="font-display text-6xl md:text-8xl font-semibold tracking-tighter text-surface-dark mb-8 leading-[0.9]">
                Be The <br/> <span className="text-surface-neutral/20 hover:text-brand-red transition-colors duration-500 cursor-default">Difference.</span>
</h2>
<p className="text-xl text-surface-neutral font-light mb-12 max-w-2xl mx-auto">
                Campaigns are won when ordinary people come together. There is a place for you in this movement.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-10 py-4 bg-brand-red text-white rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-surface-dark transition-all hover:scale-105 shadow-xl shadow-brand-red/20 w-full sm:w-auto">Donate Now</button>
<button className="px-10 py-4 bg-white text-surface-dark border border-surface-neutral/20 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-surface-light transition-all w-full sm:w-auto">Volunteer</button>
</div>
</div>
</section>

<footer className="bg-surface-light pt-24 pb-12 px-6 border-t border-surface-neutral/10">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1">
<a className="font-display font-semibold text-2xl tracking-tighter text-surface-dark mb-4 block" href="#">Ryan Brathwaite</a>
<p className="text-sm text-surface-neutral">Candidate for St. Joseph.<br/>Barbados Labour Party.</p>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-surface-neutral/50 mb-6">Campaign</h4>
<ul className="space-y-4 text-sm font-medium text-surface-dark">
<li><a className="hover:text-brand-red transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Meet Ryan</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">News</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-surface-neutral/50 mb-6">Get Involved</h4>
<ul className="space-y-4 text-sm font-medium text-surface-dark">
<li><a className="hover:text-brand-red transition-colors" href="#">Volunteer</a></li>
<li><a className="hover:text-brand-red transition-colors flex items-center gap-2" href="#">Events <span className="bg-accent-yellow text-surface-dark text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Live</span></a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Donate</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-surface-neutral/50 mb-6">Connect</h4>
<ul className="space-y-4 text-sm font-medium text-surface-dark">
<li><a className="hover:text-brand-red transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Email Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-surface-neutral/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-surface-neutral/50">
<p>Authorized by the Committee to Elect Ryan Brathwaite.</p>
<div className="flex gap-6">
<a className="hover:text-surface-dark" href="#">Privacy</a>
<a className="hover:text-surface-dark" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
