import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
void: '#050505',
card: '#0F0F0F',
border: 'rgba(255, 255, 255, 0.1)',
amber: {
DEFAULT: '#FF9500',
dim: '#D4AF37'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
},
animation: {
'grid-move': 'grid-move 20s linear infinite',
'scroll': 'scroll 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam': 'beam 4s linear infinite',
},
keyframes: {
'grid-move': {
'0%': { transform: 'translateY(0)' },
'100%': { transform: 'translateY(40px)' },
},
'scroll': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'beam': {
'0%, 100%': { opacity: '0' },
'50%': { opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Text Scramble Effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        document.querySelectorAll('.hover-scramble').forEach(element => {
            element.onmouseover = event => {
                let iteration = 0;
                const interval = setInterval(() => {
                    event.target.innerText = event.target.innerText
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) return event.target.dataset.text[index];
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");
                    if(iteration >= event.target.dataset.text.length){ 
                        clearInterval(interval);
                    }
                    iteration += 1 / 3;
                }, 30);
            }
        });

        // 2. Number Ticker (Intersection Observer)
        const animateValue = (obj, start, end, duration, prefix = "", suffix = "") => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = prefix + Math.floor(progress * (end - start) + start) + suffix;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'stat1') {
                        animateValue(entry.target, 0, 40, 2000, "$", "B+");
                        observer.unobserve(entry.target);
                    }
                    if (entry.target.id === 'stat2') {
                        animateValue(entry.target, 0, 120, 2000, "", "");
                        observer.unobserve(entry.target);
                    }
                }
            });
        });

        const stat1 = document.getElementById('stat1');
        const stat2 = document.getElementById('stat2');
        if(stat1) observer.observe(stat1);
        if(stat2) observer.observe(stat2);

        // 3. Parallax Tilt for Hero Cards
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.animate-pulse-slow, .shadow-2xl');
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            cards.forEach(card => {
                card.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-border backdrop-blur-xl bg-void/70 h-[72px]">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="font-bold tracking-tight text-lg">CONSUL</span>
</div>

<div className="hidden md:flex items-center gap-8 font-mono text-xs text-white/60">
<a className="hover:text-white transition-colors hover-scramble" data-text="INTELLIGENCE" href="#">INTELLIGENCE</a>
<a className="hover:text-white transition-colors hover-scramble" data-text="NETWORK" href="#">NETWORK</a>
<a className="hover:text-white transition-colors hover-scramble" data-text="PROTOCOLS" href="#">PROTOCOLS</a>
<a className="hover:text-white transition-colors hover-scramble" data-text="LOGIN" href="#">LOGIN</a>
</div>

<button className="hidden md:flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 text-[13px] font-semibold tracking-widest uppercase">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Secure Line
            </button>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-container bg-void pt-[72px]">

<div className="absolute inset-0 z-0 flex items-center justify-center">
<div className="w-[200%] h-[200%] bg-grid-pattern bg-[length:50px_50px] grid-floor opacity-30 animate-grid-move"></div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none z-0"></div>

<div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded text-amber-500 font-mono text-xs tracking-widest uppercase">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                System Status: Active
            </div>
<h1 className="text-5xl md:text-[80px] leading-[1.1] font-semibold tracking-[-0.025em] mb-6 text-glow">
                SOVEREIGNTY <br/> <span className="text-white/40">AS A SERVICE.</span>
</h1>
<p className="text-white/60 text-base md:text-[16px] max-w-xl mx-auto leading-[160%] mb-10 font-light">
                We navigate the unwritten rules of global trade. Geopolitical risk management for the nation-state CEO.
            </p>
<button className="group relative px-8 py-4 bg-white text-black font-semibold text-[13px] tracking-[1px] uppercase hover:bg-amber-500 transition-colors duration-300">
                Initialize Briefing
                <div className="absolute inset-0 border border-white/20 group-hover:border-amber-400 pointer-events-none"></div>
</button>
</div>


<div className="hidden lg:block absolute top-1/3 left-[10%] p-4 bg-card/60 backdrop-blur-md border border-border w-64 shadow-2xl animate-pulse-slow">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-white/50 uppercase">Alert Status</span>
<iconify-icon className="text-red-500" icon="lucide:siren" width="14"></iconify-icon>
</div>
<div className="text-sm font-mono text-red-500 flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                RISK LEVEL: CRITICAL
            </div>
</div>

<div className="hidden lg:block absolute bottom-1/4 right-[10%] p-4 bg-card/60 backdrop-blur-md border border-border w-64 shadow-2xl">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-mono text-white/50 uppercase">Connectivity</span>
<iconify-icon className="text-emerald-500" icon="lucide:wifi" width="14"></iconify-icon>
</div>
<div className="h-8 flex items-end gap-1">
<div className="w-1 bg-emerald-500/20 h-3"></div>
<div className="w-1 bg-emerald-500/40 h-5"></div>
<div className="w-1 bg-emerald-500/60 h-4"></div>
<div className="w-1 bg-emerald-500/80 h-7"></div>
<div className="w-1 bg-emerald-500 h-6"></div>
</div>
<div className="mt-2 text-[10px] font-mono text-emerald-500">ENCRYPTED TUNNEL: EST</div>
</div>
</section>

<div className="w-full bg-void border-y border-border py-4 overflow-hidden relative group">
<div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">

<div className="flex gap-16 items-center px-8 font-mono text-xs text-white/40 tracking-widest">
<span className="group-hover:text-white transition-colors duration-300">FORTUNE 10</span>
<span className="group-hover:text-white transition-colors duration-300">G7 ADVISORY</span>
<span className="group-hover:text-white transition-colors duration-300">NATO CONTR.</span>
<span className="group-hover:text-white transition-colors duration-300">OPEC+ LIAISON</span>
<span className="group-hover:text-white transition-colors duration-300">SWISS BANKING</span>
<span className="group-hover:text-white transition-colors duration-300">DEFENSE PRIMARY</span>
<span className="group-hover:text-white transition-colors duration-300">FORTUNE 10</span>
<span className="group-hover:text-white transition-colors duration-300">G7 ADVISORY</span>
<span className="group-hover:text-white transition-colors duration-300">NATO CONTR.</span>
<span className="group-hover:text-white transition-colors duration-300">OPEC+ LIAISON</span>
<span className="group-hover:text-white transition-colors duration-300">SWISS BANKING</span>
<span className="group-hover:text-white transition-colors duration-300">DEFENSE PRIMARY</span>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10"></div>
</div>

<section className="py-24 px-6 bg-void relative">
<div className="max-w-7xl mx-auto">
<h2 className="text-[48px] font-medium tracking-tight mb-16 text-white">OPERATIONAL CAPABILITIES</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative bg-card border border-border p-8 flex flex-col justify-between overflow-hidden border-beam-box group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="lucide:shield-alert" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="z-10">
<div className="w-8 h-8 border border-white/20 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:crosshair" width="16"></iconify-icon>
</div>
</div>
<div className="z-10">
<h3 className="text-2xl font-medium mb-2">Crisis Extraction</h3>
<p className="text-white/60 text-sm">Physical and reputational removal from hostile zones. We activate assets when borders close.</p>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
</div>

<div className="relative bg-card border border-border p-8 flex flex-col justify-between border-beam-box group">
<div className="absolute top-8 right-8 text-amber-500/50">
<iconify-icon icon="lucide:scale" width="40"></iconify-icon>
</div>
<div className="mt-auto z-10">
<h3 className="text-xl font-medium mb-2">Sanction Navigation</h3>
<p className="text-white/60 text-sm">Compliance through complexity. Legal frameworks for restricted markets.</p>
</div>
</div>

<div className="relative bg-card border border-border p-8 flex flex-col justify-between border-beam-box group">
<div className="absolute inset-x-0 top-1/2 h-px bg-white/5"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5"></div>
<div className="mt-auto z-10 relative">
<h3 className="text-xl font-medium mb-2">Shadow Diplomacy</h3>
<p className="text-white/60 text-sm">Back-channel access to heads of state. Negotiations off the record.</p>
</div>
</div>

<div className="md:col-span-2 md:col-start-2 relative bg-card border border-border p-8 flex items-center justify-center overflow-hidden border-beam-box">
<div className="absolute inset-0 flex items-end justify-between px-12 pb-12 opacity-30">
<div className="w-8 bg-white/20 h-[40%]"></div>
<div className="w-8 bg-white/20 h-[70%]"></div>
<div className="w-8 bg-amber-500/40 h-[50%]"></div>
<div className="w-8 bg-white/20 h-[80%]"></div>
<div className="w-8 bg-white/20 h-[60%]"></div>
</div>
<div className="z-10 text-center">
<h3 className="text-xl font-medium">Asymmetric Advantage</h3>
<p className="text-xs font-mono text-white/40 mt-2 uppercase tracking-widest">Data Visualization Mode</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-void">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-[48px] font-medium tracking-tight mb-2">ARCHIVED OPERATIONS</h2>
<p className="text-white/60 text-base">Historical precedents for future crises.</p>
</div>
<button className="hidden md:block text-[13px] font-semibold uppercase tracking-[1px] border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                    Access Archives
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] bg-card border border-border p-8 flex flex-col justify-end overflow-hidden hover:border-white/30 transition-colors">
<div className="absolute top-6 left-6 font-mono text-[10px] text-amber-500 border border-amber-500/20 px-2 py-1 uppercase">
                        Sector: FinTech
                    </div>
<div className="relative z-10">
<h4 className="text-2xl font-semibold mb-2">Project Aegis</h4>
<p className="text-sm leading-relaxed text-gray-400 redacted-reveal">
                            Prevented $4B hostility takeover through strategic IP extraction.
                        </p>
</div>

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="group relative aspect-[4/5] bg-card border border-border p-8 flex flex-col justify-end overflow-hidden hover:border-white/30 transition-colors">
<div className="absolute top-6 left-6 font-mono text-[10px] text-red-500 border border-red-500/20 px-2 py-1 uppercase">
                        Risk: Critical
                    </div>
<div className="relative z-10">
<h4 className="text-2xl font-semibold mb-2">The Cobalt Exit</h4>
<p className="text-sm leading-relaxed text-gray-400 redacted-reveal">
                            Evacuated 14 C-Suite execs from coup zone within 4 hours.
                        </p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-card border border-border p-8 flex flex-col justify-end overflow-hidden hover:border-white/30 transition-colors">
<div className="absolute top-6 left-6 font-mono text-[10px] text-blue-400 border border-blue-400/20 px-2 py-1 uppercase">
                        Sector: Energy
                    </div>
<div className="relative z-10">
<h4 className="text-2xl font-semibold mb-2">Operation Blackout</h4>
<p className="text-sm leading-relaxed text-gray-400 redacted-reveal">
                            Negotiated grid stability guarantees with hostile regime proxy.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border bg-card/30">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
<div className="py-12 px-8 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono" id="stat1">$0</div>
<div className="text-xs font-mono text-white/40 tracking-widest uppercase group-hover:text-amber-500 transition-colors">Assets Protected</div>
</div>
<div className="py-12 px-8 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono" id="stat2">0</div>
<div className="text-xs font-mono text-white/40 tracking-widest uppercase group-hover:text-amber-500 transition-colors">Jurisdictions Cleared</div>
</div>
<div className="py-12 px-8 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono">24/7</div>
<div className="text-xs font-mono text-white/40 tracking-widest uppercase group-hover:text-amber-500 transition-colors">Watch Command</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-void">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-border bg-card/20 hover:border-white transition-colors duration-300 flex flex-col min-h-[400px]">
<h3 className="text-lg font-mono text-white/60 mb-4 uppercase tracking-widest">Monitor</h3>
<div className="text-4xl font-semibold mb-8">$10k<span className="text-lg text-white/40 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-white/80">
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Weekly Intel Briefs</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Global Risk Alerts</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Portal Access</li>
</ul>
<button className="w-full py-3 border border-white/10 hover:bg-white hover:text-black transition-colors text-xs font-semibold uppercase tracking-widest">Select</button>
</div>

<div className="p-8 border border-border bg-card/20 hover:border-amber-500/50 transition-colors duration-300 flex flex-col min-h-[400px]">
<h3 className="text-lg font-mono text-amber-500 mb-4 uppercase tracking-widest">Advisor</h3>
<div className="text-4xl font-semibold mb-8">$25k<span className="text-lg text-white/40 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-white/80">
<li className="flex items-center gap-3"><iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> Direct Partner Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> Monthly Strategy Session</li>
<li className="flex items-center gap-3"><iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> Priority Analysis</li>
</ul>
<button className="w-full py-3 bg-white/10 hover:bg-amber-500 hover:text-black transition-colors text-xs font-semibold uppercase tracking-widest">Select</button>
</div>

<div className="p-8 border border-border bg-card/20 hover:border-white transition-colors duration-300 flex flex-col min-h-[400px]">
<h3 className="text-lg font-mono text-white/60 mb-4 uppercase tracking-widest">Sovereign</h3>
<div className="text-4xl font-semibold mb-8">Inquire<span className="text-lg text-white/40 font-normal"></span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-white/80">
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> 24/7 Crisis Team</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Physical Security</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Extraction Guarantee</li>
</ul>
<button className="w-full py-3 border border-white/10 hover:bg-white hover:text-black transition-colors text-xs font-semibold uppercase tracking-widest">Contact</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-void">
<div className="max-w-3xl mx-auto">
<h2 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-12">Protocols &amp; Objections</h2>
<div className="space-y-0">
<details className="group border-b border-border pb-6 pt-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium">
<span>How do you handle confidentiality?</span>
<span className="text-white/40 group-open:rotate-45 group-open:text-white transition-all duration-300">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                        We operate under non-disclosure agreements stricter than most governments. All data is air-gapped and encrypted with military-grade standards.
                    </p>
</details>
<details className="group border-b border-border pb-6 pt-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium">
<span>Do you lobby?</span>
<span className="text-white/40 group-open:rotate-45 group-open:text-white transition-all duration-300">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                        We do not lobby. We negotiate. Our influence is direct, private, and result-oriented, avoiding the public spectacle of traditional lobbying.
                    </p>
</details>
<details className="group border-b border-border pb-6 pt-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium">
<span>What is your crisis response time?</span>
<span className="text-white/40 group-open:rotate-45 group-open:text-white transition-all duration-300">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                        Immediate. Our watch command is active 24/7/365. For 'Sovereign' tier clients, physical assets can be mobilized within 2 hours of activation.
                    </p>
</details>
</div>
</div>
</section>

<footer className="relative bg-void border-t border-border pt-24 overflow-hidden group">
<div className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row justify-between gap-12">
<div className="flex flex-col gap-4 text-xs font-mono text-white/40">
<a className="hover:text-white transition-colors" href="#">WASHINGTON</a>
<a className="hover:text-white transition-colors" href="#">LONDON</a>
<a className="hover:text-white transition-colors" href="#">DUBAI</a>
<a className="hover:text-white transition-colors" href="#">SINGAPORE</a>
</div>
<div className="text-xs font-mono text-white/20 text-right">
<p>© 2026 CONSUL GLOBAL.</p>
<p>ALL RIGHTS RESERVED. ENCRYPTED.</p>
</div>
</div>

<div className="w-full flex justify-center items-end leading-none select-none pointer-events-none">
<h1 className="text-[15vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-card to-void group-hover:from-white/10 group-hover:to-void transition-all duration-700 translate-y-[10%]">
                CONSUL
            </h1>
</div>
</footer>



    </>
  );
}
