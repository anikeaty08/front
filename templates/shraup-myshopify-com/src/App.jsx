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



        document.addEventListener('DOMContentLoaded', () => {
            const counterElement = document.getElementById('order-counter');
            let baseCount = 1245892;
            
            // Periodically increase the orders counter to make it feel alive
            setInterval(() => {
                // Randomly add 0 to 3 orders
                const randomIncrease = Math.floor(Math.random() * 4);
                if (randomIncrease > 0) {
                    baseCount += randomIncrease;
                    counterElement.innerText = baseCount.toLocaleString();
                }
            }, 3500); // Updates every few seconds
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
<iconify-icon className="text-purple-500 text-2xl" icon="solar:bolt-linear"></iconify-icon>
                ShraUP
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#catalog">Catalog</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#testimonials">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#get-started">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Premium Digital Growth Services
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
                Scale your influence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">real engagement.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                Boost your presence on Instagram, TikTok, and more with high-quality followers and likes. Fast processing, 100% secure, and built for creators and brands who want real results.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)]" href="#catalog">
                    View Catalog
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white text-lg font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center" href="#how-it-works">
                    How it works
                </a>
</div>

<div className="mt-16 pt-10 border-t border-zinc-800/50 flex flex-wrap justify-center gap-8 md:gap-16 text-zinc-500">
<div className="flex items-center gap-2 text-lg">
<iconify-icon className="text-xl text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
                    Safe &amp; Secure
                </div>
<div className="flex items-center gap-2 text-lg">
<iconify-icon className="text-xl text-yellow-500" icon="solar:bolt-linear"></iconify-icon>
                    Instant Activation
                </div>
<div className="flex items-center gap-2 text-lg">
<iconify-icon className="text-xl text-purple-500" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Real Quality
                </div>

<div className="flex items-center gap-2 text-lg bg-zinc-900/80 px-4 py-1.5 rounded-full border border-zinc-800">
<div className="relative flex h-3 w-3 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
</div>
<span className="font-semibold text-white tracking-tight" id="order-counter">1,245,892</span>
<span>Completed Orders</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" id="catalog">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-8 shadow-2xl relative">
<div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
<iconify-icon className="text-purple-400 text-4xl relative z-10" icon="solar:bolt-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Service Catalog</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Choose your target platform to explore our full range of specialized growth services.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-10 relative overflow-hidden hover:border-pink-500/30 transition-all duration-300 group">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-pink-500/10 to-purple-500/5 rounded-full blur-[80px] -z-10 group-hover:from-pink-500/20 transition-all duration-500"></div>
<div className="flex items-center gap-5 mb-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-500 p-[1px] shadow-lg shadow-pink-500/20">
<div className="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-3xl text-pink-400" icon="solar:camera-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-1">Instagram</h3>
<p className="text-zinc-400">Growth &amp; Engagement</p>
</div>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-pink-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Instagram Followers</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-pink-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Instagram Likes</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-pink-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:play-stream-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Reels Views</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-pink-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        View Instagram Packages
                    </button>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-10 relative overflow-hidden hover:border-blue-500/30 transition-all duration-300 group">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-blue-500/10 to-cyan-500/5 rounded-full blur-[80px] -z-10 group-hover:from-blue-500/20 transition-all duration-500"></div>
<div className="flex items-center gap-5 mb-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-blue-500/20">
<div className="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-3xl text-blue-400" icon="solar:music-note-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-1">TikTok</h3>
<p className="text-zinc-400">Viral Distribution</p>
</div>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">TikTok Views</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">TikTok Followers</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500/30 transition-all cursor-pointer group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover/item:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">TikTok Likes</span>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-blue-400 transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        View TikTok Packages
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50 border-t border-zinc-900" id="popular-services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Most Purchased Services</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Our top-rated digital growth packages chosen by thousands of creators every day.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden hover:border-purple-500/50 transition-colors group">
<div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl z-10 shadow-lg tracking-wide uppercase">
                        Best Seller
                    </div>
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-purple-400" icon="solar:camera-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">10,000 Instagram Followers</h3>
<p className="text-zinc-400 text-sm mb-6">High-quality, real-looking profiles to boost your account credibility instantly.</p>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                        $29.99
                    </div>
<button className="w-full py-3 rounded-full bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 group-hover:bg-purple-600 group-hover:border-purple-500">
                        Order Now
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden hover:border-blue-500/50 transition-colors group">
<div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl z-10 shadow-lg tracking-wide uppercase">
                        Trending
                    </div>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">100,000 TikTok Views</h3>
<p className="text-zinc-400 text-sm mb-6">Massive engagement surge to push your video directly to the For You page.</p>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                        $14.99
                    </div>
<button className="w-full py-3 rounded-full bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 group-hover:bg-blue-600 group-hover:border-blue-500">
                        Order Now
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden hover:border-pink-500/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-pink-400" icon="solar:heart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">5,000 Instagram Likes</h3>
<p className="text-zinc-400 text-sm mb-6">Instant distribution of likes across your recent posts for maximum reach.</p>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                        $19.99
                    </div>
<button className="w-full py-3 rounded-full bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 group-hover:bg-pink-600 group-hover:border-pink-500">
                        Order Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Everything you need to grow faster.</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Stop waiting for organic reach. Our premium service gives your profiles the digital boost they need to stand out.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-2xl text-purple-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Real &amp; High-Quality</h3>
<p className="text-lg text-zinc-400">No empty accounts. We activate high-quality followers and likes that look natural and improve your profile's credibility.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-2xl text-blue-400" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Lightning Fast</h3>
<p className="text-lg text-zinc-400">Watch your numbers tick up instantly. Our automated digital system starts processing your order seconds after checkout.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon className="text-2xl text-pink-400" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Multi-Platform</h3>
<p className="text-lg text-zinc-400">Currently supporting Instagram and TikTok with maximum efficiency. More platforms are being added to our ecosystem soon.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">100% Secure</h3>
<p className="text-lg text-zinc-400">We never ask for your password. Our methods comply with platform limits to ensure your account remains completely safe.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group lg:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden relative">
<div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-xs font-medium mb-4">
<iconify-icon className="text-sm text-white" icon="solar:star-fall-linear"></iconify-icon>
                            Premium Value
                        </div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Affordable plans for everyone</h3>
<p className="text-lg text-zinc-400">Whether you are an aspiring creator just starting out or an established business looking to scale, we have custom digital packages designed to fit your specific budget and growth goals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 overflow-hidden" id="platforms">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2">
<div className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-3">Seamless Integration</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        Designed for the platforms that matter most.
                    </h2>
<p className="text-lg text-zinc-400 mb-8">
                        We focus our technology on the networks where growth translates directly into influence and revenue. Select your platform, choose your package, and let our system digitally handle the rest.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-base text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Select your desired digital service (Followers, Likes, Views)
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-base text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Enter your public profile username or post link
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-base text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Watch the engagement process instantly
                        </li>
</ul>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-3 blur-2xl"></div>
<div className="relative bg-zinc-900 border border-zinc-700/50 rounded-2xl p-6 shadow-2xl">
<div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
<div className="w-full h-full bg-zinc-900 rounded-full border-2 border-zinc-900"></div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">@creator_growth</div>
<div className="text-xs text-zinc-500">Public Profile</div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                                Active Order
                            </div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center p-4 bg-zinc-950 rounded-xl border border-zinc-800">
<div className="text-2xl font-semibold tracking-tight text-white">12.4k</div>
<div className="text-xs text-zinc-500 mt-1">Posts</div>
</div>
<div className="text-center p-4 bg-zinc-950 rounded-xl border border-purple-500/30 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-500/5"></div>
<div className="text-2xl font-semibold tracking-tight text-white relative z-10 flex items-center justify-center gap-1">
                                    84.2k
                                    <iconify-icon className="text-base text-purple-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-xs text-purple-400 mt-1 relative z-10">Followers</div>
</div>
<div className="text-center p-4 bg-zinc-950 rounded-xl border border-zinc-800">
<div className="text-2xl font-semibold tracking-tight text-white">1,240</div>
<div className="text-xs text-zinc-500 mt-1">Following</div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-zinc-400">
<span>Activation Progress</span>
<span className="text-purple-400">85% Complete</span>
</div>
<div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
<div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[85%] rounded-full relative">
<div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[2px] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Trusted by creators worldwide.</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Don't just take our word for it. See what our users have to say about their digital growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
<div className="flex items-center gap-1 mb-6 text-purple-500">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-zinc-300 mb-6 line-clamp-4">"I was skeptical at first, but ShraUP provided exactly what they promised. The followers look like real accounts, and my engagement rate actually improved. Processing was almost instant."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">S</div>
<div>
<div className="text-sm font-semibold text-white tracking-tight">Sarah J.</div>
<div className="text-xs text-zinc-500">Lifestyle Creator</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
<div className="flex items-center gap-1 mb-6 text-purple-500">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-zinc-300 mb-6 line-clamp-4">"Best digital service I've used for TikTok so far. The prices are super affordable compared to others, and the secure checkout made me feel safe. Highly recommend for new brands."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">M</div>
<div>
<div className="text-sm font-semibold text-white tracking-tight">Marcus T.</div>
<div className="text-xs text-zinc-500">E-commerce Brand</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
<div className="flex items-center gap-1 mb-6 text-purple-500">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-zinc-700" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-lg text-zinc-300 mb-6 line-clamp-4">"Super fast processing. Ordered 5k likes for a digital campaign and they started rolling in within minutes. Will definitely be using ShraUP again for future launches."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">E</div>
<div>
<div className="text-sm font-semibold text-white tracking-tight">Elena R.</div>
<div className="text-xs text-zinc-500">Marketing Agency</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 pb-32" id="get-started">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-[2.5rem] overflow-hidden border border-purple-500/20 bg-zinc-900 p-10 md:p-16 text-center shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 -z-10"></div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-pink-600/20 via-purple-600/10 to-transparent opacity-60 blur-3xl pointer-events-none -z-10"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Ready to go viral?
                </h2>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                    Join thousands of creators who trust ShraUP to handle their digital growth. Select a package today and see results instantly.
                </p>
<a className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white text-lg font-medium hover:opacity-90 transition-opacity shadow-[0_0_40px_-10px_rgba(219,39,119,0.5)]" href="#catalog">
                    Get Started Now
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:shield-linear"></iconify-icon>
                    No password required. 100% secure checkout.
                </div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
<iconify-icon className="text-purple-500 text-2xl" icon="solar:bolt-linear"></iconify-icon>
                ShraUP
            </div>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Refund Policy</a>
<a className="hover:text-white transition-colors" href="#">Contact Support</a>
</div>
<div className="text-sm text-zinc-600">
                © 2024 ShraUP. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
