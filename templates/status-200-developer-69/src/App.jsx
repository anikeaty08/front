import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cyan: '#00F2FF', // Electric Cyan
void: '#000000', // Void Black
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
'beam': 'beam 3s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'travel': 'travel 3s linear infinite',
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
},
beam: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)' },
'50%': { opacity: .5, boxShadow: '0 0 5px rgba(0, 242, 255, 0.2)' },
},
travel: {
'0%': { left: '0%', opacity: 0 },
'10%': { opacity: 1 },
'90%': { opacity: 1 },
'100%': { left: '100%', opacity: 0 },
}
}
}
}
}



        // 1. Mouse Tracking for Hero Glow
        const heroSection = document.getElementById('hero-section');
        const cursorGlow = document.getElementById('cursor-glow');
        
        if (heroSection && cursorGlow) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                cursorGlow.style.left = `${e.clientX - rect.left}px`;
                cursorGlow.style.top = `${e.clientY - rect.top}px`;
                cursorGlow.style.opacity = '0.4';
            });
            heroSection.addEventListener('mouseleave', () => {
                cursorGlow.style.opacity = '0';
            });
        }

        // 2. Spotlight Cards Logic
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 3. Magnetic Buttons
        const buttons = document.querySelectorAll('.magnetic-btn, .magnetic-btn a');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm">
<div className="mx-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_0_30px_-10px_rgba(0,0,0,1)]">
<a className="flex items-center gap-2 pl-3 group" href="#">
<span className="font-bold tracking-tight text-sm">status_200</span>
<div className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)] animate-pulse"></div>
</a>
<div className="flex items-center gap-1">
<a className="px-3 py-1.5 text-[10px] uppercase font-medium tracking-wide text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="px-3 py-1.5 text-[10px] uppercase font-medium tracking-wide text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] uppercase font-bold hover:bg-cyan transition-colors tracking-wide" href="#contact">Start</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5" id="hero-section">

<div className="absolute inset-0 bg-rays pointer-events-none opacity-50"></div>
<div className="absolute w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-500 ease-out z-0" id="cursor-glow"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">

<div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-[10px] uppercase tracking-[0.2em] text-cyan mb-8" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
</span>
                Success Node Active
            </div>

<h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-white mb-8 select-none">
<div className="reveal-text" style={{animationDelay: '0.2s'}}>PERFECT</div>
<div className="reveal-text" style={{animationDelay: '0.3s'}}>RESPONSE.</div>
<div className="reveal-text text-neutral-600" style={{animationDelay: '0.4s'}}>PERFECT</div>
<div className="reveal-text text-neutral-600" style={{animationDelay: '0.5s'}}>RESULTS.</div>
</h1>
<p className="reveal-text text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-12 font-light" style={{animationDelay: '0.6s'}}>
                Ultra-low latency infrastructure for next-gen commerce. We engineer digital experiences that load faster than human thought.
            </p>

<div className="reveal-text relative group inline-block magnetic-btn" style={{animationDelay: '0.7s'}}>
<div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent rounded-lg opacity-50 blur-sm group-hover:opacity-100 transition duration-500"></div>
<a className="relative block bg-black border border-white/10 text-white px-10 py-4 rounded-lg overflow-hidden group" href="#contact">
<span className="relative z-10 font-semibold tracking-tight uppercase text-xs flex items-center gap-3">
                        Get a Quote
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-beam"></div>
</a>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-20 border-b border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">Our Strategic Offerings</h2>
<p className="text-neutral-500 text-sm">Modules designed for velocity.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="spotlight-card md:col-span-2 rounded-2xl glass-border p-8 flex flex-col justify-between group cursor-default">
<div className="flex justify-between items-start">
<div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan border border-white/5 group-hover:border-cyan/30 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="24"></span>
</div>
<div className="text-right">
<div className="inline-block px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono rounded">LIVE DATA</div>
</div>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-2">E-commerce Optimization</h3>
<p className="text-neutral-400 text-sm max-w-sm leading-relaxed">Headless Shopify &amp; Next.js architectures designed for sub-100ms loads. Maximize AOV through zero-friction UX.</p>
</div>

<div className="flex gap-8 border-t border-white/5 pt-6 mt-4">
<div className="group/stat">
<div className="text-3xl font-bold text-white tracking-tighter group-hover/stat:text-cyan transition-colors">3.2x</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Revenue Multiplier</div>
</div>
<div className="group/stat">
<div className="text-3xl font-bold text-white tracking-tighter group-hover/stat:text-cyan transition-colors">99.9%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Uptime Guarantee</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl glass-border p-8 flex flex-col justify-between group">
<div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan border border-white/5 group-hover:border-cyan/30 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Technical SEO</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Core Web Vitals dominance. We target Google's "green zone" metrics exclusively.</p>
</div>

<div className="mt-6">
<div className="flex justify-between text-[10px] uppercase text-neutral-500 mb-2 font-medium tracking-wider">
<span>LCP Score</span>
<span className="text-cyan animate-pulse">0.4s</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-cyan h-full w-[95%] shadow-[0_0_10px_#00F2FF]"></div>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl glass-border p-8 flex flex-col justify-between group">
<div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan border border-white/5 group-hover:border-cyan/30 transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Full-Stack Engineering</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Scalable backends. Python, Node, Go. Built to handle Black Friday traffic spikes without flinching.</p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400 font-mono">AWS</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400 font-mono">Redis</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400 font-mono">Docker</span>
</div>
</div>

<div className="spotlight-card md:col-span-2 rounded-2xl glass-border p-8 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="text-center z-10">
<span className="iconify text-white/20 mx-auto mb-4" data-icon="lucide:cpu" data-width="64"></span>
<p className="font-mono text-xs text-cyan tracking-widest uppercase">System Architecture: Optimized</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-20 border-b border-white/5 bg-black" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">The Execution Roadmap</h2>
</div>
<div className="relative mt-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10">

<div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cyan to-transparent animate-travel shadow-[0_0_10px_#00F2FF]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="h-24 w-24 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto md:mx-0 relative z-10 mb-8 group-hover:border-cyan transition-colors duration-500 shadow-2xl">
<span className="font-mono text-lg text-neutral-500 group-hover:text-cyan">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-3 text-center md:text-left">Discover</h3>
<p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">Stakeholder workshops &amp; baseline metrics. We define the "North Star" KPI before writing code.</p>
</div>

<div className="relative group">
<div className="h-24 w-24 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto md:mx-0 relative z-10 mb-8 group-hover:border-cyan transition-colors duration-500 shadow-2xl">
<span className="font-mono text-lg text-neutral-500 group-hover:text-cyan">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-3 text-center md:text-left">Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">Psychological UX prototypes. Interface design that reduces cognitive load and drives action.</p>
</div>

<div className="relative group">
<div className="h-24 w-24 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto md:mx-0 relative z-10 mb-8 group-hover:border-cyan transition-colors duration-500 shadow-2xl">
<span className="font-mono text-lg text-neutral-500 group-hover:text-cyan">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-3 text-center md:text-left">Develop</h3>
<p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">Agile 2-week sprints. Continuous Integration. Rigorous performance testing.</p>
</div>

<div className="relative group">
<div className="h-24 w-24 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto md:mx-0 relative z-10 mb-8 group-hover:border-cyan transition-colors duration-500 shadow-2xl">
<span className="font-mono text-lg text-neutral-500 group-hover:text-cyan">04</span>
</div>
<h3 className="text-lg font-medium text-white mb-3 text-center md:text-left">Deploy</h3>
<p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">Zero-downtime launch. We monitor real-user metrics instantly upon going live.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-20" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">Pricing &amp; Investment</h2>
<p className="text-neutral-500 text-sm">Transparent tiers. High ROI.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-border rounded-2xl p-8 hover:bg-white/[0.02] transition-colors relative flex flex-col h-full">
<div className="mb-6">
<div className="text-lg font-medium text-white">Starter</div>
<div className="text-3xl font-bold text-white mt-4 tracking-tight">₹5K</div>
<div className="text-xs text-neutral-500 mt-1">Single payment</div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> 1-2 Week Timeline</li>
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> MVP Validation</li>
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> Responsive Core</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-xs font-medium hover:bg-white hover:text-black transition-colors uppercase tracking-wide">Select Tier</button>
</div>

<div className="glass-border border-cyan/30 rounded-2xl p-8 bg-white/[0.02] relative flex flex-col h-full shadow-[0_0_40px_-15px_rgba(0,242,255,0.15)] group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan text-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(0,242,255,0.5)] animate-pulse-glow">Popular</div>
<div className="mb-6">
<div className="text-lg font-medium text-white">Growth</div>
<div className="text-3xl font-bold text-white mt-4 tracking-tight">₹15K</div>
<div className="text-xs text-neutral-500 mt-1">Most chosen for startups</div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm text-neutral-300"><span className="iconify text-cyan" data-icon="lucide:check" data-width="16"></span> 4-6 Week Timeline</li>
<li className="flex gap-3 text-sm text-neutral-300"><span className="iconify text-cyan" data-icon="lucide:check" data-width="16"></span> CMS Integration</li>
<li className="flex gap-3 text-sm text-neutral-300"><span className="iconify text-cyan" data-icon="lucide:check" data-width="16"></span> Analytics Dashboard</li>
<li className="flex gap-3 text-sm text-neutral-300"><span className="iconify text-cyan" data-icon="lucide:check" data-width="16"></span> Advanced SEO Setup</li>
</ul>
<button className="w-full py-3 rounded-lg bg-cyan text-black text-xs font-bold hover:bg-white transition-colors uppercase tracking-wide">Select Tier</button>
</div>

<div className="glass-border rounded-2xl p-8 hover:bg-white/[0.02] transition-colors relative flex flex-col h-full">
<div className="mb-6">
<div className="text-lg font-medium text-white">Enterprise</div>
<div className="text-3xl font-bold text-white mt-4 tracking-tight">₹35K+</div>
<div className="text-xs text-neutral-500 mt-1">Full scale solution</div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> 6-8+ Week Timeline</li>
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> Custom API Development</li>
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> Auto-scaling Infrastructure</li>
<li className="flex gap-3 text-sm text-neutral-400"><span className="iconify text-neutral-600" data-icon="lucide:check" data-width="16"></span> 24/7 SLA Support</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-xs font-medium hover:bg-white hover:text-black transition-colors uppercase tracking-wide">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-20 border-t border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black" id="contact">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white mb-12">Ready to Initiate Your Project?</h2>
<div className="glass-border bg-white/5 backdrop-blur-xl rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan/50 to-transparent blur-sm"></div>
<form className="space-y-8 text-left">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-cyan transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">Company</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-cyan transition-colors" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-cyan transition-colors resize-none" placeholder="Brief project details..." rows="3"></textarea>
</div>
<button className="relative w-full bg-black border border-white/10 text-white py-4 rounded-lg overflow-hidden group hover:border-cyan/30 transition-colors" type="button">
<span className="relative z-10 font-medium tracking-tight uppercase text-xs flex items-center justify-center gap-2">
                            Send Transmission
                            <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-x-full group-hover:animate-beam opacity-50"></div>
</button>
</form>

<div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-cyan transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                        hello@status_200.dev
                    </a>
<a className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-green-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                        WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-12 px-4 border-t border-white/5 relative z-20 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold tracking-tight text-sm text-white">status_200.dev</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] uppercase text-neutral-600 hover:text-white transition-colors tracking-widest" href="#">Privacy</a>
<a className="text-[10px] uppercase text-neutral-600 hover:text-white transition-colors tracking-widest" href="#">Terms</a>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_5px_#00F2FF]"></div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">All Systems Operational</span>
</div>
</div>
</footer>


    </>
  );
}
