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
},
colors: {
background: '#08090A', // Extremely dark grey/black
surface: '#121417',
border: '#242628',
primary: '#FFFFFF',
secondary: '#A1A1AA',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-white" icon="solar:asteroid-linear" width="24"></iconify-icon>
                AIgent Launch
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#team">Company</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                Talk to our AIgent
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Ready to transform your business
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Your AI <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Transformation</span>
                    Partner
                </h1>
<p className="text-lg text-secondary max-w-md font-light leading-relaxed">
                    The Business Landscape is evolving... <br/>
<span className="text-white font-normal">Adapt to Survive.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-white text-black h-12 px-6 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                        Start Building Your AI Strategy
                    </button>
<button className="border border-white/10 text-white h-12 px-6 rounded-lg text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        Free 30min Audit
                    </button>
</div>
<p className="text-xs text-gray-500 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                    Free consultation • Personalized roadmap • No commitment required
                </p>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm"></div>
<div className="relative bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">M</div>
<span className="text-xs text-white/70 font-medium">Moris - AI Strategy Assistant</span>
</div>
<iconify-icon className="text-white/40" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="p-6 h-[400px] flex flex-col justify-end space-y-4 relative">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white text-lg" icon="solar:robot-2-linear"></iconify-icon>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none max-w-[85%]">
<p className="text-sm text-gray-300 leading-relaxed">
                                    Hi! I'm your AI Strategy Assistant. I'll help you build a personalized AI transformation roadmap for your business. How can I help you today?
                                </p>
</div>
</div>

<div className="flex gap-3 justify-end">
<div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none max-w-[85%]">
<p className="text-sm text-white leading-relaxed">
                                    I need to automate my customer support and generate leads.
                                </p>
</div>
</div>

<div className="flex gap-2 items-center text-xs text-gray-500 pl-11">
<span>Moris is analyzing business needs...</span>
</div>

<div className="absolute inset-x-4 bottom-4 top-20 bg-background/90 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
<iconify-icon className="text-white text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Privacy notice</h3>
<p className="text-xs text-gray-400 mb-6 max-w-xs">
                                Before we can proceed with your conversation, we kindly ask you to review and accept our privacy policy.
                            </p>
<button className="w-full bg-white text-black rounded-lg py-2.5 text-xs font-medium hover:bg-gray-200 transition-colors">
                                Accept &amp; Continue
                            </button>
<button className="mt-3 text-xs text-gray-500 hover:text-white">Read Policy</button>
</div>
</div>

<div className="h-16 border-t border-white/5 px-4 flex items-center gap-3 bg-white/[0.02]">
<iconify-icon className="text-gray-500 hover:text-white cursor-pointer" icon="solar:paperclip-linear"></iconify-icon>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-gray-600" disabled="" placeholder="Start your AI transformation..." type="text"/>
<button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
<iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
<div className="relative w-full flex overflow-x-hidden">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-medium tracking-tight text-white">Autoworld</span>
<span className="text-lg font-medium tracking-tight text-white">DSL</span>
<span className="text-lg font-medium tracking-tight text-white">Clinique Dentaire Maroc</span>
<span className="text-lg font-medium tracking-tight text-white">Villa Laura</span>
<span className="text-lg font-medium tracking-tight text-white">AMA</span>
<span className="text-lg font-medium tracking-tight text-white">Continued Education</span>
<span className="text-lg font-medium tracking-tight text-white">Family Cabs</span>
<span className="text-lg font-medium tracking-tight text-white">Vitology</span>
<span className="text-lg font-medium tracking-tight text-white">PEBS</span>
<span className="text-lg font-medium tracking-tight text-white">Bioclimas</span>
<span className="text-lg font-medium tracking-tight text-white">Tandant</span>
<span className="text-lg font-medium tracking-tight text-white">Duo Design</span>
<span className="text-lg font-medium tracking-tight text-white">Villa Patricia</span>
<span className="text-lg font-medium tracking-tight text-white">Outside The Box</span>
<span className="text-lg font-medium tracking-tight text-white">Smile Team</span>
<span className="text-lg font-medium tracking-tight text-white">Accès Habitat</span>
<span className="text-lg font-medium tracking-tight text-white">Anderlecht Smile Clinic</span>

<span className="text-lg font-medium tracking-tight text-white">Autoworld</span>
<span className="text-lg font-medium tracking-tight text-white">DSL</span>
<span className="text-lg font-medium tracking-tight text-white">Clinique Dentaire Maroc</span>
<span className="text-lg font-medium tracking-tight text-white">Villa Laura</span>
<span className="text-lg font-medium tracking-tight text-white">AMA</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">AI Integration Services</h2>
<p className="text-secondary max-w-2xl leading-relaxed">
                We believe in partnering with our clients to achieve significant business improvements through digital transformation and AI integration. By integrating innovative technologies like cloud computing and machine learning, we help organizations boost scalability.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:programming-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Digital Transformation</h3>
<p className="text-sm text-secondary leading-relaxed">
                    We guide clients through complex digital landscapes, identifying opportunities, optimizing processes, and crafting strategic roadmaps.
                </p>
</div>

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">AI-Driven Automation</h3>
<p className="text-sm text-secondary leading-relaxed">
                    Unlock new efficiencies. Our customized solutions streamline workflows, reduce operational costs, and enhance productivity.
                </p>
</div>

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:cloud-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Cloud Computing</h3>
<p className="text-sm text-secondary leading-relaxed">
                    Harness the power of cloud computing to boost scalability. We design and implement custom strategies for efficient data access.
                </p>
</div>

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">AI-Powered Analytics</h3>
<p className="text-sm text-secondary leading-relaxed">
                    Deep insights and predictive capabilities. Uncover patterns, upgrade decision-making, and anticipate customer needs.
                </p>
</div>

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Process Automation</h3>
<p className="text-sm text-secondary leading-relaxed">
                    Streamlining end-to-end operations. We identify key automation opportunities from workflow optimization to intelligent tasks.
                </p>
</div>

<div className="group p-8 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Technology Integration</h3>
<p className="text-sm text-secondary leading-relaxed">
                    Flawless technology integration aligns your business systems with the latest digital solutions, enhancing performance.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-surface/30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xs uppercase tracking-widest text-white/50 mb-12">Selected Work</h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="group cursor-pointer">
<div className="aspect-video bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>
<h3 className="text-3xl font-serif italic text-white/30">Hims &amp; Hers</h3>
</div>
<h3 className="text-xl text-white font-medium mb-2">Hims &amp; Hers Health Solutions</h3>
<p className="text-sm text-secondary leading-relaxed max-w-md">
                        Helping reshape how people access personal health solutions, streamlining the journey from consultation to prescription with advanced UX/UI.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-lg border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>
<h3 className="text-3xl font-serif italic text-white/30">Lululemon</h3>
</div>
<h3 className="text-xl text-white font-medium mb-2">Lululemon Digital Hub</h3>
<p className="text-sm text-secondary leading-relaxed max-w-md">
                        Creating an intuitive, user-friendly app that embodies active and mindful aesthetics, integrating UX/UI expertise with product development.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">$10B</div>
<p className="text-xs text-secondary leading-relaxed">Robust strategy delivered to meet revenue goal by 2027.</p>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">102M+</div>
<p className="text-xs text-secondary leading-relaxed">People reached after implementation of user experience design.</p>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">162%</div>
<p className="text-xs text-secondary leading-relaxed">Increase in online direct-to-consumer conversion.</p>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">478%</div>
<p className="text-xs text-secondary leading-relaxed">Increase in campaign reach with new market targeting.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="team">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Global Leadership</h2>
<p className="text-secondary max-w-xl">We’re 100+ individuals from across the world driven by innovation. We craft your brands innovations for the world of tomorrow.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="h-64 w-full bg-surface border border-white/5 rounded-lg mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="text-3xl mb-2 text-white/50" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-sm">Juan Manuel Gonzalez</h3>
<p className="text-xs text-gray-500">Chief Executive Officer</p>
</div>

<div className="group">
<div className="h-64 w-full bg-surface border border-white/5 rounded-lg mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="text-3xl mb-2 text-white/50" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-sm">Andrew Dawson</h3>
<p className="text-xs text-gray-500">Chief Strategy Officer</p>
</div>

<div className="group">
<div className="h-64 w-full bg-surface border border-white/5 rounded-lg mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="text-3xl mb-2 text-white/50" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-sm">Steven Moy</h3>
<p className="text-xs text-gray-500">Chief Technology Officer</p>
</div>

<div className="group">
<div className="h-64 w-full bg-surface border border-white/5 rounded-lg mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="text-3xl mb-2 text-white/50" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-sm">Adrian Garnica</h3>
<p className="text-xs text-gray-500">President</p>
</div>
</div>
</section>

<section className="py-24 bg-surface/50 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-white/20 mb-8" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl text-white font-light leading-snug tracking-tight mb-8">
                "AIgent Launch brought real innovation to the table thinking globally, adapting locally, and making it all feel seamless. The process has been collaborative and incredibly well structured."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="text-right">
<p className="text-white font-medium text-sm">Chris Patte</p>
<p className="text-xs text-gray-500">Director, Digital CX, Starbucks</p>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 border-t border-white/5" id="contact">
<div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">Let's build the future together.</h2>
<p className="text-secondary mb-8">Ready to unlock growth? Contact us to discuss your digital transformation journey.</p>
<div className="space-y-4 text-sm text-gray-400">
<p className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> 
                    claus@aigentlaunch.com
                </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 
                    +32 479 44 62 97
                </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> 
                    Chaussée de la Hulpe 177 / 8, 1170 Brussels
                </p>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider">Company</label>
<input className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 py-2">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-white/20 bg-surface checked:bg-white checked:border-white transition-all cursor-pointer" id="privacy" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-gray-500 cursor-pointer select-none" htmlFor="privacy">I accept the privacy policy</label>
</div>
<button className="bg-white text-black text-sm font-medium w-full py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Submit Request
            </button>
</form>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<a className="text-white font-medium tracking-tighter text-xl mb-6 block" href="#">AIgent Launch</a>
<p className="text-sm text-gray-500 max-w-xs mb-6">
                        Transforming businesses through intelligent AI solutions and strategic implementation.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all" href="#">
<iconify-icon icon="brandico:linkedin" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Services</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">AI Strategy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process Automation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom AI Solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Training &amp; Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2">
<h4 className="text-white font-medium text-sm mb-4">Subscribe</h4>
<p className="text-xs text-gray-500 mb-4">Stay up to date with the ever evolving AI market.</p>
<div className="flex gap-2">
<input className="bg-surface border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30 w-full" placeholder="example@domain.com" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded-md text-xs font-medium hover:bg-gray-200">
                            Join
                        </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
<p>© 2025 Aigent Launch. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
<a className="hover:text-gray-400" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
