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



        lucide.createIcons();

        // Scroll Animation Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Chatbot Toggle
        function toggleChat() {
            const chat = document.getElementById('ai-chat');
            chat.classList.toggle('translate-y-[120%]');
        }

        // Simulate Chat
        function simulateChat() {
            const simUser = document.getElementById('sim-user');
            const typing = document.getElementById('typing');
            const messages = document.getElementById('chat-messages');

            simUser.classList.remove('hidden');
            messages.scrollTop = messages.scrollHeight;
            
            setTimeout(() => {
                typing.classList.remove('hidden');
                typing.classList.add('flex');
                messages.scrollTop = messages.scrollHeight;
                
                setTimeout(() => {
                    typing.classList.add('hidden');
                    typing.classList.remove('flex');
                    
                    // Add Bot Response
                    const div = document.createElement('div');
                    div.className = 'flex gap-3';
                    div.innerHTML = `
                        <div class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                            <i data-lucide="bot" class="w-3 h-3 text-neutral-400"></i>
                        </div>
                        <div class="bg-neutral-800/50 border border-white/5 rounded-2xl rounded-tl-none p-3 text-xs text-neutral-300 leading-relaxed max-w-[85%] animate-[fadeInUp_0.3s_ease-out]">
                            Great choice! Our 200 Sq. Yard plots are facing the 40ft road. Current price is ₹18,900/yard. Would you like a layout map?
                        </div>
                    `;
                    messages.appendChild(div);
                    lucide.createIcons();
                    messages.scrollTop = messages.scrollHeight;
                }, 1500);
            }, 500);
        }

        // Toast Notification Logic
        setTimeout(() => {
            document.getElementById('toast').classList.remove('translate-x-full');
        }, 5000);

        // Promo Popup Logic
        setTimeout(() => {
            const popup = document.getElementById('promo-popup');
            const content = document.getElementById('popup-content');
            popup.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        }, 15000); // 15 seconds delay

        function closePopup() {
            const popup = document.getElementById('promo-popup');
            popup.classList.add('opacity-0', 'pointer-events-none');
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
      

<div className="fixed top-24 right-6 z-50 glass-panel p-4 rounded-lg shadow-2xl transform translate-x-full transition-transform duration-500 flex items-start gap-3 w-80 border-l-2 border-pink-500" id="toast">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-xs font-bold text-white mb-1">New Booking Confirmed</h4>
<p className="text-[10px] text-neutral-400">A client from Vaishali Nagar just booked a 200 Sq. Yard plot.</p>
<span className="text-[9px] text-neutral-600 mt-1 block">Just now</span>
</div>
<button className="absolute top-2 right-2 text-neutral-600 hover:text-white" onclick="document.getElementById('toast').classList.add('translate-x-full')">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>

<nav className="fixed top-0 w-full z-40 glass-panel border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-bold tracking-tighter uppercase text-white flex items-center gap-2 group" href="#">
<div className="w-4 h-4 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-sm group-hover:rotate-45 transition-transform duration-500"></div>
                Pinkwall <span className="text-neutral-500">Group</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors relative group" href="#overview">
                    Overview
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors relative group" href="#analysis">
                    Analysis
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors relative group" href="#amenities">
                    Amenities
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<button className="text-xs font-medium text-pink-400 hover:text-pink-300 flex items-center gap-1" onclick="toggleChat()">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
                    AI Assistant
                </button>
<a className="text-xs font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95" href="#contact">Book Visit</a>
</div>
<button className="md:hidden text-white p-2">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-32 md:pt-48 md:pb-52 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 animate-pulse"></div>

<div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/30 blur-[100px] rounded-full -z-20 animate-float"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-900/20 blur-[120px] rounded-full -z-20 animate-float-delayed"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:border-pink-500/50 transition-colors cursor-default group">
<i className="w-3 h-3 text-pink-400 group-hover:rotate-12 transition-transform" data-lucide="sparkles"></i>
<span className="text-[10px] font-bold text-pink-100 tracking-wide uppercase">RERA Approved Project</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
                    Ganesh Vihar <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">Vistar</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
                    The smartest land investment in <span className="text-white font-medium">Shivdaspura, Jaipur</span>. 
                    <br className="hidden md:block"/>Where future infrastructure meets immediate value.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group relative overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                            Download Brochure
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></div>
</a>
<button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group" onclick="toggleChat()">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="message-circle"></i>
                        Ask AI Assistant
                    </button>
</div>
</div>

<div className="mt-20 relative mx-auto max-w-5xl reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10"></div>
<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
<img alt="Project Layout" className="rounded-lg w-full h-[300px] md:h-[500px] object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542621323-be4631a950a6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-10 left-10 p-4 bg-black/80 backdrop-blur border border-white/10 rounded-lg">
<div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Status</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-sm font-bold text-white">Booking Open</span>
</div>
</div>
<div className="absolute bottom-20 right-10 p-4 bg-black/80 backdrop-blur border border-white/10 rounded-lg">
<div className="flex items-center gap-4">
<div>
<div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Starting Price</div>
<div className="text-xl font-bold text-white">₹ 18,900<span className="text-xs font-normal text-neutral-500">/sq.yd</span></div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div>
<div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Total Area</div>
<div className="text-xl font-bold text-white">50 <span className="text-xs font-normal text-neutral-500">Bigha</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.02] overflow-hidden py-4 relative z-20">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Immediate Registry</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> JDA Approved Patterns</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Gated Community</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Wide Roads</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Immediate Registry</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> JDA Approved Patterns</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Gated Community</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mx-8 flex items-center gap-4"><i className="w-3 h-3 text-pink-500" data-lucide="star"></i> Wide Roads</span>
</div>
</div>

<section className="py-24 md:py-32 relative" id="analysis">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Investment Growth <br/><span className="text-neutral-500">Analysis</span></h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Historical data shows Shivdaspura (Tonk Road) outperforming other Jaipur suburbs by 18% annually. Ganesh Vihar Vistar is positioned at the cusp of the next infrastructure boom.
                    </p>
<div className="space-y-6">

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:border-white/10 transition-all group">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-white">Price Appreciation (Last 5 Years)</h3>
<span className="text-green-400 text-xs font-bold">+145%</span>
</div>
<div className="h-32 flex items-end gap-2">
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] group-hover:bg-neutral-700 transition-colors relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">2019</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%] group-hover:bg-neutral-700 transition-colors relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">2020</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] group-hover:bg-neutral-700 transition-colors relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">2021</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[70%] group-hover:bg-neutral-700 transition-colors relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">2022</div>
</div>
<div className="w-full bg-gradient-to-t from-pink-900 to-pink-500 rounded-t-sm h-[100%] relative group/bar bar-grow">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold">2023</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-on-scroll delay-100">
<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-64 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">2.5x</div>
<div className="text-xs text-neutral-500">Projected Returns <br/>in 3 Years</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-64 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">1500+</div>
<div className="text-xs text-neutral-500">Families in <br/>Vicinity</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3 reveal-on-scroll">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Infrastructure Redefined</h2>
<p className="text-neutral-400">Amenities designed not just for living, but for thriving. Every detail is meticulously planned.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl border border-white/10 relative overflow-hidden group reveal-on-scroll">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 p-8">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
<i className="w-6 h-6 text-white" data-lucide="trees"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Eco-Centric Landscape</h3>
<p className="text-sm text-neutral-400">40% Open areas with dedicated parks, jogging tracks and plantation zones.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#080808] p-6 hover:border-pink-500/30 transition-all group reveal-on-scroll delay-100">
<i className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-pink-500 transition-colors" data-lucide="shield-check"></i>
<h3 className="text-lg font-bold text-white mb-1">Gated Security</h3>
<p className="text-xs text-neutral-500">24/7 guarded entry and perimeter walls.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#080808] p-6 hover:border-purple-500/30 transition-all group reveal-on-scroll delay-200">
<i className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-purple-500 transition-colors" data-lucide="zap"></i>
<h3 className="text-lg font-bold text-white mb-1">Underground Electric</h3>
<p className="text-xs text-neutral-500">Modern cabling system to prevent outages.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#080808] p-6 hover:border-blue-500/30 transition-all group reveal-on-scroll delay-100">
<i className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-blue-500 transition-colors" data-lucide="droplets"></i>
<h3 className="text-lg font-bold text-white mb-1">Water Supply</h3>
<p className="text-xs text-neutral-500">Dedicated overhead tanks and harvesting.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#080808] p-6 hover:border-yellow-500/30 transition-all group reveal-on-scroll delay-200">
<i className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-yellow-500 transition-colors" data-lucide="shopping-bag"></i>
<h3 className="text-lg font-bold text-white mb-1">Commercial Zone</h3>
<p className="text-xs text-neutral-500">Designated shops for daily needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center reveal-on-scroll">Development Timeline</h2>
<div className="relative border-l border-white/10 ml-6 space-y-12">

<div className="relative pl-8 reveal-on-scroll">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
<div className="text-xs font-bold text-pink-500 mb-1 uppercase tracking-widest">Completed</div>
<h3 className="text-xl font-bold text-white mb-2">Land Acquisition &amp; Legal</h3>
<p className="text-sm text-neutral-400">Complete legal due diligence, registry and 90A conversion approval obtained.</p>
</div>

<div className="relative pl-8 reveal-on-scroll delay-100">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
<div className="text-xs font-bold text-pink-500 mb-1 uppercase tracking-widest">Current Phase</div>
<h3 className="text-xl font-bold text-white mb-2">Demarcation &amp; Road Work</h3>
<p className="text-sm text-neutral-400">Plot marking is 100% complete. Internal gravel roads are being laid out.</p>
<div className="mt-4 h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
</div>
</div>

<div className="relative pl-8 reveal-on-scroll delay-200 opacity-50 hover:opacity-100 transition-opacity">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-neutral-700 border border-neutral-500"></div>
<div className="text-xs font-bold text-neutral-500 mb-1 uppercase tracking-widest">Q4 2024</div>
<h3 className="text-xl font-bold text-white mb-2">Electrification &amp; Parks</h3>
<p className="text-sm text-neutral-400">Installation of transformers, poles and plantation drive.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white">Trust of Investors</h2>
</div>

<div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-6">

<div className="w-[400px] p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all shrink-0">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"I verified the papers with my lawyer. The transparency Pinkwall Group offers is rare in Jaipur's real estate market. Booked 200 sq yards immediately."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white">RS</div>
<div>
<div className="text-sm font-bold text-white">Rajesh Sharma</div>
<div className="text-xs text-neutral-500">Businessman, Jaipur</div>
</div>
</div>
</div>

<div className="w-[400px] p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all shrink-0">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"The location is strategic. With the ring road nearby, prices are bound to double in 2-3 years. A solid portfolio addition."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white">AM</div>
<div>
<div className="text-sm font-bold text-white">Amit Mehra</div>
<div className="text-xs text-neutral-500">Investor, Delhi</div>
</div>
</div>
</div>

<div className="w-[400px] p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all shrink-0">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"Visited the site last Sunday. The development work is actually visible on ground, unlike other paper-only projects."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white">VK</div>
<div>
<div className="text-sm font-bold text-white">Vikram Khandelwal</div>
<div className="text-xs text-neutral-500">Govt. Employee</div>
</div>
</div>
</div>

<div className="w-[400px] p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all shrink-0">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"Great support from the sales team. They helped me choose a corner plot and handled the registry paperwork smoothly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white">SL</div>
<div>
<div className="text-sm font-bold text-white">Sneha Lamba</div>
<div className="text-xs text-neutral-500">Doctor</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="group border border-white/10 rounded-xl bg-[#0A0A0A] overflow-hidden transition-all hover:border-white/20">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-white">Is the land JDA Approved?</span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-hover:text-white" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Yes, the land has undergone the 90A conversion process and is fully compliant with JDA norms. Registry is immediate upon payment.
                    </div>
</div>

<div className="group border border-white/10 rounded-xl bg-[#0A0A0A] overflow-hidden transition-all hover:border-white/20">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-white">What are the plot sizes available?</span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-hover:text-white" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        We have a mix of 100, 111, 200, 250 and 500 Sq. Yards. We also have limited commercial plots facing the 60ft wide road.
                    </div>
</div>

<div className="group border border-white/10 rounded-xl bg-[#0A0A0A] overflow-hidden transition-all hover:border-white/20">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-white">Do you offer loan facilities?</span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-hover:text-white" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Yes, the project is loanable by major nationalized and private banks up to 80% of the property value.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-white mb-6">Let's Discuss Your Investment</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Don't miss the opportunity to invest in Shivdaspura's fastest growing township. Fill the form to get the latest price list and site layout.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="phone"></i>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Call Us Directly</div>
<div className="text-lg font-bold text-white">+91 98765 43210</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="mail"></i>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Email Inquiry</div>
<div className="text-lg font-bold text-white">sales@pinkwallgroup.com</div>
</div>
</div>
</div>
</div>
<form className="bg-[#080808] p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="space-y-5 relative z-10">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold text-neutral-500 uppercase mb-2">First Name</label>
<input className="w-full px-4 py-3 text-sm bg-neutral-900/50 border border-neutral-800 rounded-lg focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-neutral-700" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold text-neutral-500 uppercase mb-2">Last Name</label>
<input className="w-full px-4 py-3 text-sm bg-neutral-900/50 border border-neutral-800 rounded-lg focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-bold text-neutral-500 uppercase mb-2">Phone</label>
<input className="w-full px-4 py-3 text-sm bg-neutral-900/50 border border-neutral-800 rounded-lg focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-neutral-700" placeholder="+91" type="tel"/>
</div>
<div>
<label className="block text-[10px] font-bold text-neutral-500 uppercase mb-2">Budget Range</label>
<input className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-pink-500" max="100" min="10" type="range" value="50"/>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2">
<span>₹10L</span>
<span>₹50L</span>
<span>₹1Cr+</span>
</div>
</div>
<button className="w-full py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]" type="button">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
                        Submit Inquiry
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-bold tracking-tighter uppercase text-white flex items-center gap-2 mb-6">
<div className="w-3 h-3 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-sm"></div>
                        Pinkwall Group
                    </span>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Redefining real estate in Rajasthan with transparency, quality, and commitment.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-pink-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Our Projects</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Media Center</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-pink-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">RERA Compliance</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Office</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                        123, Pink City Tower, <br/>
                        Tonk Road, Jaipur, <br/>
                        Rajasthan - 302015
                    </p>
</div>
</div>
<div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] text-neutral-600">
                    © 2024 Pinkwall Group. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] glass-panel rounded-2xl shadow-2xl flex flex-col border border-white/10 transform translate-y-[120%] transition-transform duration-500 overflow-hidden" id="ai-chat">

<div className="p-4 border-b border-white/10 bg-black/40 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-0.5">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
</div>
<div>
<h3 className="text-sm font-bold text-white">Pinkwall Assistant</h3>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[10px] text-neutral-400">Online</span>
</div>
</div>
</div>
<button className="text-neutral-400 hover:text-white" onclick="toggleChat()"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>

<div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/20" id="chat-messages">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-neutral-400" data-lucide="bot"></i>
</div>
<div className="bg-neutral-800/50 border border-white/5 rounded-2xl rounded-tl-none p-3 text-xs text-neutral-300 leading-relaxed max-w-[85%]">
                    Hello! I'm your AI guide for Ganesh Vihar Vistar. Would you like to know about pricing, plot availability, or schedule a visit?
                </div>
</div>

<div className="hidden flex gap-3 flex-row-reverse" id="sim-user">
<div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-white" data-lucide="user"></i>
</div>
<div className="bg-pink-500/20 border border-pink-500/30 rounded-2xl rounded-tr-none p-3 text-xs text-white leading-relaxed max-w-[85%]">
                    Tell me about the 200 Sq Yard plots.
                </div>
</div>

<div className="hidden items-center gap-1 ml-9" id="typing">
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-100"></span>
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-200"></span>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-black/40">
<div className="flex gap-2">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500 transition-all" placeholder="Type a message..." type="text"/>
<button className="p-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors" onclick="simulateChat()">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="promo-popup">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closePopup()"></div>
<div className="relative w-[90%] max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-1 transform scale-95 transition-transform duration-500 pointer-events-auto shadow-2xl overflow-hidden" id="popup-content">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white z-10" onclick="closePopup()"><i className="w-5 h-5" data-lucide="x"></i></button>
<div className="p-8 text-center">
<div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-pink-500 animate-bounce" data-lucide="gift"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Limited Time Offer</h3>
<p className="text-neutral-400 text-sm mb-6">Book within 24 hours and get <span className="text-white font-bold">Free Gold Coin</span> on registry.</p>
<button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors" onclick="closePopup()">Claim Offer Now</button>
<button className="mt-4 text-xs text-neutral-600 hover:text-neutral-400" onclick="closePopup()">No, I'll pass</button>
</div>
</div>
</div>


    </>
  );
}
