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



        document.addEventListener("DOMContentLoaded", () => {
            // GSAP Init
            gsap.registerPlugin(ScrollTrigger);

            // Animate elements on scroll
            gsap.utils.toArray('.reveal-on-scroll').forEach(element => {
                gsap.fromTo(element, 
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, 
                        y: 0, 
                        duration: 1, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Mobile Menu
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Countdown Timer
            const targetDate = new Date("February 27, 2026 17:00:00 EST").getTime();
            
            const timer = setInterval(function() {
                const now = new Date().getTime();
                const distance = targetDate - now;
                
                if (distance < 0) {
                    clearInterval(timer);
                    document.getElementById("countdown").innerHTML = "HACKING STARTED";
                    return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Format with leading zeros
                const d = days < 10 ? "0" + days : days;
                const h = hours < 10 ? "0" + hours : hours;
                const m = minutes < 10 ? "0" + minutes : minutes;
                const s = seconds < 10 ? "0" + seconds : seconds;
                
                document.getElementById("countdown").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
            }, 1000);
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
      
<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 glass border-b border-[#27272a]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-white">
<span className="group-hover:text-[#10b981] transition-colors">Unlink</span>
<span className="text-[#52525b]">×</span>
<span className="group-hover:text-[#a855f7] transition-colors">Monad</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-[#a1a1aa] hover:text-white transition-colors" href="#schedule">Schedule</a>
<a className="text-xs text-[#a1a1aa] hover:text-white transition-colors" href="#prizes">Prizes</a>
<a className="text-xs text-[#a1a1aa] hover:text-white transition-colors" href="#location">Location</a>
<a className="text-xs text-[#a1a1aa] hover:text-white transition-colors" href="#judges">Judges</a>
<a className="text-xs text-[#a1a1aa] hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded text-xs font-semibold hover:bg-[#e4e4e7] transition-colors" href="https://luma.com/h1pot7te" target="_blank">
                    Apply Now
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white text-xl" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-[#050505] border-b border-[#27272a] p-6 flex flex-col gap-4" id="mobile-menu">
<a className="text-sm text-[#a1a1aa]" href="#schedule">Schedule</a>
<a className="text-sm text-[#a1a1aa]" href="#prizes">Prizes</a>
<a className="text-sm text-[#a1a1aa]" href="#location">Location</a>
<a className="text-sm text-[#a1a1aa]" href="#judges">Judges</a>
<a className="text-sm text-[#a1a1aa]" href="#faq">FAQ</a>
<a className="text-sm font-semibold text-white" href="https://luma.com/h1pot7te">Apply Now →</a>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden border-b border-[#27272a]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272a] bg-[#0A0A0A] mb-8 animate-fade-in">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">NYC • Feb 27 - Mar 1</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
                Ship private.<br/>
<span className="text-[#52525b]">Ship fast.</span>
</h1>
<p className="text-lg md:text-xl text-[#a1a1aa] font-light mb-10 max-w-2xl mx-auto">
                Powered by <span className="text-[#10b981]">Unlink</span>'s privacy and <span className="text-[#a855f7]">Monad</span>'s speed.
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
<div className="p-4 rounded bg-[#0A0A0A] border border-[#27272a]">
<div className="text-[10px] font-mono text-[#52525b] uppercase mb-1">Prize Pool</div>
<div className="text-lg text-white font-medium">$30,000+</div>
</div>
<div className="p-4 rounded bg-[#0A0A0A] border border-[#27272a]">
<div className="text-[10px] font-mono text-[#52525b] uppercase mb-1">Builders</div>
<div className="text-lg text-white font-medium">100+</div>
</div>
<div className="p-4 rounded bg-[#0A0A0A] border border-[#27272a] col-span-2">
<div className="text-[10px] font-mono text-[#52525b] uppercase mb-1">Countdown</div>
<div className="text-lg text-white font-mono font-medium" id="countdown">00d 00h 00m 00s</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-semibold rounded hover:bg-[#e4e4e7] transition-all hover:scale-[1.02]" href="https://luma.com/h1pot7te">
                    Apply to Hack
                </a>
<span className="text-xs text-[#52525b]">Limited spots available</span>
</div>
</div>
</section>

<div className="border-b border-[#27272a] bg-[#0A0A0A] py-8 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
<div className="marquee-container">
<div className="marquee-content gap-16 px-8">

<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">CMT Digital</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">EV3</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Credibly Neutral</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Bodhi Ventures</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">CMT Digital</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">EV3</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Credibly Neutral</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Bodhi Ventures</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">CMT Digital</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">EV3</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Credibly Neutral</span>
<span className="text-lg font-semibold text-[#52525b] tracking-tight uppercase">Bodhi Ventures</span>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Build Private Finance<br/>on the Fastest Chain.</h2>
<div className="space-y-4 text-sm font-light leading-relaxed">
<p className="">
<strong className="text-white">Unlink</strong> is plug-and-play privacy for EVM blockchains. 
                        <strong className="text-white">Monad</strong> is the fastest EVM chain with 10,000 TPS.
                    </p>
<p className="">
                        Combine privacy + speed to build financial apps that couldn't exist before.
                    </p>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 reveal-on-scroll">

<div className="p-6 rounded border border-[#27272a] bg-[#0A0A0A] hover:border-[#10b981]/50 transition-colors group">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#10b981] text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide">Neobank</h3>
</div>
<p className="text-xs text-[#a1a1aa]">Self-custodial bank where your financial life isn't public.</p>
</div>
<div className="p-6 rounded border border-[#27272a] bg-[#0A0A0A] hover:border-[#10b981]/50 transition-colors group">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#10b981] text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide">Payroll</h3>
</div>
<p className="text-xs text-[#a1a1aa]">On-chain salaries and contractor invoicing that stay confidential.</p>
</div>
<div className="p-6 rounded border border-[#27272a] bg-[#0A0A0A] hover:border-[#10b981]/50 transition-colors group">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#10b981] text-lg" icon="solar:dollar-minimalistic-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide">Stablecoin</h3>
</div>
<p className="text-xs text-[#a1a1aa]">Move dollars without exposing your balance sheet.</p>
</div>
<div className="p-6 rounded border border-[#27272a] bg-[#0A0A0A] hover:border-[#10b981]/50 transition-colors group">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#10b981] text-lg" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide">Trading</h3>
</div>
<p className="text-xs text-[#a1a1aa]">Execute trades without leaking alpha. Private OTC desks.</p>
</div>
<div className="p-6 rounded border border-[#27272a] bg-[#0A0A0A] hover:border-[#10b981]/50 transition-colors group md:col-span-2">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#10b981] text-lg" icon="solar:safe-square-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide">Treasury</h3>
</div>
<p className="text-xs text-[#a1a1aa]">Manage org funds without broadcasting strategy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-[#27272a]" id="schedule">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center reveal-on-scroll">Schedule</h2>
<div className="space-y-12 reveal-on-scroll">

<div className="relative pl-8 border-l border-[#27272a]">
<span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-[#27272a] border border-[#0A0A0A]"></span>
<h3 className="text-lg text-white font-medium mb-6">Friday, February 27</h3>
<div className="space-y-6">
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">17:00</span>
<div>
<h4 className="text-sm font-semibold text-white">Registration Opens</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Check-in, dinner, drinks &amp; light bites.</p>
</div>
</div>
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">20:00</span>
<div>
<h4 className="text-sm font-semibold text-white">Kickoff</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Intro to building on Unlink and Monad.</p>
</div>
</div>
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">21:00</span>
<div>
<h4 className="text-sm font-semibold text-white">Hacking Begins</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Team formation session.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-[#27272a]">
<span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-[#27272a] border border-[#0A0A0A]"></span>
<h3 className="text-lg text-white font-medium mb-6">Saturday, February 28</h3>
<div className="space-y-6">
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">All Day</span>
<div>
<h4 className="text-sm font-semibold text-white">Hacking</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Build, iterate, ship. Mentors available 24/7.</p>
</div>
</div>
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">18:30</span>
<div>
<h4 className="text-sm font-semibold text-white">VIP Dinner</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Judges + partners dinner (invite-only).</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-[#27272a]">
<span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-[#27272a] border border-[#0A0A0A]"></span>
<h3 className="text-lg text-white font-medium mb-6">Sunday, March 1</h3>
<div className="space-y-6">
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#10b981]">12:00</span>
<div>
<h4 className="text-sm font-semibold text-[#10b981]">Submissions Due</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Submit on DoraHacks. No extensions.</p>
</div>
</div>
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">13:00</span>
<div>
<h4 className="text-sm font-semibold text-white">Judging Begins</h4>
</div>
</div>
<div className="grid grid-cols-[80px_1fr] gap-4">
<span className="text-xs font-mono text-[#52525b]">16:00</span>
<div>
<h4 className="text-sm font-semibold text-white">Closing Ceremony</h4>
<p className="text-xs text-[#a1a1aa] mt-1">Winners announced.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="prizes">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">$30,000+ in Prizes</h2>
<p className="text-sm text-[#a1a1aa]">Main prizes and track prizes stack. A team can win both.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal-on-scroll">

<div className="order-2 md:order-1 p-8 rounded-xl bg-[#0A0A0A] border border-[#27272a] flex flex-col items-center justify-center text-center">
<span className="text-2xl mb-2">🥈</span>
<span className="text-xs font-mono uppercase tracking-widest text-[#52525b] mb-2">2nd Place</span>
<span className="text-3xl font-semibold text-white tracking-tight">$5,000</span>
</div>

<div className="order-1 md:order-2 p-8 rounded-xl bg-[#0A0A0A] border border-[#10b981]/30 shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)] flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/5 to-transparent"></div>
<span className="text-4xl mb-2 relative z-10">🥇</span>
<span className="text-xs font-mono uppercase tracking-widest text-[#10b981] mb-2 relative z-10">1st Place</span>
<span className="text-4xl font-semibold text-white tracking-tight relative z-10">$10,000</span>
</div>

<div className="order-3 p-8 rounded-xl bg-[#0A0A0A] border border-[#27272a] flex flex-col items-center justify-center text-center">
<span className="text-2xl mb-2">🥉</span>
<span className="text-xs font-mono uppercase tracking-widest text-[#52525b] mb-2">3rd Place</span>
<span className="text-3xl font-semibold text-white tracking-tight">$3,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
<div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#27272a]">
<h3 className="text-lg font-semibold text-white mb-6">Track Prizes</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-[#27272a] pb-3">
<span className="text-sm text-[#a1a1aa]">Neobank</span>
<span className="text-sm font-mono text-white">$2,000</span>
</div>
<div className="flex justify-between items-center border-b border-[#27272a] pb-3">
<span className="text-sm text-[#a1a1aa]">Payroll</span>
<span className="text-sm font-mono text-white">$2,000</span>
</div>
<div className="flex justify-between items-center border-b border-[#27272a] pb-3">
<span className="text-sm text-[#a1a1aa]">Stablecoin</span>
<span className="text-sm font-mono text-white">$2,000</span>
</div>
<div className="flex justify-between items-center border-b border-[#27272a] pb-3">
<span className="text-sm text-[#a1a1aa]">Trading</span>
<span className="text-sm font-mono text-white">$2,000</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-[#a1a1aa]">Treasury</span>
<span className="text-sm font-mono text-white">$2,000</span>
</div>
</div>
</div>
<div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#a855f7]/30 relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#a855f7]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest text-[#a855f7]">Special Prize</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Best Use of Unlink SDK</h3>
<div className="text-3xl font-mono text-white mb-4">$2,000</div>
<p className="text-xs text-[#a1a1aa]">Awarded to the team that most creatively integrates Unlink's privacy SDK, regardless of track.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-[#27272a]" id="judges">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 reveal-on-scroll">Judges</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll">

<div className="group">
<div className="aspect-square bg-[#18181b] border border-[#27272a] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-4xl text-[#52525b] group-hover:scale-110 transition-transform duration-500" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Jonah Burian</h3>
<p className="text-xs text-[#a1a1aa] mb-2">Investor, Blockchain Capital</p>
<a className="text-[#52525b] hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 text-xs" icon="logos:twitter"></iconify-icon>
</a>
</div>

<div className="group">
<div className="aspect-square bg-[#18181b] border border-[#27272a] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-4xl text-[#52525b] group-hover:scale-110 transition-transform duration-500" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Sean Chetham</h3>
<p className="text-xs text-[#a1a1aa] mb-2">Principal Engineer, Aztec</p>
<a className="text-[#52525b] hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 text-xs" icon="logos:twitter"></iconify-icon>
</a>
</div>

<div className="group">
<div className="aspect-square bg-[#18181b] border border-[#27272a] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-4xl text-[#52525b] group-hover:scale-110 transition-transform duration-500" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Jack Jacko</h3>
<p className="text-xs text-[#a1a1aa] mb-2">CEO, Monad</p>
<a className="text-[#52525b] hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 text-xs" icon="logos:twitter"></iconify-icon>
</a>
</div>

<div className="group">
<div className="aspect-square bg-[#18181b] border border-[#27272a] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-4xl text-[#52525b] group-hover:scale-110 transition-transform duration-500" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">DCBuilder</h3>
<p className="text-xs text-[#a1a1aa] mb-2">Researcher, World Foundation</p>
<a className="text-[#52525b] hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 text-xs" icon="logos:twitter"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 reveal-on-scroll">FAQ</h2>
<div className="space-y-8 reveal-on-scroll">

<div>
<h3 className="text-sm font-semibold text-white mb-2">Who can participate?</h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Anyone 18+ with a passion for building. Whether you're a developer, designer, or domain expert in finance/crypto — you're welcome. No prior blockchain or ZK experience required.</p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-2">Is this hackathon in-person only?</h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Yes. This is a fully in-person event in Manhattan, NYC. No remote participation.</p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-2">Do I need a team?</h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed">No. You can register solo. We'll have a team formation session Friday evening. Teams of 2-5 are recommended.</p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-2">Do I need to use Unlink and Monad?</h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Yes. Your project must integrate Unlink's privacy layer and deploy on Monad.</p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-2">Code of Conduct?</h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Yes. We follow the <a className="underline hover:text-white" href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank">MLH Code of Conduct</a>.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-[#27272a]" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Location</h2>
<p className="text-xl text-[#e4e4e7] mb-2">Manhattan, NYC</p>
<p className="text-sm text-[#a1a1aa] mb-8 font-mono">Exact location shared upon registration confirmation.</p>
<a className="inline-flex items-center gap-2 text-sm text-white border-b border-[#27272a] hover:border-white pb-0.5 transition-all" href="https://luma.com/h1pot7te">
                        Get Directions via Registration
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-2 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
<div className="aspect-[4/3] bg-[#18181b] rounded overflow-hidden">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
<div className="aspect-[4/3] bg-[#18181b] rounded overflow-hidden mt-8">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
<div className="aspect-[4/3] bg-[#18181b] rounded overflow-hidden">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
<div className="aspect-[4/3] bg-[#18181b] rounded overflow-hidden mt-8">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-[#27272a]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="text-[10px] text-[#52525b] uppercase tracking-widest">
<p className="mb-1">Organized by Unlink Labs Inc.</p>
<p>In partnership with Monad Foundation.</p>
</div>
<div className="flex flex-wrap gap-6 text-xs text-[#a1a1aa]">
<a className="hover:text-white transition-colors" href="https://unlink.xyz">Unlink Labs</a>
<a className="hover:text-white transition-colors" href="https://monad.xyz">Monad</a>
<a className="hover:text-white transition-colors" href="https://x.com/unlink_xyz">Twitter (Unlink)</a>
<a className="hover:text-white transition-colors" href="https://x.com/monad">Twitter (Monad)</a>
<a className="hover:text-white transition-colors" href="https://t.me/phklive">Contact</a>
</div>
</div>
<div className="mt-8 text-[10px] text-[#27272a] font-mono">
                © 2026 Unlink Labs Inc.
            </div>
</div>
</footer>



    </>
  );
}
