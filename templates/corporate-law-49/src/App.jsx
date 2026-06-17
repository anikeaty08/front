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



        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Text Split Animation Utility (Custom implementation to avoid external premium plugins)
            const splitTextElements = document.querySelectorAll('.js-split-text');
            
            splitTextElements.forEach(el => {
                const text = el.innerText;
                // Preserve HTML structure if it contains spans (like gradient text)
                if(el.children.length > 0) {
                     // For simplicity in this demo, we only split pure text nodes.
                     // The hero has a span, so we apply fade up to it instead of letter split to keep HTML intact.
                     // We'll just do a simpler reveal for complex HTML elements.
                } else {
                    el.innerHTML = text.split('').map(char => {
                        if (char === ' ') return '&nbsp;';
                        if (char === '\n') return '<br>';
                        return `<span class="char-wrap"><span class="char">${char}</span></span>`;
                    }).join('');
                }
            });

            // Animate Split Text on Scroll
            document.querySelectorAll('.js-split-text').forEach(el => {
                const chars = el.querySelectorAll('.char');
                if(chars.length > 0) {
                    gsap.to(chars, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                        y: "0%",
                        opacity: 1,
                        duration: 0.8,
                        ease: "power4.out",
                        stagger: 0.02
                    });
                } else {
                    // Fallback for complex elements (like Hero with gradient span)
                    gsap.fromTo(el, 
                        { y: 50, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
                        {
                            scrollTrigger: { trigger: el, start: "top 90%" },
                            y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)',
                            duration: 1, ease: "power4.out"
                        }
                    );
                }
            });

            // Fade Up Elements
            gsap.utils.toArray('.js-fade-up').forEach(el => {
                gsap.fromTo(el, 
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: { trigger: el, start: "top 90%" },
                        y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2
                    }
                );
            });

            // 2. Spotlight Card Effect (Flashlight)
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // 3. Sliced Image Parallax Effect (WebGL alternative)
            const slicedContainers = document.querySelectorAll('.js-sliced-bg');
            
            slicedContainers.forEach(container => {
                const imgSrc = container.getAttribute('data-img');
                const cols = 4;
                
                // Inject columns
                for(let i = 0; i < cols; i++) {
                    const slice = document.createElement('div');
                    slice.className = 'slice';
                    slice.style.width = `${100 / cols}%`;
                    slice.style.left = `${(100 / cols) * i}%`;
                    slice.style.backgroundImage = `url(${imgSrc})`;
                    // Shift background position so they align to form full image
                    slice.style.backgroundPositionX = `${(100 / (cols - 1)) * i}%`;
                    
                    // Add subtle motion blur filter conditionally if performance allows, 
                    // skipping CSS blur for smoother standard render as requested "degrade gracefully"
                    
                    container.appendChild(slice);
                }

                const slices = container.querySelectorAll('.slice');
                
                // Outer columns (0, 3) lag behind, Inner columns (1, 2) race ahead
                gsap.to(slices[0], {
                    yPercent: -15, ease: "none",
                    scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true }
                });
                gsap.to(slices[3], {
                    yPercent: -15, ease: "none",
                    scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true }
                });
                
                gsap.to(slices[1], {
                    yPercent: 15, ease: "none",
                    scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true }
                });
                gsap.to(slices[2], {
                    yPercent: 15, ease: "none",
                    scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true }
                });

                // On scroll stop, snap to alignment (Simulated by transitioning back to 0 temporarily)
                let scrollTimeout;
                window.addEventListener('scroll', () => {
                    clearTimeout(scrollTimeout);
                    container.classList.add('scrolling');
                    scrollTimeout = setTimeout(() => {
                        // Snap effect - gently ease back to alignment, then revert to scrub position
                        // To keep it clean and performant in standard DOM, the scrub handles the main parallax.
                        // A true physical snap without disrupting scroll position is complex without WebGL.
                        // We rely on the natural elegance of the staggered GSAP scrub here.
                    }, 150);
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
      

<div className="fixed inset-0 pointer-events-none flex justify-center z-[-1]">
<div className="w-full max-w-7xl px-6 flex justify-between h-full">
<div className="w-[1px] h-full bg-[#1A3A8F]/20"></div>
<div className="w-[1px] h-full bg-[#1A3A8F]/10 hidden md:block"></div>
<div className="w-[1px] h-full bg-[#1A3A8F]/10 hidden lg:block"></div>
<div className="w-[1px] h-full bg-[#1A3A8F]/20"></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A1A]/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#C0001D] flex items-center justify-center text-white sonar-pulse">
<iconify-icon icon="solar:scale-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tighter text-lg group-hover:text-[#D4D4D4] transition-colors">P&amp;V</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#attorneys">Attorneys</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="text-sm font-semibold text-white px-5 py-2.5 rounded-full btn-beam" href="#contact">
<span className="relative z-10">Consultation</span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 sliced-image-container js-sliced-bg" data-img="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">

</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A3A8F]/40 bg-[#1A3A8F]/10 text-[#D4D4D4] text-xs font-mono mb-8">
<span className="w-2 h-2 rounded-full bg-[#C0001D] animate-pulse"></span>
                    Accepting New Corporate Clients
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] mb-6 js-split-text">
                    Relentless pursuit.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0001D] to-[#1A3A8F]">Absolute defense.</span>
</h1>
<p className="text-base md:text-lg max-w-xl text-[#D4D4D4] mb-10 js-fade-up">
                    We engineer legal strategies for high-stakes corporate litigation, IP defense, and complex civil disputes. When losing is not an option, we are your first call.
                </p>
<div className="flex flex-col sm:flex-row gap-4 js-fade-up">
<a className="inline-flex items-center justify-center gap-2 bg-[#C0001D] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#A00018] transition-colors" href="#contact">
                        Secure Representation
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors" href="#expertise">
                        Explore Practice Areas
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0A0A1A]/50 relative z-10">
<div className="max-w-7xl mx-auto px-6 mb-4">
<p className="text-xs font-mono text-center text-[#1A3A8F]">TRUSTED BY FORTUNE 500 INNOVATORS</p>
</div>
<div className="mask-edges overflow-hidden">
<div className="animate-marquee items-center gap-16 text-white/30">

<iconify-icon icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:sony" width="64"></iconify-icon>

<iconify-icon icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 relative" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-[#C0001D] font-mono text-sm mb-4 block">01 // EXPERTISE</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight js-split-text">Precision in every<br/>practice area.</h2>
</div>
<p className="max-w-md text-sm text-[#D4D4D4]">Our multidisciplinary approach ensures comprehensive protection across corporate restructuring, litigation, and regulatory compliance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="spotlight-card rounded-2xl p-8 group">
<div className="spotlight-content flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-[#1A3A8F]/20 flex items-center justify-center text-[#1A3A8F] mb-8 group-hover:text-[#C0001D] group-hover:bg-[#C0001D]/10 transition-colors">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Corporate Litigation</h3>
<p className="text-sm text-[#D4D4D4]/80 flex-grow mb-8">Defending enterprises in high-stakes shareholder disputes, antitrust violations, and breach of contract allegations.</p>
<div className="flex items-center justify-between text-xs font-mono text-[#1A3A8F]">
<span>Learn more</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl p-8 group">
<div className="spotlight-content flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-[#1A3A8F]/20 flex items-center justify-center text-[#1A3A8F] mb-8 group-hover:text-[#C0001D] group-hover:bg-[#C0001D]/10 transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Intellectual Property</h3>
<p className="text-sm text-[#D4D4D4]/80 flex-grow mb-8">Aggressive enforcement of patents, trademarks, and trade secrets to protect your market dominance.</p>
<div className="flex items-center justify-between text-xs font-mono text-[#1A3A8F]">
<span>Learn more</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl p-8 group">
<div className="spotlight-content flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-[#1A3A8F]/20 flex items-center justify-center text-[#1A3A8F] mb-8 group-hover:text-[#C0001D] group-hover:bg-[#C0001D]/10 transition-colors">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Business Immigration</h3>
<p className="text-sm text-[#D4D4D4]/80 flex-grow mb-8">Navigating complex international workforce mobility, investor visas, and multinational executive transfers.</p>
<div className="flex items-center justify-between text-xs font-mono text-[#1A3A8F]">
<span>Learn more</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="h-[50vh] w-full sliced-image-container js-sliced-bg border-y border-white/10" data-img="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">

<div className="absolute inset-0 bg-[#0A0A1A]/40 mix-blend-multiply z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20 mix-blend-overlay opacity-50">
<iconify-icon className="text-white" icon="solar:scale-linear" width="200"></iconify-icon>
</div>
</div>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<span className="text-[#C0001D] font-mono text-sm mb-4 block">02 // METHODOLOGY</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight js-split-text mb-16">The architecture<br/>of victory.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#1A3A8F]/50 to-transparent"></div>
<div className="relative pt-8">
<div className="w-12 h-12 rounded-full bg-[#0A0A1A] border border-[#1A3A8F] flex items-center justify-center text-white font-mono absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 md:-top-6 z-10">01</div>
<h4 className="text-lg font-medium mb-3 mt-4 md:mt-0 md:text-center text-white">Discovery &amp; Audit</h4>
<p className="text-sm text-[#D4D4D4]/70 md:text-center">Forensic analysis of your legal standing, identifying vulnerabilities and strategic leverage points.</p>
</div>
<div className="relative pt-8">
<div className="w-12 h-12 rounded-full bg-[#0A0A1A] border border-[#1A3A8F] flex items-center justify-center text-white font-mono absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 md:-top-6 z-10">02</div>
<h4 className="text-lg font-medium mb-3 mt-4 md:mt-0 md:text-center text-white">Tactical Formulation</h4>
<p className="text-sm text-[#D4D4D4]/70 md:text-center">Development of aggressive defense mechanisms or offensive litigation strategies customized to your goals.</p>
</div>
<div className="relative pt-8">
<div className="w-12 h-12 rounded-full bg-[#C0001D] text-white flex items-center justify-center font-mono absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 md:-top-6 z-10 shadow-[0_0_20px_rgba(192,0,29,0.4)]">03</div>
<h4 className="text-lg font-medium mb-3 mt-4 md:mt-0 md:text-center text-white">Execution &amp; Resolution</h4>
<p className="text-sm text-[#D4D4D4]/70 md:text-center">Ruthless execution in the courtroom or negotiation table to secure maximum favorable outcomes.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0A0A1A]" id="attorneys">
<div className="max-w-7xl mx-auto px-6">
<span className="text-[#C0001D] font-mono text-sm mb-4 block">03 // LEADERSHIP</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight js-split-text mb-16">Legal minds that<br/>shape industries.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="w-full h-[500px] rounded-2xl overflow-hidden mb-6 relative sliced-image-container js-sliced-bg border border-white/5" data-img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-transparent to-transparent z-10"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium text-white mb-1">Jonathan Vance</h3>
<p className="text-sm text-[#1A3A8F] font-mono">MANAGING PARTNER / LITIGATION</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full h-[500px] rounded-2xl overflow-hidden mb-6 relative sliced-image-container js-sliced-bg border border-white/5" data-img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-transparent to-transparent z-10"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium text-white mb-1">Eleanor Parker</h3>
<p className="text-sm text-[#1A3A8F] font-mono">SENIOR PARTNER / CORPORATE</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-y border-white/5 bg-[#0A0A1A]/80 backdrop-blur-sm" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-[#C0001D] font-mono text-sm mb-4 block">04 // TRACK RECORD</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight js-split-text mb-6">Proven in<br/>the arena.</h2>
<p className="text-sm text-[#D4D4D4] mb-8">Numbers speak louder than promises. Our track record of securing dismissals, winning appeals, and recovering assets is unmatched.</p>
<div className="space-y-6">
<div className="border-l-2 border-[#C0001D] pl-4">
<div className="text-3xl font-semibold text-white mb-1">$4.2B+</div>
<div className="text-xs font-mono text-[#D4D4D4]/60">ASSETS RECOVERED</div>
</div>
<div className="border-l-2 border-[#1A3A8F] pl-4">
<div className="text-3xl font-semibold text-white mb-1">98%</div>
<div className="text-xs font-mono text-[#D4D4D4]/60">CASE SUCCESS RATE</div>
</div>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="spotlight-card p-8 rounded-2xl flex flex-col justify-between">
<iconify-icon className="text-[#1A3A8F] mb-6 opacity-50" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-sm text-white/90 leading-relaxed mb-8">"When our intellectual property was threatened by a foreign competitor, Parker &amp; Vance didn't just defend us; they dismantled the opposition entirely. Their strategic foresight is terrifying to face, but incredible to have on your side."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-10 h-10 rounded-full grayscale object-cover border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Marcus Chen</div>
<div className="text-xs text-[#D4D4D4]/60 font-mono">CEO, TechNova Systems</div>
</div>
</div>
</div>
<div className="spotlight-card p-8 rounded-2xl flex flex-col justify-between md:translate-y-8">
<iconify-icon className="text-[#1A3A8F] mb-6 opacity-50" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-sm text-white/90 leading-relaxed mb-8">"In the middle of a complex restructuring and hostile takeover attempt, this firm provided clarity and an impenetrable legal shield. They operate at a level of precision I've rarely seen in any professional service."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-10 h-10 rounded-full grayscale object-cover border border-white/20" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Sarah Jenkins</div>
<div className="text-xs text-[#D4D4D4]/60 font-mono">BOARD DIRECTOR, AXIOM CORP</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#C0001D] font-mono text-sm mb-4 block">05 // INTELLIGENCE</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Common inquiries.</h2>
</div>
<div className="space-y-4">

<details className="group border border-white/10 rounded-xl bg-[#0A0A1A] overflow-hidden marker:content-['']">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:bg-white/[0.02]">
                        What is your retainer structure for corporate clients?
                        <span className="transition group-open:rotate-180 text-[#1A3A8F]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#D4D4D4]/70 leading-relaxed border-t border-white/5 pt-4">
                        We operate on custom retainer models scaled to the complexity of your enterprise. Standard corporate retainers begin at $15,000/month, ensuring priority access to our senior partners and rapid-response litigation teams.
                    </div>
</details>
<details className="group border border-white/10 rounded-xl bg-[#0A0A1A] overflow-hidden marker:content-['']">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:bg-white/[0.02]">
                        Do you handle international arbitration?
                        <span className="transition group-open:rotate-180 text-[#1A3A8F]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#D4D4D4]/70 leading-relaxed border-t border-white/5 pt-4">
                        Yes. Our firm has dedicated partners licensed in multiple jurisdictions and extensive experience in ICC, LCIA, and UNCITRAL arbitration proceedings across Europe and Asia.
                    </div>
</details>
<details className="group border border-white/10 rounded-xl bg-[#0A0A1A] overflow-hidden marker:content-['']">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:bg-white/[0.02]">
                        How quickly can you deploy a crisis management team?
                        <span className="transition group-open:rotate-180 text-[#1A3A8F]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#D4D4D4]/70 leading-relaxed border-t border-white/5 pt-4">
                        For retained clients, our critical response team is available 24/7 and can deploy legal injunctions, media gag orders, or regulatory defense structures within hours of notification.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5" id="contact">

<div className="absolute inset-0 z-0 opacity-30 sliced-image-container js-sliced-bg" data-img="https://images.unsplash.com/photo-1505664177922-964201083cca?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">

</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A] to-transparent z-10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-[#0A0A1A] border border-[#C0001D]/50 flex items-center justify-center text-[#C0001D] mb-8 shadow-[0_0_30px_rgba(192,0,29,0.2)]">
<iconify-icon icon="solar:shield-warning-linear" width="32"></iconify-icon>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 js-split-text">Secure your<br/>advantage.</h2>
<p className="text-base text-[#D4D4D4] max-w-xl mx-auto mb-10">Confidential consultations available for corporate executives, board members, and enterprise counsel.</p>
<a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-semibold text-white btn-beam" href="mailto:contact@parkervance.com">
<span className="relative z-10 flex items-center gap-2">
                    Initiate Contact
                    <iconify-icon icon="solar:lock-password-unlocked-linear" width="20"></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="bg-[#0A0A1A] border-t border-white/10 pt-16 pb-8 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded-full bg-[#1A3A8F] flex items-center justify-center text-white">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tighter text-base">PARKER &amp; VANCE</span>
</a>
<p className="text-xs text-[#D4D4D4]/60 max-w-sm mb-6">Premium legal counsel for entities that dictate the future. Specializing in high-stakes corporate defense and litigation.</p>
</div>
<div>
<h5 className="text-white text-xs font-mono mb-4">PRACTICES</h5>
<ul className="space-y-3 text-sm text-[#D4D4D4]/70">
<li><a className="hover:text-white transition-colors" href="#">Corporate Litigation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Intellectual Property</a></li>
<li><a className="hover:text-white transition-colors" href="#">Antitrust Defense</a></li>
<li><a className="hover:text-white transition-colors" href="#">Business Immigration</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-mono mb-4">OFFICES</h5>
<ul className="space-y-3 text-sm text-[#D4D4D4]/70">
<li>New York, NY</li>
<li>Washington, D.C.</li>
<li>London, UK</li>
<li className="pt-2"><a className="text-[#C0001D] hover:text-[#A00018] transition-colors" href="#">contact@parkervance.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-[#D4D4D4]/40">
<p>© 2024 Parker &amp; Vance LLP. Attorney Advertising.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
