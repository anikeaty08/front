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



        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        // Nav Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80', 'border-b', 'border-white/10');
            } else {
                nav.classList.remove('bg-black/80');
            }
            
            // Hero Video Fade
            const video = document.getElementById('heroVideo');
            const scroll = window.scrollY;
            const opacity = Math.max(0, 1 - scroll / 700);
            video.style.opacity = opacity;
        });

        // Video Modal Logic
        const modal = document.getElementById('videoModal');
        const container = document.getElementById('vimeoContainer');
        const vimeoId = '1162982666'; // Provided ID

        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            container.innerHTML = '';
        }

        document.getElementById('playDemoBtn').addEventListener('click', openModal);
        document.getElementById('videoThumbnail').addEventListener('click', openModal);
        document.getElementById('closeModal').addEventListener('click', closeModal);
        document.getElementById('modalBackdrop').addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

        // Form Handler
        document.getElementById('demoForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Calling...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Simulator delay
            setTimeout(() => {
                alert("Thanks! Our AI is dialling your number now.");
                btn.innerText = 'Sent';
                e.target.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                }, 2000);
            }, 1500);
        });

        // Cal.com Embed
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "30min-strategy-call", {origin:"https://app.cal.com"});
        Cal.ns["30min-strategy-call"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    
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
      

<div className="depth-layer">
<div className="depth-glow"></div>
<div className="depth-glow"></div>
<div className="depth-glow"></div>
<div className="depth-glow"></div>
<div className="depth-glow"></div>
<div className="depth-glow"></div>
</div>

<div className="hero-video-container" id="heroVideo">
<video autoplay="" className="hero-video" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop">
<source src="https://best.ai/videos/hero-video.mp4" type="video/mp4"/>
</video>
<div className="video-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-heading font-bold text-2xl tracking-tighter text-white group-hover:text-emerald-400 transition-colors">Best.ai</span>
</a>
<button className="hidden md:block px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:-translate-y-0.5" data-cal-config='{"theme":"dark"}' data-cal-link="ridgyai/30min-strategy-call">
                Book a Demo
            </button>
</div>
</nav>

<section className="relative pt-48 pb-32 px-6 z-10">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-8 fade-in-up">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Receptionist for Tradies
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tight text-white mb-8 leading-[1.1] fade-in-up" style={{animationDelay: '0.1s'}}>
                Never Miss <br/>
<span className="text-shimmer">Another Job.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
                Best.ai answers every call instantly. Filters the time-wasters. <br className="hidden md:block"/>Books the high-value jobs worth turning up for.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-lg transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1" data-cal-config='{"theme":"dark"}' data-cal-link="ridgyai/30min-strategy-call">
                    Get More Jobs on Autopilot
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2" id="playDemoBtn">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
                    Watch How It Works
                </button>
</div>
</div>
</section>

<section className="relative px-6 pb-24 z-10">
<div className="max-w-5xl mx-auto">
<div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl shadow-emerald-900/10 group cursor-pointer fade-in-up" id="videoThumbnail" style={{animationDelay: '0.4s'}}>

<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="text-center opacity-50">
<iconify-icon className="text-neutral-600" icon="solar:videocamera-record-linear" width="64"></iconify-icon>
<p className="mt-4 text-neutral-500 font-medium">Dashboard Preview</p>
</div>

<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<p className="text-center text-neutral-500 text-sm mt-6">
                See how Best.ai qualifies leads and syncs with your calendar in real-time.
            </p>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-[#0c0c0c]">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<span className="text-emerald-500 font-semibold tracking-wider text-xs uppercase mb-2 block">The Reality</span>
<h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4 tracking-tight">You're Bleeding Money</h2>
<p className="text-neutral-400 text-lg">Every missed call is a job gifted to your competitor.</p>
</div>

<div className="max-w-4xl mx-auto mb-8 fade-in-up">
<div className="rounded-3xl border border-red-500/20 bg-neutral-900/50 p-12 text-center card-danger relative overflow-hidden group">
<div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-7xl md:text-9xl font-heading font-bold text-red-500 mb-4 tracking-tighter leading-none">62%</div>
<p className="text-xl text-neutral-400 font-medium">of calls go unanswered in home services</p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="rounded-2xl border border-white/10 bg-[#141414] p-8 text-center card-glow fade-in-up">
<div className="text-4xl font-heading font-semibold text-red-400 mb-2">$1,200</div>
<p className="text-neutral-500 text-sm">Avg. lost revenue per missed call</p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#141414] p-8 text-center card-glow fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="text-4xl font-heading font-semibold text-red-400 mb-2">85%</div>
<p className="text-neutral-500 text-sm">Customers won't call back if you don't pick up</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<span className="text-emerald-500 font-semibold tracking-wider text-xs uppercase mb-2 block">Omnichannel</span>
<h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 tracking-tight">One Brain. <br/>Every Channel.</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        Call, text, Instagram DM—Best.ai remembers every conversation. The context follows the customer, so they never have to repeat themselves.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Perfect Memory</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Instantly recalls past quotes, job history, and preferences.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Instant Response</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Replies in seconds across SMS, Email, and Socials.</p>
</div>
</li>
</ul>
</div>

<div className="relative flex items-center justify-center fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="relative w-[400px] h-[400px] flex items-center justify-center">

<div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute w-1/2 h-1/2 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

<div className="relative z-10 w-24 h-48 bg-[#0c0c0c] border border-white/20 rounded-[2rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
<div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 animate-pulse">
<iconify-icon className="text-emerald-400" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<div className="text-[10px] text-emerald-500 font-mono">PROCESSING</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 bg-[#141414] rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
<iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
</div>
<div className="absolute bottom-1/4 right-0 w-12 h-12 bg-[#141414] rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
<iconify-icon className="text-white" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 left-1/4 w-12 h-12 bg-[#141414] rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
<iconify-icon icon="logos:messenger" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-5xl font-heading font-semibold text-white mb-4 tracking-tight">Everything You Need to Dominate</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up">
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Auto-Booking</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Directly inserts qualified jobs into your calendar. No phone tag.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up" style={{animationDelay: '0.1s'}}>
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Smart Follow-Ups</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Calls leads back within minutes. Speed wins the contract.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up" style={{animationDelay: '0.2s'}}>
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:filter-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Lead Qualification</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Asks budget and timeline. Filters the tyre-kickers automatically.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up">
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:star-fall-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Review Capture</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Chases happy customers for 5-star Google reviews after the job.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up" style={{animationDelay: '0.1s'}}>
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:restart-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Reactivation</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Calls past clients for maintenance checks and repeat work.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#141414] border border-white/10 card-glow fade-in-up" style={{animationDelay: '0.2s'}}>
<iconify-icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:chart-square-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Analytics Dashboard</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Track every call, recording, and dollar earned in one place.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-neutral-900/30">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10 fade-in-up">
<h2 className="text-3xl font-heading font-semibold text-white mb-4">Meet Your AI Receptionist</h2>
<p className="text-neutral-400">Fill this out, and our AI will call you for a live demo.</p>
</div>
<div className="bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl fade-in-up">
<form className="space-y-5" id="demoForm">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg text-white placeholder-neutral-600 focus:ring-2 focus:ring-emerald-500/50" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Business Name</label>
<input className="w-full px-4 py-3 rounded-lg text-white placeholder-neutral-600" placeholder="JD Plumbing" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Mobile Number</label>
<input className="w-full px-4 py-3 rounded-lg text-white placeholder-neutral-600" placeholder="0400 000 000" required="" type="tel"/>
</div>
<div className="flex items-center gap-3 py-2">
<input id="agree" required="" type="checkbox"/>
<label className="text-sm text-neutral-400" htmlFor="agree">I agree to receive an automated call.</label>
</div>
<button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-lg transition-all shadow-lg shadow-emerald-900/20" type="submit">
                        Call Me Now
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<h2 className="text-center text-3xl md:text-5xl font-heading font-semibold text-white mb-16 fade-in-up">Real Results.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#141414] p-8 rounded-2xl border border-white/5 relative fade-in-up">
<iconify-icon className="absolute top-6 right-6 text-white/10" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-neutral-300 italic mb-6 leading-relaxed">"We were missing 15-20 calls a week. Now? Zero. The AI picks up instantly and books appointments while we're on site."</p>
<div>
<div className="font-semibold text-white">Michael Thompson</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Thompson Roofing</div>
<div className="mt-2 inline-block px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">+$180k Booked</div>
</div>
</div>
<div className="bg-[#141414] p-8 rounded-2xl border border-white/5 relative fade-in-up" style={{animationDelay: '0.1s'}}>
<iconify-icon className="absolute top-6 right-6 text-white/10" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-neutral-300 italic mb-6 leading-relaxed">"I was sceptical, but the voice sounds natural. Customers can't tell. It asks the right questions and my calendar stays full."</p>
<div>
<div className="font-semibold text-white">Sarah Chen</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Precision Electrical</div>
<div className="mt-2 inline-block px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">38% Lead Increase</div>
</div>
</div>
<div className="bg-[#141414] p-8 rounded-2xl border border-white/5 relative fade-in-up" style={{animationDelay: '0.2s'}}>
<iconify-icon className="absolute top-6 right-6 text-white/10" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-neutral-300 italic mb-6 leading-relaxed">"The follow-up system is worth it alone. We're getting reviews from customers we serviced months ago."</p>
<div>
<div className="font-semibold text-white">David Robertson</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Coastal Repairs</div>
<div className="mt-2 inline-block px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">+42% Revenue</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-[#0c0c0c]">
<div className="max-w-3xl mx-auto">
<h2 className="text-center text-3xl font-heading font-semibold text-white mb-12 fade-in-up">Questions?</h2>
<div className="space-y-4">
<details className="group bg-[#141414] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:border-emerald-500/30 fade-in-up">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:bg-white/5 transition-colors">
<span>Does it really sound like a human?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Yes. We use advanced voice synthesis with Australian accents. It includes natural pauses and intonation. Most callers cannot distinguish it from a human receptionist.
                    </div>
</details>
<details className="group bg-[#141414] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:border-emerald-500/30 fade-in-up">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:bg-white/5 transition-colors">
<span>How long does setup take?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Typically 72 hours. We handle the entire build, training, and integration with your calendar. We test it with you before going live.
                    </div>
</details>
<details className="group bg-[#141414] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:border-emerald-500/30 fade-in-up">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:bg-white/5 transition-colors">
<span>Can I customize the script?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Absolutely. We build the knowledge base around your specific services, pricing, and business rules. It learns exactly how you want your business represented.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative z-10">
<div className="max-w-4xl mx-auto fade-in-up">
<h2 className="text-5xl md:text-6xl font-heading font-semibold text-white mb-8 tracking-tight">Ready to Stop Missing Jobs?</h2>
<p className="text-neutral-400 text-xl mb-10">Join Australian tradies scaling on autopilot.</p>
<button className="px-10 py-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-lg transition-all hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.3)]" data-cal-config='{"theme":"dark"}' data-cal-link="ridgyai/30min-strategy-call">
                Book Strategy Call
            </button>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="font-heading font-bold text-2xl tracking-tighter text-white">Best.ai</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-neutral-600 text-sm">
                © 2026 Best.ai • Trade-Only Service
            </div>
</div>
</footer>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4" id="videoModal">
<div className="absolute inset-0 bg-black/90 backdrop-blur-sm" id="modalBackdrop"></div>
<div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
<button className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors" id="closeModal">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-full h-full" id="vimeoContainer"></div>
</div>
</div>



    </>
  );
}
