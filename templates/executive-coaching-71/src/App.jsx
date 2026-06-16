import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
page: '#0C0B0F',
surface: '#14131A',
gold: '#C9A46C',
light: '#F2F0ED',
muted: '#8C8A94',
},
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Outfit"', 'sans-serif'],
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #C9A46C 0%, #A0804D 100%)',
'dark-gradient': 'linear-gradient(to bottom, rgba(12,11,15,0) 0%, #0C0B0F 100%)',
},
animation: {
'bob': 'bob 7s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'drift': 'drift 12s ease-in-out infinite alternate',
},
keyframes: {
bob: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
drift: {
'0%': { transform: 'translate(0, 0)' },
'100%': { transform: 'translate(30px, -30px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 150;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 bg-page/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-serif tracking-tight text-light hover:text-gold transition-colors" href="#">COACHR.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-muted">
<a className="hover:text-light transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-light transition-colors" href="#services">Services</a>
<a className="hover:text-light transition-colors" href="#results">Results</a>
<a className="hover:text-light transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-page bg-gold px-5 py-2.5 hover:bg-white transition-colors duration-300" href="#cta">
<span>Get Template</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>

<button className="md:hidden text-light">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden dot-grid">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-drift pointer-events-none"></div>
<div className="grid lg:grid-cols-2 max-w-[1200px] z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
</span>
<span className="text-xs font-medium tracking-wide text-gold uppercase">Available for Webflow</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl tracking-tight font-serif">Build the life <span className="text-muted font-normal text-4xl md:text-6xl align-middle italic">&amp;</span> business you actually want</h1>
<p className="md:text-xl text-muted leading-relaxed text-lg font-light max-w-lg">
                    I help ambitious founders and executives break through the ceiling that's keeping them stuck — scale with clarity, confidence, and zero burnout.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group flex items-center justify-center gap-3 bg-gold text-page px-8 py-4 text-sm font-medium hover:bg-white transition-all duration-300 min-w-[180px]" href="#cta">
                        Book a Free Call
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium text-light border border-white/10 hover:border-gold/50 hover:text-gold transition-all duration-300" href="#services">
                        Explore Services
                    </a>
</div>
<div className="pt-8 flex items-center gap-4 text-xs text-muted font-light">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-page object-cover" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-page object-cover" src="https://i.pravatar.cc/100?img=47"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-page object-cover" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-10 h-10 rounded-full border-2 border-page bg-surface flex items-center justify-center text-xs text-white font-medium">+2k</div>
</div>
<div>
<div className="flex text-gold gap-0.5 mb-1">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p>Trusted by 500+ leaders</p>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex justify-center lg:justify-end reveal delay-200 active">
<div className="relative w-full max-w-md aspect-[3/4] bg-surface overflow-hidden group">

<img alt="Executive Coach" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-gold/50 via-gold/20 to-transparent mix-blend-color pointer-events-none"></div>

<div className="absolute top-12 -left-6 md:-left-12 bg-surface/90 backdrop-blur border border-white/10 p-4 shadow-2xl animate-bob max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-gold/10 rounded-full text-gold">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-muted uppercase tracking-wider">Impact</span>
</div>
<p className="text-2xl font-serif text-white">500+</p>
<p className="text-xs text-muted">Clients Coached</p>
</div>

<div className="absolute bottom-20 -right-4 md:-right-8 bg-surface/90 backdrop-blur border border-white/10 p-4 shadow-2xl animate-bob" style={{animationDelay: '-3.5s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-gold/10 rounded-full text-gold">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-muted uppercase tracking-wider">Expertise</span>
</div>
<p className="text-2xl font-serif text-white">12yr</p>
<p className="text-xs text-muted">Experience</p>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-page py-10 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<p className="text-center text-xs font-light tracking-[0.2em] text-muted uppercase mb-8">Featured In &amp; Trusted By</p>
<div className="flex flex-wrap gap-12 md:gap-20 hover:grayscale-0 hover:opacity-80 transition-all duration-500 opacity-40 grayscale gap-x-12 gap-y-12 justify-center">

<span className="text-xl font-bold italic font-serif">Forbes</span>
<span className="text-xl font-serif font-bold tracking-tight">HBR</span>
<span className="text-xl font-sans font-bold tracking-tighter">Inc.</span>
<span className="text-xl font-sans font-black tracking-tighter text-red-500">TED</span>
<span className="text-xl font-sans font-bold tracking-tight">FAST COMPANY</span>
<span className="text-xl font-sans font-medium tracking-wide">Entrepreneur</span>
</div>
</div>
</div>

<section className="py-24 md:py-36 bg-surface relative" id="problems">
<div className="max-w-[1200px] mx-auto px-6">
<div className="max-w-2xl mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Your website is costing you <span className="text-gold italic">revenue</span>.</h2>
<p className="text-muted font-light text-lg">You are operating at a high level, but your digital presence is stuck in the minor leagues.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-page border border-white/5 p-8 hover:border-white/20 transition-colors reveal delay-100">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-muted mb-6">
<iconify-icon icon="solar:mask-hiding-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">The Industry Secret</h3>
<p className="text-sm text-muted font-light leading-relaxed">
                        "You're the best-kept secret in your industry." You're great at what you do, but your website doesn't reflect it. Potential clients land on your page and click away.
                    </p>
</div>

<div className="hover:border-white/20 transition-colors reveal delay-200 border-white/5 border pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-muted mb-6">
<iconify-icon icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Losing High-Ticket</h3>
<p className="text-sm text-muted font-light leading-relaxed">
                        "You're losing high-ticket clients to coaches with better websites." First impressions happen in 3 seconds. Your competitor isn't better, they just look better.
                    </p>
</div>

<div className="bg-page border border-white/5 p-8 hover:border-white/20 transition-colors reveal delay-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-muted mb-6">
<iconify-icon icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Wasted Investment</h3>
<p className="text-sm text-muted font-light leading-relaxed">
                        "You've wasted thousands on designers who didn't understand your business." The result? A site that still doesn't convert visitors into booked calls.
                    </p>
</div>
</div>
<div className="mt-20 text-center reveal">
<p className="text-xl md:text-2xl font-serif italic text-gold">"What if your website actually worked as hard as you do?"</p>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-page dot-grid" id="services">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-serif mb-4">Elite Coaching Programs</h2>
<div className="h-0.5 w-16 bg-gold mx-auto"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-surface p-10 hover-card border-b-2 border-transparent hover:border-gold reveal delay-100">
<div className="absolute top-10 right-10 text-gold/20 group-hover:text-gold transition-colors">
<iconify-icon icon="solar:gem-linear" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-4 pt-12">1:1 Executive Coaching</h3>
<p className="text-muted font-light leading-relaxed mb-8">Personalized deep-dive sessions to clarify your vision, overcome blocks, and build an actionable roadmap.</p>
<ul className="space-y-3 text-sm font-light text-light/80">
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Weekly 60min Calls
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Direct Access
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Tailored Strategy
                        </li>
</ul>
</div>

<div className="group relative bg-surface p-10 hover-card border-b-2 border-transparent hover:border-gold reveal delay-200">
<div className="absolute top-10 right-10 text-gold/20 group-hover:text-gold transition-colors">
<iconify-icon icon="solar:crown-linear" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-4 pt-12">Group Mastermind</h3>
<p className="text-muted font-light leading-relaxed mb-8">Exclusive cohort of 8 high-performers with weekly calls, peer accountability, and a private community.</p>
<ul className="space-y-3 text-sm font-light text-light/80">
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Peer Network
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Weekly Hot Seats
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Resource Library
                        </li>
</ul>
</div>

<div className="group relative bg-surface p-10 hover-card border-b-2 border-transparent hover:border-gold reveal delay-300">
<div className="absolute top-10 right-10 text-gold/20 group-hover:text-gold transition-colors">
<iconify-icon icon="solar:flag-linear" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-4 pt-12">VIP Strategy Day</h3>
<p className="text-muted font-light leading-relaxed mb-8">One intensive day mapping your entire year — goals, systems, team structure, and growth plan with total clarity.</p>
<ul className="space-y-3 text-sm font-light text-light/80">
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Full Day Audit
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 12-Month Plan
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Lunch Included
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-surface border-y border-white/5" id="results">
<div className="max-w-[1200px] mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-20 border-b border-white/5 reveal">
<div className="text-center">
<p className="text-4xl md:text-5xl font-serif text-white mb-2">3.2<span className="text-gold">×</span></p>
<p className="text-sm text-muted uppercase tracking-wider">Average Revenue Growth</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-serif text-white mb-2">89<span className="text-gold">%</span></p>
<p className="text-sm text-muted uppercase tracking-wider">Reduced Burnout</p>
</div>
<div className="col-span-2 md:col-span-1 text-center">
<p className="text-4xl md:text-5xl font-serif text-white mb-2">97<span className="text-gold">%</span></p>
<p className="text-sm text-muted uppercase tracking-wider">Would Recommend</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-20">

<div className="bg-page p-8 reveal delay-100">
<div className="flex text-gold mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-light font-light leading-relaxed mb-6">"Working with this coach completely transformed how I run my company. Within 6 months, we doubled revenue and I actually take weekends off now."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full"></div> 
<div>
<p className="font-serif text-lg leading-none">Sarah Johnson</p>
<p className="text-xs text-muted mt-1">CEO, TechStart Inc.</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<p className="text-xs text-gold uppercase tracking-wide">Result: 2× revenue in 6 months</p>
</div>
</div>

<div className="bg-page p-8 reveal delay-200">
<div className="flex text-gold mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-light font-light leading-relaxed mb-6">"I was on the edge of burnout and ready to sell my business. After the VIP Strategy Day, I found a way to scale without sacrificing my health or family time."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full"></div>
<div>
<p className="font-serif text-lg leading-none">Michael Kim</p>
<p className="text-xs text-muted mt-1">Founder, Clearpath Labs</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<p className="text-xs text-gold uppercase tracking-wide">Result: 60% less working hours</p>
</div>
</div>

<div className="bg-page p-8 reveal delay-300">
<div className="flex text-gold mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-light font-light leading-relaxed mb-6">"The mastermind group pushed me to think bigger. I launched a second product line and built a team of 12 — all within one quarter."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full"></div>
<div>
<p className="font-serif text-lg leading-none">Emma Rodriguez</p>
<p className="text-xs text-muted mt-1">Founder, Bloom Studio</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<p className="text-xs text-gold uppercase tracking-wide">Result: New product line launched</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-page">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 reveal">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-2 block">The Process</span>
<h2 className="text-4xl md:text-5xl font-serif">Path to Mastery</h2>
</div>
<div className="relative mt-20">

<div className="absolute left-4 top-0 bottom-0 w-[1px] md:w-full md:h-[1px] md:left-0 md:top-8 bg-gradient-to-b md:bg-gradient-to-r from-gold to-surface opacity-30"></div>
<div className="grid md:grid-cols-4 gap-12">

<div className="group relative pl-12 md:pl-0 md:pt-16 reveal delay-100">
<div className="absolute left-2.5 md:left-0 md:top-6 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-page group-hover:bg-gold transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(201,164,108,0.3)]"></div>
<h3 className="text-xl font-serif mb-2 text-white">Discovery Call</h3>
<p className="text-sm text-muted font-light leading-relaxed">A free 30-minute call to understand your goals, challenges, and fit.</p>
</div>

<div className="group relative pl-12 md:pl-0 md:pt-16 reveal delay-200">
<div className="absolute left-2.5 md:left-0 md:top-6 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-page group-hover:bg-gold transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(201,164,108,0.3)]"></div>
<h3 className="text-xl font-serif mb-2 text-white">Deep Assessment</h3>
<p className="text-sm text-muted font-light leading-relaxed">Full audit of your business, mindset, and systems to find bottlenecks.</p>
</div>

<div className="group relative pl-12 md:pl-0 md:pt-16 reveal delay-300">
<div className="absolute left-2.5 md:left-0 md:top-6 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-page group-hover:bg-gold transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(201,164,108,0.3)]"></div>
<h3 className="text-xl font-serif mb-2 text-white">Custom Roadmap</h3>
<p className="text-sm text-muted font-light leading-relaxed">Tailored action plan with milestones, priorities, and accountability.</p>
</div>

<div className="group relative pl-12 md:pl-0 md:pt-16 reveal delay-400">
<div className="absolute left-2.5 md:left-0 md:top-6 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-page group-hover:bg-gold transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(201,164,108,0.3)]"></div>
<h3 className="text-xl font-serif mb-2 text-white">Ongoing Support</h3>
<p className="text-sm text-muted font-light leading-relaxed">Weekly sessions, async messaging, and course corrections.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-surface" id="faq">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="md:text-4xl reveal text-3xl font-serif text-center mb-16">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-page border border-white/5 rounded-none open:border-gold/30 transition-colors reveal">
<summary className="flex cursor-pointer text-light group-hover:text-gold transition-colors text-lg font-medium pt-6 pr-6 pb-6 pl-6 items-center justify-between">
    Who is this coaching for?
    <svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform duration-300 w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(140, 138, 148)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        Founders, CEOs, and senior executives generating $500K+ annually who feel stuck, exhausted, or directionless despite their success.
                    </div>
</details>

<details className="group bg-page border border-white/5 rounded-none open:border-gold/30 transition-colors reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-light group-hover:text-gold transition-colors -multi">
                        What if I don't see results?
                         <iconify-icon className="text-muted group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        Full 30-day satisfaction guarantee. Do the work and don't see progress? Full refund, no questions asked. Only 2 people have requested this in 12 years.
                    </div>
</details>

<details className="group bg-page border border-white/5 rounded-none open:border-gold/30 transition-colors reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-light group-hover:text-gold transition-colors">
                        How is this different from therapy or consulting?
                         <iconify-icon className="text-muted group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        Therapy focuses on the past. Consulting gives playbooks. Coaching builds your capacity to lead yourself forward — you walk away with skills, not just advice.
                    </div>
</details>

<details className="group bg-page border border-white/5 rounded-none open:border-gold/30 transition-colors reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-light group-hover:text-gold transition-colors">
                        How much time do I need to commit?
                         <iconify-icon className="text-muted group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        1:1 is one 60-minute session/week plus async messaging. Mastermind is 90-minute weekly group call. Most clients say coaching saves time by eliminating wasted effort.
                    </div>
</details>

<details className="group bg-page border border-white/5 rounded-none open:border-gold/30 transition-colors reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-light group-hover:text-gold transition-colors">
                        Can I switch between programs?
                         <iconify-icon className="text-muted group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        Yes. Many start with mastermind and graduate to 1:1, or vice versa. We find the right fit based on where you are and where you want to go.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-page relative overflow-hidden" id="cta">
<div className="absolute inset-0 bg-gold-gradient opacity-5"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-8 animate-pulse-slow">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
<span className="text-xs font-medium text-red-400 uppercase tracking-wide">3 coaching spots remaining for Q2</span>
</div>
<h2 className="text-5xl md:text-7xl font-serif mb-12 leading-none">Ready to stop surviving<br/>and start <span className="text-gold italic">thriving</span>?</h2>
<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 text-left">
<div className="p-6 bg-surface/50 border border-white/5 rounded-sm">
<p className="text-muted text-sm mb-2 line-through">Stuck &amp; burning out</p>
<p className="text-white text-lg font-medium flex gap-2">
<iconify-icon className="text-gold mt-1" icon="solar:arrow-right-linear"></iconify-icon> 
                        Scaling with clarity
                    </p>
</div>
<div className="p-6 bg-surface/50 border border-white/5 rounded-sm">
<p className="text-muted text-sm mb-2 line-through">Losing clients</p>
<p className="text-white text-lg font-medium flex gap-2">
<iconify-icon className="text-gold mt-1" icon="solar:arrow-right-linear"></iconify-icon> 
                        Commanding premium prices
                    </p>
</div>
<div className="p-6 bg-surface/50 border border-white/5 rounded-sm">
<p className="text-muted text-sm mb-2 line-through">Working 70+ hours</p>
<p className="text-white text-lg font-medium flex gap-2">
<iconify-icon className="text-gold mt-1" icon="solar:arrow-right-linear"></iconify-icon> 
                        Fuels your life
                    </p>
</div>
</div>
<div className="flex flex-col items-center gap-6">
<button className="bg-gold text-page px-10 py-5 text-base font-semibold hover:bg-white hover:scale-105 transition-all duration-300 w-full md:w-auto min-w-[250px] shadow-[0_0_30px_rgba(201,164,108,0.3)]">
                    Book Your Free Call
                </button>
<div className="flex flex-wrap justify-center gap-4 text-xs text-muted font-light uppercase tracking-wide">
<span className="flex items-center gap-1"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 30-day satisfaction guarantee</span>
<span className="flex items-center gap-1"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Cancel anytime</span>
<span className="flex items-center gap-1"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> No contracts</span>
</div>
</div>
</div>
</section>

<footer className="bg-page border-t border-white/5 py-12">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-xl font-serif tracking-tight text-white" href="#">COACHR.</a>
<p className="text-xs text-muted font-light">© 2024 Coachr Template. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-muted hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-muted hover:text-gold transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a className="text-muted hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
