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
accent: '#FF3B00',
surface: '#0F0F0F',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 2s ease-in-out infinite',
'dash': 'dash 20s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-33.333%)' },
},
scan: {
'0%': { top: '-20%' },
'100%': { top: '120%' },
},
blink: {
'0%, 100%': { opacity: 1 },
'50%': { opacity: 0.3 },
},
dash: {
to: { 'stroke-dashoffset': '1000' }
}
}
}
}
}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        // Lenis + Skew
        const lenis = new Lenis({ lerp: 0.1, smooth: true, direction: 'vertical' });
        let currentSkew = 0;
        function raf(time) {
            lenis.raf(time);
            const skewTarget = lenis.velocity * 0.1; 
            currentSkew += (skewTarget - currentSkew) * 0.1;
            const clampedSkew = Math.max(Math.min(currentSkew, 5), -5);
            document.querySelectorAll('.skew-target').forEach(el => { el.style.transform = `skewY(${clampedSkew}deg)`; });
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Spotlight
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Scramble
        class ScrambleText {
            constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}—=+*^?#________'; this.update = this.update.bind(this); }
            setText(newText) {
                const oldText = this.el.innerText; const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve); this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || ''; const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40); const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest); this.frame = 0; this.update(); return promise;
            }
            update() {
                let output = ''; let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) { complete++; output += to; }
                    else if (this.frame >= start) { if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; } output += `<span class="opacity-50">${char}</span>`; }
                    else { output += from; }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) { this.resolve(); }
                else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
            }
            randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
        }
        const scrambleElements = document.querySelectorAll('.scramble-text');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { const el = entry.target; const fx = new ScrambleText(el); fx.setText(el.innerText); observer.unobserve(el); } });
        }, { threshold: 0.5 });
        scrambleElements.forEach(el => observer.observe(el));

        // Magnetic Buttons
        const buttons = document.querySelectorAll('.btn-magnetic');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
            });
            btn.addEventListener('mouseleave', () => { gsap.to(btn, { x: 0, y: 0, duration: 0.2 }); });
        });

        // GSAP
        gsap.registerPlugin(ScrollTrigger);

        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 90.00,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 0.01 },
                scrollTrigger: { trigger: counter, start: "top 85%", once: true },
                onUpdate: function() { this.targets()[0].innerHTML = parseFloat(this.targets()[0].textContent).toFixed(2); }
            });
        }

        const stepItems = document.querySelectorAll('.step-item');
        stepItems.forEach((item) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item, start: "top 80%", end: "bottom center",
                    onEnter: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeave: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                    onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeaveBack: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                }
            });
        });

        gsap.utils.toArray('.glass-panel').forEach((panel, i) => {
            gsap.from(panel, {
                scrollTrigger: { trigger: panel, start: "top 90%" },
                y: 30, opacity: 0, duration: 0.8, delay: i * 0.05, ease: "power3.out"
            });
        });

        // DIY Helper Logic
        const diyMap = {
            battery: {
                title: "Battery / no crank",
                risk: "Low–Medium",
                steps: ["Check terminals for corrosion", "Try jump-start", "If it dies again, battery or alternator"],
                action: "Try jump & inspect. Book if no start after jump."
            },
            brakes: {
                title: "Brake squeal",
                risk: "Medium",
                steps: ["Inspect pad thickness", "Check rotor grooves", "Avoid driving if grinding"],
                action: "If grinding, stop driving and book brakes."
            },
            tire: {
                title: "Flat tire",
                risk: "Low",
                steps: ["Use spare & jack on solid ground", "Set parking brake", "Torque lugs properly"],
                action: "If sidewall damage, tow recommended."
            },
            ac: {
                title: "AC warm",
                risk: "Low",
                steps: ["Check cabin filter", "Look for leaks/dye", "Compressor engagement?"],
                action: "Recharge can help; book if no cooling."
            },
            engine: {
                title: "Check Engine light",
                risk: "Medium",
                steps: ["Read codes (OBD-II)", "Note drivability issues", "Avoid heavy load"],
                action: "If flashing light, stop and book tow."
            }
        };
        function renderDIY() {
            const issue = document.getElementById('diy-issue')?.value;
            const tools = document.getElementById('diy-tools')?.value;
            const out = document.getElementById('diy-result');
            if (!issue || !diyMap[issue]) { out.innerHTML = '<div class="text-sm text-gray-400">Your guide will appear here.</div>'; return; }
            const data = diyMap[issue];
            const toolNote = tools === 'basic' ? "Minimal tools" : tools === 'kit' ? "Toolkit ready" : "Toolkit + OBD‑II";
            out.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="text-white font-display font-semibold text-lg tracking-tight">${data.title}</div>
                    <div class="text-[10px] font-mono text-accent border border-accent/30 px-2 py-0.5 rounded">${data.risk} risk</div>
                </div>
                <ul class="mt-3 space-y-2 text-sm text-gray-300">${data.steps.map(s=>`<li class="flex gap-2 items-start"><span class="iconify lucide text-accent" data-icon="lucide:check" data-width="16" data-height="16"></span><span>${s}</span></li>`).join('')}</ul>
                <div class="mt-4 text-xs text-gray-400 font-mono">Tools: ${toolNote}</div>
                <div class="mt-3 p-3 bg-white/5 rounded border border-white/10 text-sm text-white">${data.action}</div>
                <a href="tel:+18005551234" class="mt-4 inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors">
                    <span class="iconify lucide" data-icon="lucide:phone" data-width="16" data-height="16"></span>
                    Call for Booking
                </a>
            `;
            // Re-scan icons after dynamic render
            if (window.Iconify) { Iconify.scan(out); }
        }
        document.getElementById('diy-issue')?.addEventListener('change', renderDIY);
        document.getElementById('diy-tools')?.addEventListener('change', renderDIY);

        // Diagnostic form (demo)
        document.querySelector('#diagnostic form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks! A specialist will contact you shortly.');
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
      

<div className="fixed inset-0 bg-[#050505] -z-50"></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div>
</div>

<div className="noise-overlay"></div>

<nav className="fixed z-50 bg-[#050505]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a aria-label="motyFIX Home" className="group hover-trigger" href="#">
<span className="font-display font-semibold text-xl tracking-tighter text-white group-hover:text-accent transition-colors">moty<span className="text-accent group-hover:text-white transition-colors">FIX</span></span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
<a className="hover:text-white transition-colors hover-trigger" href="#services">[01] SERVICES</a>
<a className="hover:text-white transition-colors hover-trigger" href="#mechanics">[02] MECHANICS</a>
<a className="hover:text-white transition-colors hover-trigger" href="#guides">[03] GUIDES</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden lg:block text-[10px] font-mono text-green-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    24/7 ONLINE
                </span>
<button className="border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all hover-trigger btn-magnetic">
                    Sign In
                </button>
</div>
</div>
</nav>
<main className="">

<section className="skew-target relative min-h-screen w-full flex items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="bg-center w-full bg-[url(https://images.unsplash.com/photo-1622033190070-a16b74983c10?w=3840&amp;q=80)] max-w-7xl bg-cover z-20 mr-auto ml-auto pt-28 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

<div className="bg-center text-left">
<div className="inline-flex items-center gap-3 border-2 border-white/20 bg-white/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
<span className="text-[10px] text-accent uppercase text-neutral-50 tracking-widest font-mono scale-75">24/7 Roadside &amp; Repair</span>
</div>
<h1 className="leading-[0.95] scramble-text bg-center md:text-7xl text-5xl font-semibold text-slate-50 tracking-tight font-display mb-6">
                            Mechanic on‑demand. <br/> Anywhere, anytime.
                        </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 max-w-xl mb-8">
                            Book a pro in minutes. Fast diagnostics. Fair pricing.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="uppercase hover:bg-white transition-all hover-trigger btn-magnetic flex items-center justify-center gap-2 sm:w-auto text-sm font-semibold text-red-500 tracking-widest bg-gray-50 w-full rounded pt-4 pr-8 pb-4 pl-8" href="/tel:+25472528504">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="20" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Call for Booking
                            </a>
<a className="uppercase hover:bg-white/10 transition-all hover-trigger sm:w-auto btn-magnetic flex items-center justify-center gap-2 text-sm font-semibold text-white tracking-widest w-full border-white/20 border-2 rounded pt-4 pr-8 pb-4 pl-8" href="#diagnostic">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="20" data-icon="lucide:crosshair" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
                                Instant Diagnostics
                            </a>
</div>
<div className="flex gap-3 bg-center text-xs text-stone-900 font-mono bg-[url(https://images.unsplash.com/photo-1529369623266-f5264b696110?w=800&amp;q=80)] bg-cover mt-6 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            ETA ~30–60 min in metro areas
                        </div>
</div>

<aside className="glass-panel spotlight-card rounded-xl overflow-hidden relative" id="diagnostic">
<form action="#" aria-label="Diagnostic intake form" className="sm:p-8 grid grid-cols-1 gap-4 border-orange-600/10 border-2 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" method="post">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-semibold tracking-tight font-display translate-x-16">Quick Diagnostic</h2>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">FREE</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Name</span>
<input className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="name" placeholder="Your name" required="" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Phone</span>
<input className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="phone" placeholder="+1 (___) ___‑____" required="" type="tel"/>
</label>
</div>
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Vehicle</span>
<input className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="vehicle" placeholder="Make / Model / Year" required="" type="text"/>
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">ZIP / Location</span>
<input className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="zip" placeholder="ZIP or city" required="" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Urgency</span>
<select className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="urgency">
<option className="bg-[#0a0a0a]">Normal</option>
<option className="bg-[#0a0a0a]">Urgent</option>
<option className="bg-[#0a0a0a]">Emergency</option>
</select>
</label>
</div>
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Describe the issue</span>
<textarea className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-orange-600/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" name="issue" placeholder="e.g., brake squeal, no crank, AC warm..." rows="3"></textarea>
</label>
<button className="uppercase hover:bg-white transition-colors btn-magnetic flex text-sm font-semibold text-black tracking-wider bg-red-500 rounded mt-2 px-6 py-3 gap-x-2 gap-y-2 items-center justify-center" type="submit">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="20" data-icon="lucide:stethoscope" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
                                Get Free Quote
                            </button>
<p className="text-[10px] text-gray-500 font-mono mt-1">No spam. We only use your info to confirm your booking.</p>
</form>
</aside>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#080808] py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ASE CERTIFIED</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">OEM PARTS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">BRAKES</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ENGINE</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">DIAGNOSTICS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">HYBRID</span>
</div>
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ASE CERTIFIED</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">OEM PARTS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">BRAKES</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ENGINE</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">DIAGNOSTICS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">HYBRID</span>
</div>
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ASE CERTIFIED</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">OEM PARTS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">BRAKES</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">ENGINE</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">DIAGNOSTICS</span>
<span className="font-display font-semibold text-2xl text-white/30 hover:text-white transition-colors">HYBRID</span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div className="">
<span className="text-accent block -translate-y-16 text-xs tracking-widest font-mono mb-2">/// CORE REPAIR SERVICES</span>
<h2 className="font-display font-semibold text-white text-4xl md:text-5xl scramble-text tracking-tight">What we fix</h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-green-500 rounded-full animate-blink"></span>
<span className="font-mono text-xs text-white">SLOTS: LIVE</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Technicians Online: 320+
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<article className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group border-2 border-white/10">
<div className="scan-line"></div>
<img alt="Roadside assistance" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523981766672-1e1c1df97c31?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-[url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6 border-2 border-white/20 bg-black/50 px-3 py-1 rounded text-[10px] font-mono text-accent">EMERGENCY</div>
<div className="bg-center text-stone-950 w-full bg-[url(https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=800&amp;q=80)] bg-cover z-10 pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 scale-100" style={{maskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="w-10 h-10 bg-accent flex items-center justify-center mb-4 text-black font-semibold rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="22" data-icon="lucide:life-buoy" data-icon-replaced="true" data-icon-set="lucide" data-lucide="life-buoy" data-width="22" fill="none" height="22" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-white font-display mb-2">Roadside Assist</h3>
<p className="text-sm text-gray-300 max-w-sm">Towing, jump-start, lockout, flat tire.</p>
</div>
</article>

<article className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between border-2 border-white/10">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase flex items-center gap-2"><svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:disc-3" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path><circle cx="12" cy="12" r="2"></circle><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path></g></svg> Brakes</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="text-center py-2">
<div className="text-3xl font-display font-semibold text-white">Same‑Day</div>
<div className="text-[10px] text-gray-500 mt-1">Pads • Rotors • Fluid</div>
</div>
</article>

<article className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden border-2 border-white/10">
<div className="flex items-center gap-2 text-white mb-2">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:gauge" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-display font-semibold text-sm">Engine</span>
</div>
<div className="relative h-12 overflow-hidden font-mono text-[9px] text-gray-600 leading-relaxed">
<div className="animate-[marquee_5s_linear_infinite_reverse] flex flex-col">
<span>OBD-II • Misfire • Sensors</span>
<span>Timing • Cooling • Fuel</span>
<span>Gaskets • Belts • Pumps</span>
<span>Check Engine • Smoke</span>
</div>
</div>
<div className="text-[10px] text-accent mt-2 flex items-center gap-1">
<span className="w-1 h-1 bg-accent rounded-full"></span> Full Diagnostics
                        </div>
</article>

<article className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between border-2 border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase flex items-center gap-2"><svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:battery-charging" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Battery</span>
<svg aria-hidden="true" className="iconify lucide text-white iconify--lucide" data-height="16" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-grow flex items-center">
<div className="w-full bg-white/10 h-16 rounded flex items-end px-1 gap-1">
<div className="w-1/5 bg-accent/20 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-accent/40 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-accent/60 h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-accent/80 h-[80%] rounded-sm"></div>
<div className="w-1/5 bg-accent h-[50%] rounded-sm"></div>
</div>
</div>
<div className="text-right text-[10px] text-white font-mono mt-2">Test • Replace</div>
</article>

<article className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group border-2 border-white/10">
<div className="absolute inset-0 bg-accent/5 z-0"></div>
<div className="z-10 flex flex-col h-full relative justify-between">
<div className="flex justify-between items-start">
<span className="font-display font-semibold text-sm text-white flex items-center gap-2"><svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:dot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" fill="none" r="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg> Tires</span>
<div className="w-2 h-2 rounded-full bg-accent animate-pulse-fast"></div>
</div>
<div className="font-mono text-[10px] text-white/70">
<div>Repair • Rotation • TPMS</div>
<div>Mobile Install</div>
</div>
</div>
</article>

<article className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger border-2 border-white/10">
<div>
<h3 className="font-display font-semibold text-xl text-white mb-2 flex items-center gap-2 tracking-tight"><svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="18" data-icon="lucide:snowflake" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></path><path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"></path><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"></path></g></svg> A/C &amp; Heating</h3>
<p className="text-gray-300 text-xs font-mono">Recharge • Leak Test • Compressors</p>
</div>
<div className="flex flex-col gap-1.5 w-40">
<div className="flex justify-between text-[8px] text-gray-500 font-mono mb-1">
<span>COOLING</span>
<span>76%</span>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-accent to-yellow-500 w-[76%] rounded-full"></div>
</div>
</div>
</article>

<article className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center border-2 border-white/10">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-semibold text-white text-lg tracking-tight">Advanced Diagnostics</span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">LIVE</span>
</div>
<div className="relative w-full h-full z-0 mt-8 opacity-60">
<div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
<div className="absolute top-[40%] right-[30%] w-1 h-1 bg-gray-500 rounded-full"></div>
<div className="absolute top-[60%] left-[40%] w-1 h-1 bg-gray-500 rounded-full"></div>
<div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75 shadow-[0_0_10px_white]"></div>
<svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="20%" x2="40%" y1="30%" y2="60%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="20%" x2="80%" y1="30%" y2="25%"></line>
</svg>
</div>
</article>
</div>
</div>
</section>

<section className="skew-target py-24 bg-[#050505] border-t border-white/5 relative z-20" id="mechanics">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">/// BEST MECHANICS NEAR YOU</span>
<h2 className="font-display font-semibold text-4xl md:text-5xl mb-6 text-white scramble-text tracking-tight">Verified shops. Real availability.</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We vet every shop for quality, tools, and turnaround time.
                    </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border-2 border-white/10 rounded-lg transition-all cursor-pointer hover:border-white/20 hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">01</div>
<div>
<h3 className="font-semibold text-white flex items-center gap-2">Local &amp; Transparent <svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:badge-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg></h3>
<p className="text-sm text-gray-500">Ratings, reviews, and live slots.</p>
</div>
</div>
<div className="group flex gap-4 p-4 border-2 border-white/10 rounded-lg transition-all cursor-pointer hover:border-white/20 hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">02</div>
<div>
<h3 className="font-semibold text-white">Instant booking</h3>
<p className="text-sm text-gray-500">Pick a window. We handle the rest.</p>
</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 gap-6">

<article className="relative bg-[#0a0a0a] border-2 border-white/10 rounded-lg p-6 shadow-2xl overflow-hidden">
<div className="flex items-start justify-between">
<div>
<h3 className="font-display font-semibold text-xl text-white tracking-tight flex items-center gap-2">
                                    Metro Auto Clinic
                                    <svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="18" data-icon="lucide:badge-check" data-width="18" height="18" role="img" title="Verified" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</h3>
<p className="text-xs text-gray-400 font-mono mt-1">2.4 km • Open now</p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 justify-end">
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:star" data-icon-replaced="true" data-icon-set="lucide" data-lucide="star" data-width="16" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star-half" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-[10px] text-gray-500 font-mono mt-1">4.5 / 5 (812)</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Slots today: 3
                            </div>
<button className="border-2 border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all hover-trigger btn-magnetic">
                                Book
                            </button>
</div>
</article>

<article className="relative bg-[#0a0a0a] border-2 border-white/10 rounded-lg p-6 shadow-2xl overflow-hidden">
<div className="flex items-start justify-between">
<div>
<h3 className="font-display font-semibold text-xl text-white tracking-tight flex items-center gap-2">
                                    Precision Brake &amp; Tire
                                    <svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="18" data-icon="lucide:badge-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</h3>
<p className="text-xs text-gray-400 font-mono mt-1">4.1 km • Closes 8pm</p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 justify-end">
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-[10px] text-gray-500 font-mono mt-1">5.0 / 5 (264)</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-fast"></span> Slots today: 1
                            </div>
<button className="border-2 border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all hover-trigger btn-magnetic">
                                Book
                            </button>
</div>
</article>

<article className="relative bg-[#0a0a0a] border-2 border-white/10 rounded-lg p-6 shadow-2xl overflow-hidden">
<div className="flex items-start justify-between">
<div>
<h3 className="font-display font-semibold text-xl text-white tracking-tight flex items-center gap-2">
                                    Eco Hybrid Specialists
                                    <svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="18" data-icon="lucide:badge-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</h3>
<p className="text-xs text-gray-400 font-mono mt-1">5.7 km • Open now</p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 justify-end">
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide text-yellow-400 iconify--lucide" data-height="16" data-icon="lucide:star-half" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-[10px] text-gray-500 font-mono mt-1">4.5 / 5 (143)</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Slots today: 5
                            </div>
<button className="border-2 border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all hover-trigger btn-magnetic">
                                Book
                            </button>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative z-20" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// TRUSTED BY DRIVERS</span>
<h2 className="font-display font-semibold text-4xl md:text-5xl text-white tracking-tight scramble-text">What drivers say</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="glass-panel border-2 border-white/10 rounded-xl p-6">
<div className="flex items-center gap-2 text-yellow-400">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-300 mt-3">Called at 7am, back on the road by 8. Clear price. Zero stress.</p>
<p className="text-[10px] text-gray-500 font-mono mt-4">— Dana • 2018 Civic</p>
</article>
<article className="glass-panel border-2 border-white/10 rounded-xl p-6">
<div className="flex items-center gap-2 text-yellow-400">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star-half" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-300 mt-3">Booked brakes at lunch. Tech was on time and super thorough.</p>
<p className="text-[10px] text-gray-500 font-mono mt-4">— Malik • 2020 Camry</p>
</article>
<article className="glass-panel border-2 border-white/10 rounded-xl p-6">
<div className="flex items-center gap-2 text-yellow-400">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-300 mt-3">They explained the issue in simple terms. Fair and fast.</p>
<p className="text-[10px] text-gray-500 font-mono mt-4">— Priya • 2017 RAV4</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative z-20 border-t border-white/5" id="pipeline">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-[#080808] border-2 border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,59,0,0.3)] bg-black/50 backdrop-blur-sm">
<div className="w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
<div className="absolute text-white font-mono text-xs tracking-widest">MATCHING</div>
</div>
<div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow">
<div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_15px_white]"></div>
</div>
<div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-reverse-spin">
<div className="w-3 h-3 bg-accent rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// HOW motyFIX WORKS</span>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-semibold mb-4 text-white tracking-tight">01. Request</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                Share your vehicle and issue. Pick urgency.
                            </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-semibold mb-4 text-white tracking-tight">02. Match</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                We route to the best nearby verified shop.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-semibold mb-4 text-white tracking-tight">03. Fix</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                Get a clear quote. Track progress in real time.
                            </p>
</div>
<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] z-20 border-white/5 border-t pt-24 pb-24 relative" id="guides">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-start gap-10">

<article className="flex-1 glass-panel border-2 border-white/10 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="font-display font-semibold text-3xl text-white tracking-tight">Can you fix it yourself?</h2>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded flex items-center gap-1">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="14" data-icon="lucide:hammer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg> DIY
                            </span>
</div>
<p className="text-sm text-gray-400 mb-4">Pick a symptom to get simple steps and risk level.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Symptom</span>
<select className="focus:outline-none focus:border-accent text-sm text-white bg-white/5 border-white/10 border-2 rounded pt-2 pr-3 pb-2 pl-3" id="diy-issue">
<option className="bg-[#0a0a0a]" value="">Choose…</option>
<option className="bg-[#0a0a0a]" value="battery">Car won’t start (clicking)</option>
<option className="bg-[#0a0a0a]" value="brakes">Brake squeal</option>
<option className="bg-[#0a0a0a]" value="tire">Flat tire</option>
<option className="bg-[#0a0a0a]" value="ac">AC blows warm</option>
<option className="bg-[#0a0a0a]" value="engine">Check Engine light</option>
</select>
</label>
<label className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-gray-400 uppercase">Tools on hand</span>
<select className="bg-white/5 border-2 border-white/10 px-3 py-2 rounded text-sm focus:outline-none focus:border-accent text-white" id="diy-tools">
<option className="bg-[#0a0a0a]" value="basic">Basic (no tools)</option>
<option className="bg-[#0a0a0a]" value="kit">Toolkit &amp; jack</option>
<option className="bg-[#0a0a0a]" value="obd">Toolkit + OBD-II</option>
</select>
</label>
</div>
<div className="mt-6 p-4 border-2 border-white/10 rounded-lg bg-white/5" id="diy-result">
<div className="text-sm text-gray-400">Your guide will appear here.</div>
</div>
</article>

<aside className="w-full md:w-96 glass-panel border-2 border-white/10 rounded-xl p-6">
<h3 className="font-display font-semibold text-2xl text-white tracking-tight mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="18" data-icon="lucide:heart-pulse" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
                            Vehicle Health Tips
                        </h3>
<ul className="space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Check tire pressure monthly; rotate every 10k km.
                            </li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Change oil on schedule; keep fluids topped.
                            </li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Replace wipers yearly; keep blades clean.
                            </li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Scan codes early to prevent bigger repairs.
                            </li>
</ul>
<a className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline" href="#diagnostic">
<svg aria-hidden="true" className="iconify lucide iconify--lucide" data-height="16" data-icon="lucide:book-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            See full maintenance guide
                        </a>
</aside>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#050505] relative z-20 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-semibold text-4xl text-white text-center mb-16 scramble-text tracking-tight">Service plans</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="border-2 border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ PAY‑AS‑YOU‑GO</div>
<div className="text-3xl font-semibold text-white mb-6 z-10 relative">$0<span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No commitment</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Transparent rates</li>
</ul>
<button className="w-full py-3 border-2 border-white/20 rounded font-semibold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Start Free</button>
</article>
<article className="border-2 border-accent bg-[#0a0a0a] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,59,0,0.1)] spotlight-card">
<div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-semibold px-3 py-1 uppercase rounded-bl-lg z-10">Popular</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ PRIORITY</div>
<div className="text-3xl font-semibold text-white mb-6 z-10 relative">$19<span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-white iconify--lucide" data-height="16" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> Faster dispatch</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-white iconify--lucide" data-height="16" data-icon="lucide:ticket-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Members pricing</li>
</ul>
<button className="w-full py-3 bg-accent text-black rounded font-semibold uppercase text-xs tracking-wider hover:bg-white transition-all z-10 relative">Upgrade</button>
</article>
<article className="border-2 border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ FLEET</div>
<div className="text-3xl font-semibold text-white mb-6 z-10 relative">Custom</div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated support</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify lucide text-accent iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Volume discounts</li>
</ul>
<button className="w-full py-3 border-2 border-white/20 rounded font-semibold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Contact Sales</button>
</article>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">motyFIX</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="">
<h3 className="text-2xl font-display font-semibold text-white mb-6 tracking-tight">Need help now?</h3>
<div className="flex gap-4">
<input className="bg-white/5 border-2 border-white/10 px-4 py-3 rounded text-sm w-64 focus:outline-none focus:border-accent text-white" placeholder="Your phone" type="tel"/>
<a className="bg-accent text-black px-6 py-3 rounded font-semibold text-sm hover:bg-white transition-colors flex items-center gap-2" href="tel:+18005551234">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:phone" data-icon-replaced="true" data-icon-set="lucide" data-lucide="phone" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Call
                        </a>
</div>
</div>
<div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-white">Explore</span>
<a className="hover:text-accent transition-colors" href="#services">Services</a>
<a className="hover:text-accent transition-colors" href="#mechanics">Mechanics</a>
<a className="hover:text-accent transition-colors" href="#guides">Guides</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white">Legal</span>
<a className="hover:text-accent transition-colors" href="#">Privacy</a>
<a className="hover:text-accent transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row text-[10px] uppercase text-gray-600 font-mono max-w-[1400px] border-white/5 border-t mt-20 mr-auto ml-auto pt-6 items-center justify-between">
<span className="">© 2025 motyFIX INC.</span>
<span className="mt-2 md:mt-0">TOKYO / SAN FRANCISCO / BERLIN</span>
</div>
</footer>
</main>


    </>
  );
}
