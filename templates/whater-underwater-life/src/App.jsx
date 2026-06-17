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
      

<div className="fixed top-0 left-1/4 w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none animate-float z-0"></div>
<div className="fixed bottom-0 right-1/4 w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none animate-float-delayed z-0"></div>
<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] z-0 pointer-events-none"></div>

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-white">WHATER</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#concept">Concept</a>
<a className="hover:text-white transition-colors duration-300" href="#prototypes">Prototypes</a>
<a className="hover:text-white transition-colors duration-300" href="#business">Business Model</a>
</div>
<a className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all duration-300 tracking-tight" href="#contact">Partner With Us</a>
</div>
</nav>

<main className="relative z-10 pt-24 md:pt-32">

<section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-8 tracking-tight">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5"></iconify-icon>
<span>A New Paradigm in Hospitality</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight max-w-5xl">
                The Future of Resort Experiences <br className="hidden md:block"/> Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Underwater 🌊</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
                WHATER is a unique underwater-style pod experience designed to increase resort revenue, differentiate your property, and create unforgettable moments for your guests.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#030712] font-medium text-sm hover:bg-slate-200 transition-colors duration-300 tracking-tight" href="#concept">
                    View Concept
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full glass-card text-white font-medium text-sm hover:bg-white/5 transition-colors duration-300 tracking-tight flex items-center justify-center gap-2" href="#prototypes">
                    Try Prototypes
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24" id="concept">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">What is WHATER?</h2>
<div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 rounded-full"></div>
</div>
<div>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
                        WHATER is a compact, glass-based immersive experience placed securely inside resort premises that simulates the profound feeling of being underwater. It is specifically designed for short, premium sessions (5–10 minutes) that guests can seamlessly book during their stay, offering a moment of absolute tranquility.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 space-y-32" id="prototypes">

<div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Prototype 1: The Descent</h2>
<p className="text-base text-slate-400 font-light">An interactive visualization of the immersive pod environment inside.</p>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden border border-white/10 glass-card" id="prototype-container">
<div className="prototype-wrapper">

<div id="intro">
<div className="brand-logo">WHATER</div>
<div className="tagline">Underwater Pod Experience</div>
<div className="divider"></div>
<button className="startBtn-style" onclick="startExperience()">Begin Descent</button>
</div>

<div id="pod">
<canvas id="ocean"></canvas>

<div id="glass"></div>
<div id="rim"></div>
<div id="surface-flicker"></div>

<div id="seat">
<svg preserveaspectratio="xMidYMax meet" viewbox="0 0 900 260" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="seatGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0d1a2a" stop-opacity="0.95"></stop>
<stop offset="100%" stop-color="#060e1a" stop-opacity="1"></stop>
</lineargradient>
<lineargradient id="legGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#1a2a3a"></stop>
<stop offset="100%" stop-color="#0a1520"></stop>
</lineargradient>
</defs>
<rect fill="url(#legGrad)" height="180" opacity="0.92" rx="8" width="120" x="270" y="80"></rect>
<rect fill="url(#legGrad)" height="180" opacity="0.92" rx="8" width="120" x="510" y="80"></rect>
<ellipse cx="330" cy="100" fill="rgba(80,130,180,0.08)" rx="55" ry="12"></ellipse>
<ellipse cx="570" cy="100" fill="rgba(80,130,180,0.08)" rx="55" ry="12"></ellipse>
<rect fill="url(#seatGrad)" height="130" rx="10" width="540" x="180" y="130"></rect>
<rect fill="rgba(80,160,220,0.12)" height="4" rx="2" width="540" x="180" y="130"></rect>
<rect fill="#040c18" height="160" opacity="0.98" width="220" x="0" y="100"></rect>
<rect fill="#040c18" height="160" opacity="0.98" width="220" x="680" y="100"></rect>
<rect fill="#030a14" height="40" width="900" x="0" y="220"></rect>
</svg>
</div>
<div id="ambientText">
<p>Relax… observe the underwater world</p>
</div>
<div id="hud">
<div className="hud-label">Session depth · 8.5m</div>
<div id="timer">00:00</div>
<div id="depthBar"></div>
</div>
<div id="podBrand">WHATER</div>
<div id="complete">
<h2>Experience Complete</h2>
<p>Thank you for diving with us</p>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Prototype 2: Discover the Pod</h2>
<p className="text-base text-slate-400 font-light">A luxury beach resort pod discovery experience.</p>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden border border-white/10 glass-card" id="prototype2-container">
<div className="prototype2-wrapper">
<h2 className="sr-only">WHATER – A luxury beach resort pod discovery experience</h2>
<div id="scene2">
<canvas id="c2"></canvas>
</div>
<div id="vignette2"></div>
<div id="fade2"></div>
<div id="ui2">
<div id="brand2"><span className="name">WHATER</span></div>
<div id="discovery-text2"></div>
<div id="ending-text2"></div>
<button className="btn2" id="main-btn2"></button>
<div id="walk-hint2">walking simulation active</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Prototype 3: The Deep Immersion</h2>
<p className="text-base text-slate-400 font-light">A cinematic transition into the deep.</p>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden border border-white/10 glass-card" id="prototype3-container">
<div className="prototype3-wrapper">

<div className="wipe" id="p3-wipe"></div>

<div id="end-screen">
<p className="end-title">Experience Complete</p>
<p className="end-sub">You have observed the deep.</p>
<button className="restart-btn" onclick="p3Restart()">Begin Again</button>
</div>

<div className="scene active" id="scene1">
<div className="stars" id="p3-stars"></div>
<div className="horizon-water">
<div className="water-surface"></div>
<div className="reflection-lines" id="p3-refLines"></div>
</div>
<div className="platform"></div>
<div className="walkway">
<div className="walkway-edge left"></div>
<div className="walkway-edge right"></div>
</div>
<div className="pod-container" id="p3-pod">
<div className="pod-body">
<div className="pod-dome">
<div className="pod-interior">
<div className="seat-silhouette"></div>
</div>
</div>
<div className="pod-base"></div>
</div>
</div>
<div className="resort-label">Private Resort Platform</div>
<button className="cta-btn" id="p3-btn-enter" onclick="p3EnterPod()">Enter Pod</button>
</div>

<div className="scene" id="scene2-p3">
<div className="logo">WHATER</div>
<div className="outer-water-2"></div>
<div className="exterior-glow"></div>
<div className="glass-wall left"></div>
<div className="glass-wall right"></div>
<div className="glass-arch"></div>
<div className="seat-foreground">
<div className="armrest left"></div>
<div className="armrest right"></div>
<div className="legs">
<div className="leg"></div>
<div className="leg"></div>
</div>
<div className="seat-cushion"></div>
</div>
<div className="sit-text"><p>Prepare for descent.</p></div>
<button className="cta-btn" id="p3-btn-descend" onclick="p3Descend()" style={{display: 'none', bottom: '5%'}}>Submerge</button>
</div>

<div className="scene" id="scene3-p3">
<div className="ocean-bg"></div>
<div className="light-rays" id="p3-rays"></div>
<div id="p3-particles"></div>
<div id="p3-fishes"></div>
<div id="p3-kelps"></div>
<div className="pod-glass-overlay">
<div className="glass-frame-left"></div>
<div className="glass-frame-right"></div>
<div className="glass-frame-top"></div>
<div className="glass-frame-bottom"></div>
<div className="glass-line left"></div>
<div className="glass-line right"></div>
<div className="glass-sheen"></div>
</div>
<div className="seat-bottom-3">
<div className="arm-rests-3">
<div className="ar3"></div>
<div className="ar3"></div>
</div>
<div className="seat-base-3"></div>
</div>
<div className="experience-text"><p>Embrace the silence.</p></div>
<div className="timer-wrap" id="p3-timer-wrap">
<div className="timer-label">Session</div>
<div className="timer-value" id="p3-timer-val">00:30</div>
<div className="timer-bar-wrap">
<div className="timer-bar" id="p3-timer-bar"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Prototype 4: Market Validation</h2>
<p className="text-base text-slate-400 font-light">Interactive pricing and intent discovery screen.</p>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden border border-white/10 glass-card" id="prototype4-container">
<div className="prototype4-wrapper">

<div className="water-bg">
<canvas id="waterCanvas4"></canvas>
<div className="water-overlay"></div>
</div>

<div className="p4-screen active" id="s1-p4">
<div className="center-content">
<div className="counter-pill" style={{marginBottom: '2.25rem'}}>
<div className="counter-dot"></div>
<span id="counterLabel">27 people showed interest today</span>
</div>
<div className="brand-word">WHATER</div>
<div className="brand-sub">Underwater Pod Experience</div>
<div className="line"></div>
<p className="sub-text">
                                    A 10-minute underwater-style experience at a luxury resort.<br/>
                                    Limited sessions. Exclusive access.
                                </p>
<div style={{marginTop: '2.25rem'}}>
<button className="btn-primary" onclick="goTo4('s2-p4')">
                                        See experience
                                        <iconify-icon className="text-lg opacity-60" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p4-screen" id="s2-p4">
<div className="center-content">
<div className="step-dots">
<div className="step-dot done"></div>
<div className="step-dot active"></div>
<div className="step-dot"></div>
<div className="step-dot"></div>
</div>
<p className="experience-text" id="expText4">
                                    "Imagine sitting inside a glass pod…<br/>
                                    surrounded by gently moving water,<br/>
                                    light filtering down from above."
                                </p>
<div className="continue-btn-wrap" id="continueWrap4">
<div className="line"></div>
<button className="btn-primary" onclick="goTo4('s3-p4')">
                                        Continue
                                    </button>
</div>
</div>
</div>

<div className="p4-screen" id="s3-p4">
<div className="center-content">
<div className="step-dots">
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot active"></div>
<div className="step-dot"></div>
</div>
<p className="sub-text" style={{marginBottom: '0.25rem', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-dim)'}}>
                                    One-time pilot experience
                                </p>
<div className="price-tag">₹499</div>
<div className="price-label">per person · 10 minutes</div>
<div className="line"></div>
<p className="big-question" style={{fontSize: 'clamp(1.125rem,4vw,1.75rem)', marginBottom: '1.75rem'}}>
                                    Would you pay ₹499 for this?
                                </p>
<div className="glass-card" style={{padding: '1.25rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.625rem'}}>
<button className="btn-yes" onclick="choose4('yes')">
                                            Yes, I would
                                            <iconify-icon className="text-lg" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="btn-maybe" onclick="choose4('maybe')">
                                            Maybe — depends
                                        </button>
<button className="btn-no" onclick="choose4('no')">
                                            No, not for me
                                        </button>
</div>
<p style={{fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.875rem', textAlign: 'center', letterSpacing: '0.06em'}}>
                                        No payment needed · Just your intent
                                    </p>
</div>
</div>
</div>

<div className="p4-screen" id="s4-yes-p4">
<div className="center-content">
<div className="step-dots">
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot active"></div>
</div>
<div className="glass-card">
<div className="response-icon icon-yes">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="response-heading">You're in — almost.</div>
<div className="response-sub">
                                        We're planning a pilot launch soon. Drop your details<br/>and we'll reach you first.
                                    </div>
<div className="field-group">
<div>
<div className="field-label">Your name</div>
<input className="field-input" id="yes-name" placeholder="Arjun Sharma" type="text"/>
</div>
<div>
<div className="field-label">Instagram or email</div>
<input className="field-input" id="yes-contact" placeholder="@yourhandle or email@example.com" type="text"/>
</div>
</div>
<div style={{marginTop: '1.25rem', display: 'flex', justifyContent: 'center'}}>
<button className="btn-submit" onclick="submitResponse4('yes')">
                                            Notify me when ready
                                        </button>
</div>
</div>
</div>
</div>

<div className="p4-screen" id="s4-maybe-p4">
<div className="center-content">
<div className="step-dots">
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot active"></div>
</div>
<div className="glass-card">
<div className="response-icon icon-maybe">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="response-heading">Fair enough.</div>
<div className="response-sub">
                                        What would make it worth ₹499 for you?
                                    </div>
<div className="field-group">
<div>
<div className="field-label">Tell us honestly</div>
<textarea className="field-input" id="maybe-text" placeholder="Longer duration, group option, more visuals..."></textarea>
</div>
</div>
<div style={{marginTop: '1.25rem', display: 'flex', justifyContent: 'center'}}>
<button className="btn-submit" onclick="submitResponse4('maybe')">
                                            Share feedback
                                        </button>
</div>
</div>
</div>
</div>

<div className="p4-screen" id="s4-no-p4">
<div className="center-content">
<div className="step-dots">
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot done"></div>
<div className="step-dot active"></div>
</div>
<div className="glass-card">
<div className="response-icon icon-no">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="response-heading">Totally fair.</div>
<div className="response-sub">
                                        What would change your mind? Your honest take<br/>helps us build something people actually want.
                                    </div>
<div className="field-group">
<div>
<div className="field-label">What would make this a yes?</div>
<textarea className="field-input" id="no-text" placeholder="Lower price, different concept, location matters..."></textarea>
</div>
</div>
<div style={{marginTop: '1.25rem', display: 'flex', justifyContent: 'center'}}>
<button className="btn-submit" onclick="submitResponse4('no')">
                                            Share feedback
                                        </button>
</div>
</div>
</div>
</div>

<div className="p4-screen" id="s5-p4">
<div className="center-content">
<div className="glass-card">
<div className="thank-you-check">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p style={{fontSize: '1.125rem', fontWeight: '400', color: 'var(--text-bright)', marginBottom: '0.5rem'}}>
                                        Thank you
                                    </p>
<p style={{fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem'}}>
                                        Your response helps us build<br/>something genuinely special.
                                    </p>
<div className="line" style={{margin: '1rem auto'}}></div>
<div className="counter-pill" style={{justifyContent: 'center'}}>
<div className="counter-dot"></div>
<span id="finalCounter4">28 people responded today</span>
</div>
<p style={{fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '1.25rem', letterSpacing: '0.1em'}}>
                                        WHATER · Pilot Experience 2025
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="business">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Zero Friction. <br className="md:hidden" />Pure Upside.</br></h2>
<p className="text-base text-slate-400 font-light">A seamless partnership model designed for premium properties.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Turnkey Installation</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        WHATER handles the complete installation, integration, and ongoing technical maintenance. Zero operational headache for your staff.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
</div></div></section></main>
    </>
  );
}
