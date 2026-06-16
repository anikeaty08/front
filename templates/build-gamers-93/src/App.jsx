import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
base: '#060912',
elevated: '#0f1420',
blue: '#3b82f6',
}
},
backgroundImage: {
'hero-gradient': 'linear-gradient(to right, #0a0e1a 0%, rgba(10,14,26,0.7) 50%, transparent 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Sticky Navbar Blur Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('backdrop-blur-xl', 'bg-[#0a0e1a]/85', 'border-white/[0.04]');
                navbar.classList.remove('bg-transparent', 'border-transparent');
            } else {
                navbar.classList.remove('backdrop-blur-xl', 'bg-[#0a0e1a]/85', 'border-white/[0.04]');
                navbar.classList.add('bg-transparent', 'border-transparent');
            }
        });

        // Scroll Reveal Observer
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                    
                    // Trigger counters if this element has them
                    const counters = entry.target.querySelectorAll('.stat-counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = parseInt(counter.getAttribute('data-target'));
                            const duration = 1500; // 1.5s
                            const step = target / (duration / 16); // 60fps
                            let current = 0;
                            
                            const updateCounter = () => {
                                current += step;
                                if (current < target) {
                                    // Format with K if >= 1000, else exact
                                    if(target >= 1000) {
                                        counter.innerText = Math.floor(current/1000) + 'K';
                                    } else {
                                        counter.innerText = Math.floor(current);
                                    }
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target >= 1000 ? Math.floor(target/1000) + 'K' : target;
                                }
                            };
                            updateCounter();
                        });
                    }
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Newsletter form simulation
        const form = document.getElementById('newsletter-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> SUBSCRIBED';
            btn.classList.replace('bg-brand-blue', 'bg-lime-600');
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.classList.replace('bg-lime-600', 'bg-brand-blue');
                form.reset();
                lucide.createIcons();
            }, 3000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-transparent h-[80px] flex items-center" id="navbar">
<div className="max-w-[1440px] mx-auto w-full px-6 flex items-center justify-between">

<a className="flex items-center gap-3 relative z-10" href="#">
<div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center">

<img alt="GB Logo" className="w-full h-full object-contain" onerror="this.src='https://placehold.co/100x100/0f1420/ffffff?text=GB'" src="./logo.png"/>
</div>
<span className="text-sm font-bold tracking-[0.1em] text-white hidden md:block mt-1">GAMERS BANGLADESH</span>
</a>

<div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-semibold tracking-widest text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-brand-blue" href="#">SHOP</a>
<a className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors" href="#">SUBSCRIPTIONS</a>
<a className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors" href="#">MERCH</a>
<a className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors" href="#">GIFT CARDS</a>
<a className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors" href="#">DEALS</a>
<a className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors" href="#">COMMUNITY</a>
</div>

<div className="flex items-center gap-4 sm:gap-6 z-10">
<button aria-label="Search" className="text-gray-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block" href="#">LOGIN</a>
<a className="bg-brand-blue text-white text-sm font-semibold py-2 px-5 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all" href="#">SIGN UP</a>

<button aria-label="Menu" className="lg:hidden text-white ml-2 p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[100svh] flex items-center pt-[80px] overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-brand-base">

<div className="absolute inset-0 right-0 w-full md:w-[60%] ml-auto z-0 h-full">
<div className="absolute inset-0 bg-hero-gradient z-10 hidden md:block"></div>
<div className="absolute inset-0 bg-[#0a0e1a]/80 z-10 md:hidden"></div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0e1a] to-transparent z-10 hidden md:block"></div>
<img alt="Soldier with controller" className="w-full h-full object-cover object-center md:object-right" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000'" src="./hero-bg.jpg"/>
</div>
<div className="max-w-[1440px] mx-auto w-full px-6 relative z-10 grid md:grid-cols-12 gap-8">

<div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center reveal">
<p className="text-xs font-semibold tracking-[0.2em] text-brand-blue mb-4 flex items-center gap-2">
                    SHOP <span className="w-1 h-1 rounded-full bg-brand-blue opacity-50"></span> 
                    PLAY <span className="w-1 h-1 rounded-full bg-brand-blue opacity-50"></span> 
                    LEVEL UP
                </p>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter uppercase leading-[1.05] mb-6 text-chrome">
                    GEAR UP THE GAME.<br/>POWER YOUR PASSION.
                </h1>
<p className="text-lg font-light text-gray-400 mb-8 max-w-[420px] leading-relaxed">
                    Gamers Bangladesh delivers authentic gaming subscriptions, gear, and merch to your doorstep. Trusted by 12,000+ BD gamers nationwide.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="group relative flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-bold py-4 px-8 rounded-lg shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] transition-all overflow-hidden w-full sm:w-auto" href="#">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative">SHOP NOW</span>
<i className="w-4 h-4 relative transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<a className="flex items-center justify-center text-white text-sm font-bold py-4 px-8 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto" href="#">
                        VIEW DEALS
                    </a>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-blue" data-lucide="package" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-300"><span className="font-bold text-white stat-counter" data-target="12000">0</span>+ DELIVERED</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-blue" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-300"><span className="font-bold text-white">4.9</span> RATING</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-blue" data-lucide="gamepad-2" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-300"><span className="font-bold text-white stat-counter" data-target="30">0</span>+ BRANDS</span>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-[1440px] mx-auto px-6 relative z-20 -mt-8 sm:-mt-16 mb-24">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-brand-elevated border border-white/[0.04] rounded-2xl p-6 flex flex-col card-hover transition-all duration-300 reveal delay-100">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-bold flex items-center gap-2 text-white">
<span className="text-orange-500">🔥</span> HOT DEALS
                    </h3>
<a className="text-xs font-semibold text-brand-blue flex items-center gap-1 hover:text-blue-400" href="#">VIEW ALL <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="2"></i></a>
</div>

<div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
<div className="bg-black/40 rounded-xl p-3 border border-white/[0.02]">
<img alt="Xbox" className="w-full aspect-square object-cover rounded-lg mb-2" onerror="this.src='https://placehold.co/150x150/1a1a1a/4ade80?text=XBOX'" src="/placeholder.jpg"/>
<p className="text-xs font-semibold text-white truncate mb-1">Xbox Pass 3M</p>
<div className="flex items-center gap-2 text-xs">
<span className="text-lime-400 font-bold">৳3,500</span>
<span className="text-gray-600 line-through">৳4,200</span>
</div>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-white/[0.02]">
<img alt="PS Plus" className="w-full aspect-square object-cover rounded-lg mb-2" onerror="this.src='https://placehold.co/150x150/1a1a1a/3b82f6?text=PS+'" src="/placeholder.jpg"/>
<p className="text-xs font-semibold text-white truncate mb-1">PS Plus 12M</p>
<div className="flex items-center gap-2 text-xs">
<span className="text-lime-400 font-bold">৳6,800</span>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-auto pt-2">
<div className="w-6 h-1 rounded-full bg-brand-blue"></div>
<div className="w-2 h-1 rounded-full bg-white/20"></div>
<div className="w-2 h-1 rounded-full bg-white/20"></div>
</div>
</div>

<div className="bg-brand-elevated border border-brand-blue/30 rounded-2xl p-6 flex flex-col card-hover transition-all duration-300 relative overflow-hidden reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none"></div>
<h3 className="text-sm font-bold flex items-center gap-2 text-white mb-6 relative z-10">
<span className="text-yellow-400">⭐</span> TODAY'S DROP
                </h3>
<div className="flex-grow flex flex-col items-center text-center relative z-10">
<img alt="Jersey" className="h-40 object-contain mb-4 drop-shadow-2xl" onerror="this.src='https://placehold.co/300x300/transparent/ffffff?text=GB+JERSEY'" src="/placeholder.jpg"/>
<h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">GB ESPORTS JERSEY 2025</h4>
<div className="flex items-end justify-center gap-3 mb-2">
<span className="text-2xl font-extrabold text-white">৳2,499</span>
<span className="text-sm font-semibold text-gray-500 line-through pb-1">৳2,999</span>
</div>
<p className="text-xs font-semibold text-brand-blue tracking-wide mb-6">ONLY 47 LEFT · SHIPS TOMORROW</p>
</div>
<button className="w-full bg-brand-blue text-white text-sm font-bold py-3 rounded-lg shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] hover:bg-blue-500 transition-colors relative z-10">
                    BUY NOW
                </button>
</div>

<div className="bg-brand-elevated border border-white/[0.04] rounded-2xl p-6 flex flex-col card-hover transition-all duration-300 reveal delay-300">
<h3 className="text-sm font-bold flex items-center gap-2 text-white mb-6">
<span className="text-blue-300">👥</span> JOIN OUR COMMUNITY
                </h3>
<div className="flex flex-col gap-3 flex-grow">
<a className="group flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.02] hover:bg-black/50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="2"></i>
</div>
<div>
<p className="text-sm font-semibold text-white">Discord Server</p>
<p className="text-xs text-gray-400">5,432 Online</p>
</div>
</div>
<i className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
<a className="group flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.02] hover:bg-black/50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2]">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="2"></i>
</div>
<div>
<p className="text-sm font-semibold text-white">Facebook Group</p>
<p className="text-xs text-gray-400">18K+ Members</p>
</div>
</div>
<i className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
<a className="group flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.02] hover:bg-black/50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000]">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="2"></i>
</div>
<div>
<p className="text-sm font-semibold text-white">YouTube Channel</p>
<p className="text-xs text-gray-400">12K+ Subs</p>
</div>
</div>
<i className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
</div>
<p className="text-xs text-gray-500 text-center mt-4 pt-4 border-t border-white/[0.04]">Members get early access to drops</p>
</div>
</div>
</section>

<section className="border-y border-white/[0.04] bg-brand-elevated/50">
<div className="max-w-[1440px] mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
<div className="flex gap-4 items-start max-w-xl">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-gray-300" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-bold text-white tracking-tight mb-1">STAY UPDATED</h3>
<p className="text-sm font-light text-gray-400">Get exclusive drops, flash sales, and BD only deals. One email a week.</p>
</div>
</div>
<form className="w-full md:w-auto flex flex-col sm:flex-row gap-3" id="newsletter-form">
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue transition-colors min-w-[280px]" placeholder="Enter your email" required="" type="email"/>
<button className="bg-brand-blue text-white text-sm font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 whitespace-nowrap" type="submit">
                    SUBSCRIBE
                </button>
</form>
</div>
</section>

<section className="py-24 max-w-[1280px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<p className="text-xs font-semibold tracking-widest text-brand-blue mb-3">BROWSE THE STORE</p>
<h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white">EVERYTHING A BD GAMER NEEDS</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="Subscriptions" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">GAME SUBSCRIPTIONS</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">42 products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal delay-100" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="Gift Cards" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;q=80&amp;w=800'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">GIFT CARDS</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">15 products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal delay-200" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="Merchandise" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1578589318433-39b5de440c3f?auto=format&amp;fit=crop&amp;q=80&amp;w=800'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">MERCHANDISE</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">28 products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="Peripherals" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">PERIPHERALS</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">84 products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal delay-100" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="Console Games" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&amp;fit=crop&amp;q=80&amp;w=800'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">CONSOLE GAMES</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">120+ products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>

<a className="group h-[280px] bg-brand-elevated border border-white/[0.04] rounded-2xl relative overflow-hidden flex flex-col justify-end p-6 card-hover transition-all duration-300 reveal delay-200" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<img alt="PC Accessories" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&amp;fit=crop&amp;q=80&amp;w=800'" src="/placeholder.jpg"/>
<div className="relative z-20">
<h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">PC ACCESSORIES</h3>
<p className="text-sm font-medium text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">56 products <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i></p>
</div>
</a>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6 overflow-hidden">
<div className="flex items-end justify-between mb-10 reveal">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white">BESTSELLERS THIS MONTH</h2>
<a className="hidden md:flex text-sm font-semibold text-gray-400 hover:text-white items-center gap-1 transition-colors" href="#">
                VIEW ALL <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 reveal delay-100">

<div className="min-w-[280px] w-[80vw] md:w-[280px] snap-start bg-brand-elevated rounded-2xl border border-white/[0.04] overflow-hidden flex flex-col group card-hover transition-all duration-300 shrink-0">
<div className="h-[280px] relative bg-[#0a0e1a] p-6 flex items-center justify-center">
<span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wide">ONLY 4 LEFT</span>
<img alt="Product" className="max-h-full max-w-full object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x400/0a0e1a/ffffff?text=Mouse'" src="/placeholder.jpg"/>
</div>
<div className="p-5 flex flex-col flex-grow border-t border-white/[0.04]">
<h3 className="text-base font-bold text-white mb-1 line-clamp-2">Razer DeathAdder V3 Pro Wireless</h3>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1"></i>
<span className="text-xs text-gray-400">4.8 (124 reviews)</span>
</div>
<div className="mt-auto flex items-end justify-between mb-4">
<span className="text-lg font-extrabold text-white">৳18,500</span>
</div>
<button className="w-full bg-transparent border border-white/20 text-white text-sm font-bold py-3 rounded-lg hover:bg-brand-blue hover:border-brand-blue hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all">
                        ADD TO CART
                    </button>
</div>
</div>

<div className="min-w-[280px] w-[80vw] md:w-[280px] snap-start bg-brand-elevated rounded-2xl border border-white/[0.04] overflow-hidden flex flex-col group card-hover transition-all duration-300 shrink-0">
<div className="h-[280px] relative bg-[#0a0e1a] p-6 flex items-center justify-center">
<span className="absolute top-4 right-4 bg-lime-500 text-black text-[10px] font-bold px-2 py-1 rounded-full tracking-wide">−15%</span>
<img alt="Product" className="max-h-full max-w-full object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x400/0a0e1a/ffffff?text=Headset'" src="/placeholder.jpg"/>
</div>
<div className="p-5 flex flex-col flex-grow border-t border-white/[0.04]">
<h3 className="text-base font-bold text-white mb-1 line-clamp-2">Logitech G Pro X Wireless Headset</h3>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1"></i>
<span className="text-xs text-gray-400">4.9 (89 reviews)</span>
</div>
<div className="mt-auto flex items-end gap-2 mb-4">
<span className="text-lg font-extrabold text-lime-400">৳22,100</span>
<span className="text-sm font-semibold text-gray-600 line-through pb-[2px]">৳26,000</span>
</div>
<button className="w-full bg-transparent border border-white/20 text-white text-sm font-bold py-3 rounded-lg hover:bg-brand-blue hover:border-brand-blue hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all">
                        ADD TO CART
                    </button>
</div>
</div>

<div className="min-w-[280px] w-[80vw] md:w-[280px] snap-start bg-brand-elevated rounded-2xl border border-white/[0.04] overflow-hidden flex flex-col group card-hover transition-all duration-300 shrink-0">
<div className="h-[280px] relative bg-[#0a0e1a] p-6 flex items-center justify-center">
<img alt="Product" className="max-h-full max-w-full object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x400/0a0e1a/ffffff?text=Steam'" src="/placeholder.jpg"/>
</div>
<div className="p-5 flex flex-col flex-grow border-t border-white/[0.04]">
<h3 className="text-base font-bold text-white mb-1 line-clamp-2">Steam Wallet Global Gift Card - $50</h3>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1"></i>
<span className="text-xs text-gray-400">5.0 (342 reviews)</span>
</div>
<div className="mt-auto flex items-end justify-between mb-4">
<span className="text-lg font-extrabold text-white">৳6,150</span>
</div>
<button className="w-full bg-transparent border border-white/20 text-white text-sm font-bold py-3 rounded-lg hover:bg-brand-blue hover:border-brand-blue hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all">
                        ADD TO CART
                    </button>
</div>
</div>

<div className="min-w-[280px] w-[80vw] md:w-[280px] snap-start bg-brand-elevated rounded-2xl border border-white/[0.04] overflow-hidden flex flex-col group card-hover transition-all duration-300 shrink-0">
<div className="h-[280px] relative bg-[#0a0e1a] p-6 flex items-center justify-center">
<img alt="Product" className="max-h-full max-w-full object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x400/0a0e1a/ffffff?text=Keyboard'" src="/placeholder.jpg"/>
</div>
<div className="p-5 flex flex-col flex-grow border-t border-white/[0.04]">
<h3 className="text-base font-bold text-white mb-1 line-clamp-2">Keychron K8 Pro QMK/VIA Wireless</h3>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1"></i>
<span className="text-xs text-gray-400">4.7 (56 reviews)</span>
</div>
<div className="mt-auto flex items-end justify-between mb-4">
<span className="text-lg font-extrabold text-white">৳14,200</span>
</div>
<button className="w-full bg-transparent border border-white/20 text-white text-sm font-bold py-3 rounded-lg hover:bg-brand-blue hover:border-brand-blue hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all">
                        ADD TO CART
                    </button>
</div>
</div>

<div className="min-w-[24px] shrink-0 md:hidden"></div>
</div>
</section>

<section className="bg-brand-elevated py-20 border-t border-white/[0.02]">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16 reveal">
<div className="flex flex-col">
<span className="text-3xl mb-4 grayscale opacity-80">🇧🇩</span>
<h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">100% AUTHENTIC</h4>
<p className="text-sm font-light text-gray-500">Licensed and verified products straight from publishers.</p>
</div>
<div className="flex flex-col">
<span className="text-3xl mb-4 grayscale opacity-80">🚚</span>
<h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">NATIONWIDE DELIVERY</h4>
<p className="text-sm font-light text-gray-500">Fast shipping via Pathao, Sundarban, and RedX partners.</p>
</div>
<div className="flex flex-col">
<span className="text-3xl mb-4 grayscale opacity-80">💳</span>
<h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">LOCAL PAYMENTS</h4>
<p className="text-sm font-light text-gray-500">Pay easily with bKash, Nagad, Rocket, or Bank Cards.</p>
</div>
<div className="flex flex-col">
<span className="text-3xl mb-4 grayscale opacity-80">💬</span>
<h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">BANGLA SUPPORT</h4>
<p className="text-sm font-light text-gray-500">Reply within 2 hours, 7 days a week from our local team.</p>
</div>
</div>

<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-10 border-t border-white/[0.04] reveal delay-100">
<div className="h-8 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<span className="font-bold text-xl tracking-tighter">bKash</span>
</div>
<div className="h-8 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<span className="font-bold text-xl tracking-tighter text-orange-500">Nagad</span>
</div>
<div className="h-8 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<span className="font-bold text-xl tracking-tighter text-purple-500">Rocket</span>
</div>
<div className="h-8 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<span className="font-bold text-xl tracking-tighter italic">VISA</span>
</div>
<div className="h-8 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<div className="flex">
<div className="w-6 h-6 rounded-full bg-red-500/80 -mr-2 mix-blend-screen"></div>
<div className="w-6 h-6 rounded-full bg-yellow-500/80 mix-blend-screen"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#060912] pt-20 pb-10 border-t border-white/[0.04]">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 reveal">

<div className="lg:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
<img alt="GB Logo" className="w-full h-full object-contain" onerror="this.src='https://placehold.co/100x100/0f1420/ffffff?text=GB'" src="./logo.png"/>
</div>
<span className="text-sm font-bold tracking-[0.1em] text-white">GAMERS BD</span>
</a>
<p className="text-sm font-light text-gray-500 mb-6">Bangladesh's premium destination for authentic gaming gear, subs, and culture.</p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i></a>
</div>
</div>

<div>
<h5 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">SHOP</h5>
<ul className="flex flex-col gap-3">
<li><a className="text-sm font-light text-gray-500 hover:text-brand-blue transition-colors" href="#">Subscriptions</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-brand-blue transition-colors" href="#">Gift Cards</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-brand-blue transition-colors" href="#">Merchandise</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-brand-blue transition-colors" href="#">Peripherals</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-brand-blue transition-colors" href="#">Console Games</a></li>
<li><a className="text-sm font-light text-brand-blue font-medium" href="#">Deals &amp; Offers</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">CUSTOMER SERVICE</h5>
<ul className="flex flex-col gap-3">
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Returns &amp; Refunds</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Shipping Info</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">COMPANY</h5>
<ul className="flex flex-col gap-3">
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Partner With Us</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Become a Reseller</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">LEGAL</h5>
<ul className="flex flex-col gap-3">
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Refund Policy</a></li>
<li><a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-light text-gray-600">© 2025 Gamers Bangladesh. All rights reserved.</p>
<div className="flex items-center gap-4 opacity-50 grayscale">
<span className="text-xs font-bold">bKash</span>
<span className="text-xs font-bold">Nagad</span>
<span className="text-xs font-bold">VISA</span>
<span className="text-xs font-bold">MC</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
